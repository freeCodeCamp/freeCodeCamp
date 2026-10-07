/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */
import { mergeMap } from './mergeMap';
export function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return mergeMap(function () { return innerObservable; }, resultSelector, concurrent);
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return mergeMap(function () { return innerObservable; }, concurrent);
}
//# sourceMappingURL=mergeMapTo.js.map
