'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getIndexSearchResults", {
    enumerable: true,
    get: function() {
        return getIndexSearchResults;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _createSearchResults = require("./createSearchResults");
function getIndexSearchResults(indexWidget) {
    var helper = indexWidget.getHelper();
    var results = // On SSR, we get the results injected on the Index.
    indexWidget.getResults() || // On the browser, we create fallback results based on the helper state.
    (0, _createSearchResults.createSearchResults)(helper.state);
    var scopedResults = indexWidget.getScopedResults().map(function(scopedResult) {
        var fallbackResults = scopedResult.indexId === indexWidget.getIndexId() ? results : (0, _createSearchResults.createSearchResults)(scopedResult.helper.state);
        return _object_spread_props._(_object_spread._({}, scopedResult), {
            // We keep `results` from being `null`.
            results: scopedResult.results || fallbackResults
        });
    });
    return {
        results: results,
        scopedResults: scopedResults,
        recommendResults: helper.lastRecommendResults
    };
}
