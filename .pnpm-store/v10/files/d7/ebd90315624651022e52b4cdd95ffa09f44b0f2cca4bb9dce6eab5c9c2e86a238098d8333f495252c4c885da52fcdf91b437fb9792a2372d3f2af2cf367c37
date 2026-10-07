import { _ } from '@swc/helpers/esm/_to_consumable_array.js';
import { useCallback } from 'react';
import { useInstantSearchContext } from '../lib/useInstantSearchContext.js';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect.js';
import { useSearchResults } from '../lib/useSearchResults.js';
import { useSearchState } from '../lib/useSearchState.js';

function useInstantSearch() {
    var catchError = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).catchError;
    var search = useInstantSearchContext();
    var _useSearchState = useSearchState(), uiState = _useSearchState.uiState, setUiState = _useSearchState.setUiState, indexUiState = _useSearchState.indexUiState, setIndexUiState = _useSearchState.setIndexUiState, renderState = _useSearchState.renderState, indexRenderState = _useSearchState.indexRenderState;
    var _useSearchResults = useSearchResults(), results = _useSearchResults.results, scopedResults = _useSearchResults.scopedResults;
    var addMiddlewares = useCallback(function() {
        for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++){
            middlewares[_key] = arguments[_key];
        }
        var _search;
        (_search = search).use.apply(_search, _(middlewares));
        return function() {
            var _search;
            (_search = search).unuse.apply(_search, _(middlewares));
        };
    }, [
        search
    ]);
    var refresh = useCallback(function() {
        search.refresh();
    }, [
        search
    ]);
    useIsomorphicLayoutEffect(function() {
        if (catchError) {
            var onError = function onError() {};
            search.addListener('error', onError);
            return function() {
                return search.removeListener('error', onError);
            };
        }
        return function() {};
    }, [
        search,
        catchError
    ]);
    return {
        results: results,
        scopedResults: scopedResults,
        uiState: uiState,
        setUiState: setUiState,
        indexUiState: indexUiState,
        setIndexUiState: setIndexUiState,
        renderState: renderState,
        indexRenderState: indexRenderState,
        addMiddlewares: addMiddlewares,
        refresh: refresh,
        status: search.status,
        error: search.error
    };
}

export { useInstantSearch };
