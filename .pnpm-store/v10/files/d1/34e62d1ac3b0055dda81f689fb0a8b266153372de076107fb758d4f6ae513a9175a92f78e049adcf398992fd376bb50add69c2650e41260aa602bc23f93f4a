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
var _connectHierarchicalMenu = /*#__PURE__*/ _interop_require_default._(require("../../connectors/hierarchical-menu/connectHierarchicalMenu"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'hierarchical-menu'
});
var suit = (0, _suit.component)('HierarchicalMenu');
var renderer = function renderer(param) {
    var cssClasses = param.cssClasses, containerNode = param.containerNode, showMore = param.showMore, templates = param.templates, renderState = param.renderState;
    return function(param, isFirstRendering) {
        var createURL = param.createURL, items = param.items, refine = param.refine, instantSearchInstance = param.instantSearchInstance, isShowingMore = param.isShowingMore, toggleShowMore = param.toggleShowMore, canToggleShowMore = param.canToggleShowMore;
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
            showMore: showMore,
            toggleShowMore: toggleShowMore,
            isShowingMore: isShowingMore,
            canToggleShowMore: canToggleShowMore
        }), containerNode);
    };
};
var hierarchicalMenu = function hierarchicalMenu(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attributes = _ref.attributes, separator = _ref.separator, rootPath = _ref.rootPath, showParentLevel = _ref.showParentLevel, limit = _ref.limit, _ref_showMore = _ref.showMore, showMore = _ref_showMore === void 0 ? false : _ref_showMore, showMoreLimit = _ref.showMoreLimit, sortBy = _ref.sortBy, transformItems = _ref.transformItems, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp;
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
        childList: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'list',
            modifierName: 'child'
        }), userCssClasses.childList),
        item: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        selectedItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        parentItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'parent'
        }), userCssClasses.parentItem),
        link: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'link'
        }), userCssClasses.link),
        selectedItemLink: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'link',
            modifierName: 'selected'
        }), userCssClasses.selectedItemLink),
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
        cssClasses: cssClasses,
        containerNode: containerNode,
        templates: templates,
        showMore: showMore,
        renderState: {}
    });
    var makeWidget = (0, _connectHierarchicalMenu.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attributes: attributes,
        separator: separator,
        rootPath: rootPath,
        showParentLevel: showParentLevel,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.hierarchicalMenu'
    });
};
var _default = hierarchicalMenu;
