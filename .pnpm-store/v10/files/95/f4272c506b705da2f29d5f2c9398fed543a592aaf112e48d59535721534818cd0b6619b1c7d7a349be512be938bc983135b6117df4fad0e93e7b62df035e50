import { _ } from '@swc/helpers/esm/_sliced_to_array.js';
import { useState, useCallback, useEffect } from 'react';
import { useIndexContext } from './useIndexContext.js';
import { useInstantSearchContext } from './useInstantSearchContext.js';

function useSearchState() {
    var search = useInstantSearchContext();
    var searchIndex = useIndexContext();
    var indexId = searchIndex.getIndexId();
    var _useState = _(useState(function() {
        return search.getUiState();
    }), 2), uiState = _useState[0], setLocalUiState = _useState[1];
    var indexUiState = uiState[indexId];
    var _useState1 = _(useState(function() {
        return search.renderState;
    }), 2), renderState = _useState1[0], setRenderState = _useState1[1];
    var indexRenderState = renderState[indexId] || {};
    var setUiState = useCallback(function(nextUiState) {
        search.setUiState(nextUiState);
    }, [
        search
    ]);
    var setIndexUiState = useCallback(function(nextIndexUiState) {
        searchIndex.setIndexUiState(nextIndexUiState);
    }, [
        searchIndex
    ]);
    useEffect(function() {
        function handleRender() {
            setLocalUiState(search.getUiState());
            setRenderState(search.renderState);
        }
        search.addListener('render', handleRender);
        // Force setting state to mitigate potential race conditions where
        // render listener is added after search results have been returned.
        // This edge case is currently not covered by the tests.
        handleRender();
        return function() {
            search.removeListener('render', handleRender);
        };
    }, [
        search
    ]);
    return {
        uiState: uiState,
        setUiState: setUiState,
        indexUiState: indexUiState,
        setIndexUiState: setIndexUiState,
        renderState: renderState,
        indexRenderState: indexRenderState
    };
}

export { useSearchState };
