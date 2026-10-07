'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ToggleRefinement", {
    enumerable: true,
    get: function() {
        return ToggleRefinement;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
function ToggleRefinement(_0) {
    var _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, checked = _0.checked, onChange = _0.onChange, label = _0.label, props = _object_without_properties._(_0, [
        "classNames",
        "checked",
        "onChange",
        "label"
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-ToggleRefinement', classNames.root, props.className)
    }), /*#__PURE__*/ _react.default.createElement("label", {
        className: (0, _instantsearchuicomponents.cx)('ais-ToggleRefinement-label', classNames.label)
    }, /*#__PURE__*/ _react.default.createElement("input", {
        className: (0, _instantsearchuicomponents.cx)('ais-ToggleRefinement-checkbox', classNames.checkbox),
        type: "checkbox",
        checked: checked,
        onChange: function onChange1(event) {
            onChange(event.target.checked);
        }
    }), /*#__PURE__*/ _react.default.createElement("span", {
        className: (0, _instantsearchuicomponents.cx)('ais-ToggleRefinement-labelText', classNames.labelText)
    }, label)));
}
