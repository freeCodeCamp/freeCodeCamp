'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('page', v);
    },
    get: function () {
        return this.getPropertyValue('page');
    },
    enumerable: true,
    configurable: true
};
