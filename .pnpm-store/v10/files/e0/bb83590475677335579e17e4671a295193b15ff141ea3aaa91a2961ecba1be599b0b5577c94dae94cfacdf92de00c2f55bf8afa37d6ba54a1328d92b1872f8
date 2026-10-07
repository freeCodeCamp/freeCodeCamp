/** PURE_IMPORTS_START _Observable,_util_subscribeToIterable,_scheduled_scheduleIterable PURE_IMPORTS_END */
import { Observable } from '../Observable';
import { subscribeToIterable } from '../util/subscribeToIterable';
import { scheduleIterable } from '../scheduled/scheduleIterable';
export function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new Observable(subscribeToIterable(input));
    }
    else {
        return scheduleIterable(input, scheduler);
    }
}
//# sourceMappingURL=fromIterable.js.map
