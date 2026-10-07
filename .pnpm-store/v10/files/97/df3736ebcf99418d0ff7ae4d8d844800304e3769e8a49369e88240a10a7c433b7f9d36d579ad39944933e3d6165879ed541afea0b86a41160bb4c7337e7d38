import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import ClearRefinements from '../../components/ClearRefinements/ClearRefinements.js';
import connectClearRefinements from '../../connectors/clear-refinements/connectClearRefinements.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'clear-refinements'
});
var suit = component('ClearRefinements');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var refine = param.refine, canRefine = param.canRefine, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        render(/*#__PURE__*/ h(ClearRefinements, {
            refine: refine,
            cssClasses: cssClasses,
            hasRefinements: canRefine,
            templateProps: renderState.templateProps
        }), containerNode);
    };
};
var clearRefinements = function clearRefinements(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, includedAttributes = _ref.includedAttributes, excludedAttributes = _ref.excludedAttributes, transformItems = _ref.transformItems, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        button: cx(suit({
            descendantName: 'button'
        }), userCssClasses.button),
        disabledButton: cx(suit({
            descendantName: 'button',
            modifierName: 'disabled'
        }), userCssClasses.disabledButton)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = connectClearRefinements(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        includedAttributes: includedAttributes,
        excludedAttributes: excludedAttributes,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.clearRefinements'
    });
};

export { clearRefinements as default };
