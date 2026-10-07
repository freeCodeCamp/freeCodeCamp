import { _ } from '@swc/helpers/esm/_object_spread.js';

function hydrateRecommendCache(helper, initialResults) {
    var recommendCache = Object.keys(initialResults).reduce(function(acc, indexName) {
        var initialResult = initialResults[indexName];
        if (initialResult.recommendResults) {
            // @MAJOR: Use `Object.assign` instead of spread operator
            return _({}, acc, initialResult.recommendResults.results);
        }
        return acc;
    }, {});
    helper._recommendCache = recommendCache;
}

export { hydrateRecommendCache };
