"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Products = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/products' }),
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v1/products/{id}' }),
    update: stripeMethod({ method: 'POST', fullPath: '/v1/products/{id}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products',
        methodType: 'list',
    }),
    del: stripeMethod({ method: 'DELETE', fullPath: '/v1/products/{id}' }),
    createFeature: stripeMethod({
        method: 'POST',
        fullPath: '/v1/products/{product}/features',
    }),
    deleteFeature: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/products/{product}/features/{id}',
    }),
    listFeatures: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/{product}/features',
        methodType: 'list',
    }),
    retrieveFeature: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/{product}/features/{id}',
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/search',
        methodType: 'search',
    }),
});
