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
var _ToggleRefinement = /*#__PURE__*/ _interop_require_default._(require("../../components/ToggleRefinement/ToggleRefinement"));
var _connectToggleRefinement = /*#__PURE__*/ _interop_require_default._(require("../../connectors/toggle-refinement/connectToggleRefinement"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'toggle-refinement'
});
var suit = (0, _suit.component)('ToggleRefinement');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var value = param.value, refine = param.refine, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_ToggleRefinement.default, {
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
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        label: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        checkbox: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'checkbox'
        }), userCssClasses.checkbox),
        labelText: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'labelText'
        }), userCssClasses.labelText)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = (0, _connectToggleRefinement.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attribute: attribute,
        on: on,
        off: off
    })), {
        $$widgetType: 'ais.toggleRefinement'
    });
};
var _default = toggleRefinement;
