'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Breadcrumb", {
    enumerable: true,
    get: function() {
        return Breadcrumb;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _isModifierClick = require("./lib/isModifierClick");
function Breadcrumb(_0) {
    var _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, _0_items = _0.items, items = _0_items === void 0 ? [] : _0_items, hasItems = _0.hasItems, createURL = _0.createURL, onNavigate = _0.onNavigate, _0_separator = _0.separator, separator = _0_separator === void 0 ? '>' : _0_separator, translations = _0.translations, props = _object_without_properties._(_0, [
        "classNames",
        "items",
        "hasItems",
        "createURL",
        "onNavigate",
        "separator",
        "translations"
    ]);
    var handleClick = function handleClick(value) {
        return function(event) {
            if (!(0, _isModifierClick.isModifierClick)(event)) {
                event.preventDefault();
                onNavigate(value);
            }
        };
    };
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-Breadcrumb', classNames.root, !hasItems && (0, _instantsearchuicomponents.cx)('ais-Breadcrumb--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ _react.default.createElement("ul", {
        className: (0, _instantsearchuicomponents.cx)('ais-Breadcrumb-list', classNames.list)
    }, /*#__PURE__*/ _react.default.createElement("li", {
        className: (0, _instantsearchuicomponents.cx)('ais-Breadcrumb-item', classNames.item, !hasItems && (0, _instantsearchuicomponents.cx)('ais-Breadcrumb-item--selected', classNames.selectedItem))
    }, /*#__PURE__*/ _react.default.createElement("a", {
        href: createURL(null),
        onClick: handleClick(null),
        className: (0, _instantsearchuicomponents.cx)('ais-Breadcrumb-link', classNames.link)
    }, translations.rootElementText)), items.map(function(item, index) {
        var isLast = index === items.length - 1;
        return /*#__PURE__*/ _react.default.createElement("li", {
            key: index,
            className: (0, _instantsearchuicomponents.cx)('ais-Breadcrumb-item', classNames.item, isLast && (0, _instantsearchuicomponents.cx)('ais-Breadcrumb-item--selected', classNames.selectedItem))
        }, /*#__PURE__*/ _react.default.createElement("span", {
            "aria-hidden": "true",
            className: (0, _instantsearchuicomponents.cx)('ais-Breadcrumb-separator', classNames.separator)
        }, separator), isLast ? item.label : /*#__PURE__*/ _react.default.createElement("a", {
            className: (0, _instantsearchuicomponents.cx)('ais-Breadcrumb-link', classNames.link),
            href: createURL(item.value),
            onClick: handleClick(item.value)
        }, item.label));
    })));
}
