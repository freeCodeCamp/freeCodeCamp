'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-overline', v);
    },
    get: function () {
        return this.getPropertyValue('text-overline');
    },
    enumerable: true,
    configurable: true
};
