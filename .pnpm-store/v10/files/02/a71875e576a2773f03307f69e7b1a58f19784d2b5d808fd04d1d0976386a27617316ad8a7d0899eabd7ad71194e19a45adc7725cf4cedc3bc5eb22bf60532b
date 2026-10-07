export declare class ValueOrPromise<T> {
    private readonly state;
    constructor(executor: () => T | PromiseLike<T>);
    then<TResult1 = T, TResult2 = never>(onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onRejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | undefined | null): ValueOrPromise<TResult1 | TResult2>;
    catch<TResult = never>(onRejected: ((reason: unknown) => TResult | PromiseLike<TResult>) | undefined | null): ValueOrPromise<TResult>;
    resolve(): T | Promise<T>;
    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(valueOrPromises: readonly [
        ValueOrPromise<T1>,
        ValueOrPromise<T2>,
        ValueOrPromise<T3>,
        ValueOrPromise<T4>,
        ValueOrPromise<T5>,
        ValueOrPromise<T6>,
        ValueOrPromise<T7>,
        ValueOrPromise<T8>,
        ValueOrPromise<T9>,
        ValueOrPromise<T10>
    ]): ValueOrPromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(valueOrPromises: readonly [
        ValueOrPromise<T1>,
        ValueOrPromise<T2>,
        ValueOrPromise<T3>,
        ValueOrPromise<T4>,
        ValueOrPromise<T5>,
        ValueOrPromise<T6>,
        ValueOrPromise<T7>,
        ValueOrPromise<T8>,
        ValueOrPromise<T9>
    ]): ValueOrPromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
    static all<T1, T2, T3, T4, T5, T6, T7, T8>(valueOrPromises: readonly [
        ValueOrPromise<T1>,
        ValueOrPromise<T2>,
        ValueOrPromise<T3>,
        ValueOrPromise<T4>,
        ValueOrPromise<T5>,
        ValueOrPromise<T6>,
        ValueOrPromise<T7>,
        ValueOrPromise<T8>
    ]): ValueOrPromise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
    static all<T1, T2, T3, T4, T5, T6, T7>(valueOrPromises: readonly [
        ValueOrPromise<T1>,
        ValueOrPromise<T2>,
        ValueOrPromise<T3>,
        ValueOrPromise<T4>,
        ValueOrPromise<T5>,
        ValueOrPromise<T6>,
        ValueOrPromise<T7>
    ]): ValueOrPromise<[T1, T2, T3, T4, T5, T6, T7]>;
    static all<T1, T2, T3, T4, T5, T6>(valueOrPromises: readonly [
        ValueOrPromise<T1>,
        ValueOrPromise<T2>,
        ValueOrPromise<T3>,
        ValueOrPromise<T4>,
        ValueOrPromise<T5>,
        ValueOrPromise<T6>
    ]): ValueOrPromise<[T1, T2, T3, T4, T5, T6]>;
    static all<T1, T2, T3, T4, T5>(valueOrPromises: readonly [
        ValueOrPromise<T1>,
        ValueOrPromise<T2>,
        ValueOrPromise<T3>,
        ValueOrPromise<T4>,
        ValueOrPromise<T5>
    ]): ValueOrPromise<[T1, T2, T3, T4, T5]>;
    static all<T1, T2, T3, T4>(valueOrPromises: readonly [
        ValueOrPromise<T1>,
        ValueOrPromise<T2>,
        ValueOrPromise<T3>,
        ValueOrPromise<T4>
    ]): ValueOrPromise<[T1, T2, T3, T4]>;
    static all<T1, T2, T3>(valueOrPromises: readonly [
        ValueOrPromise<T1>,
        ValueOrPromise<T2>,
        ValueOrPromise<T3>
    ]): ValueOrPromise<[T1, T2, T3]>;
    static all<T1, T2>(valueOrPromises: readonly [ValueOrPromise<T1>, ValueOrPromise<T2>]): ValueOrPromise<[T1, T2]>;
    static all<T>(valueOrPromises: ReadonlyArray<ValueOrPromise<T>>): ValueOrPromise<Array<T>>;
}
