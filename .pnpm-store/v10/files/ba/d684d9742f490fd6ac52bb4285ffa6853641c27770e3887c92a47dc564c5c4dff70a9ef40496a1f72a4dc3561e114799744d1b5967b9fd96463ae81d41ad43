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
var _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
// if the default value is undefined, React considers the component uncontrolled initially, which we don't want 0 or NaN as the default value
var unsetNumberInputValue = '';
// Strips leading `0` from a positive number value
function stripLeadingZeroFromInput(value) {
    return value.replace(/^(0+)\d/, function(part) {
        return Number(part).toString();
    });
}
function RangeInput(_0) {
    var _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, _0_range = _0.range, min = _0_range.min, max = _0_range.max, _0_start = _sliced_to_array._(_0.start, 2), minValue = _0_start[0], maxValue = _0_start[1], _0_step = _0.step, step = _0_step === void 0 ? 1 : _0_step, disabled = _0.disabled, onSubmit = _0.onSubmit, translations = _0.translations, props = _object_without_properties._(_0, [
        "classNames",
        "range",
        "start",
        "step",
        "disabled",
        "onSubmit",
        "translations"
    ]);
    var _values_min, _values_max;
    var values = {
        min: minValue !== -Infinity && minValue !== min ? minValue : unsetNumberInputValue,
        max: maxValue !== Infinity && maxValue !== max ? maxValue : unsetNumberInputValue
    };
    var _useState = _sliced_to_array._((0, _react.useState)(values), 2), prevValues = _useState[0], setPrevValues = _useState[1];
    var _useState1 = _sliced_to_array._((0, _react.useState)({
        from: (_values_min = values.min) === null || _values_min === void 0 ? void 0 : _values_min.toString(),
        to: (_values_max = values.max) === null || _values_max === void 0 ? void 0 : _values_max.toString()
    }), 2), _useState_ = _useState1[0], from = _useState_.from, to = _useState_.to, setRange = _useState1[1];
    if (values.min !== prevValues.min || values.max !== prevValues.max) {
        var _values_min1, _values_max1;
        setRange({
            from: (_values_min1 = values.min) === null || _values_min1 === void 0 ? void 0 : _values_min1.toString(),
            to: (_values_max1 = values.max) === null || _values_max1 === void 0 ? void 0 : _values_max1.toString()
        });
        setPrevValues(values);
    }
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)((0, _instantsearchuicomponents.cx)('ais-RangeInput', classNames.root), disabled && (0, _instantsearchuicomponents.cx)('ais-RangeInput--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ _react.default.createElement("form", {
        className: (0, _instantsearchuicomponents.cx)('ais-RangeInput-form', classNames.form),
        onSubmit: function onSubmit1(event) {
            event.preventDefault();
            onSubmit([
                from ? Number(from) : undefined,
                to ? Number(to) : undefined
            ]);
        }
    }, /*#__PURE__*/ _react.default.createElement("label", {
        className: (0, _instantsearchuicomponents.cx)('ais-RangeInput-label', classNames.label)
    }, /*#__PURE__*/ _react.default.createElement("input", {
        className: (0, _instantsearchuicomponents.cx)('ais-RangeInput-input', classNames.input, 'ais-RangeInput-input--min', classNames.inputMin),
        type: "number",
        min: min,
        max: max,
        value: stripLeadingZeroFromInput(from || unsetNumberInputValue),
        step: step,
        placeholder: min === null || min === void 0 ? void 0 : min.toString(),
        disabled: disabled,
        onInput: function onInput(param) {
            var currentTarget = param.currentTarget;
            var value = currentTarget.value;
            setRange({
                from: value || unsetNumberInputValue,
                to: to
            });
        }
    })), /*#__PURE__*/ _react.default.createElement("span", {
        className: (0, _instantsearchuicomponents.cx)('ais-RangeInput-separator', classNames.separator)
    }, translations.separatorElementText), /*#__PURE__*/ _react.default.createElement("label", {
        className: (0, _instantsearchuicomponents.cx)('ais-RangeInput-label', classNames.label)
    }, /*#__PURE__*/ _react.default.createElement("input", {
        className: (0, _instantsearchuicomponents.cx)('ais-RangeInput-input', classNames.input, 'ais-RangeInput-input--max', classNames.inputMax),
        type: "number",
        min: min,
        max: max,
        value: stripLeadingZeroFromInput(to || unsetNumberInputValue),
        step: step,
        placeholder: max === null || max === void 0 ? void 0 : max.toString(),
        disabled: disabled,
        onInput: function onInput(param) {
            var currentTarget = param.currentTarget;
            var value = currentTarget.value;
            setRange({
                from: from,
                to: value || unsetNumberInputValue
            });
        }
    })), /*#__PURE__*/ _react.default.createElement("button", {
        className: (0, _instantsearchuicomponents.cx)('ais-RangeInput-submit', classNames.submit),
        type: "submit"
    }, translations.submitButtonText)));
}
