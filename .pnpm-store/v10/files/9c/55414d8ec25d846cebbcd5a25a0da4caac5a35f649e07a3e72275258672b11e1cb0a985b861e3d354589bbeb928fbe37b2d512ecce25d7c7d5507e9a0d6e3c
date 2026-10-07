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
    name: 'hits',
    connector: true
});
var _default = function connectHits(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_escapeHTML = _ref.// @MAJOR: this can default to false
        escapeHTML, escapeHTML = _ref_escapeHTML === void 0 ? true : _ref_escapeHTML, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        var sendEvent;
        var bindEvent;
        return {
            $$type: 'ais.hits',
            init: function init(initOptions) {
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var renderState = this.getWidgetRenderState(renderOptions);
                renderFn(_object_spread_props._(_object_spread._({}, renderState), {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
                renderState.sendEvent('view:internal', renderState.items);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    hits: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, helper = param.helper, instantSearchInstance = param.instantSearchInstance;
                var _results_renderingContent_widgets_banners, _results_renderingContent_widgets, _results_renderingContent;
                if (!sendEvent) {
                    sendEvent = (0, _utils.createSendEventForHits)({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        widgetType: this.$$type
                    });
                }
                if (!bindEvent) {
                    bindEvent = (0, _utils.createBindEventForHits)({
                        helper: helper,
                        widgetType: this.$$type,
                        instantSearchInstance: instantSearchInstance
                    });
                }
                if (!results) {
                    return {
                        hits: [],
                        items: [],
                        results: undefined,
                        banner: undefined,
                        sendEvent: sendEvent,
                        bindEvent: bindEvent,
                        widgetParams: widgetParams
                    };
                }
                if (escapeHTML && results.hits.length > 0) {
                    results.hits = (0, _utils.escapeHits)(results.hits);
                }
                var hitsWithAbsolutePosition = (0, _utils.addAbsolutePosition)(results.hits, results.page, results.hitsPerPage);
                var hitsWithAbsolutePositionAndQueryID = (0, _utils.addQueryID)(hitsWithAbsolutePosition, results.queryID);
                var items = transformItems(hitsWithAbsolutePositionAndQueryID, {
                    results: results
                });
                var banner = (_results_renderingContent = results.renderingContent) === null || _results_renderingContent === void 0 ? void 0 : (_results_renderingContent_widgets = _results_renderingContent.widgets) === null || _results_renderingContent_widgets === void 0 ? void 0 : (_results_renderingContent_widgets_banners = _results_renderingContent_widgets.banners) === null || _results_renderingContent_widgets_banners === void 0 ? void 0 : _results_renderingContent_widgets_banners[0];
                return {
                    hits: items,
                    items: items,
                    results: results,
                    banner: banner,
                    sendEvent: sendEvent,
                    bindEvent: bindEvent,
                    widgetParams: widgetParams
                };
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                if (!escapeHTML) {
                    return state;
                }
                return state.setQueryParameters(Object.keys(_utils.TAG_PLACEHOLDER).reduce(function(acc, key) {
                    return _object_spread_props._(_object_spread._({}, acc), _define_property._({}, key, undefined));
                }, {}));
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state, _uiState) {
                if (!escapeHTML) {
                    return state;
                }
                // @MAJOR: set this globally, not in the Hits widget to allow Hits to be conditionally used
                return state.setQueryParameters(_utils.TAG_PLACEHOLDER);
            }
        };
    };
};
