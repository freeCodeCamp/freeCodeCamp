import { formatNumber } from '../../lib/formatNumber.js';

var defaultTemplates = {
    item: function item(param) {
        var label = param.label, count = param.count;
        return "".concat(label, " (").concat(formatNumber(count), ")");
    },
    defaultOption: function defaultOption() {
        return 'See all';
    }
};

export { defaultTemplates as default };
