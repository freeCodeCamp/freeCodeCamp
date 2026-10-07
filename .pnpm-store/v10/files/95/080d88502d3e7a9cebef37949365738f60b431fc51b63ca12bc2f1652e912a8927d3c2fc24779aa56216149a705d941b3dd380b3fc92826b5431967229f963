'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var clientCommon = require('@algolia/client-common');
var transporter = require('@algolia/transporter');
var requesterCommon = require('@algolia/requester-common');

const createAnalyticsClient = options => {
    const region = options.region || 'us';
    const auth = clientCommon.createAuth(clientCommon.AuthMode.WithinHeaders, options.appId, options.apiKey);
    const transporter$1 = transporter.createTransporter({
        hosts: [{ url: `analytics.${region}.algolia.com` }],
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
    const appId = options.appId;
    return clientCommon.addMethods({ appId, transporter: transporter$1 }, options.methods);
};

const addABTest = (base) => {
    return (abTest, requestOptions) => {
        return base.transporter.write({
            method: requesterCommon.MethodEnum.Post,
            path: '2/abtests',
            data: abTest,
        }, requestOptions);
    };
};

const deleteABTest = (base) => {
    return (abTestID, requestOptions) => {
        return base.transporter.write({
            method: requesterCommon.MethodEnum.Delete,
            path: clientCommon.encode('2/abtests/%s', abTestID),
        }, requestOptions);
    };
};

const getABTest = (base) => {
    return (abTestID, requestOptions) => {
        return base.transporter.read({
            method: requesterCommon.MethodEnum.Get,
            path: clientCommon.encode('2/abtests/%s', abTestID),
        }, requestOptions);
    };
};

const getABTests = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: requesterCommon.MethodEnum.Get,
            path: '2/abtests',
        }, requestOptions);
    };
};

const stopABTest = (base) => {
    return (abTestID, requestOptions) => {
        return base.transporter.write({
            method: requesterCommon.MethodEnum.Post,
            path: clientCommon.encode('2/abtests/%s/stop', abTestID),
        }, requestOptions);
    };
};

exports.addABTest = addABTest;
exports.createAnalyticsClient = createAnalyticsClient;
exports.deleteABTest = deleteABTest;
exports.getABTest = getABTest;
exports.getABTests = getABTests;
exports.stopABTest = stopABTest;
