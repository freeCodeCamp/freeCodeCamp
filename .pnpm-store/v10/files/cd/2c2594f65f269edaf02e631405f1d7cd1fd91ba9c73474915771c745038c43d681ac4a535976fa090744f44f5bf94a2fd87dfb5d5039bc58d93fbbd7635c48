"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoices = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Invoices = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/invoices' }),
    retrieve: stripeMethod({ method: 'GET', fullPath: '/v1/invoices/{invoice}' }),
    update: stripeMethod({ method: 'POST', fullPath: '/v1/invoices/{invoice}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices',
        methodType: 'list',
    }),
    del: stripeMethod({ method: 'DELETE', fullPath: '/v1/invoices/{invoice}' }),
    addLines: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/add_lines',
    }),
    createPreview: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/create_preview',
    }),
    finalizeInvoice: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/finalize',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/{invoice}/lines',
        methodType: 'list',
    }),
    listUpcomingLines: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/upcoming/lines',
        methodType: 'list',
    }),
    markUncollectible: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/mark_uncollectible',
    }),
    pay: stripeMethod({ method: 'POST', fullPath: '/v1/invoices/{invoice}/pay' }),
    removeLines: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/remove_lines',
    }),
    retrieveUpcoming: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/upcoming',
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/search',
        methodType: 'search',
    }),
    sendInvoice: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/send',
    }),
    updateLines: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/update_lines',
    }),
    updateLineItem: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/lines/{line_item_id}',
    }),
    voidInvoice: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/void',
    }),
});
