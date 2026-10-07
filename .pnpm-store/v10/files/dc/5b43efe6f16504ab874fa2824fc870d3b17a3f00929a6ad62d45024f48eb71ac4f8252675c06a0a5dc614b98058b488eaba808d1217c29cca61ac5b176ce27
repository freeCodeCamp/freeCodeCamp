import { Observable } from '../Observable';
import { Subscription } from '../Subscription';
import { observable as Symbol_observable } from '../symbol/observable';
export function scheduleObservable(input, scheduler) {
    return new Observable(subscriber => {
        const sub = new Subscription();
        sub.add(scheduler.schedule(() => {
            const observable = input[Symbol_observable]();
            sub.add(observable.subscribe({
                next(value) { sub.add(scheduler.schedule(() => subscriber.next(value))); },
                error(err) { sub.add(scheduler.schedule(() => subscriber.error(err))); },
                complete() { sub.add(scheduler.schedule(() => subscriber.complete())); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map