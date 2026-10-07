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
var _CurrentRefinements = /*#__PURE__*/ _interop_require_default._(require("../../components/CurrentRefinements/CurrentRefinements"));
var _connectCurrentRefinements = /*#__PURE__*/ _interop_require_default._(require("../../connectors/current-refinements/connectCurrentRefinements"));
var _suit = require("../../lib/suit");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'current-refinements'
});
var suit = (0, _suit.component)('CurrentRefinements');
var renderer = function renderer(param, isFirstRender) {
    var items = param.items, widgetParams = param.widgetParams, canRefine = param.canRefine;
    if (isFirstRender) {
        return;
    }
    var container = widgetParams.container, cssClasses = widgetParams.cssClasses;
    (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_CurrentRefinements.default, {
        cssClasses: cssClasses,
        items: items,
        canRefine: canRefine
    }), container);
};
var currentRefinements = function currentRefinements(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, includedAttributes = _ref.includedAttributes, excludedAttributes = _ref.excludedAttributes, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, transformItems = _ref.transformItems;
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
        label: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        category: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'category'
        }), userCssClasses.category),
        categoryLabel: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'categoryLabel'
        }), userCssClasses.categoryLabel),
        delete: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'delete'
        }), userCssClasses.delete)
    };
    var makeWidget = (0, _connectCurrentRefinements.default)(renderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        container: containerNode,
        cssClasses: cssClasses,
        includedAttributes: includedAttributes,
        excludedAttributes: excludedAttributes,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.currentRefinements'
    });
};
var _default = currentRefinements;
