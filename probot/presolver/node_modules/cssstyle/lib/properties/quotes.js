'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('quotes', v);
    },
    get: function () {
        return this.getPropertyValue('quotes');
    },
    enumerable: true,
    configurable: true
};
