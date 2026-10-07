'use strict';

var cacheCommon = require('@algolia/cache-common');
var cacheInMemory = require('@algolia/cache-in-memory');
var clientAnalytics = require('@algolia/client-analytics');
var clientCommon = require('@algolia/client-common');
var clientPersonalization = require('@algolia/client-personalization');
var clientSearch = require('@algolia/client-search');
var loggerCommon = require('@algolia/logger-common');
var recommend = require('@algolia/recommend');
var requesterNodeHttp = require('@algolia/requester-node-http');
var transporter = require('@algolia/transporter');
var requesterCommon = require('@algolia/requester-common');

function createIngestionClient(options) {
    if (!options || !options.transformation || !options.transformation.region) {
        throw transformationConfigurationError('`region` must be provided when leveraging the transformation pipeline');
    }
    if (options.transformation.region !== 'eu' && options.transformation.region !== 'us') {
        throw transformationConfigurationError('`region` is required and must be one of the following: eu, us');
    }
    const appId = options.appId;
    const auth = clientCommon.createAuth(clientCommon.AuthMode.WithinHeaders, appId, options.apiKey);
    const transporter$1 = transporter.createTransporter({
        hosts: [
            {
                url: `data.${options.transformation.region}.algolia.com`,
                accept: transporter.CallEnum.ReadWrite,
                protocol: 'https',
            },
        ],
        ...options,
        headers: {
            ...auth.headers(),
            ...{ 'content-type': 'text/plain' },
            ...options.headers,
        },
        queryParameters: {
            ...auth.queryParameters(),
            ...options.queryParameters,
        },
    });
    return {
        transporter: transporter$1,
        appId,
        addAlgoliaAgent(segment, version) {
            transporter$1.userAgent.add({ segment, version });
            transporter$1.userAgent.add({ segment: 'Ingestion', version });
            transporter$1.userAgent.add({ segment: 'Ingestion via Algoliasearch' });
        },
        clearCache() {
            return Promise.all([
                transporter$1.requestsCache.clear(),
                transporter$1.responsesCache.clear(),
            ]).then(() => undefined);
        },
        push({ indexName, pushTaskPayload, watch }, requestOptions) {
            if (!indexName) {
                throw transformationConfigurationError('Parameter `indexName` is required when calling `push`.');
            }
            if (!pushTaskPayload) {
                throw transformationConfigurationError('Parameter `pushTaskPayload` is required when calling `push`.');
            }
            if (!pushTaskPayload.action) {
                throw transformationConfigurationError('Parameter `pushTaskPayload.action` is required when calling `push`.');
            }
            if (!pushTaskPayload.records) {
                throw transformationConfigurationError('Parameter `pushTaskPayload.records` is required when calling `push`.');
            }
            const opts = requestOptions || { queryParameters: {} };
            return transporter$1.write({
                method: requesterCommon.MethodEnum.Post,
                path: clientCommon.encode('1/push/%s', indexName),
                data: pushTaskPayload,
            }, {
                ...opts,
                queryParameters: {
                    ...opts.queryParameters,
                    watch: watch !== undefined,
                },
            });
        },
    };
}
function saveObjectsWithTransformation(indexName, client) {
    return (objects, requestOptions) => {
        if (!client) {
            throw transformationConfigurationError('`options.transformation.region` must be provided at client instantiation before calling this method.');
        }
        const { autoGenerateObjectIDIfNotExist, watch, ...rest } = requestOptions || {};
        const action = autoGenerateObjectIDIfNotExist
            ? clientSearch.BatchActionEnum.AddObject
            : clientSearch.BatchActionEnum.UpdateObject;
        /* eslint functional/immutable-data: "off" */
        return client.push({
            indexName,
            pushTaskPayload: { action, records: objects },
            watch,
        }, rest);
    };
}
function partialUpdateObjectsWithTransformation(indexName, client) {
    return (objects, requestOptions) => {
        if (!client) {
            throw transformationConfigurationError('`options.transformation.region` must be provided at client instantiation before calling this method.');
        }
        const { createIfNotExists, watch, ...rest } = requestOptions || {};
        const action = createIfNotExists
            ? clientSearch.BatchActionEnum.PartialUpdateObject
            : clientSearch.BatchActionEnum.PartialUpdateObjectNoCreate;
        /* eslint functional/immutable-data: "off" */
        return client.push({
            indexName,
            pushTaskPayload: { action, records: objects },
            watch,
        }, rest);
    };
}
function transformationConfigurationError(message) {
    return {
        name: 'TransformationConfigurationError',
        message,
    };
}

function algoliasearch(appId, apiKey, options) {
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
        userAgent: transporter.createUserAgent(clientCommon.version).add({
            segment: 'Node.js',
            version: process.versions.node,
        }),
    };
    const searchClientOptions = { ...commonOptions, ...options };
    const initPersonalization = () => (clientOptions) => {
        return clientPersonalization.createPersonalizationClient({
            ...commonOptions,
            ...clientOptions,
            methods: {
                getPersonalizationStrategy: clientPersonalization.getPersonalizationStrategy,
                setPersonalizationStrategy: clientPersonalization.setPersonalizationStrategy,
            },
        });
    };
    /* eslint functional/no-let: "off" */
    let ingestionTransporter;
    if (options && options.transformation) {
        if (!options.transformation.region) {
            throw transformationConfigurationError('`region` must be provided when leveraging the transformation pipeline');
        }
        ingestionTransporter = createIngestionClient({ ...options, ...commonOptions });
    }
    return clientSearch.createSearchClient({
        ...searchClientOptions,
        methods: {
            search: clientSearch.multipleQueries,
            searchForFacetValues: clientSearch.multipleSearchForFacetValues,
            multipleBatch: clientSearch.multipleBatch,
            multipleGetObjects: clientSearch.multipleGetObjects,
            multipleQueries: clientSearch.multipleQueries,
            copyIndex: clientSearch.copyIndex,
            copySettings: clientSearch.copySettings,
            copyRules: clientSearch.copyRules,
            copySynonyms: clientSearch.copySynonyms,
            moveIndex: clientSearch.moveIndex,
            listIndices: clientSearch.listIndices,
            getLogs: clientSearch.getLogs,
            listClusters: clientSearch.listClusters,
            multipleSearchForFacetValues: clientSearch.multipleSearchForFacetValues,
            getApiKey: clientSearch.getApiKey,
            addApiKey: clientSearch.addApiKey,
            listApiKeys: clientSearch.listApiKeys,
            updateApiKey: clientSearch.updateApiKey,
            deleteApiKey: clientSearch.deleteApiKey,
            restoreApiKey: clientSearch.restoreApiKey,
            assignUserID: clientSearch.assignUserID,
            assignUserIDs: clientSearch.assignUserIDs,
            getUserID: clientSearch.getUserID,
            searchUserIDs: clientSearch.searchUserIDs,
            listUserIDs: clientSearch.listUserIDs,
            getTopUserIDs: clientSearch.getTopUserIDs,
            removeUserID: clientSearch.removeUserID,
            hasPendingMappings: clientSearch.hasPendingMappings,
            generateSecuredApiKey: clientSearch.generateSecuredApiKey,
            getSecuredApiKeyRemainingValidity: clientSearch.getSecuredApiKeyRemainingValidity,
            destroy: clientCommon.destroy,
            clearDictionaryEntries: clientSearch.clearDictionaryEntries,
            deleteDictionaryEntries: clientSearch.deleteDictionaryEntries,
            getDictionarySettings: clientSearch.getDictionarySettings,
            getAppTask: clientSearch.getAppTask,
            replaceDictionaryEntries: clientSearch.replaceDictionaryEntries,
            saveDictionaryEntries: clientSearch.saveDictionaryEntries,
            searchDictionaryEntries: clientSearch.searchDictionaryEntries,
            setDictionarySettings: clientSearch.setDictionarySettings,
            waitAppTask: clientSearch.waitAppTask,
            customRequest: clientSearch.customRequest,
            initIndex: base => (indexName) => {
                return {
                    ...clientSearch.initIndex(base)(indexName, {
                        methods: {
                            batch: clientSearch.batch,
                            delete: clientSearch.deleteIndex,
                            findAnswers: clientSearch.findAnswers,
                            getObject: clientSearch.getObject,
                            getObjects: clientSearch.getObjects,
                            saveObject: clientSearch.saveObject,
                            saveObjects: clientSearch.saveObjects,
                            search: clientSearch.search,
                            searchForFacetValues: clientSearch.searchForFacetValues,
                            waitTask: clientSearch.waitTask,
                            setSettings: clientSearch.setSettings,
                            getSettings: clientSearch.getSettings,
                            partialUpdateObject: clientSearch.partialUpdateObject,
                            partialUpdateObjects: clientSearch.partialUpdateObjects,
                            deleteObject: clientSearch.deleteObject,
                            deleteObjects: clientSearch.deleteObjects,
                            deleteBy: clientSearch.deleteBy,
                            clearObjects: clientSearch.clearObjects,
                            browseObjects: clientSearch.browseObjects,
                            getObjectPosition: clientSearch.getObjectPosition,
                            findObject: clientSearch.findObject,
                            exists: clientSearch.exists,
                            saveSynonym: clientSearch.saveSynonym,
                            saveSynonyms: clientSearch.saveSynonyms,
                            getSynonym: clientSearch.getSynonym,
                            searchSynonyms: clientSearch.searchSynonyms,
                            browseSynonyms: clientSearch.browseSynonyms,
                            deleteSynonym: clientSearch.deleteSynonym,
                            clearSynonyms: clientSearch.clearSynonyms,
                            replaceAllObjects: clientSearch.replaceAllObjects,
                            replaceAllSynonyms: clientSearch.replaceAllSynonyms,
                            searchRules: clientSearch.searchRules,
                            getRule: clientSearch.getRule,
                            deleteRule: clientSearch.deleteRule,
                            saveRule: clientSearch.saveRule,
                            saveRules: clientSearch.saveRules,
                            replaceAllRules: clientSearch.replaceAllRules,
                            browseRules: clientSearch.browseRules,
                            clearRules: clientSearch.clearRules,
                        },
                    }),
                    saveObjectsWithTransformation: saveObjectsWithTransformation(indexName, ingestionTransporter),
                    partialUpdateObjectsWithTransformation: partialUpdateObjectsWithTransformation(indexName, ingestionTransporter),
                };
            },
            initAnalytics: () => (clientOptions) => {
                return clientAnalytics.createAnalyticsClient({
                    ...commonOptions,
                    ...clientOptions,
                    methods: {
                        addABTest: clientAnalytics.addABTest,
                        getABTest: clientAnalytics.getABTest,
                        getABTests: clientAnalytics.getABTests,
                        stopABTest: clientAnalytics.stopABTest,
                        deleteABTest: clientAnalytics.deleteABTest,
                    },
                });
            },
            initPersonalization,
            initRecommendation: () => (clientOptions) => {
                searchClientOptions.logger.info('The `initRecommendation` method is deprecated. Use `initPersonalization` instead.');
                return initPersonalization()(clientOptions);
            },
            getRecommendations: recommend.getRecommendations,
            getFrequentlyBoughtTogether: recommend.getFrequentlyBoughtTogether,
            getLookingSimilar: recommend.getLookingSimilar,
            getRecommendedForYou: recommend.getRecommendedForYou,
            getRelatedProducts: recommend.getRelatedProducts,
            getTrendingFacets: recommend.getTrendingFacets,
            getTrendingItems: recommend.getTrendingItems,
        },
    });
}
// eslint-disable-next-line functional/immutable-data
algoliasearch.version = clientCommon.version;

module.exports = algoliasearch;
