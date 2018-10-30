'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-underline-style', v);
    },
    get: function () {
        return this.getPropertyValue('text-underline-style');
    },
    enumerable: true,
    configurable: true
};
