'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('background-position-x', v);
    },
    get: function () {
        return this.getPropertyValue('background-position-x');
    },
    enumerable: true,
    configurable: true
};
