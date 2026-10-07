import { createInitArgs } from '../lib/utils/render-args.js';
import { safelyRunOnBrowser } from '../lib/utils/safelyRunOnBrowser.js';
import { getAlgoliaAgent } from '../lib/utils/getAlgoliaAgent.js';

function extractWidgetPayload(widgets, instantSearchInstance, payload) {
    var initOptions = createInitArgs(instantSearchInstance, instantSearchInstance.mainIndex, instantSearchInstance._initialUiState);
    widgets.forEach(function(widget) {
        var widgetParams = {};
        if (widget.getWidgetRenderState) {
            var renderState = widget.getWidgetRenderState(initOptions);
            if (renderState && renderState.widgetParams) {
                // casting, as we just earlier checked widgetParams exists, and thus an object
                widgetParams = renderState.widgetParams;
            }
        }
        // since we destructure in all widgets, the parameters with defaults are set to "undefined"
        var params = Object.keys(widgetParams).filter(function(key) {
            return widgetParams[key] !== undefined;
        });
        payload.widgets.push({
            type: widget.$$type,
            widgetType: widget.$$widgetType,
            params: params
        });
        if (widget.$$type === 'ais.index') {
            extractWidgetPayload(widget.getWidgets(), instantSearchInstance, payload);
        }
    });
}
function isMetadataEnabled() {
    return safelyRunOnBrowser(function(param) {
        var window = param.window;
        var _window_navigator_userAgent, _window_navigator;
        return ((_window_navigator = window.navigator) === null || _window_navigator === void 0 ? void 0 : (_window_navigator_userAgent = _window_navigator.userAgent) === null || _window_navigator_userAgent === void 0 ? void 0 : _window_navigator_userAgent.indexOf('Algolia Crawler')) > -1;
    }, {
        fallback: function fallback() {
            return false;
        }
    });
}
/**
 * Exposes the metadata of mounted widgets in a custom
 * `<meta name="instantsearch:widgets" />` tag. The metadata per widget is:
 * - applied parameters
 * - widget name
 * - connector name
 */ function createMetadataMiddleware() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref_$$internal = _ref.$$internal, $$internal = _ref_$$internal === void 0 ? false : _ref_$$internal;
    return function(param) {
        var instantSearchInstance = param.instantSearchInstance;
        var payload = {
            widgets: []
        };
        var payloadContainer = document.createElement('meta');
        var refNode = document.querySelector('head');
        payloadContainer.name = 'instantsearch:widgets';
        return {
            $$type: 'ais.metadata',
            $$internal: $$internal,
            onStateChange: function onStateChange() {},
            subscribe: function subscribe() {
                // using setTimeout here to delay extraction until widgets have been added in a tick (e.g. Vue)
                setTimeout(function() {
                    payload.ua = getAlgoliaAgent(instantSearchInstance.client);
                    extractWidgetPayload(instantSearchInstance.mainIndex.getWidgets(), instantSearchInstance, payload);
                    instantSearchInstance.middleware.forEach(function(middleware) {
                        return payload.widgets.push({
                            middleware: true,
                            type: middleware.instance.$$type,
                            internal: middleware.instance.$$internal
                        });
                    });
                    payloadContainer.content = JSON.stringify(payload);
                    refNode.appendChild(payloadContainer);
                }, 0);
            },
            started: function started() {},
            unsubscribe: function unsubscribe() {
                payloadContainer.remove();
            }
        };
    };
}

export { createMetadataMiddleware, isMetadataEnabled };
