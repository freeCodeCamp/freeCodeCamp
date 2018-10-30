'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('flex-wrap', v);
    },
    get: function () {
        return this.getPropertyValue('flex-wrap');
    },
    enumerable: true,
    configurable: true
};
