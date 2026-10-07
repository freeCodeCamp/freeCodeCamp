import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { usePagination } from 'react-instantsearch-core';
import { Pagination as Pagination$1 } from '../ui/Pagination.js';

function Pagination(_0) {
    var showFirst = _0.showFirst, showPrevious = _0.showPrevious, showNext = _0.showNext, showLast = _0.showLast, padding = _0.padding, totalPages = _0.totalPages, translations = _0.translations, props = _(_0, [
        "showFirst",
        "showPrevious",
        "showNext",
        "showLast",
        "padding",
        "totalPages",
        "translations"
    ]);
    var _usePagination = usePagination({
        padding: padding,
        totalPages: totalPages
    }, {
        $$widgetType: 'ais.pagination'
    }), pages = _usePagination.pages, currentRefinement = _usePagination.currentRefinement, isFirstPage = _usePagination.isFirstPage, isLastPage = _usePagination.isLastPage, nbPages = _usePagination.nbPages, createURL = _usePagination.createURL, refine = _usePagination.refine;
    var uiProps = {
        pages: pages,
        currentPage: currentRefinement,
        isFirstPage: isFirstPage,
        isLastPage: isLastPage,
        nbPages: nbPages,
        createURL: createURL,
        onNavigate: refine,
        translations: _$1({
            firstPageItemText: '‹‹',
            previousPageItemText: '‹',
            nextPageItemText: '›',
            lastPageItemText: '››',
            pageItemText: function pageItemText(param) {
                var currentPage = param.currentPage;
                return String(currentPage);
            },
            firstPageItemAriaLabel: 'First Page',
            previousPageItemAriaLabel: 'Previous Page',
            nextPageItemAriaLabel: 'Next Page',
            lastPageItemAriaLabel: "Last Page, Page ".concat(nbPages),
            pageItemAriaLabel: function pageItemAriaLabel(param) {
                var currentPage = param.currentPage;
                return "Page ".concat(currentPage);
            }
        }, translations)
    };
    return /*#__PURE__*/ React.createElement(Pagination$1, _$2(_$1({}, props, uiProps), {
        showFirst: showFirst,
        showPrevious: showPrevious,
        showNext: showNext,
        showLast: showLast
    }));
}

export { Pagination };
