import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from '../../lib/cx.js';

function createChatInlineLayoutComponent(param) {
    var createElement = param.createElement;
    return function ChatInlineLayout(userProps) {
        var headerComponent = userProps.headerComponent, messagesComponent = userProps.messagesComponent, promptComponent = userProps.promptComponent, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, className = userProps.className; userProps.open; userProps.maximized; userProps.toggleButtonComponent; // Chat state props (destructured to avoid spreading on div)
        userProps.messages; userProps.status; userProps.isClearing; userProps.clearMessages; userProps.onClearTransitionEnd; userProps.suggestions; userProps.tools; userProps.sendMessage; userProps.regenerate; userProps.stop; userProps.error; var rest = _(userProps, [
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
        return /*#__PURE__*/ createElement("div", _$1(_$2({}, rest), {
            className: cx('ais-Chat', 'ais-ChatInlineLayout', classNames.root, className)
        }), /*#__PURE__*/ createElement("div", {
            className: cx('ais-Chat-container', classNames.container)
        }, headerComponent, messagesComponent, promptComponent));
    };
}

export { createChatInlineLayoutComponent };
