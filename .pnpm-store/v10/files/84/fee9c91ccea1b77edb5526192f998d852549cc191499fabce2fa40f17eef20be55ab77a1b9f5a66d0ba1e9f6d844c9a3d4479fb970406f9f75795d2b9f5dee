import { Subject } from '../Subject';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { ConnectableObservable } from '../observable/ConnectableObservable';
import { OperatorFunction, UnaryFunction, ObservedValueOf, ObservableInput } from '../types';
export declare function multicast<T>(subject: Subject<T>): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
export declare function multicast<T, O extends ObservableInput<any>>(subject: Subject<T>, selector: (shared: Observable<T>) => O): UnaryFunction<Observable<T>, ConnectableObservable<ObservedValueOf<O>>>;
export declare function multicast<T>(subjectFactory: (this: Observable<T>) => Subject<T>): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
export declare function multicast<T, O extends ObservableInput<any>>(SubjectFactory: (this: Observable<T>) => Subject<T>, selector: (shared: Observable<T>) => O): OperatorFunction<T, ObservedValueOf<O>>;
export declare class MulticastOperator<T, R> implements Operator<T, R> {
    private subjectFactory;
    private selector;
    constructor(subjectFactory: () => Subject<T>, selector: (source: Observable<T>) => Observable<R>);
    call(subscriber: Subscriber<R>, source: any): any;
}
