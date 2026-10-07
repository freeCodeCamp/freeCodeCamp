import { PrettyFormatOptions } from '@vitest/pretty-format';

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
	filterNode?: string | ((node: any) => boolean);
}
declare function stringify(object: unknown, maxDepth?: number, { maxLength, filterNode, ...options }?: StringifyOptions): string;
declare const formatRegExp: RegExp;
declare function format(...args: unknown[]): string;
declare function browserFormat(...args: unknown[]): string;
declare function inspect(obj: unknown, options?: LoupeOptions): string;
declare function objDisplay(obj: unknown, options?: LoupeOptions): string;

export { browserFormat, format, formatRegExp, inspect, objDisplay, stringify };
export type { LoupeOptions, StringifyOptions };
