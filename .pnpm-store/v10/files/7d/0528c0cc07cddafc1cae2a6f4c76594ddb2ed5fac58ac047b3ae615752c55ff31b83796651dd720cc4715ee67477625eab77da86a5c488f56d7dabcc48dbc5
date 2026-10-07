'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InstantSearchSSRProvider", {
    enumerable: true,
    get: function() {
        return InstantSearchSSRProvider;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _InstantSearchSSRContext = require("../lib/InstantSearchSSRContext");
function InstantSearchSSRProvider(_0) {
    var children = _0.children, props = _object_without_properties._(_0, [
        "children"
    ]);
    // This is used in `useInstantSearchApi()` to avoid creating and starting multiple instances of
    // `InstantSearch` on mount.
    var ssrSearchRef = _react.default.useRef(null);
    // This is used to re-map the result index to the requesting widget
    var recommendIdx = _react.default.useRef(0);
    // When <DynamicWidgets> is mounted, a second provider is used above the user-land
    // <InstantSearchSSRProvider> in `getServerState()`.
    // To avoid the user's provider overriding the context value with an empty object,
    // we skip this provider.
    if (Object.keys(props).length === 0) {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_InstantSearchSSRContext.InstantSearchSSRContext.Provider, {
        value: _object_spread_props._(_object_spread._({}, props), {
            ssrSearchRef: ssrSearchRef,
            recommendIdx: recommendIdx
        })
    }, children);
}
