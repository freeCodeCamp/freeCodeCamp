import { PrettyFormatOptions } from '@vitest/pretty-format';
export { DeferPromise, assertTypes, clone, createDefer, createSimpleStackTrace, deepClone, deepMerge, getCallLastIndex, getOwnProperties, getType, isNegativeNaN, isObject, isPrimitive, noop, notNullish, objectAttr, parseRegexp, slash, toArray } from './helpers.js';
import { Colors } from 'tinyrainbow';
export { ArgumentsType, Arrayable, Awaitable, Constructable, DeepMerge, ErrorWithDiff, MergeInsertions, MutableArray, Nullable, ParsedStack, SerializedError, TestError } from './types.js';

type Inspect = (value: unknown, options: Options) => string;
interface Options {
	showHidden: boolean;
	depth: number;
	colors: boolean;
	customInspect: boolean;
	showProxy: boolean;
	maxArrayLength: number;
	breakLength: number;
	truncate: number;
	seen: unknown[];
	inspect: Inspect;
	stylize: (value: string, styleType: string) => string;
}
type LoupeOptions = Partial<Options>;
interface StringifyOptions extends PrettyFormatOptions {
	maxLength?: number;
}
declare function stringify(object: unknown, maxDepth?: number, { maxLength,...options }?: StringifyOptions): string;
declare function format(...args: unknown[]): string;
declare function inspect(obj: unknown, options?: LoupeOptions): string;
declare function objDisplay(obj: unknown, options?: LoupeOptions): string;

interface HighlightOptions {
	jsx?: boolean;
	colors?: Colors;
}
declare function highlight(code: string, options?: HighlightOptions): string;

declare function nanoid(size?: number): string;

declare const lineSplitRE: RegExp;
declare function positionToOffset(source: string, lineNumber: number, columnNumber: number): number;
declare function offsetToLineNumber(source: string, offset: number): number;

declare function shuffle<T>(array: T[], seed?: number): T[];

interface SafeTimers {
	nextTick: (cb: () => void) => void;
	setTimeout: typeof setTimeout;
	setInterval: typeof setInterval;
	clearInterval: typeof clearInterval;
	clearTimeout: typeof clearTimeout;
	setImmediate: typeof setImmediate;
	clearImmediate: typeof clearImmediate;
	queueMicrotask: typeof queueMicrotask;
}
declare function getSafeTimers(): SafeTimers;
declare function setSafeTimers(): void;

export { format, getSafeTimers, highlight, inspect, lineSplitRE, nanoid, objDisplay, offsetToLineNumber, positionToOffset, setSafeTimers, shuffle, stringify };
export type { LoupeOptions, SafeTimers, StringifyOptions };
