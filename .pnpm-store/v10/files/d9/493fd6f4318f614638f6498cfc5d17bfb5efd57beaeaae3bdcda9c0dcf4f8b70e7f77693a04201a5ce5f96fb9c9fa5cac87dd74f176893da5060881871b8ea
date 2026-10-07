interface PendingPromise<TValue> extends Promise<TValue> {
    status: 'pending';
}
interface FulfilledPromise<TValue> extends Promise<TValue> {
    status: 'fulfilled';
    value: TValue;
}
interface RejectedPromise<TValue> extends Promise<TValue> {
    status: 'rejected';
    reason: unknown;
}
export type PromiseWithState<TValue> = PendingPromise<TValue> | FulfilledPromise<TValue> | RejectedPromise<TValue>;
export declare function wrapPromiseWithState<TValue>(promise: Promise<TValue>): PromiseWithState<TValue>;
export {};
