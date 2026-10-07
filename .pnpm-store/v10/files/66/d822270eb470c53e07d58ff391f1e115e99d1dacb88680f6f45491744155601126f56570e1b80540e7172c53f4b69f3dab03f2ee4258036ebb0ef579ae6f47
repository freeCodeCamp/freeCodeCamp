'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DynamicWidgets", {
    enumerable: true,
    get: function() {
        return DynamicWidgets;
    }
});
var _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _type_of = require("@swc/helpers/_/_type_of");
var _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
var _useDynamicWidgets = require("../connectors/useDynamicWidgets");
var _invariant = require("../lib/invariant");
var _warn = require("../lib/warn");
function DefaultFallbackComponent() {
    return null;
}
function DynamicWidgets(_0) {
    var children = _0.children, tmp = _0.fallbackComponent, Fallback = tmp === void 0 ? DefaultFallbackComponent : tmp, props = _object_without_properties._(_0, [
        "children",
        "fallbackComponent"
    ]);
    var FallbackComponent = _react.default.useRef(Fallback);
    (0, _warn.warn)(Fallback === FallbackComponent.current, 'The `fallbackComponent` prop of `DynamicWidgets` changed between renders. Please provide a stable reference, as described in https://www.algolia.com/doc/api-reference/widgets/dynamic-facets/react/#widget-param-fallbackcomponent');
    var attributesToRender = (0, _useDynamicWidgets.useDynamicWidgets)(props, {
        $$widgetType: 'ais.dynamicWidgets'
    }).attributesToRender;
    var widgets = new Map();
    _react.default.Children.forEach(children, function(child) {
        var attribute = getWidgetAttribute(child);
        (0, _invariant.invariant)(attribute !== undefined, "<DynamicWidgets> only supports InstantSearch widgets with an `attribute` or `attributes` prop.");
        widgets.set(attribute, child);
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, attributesToRender.map(function(attribute) {
        return /*#__PURE__*/ _react.default.createElement(_react.Fragment, {
            key: attribute
        }, widgets.get(attribute) || /*#__PURE__*/ _react.default.createElement(FallbackComponent.current, {
            attribute: attribute
        }));
    }));
}
function isReactElement(element) {
    return (typeof element === "undefined" ? "undefined" : _type_of._(element)) === 'object' && element.props;
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
        (0, _invariant.invariant)(_react.default.Children.count(element.props.children) === 1, '<DynamicWidgets> only supports a single component in nested components. Make sure to not render multiple children in a parent component.\n\nExample of an unsupported scenario:\n\n```\n<DynamicWidgets>\n  <MyComponent>\n    <RefinementList attribute="brand" />\n    <Menu attribute="categories" />\n  </MyComponent>\n</DynamicWidgets>\n```\n');
        return getWidgetAttribute(_react.default.Children.only(element.props.children));
    }
    return undefined;
}
