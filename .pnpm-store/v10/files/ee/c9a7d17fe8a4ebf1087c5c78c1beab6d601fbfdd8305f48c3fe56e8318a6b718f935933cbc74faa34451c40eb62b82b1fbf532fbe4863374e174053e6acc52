/** PURE_IMPORTS_START _observable_concat,_util_isScheduler PURE_IMPORTS_END */
import { concat } from '../observable/concat';
import { isScheduler } from '../util/isScheduler';
export function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler(scheduler)) {
        array.pop();
        return function (source) { return concat(array, source, scheduler); };
    }
    else {
        return function (source) { return concat(array, source); };
    }
}
//# sourceMappingURL=startWith.js.map
