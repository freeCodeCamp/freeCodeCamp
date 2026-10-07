import { Observable } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { TeardownLogic, ObservableInput } from '../types';
import { OuterSubscriber } from '../OuterSubscriber';
export declare function race<A>(arg: [ObservableInput<A>]): Observable<A>;
export declare function race<A, B>(arg: [ObservableInput<A>, ObservableInput<B>]): Observable<A | B>;
export declare function race<A, B, C>(arg: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>]): Observable<A | B | C>;
export declare function race<A, B, C, D>(arg: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>, ObservableInput<D>]): Observable<A | B | C | D>;
export declare function race<A, B, C, D, E>(arg: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>, ObservableInput<D>, ObservableInput<E>]): Observable<A | B | C | D | E>;
export declare function race<T>(arg: ObservableInput<T>[]): Observable<T>;
export declare function race(arg: ObservableInput<any>[]): Observable<{}>;
export declare function race<A>(a: ObservableInput<A>): Observable<A>;
export declare function race<A, B>(a: ObservableInput<A>, b: ObservableInput<B>): Observable<A | B>;
export declare function race<A, B, C>(a: ObservableInput<A>, b: ObservableInput<B>, c: ObservableInput<C>): Observable<A | B | C>;
export declare function race<A, B, C, D>(a: ObservableInput<A>, b: ObservableInput<B>, c: ObservableInput<C>, d: ObservableInput<D>): Observable<A | B | C | D>;
export declare function race<A, B, C, D, E>(a: ObservableInput<A>, b: ObservableInput<B>, c: ObservableInput<C>, d: ObservableInput<D>, e: ObservableInput<E>): Observable<A | B | C | D | E>;
export declare function race<T>(observables: ObservableInput<T>[]): Observable<T>;
export declare function race(observables: ObservableInput<any>[]): Observable<{}>;
export declare function race<T>(...observables: ObservableInput<T>[]): Observable<T>;
export declare function race(...observables: ObservableInput<any>[]): Observable<{}>;
export declare class RaceOperator<T> implements Operator<T, T> {
    call(subscriber: Subscriber<T>, source: any): TeardownLogic;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class RaceSubscriber<T> extends OuterSubscriber<T, T> {
    private hasFirst;
    private observables;
    private subscriptions;
    constructor(destination: Subscriber<T>);
    protected _next(observable: any): void;
    protected _complete(): void;
    notifyNext(_outerValue: T, innerValue: T, outerIndex: number): void;
}
