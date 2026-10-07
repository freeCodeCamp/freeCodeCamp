import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { walkIndex } from './utils/walkIndex.js';

/**
 * Waits for the results from the search instance to coordinate the next steps
 * in `getServerState()`.
 */ function waitForResults(search) {
    var skipRecommend = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var helper = search.mainHelper;
    // Extract search parameters from the search client to use them
    // later during hydration.
    var requestParamsList;
    var client = helper.getClient();
    if (search.compositionID) {
        helper.setClient(_(_$1({}, client), {
            search: function search(query) {
                requestParamsList = [
                    query.requestBody.params
                ];
                return client.search(query);
            }
        }));
    } else {
        helper.setClient(_(_$1({}, client), {
            search: function search(queries) {
                requestParamsList = queries.map(function(param) {
                    var params = param.params;
                    return params;
                });
                return client.search(queries);
            }
        }));
    }
    if (search._hasSearchWidget) {
        if (search.compositionID) {
            helper.searchWithComposition();
        } else {
            helper.searchOnlyWithDerivedHelpers();
        }
    }
    !skipRecommend && search._hasRecommendWidget && helper.recommend();
    return new Promise(function(resolve, reject) {
        var searchResultsReceived = !search._hasSearchWidget;
        var recommendResultsReceived = !search._hasRecommendWidget || skipRecommend;
        // All derived helpers resolve in the same tick so we're safe only relying
        // on the first one.
        helper.derivedHelpers[0].on('result', function() {
            searchResultsReceived = true;
            if (recommendResultsReceived) {
                resolve(requestParamsList);
            }
        });
        helper.derivedHelpers[0].on('recommend:result', function() {
            recommendResultsReceived = true;
            if (searchResultsReceived) {
                resolve(requestParamsList);
            }
        });
        // However, we listen to errors that can happen on any derived helper because
        // any error is critical.
        helper.on('error', function(error) {
            reject(error);
        });
        search.on('error', function(error) {
            reject(error);
        });
        helper.derivedHelpers.forEach(function(derivedHelper) {
            return derivedHelper.on('error', function(error) {
                reject(error);
            });
        });
    });
}
/**
 * Walks the InstantSearch root index to construct the initial results.
 */ function getInitialResults(rootIndex, /**
   * Search parameters sent to the search client,
   * returned by `waitForResults()`.
   */ requestParamsList) {
    var initialResults = {};
    var requestParamsIndex = 0;
    walkIndex(rootIndex, function(widget) {
        var _widget_getHelper;
        var searchResults = widget.getResults();
        var recommendResults = (_widget_getHelper = widget.getHelper()) === null || _widget_getHelper === void 0 ? void 0 : _widget_getHelper.lastRecommendResults;
        if (searchResults || recommendResults) {
            var _searchResults__rawResults, _requestParams_, _requestParams_1;
            var resultsCount = (searchResults === null || searchResults === void 0 ? void 0 : (_searchResults__rawResults = searchResults._rawResults) === null || _searchResults__rawResults === void 0 ? void 0 : _searchResults__rawResults.length) || 0;
            var requestParams = resultsCount ? requestParamsList === null || requestParamsList === void 0 ? void 0 : requestParamsList.slice(requestParamsIndex, requestParamsIndex + resultsCount) : [];
            requestParamsIndex += resultsCount;
            initialResults[widget.getIndexId()] = _$1({}, searchResults && {
                state: _(_$1({}, searchResults._state), {
                    clickAnalytics: requestParams === null || requestParams === void 0 ? void 0 : (_requestParams_ = requestParams[0]) === null || _requestParams_ === void 0 ? void 0 : _requestParams_.clickAnalytics,
                    userToken: requestParams === null || requestParams === void 0 ? void 0 : (_requestParams_1 = requestParams[0]) === null || _requestParams_1 === void 0 ? void 0 : _requestParams_1.userToken
                }),
                results: searchResults._rawResults
            }, recommendResults && {
                recommendResults: {
                    // We have to stringify + parse because of some explicitly undefined values.
                    params: JSON.parse(JSON.stringify(recommendResults._state.params)),
                    results: recommendResults._rawResults
                }
            }, requestParams && {
                requestParams: requestParams
            });
        }
    });
    if (Object.keys(initialResults).length === 0) {
        throw new Error('The root index does not have any results. Make sure you have at least one widget that provides results.');
    }
    return initialResults;
}

export { getInitialResults, waitForResults };
