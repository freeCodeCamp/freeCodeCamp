'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-animation-play-state', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-animation-play-state');
    },
    enumerable: true,
    configurable: true
};
