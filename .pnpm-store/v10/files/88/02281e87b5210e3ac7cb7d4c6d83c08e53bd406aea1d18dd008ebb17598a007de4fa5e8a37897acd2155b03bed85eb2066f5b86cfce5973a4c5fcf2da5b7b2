import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { createSendEventForHits, createBindEventForHits } from '../../lib/utils/createSendEventForHits.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { escapeHits, TAG_PLACEHOLDER } from '../../lib/utils/escape-highlight.js';
import { addAbsolutePosition } from '../../lib/utils/hits-absolute-position.js';
import { addQueryID } from '../../lib/utils/hits-query-id.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'hits',
    connector: true
});
var connectHits = (function connectHits(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
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
                renderFn(_(_$1({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var renderState = this.getWidgetRenderState(renderOptions);
                renderFn(_(_$1({}, renderState), {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
                renderState.sendEvent('view:internal', renderState.items);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    hits: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, helper = param.helper, instantSearchInstance = param.instantSearchInstance;
                var _results_renderingContent_widgets_banners, _results_renderingContent_widgets, _results_renderingContent;
                if (!sendEvent) {
                    sendEvent = createSendEventForHits({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        widgetType: this.$$type
                    });
                }
                if (!bindEvent) {
                    bindEvent = createBindEventForHits({
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
                    results.hits = escapeHits(results.hits);
                }
                var hitsWithAbsolutePosition = addAbsolutePosition(results.hits, results.page, results.hitsPerPage);
                var hitsWithAbsolutePositionAndQueryID = addQueryID(hitsWithAbsolutePosition, results.queryID);
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
                return state.setQueryParameters(Object.keys(TAG_PLACEHOLDER).reduce(function(acc, key) {
                    return _(_$1({}, acc), _$2({}, key, undefined));
                }, {}));
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state, _uiState) {
                if (!escapeHTML) {
                    return state;
                }
                // @MAJOR: set this globally, not in the Hits widget to allow Hits to be conditionally used
                return state.setQueryParameters(TAG_PLACEHOLDER);
            }
        };
    };
});

export { connectHits as default };
