import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import Template from '../Template/Template.js';
import { find } from '../../lib/utils/find.js';

function MenuSelect(param) {
    var cssClasses = param.cssClasses, templateProps = param.templateProps, items = param.items, refine = param.refine;
    var _ref = find(items, function(item) {
        return item.isRefined;
    }) || {
        value: ''
    }, selectedValue = _ref.value;
    return /*#__PURE__*/ h("div", {
        className: cx(cssClasses.root, items.length === 0 && cssClasses.noRefinementRoot)
    }, /*#__PURE__*/ h("select", {
        className: cssClasses.select,
        value: selectedValue,
        onChange: function onChange(event) {
            refine(event.target.value);
        }
    }, /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "defaultOption",
        rootTagName: "option",
        rootProps: {
            value: '',
            className: cssClasses.option
        }
    })), items.map(function(item) {
        return /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
            templateKey: "item",
            rootTagName: "option",
            rootProps: {
                value: item.value,
                className: cssClasses.option
            },
            key: item.value,
            data: item
        }));
    })));
}

export { MenuSelect as default };
