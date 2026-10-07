'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _define_property = require("@swc/helpers/_/_define_property");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'autocomplete',
    connector: true
});
var connectAutocomplete = function connectAutocomplete(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_escapeHTML = _ref.// @MAJOR: this can default to false
        escapeHTML, escapeHTML = _ref_escapeHTML === void 0 ? true : _ref_escapeHTML, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(indices) {
            return indices;
        } : _ref_transformItems, tmp = _ref.future, _ref1 = tmp === void 0 ? {} : tmp, _ref_undefinedEmptyQuery = _ref1.undefinedEmptyQuery, undefinedEmptyQuery = _ref_undefinedEmptyQuery === void 0 ? false : _ref_undefinedEmptyQuery;
        (0, _utils.warning)(!widgetParams.indices, "\nThe option `indices` has been removed from the Autocomplete connector.\n\nThe indices to target are now inferred from the widgets tree.\n".concat(Array.isArray(widgetParams.indices) ? "\nAn alternative would be:\n\nconst autocomplete = connectAutocomplete(renderer);\n\nsearch.addWidgets([\n  ".concat(widgetParams.indices.map(function(param) {
            var value = param.value;
            return "index({ indexName: '".concat(value, "' }),");
        }).join('\n  '), "\n  autocomplete()\n]);\n") : '', "\n      "));
        var connectorState = {};
        return {
            $$type: 'ais.autocomplete',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                var renderState = this.getWidgetRenderState(renderOptions);
                renderState.indices.forEach(function(param) {
                    var sendEvent = param.sendEvent, hits = param.hits;
                    sendEvent('view:internal', hits);
                });
                renderFn(_object_spread_props._(_object_spread._({}, renderState), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    autocomplete: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var _this = this;
                var helper = param.helper, state = param.state, scopedResults = param.scopedResults, instantSearchInstance = param.instantSearchInstance;
                if (!connectorState.refine) {
                    connectorState.refine = function(query) {
                        helper.setQuery(query).search();
                    };
                }
                var sendEventMap = {};
                var indices = scopedResults.map(function(scopedResult) {
                    var _scopedResult_results;
                    // We need to escape the hits because highlighting
                    // exposes HTML tags to the end-user.
                    if (scopedResult.results) {
                        scopedResult.results.hits = escapeHTML ? (0, _utils.escapeHits)(scopedResult.results.hits) : scopedResult.results.hits;
                    }
                    sendEventMap[scopedResult.indexId] = (0, _utils.createSendEventForHits)({
                        instantSearchInstance: instantSearchInstance,
                        helper: scopedResult.helper,
                        widgetType: _this.$$type
                    });
                    var hits = scopedResult.results ? (0, _utils.addQueryID)((0, _utils.addAbsolutePosition)(scopedResult.results.hits, scopedResult.results.page, scopedResult.results.hitsPerPage), scopedResult.results.queryID) : [];
                    return {
                        indexId: scopedResult.indexId,
                        indexName: ((_scopedResult_results = scopedResult.results) === null || _scopedResult_results === void 0 ? void 0 : _scopedResult_results.index) || '',
                        hits: hits,
                        results: scopedResult.results || {}
                    };
                });
                return {
                    currentRefinement: undefinedEmptyQuery ? state.query : state.query || '',
                    indices: transformItems(indices).map(function(transformedIndex) {
                        return _object_spread_props._(_object_spread._({}, transformedIndex), {
                            sendEvent: sendEventMap[transformedIndex.indexId]
                        });
                    }),
                    refine: connectorState.refine,
                    widgetParams: widgetParams
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var query = undefinedEmptyQuery ? searchParameters.query : searchParameters.query || '';
                if (!query || query === '' || uiState && uiState.query === query) {
                    return uiState;
                }
                return _object_spread_props._(_object_spread._({}, uiState), {
                    query: query
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var parameters = {
                    query: undefinedEmptyQuery ? uiState.query : uiState.query || ''
                };
                if (!escapeHTML) {
                    return searchParameters.setQueryParameters(parameters);
                }
                return searchParameters.setQueryParameters(_object_spread._({}, parameters, _utils.TAG_PLACEHOLDER));
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                var stateWithoutQuery = state.setQueryParameter('query', undefined);
                if (!escapeHTML) {
                    return stateWithoutQuery;
                }
                return stateWithoutQuery.setQueryParameters(Object.keys(_utils.TAG_PLACEHOLDER).reduce(function(acc, key) {
                    return _object_spread_props._(_object_spread._({}, acc), _define_property._({}, key, undefined));
                }, {}));
            }
        };
    };
};
var _default = connectAutocomplete;
