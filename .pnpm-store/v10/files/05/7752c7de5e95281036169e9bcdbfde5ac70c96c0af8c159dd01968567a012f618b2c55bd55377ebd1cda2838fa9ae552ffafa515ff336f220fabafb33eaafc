import { a as QuansyncInput, i as QuansyncGeneratorFn, n as QuansyncFn, o as QuansyncInputObject, r as QuansyncGenerator, s as QuansyncOptions, t as QuansyncAwaitableGenerator } from "./types-CSnozp72.js";

//#region src/macro.d.ts

/**
 * This function is equivalent to `quansync` from main entry
 * but accepts a fake argument type of async functions.
 *
 * This requires to be used with the macro transformer `unplugin-quansync`.
 * Do NOT use it directly.
 *
 * @internal
 */
declare const quansync: {
  <Return, Args extends any[] = []>(input: QuansyncInputObject<Return, Args>): QuansyncFn<Return, Args>;
  <Return, Args extends any[] = []>(input: Promise<Return> | QuansyncGeneratorFn<Return, Args> | ((...args: Args) => Return | Promise<Return>), options?: QuansyncOptions | undefined): QuansyncFn<Return, Args>;
};
//#endregion
export { QuansyncAwaitableGenerator, QuansyncFn, QuansyncGenerator, QuansyncGeneratorFn, QuansyncInput, QuansyncInputObject, QuansyncOptions, quansync };