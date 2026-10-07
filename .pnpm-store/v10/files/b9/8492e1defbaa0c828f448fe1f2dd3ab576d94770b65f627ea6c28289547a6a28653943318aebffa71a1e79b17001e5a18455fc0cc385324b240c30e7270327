import { _ as _$3 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_without_properties.js';
import { _ } from '@swc/helpers/esm/_sliced_to_array.js';
import { cx } from 'instantsearch-ui-components';
import React, { useState } from 'react';

// if the default value is undefined, React considers the component uncontrolled initially, which we don't want 0 or NaN as the default value
var unsetNumberInputValue = '';
// Strips leading `0` from a positive number value
function stripLeadingZeroFromInput(value) {
    return value.replace(/^(0+)\d/, function(part) {
        return Number(part).toString();
    });
}
function RangeInput(_0) {
    var _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, _0_range = _0.range, min = _0_range.min, max = _0_range.max, _0_start = _(_0.start, 2), minValue = _0_start[0], maxValue = _0_start[1], _0_step = _0.step, step = _0_step === void 0 ? 1 : _0_step, disabled = _0.disabled, onSubmit = _0.onSubmit, translations = _0.translations, props = _$1(_0, [
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
    var _useState = _(useState(values), 2), prevValues = _useState[0], setPrevValues = _useState[1];
    var _useState1 = _(useState({
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
    return /*#__PURE__*/ React.createElement("div", _$2(_$3({}, props), {
        className: cx(cx('ais-RangeInput', classNames.root), disabled && cx('ais-RangeInput--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ React.createElement("form", {
        className: cx('ais-RangeInput-form', classNames.form),
        onSubmit: function onSubmit1(event) {
            event.preventDefault();
            onSubmit([
                from ? Number(from) : undefined,
                to ? Number(to) : undefined
            ]);
        }
    }, /*#__PURE__*/ React.createElement("label", {
        className: cx('ais-RangeInput-label', classNames.label)
    }, /*#__PURE__*/ React.createElement("input", {
        className: cx('ais-RangeInput-input', classNames.input, 'ais-RangeInput-input--min', classNames.inputMin),
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
    })), /*#__PURE__*/ React.createElement("span", {
        className: cx('ais-RangeInput-separator', classNames.separator)
    }, translations.separatorElementText), /*#__PURE__*/ React.createElement("label", {
        className: cx('ais-RangeInput-label', classNames.label)
    }, /*#__PURE__*/ React.createElement("input", {
        className: cx('ais-RangeInput-input', classNames.input, 'ais-RangeInput-input--max', classNames.inputMax),
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
    })), /*#__PURE__*/ React.createElement("button", {
        className: cx('ais-RangeInput-submit', classNames.submit),
        type: "submit"
    }, translations.submitButtonText)));
}

export { RangeInput };
