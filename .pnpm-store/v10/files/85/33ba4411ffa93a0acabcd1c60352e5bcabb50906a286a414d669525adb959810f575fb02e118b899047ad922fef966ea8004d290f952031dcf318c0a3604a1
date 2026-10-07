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
var _RelevantSort = /*#__PURE__*/ _interop_require_default._(require("../../components/RelevantSort/RelevantSort"));
var _connectRelevantSort = /*#__PURE__*/ _interop_require_default._(require("../../connectors/relevant-sort/connectRelevantSort"));
var _suit = require("../../lib/suit");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'relevant-sort'
});
var suit = (0, _suit.component)('RelevantSort');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, templates = param.templates;
    return function(param) {
        var isRelevantSorted = param.isRelevantSorted, isVirtualReplica = param.isVirtualReplica, refine = param.refine;
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_RelevantSort.default, {
            cssClasses: cssClasses,
            templates: templates,
            isRelevantSorted: isRelevantSorted,
            isVirtualReplica: isVirtualReplica,
            refine: refine
        }), containerNode);
    };
};
var relevantSort = function relevantSort(widgetParams) {
    var container = widgetParams.container, tmp = widgetParams.templates, userTemplates = tmp === void 0 ? {} : tmp, tmp1 = widgetParams.cssClasses, userCssClasses = tmp1 === void 0 ? {} : tmp1;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        text: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'text'
        }), userCssClasses.text),
        button: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'button'
        }), userCssClasses.button)
    };
    var templates = _object_spread._({}, _defaultTemplates.default, userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = (0, _connectRelevantSort.default)(specializedRenderer, function() {
        (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({})), {
        $$widgetType: 'ais.relevantSort'
    });
};
var _default = relevantSort;
