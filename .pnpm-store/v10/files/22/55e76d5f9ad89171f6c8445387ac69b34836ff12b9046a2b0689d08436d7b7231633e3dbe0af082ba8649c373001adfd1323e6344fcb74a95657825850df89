/** PURE_IMPORTS_START _observable_merge PURE_IMPORTS_END */
import { merge as mergeStatic } from '../observable/merge';
export function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function (source) { return source.lift.call(mergeStatic.apply(void 0, [source].concat(observables))); };
}
//# sourceMappingURL=merge.js.map
