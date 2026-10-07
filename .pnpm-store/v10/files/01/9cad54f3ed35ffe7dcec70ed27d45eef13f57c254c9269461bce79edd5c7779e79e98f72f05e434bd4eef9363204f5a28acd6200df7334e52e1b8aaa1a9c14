'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useSearchState", {
    enumerable: true,
    get: function() {
        return useSearchState;
    }
});
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _react = require("react");
var _useIndexContext = require("./useIndexContext");
var _useInstantSearchContext = require("./useInstantSearchContext");
function useSearchState() {
    var search = (0, _useInstantSearchContext.useInstantSearchContext)();
    var searchIndex = (0, _useIndexContext.useIndexContext)();
    var indexId = searchIndex.getIndexId();
    var _useState = _sliced_to_array._((0, _react.useState)(function() {
        return search.getUiState();
    }), 2), uiState = _useState[0], setLocalUiState = _useState[1];
    var indexUiState = uiState[indexId];
    var _useState1 = _sliced_to_array._((0, _react.useState)(function() {
        return search.renderState;
    }), 2), renderState = _useState1[0], setRenderState = _useState1[1];
    var indexRenderState = renderState[indexId] || {};
    var setUiState = (0, _react.useCallback)(function(nextUiState) {
        search.setUiState(nextUiState);
    }, [
        search
    ]);
    var setIndexUiState = (0, _react.useCallback)(function(nextIndexUiState) {
        searchIndex.setIndexUiState(nextIndexUiState);
    }, [
        searchIndex
    ]);
    (0, _react.useEffect)(function() {
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
