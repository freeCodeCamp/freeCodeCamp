'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-flex-direction', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-flex-direction');
    },
    enumerable: true,
    configurable: true
};
