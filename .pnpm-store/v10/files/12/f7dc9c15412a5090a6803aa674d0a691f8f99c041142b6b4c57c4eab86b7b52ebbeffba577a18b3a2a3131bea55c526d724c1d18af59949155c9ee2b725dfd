import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$2 } from '@swc/helpers/esm/_sliced_to_array.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import RangeInput from '../../components/RangeInput/RangeInput.js';
import connectRange from '../../connectors/range/connectRange.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'range-input'
});
var suit = component('RangeInput');
var defaultTemplates = {
    separatorText: function separatorText() {
        return 'to';
    },
    submitText: function submitText() {
        return 'Go';
    }
};
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var refine = param.refine, range = param.range, start = param.start, widgetParams = param.widgetParams, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        var rangeMin = range.min, rangeMax = range.max;
        var _start = _$2(start, 2), minValue = _start[0], maxValue = _start[1];
        var step = 1 / Math.pow(10, widgetParams.precision || 0);
        var values = {
            min: minValue !== -Infinity && minValue !== rangeMin ? minValue : undefined,
            max: maxValue !== Infinity && maxValue !== rangeMax ? maxValue : undefined
        };
        render(/*#__PURE__*/ h(RangeInput, {
            min: rangeMin,
            max: rangeMax,
            step: step,
            values: values,
            cssClasses: cssClasses,
            refine: refine,
            templateProps: renderState.templateProps
        }), containerNode);
    };
};
var rangeInput = function rangeInput(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, min = _ref.min, max = _ref.max, _ref_precision = _ref.precision, precision = _ref_precision === void 0 ? 0 : _ref_precision, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        noRefinement: cx(suit({
            modifierName: 'noRefinement'
        })),
        form: cx(suit({
            descendantName: 'form'
        }), userCssClasses.form),
        label: cx(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        input: cx(suit({
            descendantName: 'input'
        }), userCssClasses.input),
        inputMin: cx(suit({
            descendantName: 'input',
            modifierName: 'min'
        }), userCssClasses.inputMin),
        inputMax: cx(suit({
            descendantName: 'input',
            modifierName: 'max'
        }), userCssClasses.inputMax),
        separator: cx(suit({
            descendantName: 'separator'
        }), userCssClasses.separator),
        submit: cx(suit({
            descendantName: 'submit'
        }), userCssClasses.submit)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        renderState: {}
    });
    var makeWidget = connectRange(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        attribute: attribute,
        min: min,
        max: max,
        precision: precision
    })), {
        $$type: 'ais.rangeInput',
        $$widgetType: 'ais.rangeInput'
    });
};

export { rangeInput as default };
