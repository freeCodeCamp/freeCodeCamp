"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipIterableIterators = zipIterableIterators;
function initZippedValues(its) {
    const vs = [];
    for (let index = 0; index !== its.length; ++index) {
        vs.push(its[index].next());
    }
    return vs;
}
function nextZippedValues(its, vs) {
    for (let index = 0; index !== its.length; ++index) {
        vs[index] = its[index].next();
    }
}
function isDoneZippedValues(vs) {
    for (let index = 0; index !== vs.length; ++index) {
        if (vs[index].done) {
            return true;
        }
    }
    return false;
}
function* zipIterableIterators(...its) {
    const vs = initZippedValues(its);
    while (!isDoneZippedValues(vs)) {
        yield vs.map((v) => v.value);
        nextZippedValues(its, vs);
    }
}
