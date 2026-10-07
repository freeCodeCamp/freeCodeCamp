"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditNotes = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.CreditNotes = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/credit_notes' }),
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v1/credit_notes/{id}' }),
    update: stripeMethod({ method: 'POST', fullPath: '/v1/credit_notes/{id}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes',
        methodType: 'list',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/{credit_note}/lines',
        methodType: 'list',
    }),
    listPreviewLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/preview/lines',
        methodType: 'list',
    }),
    preview: stripeMethod({ method: 'GET', fullPath: '/v1/credit_notes/preview' }),
    voidCreditNote: stripeMethod({
        method: 'POST',
        fullPath: '/v1/credit_notes/{id}/void',
    }),
});
