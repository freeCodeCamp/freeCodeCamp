'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createChatToggleButtonComponent", {
    enumerable: true,
    get: function() {
        return createChatToggleButtonComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _cx = require("../../lib/cx");
var _Button = require("../Button");
var _icons = require("./icons");
function createChatToggleButtonComponent(param) {
    var createElement = param.createElement;
    var Button = (0, _Button.createButtonComponent)({
        createElement: createElement
    });
    return function ChatToggleButton(userProps) {
        var open = userProps.open, onClick = userProps.onClick, ToggleIcon = userProps.toggleIconComponent, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, className = userProps.className, props = _object_without_properties._(userProps, [
            "open",
            "onClick",
            "toggleIconComponent",
            "classNames",
            "className"
        ]);
        var defaultIcon = open ? /*#__PURE__*/ createElement(_icons.ChevronUpIcon, {
            createElement: createElement
        }) : /*#__PURE__*/ createElement(_icons.SparklesIcon, {
            createElement: createElement
        });
        return /*#__PURE__*/ createElement(Button, _object_spread._({
            variant: "primary",
            size: "md",
            iconOnly: true,
            className: (0, _cx.cx)('ais-ChatToggleButton', open && 'ais-ChatToggleButton--open', classNames.root, className),
            onClick: onClick
        }, props), ToggleIcon ? /*#__PURE__*/ createElement(ToggleIcon, {
            isOpen: open
        }) : defaultIcon);
    };
}
