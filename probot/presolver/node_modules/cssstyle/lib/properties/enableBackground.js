'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('enable-background', v);
    },
    get: function () {
        return this.getPropertyValue('enable-background');
    },
    enumerable: true,
    configurable: true
};
