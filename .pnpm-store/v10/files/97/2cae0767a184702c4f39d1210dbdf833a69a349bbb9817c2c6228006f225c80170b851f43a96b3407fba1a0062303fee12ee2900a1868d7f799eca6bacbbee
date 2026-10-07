import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from '../../lib/cx.js';

function createChatGreetingComponent(param) {
    var createElement = param.createElement;
    return function ChatGreeting(userProps) {
        var _ref, _ref1;
        var userTranslations = userProps.translations, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames; userProps.sendMessage; userProps.status; userProps.onClose; userProps.setInput; var banner = userProps.banner, props = _(userProps, [
            "translations",
            "classNames",
            "sendMessage",
            "status",
            "onClose",
            "setInput",
            "banner"
        ]);
        var translations = {
            heading: (_ref = userTranslations === null || userTranslations === void 0 ? void 0 : userTranslations.heading) !== null && _ref !== void 0 ? _ref : 'How can I help you today?',
            subheading: (_ref1 = userTranslations === null || userTranslations === void 0 ? void 0 : userTranslations.subheading) !== null && _ref1 !== void 0 ? _ref1 : "Ask me anything about our products, and I'll do my best to assist you."
        };
        return /*#__PURE__*/ createElement("div", _$1(_$2({}, props), {
            className: cx('ais-ChatGreeting', classNames.root, props.className)
        }), banner && /*#__PURE__*/ createElement("img", {
            className: cx('ais-ChatGreeting-banner', classNames.banner),
            src: banner,
            alt: ""
        }), /*#__PURE__*/ createElement("h2", {
            className: cx('ais-ChatGreeting-heading', classNames.heading)
        }, translations.heading), /*#__PURE__*/ createElement("p", {
            className: cx('ais-ChatGreeting-subheading', classNames.subheading)
        }, translations.subheading));
    };
}

export { createChatGreetingComponent };
