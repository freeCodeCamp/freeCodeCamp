import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createButtonComponent } from '../Button.js';
import { ReloadIcon } from './icons.js';

function createChatMessageErrorComponent(param) {
    var createElement = param.createElement;
    var Button = createButtonComponent({
        createElement: createElement
    });
    return function ChatMessageError(userProps) {
        var onReload = userProps.onReload, actions = userProps.actions, userTranslations = userProps.translations, props = _(userProps, [
            "onReload",
            "actions",
            "translations"
        ]);
        var translations = _$1({
            errorMessage: 'Sorry, we are not able to generate a response at the moment. Please retry or contact support.',
            retryText: 'Retry'
        }, userTranslations);
        return /*#__PURE__*/ createElement("article", _$1({
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
            return /*#__PURE__*/ createElement(Button, _$1({
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
        }, /*#__PURE__*/ createElement(ReloadIcon, {
            createElement: createElement
        }), translations.retryText)))));
    };
}

export { createChatMessageErrorComponent };
