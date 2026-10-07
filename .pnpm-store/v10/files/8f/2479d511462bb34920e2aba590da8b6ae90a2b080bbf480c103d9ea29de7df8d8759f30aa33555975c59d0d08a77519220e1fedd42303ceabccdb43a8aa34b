import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import { formatNumber } from '../../lib/formatNumber.js';

function ItemWrapper(param) {
    var children = param.children, count = param.count, value = param.value, url = param.url, cssClasses = param.cssClasses;
    if (count) {
        return /*#__PURE__*/ h("a", {
            className: cx(cssClasses.link),
            "aria-label": "".concat(value, " & up"),
            href: url
        }, children);
    }
    return /*#__PURE__*/ h("div", {
        className: cx(cssClasses.link),
        "aria-label": "".concat(value, " & up"),
        disabled: true
    }, children);
}
var defaultTemplates = {
    item: function item(param) {
        var count = param.count, value = param.value, url = param.url, stars = param.stars, cssClasses = param.cssClasses;
        return /*#__PURE__*/ h(ItemWrapper, {
            count: count,
            value: value,
            url: url,
            cssClasses: cssClasses
        }, stars.map(function(isFull, index) {
            return /*#__PURE__*/ h("svg", {
                key: index,
                className: cx(cssClasses.starIcon, isFull ? cssClasses.fullStarIcon : cssClasses.emptyStarIcon),
                "aria-hidden": "true",
                width: "24",
                height: "24"
            }, /*#__PURE__*/ h("use", {
                xlinkHref: isFull ? '#ais-RatingMenu-starSymbol' : '#ais-RatingMenu-starEmptySymbol'
            }));
        }), /*#__PURE__*/ h("span", {
            "aria-hidden": "true",
            className: cx(cssClasses.label)
        }, "& Up"), count && /*#__PURE__*/ h("span", {
            className: cx(cssClasses.count)
        }, formatNumber(count)));
    }
};

export { defaultTemplates as default };
