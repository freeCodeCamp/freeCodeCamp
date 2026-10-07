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
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _Slider = /*#__PURE__*/ _interop_require_default._(require("../../components/Slider/Slider"));
var _connectRange = /*#__PURE__*/ _interop_require_default._(require("../../connectors/range/connectRange"));
var _suit = require("../../lib/suit");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'range-slider'
});
var suit = (0, _suit.component)('RangeSlider');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, pips = param.pips, step = param.step, tooltips = param.tooltips;
    return function(param, isFirstRendering) {
        var refine = param.refine, range = param.range, start = param.start;
        if (isFirstRendering) {
            // There's no information at this point, let's render nothing.
            return;
        }
        var minRange = range.min, maxRange = range.max;
        var _start = _sliced_to_array._(start, 2), minStart = _start[0], maxStart = _start[1];
        var minFinite = minStart === -Infinity ? minRange : minStart;
        var maxFinite = maxStart === Infinity ? maxRange : maxStart;
        // Clamp values to the range for avoid extra rendering & refinement
        // Should probably be done on the connector side, but we need to stay
        // backward compatible so we still need to pass [-Infinity, Infinity]
        var values = [
            minFinite > maxRange ? maxRange : minFinite,
            maxFinite < minRange ? minRange : maxFinite
        ];
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_Slider.default, {
            cssClasses: cssClasses,
            refine: refine,
            min: minRange,
            max: maxRange,
            values: values,
            tooltips: tooltips,
            step: step,
            pips: pips
        }), containerNode);
    };
};
/**
 * The range slider is a widget which provides a user-friendly way to filter the
 * results based on a single numeric range.
 *
 * @requirements
 * The attribute passed to `attribute` must be declared as an
 * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
 * in your Algolia settings.
 *
 * The values inside this attribute must be JavaScript numbers (not strings).
 */ var rangeSlider = function rangeSlider(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, min = _ref.min, max = _ref.max, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, step = _ref.step, _ref_pips = _ref.pips, pips = _ref_pips === void 0 ? true : _ref_pips, _ref_precision = _ref.precision, precision = _ref_precision === void 0 ? 0 : _ref_precision, _ref_tooltips = _ref.tooltips, tooltips = _ref_tooltips === void 0 ? true : _ref_tooltips;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        disabledRoot: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'disabled'
        }), userCssClasses.disabledRoot)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        step: step,
        pips: pips,
        tooltips: tooltips,
        cssClasses: cssClasses
    });
    var makeWidget = (0, _connectRange.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attribute: attribute,
        min: min,
        max: max,
        precision: precision
    })), {
        $$type: 'ais.rangeSlider',
        $$widgetType: 'ais.rangeSlider'
    });
};
var _default = rangeSlider;
