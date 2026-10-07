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
var _connectQueryRules = /*#__PURE__*/ _interop_require_default._(require("../../connectors/query-rules/connectQueryRules"));
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'query-rule-context'
});
var queryRuleContext = function queryRuleContext() {
    var widgetParams = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!widgetParams.trackedFilters) {
        throw new Error(withUsage('The `trackedFilters` option is required.'));
    }
    return _object_spread_props._(_object_spread._({}, (0, _connectQueryRules.default)(_utils.noop)(widgetParams)), {
        $$widgetType: 'ais.queryRuleContext'
    });
};
var _default = queryRuleContext;
