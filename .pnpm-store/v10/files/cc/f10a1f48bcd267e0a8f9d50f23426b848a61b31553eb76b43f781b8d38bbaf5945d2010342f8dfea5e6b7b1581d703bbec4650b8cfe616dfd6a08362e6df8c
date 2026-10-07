'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createChatOverlayLayoutComponent", {
    enumerable: true,
    get: function() {
        return createChatOverlayLayoutComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _lib = require("../../lib");
function createChatOverlayLayoutComponent(param) {
    var createElement = param.createElement;
    return function ChatOverlayLayout(userProps) {
        var open = userProps.open, maximized = userProps.maximized, headerComponent = userProps.headerComponent, messagesComponent = userProps.messagesComponent, promptComponent = userProps.promptComponent, toggleButtonComponent = userProps.toggleButtonComponent, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, className = userProps.className; // Chat state props (destructured to avoid spreading on div)
        userProps.messages; userProps.status; userProps.isClearing; userProps.clearMessages; userProps.onClearTransitionEnd; userProps.suggestions; userProps.tools; userProps.sendMessage; userProps.regenerate; userProps.stop; userProps.error; var rest = _object_without_properties._(userProps, [
            "open",
            "maximized",
            "headerComponent",
            "messagesComponent",
            "promptComponent",
            "toggleButtonComponent",
            "classNames",
            "className",
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
            className: (0, _lib.cx)('ais-Chat', 'ais-ChatOverlayLayout', maximized && 'ais-ChatOverlayLayout--maximized', classNames.root, className)
        }), /*#__PURE__*/ createElement("div", {
            className: (0, _lib.cx)('ais-Chat-container', open && 'ais-Chat-container--open', maximized && 'ais-Chat-container--maximized', classNames.container)
        }, headerComponent, messagesComponent, promptComponent), /*#__PURE__*/ createElement("div", {
            className: "ais-Chat-toggleButtonWrapper"
        }, toggleButtonComponent));
    };
}
