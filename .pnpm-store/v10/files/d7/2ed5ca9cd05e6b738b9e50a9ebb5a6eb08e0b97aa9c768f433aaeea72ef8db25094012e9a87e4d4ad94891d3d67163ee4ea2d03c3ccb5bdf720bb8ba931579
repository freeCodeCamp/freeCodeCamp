import { cx } from '../../lib/cx.js';

function createAutocompleteDetachedOverlayComponent(param) {
    var createElement = param.createElement;
    return function AutocompleteDetachedOverlay(userProps) {
        var children = userProps.children, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, onClose = userProps.onClose;
        return /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteDetachedOverlay', classNames.detachedOverlay),
            onMouseDown: onClose
        }, children);
    };
}

export { createAutocompleteDetachedOverlayComponent };
