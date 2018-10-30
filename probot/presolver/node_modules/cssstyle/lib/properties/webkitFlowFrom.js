'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-flow-from', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-flow-from');
    },
    enumerable: true,
    configurable: true
};
