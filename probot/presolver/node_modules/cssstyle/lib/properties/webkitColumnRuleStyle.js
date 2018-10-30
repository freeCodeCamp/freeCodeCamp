'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-column-rule-style', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-column-rule-style');
    },
    enumerable: true,
    configurable: true
};
