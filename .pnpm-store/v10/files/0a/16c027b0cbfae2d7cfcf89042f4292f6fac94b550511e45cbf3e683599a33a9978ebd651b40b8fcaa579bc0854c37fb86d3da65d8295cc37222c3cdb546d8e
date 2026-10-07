import { cx } from '../../lib/cx.js';

function createAutocompleteDetachedContainerComponent(param) {
    var createElement = param.createElement;
    return function AutocompleteDetachedContainer(userProps) {
        var children = userProps.children, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames;
        return /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompleteDetachedContainer', classNames.detachedContainer),
            onMouseDown: function onMouseDown(event) {
                event.stopPropagation();
            }
        }, children);
    };
}

export { createAutocompleteDetachedContainerComponent };
