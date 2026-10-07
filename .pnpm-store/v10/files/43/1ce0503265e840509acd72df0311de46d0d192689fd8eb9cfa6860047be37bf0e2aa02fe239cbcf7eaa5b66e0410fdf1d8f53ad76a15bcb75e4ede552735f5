'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createAutocompleteDetachedContainerComponent", {
    enumerable: true,
    get: function() {
        return createAutocompleteDetachedContainerComponent;
    }
});
var _cx = require("../../lib/cx");
function createAutocompleteDetachedContainerComponent(param) {
    var createElement = param.createElement;
    return function AutocompleteDetachedContainer(userProps) {
        var children = userProps.children, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames;
        return /*#__PURE__*/ createElement("div", {
            className: (0, _cx.cx)('ais-AutocompleteDetachedContainer', classNames.detachedContainer),
            onMouseDown: function onMouseDown(event) {
                event.stopPropagation();
            }
        }, children);
    };
}
