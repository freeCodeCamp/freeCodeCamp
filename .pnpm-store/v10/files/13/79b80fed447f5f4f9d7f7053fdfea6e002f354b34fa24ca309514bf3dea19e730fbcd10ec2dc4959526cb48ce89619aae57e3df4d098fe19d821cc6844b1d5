import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import React from 'react';

function SortBy(_0) {
    var items = _0.items, value = _0.value, _0_onChange = _0.onChange, onChange = _0_onChange === void 0 ? function() {} : _0_onChange, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, props = _(_0, [
        "items",
        "value",
        "onChange",
        "classNames"
    ]);
    return /*#__PURE__*/ React.createElement("div", _$1(_$2({}, props), {
        className: cx('ais-SortBy', classNames.root, props.className)
    }), /*#__PURE__*/ React.createElement("select", {
        className: cx('ais-SortBy-select', classNames.select),
        onChange: function onChange1(event) {
            return onChange(event.target.value);
        },
        value: value,
        "aria-label": "Sort results by"
    }, items.map(function(item) {
        return /*#__PURE__*/ React.createElement("option", {
            className: cx('ais-SortBy-option', classNames.option),
            key: item.value,
            value: item.value
        }, item.label);
    })));
}

export { SortBy };
