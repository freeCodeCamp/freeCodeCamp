'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SortBy", {
    enumerable: true,
    get: function() {
        return SortBy;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _SortBy = require("../ui/SortBy");
function SortBy(_0) {
    var items = _0.items, transformItems = _0.transformItems, props = _object_without_properties._(_0, [
        "items",
        "transformItems"
    ]);
    var _useSortBy = (0, _reactinstantsearchcore.useSortBy)({
        items: items,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.sortBy'
    }), currentRefinement = _useSortBy.currentRefinement, options = _useSortBy.options, refine = _useSortBy.refine;
    var uiProps = {
        items: options,
        value: currentRefinement,
        onChange: refine
    };
    return /*#__PURE__*/ _react.default.createElement(_SortBy.SortBy, _object_spread._({}, props, uiProps));
}
