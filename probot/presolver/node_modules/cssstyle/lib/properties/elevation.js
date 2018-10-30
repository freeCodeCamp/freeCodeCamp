'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('elevation', v);
    },
    get: function () {
        return this.getPropertyValue('elevation');
    },
    enumerable: true,
    configurable: true
};
