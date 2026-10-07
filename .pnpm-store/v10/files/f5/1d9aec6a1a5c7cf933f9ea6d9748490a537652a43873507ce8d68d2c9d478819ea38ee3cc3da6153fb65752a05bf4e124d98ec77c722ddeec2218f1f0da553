import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useHitsPerPage } from 'react-instantsearch-core';
import { HitsPerPage as HitsPerPage$1 } from '../ui/HitsPerPage.js';

function HitsPerPage(_0) {
    var userItems = _0.items, transformItems = _0.transformItems, props = _(_0, [
        "items",
        "transformItems"
    ]);
    var _useHitsPerPage = useHitsPerPage({
        items: userItems,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.hitsPerPage'
    }), items = _useHitsPerPage.items, refine = _useHitsPerPage.refine;
    var _ref = items.find(function(param) {
        var isRefined = param.isRefined;
        return isRefined;
    }) || {}, currentValue = _ref.value;
    var uiProps = {
        items: items,
        currentValue: currentValue,
        onChange: function onChange(value) {
            return refine(value);
        }
    };
    return /*#__PURE__*/ React.createElement(HitsPerPage$1, _$1({}, props, uiProps));
}

export { HitsPerPage };
