/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
interface Colors {
	comment: {
		close: string
		open: string
	};
	content: {
		close: string
		open: string
	};
	prop: {
		close: string
		open: string
	};
	tag: {
		close: string
		open: string
	};
	value: {
		close: string
		open: string
	};
}
type Indent = (arg0: string) => string;
type Refs = Array<unknown>;
type Print = (arg0: unknown) => string;
type Theme = Required<{
	comment?: string
	content?: string
	prop?: string
	tag?: string
	value?: string
}>;
type CompareKeys = ((a: string, b: string) => number) | null | undefined;
type RequiredOptions = Required<PrettyFormatOptions>;
interface Options extends Omit<RequiredOptions, "compareKeys" | "theme"> {
	compareKeys: CompareKeys;
	theme: Theme;
}
interface PrettyFormatOptions {
	callToJSON?: boolean;
	escapeRegex?: boolean;
	escapeString?: boolean;
	highlight?: boolean;
	indent?: number;
	maxDepth?: number;
	maxWidth?: number;
	min?: boolean;
	printBasicPrototype?: boolean;
	printFunctionName?: boolean;
	compareKeys?: CompareKeys;
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
	spacingInner: string;
	spacingOuter: string;
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

declare const DEFAULT_OPTIONS: Options;
/**
* Returns a presentation string of your `val` object
* @param val any potential JavaScript object
* @param options Custom settings
*/
declare function format(val: unknown, options?: OptionsReceived): string;
declare const plugins: {
	AsymmetricMatcher: NewPlugin
	DOMCollection: NewPlugin
	DOMElement: NewPlugin
	Immutable: NewPlugin
	ReactElement: NewPlugin
	ReactTestComponent: NewPlugin
	Error: NewPlugin
};

export { DEFAULT_OPTIONS, format, plugins };
export type { Colors, CompareKeys, Config, NewPlugin, OldPlugin, Options, OptionsReceived, Plugin, Plugins, PrettyFormatOptions, Printer, Refs, Theme };
