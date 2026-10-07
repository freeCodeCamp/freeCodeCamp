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
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'looking-similar',
    connector: true
});
var _default = function connectLookingSimilar(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_escapeHTML = _ref.// @MAJOR: this can default to false
        escapeHTML, escapeHTML = _ref_escapeHTML === void 0 ? true : _ref_escapeHTML, objectIDs = _ref.objectIDs, limit = _ref.limit, threshold = _ref.threshold, fallbackParameters = _ref.fallbackParameters, queryParameters = _ref.queryParameters, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        if (!objectIDs || objectIDs.length === 0) {
            throw new Error(withUsage('The `objectIDs` option is required.'));
        }
        var sendEvent;
        return {
            dependsOn: 'recommend',
            $$type: 'ais.lookingSimilar',
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
            },
            getRenderState: function getRenderState(renderState) {
                return renderState;
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, helper = param.helper, instantSearchInstance = param.instantSearchInstance;
                if (!sendEvent) {
                    sendEvent = (0, _utils.createSendEventForHits)({
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
                    results.hits = (0, _utils.escapeHits)(results.hits);
                }
                var itemsWithAbsolutePosition = (0, _utils.addAbsolutePosition)(results.hits, 0, 1);
                var itemsWithAbsolutePositionAndQueryID = (0, _utils.addQueryID)(itemsWithAbsolutePosition, results.queryID);
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
                    return acc.addLookingSimilar({
                        objectID: objectID,
                        maxRecommendations: limit,
                        threshold: threshold,
                        fallbackParameters: fallbackParameters ? _object_spread._({}, fallbackParameters, escapeHTML ? _utils.TAG_PLACEHOLDER : {}) : undefined,
                        queryParameters: _object_spread._({}, queryParameters, escapeHTML ? _utils.TAG_PLACEHOLDER : {}),
                        $$id: _this.$$id
                    });
                }, state.removeParams(this.$$id));
            }
        };
    };
};
