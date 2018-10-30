'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('play-during', v);
    },
    get: function () {
        return this.getPropertyValue('play-during');
    },
    enumerable: true,
    configurable: true
};
