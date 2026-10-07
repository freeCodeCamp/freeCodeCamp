/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */
import { zip as zipStatic } from '../observable/zip';
export function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function zipOperatorFunction(source) {
        return source.lift.call(zipStatic.apply(void 0, [source].concat(observables)));
    };
}
//# sourceMappingURL=zip.js.map
