import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import InfiniteHits from '../../components/InfiniteHits/InfiniteHits.js';
import connectInfiniteHits from '../../connectors/infinite-hits/connectInfiniteHits.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import withInsights from '../../lib/insights/client.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'infinite-hits'
});
var suit = component('InfiniteHits');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates, hasShowPrevious = param.showPrevious;
    return function(param, isFirstRendering) {
        var items = param.items, results = param.results, showMore = param.showMore, showPrevious = param.showPrevious, isFirstPage = param.isFirstPage, isLastPage = param.isLastPage, instantSearchInstance = param.instantSearchInstance, insights = param.insights, bindEvent = param.bindEvent, sendEvent = param.sendEvent, banner = param.banner;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        render(/*#__PURE__*/ h(InfiniteHits, {
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
var infiniteHits = (function infiniteHits(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, escapeHTML = _ref.escapeHTML, transformItems = _ref.transformItems, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, showPrevious = _ref.showPrevious, cache = _ref.cache;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        emptyRoot: cx(suit({
            modifierName: 'empty'
        }), userCssClasses.emptyRoot),
        item: cx(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        list: cx(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        loadPrevious: cx(suit({
            descendantName: 'loadPrevious'
        }), userCssClasses.loadPrevious),
        disabledLoadPrevious: cx(suit({
            descendantName: 'loadPrevious',
            modifierName: 'disabled'
        }), userCssClasses.disabledLoadPrevious),
        loadMore: cx(suit({
            descendantName: 'loadMore'
        }), userCssClasses.loadMore),
        disabledLoadMore: cx(suit({
            descendantName: 'loadMore',
            modifierName: 'disabled'
        }), userCssClasses.disabledLoadMore),
        bannerRoot: cx(suit({
            descendantName: 'banner'
        }), userCssClasses.bannerRoot),
        bannerImage: cx(suit({
            descendantName: 'banner-image'
        }), userCssClasses.bannerImage),
        bannerLink: cx(suit({
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
    var makeWidget = withInsights(connectInfiniteHits)(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        escapeHTML: escapeHTML,
        transformItems: transformItems,
        showPrevious: showPrevious,
        cache: cache
    })), {
        $$widgetType: 'ais.infiniteHits'
    });
});

export { infiniteHits as default };
