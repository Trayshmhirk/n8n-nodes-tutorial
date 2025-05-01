import type { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class ChargekeepApi implements ICredentialType {
	name = 'chargekeepApi';

	displayName = 'ChargeKeep API';

	documentationUrl = 'https://beta.chargekeep.com/api/index.html';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'options',
			default: 'https://crm.chargekeep.com',
			description: 'Select the Base URL for Chargekeep API',
			options: [
				{
					name: 'ChargeKeep Live (crm.chargekeep.com)',
					value: 'https://crm.chargekeep.com',
				},
				{
					name: 'ChargeKeep Beta (beta.chargekeep.com)',
					value: 'https://beta.chargekeep.com',
				},
			],
		},
		{
			displayName: 'Secret API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: `
				Follow these instructions to get your Chargekeep API Key:

				1. Visit the following website: https://crm.chargekeep.com/ or the beta website: https://beta.chargekeep.com
				2. Once on the website, locate and click on the admin to obtain your chargekeep API Key.
			`,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'api-key': '={{$credentials.apiKey}}',
			},
		},
	};
}
