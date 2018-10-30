'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-logical-width', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-logical-width');
    },
    enumerable: true,
    configurable: true
};
