'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('word-spacing', v);
    },
    get: function () {
        return this.getPropertyValue('word-spacing');
    },
    enumerable: true,
    configurable: true
};
