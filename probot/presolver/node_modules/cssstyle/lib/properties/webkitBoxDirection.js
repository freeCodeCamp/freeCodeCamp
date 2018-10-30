'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-box-direction', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-box-direction');
    },
    enumerable: true,
    configurable: true
};
