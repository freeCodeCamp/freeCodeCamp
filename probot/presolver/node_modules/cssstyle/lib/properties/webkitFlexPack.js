'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-flex-pack', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-flex-pack');
    },
    enumerable: true,
    configurable: true
};
