'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createChatMessageLoaderComponent", {
    enumerable: true,
    get: function() {
        return createChatMessageLoaderComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _icons = require("./icons");
function createChatMessageLoaderComponent(param) {
    var createElement = param.createElement;
    return function ChatMessageLoader(userProps) {
        var userTranslations = userProps.translations, props = _object_without_properties._(userProps, [
            "translations"
        ]);
        var translations = _object_spread._({
            loaderText: ''
        }, userTranslations);
        return /*#__PURE__*/ createElement("article", _object_spread._({
            className: "ais-ChatMessageLoader ais-ChatMessage ais-ChatMessage--left ais-ChatMessage--subtle"
        }, props), /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessage-container"
        }, /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessage-leading"
        }, /*#__PURE__*/ createElement("div", {
            className: "ais-ChatMessageLoader-spinner"
        }, /*#__PURE__*/ createElement(_icons.LoadingSpinnerIcon, {
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
