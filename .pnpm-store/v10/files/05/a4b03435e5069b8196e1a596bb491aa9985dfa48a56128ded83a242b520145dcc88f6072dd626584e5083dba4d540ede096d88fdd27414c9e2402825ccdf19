'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hydrateRecommendCache", {
    enumerable: true,
    get: function() {
        return hydrateRecommendCache;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
function hydrateRecommendCache(helper, initialResults) {
    var recommendCache = Object.keys(initialResults).reduce(function(acc, indexName) {
        var initialResult = initialResults[indexName];
        if (initialResult.recommendResults) {
            // @MAJOR: Use `Object.assign` instead of spread operator
            return _object_spread._({}, acc, initialResult.recommendResults.results);
        }
        return acc;
    }, {});
    helper._recommendCache = recommendCache;
}
