'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createButtonComponent", {
    enumerable: true,
    get: function() {
        return createButtonComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _cx = require("../lib/cx");
function createButtonComponent(param) {
    var createElement = param.createElement;
    return function Button(userProps) {
        var _userProps_variant = userProps.variant, variant = _userProps_variant === void 0 ? 'primary' : _userProps_variant, _userProps_size = userProps.size, size = _userProps_size === void 0 ? 'md' : _userProps_size, _userProps_iconOnly = userProps.iconOnly, iconOnly = _userProps_iconOnly === void 0 ? false : _userProps_iconOnly, className = userProps.className, children = userProps.children, props = _object_without_properties._(userProps, [
            "variant",
            "size",
            "iconOnly",
            "className",
            "children"
        ]);
        return /*#__PURE__*/ createElement("button", _object_spread._({
            type: "button",
            className: (0, _cx.cx)('ais-Button', "ais-Button--".concat(variant), "ais-Button--".concat(size), iconOnly && 'ais-Button--icon-only', className)
        }, props), children);
    };
}
