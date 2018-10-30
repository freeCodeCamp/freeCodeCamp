'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('content', v);
    },
    get: function () {
        return this.getPropertyValue('content');
    },
    enumerable: true,
    configurable: true
};
