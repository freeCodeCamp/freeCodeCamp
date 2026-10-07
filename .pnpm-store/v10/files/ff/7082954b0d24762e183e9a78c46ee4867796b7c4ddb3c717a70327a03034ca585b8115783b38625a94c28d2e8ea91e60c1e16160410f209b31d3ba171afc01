import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import RefinementList from '../../components/RefinementList/RefinementList.js';
import connectNumericMenu from '../../connectors/numeric-menu/connectNumericMenu.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'numeric-menu'
});
var suit = component('NumericMenu');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, attribute = param.attribute, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var createURL = param.createURL, instantSearchInstance = param.instantSearchInstance, refine = param.refine, items = param.items;
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
            attribute: attribute
        }), containerNode);
    };
};
var numericMenu = function numericMenu(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, items = _ref.items, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, transformItems = _ref.transformItems;
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
        label: cx(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        radio: cx(suit({
            descendantName: 'radio'
        }), userCssClasses.radio),
        labelText: cx(suit({
            descendantName: 'labelText'
        }), userCssClasses.labelText)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        attribute: attribute,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = connectNumericMenu(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        attribute: attribute,
        items: items,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.numericMenu'
    });
};

export { numericMenu as default };
