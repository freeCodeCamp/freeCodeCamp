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
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _preact = require("preact");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
var ToggleRefinement = function ToggleRefinement(param) {
    var currentRefinement = param.currentRefinement, refine = param.refine, cssClasses = param.cssClasses, templateProps = param.templateProps;
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: cssClasses.root
    }, /*#__PURE__*/ (0, _preact.h)("label", {
        className: cssClasses.label
    }, /*#__PURE__*/ (0, _preact.h)("input", {
        className: cssClasses.checkbox,
        type: "checkbox",
        checked: currentRefinement.isRefined,
        onChange: function onChange(event) {
            return refine({
                isRefined: !event.target.checked
            });
        }
    }), /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        rootTagName: "span",
        rootProps: {
            className: cssClasses.labelText
        },
        templateKey: "labelText",
        data: currentRefinement
    }))));
};
var _default = ToggleRefinement;
