import { Observable } from '../Observable';
import { ConnectableObservable } from '../observable/ConnectableObservable';
import { MonoTypeOperatorFunction, OperatorFunction, UnaryFunction, ObservableInput, ObservedValueOf } from '../types';
export declare function publish<T>(): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
export declare function publish<T, O extends ObservableInput<any>>(selector: (shared: Observable<T>) => O): OperatorFunction<T, ObservedValueOf<O>>;
export declare function publish<T>(selector: MonoTypeOperatorFunction<T>): MonoTypeOperatorFunction<T>;
