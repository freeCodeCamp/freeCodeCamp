'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-line-through-mode', v);
    },
    get: function () {
        return this.getPropertyValue('text-line-through-mode');
    },
    enumerable: true,
    configurable: true
};
