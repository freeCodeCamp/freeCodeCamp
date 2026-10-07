import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from '../../lib/cx.js';
import { createButtonComponent } from '../Button.js';
import { ChevronUpIcon, SparklesIcon } from './icons.js';

function createChatToggleButtonComponent(param) {
    var createElement = param.createElement;
    var Button = createButtonComponent({
        createElement: createElement
    });
    return function ChatToggleButton(userProps) {
        var open = userProps.open, onClick = userProps.onClick, ToggleIcon = userProps.toggleIconComponent, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, className = userProps.className, props = _(userProps, [
            "open",
            "onClick",
            "toggleIconComponent",
            "classNames",
            "className"
        ]);
        var defaultIcon = open ? /*#__PURE__*/ createElement(ChevronUpIcon, {
            createElement: createElement
        }) : /*#__PURE__*/ createElement(SparklesIcon, {
            createElement: createElement
        });
        return /*#__PURE__*/ createElement(Button, _$1({
            variant: "primary",
            size: "md",
            iconOnly: true,
            className: cx('ais-ChatToggleButton', open && 'ais-ChatToggleButton--open', classNames.root, className),
            onClick: onClick
        }, props), ToggleIcon ? /*#__PURE__*/ createElement(ToggleIcon, {
            isOpen: open
        }) : defaultIcon);
    };
}

export { createChatToggleButtonComponent };
