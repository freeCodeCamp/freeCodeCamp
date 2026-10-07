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
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _ToggleRefinement = require("../ui/ToggleRefinement");
function ToggleRefinement(_0) {
    var attribute = _0.attribute, on = _0.on, off = _0.off, props = _object_without_properties._(_0, [
        "attribute",
        "on",
        "off"
    ]);
    var _useToggleRefinement = (0, _reactinstantsearchcore.useToggleRefinement)({
        attribute: attribute,
        on: on,
        off: off
    }, {
        $$widgetType: 'ais.toggleRefinement'
    }), refine = _useToggleRefinement.refine, value = _useToggleRefinement.value;
    var uiProps = {
        checked: value.isRefined,
        onChange: function onChange(isChecked) {
            return refine({
                isRefined: !isChecked
            });
        }
    };
    return /*#__PURE__*/ _react.default.createElement(_ToggleRefinement.ToggleRefinement, _object_spread._({
        label: value.name
    }, props, uiProps));
}
