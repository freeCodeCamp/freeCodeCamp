'use strict';

var cacheCommon = require('@algolia/cache-common');
var cacheInMemory = require('@algolia/cache-in-memory');
var clientCommon = require('@algolia/client-common');
var loggerCommon = require('@algolia/logger-common');
var requesterNodeHttp = require('@algolia/requester-node-http');
var transporter = require('@algolia/transporter');
var requesterCommon = require('@algolia/requester-common');

const createRecommendClient = options => {
    const appId = options.appId;
    const auth = clientCommon.createAuth(options.authMode !== undefined ? options.authMode : clientCommon.AuthMode.WithinHeaders, appId, options.apiKey);
    const transporter$1 = transporter.createTransporter({
        hosts: [
            { url: `${appId}-dsn.algolia.net`, accept: transporter.CallEnum.Read },
            { url: `${appId}.algolia.net`, accept: transporter.CallEnum.Write },
        ].concat(clientCommon.shuffle([
            { url: `${appId}-1.algolianet.com` },
            { url: `${appId}-2.algolianet.com` },
            { url: `${appId}-3.algolianet.com` },
        ])),
        ...options,
        headers: {
            ...auth.headers(),
            ...{ 'content-type': 'application/x-www-form-urlencoded' },
            ...options.headers,
        },
        queryParameters: {
            ...auth.queryParameters(),
            ...options.queryParameters,
        },
    });
    const base = {
        transporter: transporter$1,
        appId,
        addAlgoliaAgent(segment, version) {
            transporter$1.userAgent.add({ segment, version });
        },
        clearCache() {
            return Promise.all([
                transporter$1.requestsCache.clear(),
                transporter$1.responsesCache.clear(),
            ]).then(() => undefined);
        },
    };
    return clientCommon.addMethods(base, options.methods);
};

const getRecommendations = base => {
    return (queries, requestOptions) => {
        const requests = queries.map(query => ({
            ...query,
            // The `threshold` param is required by the endpoint to make it easier
            // to provide a default value later, so we default it in the client
            // so that users don't have to provide a value.
            threshold: query.threshold || 0,
        }));
        return base.transporter.read({
            method: requesterCommon.MethodEnum.Post,
            path: '1/indexes/*/recommendations',
            data: {
                requests,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const getFrequentlyBoughtTogether = base => {
    return (queries, requestOptions) => {
        return getRecommendations(base)(queries.map(query => ({
            ...query,
            fallbackParameters: {},
            model: 'bought-together',
        })), requestOptions);
    };
};

const getRelatedProducts = base => {
    return (queries, requestOptions) => {
        return getRecommendations(base)(queries.map(query => ({
            ...query,
            model: 'related-products',
        })), requestOptions);
    };
};

const getTrendingFacets = base => {
    return (queries, requestOptions) => {
        const requests = queries.map(query => ({
            ...query,
            model: 'trending-facets',
            // The `threshold` param is required by the endpoint to make it easier
            // to provide a default value later, so we default it in the client
            // so that users don't have to provide a value.
            threshold: query.threshold || 0,
        }));
        return base.transporter.read({
            method: requesterCommon.MethodEnum.Post,
            path: '1/indexes/*/recommendations',
            data: {
                requests,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const getTrendingItems = base => {
    return (queries, requestOptions) => {
        const requests = queries.map(query => ({
            ...query,
            model: 'trending-items',
            // The `threshold` param is required by the endpoint to make it easier
            // to provide a default value later, so we default it in the client
            // so that users don't have to provide a value.
            threshold: query.threshold || 0,
        }));
        return base.transporter.read({
            method: requesterCommon.MethodEnum.Post,
            path: '1/indexes/*/recommendations',
            data: {
                requests,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const getLookingSimilar = base => {
    return (queries, requestOptions) => {
        return getRecommendations(base)(queries.map(query => ({
            ...query,
            model: 'looking-similar',
        })), requestOptions);
    };
};

const getRecommendedForYou = base => {
    return (queries, requestOptions) => {
        const requests = queries.map(query => ({
            ...query,
            model: 'recommended-for-you',
            threshold: query.threshold || 0,
        }));
        return base.transporter.read({
            method: requesterCommon.MethodEnum.Post,
            path: '1/indexes/*/recommendations',
            data: {
                requests,
            },
            cacheable: true,
        }, requestOptions);
    };
};

function recommend(appId, apiKey, options) {
    const commonOptions = {
        appId,
        apiKey,
        timeouts: {
            connect: 2,
            read: 5,
            write: 30,
        },
        requester: requesterNodeHttp.createNodeHttpRequester(),
        logger: loggerCommon.createNullLogger(),
        responsesCache: cacheCommon.createNullCache(),
        requestsCache: cacheCommon.createNullCache(),
        hostsCache: cacheInMemory.createInMemoryCache(),
        userAgent: transporter.createUserAgent(clientCommon.version)
            .add({ segment: 'Recommend', version: clientCommon.version })
            .add({ segment: 'Node.js', version: process.versions.node }),
    };
    return createRecommendClient({
        ...commonOptions,
        ...options,
        methods: {
            destroy: clientCommon.destroy,
            getFrequentlyBoughtTogether,
            getRecommendations,
            getRelatedProducts,
            getTrendingFacets,
            getTrendingItems,
            getLookingSimilar,
            getRecommendedForYou,
        },
    });
}
/* eslint-disable functional/immutable-data */
recommend.version = clientCommon.version;
recommend.getFrequentlyBoughtTogether = getFrequentlyBoughtTogether;
recommend.getRecommendations = getRecommendations;
recommend.getRelatedProducts = getRelatedProducts;
recommend.getTrendingFacets = getTrendingFacets;
recommend.getTrendingItems = getTrendingItems;
recommend.getLookingSimilar = getLookingSimilar;
recommend.getRecommendedForYou = getRecommendedForYou;

module.exports = recommend;
