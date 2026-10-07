"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Transactions = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/transactions/{transaction}',
    }),
    createFromCalculation: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/transactions/create_from_calculation',
    }),
    createReversal: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/transactions/create_reversal',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/transactions/{transaction}/line_items',
        methodType: 'list',
    }),
});
