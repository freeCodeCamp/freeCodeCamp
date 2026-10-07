'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createChatMessageErrorComponent", {
    enumerable: true,
    get: function() {
        return createChatMessageErrorComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _Button = require("../Button");
var _icons = require("./icons");
function createChatMessageErrorComponent(param) {
    var createElement = param.createElement;
    var Button = (0, _Button.createButtonComponent)({
        createElement: createElement
    });
    return function ChatMessageError(userProps) {
        var onReload = userProps.onReload, actions = userProps.actions, userTranslations = userProps.translations, props = _object_without_properties._(userProps, [
            "onReload",
            "actions",
            "translations"
        ]);
        var translations = _object_spread._({
            errorMessage: 'Sorry, we are not able to generate a response at the moment. Please retry or contact support.',
            retryText: 'Retry'
        }, userTranslations);
        return /*#__PURE__*/ createElement("article", _object_spread._({
            className: "ais-ChatMessageError ais-ChatMessage ais-ChatMessage--left ais-ChatMessage--subtle"
        }, props), /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessage-container"
        }, /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessage-content"
        }, /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessage-message"
        }, translations.errorMessage), (actions || onReload) && /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessage-actions"
        }, actions ? actions.map(function(action, index) {
            return /*#__PURE__*/ createElement(Button, _object_spread._({
                key: index,
                variant: "ghost",
                className: "ais-ChatMessage-action"
            }, action), action.children);
        }) : /*#__PURE__*/ createElement(Button, {
            variant: "primary",
            size: "md",
            className: "ais-ChatMessage-errorAction",
            onClick: function onClick() {
                return onReload === null || onReload === void 0 ? void 0 : onReload();
            }
        }, /*#__PURE__*/ createElement(_icons.ReloadIcon, {
            createElement: createElement
        }), translations.retryText)))));
    };
}
