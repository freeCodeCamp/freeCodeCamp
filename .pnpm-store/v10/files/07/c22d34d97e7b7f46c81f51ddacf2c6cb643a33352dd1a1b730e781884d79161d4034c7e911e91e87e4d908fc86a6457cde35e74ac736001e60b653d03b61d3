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
    name: 'powered-by',
    connector: true
});
/**
 * **PoweredBy** connector provides the logic to build a custom widget that will displays
 * the logo to redirect to Algolia.
 */ var connectPoweredBy = function connectPoweredBy(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    var defaultUrl = 'https://www.algolia.com/?' + 'utm_source=instantsearch.js&' + 'utm_medium=website&' + "utm_content=".concat((0, _utils.safelyRunOnBrowser)(function(param) {
        var window = param.window;
        var _window_location;
        return ((_window_location = window.location) === null || _window_location === void 0 ? void 0 : _window_location.hostname) || '';
    }, {
        fallback: function fallback() {
            return '';
        }
    }), "&") + 'utm_campaign=poweredby';
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_url = _ref.url, url = _ref_url === void 0 ? defaultUrl : _ref_url;
        return {
            $$type: 'ais.poweredBy',
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
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    poweredBy: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState() {
                return {
                    url: url,
                    widgetParams: widgetParams
                };
            },
            dispose: function dispose() {
                unmountFn();
            }
        };
    };
};
var _default = connectPoweredBy;
