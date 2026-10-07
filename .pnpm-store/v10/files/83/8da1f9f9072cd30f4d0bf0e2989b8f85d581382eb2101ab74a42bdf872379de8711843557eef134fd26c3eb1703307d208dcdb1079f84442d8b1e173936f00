"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinks = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.PaymentLinks = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/payment_links' }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links/{payment_link}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_links/{payment_link}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links',
        methodType: 'list',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links/{payment_link}/line_items',
        methodType: 'list',
    }),
});
