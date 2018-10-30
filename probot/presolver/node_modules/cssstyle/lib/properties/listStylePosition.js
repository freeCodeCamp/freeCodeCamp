'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('list-style-position', v);
    },
    get: function () {
        return this.getPropertyValue('list-style-position');
    },
    enumerable: true,
    configurable: true
};
