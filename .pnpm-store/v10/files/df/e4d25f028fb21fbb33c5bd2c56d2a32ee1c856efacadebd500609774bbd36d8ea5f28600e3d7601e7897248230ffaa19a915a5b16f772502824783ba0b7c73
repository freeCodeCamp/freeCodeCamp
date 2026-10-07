'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HierarchicalMenu", {
    enumerable: true,
    get: function() {
        return HierarchicalMenu;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _HierarchicalMenu = require("../ui/HierarchicalMenu");
function HierarchicalMenu(_0) {
    var attributes = _0.attributes, limit = _0.limit, rootPath = _0.rootPath, separator = _0.separator, showMore = _0.showMore, showMoreLimit = _0.showMoreLimit, showParentLevel = _0.showParentLevel, sortBy = _0.sortBy, transformItems = _0.transformItems, translations = _0.translations, props = _object_without_properties._(_0, [
        "attributes",
        "limit",
        "rootPath",
        "separator",
        "showMore",
        "showMoreLimit",
        "showParentLevel",
        "sortBy",
        "transformItems",
        "translations"
    ]);
    var _useHierarchicalMenu = (0, _reactinstantsearchcore.useHierarchicalMenu)({
        attributes: attributes,
        limit: limit,
        rootPath: rootPath,
        separator: separator,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        showParentLevel: showParentLevel,
        sortBy: sortBy,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.hierarchicalMenu'
    }), items = _useHierarchicalMenu.items, canRefine = _useHierarchicalMenu.canRefine, canToggleShowMore = _useHierarchicalMenu.canToggleShowMore, createURL = _useHierarchicalMenu.createURL, isShowingMore = _useHierarchicalMenu.isShowingMore, refine = _useHierarchicalMenu.refine, toggleShowMore = _useHierarchicalMenu.toggleShowMore;
    var uiProps = {
        items: items,
        hasItems: canRefine,
        createURL: createURL,
        onNavigate: refine,
        canToggleShowMore: canToggleShowMore,
        onToggleShowMore: toggleShowMore,
        isShowingMore: isShowingMore,
        translations: _object_spread._({
            showMoreButtonText: function showMoreButtonText(options) {
                return options.isShowingMore ? 'Show less' : 'Show more';
            }
        }, translations)
    };
    return /*#__PURE__*/ _react.default.createElement(_HierarchicalMenu.HierarchicalMenu, _object_spread_props._(_object_spread._({}, props, uiProps), {
        showMore: showMore
    }));
}
