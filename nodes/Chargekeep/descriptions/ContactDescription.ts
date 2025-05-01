import type { INodeProperties } from 'n8n-workflow';

export const contactDescriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Creates a new Contact',
				action: 'Add a contact',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a contact details',
				action: 'Get a contact details',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Adds or updates a Contact (extended version)',
				action: 'Update a contact',
			},
		],
		default: 'create',
	},
];

export const contactFields: INodeProperties[] = [
	// ----------------------------------
	//       Contact: Create
	// ----------------------------------
	{
		displayName: 'Contact Type',
		name: 'importType',
		type: 'options',
		required: true,
		default: 'Lead',
		description: 'Full name or business name of the customer to create',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Lead',
				value: 'Lead',
			},
			{
				name: 'Client',
				value: 'Client',
			},
			{
				name: 'Partner',
				value: 'Partner',
			},
		],
	},
	{
		displayName: 'Match Existing Contact',
		name: 'matchExisting',
		type: 'options',
		required: true,
		default: 'false',
		description:
			'If "Yes", will try to find an existing record using Email and Full Name and update it',
		displayOptions: {
			show: {
				resource: ['contact'],
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
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'number',
		default: '',
		description: 'Sperse Contact ID. Will be used for looking a client.',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
	},

	// PERSONAL INFO
	{
		displayName: 'Personal Info',
		name: 'personalInfo',
		type: 'collection',
		placeholder: 'Add Person Info Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Prefix',
				name: 'namePrefix',
				type: 'string',
				default: '',
				description: 'The title used to address the contact',
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'Required if Last Name and Company Name fields are empty',
			},
			{
				displayName: 'Middle Name',
				name: 'middleName',
				type: 'string',
				default: '',
				description: 'Contact middle name',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Required if First Name and Company Name fields are empty',
			},
			{
				displayName: 'Nick Name',
				name: 'nickName',
				type: 'string',
				default: '',
				description: 'Contact nick name',
			},
			{
				displayName: 'Suffix',
				name: 'nameSuffix',
				type: 'string',
				default: '',
				description: 'Additional information about the contact e.g PhD',
			},
			{
				displayName: 'Gender',
				name: 'gender',
				type: 'options',
				default: 'Male',
				options: [
					{
						name: 'Male',
						value: 'Male',
					},
					{
						name: 'Female',
						value: 'Female',
					},
				],
			},
			{
				displayName: 'Date of Birth',
				name: 'dob',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD or MM-DD-YYYY',
			},
			{
				displayName: 'Home Phone',
				name: 'homePhone',
				type: 'string',
				default: '',
				description: 'Contact home phone number',
			},
			{
				displayName: 'Mobile Phone',
				name: 'mobilePhone',
				type: 'string',
				default: '',
				description: 'Contact mobile phone number',
			},
			{
				displayName: 'SSN',
				name: 'ssn',
				type: 'string',
				default: '',
				description: 'Contact social security number',
			},
			{
				displayName: 'Bank Code',
				name: 'bankCode',
				type: 'string',
				default: '',
				description: 'Contact 4-letter personality code',
			},
			{
				displayName: 'Contact Personal Email',
				name: 'email1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Other Email',
				name: 'email2',
				type: 'string',
				default: '',
				description: 'Contact additional email',
			},
			{
				displayName: 'Website',
				name: 'webSiteUrl',
				type: 'string',
				default: '',
				description: 'Contact company website URL',
			},
			{
				displayName: 'LinkedIn',
				name: 'linkedInUrl',
				type: 'string',
				default: '',
				description: 'Contact LinkedIn profile ID',
			},
			{
				displayName: 'Photo URL',
				name: 'photoUrl',
				type: 'string',
				default: '',
				description: 'Contacts person photo URL',
			},
		],
	},

	// FULL ADDRESS
	{
		displayName: 'Full Address',
		name: 'fullAddress',
		type: 'collection',
		placeholder: 'Add Full Address Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Street',
				name: 'street',
				type: 'string',
				default: '',
				description: 'Contact full street address (can include apartment or unit number)',
			},
			{
				displayName: 'Address 2',
				name: 'addressLine2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'Contact city of residence',
			},
			{
				displayName: 'State Name',
				name: 'stateName',
				type: 'string',
				default: '',
				description: 'Contact state of residence',
			},
			{
				displayName: 'State Code',
				name: 'stateId',
				type: 'string',
				default: '',
				description: 'Contact state code',
			},
			{
				displayName: 'Zip Code',
				name: 'zip',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Country Name',
				name: 'countryName',
				type: 'string',
				default: '',
				description: 'Contact country of residence',
			},
			{
				displayName: 'Country Code',
				name: 'countryId',
				type: 'string',
				default: '',
				description: 'Contact country code',
			},
		],
	},

	// BUSINESS INFO
	{
		displayName: 'Business Info',
		name: 'businessInfo',
		type: 'collection',
		placeholder: 'Add Business Info Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Company Name',
				name: 'companyName',
				type: 'string',
				default: '',
				description:
					'Contact company (This field is mandatory if the First Name and Last Name fields are empty)',
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'string',
				default: '',
				description: 'Contact job title',
			},
			{
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
				description: 'Company industry',
			},
			{
				displayName: 'Work Email',
				name: 'workEmail1',
				type: 'string',
				default: '',
				description: 'Contact work email',
			},
			{
				displayName: 'Work Phone',
				name: 'workPhone1',
				type: 'string',
				default: '',
				description: 'Contact work/primary phone number',
			},
		],
	},

	// CONTENT
	{
		displayName: 'Content',
		name: 'content',
		type: 'collection',
		placeholder: 'Add Content Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Professional Experience',
				name: 'experience',
				type: 'string',
				default: '',
				description: 'Contact professional experience',
			},
			{
				displayName: 'Profile Summary',
				name: 'profileSummary',
				type: 'string',
				default: '',
				description: 'Contact profile summaryl',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Additional notes about the contact',
			},
			{
				displayName: 'Follow Up Date',
				name: 'followUpDate',
				type: 'string',
				default: '',
				description:
					'Valid date format YYYY-MM-DD HH:MM:SS. If date is defined then new Follow Up Task will be created for this contact.',
			},
			{
				displayName: 'Assigned User',
				name: 'assignedUser',
				type: 'string',
				default: '',
				description:
					'Preferably, Sperse User Email should be passed as it is unique within Sperse account but User Name can be also passed',
			},
			{
				displayName: 'Deal Amount',
				name: 'leadDealAmount',
				type: 'string',
				default: '',
				description: 'Estimated deal/opportunity amount',
			},
		],
	},

	// TRACKING INFO
	{
		displayName: 'Tracking Info',
		name: 'trackingInfo',
		type: 'collection',
		placeholder: 'Add Tracking Info Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Source Code',
				name: 'leadSource',
				type: 'string',
				default: '',
				description:
					'The first known source the contact used to find your website. You can set this automatically and update manually later.',
			},
			{
				displayName: 'Channel Code',
				name: 'channelId',
				type: 'string',
				default: '',
				description: 'The channel/medium the contact used to find your website',
			},
			{
				displayName: 'Affiliate Code',
				name: 'affiliateCode',
				type: 'string',
				default: '',
				description: 'The affiliate/referer partner through which the contact signed up',
			},
			{
				displayName: 'Referer URL',
				name: 'refererURL',
				type: 'string',
				default: '',
				description: 'The webpage where the contact clicked a link that sent them to your website',
			},
			{
				displayName: 'Entry URL',
				name: 'entryUrl',
				type: 'string',
				default: '',
				description: 'The first page of visit through which the contact visited your website',
			},
		],
	},

	// ----------------------------------
	//          customer: get
	// ----------------------------------
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'number',
		required: true,
		default: '',
		description: 'Enter contact ID',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get'],
			},
		},
	},

	// ----------------------------------
	//         customer: update
	// ----------------------------------
	{
		displayName: 'Contact Type',
		name: 'importType',
		type: 'options',
		required: true,
		default: 'Lead',
		description: 'Full name or business name of the customer to create',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				name: 'Lead',
				value: 'Lead',
			},
			{
				name: 'Client',
				value: 'Client',
			},
			{
				name: 'Partner',
				value: 'Partner',
			},
		],
	},
	{
		displayName: 'Match Existing Contact',
		name: 'matchExisting',
		type: 'options',
		required: true,
		default: 'true',
		description:
			'If "Yes", will try to find an existing record using Email and Full Name and update it',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
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
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		default: '',
		description: 'Sperse Contact ID. Will be used for looking a client.',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
	},

	// Additional Fields
	{
		displayName: 'Additional Field',
		name: 'additionalField',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Ignore Invalid Values',
				name: 'ignoreInvalidValues',
				type: 'options',
				default: 'false',
				description: 'If "Yes", will save the record even if there are some validation errors',
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
			{
				displayName: 'Override Lists',
				name: 'overrideLists',
				type: 'options',
				default: 'false',
				description:
					'If "Yes", will override lists of contact details in update mode instead of merging them - lists, tags, emails, phones, links, addresses, photos',
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
			{
				displayName: 'Create User',
				name: 'createUser',
				type: 'options',
				default: 'false',
				description:
					'If "Yes", then User will be created. Personal email will be used as User Name.',
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
			{
				displayName: 'Send Welcome Email',
				name: 'sendWelcomeEmail',
				type: 'options',
				default: 'false',
				description: 'If "Yes", then Welcome Email will be sent to the newly created user',
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
			{
				displayName: 'Contact XREF',
				name: 'contactXref',
				type: 'string',
				default: '',
				description:
					'This is string external reference that can be passed during creation and then if sent again it will update the record',
			},
			{
				displayName: 'User Password',
				name: 'userPassword',
				type: 'string',
				typeOptions: {
					password: true,
				},
				default: '',
				description: 'If password is not passed then it will be automatically generated',
			},
		],
	},

	// PERSONAL INFO
	{
		displayName: 'Personal Info',
		name: 'personalInfo',
		type: 'collection',
		placeholder: 'Add Person Info Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Prefix',
				name: 'namePrefix',
				type: 'string',
				default: '',
				description: 'The title used to address the contact',
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'Required if Last Name and Company Name fields are empty',
			},
			{
				displayName: 'Middle Name',
				name: 'middleName',
				type: 'string',
				default: '',
				description: 'Contact middle name',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Required if First Name and Company Name fields are empty',
			},
			{
				displayName: 'Nick Name',
				name: 'nickName',
				type: 'string',
				default: '',
				description: 'Contact nick name',
			},
			{
				displayName: 'Suffix',
				name: 'nameSuffix',
				type: 'string',
				default: '',
				description: 'Additional information about the contact e.g PhD',
			},
			{
				displayName: 'Gender',
				name: 'gender',
				type: 'options',
				default: 'Male',
				options: [
					{
						name: 'Male',
						value: 'Male',
					},
					{
						name: 'Female',
						value: 'Female',
					},
				],
			},
			{
				displayName: 'Date of Birth',
				name: 'dob',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD or MM-DD-YYYY',
			},
			{
				displayName: 'Home Phone',
				name: 'homePhone',
				type: 'string',
				default: '',
				description: 'Contact home phone number',
			},
			{
				displayName: 'Home Phone Ext',
				name: 'homePhoneExt',
				type: 'string',
				default: '',
				description: 'Contact home phone number extension',
			},
			{
				displayName: 'Mobile Phone',
				name: 'mobilePhone',
				type: 'string',
				default: '',
				description: 'Contact mobile phone number',
			},
			{
				displayName: 'Mobile Phone Ext',
				name: 'mobilePhoneExt',
				type: 'string',
				default: '',
				description: 'Contact mobile phone number extension',
			},
			{
				displayName: 'SSN',
				name: 'ssn',
				type: 'string',
				default: '',
				description: 'Contact social security number',
			},
			{
				displayName: 'Bank Code',
				name: 'bankCode',
				type: 'string',
				default: '',
				description: 'Contact 4-letter personality code',
			},
			{
				displayName: 'Contact Personal Email',
				name: 'email1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Alternative Personal Email',
				name: 'email2',
				type: 'string',
				default: '',
				description: 'Contact alternative personal email',
			},
			{
				displayName: 'Other Personal Email',
				name: 'email3',
				type: 'string',
				default: '',
				description: 'Contact additional email',
			},
			{
				displayName: 'Preferred Time of Day',
				name: 'preferredToD',
				type: 'options',
				default: 'Morning',
				description: 'Preferred Time of Day to contact with Client',
				options: [
					{
						name: 'Morning',
						value: 'Morning',
					},
					{
						name: 'Afternoon',
						value: 'Afternoon',
					},
					{
						name: 'Evening',
						value: 'Evening',
					},
					{
						name: 'Anytime',
						value: 'Anytime',
					},
				],
			},
			{
				displayName: 'Driving License',
				name: 'drivingLicense',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Driving License State',
				name: 'drivingLicenseState',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Active Military Duty',
				name: 'isActiveMilitaryDuty',
				type: 'options',
				default: 'false',
				description: 'Possible values are: Yes, No. If nothing is chosen that means "Unknown".',
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
			{
				displayName: 'Is US Citizen',
				name: 'isUSCitizen',
				type: 'options',
				default: 'false',
				description: 'Possible values are: Yes, No. If nothing is chosen that means "Unknown".',
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
			{
				displayName: 'Professional Experience',
				name: 'experience',
				type: 'string',
				default: '',
				description: 'Contact professional experience',
			},
			{
				displayName: 'Profile Summary',
				name: 'profileSummary',
				type: 'string',
				default: '',
				description: 'Contact profile summary',
			},
			{
				displayName: 'Person Affiliate Code',
				name: 'personAffiliateCode',
				type: 'string',
				default: '',
				description:
					'Affiliate Code is used for the current person detection as a source of new leads. Alphanumeric characters, underscore and hyphen are allowed.',
			},
		],
	},

	// FULL HOME ADDRESS
	{
		displayName: 'Home Address',
		name: 'homeAddress',
		type: 'collection',
		placeholder: 'Add Home Address Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Home Street',
				name: 'home_street',
				type: 'string',
				default: '',
				description: 'Contact full street address (can include apartment or unit number)',
			},
			{
				displayName: 'Home Address 2',
				name: 'home_addressLine2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Home City',
				name: 'home_city',
				type: 'string',
				default: '',
				description: 'Contact city of residence',
			},
			{
				displayName: 'Home State Name',
				name: 'home_stateName',
				type: 'string',
				default: '',
				description: 'Contact state of residence',
			},
			{
				displayName: 'Home State Code',
				name: 'home_stateId',
				type: 'string',
				default: '',
				description: 'Contact state code',
			},
			{
				displayName: 'Home Zip Code',
				name: 'home_zip',
				type: 'string',
				default: '',
				description: 'Contact zip/postal code',
			},
			{
				displayName: 'Home Country Name',
				name: 'home_countryName',
				type: 'string',
				default: '',
				description: 'Contact country of residence',
			},
			{
				displayName: 'Home Country Code',
				name: 'home_countryId',
				type: 'string',
				default: '',
				description: 'Contact country code',
			},
		],
	},

	// WEB URL
	{
		displayName: 'Web Url',
		name: 'webUrl',
		type: 'collection',
		placeholder: 'Web Url Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Website',
				name: 'webSiteUrl',
				type: 'string',
				default: '',
				description: 'Contact company website URL',
			},
			{
				displayName: 'Facebook',
				name: 'facebookUrl',
				type: 'string',
				default: '',
				description: 'Contact Facebook profile ID',
			},
			{
				displayName: 'LinkedIn',
				name: 'linkedInUrl',
				type: 'string',
				default: '',
				description: 'Contact LinkedIn profile ID',
			},
			{
				displayName: 'Instagram',
				name: 'instagramUrl',
				type: 'string',
				default: '',
				description: 'Contact Instagram profile ID',
			},
			{
				displayName: 'Twitter',
				name: 'twitterUrl',
				type: 'string',
				default: '',
				description: 'Contact Twitter profile ID',
			},
			{
				displayName: 'Google Reviews',
				name: 'googlePlusUrl',
				type: 'string',
				default: '',
				description: 'Contact Google reviews',
			},
			{
				displayName: 'AngelList',
				name: 'angelListUrl',
				type: 'string',
				default: '',
				description: 'Contact AngelList profile ID',
			},
			{
				displayName: 'Zoom',
				name: 'zoomUrl',
				type: 'string',
				default: '',
				description: 'Contact Zoom ID',
			},
			{
				displayName: 'Photo URL',
				name: 'photoUrl',
				type: 'string',
				default: '',
				description: 'Contacts person photo URL',
			},
		],
	},

	// CUSTOM FIELD
	{
		displayName: 'Custom Field',
		name: 'customField',
		type: 'collection',
		placeholder: 'Add Custom Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Custom Field 1',
				name: 'customField1',
				type: 'string',
				default: '',
				description: 'Additional custom data for the contact record',
			},
			{
				displayName: 'Custom Field 2',
				name: 'customField2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Field 3',
				name: 'customField3',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Field 4',
				name: 'customField4',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Field 5',
				name: 'customField5',
				type: 'string',
				default: '',
			},
		],
	},

	// BUSINESS INFO
	{
		displayName: 'Business Info',
		name: 'businessInfo',
		type: 'collection',
		placeholder: 'Add Business Info Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Company Name',
				name: 'companyName',
				type: 'string',
				default: '',
				description:
					'Contact Company (This field is mandatory if the First Name and Last Name fields are empty)',
			},
			{
				displayName: 'Organization Type',
				name: 'organizationType',
				type: 'options',
				default: 'LLP',
				options: [
					{
						name: 'Inc',
						value: 'Inc',
					},
					{
						name: 'LLC',
						value: 'LLC',
					},
					{
						name: 'LLLP',
						value: 'LLLP',
					},
					{
						name: 'LLP',
						value: 'LLP',
					},

					{
						name: 'LP',
						value: 'LP',
					},
					{
						name: 'Other',
						value: 'Other',
					},
					{
						name: 'Partnership',
						value: 'Partnership',
					},

					{
						name: 'Sole Proprietership',
						value: 'Sole Proprietership',
					},
				],
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'string',
				default: '',
				description: 'Contact job title',
			},
			{
				displayName: 'Is Employed',
				name: 'isEmployed',
				type: 'options',
				default: 'false',
				description: 'Pass "Yes" if the client is employed in this Organization',
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
			{
				displayName: 'Employment Start Date',
				name: 'employmentStartDate',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD or MM-DD-YYYY',
			},
			{
				displayName: 'Employee Count',
				name: 'employeeCount',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Date Founded',
				name: 'dateFounded',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD or MM-DD-YYYY',
			},
			{
				displayName: 'EIN',
				name: 'ein',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Annual Revenue',
				name: 'annualRevenue',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
				description: 'Company industry',
			},
			{
				displayName: 'Company Phone',
				name: 'companyPhone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Phone Extention',
				name: 'companyPhoneExt',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Fax Number',
				name: 'companyFaxNumber',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Email',
				name: 'companyEmail',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Affiliate Code',
				name: 'companyAffiliateCode',
				type: 'string',
				default: '',
			},
		],
	},

	// COMPANY FULL ADDRESS
	{
		displayName: 'Company Address',
		name: 'companyAddress',
		type: 'collection',
		placeholder: 'Add Company Address Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Company Street',
				name: 'company_street',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Address 2',
				name: 'company_addressLine2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company City',
				name: 'company_city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company State Name',
				name: 'company_stateName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company State Code',
				name: 'company_stateId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Zip Code',
				name: 'company_zip',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Country Name',
				name: 'company_countryName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Country Code',
				name: 'company_countryId',
				type: 'string',
				default: '',
			},
		],
	},

	// COMPANY LINKS
	{
		displayName: 'Company Links',
		name: 'companyLinks',
		type: 'collection',
		placeholder: 'Add Company Links Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Company Website',
				name: 'companyWebSiteUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Facebook',
				name: 'companyFacebookUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company LinkedIn',
				name: 'companyLinkedInUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Instagram',
				name: 'companyInstagramUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Twitter',
				name: 'companyTwitterUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Google Reviews',
				name: 'companyGooglePlusUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Crunchbase',
				name: 'companyCrunchbaseUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company BBB URL',
				name: 'companyBBBUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Zoom',
				name: 'companyZoomUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Calendly',
				name: 'companyCalendlyUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Logo URL',
				name: 'companyLogoUrl',
				type: 'string',
				default: '',
			},
		],
	},

	// WORK INFO
	{
		displayName: 'Work Info',
		name: 'workInfo',
		type: 'collection',
		placeholder: 'Add Work Info Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Work Phone',
				name: 'workPhone1',
				type: 'string',
				default: '',
				description: 'Contact work phone number',
			},
			{
				displayName: 'Work Phone Ext',
				name: 'workPhone1Ext',
				type: 'string',
				default: '',
				description: 'Contact work phone number extension',
			},
			{
				displayName: 'Work Phone 2',
				name: 'workPhone2',
				type: 'string',
				default: '',
				description: 'Contact alternative work phone number',
			},
			{
				displayName: 'Work Phone 2 Ext',
				name: 'workPhone2Ext',
				type: 'string',
				default: '',
				description: 'Contact alternative work phone number extension',
			},
			{
				displayName: 'Work Email',
				name: 'workEmail1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Alternative Work Email',
				name: 'workEmail2',
				type: 'string',
				default: '',
				description: 'Contact alternative work email',
			},
			{
				displayName: 'Other Work Email',
				name: 'workEmail3',
				type: 'string',
				default: '',
				description: 'Contact other work email',
			},
		],
	},

	// WORK FULL ADDRESS
	{
		displayName: 'Work Address',
		name: 'workAddress',
		type: 'collection',
		placeholder: 'Add Work Address Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Work Street',
				name: 'work_street',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Work Address 2',
				name: 'work_addressLine2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Work City',
				name: 'work_city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Work State Name',
				name: 'work_stateName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Work State Code',
				name: 'work_stateId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Work Zip Code',
				name: 'work_zip',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Work Country Name',
				name: 'work_countryName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Work Country Code',
				name: 'work_countryId',
				type: 'string',
				default: '',
			},
		],
	},

	// OTHERS
	{
		displayName: 'Other Field',
		name: 'other',
		type: 'collection',
		placeholder: 'Add Other Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Assigned User',
				name: 'assignedUser',
				type: 'string',
				default: '',
				description:
					'Preferably, Sperse User Email should be passed as it is unique within Sperse account but User Name can be also passed',
			},
			{
				displayName: 'Follow Up Date',
				name: 'followUpDate',
				type: 'string',
				default: '',
				description:
					'Valid date format YYYY-MM-DD HH:MM:SS. If date is defined then new Follow Up Task will be created for this contact.',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Additional notes about the contact',
			},
			{
				displayName: 'Date Created',
				name: 'dateCreated',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD HH:MM:SS',
			},
			{
				displayName: 'Lead Stage Name',
				name: 'leadStageName',
				type: 'string',
				default: '',
				description: 'The first page of visit through which the contact visited your website',
			},
			{
				displayName: 'Lead Source Code',
				name: 'leadSource',
				type: 'string',
				default: '',
				description:
					'The first known source the contact used to find your website. You can set this automatically and update manually later.',
			},
			{
				displayName: 'Lead Deal Amount',
				name: 'leadDealAmount',
				type: 'string',
				default: '',
				description: 'Estimated deal/opportunity amount',
			},
			{
				displayName: 'Affiliate Code',
				name: 'affiliateCode',
				type: 'string',
				default: '',
				description: 'The affiliate/referer partner through which the contact signed up',
			},
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Channel Code',
				name: 'channelId',
				type: 'string',
				default: '',
				description: 'The channel/medium the contact used to find your website',
			},
			{
				displayName: 'Google Click ID',
				name: 'gclId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Referer URL',
				name: 'refererURL',
				type: 'string',
				default: '',
				description: 'The webpage where the contact clicked a link that sent them to your website',
			},
			{
				displayName: 'Entry URL',
				name: 'entryUrl',
				type: 'string',
				default: '',
				description: 'The first page of visit through which the contact visited your website',
			},
			{
				displayName: 'Applicant ID',
				name: 'applicantId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'IP Address',
				name: 'ipAddress',
				type: 'string',
				default: '',
			},
			{
				displayName: 'User Agent',
				name: 'userAgent',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Site ID',
				name: 'siteId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Site URL',
				name: 'siteUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Application ID',
				name: 'applicationId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Rating',
				name: 'rating',
				type: 'string',
				default: '',
				description: 'This is the static array from 1 to 10',
			},
		],
	},

	// UTM PARAMETERS
	{
		displayName: 'UTM Parameters Field',
		name: 'utmParameters',
		type: 'collection',
		placeholder: 'Add UTM Parameters Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'UTM Source',
				name: 'utmSource',
				type: 'string',
				default: '',
			},
			{
				displayName: 'UTM Medium',
				name: 'utmMedium"',
				type: 'string',
				default: '',
			},
			{
				displayName: 'UTM Campaign',
				name: 'utmCampaign',
				type: 'string',
				default: '',
			},
			{
				displayName: 'UTM Term',
				name: 'utmTerm',
				type: 'string',
				default: '',
			},
			{
				displayName: 'UTM Content',
				name: 'utmContent',
				type: 'string',
				default: '',
			},
			{
				displayName: 'UTM Keyword',
				name: 'utmKeyword',
				type: 'string',
				default: '',
			},
			{
				displayName: 'UTM AdGroup',
				name: 'utmAdGroup',
				type: 'string',
				default: '',
			},
			{
				displayName: 'UTM Name',
				name: 'utmName',
				type: 'string',
				default: '',
			},
		],
	},

	// REQUEST CUSTOM FIELDS
	{
		displayName: 'Request Custom Field',
		name: 'requestCustomField',
		type: 'collection',
		placeholder: 'Add Request Custom Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Request Custom Field 1',
				name: 'requestCustomField1',
				type: 'string',
				default: '',
				description: 'Additional custom data for the contact record',
			},
			{
				displayName: 'Request Custom Field 2',
				name: 'requestCustomField2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Request Custom Field 3',
				name: 'requestCustomField3',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Request Custom Field 4',
				name: 'requestCustomField4',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Request Custom Field 5',
				name: 'requestCustomField5',
				type: 'string',
				default: '',
			},
		],
	},

	// SUBSCRIPTION 1
	{
		displayName: 'Subscription 1 Field',
		name: 'subscription1',
		type: 'collection',
		placeholder: 'Add Subscription 1 Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Product Code',
				name: 'sub1_productCode',
				type: 'string',
				default: '',
				description:
					'Product Code from the Sperse CRM. Either Product Code and Payment Period Type or System Type and Code are required fields within Subscription 1.',
			},
			{
				displayName: 'Product Payment Period Type',
				name: 'sub1_paymentPeriodType',
				type: 'options',
				default: 'Monthly',
				description: 'The chosen Period Type has to be set for the Product on Sperse side',
				options: [
					{
						name: 'Annual',
						value: 'Annual',
					},
					{
						name: 'LifeTime',
						value: 'LifeTime',
					},
					{
						name: 'Monthly',
						value: 'Monthly',
					},
				],
			},
			{
				displayName: 'System Type',
				name: 'sub1_systemType',
				type: 'string',
				default: '',
				description:
					'Either Product Code and Payment Period Type or System Type and Code are required fields within Subscription 1',
			},
			{
				displayName: 'Code',
				name: 'sub1_code',
				type: 'string',
				default: '',
				description:
					'Code of subscription service from the Sperse CRM. Either Product Code and Payment Period Type or System Type and Code are required fields within Subscription 1.',
			},
			{
				displayName: 'Name',
				name: 'sub1_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Level',
				name: 'sub1_level',
				type: 'string',
				default: '',
				description: 'Code of subscription service level from the Sperse CRM',
			},
			{
				displayName: 'Start Date',
				name: 'sub1_startDate',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD HH:MM:SS',
			},
			{
				displayName: 'End Date',
				name: 'sub1_endDate',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD HH:MM:SS',
			},
			{
				displayName: 'Amount',
				name: 'sub1_amount',
				type: 'string',
				default: '',
			},
		],
	},

	// SUBSCRIPTION 2
	{
		displayName: 'Subscription 2 Field',
		name: 'subscription2',
		type: 'collection',
		placeholder: 'Add Subscription 2 Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Product Code',
				name: 'sub2_productCode',
				type: 'string',
				default: '',
				description:
					'Product Code from the Sperse CRM. Either Product Code and Payment Period Type or System Type and Code are required fields within Subscription 2.',
			},
			{
				displayName: 'Product Payment Period Type',
				name: 'sub2_paymentPeriodType',
				type: 'options',
				default: 'Monthly',
				description: 'The chosen Period Type has to be set for the Product on Sperse side',
				options: [
					{
						name: 'Annual',
						value: 'Annual',
					},
					{
						name: 'LifeTime',
						value: 'LifeTime',
					},
					{
						name: 'Monthly',
						value: 'Monthly',
					},
				],
			},
			{
				displayName: 'System Type',
				name: 'sub2_systemType',
				type: 'string',
				default: '',
				description:
					'Either Product Code and Payment Period Type or System Type and Code are required fields within Subscription 2',
			},
			{
				displayName: 'Code',
				name: 'sub2_code',
				type: 'string',
				default: '',
				description:
					'Code of subscription service from the Sperse CRM. Either Product Code and Payment Period Type or System Type and Code are required fields within Subscription 2.',
			},
			{
				displayName: 'Name',
				name: 'sub2_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Level',
				name: 'sub2_level',
				type: 'string',
				default: '',
				description: 'Code of subscription service level from the Sperse CRM',
			},
			{
				displayName: 'Start Date',
				name: 'sub2_startDate',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD HH:MM:SS',
			},
			{
				displayName: 'End Date',
				name: 'sub2_endDate',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD HH:MM:SS',
			},
			{
				displayName: 'Amount',
				name: 'sub2_amount',
				type: 'string',
				default: '',
			},
		],
	},

	// SUBSCRIPTION 3
	{
		displayName: 'Subscription 3 Field',
		name: 'subscription3',
		type: 'collection',
		placeholder: 'Add Subscription 3 Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Product Code',
				name: 'sub3_productCode',
				type: 'string',
				default: '',
				description:
					'Product Code from the Sperse CRM. Either Product Code and Payment Period Type or System Type and Code are required fields within Subscription 3.',
			},
			{
				displayName: 'Product Payment Period Type',
				name: 'sub3_paymentPeriodType',
				type: 'options',
				default: 'Monthly',
				description: 'The chosen Period Type has to be set for the Product on Sperse side',
				options: [
					{
						name: 'Annual',
						value: 'Annual',
					},
					{
						name: 'LifeTime',
						value: 'LifeTime',
					},
					{
						name: 'Monthly',
						value: 'Monthly',
					},
				],
			},
			{
				displayName: 'System Type',
				name: 'sub3_systemType',
				type: 'string',
				default: '',
				description:
					'Either Product Code and Payment Period Type or System Type and Code are required fields within Subscription 3',
			},
			{
				displayName: 'Code',
				name: 'sub3_code',
				type: 'string',
				default: '',
				description:
					'Code of subscription service from the Sperse CRM. Either Product Code and Payment Period Type or System Type and Code are required fields within Subscription 3.',
			},
			{
				displayName: 'Name',
				name: 'sub3_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Level',
				name: 'sub3_level',
				type: 'string',
				default: '',
				description: 'Code of subscription service level from the Sperse CRM',
			},
			{
				displayName: 'Start Date',
				name: 'sub3_startDate',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD HH:MM:SS',
			},
			{
				displayName: 'End Date',
				name: 'sub3_endDate',
				type: 'string',
				default: '',
				description: 'Valid date format YYYY-MM-DD HH:MM:SS',
			},
			{
				displayName: 'Amount',
				name: 'sub3_amount',
				type: 'string',
				default: '',
			},
		],
	},
];
