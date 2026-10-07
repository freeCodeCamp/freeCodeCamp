import { a as QuansyncInput, i as QuansyncGeneratorFn, n as QuansyncFn, o as QuansyncInputObject, r as QuansyncGenerator, s as QuansyncOptions, t as QuansyncAwaitableGenerator } from "./types-CSnozp72.js";

//#region src/index.d.ts
declare const GET_IS_ASYNC: unique symbol;
declare class QuansyncError extends Error {
  constructor(message?: string);
}
/**
 * Creates a new Quansync function, a "superposition" between async and sync.
 */
declare function quansync<Return, Args extends any[] = []>(input: QuansyncInputObject<Return, Args>): QuansyncFn<Return, Args>;
declare function quansync<Return, Args extends any[] = []>(input: QuansyncGeneratorFn<Return, Args> | Promise<Return>, options?: QuansyncOptions): QuansyncFn<Return, Args>;
/**
 * Converts a promise to a Quansync generator.
 */
declare function toGenerator<T>(promise: Promise<T> | QuansyncGenerator<T> | T): QuansyncGenerator<T>;
/**
 * @returns `true` if the current context is async, `false` otherwise.
 */
declare const getIsAsync: QuansyncFn<boolean, []>;
//#endregion
export { GET_IS_ASYNC, QuansyncAwaitableGenerator, QuansyncError, QuansyncFn, QuansyncGenerator, QuansyncGeneratorFn, QuansyncInput, QuansyncInputObject, QuansyncOptions, getIsAsync, quansync, toGenerator };