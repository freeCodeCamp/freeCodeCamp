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
var _RefinementList = /*#__PURE__*/ _interop_require_default._(require("../../components/RefinementList/RefinementList"));
var _connectNumericMenu = /*#__PURE__*/ _interop_require_default._(require("../../connectors/numeric-menu/connectNumericMenu"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'numeric-menu'
});
var suit = (0, _suit.component)('NumericMenu');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, attribute = param.attribute, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var createURL = param.createURL, instantSearchInstance = param.instantSearchInstance, refine = param.refine, items = param.items;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_RefinementList.default, {
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
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        noRefinementRoot: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        list: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        selectedItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        label: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        radio: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'radio'
        }), userCssClasses.radio),
        labelText: (0, _instantsearchuicomponents.cx)(suit({
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
    var makeWidget = (0, _connectNumericMenu.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attribute: attribute,
        items: items,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.numericMenu'
    });
};
var _default = numericMenu;
