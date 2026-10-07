'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useDynamicWidgets", {
    enumerable: true,
    get: function() {
        return useDynamicWidgets;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _connectDynamicWidgets = /*#__PURE__*/ _interop_require_default._(require("instantsearch.js/cjs/connectors/dynamic-widgets/connectDynamicWidgets"));
var _useConnector = require("../hooks/useConnector");
function useDynamicWidgets(props, additionalWidgetProperties) {
    return (0, _useConnector.useConnector)(_connectDynamicWidgets.default, _object_spread_props._(_object_spread._({}, props), {
        // We don't rely on InstantSearch.js for rendering widgets because React
        // directly manipulates the children.
        widgets: []
    }), additionalWidgetProperties);
}
