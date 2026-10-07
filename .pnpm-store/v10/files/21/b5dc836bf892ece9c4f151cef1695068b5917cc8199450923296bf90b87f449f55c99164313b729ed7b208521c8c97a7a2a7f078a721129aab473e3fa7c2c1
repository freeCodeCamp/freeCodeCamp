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
var _GeoSearchButton = /*#__PURE__*/ _interop_require_default._(require("./GeoSearchButton"));
var _GeoSearchToggle = /*#__PURE__*/ _interop_require_default._(require("./GeoSearchToggle"));
var GeoSearchControls = function GeoSearchControls(param) {
    var cssClasses = param.cssClasses, enableRefine = param.enableRefine, enableRefineControl = param.enableRefineControl, enableClearMapRefinement = param.enableClearMapRefinement, isRefineOnMapMove = param.isRefineOnMapMove, isRefinedWithMap = param.isRefinedWithMap, hasMapMoveSinceLastRefine = param.hasMapMoveSinceLastRefine, onRefineToggle = param.onRefineToggle, onRefineClick = param.onRefineClick, onClearClick = param.onClearClick, templateProps = param.templateProps;
    return /*#__PURE__*/ (0, _preact.h)(_preact.Fragment, null, enableRefine && /*#__PURE__*/ (0, _preact.h)("div", null, enableRefineControl && /*#__PURE__*/ (0, _preact.h)("div", {
        className: cssClasses.control
    }, isRefineOnMapMove || !hasMapMoveSinceLastRefine ? /*#__PURE__*/ (0, _preact.h)(_GeoSearchToggle.default, {
        classNameLabel: (0, _instantsearchuicomponents.cx)(cssClasses.label, isRefineOnMapMove && cssClasses.selectedLabel),
        classNameInput: cssClasses.input,
        checked: isRefineOnMapMove,
        onToggle: onRefineToggle
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "toggle",
        rootTagName: "span"
    }))) : /*#__PURE__*/ (0, _preact.h)(_GeoSearchButton.default, {
        className: cssClasses.redo,
        disabled: !hasMapMoveSinceLastRefine,
        onClick: onRefineClick
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "redo",
        rootTagName: "span"
    })))), !enableRefineControl && !isRefineOnMapMove && /*#__PURE__*/ (0, _preact.h)("div", {
        className: cssClasses.control
    }, /*#__PURE__*/ (0, _preact.h)(_GeoSearchButton.default, {
        className: (0, _instantsearchuicomponents.cx)(cssClasses.redo, !hasMapMoveSinceLastRefine && cssClasses.disabledRedo),
        disabled: !hasMapMoveSinceLastRefine,
        onClick: onRefineClick
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "redo",
        rootTagName: "span"
    })))), enableClearMapRefinement && isRefinedWithMap && /*#__PURE__*/ (0, _preact.h)(_GeoSearchButton.default, {
        className: cssClasses.reset,
        onClick: onClearClick
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "reset",
        rootTagName: "span"
    })))));
};
var _default = GeoSearchControls;
