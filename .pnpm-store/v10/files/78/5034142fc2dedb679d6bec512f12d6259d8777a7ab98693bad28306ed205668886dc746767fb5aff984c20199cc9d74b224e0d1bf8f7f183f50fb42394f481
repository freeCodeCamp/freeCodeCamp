import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import Template from '../Template/Template.js';
import { isSpecialClick } from '../../lib/utils/isSpecialClick.js';

function Pagination(props) {
    function createClickHandler(pageNumber) {
        return function(event) {
            if (isSpecialClick(event)) {
                // do not alter the default browser behavior
                // if one special key is down
                return;
            }
            event.preventDefault();
            props.setCurrentPage(pageNumber);
        };
    }
    return /*#__PURE__*/ h("div", {
        className: cx(props.cssClasses.root, props.nbPages <= 1 && props.cssClasses.noRefinementRoot)
    }, /*#__PURE__*/ h("ul", {
        className: props.cssClasses.list
    }, props.showFirst && /*#__PURE__*/ h(PaginationLink, {
        ariaLabel: "First Page",
        className: props.cssClasses.firstPageItem,
        isDisabled: props.isFirstPage,
        templates: props.templates,
        templateKey: "first",
        pageNumber: 0,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.showPrevious && /*#__PURE__*/ h(PaginationLink, {
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
        return /*#__PURE__*/ h(PaginationLink, {
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
    }), props.showNext && /*#__PURE__*/ h(PaginationLink, {
        ariaLabel: "Next Page",
        className: props.cssClasses.nextPageItem,
        isDisabled: props.isLastPage,
        templates: props.templates,
        templateKey: "next",
        pageNumber: props.currentPage + 1,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.showLast && /*#__PURE__*/ h(PaginationLink, {
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
    return /*#__PURE__*/ h("li", {
        className: cx(cssClasses.item, isDisabled && cssClasses.disabledItem, className, isSelected && cssClasses.selectedItem)
    }, isDisabled ? /*#__PURE__*/ h(Template, {
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
    }) : /*#__PURE__*/ h(Template, {
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

export { Pagination as default };
