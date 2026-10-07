"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quotes = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Quotes = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/quotes' }),
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v1/quotes/{quote}' }),
    update: stripeMethod({ method: 'POST', fullPath: '/v1/quotes/{quote}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes',
        methodType: 'list',
    }),
    accept: stripeMethod({ method: 'POST', fullPath: '/v1/quotes/{quote}/accept' }),
    cancel: stripeMethod({ method: 'POST', fullPath: '/v1/quotes/{quote}/cancel' }),
    finalizeQuote: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}/finalize',
    }),
    listComputedUpfrontLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/computed_upfront_line_items',
        methodType: 'list',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/line_items',
        methodType: 'list',
    }),
    pdf: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/pdf',
        host: 'files.stripe.com',
        streaming: true,
    }),
});
