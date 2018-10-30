'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-flow-into', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-flow-into');
    },
    enumerable: true,
    configurable: true
};
