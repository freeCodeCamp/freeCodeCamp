'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HitsPerPage", {
    enumerable: true,
    get: function() {
        return HitsPerPage;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _HitsPerPage = require("../ui/HitsPerPage");
function HitsPerPage(_0) {
    var userItems = _0.items, transformItems = _0.transformItems, props = _object_without_properties._(_0, [
        "items",
        "transformItems"
    ]);
    var _useHitsPerPage = (0, _reactinstantsearchcore.useHitsPerPage)({
        items: userItems,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.hitsPerPage'
    }), items = _useHitsPerPage.items, refine = _useHitsPerPage.refine;
    var _ref = items.find(function(param) {
        var isRefined = param.isRefined;
        return isRefined;
    }) || {}, currentValue = _ref.value;
    var uiProps = {
        items: items,
        currentValue: currentValue,
        onChange: function onChange(value) {
            return refine(value);
        }
    };
    return /*#__PURE__*/ _react.default.createElement(_HitsPerPage.HitsPerPage, _object_spread._({}, props, uiProps));
}
