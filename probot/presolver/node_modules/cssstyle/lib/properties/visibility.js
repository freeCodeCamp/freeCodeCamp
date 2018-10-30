'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('visibility', v);
    },
    get: function () {
        return this.getPropertyValue('visibility');
    },
    enumerable: true,
    configurable: true
};
