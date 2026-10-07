'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get defaultTemplates () {
        return defaultTemplates;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _QueryRuleCustomData = /*#__PURE__*/ _interop_require_default._(require("../../components/QueryRuleCustomData/QueryRuleCustomData"));
var _connectQueryRules = /*#__PURE__*/ _interop_require_default._(require("../../connectors/query-rules/connectQueryRules"));
var _suit = require("../../lib/suit");
var _utils = require("../../lib/utils");
var defaultTemplates = {
    default: function _default(param) {
        var items = param.items;
        return JSON.stringify(items, null, 2);
    }
};
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'query-rule-custom-data'
});
var suit = (0, _suit.component)('QueryRuleCustomData');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, templates = param.templates;
    return function(param) {
        var items = param.items;
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_QueryRuleCustomData.default, {
            cssClasses: cssClasses,
            templates: templates,
            items: items
        }), containerNode);
    };
};
var queryRuleCustomData = function queryRuleCustomData(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, tmp1 = _ref.templates, userTemplates = tmp1 === void 0 ? {} : tmp1, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
        return items;
    } : _ref_transformItems;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root)
    };
    var containerNode = (0, _utils.getContainerNode)(container);
    var templates = _object_spread._({}, defaultTemplates, userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = (0, _connectQueryRules.default)(specializedRenderer, function() {
        (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.queryRuleCustomData'
    });
};
var _default = queryRuleCustomData;
