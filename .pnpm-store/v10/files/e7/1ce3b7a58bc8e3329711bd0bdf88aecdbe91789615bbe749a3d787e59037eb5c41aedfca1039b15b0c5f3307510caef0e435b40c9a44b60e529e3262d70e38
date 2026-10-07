"use strict";

var _define_property = require("./_define_property.cjs");

function _object_spread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                })
            );
        }

        ownKeys.forEach(function(key) {
            _define_property._(target, key, source[key]);
        });
    }

    return target;
}
exports._ = _object_spread;
