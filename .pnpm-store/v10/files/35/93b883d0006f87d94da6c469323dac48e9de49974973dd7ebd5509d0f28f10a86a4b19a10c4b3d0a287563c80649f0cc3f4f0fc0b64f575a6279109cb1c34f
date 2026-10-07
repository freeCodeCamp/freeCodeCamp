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
function RefinementListItem(param) {
    var className = param.className, handleClick = param.handleClick, facetValueToRefine = param.facetValueToRefine, isRefined = param.isRefined, templateProps = param.templateProps, templateKey = param.templateKey, templateData = param.templateData, subItems = param.subItems;
    return /*#__PURE__*/ (0, _preact.h)("li", {
        className: className,
        onClick: function onClick(originalEvent) {
            handleClick({
                facetValueToRefine: facetValueToRefine,
                isRefined: isRefined,
                originalEvent: originalEvent
            });
        }
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: templateKey,
        data: templateData
    })), subItems);
}
var _default = RefinementListItem;
