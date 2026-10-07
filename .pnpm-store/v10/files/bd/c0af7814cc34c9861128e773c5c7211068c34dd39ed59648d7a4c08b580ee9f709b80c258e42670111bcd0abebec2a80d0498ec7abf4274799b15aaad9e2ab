import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$3 } from '@swc/helpers/esm/_object_without_properties.js';
import { _ as _$4 } from '@swc/helpers/esm/_to_consumable_array.js';
import { walkIndex } from '../../lib/utils/walkIndex.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { createSendEventForHits, createBindEventForHits } from '../../lib/utils/createSendEventForHits.js';
import { escapeHits, TAG_PLACEHOLDER } from '../../lib/utils/escape-highlight.js';
import { addAbsolutePosition } from '../../lib/utils/hits-absolute-position.js';
import { addQueryID } from '../../lib/utils/hits-query-id.js';
import { noop } from '../../lib/utils/noop.js';
import { isEqual } from '../../lib/utils/isEqual.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'infinite-hits',
    connector: true
});
function getStateWithoutPage(state) {
    var _ref = state || {}; _ref.page; var rest = _$3(_ref, [
        "page"
    ]);
    return rest;
}
function normalizeState(state) {
    var _ref = state || {}; _ref.clickAnalytics; _ref.userToken; var rest = _$3(_ref, [
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
            return isEqual(cachedState, getStateWithoutPage(state)) ? cachedHits : null;
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
var connectInfiniteHits = (function connectInfiniteHits(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
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
                ].concat(_$4(pages)));
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
                ].concat(_$4(pages)));
            }
        };
        var getShowPrevious = function getShowPrevious(helper, getCachedHits) {
            return function() {
                var cachedHits = getCachedHits();
                // Using the helper's `overrideStateWithoutTriggeringChangeEvent` method
                // avoid updating the browser URL when the user displays the previous page.
                helper.overrideStateWithoutTriggeringChangeEvent(_(_$1({}, helper.state), {
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
                renderFn(_(_$1({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                var widgetRenderState = this.getWidgetRenderState(renderOptions);
                renderFn(_(_$1({}, widgetRenderState), {
                    instantSearchInstance: instantSearchInstance
                }), false);
                sendEvent('view:internal', widgetRenderState.currentPageHits);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
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
                    sendEvent = createSendEventForHits({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        widgetType: this.$$type
                    });
                    bindEvent = createBindEventForHits({
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
                        results.hits = escapeHits(results.hits);
                    }
                    var hitsWithAbsolutePosition = addAbsolutePosition(results.hits, results.page, results.hitsPerPage);
                    var hitsWithAbsolutePositionAndQueryID = addQueryID(hitsWithAbsolutePosition, results.queryID);
                    var transformedHits = transformItems(hitsWithAbsolutePositionAndQueryID, {
                        results: results
                    });
                    /*
            With dynamic widgets, facets are not included in the state before their relevant widgets are mounted. Until then, we need to bail out of writing this incomplete state representation in cache.
          */ var hasDynamicWidgets = false;
                    walkIndex(instantSearchInstance.mainIndex, function(indexWidget) {
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
                return stateWithoutPage.setQueryParameters(Object.keys(TAG_PLACEHOLDER).reduce(function(acc, key) {
                    return _(_$1({}, acc), _$2({}, key, undefined));
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
                return _(_$1({}, uiState), {
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
                    widgetSearchParameters = searchParameters.setQueryParameters(TAG_PLACEHOLDER);
                }
                // The page in the search parameters is decremented by one
                // to get to the actual parameter value from the UI state.
                var page = uiState.page ? uiState.page - 1 : 0;
                return widgetSearchParameters.setQueryParameter('page', page);
            }
        };
    };
});

export { connectInfiniteHits as default };
