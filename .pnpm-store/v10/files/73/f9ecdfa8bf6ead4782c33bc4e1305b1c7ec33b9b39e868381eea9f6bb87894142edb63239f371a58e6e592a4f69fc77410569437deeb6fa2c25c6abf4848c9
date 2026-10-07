//#region src/types.d.ts
interface QuansyncOptions {
  onYield?: (value: any, isAsync: boolean) => any;
}
interface QuansyncInputObject<Return, Args extends any[]> extends QuansyncOptions {
  name?: string;
  sync: (...args: Args) => Return;
  async: (...args: Args) => Promise<Return>;
}
type QuansyncGeneratorFn<Return, Args extends any[]> = ((...args: Args) => QuansyncGenerator<Return>);
type QuansyncInput<Return, Args extends any[]> = QuansyncInputObject<Return, Args> | QuansyncGeneratorFn<Return, Args>;
type QuansyncGenerator<Return = any, Yield = unknown> = Generator<Yield, Return, Awaited<Yield>> & {
  __quansync?: true;
};
type QuansyncAwaitableGenerator<Return = any, Yield = unknown> = QuansyncGenerator<Return, Yield> & PromiseLike<Return>;
/**
 * "Superposition" function that can be consumed in both sync and async contexts.
 */
type QuansyncFn<Return = any, Args extends any[] = []> = ((...args: Args) => QuansyncAwaitableGenerator<Return>) & {
  /**
   * **Warning**: The `async` and `sync` methods will be lost after invoked.
   */
  bind: <T, A extends any[], B extends any[]>(this: (this: T, ...args: [...A, ...B]) => QuansyncAwaitableGenerator<Return>, thisArg: T, ...args: A) => ((...args: B) => QuansyncAwaitableGenerator<Return>);
  sync: (...args: Args) => Return;
  async: (...args: Args) => Promise<Return>;
};
//#endregion
export { QuansyncInput as a, QuansyncGeneratorFn as i, QuansyncFn as n, QuansyncInputObject as o, QuansyncGenerator as r, QuansyncOptions as s, QuansyncAwaitableGenerator as t };