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
var _ClearRefinements = /*#__PURE__*/ _interop_require_default._(require("../../components/ClearRefinements/ClearRefinements"));
var _connectClearRefinements = /*#__PURE__*/ _interop_require_default._(require("../../connectors/clear-refinements/connectClearRefinements"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'clear-refinements'
});
var suit = (0, _suit.component)('ClearRefinements');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var refine = param.refine, canRefine = param.canRefine, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_ClearRefinements.default, {
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
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        button: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'button'
        }), userCssClasses.button),
        disabledButton: (0, _instantsearchuicomponents.cx)(suit({
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
    var makeWidget = (0, _connectClearRefinements.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        includedAttributes: includedAttributes,
        excludedAttributes: excludedAttributes,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.clearRefinements'
    });
};
var _default = clearRefinements;
