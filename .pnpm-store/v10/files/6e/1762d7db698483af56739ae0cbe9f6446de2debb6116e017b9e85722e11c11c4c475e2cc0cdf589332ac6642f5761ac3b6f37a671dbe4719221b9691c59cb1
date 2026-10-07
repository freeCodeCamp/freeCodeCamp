"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.letrec = letrec;
const LazyArbitrary_1 = require("./_internals/LazyArbitrary");
const globals_1 = require("../utils/globals");
const safeObjectCreate = Object.create;
function letrec(builder) {
    const lazyArbs = safeObjectCreate(null);
    const tie = (key) => {
        if (!(0, globals_1.safeHasOwnProperty)(lazyArbs, key)) {
            lazyArbs[key] = new LazyArbitrary_1.LazyArbitrary(String(key));
        }
        return lazyArbs[key];
    };
    const strictArbs = builder(tie);
    for (const key in strictArbs) {
        if (!(0, globals_1.safeHasOwnProperty)(strictArbs, key)) {
            continue;
        }
        const lazyAtKey = lazyArbs[key];
        const lazyArb = lazyAtKey !== undefined ? lazyAtKey : new LazyArbitrary_1.LazyArbitrary(key);
        lazyArb.underlying = strictArbs[key];
        lazyArbs[key] = lazyArb;
    }
    return strictArbs;
}
