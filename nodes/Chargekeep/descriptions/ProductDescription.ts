import type { INodeProperties } from 'n8n-workflow';

export const productDescriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['product'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Creates a new product in the CRM',
				action: 'Create a product',
			},
		],
		default: 'create',
	},
];

export const productFields: INodeProperties[] = [
	// ----------------------------------
	//       Product: Create
	// ----------------------------------
	{
		displayName: 'Product Type',
		name: 'productType',
		type: 'options',
		required: true,
		default: 'General',
		description: 'The chosen Period Type has to be set for the Product on Sperse side',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'General',
				value: 'General',
			},
			{
				name: 'Event',
				value: 'Event',
			},
			{
				name: 'Subscription',
				value: 'Subscription',
			},
			{
				name: 'Digital',
				value: 'Digital',
			},
		],
	},
	{
		displayName: 'Product Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'SKU',
		name: 'code',
		type: 'string',
		required: true,
		default: '',
		description: 'Sku is the product code',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Description HTML',
		name: 'descriptionHTML',
		type: 'string',
		default: '',
		description: 'Javascript and media tags are not allowed',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Logo Url',
		name: 'logoURL',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Group Name',
		name: 'groupName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		default: '',
		description: 'Required for General, Digital and Event Product Type',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Currency ID',
		name: 'currencyId',
		type: 'options',
		required: true,
		default: 'USD',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'AUD',
				value: 'AUD',
			},
			{
				name: 'CAD',
				value: 'CAD',
			},
			{
				name: 'CHF',
				value: 'CHF',
			},
			{
				name: 'CNY',
				value: 'CNY',
			},
			{
				name: 'EUR',
				value: 'EUR',
			},
			{
				name: 'GBP',
				value: 'GBP',
			},
			{
				name: 'IND',
				value: 'IND',
			},
			{
				name: 'JPY',
				value: 'JPY',
			},
			{
				name: 'NZD',
				value: 'NZD',
			},
			{
				name: 'SEK',
				value: 'SEK',
			},
			{
				name: 'USD',
				value: 'USD',
			},
		],
	},
	{
		displayName: 'Unit',
		name: 'unit',
		type: 'options',
		required: true,
		default: 'Unit',
		description: 'Required for General and Digital Product Type',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Custom',
				value: 'Custom',
			},
			{
				name: 'Day',
				value: 'Day',
			},
			{
				name: 'Feet',
				value: 'Feet',
			},
			{
				name: 'Hour',
				value: 'Hour',
			},
			{
				name: 'Kilogram',
				value: 'Kilogram',
			},
			{
				name: 'Month',
				value: 'Month',
			},
			{
				name: 'Package',
				value: 'Package',
			},
			{
				name: 'Piece',
				value: 'Piece',
			},
			{
				name: 'Pound',
				value: 'Pound',
			},
			{
				name: 'Unit',
				value: 'Unit',
			},
			{
				name: 'Year',
				value: 'Year',
			},
			{
				name: 'Zone',
				value: 'Zone',
			},
		],
	},
	{
		displayName: 'Payment Cycle',
		name: 'frequency',
		type: 'options',
		required: true,
		default: 'Monthly',
		description: 'Required for General and Digital Product Type',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Annual',
				value: 'Annual',
			},
			{
				name: 'Custom',
				value: 'Custom',
			},
			{
				name: 'LifeTime',
				value: 'LifeTime',
			},
			{
				name: 'Monthly',
				value: 'Monthly',
			},
			{
				name: 'OneTime',
				value: 'OneTime',
			},
		],
	},
	{
		displayName: 'Subscription Fee',
		name: 'fee',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'No of Cycles',
		name: 'cycles',
		type: 'number',
		default: '',
		description: 'Required for all except LifeTime or OneTime plan',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Signup Fee',
		name: 'signupFee',
		type: 'number',
		default: '',
		description: 'Required for all except LifeTime or OneTime plan',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Custom Period Type',
		name: 'customPeriodType',
		type: 'options',
		required: true,
		default: 'Months',
		description: 'Required for Custom or OneTime Plan',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Days',
				value: 'Days',
			},
			{
				name: 'Months',
				value: 'Months',
			},
			{
				name: 'Weeks',
				value: 'Weeks',
			},
			{
				name: 'Years',
				value: 'Years',
			},
		],
	},
	{
		displayName: 'Custom No of Period',
		name: 'customPeriodCount',
		type: 'number',
		default: '',
		description: 'Required for Custom or OneTime Plan',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Trial Day Count',
		name: 'trialDayCount',
		type: 'number',
		default: '',
		description: 'Required for OneTime plan',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Grace Period Count',
		name: 'gracePeriodDayCount',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['create'],
			},
		},
	},
];
