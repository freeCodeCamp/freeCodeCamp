import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$2 } from '@swc/helpers/esm/_sliced_to_array.js';
import { createDocumentationMessageGenerator } from '../utils/documentation.js';
import { find } from '../utils/find.js';
import { uniq } from '../utils/uniq.js';

var getSelectedHits = function getSelectedHits(hits, selectedObjectIDs) {
    return selectedObjectIDs.map(function(objectID) {
        var hit = find(hits, function(h) {
            return h.objectID === objectID;
        });
        if (typeof hit === 'undefined') {
            throw new Error('Could not find objectID "'.concat(objectID, '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'));
        }
        return hit;
    });
};
var getQueryID = function getQueryID(selectedHits) {
    var queryIDs = uniq(selectedHits.map(function(hit) {
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
        var _payloads = _$2(payloads, 1), payload = _payloads[0];
        if (!aa) {
            var withInstantSearchUsage = createDocumentationMessageGenerator({
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
        aa(method, _$1({}, inferredPayload, payload));
    };
};
/**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 * It passes `insights` to `HitsWithInsightsListener` and `InfiniteHitsWithInsightsListener`.
 */ function withInsights(connector) {
    return function(renderFn, unmountFn) {
        return connector(function(renderOptions, isFirstRender) {
            var results = renderOptions.results, hits = renderOptions.hits, instantSearchInstance = renderOptions.instantSearchInstance;
            if (results && hits && instantSearchInstance) {
                var insights = wrapInsightsClient(instantSearchInstance.insightsClient, results, hits);
                return renderFn(_(_$1({}, renderOptions), {
                    insights: insights
                }), isFirstRender);
            }
            return renderFn(renderOptions, isFirstRender);
        }, unmountFn);
    };
}

export { withInsights as default, inferPayload };
