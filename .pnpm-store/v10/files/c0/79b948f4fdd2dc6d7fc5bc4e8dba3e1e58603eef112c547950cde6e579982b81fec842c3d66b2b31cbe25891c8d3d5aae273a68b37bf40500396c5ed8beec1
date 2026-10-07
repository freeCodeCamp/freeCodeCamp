import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import { formatNumber } from '../../lib/formatNumber.js';

var defaultTemplates = {
    item: function item(param) {
        var cssClasses = param.cssClasses, count = param.count, value = param.value, highlighted = param.highlighted, isRefined = param.isRefined, isFromSearch = param.isFromSearch;
        return /*#__PURE__*/ h("label", {
            className: cx(cssClasses.label)
        }, /*#__PURE__*/ h("input", {
            type: "checkbox",
            className: cx(cssClasses.checkbox),
            value: value,
            defaultChecked: isRefined
        }), /*#__PURE__*/ h("span", {
            className: cx(cssClasses.labelText),
            dangerouslySetInnerHTML: isFromSearch ? {
                __html: highlighted
            } : undefined
        }, !isFromSearch && highlighted), /*#__PURE__*/ h("span", {
            className: cx(cssClasses.count)
        }, formatNumber(count)));
    },
    showMoreText: function showMoreText(param) {
        var isShowingMore = param.isShowingMore;
        return isShowingMore ? 'Show less' : 'Show more';
    },
    searchableNoResults: function searchableNoResults() {
        return 'No results';
    }
};

export { defaultTemplates as default };
