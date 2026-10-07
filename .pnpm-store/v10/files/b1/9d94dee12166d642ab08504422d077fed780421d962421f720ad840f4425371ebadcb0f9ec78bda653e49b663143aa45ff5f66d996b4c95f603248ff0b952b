import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useClearRefinements } from 'react-instantsearch-core';
import { ClearRefinements as ClearRefinements$1 } from '../ui/ClearRefinements.js';

function ClearRefinements(_0) {
    var includedAttributes = _0.includedAttributes, excludedAttributes = _0.excludedAttributes, transformItems = _0.transformItems, translations = _0.translations, props = _(_0, [
        "includedAttributes",
        "excludedAttributes",
        "transformItems",
        "translations"
    ]);
    var _useClearRefinements = useClearRefinements({
        includedAttributes: includedAttributes,
        excludedAttributes: excludedAttributes,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.clearRefinements'
    }), canRefine = _useClearRefinements.canRefine, refine = _useClearRefinements.refine;
    var uiProps = {
        onClick: refine,
        disabled: !canRefine,
        translations: _$1({
            resetButtonText: 'Clear refinements'
        }, translations)
    };
    return /*#__PURE__*/ React.createElement(ClearRefinements$1, _$1({}, props, uiProps));
}

export { ClearRefinements };
