'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createAutocompleteComponent", {
    enumerable: true,
    get: function() {
        return createAutocompleteComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _cx = require("../../lib/cx");
function createAutocompleteComponent(param) {
    var createElement = param.createElement;
    return function Autocomplete(userProps) {
        var children = userProps.children, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, rootRef = userProps.rootRef, props = _object_without_properties._(userProps, [
            "children",
            "classNames",
            "rootRef"
        ]);
        return /*#__PURE__*/ createElement("div", _object_spread._({
            className: (0, _cx.cx)('ais-Autocomplete', classNames.root),
            ref: rootRef
        }, props), children);
    };
}
