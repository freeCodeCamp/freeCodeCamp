import { connectableObservableDescriptor } from '../observable/ConnectableObservable';
export function multicast(subjectOrSubjectFactory, selector) {
    return function multicastOperatorFunction(source) {
        let subjectFactory;
        if (typeof subjectOrSubjectFactory === 'function') {
            subjectFactory = subjectOrSubjectFactory;
        }
        else {
            subjectFactory = function subjectFactory() {
                return subjectOrSubjectFactory;
            };
        }
        if (typeof selector === 'function') {
            return source.lift(new MulticastOperator(subjectFactory, selector));
        }
        const connectable = Object.create(source, connectableObservableDescriptor);
        connectable.source = source;
        connectable.subjectFactory = subjectFactory;
        return connectable;
    };
}
export class MulticastOperator {
    constructor(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    call(subscriber, source) {
        const { selector } = this;
        const subject = this.subjectFactory();
        const subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    }
}
//# sourceMappingURL=multicast.js.map