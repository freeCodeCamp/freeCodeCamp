'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createChatHeaderComponent", {
    enumerable: true,
    get: function() {
        return createChatHeaderComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _lib = require("../../lib");
var _Button = require("../Button");
var _icons = require("./icons");
function createChatHeaderComponent(param) {
    var createElement = param.createElement;
    var Button = (0, _Button.createButtonComponent)({
        createElement: createElement
    });
    return function ChatHeader(userProps) {
        var _userProps_maximized = userProps.maximized, maximized = _userProps_maximized === void 0 ? false : _userProps_maximized, onToggleMaximize = userProps.onToggleMaximize, onClose = userProps.onClose, onClear = userProps.onClear, _userProps_canClear = userProps.canClear, canClear = _userProps_canClear === void 0 ? false : _userProps_canClear, CloseIcon = userProps.closeIconComponent; userProps.minimizeIconComponent; var MaximizeIcon = userProps.maximizeIconComponent, TitleIcon = userProps.titleIconComponent, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, userTranslations = userProps.translations, props = _object_without_properties._(userProps, [
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
        var translations = _object_spread._({
            title: 'Chat',
            minimizeLabel: 'Minimize chat',
            maximizeLabel: 'Maximize chat',
            closeLabel: 'Close chat',
            clearLabel: 'Clear'
        }, userTranslations);
        var defaultMaximizeIcon = maximized ? /*#__PURE__*/ createElement(_icons.MinimizeIcon, {
            createElement: createElement
        }) : /*#__PURE__*/ createElement(_icons.MaximizeIcon, {
            createElement: createElement
        });
        return /*#__PURE__*/ createElement("div", _object_spread._({
            className: (0, _lib.cx)('ais-ChatHeader', classNames.root, props.className)
        }, props), /*#__PURE__*/ createElement("span", {
            className: (0, _lib.cx)('ais-ChatHeader-title', classNames.title)
        }, /*#__PURE__*/ createElement("span", {
            className: (0, _lib.cx)('ais-ChatHeader-titleIcon', classNames.titleIcon)
        }, TitleIcon ? /*#__PURE__*/ createElement(TitleIcon, null) : /*#__PURE__*/ createElement(_icons.SparklesIcon, {
            createElement: createElement
        })), translations.title), /*#__PURE__*/ createElement("div", {
            className: (0, _lib.cx)('ais-ChatHeader-actions')
        }, onClear && /*#__PURE__*/ createElement(Button, {
            variant: "ghost",
            size: "sm",
            className: (0, _lib.cx)('ais-ChatHeader-clear', classNames.clear),
            onClick: onClear,
            disabled: !canClear
        }, translations.clearLabel), /*#__PURE__*/ createElement(Button, {
            variant: "ghost",
            size: "sm",
            iconOnly: true,
            className: (0, _lib.cx)('ais-ChatHeader-maximize', classNames.maximize),
            onClick: onToggleMaximize,
            "aria-label": maximized ? translations.minimizeLabel : translations.maximizeLabel
        }, MaximizeIcon ? /*#__PURE__*/ createElement(MaximizeIcon, {
            maximized: maximized
        }) : defaultMaximizeIcon), /*#__PURE__*/ createElement(Button, {
            variant: "ghost",
            size: "sm",
            iconOnly: true,
            className: (0, _lib.cx)('ais-ChatHeader-close', classNames.close),
            onClick: onClose,
            "aria-label": translations.closeLabel,
            title: translations.closeLabel
        }, CloseIcon ? /*#__PURE__*/ createElement(CloseIcon, null) : /*#__PURE__*/ createElement(_icons.CloseIcon, {
            createElement: createElement
        }))));
    };
}
