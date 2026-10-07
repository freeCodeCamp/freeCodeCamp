import { Subscriber } from '../Subscriber';
export function skip(count) {
    return (source) => source.lift(new SkipOperator(count));
}
class SkipOperator {
    constructor(total) {
        this.total = total;
    }
    call(subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    }
}
class SkipSubscriber extends Subscriber {
    constructor(destination, total) {
        super(destination);
        this.total = total;
        this.count = 0;
    }
    _next(x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    }
}
//# sourceMappingURL=skip.js.map