import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from '../lib/cx.js';

function createButtonComponent(param) {
    var createElement = param.createElement;
    return function Button(userProps) {
        var _userProps_variant = userProps.variant, variant = _userProps_variant === void 0 ? 'primary' : _userProps_variant, _userProps_size = userProps.size, size = _userProps_size === void 0 ? 'md' : _userProps_size, _userProps_iconOnly = userProps.iconOnly, iconOnly = _userProps_iconOnly === void 0 ? false : _userProps_iconOnly, className = userProps.className, children = userProps.children, props = _(userProps, [
            "variant",
            "size",
            "iconOnly",
            "className",
            "children"
        ]);
        return /*#__PURE__*/ createElement("button", _$1({
            type: "button",
            className: cx('ais-Button', "ais-Button--".concat(variant), "ais-Button--".concat(size), iconOnly && 'ais-Button--icon-only', className)
        }, props), children);
    };
}

export { createButtonComponent };
