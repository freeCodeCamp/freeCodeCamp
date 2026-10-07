"use strict";

var _object_without_properties_loose = require("./_object_without_properties_loose.cjs");

function _object_without_properties(source, excluded) {
    if (source == null) return {};

    var target = {}, sourceKeys, key, i;
    if (typeof Reflect !== "undefined" && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(source);
        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }

        return target;
    }

    target = _object_without_properties_loose._(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }

    return target;
}

exports._ = _object_without_properties;
