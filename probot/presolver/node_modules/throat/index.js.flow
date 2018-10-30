// @flow

declare function throat<TResult, TFn: (...args: Array<any>) => Promise<TResult>>(size: number, fn: TFn): TFn;
declare function throat<TResult, TFn: (...args: Array<any>) => Promise<TResult>>(fn: TFn, size: number): TFn;
declare function throat(size: number): <TResult>(fn: () => Promise<TResult>) => Promise<TResult>;

module.exports = throat;
