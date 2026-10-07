"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Orders = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/climate/orders' }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/orders/{order}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/climate/orders/{order}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/orders',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/climate/orders/{order}/cancel',
    }),
});
