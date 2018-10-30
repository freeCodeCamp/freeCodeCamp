'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('list-style-type', v);
    },
    get: function () {
        return this.getPropertyValue('list-style-type');
    },
    enumerable: true,
    configurable: true
};
