import { _ as _$4 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_extends.js';
import { _ } from '@swc/helpers/esm/_object_destructuring_empty.js';
import { _ as _$3 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread_props.js';
import { escape } from './escape-html.js';
import { isPlainObject } from './isPlainObject.js';

var TAG_PLACEHOLDER = {
    highlightPreTag: '__ais-highlight__',
    highlightPostTag: '__/ais-highlight__'
};
var TAG_REPLACEMENT = {
    highlightPreTag: '<mark>',
    highlightPostTag: '</mark>'
};
// @MAJOR: in the future, this should only escape, not replace
function replaceTagsAndEscape(value) {
    return escape(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, 'g'), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, 'g'), TAG_REPLACEMENT.highlightPostTag);
}
function recursiveEscape(input) {
    if (isPlainObject(input) && typeof input.value !== 'string') {
        return Object.keys(input).reduce(function(acc, key) {
            return _$2(_$3({}, acc), _$4({}, key, recursiveEscape(input[key])));
        }, {});
    }
    if (Array.isArray(input)) {
        return input.map(recursiveEscape);
    }
    return _$2(_$3({}, input), {
        value: replaceTagsAndEscape(input.value)
    });
}
function escapeHits(hits) {
    if (hits.__escaped === undefined) {
        // We don't override the value on hit because it will mutate the raw results
        // instead we make a shallow copy and we assign the escaped values on it.
        hits = hits.map(function(_0) {
            _(_0); var hit = _$1({}, _0);
            if (hit._highlightResult) {
                hit._highlightResult = recursiveEscape(hit._highlightResult);
            }
            if (hit._snippetResult) {
                hit._snippetResult = recursiveEscape(hit._snippetResult);
            }
            return hit;
        });
        hits.__escaped = true;
    }
    return hits;
}
function escapeFacets(facetHits) {
    return facetHits.map(function(h) {
        return _$2(_$3({}, h), {
            highlighted: replaceTagsAndEscape(h.highlighted)
        });
    });
}

export { TAG_PLACEHOLDER, TAG_REPLACEMENT, escapeFacets, escapeHits };
