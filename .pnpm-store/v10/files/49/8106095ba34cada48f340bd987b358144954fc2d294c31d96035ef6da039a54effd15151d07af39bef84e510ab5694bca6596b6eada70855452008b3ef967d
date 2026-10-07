import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { createSearchResults } from './createSearchResults.js';

function getIndexSearchResults(indexWidget) {
    var helper = indexWidget.getHelper();
    var results = // On SSR, we get the results injected on the Index.
    indexWidget.getResults() || // On the browser, we create fallback results based on the helper state.
    createSearchResults(helper.state);
    var scopedResults = indexWidget.getScopedResults().map(function(scopedResult) {
        var fallbackResults = scopedResult.indexId === indexWidget.getIndexId() ? results : createSearchResults(scopedResult.helper.state);
        return _(_$1({}, scopedResult), {
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

export { getIndexSearchResults };
