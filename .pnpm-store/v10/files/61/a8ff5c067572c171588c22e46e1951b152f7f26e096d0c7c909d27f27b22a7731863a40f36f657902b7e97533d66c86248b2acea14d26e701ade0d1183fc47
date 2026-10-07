import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import Template from '../Template/Template.js';
import { isSpecialClick } from '../../lib/utils/isSpecialClick.js';

var Breadcrumb = function Breadcrumb(param) {
    var items = param.items, cssClasses = param.cssClasses, templateProps = param.templateProps, createURL = param.createURL, refine = param.refine;
    return /*#__PURE__*/ h("div", {
        className: cx(cssClasses.root, items.length === 0 && cssClasses.noRefinementRoot)
    }, /*#__PURE__*/ h("ul", {
        className: cssClasses.list
    }, /*#__PURE__*/ h("li", {
        className: cx(cssClasses.item, items.length === 0 && cssClasses.selectedItem)
    }, /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "home",
        rootTagName: "a",
        rootProps: {
            className: cssClasses.link,
            href: createURL(null),
            onClick: function onClick(event) {
                if (isSpecialClick(event)) {
                    return;
                }
                event.preventDefault();
                refine(null);
            }
        }
    }))), items.map(function(item, idx) {
        var isLast = idx === items.length - 1;
        return /*#__PURE__*/ h("li", {
            key: item.label + idx,
            className: cx(cssClasses.item, isLast && cssClasses.selectedItem)
        }, /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
            templateKey: "separator",
            rootTagName: "span",
            rootProps: {
                className: cssClasses.separator,
                'aria-hidden': true
            }
        })), isLast ? item.label : /*#__PURE__*/ h("a", {
            className: cssClasses.link,
            href: createURL(item.value),
            onClick: function onClick(event) {
                if (isSpecialClick(event)) {
                    return;
                }
                event.preventDefault();
                refine(item.value);
            }
        }, item.label));
    })));
};

export { Breadcrumb as default };
