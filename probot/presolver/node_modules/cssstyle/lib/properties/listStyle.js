'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('list-style', v);
    },
    get: function () {
        return this.getPropertyValue('list-style');
    },
    enumerable: true,
    configurable: true
};
