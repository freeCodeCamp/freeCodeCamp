'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-overline-style', v);
    },
    get: function () {
        return this.getPropertyValue('text-overline-style');
    },
    enumerable: true,
    configurable: true
};
