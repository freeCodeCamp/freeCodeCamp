import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import { formatNumber } from '../../lib/formatNumber.js';

var defaultTemplates = {
    item: function item(param) {
        var url = param.url, label = param.label, count = param.count, cssClasses = param.cssClasses, isRefined = param.isRefined;
        return /*#__PURE__*/ h("a", {
            className: cx(cx(cssClasses.link), cx(isRefined ? cssClasses.selectedItemLink : undefined)),
            href: url
        }, /*#__PURE__*/ h("span", {
            className: cx(cssClasses.label)
        }, label), /*#__PURE__*/ h("span", {
            className: cx(cssClasses.count)
        }, formatNumber(count)));
    },
    showMoreText: function showMoreText(param) {
        var isShowingMore = param.isShowingMore;
        return isShowingMore ? 'Show less' : 'Show more';
    }
};

export { defaultTemplates as default };
