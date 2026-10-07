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
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _Pagination = require("../ui/Pagination");
function Pagination(_0) {
    var showFirst = _0.showFirst, showPrevious = _0.showPrevious, showNext = _0.showNext, showLast = _0.showLast, padding = _0.padding, totalPages = _0.totalPages, translations = _0.translations, props = _object_without_properties._(_0, [
        "showFirst",
        "showPrevious",
        "showNext",
        "showLast",
        "padding",
        "totalPages",
        "translations"
    ]);
    var _usePagination = (0, _reactinstantsearchcore.usePagination)({
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
        translations: _object_spread._({
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
    return /*#__PURE__*/ _react.default.createElement(_Pagination.Pagination, _object_spread_props._(_object_spread._({}, props, uiProps), {
        showFirst: showFirst,
        showPrevious: showPrevious,
        showNext: showNext,
        showLast: showLast
    }));
}
