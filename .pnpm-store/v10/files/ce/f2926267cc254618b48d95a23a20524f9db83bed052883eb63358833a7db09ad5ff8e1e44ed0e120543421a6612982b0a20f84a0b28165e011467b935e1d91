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
var _connectConfigure = /*#__PURE__*/ _interop_require_default._(require("../../connectors/configure/connectConfigure"));
var _utils = require("../../lib/utils");
var configure = function configure(widgetParams) {
    // This is a renderless widget that falls back to the connector's
    // noop render and unmount functions.
    var makeWidget = (0, _connectConfigure.default)(_utils.noop);
    return _object_spread_props._(_object_spread._({}, makeWidget({
        searchParameters: widgetParams
    })), {
        $$widgetType: 'ais.configure'
    });
};
var _default = configure;
