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
var _preact = require("preact");
var ButtonInnerElement = function ButtonInnerElement(param) {
    var status = param.status, errorCode = param.errorCode, isListening = param.isListening;
    if (status === 'error' && errorCode === 'not-allowed') {
        return /*#__PURE__*/ (0, _preact.h)(_preact.Fragment, null, /*#__PURE__*/ (0, _preact.h)("line", {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23"
        }), /*#__PURE__*/ (0, _preact.h)("path", {
            d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
        }), /*#__PURE__*/ (0, _preact.h)("path", {
            d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
        }), /*#__PURE__*/ (0, _preact.h)("line", {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "23"
        }), /*#__PURE__*/ (0, _preact.h)("line", {
            x1: "8",
            y1: "23",
            x2: "16",
            y2: "23"
        }));
    }
    return /*#__PURE__*/ (0, _preact.h)(_preact.Fragment, null, /*#__PURE__*/ (0, _preact.h)("path", {
        d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
        fill: isListening ? 'currentColor' : 'none'
    }), /*#__PURE__*/ (0, _preact.h)("path", {
        d: "M19 10v2a7 7 0 0 1-14 0v-2"
    }), /*#__PURE__*/ (0, _preact.h)("line", {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
    }), /*#__PURE__*/ (0, _preact.h)("line", {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
    }));
};
var defaultTemplates = {
    buttonText: function buttonText(param) {
        var status = param.status, errorCode = param.errorCode, isListening = param.isListening;
        return /*#__PURE__*/ (0, _preact.h)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            /* eslint-disable react/no-unknown-property */ // Preact supports kebab case attributes, and using camel case would
            // require using `preact/compat`.
            // @TODO: reconsider using the `react` ESLint preset
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }, /*#__PURE__*/ (0, _preact.h)(ButtonInnerElement, {
            status: status,
            errorCode: errorCode,
            isListening: isListening
        }));
    },
    status: function status(param) {
        var transcript = param.transcript;
        return /*#__PURE__*/ (0, _preact.h)("p", null, transcript);
    }
};
var _default = defaultTemplates;
