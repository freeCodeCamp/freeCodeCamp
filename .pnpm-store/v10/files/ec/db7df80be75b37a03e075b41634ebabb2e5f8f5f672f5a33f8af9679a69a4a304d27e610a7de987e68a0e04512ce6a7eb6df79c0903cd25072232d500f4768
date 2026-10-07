import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createChatHeaderComponent } from './ChatHeader.js';
import { createChatMessagesComponent } from './ChatMessages.js';
import { createChatOverlayLayoutComponent } from './ChatOverlayLayout.js';
import { createChatPromptComponent } from './ChatPrompt.js';
import { createChatPromptSuggestionsComponent } from './ChatPromptSuggestions.js';
import { createChatToggleButtonComponent } from './ChatToggleButton.js';

function createChatComponent(param) {
    var createElement = param.createElement, Fragment = param.Fragment;
    var ChatToggleButton = createChatToggleButtonComponent({
        createElement: createElement,
        Fragment: Fragment
    });
    var ChatHeader = createChatHeaderComponent({
        createElement: createElement,
        Fragment: Fragment
    });
    var ChatMessages = createChatMessagesComponent({
        createElement: createElement,
        Fragment: Fragment
    });
    var ChatPrompt = createChatPromptComponent({
        createElement: createElement,
        Fragment: Fragment
    });
    var ChatPromptSuggestions = createChatPromptSuggestionsComponent({
        createElement: createElement,
        Fragment: Fragment
    });
    var OverlayLayout = createChatOverlayLayoutComponent({
        createElement: createElement,
        Fragment: Fragment
    });
    return function Chat(userProps) {
        var open = userProps.open, _userProps_maximized = userProps.maximized, maximized = _userProps_maximized === void 0 ? false : _userProps_maximized, headerProps = userProps.headerProps, toggleButtonProps = userProps.toggleButtonProps, messagesProps = userProps.messagesProps, suggestionsProps = userProps.suggestionsProps, _userProps_promptProps = userProps.promptProps, promptProps = _userProps_promptProps === void 0 ? {} : _userProps_promptProps, HeaderComponent = userProps.headerComponent, PromptComponent = userProps.promptComponent, ToggleButtonComponent = userProps.toggleButtonComponent, SuggestionsComponent = userProps.suggestionsComponent, tmp = userProps.layoutComponent, LayoutComponent = tmp === void 0 ? OverlayLayout : tmp, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, className = userProps.className, sendMessage = userProps.sendMessage, regenerate = userProps.regenerate, stop = userProps.stop, error = userProps.error, props = _(userProps, [
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
        var headerComponent = createElement(HeaderComponent || ChatHeader, _$1(_$2({}, headerProps), {
            classNames: classNames.header,
            maximized: maximized
        }));
        var messagesComponent = /*#__PURE__*/ createElement(ChatMessages, _$1(_$2({}, messagesProps), {
            classNames: classNames.messages,
            messageClassNames: classNames.message,
            suggestionsElement: createElement(SuggestionsComponent || ChatPromptSuggestions, _$1(_$2({}, suggestionsProps), {
                classNames: classNames.suggestions
            }))
        }));
        var promptComponent = createElement(PromptComponent || ChatPrompt, _$1(_$2({}, promptProps), {
            classNames: classNames.prompt
        }));
        var toggleButtonComponent = createElement(ToggleButtonComponent || ChatToggleButton, _$1(_$2({}, toggleButtonProps), {
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
        return /*#__PURE__*/ createElement(LayoutComponent, _$1(_$2({}, props), {
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

export { createChatComponent };
