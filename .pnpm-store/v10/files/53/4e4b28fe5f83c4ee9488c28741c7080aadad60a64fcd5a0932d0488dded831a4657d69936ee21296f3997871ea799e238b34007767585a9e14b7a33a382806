declare const SYMBOL_STATE: unique symbol;

interface GetState {
    <A extends any[], R>(spy: SpyInternalImpl<A, R>): SpyInternalImplState<A, R>;
    <A extends any[], R>(spy: SpyInternal<A, R>): SpyInternalState<A, R>;
}
declare let spies: Set<SpyImpl<any[], any>>;
declare let getInternalState: GetState;
type ReturnError = ['error', any];
type ReturnOk<R> = ['ok', R];
type ResultFn<R> = ReturnError | ReturnOk<R>;
interface SpyInternal<A extends any[] = any[], R = any> {
    (this: any, ...args: A): R;
    [SYMBOL_STATE]: SpyInternalState<A, R>;
}
interface SpyInternalImpl<A extends any[] = any[], R = any> extends SpyInternal<A, R> {
    [SYMBOL_STATE]: SpyInternalImplState<A, R>;
}
interface SpyInternalState<A extends any[] = any[], R = any> {
    called: boolean;
    callCount: number;
    calls: A[];
    results: ResultFn<R>[];
    resolves: R extends PromiseLike<infer V> ? ResultFn<V>[] : never;
    reset(): void;
    impl: ((...args: A) => R) | undefined;
    next: ResultFn<R>[];
}
interface SpyInternalImplState<A extends any[] = any[], R = any> extends SpyInternalState<A, R> {
    getOriginal(): (...args: A) => R;
    willCall(cb: (...args: A) => R): this;
    restore(): void;
}
interface Spy<A extends any[] = any[], R = any> extends SpyInternalState<A, R> {
    (this: any, ...args: A): R;
    returns: R[];
    length: number;
    nextError(error: any): this;
    nextResult(result: R): this;
}
interface SpyImpl<A extends any[] = any[], R = any> extends Spy<A, R> {
    getOriginal(): (...args: A) => R;
    willCall(cb: (...args: A) => R): this;
    restore(): void;
}
declare function createInternalSpy<A extends any[], R>(cb?: ((...args: A) => R) | {
    new (...args: A): R;
}): SpyInternal<A, R>;

interface SpyFn<A extends any[] = any[], R = any> extends Spy<A, R> {
    new (...args: A): R extends void ? any : R;
    (...args: A): R;
}
declare function spy<A extends any[], R>(cb?: ((...args: A) => R) | {
    new (...args: A): R;
}): SpyFn<A, R>;

type Procedure = (...args: any[]) => any;
type Methods<T> = {
    [K in keyof T]: T[K] extends Procedure ? K : never;
}[keyof T];
type Getters<T> = {
    [K in keyof T]: T[K] extends Procedure ? never : K;
}[keyof T];
type Constructors<T> = {
    [K in keyof T]: T[K] extends new (...args: any[]) => any ? K : never;
}[keyof T];
declare function internalSpyOn<T, K extends string & keyof T>(obj: T, methodName: K | {
    getter: K;
} | {
    setter: K;
}, mock?: Procedure): SpyInternalImpl<any[], any>;
declare function spyOn<T, S extends Getters<Required<T>>>(obj: T, methodName: {
    setter: S;
}, mock?: (arg: T[S]) => void): SpyImpl<[T[S]], void>;
declare function spyOn<T, G extends Getters<Required<T>>>(obj: T, methodName: {
    getter: G;
}, mock?: () => T[G]): SpyImpl<[], T[G]>;
declare function spyOn<T, M extends Constructors<Required<T>>>(object: T, method: M): Required<T>[M] extends new (...args: infer A) => infer R ? SpyImpl<A, R> : never;
declare function spyOn<T, M extends Methods<Required<T>>>(obj: T, methodName: M, mock?: T[M]): Required<T>[M] extends (...args: infer A) => infer R ? SpyImpl<A, R> : never;

declare function restoreAll(): void;

export { type Spy, type SpyFn, type SpyImpl, type SpyInternal, type SpyInternalImpl, createInternalSpy, getInternalState, internalSpyOn, restoreAll, spies, spy, spyOn };
