import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { getObjectType } from '../../lib/utils/getObjectType.js';
import { createSendEventForHits } from '../../lib/utils/createSendEventForHits.js';
import { escapeHits, TAG_PLACEHOLDER } from '../../lib/utils/escape-highlight.js';
import { addAbsolutePosition } from '../../lib/utils/hits-absolute-position.js';
import { addQueryID } from '../../lib/utils/hits-query-id.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'trending-items',
    connector: true
});
var connectTrendingItems = (function connectTrendingItems(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, facetName = _ref.facetName, facetValue = _ref.facetValue, limit = _ref.limit, threshold = _ref.threshold, fallbackParameters = _ref.fallbackParameters, queryParameters = _ref.queryParameters, _ref_escapeHTML = _ref.// @MAJOR: this can default to false
        escapeHTML, escapeHTML = _ref_escapeHTML === void 0 ? true : _ref_escapeHTML, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        if (facetName && !facetValue || !facetName && facetValue) {
            throw new Error(withUsage("When you provide facetName (received type ".concat(getObjectType(facetName), "), you must also provide facetValue (received type ").concat(getObjectType(facetValue), ").")));
        }
        var sendEvent;
        return {
            dependsOn: 'recommend',
            $$type: 'ais.trendingItems',
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
            },
            getRenderState: function getRenderState(renderState) {
                return renderState;
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, helper = param.helper, instantSearchInstance = param.instantSearchInstance;
                if (!sendEvent) {
                    sendEvent = createSendEventForHits({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        widgetType: this.$$type
                    });
                }
                if (results === null || results === undefined) {
                    return {
                        items: [],
                        widgetParams: widgetParams,
                        sendEvent: sendEvent
                    };
                }
                if (escapeHTML && results.hits.length > 0) {
                    results.hits = escapeHits(results.hits);
                }
                var itemsWithAbsolutePosition = addAbsolutePosition(results.hits, 0, 1);
                var itemsWithAbsolutePositionAndQueryID = addQueryID(itemsWithAbsolutePosition, results.queryID);
                var transformedItems = transformItems(itemsWithAbsolutePositionAndQueryID, {
                    results: results
                });
                return {
                    items: transformedItems,
                    widgetParams: widgetParams,
                    sendEvent: sendEvent
                };
            },
            dispose: function dispose(param) {
                var recommendState = param.recommendState;
                unmountFn();
                return recommendState.removeParams(this.$$id);
            },
            getWidgetParameters: function getWidgetParameters(state) {
                return state.removeParams(this.$$id).addTrendingItems({
                    facetName: facetName,
                    facetValue: facetValue,
                    maxRecommendations: limit,
                    threshold: threshold,
                    fallbackParameters: fallbackParameters ? _$1({}, fallbackParameters, escapeHTML ? TAG_PLACEHOLDER : {}) : undefined,
                    queryParameters: _$1({}, queryParameters, escapeHTML ? TAG_PLACEHOLDER : {}),
                    $$id: this.$$id
                });
            }
        };
    };
});

export { connectTrendingItems as default };
