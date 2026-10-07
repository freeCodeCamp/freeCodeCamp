import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { safelyRunOnBrowser } from '../../lib/utils/safelyRunOnBrowser.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'powered-by',
    connector: true
});
/**
 * **PoweredBy** connector provides the logic to build a custom widget that will displays
 * the logo to redirect to Algolia.
 */ var connectPoweredBy = function connectPoweredBy(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    var defaultUrl = 'https://www.algolia.com/?' + 'utm_source=instantsearch.js&' + 'utm_medium=website&' + "utm_content=".concat(safelyRunOnBrowser(function(param) {
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
                renderFn(_(_$1({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_(_$1({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
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

export { connectPoweredBy as default };
