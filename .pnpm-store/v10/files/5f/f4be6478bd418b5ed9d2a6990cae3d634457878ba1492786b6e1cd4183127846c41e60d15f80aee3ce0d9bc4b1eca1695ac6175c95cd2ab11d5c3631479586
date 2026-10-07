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
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _Pagination = /*#__PURE__*/ _interop_require_default._(require("../../components/Pagination/Pagination"));
var _connectPagination = /*#__PURE__*/ _interop_require_default._(require("../../connectors/pagination/connectPagination"));
var _suit = require("../../lib/suit");
var _utils = require("../../lib/utils");
var suit = (0, _suit.component)('Pagination');
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
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
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_Pagination.default, {
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
    var containerNode = (0, _utils.getContainerNode)(container);
    var scrollTo = userScrollTo === true ? 'body' : userScrollTo;
    var scrollToNode = scrollTo !== false ? (0, _utils.getContainerNode)(scrollTo) : false;
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        noRefinementRoot: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        list: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        firstPageItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'firstPage'
        }), userCssClasses.firstPageItem),
        lastPageItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'lastPage'
        }), userCssClasses.lastPageItem),
        previousPageItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'previousPage'
        }), userCssClasses.previousPageItem),
        nextPageItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'nextPage'
        }), userCssClasses.nextPageItem),
        pageItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'page'
        }), userCssClasses.pageItem),
        selectedItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        disabledItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'disabled'
        }), userCssClasses.disabledItem),
        link: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'link'
        }), userCssClasses.link)
    };
    var templates = _object_spread._({}, defaultTemplates, userTemplates);
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
    var makeWidget = (0, _connectPagination.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        totalPages: totalPages,
        padding: padding
    })), {
        $$widgetType: 'ais.pagination'
    });
};
var _default = pagination;
