/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
import { Observable } from '../Observable';
import { subscribeToArray } from '../util/subscribeToArray';
import { scheduleArray } from '../scheduled/scheduleArray';
export function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable(subscribeToArray(input));
    }
    else {
        return scheduleArray(input, scheduler);
    }
}
//# sourceMappingURL=fromArray.js.map
