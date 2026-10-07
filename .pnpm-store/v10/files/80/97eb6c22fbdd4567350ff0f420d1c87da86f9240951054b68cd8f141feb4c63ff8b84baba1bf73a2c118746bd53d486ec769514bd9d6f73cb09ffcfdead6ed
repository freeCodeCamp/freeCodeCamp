import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import RefinementList from '../../components/RefinementList/RefinementList.js';
import connectHierarchicalMenu from '../../connectors/hierarchical-menu/connectHierarchicalMenu.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'hierarchical-menu'
});
var suit = component('HierarchicalMenu');
var renderer = function renderer(param) {
    var cssClasses = param.cssClasses, containerNode = param.containerNode, showMore = param.showMore, templates = param.templates, renderState = param.renderState;
    return function(param, isFirstRendering) {
        var createURL = param.createURL, items = param.items, refine = param.refine, instantSearchInstance = param.instantSearchInstance, isShowingMore = param.isShowingMore, toggleShowMore = param.toggleShowMore, canToggleShowMore = param.canToggleShowMore;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        render(/*#__PURE__*/ h(RefinementList, {
            createURL: createURL,
            cssClasses: cssClasses,
            facetValues: items,
            templateProps: renderState.templateProps,
            toggleRefinement: refine,
            showMore: showMore,
            toggleShowMore: toggleShowMore,
            isShowingMore: isShowingMore,
            canToggleShowMore: canToggleShowMore
        }), containerNode);
    };
};
var hierarchicalMenu = function hierarchicalMenu(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attributes = _ref.attributes, separator = _ref.separator, rootPath = _ref.rootPath, showParentLevel = _ref.showParentLevel, limit = _ref.limit, _ref_showMore = _ref.showMore, showMore = _ref_showMore === void 0 ? false : _ref_showMore, showMoreLimit = _ref.showMoreLimit, sortBy = _ref.sortBy, transformItems = _ref.transformItems, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp;
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
        childList: cx(suit({
            descendantName: 'list',
            modifierName: 'child'
        }), userCssClasses.childList),
        item: cx(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        selectedItem: cx(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        parentItem: cx(suit({
            descendantName: 'item',
            modifierName: 'parent'
        }), userCssClasses.parentItem),
        link: cx(suit({
            descendantName: 'link'
        }), userCssClasses.link),
        selectedItemLink: cx(suit({
            descendantName: 'link',
            modifierName: 'selected'
        }), userCssClasses.selectedItemLink),
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
        cssClasses: cssClasses,
        containerNode: containerNode,
        templates: templates,
        showMore: showMore,
        renderState: {}
    });
    var makeWidget = connectHierarchicalMenu(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        attributes: attributes,
        separator: separator,
        rootPath: rootPath,
        showParentLevel: showParentLevel,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.hierarchicalMenu'
    });
};

export { hierarchicalMenu as default };
