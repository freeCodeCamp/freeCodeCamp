"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const multipart_js_1 = require("../multipart.js");
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Files = StripeResource_js_1.StripeResource.extend({
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
    requestDataProcessor: multipart_js_1.multipartRequestDataProcessor,
});
