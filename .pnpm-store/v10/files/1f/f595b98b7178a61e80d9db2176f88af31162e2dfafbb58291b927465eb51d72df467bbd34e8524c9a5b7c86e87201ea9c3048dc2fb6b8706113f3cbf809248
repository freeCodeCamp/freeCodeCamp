import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useRange } from 'react-instantsearch-core';
import { RangeInput as RangeInput$1 } from '../ui/RangeInput.js';

function RangeInput(_0) {
    var attribute = _0.attribute, min = _0.min, max = _0.max, precision = _0.precision, translations = _0.translations, props = _(_0, [
        "attribute",
        "min",
        "max",
        "precision",
        "translations"
    ]);
    var _useRange = useRange({
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
        translations: _$1({
            separatorElementText: 'to',
            submitButtonText: 'Go'
        }, translations)
    };
    return /*#__PURE__*/ React.createElement(RangeInput$1, _$1({}, props, uiProps));
}

export { RangeInput };
