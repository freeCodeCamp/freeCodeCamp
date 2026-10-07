import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import ToggleRefinement from '../../components/ToggleRefinement/ToggleRefinement.js';
import connectToggleRefinement from '../../connectors/toggle-refinement/connectToggleRefinement.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'toggle-refinement'
});
var suit = component('ToggleRefinement');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var value = param.value, refine = param.refine, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        render(/*#__PURE__*/ h(ToggleRefinement, {
            cssClasses: cssClasses,
            currentRefinement: value,
            templateProps: renderState.templateProps,
            refine: refine
        }), containerNode);
    };
};
/**
 * The toggleRefinement widget lets the user either:
 *  - switch between two values for a single facetted attribute (free_shipping / not_free_shipping)
 *  - toggleRefinement a faceted value on and off (only 'canon' for brands)
 *
 * This widget is particularly useful if you have a boolean value in the records.
 *
 * @requirements
 * The attribute passed to `attribute` must be declared as an
 * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
 * in your Algolia settings.
 */ var toggleRefinement = function toggleRefinement(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, _ref_on = _ref.on, on = _ref_on === void 0 ? true : _ref_on, off = _ref.off;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        label: cx(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        checkbox: cx(suit({
            descendantName: 'checkbox'
        }), userCssClasses.checkbox),
        labelText: cx(suit({
            descendantName: 'labelText'
        }), userCssClasses.labelText)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = connectToggleRefinement(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        attribute: attribute,
        on: on,
        off: off
    })), {
        $$widgetType: 'ais.toggleRefinement'
    });
};

export { toggleRefinement as default };
