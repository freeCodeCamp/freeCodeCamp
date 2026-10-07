import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { _ as _$1 } from '@swc/helpers/esm/_type_of.js';
import React__default, { Fragment } from 'react';
import { useDynamicWidgets } from '../connectors/useDynamicWidgets.js';
import { invariant } from '../lib/invariant.js';

function DefaultFallbackComponent() {
    return null;
}
function DynamicWidgets(_0) {
    var children = _0.children, tmp = _0.fallbackComponent, Fallback = tmp === void 0 ? DefaultFallbackComponent : tmp, props = _(_0, [
        "children",
        "fallbackComponent"
    ]);
    var FallbackComponent = React__default.useRef(Fallback);
    var attributesToRender = useDynamicWidgets(props, {
        $$widgetType: 'ais.dynamicWidgets'
    }).attributesToRender;
    var widgets = new Map();
    React__default.Children.forEach(children, function(child) {
        var attribute = getWidgetAttribute(child);
        invariant(attribute !== undefined);
        widgets.set(attribute, child);
    });
    return /*#__PURE__*/ React__default.createElement(React__default.Fragment, null, attributesToRender.map(function(attribute) {
        return /*#__PURE__*/ React__default.createElement(Fragment, {
            key: attribute
        }, widgets.get(attribute) || /*#__PURE__*/ React__default.createElement(FallbackComponent.current, {
            attribute: attribute
        }));
    }));
}
function isReactElement(element) {
    return (typeof element === "undefined" ? "undefined" : _$1(element)) === 'object' && element.props;
}
function getWidgetAttribute(element) {
    if (!isReactElement(element)) {
        return undefined;
    }
    if (element.props.attribute) {
        return element.props.attribute;
    }
    if (Array.isArray(element.props.attributes)) {
        return element.props.attributes[0];
    }
    if (element.props.children) {
        invariant(React__default.Children.count(element.props.children) === 1);
        return getWidgetAttribute(React__default.Children.only(element.props.children));
    }
    return undefined;
}

export { DynamicWidgets };
