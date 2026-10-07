/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
import { Observable } from '../Observable';
import { Subscription } from '../Subscription';
export function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleArray.js.map
