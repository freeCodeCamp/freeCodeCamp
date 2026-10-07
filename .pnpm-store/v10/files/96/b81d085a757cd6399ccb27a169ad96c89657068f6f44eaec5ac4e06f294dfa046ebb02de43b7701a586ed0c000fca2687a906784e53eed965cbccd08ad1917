import { MaybePromise } from './executor.cjs';
export declare function isIterableObject(value: unknown): value is Iterable<unknown>;
export declare function isObjectLike(value: unknown): value is {
    [key: string]: unknown;
};
export declare function isPromise<T>(value: unknown): value is Promise<T>;
export declare function promiseReduce<T, U>(values: Iterable<T>, callbackFn: (accumulator: U, currentValue: T) => MaybePromise<U>, initialValue: MaybePromise<U>): MaybePromise<U>;
export declare function hasOwnProperty(obj: unknown, prop: string): boolean;
