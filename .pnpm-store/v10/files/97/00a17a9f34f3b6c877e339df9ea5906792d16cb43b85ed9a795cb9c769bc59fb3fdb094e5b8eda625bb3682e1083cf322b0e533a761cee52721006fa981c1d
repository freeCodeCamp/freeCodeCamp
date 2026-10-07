"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
// Since path can either be `account` or `accounts`, support both through stripeMethod path
exports.Accounts = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({ method: 'POST', fullPath: '/v1/accounts' }),
    retrieve(id, ...args) {
        // No longer allow an api key to be passed as the first string to this function due to ambiguity between
        // old account ids and api keys. To request the account for an api key, send null as the id
        if (typeof id === 'string') {
            return stripeMethod({
                method: 'GET',
                fullPath: '/v1/accounts/{id}',
            }).apply(this, [id, ...args]);
        }
        else {
            if (id === null || id === undefined) {
                // Remove id as stripeMethod would complain of unexpected argument
                [].shift.apply([id, ...args]);
            }
            return stripeMethod({
                method: 'GET',
                fullPath: '/v1/account',
            }).apply(this, [id, ...args]);
        }
    },
    update: stripeMethod({ method: 'POST', fullPath: '/v1/accounts/{account}' }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts',
        methodType: 'list',
    }),
    del: stripeMethod({ method: 'DELETE', fullPath: '/v1/accounts/{account}' }),
    createExternalAccount: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/external_accounts',
    }),
    createLoginLink: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/login_links',
    }),
    createPerson: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/persons',
    }),
    deleteExternalAccount: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}',
    }),
    deletePerson: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}/persons/{person}',
    }),
    listCapabilities: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/capabilities',
        methodType: 'list',
    }),
    listExternalAccounts: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/external_accounts',
        methodType: 'list',
    }),
    listPersons: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/persons',
        methodType: 'list',
    }),
    reject: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/reject',
    }),
    retrieveCurrent: stripeMethod({ method: 'GET', fullPath: '/v1/account' }),
    retrieveCapability: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/capabilities/{capability}',
    }),
    retrieveExternalAccount: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}',
    }),
    retrievePerson: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/persons/{person}',
    }),
    updateCapability: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/capabilities/{capability}',
    }),
    updateExternalAccount: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}',
    }),
    updatePerson: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/persons/{person}',
    }),
});
