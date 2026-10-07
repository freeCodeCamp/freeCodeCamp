'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "concatHighlightedParts", {
    enumerable: true,
    get: function() {
        return concatHighlightedParts;
    }
});
var _escapehighlight = require("./escape-highlight");
function concatHighlightedParts(parts) {
    var highlightPreTag = _escapehighlight.TAG_REPLACEMENT.highlightPreTag, highlightPostTag = _escapehighlight.TAG_REPLACEMENT.highlightPostTag;
    return parts.map(function(part) {
        return part.isHighlighted ? highlightPreTag + part.value + highlightPostTag : part.value;
    }).join('');
}
