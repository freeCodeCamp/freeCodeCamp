'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "omit", {
    enumerable: true,
    get: function() {
        return omit;
    }
});
function omit(source, excluded) {
    if (source === null || source === undefined) {
        return source;
    }
    return Object.keys(source).reduce(function(target, key) {
        if (excluded.indexOf(key) >= 0) {
            return target;
        }
        var validKey = key;
        target[validKey] = source[validKey];
        return target;
    }, {});
}
