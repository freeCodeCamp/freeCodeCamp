'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-column-rule-width', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-column-rule-width');
    },
    enumerable: true,
    configurable: true
};
