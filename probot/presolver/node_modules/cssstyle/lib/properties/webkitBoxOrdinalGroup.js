'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-box-ordinal-group', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-box-ordinal-group');
    },
    enumerable: true,
    configurable: true
};
