'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Pagination", {
    enumerable: true,
    get: function() {
        return Pagination;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _isModifierClick = require("./lib/isModifierClick");
function Pagination(_0) {
    var pages = _0.pages, currentPage = _0.currentPage, nbPages = _0.nbPages, isFirstPage = _0.isFirstPage, isLastPage = _0.isLastPage, _0_showFirst = _0.showFirst, showFirst = _0_showFirst === void 0 ? true : _0_showFirst, _0_showPrevious = _0.showPrevious, showPrevious = _0_showPrevious === void 0 ? true : _0_showPrevious, _0_showNext = _0.showNext, showNext = _0_showNext === void 0 ? true : _0_showNext, _0_showLast = _0.showLast, showLast = _0_showLast === void 0 ? true : _0_showLast, createURL = _0.createURL, onNavigate = _0.onNavigate, translations = _0.translations, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, props = _object_without_properties._(_0, [
        "pages",
        "currentPage",
        "nbPages",
        "isFirstPage",
        "isLastPage",
        "showFirst",
        "showPrevious",
        "showNext",
        "showLast",
        "createURL",
        "onNavigate",
        "translations",
        "classNames"
    ]);
    var firstPageIndex = 0;
    var previousPageIndex = currentPage - 1;
    var nextPageIndex = currentPage + 1;
    var lastPageIndex = nbPages - 1;
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread_props._(_object_spread._({}, props), {
        className: (0, _instantsearchuicomponents.cx)('ais-Pagination', classNames.root, nbPages <= 1 && (0, _instantsearchuicomponents.cx)('ais-Pagination--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ _react.default.createElement("ul", {
        className: (0, _instantsearchuicomponents.cx)('ais-Pagination-list', classNames.list)
    }, showFirst && /*#__PURE__*/ _react.default.createElement(PaginationItem, {
        isDisabled: isFirstPage,
        className: (0, _instantsearchuicomponents.cx)('ais-Pagination-item--firstPage', classNames.firstPageItem),
        classNames: classNames,
        "aria-label": translations.firstPageItemAriaLabel,
        href: createURL(firstPageIndex),
        onClick: function onClick() {
            return onNavigate(firstPageIndex);
        }
    }, translations.firstPageItemText), showPrevious && /*#__PURE__*/ _react.default.createElement(PaginationItem, {
        isDisabled: isFirstPage,
        className: (0, _instantsearchuicomponents.cx)('ais-Pagination-item--previousPage', classNames.previousPageItem),
        classNames: classNames,
        "aria-label": translations.previousPageItemAriaLabel,
        href: createURL(previousPageIndex),
        onClick: function onClick() {
            return onNavigate(previousPageIndex);
        }
    }, translations.previousPageItemText), pages.map(function(page) {
        return /*#__PURE__*/ _react.default.createElement(PaginationItem, {
            key: page,
            isDisabled: false,
            className: (0, _instantsearchuicomponents.cx)('ais-Pagination-item--page', classNames.pageItem, page === currentPage && (0, _instantsearchuicomponents.cx)('ais-Pagination-item--selected', classNames.selectedItem)),
            classNames: classNames,
            "aria-label": translations.pageItemAriaLabel({
                currentPage: page + 1,
                nbPages: nbPages
            }),
            href: createURL(page),
            onClick: function onClick() {
                return onNavigate(page);
            }
        }, translations.pageItemText({
            currentPage: page + 1,
            nbPages: nbPages
        }));
    }), showNext && /*#__PURE__*/ _react.default.createElement(PaginationItem, {
        isDisabled: isLastPage,
        className: (0, _instantsearchuicomponents.cx)('ais-Pagination-item--nextPage', classNames.nextPageItem),
        classNames: classNames,
        "aria-label": translations.nextPageItemAriaLabel,
        href: createURL(nextPageIndex),
        onClick: function onClick() {
            return onNavigate(nextPageIndex);
        }
    }, translations.nextPageItemText), showLast && /*#__PURE__*/ _react.default.createElement(PaginationItem, {
        isDisabled: isLastPage,
        className: (0, _instantsearchuicomponents.cx)('ais-Pagination-item--lastPage', classNames.lastPageItem),
        classNames: classNames,
        "aria-label": translations.lastPageItemAriaLabel,
        href: createURL(lastPageIndex),
        onClick: function onClick() {
            return onNavigate(lastPageIndex);
        }
    }, translations.lastPageItemText)));
}
function PaginationItem(_0) {
    var isDisabled = _0.isDisabled, className = _0.className, classNames = _0.classNames, href = _0.href, onClick = _0.onClick, props = _object_without_properties._(_0, [
        "isDisabled",
        "className",
        "classNames",
        "href",
        "onClick"
    ]);
    if (isDisabled) {
        return /*#__PURE__*/ _react.default.createElement("li", {
            className: (0, _instantsearchuicomponents.cx)('ais-Pagination-item', classNames.item, 'ais-Pagination-item--disabled', classNames.disabledItem, className)
        }, /*#__PURE__*/ _react.default.createElement("span", _object_spread._({
            className: (0, _instantsearchuicomponents.cx)('ais-Pagination-link', classNames.link)
        }, props)));
    }
    return /*#__PURE__*/ _react.default.createElement("li", {
        className: (0, _instantsearchuicomponents.cx)('ais-Pagination-item', classNames.item, className)
    }, /*#__PURE__*/ _react.default.createElement("a", _object_spread._({
        className: (0, _instantsearchuicomponents.cx)('ais-Pagination-link', classNames.link),
        href: href,
        onClick: function onClick1(event) {
            if ((0, _isModifierClick.isModifierClick)(event)) {
                return;
            }
            event.preventDefault();
            onClick(event);
        }
    }, props)));
}
