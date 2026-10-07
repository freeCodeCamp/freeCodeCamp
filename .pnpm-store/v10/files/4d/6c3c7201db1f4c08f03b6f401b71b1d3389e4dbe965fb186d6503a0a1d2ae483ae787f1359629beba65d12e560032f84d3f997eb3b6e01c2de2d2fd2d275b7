import { TAG_REPLACEMENT } from './index27.js';

function concatHighlightedParts(parts) {
    var highlightPreTag = TAG_REPLACEMENT.highlightPreTag, highlightPostTag = TAG_REPLACEMENT.highlightPostTag;
    return parts.map(function(part) {
        return part.isHighlighted ? highlightPreTag + part.value + highlightPostTag : part.value;
    }).join('');
}

export { concatHighlightedParts };
