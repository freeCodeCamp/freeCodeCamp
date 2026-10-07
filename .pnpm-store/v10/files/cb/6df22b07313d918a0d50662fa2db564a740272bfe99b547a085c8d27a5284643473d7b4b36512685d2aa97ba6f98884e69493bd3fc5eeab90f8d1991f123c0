/**
 * Bind the callback and only invoke the callback once regardless how many times `BindOnceFuture.call` is invoked.
 */
export declare class BindOnceFuture<R, This = unknown, T extends (this: This, ...args: unknown[]) => R = () => R> {
    private _isCalled;
    private _deferred;
    private _callback;
    private _that;
    constructor(callback: T, that: This);
    get isCalled(): boolean;
    get promise(): Promise<R>;
    call(...args: Parameters<T>): Promise<R>;
}
//# sourceMappingURL=callback.d.ts.map