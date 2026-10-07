'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RefinementList", {
    enumerable: true,
    get: function() {
        return RefinementList;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _utils = require("instantsearch.js/cjs/lib/utils");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _Highlight = require("./Highlight");
var _ShowMoreButton = require("./ShowMoreButton");
function RefinementList(_0) {
    _0.canRefine; var items = _0.items, onRefine = _0.onRefine, query = _0.query, searchBox = _0.searchBox, noResults = _0.noResults, showMore = _0.showMore, canToggleShowMore = _0.canToggleShowMore, onToggleShowMore = _0.onToggleShowMore, isShowingMore = _0.isShowingMore, className = _0.className, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, translations = _0.translations, props = _object_without_properties._(_0, [
        "canRefine",
        "items",
        "onRefine",
        "query",
        "searchBox",
        "noResults",
        "showMore",
        "canToggleShowMore",
        "onToggleShowMore",
        "isShowingMore",
        "className",
        "classNames",
        "translations"
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-RefinementList', classNames.root, items.length === 0 && (0, _instantsearchuicomponents.cx)('ais-RefinementList--noRefinement', classNames.noRefinementRoot), className)
    }), searchBox && /*#__PURE__*/ _react.default.createElement("div", {
        className: (0, _instantsearchuicomponents.cx)('ais-RefinementList-searchBox', classNames.searchBox)
    }, searchBox), noResults ? /*#__PURE__*/ _react.default.createElement("div", {
        className: (0, _instantsearchuicomponents.cx)('ais-RefinementList-noResults', classNames.noResults)
    }, noResults) : /*#__PURE__*/ _react.default.createElement("ul", {
        className: (0, _instantsearchuicomponents.cx)('ais-RefinementList-list', classNames.list)
    }, items.map(function(item) {
        return /*#__PURE__*/ _react.default.createElement("li", {
            key: item.value,
            className: (0, _instantsearchuicomponents.cx)('ais-RefinementList-item', classNames.item, item.isRefined && (0, _instantsearchuicomponents.cx)('ais-RefinementList-item--selected', classNames.selectedItem))
        }, /*#__PURE__*/ _react.default.createElement("label", {
            className: (0, _instantsearchuicomponents.cx)('ais-RefinementList-label', classNames.label)
        }, /*#__PURE__*/ _react.default.createElement("input", {
            checked: item.isRefined,
            className: (0, _instantsearchuicomponents.cx)('ais-RefinementList-checkbox', classNames.checkbox),
            type: "checkbox",
            value: item.value,
            onChange: function onChange() {
                onRefine(item);
            }
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: (0, _instantsearchuicomponents.cx)('ais-RefinementList-labelText', classNames.labelText)
        }, query.length > 0 ? /*#__PURE__*/ _react.default.createElement(_Highlight.Highlight, {
            parts: [
                (0, _utils.getHighlightedParts)((0, _utils.unescape)(item.highlighted || ''))
            ]
        }) : item.label), /*#__PURE__*/ _react.default.createElement("span", {
            className: (0, _instantsearchuicomponents.cx)('ais-RefinementList-count', classNames.count)
        }, item.count)));
    })), showMore && /*#__PURE__*/ _react.default.createElement(_ShowMoreButton.ShowMoreButton, {
        className: (0, _instantsearchuicomponents.cx)('ais-RefinementList-showMore', classNames.showMore, !canToggleShowMore && (0, _instantsearchuicomponents.cx)('ais-RefinementList-showMore--disabled', classNames.disabledShowMore)),
        disabled: !canToggleShowMore,
        onClick: onToggleShowMore,
        isShowingMore: isShowingMore,
        translations: translations
    }));
}
