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
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
// Strips leading `0` from a positive number value
function stripLeadingZeroFromInput(value) {
    return value.replace(/^(0+)\d/, function(part) {
        return Number(part).toString();
    });
}
var RangeInput = /*#__PURE__*/ function(Component) {
    _inherits._(RangeInput, Component);
    function RangeInput() {
        _class_call_check._(this, RangeInput);
        var _this;
        var _this_props_values_min, _this_props_values_max;
        _this = _call_super._(this, RangeInput, arguments), _define_property._(_this, "state", {
            min: (_this_props_values_min = _this.props.values.min) === null || _this_props_values_min === void 0 ? void 0 : _this_props_values_min.toString(),
            max: (_this_props_values_max = _this.props.values.max) === null || _this_props_values_max === void 0 ? void 0 : _this_props_values_max.toString()
        }), _define_property._(_this, "onInput", function(key) {
            return function(event) {
                var value = event.currentTarget.value;
                _this.setState(_define_property._({}, key, value));
            };
        }), _define_property._(_this, "onSubmit", function(event) {
            event.preventDefault();
            var _this_state = _this.state, min = _this_state.min, max = _this_state.max;
            _this.props.refine([
                min ? Number(min) : undefined,
                max ? Number(max) : undefined
            ]);
        });
        return _this;
    }
    _create_class._(RangeInput, [
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
                var rootClassNames = (0, _instantsearchuicomponents.cx)(cssClasses.root, !hasRefinements && cssClasses.noRefinement);
                return /*#__PURE__*/ (0, _preact.h)("div", {
                    className: rootClassNames
                }, /*#__PURE__*/ (0, _preact.h)("form", {
                    className: cssClasses.form,
                    onSubmit: this.onSubmit
                }, /*#__PURE__*/ (0, _preact.h)("label", {
                    className: cssClasses.label
                }, /*#__PURE__*/ (0, _preact.h)("input", {
                    className: (0, _instantsearchuicomponents.cx)(cssClasses.input, cssClasses.inputMin),
                    type: "number",
                    min: min,
                    max: max,
                    step: step,
                    value: stripLeadingZeroFromInput(minValue !== null && minValue !== void 0 ? minValue : ''),
                    onInput: this.onInput('min'),
                    placeholder: min === null || min === void 0 ? void 0 : min.toString(),
                    disabled: isDisabled
                })), /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
                    templateKey: "separatorText",
                    rootTagName: "span",
                    rootProps: {
                        className: cssClasses.separator
                    }
                })), /*#__PURE__*/ (0, _preact.h)("label", {
                    className: cssClasses.label
                }, /*#__PURE__*/ (0, _preact.h)("input", {
                    className: (0, _instantsearchuicomponents.cx)(cssClasses.input, cssClasses.inputMax),
                    type: "number",
                    min: min,
                    max: max,
                    step: step,
                    value: stripLeadingZeroFromInput(maxValue !== null && maxValue !== void 0 ? maxValue : ''),
                    onInput: this.onInput('max'),
                    placeholder: max === null || max === void 0 ? void 0 : max.toString(),
                    disabled: isDisabled
                })), /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
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
}(_preact.Component);
var _default = RangeInput;
