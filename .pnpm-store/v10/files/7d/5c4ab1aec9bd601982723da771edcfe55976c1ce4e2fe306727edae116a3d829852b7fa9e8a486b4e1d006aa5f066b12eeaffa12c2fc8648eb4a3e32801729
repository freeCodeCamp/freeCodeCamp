import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import React from 'react';
import { isModifierClick } from './lib/isModifierClick.js';

function Pagination(_0) {
    var pages = _0.pages, currentPage = _0.currentPage, nbPages = _0.nbPages, isFirstPage = _0.isFirstPage, isLastPage = _0.isLastPage, _0_showFirst = _0.showFirst, showFirst = _0_showFirst === void 0 ? true : _0_showFirst, _0_showPrevious = _0.showPrevious, showPrevious = _0_showPrevious === void 0 ? true : _0_showPrevious, _0_showNext = _0.showNext, showNext = _0_showNext === void 0 ? true : _0_showNext, _0_showLast = _0.showLast, showLast = _0_showLast === void 0 ? true : _0_showLast, createURL = _0.createURL, onNavigate = _0.onNavigate, translations = _0.translations, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, props = _(_0, [
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
    return /*#__PURE__*/ React.createElement("div", _$1(_$2({}, props), {
        className: cx('ais-Pagination', classNames.root, nbPages <= 1 && cx('ais-Pagination--noRefinement', classNames.noRefinementRoot), props.className)
    }), /*#__PURE__*/ React.createElement("ul", {
        className: cx('ais-Pagination-list', classNames.list)
    }, showFirst && /*#__PURE__*/ React.createElement(PaginationItem, {
        isDisabled: isFirstPage,
        className: cx('ais-Pagination-item--firstPage', classNames.firstPageItem),
        classNames: classNames,
        "aria-label": translations.firstPageItemAriaLabel,
        href: createURL(firstPageIndex),
        onClick: function onClick() {
            return onNavigate(firstPageIndex);
        }
    }, translations.firstPageItemText), showPrevious && /*#__PURE__*/ React.createElement(PaginationItem, {
        isDisabled: isFirstPage,
        className: cx('ais-Pagination-item--previousPage', classNames.previousPageItem),
        classNames: classNames,
        "aria-label": translations.previousPageItemAriaLabel,
        href: createURL(previousPageIndex),
        onClick: function onClick() {
            return onNavigate(previousPageIndex);
        }
    }, translations.previousPageItemText), pages.map(function(page) {
        return /*#__PURE__*/ React.createElement(PaginationItem, {
            key: page,
            isDisabled: false,
            className: cx('ais-Pagination-item--page', classNames.pageItem, page === currentPage && cx('ais-Pagination-item--selected', classNames.selectedItem)),
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
    }), showNext && /*#__PURE__*/ React.createElement(PaginationItem, {
        isDisabled: isLastPage,
        className: cx('ais-Pagination-item--nextPage', classNames.nextPageItem),
        classNames: classNames,
        "aria-label": translations.nextPageItemAriaLabel,
        href: createURL(nextPageIndex),
        onClick: function onClick() {
            return onNavigate(nextPageIndex);
        }
    }, translations.nextPageItemText), showLast && /*#__PURE__*/ React.createElement(PaginationItem, {
        isDisabled: isLastPage,
        className: cx('ais-Pagination-item--lastPage', classNames.lastPageItem),
        classNames: classNames,
        "aria-label": translations.lastPageItemAriaLabel,
        href: createURL(lastPageIndex),
        onClick: function onClick() {
            return onNavigate(lastPageIndex);
        }
    }, translations.lastPageItemText)));
}
function PaginationItem(_0) {
    var isDisabled = _0.isDisabled, className = _0.className, classNames = _0.classNames, href = _0.href, onClick = _0.onClick, props = _(_0, [
        "isDisabled",
        "className",
        "classNames",
        "href",
        "onClick"
    ]);
    if (isDisabled) {
        return /*#__PURE__*/ React.createElement("li", {
            className: cx('ais-Pagination-item', classNames.item, 'ais-Pagination-item--disabled', classNames.disabledItem, className)
        }, /*#__PURE__*/ React.createElement("span", _$2({
            className: cx('ais-Pagination-link', classNames.link)
        }, props)));
    }
    return /*#__PURE__*/ React.createElement("li", {
        className: cx('ais-Pagination-item', classNames.item, className)
    }, /*#__PURE__*/ React.createElement("a", _$2({
        className: cx('ais-Pagination-link', classNames.link),
        href: href,
        onClick: function onClick1(event) {
            if (isModifierClick(event)) {
                return;
            }
            event.preventDefault();
            onClick(event);
        }
    }, props)));
}

export { Pagination };
