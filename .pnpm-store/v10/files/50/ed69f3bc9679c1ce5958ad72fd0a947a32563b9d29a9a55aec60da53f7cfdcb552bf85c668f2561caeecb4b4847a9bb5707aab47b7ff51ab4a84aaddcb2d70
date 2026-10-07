import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.js';
import connectBreadcrumb from '../../connectors/breadcrumb/connectBreadcrumb.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'breadcrumb'
});
var suit = component('Breadcrumb');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var canRefine = param.canRefine, createURL = param.createURL, instantSearchInstance = param.instantSearchInstance, items = param.items, refine = param.refine;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        render(/*#__PURE__*/ h(Breadcrumb, {
            canRefine: canRefine,
            cssClasses: cssClasses,
            createURL: createURL,
            items: items,
            refine: refine,
            templateProps: renderState.templateProps
        }), containerNode);
    };
};
var breadcrumb = function breadcrumb(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attributes = _ref.attributes, separator = _ref.separator, rootPath = _ref.rootPath, transformItems = _ref.transformItems, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp;
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
        separator: cx(suit({
            descendantName: 'separator'
        }), userCssClasses.separator),
        link: cx(suit({
            descendantName: 'link'
        }), userCssClasses.link)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = connectBreadcrumb(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        attributes: attributes,
        separator: separator,
        rootPath: rootPath,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.breadcrumb'
    });
};

export { breadcrumb as default };
