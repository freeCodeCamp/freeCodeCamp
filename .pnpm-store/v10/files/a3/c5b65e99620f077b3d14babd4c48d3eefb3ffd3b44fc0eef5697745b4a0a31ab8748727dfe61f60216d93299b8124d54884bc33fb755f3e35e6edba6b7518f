import { h, Fragment } from 'preact';
import { omit } from '../../lib/utils/omit.js';

var defaultTemplates = {
    empty: function empty() {
        return 'No results';
    },
    showPreviousText: function showPreviousText() {
        return 'Show previous results';
    },
    showMoreText: function showMoreText() {
        return 'Show more results';
    },
    item: function item(data) {
        return /*#__PURE__*/ h(Fragment, null, JSON.stringify(omit(data, [
            '__hitIndex'
        ]), null, 2));
    }
};

export { defaultTemplates as default };
