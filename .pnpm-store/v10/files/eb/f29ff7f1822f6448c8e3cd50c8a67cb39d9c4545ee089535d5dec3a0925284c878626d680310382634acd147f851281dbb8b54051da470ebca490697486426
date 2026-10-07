'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HitsPerPage", {
    enumerable: true,
    get: function() {
        return HitsPerPage;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
function HitsPerPage(_0) {
    var items = _0.items, onChange = _0.onChange, currentValue = _0.currentValue, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, props = _object_without_properties._(_0, [
        "items",
        "onChange",
        "currentValue",
        "classNames"
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-HitsPerPage', classNames.root, props.className)
    }), /*#__PURE__*/ _react.default.createElement("select", {
        className: (0, _instantsearchuicomponents.cx)('ais-HitsPerPage-select', classNames.select),
        onChange: function onChange1(event) {
            onChange(Number(event.target.value));
        },
        value: String(currentValue)
    }, items.map(function(item) {
        return /*#__PURE__*/ _react.default.createElement("option", {
            key: item.value,
            className: (0, _instantsearchuicomponents.cx)('ais-HitsPerPage-option', classNames.option),
            value: item.value
        }, item.label);
    })));
}
