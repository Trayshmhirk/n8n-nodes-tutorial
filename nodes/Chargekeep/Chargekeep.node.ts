// import isEmpty from 'lodash/isEmpty';
import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { contactDescriptions, contactFields } from './descriptions/ContactDescription';
import { invoiceDescriptions, invoiceFields } from './descriptions/InvoiceDescription';
import {
	subscriptionDescriptions,
	subscriptionFields,
} from './descriptions/SubscriptionDescription';
import { productDescriptions, productFields } from './descriptions/ProductDescription';
import { chargekeepApiRequest, mapBillingAddress, mapShippingAddress } from './helper';

export class Chargekeep implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'ChargeKeep',
		name: 'chargekeep',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:chargekeep.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Easy-to-use recurring and one-time payments software for Stripe & PayPal',
		defaults: {
			name: 'Chargekeep',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'chargekeepApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Invoice',
						value: 'invoice',
					},
					{
						name: 'Product',
						value: 'product',
					},
					{
						name: 'Subscription',
						value: 'subscription',
					},
				],
				default: 'contact',
			},

			// Operations will go here

			// CONTACT
			...contactDescriptions,
			...contactFields,

			// INVOICE
			...invoiceDescriptions,
			...invoiceFields,

			// PRODUCT
			...productDescriptions,
			...productFields,

			//SUBSCRIPTION
			...subscriptionDescriptions,
			...subscriptionFields,
		],
	};

	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);

		let responseData;
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				if (resource === 'contact') {
					// *********************************************************************
					//                           CONTACT
					// *********************************************************************

					if (operation === 'create') {
						// ----------------------------------
						//         contact: create
						// ----------------------------------

						const personalInfo = this.getNodeParameter('personalInfo', i) as IDataObject;
						const fullAddress = this.getNodeParameter('fullAddress', i) as IDataObject;
						const businessInfo = this.getNodeParameter('businessInfo', i) as IDataObject;
						const content = this.getNodeParameter('content', i) as IDataObject;
						const trackingInfo = this.getNodeParameter('trackingInfo', i) as IDataObject;

						const body = {
							importType: this.getNodeParameter('importType', i),
							matchExisting: this.getNodeParameter('matchExisting', i),
							contactId: this.getNodeParameter('contactId', i),
							personalInfo: {
								fullName: {
									namePrefix: personalInfo.namePrefix,
									firstName: personalInfo.firstName,
									middleName: personalInfo.middleName,
									lastName: personalInfo.lastName,
									nameSuffix: personalInfo.nameSuffix,
									nickName: personalInfo.nickName,
								},
								dob: personalInfo.dob,
								mobilePhone: personalInfo.mobilePhone,
								homePhone: personalInfo.homePhone,
								ssn: personalInfo.ssn,
								bankCode: personalInfo.bankCode,
								email1: personalInfo.email1,
								email2: personalInfo.email2,
								gender: personalInfo.gender,
								fullAddress: {
									street: fullAddress.street,
									addressLine2: fullAddress.addressLine2,
									city: fullAddress.city,
									stateName: fullAddress.stateName,
									stateId: fullAddress.stateId,
									zip: fullAddress.zip,
									countryName: fullAddress.countryName,
									countryId: fullAddress.countryId,
								},
								webSiteUrl: personalInfo.webSiteUrl,
								linkedInUrl: personalInfo.linkedInUrl,
								photoUrl: personalInfo.photoUrl,
							},
							businessInfo: {
								companyName: businessInfo.companyName,
								jobTitle: businessInfo.jobTitle,
								industry: businessInfo.industry,
								workPhone1: businessInfo.workPhone1,
								workEmail1: businessInfo.workEmail1,
							},
							assignedUser: content.assignedUser,
							followUpDate: content.followUpDate,
							notes: content.notes,
							leadDealAmount: content.leadDealAmount,
							leadSource: trackingInfo.leadSource,
							channelId: trackingInfo.channelId,
							affiliateCode: trackingInfo.affiliateCode,
							refererUrl: trackingInfo.refererUrl,
							entryUrl: trackingInfo.entryUrl,
						} as IDataObject;

						const endpoint = '/api/services/CRM/Import/ImportContact';
						responseData = await chargekeepApiRequest.call(this, 'POST', endpoint, body, {});
					} else if (operation === 'get') {
						// ----------------------------------
						//        contact: get
						// ----------------------------------

						const contactId = this.getNodeParameter('contactId', i);
						const endpoint = `/api/services/CRM/Contact/GetContactData?ContactId=${contactId}`;
						responseData = await chargekeepApiRequest.call(this, 'GET', endpoint, {}, {});
					} else if (operation === 'update') {
						// ----------------------------------
						//        contact: update
						// ----------------------------------

						const additionalField = this.getNodeParameter('additionalField', i) as IDataObject;
						const personalInfo = this.getNodeParameter('personalInfo', i) as IDataObject;
						const homeAddress = this.getNodeParameter('homeAddress', i) as IDataObject;
						const webUrl = this.getNodeParameter('webUrl', i) as IDataObject;
						const customField = this.getNodeParameter('customField', i) as IDataObject;
						const businessInfo = this.getNodeParameter('businessInfo', i) as IDataObject;
						const companyAddress = this.getNodeParameter('companyAddress', i) as IDataObject;
						const companyLinks = this.getNodeParameter('companyLinks', i) as IDataObject;
						const workInfo = this.getNodeParameter('workInfo', i) as IDataObject;
						const workAddress = this.getNodeParameter('workAddress', i) as IDataObject;
						const other = this.getNodeParameter('other', i) as IDataObject;
						const utmParameters = this.getNodeParameter('utmParameters', i) as IDataObject;
						const requestCustomField = this.getNodeParameter(
							'requestCustomField',
							i,
						) as IDataObject;
						const subscription1 = this.getNodeParameter('subscription1', i) as IDataObject;
						const subscription2 = this.getNodeParameter('subscription2', i) as IDataObject;
						const subscription3 = this.getNodeParameter('subscription3', i) as IDataObject;

						const body = {
							importType: this.getNodeParameter('importType', i),
							ignoreInvalidValues: additionalField.ignoreInvalidValues,
							matchExisting: this.getNodeParameter('matchExisting', i),
							overrideLists: additionalField.overrideLists,
							createUser: additionalField.createUser,
							sendWelcomeEmail: additionalField.sendWelcomeEmail,
							contactId: this.getNodeParameter('contactId', i),
							contactXref: additionalField.contactXref,
							userPassword: additionalField.userPassword,

							// personal info
							personalInfo: {
								fullName: {
									namePrefix: personalInfo.namePrefix,
									firstName: personalInfo.firstName,
									middleName: personalInfo.middleName,
									lastName: personalInfo.lastName,
									nameSuffix: personalInfo.nameSuffix,
									nickName: personalInfo.nickName,
								},
								dob: personalInfo.dob,
								mobilePhone: personalInfo.mobilePhone,
								mobilePhoneExt: personalInfo.mobilePhoneExt,
								homePhone: personalInfo.homePhone,
								homePhoneExt: personalInfo.homePhoneExt,
								ssn: personalInfo.ssn,
								bankCode: personalInfo.bankCode,
								email1: personalInfo.email1,
								email2: personalInfo.email2,
								email3: personalInfo.email3,
								preferredToD: personalInfo.preferredToD,
								drivingLicense: personalInfo.drivingLicense,
								drivingLicenseState: personalInfo.drivingLicenseState,
								isActiveMilitaryDuty: personalInfo.isActiveMilitaryDuty,
								gender: personalInfo.gender,
								isUSCitizen: personalInfo.isUSCitizen,
								experience: personalInfo.experience,
								profileSummary: personalInfo.profileSummary,
								affiliateCode: personalInfo.personAffiliateCode,

								// full address
								fullAddress: {
									street: homeAddress.home_street,
									addressLine2: homeAddress.home_addressLine2,
									city: homeAddress.home_city,
									stateName: homeAddress.home_stateName,
									stateId: homeAddress.home_stateId,
									zip: homeAddress.home_zip,
									countryName: homeAddress.home_countryName,
									countryId: homeAddress.home_countryId,
								},

								// websites
								webSiteUrl: webUrl.webSiteUrl,
								facebookUrl: webUrl.facebookUrl,
								linkedInUrl: webUrl.linkedInUrl,
								instagramUrl: webUrl.instagramUrl,
								twitterUrl: webUrl.twitterUrl,
								googlePlusUrl: webUrl.googlePlusUrl,
								angelListUrl: webUrl.angelListUrl,
								zoomUrl: webUrl.zoomUrl,
								photoUrl: webUrl.photoUrl,

								// custom fields
								customFields: {
									customField1: customField.customField1,
									customField2: customField.customField2,
									customField3: customField.customField3,
									customField4: customField.customField4,
									customField5: customField.customField5,
								},
							},

							// business info
							businessInfo: {
								companyName: businessInfo.companyName,
								organizationType: businessInfo.organizationType,
								jobTitle: businessInfo.jobTitle,
								isEmployed: businessInfo.isEmployed,
								employmentStartDate: businessInfo.employmentStartDate,
								employeeCount: businessInfo.employeeCount,
								dateFounded: businessInfo.dateFounded,
								ein: businessInfo.ein,
								annualRevenue: businessInfo.annualRevenue,
								industry: businessInfo.industry,
								companyPhone: businessInfo.companyPhone,
								companyPhoneExt: businessInfo.companyPhoneExt,
								companyFaxNumber: businessInfo.companyFaxNumber,
								companyEmail: businessInfo.companyEmail,
								affiliateCode: businessInfo.companyAffiliateCode,

								// company address
								companyFullAddress: {
									street: companyAddress.company_street,
									addressLine2: companyAddress.company_addressLine2,
									city: companyAddress.company_city,
									stateName: companyAddress.company_stateName,
									stateId: companyAddress.company_stateId,
									zip: companyAddress.company_zip,
									countryName: companyAddress.company_countryName,
									countryId: companyAddress.company_countryId,
								},

								// company websites
								companyWebSiteUrl: companyLinks.companyWebSiteUrl,
								companyFacebookUrl: companyLinks.companyFacebookUrl,
								companyLinkedInUrl: companyLinks.companyLinkedInUrl,
								companyInstagramUrl: companyLinks.companyInstagramUrl,
								companyTwitterUrl: companyLinks.companyTwitterUrl,
								companyGooglePlusUrl: companyLinks.companyGooglePlusUrl,
								companyCrunchbaseUrl: companyLinks.companyCrunchbaseUrl,
								companyBBBUrl: companyLinks.companyBBBUrl,
								companyCalendlyUrl: companyLinks.companyZoomUrl,
								companyZoomUrl: companyLinks.companyCalendlyUrl,
								companyLogoUrl: companyLinks.companyLogoUrl,

								workPhone1: workInfo.workPhone1,
								workPhone1Ext: workInfo.workPhone1Ext,
								workPhone2: workInfo.workPhone2,
								workPhone2Ext: workInfo.workPhone2Ext,
								workEmail1: workInfo.workEmail1,
								workEmail2: workInfo.workEmail2,
								workEmail3: workInfo.workEmail3,
								workFullAddress: {
									street: workAddress.work_street,
									addressLine2: workAddress.work_addressLine2,
									city: workAddress.work_city,
									stateName: workAddress.work_stateName,
									stateId: workAddress.work_stateId,
									zip: workAddress.work_zip,
									countryName: workAddress.work_countryName,
									countryId: workAddress.work_countryId,
								},
							},

							assignedUser: other.assignedUser,
							followUpDate: other.followUpDate,
							notes: other.notes,
							dateCreated: other.dateCreated,
							leadStageName: other.leadStageName,
							leadSource: other.leadSource,
							leadDealAmount: other.leadDealAmount,
							affiliateCode: other.affiliateCode,
							campaignId: other.campaignId,
							channelId: other.channelId,
							gclId: other.gclId,
							refererUrl: other.refererURL,
							entryUrl: other.entryUrl,
							applicantId: other.applicantId,
							applicationId: other.applicationId,
							ipAddress: other.ipAddress,
							userAgent: other.userAgent,
							siteId: other.siteId,
							siteUrl: other.siteUrl,

							// utm parameters
							utmSource: utmParameters.utmSource,
							utmMedium: utmParameters.utmMedium,
							utmCampaign: utmParameters.utmCampaign,
							utmTerm: utmParameters.utmTerm,
							utmContent: utmParameters.utmContent,
							utmKeyword: utmParameters.utmKeyword,
							utmAdGroup: utmParameters.utmAdGroup,
							utmName: utmParameters.utmName,

							// request custom info
							requestCustomInfo: {
								customField1: requestCustomField.requestCustomField1,
								customField2: requestCustomField.requestCustomField2,
								customField3: requestCustomField.requestCustomField3,
								customField4: requestCustomField.requestCustomField4,
								customField5: requestCustomField.requestCustomField5,
							},

							// subscription 1
							subscription1: {
								productCode: subscription1.sub1_productCode,
								paymentPeriodType: subscription1.sub1_paymentPeriodType,
								systemType: subscription1.sub1_systemType,
								code: subscription1.sub1_code,
								name: subscription1.sub1_name,
								level: subscription1.sub1_level,
								startDate: subscription1.sub1_startDate,
								endDate: subscription1.sub1_endDate,
								amount: subscription1.sub1_amount,
							},

							// subscription 2
							subscription2: {
								productCode: subscription2.sub2_productCode,
								paymentPeriodType: subscription2.sub2_paymentPeriodType,
								systemType: subscription2.sub2_systemType,
								code: subscription2.sub2_code,
								name: subscription2.sub2_name,
								level: subscription2.sub2_level,
								startDate: subscription2.sub2_startDate,
								endDate: subscription2.sub2_endDate,
								amount: subscription2.sub2_amount,
							},

							// subscription 3
							subscription3: {
								productCode: subscription3.sub3_productCode,
								paymentPeriodType: subscription3.sub3_paymentPeriodType,
								systemType: subscription3.sub3_systemType,
								code: subscription3.sub3_code,
								name: subscription3.sub3_name,
								level: subscription3.sub3_level,
								startDate: subscription3.sub3_startDate,
								endDate: subscription3.sub3_endDate,
								amount: subscription3.sub3_amount,
							},

							classificationInfo: {
								rating: other.rating,
							},
						} as IDataObject;

						const endpoint = '/api/services/CRM/Import/ImportContact';
						responseData = await chargekeepApiRequest.call(this, 'POST', endpoint, body, {});
					}
				} else if (resource === 'invoice') {
					// *********************************************************************
					//                           INVOICE
					// *********************************************************************

					if (operation === 'create') {
						// ----------------------------------
						//         invoice: create
						// ----------------------------------

						const billingAddress = this.getNodeParameter('billingAddress', i, {}) as IDataObject;
						const shippingAddress = this.getNodeParameter('shippingAddress', i, {}) as IDataObject;

						const billingDetails = mapBillingAddress(billingAddress);
						const shippingDetails = mapShippingAddress(shippingAddress);

						// Retrieve the collections (totals, line, transaction)
						const totals = this.getNodeParameter('totals', i, {}) as IDataObject;
						const line = this.getNodeParameter('line', i, {}) as IDataObject;
						const transaction = this.getNodeParameter('transaction', i, {}) as IDataObject;

						const body = {
							contactId: this.getNodeParameter('contactId', i),
							contactXref: this.getNodeParameter('contactXref', i),
							status: this.getNodeParameter('status', i),
							number: this.getNodeParameter('invoiceNo', i),
							date: this.getNodeParameter('date', i),
							dueDate: this.getNodeParameter('dueDate', i),
							currencyId: this.getNodeParameter('currencyId', i),
							grandTotal: this.getNodeParameter('grandTotal', i),
							discountTotal: totals.discountTotal,
							shippingTotal: totals.shippingTotal,
							taxTotal: totals.taxTotal,
							billingAddress: billingDetails,
							shippingAddress: shippingDetails,
							description: this.getNodeParameter('invoiceDescription', i),
							note: this.getNodeParameter('note', i),
							lines: [
								{
									quantity: this.getNodeParameter('quantity', i),
									rate: this.getNodeParameter('rate', i),
									total: this.getNodeParameter('itemTotal', i),
									commissionableAmount: line.commissionableAmount,
									unitId: this.getNodeParameter('unitId', i),
									productCode: line.productCode,
									description: line.itemDescription,
									sortOrder: this.getNodeParameter('sortOrder', i),
								},
							],
							transactions: [
								{
									date: this.getNodeParameter('transactionDate', i),
									description: transaction.transactionDescription,
									amount: this.getNodeParameter('amount', i),
									gatewayName: transaction.gatewayName,
									gatewayTransactionId: transaction.gatewayTransactionId,
								},
							],
							historicalData: this.getNodeParameter('historicalData', i),
						} as IDataObject;

						const endpoint = '/api/services/CRM/Import/ImportInvoice';
						responseData = await chargekeepApiRequest.call(this, 'POST', endpoint, body, {});
					}
				} else if (resource === 'product') {
					// *********************************************************************
					//                           PRODUCT
					// *********************************************************************

					if (operation === 'create') {
						// ----------------------------------
						//         product: create
						// ----------------------------------

						const body = {
							code: this.getNodeParameter('code', i),
							name: this.getNodeParameter('name', i),
							logoUrl: this.getNodeParameter('logoURL', i),
							description: this.getNodeParameter('description', i),
							descriptionHtml: this.getNodeParameter('descriptionHTML', i),
							groupName: this.getNodeParameter('groupName', i),
							type: this.getNodeParameter('productType', i),
							price: this.getNodeParameter('price', i),
							currencyId: this.getNodeParameter('currencyId', i),
							unit: this.getNodeParameter('unit', i),
							productSubscriptionOptions: [
								{
									frequency: this.getNodeParameter('frequency', i),
									signupFee: this.getNodeParameter('signupFee', i),
									fee: this.getNodeParameter('fee', i),
									trialDayCount: this.getNodeParameter('trialDayCount', i),
									customPeriodCount: this.getNodeParameter('customPeriodCount', i),
									customPeriodType: this.getNodeParameter('customPeriodType', i),
									cycles: this.getNodeParameter('cycles', i),
									gracePeriodDayCount: this.getNodeParameter('gracePeriodDayCount', i),
								},
							],
						} as IDataObject;

						const endpoint = '/api/services/CRM/Import/ImportProduct';
						responseData = await chargekeepApiRequest.call(this, 'POST', endpoint, body, {});
					}
				} else if (resource === 'subscription') {
					// *********************************************************************
					//                           SUBSCRIPTION
					// *********************************************************************

					if (operation === 'create') {
						// ----------------------------------
						//         subscription: create
						// ----------------------------------

						const body = {
							contactId: this.getNodeParameter('contactId', i),
							contactXref: this.getNodeParameter('contactXref', i),
							productId: this.getNodeParameter('productId', i),
							productCode: this.getNodeParameter('productCode', i),
							paymentPeriodType: this.getNodeParameter('paymentPeriodType', i),
							hasRecurringBilling: this.getNodeParameter('hasRecurringBilling', i),
						} as IDataObject;

						const endpoint = '/api/services/CRM/OrderSubscription/Update';
						responseData = await chargekeepApiRequest.call(this, 'PUT', endpoint, body, {});
					}
				}
			} catch (error) {
				if (this.continueOnFail()) {
					const executionErrorData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ error: error.message }),
						{ itemData: { item: i } },
					);
					returnData.push(...executionErrorData);
					continue;
				}

				throw error;
			}

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData as IDataObject[]),
				{ itemData: { item: i } },
			);

			returnData.push(...executionData);
		}

		return [returnData];
	}
}
