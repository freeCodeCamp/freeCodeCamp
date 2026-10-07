'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Highlight", {
    enumerable: true,
    get: function() {
        return Highlight;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _preact = require("preact");
var _Highlight = require("../../components/Highlight/Highlight");
var _utils = require("../../lib/utils");
function Highlight(_0) {
    var hit = _0.hit, attribute = _0.attribute, cssClasses = _0.cssClasses, props = _object_without_properties._(_0, [
        "hit",
        "attribute",
        "cssClasses"
    ]);
    var property = (0, _utils.getPropertyByPath)(hit._highlightResult, attribute) || [];
    var properties = (0, _utils.toArray)(property);
    (0, _utils.warning)(Boolean(properties.length), 'Could not enable highlight for "'.concat(attribute.toString(), '", will display an empty string.\nPlease check whether this attribute exists and is either searchable or specified in `attributesToHighlight`.\n\nSee: https://alg.li/highlighting\n'));
    var parts = properties.map(function(param) {
        var value = param.value;
        return (0, _utils.getHighlightedParts)((0, _utils.unescape)(value || ''));
    });
    return /*#__PURE__*/ (0, _preact.h)(_Highlight.Highlight, _object_spread_props._(_object_spread._({}, props), {
        parts: parts,
        classNames: cssClasses
    }));
}
