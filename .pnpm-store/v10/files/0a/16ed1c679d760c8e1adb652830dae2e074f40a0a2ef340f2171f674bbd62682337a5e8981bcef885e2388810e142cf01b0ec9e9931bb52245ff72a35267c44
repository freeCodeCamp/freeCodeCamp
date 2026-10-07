'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reverseHighlightedParts", {
    enumerable: true,
    get: function() {
        return reverseHighlightedParts;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _getHighlightFromSiblings = require("./getHighlightFromSiblings");
function reverseHighlightedParts(parts) {
    if (!parts.some(function(part) {
        return part.isHighlighted;
    })) {
        return parts.map(function(part) {
            return _object_spread_props._(_object_spread._({}, part), {
                isHighlighted: false
            });
        });
    }
    return parts.map(function(part, i) {
        return _object_spread_props._(_object_spread._({}, part), {
            isHighlighted: !(0, _getHighlightFromSiblings.getHighlightFromSiblings)(parts, i)
        });
    });
}
