'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createAutocompleteDetachedSearchButtonComponent", {
    enumerable: true,
    get: function() {
        return createAutocompleteDetachedSearchButtonComponent;
    }
});
var _cx = require("../../lib/cx");
var _icons = require("./icons");
function createAutocompleteDetachedSearchButtonComponent(param) {
    var createElement = param.createElement;
    return function AutocompleteDetachedSearchButton(userProps) {
        var query = userProps.query, _userProps_placeholder = userProps.placeholder, placeholder = _userProps_placeholder === void 0 ? 'Search' : _userProps_placeholder, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, onClick = userProps.onClick, onClear = userProps.onClear, translations = userProps.translations;
        return /*#__PURE__*/ createElement("div", {
            className: (0, _cx.cx)('ais-AutocompleteDetachedSearchButton', classNames.detachedSearchButton),
            onClick: onClick,
            onKeyDown: function onKeyDown(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onClick();
                }
            },
            role: "button",
            tabIndex: 0,
            title: translations.detachedSearchButtonTitle
        }, /*#__PURE__*/ createElement("div", {
            className: (0, _cx.cx)('ais-AutocompleteDetachedSearchButtonIcon', classNames.detachedSearchButtonIcon)
        }, /*#__PURE__*/ createElement(_icons.SearchIcon, {
            createElement: createElement
        })), /*#__PURE__*/ createElement("div", {
            className: (0, _cx.cx)('ais-AutocompleteDetachedSearchButtonPlaceholder', classNames.detachedSearchButtonPlaceholder),
            hidden: Boolean(query)
        }, placeholder), /*#__PURE__*/ createElement("div", {
            className: (0, _cx.cx)('ais-AutocompleteDetachedSearchButtonQuery', classNames.detachedSearchButtonQuery)
        }, query), query && onClear && /*#__PURE__*/ createElement("button", {
            type: "reset",
            className: (0, _cx.cx)('ais-AutocompleteDetachedSearchButtonClear', classNames.detachedSearchButtonClear),
            title: translations.detachedClearButtonTitle,
            onClick: function onClick(event) {
                event.stopPropagation();
                onClear();
            }
        }, /*#__PURE__*/ createElement(_icons.ClearIcon, {
            createElement: createElement
        })));
    };
}
