"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alerts = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Alerts = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/billing/alerts' }),
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v1/billing/alerts/{id}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/alerts',
        methodType: 'list',
    }),
    activate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts/{id}/activate',
    }),
    archive: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts/{id}/archive',
    }),
    deactivate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts/{id}/deactivate',
    }),
});
