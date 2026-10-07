import { map } from './map';
import { from } from '../observable/from';
import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';
export function switchMap(project, resultSelector) {
    if (typeof resultSelector === 'function') {
        return (source) => source.pipe(switchMap((a, i) => from(project(a, i)).pipe(map((b, ii) => resultSelector(a, b, i, ii)))));
    }
    return (source) => source.lift(new SwitchMapOperator(project));
}
class SwitchMapOperator {
    constructor(project) {
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
    }
}
class SwitchMapSubscriber extends SimpleOuterSubscriber {
    constructor(destination, project) {
        super(destination);
        this.project = project;
        this.index = 0;
    }
    _next(value) {
        let result;
        const index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result);
    }
    _innerSub(result) {
        const innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        const innerSubscriber = new SimpleInnerSubscriber(this);
        const destination = this.destination;
        destination.add(innerSubscriber);
        this.innerSubscription = innerSubscribe(result, innerSubscriber);
        if (this.innerSubscription !== innerSubscriber) {
            destination.add(this.innerSubscription);
        }
    }
    _complete() {
        const { innerSubscription } = this;
        if (!innerSubscription || innerSubscription.closed) {
            super._complete();
        }
        this.unsubscribe();
    }
    _unsubscribe() {
        this.innerSubscription = undefined;
    }
    notifyComplete() {
        this.innerSubscription = undefined;
        if (this.isStopped) {
            super._complete();
        }
    }
    notifyNext(innerValue) {
        this.destination.next(innerValue);
    }
}
//# sourceMappingURL=switchMap.js.map