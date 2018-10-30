'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('pitch', v);
    },
    get: function () {
        return this.getPropertyValue('pitch');
    },
    enumerable: true,
    configurable: true
};
