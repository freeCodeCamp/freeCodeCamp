import { Subscriber } from '../Subscriber';
export function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return source.lift(new IgnoreElementsOperator());
    };
}
class IgnoreElementsOperator {
    call(subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    }
}
class IgnoreElementsSubscriber extends Subscriber {
    _next(unused) {
    }
}
//# sourceMappingURL=ignoreElements.js.map