import { OuterSubscriber } from '../OuterSubscriber';
import { subscribeToResult } from '../util/subscribeToResult';
export function withLatestFrom(...args) {
    return (source) => {
        let project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        const observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
class WithLatestFromOperator {
    constructor(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    }
}
class WithLatestFromSubscriber extends OuterSubscriber {
    constructor(destination, observables, project) {
        super(destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        const len = observables.length;
        this.values = new Array(len);
        for (let i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (let i = 0; i < len; i++) {
            let observable = observables[i];
            this.add(subscribeToResult(this, observable, undefined, i));
        }
    }
    notifyNext(_outerValue, innerValue, outerIndex) {
        this.values[outerIndex] = innerValue;
        const toRespond = this.toRespond;
        if (toRespond.length > 0) {
            const found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    }
    notifyComplete() {
    }
    _next(value) {
        if (this.toRespond.length === 0) {
            const args = [value, ...this.values];
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    }
    _tryProject(args) {
        let result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
//# sourceMappingURL=withLatestFrom.js.map