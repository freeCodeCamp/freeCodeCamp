'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _formatNumber = require("../../lib/formatNumber");
var defaultTemplates = {
    item: function item(param) {
        var label = param.label, count = param.count;
        return "".concat(label, " (").concat((0, _formatNumber.formatNumber)(count), ")");
    },
    defaultOption: function defaultOption() {
        return 'See all';
    }
};
var _default = defaultTemplates;
