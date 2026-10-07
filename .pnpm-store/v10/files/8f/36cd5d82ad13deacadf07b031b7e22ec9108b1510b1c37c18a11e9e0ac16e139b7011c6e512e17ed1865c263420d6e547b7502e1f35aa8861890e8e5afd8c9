import { createAuth, AuthMode, shuffle, addMethods, createWaitablePromise, createRetryablePromise, encode } from '@algolia/client-common';
import { createTransporter, CallEnum, createMappedRequestOptions, serializeQueryParameters } from '@algolia/transporter';
import { MethodEnum } from '@algolia/requester-common';
import { createHmac } from 'crypto';

function createBrowsablePromise(options) {
    const browse = (data) => {
        return options.request(data).then(response => {
            /**
             * First we send to the developer the
             * batch retrieved from the API.
             */
            if (options.batch !== undefined) {
                options.batch(response.hits);
            }
            /**
             * Then, we ask to the browse concrete implementation
             * if we should stop browsing. As example, the `browseObjects`
             * method will stop if the cursor is not present on the response.
             */
            if (options.shouldStop(response)) {
                return undefined;
            }
            /**
             * Finally, if the response contains a cursor, we browse to the next
             * batch using that same cursor. Otherwise, we just use the traditional
             * browsing using the page element.
             */
            if (response.cursor) {
                return browse({
                    cursor: response.cursor,
                });
            }
            return browse({
                page: (data.page || 0) + 1,
            });
        });
    };
    return browse({});
}

const createSearchClient = options => {
    const appId = options.appId;
    const auth = createAuth(options.authMode !== undefined ? options.authMode : AuthMode.WithinHeaders, appId, options.apiKey);
    const transporter = createTransporter({
        hosts: [
            { url: `${appId}-dsn.algolia.net`, accept: CallEnum.Read },
            { url: `${appId}.algolia.net`, accept: CallEnum.Write },
        ].concat(shuffle([
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
        transporter,
        appId,
        addAlgoliaAgent(segment, version) {
            transporter.userAgent.add({ segment, version });
        },
        clearCache() {
            return Promise.all([
                transporter.requestsCache.clear(),
                transporter.responsesCache.clear(),
            ]).then(() => undefined);
        },
    };
    return addMethods(base, options.methods);
};

function createMissingObjectIDError() {
    return {
        name: 'MissingObjectIDError',
        message: 'All objects must have an unique objectID ' +
            '(like a primary key) to be valid. ' +
            'Algolia is also able to generate objectIDs ' +
            "automatically but *it's not recommended*. " +
            "To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option.",
    };
}

function createObjectNotFoundError() {
    return {
        name: 'ObjectNotFoundError',
        message: 'Object not found.',
    };
}

function createValidUntilNotFoundError() {
    return {
        name: 'ValidUntilNotFoundError',
        message: 'ValidUntil not found in given secured api key.',
    };
}

const addApiKey = (base) => {
    return (acl, requestOptions) => {
        const { queryParameters, ...options } = requestOptions || {};
        const data = {
            acl,
            ...(queryParameters !== undefined ? { queryParameters } : {}),
        };
        const wait = (response, waitRequestOptions) => {
            return createRetryablePromise(retry => {
                return getApiKey(base)(response.key, waitRequestOptions).catch((apiError) => {
                    if (apiError.status !== 404) {
                        throw apiError;
                    }
                    return retry();
                });
            });
        };
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: '1/keys',
            data,
        }, options), wait);
    };
};

const assignUserID = (base) => {
    return (userID, clusterName, requestOptions) => {
        const mappedRequestOptions = createMappedRequestOptions(requestOptions);
        // eslint-disable-next-line functional/immutable-data
        mappedRequestOptions.queryParameters['X-Algolia-User-ID'] = userID;
        return base.transporter.write({
            method: MethodEnum.Post,
            path: '1/clusters/mapping',
            data: { cluster: clusterName },
        }, mappedRequestOptions);
    };
};

const assignUserIDs = (base) => {
    return (userIDs, clusterName, requestOptions) => {
        return base.transporter.write({
            method: MethodEnum.Post,
            path: '1/clusters/mapping/batch',
            data: {
                users: userIDs,
                cluster: clusterName,
            },
        }, requestOptions);
    };
};

const clearDictionaryEntries = (base) => {
    return (dictionary, requestOptions) => {
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('/1/dictionaries/%s/batch', dictionary),
            data: {
                clearExistingDictionaryEntries: true,
                requests: { action: 'addEntry', body: [] },
            },
        }, requestOptions), (response, waitRequestOptions) => waitAppTask(base)(response.taskID, waitRequestOptions));
    };
};

const copyIndex = (base) => {
    return (from, to, requestOptions) => {
        const wait = (response, waitRequestOptions) => {
            return initIndex(base)(from, {
                methods: { waitTask },
            }).waitTask(response.taskID, waitRequestOptions);
        };
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/operation', from),
            data: {
                operation: 'copy',
                destination: to,
            },
        }, requestOptions), wait);
    };
};

const copyRules = (base) => {
    return (from, to, requestOptions) => {
        return copyIndex(base)(from, to, {
            ...requestOptions,
            scope: [ScopeEnum.Rules],
        });
    };
};

const copySettings = (base) => {
    return (from, to, requestOptions) => {
        return copyIndex(base)(from, to, {
            ...requestOptions,
            scope: [ScopeEnum.Settings],
        });
    };
};

const copySynonyms = (base) => {
    return (from, to, requestOptions) => {
        return copyIndex(base)(from, to, {
            ...requestOptions,
            scope: [ScopeEnum.Synonyms],
        });
    };
};

const customRequest = (base) => {
    return (request, requestOptions) => {
        if (request.method === MethodEnum.Get) {
            return base.transporter.read(request, requestOptions);
        }
        return base.transporter.write(request, requestOptions);
    };
};

const deleteApiKey = (base) => {
    return (apiKey, requestOptions) => {
        const wait = (_, waitRequestOptions) => {
            return createRetryablePromise(retry => {
                return getApiKey(base)(apiKey, waitRequestOptions)
                    .then(retry)
                    .catch((apiError) => {
                    if (apiError.status !== 404) {
                        throw apiError;
                    }
                });
            });
        };
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Delete,
            path: encode('1/keys/%s', apiKey),
        }, requestOptions), wait);
    };
};

const deleteDictionaryEntries = (base) => {
    return (dictionary, objectIDs, requestOptions) => {
        const requests = objectIDs.map(objectID => ({
            action: 'deleteEntry',
            body: { objectID },
        }));
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('/1/dictionaries/%s/batch', dictionary),
            data: { clearExistingDictionaryEntries: false, requests },
        }, requestOptions), (response, waitRequestOptions) => waitAppTask(base)(response.taskID, waitRequestOptions));
    };
};

const generateSecuredApiKey = () => {
    return (parentApiKey, restrictions) => {
        const queryParameters = serializeQueryParameters(restrictions);
        const securedKey = createHmac('sha256', parentApiKey)
            .update(queryParameters)
            .digest('hex');
        return Buffer.from(securedKey + queryParameters).toString('base64');
    };
};

const getApiKey = (base) => {
    return (apiKey, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: encode('1/keys/%s', apiKey),
        }, requestOptions);
    };
};

const getAppTask = (base) => {
    return (taskID, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: encode('1/task/%s', taskID.toString()),
        }, requestOptions);
    };
};

const getDictionarySettings = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: '/1/dictionaries/*/settings',
        }, requestOptions);
    };
};

const getLogs = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: '1/logs',
        }, requestOptions);
    };
};

const getSecuredApiKeyRemainingValidity = () => {
    return (securedApiKey) => {
        const decodedString = Buffer.from(securedApiKey, 'base64').toString('ascii');
        const regex = /validUntil=(\d+)/;
        const match = decodedString.match(regex);
        if (match === null) {
            throw createValidUntilNotFoundError();
        }
        return parseInt(match[1], 10) - Math.round(new Date().getTime() / 1000);
    };
};

const getTopUserIDs = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: '1/clusters/mapping/top',
        }, requestOptions);
    };
};

const getUserID = (base) => {
    return (userID, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: encode('1/clusters/mapping/%s', userID),
        }, requestOptions);
    };
};

const hasPendingMappings = (base) => {
    return (requestOptions) => {
        const { retrieveMappings, ...options } = requestOptions || {};
        if (retrieveMappings === true) {
            // eslint-disable-next-line functional/immutable-data
            options.getClusters = true;
        }
        return base.transporter.read({
            method: MethodEnum.Get,
            path: '1/clusters/mapping/pending',
        }, options);
    };
};

const initIndex = (base) => {
    return (indexName, options = {}) => {
        const searchIndex = {
            transporter: base.transporter,
            appId: base.appId,
            indexName,
        };
        return addMethods(searchIndex, options.methods);
    };
};

const listApiKeys = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: '1/keys',
        }, requestOptions);
    };
};

const listClusters = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: '1/clusters',
        }, requestOptions);
    };
};

const listIndices = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: '1/indexes',
        }, requestOptions);
    };
};

const listUserIDs = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: '1/clusters/mapping',
        }, requestOptions);
    };
};

const moveIndex = (base) => {
    return (from, to, requestOptions) => {
        const wait = (response, waitRequestOptions) => {
            return initIndex(base)(from, {
                methods: { waitTask },
            }).waitTask(response.taskID, waitRequestOptions);
        };
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/operation', from),
            data: {
                operation: 'move',
                destination: to,
            },
        }, requestOptions), wait);
    };
};

const multipleBatch = (base) => {
    return (requests, requestOptions) => {
        const wait = (response, waitRequestOptions) => {
            return Promise.all(Object.keys(response.taskID).map(indexName => {
                return initIndex(base)(indexName, {
                    methods: { waitTask },
                }).waitTask(response.taskID[indexName], waitRequestOptions);
            }));
        };
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: '1/indexes/*/batch',
            data: {
                requests,
            },
        }, requestOptions), wait);
    };
};

const multipleGetObjects = (base) => {
    return (requests, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: '1/indexes/*/objects',
            data: {
                requests,
            },
        }, requestOptions);
    };
};

const multipleQueries = (base) => {
    return (queries, requestOptions) => {
        const requests = queries.map(query => {
            return {
                ...query,
                params: serializeQueryParameters(query.params || {}),
            };
        });
        return base.transporter.read({
            method: MethodEnum.Post,
            path: '1/indexes/*/queries',
            data: {
                requests,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const multipleSearchForFacetValues = (base) => {
    return (queries, requestOptions) => {
        return Promise.all(queries.map(query => {
            const { facetName, facetQuery, ...params } = query.params;
            return initIndex(base)(query.indexName, {
                methods: { searchForFacetValues },
            }).searchForFacetValues(facetName, facetQuery, {
                ...requestOptions,
                ...params,
            });
        }));
    };
};

const removeUserID = (base) => {
    return (userID, requestOptions) => {
        const mappedRequestOptions = createMappedRequestOptions(requestOptions);
        // eslint-disable-next-line functional/immutable-data
        mappedRequestOptions.queryParameters['X-Algolia-User-ID'] = userID;
        return base.transporter.write({
            method: MethodEnum.Delete,
            path: '1/clusters/mapping',
        }, mappedRequestOptions);
    };
};

const replaceDictionaryEntries = (base) => {
    return (dictionary, entries, requestOptions) => {
        const requests = entries.map(entry => ({
            action: 'addEntry',
            body: entry,
        }));
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('/1/dictionaries/%s/batch', dictionary),
            data: { clearExistingDictionaryEntries: true, requests },
        }, requestOptions), (response, waitRequestOptions) => waitAppTask(base)(response.taskID, waitRequestOptions));
    };
};

const restoreApiKey = (base) => {
    return (apiKey, requestOptions) => {
        const wait = (_, waitRequestOptions) => {
            return createRetryablePromise(retry => {
                return getApiKey(base)(apiKey, waitRequestOptions).catch((apiError) => {
                    if (apiError.status !== 404) {
                        throw apiError;
                    }
                    return retry();
                });
            });
        };
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('1/keys/%s/restore', apiKey),
        }, requestOptions), wait);
    };
};

const saveDictionaryEntries = (base) => {
    return (dictionary, entries, requestOptions) => {
        const requests = entries.map(entry => ({
            action: 'addEntry',
            body: entry,
        }));
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('/1/dictionaries/%s/batch', dictionary),
            data: { clearExistingDictionaryEntries: false, requests },
        }, requestOptions), (response, waitRequestOptions) => waitAppTask(base)(response.taskID, waitRequestOptions));
    };
};

const searchDictionaryEntries = (base) => {
    return (dictionary, query, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('/1/dictionaries/%s/search', dictionary),
            data: {
                query,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const searchUserIDs = (base) => {
    return (query, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: '1/clusters/mapping/search',
            data: {
                query,
            },
        }, requestOptions);
    };
};

const setDictionarySettings = (base) => {
    return (settings, requestOptions) => {
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Put,
            path: '/1/dictionaries/*/settings',
            data: settings,
        }, requestOptions), (response, waitRequestOptions) => waitAppTask(base)(response.taskID, waitRequestOptions));
    };
};

const updateApiKey = (base) => {
    return (apiKey, requestOptions) => {
        const updatedFields = Object.assign({}, requestOptions);
        const { queryParameters, ...options } = requestOptions || {};
        const data = queryParameters ? { queryParameters } : {};
        const apiKeyFields = [
            'acl',
            'indexes',
            'referers',
            'restrictSources',
            'queryParameters',
            'description',
            'maxQueriesPerIPPerHour',
            'maxHitsPerQuery',
        ];
        // Check that all the fields retrieved through getApiKey are the same as the ones we wanted to update
        const hasChanged = (getApiKeyResponse) => {
            return Object.keys(updatedFields)
                .filter((updatedField) => apiKeyFields.indexOf(updatedField) !== -1)
                .every(updatedField => {
                // If the field is an array, we need to check that they are the same length and that all the values are the same
                if (Array.isArray(getApiKeyResponse[updatedField]) &&
                    Array.isArray(updatedFields[updatedField])) {
                    const getApiKeyResponseArray = getApiKeyResponse[updatedField];
                    return (getApiKeyResponseArray.length === updatedFields[updatedField].length &&
                        getApiKeyResponseArray.every((value, index) => value === updatedFields[updatedField][index]));
                }
                else {
                    return getApiKeyResponse[updatedField] === updatedFields[updatedField];
                }
            });
        };
        const wait = (_, waitRequestOptions) => createRetryablePromise(retry => {
            return getApiKey(base)(apiKey, waitRequestOptions).then(getApiKeyResponse => {
                return hasChanged(getApiKeyResponse) ? Promise.resolve() : retry();
            });
        });
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Put,
            path: encode('1/keys/%s', apiKey),
            data,
        }, options), wait);
    };
};

const waitAppTask = (base) => {
    return (taskID, requestOptions) => {
        return createRetryablePromise(retry => {
            return getAppTask(base)(taskID, requestOptions).then(response => {
                return response.status !== 'published' ? retry() : undefined;
            });
        });
    };
};

const batch = (base) => {
    return (requests, requestOptions) => {
        const wait = (response, waitRequestOptions) => {
            return waitTask(base)(response.taskID, waitRequestOptions);
        };
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/batch', base.indexName),
            data: {
                requests,
            },
        }, requestOptions), wait);
    };
};

const browseObjects = (base) => {
    return (requestOptions) => {
        return createBrowsablePromise({
            shouldStop: response => response.cursor === undefined,
            ...requestOptions,
            request: (data) => base.transporter.read({
                method: MethodEnum.Post,
                path: encode('1/indexes/%s/browse', base.indexName),
                data,
            }, requestOptions),
        });
    };
};

const browseRules = (base) => {
    return (requestOptions) => {
        const options = {
            hitsPerPage: 1000,
            ...requestOptions,
        };
        return createBrowsablePromise({
            shouldStop: response => response.hits.length < options.hitsPerPage,
            ...options,
            request(data) {
                return searchRules(base)('', { ...options, ...data }).then((response) => {
                    return {
                        ...response,
                        hits: response.hits.map(rule => {
                            // eslint-disable-next-line functional/immutable-data,no-param-reassign
                            delete rule._highlightResult;
                            return rule;
                        }),
                    };
                });
            },
        });
    };
};

const browseSynonyms = (base) => {
    return (requestOptions) => {
        const options = {
            hitsPerPage: 1000,
            ...requestOptions,
        };
        return createBrowsablePromise({
            shouldStop: response => response.hits.length < options.hitsPerPage,
            ...options,
            request(data) {
                return searchSynonyms(base)('', { ...options, ...data }).then((response) => {
                    return {
                        ...response,
                        hits: response.hits.map(synonym => {
                            // eslint-disable-next-line functional/immutable-data,no-param-reassign
                            delete synonym._highlightResult;
                            return synonym;
                        }),
                    };
                });
            },
        });
    };
};

const chunkedBatch = (base) => {
    return (bodies, action, requestOptions) => {
        const { batchSize, ...options } = requestOptions || {};
        const response = {
            taskIDs: [],
            objectIDs: [],
        };
        const forEachBatch = (lastIndex = 0) => {
            // eslint-disable-next-line functional/prefer-readonly-type
            const bodiesChunk = [];
            // eslint-disable-next-line functional/no-let
            let index;
            /* eslint-disable-next-line functional/no-loop-statement */
            for (index = lastIndex; index < bodies.length; index++) {
                // eslint-disable-next-line functional/immutable-data
                bodiesChunk.push(bodies[index]);
                if (bodiesChunk.length === (batchSize || 1000)) {
                    break;
                }
            }
            if (bodiesChunk.length === 0) {
                return Promise.resolve(response);
            }
            return batch(base)(bodiesChunk.map(body => {
                return {
                    action,
                    body,
                };
            }), options).then(res => {
                response.objectIDs = response.objectIDs.concat(res.objectIDs); // eslint-disable-line functional/immutable-data
                response.taskIDs.push(res.taskID); // eslint-disable-line functional/immutable-data
                index++;
                return forEachBatch(index);
            });
        };
        return createWaitablePromise(forEachBatch(), (chunkedBatchResponse, waitRequestOptions) => {
            return Promise.all(chunkedBatchResponse.taskIDs.map(taskID => {
                return waitTask(base)(taskID, waitRequestOptions);
            }));
        });
    };
};

const clearObjects = (base) => {
    return (requestOptions) => {
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/clear', base.indexName),
        }, requestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const clearRules = (base) => {
    return (requestOptions) => {
        const { forwardToReplicas, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
            mappedRequestOptions.queryParameters.forwardToReplicas = 1; // eslint-disable-line functional/immutable-data
        }
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/rules/clear', base.indexName),
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const clearSynonyms = (base) => {
    return (requestOptions) => {
        const { forwardToReplicas, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
            mappedRequestOptions.queryParameters.forwardToReplicas = 1; // eslint-disable-line functional/immutable-data
        }
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/synonyms/clear', base.indexName),
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const deleteBy = (base) => {
    return (filters, requestOptions) => {
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/deleteByQuery', base.indexName),
            data: filters,
        }, requestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const deleteIndex = (base) => {
    return (requestOptions) => {
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Delete,
            path: encode('1/indexes/%s', base.indexName),
        }, requestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const deleteObject = (base) => {
    return (objectID, requestOptions) => {
        return createWaitablePromise(deleteObjects(base)([objectID], requestOptions).then(response => {
            return { taskID: response.taskIDs[0] };
        }), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const deleteObjects = (base) => {
    return (objectIDs, requestOptions) => {
        const objects = objectIDs.map(objectID => {
            return { objectID };
        });
        return chunkedBatch(base)(objects, BatchActionEnum.DeleteObject, requestOptions);
    };
};

const deleteRule = (base) => {
    return (objectID, requestOptions) => {
        const { forwardToReplicas, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
            mappedRequestOptions.queryParameters.forwardToReplicas = 1; // eslint-disable-line functional/immutable-data
        }
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Delete,
            path: encode('1/indexes/%s/rules/%s', base.indexName, objectID),
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const deleteSynonym = (base) => {
    return (objectID, requestOptions) => {
        const { forwardToReplicas, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
            mappedRequestOptions.queryParameters.forwardToReplicas = 1; // eslint-disable-line functional/immutable-data
        }
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Delete,
            path: encode('1/indexes/%s/synonyms/%s', base.indexName, objectID),
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const exists = (base) => {
    return (requestOptions) => {
        return getSettings(base)(requestOptions)
            .then(() => true)
            .catch(error => {
            if (error.status !== 404) {
                throw error;
            }
            return false;
        });
    };
};

const findAnswers = (base) => {
    return (query, queryLanguages, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/answers/%s/prediction', base.indexName),
            data: {
                query,
                queryLanguages,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const findObject = (base) => {
    return (callback, requestOptions) => {
        const { query, paginate, ...options } = requestOptions || {};
        // eslint-disable-next-line functional/no-let
        let page = 0;
        const forEachPage = () => {
            return search(base)(query || '', { ...options, page }).then(result => {
                // eslint-disable-next-line functional/no-loop-statement
                for (const [position, hit] of Object.entries(result.hits)) {
                    // eslint-disable-next-line promise/no-callback-in-promise
                    if (callback(hit)) {
                        return {
                            object: hit,
                            position: parseInt(position, 10),
                            page,
                        };
                    }
                }
                page++;
                // paginate if option was set and has next page
                if (paginate === false || page >= result.nbPages) {
                    throw createObjectNotFoundError();
                }
                return forEachPage();
            });
        };
        return forEachPage();
    };
};

const getObject = (base) => {
    return (objectID, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: encode('1/indexes/%s/%s', base.indexName, objectID),
        }, requestOptions);
    };
};

const getObjectPosition = () => {
    return (searchResponse, objectID) => {
        // eslint-disable-next-line functional/no-loop-statement
        for (const [position, hit] of Object.entries(searchResponse.hits)) {
            if (hit.objectID === objectID) {
                return parseInt(position, 10);
            }
        }
        return -1;
    };
};

const getObjects = (base) => {
    return (objectIDs, requestOptions) => {
        const { attributesToRetrieve, ...options } = requestOptions || {};
        const requests = objectIDs.map(objectID => {
            return {
                indexName: base.indexName,
                objectID,
                ...(attributesToRetrieve ? { attributesToRetrieve } : {}),
            };
        });
        return base.transporter.read({
            method: MethodEnum.Post,
            path: '1/indexes/*/objects',
            data: {
                requests,
            },
        }, options);
    };
};

const getRule = (base) => {
    return (objectID, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: encode('1/indexes/%s/rules/%s', base.indexName, objectID),
        }, requestOptions);
    };
};

const getSettings = (base) => {
    return (requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: encode('1/indexes/%s/settings', base.indexName),
            data: {
                getVersion: 2,
            },
        }, requestOptions);
    };
};

const getSynonym = (base) => {
    return (objectID, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: encode(`1/indexes/%s/synonyms/%s`, base.indexName, objectID),
        }, requestOptions);
    };
};

const getTask = (base) => {
    return (taskID, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Get,
            path: encode('1/indexes/%s/task/%s', base.indexName, taskID.toString()),
        }, requestOptions);
    };
};

const partialUpdateObject = (base) => {
    return (object, requestOptions) => {
        return createWaitablePromise(partialUpdateObjects(base)([object], requestOptions).then(response => {
            return {
                objectID: response.objectIDs[0],
                taskID: response.taskIDs[0],
            };
        }), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const partialUpdateObjects = (base) => {
    return (objects, requestOptions) => {
        const { createIfNotExists, ...options } = requestOptions || {};
        const action = createIfNotExists
            ? BatchActionEnum.PartialUpdateObject
            : BatchActionEnum.PartialUpdateObjectNoCreate;
        return chunkedBatch(base)(objects, action, options);
    };
};

const replaceAllObjects = (base) => {
    return (objects, requestOptions) => {
        const { safe, autoGenerateObjectIDIfNotExist, batchSize, ...options } = requestOptions || {};
        const operation = (from, to, type, operationRequestOptions) => {
            return createWaitablePromise(base.transporter.write({
                method: MethodEnum.Post,
                path: encode('1/indexes/%s/operation', from),
                data: {
                    operation: type,
                    destination: to,
                },
            }, operationRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
        };
        const randomSuffix = Math.random()
            .toString(36)
            .substring(7);
        const temporaryIndexName = `${base.indexName}_tmp_${randomSuffix}`;
        const saveObjectsInTemporary = saveObjects({
            appId: base.appId,
            transporter: base.transporter,
            indexName: temporaryIndexName,
        });
        // @ts-ignore
        // eslint-disable-next-line prefer-const, functional/no-let, functional/prefer-readonly-type
        let responses = [];
        const copyWaitablePromise = operation(base.indexName, temporaryIndexName, 'copy', {
            ...options,
            scope: ['settings', 'synonyms', 'rules'],
        });
        // eslint-disable-next-line functional/immutable-data
        responses.push(copyWaitablePromise);
        const result = (safe
            ? copyWaitablePromise.wait(options)
            : copyWaitablePromise)
            .then(() => {
            const saveObjectsWaitablePromise = saveObjectsInTemporary(objects, {
                ...options,
                autoGenerateObjectIDIfNotExist,
                batchSize,
            });
            // eslint-disable-next-line functional/immutable-data
            responses.push(saveObjectsWaitablePromise);
            return safe ? saveObjectsWaitablePromise.wait(options) : saveObjectsWaitablePromise;
        })
            .then(() => {
            const moveWaitablePromise = operation(temporaryIndexName, base.indexName, 'move', options);
            // eslint-disable-next-line functional/immutable-data
            responses.push(moveWaitablePromise);
            return safe ? moveWaitablePromise.wait(options) : moveWaitablePromise;
        })
            .then(() => Promise.all(responses))
            .then(([copyResponse, saveObjectsResponse, moveResponse]) => {
            return {
                objectIDs: saveObjectsResponse.objectIDs,
                taskIDs: [copyResponse.taskID, ...saveObjectsResponse.taskIDs, moveResponse.taskID],
            };
        })
            .catch(error => {
            // Clean up temporary index if there's an error
            // eslint-disable-next-line promise/no-nesting
            return deleteIndex({
                appId: base.appId,
                transporter: base.transporter,
                indexName: temporaryIndexName,
            })()
                .catch(() => {
                // Ignore delete errors
            })
                .then(() => {
                throw error;
            });
        });
        return createWaitablePromise(result, (_, waitRequestOptions) => {
            return Promise.all(responses.map(response => response.wait(waitRequestOptions)));
        });
    };
};

const replaceAllRules = (base) => {
    return (rules, requestOptions) => {
        return saveRules(base)(rules, {
            ...requestOptions,
            clearExistingRules: true,
        });
    };
};

const replaceAllSynonyms = (base) => {
    return (synonyms, requestOptions) => {
        return saveSynonyms(base)(synonyms, {
            ...requestOptions,
            clearExistingSynonyms: true,
        });
    };
};

const saveObject = (base) => {
    return (object, requestOptions) => {
        return createWaitablePromise(saveObjects(base)([object], requestOptions).then(response => {
            return {
                objectID: response.objectIDs[0],
                taskID: response.taskIDs[0],
            };
        }), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const saveObjects = (base) => {
    return (objects, requestOptions) => {
        const { autoGenerateObjectIDIfNotExist, ...options } = requestOptions || {};
        const action = autoGenerateObjectIDIfNotExist
            ? BatchActionEnum.AddObject
            : BatchActionEnum.UpdateObject;
        if (action === BatchActionEnum.UpdateObject) {
            // eslint-disable-next-line functional/no-loop-statement
            for (const object of objects) {
                if (object.objectID === undefined) {
                    return createWaitablePromise(Promise.reject(createMissingObjectIDError()));
                }
            }
        }
        return chunkedBatch(base)(objects, action, options);
    };
};

const saveRule = (base) => {
    return (rule, requestOptions) => {
        return saveRules(base)([rule], requestOptions);
    };
};

const saveRules = (base) => {
    return (rules, requestOptions) => {
        const { forwardToReplicas, clearExistingRules, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
            mappedRequestOptions.queryParameters.forwardToReplicas = 1; // eslint-disable-line functional/immutable-data
        }
        if (clearExistingRules) {
            mappedRequestOptions.queryParameters.clearExistingRules = 1; // eslint-disable-line functional/immutable-data
        }
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/rules/batch', base.indexName),
            data: rules,
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const saveSynonym = (base) => {
    return (synonym, requestOptions) => {
        return saveSynonyms(base)([synonym], requestOptions);
    };
};

const saveSynonyms = (base) => {
    return (synonyms, requestOptions) => {
        const { forwardToReplicas, clearExistingSynonyms, replaceExistingSynonyms, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
            mappedRequestOptions.queryParameters.forwardToReplicas = 1; // eslint-disable-line functional/immutable-data
        }
        if (replaceExistingSynonyms || clearExistingSynonyms) {
            mappedRequestOptions.queryParameters.replaceExistingSynonyms = 1; // eslint-disable-line functional/immutable-data
        }
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/synonyms/batch', base.indexName),
            data: synonyms,
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const search = (base) => {
    return (query, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/query', base.indexName),
            data: {
                query,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const searchForFacetValues = (base) => {
    return (facetName, facetQuery, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/facets/%s/query', base.indexName, facetName),
            data: {
                facetQuery,
            },
            cacheable: true,
        }, requestOptions);
    };
};

const searchRules = (base) => {
    return (query, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/rules/search', base.indexName),
            data: {
                query,
            },
        }, requestOptions);
    };
};

const searchSynonyms = (base) => {
    return (query, requestOptions) => {
        return base.transporter.read({
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/synonyms/search', base.indexName),
            data: {
                query,
            },
        }, requestOptions);
    };
};

const setSettings = (base) => {
    return (settings, requestOptions) => {
        const { forwardToReplicas, ...options } = requestOptions || {};
        const mappedRequestOptions = createMappedRequestOptions(options);
        if (forwardToReplicas) {
            mappedRequestOptions.queryParameters.forwardToReplicas = 1; // eslint-disable-line functional/immutable-data
        }
        return createWaitablePromise(base.transporter.write({
            method: MethodEnum.Put,
            path: encode('1/indexes/%s/settings', base.indexName),
            data: settings,
        }, mappedRequestOptions), (response, waitRequestOptions) => waitTask(base)(response.taskID, waitRequestOptions));
    };
};

const waitTask = (base) => {
    return (taskID, requestOptions) => {
        return createRetryablePromise(retry => {
            return getTask(base)(taskID, requestOptions).then(response => {
                return response.status !== 'published' ? retry() : undefined;
            });
        });
    };
};

const ApiKeyACLEnum = {
    AddObject: 'addObject',
    Analytics: 'analytics',
    Browser: 'browse',
    DeleteIndex: 'deleteIndex',
    DeleteObject: 'deleteObject',
    EditSettings: 'editSettings',
    Inference: 'inference',
    ListIndexes: 'listIndexes',
    Logs: 'logs',
    Personalization: 'personalization',
    Recommendation: 'recommendation',
    Search: 'search',
    SeeUnretrievableAttributes: 'seeUnretrievableAttributes',
    Settings: 'settings',
    Usage: 'usage',
};

const BatchActionEnum = {
    AddObject: 'addObject',
    UpdateObject: 'updateObject',
    PartialUpdateObject: 'partialUpdateObject',
    PartialUpdateObjectNoCreate: 'partialUpdateObjectNoCreate',
    DeleteObject: 'deleteObject',
    DeleteIndex: 'delete',
    ClearIndex: 'clear',
};

const ScopeEnum = {
    Settings: 'settings',
    Synonyms: 'synonyms',
    Rules: 'rules',
};

const StrategyEnum = {
    None: 'none',
    StopIfEnoughMatches: 'stopIfEnoughMatches',
};

const SynonymEnum = {
    Synonym: 'synonym',
    OneWaySynonym: 'oneWaySynonym',
    AltCorrection1: 'altCorrection1',
    AltCorrection2: 'altCorrection2',
    Placeholder: 'placeholder',
};

export { ApiKeyACLEnum, BatchActionEnum, ScopeEnum, StrategyEnum, SynonymEnum, addApiKey, assignUserID, assignUserIDs, batch, browseObjects, browseRules, browseSynonyms, chunkedBatch, clearDictionaryEntries, clearObjects, clearRules, clearSynonyms, copyIndex, copyRules, copySettings, copySynonyms, createBrowsablePromise, createMissingObjectIDError, createObjectNotFoundError, createSearchClient, createValidUntilNotFoundError, customRequest, deleteApiKey, deleteBy, deleteDictionaryEntries, deleteIndex, deleteObject, deleteObjects, deleteRule, deleteSynonym, exists, findAnswers, findObject, generateSecuredApiKey, getApiKey, getAppTask, getDictionarySettings, getLogs, getObject, getObjectPosition, getObjects, getRule, getSecuredApiKeyRemainingValidity, getSettings, getSynonym, getTask, getTopUserIDs, getUserID, hasPendingMappings, initIndex, listApiKeys, listClusters, listIndices, listUserIDs, moveIndex, multipleBatch, multipleGetObjects, multipleQueries, multipleSearchForFacetValues, partialUpdateObject, partialUpdateObjects, removeUserID, replaceAllObjects, replaceAllRules, replaceAllSynonyms, replaceDictionaryEntries, restoreApiKey, saveDictionaryEntries, saveObject, saveObjects, saveRule, saveRules, saveSynonym, saveSynonyms, search, searchDictionaryEntries, searchForFacetValues, searchRules, searchSynonyms, searchUserIDs, setDictionarySettings, setSettings, updateApiKey, waitAppTask, waitTask };
