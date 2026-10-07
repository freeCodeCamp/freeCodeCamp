'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var clientCommon = require('@algolia/client-common');
var transporter = require('@algolia/transporter');
var requesterCommon = require('@algolia/requester-common');

const createPersonalizationClient = options => {
    const region = options.region || 'us';
    const auth = clientCommon.createAuth(clientCommon.AuthMode.WithinHeaders, options.appId, options.apiKey);
    const transporter$1 = transporter.createTransporter({
        hosts: [{ url: `personalization.${region}.algolia.com` }],
        ...options,
        headers: {
            ...auth.headers(),
            ...{ 'content-type': 'application/json' },
            ...options.headers,
        },
        queryParameters: {
            ...auth.queryParameters(),
            ...options.queryParameters,
        },
    });
    return clientCommon.addMethods({ appId: options.appId, transporter: transporter$1 }, options.methods);
};

const getPersonalizationStrategy = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: requesterCommon.MethodEnum.Get,
            path: '1/strategies/personalization',
        }, requestOptions);
    };
};

const setPersonalizationStrategy = (base) => {
    return (personalizationStrategy, requestOptions) => {
        return base.transporter.write({
            method: requesterCommon.MethodEnum.Post,
            path: '1/strategies/personalization',
            data: personalizationStrategy,
        }, requestOptions);
    };
};

exports.createPersonalizationClient = createPersonalizationClient;
exports.getPersonalizationStrategy = getPersonalizationStrategy;
exports.setPersonalizationStrategy = setPersonalizationStrategy;
