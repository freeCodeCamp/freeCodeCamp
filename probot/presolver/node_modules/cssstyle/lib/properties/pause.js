'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('pause', v);
    },
    get: function () {
        return this.getPropertyValue('pause');
    },
    enumerable: true,
    configurable: true
};
