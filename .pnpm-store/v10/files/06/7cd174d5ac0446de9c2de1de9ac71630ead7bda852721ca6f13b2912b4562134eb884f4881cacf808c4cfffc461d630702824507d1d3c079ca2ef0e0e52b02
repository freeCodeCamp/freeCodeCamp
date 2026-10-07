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
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _utils = require("instantsearch.js/cjs/lib/utils");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _Highlight = require("../ui/Highlight");
function Highlight(_0) {
    var hit = _0.hit, attribute = _0.attribute, highlightedTagName = _0.highlightedTagName, nonHighlightedTagName = _0.nonHighlightedTagName, separator = _0.separator, props = _object_without_properties._(_0, [
        "hit",
        "attribute",
        "highlightedTagName",
        "nonHighlightedTagName",
        "separator"
    ]);
    var property = (0, _utils.getPropertyByPath)(hit._highlightResult, attribute) || [];
    var properties = Array.isArray(property) ? property : [
        property
    ];
    var parts = properties.map(function(singleValue) {
        return (0, _utils.getHighlightedParts)((0, _utils.unescape)(singleValue.value || ''));
    });
    return /*#__PURE__*/ _react.default.createElement(_Highlight.Highlight, _object_spread_props._(_object_spread._({}, props), {
        parts: parts,
        highlightedTagName: highlightedTagName,
        nonHighlightedTagName: nonHighlightedTagName,
        separator: separator
    }));
}
