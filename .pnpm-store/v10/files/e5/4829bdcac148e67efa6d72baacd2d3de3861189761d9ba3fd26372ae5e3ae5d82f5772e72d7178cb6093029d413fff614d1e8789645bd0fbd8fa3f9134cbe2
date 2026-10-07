"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prices = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Prices = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/prices' }),
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v1/prices/{price}' }),
    update: stripeMethod({ method: 'POST', fullPath: '/v1/prices/{price}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/prices',
        methodType: 'list',
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/prices/search',
        methodType: 'search',
    }),
});
