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
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _RangeInput = /*#__PURE__*/ _interop_require_default._(require("../../components/RangeInput/RangeInput"));
var _connectRange = /*#__PURE__*/ _interop_require_default._(require("../../connectors/range/connectRange"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'range-input'
});
var suit = (0, _suit.component)('RangeInput');
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
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        var rangeMin = range.min, rangeMax = range.max;
        var _start = _sliced_to_array._(start, 2), minValue = _start[0], maxValue = _start[1];
        var step = 1 / Math.pow(10, widgetParams.precision || 0);
        var values = {
            min: minValue !== -Infinity && minValue !== rangeMin ? minValue : undefined,
            max: maxValue !== Infinity && maxValue !== rangeMax ? maxValue : undefined
        };
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_RangeInput.default, {
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
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        noRefinement: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'noRefinement'
        })),
        form: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'form'
        }), userCssClasses.form),
        label: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        input: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'input'
        }), userCssClasses.input),
        inputMin: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'input',
            modifierName: 'min'
        }), userCssClasses.inputMin),
        inputMax: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'input',
            modifierName: 'max'
        }), userCssClasses.inputMax),
        separator: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'separator'
        }), userCssClasses.separator),
        submit: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'submit'
        }), userCssClasses.submit)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        renderState: {}
    });
    var makeWidget = (0, _connectRange.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attribute: attribute,
        min: min,
        max: max,
        precision: precision
    })), {
        $$type: 'ais.rangeInput',
        $$widgetType: 'ais.rangeInput'
    });
};
var _default = rangeInput;
