'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createChatPromptSuggestionsComponent", {
    enumerable: true,
    get: function() {
        return createChatPromptSuggestionsComponent;
    }
});
var _lib = require("../../lib");
var _Button = require("../Button");
function createChatPromptSuggestionsComponent(param) {
    var createElement = param.createElement;
    var Button = (0, _Button.createButtonComponent)({
        createElement: createElement
    });
    return function ChatPromptSuggestions(userProps) {
        var _userProps_suggestions = userProps.suggestions, suggestions = _userProps_suggestions === void 0 ? [] : _userProps_suggestions, onSuggestionClick = userProps.onSuggestionClick, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames;
        if (suggestions.length === 0) {
            return null;
        }
        return /*#__PURE__*/ createElement("div", {
            className: (0, _lib.cx)('ais-ChatPromptSuggestions', classNames.root)
        }, suggestions.map(function(suggestion, index) {
            return /*#__PURE__*/ createElement(Button, {
                key: index,
                size: "sm",
                variant: "primary",
                className: (0, _lib.cx)('ais-ChatPromptSuggestions-suggestion', classNames.suggestion),
                onClick: function onClick() {
                    return onSuggestionClick(suggestion);
                }
            }, suggestion);
        }));
    };
}
