declare type PromiseState = 'pending' | 'fulfilled' | 'rejected';
declare type Executor<Value> = ConstructorParameters<typeof Promise<Value>>[0];
declare type ResolveFunction<Value> = Parameters<Executor<Value>>[0];
declare type RejectFunction<Reason> = Parameters<Executor<Reason>>[1];
declare type DeferredPromiseExecutor<Input = never, Output = Input> = {
    (resolve?: ResolveFunction<Input>, reject?: RejectFunction<any>): void;
    resolve: ResolveFunction<Input>;
    reject: RejectFunction<any>;
    result?: Output;
    state: PromiseState;
    rejectionReason?: unknown;
};
declare function createDeferredExecutor<Input = never, Output = Input>(): DeferredPromiseExecutor<Input, Output>;

declare class DeferredPromise<Input, Output = Input> extends Promise<Input> {
    #private;
    resolve: ResolveFunction<Output>;
    reject: RejectFunction<Output>;
    constructor(executor?: Executor<Input> | null);
    get state(): PromiseState;
    get rejectionReason(): unknown;
    then<ThenResult = Input, CatchResult = never>(onFulfilled?: (value: Input) => ThenResult | PromiseLike<ThenResult>, onRejected?: (reason: any) => CatchResult | PromiseLike<CatchResult>): DeferredPromise<ThenResult | CatchResult, Output>;
    catch<CatchResult = never>(onRejected?: (reason: any) => CatchResult | PromiseLike<CatchResult>): DeferredPromise<Input | CatchResult, Output>;
    finally(onfinally?: () => void | Promise<any>): DeferredPromise<Input, Output>;
}

export { DeferredPromise, DeferredPromiseExecutor, Executor, PromiseState, RejectFunction, ResolveFunction, createDeferredExecutor };
