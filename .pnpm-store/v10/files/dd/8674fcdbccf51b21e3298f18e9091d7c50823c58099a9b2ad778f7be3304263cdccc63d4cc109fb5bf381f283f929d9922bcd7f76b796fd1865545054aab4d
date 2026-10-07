import { Observable } from '../Observable';
import { Subscription } from '../Subscription';
import { iterator as Symbol_iterator } from '../symbol/iterator';
export function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable(subscriber => {
        const sub = new Subscription();
        let iterator;
        sub.add(() => {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(() => {
            iterator = input[Symbol_iterator]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                let value;
                let done;
                try {
                    const result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleIterable.js.map