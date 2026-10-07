"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethods = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.PaymentMethods = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/payment_methods' }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_methods/{payment_method}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_methods',
        methodType: 'list',
    }),
    attach: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}/attach',
    }),
    detach: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}/detach',
    }),
});
