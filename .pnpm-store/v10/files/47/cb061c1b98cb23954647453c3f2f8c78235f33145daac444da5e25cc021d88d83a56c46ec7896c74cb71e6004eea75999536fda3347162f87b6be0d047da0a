'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SortBy", {
    enumerable: true,
    get: function() {
        return SortBy;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
function SortBy(_0) {
    var items = _0.items, value = _0.value, _0_onChange = _0.onChange, onChange = _0_onChange === void 0 ? function() {} : _0_onChange, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, props = _object_without_properties._(_0, [
        "items",
        "value",
        "onChange",
        "classNames"
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-SortBy', classNames.root, props.className)
    }), /*#__PURE__*/ _react.default.createElement("select", {
        className: (0, _instantsearchuicomponents.cx)('ais-SortBy-select', classNames.select),
        onChange: function onChange1(event) {
            return onChange(event.target.value);
        },
        value: value,
        "aria-label": "Sort results by"
    }, items.map(function(item) {
        return /*#__PURE__*/ _react.default.createElement("option", {
            className: (0, _instantsearchuicomponents.cx)('ais-SortBy-option', classNames.option),
            key: item.value,
            value: item.value
        }, item.label);
    })));
}
