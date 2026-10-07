import { map } from './map';
import { from } from '../observable/from';
import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';
export function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return (source) => source.pipe(exhaustMap((a, i) => from(project(a, i)).pipe(map((b, ii) => resultSelector(a, b, i, ii)))));
    }
    return (source) => source.lift(new ExhaustMapOperator(project));
}
class ExhaustMapOperator {
    constructor(project) {
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
    }
}
class ExhaustMapSubscriber extends SimpleOuterSubscriber {
    constructor(destination, project) {
        super(destination);
        this.project = project;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
    }
    _next(value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    }
    tryNext(value) {
        let result;
        const index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.hasSubscription = true;
        this._innerSub(result);
    }
    _innerSub(result) {
        const innerSubscriber = new SimpleInnerSubscriber(this);
        const destination = this.destination;
        destination.add(innerSubscriber);
        const innerSubscription = innerSubscribe(result, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    }
    _complete() {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(innerValue) {
        this.destination.next(innerValue);
    }
    notifyError(err) {
        this.destination.error(err);
    }
    notifyComplete() {
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=exhaustMap.js.map