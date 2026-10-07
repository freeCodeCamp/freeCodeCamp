"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfers = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Transfers = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/transfers' }),
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v1/transfers/{transfer}' }),
    update: stripeMethod({ method: 'POST', fullPath: '/v1/transfers/{transfer}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers',
        methodType: 'list',
    }),
    createReversal: stripeMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{id}/reversals',
    }),
    listReversals: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{id}/reversals',
        methodType: 'list',
    }),
    retrieveReversal: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{transfer}/reversals/{id}',
    }),
    updateReversal: stripeMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{transfer}/reversals/{id}',
    }),
});
