'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('unicode-bidi', v);
    },
    get: function () {
        return this.getPropertyValue('unicode-bidi');
    },
    enumerable: true,
    configurable: true
};
