"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationFees = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ApplicationFees = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees',
        methodType: 'list',
    }),
    createRefund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/application_fees/{id}/refunds',
    }),
    listRefunds: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{id}/refunds',
        methodType: 'list',
    }),
    retrieveRefund: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{fee}/refunds/{id}',
    }),
    updateRefund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/application_fees/{fee}/refunds/{id}',
    }),
});
