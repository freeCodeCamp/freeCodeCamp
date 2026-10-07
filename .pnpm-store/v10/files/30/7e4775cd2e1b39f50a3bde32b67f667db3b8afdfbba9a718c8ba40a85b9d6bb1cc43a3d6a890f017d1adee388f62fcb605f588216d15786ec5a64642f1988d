import { SubmitIcon, ApplyIcon } from './icons.js';
import { cx } from '../../lib/cx.js';

function createAutocompleteSuggestionComponent(param) {
    var createElement = param.createElement;
    return function AutocompleteSuggestion(userProps) {
        var item = userProps.item, children = userProps.children, onSelect = userProps.onSelect, onApply = userProps.onApply, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames;
        return /*#__PURE__*/ createElement("div", {
            onClick: onSelect,
            className: cx('ais-AutocompleteItemWrapper', 'ais-AutocompleteSuggestionWrapper', classNames.root)
        }, /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemContent', 'ais-AutocompleteSuggestionItemContent', classNames.content)
        }, /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemIcon', 'ais-AutocompleteSuggestionItemIcon', classNames.content)
        }, /*#__PURE__*/ createElement(SubmitIcon, {
            createElement: createElement
        })), /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemContentBody', 'ais-AutocompleteSuggestionItemContentBody', classNames.content)
        }, children)), /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemActions', 'ais-AutocompleteSuggestionItemActions', classNames.actions)
        }, /*#__PURE__*/ createElement("button", {
            className: cx('ais-AutocompleteItemActionButton', 'ais-AutocompleteSuggestionItemApplyButton', classNames.applyButton),
            type: "button",
            title: "Apply ".concat(item.query, " as search"),
            onClick: function onClick(evt) {
                evt.stopPropagation();
                onApply();
            }
        }, /*#__PURE__*/ createElement(ApplyIcon, {
            createElement: createElement
        }))));
    };
}

export { createAutocompleteSuggestionComponent };
