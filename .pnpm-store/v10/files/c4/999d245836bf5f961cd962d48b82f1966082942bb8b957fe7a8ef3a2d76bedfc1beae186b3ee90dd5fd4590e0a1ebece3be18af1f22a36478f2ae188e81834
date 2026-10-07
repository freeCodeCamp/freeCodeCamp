import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useToggleRefinement } from 'react-instantsearch-core';
import { ToggleRefinement as ToggleRefinement$1 } from '../ui/ToggleRefinement.js';

function ToggleRefinement(_0) {
    var attribute = _0.attribute, on = _0.on, off = _0.off, props = _(_0, [
        "attribute",
        "on",
        "off"
    ]);
    var _useToggleRefinement = useToggleRefinement({
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
    return /*#__PURE__*/ React.createElement(ToggleRefinement$1, _$1({
        label: value.name
    }, props, uiProps));
}

export { ToggleRefinement };
