"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Readers = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Readers = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/terminal/readers' }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/readers/{reader}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/readers',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/readers/{reader}',
    }),
    cancelAction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/cancel_action',
    }),
    processPaymentIntent: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/process_payment_intent',
    }),
    processSetupIntent: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/process_setup_intent',
    }),
    refundPayment: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/refund_payment',
    }),
    setReaderDisplay: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/set_reader_display',
    }),
});
