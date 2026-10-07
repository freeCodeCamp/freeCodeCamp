"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundPayments = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.OutboundPayments = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_payments',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_payments/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_payments',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_payments/{id}/cancel',
    }),
});
