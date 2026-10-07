import { Observable } from '../Observable';
import { Subscription } from '../Subscription';
export function scheduleArray(input, scheduler) {
    return new Observable(subscriber => {
        const sub = new Subscription();
        let i = 0;
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