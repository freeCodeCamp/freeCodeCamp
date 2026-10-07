"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectReduceKey = exports.objectMapKey = exports.objectForEachKey = void 0;
function objectForEachKey(obj, callback) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        callback(key);
    }
}
exports.objectForEachKey = objectForEachKey;
function objectMapKey(obj, callback) {
    const values = [];
    objectForEachKey(obj, key => {
        values.push(callback(key));
    });
    return values;
}
exports.objectMapKey = objectMapKey;
function objectReduceKey(obj, callback, initial) {
    let accumulator = initial;
    objectForEachKey(obj, key => {
        accumulator = callback(accumulator, key);
    });
    return accumulator;
}
exports.objectReduceKey = objectReduceKey;
//# sourceMappingURL=objectIterators.js.map