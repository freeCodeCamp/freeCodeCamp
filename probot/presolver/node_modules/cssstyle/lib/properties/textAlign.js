'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-align', v);
    },
    get: function () {
        return this.getPropertyValue('text-align');
    },
    enumerable: true,
    configurable: true
};
