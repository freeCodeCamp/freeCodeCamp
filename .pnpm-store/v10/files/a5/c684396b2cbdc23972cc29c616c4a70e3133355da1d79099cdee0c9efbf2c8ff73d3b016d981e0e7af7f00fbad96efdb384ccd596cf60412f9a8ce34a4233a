'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Menu", {
    enumerable: true,
    get: function() {
        return Menu;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _Menu = require("../ui/Menu");
function Menu(_0) {
    var attribute = _0.attribute, limit = _0.limit, showMore = _0.showMore, showMoreLimit = _0.showMoreLimit, sortBy = _0.sortBy, transformItems = _0.transformItems, translations = _0.translations, props = _object_without_properties._(_0, [
        "attribute",
        "limit",
        "showMore",
        "showMoreLimit",
        "sortBy",
        "transformItems",
        "translations"
    ]);
    var _useMenu = (0, _reactinstantsearchcore.useMenu)({
        attribute: attribute,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.menu'
    }), canToggleShowMore = _useMenu.canToggleShowMore, isShowingMore = _useMenu.isShowingMore, items = _useMenu.items, refine = _useMenu.refine, createURL = _useMenu.createURL, toggleShowMore = _useMenu.toggleShowMore;
    var uiProps = {
        items: items,
        createURL: createURL,
        onRefine: function onRefine(item) {
            return refine(item.value);
        },
        canToggleShowMore: canToggleShowMore,
        onToggleShowMore: toggleShowMore,
        isShowingMore: isShowingMore,
        translations: _object_spread._({
            showMoreButtonText: function showMoreButtonText(options) {
                return options.isShowingMore ? 'Show less' : 'Show more';
            }
        }, translations)
    };
    return /*#__PURE__*/ _react.default.createElement(_Menu.Menu, _object_spread_props._(_object_spread._({}, props, uiProps), {
        showMore: showMore
    }));
}
