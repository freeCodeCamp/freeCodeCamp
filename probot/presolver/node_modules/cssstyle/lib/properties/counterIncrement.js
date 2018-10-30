'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('counter-increment', v);
    },
    get: function () {
        return this.getPropertyValue('counter-increment');
    },
    enumerable: true,
    configurable: true
};
