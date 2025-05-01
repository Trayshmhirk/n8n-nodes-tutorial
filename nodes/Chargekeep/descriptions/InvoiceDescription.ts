import type { INodeProperties } from 'n8n-workflow';

export const invoiceDescriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Creates a new invoice in the CRM',
				action: 'Create an invoice',
			},
		],
		default: 'create',
	},
];

export const invoiceFields: INodeProperties[] = [
	// ----------------------------------
	//       Invoice: Create
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
				resource: ['invoice'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'External Contact ID',
		name: 'contactXref',
		type: 'string',
		default: '',
		description: 'External Contact Reference (ID) . Will be used for looking a client.',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		required: true,
		default: 'Draft',
		description: 'Full name or business name of the customer to create',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Draft',
				value: 'Draft',
			},
			{
				name: 'Final',
				value: 'Final',
			},
			{
				name: 'Paid',
				value: 'Paid',
			},
			{
				name: 'Sent',
				value: 'Sent',
			},
		],
	},
	{
		displayName: 'Invoice Number',
		name: 'invoiceNo',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: '',
	},
	{
		displayName: 'Date of the Invoice',
		name: 'date',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Should be like this: 2024-06-11T11:11:41Z',
	},
	{
		displayName: 'Due Date of the Invoice',
		name: 'dueDate',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Should be like this: 2024-06-11T11:11:41Z',
	},
	{
		displayName: 'Currency ID',
		name: 'currencyId',
		type: 'options',
		required: true,
		default: 'USD',
		displayOptions: {
			show: {
				resource: ['invoice'],
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
		displayName: 'Grand Total',
		name: 'grandTotal',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		description: 'Add 0 as default if no data is passed',
	},
	{
		displayName: 'Totals',
		name: 'totals',
		type: 'collection',
		placeholder: 'Add Totals Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Discount Total',
				name: 'discountTotal',
				type: 'number',
				default: '',
			},
			{
				displayName: 'Shipping Total',
				name: 'shippingTotal',
				type: 'number',
				default: '',
			},
			{
				displayName: 'Tax Total',
				name: 'taxTotal',
				type: 'number',
				default: '',
			},
		],
	},

	// BILLING ADDRESS
	{
		displayName: 'Billing Address',
		name: 'billingAddress',
		type: 'collection',
		placeholder: 'Add Billing Address Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Billing Company',
				name: 'bCompany',
				type: 'string',
				default: '',
			},
			{
				displayName: 'First Name',
				name: 'bFirstName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Last Name',
				name: 'bLastName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone',
				name: 'bPhone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email',
				name: 'bEmail',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Country ID',
				name: 'bCountryId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'State ID',
				name: 'bStateId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'State Name',
				name: 'bStateName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'City',
				name: 'bCity',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Zip',
				name: 'bZip',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Billing Address 1',
				name: 'bAddress1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Billing Address 2',
				name: 'bAddress2',
				type: 'string',
				default: '',
			},
		],
	},

	// SHIPPING ADDRESS
	{
		displayName: 'Shipping Address',
		name: 'shippingAddress',
		type: 'collection',
		placeholder: 'Add Shipping Address Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Shipping Company',
				name: 'sCompany',
				type: 'string',
				default: '',
			},
			{
				displayName: 'First Name',
				name: 'sFirstName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Last Name',
				name: 'sLastName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone',
				name: 'sPhone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email',
				name: 'sEmail',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Country ID',
				name: 'sCountryId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'State ID',
				name: 'sStateId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'State Name',
				name: 'sStateName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'City',
				name: 'sCity',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Zip',
				name: 'sZip',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Shipping Address 1',
				name: 'sAddress1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Shipping Address 2',
				name: 'sAddress2',
				type: 'string',
				default: '',
			},
		],
	},

	// NOTES
	{
		displayName: 'Invoice Description',
		name: 'invoiceDescription',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Invoice Note',
		name: 'note',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
	},

	// LINE
	{
		displayName: 'Quantity',
		name: 'quantity',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Rate',
		name: 'rate',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Unit ID',
		name: 'unitId',
		type: 'options',
		required: true,
		default: 'Unit',
		displayOptions: {
			show: {
				resource: ['invoice'],
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
				name: 'Zone',
				value: 'Zone',
			},
		],
	},
	{
		displayName: 'Total Item Price',
		name: 'itemTotal',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		description: 'Add 0 as default if no data is passed',
	},
	{
		displayName: 'Sort Order',
		name: 'sortOrder',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		description: 'Add 0 as default if no data is passed',
	},
	{
		displayName: 'Additional Line Field',
		name: 'line',
		type: 'collection',
		placeholder: 'Add Line Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Commissionable Amount',
				name: 'commissionableAmount',
				type: 'number',
				default: '',
			},
			{
				displayName: 'Product Code',
				name: 'productCode',
				type: 'string',
				default: '',
				description: 'Product Code. We will look up the product.',
			},
			{
				displayName: 'Description',
				name: 'itemDescription',
				type: 'string',
				default: '',
			},
		],
	},

	// TRANSACTION
	{
		displayName: 'Transaction Date',
		name: 'transactionDate',
		type: 'string',
		required: true,
		default: '',
		description: 'Should be like this: 2024-06-11T11:11:41Z',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Historical Data',
		name: 'historicalData',
		type: 'options',
		required: true,
		default: 'true',
		description: 'Pass true if this is not actual transaction. Should be False by default.',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'True',
				value: 'true',
			},
			{
				name: 'False',
				value: 'false',
			},
		],
	},
	{
		displayName: 'Additional Transaction Field',
		name: 'transaction',
		type: 'collection',
		placeholder: 'Add Transaction Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Transaction Description',
				name: 'transactionDescription',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Gateway Name',
				name: 'gatewayName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Gateway Transaction ID',
				name: 'gatewayTransactionId',
				type: 'string',
				default: '',
			},
		],
	},
];
