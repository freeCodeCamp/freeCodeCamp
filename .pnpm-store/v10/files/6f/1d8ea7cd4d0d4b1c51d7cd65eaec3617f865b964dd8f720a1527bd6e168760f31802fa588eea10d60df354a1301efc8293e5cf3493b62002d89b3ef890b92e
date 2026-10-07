"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntents = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.PaymentIntents = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/payment_intents' }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents/{intent}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents',
        methodType: 'list',
    }),
    applyCustomerBalance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/apply_customer_balance',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/cancel',
    }),
    capture: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/capture',
    }),
    confirm: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/confirm',
    }),
    incrementAuthorization: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/increment_authorization',
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents/search',
        methodType: 'search',
    }),
    verifyMicrodeposits: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/verify_microdeposits',
    }),
});
