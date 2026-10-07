import { Nullable, Arrayable } from './types.js';

interface CloneOptions {
	forceWritable?: boolean;
}
interface ErrorOptions {
	message?: string;
	stackTraceLimit?: number;
}
/**
* Get original stacktrace without source map support the most performant way.
* - Create only 1 stack frame.
* - Rewrite prepareStackTrace to bypass "support-stack-trace" (usually takes ~250ms).
*/
declare function createSimpleStackTrace(options?: ErrorOptions): string;
declare function notNullish<T>(v: T | null | undefined): v is NonNullable<T>;
declare function assertTypes(value: unknown, name: string, types: string[]): void;
declare function isPrimitive(value: unknown): boolean;
declare function slash(path: string): string;
// convert RegExp.toString to RegExp
declare function parseRegexp(input: string): RegExp;
declare function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T>;
declare function isObject(item: unknown): boolean;
declare function getType(value: unknown): string;
declare function getOwnProperties(obj: any): (string | symbol)[];
declare function deepClone<T>(val: T, options?: CloneOptions): T;
declare function clone<T>(val: T, seen: WeakMap<any, any>, options?: CloneOptions): T;
declare function noop(): void;
declare function objectAttr(source: any, path: string, defaultValue?: undefined): any;
type DeferPromise<T> = Promise<T> & {
	resolve: (value: T | PromiseLike<T>) => void
	reject: (reason?: any) => void
};
declare function createDefer<T>(): DeferPromise<T>;
/**
* If code starts with a function call, will return its last index, respecting arguments.
* This will return 25 - last ending character of toMatch ")"
* Also works with callbacks
* ```
* toMatch({ test: '123' });
* toBeAliased('123')
* ```
*/
declare function getCallLastIndex(code: string): number | null;
declare function isNegativeNaN(val: number): boolean;
/**
* Deep merge :P
*
* Will merge objects only if they are plain
*
* Do not merge types - it is very expensive and usually it's better to case a type here
*/
declare function deepMerge<T extends object = object>(target: T, ...sources: any[]): T;

export { assertTypes, clone, createDefer, createSimpleStackTrace, deepClone, deepMerge, getCallLastIndex, getOwnProperties, getType, isNegativeNaN, isObject, isPrimitive, noop, notNullish, objectAttr, parseRegexp, slash, toArray };
export type { DeferPromise };
