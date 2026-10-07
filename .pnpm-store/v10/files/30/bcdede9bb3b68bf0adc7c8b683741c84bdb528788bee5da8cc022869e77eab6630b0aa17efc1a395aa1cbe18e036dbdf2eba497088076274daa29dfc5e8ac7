'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createChatComponent", {
    enumerable: true,
    get: function() {
        return createChatComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _ChatHeader = require("./ChatHeader");
var _ChatMessages = require("./ChatMessages");
var _ChatOverlayLayout = require("./ChatOverlayLayout");
var _ChatPrompt = require("./ChatPrompt");
var _ChatPromptSuggestions = require("./ChatPromptSuggestions");
var _ChatToggleButton = require("./ChatToggleButton");
function createChatComponent(param) {
    var createElement = param.createElement, Fragment = param.Fragment;
    var ChatToggleButton = (0, _ChatToggleButton.createChatToggleButtonComponent)({
        createElement: createElement,
        Fragment: Fragment
    });
    var ChatHeader = (0, _ChatHeader.createChatHeaderComponent)({
        createElement: createElement,
        Fragment: Fragment
    });
    var ChatMessages = (0, _ChatMessages.createChatMessagesComponent)({
        createElement: createElement,
        Fragment: Fragment
    });
    var ChatPrompt = (0, _ChatPrompt.createChatPromptComponent)({
        createElement: createElement,
        Fragment: Fragment
    });
    var ChatPromptSuggestions = (0, _ChatPromptSuggestions.createChatPromptSuggestionsComponent)({
        createElement: createElement,
        Fragment: Fragment
    });
    var OverlayLayout = (0, _ChatOverlayLayout.createChatOverlayLayoutComponent)({
        createElement: createElement,
        Fragment: Fragment
    });
    return function Chat(userProps) {
        var open = userProps.open, _userProps_maximized = userProps.maximized, maximized = _userProps_maximized === void 0 ? false : _userProps_maximized, headerProps = userProps.headerProps, toggleButtonProps = userProps.toggleButtonProps, messagesProps = userProps.messagesProps, suggestionsProps = userProps.suggestionsProps, _userProps_promptProps = userProps.promptProps, promptProps = _userProps_promptProps === void 0 ? {} : _userProps_promptProps, HeaderComponent = userProps.headerComponent, PromptComponent = userProps.promptComponent, ToggleButtonComponent = userProps.toggleButtonComponent, SuggestionsComponent = userProps.suggestionsComponent, tmp = userProps.layoutComponent, LayoutComponent = tmp === void 0 ? OverlayLayout : tmp, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, className = userProps.className, sendMessage = userProps.sendMessage, regenerate = userProps.regenerate, stop = userProps.stop, error = userProps.error, props = _object_without_properties._(userProps, [
            "open",
            "maximized",
            "headerProps",
            "toggleButtonProps",
            "messagesProps",
            "suggestionsProps",
            "promptProps",
            "headerComponent",
            "promptComponent",
            "toggleButtonComponent",
            "suggestionsComponent",
            "layoutComponent",
            "classNames",
            "className",
            "sendMessage",
            "regenerate",
            "stop",
            "error"
        ]);
        var headerComponent = createElement(HeaderComponent || ChatHeader, _object_spread_props._(_object_spread._({}, headerProps), {
            classNames: classNames.header,
            maximized: maximized
        }));
        var messagesComponent = /*#__PURE__*/ createElement(ChatMessages, _object_spread_props._(_object_spread._({}, messagesProps), {
            classNames: classNames.messages,
            messageClassNames: classNames.message,
            suggestionsElement: createElement(SuggestionsComponent || ChatPromptSuggestions, _object_spread_props._(_object_spread._({}, suggestionsProps), {
                classNames: classNames.suggestions
            }))
        }));
        var promptComponent = createElement(PromptComponent || ChatPrompt, _object_spread_props._(_object_spread._({}, promptProps), {
            classNames: classNames.prompt
        }));
        var toggleButtonComponent = createElement(ToggleButtonComponent || ChatToggleButton, _object_spread_props._(_object_spread._({}, toggleButtonProps), {
            classNames: classNames.toggleButton,
            onClick: function onClick() {
                var _toggleButtonProps_onClick;
                (_toggleButtonProps_onClick = toggleButtonProps.onClick) === null || _toggleButtonProps_onClick === void 0 ? void 0 : _toggleButtonProps_onClick.call(toggleButtonProps);
                if (!open) {
                    var _promptProps_promptRef_current, _promptProps_promptRef;
                    (_promptProps_promptRef = promptProps.promptRef) === null || _promptProps_promptRef === void 0 ? void 0 : (_promptProps_promptRef_current = _promptProps_promptRef.current) === null || _promptProps_promptRef_current === void 0 ? void 0 : _promptProps_promptRef_current.focus();
                }
            }
        }));
        return /*#__PURE__*/ createElement(LayoutComponent, _object_spread_props._(_object_spread._({}, props), {
            open: open,
            maximized: maximized,
            headerComponent: headerComponent,
            messagesComponent: messagesComponent,
            promptComponent: promptComponent,
            toggleButtonComponent: toggleButtonComponent,
            classNames: {
                root: classNames.root,
                container: classNames.container
            },
            className: className,
            messages: messagesProps.messages,
            status: messagesProps.status,
            tools: messagesProps.tools,
            isClearing: messagesProps.isClearing,
            clearMessages: headerProps.onClear,
            onClearTransitionEnd: messagesProps.onClearTransitionEnd,
            suggestions: suggestionsProps.suggestions,
            sendMessage: sendMessage,
            regenerate: regenerate,
            stop: stop,
            error: error
        }));
    };
}
