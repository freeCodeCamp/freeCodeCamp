'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _instanceof = require("@swc/helpers/_/_instanceof");
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _preact = require("preact");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
var VoiceSearch = function VoiceSearch(param) {
    var cssClasses = param.cssClasses, isBrowserSupported = param.isBrowserSupported, isListening = param.isListening, toggleListening = param.toggleListening, voiceListeningState = param.voiceListeningState, templates = param.templates;
    var handleClick = function handleClick(event) {
        if (_instanceof._(event.currentTarget, HTMLElement)) {
            event.currentTarget.blur();
        }
        toggleListening();
    };
    var status = voiceListeningState.status, transcript = voiceListeningState.transcript, isSpeechFinal = voiceListeningState.isSpeechFinal, errorCode = voiceListeningState.errorCode;
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: cssClasses.root
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, {
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
    }), /*#__PURE__*/ (0, _preact.h)(_Template.default, {
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
var _default = VoiceSearch;
