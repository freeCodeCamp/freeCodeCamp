'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('background-position-y', v);
    },
    get: function () {
        return this.getPropertyValue('background-position-y');
    },
    enumerable: true,
    configurable: true
};
