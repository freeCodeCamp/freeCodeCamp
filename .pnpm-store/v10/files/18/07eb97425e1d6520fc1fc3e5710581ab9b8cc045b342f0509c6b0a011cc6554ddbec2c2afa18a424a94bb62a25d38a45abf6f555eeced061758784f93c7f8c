import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { getHighlightFromSiblings } from './getHighlightFromSiblings.js';

function reverseHighlightedParts(parts) {
    if (!parts.some(function(part) {
        return part.isHighlighted;
    })) {
        return parts.map(function(part) {
            return _(_$1({}, part), {
                isHighlighted: false
            });
        });
    }
    return parts.map(function(part, i) {
        return _(_$1({}, part), {
            isHighlighted: !getHighlightFromSiblings(parts, i)
        });
    });
}

export { reverseHighlightedParts };
