/** PURE_IMPORTS_START _Observable,_util_subscribeToPromise,_scheduled_schedulePromise PURE_IMPORTS_END */
import { Observable } from '../Observable';
import { subscribeToPromise } from '../util/subscribeToPromise';
import { schedulePromise } from '../scheduled/schedulePromise';
export function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new Observable(subscribeToPromise(input));
    }
    else {
        return schedulePromise(input, scheduler);
    }
}
//# sourceMappingURL=fromPromise.js.map
