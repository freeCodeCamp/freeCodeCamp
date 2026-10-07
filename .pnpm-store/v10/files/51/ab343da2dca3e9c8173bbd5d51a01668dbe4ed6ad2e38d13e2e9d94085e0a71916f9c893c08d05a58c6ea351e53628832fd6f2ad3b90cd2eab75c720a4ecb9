import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { LoadingSpinnerIcon } from './icons.js';

function createChatMessageLoaderComponent(param) {
    var createElement = param.createElement;
    return function ChatMessageLoader(userProps) {
        var userTranslations = userProps.translations, props = _(userProps, [
            "translations"
        ]);
        var translations = _$1({
            loaderText: ''
        }, userTranslations);
        return /*#__PURE__*/ createElement("article", _$1({
            className: "ais-ChatMessageLoader ais-ChatMessage ais-ChatMessage--left ais-ChatMessage--subtle"
        }, props), /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessage-container"
        }, /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessage-leading"
        }, /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessageLoader-spinner"
        }, /*#__PURE__*/ createElement(LoadingSpinnerIcon, {
            createElement: createElement
        }))), /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessage-content"
        }, /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessage-message"
        }, translations.loaderText && /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessageLoader-text"
        }, translations.loaderText), /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessageLoader-skeletonWrapper"
        }, /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessageLoader-skeletonItem"
        }), /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessageLoader-skeletonItem"
        }))))));
    };
}

export { createChatMessageLoaderComponent };
