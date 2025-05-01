# n8n-nodes-chargekeep

This is an n8n community node. It lets you use ChargeKeep in your n8n workflows.

ChargeKeep is a simple recurring and one-time payments platform that helps you accept payments via Stripe or PayPal without writing code..

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports the following operations:

### Trigger

- Lead Created: Initiates a workflow when a new lead is created in ChargeKeep.
- Payment Created: Initiates a workflow when a new payment is created.
- Subscription Created or Updated: Initiates a workflow when a subscription is created or updated.

### Actions

- Add a contact
- Get a contact details
- Update a contact
- Create an invoice
- Create a product
- Add a subscription

## Credentials

To use this node, you need to set up ChargeKeep API credentials:

1. Visit the following website: [CRM ChargeKeep](https://crm.chargekeep.com/) or the beta website: [Beta ChargeKeep](https://beta.chargekeep.com/). Sign up or Log in to you account.

2. Navigate to API tab to obtain your API key.

3. In n8n:

   - Go to Credentials.
   - Click on New Credential and select the ChargeKeep API base environment url.
   - Enter your API key and save.

## Compatibility

Minimum n8n Version: 1.0.0

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [ChargeKeep Api Documentation](https://beta.chargekeep.com/api/index.html)
