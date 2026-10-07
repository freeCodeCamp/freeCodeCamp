import { createAuth, AuthMode, addMethods } from '@algolia/client-common';
import { createTransporter } from '@algolia/transporter';
import { MethodEnum } from '@algolia/requester-common';

const createPersonalizationClient = options => {
    const region = options.region || 'us';
    const auth = createAuth(AuthMode.WithinHeaders, options.appId, options.apiKey);
    const transporter = createTransporter({
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
    return addMethods({ appId: options.appId, transporter }, options.methods);
};

const getPersonalizationStrategy = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: '1/strategies/personalization',
        }, requestOptions);
    };
};

const setPersonalizationStrategy = (base) => {
    return (personalizationStrategy, requestOptions) => {
        return base.transporter.write({
            method: MethodEnum.Post,
            path: '1/strategies/personalization',
            data: personalizationStrategy,
        }, requestOptions);
    };
};

export { createPersonalizationClient, getPersonalizationStrategy, setPersonalizationStrategy };
