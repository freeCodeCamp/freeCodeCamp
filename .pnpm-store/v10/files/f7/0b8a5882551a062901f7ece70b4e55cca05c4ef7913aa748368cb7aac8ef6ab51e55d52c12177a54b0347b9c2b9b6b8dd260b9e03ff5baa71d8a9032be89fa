'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getPropertyByPath", {
    enumerable: true,
    get: function() {
        return getPropertyByPath;
    }
});
function getPropertyByPath(object, path) {
    var parts = Array.isArray(path) ? path : path.split('.');
    return parts.reduce(function(current, key) {
        return current && current[key];
    }, object);
}
