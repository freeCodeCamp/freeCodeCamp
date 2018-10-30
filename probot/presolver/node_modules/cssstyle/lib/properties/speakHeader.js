'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('speak-header', v);
    },
    get: function () {
        return this.getPropertyValue('speak-header');
    },
    enumerable: true,
    configurable: true
};
