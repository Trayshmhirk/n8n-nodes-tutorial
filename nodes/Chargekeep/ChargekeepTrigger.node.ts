import type {
	IDataObject,
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

import { chargekeepApiRequest } from './helper';

export class ChargekeepTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Chargekeep Trigger',
		name: 'chargekeepTrigger',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:chargekeep.png',
		group: ['trigger'],
		version: 1,
		description: 'Handle Chargekeep events via webhooks',
		defaults: {
			name: 'Chargekeep Trigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'chargekeepApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Events',
				name: 'events',
				type: 'options',
				required: true,
				default: 'LeadCreated',
				description: 'The event to listen to',
				options: [
					{
						name: 'Lead Created',
						value: 'LeadCreated',
						description: 'Triggered when a new lead is created',
					},
					{
						name: 'Payment Created',
						value: 'Payment.Created',
						description: 'Triggered when a new payment is created',
					},
					{
						name: 'Subscription Created or Updated',
						value: 'Subscription.CreatedOrUpdated',
						description: 'Triggered when a new subscription is created',
					},
				],
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');

				if (webhookData.webhookId === undefined) {
					// No webhook id is set so no webhook can exist
					return false;
				}

				// Webhook got created before so check if it still exists
				const endpoint = `/api/services/Platform/Event/GetEventExecutions?EventSubscriptionId=${webhookData.webhookId}`;

				try {
					await chargekeepApiRequest.call(this, 'GET', endpoint, {});
				} catch (error) {
					if (
						error.code === '0' ||
						error.message.includes('Event Subscription does not exist or is not accessible')
					) {
						// Webhook does not exist
						delete webhookData.webhookId;
						return false;
					}

					// Some error occured
					throw new NodeApiError(this.getNode(), error as JsonObject);
				}

				// If it did not error then the webhook exists
				return true;
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');

				const event = this.getNodeParameter('events', '') as string;

				const endpoint = '/api/services/Platform/Event/Subscribe';

				const body = {
					targetUrl: webhookUrl,
					eventName: event,
				};

				const responseData = await chargekeepApiRequest.call(this, 'POST', endpoint, body);

				if (responseData.result.id === null || responseData.result === null) {
					// Required data is missing so was not successful
					throw new NodeApiError(this.getNode(), responseData as JsonObject, {
						message: 'Chargekeep webhook creation response did not contain the expected data.',
					});
				}

				const webhookData = this.getWorkflowStaticData('node');
				webhookData.webhookId = responseData.result.id as string;

				return true;
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');

				if (webhookData.webhookId !== undefined) {
					const endpoint = `/api/services/Platform/Event/Unsubscribe?id=${webhookData.webhookId}`;

					try {
						await chargekeepApiRequest.call(this, 'POST', endpoint, {});
					} catch (error) {
						return false;
					}

					// Remove from the static workflow data so that it is clear that no webhooks are registered anymore
					delete webhookData.webhookId;
				}

				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = this.getBodyData();
		const req = this.getRequestObject();

		const events = this.getNodeParameter('events', []) as string[];

		const eventType = bodyData.type as string | undefined;

		if (eventType === undefined || (!events.includes('*') && !events.includes(eventType))) {
			// If not eventType is defined or when one is defined but we are not
			// listening to it do not start the workflow.
			return {};
		}

		return {
			workflowData: [this.helpers.returnJsonArray(req.body as IDataObject)],
		};
	}
}
