// File generated from our OpenAPI spec
import { multipartRequestDataProcessor } from '../multipart.js';
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Files = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/files',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        host: 'files.stripe.com',
    }),
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v1/files/{file}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/files',
        methodType: 'list',
    }),
    requestDataProcessor: multipartRequestDataProcessor,
});
