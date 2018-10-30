'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('counter-reset', v);
    },
    get: function () {
        return this.getPropertyValue('counter-reset');
    },
    enumerable: true,
    configurable: true
};
