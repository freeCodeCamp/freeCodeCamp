import { SparklesIcon } from '../chat/icons.js';
import { cx } from '../../lib/cx.js';

function createAutocompletePromptSuggestionComponent(param) {
    var createElement = param.createElement;
    return function AutocompletePromptSuggestion(userProps) {
        var item = userProps.item, onSelect = userProps.onSelect, children = userProps.children, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames;
        var label = item.label || item.prompt;
        return /*#__PURE__*/ createElement("div", {
            onClick: onSelect,
            className: cx('ais-AutocompleteItemWrapper', 'ais-AutocompletePromptSuggestionWrapper', classNames.root)
        }, /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemContent', 'ais-AutocompletePromptSuggestionItemContent', classNames.content)
        }, /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemIcon', 'ais-AutocompletePromptSuggestionItemIcon', classNames.icon)
        }, /*#__PURE__*/ createElement(SparklesIcon, {
            createElement: createElement
        })), /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemContentBody', 'ais-AutocompletePromptSuggestionItemContentBody', classNames.body)
        }, children !== null && children !== void 0 ? children : label)));
    };
}

export { createAutocompletePromptSuggestionComponent };
