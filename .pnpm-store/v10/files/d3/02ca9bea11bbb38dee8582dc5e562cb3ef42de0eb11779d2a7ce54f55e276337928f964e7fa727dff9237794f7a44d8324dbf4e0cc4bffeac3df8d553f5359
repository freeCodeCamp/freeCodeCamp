/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
interface Colors {
	comment: {
		close: string;
		open: string;
	};
	content: {
		close: string;
		open: string;
	};
	prop: {
		close: string;
		open: string;
	};
	tag: {
		close: string;
		open: string;
	};
	value: {
		close: string;
		open: string;
	};
}
type Indent = (arg0: string) => string;
type Refs = Array<unknown>;
type Print = (arg0: unknown) => string;
type Theme = Required<{
	comment?: string;
	content?: string;
	prop?: string;
	tag?: string;
	value?: string;
}>;
/**
* compare function used when sorting object keys, `null` can be used to skip over sorting.
*/
type CompareKeys = ((a: string, b: string) => number) | null | undefined;
type RequiredOptions = Required<PrettyFormatOptions>;
interface Options extends Omit<RequiredOptions, "compareKeys" | "theme"> {
	compareKeys: CompareKeys;
	theme: Theme;
}
interface PrettyFormatOptions {
	/**
	* Call `toJSON` on objects before formatting them.
	* Ignored after the formatter has already called `toJSON` once for a value.
	* @default true
	*/
	callToJSON?: boolean;
	/**
	* Whether to escape special characters in regular expressions.
	* @default false
	*/
	escapeRegex?: boolean;
	/**
	* Whether to escape special characters in strings.
	* @default true
	*/
	escapeString?: boolean;
	/**
	* Whether to highlight syntax using terminal colors.
	* @default false
	*/
	highlight?: boolean;
	/**
	* Number of spaces to use for each level of indentation.
	* @default 2
	*/
	indent?: number;
	/**
	* Maximum depth to recurse into nested values.
	* @default Infinity
	*/
	maxDepth?: number;
	/**
	* Maximum number of items to print in arrays, sets, maps, and similar collections.
	* @default Infinity
	*/
	maxWidth?: number;
	/**
	* Approximate per-depth-level budget for output length.
	* When the accumulated output at any single depth level exceeds this value,
	* further nesting is collapsed. This is a heuristic safety valve, not a hard
	* limit — total output can reach up to roughly `maxDepth × maxOutputLength`.
	* @default 1_000_000
	*/
	maxOutputLength?: number;
	/**
	* Whether to minimize added whitespace, including indentation and line breaks.
	* @default false
	*/
	min?: boolean;
	/**
	* Whether to print `Object` / `Array` prefixes for plain objects and arrays.
	* @default true
	*/
	printBasicPrototype?: boolean;
	/**
	* Whether to include the function name when formatting functions.
	* @default true
	*/
	printFunctionName?: boolean;
	/**
	* Whether to include shadow-root contents when formatting DOM nodes.
	* @default true
	*/
	printShadowRoot?: boolean;
	/**
	* Compare function used when sorting object keys. Set to `null` to disable sorting.
	*/
	compareKeys?: CompareKeys;
	/**
	* Plugins used to serialize application-specific data types.
	* @default []
	*/
	plugins?: Plugins;
}
type OptionsReceived = PrettyFormatOptions;
interface Config {
	callToJSON: boolean;
	compareKeys: CompareKeys;
	colors: Colors;
	escapeRegex: boolean;
	escapeString: boolean;
	indent: string;
	maxDepth: number;
	maxWidth: number;
	min: boolean;
	plugins: Plugins;
	printBasicPrototype: boolean;
	printFunctionName: boolean;
	printShadowRoot: boolean;
	spacingInner: string;
	spacingOuter: string;
	maxOutputLength: number;
}
type Printer = (val: unknown, config: Config, indentation: string, depth: number, refs: Refs, hasCalledToJSON?: boolean) => string;
type Test = (arg0: any) => boolean;
interface NewPlugin {
	serialize: (val: any, config: Config, indentation: string, depth: number, refs: Refs, printer: Printer) => string;
	test: Test;
}
interface PluginOptions {
	edgeSpacing: string;
	min: boolean;
	spacing: string;
}
interface OldPlugin {
	print: (val: unknown, print: Print, indent: Indent, options: PluginOptions, colors: Colors) => string;
	test: Test;
}
type Plugin = NewPlugin | OldPlugin;
type Plugins = Array<Plugin>;

/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

declare function createDOMElementFilter(filterNode?: (node: any) => boolean): NewPlugin;

/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

declare const DEFAULT_OPTIONS: Options;
/**
* Returns a presentation string of your `val` object
* @param val any potential JavaScript object
* @param options Custom settings
*/
declare function format(val: unknown, options?: OptionsReceived): string;

declare const plugins: {
	AsymmetricMatcher: NewPlugin;
	DOMCollection: NewPlugin;
	DOMElement: NewPlugin;
	Immutable: NewPlugin;
	ReactElement: NewPlugin;
	ReactTestComponent: NewPlugin;
	Error: NewPlugin;
};

export { DEFAULT_OPTIONS, createDOMElementFilter, format, plugins };
export type { Colors, CompareKeys, Config, NewPlugin, OldPlugin, Options, OptionsReceived, Plugin, Plugins, PrettyFormatOptions, Printer, Refs, Theme };
