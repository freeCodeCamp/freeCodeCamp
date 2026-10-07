//#region src/create-deferred-executor.d.ts
type PromiseState = 'pending' | 'fulfilled' | 'rejected';
type Executor<Value> = ConstructorParameters<typeof Promise<Value>>[0];
type ResolveFunction<Value> = Parameters<Executor<Value>>[0];
type RejectFunction<Reason> = Parameters<Executor<Reason>>[1];
type DeferredPromiseExecutor<Input = never, Output = Input> = {
  (resolve?: ResolveFunction<Input>, reject?: RejectFunction<any>): void;
  resolve: ResolveFunction<Input>;
  reject: RejectFunction<any>;
  result?: Output;
  state: PromiseState;
  rejectionReason?: unknown;
};
declare function createDeferredExecutor<Input = never, Output = Input>(): DeferredPromiseExecutor<Input, Output>;
//#endregion
//#region src/deferred-promise.d.ts
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
//#endregion
export { DeferredPromise, type DeferredPromiseExecutor, type Executor, type PromiseState, type RejectFunction, type ResolveFunction, createDeferredExecutor };
//# sourceMappingURL=index.d.mts.map