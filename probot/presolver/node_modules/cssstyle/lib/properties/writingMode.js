'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('writing-mode', v);
    },
    get: function () {
        return this.getPropertyValue('writing-mode');
    },
    enumerable: true,
    configurable: true
};
