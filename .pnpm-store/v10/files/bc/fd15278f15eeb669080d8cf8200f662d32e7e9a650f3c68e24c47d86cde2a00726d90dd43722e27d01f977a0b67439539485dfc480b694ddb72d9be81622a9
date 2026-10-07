"use strict";

exports._ = exports._defaults = _defaults;
function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);

        if (value && value.configurable && obj[key] === undefined) Object.defineProperty(obj, key, value);
    }

    return obj;
}
