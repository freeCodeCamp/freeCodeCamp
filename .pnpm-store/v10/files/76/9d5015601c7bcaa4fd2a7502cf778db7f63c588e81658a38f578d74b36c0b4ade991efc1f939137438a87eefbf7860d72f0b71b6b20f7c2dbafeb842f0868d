import { _ as _$2 } from '@swc/helpers/esm/_call_super.js';
import { _ as _$1 } from '@swc/helpers/esm/_class_call_check.js';
import { _ as _$4 } from '@swc/helpers/esm/_create_class.js';
import { _ as _$3 } from '@swc/helpers/esm/_define_property.js';
import { _ } from '@swc/helpers/esm/_inherits.js';
import { _ as _$6 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$5 } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { h, Component } from 'preact';
import Template from '../Template/Template.js';

// Strips leading `0` from a positive number value
function stripLeadingZeroFromInput(value) {
    return value.replace(/^(0+)\d/, function(part) {
        return Number(part).toString();
    });
}
var RangeInput = /*#__PURE__*/ function(Component) {
    _(RangeInput, Component);
    function RangeInput() {
        _$1(this, RangeInput);
        var _this;
        var _this_props_values_min, _this_props_values_max;
        _this = _$2(this, RangeInput, arguments), _$3(_this, "state", {
            min: (_this_props_values_min = _this.props.values.min) === null || _this_props_values_min === void 0 ? void 0 : _this_props_values_min.toString(),
            max: (_this_props_values_max = _this.props.values.max) === null || _this_props_values_max === void 0 ? void 0 : _this_props_values_max.toString()
        }), _$3(_this, "onInput", function(key) {
            return function(event) {
                var value = event.currentTarget.value;
                _this.setState(_$3({}, key, value));
            };
        }), _$3(_this, "onSubmit", function(event) {
            event.preventDefault();
            var _this_state = _this.state, min = _this_state.min, max = _this_state.max;
            _this.props.refine([
                min ? Number(min) : undefined,
                max ? Number(max) : undefined
            ]);
        });
        return _this;
    }
    _$4(RangeInput, [
        {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var _nextProps_values_min, _nextProps_values_max;
                this.setState({
                    min: (_nextProps_values_min = nextProps.values.min) === null || _nextProps_values_min === void 0 ? void 0 : _nextProps_values_min.toString(),
                    max: (_nextProps_values_max = nextProps.values.max) === null || _nextProps_values_max === void 0 ? void 0 : _nextProps_values_max.toString()
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this_state = this.state, minValue = _this_state.min, maxValue = _this_state.max;
                var _this_props = this.props, min = _this_props.min, max = _this_props.max, step = _this_props.step, cssClasses = _this_props.cssClasses, templateProps = _this_props.templateProps;
                var isDisabled = min && max ? min >= max : false;
                var hasRefinements = Boolean(minValue || maxValue);
                var rootClassNames = cx(cssClasses.root, !hasRefinements && cssClasses.noRefinement);
                return /*#__PURE__*/ h("div", {
                    className: rootClassNames
                }, /*#__PURE__*/ h("form", {
                    className: cssClasses.form,
                    onSubmit: this.onSubmit
                }, /*#__PURE__*/ h("label", {
                    className: cssClasses.label
                }, /*#__PURE__*/ h("input", {
                    className: cx(cssClasses.input, cssClasses.inputMin),
                    type: "number",
                    min: min,
                    max: max,
                    step: step,
                    value: stripLeadingZeroFromInput(minValue !== null && minValue !== void 0 ? minValue : ''),
                    onInput: this.onInput('min'),
                    placeholder: min === null || min === void 0 ? void 0 : min.toString(),
                    disabled: isDisabled
                })), /*#__PURE__*/ h(Template, _$5(_$6({}, templateProps), {
                    templateKey: "separatorText",
                    rootTagName: "span",
                    rootProps: {
                        className: cssClasses.separator
                    }
                })), /*#__PURE__*/ h("label", {
                    className: cssClasses.label
                }, /*#__PURE__*/ h("input", {
                    className: cx(cssClasses.input, cssClasses.inputMax),
                    type: "number",
                    min: min,
                    max: max,
                    step: step,
                    value: stripLeadingZeroFromInput(maxValue !== null && maxValue !== void 0 ? maxValue : ''),
                    onInput: this.onInput('max'),
                    placeholder: max === null || max === void 0 ? void 0 : max.toString(),
                    disabled: isDisabled
                })), /*#__PURE__*/ h(Template, _$5(_$6({}, templateProps), {
                    templateKey: "submitText",
                    rootTagName: "button",
                    rootProps: {
                        type: 'submit',
                        className: cssClasses.submit,
                        disabled: isDisabled
                    }
                }))));
            }
        }
    ]);
    return RangeInput;
}(Component);

export { RangeInput as default };
