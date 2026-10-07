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
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'infinite-hits',
    connector: true
});
function getStateWithoutPage(state) {
    var _ref = state || {}; _ref.page; var rest = _object_without_properties._(_ref, [
        "page"
    ]);
    return rest;
}
function normalizeState(state) {
    var _ref = state || {}; _ref.clickAnalytics; _ref.userToken; var rest = _object_without_properties._(_ref, [
        "clickAnalytics",
        "userToken"
    ]);
    return rest;
}
function getInMemoryCache() {
    var cachedHits = null;
    var cachedState = null;
    return {
        read: function read(param) {
            var state = param.state;
            return (0, _utils.isEqual)(cachedState, getStateWithoutPage(state)) ? cachedHits : null;
        },
        write: function write(param) {
            var state = param.state, hits = param.hits;
            cachedState = getStateWithoutPage(state);
            cachedHits = hits;
        }
    };
}
function extractHitsFromCachedHits(cachedHits) {
    return Object.keys(cachedHits).map(Number).sort(function(a, b) {
        return a - b;
    }).reduce(function(acc, page) {
        return acc.concat(cachedHits[page]);
    }, []);
}
var _default = function connectInfiniteHits(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_escapeHTML = _ref.// @MAJOR: this can default to false
        escapeHTML, escapeHTML = _ref_escapeHTML === void 0 ? true : _ref_escapeHTML, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems, _ref_cache = _ref.cache, cache = _ref_cache === void 0 ? getInMemoryCache() : _ref_cache;
        var showPrevious;
        var showMore;
        var sendEvent;
        var bindEvent;
        var getFirstReceivedPage = function getFirstReceivedPage(state, cachedHits) {
            var _state_page = state.page, page = _state_page === void 0 ? 0 : _state_page;
            var pages = Object.keys(cachedHits).map(Number);
            if (pages.length === 0) {
                return page;
            } else {
                var _Math;
                return (_Math = Math).min.apply(_Math, [
                    page
                ].concat(_to_consumable_array._(pages)));
            }
        };
        var getLastReceivedPage = function getLastReceivedPage(state, cachedHits) {
            var _state_page = state.page, page = _state_page === void 0 ? 0 : _state_page;
            var pages = Object.keys(cachedHits).map(Number);
            if (pages.length === 0) {
                return page;
            } else {
                var _Math;
                return (_Math = Math).max.apply(_Math, [
                    page
                ].concat(_to_consumable_array._(pages)));
            }
        };
        var getShowPrevious = function getShowPrevious(helper, getCachedHits) {
            return function() {
                var cachedHits = getCachedHits();
                // Using the helper's `overrideStateWithoutTriggeringChangeEvent` method
                // avoid updating the browser URL when the user displays the previous page.
                helper.overrideStateWithoutTriggeringChangeEvent(_object_spread_props._(_object_spread._({}, helper.state), {
                    page: getFirstReceivedPage(helper.state, cachedHits) - 1
                })).searchWithoutTriggeringOnStateChange();
            };
        };
        var getShowMore = function getShowMore(helper, getCachedHits) {
            return function() {
                var cachedHits = getCachedHits();
                helper.setPage(getLastReceivedPage(helper.state, cachedHits) + 1).search();
            };
        };
        return {
            $$type: 'ais.infiniteHits',
            init: function init(initOptions) {
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                var widgetRenderState = this.getWidgetRenderState(renderOptions);
                renderFn(_object_spread_props._(_object_spread._({}, widgetRenderState), {
                    instantSearchInstance: instantSearchInstance
                }), false);
                sendEvent('view:internal', widgetRenderState.currentPageHits);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    infiniteHits: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, helper = param.helper, parent = param.parent, existingState = param.state, instantSearchInstance = param.instantSearchInstance;
                var _results_renderingContent_widgets_banners, _results_renderingContent_widgets, _results_renderingContent;
                var getCacheHits = function getCacheHits() {
                    var state = parent.getPreviousState() || existingState;
                    return cache.read({
                        state: normalizeState(state)
                    }) || {};
                };
                var isFirstPage;
                var currentPageHits = [];
                /**
         * We bail out of optimistic UI here, as the cache is based on search
         * parameters, and we don't want to invalidate the cache when the search
         * is loading.
         */ var state = parent.getPreviousState() || existingState;
                var cachedHits = getCacheHits();
                var banner = results === null || results === void 0 ? void 0 : (_results_renderingContent = results.renderingContent) === null || _results_renderingContent === void 0 ? void 0 : (_results_renderingContent_widgets = _results_renderingContent.widgets) === null || _results_renderingContent_widgets === void 0 ? void 0 : (_results_renderingContent_widgets_banners = _results_renderingContent_widgets.banners) === null || _results_renderingContent_widgets_banners === void 0 ? void 0 : _results_renderingContent_widgets_banners[0];
                if (!showPrevious) {
                    showPrevious = function showPrevious() {
                        return getShowPrevious(helper, getCacheHits)();
                    };
                    showMore = function showMore() {
                        return getShowMore(helper, getCacheHits)();
                    };
                }
                if (!sendEvent) {
                    sendEvent = (0, _utils.createSendEventForHits)({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        widgetType: this.$$type
                    });
                    bindEvent = (0, _utils.createBindEventForHits)({
                        helper: helper,
                        widgetType: this.$$type,
                        instantSearchInstance: instantSearchInstance
                    });
                }
                if (!results) {
                    isFirstPage = state.page === undefined || getFirstReceivedPage(state, cachedHits) === 0;
                } else {
                    var _state_disjunctiveFacets, _state_hierarchicalFacets;
                    var _state_page = state.page, page = _state_page === void 0 ? 0 : _state_page;
                    if (escapeHTML && results.hits.length > 0) {
                        results.hits = (0, _utils.escapeHits)(results.hits);
                    }
                    var hitsWithAbsolutePosition = (0, _utils.addAbsolutePosition)(results.hits, results.page, results.hitsPerPage);
                    var hitsWithAbsolutePositionAndQueryID = (0, _utils.addQueryID)(hitsWithAbsolutePosition, results.queryID);
                    var transformedHits = transformItems(hitsWithAbsolutePositionAndQueryID, {
                        results: results
                    });
                    /*
            With dynamic widgets, facets are not included in the state before their relevant widgets are mounted. Until then, we need to bail out of writing this incomplete state representation in cache.
          */ var hasDynamicWidgets = false;
                    (0, _utils.walkIndex)(instantSearchInstance.mainIndex, function(indexWidget) {
                        if (!hasDynamicWidgets && indexWidget.getWidgets().some(function(param) {
                            var $$type = param.$$type;
                            return $$type === 'ais.dynamicWidgets';
                        })) {
                            hasDynamicWidgets = true;
                        }
                    });
                    var hasNoFacets = !((_state_disjunctiveFacets = state.disjunctiveFacets) === null || _state_disjunctiveFacets === void 0 ? void 0 : _state_disjunctiveFacets.length) && !(state.facets || []).filter(function(f) {
                        return f !== '*';
                    }).length && !((_state_hierarchicalFacets = state.hierarchicalFacets) === null || _state_hierarchicalFacets === void 0 ? void 0 : _state_hierarchicalFacets.length);
                    if (cachedHits[page] === undefined && !results.__isArtificial && instantSearchInstance.status === 'idle' && !(hasDynamicWidgets && hasNoFacets)) {
                        cachedHits[page] = transformedHits;
                        cache.write({
                            state: normalizeState(state),
                            hits: cachedHits
                        });
                    }
                    currentPageHits = transformedHits;
                    isFirstPage = getFirstReceivedPage(state, cachedHits) === 0;
                }
                var items = extractHitsFromCachedHits(cachedHits);
                var isLastPage = results ? results.nbPages <= getLastReceivedPage(state, cachedHits) + 1 : true;
                return {
                    hits: items,
                    items: items,
                    currentPageHits: currentPageHits,
                    sendEvent: sendEvent,
                    bindEvent: bindEvent,
                    banner: banner,
                    results: results || undefined,
                    showPrevious: showPrevious,
                    showMore: showMore,
                    isFirstPage: isFirstPage,
                    isLastPage: isLastPage,
                    widgetParams: widgetParams
                };
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                var stateWithoutPage = state.setQueryParameter('page', undefined);
                if (!escapeHTML) {
                    return stateWithoutPage;
                }
                return stateWithoutPage.setQueryParameters(Object.keys(_utils.TAG_PLACEHOLDER).reduce(function(acc, key) {
                    return _object_spread_props._(_object_spread._({}, acc), _define_property._({}, key, undefined));
                }, {}));
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var page = searchParameters.page || 0;
                if (!page) {
                    // return without adding `page` to uiState
                    // because we don't want `page=1` in the URL
                    return uiState;
                }
                return _object_spread_props._(_object_spread._({}, uiState), {
                    // The page in the UI state is incremented by one
                    // to expose the user value (not `0`).
                    page: page + 1
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var widgetSearchParameters = searchParameters;
                if (escapeHTML) {
                    // @MAJOR: set this globally, not in the InfiniteHits widget to allow InfiniteHits to be conditionally used
                    widgetSearchParameters = searchParameters.setQueryParameters(_utils.TAG_PLACEHOLDER);
                }
                // The page in the search parameters is decremented by one
                // to get to the actual parameter value from the UI state.
                var page = uiState.page ? uiState.page - 1 : 0;
                return widgetSearchParameters.setQueryParameter('page', page);
            }
        };
    };
};
