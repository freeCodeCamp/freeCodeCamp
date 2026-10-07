import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createButtonComponent } from '../Button.js';
import { StopIcon, ArrowUpIcon } from './icons.js';
import { cx } from '../../lib/cx.js';

function createChatPromptComponent(param) {
    var createElement = param.createElement;
    var Button = createButtonComponent({
        createElement: createElement
    });
    var textAreaElement = null;
    var lineHeight = 0;
    var padding = 0;
    var adjustHeight = function adjustHeight() {
        if (!textAreaElement) return;
        textAreaElement.style.height = 'auto';
        var fullHeight = textAreaElement.scrollHeight;
        if (textAreaElement.getAttribute('data-max-rows')) {
            var maxRows = parseInt(textAreaElement.getAttribute('data-max-rows') || '0', 10);
            if (maxRows > 0) {
                var maxHeight = maxRows * lineHeight + padding;
                textAreaElement.style.overflowY = fullHeight > maxHeight ? 'auto' : 'hidden';
                textAreaElement.style.height = "".concat(Math.min(fullHeight, maxHeight), "px");
                return;
            }
        }
        textAreaElement.style.overflowY = 'hidden';
        textAreaElement.style.height = "".concat(fullHeight, "px");
    };
    var setTextAreaRef = function setTextAreaRef(element, promptRef) {
        textAreaElement = element;
        if (promptRef) {
            promptRef.current = element;
        }
        if (element) {
            var styles = getComputedStyle(element);
            lineHeight = parseFloat(styles.lineHeight);
            var pt = parseFloat(styles.paddingTop);
            var pb = parseFloat(styles.paddingBottom);
            padding = pt + pb;
            adjustHeight();
        }
    };
    return function ChatPrompt(userProps) {
        var _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, HeaderComponent = userProps.headerComponent, FooterComponent = userProps.footerComponent, value = userProps.value, placeholder = userProps.placeholder, _userProps_status = userProps.status, status = _userProps_status === void 0 ? 'ready' : _userProps_status, _userProps_disabled = userProps.disabled, disabled = _userProps_disabled === void 0 ? false : _userProps_disabled, _userProps_maxRows = userProps.maxRows, maxRows = _userProps_maxRows === void 0 ? 5 : _userProps_maxRows, _userProps_autoFocus = userProps.autoFocus, autoFocus = _userProps_autoFocus === void 0 ? true : _userProps_autoFocus, userTranslations = userProps.translations, onInput = userProps.onInput, onSubmit = userProps.onSubmit, onKeyDown = userProps.onKeyDown, onStop = userProps.onStop, promptRef = userProps.promptRef, props = _(userProps, [
            "classNames",
            "headerComponent",
            "footerComponent",
            "value",
            "placeholder",
            "status",
            "disabled",
            "maxRows",
            "autoFocus",
            "translations",
            "onInput",
            "onSubmit",
            "onKeyDown",
            "onStop",
            "promptRef"
        ]);
        var translations = _$1({
            textareaLabel: 'Type your message...',
            textareaPlaceholder: 'Type your message...',
            emptyMessageTooltip: 'Message is empty',
            stopResponseTooltip: 'Stop response',
            sendMessageTooltip: 'Send message',
            disclaimer: 'AI can make mistakes. Verify responses.'
        }, userTranslations);
        var cssClasses = {
            root: cx('ais-ChatPrompt', classNames.root),
            header: cx('ais-ChatPrompt-header', classNames.header),
            body: cx('ais-ChatPrompt-body', classNames.body),
            textarea: cx('ais-ChatPrompt-textarea ais-Scrollbar', disabled && 'ais-ChatPrompt-textarea--disabled', classNames.textarea),
            actions: cx('ais-ChatPrompt-actions', classNames.actions, disabled && 'ais-ChatPrompt-actions--disabled'),
            submit: cx('ais-ChatPrompt-submit', classNames.submit),
            footer: cx('ais-ChatPrompt-footer', classNames.footer)
        };
        var hasValue = typeof value === 'string' ? value.trim() !== '' : Boolean(value);
        var canStop = status === 'submitted' || status === 'streaming';
        var buttonDisabled = !hasValue && !canStop || disabled;
        var submitIcon = canStop ? /*#__PURE__*/ createElement(StopIcon, {
            createElement: createElement
        }) : /*#__PURE__*/ createElement(ArrowUpIcon, {
            createElement: createElement
        });
        return /*#__PURE__*/ createElement("form", {
            className: cx(cssClasses.root, props.className),
            onSubmit: function onSubmit1(event) {
                event.preventDefault();
                if (canStop) {
                    onStop === null || onStop === void 0 ? void 0 : onStop();
                    return;
                }
                if (!hasValue) {
                    return;
                }
                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(event);
            }
        }, HeaderComponent && /*#__PURE__*/ createElement("div", {
            className: cx(cssClasses.header)
        }, /*#__PURE__*/ createElement(HeaderComponent, null)), /*#__PURE__*/ createElement("div", {
            className: cx(cssClasses.body),
            onClick: function onClick(e) {
                if (e.target === textAreaElement) return;
                textAreaElement === null || textAreaElement === void 0 ? void 0 : textAreaElement.focus();
            }
        }, /*#__PURE__*/ createElement("textarea", _$2(_$1({}, props), {
            ref: function ref(element) {
                return setTextAreaRef(element, promptRef);
            },
            "data-max-rows": maxRows,
            className: cx(cssClasses.textarea),
            value: value,
            placeholder: placeholder || translations.textareaPlaceholder,
            "aria-label": translations.textareaLabel,
            disabled: disabled,
            autoFocus: autoFocus,
            onInput: function onInput1(event) {
                adjustHeight();
                onInput === null || onInput === void 0 ? void 0 : onInput(event);
            },
            onKeyDown: function onKeyDown1(event) {
                onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
                if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    if (canStop) {
                        onStop === null || onStop === void 0 ? void 0 : onStop();
                        return;
                    }
                    if (!hasValue) {
                        return;
                    }
                    onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(event);
                }
                if (event.key === 'Escape') {
                    if (event.currentTarget && event.currentTarget.blur) {
                        event.currentTarget.blur();
                    }
                }
            }
        })), /*#__PURE__*/ createElement("div", {
            className: cx(cssClasses.actions)
        }, /*#__PURE__*/ createElement(Button, {
            type: "submit",
            variant: "primary",
            size: "sm",
            iconOnly: true,
            className: cx(cssClasses.submit),
            disabled: buttonDisabled,
            "aria-label": function() {
                if (buttonDisabled) return translations.emptyMessageTooltip;
                if (canStop) return translations.stopResponseTooltip;
                return translations.sendMessageTooltip;
            }(),
            "data-status": status
        }, submitIcon))), /*#__PURE__*/ createElement("div", {
            className: cx(cssClasses.footer)
        }, FooterComponent ? /*#__PURE__*/ createElement(FooterComponent, null) : /*#__PURE__*/ createElement("div", {
            className: "ais-ChatPrompt-disclaimer"
        }, translations.disclaimer)));
    };
}

export { createChatPromptComponent };
