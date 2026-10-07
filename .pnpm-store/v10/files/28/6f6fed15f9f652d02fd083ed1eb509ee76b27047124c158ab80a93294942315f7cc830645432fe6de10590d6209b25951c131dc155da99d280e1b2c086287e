'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useSearchResults", {
    enumerable: true,
    get: function() {
        return useSearchResults;
    }
});
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _utils = require("instantsearch.js/cjs/lib/utils");
var _react = require("react");
var _getIndexSearchResults = require("./getIndexSearchResults");
var _useIndexContext = require("./useIndexContext");
var _useInstantSearchContext = require("./useInstantSearchContext");
function useSearchResults() {
    var search = (0, _useInstantSearchContext.useInstantSearchContext)();
    var searchIndex = (0, _useIndexContext.useIndexContext)();
    var _useState = _sliced_to_array._((0, _react.useState)(function() {
        var indexSearchResults = (0, _getIndexSearchResults.getIndexSearchResults)(searchIndex);
        // We do this not to leak `recommendResults` in the API.
        return {
            results: indexSearchResults.results,
            scopedResults: indexSearchResults.scopedResults
        };
    }), 2), searchResults = _useState[0], setSearchResults = _useState[1];
    (0, _react.useEffect)(function() {
        function handleRender() {
            var results = searchIndex.getResults();
            // Results can be `null` when the first search is stalled.
            // In this case, we skip the update.
            // See: https://github.com/algolia/instantsearch/blob/20996c7a159988c58e00ff24d2d2dc98af8b980f/src/widgets/index/index.ts#L652-L657
            if (results !== null) {
                setSearchResults({
                    results: results,
                    scopedResults: searchIndex.getScopedResults()
                });
            } else if (search.mainIndex.getIndexName().length === 0) {
                // If the main index has no name, we get the scoped results from
                // the first child index instead.
                var childIndex = search.mainIndex.getWidgets().find(_utils.isIndexWidget);
                childIndex && setSearchResults({
                    results: (0, _getIndexSearchResults.getIndexSearchResults)(searchIndex).results,
                    scopedResults: childIndex.getScopedResults()
                });
            }
        }
        search.addListener('render', handleRender);
        // Force setting results to mitigate potential race conditions where
        // render listener is added after search results have been returned.
        // This edge case is currently not covered by the tests.
        handleRender();
        return function() {
            search.removeListener('render', handleRender);
        };
    }, [
        search,
        searchIndex
    ]);
    return searchResults;
}
