import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { getPropertyByPath, getHighlightedParts, unescape } from 'instantsearch.js/es/lib/utils/index.js';
import React from 'react';
import { ReverseHighlight as ReverseHighlight$1 } from '../ui/ReverseHighlight.js';

function ReverseHighlight(_0) {
    var hit = _0.hit, attribute = _0.attribute, highlightedTagName = _0.highlightedTagName, nonHighlightedTagName = _0.nonHighlightedTagName, separator = _0.separator, props = _(_0, [
        "hit",
        "attribute",
        "highlightedTagName",
        "nonHighlightedTagName",
        "separator"
    ]);
    var property = getPropertyByPath(hit._highlightResult, attribute) || [];
    var properties = Array.isArray(property) ? property : [
        property
    ];
    var parts = properties.map(function(singleValue) {
        return getHighlightedParts(unescape(singleValue.value || '')).map(function(_0) {
            var isHighlighted = _0.isHighlighted, rest = _(_0, [
                "isHighlighted"
            ]);
            return _$1(_$2({}, rest), {
                isHighlighted: !isHighlighted
            });
        });
    });
    return /*#__PURE__*/ React.createElement(ReverseHighlight$1, _$1(_$2({}, props), {
        parts: parts,
        highlightedTagName: highlightedTagName,
        nonHighlightedTagName: nonHighlightedTagName,
        separator: separator
    }));
}

export { ReverseHighlight };
