'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _utils = require("../../lib/utils");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
function Pagination(props) {
    function createClickHandler(pageNumber) {
        return function(event) {
            if ((0, _utils.isSpecialClick)(event)) {
                // do not alter the default browser behavior
                // if one special key is down
                return;
            }
            event.preventDefault();
            props.setCurrentPage(pageNumber);
        };
    }
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: (0, _instantsearchuicomponents.cx)(props.cssClasses.root, props.nbPages <= 1 && props.cssClasses.noRefinementRoot)
    }, /*#__PURE__*/ (0, _preact.h)("ul", {
        className: props.cssClasses.list
    }, props.showFirst && /*#__PURE__*/ (0, _preact.h)(PaginationLink, {
        ariaLabel: "First Page",
        className: props.cssClasses.firstPageItem,
        isDisabled: props.isFirstPage,
        templates: props.templates,
        templateKey: "first",
        pageNumber: 0,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.showPrevious && /*#__PURE__*/ (0, _preact.h)(PaginationLink, {
        ariaLabel: "Previous Page",
        className: props.cssClasses.previousPageItem,
        isDisabled: props.isFirstPage,
        templates: props.templates,
        templateKey: "previous",
        pageNumber: props.currentPage - 1,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.pages.map(function(pageNumber) {
        return /*#__PURE__*/ (0, _preact.h)(PaginationLink, {
            key: pageNumber,
            ariaLabel: "Page ".concat(pageNumber + 1),
            className: props.cssClasses.pageItem,
            isSelected: pageNumber === props.currentPage,
            templates: props.templates,
            templateKey: "page",
            pageNumber: pageNumber,
            createURL: props.createURL,
            cssClasses: props.cssClasses,
            createClickHandler: createClickHandler
        });
    }), props.showNext && /*#__PURE__*/ (0, _preact.h)(PaginationLink, {
        ariaLabel: "Next Page",
        className: props.cssClasses.nextPageItem,
        isDisabled: props.isLastPage,
        templates: props.templates,
        templateKey: "next",
        pageNumber: props.currentPage + 1,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.showLast && /*#__PURE__*/ (0, _preact.h)(PaginationLink, {
        ariaLabel: "Last Page, Page ".concat(props.nbPages),
        className: props.cssClasses.lastPageItem,
        isDisabled: props.isLastPage,
        templates: props.templates,
        templateKey: "last",
        pageNumber: props.nbPages - 1,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    })));
}
function PaginationLink(param) {
    var templates = param.templates, templateKey = param.templateKey, ariaLabel = param.ariaLabel, pageNumber = param.pageNumber, className = param.className, _param_isDisabled = param.isDisabled, isDisabled = _param_isDisabled === void 0 ? false : _param_isDisabled, _param_isSelected = param.isSelected, isSelected = _param_isSelected === void 0 ? false : _param_isSelected, cssClasses = param.cssClasses, createURL = param.createURL, createClickHandler = param.createClickHandler;
    return /*#__PURE__*/ (0, _preact.h)("li", {
        className: (0, _instantsearchuicomponents.cx)(cssClasses.item, isDisabled && cssClasses.disabledItem, className, isSelected && cssClasses.selectedItem)
    }, isDisabled ? /*#__PURE__*/ (0, _preact.h)(_Template.default, {
        rootTagName: "span",
        rootProps: {
            className: cssClasses.link,
            'aria-label': ariaLabel
        },
        templateKey: templateKey,
        templates: templates,
        data: {
            page: pageNumber + 1
        }
    }) : /*#__PURE__*/ (0, _preact.h)(_Template.default, {
        rootTagName: "a",
        rootProps: {
            className: cssClasses.link,
            'aria-label': ariaLabel,
            href: createURL(pageNumber),
            onClick: createClickHandler(pageNumber)
        },
        templateKey: templateKey,
        templates: templates,
        data: {
            page: pageNumber + 1
        }
    }));
}
var _default = Pagination;
