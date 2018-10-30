'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('justify-content', v);
    },
    get: function () {
        return this.getPropertyValue('justify-content');
    },
    enumerable: true,
    configurable: true
};
