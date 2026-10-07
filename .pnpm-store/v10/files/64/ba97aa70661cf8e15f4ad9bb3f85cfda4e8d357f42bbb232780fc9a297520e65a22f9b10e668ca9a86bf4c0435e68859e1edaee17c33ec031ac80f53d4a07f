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
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
var ClearRefinements = function ClearRefinements(param) {
    var hasRefinements = param.hasRefinements, refine = param.refine, cssClasses = param.cssClasses, templateProps = param.templateProps;
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: cssClasses.root
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "resetLabel",
        rootTagName: "button",
        rootProps: {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.button, !hasRefinements && cssClasses.disabledButton),
            onClick: refine,
            disabled: !hasRefinements
        },
        data: {
            hasRefinements: hasRefinements
        }
    })));
};
var _default = ClearRefinements;
