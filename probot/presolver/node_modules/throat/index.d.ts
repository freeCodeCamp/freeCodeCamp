declare function throat<TResult, TFn extends (...args: Array<any>) => Promise<TResult>>(size: number, fn: TFn): TFn;
declare function throat<TResult, TFn extends (...args: Array<any>) => Promise<TResult>>(fn: TFn, size: number): TFn;
declare function throat(size: number): <TResult>(fn: () => Promise<TResult>) => Promise<TResult>;

export = throat;