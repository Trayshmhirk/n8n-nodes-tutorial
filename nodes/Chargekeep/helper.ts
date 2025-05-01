import type {
	IExecuteFunctions,
	IHookFunctions,
	IDataObject,
	ILoadOptionsFunctions,
	IHttpRequestMethods,
	IRequestOptions,
} from 'n8n-workflow';

export async function chargekeepApiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject,
	query?: IDataObject,
) {
	const credentials = await this.getCredentials('chargekeepApi');

	const options = {
		method,
		body: body,
		qs: query,
		url: `${credentials.baseUrl}${endpoint}`,
		json: true,
	} satisfies IRequestOptions;

	if (options.qs && Object.keys(options.qs).length === 0) {
		delete options.qs;
	}

	return await this.helpers.requestWithAuthentication.call(this, 'chargekeepApi', options);
}

export function mapBillingAddress(billing: IDataObject): IDataObject {
	return {
		countryId: billing.bCountryId,
		stateId: billing.bStateId,
		stateName: billing.bStateName,
		city: billing.bCity,
		zip: billing.bZip,
		address1: billing.bAddress1,
		address2: billing.bAddress2,
		firstName: billing.bFirstName,
		lastName: billing.bLastName,
		company: billing.bCompany,
		email: billing.bEmail,
		phone: billing.bPhone,
	};
}

export function mapShippingAddress(shipping: IDataObject): IDataObject {
	return {
		countryId: shipping.sCountryId,
		stateId: shipping.sStateId,
		stateName: shipping.sStateName,
		city: shipping.sCity,
		zip: shipping.sZip,
		address1: shipping.sAddress1,
		address2: shipping.sAddress2,
		firstName: shipping.sFirstName,
		lastName: shipping.sLastName,
		company: shipping.sCompany,
		email: shipping.sEmail,
		phone: shipping.sPhone,
	};
}
