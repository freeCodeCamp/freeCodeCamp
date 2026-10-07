'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Index", {
    enumerable: true,
    get: function() {
        return Index;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _IndexContext = require("../lib/IndexContext");
var _useIndex = require("../lib/useIndex");
function Index(_0) {
    var children = _0.children, props = _object_without_properties._(_0, [
        "children"
    ]);
    var index = (0, _useIndex.useIndex)(props);
    if (index.getHelper() === null) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_IndexContext.IndexContext.Provider, {
        value: index
    }, children);
}
