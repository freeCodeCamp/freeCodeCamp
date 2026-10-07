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
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _isModifierClick = require("./lib/isModifierClick");
var _ShowMoreButton = require("./ShowMoreButton");
function Menu(_0) {
    var items = _0.items, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, showMore = _0.showMore, canToggleShowMore = _0.canToggleShowMore, onToggleShowMore = _0.onToggleShowMore, isShowingMore = _0.isShowingMore, createURL = _0.createURL, onRefine = _0.onRefine, translations = _0.translations, props = _object_without_properties._(_0, [
        "items",
        "classNames",
        "showMore",
        "canToggleShowMore",
        "onToggleShowMore",
        "isShowingMore",
        "createURL",
        "onRefine",
        "translations"
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-Menu', classNames.root, items.length === 0 && (0, _instantsearchuicomponents.cx)('ais-Menu--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ _react.default.createElement("ul", {
        className: (0, _instantsearchuicomponents.cx)('ais-Menu-list', classNames.list)
    }, items.map(function(item) {
        return /*#__PURE__*/ _react.default.createElement("li", {
            key: item.label,
            className: (0, _instantsearchuicomponents.cx)('ais-Menu-item', classNames.item, item.isRefined && (0, _instantsearchuicomponents.cx)('ais-Menu-item--selected', classNames.selectedItem))
        }, /*#__PURE__*/ _react.default.createElement("a", {
            className: (0, _instantsearchuicomponents.cx)('ais-Menu-link', classNames.link),
            href: createURL(item.value),
            onClick: function onClick(event) {
                if ((0, _isModifierClick.isModifierClick)(event)) {
                    return;
                }
                event.preventDefault();
                onRefine(item);
            }
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: (0, _instantsearchuicomponents.cx)('ais-Menu-label', classNames.label)
        }, item.label), /*#__PURE__*/ _react.default.createElement("span", {
            className: (0, _instantsearchuicomponents.cx)('ais-Menu-count', classNames.count)
        }, item.count)));
    })), showMore && /*#__PURE__*/ _react.default.createElement(_ShowMoreButton.ShowMoreButton, {
        className: (0, _instantsearchuicomponents.cx)('ais-Menu-showMore', classNames.showMore, !canToggleShowMore && (0, _instantsearchuicomponents.cx)('ais-Menu-showMore--disabled', classNames.disabledShowMore)),
        disabled: !canToggleShowMore,
        onClick: onToggleShowMore,
        isShowingMore: isShowingMore,
        translations: translations
    }));
}
