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