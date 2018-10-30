'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-backface-visibility', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-backface-visibility');
    },
    enumerable: true,
    configurable: true
};
