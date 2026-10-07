import { _ } from '@swc/helpers/esm/_sliced_to_array.js';
import { isIndexWidget } from 'instantsearch.js/es/lib/utils/index.js';
import { useState, useEffect } from 'react';
import { getIndexSearchResults } from './getIndexSearchResults.js';
import { useIndexContext } from './useIndexContext.js';
import { useInstantSearchContext } from './useInstantSearchContext.js';

function useSearchResults() {
    var search = useInstantSearchContext();
    var searchIndex = useIndexContext();
    var _useState = _(useState(function() {
        var indexSearchResults = getIndexSearchResults(searchIndex);
        // We do this not to leak `recommendResults` in the API.
        return {
            results: indexSearchResults.results,
            scopedResults: indexSearchResults.scopedResults
        };
    }), 2), searchResults = _useState[0], setSearchResults = _useState[1];
    useEffect(function() {
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
                var childIndex = search.mainIndex.getWidgets().find(isIndexWidget);
                childIndex && setSearchResults({
                    results: getIndexSearchResults(searchIndex).results,
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

export { useSearchResults };
