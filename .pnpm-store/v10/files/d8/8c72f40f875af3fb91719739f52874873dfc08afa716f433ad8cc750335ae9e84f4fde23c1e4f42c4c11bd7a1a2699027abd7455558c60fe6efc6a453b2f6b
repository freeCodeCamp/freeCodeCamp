'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "find", {
    enumerable: true,
    get: function() {
        return find;
    }
});
function find(array, predicate) {
    for(var index = 0; index < array.length; index++){
        var item = array[index];
        if (predicate(item, index, array)) {
            return item;
        }
    }
    return undefined;
}
