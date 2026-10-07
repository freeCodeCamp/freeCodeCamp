import { EmptyError } from '../util/EmptyError';
import { Subscriber } from '../Subscriber';
export function throwIfEmpty(errorFactory = defaultErrorFactory) {
    return (source) => {
        return source.lift(new ThrowIfEmptyOperator(errorFactory));
    };
}
class ThrowIfEmptyOperator {
    constructor(errorFactory) {
        this.errorFactory = errorFactory;
    }
    call(subscriber, source) {
        return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
    }
}
class ThrowIfEmptySubscriber extends Subscriber {
    constructor(destination, errorFactory) {
        super(destination);
        this.errorFactory = errorFactory;
        this.hasValue = false;
    }
    _next(value) {
        this.hasValue = true;
        this.destination.next(value);
    }
    _complete() {
        if (!this.hasValue) {
            let err;
            try {
                err = this.errorFactory();
            }
            catch (e) {
                err = e;
            }
            this.destination.error(err);
        }
        else {
            return this.destination.complete();
        }
    }
}
function defaultErrorFactory() {
    return new EmptyError();
}
//# sourceMappingURL=throwIfEmpty.js.map