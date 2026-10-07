'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
var Stats = function Stats(_0) {
    var nbHits = _0.nbHits, nbSortedHits = _0.nbSortedHits, cssClasses = _0.cssClasses, templateProps = _0.templateProps, rest = _object_without_properties._(_0, [
        "nbHits",
        "nbSortedHits",
        "cssClasses",
        "templateProps"
    ]);
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: (0, _instantsearchuicomponents.cx)(cssClasses.root)
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "text",
        rootTagName: "span",
        rootProps: {
            className: cssClasses.text
        },
        data: _object_spread._({
            hasManySortedResults: nbSortedHits && nbSortedHits > 1,
            hasNoSortedResults: nbSortedHits === 0,
            hasOneSortedResults: nbSortedHits === 1,
            hasManyResults: nbHits > 1,
            hasNoResults: nbHits === 0,
            hasOneResult: nbHits === 1,
            nbHits: nbHits,
            nbSortedHits: nbSortedHits,
            cssClasses: cssClasses
        }, rest)
    })));
};
var _default = Stats;
