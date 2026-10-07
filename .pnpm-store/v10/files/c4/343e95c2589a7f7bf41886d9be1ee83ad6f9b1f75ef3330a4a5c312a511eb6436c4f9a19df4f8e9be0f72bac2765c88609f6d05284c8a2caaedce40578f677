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
var _InfiniteHits = /*#__PURE__*/ _interop_require_default._(require("../../components/InfiniteHits/InfiniteHits"));
var _connectInfiniteHits = /*#__PURE__*/ _interop_require_default._(require("../../connectors/infinite-hits/connectInfiniteHits"));
var _insights = require("../../lib/insights");
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'infinite-hits'
});
var suit = (0, _suit.component)('InfiniteHits');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates, hasShowPrevious = param.showPrevious;
    return function(param, isFirstRendering) {
        var items = param.items, results = param.results, showMore = param.showMore, showPrevious = param.showPrevious, isFirstPage = param.isFirstPage, isLastPage = param.isLastPage, instantSearchInstance = param.instantSearchInstance, insights = param.insights, bindEvent = param.bindEvent, sendEvent = param.sendEvent, banner = param.banner;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_InfiniteHits.default, {
            cssClasses: cssClasses,
            hits: items,
            results: results,
            hasShowPrevious: hasShowPrevious,
            showPrevious: showPrevious,
            showMore: showMore,
            templateProps: renderState.templateProps,
            isFirstPage: isFirstPage,
            isLastPage: isLastPage,
            insights: insights,
            sendEvent: sendEvent,
            bindEvent: bindEvent,
            banner: banner
        }), containerNode);
    };
};
var _default = function infiniteHits(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, escapeHTML = _ref.escapeHTML, transformItems = _ref.transformItems, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, showPrevious = _ref.showPrevious, cache = _ref.cache;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        emptyRoot: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'empty'
        }), userCssClasses.emptyRoot),
        item: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        list: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        loadPrevious: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'loadPrevious'
        }), userCssClasses.loadPrevious),
        disabledLoadPrevious: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'loadPrevious',
            modifierName: 'disabled'
        }), userCssClasses.disabledLoadPrevious),
        loadMore: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'loadMore'
        }), userCssClasses.loadMore),
        disabledLoadMore: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'loadMore',
            modifierName: 'disabled'
        }), userCssClasses.disabledLoadMore),
        bannerRoot: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'banner'
        }), userCssClasses.bannerRoot),
        bannerImage: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'banner-image'
        }), userCssClasses.bannerImage),
        bannerLink: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'banner-link'
        }), userCssClasses.bannerLink)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        showPrevious: showPrevious,
        renderState: {}
    });
    var makeWidget = (0, _insights.withInsights)(_connectInfiniteHits.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        escapeHTML: escapeHTML,
        transformItems: transformItems,
        showPrevious: showPrevious,
        cache: cache
    })), {
        $$widgetType: 'ais.infiniteHits'
    });
};
