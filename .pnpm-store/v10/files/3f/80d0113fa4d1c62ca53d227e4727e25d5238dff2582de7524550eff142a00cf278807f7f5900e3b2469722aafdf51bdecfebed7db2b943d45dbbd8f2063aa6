'use strict';

// We aren't using the native `Array.prototype.findIndex` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `findIndex` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.findIndex` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findIndex", {
    enumerable: true,
    get: function() {
        return findIndex;
    }
});
function findIndex(array, comparator) {
    if (!Array.isArray(array)) {
        return -1;
    }
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) {
            return i;
        }
    }
    return -1;
}
