import { _ as _$3 } from '@swc/helpers/esm/_define_property.js';
import { _ } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$4 } from '@swc/helpers/esm/_sliced_to_array.js';
import { _ as _$2 } from '@swc/helpers/esm/_to_consumable_array.js';

function hydrateSearchClient(client, results) {
    if (!results) {
        return;
    }
    // Disable cache hydration on:
    // - Algoliasearch API Client < v4 with cache disabled
    // - Third party clients (detected by the `addAlgoliaAgent` function missing)
    if ((!('transporter' in client) || client._cacheHydrated) && (!client._useCache || typeof client.addAlgoliaAgent !== 'function')) {
        return;
    }
    var cachedRequest = [
        Object.keys(results).reduce(function(acc, key) {
            var _results_key = results[key], state = _results_key.state, requestParams = _results_key.requestParams, serverResults = _results_key.results;
            var mappedResults = serverResults && state ? serverResults.map(function(result, idx) {
                return _({
                    indexName: state.index || result.index
                }, (requestParams === null || requestParams === void 0 ? void 0 : requestParams[idx]) || result.params ? {
                    params: serializeQueryParameters((requestParams === null || requestParams === void 0 ? void 0 : requestParams[idx]) || deserializeQueryParameters(result.params))
                } : {});
            }) : [];
            return acc.concat(mappedResults);
        }, [])
    ];
    var cachedResults = Object.keys(results).reduce(function(acc, key) {
        var res = results[key].results;
        if (!res) {
            return acc;
        }
        return acc.concat(res);
    }, []);
    // Algoliasearch API Client >= v4
    // To hydrate the client we need to populate the cache with the data from
    // the server (done in `hydrateSearchClientWithMultiIndexRequest` or
    // `hydrateSearchClientWithSingleIndexRequest`). But since there is no way
    // for us to compute the key the same way as `algoliasearch-client` we need
    // to populate it on a custom key and override the `search` method to
    // search on it first.
    if ('transporter' in client && !client._cacheHydrated) {
        client._cacheHydrated = true;
        var baseMethod = client.search.bind(client);
        client.search = function(requests) {
            for(var _len = arguments.length, methodArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                methodArgs[_key - 1] = arguments[_key];
            }
            var requestsWithSerializedParams = Array.isArray(requests) ? requests.map(function(request) {
                return _$1(_({}, request), {
                    params: serializeQueryParameters(request.params)
                });
            }) : serializeQueryParameters(requests.requestBody.params);
            return client.transporter.responsesCache.get({
                method: 'search',
                args: [
                    requestsWithSerializedParams
                ].concat(_$2(methodArgs))
            }, function() {
                return baseMethod.apply(void 0, [
                    requests
                ].concat(_$2(methodArgs)));
            });
        };
        client.transporter.responsesCache.set({
            method: 'search',
            args: cachedRequest
        }, {
            results: cachedResults
        });
    }
    // Algoliasearch API Client < v4
    // Prior to client v4 we didn't have a proper API to hydrate the client
    // cache from the outside. The following code populates the cache with
    // a single-index result. You can find more information about the
    // computation of the key inside the client (see link below).
    // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240
    if (!('transporter' in client)) {
        var cacheKey = "/1/indexes/*/queries_body_".concat(JSON.stringify({
            requests: cachedRequest
        }));
        client.cache = _$1(_({}, client.cache), _$3({}, cacheKey, JSON.stringify({
            results: Object.keys(results).map(function(key) {
                return results[key].results;
            })
        })));
    }
}
function deserializeQueryParameters(parameters) {
    return parameters.split('&').reduce(function(acc, parameter) {
        var _parameter_split = _$4(parameter.split('='), 2), key = _parameter_split[0], value = _parameter_split[1];
        acc[key] = value ? decodeURIComponent(value) : '';
        return acc;
    }, {});
}
// This function is copied from the algoliasearch v4 API Client. If modified,
// consider updating it also in `serializeQueryParameters` from `@algolia/transporter`.
function serializeQueryParameters(parameters) {
    var isObjectOrArray = function isObjectOrArray(value) {
        return Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]';
    };
    var encode = function encode(format) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        var i = 0;
        return format.replace(/%s/g, function() {
            return encodeURIComponent(args[i++]);
        });
    };
    return Object.keys(parameters).map(function(key) {
        return encode('%s=%s', key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key]);
    }).join('&');
}

export { hydrateSearchClient };
