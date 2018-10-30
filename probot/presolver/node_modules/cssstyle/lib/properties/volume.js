'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('volume', v);
    },
    get: function () {
        return this.getPropertyValue('volume');
    },
    enumerable: true,
    configurable: true
};
