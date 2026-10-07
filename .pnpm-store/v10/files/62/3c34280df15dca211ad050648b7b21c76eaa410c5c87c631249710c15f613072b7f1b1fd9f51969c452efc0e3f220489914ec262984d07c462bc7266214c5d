import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import connectDynamicWidgets from '../../connectors/dynamic-widgets/connectDynamicWidgets.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { getWidgetAttribute } from '../../lib/utils/getWidgetAttribute.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'dynamic-widgets'
});
var suit = component('DynamicWidgets');
function createContainer(rootContainer) {
    var container = document.createElement('div');
    container.className = suit({
        descendantName: 'widget'
    });
    rootContainer.appendChild(container);
    return container;
}
var dynamicWidgets = function dynamicWidgets(widgetParams) {
    var _ref = widgetParams || {}, containerSelector = _ref.container, widgets = _ref.widgets, fallbackWidget = _ref.fallbackWidget, otherWidgetParams = _(_ref, [
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
    var userContainer = getContainerNode(containerSelector);
    var rootContainer = document.createElement('div');
    rootContainer.className = suit();
    var containers = new Map();
    var connectorWidgets = [];
    var makeWidget = connectDynamicWidgets(function(param, isFirstRender) {
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
    var widget = makeWidget(_$1(_$2({}, otherWidgetParams), {
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
    return _$1(_$2({}, widget), {
        init: function init(initOptions) {
            widgets.forEach(function(cb) {
                var container = createContainer(rootContainer);
                var childWidget = cb(container);
                var attribute = getWidgetAttribute(childWidget, initOptions);
                containers.set(attribute, container);
                connectorWidgets.push(childWidget);
            });
            widget.init(initOptions);
        },
        $$widgetType: 'ais.dynamicWidgets'
    });
};

export { dynamicWidgets as default };
