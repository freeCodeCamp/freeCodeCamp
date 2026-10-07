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
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _isModifierClick = require("./lib/isModifierClick");
var _ShowMoreButton = require("./ShowMoreButton");
function HierarchicalList(param) {
    var className = param.className, _param_classNames = param.classNames, classNames = _param_classNames === void 0 ? {} : _param_classNames, items = param.items, createURL = param.createURL, onNavigate = param.onNavigate;
    if (items.length === 0) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement("ul", {
        className: (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-list', classNames.list, className)
    }, items.map(function(item) {
        return /*#__PURE__*/ _react.default.createElement("li", {
            key: item.value,
            className: (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-item', classNames.item, item.isRefined && (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-item--selected', classNames.selectedItem), item.data && item.data.length > 0 && (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-item--parent', classNames.parentItem))
        }, /*#__PURE__*/ _react.default.createElement("a", {
            className: (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-link', classNames.link, item.isRefined && (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-link--selected', classNames.selectedItemLink)),
            href: createURL(item.value),
            onClick: function onClick(event) {
                if ((0, _isModifierClick.isModifierClick)(event)) {
                    return;
                }
                event.preventDefault();
                onNavigate(item.value);
            }
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-label', classNames.label)
        }, item.label), /*#__PURE__*/ _react.default.createElement("span", {
            className: (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-count', classNames.count)
        }, item.count)), item.data && /*#__PURE__*/ _react.default.createElement(HierarchicalList, {
            className: (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-list--child', classNames.childList),
            classNames: classNames,
            items: item.data,
            onNavigate: onNavigate,
            createURL: createURL
        }));
    }));
}
function HierarchicalMenu(_0) {
    var _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, items = _0.items, hasItems = _0.hasItems, onNavigate = _0.onNavigate, createURL = _0.createURL, showMore = _0.showMore, canToggleShowMore = _0.canToggleShowMore, onToggleShowMore = _0.onToggleShowMore, isShowingMore = _0.isShowingMore, translations = _0.translations, props = _object_without_properties._(_0, [
        "classNames",
        "items",
        "hasItems",
        "onNavigate",
        "createURL",
        "showMore",
        "canToggleShowMore",
        "onToggleShowMore",
        "isShowingMore",
        "translations"
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu', classNames.root, !hasItems && (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ _react.default.createElement(HierarchicalList, {
        classNames: classNames,
        items: items,
        onNavigate: onNavigate,
        createURL: createURL
    }), showMore && /*#__PURE__*/ _react.default.createElement(_ShowMoreButton.ShowMoreButton, {
        className: (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-showMore', classNames.showMore, !canToggleShowMore && (0, _instantsearchuicomponents.cx)('ais-HierarchicalMenu-showMore--disabled', classNames.disabledShowMore)),
        disabled: !canToggleShowMore,
        onClick: onToggleShowMore,
        isShowingMore: isShowingMore,
        translations: translations
    }));
}
