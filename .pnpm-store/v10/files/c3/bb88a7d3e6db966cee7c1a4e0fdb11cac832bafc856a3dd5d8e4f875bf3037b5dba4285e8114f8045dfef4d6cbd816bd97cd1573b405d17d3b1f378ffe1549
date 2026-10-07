/** PURE_IMPORTS_START _observable_concat PURE_IMPORTS_END */
import { concat as concatStatic } from '../observable/concat';
export function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function (source) { return source.lift.call(concatStatic.apply(void 0, [source].concat(observables))); };
}
//# sourceMappingURL=concat.js.map
