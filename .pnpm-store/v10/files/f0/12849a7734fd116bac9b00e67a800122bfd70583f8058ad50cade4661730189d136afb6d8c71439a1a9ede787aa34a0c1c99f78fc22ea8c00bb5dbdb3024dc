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
var _MenuSelect = /*#__PURE__*/ _interop_require_default._(require("../../components/MenuSelect/MenuSelect"));
var _connectMenu = /*#__PURE__*/ _interop_require_default._(require("../../connectors/menu/connectMenu"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'menu-select'
});
var suit = (0, _suit.component)('MenuSelect');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var refine = param.refine, items = param.items, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_MenuSelect.default, {
            cssClasses: cssClasses,
            items: items,
            refine: refine,
            templateProps: renderState.templateProps
        }), containerNode);
    };
};
var menuSelect = function menuSelect(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, _ref_sortBy = _ref.sortBy, sortBy = _ref_sortBy === void 0 ? [
        'name:asc'
    ] : _ref_sortBy, _ref_limit = _ref.limit, limit = _ref_limit === void 0 ? 10 : _ref_limit, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, transformItems = _ref.transformItems;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        noRefinementRoot: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        select: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'select'
        }), userCssClasses.select),
        option: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'option'
        }), userCssClasses.option)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = (0, _connectMenu.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attribute: attribute,
        limit: limit,
        sortBy: sortBy,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.menuSelect'
    });
};
var _default = menuSelect;
