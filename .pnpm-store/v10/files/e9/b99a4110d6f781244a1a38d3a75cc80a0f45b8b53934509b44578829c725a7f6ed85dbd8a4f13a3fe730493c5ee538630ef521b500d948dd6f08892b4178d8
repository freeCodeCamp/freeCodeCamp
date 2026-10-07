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
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _connectDynamicWidgets = /*#__PURE__*/ _interop_require_default._(require("../../connectors/dynamic-widgets/connectDynamicWidgets"));
var _suit = require("../../lib/suit");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'dynamic-widgets'
});
var suit = (0, _suit.component)('DynamicWidgets');
function createContainer(rootContainer) {
    var container = document.createElement('div');
    container.className = suit({
        descendantName: 'widget'
    });
    rootContainer.appendChild(container);
    return container;
}
var dynamicWidgets = function dynamicWidgets(widgetParams) {
    var _ref = widgetParams || {}, containerSelector = _ref.container, widgets = _ref.widgets, fallbackWidget = _ref.fallbackWidget, otherWidgetParams = _object_without_properties._(_ref, [
        "container",
        "widgets",
        "fallbackWidget"
    ]);
    if (!containerSelector) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    if (!(widgets && Array.isArray(widgets) && widgets.every(function(widget) {
        return typeof widget === 'function';
    }))) {
        throw new Error(withUsage('The `widgets` option expects an array of callbacks.'));
    }
    var userContainer = (0, _utils.getContainerNode)(containerSelector);
    var rootContainer = document.createElement('div');
    rootContainer.className = suit();
    var containers = new Map();
    var connectorWidgets = [];
    var makeWidget = (0, _connectDynamicWidgets.default)(function(param, isFirstRender) {
        var attributesToRender = param.attributesToRender;
        if (isFirstRender) {
            userContainer.appendChild(rootContainer);
        }
        attributesToRender.forEach(function(attribute) {
            if (!containers.has(attribute)) {
                return;
            }
            var container = containers.get(attribute);
            rootContainer.appendChild(container);
        });
    }, function() {
        userContainer.removeChild(rootContainer);
    });
    var widget = makeWidget(_object_spread_props._(_object_spread._({}, otherWidgetParams), {
        widgets: connectorWidgets,
        fallbackWidget: typeof fallbackWidget === 'function' ? function(param) {
            var attribute = param.attribute;
            var container = createContainer(rootContainer);
            containers.set(attribute, container);
            return fallbackWidget({
                attribute: attribute,
                container: container
            });
        } : undefined
    }));
    return _object_spread_props._(_object_spread._({}, widget), {
        init: function init(initOptions) {
            widgets.forEach(function(cb) {
                var container = createContainer(rootContainer);
                var childWidget = cb(container);
                var attribute = (0, _utils.getWidgetAttribute)(childWidget, initOptions);
                containers.set(attribute, container);
                connectorWidgets.push(childWidget);
            });
            widget.init(initOptions);
        },
        $$widgetType: 'ais.dynamicWidgets'
    });
};
var _default = dynamicWidgets;
