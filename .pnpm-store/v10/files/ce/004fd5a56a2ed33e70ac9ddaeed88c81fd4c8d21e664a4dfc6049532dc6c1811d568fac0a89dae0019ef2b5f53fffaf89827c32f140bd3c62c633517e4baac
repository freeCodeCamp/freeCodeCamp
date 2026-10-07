// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const EphemeralKeys = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/ephemeral_keys',
        validator: (data, options) => {
            if (!options.headers || !options.headers['Stripe-Version']) {
                throw new Error('Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node');
            }
        },
    }),
    del: stripeMethod({ method: 'DELETE', fullPath: '/v1/ephemeral_keys/{key}' }),
});
