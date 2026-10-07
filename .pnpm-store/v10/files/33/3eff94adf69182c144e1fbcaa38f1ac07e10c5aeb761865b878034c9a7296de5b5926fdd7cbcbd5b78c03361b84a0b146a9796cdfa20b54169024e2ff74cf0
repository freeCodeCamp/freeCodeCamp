/** PURE_IMPORTS_START _util_isArray,_observable_combineLatest,_observable_from PURE_IMPORTS_END */
import { isArray } from '../util/isArray';
import { CombineLatestOperator } from '../observable/combineLatest';
import { from } from '../observable/from';
var none = {};
export function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    if (observables.length === 1 && isArray(observables[0])) {
        observables = observables[0].slice();
    }
    return function (source) { return source.lift.call(from([source].concat(observables)), new CombineLatestOperator(project)); };
}
//# sourceMappingURL=combineLatest.js.map
