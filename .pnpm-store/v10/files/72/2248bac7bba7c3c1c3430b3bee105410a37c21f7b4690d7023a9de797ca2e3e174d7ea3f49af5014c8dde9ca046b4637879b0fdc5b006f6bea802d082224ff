function createDefaultHeaderComponent(param) {
    var createElement = param.createElement;
    return function DefaultHeader(userProps) {
        var _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, items = userProps.items, translations = userProps.translations;
        if (!items || items.length < 1) {
            return null;
        }
        if (!translations.title) {
            return null;
        }
        return /*#__PURE__*/ createElement("h3", {
            className: classNames.title
        }, translations.title);
    };
}

export { createDefaultHeaderComponent };
