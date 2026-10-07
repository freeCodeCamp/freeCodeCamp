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
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _utils = require("../../lib/utils");
var _Paginator = /*#__PURE__*/ _interop_require_default._(require("./Paginator"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'pagination',
    connector: true
});
/**
 * **Pagination** connector provides the logic to build a widget that will let the user
 * choose the current page of the results.
 *
 * When using the pagination with Algolia, you should be aware that the engine won't provide you pages
 * beyond the 1000th hits by default. You can find more information on the [Algolia documentation](https://www.algolia.com/doc/guides/searching/pagination/#pagination-limitations).
 */ var connectPagination = function connectPagination(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, totalPages = _ref.totalPages, _ref_padding = _ref.padding, padding = _ref_padding === void 0 ? 3 : _ref_padding;
        var pager = new _Paginator.default({
            currentPage: 0,
            total: 0,
            padding: padding
        });
        var connectorState = {};
        function getMaxPage(param) {
            var nbPages = param.nbPages;
            return totalPages !== undefined ? Math.min(totalPages, nbPages) : nbPages;
        }
        return {
            $$type: 'ais.pagination',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.setQueryParameter('page', undefined);
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var page = searchParameters.page || 0;
                if (!page) {
                    return uiState;
                }
                return _object_spread_props._(_object_spread._({}, uiState), {
                    page: page + 1
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var page = uiState.page ? uiState.page - 1 : 0;
                return searchParameters.setQueryParameter('page', page);
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, helper = param.helper, state = param.state, createURL = param.createURL;
                if (!connectorState.refine) {
                    connectorState.refine = function(page) {
                        helper.setPage(page);
                        helper.search();
                    };
                }
                if (!connectorState.createURL) {
                    connectorState.createURL = function(page) {
                        return createURL(function(uiState) {
                            return _object_spread_props._(_object_spread._({}, uiState), {
                                page: page + 1
                            });
                        });
                    };
                }
                var page = state.page || 0;
                var nbPages = getMaxPage(results || {
                    nbPages: 0
                });
                pager.currentPage = page;
                pager.total = nbPages;
                return {
                    createURL: connectorState.createURL,
                    refine: connectorState.refine,
                    canRefine: nbPages > 1,
                    currentRefinement: page,
                    nbHits: (results === null || results === void 0 ? void 0 : results.nbHits) || 0,
                    nbPages: nbPages,
                    pages: results ? pager.pages() : [],
                    isFirstPage: pager.isFirstPage(),
                    isLastPage: pager.isLastPage(),
                    widgetParams: widgetParams
                };
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    pagination: this.getWidgetRenderState(renderOptions)
                });
            }
        };
    };
};
var _default = connectPagination;
