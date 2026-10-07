import { _ } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import Pagination from '../../components/Pagination/Pagination.js';
import connectPagination from '../../connectors/pagination/connectPagination.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';

var suit = component('Pagination');
var withUsage = createDocumentationMessageGenerator({
    name: 'pagination'
});
var defaultTemplates = {
    previous: function previous() {
        return '‹';
    },
    next: function next() {
        return '›';
    },
    page: function page(param) {
        var page = param.page;
        return "".concat(page);
    },
    first: function first() {
        return '«';
    },
    last: function last() {
        return '»';
    }
};
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, templates = param.templates, showFirst = param.showFirst, showLast = param.showLast, showPrevious = param.showPrevious, showNext = param.showNext, scrollToNode = param.scrollToNode;
    return function(param, isFirstRendering) {
        var createURL = param.createURL, currentRefinement = param.currentRefinement, nbPages = param.nbPages, pages = param.pages, isFirstPage = param.isFirstPage, isLastPage = param.isLastPage, refine = param.refine;
        if (isFirstRendering) return;
        var setCurrentPage = function setCurrentPage(pageNumber) {
            refine(pageNumber);
            if (scrollToNode !== false) {
                scrollToNode.scrollIntoView();
            }
        };
        render(/*#__PURE__*/ h(Pagination, {
            createURL: createURL,
            cssClasses: cssClasses,
            currentPage: currentRefinement,
            templates: templates,
            nbPages: nbPages,
            pages: pages,
            isFirstPage: isFirstPage,
            isLastPage: isLastPage,
            setCurrentPage: setCurrentPage,
            showFirst: showFirst,
            showLast: showLast,
            showPrevious: showPrevious,
            showNext: showNext
        }), containerNode);
    };
};
var pagination = function pagination(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, tmp = _ref.templates, userTemplates = tmp === void 0 ? {} : tmp, tmp1 = _ref.cssClasses, userCssClasses = tmp1 === void 0 ? {} : tmp1, totalPages = _ref.totalPages, padding = _ref.padding, _ref_showFirst = _ref.showFirst, showFirst = _ref_showFirst === void 0 ? true : _ref_showFirst, _ref_showLast = _ref.showLast, showLast = _ref_showLast === void 0 ? true : _ref_showLast, _ref_showPrevious = _ref.showPrevious, showPrevious = _ref_showPrevious === void 0 ? true : _ref_showPrevious, _ref_showNext = _ref.showNext, showNext = _ref_showNext === void 0 ? true : _ref_showNext, tmp2 = _ref.scrollTo, userScrollTo = tmp2 === void 0 ? 'body' : tmp2;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var scrollTo = userScrollTo === true ? 'body' : userScrollTo;
    var scrollToNode = scrollTo !== false ? getContainerNode(scrollTo) : false;
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        noRefinementRoot: cx(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        list: cx(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: cx(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        firstPageItem: cx(suit({
            descendantName: 'item',
            modifierName: 'firstPage'
        }), userCssClasses.firstPageItem),
        lastPageItem: cx(suit({
            descendantName: 'item',
            modifierName: 'lastPage'
        }), userCssClasses.lastPageItem),
        previousPageItem: cx(suit({
            descendantName: 'item',
            modifierName: 'previousPage'
        }), userCssClasses.previousPageItem),
        nextPageItem: cx(suit({
            descendantName: 'item',
            modifierName: 'nextPage'
        }), userCssClasses.nextPageItem),
        pageItem: cx(suit({
            descendantName: 'item',
            modifierName: 'page'
        }), userCssClasses.pageItem),
        selectedItem: cx(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        disabledItem: cx(suit({
            descendantName: 'item',
            modifierName: 'disabled'
        }), userCssClasses.disabledItem),
        link: cx(suit({
            descendantName: 'link'
        }), userCssClasses.link)
    };
    var templates = _({}, defaultTemplates, userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        showFirst: showFirst,
        showLast: showLast,
        showPrevious: showPrevious,
        showNext: showNext,
        scrollToNode: scrollToNode
    });
    var makeWidget = connectPagination(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _$1(_({}, makeWidget({
        totalPages: totalPages,
        padding: padding
    })), {
        $$widgetType: 'ais.pagination'
    });
};

export { pagination as default };
