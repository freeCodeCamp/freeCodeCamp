import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import { formatNumber } from '../../lib/formatNumber.js';

var defaultTemplates = {
    item: function item(param) {
        var cssClasses = param.cssClasses, url = param.url, label = param.label, count = param.count;
        return /*#__PURE__*/ h("a", {
            className: cx(cssClasses.link),
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
