import { SubscribeOnObservable } from '../observable/SubscribeOnObservable';
export function subscribeOn(scheduler, delay = 0) {
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
class SubscribeOnOperator {
    constructor(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    call(subscriber, source) {
        return new SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
    }
}
//# sourceMappingURL=subscribeOn.js.map