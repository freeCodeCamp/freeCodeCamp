import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';
export function buffer(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator(closingNotifier));
    };
}
class BufferOperator {
    constructor(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    call(subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    }
}
class BufferSubscriber extends SimpleOuterSubscriber {
    constructor(destination, closingNotifier) {
        super(destination);
        this.buffer = [];
        this.add(innerSubscribe(closingNotifier, new SimpleInnerSubscriber(this)));
    }
    _next(value) {
        this.buffer.push(value);
    }
    notifyNext() {
        const buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    }
}
//# sourceMappingURL=buffer.js.map