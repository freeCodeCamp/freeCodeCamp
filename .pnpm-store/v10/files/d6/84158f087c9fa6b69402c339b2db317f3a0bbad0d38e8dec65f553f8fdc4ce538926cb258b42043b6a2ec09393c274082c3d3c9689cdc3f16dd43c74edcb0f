import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useCurrentRefinements } from 'react-instantsearch-core';
import { CurrentRefinements as CurrentRefinements$1 } from '../ui/CurrentRefinements.js';

function CurrentRefinements(_0) {
    var includedAttributes = _0.includedAttributes, excludedAttributes = _0.excludedAttributes, transformItems = _0.transformItems, props = _(_0, [
        "includedAttributes",
        "excludedAttributes",
        "transformItems"
    ]);
    var _useCurrentRefinements = useCurrentRefinements({
        includedAttributes: includedAttributes,
        excludedAttributes: excludedAttributes,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.currentRefinements'
    }), items = _useCurrentRefinements.items, canRefine = _useCurrentRefinements.canRefine;
    var uiProps = {
        items: items,
        hasRefinements: canRefine
    };
    return /*#__PURE__*/ React.createElement(CurrentRefinements$1, _$1({}, props, uiProps));
}

export { CurrentRefinements };
