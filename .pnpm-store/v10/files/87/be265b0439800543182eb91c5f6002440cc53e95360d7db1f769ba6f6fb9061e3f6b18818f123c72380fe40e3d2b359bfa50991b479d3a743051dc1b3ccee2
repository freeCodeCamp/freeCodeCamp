import { _ as _$2 } from '@swc/helpers/esm/_call_super.js';
import { _ as _$1 } from '@swc/helpers/esm/_class_call_check.js';
import { _ as _$7 } from '@swc/helpers/esm/_create_class.js';
import { _ as _$3 } from '@swc/helpers/esm/_define_property.js';
import { _ } from '@swc/helpers/esm/_inherits.js';
import { _ as _$6 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$5 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$8 } from '@swc/helpers/esm/_to_consumable_array.js';
import { _ as _$4 } from '@swc/helpers/esm/_type_of.js';
import { cx } from 'instantsearch-ui-components';
import { h, Component } from 'preact';
import Pit from './Pit.js';
import Rheostat from './Rheostat.js';
import { range } from '../../lib/utils/range.js';

var Slider = /*#__PURE__*/ function(Component) {
    _(Slider, Component);
    function Slider() {
        _$1(this, Slider);
        var _this;
        _this = _$2(this, Slider, arguments), _$3(_this, "handleChange", function(param) {
            var values = param.values;
            if (!_this.isDisabled) {
                _this.props.refine(values);
            }
        }), _$3(_this, "createHandleComponent", function(tooltips) {
            return function(props) {
                // display only two decimals after comma,
                // and apply `tooltips.format()` if any
                var roundedValue = Math.round(// have to cast as a string, as the value given to the prop is a number, but becomes a string when read
                parseFloat(props['aria-valuenow']) * 100) / 100;
                var value = (typeof tooltips === "undefined" ? "undefined" : _$4(tooltips)) === 'object' && tooltips.format ? tooltips.format(roundedValue) : roundedValue;
                var className = cx(props.className, props['data-handle-key'] === 0 && 'rheostat-handle-lower', props['data-handle-key'] === 1 && 'rheostat-handle-upper');
                var ariaLabel = props['data-handle-key'] === 0 ? 'Minimum Filter Handle' : 'Maximum Filter Handle';
                return /*#__PURE__*/ h("div", _$5(_$6({}, props), {
                    className: className,
                    "aria-label": ariaLabel
                }), tooltips && /*#__PURE__*/ h("div", {
                    className: "rheostat-tooltip"
                }, value));
            };
        });
        return _this;
    }
    _$7(Slider, [
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
                ].concat(_$8(range({
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
                return _$8(range({
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
                return /*#__PURE__*/ h("div", {
                    className: cx(cssClasses.root, this.isDisabled && cssClasses.disabledRoot)
                }, /*#__PURE__*/ h(Rheostat, {
                    handle: this.createHandleComponent(tooltips),
                    onChange: this.handleChange,
                    min: min,
                    max: max,
                    pitComponent: Pit,
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
}(Component);

export { Slider as default };
