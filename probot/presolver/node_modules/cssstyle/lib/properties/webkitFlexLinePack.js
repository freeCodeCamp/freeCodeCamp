'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-flex-line-pack', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-flex-line-pack');
    },
    enumerable: true,
    configurable: true
};
