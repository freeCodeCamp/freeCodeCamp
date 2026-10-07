import { ClockIcon, TrashIcon, ApplyIcon } from './icons.js';
import { cx } from '../../lib/cx.js';

function createAutocompleteRecentSearchComponent(param) {
    var createElement = param.createElement;
    return function AutocompleteRecentSearch(userProps) {
        var item = userProps.item, children = userProps.children, onSelect = userProps.onSelect, onRemoveRecentSearch = userProps.onRemoveRecentSearch, onApply = userProps.onApply, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames;
        return /*#__PURE__*/ createElement("div", {
            onClick: onSelect,
            className: cx('ais-AutocompleteItemWrapper ais-AutocompleteRecentSearchWrapper', classNames.root)
        }, /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemContent', 'ais-AutocompleteRecentSearchItemContent', classNames.content)
        }, /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemIcon', 'ais-AutocompleteRecentSearchItemIcon', classNames.content)
        }, /*#__PURE__*/ createElement(ClockIcon, {
            createElement: createElement
        })), /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemContentBody', 'ais-AutocompleteRecentSearchItemContentBody', classNames.content)
        }, children)), /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteItemActions', 'ais-AutocompleteRecentSearchItemActions', classNames.actions)
        }, /*#__PURE__*/ createElement("button", {
            className: cx('ais-AutocompleteItemActionButton', 'ais-AutocompleteRecentSearchItemDeleteButton', classNames.deleteButton),
            title: "Remove ".concat(item.query, " from recent searches"),
            onClick: function onClick(evt) {
                evt.stopPropagation();
                onRemoveRecentSearch();
            }
        }, /*#__PURE__*/ createElement(TrashIcon, {
            createElement: createElement
        })), /*#__PURE__*/ createElement("button", {
            className: cx('ais-AutocompleteItemActionButton', 'ais-AutocompleteRecentSearchItemApplyButton', classNames.applyButton),
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

export { createAutocompleteRecentSearchComponent };
