import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import RefinementList from '../../components/RefinementList/RefinementList.js';
import connectMenu from '../../connectors/menu/connectMenu.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'menu'
});
var suit = component('Menu');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates, showMore = param.showMore;
    return function(param, isFirstRendering) {
        var refine = param.refine, items = param.items, createURL = param.createURL, instantSearchInstance = param.instantSearchInstance, isShowingMore = param.isShowingMore, toggleShowMore = param.toggleShowMore, canToggleShowMore = param.canToggleShowMore;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        var facetValues = items.map(function(facetValue) {
            return _(_$1({}, facetValue), {
                url: createURL(facetValue.value)
            });
        });
        render(/*#__PURE__*/ h(RefinementList, {
            createURL: createURL,
            cssClasses: cssClasses,
            facetValues: facetValues,
            showMore: showMore,
            templateProps: renderState.templateProps,
            toggleRefinement: refine,
            toggleShowMore: toggleShowMore,
            isShowingMore: isShowingMore,
            canToggleShowMore: canToggleShowMore
        }), containerNode);
    };
};
var menu = function menu(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, sortBy = _ref.sortBy, limit = _ref.limit, showMore = _ref.showMore, showMoreLimit = _ref.showMoreLimit, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, transformItems = _ref.transformItems;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
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
        selectedItem: cx(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        link: cx(suit({
            descendantName: 'link'
        }), userCssClasses.link),
        label: cx(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        count: cx(suit({
            descendantName: 'count'
        }), userCssClasses.count),
        showMore: cx(suit({
            descendantName: 'showMore'
        }), userCssClasses.showMore),
        disabledShowMore: cx(suit({
            descendantName: 'showMore',
            modifierName: 'disabled'
        }), userCssClasses.disabledShowMore)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates,
        showMore: showMore
    });
    var makeWidget = connectMenu(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        attribute: attribute,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.menu'
    });
};

export { menu as default };
