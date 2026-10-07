import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createButtonComponent } from '../Button.js';
import { SparklesIcon, CloseIcon, MinimizeIcon, MaximizeIcon } from './icons.js';
import { cx } from '../../lib/cx.js';

function createChatHeaderComponent(param) {
    var createElement = param.createElement;
    var Button = createButtonComponent({
        createElement: createElement
    });
    return function ChatHeader(userProps) {
        var _userProps_maximized = userProps.maximized, maximized = _userProps_maximized === void 0 ? false : _userProps_maximized, onToggleMaximize = userProps.onToggleMaximize, onClose = userProps.onClose, onClear = userProps.onClear, _userProps_canClear = userProps.canClear, canClear = _userProps_canClear === void 0 ? false : _userProps_canClear, CloseIcon$1 = userProps.closeIconComponent; userProps.minimizeIconComponent; var MaximizeIcon$1 = userProps.maximizeIconComponent, TitleIcon = userProps.titleIconComponent, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, userTranslations = userProps.translations, props = _(userProps, [
            "maximized",
            "onToggleMaximize",
            "onClose",
            "onClear",
            "canClear",
            "closeIconComponent",
            "minimizeIconComponent",
            "maximizeIconComponent",
            "titleIconComponent",
            "classNames",
            "translations"
        ]);
        var translations = _$1({
            title: 'Chat',
            minimizeLabel: 'Minimize chat',
            maximizeLabel: 'Maximize chat',
            closeLabel: 'Close chat',
            clearLabel: 'Clear'
        }, userTranslations);
        var defaultMaximizeIcon = maximized ? /*#__PURE__*/ createElement(MinimizeIcon, {
            createElement: createElement
        }) : /*#__PURE__*/ createElement(MaximizeIcon, {
            createElement: createElement
        });
        return /*#__PURE__*/ createElement("div", _$1({
            className: cx('ais-ChatHeader', classNames.root, props.className)
        }, props), /*#__PURE__*/ createElement("span", {
            className: cx('ais-ChatHeader-title', classNames.title)
        }, /*#__PURE__*/ createElement("span", {
            className: cx('ais-ChatHeader-titleIcon', classNames.titleIcon)
        }, TitleIcon ? /*#__PURE__*/ createElement(TitleIcon, null) : /*#__PURE__*/ createElement(SparklesIcon, {
            createElement: createElement
        })), translations.title), /*#__PURE__*/ createElement("div", {
            className: cx('ais-ChatHeader-actions')
        }, onClear && /*#__PURE__*/ createElement(Button, {
            variant: "ghost",
            size: "sm",
            className: cx('ais-ChatHeader-clear', classNames.clear),
            onClick: onClear,
            disabled: !canClear
        }, translations.clearLabel), /*#__PURE__*/ createElement(Button, {
            variant: "ghost",
            size: "sm",
            iconOnly: true,
            className: cx('ais-ChatHeader-maximize', classNames.maximize),
            onClick: onToggleMaximize,
            "aria-label": maximized ? translations.minimizeLabel : translations.maximizeLabel
        }, MaximizeIcon$1 ? /*#__PURE__*/ createElement(MaximizeIcon$1, {
            maximized: maximized
        }) : defaultMaximizeIcon), /*#__PURE__*/ createElement(Button, {
            variant: "ghost",
            size: "sm",
            iconOnly: true,
            className: cx('ais-ChatHeader-close', classNames.close),
            onClick: onClose,
            "aria-label": translations.closeLabel,
            title: translations.closeLabel
        }, CloseIcon$1 ? /*#__PURE__*/ createElement(CloseIcon$1, null) : /*#__PURE__*/ createElement(CloseIcon, {
            createElement: createElement
        }))));
    };
}

export { createChatHeaderComponent };
