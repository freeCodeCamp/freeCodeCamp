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
var _Breadcrumb = /*#__PURE__*/ _interop_require_default._(require("../../components/Breadcrumb/Breadcrumb"));
var _connectBreadcrumb = /*#__PURE__*/ _interop_require_default._(require("../../connectors/breadcrumb/connectBreadcrumb"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'breadcrumb'
});
var suit = (0, _suit.component)('Breadcrumb');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var canRefine = param.canRefine, createURL = param.createURL, instantSearchInstance = param.instantSearchInstance, items = param.items, refine = param.refine;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_Breadcrumb.default, {
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
        separator: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'separator'
        }), userCssClasses.separator),
        link: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'link'
        }), userCssClasses.link)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = (0, _connectBreadcrumb.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attributes: attributes,
        separator: separator,
        rootPath: rootPath,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.breadcrumb'
    });
};
var _default = breadcrumb;
