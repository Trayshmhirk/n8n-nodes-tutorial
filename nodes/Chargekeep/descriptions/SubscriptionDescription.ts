import type { INodeProperties } from 'n8n-workflow';

export const subscriptionDescriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['subscription'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Creates a new subscription',
				action: 'Add a subscription',
			},
		],
		default: 'create',
	},
];

export const subscriptionFields: INodeProperties[] = [
	// ----------------------------------
	//       Subscription: Create
	// ----------------------------------
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'number',
		required: true,
		default: '',
		description: 'Sperse Contact ID. Will be used for looking a client.',
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'External Contact ID',
		name: 'contactXref',
		type: 'string',
		default: '',
		description: 'ContactXref have to be specified and correct to look up the correct contact',
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Product Code',
		name: 'productCode',
		type: 'string',
		required: true,
		default: '',
		description:
			'Product Code (Unique product identifier). ProductCode have to be specified and correct to look up the correct product.',
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Payment Period Type',
		name: 'paymentPeriodType',
		type: 'options',
		required: true,
		default: 'Monthly',
		description: 'The chosen Period Type has to be set for the Product on Sperse side',
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Monthly',
				value: 'Monthly',
			},
			{
				name: 'Annual',
				value: 'Annual',
			},
			{
				name: 'LifeTime',
				value: 'LifeTime',
			},
		],
	},
	{
		displayName: 'Is It Recurring Billing',
		name: 'hasRecurringBilling',
		type: 'options',
		required: true,
		default: 'false',
		description: 'The chosen Period Type has to be set for the Product on Sperse side',
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Yes',
				value: 'true',
			},
			{
				name: 'No',
				value: 'false',
			},
		],
	},
];
