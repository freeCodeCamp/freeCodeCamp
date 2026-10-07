import { LazyArbitrary } from './_internals/LazyArbitrary.js';
import { safeHasOwnProperty } from '../utils/globals.js';
const safeObjectCreate = Object.create;
export function letrec(builder) {
    const lazyArbs = safeObjectCreate(null);
    const tie = (key) => {
        if (!safeHasOwnProperty(lazyArbs, key)) {
            lazyArbs[key] = new LazyArbitrary(String(key));
        }
        return lazyArbs[key];
    };
    const strictArbs = builder(tie);
    for (const key in strictArbs) {
        if (!safeHasOwnProperty(strictArbs, key)) {
            continue;
        }
        const lazyAtKey = lazyArbs[key];
        const lazyArb = lazyAtKey !== undefined ? lazyAtKey : new LazyArbitrary(key);
        lazyArb.underlying = strictArbs[key];
        lazyArbs[key] = lazyArb;
    }
    return strictArbs;
}
