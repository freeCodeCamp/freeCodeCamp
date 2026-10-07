/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
import { isScheduler } from '../util/isScheduler';
import { fromArray } from './fromArray';
import { scheduleArray } from '../scheduled/scheduleArray';
export function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler(scheduler)) {
        args.pop();
        return scheduleArray(args, scheduler);
    }
    else {
        return fromArray(args);
    }
}
//# sourceMappingURL=of.js.map
