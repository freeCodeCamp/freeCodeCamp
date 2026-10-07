"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectForEachKey = objectForEachKey;
exports.objectMapKey = objectMapKey;
exports.objectReduceKey = objectReduceKey;
function objectForEachKey(obj, callback) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        callback(key);
    }
}
function objectMapKey(obj, callback) {
    const values = [];
    objectForEachKey(obj, key => {
        values.push(callback(key));
    });
    return values;
}
function objectReduceKey(obj, callback, initial) {
    let accumulator = initial;
    objectForEachKey(obj, key => {
        accumulator = callback(accumulator, key);
    });
    return accumulator;
}
//# sourceMappingURL=objectIterators.js.map