'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useInstantSearch", {
    enumerable: true,
    get: function() {
        return useInstantSearch;
    }
});
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _react = require("react");
var _useInstantSearchContext = require("../lib/useInstantSearchContext");
var _useIsomorphicLayoutEffect = require("../lib/useIsomorphicLayoutEffect");
var _useSearchResults = require("../lib/useSearchResults");
var _useSearchState = require("../lib/useSearchState");
function useInstantSearch() {
    var catchError = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).catchError;
    var search = (0, _useInstantSearchContext.useInstantSearchContext)();
    var _useSearchState1 = (0, _useSearchState.useSearchState)(), uiState = _useSearchState1.uiState, setUiState = _useSearchState1.setUiState, indexUiState = _useSearchState1.indexUiState, setIndexUiState = _useSearchState1.setIndexUiState, renderState = _useSearchState1.renderState, indexRenderState = _useSearchState1.indexRenderState;
    var _useSearchResults1 = (0, _useSearchResults.useSearchResults)(), results = _useSearchResults1.results, scopedResults = _useSearchResults1.scopedResults;
    var addMiddlewares = (0, _react.useCallback)(function() {
        for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++){
            middlewares[_key] = arguments[_key];
        }
        var _search;
        (_search = search).use.apply(_search, _to_consumable_array._(middlewares));
        return function() {
            var _search;
            (_search = search).unuse.apply(_search, _to_consumable_array._(middlewares));
        };
    }, [
        search
    ]);
    var refresh = (0, _react.useCallback)(function() {
        search.refresh();
    }, [
        search
    ]);
    (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function() {
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
