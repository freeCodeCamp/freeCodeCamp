'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get TAG_PLACEHOLDER () {
        return TAG_PLACEHOLDER;
    },
    get TAG_REPLACEMENT () {
        return TAG_REPLACEMENT;
    },
    get escapeFacets () {
        return escapeFacets;
    },
    get escapeHits () {
        return escapeHits;
    }
});
var _define_property = require("@swc/helpers/_/_define_property");
var _extends = require("@swc/helpers/_/_extends");
var _object_destructuring_empty = require("@swc/helpers/_/_object_destructuring_empty");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _escapehtml = require("./escape-html");
var _isPlainObject = require("./isPlainObject");
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
    return (0, _escapehtml.escape)(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, 'g'), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, 'g'), TAG_REPLACEMENT.highlightPostTag);
}
function recursiveEscape(input) {
    if ((0, _isPlainObject.isPlainObject)(input) && typeof input.value !== 'string') {
        return Object.keys(input).reduce(function(acc, key) {
            return _object_spread_props._(_object_spread._({}, acc), _define_property._({}, key, recursiveEscape(input[key])));
        }, {});
    }
    if (Array.isArray(input)) {
        return input.map(recursiveEscape);
    }
    return _object_spread_props._(_object_spread._({}, input), {
        value: replaceTagsAndEscape(input.value)
    });
}
function escapeHits(hits) {
    if (hits.__escaped === undefined) {
        // We don't override the value on hit because it will mutate the raw results
        // instead we make a shallow copy and we assign the escaped values on it.
        hits = hits.map(function(_0) {
            _object_destructuring_empty._(_0); var hit = _extends._({}, _0);
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
        return _object_spread_props._(_object_spread._({}, h), {
            highlighted: replaceTagsAndEscape(h.highlighted)
        });
    });
}
