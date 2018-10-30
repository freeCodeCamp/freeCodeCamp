'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('zoom', v);
    },
    get: function () {
        return this.getPropertyValue('zoom');
    },
    enumerable: true,
    configurable: true
};
