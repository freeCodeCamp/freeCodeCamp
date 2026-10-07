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
var _Selector = /*#__PURE__*/ _interop_require_default._(require("../../components/Selector/Selector"));
var _connectHitsPerPage = /*#__PURE__*/ _interop_require_default._(require("../../connectors/hits-per-page/connectHitsPerPage"));
var _suit = require("../../lib/suit");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'hits-per-page'
});
var suit = (0, _suit.component)('HitsPerPage');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses;
    return function(param, isFirstRendering) {
        var items = param.items, refine = param.refine;
        if (isFirstRendering) return;
        var _ref = (0, _utils.find)(items, function(param) {
            var isRefined = param.isRefined;
            return isRefined;
        }) || {}, currentValue = _ref.value;
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)("div", {
            className: cssClasses.root
        }, /*#__PURE__*/ (0, _preact.h)(_Selector.default, {
            cssClasses: cssClasses,
            currentValue: currentValue,
            options: items,
            // @ts-expect-error: the refine function expects a number, but setValue will call it with a string. We don't want to change the type of the refine function because it's part of the connector API.
            setValue: refine
        })), containerNode);
    };
};
var hitsPerPage = function hitsPerPage(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, items = _ref.items, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, transformItems = _ref.transformItems;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        select: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'select'
        }), userCssClasses.select),
        option: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'option'
        }), userCssClasses.option)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses
    });
    var makeWidget = (0, _connectHitsPerPage.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        items: items,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.hitsPerPage'
    });
};
var _default = hitsPerPage;
