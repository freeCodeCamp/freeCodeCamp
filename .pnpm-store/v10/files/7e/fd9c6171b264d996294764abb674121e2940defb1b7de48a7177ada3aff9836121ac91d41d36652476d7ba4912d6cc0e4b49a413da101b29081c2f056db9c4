'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createChatInlineLayoutComponent", {
    enumerable: true,
    get: function() {
        return createChatInlineLayoutComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _lib = require("../../lib");
function createChatInlineLayoutComponent(param) {
    var createElement = param.createElement;
    return function ChatInlineLayout(userProps) {
        var headerComponent = userProps.headerComponent, messagesComponent = userProps.messagesComponent, promptComponent = userProps.promptComponent, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, className = userProps.className; userProps.open; userProps.maximized; userProps.toggleButtonComponent; // Chat state props (destructured to avoid spreading on div)
        userProps.messages; userProps.status; userProps.isClearing; userProps.clearMessages; userProps.onClearTransitionEnd; userProps.suggestions; userProps.tools; userProps.sendMessage; userProps.regenerate; userProps.stop; userProps.error; var rest = _object_without_properties._(userProps, [
            "headerComponent",
            "messagesComponent",
            "promptComponent",
            "classNames",
            "className",
            "open",
            "maximized",
            "toggleButtonComponent",
            "messages",
            "status",
            "isClearing",
            "clearMessages",
            "onClearTransitionEnd",
            "suggestions",
            "tools",
            "sendMessage",
            "regenerate",
            "stop",
            "error"
        ]);
        return /*#__PURE__*/ createElement("div", _object_spread_props._(_object_spread._({}, rest), {
            className: (0, _lib.cx)('ais-Chat', 'ais-ChatInlineLayout', classNames.root, className)
        }), /*#__PURE__*/ createElement("div", {
            className: (0, _lib.cx)('ais-Chat-container', classNames.container)
        }, headerComponent, messagesComponent, promptComponent));
    };
}
