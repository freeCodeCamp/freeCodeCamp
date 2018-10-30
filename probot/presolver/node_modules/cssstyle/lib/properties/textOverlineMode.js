'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-overline-mode', v);
    },
    get: function () {
        return this.getPropertyValue('text-overline-mode');
    },
    enumerable: true,
    configurable: true
};
