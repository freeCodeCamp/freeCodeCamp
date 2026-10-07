import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useSortBy } from 'react-instantsearch-core';
import { SortBy as SortBy$1 } from '../ui/SortBy.js';

function SortBy(_0) {
    var items = _0.items, transformItems = _0.transformItems, props = _(_0, [
        "items",
        "transformItems"
    ]);
    var _useSortBy = useSortBy({
        items: items,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.sortBy'
    }), currentRefinement = _useSortBy.currentRefinement, options = _useSortBy.options, refine = _useSortBy.refine;
    var uiProps = {
        items: options,
        value: currentRefinement,
        onChange: refine
    };
    return /*#__PURE__*/ React.createElement(SortBy$1, _$1({}, props, uiProps));
}

export { SortBy };
