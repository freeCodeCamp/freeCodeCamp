import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';

function Selector(param) {
    var currentValue = param.currentValue, options = param.options, cssClasses = param.cssClasses, setValue = param.setValue, ariaLabel = param.ariaLabel;
    return /*#__PURE__*/ h("select", {
        className: cx(cssClasses.select),
        onChange: function onChange(event) {
            return setValue(event.target.value);
        },
        value: "".concat(currentValue),
        "aria-label": ariaLabel
    }, options.map(function(option) {
        return /*#__PURE__*/ h("option", {
            className: cx(cssClasses.option),
            key: option.label + option.value,
            value: "".concat(option.value)
        }, option.label);
    }));
}

export { Selector as default };
