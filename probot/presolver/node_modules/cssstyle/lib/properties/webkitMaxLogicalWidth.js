'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-max-logical-width', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-max-logical-width');
    },
    enumerable: true,
    configurable: true
};
