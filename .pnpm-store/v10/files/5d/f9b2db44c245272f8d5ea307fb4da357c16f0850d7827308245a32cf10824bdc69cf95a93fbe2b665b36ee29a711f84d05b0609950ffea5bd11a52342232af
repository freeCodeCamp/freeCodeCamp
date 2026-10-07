import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from '../../lib/cx.js';

function createChatOverlayLayoutComponent(param) {
    var createElement = param.createElement;
    return function ChatOverlayLayout(userProps) {
        var open = userProps.open, maximized = userProps.maximized, headerComponent = userProps.headerComponent, messagesComponent = userProps.messagesComponent, promptComponent = userProps.promptComponent, toggleButtonComponent = userProps.toggleButtonComponent, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, className = userProps.className; // Chat state props (destructured to avoid spreading on div)
        userProps.messages; userProps.status; userProps.isClearing; userProps.clearMessages; userProps.onClearTransitionEnd; userProps.suggestions; userProps.tools; userProps.sendMessage; userProps.regenerate; userProps.stop; userProps.error; var rest = _(userProps, [
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
        return /*#__PURE__*/ createElement("div", _$1(_$2({}, rest), {
            className: cx('ais-Chat', 'ais-ChatOverlayLayout', maximized && 'ais-ChatOverlayLayout--maximized', classNames.root, className)
        }), /*#__PURE__*/ createElement("div", {
            className: cx('ais-Chat-container', open && 'ais-Chat-container--open', maximized && 'ais-Chat-container--maximized', classNames.container)
        }, headerComponent, messagesComponent, promptComponent), /*#__PURE__*/ createElement("div", {
            className: "ais-Chat-toggleButtonWrapper"
        }, toggleButtonComponent));
    };
}

export { createChatOverlayLayoutComponent };
