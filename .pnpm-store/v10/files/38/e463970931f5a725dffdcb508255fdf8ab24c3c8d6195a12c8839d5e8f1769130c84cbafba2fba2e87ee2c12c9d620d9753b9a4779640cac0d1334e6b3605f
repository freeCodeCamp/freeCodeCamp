import { createAuth, AuthMode, addMethods, encode } from '@algolia/client-common';
import { createTransporter } from '@algolia/transporter';
import { MethodEnum } from '@algolia/requester-common';

const createAnalyticsClient = options => {
    const region = options.region || 'us';
    const auth = createAuth(AuthMode.WithinHeaders, options.appId, options.apiKey);
    const transporter = createTransporter({
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
    return addMethods({ appId, transporter }, options.methods);
};

const addABTest = (base) => {
    return (abTest, requestOptions) => {
        return base.transporter.write({
            method: MethodEnum.Post,
            path: '2/abtests',
            data: abTest,
        }, requestOptions);
    };
};

const deleteABTest = (base) => {
    return (abTestID, requestOptions) => {
        return base.transporter.write({
            method: MethodEnum.Delete,
            path: encode('2/abtests/%s', abTestID),
        }, requestOptions);
    };
};

const getABTest = (base) => {
    return (abTestID, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: encode('2/abtests/%s', abTestID),
        }, requestOptions);
    };
};

const getABTests = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: '2/abtests',
        }, requestOptions);
    };
};

const stopABTest = (base) => {
    return (abTestID, requestOptions) => {
        return base.transporter.write({
            method: MethodEnum.Post,
            path: encode('2/abtests/%s/stop', abTestID),
        }, requestOptions);
    };
};

export { addABTest, createAnalyticsClient, deleteABTest, getABTest, getABTests, stopABTest };
