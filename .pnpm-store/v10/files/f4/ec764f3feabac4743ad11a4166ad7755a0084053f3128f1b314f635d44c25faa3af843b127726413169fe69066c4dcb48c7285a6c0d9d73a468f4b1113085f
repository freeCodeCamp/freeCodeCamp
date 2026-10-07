'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RangeInput", {
    enumerable: true,
    get: function() {
        return RangeInput;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _RangeInput = require("../ui/RangeInput");
function RangeInput(_0) {
    var attribute = _0.attribute, min = _0.min, max = _0.max, precision = _0.precision, translations = _0.translations, props = _object_without_properties._(_0, [
        "attribute",
        "min",
        "max",
        "precision",
        "translations"
    ]);
    var _useRange = (0, _reactinstantsearchcore.useRange)({
        attribute: attribute,
        min: min,
        max: max,
        precision: precision
    }, {
        $$widgetType: 'ais.rangeInput'
    }), range = _useRange.range, start = _useRange.start, canRefine = _useRange.canRefine, refine = _useRange.refine;
    var step = 1 / Math.pow(10, precision || 0);
    var uiProps = {
        range: range,
        start: start,
        step: step,
        disabled: !canRefine,
        onSubmit: refine,
        translations: _object_spread._({
            separatorElementText: 'to',
            submitButtonText: 'Go'
        }, translations)
    };
    return /*#__PURE__*/ _react.default.createElement(_RangeInput.RangeInput, _object_spread._({}, props, uiProps));
}
