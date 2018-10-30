'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('word-wrap', v);
    },
    get: function () {
        return this.getPropertyValue('word-wrap');
    },
    enumerable: true,
    configurable: true
};
