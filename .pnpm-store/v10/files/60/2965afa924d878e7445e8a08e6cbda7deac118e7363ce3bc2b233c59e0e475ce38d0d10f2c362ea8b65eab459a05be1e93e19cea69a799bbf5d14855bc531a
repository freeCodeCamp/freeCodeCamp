/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */
import { Observable } from '../Observable';
import { isScheduler } from '../util/isScheduler';
import { mergeAll } from '../operators/mergeAll';
import { fromArray } from './fromArray';
export function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
        return observables[0];
    }
    return mergeAll(concurrent)(fromArray(observables, scheduler));
}
//# sourceMappingURL=merge.js.map
