import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import React from 'react';

function HitsPerPage(_0) {
    var items = _0.items, onChange = _0.onChange, currentValue = _0.currentValue, _0_classNames = _0.classNames, classNames = _0_classNames === void 0 ? {} : _0_classNames, props = _(_0, [
        "items",
        "onChange",
        "currentValue",
        "classNames"
    ]);
    return /*#__PURE__*/ React.createElement("div", _$1(_$2({}, props), {
        className: cx('ais-HitsPerPage', classNames.root, props.className)
    }), /*#__PURE__*/ React.createElement("select", {
        className: cx('ais-HitsPerPage-select', classNames.select),
        onChange: function onChange1(event) {
            onChange(Number(event.target.value));
        },
        value: String(currentValue)
    }, items.map(function(item) {
        return /*#__PURE__*/ React.createElement("option", {
            key: item.value,
            className: cx('ais-HitsPerPage-option', classNames.option),
            value: item.value
        }, item.label);
    })));
}

export { HitsPerPage };
