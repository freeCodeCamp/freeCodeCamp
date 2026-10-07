'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get /**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 * It passes `insights` to `HitsWithInsightsListener` and `InfiniteHitsWithInsightsListener`.
 */ default () {
        return withInsights;
    },
    get inferPayload () {
        return inferPayload;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _utils = require("../utils");
var getSelectedHits = function getSelectedHits(hits, selectedObjectIDs) {
    return selectedObjectIDs.map(function(objectID) {
        var hit = (0, _utils.find)(hits, function(h) {
            return h.objectID === objectID;
        });
        if (typeof hit === 'undefined') {
            throw new Error('Could not find objectID "'.concat(objectID, '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'));
        }
        return hit;
    });
};
var getQueryID = function getQueryID(selectedHits) {
    var queryIDs = (0, _utils.uniq)(selectedHits.map(function(hit) {
        return hit.__queryID;
    }));
    if (queryIDs.length > 1) {
        throw new Error('Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.');
    }
    var queryID = queryIDs[0];
    if (typeof queryID !== 'string') {
        throw new Error("Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7");
    }
    return queryID;
};
var getPositions = function getPositions(selectedHits) {
    return selectedHits.map(function(hit) {
        return hit.__position;
    });
};
var inferPayload = function inferPayload(param) {
    var method = param.method, results = param.results, hits = param.hits, objectIDs = param.objectIDs;
    var index = results.index;
    var selectedHits = getSelectedHits(hits, objectIDs);
    var queryID = getQueryID(selectedHits);
    switch(method){
        case 'clickedObjectIDsAfterSearch':
            {
                var positions = getPositions(selectedHits);
                return {
                    index: index,
                    queryID: queryID,
                    objectIDs: objectIDs,
                    positions: positions
                };
            }
        case 'convertedObjectIDsAfterSearch':
            return {
                index: index,
                queryID: queryID,
                objectIDs: objectIDs
            };
        default:
            throw new Error('Unsupported method passed to insights: "'.concat(method, '".'));
    }
};
var wrapInsightsClient = function wrapInsightsClient(aa, results, hits) {
    return function(method) {
        for(var _len = arguments.length, payloads = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            payloads[_key - 1] = arguments[_key];
        }
        var _payloads = _sliced_to_array._(payloads, 1), payload = _payloads[0];
        (0, _utils.warning)(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
        if (!aa) {
            var withInstantSearchUsage = (0, _utils.createDocumentationMessageGenerator)({
                name: 'instantsearch'
            });
            throw new Error(withInstantSearchUsage('The `insightsClient` option has not been provided to `instantsearch`.'));
        }
        if (!Array.isArray(payload.objectIDs)) {
            throw new TypeError('Expected `objectIDs` to be an array.');
        }
        var inferredPayload = inferPayload({
            method: method,
            results: results,
            hits: hits,
            objectIDs: payload.objectIDs
        });
        aa(method, _object_spread._({}, inferredPayload, payload));
    };
};
function withInsights(connector) {
    return function(renderFn, unmountFn) {
        return connector(function(renderOptions, isFirstRender) {
            var results = renderOptions.results, hits = renderOptions.hits, instantSearchInstance = renderOptions.instantSearchInstance;
            if (results && hits && instantSearchInstance) {
                var insights = wrapInsightsClient(instantSearchInstance.insightsClient, results, hits);
                return renderFn(_object_spread_props._(_object_spread._({}, renderOptions), {
                    insights: insights
                }), isFirstRender);
            }
            return renderFn(renderOptions, isFirstRender);
        }, unmountFn);
    };
}
