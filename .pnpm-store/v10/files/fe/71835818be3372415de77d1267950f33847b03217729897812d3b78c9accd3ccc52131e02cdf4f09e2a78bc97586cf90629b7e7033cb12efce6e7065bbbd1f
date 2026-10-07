"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disputes = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Disputes = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v1/disputes/{dispute}' }),
    update: stripeMethod({ method: 'POST', fullPath: '/v1/disputes/{dispute}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/disputes',
        methodType: 'list',
    }),
    close: stripeMethod({
        method: 'POST',
        fullPath: '/v1/disputes/{dispute}/close',
    }),
});
