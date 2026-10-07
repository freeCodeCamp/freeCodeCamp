"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Accounts = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts/{account}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts',
        methodType: 'list',
    }),
    disconnect: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/disconnect',
    }),
    listOwners: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts/{account}/owners',
        methodType: 'list',
    }),
    refresh: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/refresh',
    }),
    subscribe: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/subscribe',
    }),
    unsubscribe: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/unsubscribe',
    }),
});
