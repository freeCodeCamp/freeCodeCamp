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
var _connectMenu = /*#__PURE__*/ _interop_require_default._(require("../../connectors/menu/connectMenu"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'menu'
});
var suit = (0, _suit.component)('Menu');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates, showMore = param.showMore;
    return function(param, isFirstRendering) {
        var refine = param.refine, items = param.items, createURL = param.createURL, instantSearchInstance = param.instantSearchInstance, isShowingMore = param.isShowingMore, toggleShowMore = param.toggleShowMore, canToggleShowMore = param.canToggleShowMore;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        var facetValues = items.map(function(facetValue) {
            return _object_spread_props._(_object_spread._({}, facetValue), {
                url: createURL(facetValue.value)
            });
        });
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_RefinementList.default, {
            createURL: createURL,
            cssClasses: cssClasses,
            facetValues: facetValues,
            showMore: showMore,
            templateProps: renderState.templateProps,
            toggleRefinement: refine,
            toggleShowMore: toggleShowMore,
            isShowingMore: isShowingMore,
            canToggleShowMore: canToggleShowMore
        }), containerNode);
    };
};
var menu = function menu(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, sortBy = _ref.sortBy, limit = _ref.limit, showMore = _ref.showMore, showMoreLimit = _ref.showMoreLimit, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, transformItems = _ref.transformItems;
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
        link: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'link'
        }), userCssClasses.link),
        label: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        count: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'count'
        }), userCssClasses.count),
        showMore: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'showMore'
        }), userCssClasses.showMore),
        disabledShowMore: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'showMore',
            modifierName: 'disabled'
        }), userCssClasses.disabledShowMore)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates,
        showMore: showMore
    });
    var makeWidget = (0, _connectMenu.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attribute: attribute,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.menu'
    });
};
var _default = menu;
