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
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _preact = require("preact");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
var RelevantSort = function RelevantSort(param) {
    var cssClasses = param.cssClasses, templates = param.templates, isRelevantSorted = param.isRelevantSorted, isVirtualReplica = param.isVirtualReplica, refine = param.refine;
    return isVirtualReplica ? /*#__PURE__*/ (0, _preact.h)("div", {
        className: cssClasses.root
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, {
        templateKey: "text",
        templates: templates,
        rootProps: {
            className: cssClasses.text
        },
        data: {
            isRelevantSorted: isRelevantSorted
        }
    }), /*#__PURE__*/ (0, _preact.h)("button", {
        type: "button",
        className: cssClasses.button,
        onClick: function onClick() {
            if (isRelevantSorted) {
                refine(0);
            } else {
                refine(undefined);
            }
        }
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, {
        rootTagName: "span",
        templateKey: "button",
        templates: templates,
        data: {
            isRelevantSorted: isRelevantSorted
        }
    }))) : null;
};
var _default = RelevantSort;
