import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { createSendEventForHits } from '../../lib/utils/createSendEventForHits.js';
import { escapeHits, TAG_PLACEHOLDER } from '../../lib/utils/escape-highlight.js';
import { addAbsolutePosition } from '../../lib/utils/hits-absolute-position.js';
import { addQueryID } from '../../lib/utils/hits-query-id.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'frequently-bought-together',
    connector: true
});
var connectFrequentlyBoughtTogether = (function connectFrequentlyBoughtTogether(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_escapeHTML = _ref.// @MAJOR: this can default to false
        escapeHTML, escapeHTML = _ref_escapeHTML === void 0 ? true : _ref_escapeHTML, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems, objectIDs = _ref.objectIDs, limit = _ref.limit, threshold = _ref.threshold, fallbackParameters = _ref.fallbackParameters, queryParameters = _ref.queryParameters;
        if (!objectIDs || objectIDs.length === 0) {
            throw new Error(withUsage('The `objectIDs` option is required.'));
        }
        var sendEvent;
        return {
            dependsOn: 'recommend',
            $$type: 'ais.frequentlyBoughtTogether',
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
                var _this = this;
                return objectIDs.reduce(function(acc, objectID) {
                    return acc.addFrequentlyBoughtTogether({
                        objectID: objectID,
                        maxRecommendations: limit,
                        threshold: threshold,
                        // @ts-expect-error until @algolia/recommend types are updated
                        fallbackParameters: fallbackParameters ? _$1({}, fallbackParameters, escapeHTML ? TAG_PLACEHOLDER : {}) : undefined,
                        queryParameters: _$1({}, queryParameters, escapeHTML ? TAG_PLACEHOLDER : {}),
                        $$id: _this.$$id
                    });
                }, state.removeParams(this.$$id));
            }
        };
    };
});

export { connectFrequentlyBoughtTogether as default };
