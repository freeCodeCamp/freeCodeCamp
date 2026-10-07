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
var _call_super = require("@swc/helpers/_/_call_super");
var _class_call_check = require("@swc/helpers/_/_class_call_check");
var _create_class = require("@swc/helpers/_/_create_class");
var _define_property = require("@swc/helpers/_/_define_property");
var _inherits = require("@swc/helpers/_/_inherits");
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _type_of = require("@swc/helpers/_/_type_of");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _utils = require("../../lib/utils");
var _Pit = /*#__PURE__*/ _interop_require_default._(require("./Pit"));
var _Rheostat = /*#__PURE__*/ _interop_require_default._(require("./Rheostat"));
var Slider = /*#__PURE__*/ function(Component) {
    _inherits._(Slider, Component);
    function Slider() {
        _class_call_check._(this, Slider);
        var _this;
        _this = _call_super._(this, Slider, arguments), _define_property._(_this, "handleChange", function(param) {
            var values = param.values;
            if (!_this.isDisabled) {
                _this.props.refine(values);
            }
        }), _define_property._(_this, "createHandleComponent", function(tooltips) {
            return function(props) {
                // display only two decimals after comma,
                // and apply `tooltips.format()` if any
                var roundedValue = Math.round(// have to cast as a string, as the value given to the prop is a number, but becomes a string when read
                parseFloat(props['aria-valuenow']) * 100) / 100;
                var value = (typeof tooltips === "undefined" ? "undefined" : _type_of._(tooltips)) === 'object' && tooltips.format ? tooltips.format(roundedValue) : roundedValue;
                var className = (0, _instantsearchuicomponents.cx)(props.className, props['data-handle-key'] === 0 && 'rheostat-handle-lower', props['data-handle-key'] === 1 && 'rheostat-handle-upper');
                var ariaLabel = props['data-handle-key'] === 0 ? 'Minimum Filter Handle' : 'Maximum Filter Handle';
                return /*#__PURE__*/ (0, _preact.h)("div", _object_spread_props._(_object_spread._({}, props), {
                    className: className,
                    "aria-label": ariaLabel
                }), tooltips && /*#__PURE__*/ (0, _preact.h)("div", {
                    className: "rheostat-tooltip"
                }, value));
            };
        });
        return _this;
    }
    _create_class._(Slider, [
        {
            key: "isDisabled",
            get: function get() {
                return this.props.min >= this.props.max;
            }
        },
        {
            key: "computeDefaultPitPoints",
            value: // creates an array number where to display a pit point on the slider
            function computeDefaultPitPoints(param) {
                var min = param.min, max = param.max;
                var totalLength = max - min;
                var steps = 34;
                var stepsLength = totalLength / steps;
                var pitPoints = [
                    min
                ].concat(_to_consumable_array._((0, _utils.range)({
                    end: steps - 1
                }).map(function(step) {
                    return min + stepsLength * (step + 1);
                })), [
                    max
                ]);
                return pitPoints;
            }
        },
        {
            key: "computeSnapPoints",
            value: // creates an array of values where the slider should snap to
            function computeSnapPoints(param) {
                var min = param.min, max = param.max, step = param.step;
                if (!step) return undefined;
                return _to_consumable_array._((0, _utils.range)({
                    start: min,
                    end: max,
                    step: step
                })).concat([
                    max
                ]);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this_props = this.props, tooltips = _this_props.tooltips, step = _this_props.step, pips = _this_props.pips, values = _this_props.values, cssClasses = _this_props.cssClasses;
                // @TODO: figure out why this.props needs to be non-null asserted
                var _ref = this.isDisabled ? {
                    min: this.props.min,
                    max: this.props.max + 0.001
                } : this.props, min = _ref.min, max = _ref.max;
                var snapPoints = this.computeSnapPoints({
                    min: min,
                    max: max,
                    step: step
                });
                var pitPoints = pips === false ? [] : this.computeDefaultPitPoints({
                    min: min,
                    max: max
                });
                return /*#__PURE__*/ (0, _preact.h)("div", {
                    className: (0, _instantsearchuicomponents.cx)(cssClasses.root, this.isDisabled && cssClasses.disabledRoot)
                }, /*#__PURE__*/ (0, _preact.h)(_Rheostat.default, {
                    handle: this.createHandleComponent(tooltips),
                    onChange: this.handleChange,
                    min: min,
                    max: max,
                    pitComponent: _Pit.default,
                    pitPoints: pitPoints,
                    snap: true,
                    snapPoints: snapPoints,
                    values: this.isDisabled ? [
                        min,
                        max
                    ] : values,
                    disabled: this.isDisabled
                }));
            }
        }
    ]);
    return Slider;
}(_preact.Component);
var _default = Slider;
