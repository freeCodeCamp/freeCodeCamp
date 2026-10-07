/** PURE_IMPORTS_START _util_isArray,_observable_race PURE_IMPORTS_END */
import { isArray } from '../util/isArray';
import { race as raceStatic } from '../observable/race';
export function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function raceOperatorFunction(source) {
        if (observables.length === 1 && isArray(observables[0])) {
            observables = observables[0];
        }
        return source.lift.call(raceStatic.apply(void 0, [source].concat(observables)));
    };
}
//# sourceMappingURL=race.js.map
