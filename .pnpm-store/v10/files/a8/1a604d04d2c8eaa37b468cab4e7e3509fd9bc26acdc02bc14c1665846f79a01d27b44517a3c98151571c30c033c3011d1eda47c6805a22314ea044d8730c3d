"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorizations = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Authorizations = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/authorizations/{authorization}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/authorizations',
        methodType: 'list',
    }),
    approve: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}/approve',
    }),
    decline: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}/decline',
    }),
});
