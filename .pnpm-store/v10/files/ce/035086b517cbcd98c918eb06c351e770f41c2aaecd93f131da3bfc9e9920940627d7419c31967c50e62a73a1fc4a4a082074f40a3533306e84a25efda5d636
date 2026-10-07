import { _ } from '@swc/helpers/esm/_instanceof.js';
import { h } from 'preact';
import Template from '../Template/Template.js';

var VoiceSearch = function VoiceSearch(param) {
    var cssClasses = param.cssClasses, isBrowserSupported = param.isBrowserSupported, isListening = param.isListening, toggleListening = param.toggleListening, voiceListeningState = param.voiceListeningState, templates = param.templates;
    var handleClick = function handleClick(event) {
        if (_(event.currentTarget, HTMLElement)) {
            event.currentTarget.blur();
        }
        toggleListening();
    };
    var status = voiceListeningState.status, transcript = voiceListeningState.transcript, isSpeechFinal = voiceListeningState.isSpeechFinal, errorCode = voiceListeningState.errorCode;
    return /*#__PURE__*/ h("div", {
        className: cssClasses.root
    }, /*#__PURE__*/ h(Template, {
        templateKey: "buttonText",
        rootTagName: "button",
        rootProps: {
            className: cssClasses.button,
            type: 'button',
            title: "Search by voice".concat(isBrowserSupported ? '' : ' (not supported on this browser)'),
            onClick: handleClick,
            disabled: !isBrowserSupported
        },
        data: {
            status: status,
            errorCode: errorCode,
            isListening: isListening,
            transcript: transcript,
            isSpeechFinal: isSpeechFinal,
            isBrowserSupported: isBrowserSupported
        },
        templates: templates
    }), /*#__PURE__*/ h(Template, {
        templateKey: "status",
        rootProps: {
            className: cssClasses.status
        },
        data: {
            status: status,
            errorCode: errorCode,
            isListening: isListening,
            transcript: transcript,
            isSpeechFinal: isSpeechFinal,
            isBrowserSupported: isBrowserSupported
        },
        templates: templates
    }));
};

export { VoiceSearch as default };
