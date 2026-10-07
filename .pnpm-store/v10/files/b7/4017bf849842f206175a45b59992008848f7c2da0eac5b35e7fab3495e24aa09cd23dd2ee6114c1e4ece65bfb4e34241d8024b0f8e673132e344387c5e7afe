"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topups = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Topups = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/topups' }),
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v1/topups/{topup}' }),
    update: stripeMethod({ method: 'POST', fullPath: '/v1/topups/{topup}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/topups',
        methodType: 'list',
    }),
    cancel: stripeMethod({ method: 'POST', fullPath: '/v1/topups/{topup}/cancel' }),
});
