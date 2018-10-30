'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('letter-spacing', v);
    },
    get: function () {
        return this.getPropertyValue('letter-spacing');
    },
    enumerable: true,
    configurable: true
};
