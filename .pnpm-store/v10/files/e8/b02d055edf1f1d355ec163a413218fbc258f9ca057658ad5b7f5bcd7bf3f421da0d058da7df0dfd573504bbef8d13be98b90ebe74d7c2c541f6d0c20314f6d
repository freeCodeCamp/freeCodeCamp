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
var _connectRatingMenu = /*#__PURE__*/ _interop_require_default._(require("../../connectors/rating-menu/connectRatingMenu"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'rating-menu'
});
var suit = (0, _suit.component)('RatingMenu');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, templates = param.templates, renderState = param.renderState;
    return function(param, isFirstRendering) {
        var refine = param.refine, items = param.items, createURL = param.createURL, instantSearchInstance = param.instantSearchInstance;
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
            toggleRefinement: refine
        }, /*#__PURE__*/ (0, _preact.h)("svg", {
            style: "display:none;"
        }, /*#__PURE__*/ (0, _preact.h)("symbol", {
            id: suit({
                descendantName: 'starSymbol'
            }),
            viewBox: "0 0 24 24"
        }, /*#__PURE__*/ (0, _preact.h)("path", {
            d: "M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
        })), /*#__PURE__*/ (0, _preact.h)("symbol", {
            id: suit({
                descendantName: 'starEmptySymbol'
            }),
            viewBox: "0 0 24 24"
        }, /*#__PURE__*/ (0, _preact.h)("path", {
            d: "M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"
        })))), containerNode);
    };
};
var ratingMenu = function ratingMenu(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, _ref_max = _ref.max, max = _ref_max === void 0 ? 5 : _ref_max, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates;
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
        disabledItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'disabled'
        }), userCssClasses.disabledItem),
        link: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'link'
        }), userCssClasses.link),
        starIcon: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'starIcon'
        }), userCssClasses.starIcon),
        fullStarIcon: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'starIcon',
            modifierName: 'full'
        }), userCssClasses.fullStarIcon),
        emptyStarIcon: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'starIcon',
            modifierName: 'empty'
        }), userCssClasses.emptyStarIcon),
        label: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        count: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'count'
        }), userCssClasses.count)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = (0, _connectRatingMenu.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attribute: attribute,
        max: max
    })), {
        $$widgetType: 'ais.ratingMenu'
    });
};
var _default = ratingMenu;
