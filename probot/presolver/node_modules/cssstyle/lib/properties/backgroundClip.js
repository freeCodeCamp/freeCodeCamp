'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('background-clip', v);
    },
    get: function () {
        return this.getPropertyValue('background-clip');
    },
    enumerable: true,
    configurable: true
};
