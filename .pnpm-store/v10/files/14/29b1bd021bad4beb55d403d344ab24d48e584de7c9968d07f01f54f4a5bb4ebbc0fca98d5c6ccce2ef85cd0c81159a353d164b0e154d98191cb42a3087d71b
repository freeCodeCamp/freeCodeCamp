/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn fix:special` to update
 */

import { Parser as ParserImport } from "acorn";
import { Buffer } from "buffer";
import { Scope } from "eslint-scope";
import {
	ArrayExpression,
	ArrayPattern,
	ArrowFunctionExpression,
	AssignmentExpression,
	AssignmentPattern,
	AssignmentProperty,
	AwaitExpression,
	BigIntLiteral,
	BinaryExpression,
	BlockStatement,
	BreakStatement,
	CatchClause,
	ChainExpression,
	ClassBody,
	ClassDeclaration,
	ClassExpression,
	Comment as CommentImport,
	ConditionalExpression,
	ContinueStatement,
	DebuggerStatement,
	Directive,
	DoWhileStatement,
	EmptyStatement,
	ExportAllDeclaration,
	ExportDefaultDeclaration,
	ExportNamedDeclaration,
	ExportSpecifier,
	ExpressionStatement,
	ForInStatement,
	ForOfStatement,
	ForStatement,
	FunctionDeclaration,
	FunctionExpression,
	Identifier,
	IfStatement,
	ImportDeclaration,
	ImportDefaultSpecifier,
	ImportExpression as ImportExpressionImport,
	ImportNamespaceSpecifier,
	ImportSpecifier,
	LabeledStatement,
	LogicalExpression,
	MaybeNamedClassDeclaration,
	MaybeNamedFunctionDeclaration,
	MemberExpression,
	MetaProperty,
	MethodDefinition,
	NewExpression,
	ObjectExpression,
	ObjectPattern,
	PrivateIdentifier,
	Program,
	Property,
	PropertyDefinition,
	RegExpLiteral,
	RestElement,
	ReturnStatement,
	SequenceExpression,
	SimpleCallExpression,
	SimpleLiteral,
	SourceLocation,
	SpreadElement,
	StaticBlock,
	Super,
	SwitchCase,
	SwitchStatement,
	TaggedTemplateExpression,
	TemplateElement,
	TemplateLiteral,
	ThisExpression,
	ThrowStatement,
	TryStatement,
	UnaryExpression,
	UpdateExpression,
	VariableDeclaration,
	VariableDeclarator,
	WhileStatement,
	WithStatement,
	YieldExpression
} from "estree";
import {
	IncomingMessage,
	Server as ServerImportHttp,
	ServerOptions as ServerOptionsImportHttp
} from "http";
import {
	Server as ServerImportHttps,
	ServerOptions as ServerOptionsImportHttps
} from "https";
import {
	Session as SessionImportInspectorClass_1,
	Session as SessionImportInspectorClass_2
} from "inspector";
import { JSONSchema4, JSONSchema6, JSONSchema7 } from "json-schema";
import { ListenOptions } from "net";
import {
	ExtendedSchema,
	ValidationErrorConfiguration,
	validate as validateFunction
} from "schema-utils";
import { default as ValidationError } from "schema-utils/declarations/ValidationError";
import {
	AsArray,
	AsyncParallelHook,
	AsyncSeriesBailHook,
	AsyncSeriesHook,
	AsyncSeriesWaterfallHook,
	HookMap,
	IfSet,
	MultiHook,
	SyncBailHook,
	SyncHook,
	SyncWaterfallHook,
	TapOptions,
	TypedHookMap
} from "tapable";
import { URL } from "url";
import { Context as ContextImport } from "vm";

declare interface Abortable {
	signal?: AbortSignal;
}
declare class AbstractLibraryPlugin<T> {
	/**
	 * Creates an instance of AbstractLibraryPlugin.
	 */
	constructor(__0: AbstractLibraryPluginOptions);

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Returns preprocess as needed by overriding.
	 */
	parseOptions(library: LibraryOptions): T;

	/**
	 * Finish entry module.
	 */
	finishEntryModule(
		module: Module,
		entryName: string,
		libraryContext: LibraryContext<T>
	): void;

	/**
	 * Embed in runtime bailout.
	 */
	embedInRuntimeBailout(
		module: Module,
		renderContext: RenderContextJavascriptModulesPlugin,
		libraryContext: LibraryContext<T>
	): undefined | string;

	/**
	 * Strict runtime bailout.
	 */
	strictRuntimeBailout(
		renderContext: RenderContextJavascriptModulesPlugin,
		libraryContext: LibraryContext<T>
	): undefined | string;

	/**
	 * Processes the provided chunk.
	 */
	runtimeRequirements(
		chunk: Chunk,
		set: Set<string>,
		libraryContext: LibraryContext<T>
	): void;

	/**
	 * Returns source with library export.
	 */
	render(
		source: Source,
		renderContext: RenderContextJavascriptModulesPlugin,
		libraryContext: LibraryContext<T>
	): Source;

	/**
	 * Renders source with library export.
	 */
	renderStartup(
		source: Source,
		module: Module,
		renderContext: StartupRenderContext,
		libraryContext: LibraryContext<T>
	): Source;

	/**
	 * Renders module content.
	 */
	renderModuleContent(
		source: Source,
		module: Module,
		renderContext: ModuleRenderContext,
		libraryContext: Omit<LibraryContext<T>, "options">
	): Source;

	/**
	 * Processes the provided chunk.
	 */
	chunkHash(
		chunk: Chunk,
		hash: Hash,
		chunkHashContext: ChunkHashContext,
		libraryContext: LibraryContext<T>
	): void;
	static COMMON_LIBRARY_NAME_MESSAGE: string;
}
declare interface AbstractLibraryPluginOptions {
	/**
	 * name of the plugin
	 */
	pluginName: string;

	/**
	 * used library type
	 */
	type: string;
}
declare interface AdditionalData {
	[index: string]: any;
	webpackAST: object;
}
type AfterContextResolveData = ContextResolveData &
	ContextOptions & {
		resource: string | string[];
		resourceQuery?: string;
		resourceFragment?: string;
		resolveDependencies: (
			fs: InputFileSystem,
			options: ContextModuleOptions,
			callback: (
				err: null | Error,
				dependencies?: ContextElementDependency[]
			) => void
		) => void;
	};
declare class AggressiveMergingPlugin {
	/**
	 * Creates an instance of AggressiveMergingPlugin.
	 */
	constructor(options?: AggressiveMergingPluginOptions);
	options: AggressiveMergingPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface AggressiveMergingPluginOptions {
	/**
	 * minimal size reduction to trigger merging
	 */
	minSizeReduce?: number;
}
declare class AggressiveSplittingPlugin {
	/**
	 * Creates an instance of AggressiveSplittingPlugin.
	 */
	constructor(options?: AggressiveSplittingPluginOptions);
	options: AggressiveSplittingPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Was chunk recorded.
	 */
	static wasChunkRecorded(chunk: Chunk): boolean;
}
declare interface AggressiveSplittingPluginOptions {
	/**
	 * Extra cost for each chunk (Default: 9.8kiB).
	 */
	chunkOverhead?: number;

	/**
	 * Extra cost multiplicator for entry chunks (Default: 10).
	 */
	entryChunkMultiplicator?: number;

	/**
	 * Byte, max size of per file (Default: 50kiB).
	 */
	maxSize?: number;

	/**
	 * Byte, split point. (Default: 30kiB).
	 */
	minSize?: number;
}
type Alias = string | false | string[];
declare interface AliasOption {
	alias: Alias;
	name: string;
	onlyModule?: boolean;
}
type AliasOptionNewRequest = string | false | string[];
declare interface AliasOptions {
	[index: string]: AliasOptionNewRequest;
}
declare interface AllCodeGenerationSchemas {
	/**
	 * top level declarations for javascript modules
	 */
	topLevelDeclarations: Set<string>;

	/**
	 * chunk init fragments for javascript modules
	 */
	chunkInitFragments: InitFragment<any>[];

	/**
	 * url for css and javascript modules
	 */
	url: { javascript?: string; "css-url"?: string };

	/**
	 * a filename for asset modules
	 */
	filename: string;

	/**
	 * an asset info for asset modules
	 */
	assetInfo: AssetInfo;

	/**
	 * a full content hash for asset modules
	 */
	fullContentHash: string;

	/**
	 * share-init for modules federation
	 */
	"share-init": [{ shareScope: string; initStage: number; init: string }];
}
type AnyLoaderContext = NormalModuleLoaderContext<any> &
	LoaderRunnerLoaderContext<any> &
	LoaderPluginLoaderContext &
	HotModuleReplacementPluginLoaderContext;
declare abstract class AppendOnlyStackedSet<T> {
	/**
	 * Adds a value to the current scope layer, creating that layer lazily when
	 * the first write occurs.
	 */
	add(el: T): void;

	/**
	 * Checks whether a value is present in any scope layer currently visible to
	 * this stacked set.
	 */
	has(el: T): boolean;

	/**
	 * Removes every scope layer and any values accumulated in them.
	 */
	clear(): void;

	/**
	 * Creates a child stacked set that shares the existing scope history while
	 * allowing subsequent additions to be recorded in its own new layer.
	 */
	createChild(): AppendOnlyStackedSet<T>;

	/**
	 * Iterates over the stacked sets from newest to oldest so consumers can
	 * inspect recently added values first.
	 */
	[Symbol.iterator](): Iterator<T>;
}

/**
 * Returns object of arguments.
 */
declare interface Argument {
	description?: string;
	simpleType: SimpleType;
	multiple: boolean;
	configs: ArgumentConfig[];
}

/**
 * Returns object of arguments.
 */
declare interface ArgumentConfig {
	description?: string;
	negatedDescription?: string;
	path: string;
	multiple: boolean;
	type: "string" | "number" | "boolean" | "path" | "enum" | "RegExp" | "reset";
	values?: EnumValue[];
}
declare interface Asset {
	/**
	 * the filename of the asset
	 */
	name: string;

	/**
	 * source of the asset
	 */
	source: Source;

	/**
	 * info about the asset
	 */
	info: AssetInfo;
}
declare abstract class AssetBytesGenerator extends Generator {
	/**
	 * Generates fallback output for the provided error condition.
	 */
	generateError(
		error: Error,
		module: NormalModule,
		generateContext: GenerateContext
	): null | Source;
}
declare abstract class AssetBytesParser extends ParserClass {}
declare interface AssetDependencyMeta {
	sourceType: "css-url";
}

/**
 * Checks whether this object is sorted.
 */
declare interface AssetEmittedInfo {
	content: Buffer;
	source: Source;
	compilation: Compilation;
	outputPath: string;
	targetPath: string;
}
type AssetFilterItemTypes =
	| string
	| RegExp
	| ((name: string, asset: StatsAsset) => boolean);
declare abstract class AssetGenerator extends Generator {
	dataUrlOptions?:
		| AssetGeneratorDataUrlOptions
		| ((
				source: string | Buffer,
				context: { filename: string; module: Module }
		  ) => string);
	filename?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);
	publicPath?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);
	outputPath?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);
	emit?: boolean;

	/**
	 * Returns mime type.
	 */
	getMimeType(module: NormalModule): string;

	/**
	 * Generates data uri.
	 */
	generateDataUri(module: NormalModule): string;

	/**
	 * Generates fallback output for the provided error condition.
	 */
	generateError(
		error: Error,
		module: NormalModule,
		generateContext: GenerateContext
	): null | Source;
}

/**
 * Options object for data url generation.
 */
declare interface AssetGeneratorDataUrlOptions {
	/**
	 * Asset encoding (defaults to base64).
	 */
	encoding?: false | "base64";

	/**
	 * Asset mimetype (getting from file extension by default).
	 */
	mimetype?: string;
}
type AssetGeneratorOptions = AssetInlineGeneratorOptions &
	AssetResourceGeneratorOptions;
type AssetInfo = KnownAssetInfo & Record<string, any>;

/**
 * Generator options for asset/inline modules.
 */
declare interface AssetInlineGeneratorOptions {
	/**
	 * Whether or not this asset module should be considered binary. This can be set to 'false' to treat this asset module as text.
	 */
	binary?: boolean;

	/**
	 * The options for data url generator.
	 */
	dataUrl?:
		| AssetGeneratorDataUrlOptions
		| ((
				source: string | Buffer,
				context: { filename: string; module: Module }
		  ) => string);
}
declare abstract class AssetParser extends ParserClass {
	dataUrlCondition?:
		| boolean
		| AssetParserDataUrlOptions
		| ((
				source: string | Buffer,
				context: { filename: string; module: Module }
		  ) => boolean);
}

/**
 * Options object for DataUrl condition.
 */
declare interface AssetParserDataUrlOptions {
	/**
	 * Maximum size of asset that should be inline as modules. Default: 8kb.
	 */
	maxSize?: number;
}

/**
 * Parser options for asset modules.
 */
declare interface AssetParserOptions {
	/**
	 * The condition for inlining the asset as DataUrl.
	 */
	dataUrlCondition?:
		| AssetParserDataUrlOptions
		| ((
				source: string | Buffer,
				context: { filename: string; module: Module }
		  ) => boolean);
}

/**
 * Generator options for asset/resource modules.
 */
declare interface AssetResourceGeneratorOptions {
	/**
	 * Whether or not this asset module should be considered binary. This can be set to 'false' to treat this asset module as text.
	 */
	binary?: boolean;

	/**
	 * Emit an output asset from this asset module. This can be set to 'false' to omit emitting e. g. for SSR.
	 */
	emit?: boolean;

	/**
	 * Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	filename?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Emit the asset in the specified folder relative to 'output.path'. This should only be needed when custom 'publicPath' is specified to match the folder structure there.
	 */
	outputPath?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * The 'publicPath' specifies the public URL address of the output files when referenced in a browser.
	 */
	publicPath?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);
}
declare abstract class AssetSourceGenerator extends Generator {
	/**
	 * Generates fallback output for the provided error condition.
	 */
	generateError(
		error: Error,
		module: NormalModule,
		generateContext: GenerateContext
	): null | Source;
}
declare abstract class AssetSourceParser extends ParserClass {}
declare class AsyncDependenciesBlock extends DependenciesBlock {
	constructor(
		groupOptions: null | string | GroupOptionsAsyncDependenciesBlock,
		loc?: null | SyntheticDependencyLocation | RealDependencyLocation,
		request?: null | string
	);
	groupOptions: GroupOptionsAsyncDependenciesBlock;
	loc?: null | SyntheticDependencyLocation | RealDependencyLocation;
	request?: null | string;
	chunkName?: null | string;
	get circular(): boolean;
	module: any;
}
declare abstract class AsyncQueue<T, K, R> {
	hooks: {
		beforeAdd: AsyncSeriesHook<[T]>;
		added: SyncHook<[T]>;
		beforeStart: AsyncSeriesHook<[T]>;
		started: SyncHook<[T]>;
		result: SyncHook<
			[T, undefined | null | WebpackError, undefined | null | R]
		>;
	};

	/**
	 * Returns context of execution.
	 */
	getContext(): string;

	/**
	 * Updates context using the provided value.
	 */
	setContext(value: string): void;

	/**
	 * Processes the provided item.
	 */
	add(item: T, callback: CallbackAsyncQueue<R>): void;

	/**
	 * Processes the provided item.
	 */
	invalidate(item: T): void;

	/**
	 * Waits for an already started item
	 */
	waitFor(item: T, callback: CallbackAsyncQueue<R>): void;

	/**
	 * Describes how this stop operation behaves.
	 */
	stop(): void;

	/**
	 * Increase parallelism.
	 */
	increaseParallelism(): void;

	/**
	 * Decrease parallelism.
	 */
	decreaseParallelism(): void;

	/**
	 * Checks whether this async queue is processing.
	 */
	isProcessing(item: T): boolean;

	/**
	 * Checks whether this async queue is queued.
	 */
	isQueued(item: T): boolean;

	/**
	 * Checks whether this async queue is done.
	 */
	isDone(item: T): boolean;
	clear(): void;
}
declare class AsyncWebAssemblyModulesPlugin {
	/**
	 * Creates an instance of AsyncWebAssemblyModulesPlugin.
	 */
	constructor(options: AsyncWebAssemblyModulesPluginOptions);
	options: AsyncWebAssemblyModulesPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Renders the newly generated source from rendering.
	 */
	renderModule(
		module: Module,
		renderContext: WebAssemblyRenderContext,
		hooks: CompilationHooksAsyncWebAssemblyModulesPlugin
	): Source;

	/**
	 * Returns the attached hooks.
	 */
	static getCompilationHooks(
		compilation: Compilation
	): CompilationHooksAsyncWebAssemblyModulesPlugin;
}
declare interface AsyncWebAssemblyModulesPluginOptions {
	/**
	 * mangle imports
	 */
	mangleImports?: boolean;
}
declare abstract class AsyncWebAssemblyParser extends ParserClass {}
declare class AutomaticPrefetchPlugin {
	constructor();

	/**
	 * Registers hooks that remember previously built normal modules and enqueue
	 * them as `PrefetchDependency` requests during the next make phase.
	 */
	apply(compiler: Compiler): void;
}
type AuxiliaryComment = string | LibraryCustomUmdCommentObject;
declare interface BackendApi {
	dispose: (callback: (err?: null | Error) => void) => void;
	module: (module: Module) => ModuleResult;
}
declare class BannerPlugin {
	/**
	 * Normalizes banner options and compiles the configured banner source into a
	 * function that can render per-asset banner text.
	 */
	constructor(options: BannerPluginArgument);
	options: BannerPluginOptions;
	banner: (data: { hash?: string; chunk: Chunk; filename: string }) => string;

	/**
	 * Validates the configured options and injects rendered banner comments into
	 * matching compilation assets at the configured process-assets stage.
	 */
	apply(compiler: Compiler): void;
}
type BannerPluginArgument =
	| string
	| BannerPluginOptions
	| ((data: { hash?: string; chunk: Chunk; filename: string }) => string);
declare interface BannerPluginOptions {
	/**
	 * Specifies the banner.
	 */
	banner:
		| string
		| ((data: { hash?: string; chunk: Chunk; filename: string }) => string);

	/**
	 * If true, the banner will only be added to the entry chunks.
	 */
	entryOnly?: boolean;

	/**
	 * Exclude all modules matching any of these conditions.
	 */
	exclude?: string | RegExp | ((str: string) => boolean) | Rule[];

	/**
	 * If true, banner will be placed at the end of the output.
	 */
	footer?: boolean;

	/**
	 * Include all modules matching any of these conditions.
	 */
	include?: string | RegExp | ((str: string) => boolean) | Rule[];

	/**
	 * If true, banner will not be wrapped in a comment.
	 */
	raw?: boolean;

	/**
	 * Specifies the stage when add a banner.
	 */
	stage?: number;

	/**
	 * Include all modules that pass test assertion.
	 */
	test?: string | RegExp | ((str: string) => boolean) | Rule[];
}
declare interface BaseResolveRequest {
	/**
	 * path
	 */
	path: string | false;

	/**
	 * content
	 */
	context?: ContextTypes;

	/**
	 * description file path
	 */
	descriptionFilePath?: string;

	/**
	 * description file root
	 */
	descriptionFileRoot?: string;

	/**
	 * description file data
	 */
	descriptionFileData?: JsonObjectTypes;

	/**
	 * tsconfig paths map
	 */
	tsconfigPathsMap?: null | TsconfigPathsMap;

	/**
	 * relative path
	 */
	relativePath?: string;

	/**
	 * true when need to ignore symlinks, otherwise false
	 */
	ignoreSymlinks?: boolean;

	/**
	 * true when full specified, otherwise false
	 */
	fullySpecified?: boolean;

	/**
	 * inner request for internal usage
	 */
	__innerRequest?: string;

	/**
	 * inner request for internal usage
	 */
	__innerRequest_request?: string;

	/**
	 * inner relative path for internal usage
	 */
	__innerRequest_relativePath?: string;
}
declare abstract class BasicEvaluatedExpression {
	type: number;
	range?: [number, number];
	falsy: boolean;
	truthy: boolean;
	nullish?: boolean;
	sideEffects: boolean;
	bool?: boolean;
	number?: number;
	bigint?: bigint;
	regExp?: RegExp;
	string?: string;
	quasis?: BasicEvaluatedExpression[];
	parts?: BasicEvaluatedExpression[];
	array?: any[];
	items?: BasicEvaluatedExpression[];
	options?: BasicEvaluatedExpression[];
	prefix?: null | BasicEvaluatedExpression;
	postfix?: null | BasicEvaluatedExpression;
	wrappedInnerExpressions?: BasicEvaluatedExpression[];
	identifier?: string | VariableInfo;
	rootInfo?: string | VariableInfo;
	getMembers?: () => string[];
	getMembersOptionals?: () => boolean[];
	getMemberRanges?: () => [number, number][];
	expression?:
		| Program
		| ImportDeclaration
		| ExportNamedDeclaration
		| ExportAllDeclaration
		| ImportExpressionImport
		| UnaryExpression
		| ArrayExpression
		| ArrowFunctionExpression
		| AssignmentExpression
		| AwaitExpression
		| BinaryExpression
		| SimpleCallExpression
		| NewExpression
		| ChainExpression
		| ClassExpression
		| ConditionalExpression
		| FunctionExpression
		| Identifier
		| SimpleLiteral
		| RegExpLiteral
		| BigIntLiteral
		| LogicalExpression
		| MemberExpression
		| MetaProperty
		| ObjectExpression
		| SequenceExpression
		| TaggedTemplateExpression
		| TemplateLiteral
		| ThisExpression
		| UpdateExpression
		| YieldExpression
		| SpreadElement
		| PrivateIdentifier
		| Super
		| FunctionDeclaration
		| VariableDeclaration
		| ClassDeclaration
		| ExpressionStatement
		| BlockStatement
		| StaticBlock
		| EmptyStatement
		| DebuggerStatement
		| WithStatement
		| ReturnStatement
		| LabeledStatement
		| BreakStatement
		| ContinueStatement
		| IfStatement
		| SwitchStatement
		| ThrowStatement
		| TryStatement
		| WhileStatement
		| DoWhileStatement
		| ForStatement
		| ForInStatement
		| ForOfStatement
		| ExportDefaultDeclaration
		| MethodDefinition
		| PropertyDefinition
		| VariableDeclarator
		| ObjectPattern
		| ArrayPattern
		| RestElement
		| AssignmentPattern
		| SwitchCase
		| CatchClause
		| Property
		| AssignmentProperty
		| ClassBody
		| ImportSpecifier
		| ImportDefaultSpecifier
		| ImportNamespaceSpecifier
		| ExportSpecifier
		| TemplateElement;
	isUnknown(): boolean;
	isNull(): boolean;
	isUndefined(): boolean;
	isString(): boolean;
	isNumber(): boolean;
	isBigInt(): boolean;
	isBoolean(): boolean;
	isRegExp(): boolean;
	isConditional(): boolean;
	isArray(): boolean;
	isConstArray(): boolean;
	isIdentifier(): boolean;
	isWrapped(): boolean;
	isTemplateString(): boolean;

	/**
	 * Is expression a primitive or an object type value?
	 */
	isPrimitiveType(): undefined | boolean;

	/**
	 * Is expression a runtime or compile-time value?
	 */
	isCompileTimeValue(): boolean;

	/**
	 * As compile time value.
	 */
	asCompileTimeValue():
		| undefined
		| null
		| string
		| number
		| bigint
		| boolean
		| RegExp
		| any[];
	isTruthy(): boolean;
	isFalsy(): boolean;
	isNullish(): undefined | boolean;

	/**
	 * Can this expression have side effects?
	 */
	couldHaveSideEffects(): boolean;

	/**
	 * Creates a boolean representation of this evaluated expression.
	 */
	asBool(): undefined | boolean;

	/**
	 * Creates a nullish coalescing representation of this evaluated expression.
	 */
	asNullish(): undefined | boolean;

	/**
	 * Creates a string representation of this evaluated expression.
	 */
	asString(): undefined | string;

	/**
	 * Updates string using the provided string.
	 */
	setString(string: string): BasicEvaluatedExpression;
	setUndefined(): BasicEvaluatedExpression;
	setNull(): BasicEvaluatedExpression;

	/**
	 * Set's the value of this expression to a number
	 */
	setNumber(number: number): BasicEvaluatedExpression;

	/**
	 * Set's the value of this expression to a BigInt
	 */
	setBigInt(bigint: bigint): BasicEvaluatedExpression;

	/**
	 * Set's the value of this expression to a boolean
	 */
	setBoolean(bool: boolean): BasicEvaluatedExpression;

	/**
	 * Set's the value of this expression to a regular expression
	 */
	setRegExp(regExp: RegExp): BasicEvaluatedExpression;

	/**
	 * Set's the value of this expression to a particular identifier and its members.
	 */
	setIdentifier(
		identifier: string | VariableInfo,
		rootInfo: string | VariableInfo,
		getMembers: () => string[],
		getMembersOptionals?: () => boolean[],
		getMemberRanges?: () => [number, number][]
	): BasicEvaluatedExpression;

	/**
	 * Wraps an array of expressions with a prefix and postfix expression.
	 */
	setWrapped(
		prefix?: null | BasicEvaluatedExpression,
		postfix?: null | BasicEvaluatedExpression,
		innerExpressions?: BasicEvaluatedExpression[]
	): BasicEvaluatedExpression;

	/**
	 * Stores the options of a conditional expression.
	 */
	setOptions(options: BasicEvaluatedExpression[]): BasicEvaluatedExpression;

	/**
	 * Adds the provided basic evaluated expression to the basic evaluated expression.
	 */
	addOptions(options: BasicEvaluatedExpression[]): BasicEvaluatedExpression;

	/**
	 * Set's the value of this expression to an array of expressions.
	 */
	setItems(items: BasicEvaluatedExpression[]): BasicEvaluatedExpression;

	/**
	 * Set's the value of this expression to an array of strings.
	 */
	setArray(array: string[]): BasicEvaluatedExpression;

	/**
	 * Set's the value of this expression to a processed/unprocessed template string. Used
	 * for evaluating TemplateLiteral expressions in the JavaScript Parser.
	 */
	setTemplateString(
		quasis: BasicEvaluatedExpression[],
		parts: BasicEvaluatedExpression[],
		kind: "cooked" | "raw"
	): BasicEvaluatedExpression;
	templateStringKind?: "cooked" | "raw";
	setTruthy(): BasicEvaluatedExpression;
	setFalsy(): BasicEvaluatedExpression;

	/**
	 * Set's the value of the expression to nullish.
	 */
	setNullish(value: boolean): BasicEvaluatedExpression;

	/**
	 * Set's the range for the expression.
	 */
	setRange(range: [number, number]): BasicEvaluatedExpression;

	/**
	 * Set whether or not the expression has side effects.
	 */
	setSideEffects(sideEffects?: boolean): BasicEvaluatedExpression;

	/**
	 * Set the expression node for the expression.
	 */
	setExpression(
		expression?:
			| Program
			| ImportDeclaration
			| ExportNamedDeclaration
			| ExportAllDeclaration
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| SpreadElement
			| PrivateIdentifier
			| Super
			| FunctionDeclaration
			| VariableDeclaration
			| ClassDeclaration
			| ExpressionStatement
			| BlockStatement
			| StaticBlock
			| EmptyStatement
			| DebuggerStatement
			| WithStatement
			| ReturnStatement
			| LabeledStatement
			| BreakStatement
			| ContinueStatement
			| IfStatement
			| SwitchStatement
			| ThrowStatement
			| TryStatement
			| WhileStatement
			| DoWhileStatement
			| ForStatement
			| ForInStatement
			| ForOfStatement
			| ExportDefaultDeclaration
			| MethodDefinition
			| PropertyDefinition
			| VariableDeclarator
			| ObjectPattern
			| ArrayPattern
			| RestElement
			| AssignmentPattern
			| SwitchCase
			| CatchClause
			| Property
			| AssignmentProperty
			| ClassBody
			| ImportSpecifier
			| ImportDefaultSpecifier
			| ImportNamespaceSpecifier
			| ExportSpecifier
			| TemplateElement
	): BasicEvaluatedExpression;
}
type BeforeContextResolveData = ContextResolveData & ContextOptions;
declare interface Bootstrap {
	header: string[];
	beforeStartup: string[];
	startup: string[];
	afterStartup: string[];
	allowInlineStartup: boolean;
}
type BufferEncoding =
	| "ascii"
	| "utf8"
	| "utf-8"
	| "utf16le"
	| "utf-16le"
	| "ucs2"
	| "ucs-2"
	| "base64"
	| "base64url"
	| "latin1"
	| "binary"
	| "hex";
type BufferEncodingOption = "buffer" | { encoding: "buffer" };
declare interface BufferEntry {
	map?: null | RawSourceMap;
	bufferedMap?: null | BufferedMap;
}
declare interface BufferedMap {
	/**
	 * version
	 */
	version: number;

	/**
	 * sources
	 */
	sources: string[];

	/**
	 * name
	 */
	names: string[];

	/**
	 * source root
	 */
	sourceRoot?: string;

	/**
	 * sources content
	 */
	sourcesContent?: ("" | Buffer)[];

	/**
	 * mappings
	 */
	mappings?: Buffer;

	/**
	 * file
	 */
	file: string;
}
type BuildInfo = KnownBuildInfo & Record<string, any>;
type BuildMeta = KnownBuildMeta & Record<string, any>;
declare abstract class ByTypeGenerator extends Generator {
	map: { [index: string]: undefined | Generator };
	generateError?: (
		error: Error,
		module: NormalModule,
		generateContext: GenerateContext
	) => null | Source;
}
declare const CIRCULAR_CONNECTION: unique symbol;
declare class CacheClass {
	/**
	 * Initializes the cache lifecycle hooks implemented by cache backends.
	 */
	constructor();
	hooks: {
		get: AsyncSeriesBailHook<[string, null | Etag, GotHandler<any>[]], any>;
		store: AsyncParallelHook<[string, null | Etag, any]>;
		storeBuildDependencies: AsyncParallelHook<[Iterable<string>]>;
		beginIdle: SyncHook<[]>;
		endIdle: AsyncParallelHook<[]>;
		shutdown: AsyncParallelHook<[]>;
	};

	/**
	 * Retrieves a cached value and lets registered `gotHandlers` observe the
	 * result before the caller receives it.
	 */
	get<T>(
		identifier: string,
		etag: null | Etag,
		callback: CallbackCacheCache<T>
	): void;

	/**
	 * Stores a cache entry for the identifier and etag through the registered
	 * cache backend hooks.
	 */
	store<T>(
		identifier: string,
		etag: null | Etag,
		data: T,
		callback: CallbackCacheCache<void>
	): void;

	/**
	 * Persists the set of build dependencies required to determine whether the
	 * cache can be restored in a future compilation.
	 */
	storeBuildDependencies(
		dependencies: Iterable<string>,
		callback: CallbackCacheCache<void>
	): void;

	/**
	 * Signals that webpack is entering an idle phase and cache backends may flush
	 * or compact pending work.
	 */
	beginIdle(): void;

	/**
	 * Signals that webpack is leaving the idle phase and waits for cache
	 * backends to finish any asynchronous resume work.
	 */
	endIdle(callback: CallbackCacheCache<void>): void;

	/**
	 * Shuts down every registered cache backend and waits for cleanup to finish.
	 */
	shutdown(callback: CallbackCacheCache<void>): void;
	static STAGE_MEMORY: number;
	static STAGE_DEFAULT: number;
	static STAGE_DISK: number;
	static STAGE_NETWORK: number;
}
declare abstract class CacheFacade {
	/**
	 * Returns child cache.
	 */
	getChildCache(name: string): CacheFacade;

	/**
	 * Returns item cache.
	 */
	getItemCache(identifier: string, etag: null | Etag): ItemCacheFacade;

	/**
	 * Gets lazy hashed etag.
	 */
	getLazyHashedEtag(obj: HashableObject): Etag;

	/**
	 * Merges the provided values into a single result.
	 */
	mergeEtags(a: Etag, b: Etag): Etag;

	/**
	 * Returns value.
	 */
	get<T>(
		identifier: string,
		etag: null | Etag,
		callback: CallbackCacheCacheFacade<T>
	): void;

	/**
	 * Returns promise with the data.
	 */
	getPromise<T>(identifier: string, etag: null | Etag): Promise<T>;

	/**
	 * Processes the provided identifier.
	 */
	store<T>(
		identifier: string,
		etag: null | Etag,
		data: T,
		callback: CallbackCacheCacheFacade<void>
	): void;

	/**
	 * Stores the provided identifier.
	 */
	storePromise<T>(
		identifier: string,
		etag: null | Etag,
		data: T
	): Promise<void>;

	/**
	 * Processes the provided identifier.
	 */
	provide<T>(
		identifier: string,
		etag: null | Etag,
		computer: (callback: CallbackNormalErrorCache<T>) => void,
		callback: CallbackNormalErrorCache<T>
	): void;

	/**
	 * Returns promise with the data.
	 */
	providePromise<T>(
		identifier: string,
		etag: null | Etag,
		computer: () => T | Promise<T>
	): Promise<T>;
}
declare interface CacheGroupSource {
	key: string;
	priority?: number;
	getName?: (
		module: Module,
		chunks: Chunk[],
		key: string
	) => undefined | string;
	chunksFilter?: (chunk: Chunk) => undefined | boolean;
	enforce?: boolean;
	minSize: SplitChunksSizes;
	minSizeReduction: SplitChunksSizes;
	minRemainingSize: SplitChunksSizes;
	enforceSizeThreshold: SplitChunksSizes;
	maxAsyncSize: SplitChunksSizes;
	maxInitialSize: SplitChunksSizes;
	minChunks?: number;
	maxAsyncRequests?: number;
	maxInitialRequests?: number;
	filename?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);
	idHint?: string;
	automaticNameDelimiter?: string;
	reuseExistingChunk?: boolean;
	usedExports?: boolean;
}
declare interface CacheGroupsContext {
	moduleGraph: ModuleGraph;
	chunkGraph: ChunkGraph;
}
type CacheOptionsNormalized = false | FileCacheOptions | MemoryCacheOptions;
declare interface CacheTypes {
	[index: string]: undefined | ResolveRequest | ResolveRequest[];
}
declare interface CachedData {
	/**
	 * source
	 */
	source?: boolean;

	/**
	 * buffer
	 */
	buffer: Buffer;

	/**
	 * size
	 */
	size?: number;

	/**
	 * maps
	 */
	maps: Map<string, BufferEntry>;

	/**
	 * hash
	 */
	hash?: (string | Buffer)[];
}
declare class CachedSource extends Source {
	constructor(source: Source | (() => Source), cachedData?: CachedData);
	getCachedData(): CachedData;
	originalLazy(): Source | (() => Source);
	original(): Source;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string
		) => void,
		onName: (nameIndex: number, name: string) => void
	): GeneratedSourceInfo;
}
declare interface CalculatedStringResult {
	range?: [number, number];
	value: string;
	code: boolean;
	conditional: false | CalculatedStringResult[];
}
type CallExpression = SimpleCallExpression | NewExpression;
declare interface CallExpressionInfo {
	type: "call";
	call: CallExpression;
	calleeName: string;
	rootInfo: string | VariableInfo;
	getCalleeMembers: () => string[];
	name: string;
	getMembers: () => string[];
	getMembersOptionals: () => boolean[];
	getMemberRanges: () => [number, number][];
}
declare interface CallbackAsyncQueue<T> {
	(err?: null | WebpackError, result?: null | T): void;
}

/**
 * Creates a callback wrapper that waits for a fixed number of completions and
 * forwards the first error immediately.
 */
declare interface CallbackCacheCache<T> {
	/**
	 * Creates a callback wrapper that waits for a fixed number of completions and
	 * forwards the first error immediately.
	 */
	(err: null | WebpackError, result?: T): void;
}
declare interface CallbackCacheCacheFacade<T> {
	(err?: null | Error, result?: null | T): void;
}
declare interface CallbackNormalErrorCache<T> {
	(err?: null | Error, result?: T): void;
}

/**
 * Creates a multi compiler.
 */
declare interface CallbackWebpackFunction_1<T> {
	/**
	 * Creates a multi compiler.
	 */
	(err: null | Error, result?: T): void;
}

/**
 * Creates a multi compiler.
 */
declare interface CallbackWebpackFunction_2<T, R = void> {
	/**
	 * Creates a multi compiler.
	 */
	(err: null | Error, result?: T): R;
}
type Cell<T> = undefined | T;
declare class Chunk {
	/**
	 * Creates an instance of Chunk.
	 */
	constructor(name?: null | string, backCompat?: boolean);
	id: null | string | number;
	ids: null | ChunkId[];
	debugId: number;
	name?: null | string;
	idNameHints: SortableSet<string>;
	preventIntegration: boolean;
	filenameTemplate?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);
	cssFilenameTemplate?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);
	runtime: RuntimeSpec;
	files: Set<string>;
	auxiliaryFiles: Set<string>;
	rendered: boolean;
	hash?: string;
	contentHash: Record<string, string>;
	renderedHash?: string;
	chunkReason?: string;
	extraAsync: boolean;

	/**
	 * Returns entry module.
	 * @deprecated
	 */
	get entryModule(): Module;

	/**
	 * Checks whether this chunk has an entry module.
	 * @deprecated
	 */
	hasEntryModule(): boolean;

	/**
	 * Adds the provided module to the chunk.
	 * @deprecated
	 */
	addModule(module: Module): boolean;

	/**
	 * Removes the provided module from the chunk.
	 * @deprecated
	 */
	removeModule(module: Module): void;

	/**
	 * Gets the number of modules in this chunk.
	 * @deprecated
	 */
	getNumberOfModules(): number;

	/**
	 * @deprecated
	 */
	get modulesIterable(): Iterable<Module>;

	/**
	 * Compares this chunk with another chunk.
	 * @deprecated
	 */
	compareTo(otherChunk: Chunk): 0 | 1 | -1;

	/**
	 * Checks whether this chunk contains the module.
	 * @deprecated
	 */
	containsModule(module: Module): boolean;

	/**
	 * Returns the modules for this chunk.
	 * @deprecated
	 */
	getModules(): Module[];

	/**
	 * Removes this chunk from the chunk graph and chunk groups.
	 * @deprecated
	 */
	remove(): void;

	/**
	 * Moves a module from this chunk to another chunk.
	 * @deprecated
	 */
	moveModule(module: Module, otherChunk: Chunk): void;

	/**
	 * Integrates another chunk into this chunk when possible.
	 * @deprecated
	 */
	integrate(otherChunk: Chunk): boolean;

	/**
	 * Checks whether this chunk can be integrated with another chunk.
	 * @deprecated
	 */
	canBeIntegrated(otherChunk: Chunk): boolean;

	/**
	 * Checks whether this chunk is empty.
	 * @deprecated
	 */
	isEmpty(): boolean;

	/**
	 * Returns the total size of all modules in this chunk.
	 * @deprecated
	 */
	modulesSize(): number;

	/**
	 * Returns the estimated size for the requested source type.
	 * @deprecated
	 */
	size(options?: ChunkSizeOptions): number;

	/**
	 * Returns the integrated size with another chunk.
	 * @deprecated
	 */
	integratedSize(otherChunk: Chunk, options: ChunkSizeOptions): number;

	/**
	 * Gets chunk module maps.
	 * @deprecated
	 */
	getChunkModuleMaps(filterFn: (m: Module) => boolean): ChunkModuleMaps;

	/**
	 * Checks whether this chunk contains a matching module in the graph.
	 * @deprecated
	 */
	hasModuleInGraph(
		filterFn: (m: Module) => boolean,
		filterChunkFn?: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	): boolean;

	/**
	 * Returns the chunk map information.
	 * @deprecated
	 */
	getChunkMaps(realHash: boolean): ChunkMaps;

	/**
	 * Checks whether this chunk has runtime.
	 */
	hasRuntime(): boolean;

	/**
	 * Checks whether it can be initial.
	 */
	canBeInitial(): boolean;

	/**
	 * Checks whether this chunk is only initial.
	 */
	isOnlyInitial(): boolean;

	/**
	 * Gets entry options.
	 */
	getEntryOptions(): undefined | EntryOptions;

	/**
	 * Adds the provided chunk group to the chunk.
	 */
	addGroup(chunkGroup: ChunkGroup): void;

	/**
	 * Removes the provided chunk group from the chunk.
	 */
	removeGroup(chunkGroup: ChunkGroup): void;

	/**
	 * Checks whether this chunk is in group.
	 */
	isInGroup(chunkGroup: ChunkGroup): boolean;

	/**
	 * Gets number of groups.
	 */
	getNumberOfGroups(): number;

	/**
	 * Gets groups iterable.
	 */
	get groupsIterable(): SortableSet<ChunkGroup>;

	/**
	 * Disconnects from groups.
	 */
	disconnectFromGroups(): void;

	/**
	 * Processes the provided new chunk.
	 */
	split(newChunk: Chunk): void;

	/**
	 * Updates the hash with the data contributed by this instance.
	 */
	updateHash(hash: Hash, chunkGraph: ChunkGraph): void;

	/**
	 * Gets all async chunks.
	 */
	getAllAsyncChunks(): Set<Chunk>;

	/**
	 * Gets all initial chunks.
	 */
	getAllInitialChunks(): Set<Chunk>;

	/**
	 * Gets all referenced chunks.
	 */
	getAllReferencedChunks(): Set<Chunk>;

	/**
	 * Gets all referenced async entrypoints.
	 */
	getAllReferencedAsyncEntrypoints(): Set<Entrypoint>;

	/**
	 * Checks whether this chunk has async chunks.
	 */
	hasAsyncChunks(): boolean;

	/**
	 * Gets child ids by orders.
	 */
	getChildIdsByOrders(
		chunkGraph: ChunkGraph,
		filterFn?: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	): Record<string, ChunkId[]>;

	/**
	 * Gets children of type in order.
	 */
	getChildrenOfTypeInOrder(
		chunkGraph: ChunkGraph,
		type: string
	): undefined | ChunkChildOfTypeInOrder[];

	/**
	 * Gets child ids by orders map.
	 */
	getChildIdsByOrdersMap(
		chunkGraph: ChunkGraph,
		includeDirectChildren?: boolean,
		filterFn?: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	): ChunkChildIdsByOrdersMapByData;

	/**
	 * Checks whether this chunk contains the chunk graph.
	 */
	hasChildByOrder(
		chunkGraph: ChunkGraph,
		type: string,
		includeDirectChildren?: boolean,
		filterFn?: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	): boolean;
}
declare interface ChunkChildIdsByOrdersMap {
	[index: string]: ChunkId[];
}
declare interface ChunkChildIdsByOrdersMapByData {
	[index: string]: ChunkChildIdsByOrdersMap;
}
declare interface ChunkChildOfTypeInOrder {
	onChunks: Chunk[];
	chunks: Set<Chunk>;
}
declare interface ChunkConditionMap {
	[index: number]: boolean;
	[index: string]: boolean;
}
declare class ChunkGraph {
	/**
	 * Creates an instance of ChunkGraph.
	 */
	constructor(moduleGraph: ModuleGraph, hashFunction?: HashFunction);
	moduleGraph: ModuleGraph;

	/**
	 * Connects chunk and module.
	 */
	connectChunkAndModule(chunk: Chunk, module: Module): void;

	/**
	 * Disconnects chunk and module.
	 */
	disconnectChunkAndModule(chunk: Chunk, module: Module): void;

	/**
	 * Processes the provided chunk.
	 */
	disconnectChunk(chunk: Chunk): void;

	/**
	 * Processes the provided chunk.
	 */
	attachModules(chunk: Chunk, modules: Iterable<Module>): void;

	/**
	 * Attach runtime modules.
	 */
	attachRuntimeModules(chunk: Chunk, modules: Iterable<RuntimeModule>): void;

	/**
	 * Attach full hash modules.
	 */
	attachFullHashModules(chunk: Chunk, modules: Iterable<RuntimeModule>): void;

	/**
	 * Attach dependent hash modules.
	 */
	attachDependentHashModules(
		chunk: Chunk,
		modules: Iterable<RuntimeModule>
	): void;

	/**
	 * Processes the provided old module.
	 */
	replaceModule(oldModule: Module, newModule: Module): void;

	/**
	 * Checks whether this chunk graph is module in chunk.
	 */
	isModuleInChunk(module: Module, chunk: Chunk): boolean;

	/**
	 * Checks whether this chunk graph is module in chunk group.
	 */
	isModuleInChunkGroup(module: Module, chunkGroup: ChunkGroup): boolean;

	/**
	 * Checks whether this chunk graph is entry module.
	 */
	isEntryModule(module: Module): boolean;

	/**
	 * Gets module chunks iterable.
	 */
	getModuleChunksIterable(module: Module): Iterable<Chunk>;

	/**
	 * Gets ordered module chunks iterable.
	 */
	getOrderedModuleChunksIterable(
		module: Module,
		sortFn: (a: Chunk, b: Chunk) => 0 | 1 | -1
	): Iterable<Chunk>;

	/**
	 * Gets module chunks.
	 */
	getModuleChunks(module: Module): Chunk[];

	/**
	 * Gets number of module chunks.
	 */
	getNumberOfModuleChunks(module: Module): number;

	/**
	 * Gets module runtimes.
	 */
	getModuleRuntimes(module: Module): RuntimeSpecSet;

	/**
	 * Gets number of chunk modules.
	 */
	getNumberOfChunkModules(chunk: Chunk): number;

	/**
	 * Gets number of chunk full hash modules.
	 */
	getNumberOfChunkFullHashModules(chunk: Chunk): number;

	/**
	 * Gets chunk modules iterable.
	 */
	getChunkModulesIterable(chunk: Chunk): Iterable<Module>;

	/**
	 * Gets chunk modules iterable by source type.
	 */
	getChunkModulesIterableBySourceType(
		chunk: Chunk,
		sourceType: string
	): undefined | Iterable<Module>;

	/**
	 * Sets chunk module source types.
	 */
	setChunkModuleSourceTypes(
		chunk: Chunk,
		module: Module,
		sourceTypes: ReadonlySet<string>
	): void;

	/**
	 * Gets chunk module source types.
	 */
	getChunkModuleSourceTypes(chunk: Chunk, module: Module): ReadonlySet<string>;

	/**
	 * Gets module source types.
	 */
	getModuleSourceTypes(module: Module): ReadonlySet<string>;

	/**
	 * Gets ordered chunk modules iterable.
	 */
	getOrderedChunkModulesIterable(
		chunk: Chunk,
		comparator: (a: Module, b: Module) => 0 | 1 | -1
	): Iterable<Module>;

	/**
	 * Gets ordered chunk modules iterable by source type.
	 */
	getOrderedChunkModulesIterableBySourceType(
		chunk: Chunk,
		sourceType: string,
		comparator: (a: Module, b: Module) => 0 | 1 | -1
	): undefined | Iterable<Module>;

	/**
	 * Gets chunk modules.
	 */
	getChunkModules(chunk: Chunk): Module[];

	/**
	 * Gets ordered chunk modules.
	 */
	getOrderedChunkModules(
		chunk: Chunk,
		comparator: (a: Module, b: Module) => 0 | 1 | -1
	): Module[];

	/**
	 * Gets chunk module id map.
	 */
	getChunkModuleIdMap(
		chunk: Chunk,
		filterFn: (m: Module) => boolean,
		includeAllChunks?: boolean
	): ChunkModuleIdMapEs5Alias_2;

	/**
	 * Gets chunk module rendered hash map.
	 */
	getChunkModuleRenderedHashMap(
		chunk: Chunk,
		filterFn: (m: Module) => boolean,
		hashLength?: number,
		includeAllChunks?: boolean
	): ChunkModuleHashMap;

	/**
	 * Gets chunk condition map.
	 */
	getChunkConditionMap(
		chunk: Chunk,
		filterFn: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	): ChunkConditionMap;

	/**
	 * Checks whether this chunk graph contains the chunk.
	 */
	hasModuleInGraph(
		chunk: Chunk,
		filterFn: (m: Module) => boolean,
		filterChunkFn?: (c: Chunk, chunkGraph: ChunkGraph) => boolean
	): boolean;

	/**
	 * Compares the provided values and returns their ordering.
	 */
	compareChunks(chunkA: Chunk, chunkB: Chunk): 0 | 1 | -1;

	/**
	 * Gets chunk modules size.
	 */
	getChunkModulesSize(chunk: Chunk): number;

	/**
	 * Gets chunk modules sizes.
	 */
	getChunkModulesSizes(chunk: Chunk): Record<string, number>;

	/**
	 * Gets chunk root modules.
	 */
	getChunkRootModules(chunk: Chunk): Module[];

	/**
	 * Returns total size of the chunk.
	 */
	getChunkSize(chunk: Chunk, options?: ChunkSizeOptions): number;

	/**
	 * Gets integrated chunks size.
	 */
	getIntegratedChunksSize(
		chunkA: Chunk,
		chunkB: Chunk,
		options?: ChunkSizeOptions
	): number;

	/**
	 * Checks whether it can chunks be integrated.
	 */
	canChunksBeIntegrated(chunkA: Chunk, chunkB: Chunk): boolean;

	/**
	 * Processes the provided chunk a.
	 */
	integrateChunks(chunkA: Chunk, chunkB: Chunk): void;

	/**
	 * Upgrade dependent to full hash modules.
	 */
	upgradeDependentToFullHashModules(chunk: Chunk): void;

	/**
	 * Checks whether this chunk graph is entry module in chunk.
	 */
	isEntryModuleInChunk(module: Module, chunk: Chunk): boolean;

	/**
	 * Connects chunk and entry module.
	 */
	connectChunkAndEntryModule(
		chunk: Chunk,
		module: Module,
		entrypoint: Entrypoint
	): void;

	/**
	 * Connects chunk and runtime module.
	 */
	connectChunkAndRuntimeModule(chunk: Chunk, module: RuntimeModule): void;

	/**
	 * Adds full hash module to chunk.
	 */
	addFullHashModuleToChunk(chunk: Chunk, module: RuntimeModule): void;

	/**
	 * Adds dependent hash module to chunk.
	 */
	addDependentHashModuleToChunk(chunk: Chunk, module: RuntimeModule): void;

	/**
	 * Disconnects chunk and entry module.
	 */
	disconnectChunkAndEntryModule(chunk: Chunk, module: Module): void;

	/**
	 * Disconnects chunk and runtime module.
	 */
	disconnectChunkAndRuntimeModule(chunk: Chunk, module: RuntimeModule): void;

	/**
	 * Disconnects entry module.
	 */
	disconnectEntryModule(module: Module): void;

	/**
	 * Disconnects entries.
	 */
	disconnectEntries(chunk: Chunk): void;

	/**
	 * Gets number of entry modules.
	 */
	getNumberOfEntryModules(chunk: Chunk): number;

	/**
	 * Gets number of runtime modules.
	 */
	getNumberOfRuntimeModules(chunk: Chunk): number;

	/**
	 * Gets chunk entry modules iterable.
	 */
	getChunkEntryModulesIterable(chunk: Chunk): Iterable<Module>;

	/**
	 * Gets chunk entry dependent chunks iterable.
	 */
	getChunkEntryDependentChunksIterable(chunk: Chunk): Iterable<Chunk>;

	/**
	 * Gets runtime chunk dependent chunks iterable.
	 */
	getRuntimeChunkDependentChunksIterable(chunk: Chunk): Iterable<Chunk>;

	/**
	 * Checks whether this chunk graph contains the chunk.
	 */
	hasChunkEntryDependentChunks(chunk: Chunk): boolean;

	/**
	 * Gets chunk runtime modules iterable.
	 */
	getChunkRuntimeModulesIterable(chunk: Chunk): Iterable<RuntimeModule>;

	/**
	 * Gets chunk runtime modules in order.
	 */
	getChunkRuntimeModulesInOrder(chunk: Chunk): RuntimeModule[];

	/**
	 * Gets chunk full hash modules iterable.
	 */
	getChunkFullHashModulesIterable(
		chunk: Chunk
	): undefined | Iterable<RuntimeModule>;

	/**
	 * Gets chunk full hash modules set.
	 */
	getChunkFullHashModulesSet(
		chunk: Chunk
	): undefined | ReadonlySet<RuntimeModule>;

	/**
	 * Gets chunk dependent hash modules iterable.
	 */
	getChunkDependentHashModulesIterable(
		chunk: Chunk
	): undefined | Iterable<RuntimeModule>;

	/**
	 * Gets chunk entry modules with chunk group iterable.
	 */
	getChunkEntryModulesWithChunkGroupIterable(
		chunk: Chunk
	): Iterable<[Module, undefined | Entrypoint]>;

	/**
	 * Gets block chunk group.
	 */
	getBlockChunkGroup(depBlock: AsyncDependenciesBlock): undefined | ChunkGroup;

	/**
	 * Connects block and chunk group.
	 */
	connectBlockAndChunkGroup(
		depBlock: AsyncDependenciesBlock,
		chunkGroup: ChunkGroup
	): void;

	/**
	 * Disconnects chunk group.
	 */
	disconnectChunkGroup(chunkGroup: ChunkGroup): void;

	/**
	 * Returns the id of the module.
	 */
	getModuleId(module: Module): null | string | number;

	/**
	 * Updates module id using the provided module.
	 */
	setModuleId(module: Module, id: ModuleId): void;

	/**
	 * Returns the id of the runtime.
	 */
	getRuntimeId(runtime: string): RuntimeId;

	/**
	 * Updates runtime id using the provided runtime.
	 */
	setRuntimeId(runtime: string, id: RuntimeId): void;

	/**
	 * Checks whether this chunk graph contains the module.
	 */
	hasModuleHashes(module: Module, runtime: RuntimeSpec): boolean;

	/**
	 * Returns hash.
	 */
	getModuleHash(module: Module, runtime: RuntimeSpec): string;

	/**
	 * Gets rendered module hash.
	 */
	getRenderedModuleHash(module: Module, runtime: RuntimeSpec): string;

	/**
	 * Sets module hashes.
	 */
	setModuleHashes(
		module: Module,
		runtime: RuntimeSpec,
		hash: string,
		renderedHash: string
	): void;

	/**
	 * Adds module runtime requirements.
	 */
	addModuleRuntimeRequirements(
		module: Module,
		runtime: RuntimeSpec,
		items: Set<string>,
		transferOwnership?: boolean
	): void;

	/**
	 * Adds chunk runtime requirements.
	 */
	addChunkRuntimeRequirements(chunk: Chunk, items: Set<string>): void;

	/**
	 * Adds tree runtime requirements.
	 */
	addTreeRuntimeRequirements(chunk: Chunk, items: Iterable<string>): void;

	/**
	 * Gets module runtime requirements.
	 */
	getModuleRuntimeRequirements(
		module: Module,
		runtime: RuntimeSpec
	): ReadonlySet<string>;

	/**
	 * Gets chunk runtime requirements.
	 */
	getChunkRuntimeRequirements(chunk: Chunk): ReadonlySet<string>;

	/**
	 * Gets module graph hash.
	 */
	getModuleGraphHash(
		module: Module,
		runtime: RuntimeSpec,
		withConnections?: boolean
	): string;

	/**
	 * Gets module graph hash big int.
	 */
	getModuleGraphHashBigInt(
		module: Module,
		runtime: RuntimeSpec,
		withConnections?: boolean
	): bigint;

	/**
	 * Gets tree runtime requirements.
	 */
	getTreeRuntimeRequirements(chunk: Chunk): ReadonlySet<string>;

	/**
	 * Gets chunk graph for module.
	 * @deprecated
	 */
	static getChunkGraphForModule(
		module: Module,
		deprecateMessage: string,
		deprecationCode: string
	): ChunkGraph;

	/**
	 * Sets chunk graph for module.
	 * @deprecated
	 */
	static setChunkGraphForModule(module: Module, chunkGraph: ChunkGraph): void;

	/**
	 * Clear chunk graph for module.
	 * @deprecated
	 */
	static clearChunkGraphForModule(module: Module): void;

	/**
	 * Gets chunk graph for chunk.
	 * @deprecated
	 */
	static getChunkGraphForChunk(
		chunk: Chunk,
		deprecateMessage: string,
		deprecationCode: string
	): ChunkGraph;

	/**
	 * Sets chunk graph for chunk.
	 * @deprecated
	 */
	static setChunkGraphForChunk(chunk: Chunk, chunkGraph: ChunkGraph): void;

	/**
	 * Clear chunk graph for chunk.
	 * @deprecated
	 */
	static clearChunkGraphForChunk(chunk: Chunk): void;
}
declare abstract class ChunkGroup {
	groupDebugId: number;
	options: ChunkGroupOptions;
	chunks: Chunk[];
	origins: OriginRecord[];
	index?: number;

	/**
	 * Merges additional options into the chunk group.
	 * Order-based options are combined by taking the higher priority, while
	 * unsupported conflicts surface as an explicit error.
	 */
	addOptions(options: ChunkGroupOptions): void;

	/**
	 * Returns the configured name of the chunk group, if one was assigned.
	 * Updates the configured name of the chunk group.
	 */
	name?: null | string;

	/**
	 * Returns a debug-only identifier derived from the group's member chunk
	 * debug ids. This is primarily useful in diagnostics and assertions.
	 */
	get debugId(): string;

	/**
	 * Returns an identifier derived from the ids of the chunks currently in
	 * the group.
	 */
	get id(): string;

	/**
	 * Moves a chunk to the front of the group or inserts it when it is not
	 * already present.
	 */
	unshiftChunk(chunk: Chunk): boolean;

	/**
	 * Inserts a chunk directly before another chunk that already belongs to the
	 * group, preserving the rest of the ordering.
	 */
	insertChunk(chunk: Chunk, before: Chunk): boolean;

	/**
	 * Appends a chunk to the group when it is not already a member.
	 */
	pushChunk(chunk: Chunk): boolean;

	/**
	 * Replaces one member chunk with another while preserving the group's
	 * ordering and avoiding duplicates.
	 */
	replaceChunk(oldChunk: Chunk, newChunk: Chunk): undefined | boolean;

	/**
	 * Removes a chunk from this group.
	 */
	removeChunk(chunk: Chunk): boolean;

	/**
	 * Indicates whether this chunk group is loaded as part of the initial page
	 * load instead of being created lazily.
	 */
	isInitial(): boolean;

	/**
	 * Adds a child chunk group to the current group.
	 */
	addChild(group: ChunkGroup): boolean;

	/**
	 * Returns the child chunk groups reachable from this group.
	 */
	getChildren(): ChunkGroup[];
	getNumberOfChildren(): number;
	get childrenIterable(): SortableSet<ChunkGroup>;

	/**
	 * Removes a child chunk group and clears the corresponding parent link on
	 * the removed child.
	 */
	removeChild(group: ChunkGroup): boolean;

	/**
	 * Records a parent chunk group relationship.
	 */
	addParent(parentChunk: ChunkGroup): boolean;

	/**
	 * Returns the parent chunk groups that can lead to this group.
	 */
	getParents(): ChunkGroup[];
	getNumberOfParents(): number;

	/**
	 * Checks whether the provided group is registered as a parent.
	 */
	hasParent(parent: ChunkGroup): boolean;
	get parentsIterable(): SortableSet<ChunkGroup>;

	/**
	 * Removes a parent chunk group and clears the reverse child relationship.
	 */
	removeParent(chunkGroup: ChunkGroup): boolean;

	/**
	 * Registers an async entrypoint that is rooted in this chunk group.
	 */
	addAsyncEntrypoint(entrypoint: Entrypoint): boolean;
	get asyncEntrypointsIterable(): SortableSet<ChunkGroup>;

	/**
	 * Returns the async dependency blocks that create or reference this group.
	 */
	getBlocks(): AsyncDependenciesBlock[];
	getNumberOfBlocks(): number;

	/**
	 * Checks whether an async dependency block is associated with this group.
	 */
	hasBlock(block: AsyncDependenciesBlock): boolean;

	/**
	 * Exposes the group's async dependency blocks as an iterable.
	 */
	get blocksIterable(): Iterable<AsyncDependenciesBlock>;

	/**
	 * Associates an async dependency block with this chunk group.
	 */
	addBlock(block: AsyncDependenciesBlock): boolean;

	/**
	 * Records where this chunk group originated from in user code.
	 * The origin is used for diagnostics, ordering, and reporting.
	 */
	addOrigin(
		module: null | Module,
		loc: DependencyLocation,
		request: string
	): void;

	/**
	 * Collects the emitted files produced by every chunk in the group.
	 */
	getFiles(): string[];

	/**
	 * Disconnects this group from its parents, children, and chunks.
	 * Child groups are reconnected to this group's parents so the surrounding
	 * graph remains intact after removal.
	 */
	remove(): void;
	sortItems(): void;

	/**
	 * Sorting predicate which allows current ChunkGroup to be compared against another.
	 * Sorting values are based off of number of chunks in ChunkGroup.
	 */
	compareTo(chunkGraph: ChunkGraph, otherGroup: ChunkGroup): 0 | 1 | -1;

	/**
	 * Groups child chunk groups by their `*Order` options and sorts each group
	 * by descending order and deterministic chunk-group comparison.
	 */
	getChildrenByOrders(
		moduleGraph: ModuleGraph,
		chunkGraph: ChunkGraph
	): Record<string, ChunkGroup[]>;

	/**
	 * Stores the module's top-down traversal index within this group.
	 */
	setModulePreOrderIndex(module: Module, index: number): void;

	/**
	 * Returns the module's top-down traversal index within this group.
	 */
	getModulePreOrderIndex(module: Module): undefined | number;

	/**
	 * Stores the module's bottom-up traversal index within this group.
	 */
	setModulePostOrderIndex(module: Module, index: number): void;

	/**
	 * Returns the module's bottom-up traversal index within this group.
	 */
	getModulePostOrderIndex(module: Module): undefined | number;
	checkConstraints(): void;
	getModuleIndex: (module: Module) => undefined | number;
	getModuleIndex2: (module: Module) => undefined | number;
}
declare interface ChunkGroupInfoWithName {
	name: string;
	chunkGroup: ChunkGroup;
}
type ChunkGroupOptions = RawChunkGroupOptions & { name?: null | string };
declare interface ChunkHashContext {
	/**
	 * results of code generation
	 */
	codeGenerationResults: CodeGenerationResults;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;
}
declare interface ChunkHashes {
	[index: number]: string;
	[index: string]: string;
}
type ChunkId = string | number;
declare interface ChunkMaps {
	hash: Record<ChunkId, string>;
	contentHash: Record<ChunkId, Record<string, string>>;
	name: Record<ChunkId, string>;
}
declare interface ChunkModuleHashMap {
	[index: number]: IdToHashMap;
	[index: string]: IdToHashMap;
}
declare interface ChunkModuleHashes {
	[index: string]: string;
}
declare interface ChunkModuleIdMapEs5Alias_1 {
	[index: number]: ChunkId[];
	[index: string]: ChunkId[];
}
declare interface ChunkModuleIdMapEs5Alias_2 {
	[index: number]: ModuleId[];
	[index: string]: ModuleId[];
}
declare class ChunkModuleIdRangePlugin {
	/**
	 * Creates an instance of ChunkModuleIdRangePlugin.
	 */
	constructor(options: ChunkModuleIdRangePluginOptions);
	options: ChunkModuleIdRangePluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface ChunkModuleIdRangePluginOptions {
	/**
	 * the chunk name
	 */
	name: string;

	/**
	 * order
	 */
	order?: "index" | "index2" | "preOrderIndex" | "postOrderIndex";

	/**
	 * start id
	 */
	start?: number;

	/**
	 * end id
	 */
	end?: number;
}
declare interface ChunkModuleIds {
	[index: number]: ModuleId[];
	[index: string]: ModuleId[];
}
declare interface ChunkModuleMaps {
	id: ChunkModuleIdMapEs5Alias_1;
	hash: chunkModuleHashMap;
}
type ChunkName = null | string;
declare interface ChunkPathData {
	id: string | number;
	name?: string;
	hash: string;
	hashWithLength?: (length: number) => string;
	contentHash?: Record<string, string>;
	contentHashWithLength?: Record<string, (length: number) => string>;
}
declare class ChunkPrefetchPreloadPlugin {
	constructor();

	/**
	 * Registers compilation hooks that emit the runtime modules responsible for
	 * scheduling chunk prefetch and preload requests.
	 */
	apply(compiler: Compiler): void;
}
declare interface ChunkRenderContextCssModulesPlugin {
	/**
	 * the chunk
	 */
	chunk?: Chunk;

	/**
	 * the chunk graph
	 */
	chunkGraph?: ChunkGraph;

	/**
	 * results of code generation
	 */
	codeGenerationResults?: CodeGenerationResults;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * undo path to css file
	 */
	undoPath: string;

	/**
	 * moduleFactoryCache
	 */
	moduleFactoryCache: WeakMap<Source, ModuleFactoryCacheEntry>;

	/**
	 * content
	 */
	moduleSourceContent: Source;
}
declare interface ChunkRenderContextJavascriptModulesPlugin {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * results of code generation
	 */
	codeGenerationResults: CodeGenerationResults;

	/**
	 * init fragments for the chunk
	 */
	chunkInitFragments: InitFragment<ChunkRenderContextJavascriptModulesPlugin>[];

	/**
	 * rendering in strict context
	 */
	strictMode?: boolean;
}
declare interface ChunkRuntime {
	[index: number]: string;
	[index: string]: string;
}
declare interface ChunkSizeOptions {
	/**
	 * constant overhead for a chunk
	 */
	chunkOverhead?: number;

	/**
	 * multiplicator for initial chunks
	 */
	entryChunkMultiplicator?: number;
}
declare abstract class ChunkTemplate {
	hooks: Readonly<{
		renderManifest: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					renderManifestEntries: RenderManifestEntry[],
					renderManifestOptions: RenderManifestOptions
				) => RenderManifestEntry[]
			) => void;
		};
		modules: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					source: Source,
					moduleTemplate: ModuleTemplate,
					renderContext: RenderContextJavascriptModulesPlugin
				) => Source
			) => void;
		};
		render: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					source: Source,
					moduleTemplate: ModuleTemplate,
					renderContext: RenderContextJavascriptModulesPlugin
				) => Source
			) => void;
		};
		renderWithEntry: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (source: Source, chunk: Chunk) => Source
			) => void;
		};
		hash: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (hash: Hash) => void
			) => void;
		};
		hashForChunk: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					hash: Hash,
					chunk: Chunk,
					chunkHashContext: ChunkHashContext
				) => void
			) => void;
		};
	}>;
	get outputOptions(): OutputNormalizedWithDefaults;
}

/**
 * Advanced options for cleaning assets.
 */
declare interface CleanOptions {
	/**
	 * Log the assets that should be removed instead of deleting them.
	 */
	dry?: boolean;

	/**
	 * Keep these assets.
	 */
	keep?: string | RegExp | ((path: string) => undefined | boolean);
}
declare class CleanPlugin {
	constructor(options?: CleanOptions);
	options: CleanOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Returns the attached hooks.
	 */
	static getCompilationHooks(
		compilation: Compilation
	): CleanPluginCompilationHooks;
}
declare interface CleanPluginCompilationHooks {
	/**
	 * when returning true the file/directory will be kept during cleaning, returning false will clean it and ignore the following plugins and config
	 */
	keep: SyncBailHook<[string], boolean | void>;
}
declare interface CodeGenMapOverloads {
	get: <K extends string>(key: K) => undefined | CodeGenValue<K>;
	set: <K extends string>(
		key: K,
		value: CodeGenValue<K>
	) => CodeGenerationResultData;
	has: <K extends string>(key: K) => boolean;
	delete: <K extends string>(key: K) => boolean;
}
type CodeGenValue<K extends string> = K extends
	| "filename"
	| "assetInfo"
	| "share-init"
	| "topLevelDeclarations"
	| "chunkInitFragments"
	| "url"
	| "fullContentHash"
	? AllCodeGenerationSchemas[K]
	: any;
declare interface CodeGenerationContext {
	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * the runtimes code should be generated for
	 */
	runtime: RuntimeSpec;

	/**
	 * all runtimes code should be generated for
	 */
	runtimes: RuntimeSpec[];

	/**
	 * when in concatenated module, information about other concatenated modules
	 */
	concatenationScope?: ConcatenationScope;

	/**
	 * code generation results of other modules (need to have a codeGenerationDependency to use that)
	 */
	codeGenerationResults?: CodeGenerationResults;

	/**
	 * the compilation
	 */
	compilation?: Compilation;

	/**
	 * source types
	 */
	sourceTypes?: ReadonlySet<string>;
}
declare interface CodeGenerationJob {
	module: Module;
	hash: string;
	runtime: RuntimeSpec;
	runtimes: RuntimeSpec[];
}
declare interface CodeGenerationResult {
	/**
	 * the resulting sources for all source types
	 */
	sources: Map<string, Source>;

	/**
	 * the resulting data for all source types
	 */
	data?: CodeGenerationResultData;

	/**
	 * the runtime requirements
	 */
	runtimeRequirements: null | ReadonlySet<string>;

	/**
	 * a hash of the code generation result (will be automatically calculated from sources and runtimeRequirements if not provided)
	 */
	hash?: string;
}
type CodeGenerationResultData = Omit<
	Map<string, any>,
	"get" | "set" | "has" | "delete"
> &
	CodeGenMapOverloads;
declare abstract class CodeGenerationResults {
	map: Map<Module, RuntimeSpecMap<CodeGenerationResult, CodeGenerationResult>>;

	/**
	 * Returns the code generation result for a module/runtime pair, rejecting
	 * ambiguous lookups where no unique runtime-independent result exists.
	 */
	get(module: Module, runtime: RuntimeSpec): CodeGenerationResult;

	/**
	 * Reports whether a module has a stored result for the requested runtime, or
	 * a single unambiguous result when no runtime is specified.
	 */
	has(module: Module, runtime: RuntimeSpec): boolean;

	/**
	 * Returns a generated source of the requested source type from a stored code
	 * generation result.
	 */
	getSource(module: Module, runtime: RuntimeSpec, sourceType: string): Source;

	/**
	 * Returns the runtime requirements captured during code generation for the
	 * requested module/runtime pair.
	 */
	getRuntimeRequirements(
		module: Module,
		runtime: RuntimeSpec
	): null | ReadonlySet<string>;

	/**
	 * Returns an arbitrary metadata entry recorded during code generation.
	 */
	getData(module: Module, runtime: RuntimeSpec, key: string): any;

	/**
	 * Returns a stable hash for the generated sources and runtime requirements,
	 * computing and caching it on first access.
	 */
	getHash(module: Module, runtime: RuntimeSpec): string;

	/**
	 * Stores a code generation result for a module/runtime pair, creating the
	 * per-module runtime map when needed.
	 */
	add(module: Module, runtime: RuntimeSpec, result: CodeGenerationResult): void;
}
type CodeValue =
	| undefined
	| null
	| string
	| number
	| bigint
	| boolean
	| Function
	| RegExp
	| RuntimeValue
	| {
			[index: string]: RecursiveArrayOrRecord<
				| undefined
				| null
				| string
				| number
				| bigint
				| boolean
				| Function
				| RegExp
				| RuntimeValue
			>;
	  }
	| RecursiveArrayOrRecord<
			| undefined
			| null
			| string
			| number
			| bigint
			| boolean
			| Function
			| RegExp
			| RuntimeValue
	  >[];
type CodeValuePrimitive =
	| undefined
	| null
	| string
	| number
	| bigint
	| boolean
	| Function
	| RegExp;
declare interface Colors {
	reset: (value?: any) => string;
	bold: (value?: any) => string;
	dim: (value?: any) => string;
	italic: (value?: any) => string;
	underline: (value?: any) => string;
	inverse: (value?: any) => string;
	hidden: (value?: any) => string;
	strikethrough: (value?: any) => string;
	black: (value?: any) => string;
	red: (value?: any) => string;
	green: (value?: any) => string;
	yellow: (value?: any) => string;
	blue: (value?: any) => string;
	magenta: (value?: any) => string;
	cyan: (value?: any) => string;
	white: (value?: any) => string;
	gray: (value?: any) => string;
	bgBlack: (value?: any) => string;
	bgRed: (value?: any) => string;
	bgGreen: (value?: any) => string;
	bgYellow: (value?: any) => string;
	bgBlue: (value?: any) => string;
	bgMagenta: (value?: any) => string;
	bgCyan: (value?: any) => string;
	bgWhite: (value?: any) => string;
	blackBright: (value?: any) => string;
	redBright: (value?: any) => string;
	greenBright: (value?: any) => string;
	yellowBright: (value?: any) => string;
	blueBright: (value?: any) => string;
	magentaBright: (value?: any) => string;
	cyanBright: (value?: any) => string;
	whiteBright: (value?: any) => string;
	bgBlackBright: (value?: any) => string;
	bgRedBright: (value?: any) => string;
	bgGreenBright: (value?: any) => string;
	bgYellowBright: (value?: any) => string;
	bgBlueBright: (value?: any) => string;
	bgMagentaBright: (value?: any) => string;
	bgCyanBright: (value?: any) => string;
	bgWhiteBright: (value?: any) => string;
}

/**
 * Creates a colors from the provided colors option.
 */
declare interface ColorsOptions {
	/**
	 * force use colors
	 */
	useColor?: boolean;
}
declare interface CommentCssParser {
	value: string;
	range: [number, number];
	loc: { start: Position; end: Position };
}
type CommentJavascriptParser = CommentImport & {
	start: number;
	end: number;
	loc: SourceLocation;
};
declare interface CommonJsImportSettings {
	name?: string;
	context: string;
}
declare interface Comparator<T> {
	(a: T, b: T): 0 | 1 | -1;
}
declare class CompatSource extends Source {
	constructor(sourceLike: SourceLike);
	static from(sourceLike: SourceLike): Source;
}
declare interface CompatibilitySettings {
	name: string;
	declaration: CompatibilitySettingsDeclaration;
}
declare interface CompatibilitySettingsDeclaration {
	updated: boolean;
	loc: DependencyLocation;
	range: [number, number];
}
declare class Compilation {
	/**
	 * Creates an instance of Compilation.
	 */
	constructor(compiler: Compiler, params: CompilationParams);
	hooks: Readonly<{
		buildModule: SyncHook<[Module]>;
		rebuildModule: SyncHook<[Module]>;
		failedModule: SyncHook<[Module, WebpackError]>;
		succeedModule: SyncHook<[Module]>;
		stillValidModule: SyncHook<[Module]>;
		addEntry: SyncHook<[Dependency, EntryOptions]>;
		failedEntry: SyncHook<[Dependency, EntryOptions, Error]>;
		succeedEntry: SyncHook<[Dependency, EntryOptions, Module]>;
		dependencyReferencedExports: SyncWaterfallHook<
			[(string[] | ReferencedExport)[], Dependency, RuntimeSpec],
			(string[] | ReferencedExport)[]
		>;
		executeModule: SyncHook<[ExecuteModuleArgument, ExecuteModuleContext]>;
		prepareModuleExecution: AsyncParallelHook<
			[ExecuteModuleArgument, ExecuteModuleContext]
		>;
		finishModules: AsyncSeriesHook<[Iterable<Module>]>;
		finishRebuildingModule: AsyncSeriesHook<[Module]>;
		unseal: SyncHook<[]>;
		seal: SyncHook<[]>;
		beforeChunks: SyncHook<[]>;
		/**
		 * The `afterChunks` hook is called directly after the chunks and module graph have
		 * been created and before the chunks and modules have been optimized. This hook is useful to
		 * inspect, analyze, and/or modify the chunk graph.
		 */
		afterChunks: SyncHook<[Iterable<Chunk>]>;
		optimizeDependencies: SyncBailHook<[Iterable<Module>], boolean | void>;
		afterOptimizeDependencies: SyncHook<[Iterable<Module>]>;
		optimize: SyncHook<[]>;
		optimizeModules: SyncBailHook<[Iterable<Module>], boolean | void>;
		afterOptimizeModules: SyncHook<[Iterable<Module>]>;
		optimizeChunks: SyncBailHook<
			[Iterable<Chunk>, ChunkGroup[]],
			boolean | void
		>;
		afterOptimizeChunks: SyncHook<[Iterable<Chunk>, ChunkGroup[]]>;
		optimizeTree: AsyncSeriesHook<[Iterable<Chunk>, Iterable<Module>]>;
		afterOptimizeTree: SyncHook<[Iterable<Chunk>, Iterable<Module>]>;
		optimizeChunkModules: AsyncSeriesBailHook<
			[Iterable<Chunk>, Iterable<Module>],
			void
		>;
		afterOptimizeChunkModules: SyncHook<[Iterable<Chunk>, Iterable<Module>]>;
		shouldRecord: SyncBailHook<[], boolean | void>;
		additionalChunkRuntimeRequirements: SyncHook<
			[Chunk, Set<string>, RuntimeRequirementsContext]
		>;
		runtimeRequirementInChunk: HookMap<
			SyncBailHook<[Chunk, Set<string>, RuntimeRequirementsContext], void>
		>;
		additionalModuleRuntimeRequirements: SyncHook<
			[Module, Set<string>, RuntimeRequirementsContext]
		>;
		runtimeRequirementInModule: HookMap<
			SyncBailHook<[Module, Set<string>, RuntimeRequirementsContext], void>
		>;
		additionalTreeRuntimeRequirements: SyncHook<
			[Chunk, Set<string>, RuntimeRequirementsContext]
		>;
		runtimeRequirementInTree: HookMap<
			SyncBailHook<[Chunk, Set<string>, RuntimeRequirementsContext], void>
		>;
		runtimeModule: SyncHook<[RuntimeModule, Chunk]>;
		reviveModules: SyncHook<[Iterable<Module>, Records]>;
		beforeModuleIds: SyncHook<[Iterable<Module>]>;
		moduleIds: SyncHook<[Iterable<Module>]>;
		optimizeModuleIds: SyncHook<[Iterable<Module>]>;
		afterOptimizeModuleIds: SyncHook<[Iterable<Module>]>;
		reviveChunks: SyncHook<[Iterable<Chunk>, Records]>;
		beforeChunkIds: SyncHook<[Iterable<Chunk>]>;
		chunkIds: SyncHook<[Iterable<Chunk>]>;
		optimizeChunkIds: SyncHook<[Iterable<Chunk>]>;
		afterOptimizeChunkIds: SyncHook<[Iterable<Chunk>]>;
		recordModules: SyncHook<[Iterable<Module>, Records]>;
		recordChunks: SyncHook<[Iterable<Chunk>, Records]>;
		optimizeCodeGeneration: SyncHook<[Iterable<Module>]>;
		beforeModuleHash: SyncHook<[]>;
		afterModuleHash: SyncHook<[]>;
		beforeCodeGeneration: SyncHook<[]>;
		afterCodeGeneration: SyncHook<[]>;
		beforeRuntimeRequirements: SyncHook<[]>;
		afterRuntimeRequirements: SyncHook<[]>;
		beforeHash: SyncHook<[]>;
		contentHash: SyncHook<[Chunk]>;
		afterHash: SyncHook<[]>;
		recordHash: SyncHook<[Records]>;
		record: SyncHook<[Compilation, Records]>;
		beforeModuleAssets: SyncHook<[]>;
		shouldGenerateChunkAssets: SyncBailHook<[], boolean | void>;
		beforeChunkAssets: SyncHook<[]>;
		/**
		 * @deprecated
		 */
		additionalChunkAssets: FakeHook<
			Pick<
				AsyncSeriesHook<[Set<Chunk>]>,
				"name" | "tap" | "tapAsync" | "tapPromise"
			>
		>;
		/**
		 * @deprecated
		 */
		additionalAssets: FakeHook<
			Pick<AsyncSeriesHook<[]>, "name" | "tap" | "tapAsync" | "tapPromise">
		>;
		/**
		 * @deprecated
		 */
		optimizeChunkAssets: FakeHook<
			Pick<
				AsyncSeriesHook<[Set<Chunk>]>,
				"name" | "tap" | "tapAsync" | "tapPromise"
			>
		>;
		/**
		 * @deprecated
		 */
		afterOptimizeChunkAssets: FakeHook<
			Pick<
				AsyncSeriesHook<[Set<Chunk>]>,
				"name" | "tap" | "tapAsync" | "tapPromise"
			>
		>;
		/**
		 * @deprecated
		 */
		optimizeAssets: AsyncSeriesHook<
			[CompilationAssets],
			ProcessAssetsAdditionalOptions
		>;
		/**
		 * @deprecated
		 */
		afterOptimizeAssets: SyncHook<[CompilationAssets]>;
		processAssets: AsyncSeriesHook<
			[CompilationAssets],
			ProcessAssetsAdditionalOptions
		>;
		afterProcessAssets: SyncHook<[CompilationAssets]>;
		processAdditionalAssets: AsyncSeriesHook<[CompilationAssets]>;
		needAdditionalSeal: SyncBailHook<[], boolean | void>;
		afterSeal: AsyncSeriesHook<[]>;
		renderManifest: SyncWaterfallHook<
			[RenderManifestEntry[], RenderManifestOptions],
			RenderManifestEntry[]
		>;
		fullHash: SyncHook<[Hash]>;
		chunkHash: SyncHook<[Chunk, Hash, ChunkHashContext]>;
		moduleAsset: SyncHook<[Module, string]>;
		chunkAsset: SyncHook<[Chunk, string]>;
		assetPath: SyncWaterfallHook<
			[string, PathData, undefined | AssetInfo],
			string
		>;
		needAdditionalPass: SyncBailHook<[], boolean | void>;
		childCompiler: SyncHook<[Compiler, string, number]>;
		log: SyncBailHook<[string, LogEntry], boolean | void>;
		processWarnings: SyncWaterfallHook<[Error[]], Error[]>;
		processErrors: SyncWaterfallHook<[Error[]], Error[]>;
		statsPreset: HookMap<
			SyncHook<[Partial<NormalizedStatsOptions>, CreateStatsOptionsContext]>
		>;
		statsNormalize: SyncHook<
			[Partial<NormalizedStatsOptions>, CreateStatsOptionsContext]
		>;
		statsFactory: SyncHook<[StatsFactory, NormalizedStatsOptions]>;
		statsPrinter: SyncHook<[StatsPrinter, NormalizedStatsOptions]>;
		/**
		 * Gets normal module loader.
		 * @deprecated
		 */
		get normalModuleLoader(): SyncHook<[AnyLoaderContext, NormalModule]>;
	}>;
	name?: string;
	startTime?: number;
	endTime?: number;
	compiler: Compiler;
	resolverFactory: ResolverFactory;
	inputFileSystem: InputFileSystem;
	fileSystemInfo: FileSystemInfo;
	valueCacheVersions: Map<string, ValueCacheVersion>;
	requestShortener: RequestShortener;
	compilerPath: string;
	logger: WebpackLogger;
	options: WebpackOptionsNormalizedWithDefaults;
	outputOptions: OutputNormalizedWithDefaults;
	bail: boolean;
	profile: boolean;
	params: CompilationParams;
	mainTemplate: MainTemplate;
	chunkTemplate: ChunkTemplate;
	runtimeTemplate: RuntimeTemplate;
	moduleTemplates: ModuleTemplates;
	moduleMemCaches?: Map<Module, WeakTupleMap<any[], any>>;
	moduleMemCaches2?: Map<Module, WeakTupleMap<any[], any>>;
	moduleGraph: ModuleGraph;
	chunkGraph: ChunkGraph;
	codeGenerationResults?: CodeGenerationResults;
	processDependenciesQueue: AsyncQueue<Module, Module, Module>;
	addModuleQueue: AsyncQueue<Module, string, Module>;
	factorizeQueue: AsyncQueue<
		FactorizeModuleOptions,
		string,
		Module | ModuleFactoryResult
	>;
	buildQueue: AsyncQueue<Module, Module, Module>;
	rebuildQueue: AsyncQueue<Module, Module, Module>;

	/**
	 * Modules in value are building during the build of Module in key.
	 * Means value blocking key from finishing.
	 * Needed to detect build cycles.
	 */
	creatingModuleDuringBuild: WeakMap<Module, Set<Module>>;
	entries: Map<string, EntryData>;
	globalEntry: EntryData;
	entrypoints: Map<string, Entrypoint>;
	asyncEntrypoints: Entrypoint[];
	chunks: Set<Chunk>;
	chunkGroups: ChunkGroup[];
	namedChunkGroups: Map<string, ChunkGroup>;
	namedChunks: Map<string, Chunk>;
	modules: Set<Module>;
	records: null | Records;
	additionalChunkAssets: string[];
	assets: CompilationAssets;
	assetsInfo: Map<string, AssetInfo>;
	errors: Error[];
	warnings: Error[];
	children: Compilation[];
	logging: Map<string, LogEntry[]>;
	dependencyFactories: Map<DependencyConstructor, ModuleFactory>;
	dependencyTemplates: DependencyTemplates;
	childrenCounters: Record<string, number>;
	usedChunkIds: null | Set<number>;
	usedModuleIds: null | Set<number>;
	needAdditionalPass: boolean;
	builtModules: WeakSet<Module>;
	codeGeneratedModules: WeakSet<Module>;
	buildTimeExecutedModules: WeakSet<Module>;
	emittedAssets: Set<string>;
	comparedForEmitAssets: Set<string>;
	fileDependencies: LazySet<string>;
	contextDependencies: LazySet<string>;
	missingDependencies: LazySet<string>;
	buildDependencies: LazySet<string>;

	/**
	 * @deprecated
	 */
	compilationDependencies: { add: (item: string) => LazySet<string> };
	getStats(): Stats;

	/**
	 * Creates a stats options.
	 */
	createStatsOptions(
		optionsOrPreset?: string | boolean | StatsOptions,
		context?: CreateStatsOptionsContext
	): NormalizedStatsOptions;

	/**
	 * Creates a stats factory.
	 */
	createStatsFactory(options: NormalizedStatsOptions): StatsFactory;

	/**
	 * Creates a stats printer.
	 */
	createStatsPrinter(options: NormalizedStatsOptions): StatsPrinter;

	/**
	 * Returns the cache facade instance.
	 */
	getCache(name: string): CacheFacade;

	/**
	 * Returns a logger with that name.
	 */
	getLogger(name: string | (() => string)): WebpackLogger;

	/**
	 * Adds the provided module to the compilation.
	 */
	addModule(
		module: Module,
		callback: (err?: null | WebpackError, result?: null | Module) => void
	): void;

	/**
	 * Fetches a module from a compilation by its identifier
	 */
	getModule(module: Module): Module;

	/**
	 * Attempts to search for a module by its identifier
	 */
	findModule(identifier: string): undefined | Module;

	/**
	 * Schedules a build of the module object
	 */
	buildModule(
		module: Module,
		callback: (err?: null | WebpackError, result?: null | Module) => void
	): void;

	/**
	 * Process module dependencies.
	 */
	processModuleDependencies(
		module: Module,
		callback: (err?: null | WebpackError, result?: null | Module) => void
	): void;

	/**
	 * Process module dependencies non recursive.
	 */
	processModuleDependenciesNonRecursive(module: Module): void;

	/**
	 * Processes the provided |.
	 */

	/**
	 * Processes the provided module callback.
	 */
	factorizeModule(
		options: FactorizeModuleOptions & { factoryResult?: false },
		callback: (err?: null | WebpackError, result?: null | Module) => void
	): void;

	/**
	 * Processes the provided |.
	 */

	/**
	 * Processes the provided module factory result callback.
	 */
	factorizeModule(
		options: FactorizeModuleOptions & { factoryResult: true },
		callback: (
			err?: null | WebpackError,
			result?: null | ModuleFactoryResult
		) => void
	): void;

	/**
	 * Handle module creation.
	 */
	handleModuleCreation(
		__0: HandleModuleCreationOptions,
		callback: (err?: null | WebpackError, result?: null | Module) => void
	): void;

	/**
	 * Adds the provided string to the compilation.
	 */
	addModuleChain(
		context: string,
		dependency: Dependency,
		callback: (err?: null | WebpackError, result?: null | Module) => void
	): void;

	/**
	 * Adds the provided object to the compilation.
	 */
	addModuleTree(
		__0: {
			/**
			 * context string path
			 */
			context: string;
			/**
			 * dependency used to create Module chain
			 */
			dependency: Dependency;
			/**
			 * additional context info for the root module
			 */
			contextInfo?: Partial<ModuleFactoryCreateDataContextInfo>;
		},
		callback: (err?: null | WebpackError, result?: null | Module) => void
	): void;

	/**
	 * Adds the provided string to the compilation.
	 */
	addEntry(
		context: string,
		entry: Dependency,
		optionsOrName: string | EntryOptions,
		callback: (err?: null | WebpackError, result?: null | Module) => void
	): void;

	/**
	 * Adds the provided string to the compilation.
	 */
	addInclude(
		context: string,
		dependency: Dependency,
		options: EntryOptions,
		callback: (err?: null | WebpackError, result?: null | Module) => void
	): void;

	/**
	 * Processes the provided module.
	 */
	rebuildModule(
		module: Module,
		callback: (err?: null | WebpackError, result?: null | Module) => void
	): void;

	/**
	 * Processes the provided callback.
	 */
	finish(callback: (err?: null | WebpackError) => void): void;
	unseal(): void;

	/**
	 * Processes the provided callback.
	 */
	seal(callback: (err?: null | WebpackError) => void): void;

	/**
	 * Report dependency errors and warnings.
	 */
	reportDependencyErrorsAndWarnings(
		module: Module,
		blocks: DependenciesBlock[]
	): boolean;

	/**
	 * Generates code and runtime requirements for this module.
	 */
	codeGeneration(callback: (err?: null | WebpackError) => void): void;

	/**
	 * Process runtime requirements.
	 */
	processRuntimeRequirements(__0?: {
		/**
		 * the chunk graph
		 */
		chunkGraph?: ChunkGraph;
		/**
		 * modules
		 */
		modules?: Iterable<Module>;
		/**
		 * chunks
		 */
		chunks?: Iterable<Chunk>;
		/**
		 * codeGenerationResults
		 */
		codeGenerationResults?: CodeGenerationResults;
		/**
		 * chunkGraphEntries
		 */
		chunkGraphEntries?: Iterable<Chunk>;
	}): void;

	/**
	 * Adds runtime module.
	 */
	addRuntimeModule(
		chunk: Chunk,
		module: RuntimeModule,
		chunkGraph?: ChunkGraph
	): void;

	/**
	 * If `module` is passed, `loc` and `request` must also be passed.
	 */
	addChunkInGroup(
		groupOptions: string | ChunkGroupOptions,
		module?: Module,
		loc?: SyntheticDependencyLocation | RealDependencyLocation,
		request?: string
	): ChunkGroup;

	/**
	 * Adds the provided async entrypoint to this chunk group.
	 */
	addAsyncEntrypoint(
		options: EntryOptions,
		module: Module,
		loc: DependencyLocation,
		request: string
	): Entrypoint;

	/**
	 * This method first looks to see if a name is provided for a new chunk,
	 * and first looks to see if any named chunks already exist and reuse that chunk instead.
	 */
	addChunk(name?: null | string): Chunk;

	/**
	 * Processes the provided module.
	 * @deprecated
	 */
	assignDepth(module: Module): void;

	/**
	 * Assigns depth values to the provided modules.
	 */
	assignDepths(modules: Module[] | Set<Module>): void;

	/**
	 * Gets dependency referenced exports.
	 */
	getDependencyReferencedExports(
		dependency: Dependency,
		runtime: RuntimeSpec
	): (string[] | ReferencedExport)[];

	/**
	 * Removes reasons of dependency block.
	 */
	removeReasonsOfDependencyBlock(
		module: Module,
		block: DependenciesBlockLike
	): void;

	/**
	 * Patch chunks after reason removal.
	 */
	patchChunksAfterReasonRemoval(module: Module, chunk: Chunk): void;

	/**
	 * Removes chunk from dependencies.
	 */
	removeChunkFromDependencies(block: DependenciesBlock, chunk: Chunk): void;
	assignRuntimeIds(): void;
	sortItemsWithChunkIds(): void;
	summarizeDependencies(): void;
	createModuleHashes(): void;
	createHash(): CodeGenerationJob[];
	fullHash?: string;
	hash?: string;

	/**
	 * Processes the provided file.
	 */
	emitAsset(file: string, source: Source, assetInfo?: AssetInfo): void;

	/**
	 * Updates asset using the provided file.
	 */
	updateAsset(
		file: string,
		newSourceOrFunction: Source | ((source: Source) => Source),
		assetInfoUpdateOrFunction?:
			| AssetInfo
			| ((assetInfo?: AssetInfo) => undefined | AssetInfo)
	): void;

	/**
	 * Processes the provided file.
	 */
	renameAsset(file: string, newFile: string): void;

	/**
	 * Processes the provided file.
	 */
	deleteAsset(file: string): void;
	getAssets(): Readonly<Asset>[];

	/**
	 * Returns the asset or undefined when not found.
	 */
	getAsset(name: string): undefined | Readonly<Asset>;
	clearAssets(): void;
	createModuleAssets(): void;

	/**
	 * Gets render manifest.
	 */
	getRenderManifest(options: RenderManifestOptions): RenderManifestEntry[];

	/**
	 * Creates a chunk assets.
	 */
	createChunkAssets(callback: (err?: null | WebpackError) => void): void;

	/**
	 * Returns interpolated path.
	 */
	getPath(filename: TemplatePath, data?: PathData): string;

	/**
	 * Gets path with info.
	 */
	getPathWithInfo(
		filename: TemplatePath,
		data?: PathData
	): InterpolatedPathAndAssetInfo;

	/**
	 * Returns interpolated path.
	 */
	getAssetPath(filename: TemplatePath, data: PathData): string;

	/**
	 * Gets asset path with info.
	 */
	getAssetPathWithInfo(
		filename: TemplatePath,
		data: PathData
	): InterpolatedPathAndAssetInfo;
	getWarnings(): Error[];
	getErrors(): Error[];

	/**
	 * This function allows you to run another instance of webpack inside of webpack however as
	 * a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
	 * from parent (or top level compiler) and creates a child Compilation
	 */
	createChildCompiler(
		name: string,
		outputOptions?: Partial<OutputNormalized>,
		plugins?: (
			| undefined
			| null
			| false
			| ""
			| 0
			| ((this: Compiler, compiler: Compiler) => void)
			| WebpackPluginInstance
		)[]
	): Compiler;

	/**
	 * Processes the provided module.
	 */
	executeModule(
		module: Module,
		options: ExecuteModuleOptions,
		callback: (
			err?: null | WebpackError,
			result?: null | ExecuteModuleResult
		) => void
	): void;
	checkConstraints(): void;

	/**
	 * Add additional assets to the compilation.
	 */
	static PROCESS_ASSETS_STAGE_ADDITIONAL: number;

	/**
	 * Basic preprocessing of assets.
	 */
	static PROCESS_ASSETS_STAGE_PRE_PROCESS: number;

	/**
	 * Derive new assets from existing assets.
	 * Existing assets should not be treated as complete.
	 */
	static PROCESS_ASSETS_STAGE_DERIVED: number;

	/**
	 * Add additional sections to existing assets, like a banner or initialization code.
	 */
	static PROCESS_ASSETS_STAGE_ADDITIONS: number;

	/**
	 * Optimize existing assets in a general way.
	 */
	static PROCESS_ASSETS_STAGE_OPTIMIZE: number;

	/**
	 * Optimize the count of existing assets, e. g. by merging them.
	 * Only assets of the same type should be merged.
	 * For assets of different types see PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE.
	 */
	static PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT: number;

	/**
	 * Optimize the compatibility of existing assets, e. g. add polyfills or vendor-prefixes.
	 */
	static PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY: number;

	/**
	 * Optimize the size of existing assets, e. g. by minimizing or omitting whitespace.
	 */
	static PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE: number;

	/**
	 * Add development tooling to assets, e. g. by extracting a SourceMap.
	 */
	static PROCESS_ASSETS_STAGE_DEV_TOOLING: number;

	/**
	 * Optimize the count of existing assets, e. g. by inlining assets of into other assets.
	 * Only assets of different types should be inlined.
	 * For assets of the same type see PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT.
	 */
	static PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE: number;

	/**
	 * Summarize the list of existing assets
	 * e. g. creating an assets manifest of Service Workers.
	 */
	static PROCESS_ASSETS_STAGE_SUMMARIZE: number;

	/**
	 * Optimize the hashes of the assets, e. g. by generating real hashes of the asset content.
	 */
	static PROCESS_ASSETS_STAGE_OPTIMIZE_HASH: number;

	/**
	 * Optimize the transfer of existing assets, e. g. by preparing a compressed (gzip) file as separate asset.
	 */
	static PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER: number;

	/**
	 * Analyse existing assets.
	 */
	static PROCESS_ASSETS_STAGE_ANALYSE: number;

	/**
	 * Creating assets for reporting purposes.
	 */
	static PROCESS_ASSETS_STAGE_REPORT: number;
}
declare interface CompilationAssets {
	[index: string]: Source;
}
declare interface CompilationHooksAsyncWebAssemblyModulesPlugin {
	renderModuleContent: SyncWaterfallHook<
		[Source, Module, WebAssemblyRenderContext],
		Source
	>;
}
declare interface CompilationHooksCssModulesPlugin {
	renderModulePackage: SyncWaterfallHook<
		[Source, Module, ChunkRenderContextCssModulesPlugin],
		Source
	>;
	chunkHash: SyncHook<[Chunk, Hash, ChunkHashContext]>;
}
declare interface CompilationHooksJavascriptModulesPlugin {
	renderModuleContent: SyncWaterfallHook<
		[Source, Module, ModuleRenderContext],
		Source
	>;
	renderModuleContainer: SyncWaterfallHook<
		[Source, Module, ModuleRenderContext],
		Source
	>;
	renderModulePackage: SyncWaterfallHook<
		[Source, Module, ModuleRenderContext],
		Source
	>;
	renderChunk: SyncWaterfallHook<
		[Source, RenderContextJavascriptModulesPlugin],
		Source
	>;
	renderMain: SyncWaterfallHook<
		[Source, RenderContextJavascriptModulesPlugin],
		Source
	>;
	renderContent: SyncWaterfallHook<
		[Source, RenderContextJavascriptModulesPlugin],
		Source
	>;
	render: SyncWaterfallHook<
		[Source, RenderContextJavascriptModulesPlugin],
		Source
	>;
	renderStartup: SyncWaterfallHook<
		[Source, Module, StartupRenderContext],
		Source
	>;
	renderRequire: SyncWaterfallHook<[string, RenderBootstrapContext], string>;
	inlineInRuntimeBailout: SyncBailHook<
		[Module, Partial<RenderBootstrapContext>],
		string | void
	>;
	embedInRuntimeBailout: SyncBailHook<
		[Module, RenderContextJavascriptModulesPlugin],
		string | void
	>;
	strictRuntimeBailout: SyncBailHook<
		[RenderContextJavascriptModulesPlugin],
		string | void
	>;
	chunkHash: SyncHook<[Chunk, Hash, ChunkHashContext]>;
	useSourceMap: SyncBailHook<
		[Chunk, RenderContextJavascriptModulesPlugin],
		boolean | void
	>;
}
declare interface CompilationHooksModuleFederationPlugin {
	addContainerEntryDependency: SyncHook<Dependency>;
	addFederationRuntimeDependency: SyncHook<Dependency>;
}
declare interface CompilationHooksRealContentHashPlugin {
	updateHash: SyncBailHook<[Buffer[], string], string | void>;
}

/**
 * Checks whether this object is sorted.
 */
declare interface CompilationParams {
	normalModuleFactory: NormalModuleFactory;
	contextModuleFactory: ContextModuleFactory;
}
declare class Compiler {
	/**
	 * Creates an instance of Compiler.
	 */
	constructor(context: string, options?: WebpackOptionsNormalized);
	hooks: Readonly<{
		initialize: SyncHook<[]>;
		shouldEmit: SyncBailHook<[Compilation], boolean | void>;
		done: AsyncSeriesHook<[Stats]>;
		afterDone: SyncHook<[Stats]>;
		additionalPass: AsyncSeriesHook<[]>;
		beforeRun: AsyncSeriesHook<[Compiler]>;
		run: AsyncSeriesHook<[Compiler]>;
		emit: AsyncSeriesHook<[Compilation]>;
		assetEmitted: AsyncSeriesHook<[string, AssetEmittedInfo]>;
		afterEmit: AsyncSeriesHook<[Compilation]>;
		thisCompilation: SyncHook<[Compilation, CompilationParams]>;
		compilation: SyncHook<[Compilation, CompilationParams]>;
		normalModuleFactory: SyncHook<[NormalModuleFactory]>;
		contextModuleFactory: SyncHook<[ContextModuleFactory]>;
		beforeCompile: AsyncSeriesHook<[CompilationParams]>;
		compile: SyncHook<[CompilationParams]>;
		make: AsyncParallelHook<[Compilation]>;
		finishMake: AsyncParallelHook<[Compilation]>;
		afterCompile: AsyncSeriesHook<[Compilation]>;
		readRecords: AsyncSeriesHook<[]>;
		emitRecords: AsyncSeriesHook<[]>;
		watchRun: AsyncSeriesHook<[Compiler]>;
		failed: SyncHook<[Error]>;
		invalid: SyncHook<[null | string, number]>;
		watchClose: SyncHook<[]>;
		shutdown: AsyncSeriesHook<[]>;
		infrastructureLog: SyncBailHook<
			[string, string, undefined | any[]],
			true | void
		>;
		validate: SyncHook<[]>;
		environment: SyncHook<[]>;
		afterEnvironment: SyncHook<[]>;
		afterPlugins: SyncHook<[Compiler]>;
		afterResolvers: SyncHook<[Compiler]>;
		entryOption: SyncBailHook<[string, EntryNormalized], boolean | void>;
	}>;
	webpack: typeof exports;
	name?: string;
	parentCompilation?: Compilation;
	root: Compiler;
	outputPath: string;
	watching?: Watching;
	outputFileSystem: null | OutputFileSystem;
	intermediateFileSystem: null | IntermediateFileSystem;
	inputFileSystem: null | InputFileSystem;
	watchFileSystem: null | WatchFileSystem;
	recordsInputPath: null | string;
	recordsOutputPath: null | string;
	records: Records;
	managedPaths: Set<string | RegExp>;
	unmanagedPaths: Set<string | RegExp>;
	immutablePaths: Set<string | RegExp>;
	modifiedFiles?: ReadonlySet<string>;
	removedFiles?: ReadonlySet<string>;
	fileTimestamps?: Map<
		string,
		| null
		| EntryTypesIndex
		| OnlySafeTimeEntry
		| ExistenceOnlyTimeEntryTypesIndex
		| "ignore"
	>;
	contextTimestamps?: Map<
		string,
		| null
		| EntryTypesIndex
		| OnlySafeTimeEntry
		| ExistenceOnlyTimeEntryTypesIndex
		| "ignore"
	>;
	fsStartTime?: number;
	resolverFactory: ResolverFactory;
	infrastructureLogger?: (
		value: string,
		type: LogTypeEnum,
		args?: any[]
	) => void;
	platform: Readonly<PlatformTargetProperties>;
	options: WebpackOptionsNormalized;
	context: string;
	requestShortener: RequestShortener;
	cache: CacheClass;
	moduleMemCaches?: Map<Module, ModuleMemCachesItem>;
	compilerPath: string;
	running: boolean;
	idle: boolean;
	watchMode: boolean;

	/**
	 * Returns the cache facade instance.
	 */
	getCache(name: string): CacheFacade;

	/**
	 * Gets infrastructure logger.
	 */
	getInfrastructureLogger(name: string | (() => string)): WebpackLogger;

	/**
	 * Returns a compiler watcher.
	 */
	watch(
		watchOptions: WatchOptions,
		handler: CallbackWebpackFunction_2<Stats, void>
	): undefined | Watching;

	/**
	 * Processes the provided stat.
	 */
	run(callback: CallbackWebpackFunction_2<Stats, void>): void;

	/**
	 * Processes the provided run as child callback.
	 */
	runAsChild(
		callback: (
			err: null | Error,
			entries?: Chunk[],
			compilation?: Compilation
		) => void
	): void;
	purgeInputFileSystem(): void;

	/**
	 * Processes the provided compilation.
	 */
	emitAssets(
		compilation: Compilation,
		callback: (err: null | Error, result?: void) => void
	): void;

	/**
	 * Processes the provided error callback.
	 */
	emitRecords(callback: (err: null | Error, result?: void) => void): void;

	/**
	 * Processes the provided error callback.
	 */
	readRecords(callback: (err: null | Error, result?: void) => void): void;

	/**
	 * Creates a child compiler.
	 */
	createChildCompiler(
		compilation: Compilation,
		compilerName: string,
		compilerIndex: number,
		outputOptions?: Partial<OutputNormalized>,
		plugins?: (
			| undefined
			| null
			| false
			| ""
			| 0
			| ((this: Compiler, compiler: Compiler) => void)
			| WebpackPluginInstance
		)[]
	): Compiler;
	isChild(): boolean;

	/**
	 * Creates a compilation.
	 */
	createCompilation(params: CompilationParams): Compilation;

	/**
	 * Returns the created compilation.
	 */
	newCompilation(params: CompilationParams): Compilation;
	createNormalModuleFactory(): NormalModuleFactory;
	createContextModuleFactory(): ContextModuleFactory;
	newCompilationParams(): {
		normalModuleFactory: NormalModuleFactory;
		contextModuleFactory: ContextModuleFactory;
	};

	/**
	 * Processes the provided compilation.
	 */
	compile(callback: CallbackWebpackFunction_2<Compilation, void>): void;

	/**
	 * Processes the provided error callback.
	 */
	close(callback: (err: null | Error, result?: void) => void): void;

	/**
	 * Schema validation function with optional pre-compiled check
	 */
	validate<T extends Parameters<typeof validateFunction>[1] = object>(
		schema:
			| (JSONSchema4 & ExtendedSchema)
			| (JSONSchema6 & ExtendedSchema)
			| (JSONSchema7 & ExtendedSchema)
			| (() => Parameters<typeof validateFunction>[0]),
		value: T,
		options?: ValidationErrorConfiguration,
		check?: (value: T) => boolean
	): void;
}
declare class ConcatSource extends Source {
	constructor(...args: ConcatSourceChild[]);
	getChildren(): Source[];
	add(item: ConcatSourceChild): void;
	addAllSkipOptimizing(items: ConcatSourceChild[]): void;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string
		) => void,
		onName: (nameIndex: number, name: string) => void
	): GeneratedSourceInfo;
}
type ConcatSourceChild = string | Source | SourceLike;
declare interface ConcatenatedModuleInfo {
	type: "concatenated";
	module: Module;
	index: number;
	ast?: Program;
	internalSource?: Source;
	source?: ReplaceSource;
	chunkInitFragments?: InitFragment<ChunkRenderContextJavascriptModulesPlugin>[];
	runtimeRequirements?: ReadonlySet<string>;
	globalScope?: Scope;
	moduleScope?: Scope;
	internalNames: Map<string, string>;
	exportMap?: Map<string, string>;
	rawExportMap?: Map<string, string>;
	namespaceExportSymbol?: string;
	namespaceObjectName?: string;
	concatenationScope?: ConcatenationScope;

	/**
	 * "default-with-named" namespace
	 */
	interopNamespaceObjectUsed: boolean;

	/**
	 * "default-with-named" namespace
	 */
	interopNamespaceObjectName?: string;

	/**
	 * "default-only" namespace
	 */
	interopNamespaceObject2Used: boolean;

	/**
	 * "default-only" namespace
	 */
	interopNamespaceObject2Name?: string;

	/**
	 * runtime namespace object that detects "__esModule"
	 */
	interopDefaultAccessUsed: boolean;

	/**
	 * runtime namespace object that detects "__esModule"
	 */
	interopDefaultAccessName?: string;
}
declare interface ConcatenationBailoutReasonContext {
	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;
}
declare class ConcatenationScope {
	/**
	 * Creates the mutable scope object used while rendering a concatenated
	 * module and its cross-module references.
	 */
	constructor(
		modulesMap: ModuleInfo[] | Map<Module, ModuleInfo>,
		currentModule: ConcatenatedModuleInfo,
		usedNames: Set<string>
	);
	usedNames: Set<string>;

	/**
	 * Checks whether a module participates in the current concatenation scope.
	 */
	isModuleInScope(module: Module): boolean;

	/**
	 * Records the symbol that should be used when the current module exports a
	 * named binding.
	 */
	registerExport(exportName: string, symbol: string): void;

	/**
	 * Records a raw expression that can be used to reference an export without
	 * going through the normal symbol map.
	 */
	registerRawExport(exportName: string, expression: string): void;

	/**
	 * Returns the raw expression registered for an export, if one exists.
	 */
	getRawExport(exportName: string): undefined | string;

	/**
	 * Replaces the raw expression for an export only when that export already
	 * has an entry in the raw export map.
	 */
	setRawExportMap(exportName: string, expression: string): void;

	/**
	 * Records the symbol that should be used for the synthetic namespace export.
	 */
	registerNamespaceExport(symbol: string): void;

	/**
	 * Encodes a reference to another concatenated module as a placeholder
	 * identifier that can be parsed later during code generation.
	 */
	createModuleReference(
		module: Module,
		__1: Partial<ModuleReferenceOptions>
	): string;

	/**
	 * Checks whether an identifier is one of webpack's encoded concatenation
	 * module references.
	 */
	static isModuleReference(name: string): boolean;

	/**
	 * Parses an encoded module reference back into its module index and
	 * reference flags.
	 */
	static matchModuleReference(
		name: string
	): null | (ModuleReferenceOptions & { index: number });
	static DEFAULT_EXPORT: string;
	static NAMESPACE_OBJECT_EXPORT: string;
}

/**
 * Options object as provided by the user.
 */
declare interface Configuration {
	/**
	 * Set the value of `require.amd` and `define.amd`. Or disable AMD support.
	 */
	amd?: false | { [index: string]: any };

	/**
	 * Report the first error as a hard error instead of tolerating it.
	 */
	bail?: boolean;

	/**
	 * Cache generated modules and chunks to improve performance for multiple incremental builds.
	 */
	cache?: boolean | FileCacheOptions | MemoryCacheOptions;

	/**
	 * The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
	 */
	context?: string;

	/**
	 * References to other configurations to depend on.
	 */
	dependencies?: string[];

	/**
	 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
	 */
	devtool?:
		| string
		| false
		| {
				/**
				 * Which asset type should receive this devtool value.
				 */
				type: "all" | "javascript" | "css";
				/**
				 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
				 */
				use: RawDevTool;
		  }[];

	/**
	 * Enable and configure the Dotenv plugin to load environment variables from .env files.
	 */
	dotenv?: boolean | DotenvPluginOptions;

	/**
	 * The entry point(s) of the compilation.
	 */
	entry?:
		| string
		| (() => string | EntryObject | string[] | Promise<EntryStatic>)
		| EntryObject
		| string[];

	/**
	 * Enables/Disables experiments (experimental features with relax SemVer compatibility).
	 */
	experiments?: Experiments;

	/**
	 * Extend configuration from another configuration (only works when using webpack-cli).
	 */
	extends?: string | string[];

	/**
	 * Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
	 */
	externals?:
		| string
		| RegExp
		| (ExternalItemObjectKnown & ExternalItemObjectUnknown)
		| ((
				data: ExternalItemFunctionData,
				callback: (
					err?: null | Error,
					result?: string | boolean | string[] | { [index: string]: any }
				) => void
		  ) => void)
		| ((data: ExternalItemFunctionData) => Promise<ExternalItemValue>)
		| ExternalItem[];

	/**
	 * Enable presets of externals for specific targets.
	 */
	externalsPresets?: ExternalsPresets;

	/**
	 * Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).
	 */
	externalsType?:
		| "import"
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "commonjs-static"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system"
		| "promise"
		| "module-import"
		| "script"
		| "node-commonjs"
		| "asset"
		| "css-import"
		| "css-url";

	/**
	 * Ignore specific warnings.
	 */
	ignoreWarnings?: (
		| RegExp
		| {
				/**
				 * A RegExp to select the origin file for the warning.
				 */
				file?: RegExp;
				/**
				 * A RegExp to select the warning message.
				 */
				message?: RegExp;
				/**
				 * A RegExp to select the origin module for the warning.
				 */
				module?: RegExp;
		  }
		| ((warning: Error, compilation: Compilation) => boolean)
	)[];

	/**
	 * Options for infrastructure level logging.
	 */
	infrastructureLogging?: InfrastructureLogging;

	/**
	 * Custom values available in the loader context.
	 */
	loader?: Loader;

	/**
	 * Enable production optimizations or development hints.
	 */
	mode?: "none" | "development" | "production";

	/**
	 * Options affecting the normal modules (`NormalModuleFactory`).
	 */
	module?: ModuleOptions;

	/**
	 * Name of the configuration. Used when loading multiple configurations.
	 */
	name?: string;

	/**
	 * Include polyfills or mocks for various node stuff.
	 */
	node?: false | NodeOptions;

	/**
	 * Enables/Disables integrated optimizations.
	 */
	optimization?: Optimization;

	/**
	 * Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
	 */
	output?: Output;

	/**
	 * The number of parallel processed modules in the compilation.
	 */
	parallelism?: number;

	/**
	 * Configuration for web performance recommendations.
	 */
	performance?: false | PerformanceOptions;

	/**
	 * Add additional plugins to the compiler.
	 */
	plugins?: (
		| undefined
		| null
		| false
		| ""
		| 0
		| ((this: Compiler, compiler: Compiler) => void)
		| WebpackPluginInstance
	)[];

	/**
	 * Capture timing information for each module.
	 */
	profile?: boolean;

	/**
	 * Store compiler state to a json file.
	 */
	recordsInputPath?: string | false;

	/**
	 * Load compiler state from a json file.
	 */
	recordsOutputPath?: string | false;

	/**
	 * Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined.
	 */
	recordsPath?: string | false;

	/**
	 * Options for the resolver.
	 */
	resolve?: ResolveOptions;

	/**
	 * Options for the resolver when resolving loaders.
	 */
	resolveLoader?: ResolveOptions;

	/**
	 * Options affecting how file system snapshots are created and validated.
	 */
	snapshot?: SnapshotOptionsWebpackOptions;

	/**
	 * Stats options object or preset name.
	 */
	stats?:
		| boolean
		| StatsOptions
		| "none"
		| "summary"
		| "errors-only"
		| "errors-warnings"
		| "minimal"
		| "normal"
		| "detailed"
		| "verbose";

	/**
	 * Environment to build for. An array of environments to build for all of them when possible.
	 */
	target?: string | false | string[];

	/**
	 * Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.
	 */
	validate?: boolean;

	/**
	 * Enter watch mode, which rebuilds on file change.
	 */
	watch?: boolean;

	/**
	 * Options for the watcher.
	 */
	watchOptions?: WatchOptions;
}
type ConnectionState =
	| boolean
	| typeof CIRCULAR_CONNECTION
	| typeof TRANSITIVE_ONLY;
declare class ConstDependency extends NullDependency {
	/**
	 * Creates an instance of ConstDependency.
	 */
	constructor(
		expression: string,
		range: number | [number, number],
		runtimeRequirements?: null | string[]
	);
	expression: string;
	range: number | [number, number];
	runtimeRequirements: null | Set<string>;
	static Template: typeof ConstDependencyTemplate;
	static NO_EXPORTS_REFERENCED: string[][];
	static EXPORTS_OBJECT_REFERENCED: string[][];

	/**
	 * Returns true if the dependency is a low priority dependency.
	 */
	static isLowPriorityDependency(dependency: Dependency): boolean;
	static TRANSITIVE: symbol;
}
declare class ConstDependencyTemplate extends NullDependencyTemplate {
	constructor();
}
declare interface Constructor {
	new (...params: any[]): any;
}
declare class ConsumeSharedPlugin {
	/**
	 * Creates an instance of ConsumeSharedPlugin.
	 */
	constructor(options: ConsumeSharedPluginOptions);
	options: ConsumeSharedPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}

/**
 * Options for consuming shared modules.
 */
declare interface ConsumeSharedPluginOptions {
	/**
	 * Modules that should be consumed from share scope. When provided, property names are used to match requested modules in this compilation.
	 */
	consumes: Consumes;

	/**
	 * Share scope name used for all consumed modules (defaults to 'default').
	 */
	shareScope?: string;
}
type Consumes = (string | ConsumesObject)[] | ConsumesObject;

/**
 * Advanced configuration for modules that should be consumed from share scope.
 */
declare interface ConsumesConfig {
	/**
	 * Include the fallback module directly instead behind an async request. This allows to use fallback module in initial load too. All possible shared modules need to be eager too.
	 */
	eager?: boolean;

	/**
	 * Fallback module if no shared module is found in share scope. Defaults to the property name.
	 */
	import?: string | false;

	/**
	 * Package name to determine required version from description file. This is only needed when package name can't be automatically determined from request.
	 */
	packageName?: string;

	/**
	 * Version requirement from module in share scope.
	 */
	requiredVersion?: string | false;

	/**
	 * Module is looked up under this key from the share scope.
	 */
	shareKey?: string;

	/**
	 * Share scope name.
	 */
	shareScope?: string;

	/**
	 * Allow only a single version of the shared module in share scope (disabled by default).
	 */
	singleton?: boolean;

	/**
	 * Do not accept shared module if version is not valid (defaults to yes, if local fallback module is available and shared module is not a singleton, otherwise no, has no effect if there is no required version specified).
	 */
	strictVersion?: boolean;
}

/**
 * Modules that should be consumed from share scope. Property names are used to match requested modules in this compilation. Relative requests are resolved, module requests are matched unresolved, absolute paths will match resolved requests. A trailing slash will match all requests with this prefix. In this case shareKey must also have a trailing slash.
 */
declare interface ConsumesObject {
	[index: string]: string | ConsumesConfig;
}
type ContainerOptionsFormat<T> = Item<T> | (string | Item<T>)[];
declare class ContainerPlugin {
	/**
	 * Creates an instance of ContainerPlugin.
	 */
	constructor(options: ContainerPluginOptions);
	options: ContainerPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface ContainerPluginOptions {
	/**
	 * Modules that should be exposed by this container. When provided, property name is used as public name, otherwise public name is automatically inferred from request.
	 */
	exposes: Exposes;

	/**
	 * The filename for this container relative path inside the `output.path` directory.
	 */
	filename?: string;

	/**
	 * Options for library.
	 */
	library?: LibraryOptions;

	/**
	 * The name for this container.
	 */
	name: string;

	/**
	 * The name of the runtime chunk. If set a runtime chunk with this name is created or an existing entrypoint is used as runtime.
	 */
	runtime?: string | false;

	/**
	 * The name of the share scope which is shared with the host (defaults to 'default').
	 */
	shareScope?: string;
}
declare class ContainerReferencePlugin {
	/**
	 * Creates an instance of ContainerReferencePlugin.
	 */
	constructor(options: ContainerReferencePluginOptions);
	options: ContainerReferencePluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface ContainerReferencePluginOptions {
	/**
	 * The external type of the remote containers.
	 */
	remoteType: ExternalsType;

	/**
	 * Container locations and request scopes from which modules should be resolved and loaded at runtime. When provided, property name is used as request scope, otherwise request scope is automatically inferred from container location.
	 */
	remotes: Remotes;

	/**
	 * The name of the share scope shared with all remotes (defaults to 'default').
	 */
	shareScope?: string;
}
declare interface ContextAlternativeRequest {
	context: string;
	request: string;
}
declare abstract class ContextDependency extends Dependency {
	options: ContextDependencyOptions;
	userRequest: string;
	critical?: string | false;
	hadGlobalOrStickyRegExp: boolean;
	request?: string;
	range?: [number, number];
	valueRange?: [number, number];
	inShorthand?: string | boolean;
	replaces?: { value: string; range: [number, number] }[];
}
type ContextDependencyOptions = ContextOptions & { request: string };
declare abstract class ContextElementDependency extends ModuleDependency {
	referencedExports?: null | string[][];
	attributes?: ImportAttributes;
}
declare class ContextExclusionPlugin {
	/**
	 * Creates an instance of ContextExclusionPlugin.
	 */
	constructor(negativeMatcher: RegExp);
	negativeMatcher: RegExp;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface ContextFileSystemInfoEntry {
	safeTime: number;
	timestampHash?: string;
	resolved?: ResolvedContextFileSystemInfoEntry;
	symlinks?: Set<string>;
}
declare interface ContextHash {
	hash: string;
	resolved?: string;
	symlinks?: Set<string>;
}
type ContextMode =
	| "weak"
	| "eager"
	| "lazy"
	| "lazy-once"
	| "sync"
	| "async-weak";
declare abstract class ContextModuleFactory extends ModuleFactory {
	hooks: Readonly<{
		beforeResolve: AsyncSeriesWaterfallHook<
			[BeforeContextResolveData],
			false | void | BeforeContextResolveData
		>;
		afterResolve: AsyncSeriesWaterfallHook<
			[AfterContextResolveData],
			false | void | AfterContextResolveData
		>;
		contextModuleFiles: SyncWaterfallHook<[string[]], string[]>;
		alternatives: FakeHook<
			Pick<
				AsyncSeriesWaterfallHook<
					[ContextAlternativeRequest[]],
					ContextAlternativeRequest[]
				>,
				"name" | "tap" | "tapAsync" | "tapPromise"
			>
		>;
		alternativeRequests: AsyncSeriesWaterfallHook<
			[ContextAlternativeRequest[], ContextModuleOptions],
			ContextAlternativeRequest[]
		>;
	}>;
	resolverFactory: ResolverFactory;

	/**
	 * Resolves dependencies.
	 */
	resolveDependencies(
		fs: InputFileSystem,
		options: ContextModuleOptions,
		callback: (
			err: null | Error,
			dependencies?: ContextElementDependency[]
		) => void
	): void;
}
type ContextModuleOptions = ContextOptions & ContextModuleOptionsExtras;
declare interface ContextModuleOptionsExtras {
	resource: string | false | string[];
	resourceQuery?: string;
	resourceFragment?: string;
	resolveOptions?: ResolveOptions;
}
declare interface ContextOptions {
	mode: ContextMode;
	recursive: boolean;
	regExp: null | false | RegExp;
	namespaceObject?: boolean | "strict";
	addon?: string;
	chunkName?: null | string;
	include?: null | RegExp;
	exclude?: null | RegExp;
	groupOptions?: RawChunkGroupOptions;
	typePrefix?: string;
	category?: string;

	/**
	 * exports referenced from modules (won't be mangled)
	 */
	referencedExports?: null | string[][];
	layer?: null | string;
	attributes?: ImportAttributes;
	phase?: 0 | 1 | 2;
}
declare class ContextReplacementPlugin {
	/**
	 * Creates an instance of ContextReplacementPlugin.
	 */
	constructor(
		resourceRegExp: RegExp,
		newContentResource?:
			| string
			| boolean
			| RegExp
			| ((context: BeforeContextResolveData | AfterContextResolveData) => void),
		newContentRecursive?: boolean | RegExp | NewContentCreateContextMap,
		newContentRegExp?: RegExp
	);
	resourceRegExp: RegExp;
	newContentCallback?: (
		context: BeforeContextResolveData | AfterContextResolveData
	) => void;
	newContentResource?: string;

	/**
	 * Stores new content create context map.
	 */
	newContentCreateContextMap?: (
		fs: InputFileSystem,
		callback: (
			err: null | Error,
			newContentRecursive: NewContentCreateContextMap
		) => void
	) => void;
	newContentRecursive?: boolean;
	newContentRegExp?: RegExp;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface ContextResolveData {
	context: string;
	request: string;
	resolveOptions?: ResolveOptions;
	fileDependencies: LazySet<string>;
	missingDependencies: LazySet<string>;
	contextDependencies: LazySet<string>;
	dependencies: ContextDependency[];
}
declare interface ContextTimestampAndHash {
	safeTime: number;
	timestampHash?: string;
	hash: string;
	resolved?: ResolvedContextTimestampAndHash;
	symlinks?: Set<string>;
}
type ContextTypes = KnownContext & Record<any, any>;
type CreateReadStreamFSImplementation = FSImplementation & {
	read: (...args: any[]) => any;
};
type CreateStatsOptionsContext = KnownCreateStatsOptionsContext &
	Record<string, any>;
type CreateWriteStreamFSImplementation = FSImplementation & {
	write: (...args: any[]) => any;
	close?: (...args: any[]) => any;
};
type CreatedObject<T, F> = T extends ChunkGroupInfoWithName[]
	? Record<string, StatsChunkGroup>
	: T extends (infer V)[]
		? StatsObject<V, F>[]
		: StatsObject<T, F>;
declare interface CssData {
	/**
	 * whether export __esModule
	 */
	esModule: boolean;

	/**
	 * the css exports
	 */
	exports: Map<string, string>;
}
declare abstract class CssGenerator extends Generator {
	options: CssModuleGeneratorOptions;

	/**
	 * Processes the provided module.
	 */
	sourceDependency(
		module: NormalModule,
		dependency: Dependency,
		initFragments: InitFragment<GenerateContext>[],
		source: ReplaceSource,
		generateContext: GenerateContext & { cssData: CssData }
	): void;

	/**
	 * Processes the provided module.
	 */
	sourceModule(
		module: NormalModule,
		initFragments: InitFragment<GenerateContext>[],
		source: ReplaceSource,
		generateContext: GenerateContext & { cssData: CssData }
	): void;

	/**
	 * Generates fallback output for the provided error condition.
	 */
	generateError(
		error: Error,
		module: NormalModule,
		generateContext: GenerateContext
	): null | Source;
}

/**
 * Generator options for css modules.
 */
declare interface CssGeneratorOptions {
	/**
	 * Configure the generated JS modules that use the ES modules syntax.
	 */
	esModule?: boolean;

	/**
	 * Avoid generating and loading a stylesheet and only embed exports from css into output javascript files.
	 */
	exportsOnly?: boolean;
}
declare interface CssImportDependencyMeta {
	layer?: string;
	supports?: string;
	media?: string;
}
type CssLayer = undefined | string;
declare class CssLoadingRuntimeModule extends RuntimeModule {
	constructor(runtimeRequirements: ReadonlySet<string>);
	static getCompilationHooks(
		compilation: Compilation
	): CssLoadingRuntimeModulePluginHooks;

	/**
	 * Runtime modules without any dependencies to other runtime modules
	 */
	static STAGE_NORMAL: number;

	/**
	 * Runtime modules with simple dependencies on other runtime modules
	 */
	static STAGE_BASIC: number;

	/**
	 * Runtime modules which attach to handlers of other runtime modules
	 */
	static STAGE_ATTACH: number;

	/**
	 * Runtime modules which trigger actions on bootstrap
	 */
	static STAGE_TRIGGER: number;

	/**
	 * Gets source basic types.
	 * @deprecated In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
	 */
	static getSourceBasicTypes(module: Module): ReadonlySet<string>;
}
declare interface CssLoadingRuntimeModulePluginHooks {
	createStylesheet: SyncWaterfallHook<[string, Chunk], string>;
	linkPreload: SyncWaterfallHook<[string, Chunk], string>;
	linkPrefetch: SyncWaterfallHook<[string, Chunk], string>;
}
declare abstract class CssModule extends NormalModule {
	cssLayer: CssLayer;
	supports: Supports;
	media: Media;
	inheritance?: [CssLayer, Supports, Media][];
	exportType?: "link" | "text" | "css-style-sheet" | "style";
}

/**
 * Generator options for css/module modules.
 */
declare interface CssModuleGeneratorOptions {
	/**
	 * Configure the generated JS modules that use the ES modules syntax.
	 */
	esModule?: boolean;

	/**
	 * Configure how CSS content is exported as default.
	 */
	exportType?: "link" | "text" | "css-style-sheet" | "style";

	/**
	 * Specifies the convention of exported names.
	 */
	exportsConvention?:
		| "as-is"
		| "camel-case"
		| "camel-case-only"
		| "dashes"
		| "dashes-only"
		| ((name: string) => string);

	/**
	 * Avoid generating and loading a stylesheet and only embed exports from css into output javascript files.
	 */
	exportsOnly?: boolean;

	/**
	 * Digest types used for the hash.
	 */
	localIdentHashDigest?: string;

	/**
	 * Number of chars which are used for the hash.
	 */
	localIdentHashDigestLength?: number;

	/**
	 * Algorithm used for generation the hash (see node.js crypto package).
	 */
	localIdentHashFunction?: string | typeof Hash;

	/**
	 * Any string which is added to the hash to salt it.
	 */
	localIdentHashSalt?: string;

	/**
	 * Configure the generated local ident name.
	 */
	localIdentName?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);
}

/**
 * Parser options for css/module modules.
 */
declare interface CssModuleParserOptions {
	/**
	 * Enable/disable renaming of `@keyframes`.
	 */
	animation?: boolean;

	/**
	 * Enable/disable renaming of `@container` names.
	 */
	container?: boolean;

	/**
	 * Enable/disable renaming of custom identifiers.
	 */
	customIdents?: boolean;

	/**
	 * Enable/disable renaming of dashed identifiers, e. g. custom properties.
	 */
	dashedIdents?: boolean;

	/**
	 * Configure how CSS content is exported as default.
	 */
	exportType?: "link" | "text" | "css-style-sheet" | "style";

	/**
	 * Enable/disable renaming of `@function` names.
	 */
	function?: boolean;

	/**
	 * Enable/disable renaming of grid identifiers.
	 */
	grid?: boolean;

	/**
	 * Enable/disable `@import` at-rules handling.
	 */
	import?: boolean;

	/**
	 * Use ES modules named export for css exports.
	 */
	namedExports?: boolean;

	/**
	 * Enable/disable `url()`/`image-set()`/`src()`/`image()` functions handling.
	 */
	url?: boolean;
}
declare class CssModulesPlugin {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Gets modules in order.
	 */
	getModulesInOrder(
		chunk: Chunk,
		modules: undefined | Iterable<Module>,
		compilation: Compilation
	): Module[];

	/**
	 * Gets ordered chunk css modules.
	 */
	getOrderedChunkCssModules(
		chunk: Chunk,
		chunkGraph: ChunkGraph,
		compilation: Compilation
	): CssModule[];

	/**
	 * Renders generated source.
	 */
	renderChunk(
		__0: RenderContextCssModulesPlugin,
		hooks: CompilationHooksCssModulesPlugin
	): Source;

	/**
	 * Returns the attached hooks.
	 */
	static getCompilationHooks(
		compilation: Compilation
	): CompilationHooksCssModulesPlugin;

	/**
	 * Renders css module source.
	 */
	static renderModule(
		module: CssModule,
		renderContext: ChunkRenderContextCssModulesPlugin,
		hooks: CompilationHooksCssModulesPlugin
	): null | Source;

	/**
	 * Gets chunk filename template.
	 */
	static getChunkFilenameTemplate(
		chunk: Chunk,
		outputOptions: OutputNormalizedWithDefaults
	): TemplatePath;

	/**
	 * Returns true, when the chunk has css.
	 */
	static chunkHasCss(chunk: Chunk, chunkGraph: ChunkGraph): boolean;
}
declare abstract class CssParser extends ParserClass {
	defaultMode: "global" | "auto" | "pure" | "local";
	options: {
		/**
		 * Enable/disable renaming of `@keyframes`.
		 */
		animation: boolean;
		/**
		 * Enable/disable renaming of `@container` names.
		 */
		container: boolean;
		/**
		 * Enable/disable renaming of custom identifiers.
		 */
		customIdents: boolean;
		/**
		 * Enable/disable renaming of dashed identifiers, e. g. custom properties.
		 */
		dashedIdents: boolean;
		/**
		 * Configure how CSS content is exported as default.
		 */
		exportType?: "link" | "text" | "css-style-sheet" | "style";
		/**
		 * Enable/disable renaming of `@function` names.
		 */
		function: boolean;
		/**
		 * Enable/disable renaming of grid identifiers.
		 */
		grid: boolean;
		/**
		 * Enable/disable `@import` at-rules handling.
		 */
		import: boolean;
		/**
		 * Use ES modules named export for css exports.
		 */
		namedExports: boolean;
		/**
		 * Enable/disable `url()`/`image-set()`/`src()`/`image()` functions handling.
		 */
		url: boolean;
		/**
		 * default mode
		 */
		defaultMode?: "global" | "auto" | "pure" | "local";
	};
	comments?: CommentCssParser[];
	magicCommentContext: ContextImport;

	/**
	 * Returns comments in the range.
	 */
	getComments(range: [number, number]): CommentCssParser[];

	/**
	 * Parses comment options.
	 */
	parseCommentOptions(range: [number, number]): {
		options: null | Record<string, any>;
		errors: null | (Error & { comment: CommentCssParser })[];
	};
}

/**
 * Parser options for css modules.
 */
declare interface CssParserOptions {
	/**
	 * Configure how CSS content is exported as default.
	 */
	exportType?: "link" | "text" | "css-style-sheet" | "style";

	/**
	 * Enable/disable `@import` at-rules handling.
	 */
	import?: boolean;

	/**
	 * Use ES modules named export for css exports.
	 */
	namedExports?: boolean;

	/**
	 * Enable/disable `url()`/`image-set()`/`src()`/`image()` functions handling.
	 */
	url?: boolean;
}
type Declaration = FunctionDeclaration | VariableDeclaration | ClassDeclaration;
declare class DefinePlugin {
	/**
	 * Create a new define plugin
	 */
	constructor(definitions: Definitions);
	definitions: Definitions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Returns the attached hooks.
	 */
	static getCompilationHooks(compilation: Compilation): DefinePluginHooks;

	/**
	 * Returns runtime value.
	 */
	static runtimeValue(
		fn: (value: {
			module: NormalModule;
			key: string;
			readonly version: ValueCacheVersion;
		}) => CodeValuePrimitive,
		options?: true | string[] | RuntimeValueOptions
	): RuntimeValue;
}
declare interface DefinePluginHooks {
	definitions: SyncWaterfallHook<
		[Record<string, CodeValue>],
		Record<string, CodeValue>
	>;
}
declare interface Definitions {
	[index: string]: CodeValue;
}
declare class DelegatedPlugin {
	/**
	 * Creates an instance of DelegatedPlugin.
	 */
	constructor(options: Options);
	options: Options;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare abstract class DependenciesBlock {
	dependencies: Dependency[];
	blocks: AsyncDependenciesBlock[];
	parent?: DependenciesBlock;
	getRootBlock(): DependenciesBlock;

	/**
	 * Adds a DependencyBlock to DependencyBlock relationship.
	 * This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)
	 */
	addBlock(block: AsyncDependenciesBlock): void;

	/**
	 * Adds the provided dependency to the dependencies block.
	 */
	addDependency(dependency: Dependency): void;

	/**
	 * Removes dependency.
	 */
	removeDependency(dependency: Dependency): void;

	/**
	 * Clear dependencies and blocks.
	 */
	clearDependenciesAndBlocks(): void;

	/**
	 * Updates the hash with the data contributed by this instance.
	 */
	updateHash(hash: Hash, context: UpdateHashContextDependency): void;

	/**
	 * Serializes this instance into the provided serializer context.
	 */
	serialize(__0: ObjectSerializerContext): void;

	/**
	 * Restores this instance from the provided deserializer context.
	 */
	deserialize(__0: ObjectDeserializerContext): void;
}
declare interface DependenciesBlockLike {
	dependencies: Dependency[];
	blocks: AsyncDependenciesBlock[];
}
declare class Dependency {
	constructor();
	weak: boolean;
	optional?: boolean;

	/**
	 * Returns a display name for the type of dependency.
	 */
	get type(): string;

	/**
	 * Returns a dependency category, typical categories are "commonjs", "amd", "esm".
	 */
	get category(): string;

	/**
	 * Returns location.
	 */
	loc: DependencyLocation;

	/**
	 * Updates loc using the provided start line.
	 */
	setLoc(
		startLine: number,
		startColumn: number,
		endLine: number,
		endColumn: number
	): void;

	/**
	 * Returns a request context.
	 */
	getContext(): undefined | string;

	/**
	 * Returns an identifier to merge equal requests.
	 */
	getResourceIdentifier(): null | string;

	/**
	 * Could affect referencing module.
	 */
	couldAffectReferencingModule(): boolean | symbol;

	/**
	 * Returns the referenced module and export
	 * @deprecated
	 */
	getReference(moduleGraph: ModuleGraph): never;

	/**
	 * Returns list of exports referenced by this dependency
	 */
	getReferencedExports(
		moduleGraph: ModuleGraph,
		runtime: RuntimeSpec
	): (string[] | ReferencedExport)[];

	/**
	 * Returns function to determine if the connection is active.
	 */
	getCondition(
		moduleGraph: ModuleGraph
	):
		| null
		| false
		| ((
				moduleGraphConnection: ModuleGraphConnection,
				runtime: RuntimeSpec
		  ) => ConnectionState);

	/**
	 * Returns the exported names
	 */
	getExports(moduleGraph: ModuleGraph): undefined | ExportsSpec;

	/**
	 * Returns warnings.
	 */
	getWarnings(moduleGraph: ModuleGraph): undefined | null | WebpackError[];

	/**
	 * Returns errors.
	 */
	getErrors(moduleGraph: ModuleGraph): undefined | null | WebpackError[];

	/**
	 * Updates the hash with the data contributed by this instance.
	 */
	updateHash(hash: Hash, context: UpdateHashContextDependency): void;

	/**
	 * implement this method to allow the occurrence order plugin to count correctly
	 */
	getNumberOfIdOccurrences(): number;

	/**
	 * Gets module evaluation side effects state.
	 */
	getModuleEvaluationSideEffectsState(
		moduleGraph: ModuleGraph
	): ConnectionState;

	/**
	 * Creates an ignored module.
	 */
	createIgnoredModule(context: string): Module;

	/**
	 * Serializes this instance into the provided serializer context.
	 */
	serialize(__0: ObjectSerializerContext): void;

	/**
	 * Restores this instance from the provided deserializer context.
	 */
	deserialize(__0: ObjectDeserializerContext): void;
	module: any;
	get disconnect(): any;
	static NO_EXPORTS_REFERENCED: string[][];
	static EXPORTS_OBJECT_REFERENCED: string[][];

	/**
	 * Returns true if the dependency is a low priority dependency.
	 */
	static isLowPriorityDependency(dependency: Dependency): boolean;
	static TRANSITIVE: symbol;
}
declare interface DependencyConstructor {
	new (...args: any[]): Dependency;
}
type DependencyLocation = SyntheticDependencyLocation | RealDependencyLocation;

/**
 * Creates a cached parameterized comparator.
 */
declare interface DependencySourceOrder {
	/**
	 * the main source order
	 */
	main: number;

	/**
	 * the sub source order
	 */
	sub: number;
}
declare class DependencyTemplate {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(
		dependency: Dependency,
		source: ReplaceSource,
		templateContext: DependencyTemplateContext
	): void;
}
declare interface DependencyTemplateContext {
	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * the requirements for runtime
	 */
	runtimeRequirements: Set<string>;

	/**
	 * current module
	 */
	module: Module;

	/**
	 * current runtimes, for which code is generated
	 */
	runtime: RuntimeSpec;

	/**
	 * mutable array of init fragments for the current module
	 */
	initFragments: InitFragment<GenerateContext>[];

	/**
	 * when in a concatenated module, information about other concatenated modules
	 */
	concatenationScope?: ConcatenationScope;

	/**
	 * the code generation results
	 */
	codeGenerationResults: CodeGenerationResults;

	/**
	 * chunkInitFragments
	 */
	chunkInitFragments: InitFragment<GenerateContext>[];
}
declare abstract class DependencyTemplates {
	/**
	 * Returns template for this dependency.
	 */
	get(dependency: DependencyConstructor): undefined | DependencyTemplate;

	/**
	 * Updates value using the provided dependency.
	 */
	set(
		dependency: DependencyConstructor,
		dependencyTemplate: DependencyTemplate
	): void;

	/**
	 * Updates the hash with the data contributed by this instance.
	 */
	updateHash(part: string): void;
	getHash(): string;
	clone(): DependencyTemplates;
}

/**
 * Helper function for joining two ranges into a single range. This is useful
 * when working with AST nodes, as it allows you to combine the ranges of child nodes
 * to create the range of the _parent node_.
 */
declare interface DestructuringAssignmentProperty {
	id: string;
	range: [number, number];
	loc: SourceLocation;
	pattern?: Set<DestructuringAssignmentProperty>;
	shorthand: string | boolean;
}
declare class DeterministicChunkIdsPlugin {
	/**
	 * Creates an instance of DeterministicChunkIdsPlugin.
	 */
	constructor(options?: DeterministicChunkIdsPluginOptions);
	options: DeterministicChunkIdsPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface DeterministicChunkIdsPluginOptions {
	/**
	 * context for ids
	 */
	context?: string;

	/**
	 * maximum length of ids
	 */
	maxLength?: number;
}
declare class DeterministicModuleIdsPlugin {
	/**
	 * Creates an instance of DeterministicModuleIdsPlugin.
	 */
	constructor(options?: DeterministicModuleIdsPluginOptions);
	options: DeterministicModuleIdsPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface DeterministicModuleIdsPluginOptions {
	/**
	 * context relative to which module identifiers are computed
	 */
	context?: string;

	/**
	 * selector function for modules
	 */
	test?: (module: Module) => boolean;

	/**
	 * maximum id length in digits (used as starting point)
	 */
	maxLength?: number;

	/**
	 * hash salt for ids
	 */
	salt?: number;

	/**
	 * do not increase the maxLength to find an optimal id space size
	 */
	fixedLength?: boolean;

	/**
	 * throw an error when id conflicts occur (instead of rehashing)
	 */
	failOnConflict?: boolean;
}
type DevtoolFallbackModuleFilenameTemplate =
	| string
	| ((context: ModuleFilenameTemplateContext) => string);
type DevtoolModuleFilenameTemplate =
	| string
	| ((context: ModuleFilenameTemplateContext) => string);

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface DirentFs<T extends string | Buffer = string> {
	/**
	 * true when is file, otherwise false
	 */
	isFile: () => boolean;

	/**
	 * true when is directory, otherwise false
	 */
	isDirectory: () => boolean;

	/**
	 * true when is block device, otherwise false
	 */
	isBlockDevice: () => boolean;

	/**
	 * true when is character device, otherwise false
	 */
	isCharacterDevice: () => boolean;

	/**
	 * true when is symbolic link, otherwise false
	 */
	isSymbolicLink: () => boolean;

	/**
	 * true when is FIFO, otherwise false
	 */
	isFIFO: () => boolean;

	/**
	 * true when is socket, otherwise false
	 */
	isSocket: () => boolean;

	/**
	 * name
	 */
	name: T;

	/**
	 * path
	 */
	parentPath: string;

	/**
	 * path
	 */
	path?: string;
}
declare interface DirentTypes<T extends string | Buffer = string> {
	/**
	 * true when is file, otherwise false
	 */
	isFile: () => boolean;

	/**
	 * true when is directory, otherwise false
	 */
	isDirectory: () => boolean;

	/**
	 * true when is block device, otherwise false
	 */
	isBlockDevice: () => boolean;

	/**
	 * true when is character device, otherwise false
	 */
	isCharacterDevice: () => boolean;

	/**
	 * true when is symbolic link, otherwise false
	 */
	isSymbolicLink: () => boolean;

	/**
	 * true when is FIFO, otherwise false
	 */
	isFIFO: () => boolean;

	/**
	 * true when is socket, otherwise false
	 */
	isSocket: () => boolean;

	/**
	 * name
	 */
	name: T;

	/**
	 * path
	 */
	parentPath: string;

	/**
	 * path
	 */
	path?: string;
}
declare interface Disposable {
	[Symbol.dispose](): void;
}
declare class DllPlugin {
	/**
	 * Creates an instance of DllPlugin.
	 */
	constructor(options: DllPluginOptions);
	options: DllPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface DllPluginOptions {
	/**
	 * Context of requests in the manifest file (defaults to the webpack context).
	 */
	context?: string;

	/**
	 * If true, only entry points will be exposed (default: true).
	 */
	entryOnly?: boolean;

	/**
	 * If true, manifest json file (output) will be formatted.
	 */
	format?: boolean;

	/**
	 * Name of the exposed dll function (external name, use value of 'output.library').
	 */
	name?: string;

	/**
	 * Absolute path to the manifest json file (output).
	 */
	path: string;

	/**
	 * Type of the dll bundle (external type, use value of 'output.libraryTarget').
	 */
	type?: string;
}
declare class DllReferencePlugin {
	/**
	 * Creates an instance of DllReferencePlugin.
	 */
	constructor(options: DllReferencePluginOptions);
	options: DllReferencePluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
type DllReferencePluginOptions =
	| {
			/**
			 * Context of requests in the manifest (or content property) as absolute path.
			 */
			context?: string;
			/**
			 * Extensions used to resolve modules in the dll bundle (only used when using 'scope').
			 */
			extensions?: string[];
			/**
			 * An object containing content and name or a string to the absolute path of the JSON manifest to be loaded upon compilation.
			 */
			manifest: string | DllReferencePluginOptionsManifest;
			/**
			 * The name where the dll is exposed (external name, defaults to manifest.name).
			 */
			name?: string;
			/**
			 * Prefix which is used for accessing the content of the dll.
			 */
			scope?: string;
			/**
			 * How the dll is exposed (libraryTarget, defaults to manifest.type).
			 */
			sourceType?:
				| "var"
				| "assign"
				| "this"
				| "window"
				| "global"
				| "commonjs"
				| "commonjs2"
				| "commonjs-module"
				| "amd"
				| "amd-require"
				| "umd"
				| "umd2"
				| "jsonp"
				| "system";
			/**
			 * The way how the export of the dll bundle is used.
			 */
			type?: "object" | "require";
	  }
	| {
			/**
			 * The mappings from request to module info.
			 */
			content: DllReferencePluginOptionsContent;
			/**
			 * Context of requests in the manifest (or content property) as absolute path.
			 */
			context?: string;
			/**
			 * Extensions used to resolve modules in the dll bundle (only used when using 'scope').
			 */
			extensions?: string[];
			/**
			 * The name where the dll is exposed (external name).
			 */
			name: string;
			/**
			 * Prefix which is used for accessing the content of the dll.
			 */
			scope?: string;
			/**
			 * How the dll is exposed (libraryTarget).
			 */
			sourceType?:
				| "var"
				| "assign"
				| "this"
				| "window"
				| "global"
				| "commonjs"
				| "commonjs2"
				| "commonjs-module"
				| "amd"
				| "amd-require"
				| "umd"
				| "umd2"
				| "jsonp"
				| "system";
			/**
			 * The way how the export of the dll bundle is used.
			 */
			type?: "object" | "require";
	  };

/**
 * The mappings from request to module info.
 */
declare interface DllReferencePluginOptionsContent {
	[index: string]: {
		/**
		 * Meta information about the module.
		 */
		buildMeta?: { [index: string]: any };
		/**
		 * Information about the provided exports of the module.
		 */
		exports?: true | string[];
		/**
		 * Module ID.
		 */
		id: string | number;
	};
}

/**
 * An object containing content, name and type.
 */
declare interface DllReferencePluginOptionsManifest {
	/**
	 * The mappings from request to module info.
	 */
	content: DllReferencePluginOptionsContent;

	/**
	 * The name where the dll is exposed (external name).
	 */
	name?: string;

	/**
	 * The type how the dll is exposed (external type).
	 */
	type?:
		| "var"
		| "assign"
		| "this"
		| "window"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system";
}
declare class DotenvPlugin {
	/**
	 * Creates an instance of DotenvPlugin.
	 */
	constructor(options?: DotenvPluginOptions);
	options: DotenvPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}

/**
 * Options for Dotenv plugin.
 */
declare interface DotenvPluginOptions {
	/**
	 * The directory from which .env files are loaded. Can be an absolute path, false will disable the .env file loading.
	 */
	dir?: string | false;

	/**
	 * Only expose environment variables that start with these prefixes. Defaults to 'WEBPACK_'.
	 */
	prefix?: string | string[];

	/**
	 * Template patterns for .env file names. Use [mode] as placeholder for the webpack mode. Defaults to ['.env', '.env.local', '.env.[mode]', '.env.[mode].local'].
	 */
	template?: string[];
}
declare class DynamicEntryPlugin {
	/**
	 * Creates an instance of DynamicEntryPlugin.
	 */
	constructor(context: string, entry: () => Promise<EntryStaticNormalized>);
	context: string;
	entry: () => Promise<EntryStaticNormalized>;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
type Effect = EffectUse | EffectBasic;
declare interface EffectBasic {
	type: string;
	value: any;
}
declare interface EffectData {
	resource?: string;
	realResource?: string;
	resourceQuery?: string;
	resourceFragment?: string;
	scheme?: string;
	attributes?: ImportAttributes;
	mimetype?: string;
	dependency: string;
	descriptionData?: JsonObjectTypes;
	compiler?: string;
	issuer: string;
	issuerLayer: string;
	phase?: string;
}
declare interface EffectUse {
	type: EffectUseType;
	value: {
		loader: string;
		options?: null | string | Record<string, any>;
		ident?: string;
	};
}
type EffectUseType = "use" | "use-pre" | "use-post";
declare class ElectronTargetPlugin {
	/**
	 * Creates an instance of ElectronTargetPlugin.
	 */
	constructor(context?: "main" | "preload" | "renderer");

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}

/**
 * No generator options are supported for this module type.
 */
declare interface EmptyGeneratorOptions {}

/**
 * No parser options are supported for this module type.
 */
declare interface EmptyParserOptions {}
declare class EnableChunkLoadingPlugin {
	/**
	 * Creates an instance of EnableChunkLoadingPlugin.
	 */
	constructor(type: string);
	type: string;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Updates enabled using the provided compiler.
	 */
	static setEnabled(compiler: Compiler, type: string): void;

	/**
	 * Checks enabled.
	 */
	static checkEnabled(compiler: Compiler, type: string): void;
}
declare class EnableLibraryPlugin {
	/**
	 * Creates an instance of EnableLibraryPlugin.
	 */
	constructor(type: string, options?: EnableLibraryPluginOptions);
	type: string;
	options: EnableLibraryPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Updates enabled using the provided compiler.
	 */
	static setEnabled(compiler: Compiler, type: string): void;

	/**
	 * Checks enabled.
	 */
	static checkEnabled(compiler: Compiler, type: string): void;
}

/**
 * Returns enabled types.
 */
declare interface EnableLibraryPluginOptions {
	/**
	 * function that runs when applying the current plugin.
	 */
	additionalApply?: () => void;
}
declare class EnableWasmLoadingPlugin {
	/**
	 * Stores the wasm loading backend name that should be enabled for the
	 * compiler.
	 */
	constructor(type: string);
	type: string;

	/**
	 * Enables the requested wasm loading backend once and applies the
	 * environment-specific plugins that provide its parser, generator, and
	 * runtime support.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Marks a custom or built-in wasm loading type as enabled for the compiler
	 * without applying additional built-in behavior.
	 */
	static setEnabled(compiler: Compiler, type: string): void;

	/**
	 * Verifies that a wasm loading type has been enabled before code generation
	 * attempts to use it.
	 */
	static checkEnabled(compiler: Compiler, type: string): void;
}
type EncodingOptionFs =
	| undefined
	| null
	| "ascii"
	| "utf8"
	| "utf-8"
	| "utf16le"
	| "utf-16le"
	| "ucs2"
	| "ucs-2"
	| "base64"
	| "base64url"
	| "latin1"
	| "binary"
	| "hex"
	| ObjectEncodingOptionsFs;
type EncodingOptionTypes =
	| undefined
	| null
	| "ascii"
	| "utf8"
	| "utf-8"
	| "utf16le"
	| "utf-16le"
	| "ucs2"
	| "ucs-2"
	| "base64"
	| "base64url"
	| "latin1"
	| "binary"
	| "hex"
	| ObjectEncodingOptionsTypes;
declare interface EntryData {
	/**
	 * dependencies of the entrypoint that should be evaluated at startup
	 */
	dependencies: Dependency[];

	/**
	 * dependencies of the entrypoint that should be included but not evaluated
	 */
	includeDependencies: Dependency[];

	/**
	 * options of the entrypoint
	 */
	options: EntryOptions;
}
declare abstract class EntryDependency extends ModuleDependency {}

/**
 * An object with entry point description.
 */
declare interface EntryDescription {
	/**
	 * Enable/disable creating async chunks that are loaded on demand.
	 */
	asyncChunks?: boolean;

	/**
	 * Base uri for this entry.
	 */
	baseUri?: string;

	/**
	 * The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins).
	 */
	chunkLoading?: string | false;

	/**
	 * The entrypoints that the current entrypoint depend on. They must be loaded when this entrypoint is loaded.
	 */
	dependOn?: string | string[];

	/**
	 * Specifies the filename of the output file on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	filename?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Module(s) that are loaded upon startup.
	 */
	import: EntryItem;

	/**
	 * Specifies the layer in which modules of this entrypoint are placed.
	 */
	layer?: null | string;

	/**
	 * Options for library.
	 */
	library?: LibraryOptions;

	/**
	 * The 'publicPath' specifies the public URL address of the output files when referenced in a browser.
	 */
	publicPath?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * The name of the runtime chunk. If set a runtime chunk with this name is created or an existing entrypoint is used as runtime.
	 */
	runtime?: string | false;

	/**
	 * The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins).
	 */
	wasmLoading?: string | false;
}

/**
 * An object with entry point description.
 */
declare interface EntryDescriptionNormalized {
	/**
	 * Enable/disable creating async chunks that are loaded on demand.
	 */
	asyncChunks?: boolean;

	/**
	 * Base uri for this entry.
	 */
	baseUri?: string;

	/**
	 * The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins).
	 */
	chunkLoading?: string | false;

	/**
	 * The entrypoints that the current entrypoint depend on. They must be loaded when this entrypoint is loaded.
	 */
	dependOn?: string[];

	/**
	 * Specifies the filename of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	filename?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Module(s) that are loaded upon startup. The last one is exported.
	 */
	import?: string[];

	/**
	 * Specifies the layer in which modules of this entrypoint are placed.
	 */
	layer?: null | string;

	/**
	 * Options for library.
	 */
	library?: LibraryOptions;

	/**
	 * The 'publicPath' specifies the public URL address of the output files when referenced in a browser.
	 */
	publicPath?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * The name of the runtime chunk. If set a runtime chunk with this name is created or an existing entrypoint is used as runtime.
	 */
	runtime?: string | false;

	/**
	 * The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins).
	 */
	wasmLoading?: string | false;
}
type EntryItem = string | string[];
type EntryLibIndex =
	| string
	| (() => string | EntryObject | string[] | Promise<EntryStatic>)
	| EntryObject
	| string[];
type EntryNormalized =
	| (() => Promise<EntryStaticNormalized>)
	| EntryStaticNormalized;

/**
 * Multiple entry bundles are created. The key is the entry name. The value can be a string, an array or an entry description object.
 */
declare interface EntryObject {
	[index: string]: string | string[] | EntryDescription;
}
declare class EntryOptionPlugin {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Apply entry option.
	 */
	static applyEntryOption(
		compiler: Compiler,
		context: string,
		entry: EntryNormalized
	): void;

	/**
	 * Entry description to options.
	 */
	static entryDescriptionToOptions(
		compiler: Compiler,
		name: string,
		desc: EntryDescriptionNormalized
	): EntryOptions;
}
type EntryOptions = { name?: string } & Omit<
	EntryDescriptionNormalized,
	"import"
>;
declare class EntryPlugin {
	/**
	 * An entry plugin which will handle creation of the EntryDependency
	 */
	constructor(context: string, entry: string, options?: string | EntryOptions);
	context: string;
	entry: string;
	options: string | EntryOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Creates a dependency.
	 */
	static createDependency(
		entry: string,
		options: string | EntryOptions
	): EntryDependency;
}
type EntryStatic = string | EntryObject | string[];

/**
 * Multiple entry bundles are created. The key is the entry name. The value is an entry description object.
 */
declare interface EntryStaticNormalized {
	[index: string]: EntryDescriptionNormalized;
}
declare interface EntryTypesIndex {
	safeTime: number;
	timestamp: number;
	accuracy: number;
}
declare abstract class Entrypoint extends ChunkGroup {
	/**
	 * Sets the runtimeChunk for an entrypoint.
	 */
	setRuntimeChunk(chunk: Chunk): void;

	/**
	 * Fetches the chunk reference containing the webpack bootstrap code
	 */
	getRuntimeChunk(): null | Chunk;

	/**
	 * Sets the chunk with the entrypoint modules for an entrypoint.
	 */
	setEntrypointChunk(chunk: Chunk): void;

	/**
	 * Returns the chunk which contains the entrypoint modules
	 * (or at least the execution of them)
	 */
	getEntrypointChunk(): Chunk;
	addDependOn(entrypoint: Entrypoint): void;
	dependOn(entrypoint: Entrypoint): boolean;
}
type EnumValue =
	| null
	| string
	| number
	| boolean
	| EnumValueObject
	| EnumValue[];
declare interface EnumValueObject {
	[index: string]: EnumValue;
}

/**
 * The abilities of the environment where the webpack generated code should run.
 */
declare interface Environment {
	/**
	 * The environment supports arrow functions ('() => { ... }').
	 */
	arrowFunction?: boolean;

	/**
	 * The environment supports async function and await ('async function () { await ... }').
	 */
	asyncFunction?: boolean;

	/**
	 * The environment supports BigInt as literal (123n).
	 */
	bigIntLiteral?: boolean;

	/**
	 * The environment supports const and let for variable declarations.
	 */
	const?: boolean;

	/**
	 * The environment supports destructuring ('{ a, b } = obj').
	 */
	destructuring?: boolean;

	/**
	 * The environment supports 'document'.
	 */
	document?: boolean;

	/**
	 * The environment supports an async import() function to import EcmaScript modules.
	 */
	dynamicImport?: boolean;

	/**
	 * The environment supports an async import() is available when creating a worker.
	 */
	dynamicImportInWorker?: boolean;

	/**
	 * The environment supports 'for of' iteration ('for (const x of array) { ... }').
	 */
	forOf?: boolean;

	/**
	 * The environment supports 'globalThis'.
	 */
	globalThis?: boolean;

	/**
	 * The environment supports `import.meta.dirname` and `import.meta.filename`.
	 */
	importMetaDirnameAndFilename?: boolean;

	/**
	 * The environment supports object method shorthand ('{ module() {} }').
	 */
	methodShorthand?: boolean;

	/**
	 * The environment supports EcmaScript Module syntax to import EcmaScript modules (import ... from '...').
	 */
	module?: boolean;

	/**
	 * The environment supports `node:` prefix for Node.js core modules.
	 */
	nodePrefixForCoreModules?: boolean;

	/**
	 * The environment supports optional chaining ('obj?.a' or 'obj?.()').
	 */
	optionalChaining?: boolean;

	/**
	 * The environment supports template literals.
	 */
	templateLiteral?: boolean;
}
declare class EnvironmentPlugin {
	/**
	 * Creates an instance of EnvironmentPlugin.
	 */
	constructor(...keys: (string | string[] | Record<string, any>)[]);
	keys: string[];
	defaultValues: Record<string, any>;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
type ErrorWithDetail = Error & { details?: string };

/**
 * Creates a callback wrapper that waits for a fixed number of completions and
 * forwards the first error immediately.
 */
declare interface Etag {
	toString: () => string;
}
declare class EvalDevToolModulePlugin {
	/**
	 * Creates an instance of EvalDevToolModulePlugin.
	 */
	constructor(options?: EvalDevToolModulePluginOptions);
	namespace: string;
	sourceUrlComment: string;
	moduleFilenameTemplate: DevtoolModuleFilenameTemplate;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface EvalDevToolModulePluginOptions {
	/**
	 * namespace
	 */
	namespace?: string;

	/**
	 * source url comment
	 */
	sourceUrlComment?: string;

	/**
	 * module filename template
	 */
	moduleFilenameTemplate?:
		| string
		| ((context: ModuleFilenameTemplateContext) => string);
}
declare class EvalSourceMapDevToolPlugin {
	/**
	 * Creates an instance of EvalSourceMapDevToolPlugin.
	 */
	constructor(inputOptions?: string | SourceMapDevToolPluginOptions);
	sourceMapComment: string;
	moduleFilenameTemplate: DevtoolModuleFilenameTemplate;
	namespace: string;
	options: SourceMapDevToolPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
type ExcludeModulesType = "module" | "chunk" | "root-of-chunk" | "nested";
declare interface ExecuteModuleArgument {
	module: Module;
	moduleObject?: ExecuteModuleObject;
	codeGenerationResult: CodeGenerationResult;
}
declare interface ExecuteModuleContext {
	assets: Map<string, { source: Source; info?: AssetInfo }>;
	chunk: Chunk;
	chunkGraph: ChunkGraph;
	__webpack_require__?: WebpackRequire;
}
declare interface ExecuteModuleObject {
	/**
	 * module id
	 */
	id?: string;

	/**
	 * exports
	 */
	exports: any;

	/**
	 * is loaded
	 */
	loaded: boolean;

	/**
	 * error
	 */
	error?: Error;
}
declare interface ExecuteModuleOptions {
	entryOptions?: EntryOptions;
}
declare interface ExecuteModuleResult {
	exports: any;
	cacheable: boolean;
	assets: Map<string, { source: Source; info?: AssetInfo }>;
	fileDependencies: LazySet<string>;
	contextDependencies: LazySet<string>;
	missingDependencies: LazySet<string>;
	buildDependencies: LazySet<string>;
}
declare interface ExecuteOptions {
	/**
	 * module id
	 */
	id?: string;

	/**
	 * module
	 */
	module: ExecuteModuleObject;

	/**
	 * require function
	 */
	require: WebpackRequire;
}
declare interface ExistenceOnlyTimeEntryFileSystemInfo {}
declare interface ExistenceOnlyTimeEntryTypesIndex {}

/**
 * Enables/Disables experiments (experimental features with relax SemVer compatibility).
 */
declare interface Experiments {
	[index: string]: any;

	/**
	 * Support WebAssembly as asynchronous EcmaScript Module.
	 * @experimental
	 */
	asyncWebAssembly?: boolean;

	/**
	 * Enable backward-compat layer with deprecation warnings for many webpack 4 APIs.
	 * @experimental
	 */
	backCompat?: boolean;

	/**
	 * Build http(s): urls using a lockfile and resource content cache.
	 * @experimental
	 */
	buildHttp?: HttpUriOptions | (string | RegExp | ((uri: string) => boolean))[];

	/**
	 * Enable additional in memory caching of modules that are unchanged and reference only unchanged modules.
	 * @experimental
	 */
	cacheUnaffected?: boolean;

	/**
	 * Enable css support.
	 * @experimental
	 */
	css?: boolean;

	/**
	 * Enable experimental tc39 proposal https://github.com/tc39/proposal-defer-import-eval. This allows to defer execution of a module until it's first use.
	 * @experimental
	 */
	deferImport?: boolean;

	/**
	 * Apply defaults of next major version.
	 * @experimental
	 */
	futureDefaults?: boolean;

	/**
	 * Compile entrypoints and import()s only when they are accessed.
	 * @experimental
	 */
	lazyCompilation?: boolean | LazyCompilationOptions;

	/**
	 * Allow output javascript files as module source type.
	 * @experimental
	 */
	outputModule?: boolean;

	/**
	 * Enable experimental tc39 proposal https://github.com/tc39/proposal-source-phase-imports. This allows importing modules at source phase.
	 * @experimental
	 */
	sourceImport?: boolean;

	/**
	 * Support WebAssembly as synchronous EcmaScript Module (outdated).
	 * @experimental
	 */
	syncWebAssembly?: boolean;
}

/**
 * Enables/Disables experiments (experimental features with relax SemVer compatibility).
 */
declare interface ExperimentsNormalized {
	/**
	 * Support WebAssembly as asynchronous EcmaScript Module.
	 * @experimental
	 */
	asyncWebAssembly?: boolean;

	/**
	 * Enable backward-compat layer with deprecation warnings for many webpack 4 APIs.
	 * @experimental
	 */
	backCompat?: boolean;

	/**
	 * Build http(s): urls using a lockfile and resource content cache.
	 * @experimental
	 */
	buildHttp?: HttpUriOptions;

	/**
	 * Enable additional in memory caching of modules that are unchanged and reference only unchanged modules.
	 * @experimental
	 */
	cacheUnaffected?: boolean;

	/**
	 * Enable css support.
	 * @experimental
	 */
	css?: boolean;

	/**
	 * Enable experimental tc39 proposal https://github.com/tc39/proposal-defer-import-eval. This allows to defer execution of a module until it's first use.
	 * @experimental
	 */
	deferImport?: boolean;

	/**
	 * Apply defaults of next major version.
	 * @experimental
	 */
	futureDefaults?: boolean;

	/**
	 * Compile entrypoints and import()s only when they are accessed.
	 * @experimental
	 */
	lazyCompilation?: false | LazyCompilationOptions;

	/**
	 * Allow output javascript files as module source type.
	 * @experimental
	 */
	outputModule?: boolean;

	/**
	 * Enable experimental tc39 proposal https://github.com/tc39/proposal-source-phase-imports. This allows importing modules at source phase.
	 * @experimental
	 */
	sourceImport?: boolean;

	/**
	 * Support WebAssembly as synchronous EcmaScript Module (outdated).
	 * @experimental
	 */
	syncWebAssembly?: boolean;
}
declare abstract class ExportInfo {
	name: string;

	/**
	 * true: it is provided
	 * false: it is not provided
	 * null: only the runtime knows if it is provided
	 * undefined: it was not determined if it is provided
	 */
	provided?: null | boolean;

	/**
	 * is the export a terminal binding that should be checked for export star conflicts
	 */
	terminalBinding: boolean;

	/**
	 * true: it can be mangled
	 * false: is can not be mangled
	 * undefined: it was not determined if it can be mangled
	 */
	canMangleProvide?: boolean;

	/**
	 * true: it can be mangled
	 * false: is can not be mangled
	 * undefined: it was not determined if it can be mangled
	 */
	canMangleUse?: boolean;
	exportsInfoOwned: boolean;
	exportsInfo?: ExportsInfo;
	get canMangle(): boolean;

	/**
	 * Sets used in unknown way.
	 */
	setUsedInUnknownWay(runtime: RuntimeSpec): boolean;

	/**
	 * Sets used without info.
	 */
	setUsedWithoutInfo(runtime: RuntimeSpec): boolean;
	setHasUseInfo(): void;

	/**
	 * Sets used conditionally.
	 */
	setUsedConditionally(
		condition: (condition: UsageStateType) => boolean,
		newValue: UsageStateType,
		runtime: RuntimeSpec
	): boolean;

	/**
	 * Updates used using the provided new value.
	 */
	setUsed(newValue: UsageStateType, runtime: RuntimeSpec): boolean;

	/**
	 * Returns true, if something has changed.
	 */
	unsetTarget(key: Dependency): boolean;

	/**
	 * Updates target using the provided key.
	 */
	setTarget(
		key: Dependency,
		connection: ModuleGraphConnection,
		exportName?: null | string[],
		priority?: number
	): boolean;

	/**
	 * Returns usage state.
	 */
	getUsed(runtime: RuntimeSpec): UsageStateType;

	/**
	 * Returns used name.
	 */
	getUsedName(
		fallbackName: undefined | string,
		runtime: RuntimeSpec
	): string | false;

	/**
	 * Checks whether this export info has used name.
	 */
	hasUsedName(): boolean;

	/**
	 * Updates used name using the provided name.
	 */
	setUsedName(name: string): void;

	/**
	 * Gets terminal binding.
	 */
	getTerminalBinding(
		moduleGraph: ModuleGraph,
		resolveTargetFilter?: (target: TargetItemWithConnection) => boolean
	): undefined | ExportsInfo | ExportInfo;
	isReexport(): undefined | boolean;

	/**
	 * Returns the target, undefined when there is no target, false when no target is valid.
	 */
	findTarget(
		moduleGraph: ModuleGraph,
		validTargetModuleFilter: (module: Module) => boolean
	): undefined | null | false | TargetItemWithoutConnection;

	/**
	 * Returns the target.
	 */
	getTarget(
		moduleGraph: ModuleGraph,
		resolveTargetFilter?: (target: TargetItemWithConnection) => boolean
	): undefined | TargetItemWithConnection;

	/**
	 * Move the target forward as long resolveTargetFilter is fulfilled
	 */
	moveTarget(
		moduleGraph: ModuleGraph,
		resolveTargetFilter: (target: TargetItemWithConnection) => boolean,
		updateOriginalConnection?: (
			target: TargetItemWithConnection
		) => ModuleGraphConnection
	): undefined | TargetItemWithConnection;

	/**
	 * Creates a nested exports info.
	 */
	createNestedExportsInfo(): ExportsInfo;
	getNestedExportsInfo(): undefined | ExportsInfo;

	/**
	 * Checks whether this export info contains the base info.
	 */
	hasInfo(baseInfo: ExportInfo, runtime: RuntimeSpec): boolean;

	/**
	 * Updates the hash with the data contributed by this instance.
	 */
	updateHash(hash: Hash, runtime: RuntimeSpec): void;
	getUsedInfo(): string;
	getProvidedInfo():
		| "no provided info"
		| "maybe provided (runtime-defined)"
		| "provided"
		| "not provided";
	getRenameInfo(): string;
}
declare abstract class ExportMode {
	type: ExportModeType;
	items: null | NormalReexportItem[];
	name: null | string;
	partialNamespaceExportInfo: null | ExportInfo;
	ignored: null | Set<string>;
	hidden?: null | Set<string>;
	userRequest: null | string;
	fakeType: number;
}
type ExportModeType =
	| "unused"
	| "missing"
	| "empty-star"
	| "reexport-dynamic-default"
	| "reexport-named-default"
	| "reexport-namespace-object"
	| "reexport-fake-namespace-object"
	| "reexport-undefined"
	| "normal-reexport"
	| "dynamic-reexport";
type ExportPresenceMode = 0 | 1 | 2 | 3;
declare interface ExportSpec {
	/**
	 * the name of the export
	 */
	name: string;

	/**
	 * can the export be renamed (defaults to true)
	 */
	canMangle?: boolean;

	/**
	 * is the export a terminal binding that should be checked for export star conflicts
	 */
	terminalBinding?: boolean;

	/**
	 * nested exports
	 */
	exports?: (string | ExportSpec)[];

	/**
	 * when reexported: from which module
	 */
	from?: ModuleGraphConnection;

	/**
	 * when reexported: from which export
	 */
	export?: null | string[];

	/**
	 * when reexported: with which priority
	 */
	priority?: number;

	/**
	 * export is not visible, because another export blends over it
	 */
	hidden?: boolean;
}
type ExportedVariableInfo = string | VariableInfo | ScopeInfo;
declare abstract class ExportsInfo {
	/**
	 * Gets owned exports.
	 */
	get ownedExports(): Iterable<ExportInfo>;

	/**
	 * Gets ordered owned exports.
	 */
	get orderedOwnedExports(): Iterable<ExportInfo>;

	/**
	 * Returns all exports in any order.
	 */
	get exports(): Iterable<ExportInfo>;

	/**
	 * Gets ordered exports.
	 */
	get orderedExports(): Iterable<ExportInfo>;

	/**
	 * Gets other exports info.
	 */
	get otherExportsInfo(): ExportInfo;

	/**
	 * Sets redirect named to.
	 */
	setRedirectNamedTo(exportsInfo?: ExportsInfo): boolean;
	setHasProvideInfo(): void;
	setHasUseInfo(): void;

	/**
	 * Gets own export info.
	 */
	getOwnExportInfo(name: string): ExportInfo;

	/**
	 * Returns export info for this name.
	 */
	getExportInfo(name: string): ExportInfo;

	/**
	 * Gets read only export info.
	 */
	getReadOnlyExportInfo(name: string): ExportInfo;

	/**
	 * Gets read only export info recursive.
	 */
	getReadOnlyExportInfoRecursive(name: string[]): undefined | ExportInfo;

	/**
	 * Gets nested exports info.
	 */
	getNestedExportsInfo(name?: string[]): undefined | ExportsInfo;

	/**
	 * Sets unknown exports provided.
	 */
	setUnknownExportsProvided(
		canMangle?: boolean,
		excludeExports?: Set<string>,
		targetKey?: Dependency,
		targetModule?: ModuleGraphConnection,
		priority?: number
	): boolean;

	/**
	 * Sets used in unknown way.
	 */
	setUsedInUnknownWay(runtime: RuntimeSpec): boolean;

	/**
	 * Sets used without info.
	 */
	setUsedWithoutInfo(runtime: RuntimeSpec): boolean;

	/**
	 * Sets all known exports used.
	 */
	setAllKnownExportsUsed(runtime: RuntimeSpec): boolean;

	/**
	 * Sets used for side effects only.
	 */
	setUsedForSideEffectsOnly(runtime: RuntimeSpec): boolean;

	/**
	 * Checks whether this exports info is used.
	 */
	isUsed(runtime: RuntimeSpec): boolean;

	/**
	 * Checks whether this exports info is module used.
	 */
	isModuleUsed(runtime: RuntimeSpec): boolean;

	/**
	 * Returns set of used exports, or true (when namespace object is used), or false (when unused), or null (when unknown).
	 */
	getUsedExports(runtime: RuntimeSpec): null | boolean | SortableSet<string>;

	/**
	 * Gets provided exports.
	 */
	getProvidedExports(): null | true | string[];

	/**
	 * Gets relevant exports.
	 */
	getRelevantExports(runtime: RuntimeSpec): ExportInfo[];

	/**
	 * Checks whether this exports info is export provided.
	 */
	isExportProvided(name: string | string[]): undefined | null | boolean;

	/**
	 * Returns key representing the usage.
	 */
	getUsageKey(runtime: RuntimeSpec): string;

	/**
	 * Checks whether this exports info is equally used.
	 */
	isEquallyUsed(runtimeA: RuntimeSpec, runtimeB: RuntimeSpec): boolean;

	/**
	 * Returns usage status.
	 */
	getUsed(name: string | string[], runtime: RuntimeSpec): UsageStateType;

	/**
	 * Returns the used name.
	 */
	getUsedName(name: string | string[], runtime: RuntimeSpec): UsedName;

	/**
	 * Updates the hash with the data contributed by this instance.
	 */
	updateHash(hash: Hash, runtime: RuntimeSpec): void;

	/**
	 * Gets restore provided data.
	 */
	getRestoreProvidedData(): RestoreProvidedData;

	/**
	 * Processes the provided data.
	 */
	restoreProvided(__0: RestoreProvidedData): void;
}
declare interface ExportsSpec {
	/**
	 * exported names, true for unknown exports or null for no exports
	 */
	exports: null | true | (string | ExportSpec)[];

	/**
	 * when exports = true, list of unaffected exports
	 */
	excludeExports?: Set<string>;

	/**
	 * list of maybe prior exposed, but now hidden exports
	 */
	hideExports?: null | Set<string>;

	/**
	 * when reexported: from which module
	 */
	from?: ModuleGraphConnection;

	/**
	 * when reexported: with which priority
	 */
	priority?: number;

	/**
	 * can the export be renamed (defaults to true)
	 */
	canMangle?: boolean;

	/**
	 * are the exports terminal bindings that should be checked for export star conflicts
	 */
	terminalBinding?: boolean;

	/**
	 * module on which the result depends on
	 */
	dependencies?: Module[];
}
type ExportsType =
	| "namespace"
	| "default-only"
	| "default-with-named"
	| "dynamic";
type Exposes = (string | ExposesObject)[] | ExposesObject;

/**
 * Advanced configuration for modules that should be exposed by this container.
 */
declare interface ExposesConfig {
	/**
	 * Request to a module that should be exposed by this container.
	 */
	import: string | string[];

	/**
	 * Custom chunk name for the exposed module.
	 */
	name?: string;
}

/**
 * Modules that should be exposed by this container. Property names are used as public paths.
 */
declare interface ExposesObject {
	[index: string]: string | ExposesConfig | string[];
}
type Expression =
	| ImportExpressionImport
	| UnaryExpression
	| ArrayExpression
	| ArrowFunctionExpression
	| AssignmentExpression
	| AwaitExpression
	| BinaryExpression
	| SimpleCallExpression
	| NewExpression
	| ChainExpression
	| ClassExpression
	| ConditionalExpression
	| FunctionExpression
	| Identifier
	| SimpleLiteral
	| RegExpLiteral
	| BigIntLiteral
	| LogicalExpression
	| MemberExpression
	| MetaProperty
	| ObjectExpression
	| SequenceExpression
	| TaggedTemplateExpression
	| TemplateLiteral
	| ThisExpression
	| UpdateExpression
	| YieldExpression;
declare interface ExpressionExpressionInfo {
	type: "expression";
	rootInfo: string | VariableInfo;
	name: string;
	getMembers: () => string[];
	getMembersOptionals: () => boolean[];
	getMemberRanges: () => [number, number][];
}
declare interface ExtensionAliasOption {
	alias: string | string[];
	extension: string;
}
declare interface ExtensionAliasOptions {
	[index: string]: string | string[];
}
type ExternalItem =
	| string
	| RegExp
	| (ExternalItemObjectKnown & ExternalItemObjectUnknown)
	| ((
			data: ExternalItemFunctionData,
			callback: (
				err?: null | Error,
				result?: string | boolean | string[] | { [index: string]: any }
			) => void
	  ) => void)
	| ((data: ExternalItemFunctionData) => Promise<ExternalItemValue>);
type ExternalItemFunction =
	| ((
			data: ExternalItemFunctionData,
			callback: (
				err?: null | Error,
				result?: string | boolean | string[] | { [index: string]: any }
			) => void
	  ) => void)
	| ((data: ExternalItemFunctionData) => Promise<ExternalItemValue>);
declare interface ExternalItemFunctionData {
	/**
	 * the directory in which the request is placed
	 */
	context: string;

	/**
	 * contextual information
	 */
	contextInfo: ModuleFactoryCreateDataContextInfo;

	/**
	 * the category of the referencing dependency
	 */
	dependencyType: string;

	/**
	 * get a resolve function with the current resolver options
	 */
	getResolve: (
		options?: ResolveOptions
	) =>
		| ((
				context: string,
				request: string,
				callback: (
					err?: null | Error,
					result?: string | false,
					resolveRequest?: ResolveRequest
				) => void
		  ) => void)
		| ((context: string, request: string) => Promise<string>);

	/**
	 * the request as written by the user in the require/import expression/statement
	 */
	request: string;
}

/**
 * If an dependency matches exactly a property of the object, the property value is used as dependency.
 */
declare interface ExternalItemObjectKnown {
	/**
	 * Specify externals depending on the layer.
	 */
	byLayer?:
		| { [index: string]: ExternalItem }
		| ((layer: null | string) => ExternalItem);
}

/**
 * If an dependency matches exactly a property of the object, the property value is used as dependency.
 */
declare interface ExternalItemObjectUnknown {
	[index: string]: ExternalItemValue;
}
type ExternalItemValue = string | boolean | string[] | { [index: string]: any };
declare class ExternalModule extends Module {
	/**
	 * Creates an instance of ExternalModule.
	 */
	constructor(
		request: ExternalModuleRequest,
		type: ExternalsType,
		userRequest: string,
		dependencyMeta?:
			| ImportDependencyMeta
			| CssImportDependencyMeta
			| AssetDependencyMeta
	);
	request: ExternalModuleRequest;
	externalType: ExternalsType;
	userRequest: string;
	dependencyMeta?:
		| ImportDependencyMeta
		| CssImportDependencyMeta
		| AssetDependencyMeta;

	/**
	 * restore unsafe cache data
	 */
	restoreFromUnsafeCache(
		unsafeCacheData: UnsafeCacheData,
		normalModuleFactory: NormalModuleFactory
	): void;

	/**
	 * Returns the attached hooks.
	 */
	static getCompilationHooks(compilation: Compilation): ExternalModuleHooks;
	static ModuleExternalInitFragment: typeof ModuleExternalInitFragment;
	static getExternalModuleNodeCommonjsInitFragment: (
		runtimeTemplate: RuntimeTemplate
	) => InitFragment<ChunkRenderContextJavascriptModulesPlugin>;

	/**
	 * Gets source basic types.
	 * @deprecated In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
	 */
	static getSourceBasicTypes(module: Module): ReadonlySet<string>;
}
declare interface ExternalModuleHooks {
	chunkCondition: SyncBailHook<[Chunk, Compilation], boolean>;
}
declare interface ExternalModuleInfo {
	type: "external";
	module: Module;
	runtimeCondition?: string | boolean | SortableSet<string>;
	nonDeferAccess: boolean;
	index: number;

	/**
	 * module.exports / harmony namespace object
	 */
	name?: string;

	/**
	 * deferred module.exports / harmony namespace object
	 */
	deferredName?: string;

	/**
	 * the module is deferred at least once
	 */
	deferred: boolean;

	/**
	 * deferred namespace object that being used in a not-analyzable way so it must be materialized
	 */
	deferredNamespaceObjectUsed: boolean;

	/**
	 * deferred namespace object that being used in a not-analyzable way so it must be materialized
	 */
	deferredNamespaceObjectName?: string;

	/**
	 * "default-with-named" namespace
	 */
	interopNamespaceObjectUsed: boolean;

	/**
	 * "default-with-named" namespace
	 */
	interopNamespaceObjectName?: string;

	/**
	 * "default-only" namespace
	 */
	interopNamespaceObject2Used: boolean;

	/**
	 * "default-only" namespace
	 */
	interopNamespaceObject2Name?: string;

	/**
	 * runtime namespace object that detects "__esModule"
	 */
	interopDefaultAccessUsed: boolean;

	/**
	 * runtime namespace object that detects "__esModule"
	 */
	interopDefaultAccessName?: string;
}
type ExternalModuleRequest = string | string[] | RequestRecord;
type Externals =
	| string
	| RegExp
	| (ExternalItemObjectKnown & ExternalItemObjectUnknown)
	| ((
			data: ExternalItemFunctionData,
			callback: (
				err?: null | Error,
				result?: string | boolean | string[] | { [index: string]: any }
			) => void
	  ) => void)
	| ((data: ExternalItemFunctionData) => Promise<ExternalItemValue>)
	| ExternalItem[];
declare class ExternalsPlugin {
	/**
	 * Creates an instance of ExternalsPlugin.
	 */
	constructor(
		type:
			| "import"
			| "var"
			| "module"
			| "assign"
			| "this"
			| "window"
			| "self"
			| "global"
			| "commonjs"
			| "commonjs2"
			| "commonjs-module"
			| "commonjs-static"
			| "amd"
			| "amd-require"
			| "umd"
			| "umd2"
			| "jsonp"
			| "system"
			| "promise"
			| "module-import"
			| "script"
			| "node-commonjs"
			| "asset"
			| "css-import"
			| "css-url"
			| ((dependency: Dependency) => ExternalsType),
		externals: Externals
	);
	type:
		| "import"
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "commonjs-static"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system"
		| "promise"
		| "module-import"
		| "script"
		| "node-commonjs"
		| "asset"
		| "css-import"
		| "css-url"
		| ((dependency: Dependency) => ExternalsType);
	externals: Externals;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}

/**
 * Enable presets of externals for specific targets.
 */
declare interface ExternalsPresets {
	/**
	 * Treat common electron built-in modules in main and preload context like 'electron', 'ipc' or 'shell' as external and load them via require() when used.
	 */
	electron?: boolean;

	/**
	 * Treat electron built-in modules in the main context like 'app', 'ipc-main' or 'shell' as external and load them via require() when used.
	 */
	electronMain?: boolean;

	/**
	 * Treat electron built-in modules in the preload context like 'web-frame', 'ipc-renderer' or 'shell' as external and load them via require() when used.
	 */
	electronPreload?: boolean;

	/**
	 * Treat electron built-in modules in the renderer context like 'web-frame', 'ipc-renderer' or 'shell' as external and load them via require() when used.
	 */
	electronRenderer?: boolean;

	/**
	 * Treat node.js built-in modules like fs, path or vm as external and load them via require() when used.
	 */
	node?: boolean;

	/**
	 * Treat NW.js legacy nw.gui module as external and load it via require() when used.
	 */
	nwjs?: boolean;

	/**
	 * Treat references to 'http(s)://...' and 'std:...' as external and load them via import when used (Note that this changes execution order as externals are executed before any other code in the chunk).
	 */
	web?: boolean;

	/**
	 * Treat references to 'http(s)://...' and 'std:...' as external and load them via async import() when used (Note that this external type is an async module, which has various effects on the execution).
	 */
	webAsync?: boolean;
}
type ExternalsPresetsNormalizedWithDefaults = ExternalsPresets & {
	web: NonNullable<undefined | boolean>;
	node: NonNullable<undefined | boolean>;
	nwjs: NonNullable<undefined | boolean>;
	electron: NonNullable<undefined | boolean>;
	electronMain: NonNullable<undefined | boolean>;
	electronPreload: NonNullable<undefined | boolean>;
	electronRenderer: NonNullable<undefined | boolean>;
};
type ExternalsType =
	| "import"
	| "var"
	| "module"
	| "assign"
	| "this"
	| "window"
	| "self"
	| "global"
	| "commonjs"
	| "commonjs2"
	| "commonjs-module"
	| "commonjs-static"
	| "amd"
	| "amd-require"
	| "umd"
	| "umd2"
	| "jsonp"
	| "system"
	| "promise"
	| "module-import"
	| "script"
	| "node-commonjs"
	| "asset"
	| "css-import"
	| "css-url";

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface FSImplementation {
	open?: (...args: any[]) => any;
	close?: (...args: any[]) => any;
}

/**
 * Processes the provided factorize module option.
 */
declare interface FactorizeModuleOptions {
	currentProfile?: ModuleProfile;
	factory: ModuleFactory;
	dependencies: Dependency[];

	/**
	 * return full ModuleFactoryResult instead of only module
	 */
	factoryResult?: boolean;
	originModule: null | Module;
	contextInfo?: Partial<ModuleFactoryCreateDataContextInfo>;
	context?: string;
}
declare interface FactoryMeta {
	sideEffectFree?: boolean;
}
type FakeHook<T> = T & FakeHookMarker;

/**
 * Creates a deprecation.
 */
declare interface FakeHookMarker {}
declare interface FallbackCacheGroup {
	chunksFilter: (chunk: Chunk) => undefined | boolean;
	minSize: SplitChunksSizes;
	maxAsyncSize: SplitChunksSizes;
	maxInitialSize: SplitChunksSizes;
	automaticNameDelimiter: string;
}
declare class FetchCompileAsyncWasmPlugin {
	constructor();

	/**
	 * Registers compilation hooks that attach the async fetch-based wasm runtime
	 * to chunks containing async WebAssembly modules.
	 */
	apply(compiler: Compiler): void;
}
declare class FetchCompileWasmPlugin {
	/**
	 * Stores options that affect generated synchronous WebAssembly runtime code.
	 */
	constructor(options?: FetchCompileWasmPluginOptions);
	options: FetchCompileWasmPluginOptions;

	/**
	 * Registers compilation hooks that attach the fetch-based synchronous wasm
	 * runtime module to chunks containing sync WebAssembly modules.
	 */
	apply(compiler: Compiler): void;
}
declare interface FetchCompileWasmPluginOptions {
	/**
	 * mangle imports
	 */
	mangleImports?: boolean;
}

/**
 * Options object for persistent file-based caching.
 */
declare interface FileCacheOptions {
	/**
	 * Allows to collect unused memory allocated during deserialization. This requires copying data into smaller buffers and has a performance cost.
	 */
	allowCollectingMemory?: boolean;

	/**
	 * Dependencies the build depends on (in multiple categories, default categories: 'defaultWebpack').
	 */
	buildDependencies?: { [index: string]: string[] };

	/**
	 * Base directory for the cache (defaults to node_modules/.cache/webpack).
	 */
	cacheDirectory?: string;

	/**
	 * Locations for the cache (defaults to cacheDirectory / name).
	 */
	cacheLocation?: string;

	/**
	 * Compression type used for the cache files.
	 */
	compression?: false | "gzip" | "brotli";

	/**
	 * Algorithm used for generation the hash (see node.js crypto package).
	 */
	hashAlgorithm?: string;

	/**
	 * Time in ms after which idle period the cache storing should happen.
	 */
	idleTimeout?: number;

	/**
	 * Time in ms after which idle period the cache storing should happen when larger changes has been detected (cumulative build time > 2 x avg cache store time).
	 */
	idleTimeoutAfterLargeChanges?: number;

	/**
	 * Time in ms after which idle period the initial cache storing should happen.
	 */
	idleTimeoutForInitialStore?: number;

	/**
	 * List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable.
	 */
	immutablePaths?: (string | RegExp)[];

	/**
	 * List of paths that are managed by a package manager and can be trusted to not be modified otherwise.
	 */
	managedPaths?: (string | RegExp)[];

	/**
	 * Time for which unused cache entries stay in the filesystem cache at minimum (in milliseconds).
	 */
	maxAge?: number;

	/**
	 * Number of generations unused cache entries stay in memory cache at minimum (0 = no memory cache used, 1 = may be removed after unused for a single compilation, ..., Infinity: kept forever). Cache entries will be deserialized from disk when removed from memory cache.
	 */
	maxMemoryGenerations?: number;

	/**
	 * Additionally cache computation of modules that are unchanged and reference only unchanged modules in memory.
	 */
	memoryCacheUnaffected?: boolean;

	/**
	 * Name for the cache. Different names will lead to different coexisting caches.
	 */
	name?: string;

	/**
	 * Track and log detailed timing information for individual cache items.
	 */
	profile?: boolean;

	/**
	 * Enable/disable readonly mode.
	 */
	readonly?: boolean;

	/**
	 * When to store data to the filesystem. (pack: Store data when compiler is idle in a single file).
	 */
	store?: "pack";

	/**
	 * Filesystem caching.
	 */
	type: "filesystem";

	/**
	 * Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache.
	 */
	version?: string;
}
declare interface FileSystem {
	/**
	 * read file method
	 */
	readFile: ReadFileTypes;

	/**
	 * readdir method
	 */
	readdir: ReaddirTypes;

	/**
	 * read json method
	 */
	readJson?: (
		pathOrFileDescription: PathOrFileDescriptorTypes,
		callback: (
			err: null | Error | NodeJS.ErrnoException,
			result?: JsonObjectTypes
		) => void
	) => void;

	/**
	 * read link method
	 */
	readlink: ReadlinkTypes;

	/**
	 * lstat method
	 */
	lstat?: LStatTypes;

	/**
	 * stat method
	 */
	stat: StatTypes;

	/**
	 * realpath method
	 */
	realpath?: RealPathTypes;
}
declare abstract class FileSystemInfo {
	fs: InputFileSystem;
	logger?: WebpackLogger;
	fileTimestampQueue: AsyncQueue<string, string, FileSystemInfoEntry>;
	fileHashQueue: AsyncQueue<string, string, string>;
	contextTimestampQueue: AsyncQueue<string, string, ContextFileSystemInfoEntry>;
	contextHashQueue: AsyncQueue<string, string, ContextHash>;
	contextTshQueue: AsyncQueue<string, string, ContextTimestampAndHash>;
	managedItemQueue: AsyncQueue<string, string, string>;
	managedItemDirectoryQueue: AsyncQueue<string, string, Set<string>>;
	unmanagedPathsWithSlash: string[];
	unmanagedPathsRegExps: RegExp[];
	managedPaths: (string | RegExp)[];
	managedPathsWithSlash: string[];
	managedPathsRegExps: RegExp[];
	immutablePaths: (string | RegExp)[];
	immutablePathsWithSlash: string[];
	immutablePathsRegExps: RegExp[];
	logStatistics(): void;
	clear(): void;

	/**
	 * Adds file timestamps.
	 */
	addFileTimestamps(
		map: ReadonlyMap<
			string,
			| null
			| FileSystemInfoEntry
			| "ignore"
			| ExistenceOnlyTimeEntryFileSystemInfo
		>,
		immutable?: boolean
	): void;

	/**
	 * Adds context timestamps.
	 */
	addContextTimestamps(
		map: ReadonlyMap<
			string,
			| null
			| ContextFileSystemInfoEntry
			| "ignore"
			| ExistenceOnlyTimeEntryFileSystemInfo
		>,
		immutable?: boolean
	): void;

	/**
	 * Gets file timestamp.
	 */
	getFileTimestamp(
		path: string,
		callback: (
			err?: null | WebpackError,
			fileTimestamp?: null | FileSystemInfoEntry | "ignore"
		) => void
	): void;

	/**
	 * Gets context timestamp.
	 */
	getContextTimestamp(
		path: string,
		callback: (
			err?: null | WebpackError,
			resolvedContextTimestamp?:
				| null
				| "ignore"
				| ResolvedContextFileSystemInfoEntry
		) => void
	): void;

	/**
	 * Returns file hash.
	 */
	getFileHash(
		path: string,
		callback: (err?: null | WebpackError, hash?: null | string) => void
	): void;

	/**
	 * Returns context hash.
	 */
	getContextHash(
		path: string,
		callback: (err?: null | WebpackError, contextHash?: string) => void
	): void;

	/**
	 * Returns context tsh.
	 */
	getContextTsh(
		path: string,
		callback: (
			err?: null | WebpackError,
			resolvedContextTimestampAndHash?: null | ResolvedContextTimestampAndHash
		) => void
	): void;

	/**
	 * Resolves build dependencies.
	 */
	resolveBuildDependencies(
		context: string,
		deps: Iterable<string>,
		callback: (
			err?: null | Error,
			resolveBuildDependenciesResult?: ResolveBuildDependenciesResult
		) => void
	): void;

	/**
	 * Checks resolve results valid.
	 */
	checkResolveResultsValid(
		resolveResults: Map<string, undefined | string | false>,
		callback: (err?: null | Error, result?: boolean) => void
	): void;

	/**
	 * Creates a snapshot.
	 */
	createSnapshot(
		startTime: undefined | null | number,
		files: undefined | null | Iterable<string>,
		directories: undefined | null | Iterable<string>,
		missing: undefined | null | Iterable<string>,
		options: undefined | null | SnapshotOptionsFileSystemInfo,
		callback: (err: null | WebpackError, snapshot: null | Snapshot) => void
	): void;

	/**
	 * Merges the provided values into a single result.
	 */
	mergeSnapshots(snapshot1: Snapshot, snapshot2: Snapshot): Snapshot;

	/**
	 * Checks snapshot valid.
	 */
	checkSnapshotValid(
		snapshot: Snapshot,
		callback: (err?: null | WebpackError, result?: boolean) => void
	): void;
	getDeprecatedFileTimestamps(): Map<string, null | number>;
	getDeprecatedContextTimestamps(): Map<string, null | number>;
}
declare interface FileSystemInfoEntry {
	safeTime: number;
	timestamp?: number;
}
type FilterItemTypes = string | RegExp | ((value: string) => boolean);
declare interface Flags {
	[index: string]: Argument;
}
declare interface FullHashChunkModuleHashes {
	[index: string]: string;
}
declare interface GenerateContext {
	/**
	 * mapping from dependencies to templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * the requirements for runtime
	 */
	runtimeRequirements: Set<string>;

	/**
	 * the runtime
	 */
	runtime: RuntimeSpec;

	/**
	 * when in concatenated module, information about other concatenated modules
	 */
	concatenationScope?: ConcatenationScope;

	/**
	 * code generation results of other modules (need to have a codeGenerationDependency to use that)
	 */
	codeGenerationResults?: CodeGenerationResults;

	/**
	 * which kind of code should be generated
	 */
	type: string;

	/**
	 * get access to the code generation data
	 */
	getData?: () => CodeGenerationResultData;
}
declare interface GeneratedSourceInfo {
	/**
	 * generated line
	 */
	generatedLine?: number;

	/**
	 * generated column
	 */
	generatedColumn?: number;

	/**
	 * source
	 */
	source?: string;
}
declare class Generator {
	constructor();

	/**
	 * Returns the source types available for this module.
	 */
	getTypes(module: NormalModule): ReadonlySet<string>;

	/**
	 * Returns the estimated size for the requested source type.
	 */
	getSize(module: NormalModule, type?: string): number;

	/**
	 * Generates generated code for this runtime module.
	 */
	generate(module: NormalModule, __1: GenerateContext): null | Source;

	/**
	 * Returns the reason this module cannot be concatenated, when one exists.
	 */
	getConcatenationBailoutReason(
		module: NormalModule,
		context: ConcatenationBailoutReasonContext
	): undefined | string;

	/**
	 * Updates the hash with the data contributed by this instance.
	 */
	updateHash(hash: Hash, __1: UpdateHashContextGenerator): void;

	/**
	 * Returns generator by type.
	 */
	static byType(map: {
		[index: string]: undefined | Generator;
	}): ByTypeGenerator;
}
declare interface GeneratorOptions {
	[index: string]: any;
}
type GeneratorOptionsByModuleType = GeneratorOptionsByModuleTypeKnown &
	GeneratorOptionsByModuleTypeUnknown;

/**
 * Specify options for each generator.
 */
declare interface GeneratorOptionsByModuleTypeKnown {
	/**
	 * Generator options for asset modules.
	 */
	asset?: AssetGeneratorOptions;

	/**
	 * No generator options are supported for this module type.
	 */
	"asset/bytes"?: EmptyGeneratorOptions;

	/**
	 * Generator options for asset/inline modules.
	 */
	"asset/inline"?: AssetInlineGeneratorOptions;

	/**
	 * Generator options for asset/resource modules.
	 */
	"asset/resource"?: AssetResourceGeneratorOptions;

	/**
	 * No generator options are supported for this module type.
	 */
	"asset/source"?: EmptyGeneratorOptions;

	/**
	 * Generator options for css modules.
	 */
	css?: CssGeneratorOptions;

	/**
	 * Generator options for css/module modules.
	 */
	"css/auto"?: CssModuleGeneratorOptions;

	/**
	 * Generator options for css/module modules.
	 */
	"css/global"?: CssModuleGeneratorOptions;

	/**
	 * Generator options for css/module modules.
	 */
	"css/module"?: CssModuleGeneratorOptions;

	/**
	 * No generator options are supported for this module type.
	 */
	javascript?: EmptyGeneratorOptions;

	/**
	 * No generator options are supported for this module type.
	 */
	"javascript/auto"?: EmptyGeneratorOptions;

	/**
	 * No generator options are supported for this module type.
	 */
	"javascript/dynamic"?: EmptyGeneratorOptions;

	/**
	 * No generator options are supported for this module type.
	 */
	"javascript/esm"?: EmptyGeneratorOptions;

	/**
	 * Generator options for json modules.
	 */
	json?: JsonGeneratorOptions;
}

/**
 * Specify options for each generator.
 */
declare interface GeneratorOptionsByModuleTypeUnknown {
	[index: string]: { [index: string]: any };
}
declare class GetChunkFilenameRuntimeModule extends RuntimeModule {
	constructor(
		contentType: string,
		name: string,
		global: string,
		getFilenameForChunk: (
			chunk: Chunk
		) =>
			| string
			| false
			| ((pathData: PathData, assetInfo?: AssetInfo) => string),
		allChunks: boolean
	);
	contentType: string;
	global: string;
	getFilenameForChunk: (
		chunk: Chunk
	) => string | false | ((pathData: PathData, assetInfo?: AssetInfo) => string);
	allChunks: boolean;

	/**
	 * Runtime modules without any dependencies to other runtime modules
	 */
	static STAGE_NORMAL: number;

	/**
	 * Runtime modules with simple dependencies on other runtime modules
	 */
	static STAGE_BASIC: number;

	/**
	 * Runtime modules which attach to handlers of other runtime modules
	 */
	static STAGE_ATTACH: number;

	/**
	 * Runtime modules which trigger actions on bootstrap
	 */
	static STAGE_TRIGGER: number;

	/**
	 * Gets source basic types.
	 * @deprecated In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
	 */
	static getSourceBasicTypes(module: Module): ReadonlySet<string>;
}

/**
 * Creates a callback wrapper that waits for a fixed number of completions and
 * forwards the first error immediately.
 */
declare interface GotHandler<T> {
	/**
	 * Creates a callback wrapper that waits for a fixed number of completions and
	 * forwards the first error immediately.
	 */
	(result: T, callback: () => void): void;
}

/**
 * Returns grouped items.
 */
declare interface GroupConfig<T, R> {
	getKeys: (item: T) => undefined | string[];
	getOptions?: (name: string, items: T[]) => GroupOptionsSmartGrouping;
	createGroup: (key: string, children: T[], items: T[]) => R;
}
type GroupOptionsAsyncDependenciesBlock = RawChunkGroupOptions & {
	name?: null | string;
} & { entryOptions?: EntryOptions } & { circular?: boolean };

/**
 * Returns grouped items.
 */
declare interface GroupOptionsSmartGrouping {
	groupChildren?: boolean;
	force?: boolean;
	targetGroupCount?: number;
}
declare interface HMRJavascriptParserHooks {
	hotAcceptCallback: SyncBailHook<
		[
			(
				| ImportExpressionImport
				| UnaryExpression
				| ArrayExpression
				| ArrowFunctionExpression
				| AssignmentExpression
				| AwaitExpression
				| BinaryExpression
				| SimpleCallExpression
				| NewExpression
				| ChainExpression
				| ClassExpression
				| ConditionalExpression
				| FunctionExpression
				| Identifier
				| SimpleLiteral
				| RegExpLiteral
				| BigIntLiteral
				| LogicalExpression
				| MemberExpression
				| MetaProperty
				| ObjectExpression
				| SequenceExpression
				| TaggedTemplateExpression
				| TemplateLiteral
				| ThisExpression
				| UpdateExpression
				| YieldExpression
				| SpreadElement
			),
			string[]
		],
		void
	>;
	hotAcceptWithoutCallback: SyncBailHook<[CallExpression, string[]], void>;
}
declare interface HandleModuleCreationOptions {
	factory: ModuleFactory;
	dependencies: Dependency[];
	originModule: null | Module;
	contextInfo?: Partial<ModuleFactoryCreateDataContextInfo>;
	context?: string;

	/**
	 * recurse into dependencies of the created module
	 */
	recursive?: boolean;

	/**
	 * connect the resolved module with the origin module
	 */
	connectOrigin?: boolean;

	/**
	 * check the cycle dependencies of the created module
	 */
	checkCycle?: boolean;
}
declare abstract class HarmonyExportImportedSpecifierDependency extends HarmonyImportDependency {
	ids: string[];
	name: null | string;
	activeExports: Set<string>;
	otherStarExports: null | ReadonlyArray<HarmonyExportImportedSpecifierDependency>;
	exportPresenceMode: ExportPresenceMode;
	allStarExports: null | HarmonyStarExportsList;

	/**
	 * Returns id.
	 * @deprecated
	 */
	get id(): void;

	/**
	 * Returns id.
	 * @deprecated
	 */
	getId(): void;

	/**
	 * Updates id.
	 * @deprecated
	 */
	setId(): void;

	/**
	 * Returns the imported id.
	 */
	getIds(moduleGraph: ModuleGraph): string[];

	/**
	 * Updates ids using the provided module graph.
	 */
	setIds(moduleGraph: ModuleGraph, ids: string[]): void;

	/**
	 * Returns the export mode.
	 */
	getMode(moduleGraph: ModuleGraph, runtime: RuntimeSpec): ExportMode;

	/**
	 * Gets star reexports.
	 */
	getStarReexports(
		moduleGraph: ModuleGraph,
		runtime: RuntimeSpec,
		exportsInfo?: ExportsInfo,
		importedModule?: Module
	): {
		exports?: Set<string>;
		checked?: Set<string>;
		ignoredExports: Set<string>;
		hidden?: Set<string>;
	};
}
declare class HarmonyImportDependency extends ModuleDependency {
	/**
	 * Creates an instance of HarmonyImportDependency.
	 */
	constructor(
		request: string,
		sourceOrder: number,
		phase?: 0 | 1 | 2,
		attributes?: ImportAttributes
	);
	phase: ImportPhaseType;
	attributes?: ImportAttributes;

	/**
	 * Returns name of the variable for the import.
	 */
	getImportVar(moduleGraph: ModuleGraph): string;

	/**
	 * Gets module exports.
	 */
	getModuleExports(__0: DependencyTemplateContext): string;

	/**
	 * Gets import statement.
	 */
	getImportStatement(
		update: boolean,
		__1: DependencyTemplateContext
	): [string, string];

	/**
	 * Gets linking errors.
	 */
	getLinkingErrors(
		moduleGraph: ModuleGraph,
		ids: string[],
		additionalMessage: string
	): undefined | WebpackError[];
	static Template: typeof HarmonyImportDependencyTemplate;
	static ExportPresenceModes: {
		NONE: ExportPresenceMode;
		WARN: ExportPresenceMode;
		AUTO: ExportPresenceMode;
		ERROR: ExportPresenceMode;
		/**
		 * Returns result.
		 */
		fromUserOption(str: string | false): ExportPresenceMode;
		/**
		 * Resolve export presence mode from parser options with a specific key and shared fallbacks.
		 */
		resolveFromOptions(
			specificValue: undefined | string | false,
			options: JavascriptParserOptions
		): ExportPresenceMode;
	};
	static getNonOptionalPart: (
		members: string[],
		membersOptionals: boolean[]
	) => string[];
	static NO_EXPORTS_REFERENCED: string[][];
	static EXPORTS_OBJECT_REFERENCED: string[][];

	/**
	 * Returns true if the dependency is a low priority dependency.
	 */
	static isLowPriorityDependency(dependency: Dependency): boolean;
	static TRANSITIVE: symbol;
}
declare class HarmonyImportDependencyTemplate extends DependencyTemplate {
	constructor();

	/**
	 * Gets import emitted runtime.
	 */
	static getImportEmittedRuntime(
		module: Module,
		referencedModule: Module
	): undefined | string | boolean | SortableSet<string>;
}
declare interface HarmonySettings {
	ids: string[];
	source: string;
	sourceOrder: number;
	name: string;
	await: boolean;
	attributes?: ImportAttributes;
	phase: ImportPhaseType;
}
declare interface HarmonySpecifierGuards {
	guards?: AppendOnlyStackedSet<string>;
}
declare abstract class HarmonyStarExportsList {
	dependencies: HarmonyExportImportedSpecifierDependency[];

	/**
	 * Processes the provided dep.
	 */
	push(dep: HarmonyExportImportedSpecifierDependency): void;
	slice(): HarmonyExportImportedSpecifierDependency[];

	/**
	 * Serializes this instance into the provided serializer context.
	 */
	serialize(__0: ObjectSerializerContext): void;

	/**
	 * Restores this instance from the provided deserializer context.
	 */
	deserialize(__0: ObjectDeserializerContext): void;
}
declare class Hash {
	constructor();

	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 */
	update(data: string | Buffer): Hash;

	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 */
	update(data: string, inputEncoding: string): Hash;

	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 */
	digest(): Buffer;

	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 */
	digest(encoding: string): string;
}
type HashFunction = string | typeof Hash;
declare interface HashLike {
	/**
	 * make hash update
	 */
	update: (data: string | Buffer, inputEncoding?: string) => HashLike;

	/**
	 * get hash digest
	 */
	digest: (encoding?: string) => string | Buffer;
}
declare interface HashableObject {
	updateHash: (hash: Hash) => void;
}
declare class HashedModuleIdsPlugin {
	/**
	 * Creates an instance of HashedModuleIdsPlugin.
	 */
	constructor(options?: HashedModuleIdsPluginOptions);
	options: HashedModuleIdsPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface HashedModuleIdsPluginOptions {
	/**
	 * The context directory for creating names.
	 */
	context?: string;

	/**
	 * The encoding to use when generating the hash, defaults to 'base64'. All encodings from Node.JS' hash.digest are supported.
	 */
	hashDigest?:
		| "ascii"
		| "utf8"
		| "utf-8"
		| "utf16le"
		| "utf-16le"
		| "ucs2"
		| "ucs-2"
		| "base64"
		| "base64url"
		| "latin1"
		| "binary"
		| "hex";

	/**
	 * The prefix length of the hash digest to use, defaults to 4.
	 */
	hashDigestLength?: number;

	/**
	 * The hashing algorithm to use, defaults to 'md4'. All functions from Node.JS' crypto.createHash are supported.
	 */
	hashFunction?: string | typeof Hash;
}
declare abstract class HelperRuntimeModule extends RuntimeModule {}
declare class HotModuleReplacementPlugin {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Returns the attached hooks.
	 */
	static getParserHooks(parser: JavascriptParser): HMRJavascriptParserHooks;
}

/**
 * These properties are added by the HotModuleReplacementPlugin
 */
declare interface HotModuleReplacementPluginLoaderContext {
	hot?: boolean;
}
declare class HotUpdateChunk extends Chunk {
	constructor();
}

/**
 * Options for building http resources.
 */
declare interface HttpUriOptions {
	/**
	 * List of allowed URIs (resp. the beginning of them).
	 */
	allowedUris: (string | RegExp | ((uri: string) => boolean))[];

	/**
	 * Location where resource content is stored for lockfile entries. It's also possible to disable storing by passing false.
	 */
	cacheLocation?: string | false;

	/**
	 * When set, anything that would lead to a modification of the lockfile or any resource content, will result in an error.
	 */
	frozen?: boolean;

	/**
	 * Location of the lockfile.
	 */
	lockfileLocation?: string;

	/**
	 * Proxy configuration, which can be used to specify a proxy server to use for HTTP requests.
	 */
	proxy?: string;

	/**
	 * When set, resources of existing lockfile entries will be fetched and entries will be upgraded when resource content has changed.
	 */
	upgrade?: boolean;
}
declare class HttpUriPlugin {
	/**
	 * Creates an instance of HttpUriPlugin.
	 */
	constructor(options: HttpUriOptions);
	options: HttpUriOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
type IBigIntStatsFs = IStatsBaseFs<bigint> & {
	atimeNs: bigint;
	mtimeNs: bigint;
	ctimeNs: bigint;
	birthtimeNs: bigint;
};
type IBigIntStatsTypes = IStatsBaseTypes<bigint> & {
	atimeNs: bigint;
	mtimeNs: bigint;
	ctimeNs: bigint;
	birthtimeNs: bigint;
};

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface IStatsBaseFs<T> {
	isFile: () => boolean;
	isDirectory: () => boolean;
	isBlockDevice: () => boolean;
	isCharacterDevice: () => boolean;
	isSymbolicLink: () => boolean;
	isFIFO: () => boolean;
	isSocket: () => boolean;
	dev: T;
	ino: T;
	mode: T;
	nlink: T;
	uid: T;
	gid: T;
	rdev: T;
	size: T;
	blksize: T;
	blocks: T;
	atimeMs: T;
	mtimeMs: T;
	ctimeMs: T;
	birthtimeMs: T;
	atime: Date;
	mtime: Date;
	ctime: Date;
	birthtime: Date;
}
declare interface IStatsBaseTypes<T> {
	/**
	 * is file
	 */
	isFile: () => boolean;

	/**
	 * is directory
	 */
	isDirectory: () => boolean;

	/**
	 * is block device
	 */
	isBlockDevice: () => boolean;

	/**
	 * is character device
	 */
	isCharacterDevice: () => boolean;

	/**
	 * is symbolic link
	 */
	isSymbolicLink: () => boolean;

	/**
	 * is FIFO
	 */
	isFIFO: () => boolean;

	/**
	 * is socket
	 */
	isSocket: () => boolean;

	/**
	 * dev
	 */
	dev: T;

	/**
	 * ino
	 */
	ino: T;

	/**
	 * mode
	 */
	mode: T;

	/**
	 * nlink
	 */
	nlink: T;

	/**
	 * uid
	 */
	uid: T;

	/**
	 * gid
	 */
	gid: T;

	/**
	 * rdev
	 */
	rdev: T;

	/**
	 * size
	 */
	size: T;

	/**
	 * blksize
	 */
	blksize: T;

	/**
	 * blocks
	 */
	blocks: T;

	/**
	 * atime ms
	 */
	atimeMs: T;

	/**
	 * mtime ms
	 */
	mtimeMs: T;

	/**
	 * ctime ms
	 */
	ctimeMs: T;

	/**
	 * birthtime ms
	 */
	birthtimeMs: T;

	/**
	 * atime
	 */
	atime: Date;

	/**
	 * mtime
	 */
	mtime: Date;

	/**
	 * ctime
	 */
	ctime: Date;

	/**
	 * birthtime
	 */
	birthtime: Date;
}

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface IStatsFs {
	isFile: () => boolean;
	isDirectory: () => boolean;
	isBlockDevice: () => boolean;
	isCharacterDevice: () => boolean;
	isSymbolicLink: () => boolean;
	isFIFO: () => boolean;
	isSocket: () => boolean;
	dev: number;
	ino: number;
	mode: number;
	nlink: number;
	uid: number;
	gid: number;
	rdev: number;
	size: number;
	blksize: number;
	blocks: number;
	atimeMs: number;
	mtimeMs: number;
	ctimeMs: number;
	birthtimeMs: number;
	atime: Date;
	mtime: Date;
	ctime: Date;
	birthtime: Date;
}
declare interface IStatsTypes {
	/**
	 * is file
	 */
	isFile: () => boolean;

	/**
	 * is directory
	 */
	isDirectory: () => boolean;

	/**
	 * is block device
	 */
	isBlockDevice: () => boolean;

	/**
	 * is character device
	 */
	isCharacterDevice: () => boolean;

	/**
	 * is symbolic link
	 */
	isSymbolicLink: () => boolean;

	/**
	 * is FIFO
	 */
	isFIFO: () => boolean;

	/**
	 * is socket
	 */
	isSocket: () => boolean;

	/**
	 * dev
	 */
	dev: number;

	/**
	 * ino
	 */
	ino: number;

	/**
	 * mode
	 */
	mode: number;

	/**
	 * nlink
	 */
	nlink: number;

	/**
	 * uid
	 */
	uid: number;

	/**
	 * gid
	 */
	gid: number;

	/**
	 * rdev
	 */
	rdev: number;

	/**
	 * size
	 */
	size: number;

	/**
	 * blksize
	 */
	blksize: number;

	/**
	 * blocks
	 */
	blocks: number;

	/**
	 * atime ms
	 */
	atimeMs: number;

	/**
	 * mtime ms
	 */
	mtimeMs: number;

	/**
	 * ctime ms
	 */
	ctimeMs: number;

	/**
	 * birthtime ms
	 */
	birthtimeMs: number;

	/**
	 * atime
	 */
	atime: Date;

	/**
	 * mtime
	 */
	mtime: Date;

	/**
	 * ctime
	 */
	ctime: Date;

	/**
	 * birthtime
	 */
	birthtime: Date;
}
declare interface IdToHashMap {
	[index: number]: string;
	[index: string]: string;
}
declare class IgnorePlugin {
	/**
	 * Creates an instance of IgnorePlugin.
	 */
	constructor(options: IgnorePluginOptions);
	options: IgnorePluginOptions;

	/**
	 * Note that if "contextRegExp" is given, both the "resourceRegExp" and "contextRegExp" have to match.
	 */
	checkIgnore(
		resolveData: ResolveData | BeforeContextResolveData
	): undefined | false;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
type IgnorePluginOptions =
	| {
			/**
			 * A RegExp to test the context (directory) against.
			 */
			contextRegExp?: RegExp;
			/**
			 * A RegExp to test the request against.
			 */
			resourceRegExp: RegExp;
	  }
	| {
			/**
			 * A filter function for resource and context.
			 */
			checkResource: (resource: string, context: string) => boolean;
	  };
type ImportAttributes = Record<string, string> & {};
declare interface ImportDependencyMeta {
	attributes?: ImportAttributes;
	externalType?: "import" | "module";
}
type ImportExpressionJavascriptParser = ImportExpressionImport & {
	phase?: "defer" | "source";
};
declare interface ImportModuleOptions {
	/**
	 * the target layer
	 */
	layer?: string;

	/**
	 * the target public path
	 */
	publicPath?: string;

	/**
	 * target base uri
	 */
	baseUri?: string;
}
type ImportPhaseType = 0 | 1 | 2;
declare interface ImportSettings {
	references: string[][];
	expression: ImportExpressionJavascriptParser;
}
type ImportSource =
	| undefined
	| null
	| string
	| SimpleLiteral
	| RegExpLiteral
	| BigIntLiteral;
type Imported = true | [string, string][];

/**
 * Options for infrastructure level logging.
 */
declare interface InfrastructureLogging {
	/**
	 * Only appends lines to the output. Avoids updating existing output e. g. for status messages. This option is only used when no custom console is provided.
	 */
	appendOnly?: boolean;

	/**
	 * Enables/Disables colorful output. This option is only used when no custom console is provided.
	 */
	colors?: boolean;

	/**
	 * Custom console used for logging.
	 */
	console?: Console;

	/**
	 * Enable debug logging for specific loggers.
	 */
	debug?:
		| string
		| boolean
		| RegExp
		| FilterItemTypes[]
		| ((value: string) => boolean);

	/**
	 * Log level.
	 */
	level?: "none" | "verbose" | "error" | "warn" | "info" | "log";

	/**
	 * Stream used for logging output. Defaults to process.stderr. This option is only used when no custom console is provided.
	 */
	stream?: NodeJS.WritableStream & {
		isTTY?: boolean;
		columns?: number;
		rows?: number;
	};
}
type InfrastructureLoggingNormalizedWithDefaults = InfrastructureLogging & {
	stream: NodeJS.WritableStream & {
		isTTY?: boolean;
		columns?: number;
		rows?: number;
	};
	level: NonNullable<
		undefined | "none" | "verbose" | "error" | "warn" | "info" | "log"
	>;
	debug: NonNullable<
		| undefined
		| string
		| boolean
		| RegExp
		| FilterItemTypes[]
		| ((value: string) => boolean)
	>;
	colors: NonNullable<undefined | boolean>;
	appendOnly: NonNullable<undefined | boolean>;
};
declare class InitFragment<GenerateContext> {
	/**
	 * Creates an instance of InitFragment.
	 */
	constructor(
		content: undefined | string | Source,
		stage: number,
		position: number,
		key?: string,
		endContent?: string | Source
	);
	content?: string | Source;
	stage: number;
	position: number;
	key?: string;
	endContent?: string | Source;

	/**
	 * Returns the source code that will be included as initialization code.
	 */
	getContent(context: GenerateContext): undefined | string | Source;

	/**
	 * Returns the source code that will be included at the end of the module.
	 */
	getEndContent(context: GenerateContext): undefined | string | Source;

	/**
	 * Serializes this instance into the provided serializer context.
	 */
	serialize(context: ObjectSerializerContext): void;

	/**
	 * Restores this instance from the provided deserializer context.
	 */
	deserialize(context: ObjectDeserializerContext): void;

	/**
	 * Adds the provided source to the init fragment.
	 */
	static addToSource<Context>(
		source: Source,
		initFragments: MaybeMergeableInitFragment<Context>[],
		context: Context
	): Source;
	static STAGE_CONSTANTS: number;
	static STAGE_ASYNC_BOUNDARY: number;
	static STAGE_HARMONY_EXPORTS: number;
	static STAGE_HARMONY_IMPORTS: number;
	static STAGE_PROVIDES: number;
	static STAGE_ASYNC_DEPENDENCIES: number;
	static STAGE_ASYNC_HARMONY_IMPORTS: number;
}

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface InputFileSystem {
	readFile: ReadFileFs;
	readFileSync?: ReadFileSync;
	readlink: ReadlinkFs;
	readlinkSync?: ReadlinkSync;
	readdir: ReaddirFs;
	readdirSync?: ReaddirSync;
	stat: StatFs;
	statSync?: StatSync;
	lstat?: LStatFs;
	lstatSync?: LStatSync;
	realpath?: RealPathFs;
	realpathSync?: RealPathSync;
	readJson?: (
		pathOrFileDescriptor: PathOrFileDescriptorFs,
		callback: (
			err: null | Error | NodeJS.ErrnoException,
			result?: JsonObjectFs
		) => void
	) => void;
	readJsonSync?: (pathOrFileDescriptor: PathOrFileDescriptorFs) => JsonObjectFs;
	purge?: (value?: string | string[] | Set<string>) => void;
	join?: (path1: string, path2: string) => string;
	relative?: (from: string, to: string) => string;
	dirname?: (dirname: string) => string;
}
declare interface Inspector {
	Session: typeof SessionImportInspectorClass_1;
}
type IntermediateFileSystem = InputFileSystem &
	OutputFileSystem &
	IntermediateFileSystemExtras;

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface IntermediateFileSystemExtras {
	mkdirSync: MkdirSync;
	createWriteStream: (
		pathLike: PathLikeFs,
		result?:
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| WriteStreamOptions
	) => NodeJS.WritableStream;
	open: Open;
	read: Read<NodeJS.ArrayBufferView>;
	close: (
		df: number,
		callback: (err: null | NodeJS.ErrnoException) => void
	) => void;
	rename: (
		a: PathLikeFs,
		b: PathLikeFs,
		callback: (err: null | NodeJS.ErrnoException) => void
	) => void;
}
type InternalCell<T> = T | typeof TOMBSTONE | typeof UNDEFINED_MARKER;
declare interface InterpolatedPathAndAssetInfo {
	path: string;
	info: AssetInfo;
}
type Issuer = undefined | null | Module;
type IssuerLayer = null | string;
declare interface Item<T> {
	[index: string]: string | string[] | T;
}
declare abstract class ItemCacheFacade {
	/**
	 * Returns value.
	 */
	get<T>(callback: CallbackCacheCacheFacade<T>): void;

	/**
	 * Returns promise with the data.
	 */
	getPromise<T>(): Promise<T>;

	/**
	 * Processes the provided data.
	 */
	store<T>(data: T, callback: CallbackCacheCacheFacade<void>): void;

	/**
	 * Stores the provided data.
	 */
	storePromise<T>(data: T): Promise<void>;

	/**
	 * Processes the provided computer.
	 */
	provide<T>(
		computer: (callback: CallbackNormalErrorCache<T>) => void,
		callback: CallbackNormalErrorCache<T>
	): void;

	/**
	 * Returns promise with the data.
	 */
	providePromise<T>(computer: () => T | Promise<T>): Promise<T>;
}
declare interface IteratorObject<T, TReturn = unknown, TNext = unknown>
	extends Iterator<T, TReturn, TNext>, Disposable {
	[Symbol.iterator](): IteratorObject<T, TReturn, TNext>;
	[Symbol.dispose](): void;
}
declare abstract class JavascriptGenerator extends Generator {
	/**
	 * Processes the provided module.
	 */
	sourceDependency(
		module: Module,
		dependency: Dependency,
		initFragments: InitFragment<GenerateContext>[],
		source: ReplaceSource,
		generateContext: GenerateContext
	): void;

	/**
	 * Processes the provided module.
	 */
	sourceBlock(
		module: Module,
		block: DependenciesBlock,
		initFragments: InitFragment<GenerateContext>[],
		source: ReplaceSource,
		generateContext: GenerateContext
	): void;

	/**
	 * Processes the provided module.
	 */
	sourceModule(
		module: Module,
		initFragments: InitFragment<GenerateContext>[],
		source: ReplaceSource,
		generateContext: GenerateContext
	): void;

	/**
	 * Generates fallback output for the provided error condition.
	 */
	generateError(
		error: Error,
		module: NormalModule,
		generateContext: GenerateContext
	): null | Source;
}
declare class JavascriptModulesPlugin {
	constructor(options?: object);
	options: object;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Renders the newly generated source from rendering.
	 */
	renderModule(
		module: Module,
		renderContext: ModuleRenderContext,
		hooks: CompilationHooksJavascriptModulesPlugin
	): null | Source;

	/**
	 * Renders the rendered source.
	 */
	renderChunk(
		renderContext: RenderContextJavascriptModulesPlugin,
		hooks: CompilationHooksJavascriptModulesPlugin
	): Source;

	/**
	 * Renders the newly generated source from rendering.
	 */
	renderMain(
		renderContext: MainRenderContext,
		hooks: CompilationHooksJavascriptModulesPlugin,
		compilation: Compilation
	): Source;

	/**
	 * Updates hash with bootstrap.
	 */
	updateHashWithBootstrap(
		hash: Hash,
		renderContext: RenderBootstrapContext,
		hooks: CompilationHooksJavascriptModulesPlugin
	): void;

	/**
	 * Renders the generated source of the bootstrap code.
	 */
	renderBootstrap(
		renderContext: RenderBootstrapContext,
		hooks: CompilationHooksJavascriptModulesPlugin
	): Bootstrap;

	/**
	 * Renders the generated source of the require function.
	 */
	renderRequire(
		renderContext: RenderBootstrapContext,
		hooks: CompilationHooksJavascriptModulesPlugin
	): string;

	/**
	 * Returns the attached hooks.
	 */
	static getCompilationHooks(
		compilation: Compilation
	): CompilationHooksJavascriptModulesPlugin;

	/**
	 * Gets chunk filename template.
	 */
	static getChunkFilenameTemplate(
		chunk: Chunk,
		outputOptions: OutputNormalizedWithDefaults
	): TemplatePath;
	static chunkHasJs: (chunk: Chunk, chunkGraph: ChunkGraph) => boolean;
}
declare class JavascriptParser extends ParserClass {
	/**
	 * Creates an instance of JavascriptParser.
	 */
	constructor(
		sourceType?: "module" | "auto" | "script",
		options?: { parse?: (code: string, options: ParseOptions) => ParseResult }
	);
	hooks: Readonly<{
		evaluateTypeof: HookMap<
			SyncBailHook<
				[UnaryExpression],
				undefined | null | BasicEvaluatedExpression
			>
		>;
		evaluate: HookMap<
			SyncBailHook<
				[
					| ImportExpressionImport
					| UnaryExpression
					| ArrayExpression
					| ArrowFunctionExpression
					| AssignmentExpression
					| AwaitExpression
					| BinaryExpression
					| SimpleCallExpression
					| NewExpression
					| ChainExpression
					| ClassExpression
					| ConditionalExpression
					| FunctionExpression
					| Identifier
					| SimpleLiteral
					| RegExpLiteral
					| BigIntLiteral
					| LogicalExpression
					| MemberExpression
					| MetaProperty
					| ObjectExpression
					| SequenceExpression
					| TaggedTemplateExpression
					| TemplateLiteral
					| ThisExpression
					| UpdateExpression
					| YieldExpression
					| SpreadElement
					| PrivateIdentifier
					| Super
				],
				undefined | null | BasicEvaluatedExpression
			>
		>;
		evaluateIdentifier: HookMap<
			SyncBailHook<
				[Identifier | MemberExpression | MetaProperty | ThisExpression],
				undefined | null | BasicEvaluatedExpression
			>
		>;
		evaluateDefinedIdentifier: HookMap<
			SyncBailHook<
				[Identifier | MemberExpression | ThisExpression],
				undefined | null | BasicEvaluatedExpression
			>
		>;
		evaluateNewExpression: HookMap<
			SyncBailHook<[NewExpression], undefined | null | BasicEvaluatedExpression>
		>;
		evaluateCallExpression: HookMap<
			SyncBailHook<
				[CallExpression],
				undefined | null | BasicEvaluatedExpression
			>
		>;
		evaluateCallExpressionMember: HookMap<
			SyncBailHook<
				[CallExpression, BasicEvaluatedExpression],
				undefined | null | BasicEvaluatedExpression
			>
		>;
		isPure: HookMap<
			SyncBailHook<
				[
					(
						| ImportExpressionImport
						| UnaryExpression
						| ArrayExpression
						| ArrowFunctionExpression
						| AssignmentExpression
						| AwaitExpression
						| BinaryExpression
						| SimpleCallExpression
						| NewExpression
						| ChainExpression
						| ClassExpression
						| ConditionalExpression
						| FunctionExpression
						| Identifier
						| SimpleLiteral
						| RegExpLiteral
						| BigIntLiteral
						| LogicalExpression
						| MemberExpression
						| MetaProperty
						| ObjectExpression
						| SequenceExpression
						| TaggedTemplateExpression
						| TemplateLiteral
						| ThisExpression
						| UpdateExpression
						| YieldExpression
						| PrivateIdentifier
						| FunctionDeclaration
						| MaybeNamedFunctionDeclaration
						| VariableDeclaration
						| ClassDeclaration
						| MaybeNamedClassDeclaration
					),
					number
				],
				boolean | void
			>
		>;
		preStatement: SyncBailHook<
			[
				| ImportDeclaration
				| ExportNamedDeclaration
				| ExportAllDeclaration
				| FunctionDeclaration
				| MaybeNamedFunctionDeclaration
				| VariableDeclaration
				| ClassDeclaration
				| MaybeNamedClassDeclaration
				| ExpressionStatement
				| BlockStatement
				| StaticBlock
				| EmptyStatement
				| DebuggerStatement
				| WithStatement
				| ReturnStatement
				| LabeledStatement
				| BreakStatement
				| ContinueStatement
				| IfStatement
				| SwitchStatement
				| ThrowStatement
				| TryStatement
				| WhileStatement
				| DoWhileStatement
				| ForStatement
				| ForInStatement
				| ForOfStatement
				| ExportDefaultDeclaration
			],
			boolean | void
		>;
		blockPreStatement: SyncBailHook<
			[
				| ImportDeclaration
				| ExportNamedDeclaration
				| ExportAllDeclaration
				| FunctionDeclaration
				| MaybeNamedFunctionDeclaration
				| VariableDeclaration
				| ClassDeclaration
				| MaybeNamedClassDeclaration
				| ExpressionStatement
				| BlockStatement
				| StaticBlock
				| EmptyStatement
				| DebuggerStatement
				| WithStatement
				| ReturnStatement
				| LabeledStatement
				| BreakStatement
				| ContinueStatement
				| IfStatement
				| SwitchStatement
				| ThrowStatement
				| TryStatement
				| WhileStatement
				| DoWhileStatement
				| ForStatement
				| ForInStatement
				| ForOfStatement
				| ExportDefaultDeclaration
			],
			boolean | void
		>;
		statement: SyncBailHook<
			[
				| ImportDeclaration
				| ExportNamedDeclaration
				| ExportAllDeclaration
				| FunctionDeclaration
				| MaybeNamedFunctionDeclaration
				| VariableDeclaration
				| ClassDeclaration
				| MaybeNamedClassDeclaration
				| ExpressionStatement
				| BlockStatement
				| StaticBlock
				| EmptyStatement
				| DebuggerStatement
				| WithStatement
				| ReturnStatement
				| LabeledStatement
				| BreakStatement
				| ContinueStatement
				| IfStatement
				| SwitchStatement
				| ThrowStatement
				| TryStatement
				| WhileStatement
				| DoWhileStatement
				| ForStatement
				| ForInStatement
				| ForOfStatement
				| ExportDefaultDeclaration
			],
			boolean | void
		>;
		statementIf: SyncBailHook<[IfStatement], boolean | void>;
		collectGuards: SyncBailHook<
			[Expression],
			void | ((walk: () => void) => void)
		>;
		classExtendsExpression: SyncBailHook<
			[
				Expression,
				ClassExpression | ClassDeclaration | MaybeNamedClassDeclaration
			],
			boolean | void
		>;
		classBodyElement: SyncBailHook<
			[
				StaticBlock | MethodDefinition | PropertyDefinition,
				ClassExpression | ClassDeclaration | MaybeNamedClassDeclaration
			],
			boolean | void
		>;
		classBodyValue: SyncBailHook<
			[
				Expression,
				MethodDefinition | PropertyDefinition,
				ClassExpression | ClassDeclaration | MaybeNamedClassDeclaration
			],
			boolean | void
		>;
		label: HookMap<SyncBailHook<[LabeledStatement], boolean | void>>;
		import: SyncBailHook<[ImportDeclaration, ImportSource], boolean | void>;
		importSpecifier: SyncBailHook<
			[ImportDeclaration, ImportSource, null | string, string],
			boolean | void
		>;
		export: SyncBailHook<
			[ExportNamedDeclaration | ExportDefaultDeclaration],
			boolean | void
		>;
		exportImport: SyncBailHook<
			[ExportNamedDeclaration | ExportAllDeclaration, ImportSource],
			boolean | void
		>;
		exportDeclaration: SyncBailHook<
			[
				(
					| ExportNamedDeclaration
					| ExportAllDeclaration
					| ExportDefaultDeclaration
				),
				Declaration
			],
			boolean | void
		>;
		exportExpression: SyncBailHook<
			[
				ExportDefaultDeclaration,
				(
					| ImportExpressionImport
					| UnaryExpression
					| ArrayExpression
					| ArrowFunctionExpression
					| AssignmentExpression
					| AwaitExpression
					| BinaryExpression
					| SimpleCallExpression
					| NewExpression
					| ChainExpression
					| ClassExpression
					| ConditionalExpression
					| FunctionExpression
					| Identifier
					| SimpleLiteral
					| RegExpLiteral
					| BigIntLiteral
					| LogicalExpression
					| MemberExpression
					| MetaProperty
					| ObjectExpression
					| SequenceExpression
					| TaggedTemplateExpression
					| TemplateLiteral
					| ThisExpression
					| UpdateExpression
					| YieldExpression
					| MaybeNamedFunctionDeclaration
					| MaybeNamedClassDeclaration
				)
			],
			boolean | void
		>;
		exportSpecifier: SyncBailHook<
			[
				(
					| ExportNamedDeclaration
					| ExportAllDeclaration
					| ExportDefaultDeclaration
				),
				string,
				string,
				undefined | number
			],
			boolean | void
		>;
		exportImportSpecifier: SyncBailHook<
			[
				ExportNamedDeclaration | ExportAllDeclaration,
				ImportSource,
				null | string,
				null | string,
				undefined | number
			],
			boolean | void
		>;
		preDeclarator: SyncBailHook<
			[VariableDeclarator, Statement],
			boolean | void
		>;
		declarator: SyncBailHook<[VariableDeclarator, Statement], boolean | void>;
		varDeclaration: HookMap<SyncBailHook<[Identifier], boolean | void>>;
		varDeclarationLet: HookMap<SyncBailHook<[Identifier], boolean | void>>;
		varDeclarationConst: HookMap<SyncBailHook<[Identifier], boolean | void>>;
		varDeclarationUsing: HookMap<SyncBailHook<[Identifier], boolean | void>>;
		varDeclarationVar: HookMap<SyncBailHook<[Identifier], boolean | void>>;
		pattern: HookMap<SyncBailHook<[Identifier], boolean | void>>;
		collectDestructuringAssignmentProperties: SyncBailHook<
			[Expression],
			boolean | void
		>;
		canRename: HookMap<SyncBailHook<[Expression], boolean | void>>;
		rename: HookMap<SyncBailHook<[Expression], boolean | void>>;
		assign: HookMap<SyncBailHook<[AssignmentExpression], boolean | void>>;
		assignMemberChain: HookMap<
			SyncBailHook<[AssignmentExpression, string[]], boolean | void>
		>;
		typeof: HookMap<SyncBailHook<[Expression], boolean | void>>;
		importCall: SyncBailHook<
			[
				ImportExpressionJavascriptParser,
				undefined | SimpleCallExpression | NewExpression
			],
			boolean | void
		>;
		topLevelAwait: SyncBailHook<
			[
				| ImportExpressionImport
				| UnaryExpression
				| ArrayExpression
				| ArrowFunctionExpression
				| AssignmentExpression
				| AwaitExpression
				| BinaryExpression
				| SimpleCallExpression
				| NewExpression
				| ChainExpression
				| ClassExpression
				| ConditionalExpression
				| FunctionExpression
				| Identifier
				| SimpleLiteral
				| RegExpLiteral
				| BigIntLiteral
				| LogicalExpression
				| MemberExpression
				| MetaProperty
				| ObjectExpression
				| SequenceExpression
				| TaggedTemplateExpression
				| TemplateLiteral
				| ThisExpression
				| UpdateExpression
				| YieldExpression
				| ForOfStatement
			],
			boolean | void
		>;
		call: HookMap<SyncBailHook<[CallExpression], boolean | void>>;
		callMemberChain: HookMap<
			SyncBailHook<
				[CallExpression, string[], boolean[], [number, number][]],
				boolean | void
			>
		>;
		memberChainOfCallMemberChain: HookMap<
			SyncBailHook<
				[Expression, string[], CallExpression, string[], [number, number][]],
				boolean | void
			>
		>;
		callMemberChainOfCallMemberChain: HookMap<
			SyncBailHook<
				[
					CallExpression,
					string[],
					CallExpression,
					string[],
					[number, number][]
				],
				boolean | void
			>
		>;
		optionalChaining: SyncBailHook<[ChainExpression], boolean | void>;
		new: HookMap<SyncBailHook<[NewExpression], boolean | void>>;
		binaryExpression: SyncBailHook<[BinaryExpression], boolean | void>;
		expression: HookMap<SyncBailHook<[Expression], boolean | void>>;
		expressionMemberChain: HookMap<
			SyncBailHook<
				[MemberExpression, string[], boolean[], [number, number][]],
				boolean | void
			>
		>;
		unhandledExpressionMemberChain: HookMap<
			SyncBailHook<[MemberExpression, string[]], boolean | void>
		>;
		expressionConditionalOperator: SyncBailHook<
			[ConditionalExpression],
			boolean | void
		>;
		expressionLogicalOperator: SyncBailHook<
			[LogicalExpression],
			boolean | void
		>;
		program: SyncBailHook<[Program, CommentJavascriptParser[]], boolean | void>;
		terminate: SyncBailHook<[ReturnStatement | ThrowStatement], boolean | void>;
		finish: SyncBailHook<[Program, CommentJavascriptParser[]], boolean | void>;
		unusedStatement: SyncBailHook<[Statement], boolean | void>;
	}>;
	sourceType: "module" | "auto" | "script";
	options: { parse?: (code: string, options: ParseOptions) => ParseResult };
	scope: ScopeInfo;
	state: JavascriptParserState;
	comments?: CommentJavascriptParser[];
	semicolons?: Set<number>;
	statementPath?: StatementPathItem[];
	prevStatement?:
		| ImportDeclaration
		| ExportNamedDeclaration
		| ExportAllDeclaration
		| ImportExpressionImport
		| UnaryExpression
		| ArrayExpression
		| ArrowFunctionExpression
		| AssignmentExpression
		| AwaitExpression
		| BinaryExpression
		| SimpleCallExpression
		| NewExpression
		| ChainExpression
		| ClassExpression
		| ConditionalExpression
		| FunctionExpression
		| Identifier
		| SimpleLiteral
		| RegExpLiteral
		| BigIntLiteral
		| LogicalExpression
		| MemberExpression
		| MetaProperty
		| ObjectExpression
		| SequenceExpression
		| TaggedTemplateExpression
		| TemplateLiteral
		| ThisExpression
		| UpdateExpression
		| YieldExpression
		| FunctionDeclaration
		| MaybeNamedFunctionDeclaration
		| VariableDeclaration
		| ClassDeclaration
		| MaybeNamedClassDeclaration
		| ExpressionStatement
		| BlockStatement
		| StaticBlock
		| EmptyStatement
		| DebuggerStatement
		| WithStatement
		| ReturnStatement
		| LabeledStatement
		| BreakStatement
		| ContinueStatement
		| IfStatement
		| SwitchStatement
		| ThrowStatement
		| TryStatement
		| WhileStatement
		| DoWhileStatement
		| ForStatement
		| ForInStatement
		| ForOfStatement
		| ExportDefaultDeclaration;
	destructuringAssignmentProperties?: WeakMap<
		Expression,
		Set<DestructuringAssignmentProperty>
	>;
	currentTagData?:
		| Record<string, any>
		| TopLevelSymbol
		| HarmonySettings
		| ImportSettings
		| CommonJsImportSettings
		| CompatibilitySettings
		| HarmonySpecifierGuards;
	magicCommentContext: ContextImport;

	/**
	 * Destructuring assignment properties for.
	 */
	destructuringAssignmentPropertiesFor(
		node: Expression
	): undefined | Set<DestructuringAssignmentProperty>;

	/**
	 * Gets rename identifier.
	 */
	getRenameIdentifier(
		expr:
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| SpreadElement
	): undefined | string | VariableInfo;

	/**
	 * Processes the provided classy.
	 */
	walkClass(
		classy: ClassExpression | ClassDeclaration | MaybeNamedClassDeclaration
	): void;

	/**
	 * Module pre walking iterates the scope for import entries
	 */
	modulePreWalkStatements(
		statements: (
			| ImportDeclaration
			| ExportNamedDeclaration
			| ExportAllDeclaration
			| FunctionDeclaration
			| VariableDeclaration
			| ClassDeclaration
			| ExpressionStatement
			| BlockStatement
			| StaticBlock
			| EmptyStatement
			| DebuggerStatement
			| WithStatement
			| ReturnStatement
			| LabeledStatement
			| BreakStatement
			| ContinueStatement
			| IfStatement
			| SwitchStatement
			| ThrowStatement
			| TryStatement
			| WhileStatement
			| DoWhileStatement
			| ForStatement
			| ForInStatement
			| ForOfStatement
			| ExportDefaultDeclaration
		)[]
	): void;

	/**
	 * Pre walking iterates the scope for variable declarations
	 */
	preWalkStatements(
		statements: (
			| ImportDeclaration
			| ExportNamedDeclaration
			| ExportAllDeclaration
			| FunctionDeclaration
			| VariableDeclaration
			| ClassDeclaration
			| ExpressionStatement
			| BlockStatement
			| StaticBlock
			| EmptyStatement
			| DebuggerStatement
			| WithStatement
			| ReturnStatement
			| LabeledStatement
			| BreakStatement
			| ContinueStatement
			| IfStatement
			| SwitchStatement
			| ThrowStatement
			| TryStatement
			| WhileStatement
			| DoWhileStatement
			| ForStatement
			| ForInStatement
			| ForOfStatement
			| ExportDefaultDeclaration
		)[]
	): void;

	/**
	 * Block pre walking iterates the scope for block variable declarations
	 */
	blockPreWalkStatements(
		statements: (
			| ImportDeclaration
			| ExportNamedDeclaration
			| ExportAllDeclaration
			| FunctionDeclaration
			| VariableDeclaration
			| ClassDeclaration
			| ExpressionStatement
			| BlockStatement
			| StaticBlock
			| EmptyStatement
			| DebuggerStatement
			| WithStatement
			| ReturnStatement
			| LabeledStatement
			| BreakStatement
			| ContinueStatement
			| IfStatement
			| SwitchStatement
			| ThrowStatement
			| TryStatement
			| WhileStatement
			| DoWhileStatement
			| ForStatement
			| ForInStatement
			| ForOfStatement
			| ExportDefaultDeclaration
		)[]
	): void;

	/**
	 * Walking iterates the statements and expressions and processes them
	 */
	walkStatements(
		statements: (
			| ImportDeclaration
			| ExportNamedDeclaration
			| ExportAllDeclaration
			| FunctionDeclaration
			| VariableDeclaration
			| ClassDeclaration
			| ExpressionStatement
			| BlockStatement
			| StaticBlock
			| EmptyStatement
			| DebuggerStatement
			| WithStatement
			| ReturnStatement
			| LabeledStatement
			| BreakStatement
			| ContinueStatement
			| IfStatement
			| SwitchStatement
			| ThrowStatement
			| TryStatement
			| WhileStatement
			| DoWhileStatement
			| ForStatement
			| ForInStatement
			| ForOfStatement
			| ExportDefaultDeclaration
		)[]
	): void;

	/**
	 * Walking iterates the statements and expressions and processes them
	 */
	preWalkStatement(
		statement:
			| ImportDeclaration
			| ExportNamedDeclaration
			| ExportAllDeclaration
			| FunctionDeclaration
			| MaybeNamedFunctionDeclaration
			| VariableDeclaration
			| ClassDeclaration
			| MaybeNamedClassDeclaration
			| ExpressionStatement
			| BlockStatement
			| StaticBlock
			| EmptyStatement
			| DebuggerStatement
			| WithStatement
			| ReturnStatement
			| LabeledStatement
			| BreakStatement
			| ContinueStatement
			| IfStatement
			| SwitchStatement
			| ThrowStatement
			| TryStatement
			| WhileStatement
			| DoWhileStatement
			| ForStatement
			| ForInStatement
			| ForOfStatement
			| ExportDefaultDeclaration
	): void;

	/**
	 * Block pre walk statement.
	 */
	blockPreWalkStatement(
		statement:
			| ImportDeclaration
			| ExportNamedDeclaration
			| ExportAllDeclaration
			| FunctionDeclaration
			| MaybeNamedFunctionDeclaration
			| VariableDeclaration
			| ClassDeclaration
			| MaybeNamedClassDeclaration
			| ExpressionStatement
			| BlockStatement
			| StaticBlock
			| EmptyStatement
			| DebuggerStatement
			| WithStatement
			| ReturnStatement
			| LabeledStatement
			| BreakStatement
			| ContinueStatement
			| IfStatement
			| SwitchStatement
			| ThrowStatement
			| TryStatement
			| WhileStatement
			| DoWhileStatement
			| ForStatement
			| ForInStatement
			| ForOfStatement
			| ExportDefaultDeclaration
	): void;

	/**
	 * Processes the provided statement.
	 */
	walkStatement(
		statement:
			| ImportDeclaration
			| ExportNamedDeclaration
			| ExportAllDeclaration
			| FunctionDeclaration
			| MaybeNamedFunctionDeclaration
			| VariableDeclaration
			| ClassDeclaration
			| MaybeNamedClassDeclaration
			| ExpressionStatement
			| BlockStatement
			| StaticBlock
			| EmptyStatement
			| DebuggerStatement
			| WithStatement
			| ReturnStatement
			| LabeledStatement
			| BreakStatement
			| ContinueStatement
			| IfStatement
			| SwitchStatement
			| ThrowStatement
			| TryStatement
			| WhileStatement
			| DoWhileStatement
			| ForStatement
			| ForInStatement
			| ForOfStatement
			| ExportDefaultDeclaration
	): void;

	/**
	 * Walks a statements that is nested within a parent statement
	 * and can potentially be a non-block statement.
	 * This enforces the nested statement to never be in ASI position.
	 */
	walkNestedStatement(statement: Statement): void;

	/**
	 * Pre walk block statement.
	 */
	preWalkBlockStatement(statement: BlockStatement): void;

	/**
	 * Walk block statement.
	 */
	walkBlockStatement(statement: BlockStatement | StaticBlock): void;

	/**
	 * Walk expression statement.
	 */
	walkExpressionStatement(statement: ExpressionStatement): void;

	/**
	 * Pre walk if statement.
	 */
	preWalkIfStatement(statement: IfStatement): void;

	/**
	 * Processes the provided statement.
	 */
	walkIfStatement(statement: IfStatement): void;

	/**
	 * Pre walk labeled statement.
	 */
	preWalkLabeledStatement(statement: LabeledStatement): void;

	/**
	 * Walk labeled statement.
	 */
	walkLabeledStatement(statement: LabeledStatement): void;

	/**
	 * Pre walk with statement.
	 */
	preWalkWithStatement(statement: WithStatement): void;

	/**
	 * Walk with statement.
	 */
	walkWithStatement(statement: WithStatement): void;

	/**
	 * Pre walk switch statement.
	 */
	preWalkSwitchStatement(statement: SwitchStatement): void;

	/**
	 * Walk switch statement.
	 */
	walkSwitchStatement(statement: SwitchStatement): void;

	/**
	 * Walk terminating statement.
	 */
	walkTerminatingStatement(statement: ReturnStatement | ThrowStatement): void;

	/**
	 * Walk return statement.
	 */
	walkReturnStatement(statement: ReturnStatement): void;

	/**
	 * Walk throw statement.
	 */
	walkThrowStatement(statement: ThrowStatement): void;

	/**
	 * Pre walk try statement.
	 */
	preWalkTryStatement(statement: TryStatement): void;

	/**
	 * Walk try statement.
	 */
	walkTryStatement(statement: TryStatement): void;

	/**
	 * Pre walk while statement.
	 */
	preWalkWhileStatement(statement: WhileStatement): void;

	/**
	 * Walk while statement.
	 */
	walkWhileStatement(statement: WhileStatement): void;

	/**
	 * Pre walk do while statement.
	 */
	preWalkDoWhileStatement(statement: DoWhileStatement): void;

	/**
	 * Walk do while statement.
	 */
	walkDoWhileStatement(statement: DoWhileStatement): void;

	/**
	 * Pre walk for statement.
	 */
	preWalkForStatement(statement: ForStatement): void;

	/**
	 * Walk for statement.
	 */
	walkForStatement(statement: ForStatement): void;

	/**
	 * Pre walk for in statement.
	 */
	preWalkForInStatement(statement: ForInStatement): void;

	/**
	 * Walk for in statement.
	 */
	walkForInStatement(statement: ForInStatement): void;

	/**
	 * Pre walk for of statement.
	 */
	preWalkForOfStatement(statement: ForOfStatement): void;

	/**
	 * Walk for of statement.
	 */
	walkForOfStatement(statement: ForOfStatement): void;

	/**
	 * Pre walk function declaration.
	 */
	preWalkFunctionDeclaration(
		statement: FunctionDeclaration | MaybeNamedFunctionDeclaration
	): void;

	/**
	 * Walk function declaration.
	 */
	walkFunctionDeclaration(
		statement: FunctionDeclaration | MaybeNamedFunctionDeclaration
	): void;

	/**
	 * Block pre walk expression statement.
	 */
	blockPreWalkExpressionStatement(statement: ExpressionStatement): void;

	/**
	 * Pre walk assignment expression.
	 */
	preWalkAssignmentExpression(expression: AssignmentExpression): void;

	/**
	 * Enter destructuring assignment.
	 */
	enterDestructuringAssignment(
		pattern: Pattern,
		expression: Expression
	):
		| undefined
		| ImportExpressionImport
		| UnaryExpression
		| ArrayExpression
		| ArrowFunctionExpression
		| AssignmentExpression
		| AwaitExpression
		| BinaryExpression
		| SimpleCallExpression
		| NewExpression
		| ChainExpression
		| ClassExpression
		| ConditionalExpression
		| FunctionExpression
		| Identifier
		| SimpleLiteral
		| RegExpLiteral
		| BigIntLiteral
		| LogicalExpression
		| MemberExpression
		| MetaProperty
		| ObjectExpression
		| SequenceExpression
		| TaggedTemplateExpression
		| TemplateLiteral
		| ThisExpression
		| UpdateExpression
		| YieldExpression;

	/**
	 * Module pre walk import declaration.
	 */
	modulePreWalkImportDeclaration(statement: ImportDeclaration): void;

	/**
	 * Processes the provided declaration.
	 */
	enterDeclaration(
		declaration: Declaration,
		onIdent: (ident: string, identifier: Identifier) => void
	): void;

	/**
	 * Module pre walk export named declaration.
	 */
	modulePreWalkExportNamedDeclaration(statement: ExportNamedDeclaration): void;

	/**
	 * Block pre walk export named declaration.
	 */
	blockPreWalkExportNamedDeclaration(statement: ExportNamedDeclaration): void;

	/**
	 * Walk export named declaration.
	 */
	walkExportNamedDeclaration(statement: ExportNamedDeclaration): void;

	/**
	 * Block pre walk export default declaration.
	 */
	blockPreWalkExportDefaultDeclaration(
		statement: ExportDefaultDeclaration
	): void;

	/**
	 * Walk export default declaration.
	 */
	walkExportDefaultDeclaration(statement: ExportDefaultDeclaration): void;

	/**
	 * Module pre walk export all declaration.
	 */
	modulePreWalkExportAllDeclaration(statement: ExportAllDeclaration): void;

	/**
	 * Pre walk variable declaration.
	 */
	preWalkVariableDeclaration(statement: VariableDeclaration): void;

	/**
	 * Block pre walk variable declaration.
	 */
	blockPreWalkVariableDeclaration(statement: VariableDeclaration): void;

	/**
	 * Pre walk variable declarator.
	 */
	preWalkVariableDeclarator(declarator: VariableDeclarator): void;

	/**
	 * Walk variable declaration.
	 */
	walkVariableDeclaration(statement: VariableDeclaration): void;

	/**
	 * Block pre walk class declaration.
	 */
	blockPreWalkClassDeclaration(
		statement: ClassDeclaration | MaybeNamedClassDeclaration
	): void;

	/**
	 * Walk class declaration.
	 */
	walkClassDeclaration(
		statement: ClassDeclaration | MaybeNamedClassDeclaration
	): void;

	/**
	 * Pre walk switch cases.
	 */
	preWalkSwitchCases(switchCases: SwitchCase[]): void;

	/**
	 * Processes the provided switch case.
	 */
	walkSwitchCases(switchCases: SwitchCase[]): void;

	/**
	 * Pre walk catch clause.
	 */
	preWalkCatchClause(catchClause: CatchClause): void;

	/**
	 * Processes the provided catch clause.
	 */
	walkCatchClause(catchClause: CatchClause): void;

	/**
	 * Processes the provided pattern.
	 */
	walkPattern(pattern: Pattern): void;

	/**
	 * Walk assignment pattern.
	 */
	walkAssignmentPattern(pattern: AssignmentPattern): void;

	/**
	 * Walk object pattern.
	 */
	walkObjectPattern(pattern: ObjectPattern): void;

	/**
	 * Walk array pattern.
	 */
	walkArrayPattern(pattern: ArrayPattern): void;

	/**
	 * Processes the provided pattern.
	 */
	walkRestElement(pattern: RestElement): void;

	/**
	 * Processes the provided expression.
	 */
	walkExpressions(
		expressions: (
			| null
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| SpreadElement
		)[]
	): void;

	/**
	 * Processes the provided expression.
	 */
	walkExpression(
		expression:
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| SpreadElement
			| PrivateIdentifier
			| Super
	): void;

	/**
	 * Walk await expression.
	 */
	walkAwaitExpression(expression: AwaitExpression): void;

	/**
	 * Walk array expression.
	 */
	walkArrayExpression(expression: ArrayExpression): void;

	/**
	 * Walk spread element.
	 */
	walkSpreadElement(expression: SpreadElement): void;

	/**
	 * Walk object expression.
	 */
	walkObjectExpression(expression: ObjectExpression): void;

	/**
	 * Processes the provided prop.
	 */
	walkProperty(prop: SpreadElement | Property): void;

	/**
	 * Walk function expression.
	 */
	walkFunctionExpression(expression: FunctionExpression): void;

	/**
	 * Walk arrow function expression.
	 */
	walkArrowFunctionExpression(expression: ArrowFunctionExpression): void;

	/**
	 * Walk sequence expression.
	 */
	walkSequenceExpression(expression: SequenceExpression): void;

	/**
	 * Walk update expression.
	 */
	walkUpdateExpression(expression: UpdateExpression): void;

	/**
	 * Walk unary expression.
	 */
	walkUnaryExpression(expression: UnaryExpression): void;

	/**
	 * Walk left right expression.
	 */
	walkLeftRightExpression(
		expression: BinaryExpression | LogicalExpression
	): void;

	/**
	 * Walk binary expression.
	 */
	walkBinaryExpression(expression: BinaryExpression): void;

	/**
	 * Walk logical expression.
	 */
	walkLogicalExpression(expression: LogicalExpression): void;

	/**
	 * Walk assignment expression.
	 */
	walkAssignmentExpression(expression: AssignmentExpression): void;

	/**
	 * Walk conditional expression.
	 */
	walkConditionalExpression(expression: ConditionalExpression): void;

	/**
	 * Walk new expression.
	 */
	walkNewExpression(expression: NewExpression): void;

	/**
	 * Walk yield expression.
	 */
	walkYieldExpression(expression: YieldExpression): void;

	/**
	 * Walk template literal.
	 */
	walkTemplateLiteral(expression: TemplateLiteral): void;

	/**
	 * Walk tagged template expression.
	 */
	walkTaggedTemplateExpression(expression: TaggedTemplateExpression): void;

	/**
	 * Walk class expression.
	 */
	walkClassExpression(expression: ClassExpression): void;

	/**
	 * Walk chain expression.
	 */
	walkChainExpression(expression: ChainExpression): void;

	/**
	 * Walk import expression.
	 */
	walkImportExpression(expression: ImportExpressionJavascriptParser): void;

	/**
	 * Walk call expression.
	 */
	walkCallExpression(expression: CallExpression): void;

	/**
	 * Walk member expression.
	 */
	walkMemberExpression(expression: MemberExpression): void;

	/**
	 * Walk member expression with expression name.
	 */
	walkMemberExpressionWithExpressionName<R>(
		expression: MemberExpression,
		name: string,
		rootInfo: string | VariableInfo,
		members: string[],
		onUnhandled: () => undefined | R
	): void;

	/**
	 * Walk this expression.
	 */
	walkThisExpression(expression: ThisExpression): void;

	/**
	 * Processes the provided expression.
	 */
	walkIdentifier(expression: Identifier): void;

	/**
	 * Walk meta property.
	 */
	walkMetaProperty(metaProperty: MetaProperty): void;

	/**
	 * Call hooks for expression.
	 */
	callHooksForExpression<T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		expr:
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| Super,
		...args: AsArray<T>
	): undefined | R;

	/**
	 * Call hooks for expression with fallback.
	 */
	callHooksForExpressionWithFallback<T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		expr:
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| Super,
		fallback:
			| undefined
			| ((
					name: string,
					rootInfo: string | VariableInfo | ScopeInfo,
					getMembers: () => string[]
			  ) => R),
		defined: undefined | ((result?: string) => undefined | R),
		...args: AsArray<T>
	): undefined | R;

	/**
	 * Call hooks for name.
	 */
	callHooksForName<T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		name: string,
		...args: AsArray<T>
	): undefined | R;

	/**
	 * Call hooks for info.
	 */
	callHooksForInfo<T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		info: ExportedVariableInfo,
		...args: AsArray<T>
	): undefined | R;

	/**
	 * Call hooks for info with fallback.
	 */
	callHooksForInfoWithFallback<T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		info: ExportedVariableInfo,
		fallback: undefined | ((name: string) => undefined | R),
		defined: undefined | ((result?: string) => undefined | R),
		...args: AsArray<T>
	): undefined | R;

	/**
	 * Call hooks for name with fallback.
	 */
	callHooksForNameWithFallback<T, R>(
		hookMap: HookMap<SyncBailHook<T, R>>,
		name: string,
		fallback: undefined | ((value: string) => undefined | R),
		defined: undefined | (() => R),
		...args: AsArray<T>
	): undefined | R;

	/**
	 * Processes the provided param.
	 * @deprecated
	 */
	inScope(
		params: (
			| string
			| Identifier
			| MemberExpression
			| ObjectPattern
			| ArrayPattern
			| RestElement
			| AssignmentPattern
			| Property
		)[],
		fn: () => void
	): void;

	/**
	 * Processes the provided has thi.
	 */
	inClassScope(hasThis: boolean, params: Identifier[], fn: () => void): void;

	/**
	 * Processes the provided has thi.
	 */
	inFunctionScope(
		hasThis: boolean,
		params: (
			| string
			| Identifier
			| MemberExpression
			| ObjectPattern
			| ArrayPattern
			| RestElement
			| AssignmentPattern
		)[],
		fn: () => void
	): void;

	/**
	 * Processes the provided fn.
	 */
	inBlockScope(fn: () => void, inExecutedPath?: boolean): void;

	/**
	 * Processes the provided statement.
	 */
	detectMode(
		statements: (
			| ImportDeclaration
			| ExportNamedDeclaration
			| ExportAllDeclaration
			| FunctionDeclaration
			| VariableDeclaration
			| ClassDeclaration
			| ExpressionStatement
			| BlockStatement
			| StaticBlock
			| EmptyStatement
			| DebuggerStatement
			| WithStatement
			| ReturnStatement
			| LabeledStatement
			| BreakStatement
			| ContinueStatement
			| IfStatement
			| SwitchStatement
			| ThrowStatement
			| TryStatement
			| WhileStatement
			| DoWhileStatement
			| ForStatement
			| ForInStatement
			| ForOfStatement
			| ExportDefaultDeclaration
			| Directive
		)[]
	): void;

	/**
	 * Processes the provided pattern.
	 */
	enterPatterns(
		patterns: (
			| string
			| Identifier
			| MemberExpression
			| ObjectPattern
			| ArrayPattern
			| RestElement
			| AssignmentPattern
			| Property
		)[],
		onIdent: (ident: string) => void
	): void;

	/**
	 * Processes the provided pattern.
	 */
	enterPattern(
		pattern:
			| Identifier
			| MemberExpression
			| ObjectPattern
			| ArrayPattern
			| RestElement
			| AssignmentPattern
			| Property,
		onIdent: (ident: string, identifier: Identifier) => void
	): void;

	/**
	 * Processes the provided pattern.
	 */
	enterIdentifier(
		pattern: Identifier,
		onIdent: (ident: string, identifier: Identifier) => void
	): void;

	/**
	 * Enter object pattern.
	 */
	enterObjectPattern(
		pattern: ObjectPattern,
		onIdent: (ident: string, identifier: Identifier) => void
	): void;

	/**
	 * Enter array pattern.
	 */
	enterArrayPattern(
		pattern: ArrayPattern,
		onIdent: (ident: string, identifier: Identifier) => void
	): void;

	/**
	 * Enter rest element.
	 */
	enterRestElement(
		pattern: RestElement,
		onIdent: (ident: string, identifier: Identifier) => void
	): void;

	/**
	 * Enter assignment pattern.
	 */
	enterAssignmentPattern(
		pattern: AssignmentPattern,
		onIdent: (ident: string, identifier: Identifier) => void
	): void;

	/**
	 * Evaluate expression.
	 */
	evaluateExpression(
		expression:
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| SpreadElement
			| PrivateIdentifier
			| Super
	): BasicEvaluatedExpression;

	/**
	 * Returns parsed string.
	 */
	parseString(expression: Expression): string;

	/**
	 * Parses calculated string.
	 */
	parseCalculatedString(expression: Expression): CalculatedStringResult;

	/**
	 * Returns evaluation result.
	 */
	evaluate(source: string): BasicEvaluatedExpression;

	/**
	 * Checks whether this javascript parser is pure.
	 */
	isPure(
		expr:
			| undefined
			| null
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| PrivateIdentifier
			| FunctionDeclaration
			| MaybeNamedFunctionDeclaration
			| VariableDeclaration
			| ClassDeclaration
			| MaybeNamedClassDeclaration,
		commentsStartPos: number
	): boolean;

	/**
	 * Returns comments in the range.
	 */
	getComments(range: [number, number]): CommentJavascriptParser[];

	/**
	 * Checks whether this javascript parser is asi position.
	 */
	isAsiPosition(pos: number): boolean;

	/**
	 * Updates asi position using the provided po.
	 */
	setAsiPosition(pos: number): void;

	/**
	 * Unset asi position.
	 */
	unsetAsiPosition(pos: number): void;

	/**
	 * Checks whether this javascript parser is statement level expression.
	 */
	isStatementLevelExpression(expr: Expression): boolean;

	/**
	 * Returns tag data.
	 */
	getTagData(
		name: string,
		tag: symbol
	):
		| undefined
		| Record<string, any>
		| TopLevelSymbol
		| HarmonySettings
		| ImportSettings
		| CommonJsImportSettings
		| CompatibilitySettings
		| HarmonySpecifierGuards;

	/**
	 * Processes the provided name.
	 */
	tagVariable(
		name: string,
		tag: symbol,
		data?:
			| Record<string, any>
			| TopLevelSymbol
			| HarmonySettings
			| ImportSettings
			| CommonJsImportSettings
			| CompatibilitySettings
			| HarmonySpecifierGuards,
		flags?: 0 | 1 | 2 | 4
	): void;

	/**
	 * Processes the provided name.
	 */
	defineVariable(name: string): void;

	/**
	 * Processes the provided name.
	 */
	undefineVariable(name: string): void;

	/**
	 * Checks whether this javascript parser is variable defined.
	 */
	isVariableDefined(name: string): boolean;

	/**
	 * Gets variable info.
	 */
	getVariableInfo(name: string): ExportedVariableInfo;

	/**
	 * Updates variable using the provided name.
	 */
	setVariable(name: string, variableInfo: ExportedVariableInfo): void;

	/**
	 * Evaluated variable.
	 */
	evaluatedVariable(tagInfo: TagInfo): VariableInfo;

	/**
	 * Parses comment options.
	 */
	parseCommentOptions(range: [number, number]): {
		options: null | Record<string, any>;
		errors: null | (Error & { comment: CommentJavascriptParser })[];
	};

	/**
	 * Extract member expression chain.
	 */
	extractMemberExpressionChain(
		expression:
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| Super
	): {
		members: string[];
		object:
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| Super;
		membersOptionals: boolean[];
		memberRanges: [number, number][];
	};

	/**
	 * Gets free info from variable.
	 */
	getFreeInfoFromVariable(
		varName: string
	): undefined | { name: string; info: string | VariableInfo };

	/**
	 * Gets name info from variable.
	 */
	getNameInfoFromVariable(
		varName: string
	): undefined | { name: string; info: string | VariableInfo };

	/**
	 * Gets member expression info.
	 */
	getMemberExpressionInfo(
		expression:
			| ImportExpressionImport
			| UnaryExpression
			| ArrayExpression
			| ArrowFunctionExpression
			| AssignmentExpression
			| AwaitExpression
			| BinaryExpression
			| SimpleCallExpression
			| NewExpression
			| ChainExpression
			| ClassExpression
			| ConditionalExpression
			| FunctionExpression
			| Identifier
			| SimpleLiteral
			| RegExpLiteral
			| BigIntLiteral
			| LogicalExpression
			| MemberExpression
			| MetaProperty
			| ObjectExpression
			| SequenceExpression
			| TaggedTemplateExpression
			| TemplateLiteral
			| ThisExpression
			| UpdateExpression
			| YieldExpression
			| Super,
		allowedTypes: number
	): undefined | CallExpressionInfo | ExpressionExpressionInfo;

	/**
	 * Gets name for expression.
	 */
	getNameForExpression(
		expression: Expression
	):
		| undefined
		| {
				name: string;
				rootInfo: ExportedVariableInfo;
				getMembers: () => string[];
		  };

	/**
	 * Returns parser.
	 */
	static extend(
		...plugins: ((BaseParser: typeof ParserImport) => typeof ParserImport)[]
	): typeof JavascriptParser;
	static ALLOWED_MEMBER_TYPES_ALL: 3;
	static ALLOWED_MEMBER_TYPES_CALL_EXPRESSION: 1;
	static ALLOWED_MEMBER_TYPES_EXPRESSION: 2;
	static VariableInfo: typeof VariableInfo;
	static VariableInfoFlags: Readonly<{
		Evaluated: 0;
		Free: 1;
		Normal: 2;
		Tagged: 4;
	}>;
	static getImportAttributes: (
		node:
			| ImportDeclaration
			| ExportNamedDeclaration
			| ExportAllDeclaration
			| ImportExpressionJavascriptParser
	) => undefined | ImportAttributes;
}

/**
 * Parser options for javascript modules.
 */
declare interface JavascriptParserOptions {
	/**
	 * Set the value of `require.amd` and `define.amd`. Or disable AMD support.
	 */
	amd?: false | { [index: string]: any };

	/**
	 * Enable/disable special handling for browserify bundles.
	 */
	browserify?: boolean;

	/**
	 * Enable/disable parsing of CommonJs syntax.
	 */
	commonjs?: boolean;

	/**
	 * Enable/disable parsing of magic comments in CommonJs syntax.
	 */
	commonjsMagicComments?: boolean;

	/**
	 * Enable/disable parsing "import { createRequire } from "module"" and evaluating createRequire().
	 */
	createRequire?: string | boolean;

	/**
	 * Enable experimental tc39 proposal https://github.com/tc39/proposal-defer-import-eval. This allows to defer execution of a module until it's first use.
	 */
	deferImport?: boolean;

	/**
	 * Specifies global fetchPriority for dynamic import.
	 */
	dynamicImportFetchPriority?: false | "auto" | "low" | "high";

	/**
	 * Specifies global mode for dynamic import.
	 */
	dynamicImportMode?: "weak" | "eager" | "lazy" | "lazy-once";

	/**
	 * Specifies global prefetch for dynamic import.
	 */
	dynamicImportPrefetch?: number | boolean;

	/**
	 * Specifies global preload for dynamic import.
	 */
	dynamicImportPreload?: number | boolean;

	/**
	 * Enable/disable parsing of dynamic URL.
	 */
	dynamicUrl?: boolean;

	/**
	 * Specifies the behavior of invalid export names in "import ... from ..." and "export ... from ...".
	 */
	exportsPresence?: false | "auto" | "error" | "warn";

	/**
	 * Enable warnings for full dynamic dependencies.
	 */
	exprContextCritical?: boolean;

	/**
	 * Enable recursive directory lookup for full dynamic dependencies.
	 */
	exprContextRecursive?: boolean;

	/**
	 * Sets the default regular expression for full dynamic dependencies.
	 */
	exprContextRegExp?: boolean | RegExp;

	/**
	 * Set the default request for full dynamic dependencies.
	 */
	exprContextRequest?: string;

	/**
	 * Enable/disable parsing of EcmaScript Modules syntax.
	 */
	harmony?: boolean;

	/**
	 * Enable/disable parsing of import() syntax.
	 */
	import?: boolean;

	/**
	 * Specifies the behavior of invalid export names in "import ... from ...".
	 */
	importExportsPresence?: false | "auto" | "error" | "warn";

	/**
	 * Enable/disable evaluating import.meta. Set to 'preserve-unknown' to preserve unknown properties for runtime evaluation.
	 */
	importMeta?: boolean | "preserve-unknown";

	/**
	 * Enable/disable evaluating import.meta.webpackContext.
	 */
	importMetaContext?: boolean;

	/**
	 * Include polyfills or mocks for various node stuff.
	 */
	node?: false | NodeOptions;

	/**
	 * Override the module to strict or non-strict. This may affect the behavior of the module (some behaviors differ between strict and non-strict), so please configure this option carefully.
	 */
	overrideStrict?: "strict" | "non-strict";

	/**
	 * Function to parser source code.
	 */
	parse?: (code: string, options: ParseOptions) => ParseResult;

	/**
	 * Specifies the behavior of invalid export names in "export ... from ...". This might be useful to disable during the migration from "export ... from ..." to "export type ... from ..." when reexporting types in TypeScript.
	 */
	reexportExportsPresence?: false | "auto" | "error" | "warn";

	/**
	 * Enable/disable parsing of require.context syntax.
	 */
	requireContext?: boolean;

	/**
	 * Enable/disable parsing of require.ensure syntax.
	 */
	requireEnsure?: boolean;

	/**
	 * Enable/disable parsing of require.include syntax.
	 */
	requireInclude?: boolean;

	/**
	 * Enable/disable parsing of require.js special syntax like require.config, requirejs.config, require.version and requirejs.onError.
	 */
	requireJs?: boolean;

	/**
	 * Enable experimental tc39 proposal https://github.com/tc39/proposal-source-phase-imports. This allows importing modules at source phase.
	 */
	sourceImport?: boolean;

	/**
	 * Deprecated in favor of "exportsPresence". Emit errors instead of warnings when imported names don't exist in imported module.
	 * @deprecated
	 */
	strictExportPresence?: boolean;

	/**
	 * Handle the this context correctly according to the spec for namespace objects.
	 */
	strictThisContextOnImports?: boolean;

	/**
	 * Enable/disable parsing of System.js special syntax like System.import, System.get, System.set and System.register.
	 */
	system?: boolean;

	/**
	 * Enable warnings when using the require function in a not statically analyse-able way.
	 */
	unknownContextCritical?: boolean;

	/**
	 * Enable recursive directory lookup when using the require function in a not statically analyse-able way.
	 */
	unknownContextRecursive?: boolean;

	/**
	 * Sets the regular expression when using the require function in a not statically analyse-able way.
	 */
	unknownContextRegExp?: boolean | RegExp;

	/**
	 * Sets the request when using the require function in a not statically analyse-able way.
	 */
	unknownContextRequest?: string;

	/**
	 * Enable/disable parsing of new URL() syntax.
	 */
	url?: boolean | "relative";

	/**
	 * Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register().
	 */
	worker?: boolean | string[];

	/**
	 * Enable warnings for partial dynamic dependencies.
	 */
	wrappedContextCritical?: boolean;

	/**
	 * Enable recursive directory lookup for partial dynamic dependencies.
	 */
	wrappedContextRecursive?: boolean;

	/**
	 * Set the inner regular expression for partial dynamic dependencies.
	 */
	wrappedContextRegExp?: RegExp;
}
type JavascriptParserState = ParserStateBase &
	Record<string, any> &
	KnownJavascriptParserState;
declare abstract class JsonData {
	/**
	 * Returns raw JSON data.
	 */
	get():
		| undefined
		| null
		| string
		| number
		| boolean
		| JsonObjectFs
		| JsonValueFs[];

	/**
	 * Updates the hash with the data contributed by this instance.
	 */
	updateHash(hash: Hash): void;
}
declare abstract class JsonGenerator extends Generator {
	options: JsonGeneratorOptions;

	/**
	 * Generates fallback output for the provided error condition.
	 */
	generateError(
		error: Error,
		module: NormalModule,
		generateContext: GenerateContext
	): null | Source;
}

/**
 * Generator options for json modules.
 */
declare interface JsonGeneratorOptions {
	/**
	 * Use `JSON.parse` when the JSON string is longer than 20 characters.
	 */
	JSONParse?: boolean;
}
declare interface JsonModulesPluginParserOptions {
	/**
	 * The depth of json dependency flagged as `exportInfo`.
	 */
	exportsDepth?: number;

	/**
	 * Allow named exports for json of object type
	 */
	namedExports?: boolean;

	/**
	 * Function that executes for a module source string and should return json-compatible data.
	 */
	parse?: (input: string) => any;
}
declare interface JsonObjectFs {
	[index: string]:
		| undefined
		| null
		| string
		| number
		| boolean
		| JsonObjectFs
		| JsonValueFs[];
}
declare interface JsonObjectTypes {
	[index: string]:
		| undefined
		| null
		| string
		| number
		| boolean
		| JsonObjectTypes
		| JsonValueTypes[];
}
declare abstract class JsonParser extends ParserClass {
	options: JsonModulesPluginParserOptions;
}

/**
 * Parser options for JSON modules.
 */
declare interface JsonParserOptions {
	/**
	 * The depth of json dependency flagged as `exportInfo`.
	 */
	exportsDepth?: number;

	/**
	 * Allow named exports for json of object type.
	 */
	namedExports?: boolean;

	/**
	 * Function to parser content and return JSON.
	 */
	parse?: (
		input: string
	) => null | string | number | boolean | Buffer | JsonObjectFs | JsonValueFs[];
}
type JsonValueFs =
	| null
	| string
	| number
	| boolean
	| JsonObjectFs
	| JsonValueFs[];
type JsonValueTypes =
	| null
	| string
	| number
	| boolean
	| JsonObjectTypes
	| JsonValueTypes[];
declare class JsonpChunkLoadingRuntimeModule extends RuntimeModule {
	constructor(runtimeRequirements: ReadonlySet<string>);
	static getCompilationHooks(
		compilation: Compilation
	): JsonpCompilationPluginHooks;

	/**
	 * Runtime modules without any dependencies to other runtime modules
	 */
	static STAGE_NORMAL: number;

	/**
	 * Runtime modules with simple dependencies on other runtime modules
	 */
	static STAGE_BASIC: number;

	/**
	 * Runtime modules which attach to handlers of other runtime modules
	 */
	static STAGE_ATTACH: number;

	/**
	 * Runtime modules which trigger actions on bootstrap
	 */
	static STAGE_TRIGGER: number;

	/**
	 * Gets source basic types.
	 * @deprecated In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
	 */
	static getSourceBasicTypes(module: Module): ReadonlySet<string>;
}
declare interface JsonpCompilationPluginHooks {
	linkPreload: SyncWaterfallHook<[string, Chunk], string>;
	linkPrefetch: SyncWaterfallHook<[string, Chunk], string>;
}
declare class JsonpTemplatePlugin {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Returns hooks.
	 * @deprecated use JsonpChunkLoadingRuntimeModule.getCompilationHooks instead
	 */
	static getCompilationHooks(
		compilation: Compilation
	): JsonpCompilationPluginHooks;
}
declare interface KnownAssetInfo {
	/**
	 * true, if the asset can be long term cached forever (contains a hash)
	 */
	immutable?: boolean;

	/**
	 * whether the asset is minimized
	 */
	minimized?: boolean;

	/**
	 * the value(s) of the full hash used for this asset
	 */
	fullhash?: string | string[];

	/**
	 * the value(s) of the chunk hash used for this asset
	 */
	chunkhash?: string | string[];

	/**
	 * the value(s) of the module hash used for this asset
	 */
	modulehash?: string | string[];

	/**
	 * the value(s) of the content hash used for this asset
	 */
	contenthash?: string | string[];

	/**
	 * when asset was created from a source file (potentially transformed), the original filename relative to compilation context
	 */
	sourceFilename?: string;

	/**
	 * size in bytes, only set after asset has been emitted
	 */
	size?: number;

	/**
	 * true, when asset is only used for development and doesn't count towards user-facing assets
	 */
	development?: boolean;

	/**
	 * true, when asset ships data for updating an existing application (HMR)
	 */
	hotModuleReplacement?: boolean;

	/**
	 * true, when asset is javascript and an ESM
	 */
	javascriptModule?: boolean;

	/**
	 * true, when file is a manifest
	 */
	manifest?: boolean;

	/**
	 * object of pointers to other assets, keyed by type of relation (only points from parent to child)
	 */
	related?: Record<string, null | string | string[]>;
}
declare interface KnownBuildInfo {
	cacheable?: boolean;
	parsed?: boolean;
	strict?: boolean;

	/**
	 * using in AMD
	 */
	moduleArgument?: string;

	/**
	 * using in AMD
	 */
	exportsArgument?: string;

	/**
	 * using in CommonJs
	 */
	moduleConcatenationBailout?: string;

	/**
	 * using in APIPlugin
	 */
	needCreateRequire?: boolean;

	/**
	 * using in HttpUriPlugin
	 */
	resourceIntegrity?: string;

	/**
	 * using in NormalModule
	 */
	fileDependencies?: LazySet<string>;

	/**
	 * using in NormalModule
	 */
	contextDependencies?: LazySet<string>;

	/**
	 * using in NormalModule
	 */
	missingDependencies?: LazySet<string>;

	/**
	 * using in NormalModule
	 */
	buildDependencies?: LazySet<string>;

	/**
	 * using in NormalModule
	 */
	valueDependencies?: Map<string, ValueCacheVersion>;

	/**
	 * using in NormalModule
	 */
	assets?: Record<string, Source>;

	/**
	 * using in NormalModule
	 */
	assetsInfo?: Map<string, undefined | AssetInfo>;

	/**
	 * using in NormalModule
	 */
	hash?: string;

	/**
	 * using in ContextModule
	 */
	snapshot?: null | Snapshot;

	/**
	 * for assets modules
	 */
	fullContentHash?: string;

	/**
	 * for assets modules
	 */
	filename?: string;

	/**
	 * for assets modules
	 */
	dataUrl?: boolean;

	/**
	 * for assets modules
	 */
	assetInfo?: AssetInfo;

	/**
	 * for external modules
	 */
	javascriptModule?: boolean;

	/**
	 * for lazy compilation modules
	 */
	active?: boolean;

	/**
	 * for css modules
	 */
	cssData?: CssData;

	/**
	 * for css modules (charset at-rule)
	 */
	charset?: string;

	/**
	 * for json modules
	 */
	jsonData?: JsonData;

	/**
	 * top level declaration names
	 */
	topLevelDeclarations?: Set<string>;
}
declare interface KnownBuildMeta {
	exportsType?: "namespace" | "dynamic" | "default" | "flagged";
	defaultObject?: false | "redirect" | "redirect-warn";
	strictHarmonyModule?: boolean;
	treatAsCommonJs?: boolean;
	async?: boolean;
	sideEffectFree?: boolean;
	isCSSModule?: boolean;
	jsIncompatibleExports?: Record<string, string>;
	exportsFinalNameByRuntime?: Map<string, Record<string, string>>;
	exportsSourceByRuntime?: Map<string, string>;
}
declare interface KnownContext {
	/**
	 * environments
	 */
	environments?: string[];
}
declare interface KnownCreateStatsOptionsContext {
	forToString?: boolean;
}
declare interface KnownHooks {
	/**
	 * resolve step hook
	 */
	resolveStep: SyncHook<
		[
			AsyncSeriesBailHook<
				[ResolveRequest, ResolveContext],
				null | ResolveRequest
			>,
			ResolveRequest
		]
	>;

	/**
	 * no resolve hook
	 */
	noResolve: SyncHook<[ResolveRequest, Error]>;

	/**
	 * resolve hook
	 */
	resolve: AsyncSeriesBailHook<
		[ResolveRequest, ResolveContext],
		null | ResolveRequest
	>;

	/**
	 * result hook
	 */
	result: AsyncSeriesHook<[ResolveRequest, ResolveContext]>;
}
declare interface KnownJavascriptParserState {
	harmonyNamedExports?: Set<string>;
	harmonyStarExports?: HarmonyStarExportsList;
	lastHarmonyImportOrder?: number;
	localModules?: LocalModule[];
}
declare interface KnownMeta {
	importVarMap?: Map<Module, string>;
	deferredImportVarMap?: Map<Module, string>;
}
declare interface KnownNormalizedStatsOptions {
	context: string;
	requestShortener: RequestShortener;
	chunksSort: string | false;
	modulesSort: string | false;
	chunkModulesSort: string | false;
	nestedModulesSort: string | false;
	assetsSort: string | false;
	ids: boolean;
	cachedAssets: boolean;
	groupAssetsByEmitStatus: boolean;
	groupAssetsByPath: boolean;
	groupAssetsByExtension: boolean;
	assetsSpace: number;
	excludeAssets: ((value: string, asset: StatsAsset) => boolean)[];
	excludeModules: ((
		name: string,
		module: StatsModule,
		type: ExcludeModulesType
	) => boolean)[];
	warningsFilter: ((warning: StatsError, textValue: string) => boolean)[];
	cachedModules: boolean;
	orphanModules: boolean;
	dependentModules: boolean;
	runtimeModules: boolean;
	groupModulesByCacheStatus: boolean;
	groupModulesByLayer: boolean;
	groupModulesByAttributes: boolean;
	groupModulesByPath: boolean;
	groupModulesByExtension: boolean;
	groupModulesByType: boolean;
	entrypoints: boolean | "auto";
	chunkGroups: boolean;
	chunkGroupAuxiliary: boolean;
	chunkGroupChildren: boolean;
	chunkGroupMaxAssets: number;
	modulesSpace: number;
	chunkModulesSpace: number;
	nestedModulesSpace: number;
	logging: false | "none" | "verbose" | "error" | "warn" | "info" | "log";
	loggingDebug: ((value: string) => boolean)[];
	loggingTrace: boolean;
}

/**
 * Checks whether this object is sorted.
 */
declare interface KnownRecords {
	aggressiveSplits?: SplitData[];
	chunks?: RecordsChunks;
	modules?: RecordsModules;
	hash?: string;
	hotIndex?: number;
	fullHashChunkModuleHashes?: FullHashChunkModuleHashes;
	chunkModuleHashes?: ChunkModuleHashes;
	chunkHashes?: ChunkHashes;
	chunkRuntime?: ChunkRuntime;
	chunkModuleIds?: ChunkModuleIds;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsAsset {
	type: string;
	name: string;
	info: AssetInfo;
	size: number;
	emitted: boolean;
	comparedForEmit: boolean;
	cached: boolean;
	related?: StatsAsset[];
	chunks?: ChunkId[];
	chunkNames?: ChunkName[];
	chunkIdHints?: string[];
	auxiliaryChunks?: ChunkId[];
	auxiliaryChunkNames?: ChunkName[];
	auxiliaryChunkIdHints?: string[];
	filteredRelated?: number;
	isOverSizeLimit?: boolean;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsChunk {
	rendered: boolean;
	initial: boolean;
	entry: boolean;
	recorded: boolean;
	reason?: string;
	size: number;
	sizes: Record<string, number>;
	names: string[];
	idHints: string[];
	runtime?: string[];
	files: string[];
	auxiliaryFiles: string[];
	hash: string;
	childrenByOrder: Record<string, ChunkId[]>;
	id?: string | number;
	siblings?: ChunkId[];
	parents?: ChunkId[];
	children?: ChunkId[];
	modules?: StatsModule[];
	filteredModules?: number;
	origins?: StatsChunkOrigin[];
}

/**
 * Returns array of values.
 */
declare interface KnownStatsChunkGroup {
	name?: null | string;
	chunks?: ChunkId[];
	assets?: { name: string; size?: number }[];
	filteredAssets?: number;
	assetsSize?: number;
	auxiliaryAssets?: { name: string; size?: number }[];
	filteredAuxiliaryAssets?: number;
	auxiliaryAssetsSize?: number;
	children?: Record<string, StatsChunkGroup[]>;
	childAssets?: Record<string, string[]>;
	isOverSizeLimit?: boolean;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsChunkOrigin {
	module: string;
	moduleIdentifier: string;
	moduleName: string;
	loc: string;
	request: string;
	moduleId?: string | number;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsCompilation {
	env?: any;
	name?: string;
	hash?: string;
	version?: string;
	time?: number;
	builtAt?: number;
	needAdditionalPass?: boolean;
	publicPath?: string;
	outputPath?: string;
	assetsByChunkName?: Record<string, string[]>;
	assets?: StatsAsset[];
	filteredAssets?: number;
	chunks?: StatsChunk[];
	modules?: StatsModule[];
	filteredModules?: number;
	entrypoints?: Record<string, StatsChunkGroup>;
	namedChunkGroups?: Record<string, StatsChunkGroup>;
	errors?: StatsError[];
	errorsCount?: number;
	warnings?: StatsError[];
	warningsCount?: number;
	children?: StatsCompilation[];
	logging?: Record<string, StatsLogging>;
	filteredWarningDetailsCount?: number;
	filteredErrorDetailsCount?: number;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsError {
	message: string;
	chunkName?: string;
	chunkEntry?: boolean;
	chunkInitial?: boolean;
	file?: string;
	moduleIdentifier?: string;
	moduleName?: string;
	loc?: string;
	chunkId?: string | number;
	moduleId?: string | number;
	moduleTrace?: StatsModuleTraceItem[];
	details?: string;
	stack?: string;
	cause?: KnownStatsError;
	errors?: KnownStatsError[];
	compilerPath?: string;
}
declare interface KnownStatsFactoryContext {
	type: string;
	compilation: Compilation;
	makePathsRelative: (path: string) => string;
	rootModules: Set<Module>;
	compilationFileToChunks: Map<string, Chunk[]>;
	compilationAuxiliaryFileToChunks: Map<string, Chunk[]>;
	runtime: RuntimeSpec;
	cachedGetErrors: (compilation: Compilation) => Error[];
	cachedGetWarnings: (compilation: Compilation) => Error[];
}

/**
 * Returns array of values.
 */
declare interface KnownStatsLogging {
	entries: StatsLoggingEntry[];
	filteredEntries: number;
	debug: boolean;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsLoggingEntry {
	type: string;
	message?: string;
	trace?: string[];
	children?: StatsLoggingEntry[];
	args?: any[];
	time?: number;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsModule {
	type?: string;
	moduleType?: string;
	layer?: null | string;
	identifier?: string;
	name?: string;
	nameForCondition?: null | string;
	index?: number;
	preOrderIndex?: number;
	index2?: number;
	postOrderIndex?: number;
	size?: number;
	sizes?: Record<string, number>;
	cacheable?: boolean;
	built?: boolean;
	codeGenerated?: boolean;
	buildTimeExecuted?: boolean;
	cached?: boolean;
	optional?: boolean;
	orphan?: boolean;
	id?: string | number;
	issuerId?: null | string | number;
	chunks?: ChunkId[];
	assets?: string[];
	dependent?: boolean;
	issuer?: null | string;
	issuerName?: null | string;
	issuerPath?: null | StatsModuleIssuer[];
	failed?: boolean;
	errors?: number;
	warnings?: number;
	profile?: StatsProfile;
	reasons?: StatsModuleReason[];
	usedExports?: null | boolean | string[];
	providedExports?: null | string[];
	optimizationBailout?: string[];
	depth?: null | number;
	modules?: StatsModule[];
	filteredModules?: number;
	source?: string | Buffer;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsModuleIssuer {
	identifier: string;
	name: string;
	id?: string | number;
	profile: StatsProfile;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsModuleReason {
	moduleIdentifier: null | string;
	module: null | string;
	moduleName: null | string;
	resolvedModuleIdentifier: null | string;
	resolvedModule: null | string;
	type: null | string;
	active: boolean;
	explanation: null | string;
	userRequest: null | string;
	loc?: null | string;
	moduleId?: null | string | number;
	resolvedModuleId?: null | string | number;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsModuleTraceDependency {
	loc?: string;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsModuleTraceItem {
	originIdentifier?: string;
	originName?: string;
	moduleIdentifier?: string;
	moduleName?: string;
	dependencies?: StatsModuleTraceDependency[];
	originId?: string | number;
	moduleId?: string | number;
}
declare interface KnownStatsPrinterColorFunctions {
	bold?: (value: string | number) => string;
	yellow?: (value: string | number) => string;
	red?: (value: string | number) => string;
	green?: (value: string | number) => string;
	magenta?: (value: string | number) => string;
	cyan?: (value: string | number) => string;
}
declare interface KnownStatsPrinterContext {
	type?: string;
	compilation?: StatsCompilation;
	chunkGroup?: StatsChunkGroup;
	chunkGroupKind?: string;
	asset?: StatsAsset;
	module?: StatsModule;
	chunk?: StatsChunk;
	moduleReason?: StatsModuleReason;
	moduleIssuer?: StatsModuleIssuer;
	error?: StatsError;
	profile?: StatsProfile;
	logging?: StatsLogging;
	moduleTraceItem?: StatsModuleTraceItem;
	moduleTraceDependency?: StatsModuleTraceDependency;
}
declare interface KnownStatsPrinterFormatters {
	formatFilename?: (file: string, oversize?: boolean) => string;
	formatModuleId?: (id: string | number) => string;
	formatChunkId?: (
		id: string | number,
		direction?: "parent" | "child" | "sibling"
	) => string;
	formatSize?: (size: number) => string;
	formatLayer?: (size: string) => string;
	formatDateTime?: (dateTime: number) => string;
	formatFlag?: (flag: string) => string;
	formatTime?: (time: number, boldQuantity?: boolean) => string;
	formatError?: (message: string) => string;
}

/**
 * Returns array of values.
 */
declare interface KnownStatsProfile {
	total: number;
	resolving: number;
	restoring: number;
	building: number;
	integration: number;
	storing: number;
	additionalResolving: number;
	additionalIntegration: number;
	factory: number;
	dependencies: number;
}
declare interface KnownUnsafeCacheData {
	/**
	 * factory meta
	 */
	factoryMeta?: FactoryMeta;

	/**
	 * resolve options
	 */
	resolveOptions?: ResolveOptions;
	parserOptions?: ParserOptions;
	generatorOptions?: GeneratorOptions;
}
declare interface LStatFs {
	(
		path: PathLikeFs,
		callback: (err: null | NodeJS.ErrnoException, result?: IStatsFs) => void
	): void;
	(
		path: PathLikeFs,
		options: undefined | (StatOptionsFs & { bigint?: false }),
		callback: (err: null | NodeJS.ErrnoException, result?: IStatsFs) => void
	): void;
	(
		path: PathLikeFs,
		options: StatOptionsFs & { bigint: true },
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IBigIntStatsFs
		) => void
	): void;
	(
		path: PathLikeFs,
		options: undefined | StatOptionsFs,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IStatsFs | IBigIntStatsFs
		) => void
	): void;
}
declare interface LStatSync {
	(path: PathLikeFs, options?: undefined): IStatsFs;
	(
		path: PathLikeFs,
		options?: StatSyncOptions & { bigint?: false; throwIfNoEntry: false }
	): undefined | IStatsFs;
	(
		path: PathLikeFs,
		options: StatSyncOptions & { bigint: true; throwIfNoEntry: false }
	): undefined | IBigIntStatsFs;
	(path: PathLikeFs, options?: StatSyncOptions & { bigint?: false }): IStatsFs;
	(
		path: PathLikeFs,
		options: StatSyncOptions & { bigint: true }
	): IBigIntStatsFs;
	(
		path: PathLikeFs,
		options: StatSyncOptions & { bigint: boolean; throwIfNoEntry?: false }
	): IStatsFs | IBigIntStatsFs;
	(
		path: PathLikeFs,
		options?: StatSyncOptions
	): undefined | IStatsFs | IBigIntStatsFs;
}
declare interface LStatTypes {
	(
		path: PathLikeTypes,
		callback: (err: null | NodeJS.ErrnoException, result?: IStatsTypes) => void
	): void;
	(
		path: PathLikeTypes,
		options: undefined | (StatOptionsTypes & { bigint?: false }),
		callback: (err: null | NodeJS.ErrnoException, result?: IStatsTypes) => void
	): void;
	(
		path: PathLikeTypes,
		options: StatOptionsTypes & { bigint: true },
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IBigIntStatsTypes
		) => void
	): void;
	(
		path: PathLikeTypes,
		options: undefined | StatOptionsTypes,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IStatsTypes | IBigIntStatsTypes
		) => void
	): void;
}

/**
 * Options for the default backend.
 */
declare interface LazyCompilationDefaultBackendOptions {
	/**
	 * A custom client.
	 */
	client?: string;

	/**
	 * Specifies where to listen to from the server.
	 */
	listen?:
		| number
		| ListenOptions
		| ((server: ServerLazyCompilationBackend) => void);

	/**
	 * Specifies the protocol the client should use to connect to the server.
	 */
	protocol?: "http" | "https";

	/**
	 * Specifies how to create the server handling the EventSource requests.
	 */
	server?:
		| ServerOptionsImportHttps<typeof IncomingMessage>
		| ServerOptionsImportHttp<typeof IncomingMessage>
		| (() => ServerLazyCompilationBackend);
}

/**
 * Options for compiling entrypoints and import()s only when they are accessed.
 */
declare interface LazyCompilationOptions {
	/**
	 * Specifies the backend that should be used for handling client keep alive.
	 */
	backend?:
		| ((
				compiler: Compiler,
				callback: (err: null | Error, backendApi?: BackendApi) => void
		  ) => void)
		| ((compiler: Compiler) => Promise<BackendApi>)
		| LazyCompilationDefaultBackendOptions;

	/**
	 * Enable/disable lazy compilation for entries.
	 */
	entries?: boolean;

	/**
	 * Enable/disable lazy compilation for import() modules.
	 */
	imports?: boolean;

	/**
	 * Specify which entrypoints or import()ed modules should be lazily compiled. This is matched with the imported module and not the entrypoint name.
	 */
	test?: string | RegExp | ((module: Module) => boolean);
}
type LazyFunction<
	InputValue,
	OutputValue,
	InternalLazyTarget extends SerializerMiddleware<
		any,
		any,
		Record<string, any>
	>,
	InternalLazyOptions extends undefined | LazyOptions
> = (() => InputValue | Promise<InputValue>) &
	Partial<{ options: InternalLazyOptions }>;
declare interface LazyOptions {
	[index: string]: any;
}
declare class LazySet<T> {
	/**
	 * Seeds the set with an optional iterable while preparing internal queues for
	 * deferred merges.
	 */
	constructor(iterable?: Iterable<T>);

	/**
	 * Returns the number of items after applying any deferred merges.
	 */
	get size(): number;

	/**
	 * Adds a single item immediately to the concrete backing set.
	 */
	add(item: T): LazySet<T>;

	/**
	 * Queues another iterable or lazy set for later merging so large bulk adds
	 * can stay cheap until the set is read.
	 */
	addAll(iterable: LazySet<T> | Iterable<T>): LazySet<T>;

	/**
	 * Removes all items and clears every deferred merge queue.
	 */
	clear(): void;

	/**
	 * Deletes an item after first materializing any deferred additions that may
	 * contain it.
	 */
	delete(value: T): boolean;

	/**
	 * Returns the set's entry iterator and permanently switches future
	 * operations to eager merge mode to preserve iterator correctness.
	 */
	entries(): SetIterator<[T, T]>;

	/**
	 * Iterates over every item after forcing pending merges and switching to
	 * eager mode for correctness during iteration.
	 */
	forEach<K>(
		callbackFn: (value: T, value2: T, set: Set<T>) => void,
		thisArg: K
	): void;

	/**
	 * Checks whether an item is present after applying any deferred merges.
	 */
	has(item: T): boolean;

	/**
	 * Returns the key iterator, eagerly materializing pending merges first.
	 */
	keys(): SetIterator<T>;

	/**
	 * Returns the value iterator, eagerly materializing pending merges first.
	 */
	values(): SetIterator<T>;

	/**
	 * Serializes the fully materialized set contents into webpack's object
	 * serialization stream.
	 */
	serialize(__0: ObjectSerializerContext): void;

	/**
	 * Returns the default iterator over values after forcing pending merges.
	 */
	[Symbol.iterator](): SetIterator<T>;

	/**
	 * Restores a `LazySet` from serialized item data.
	 */
	static deserialize<T>(__0: ObjectDeserializerContext): LazySet<T>;
}
declare interface LibIdentOptions {
	/**
	 * absolute context path to which lib ident is relative to
	 */
	context: string;

	/**
	 * object for caching
	 */
	associatedObjectForCache?: object;
}
declare class LibManifestPlugin {
	/**
	 * Creates an instance of LibManifestPlugin.
	 */
	constructor(options: LibManifestPluginOptions);
	options: LibManifestPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface LibManifestPluginOptions {
	/**
	 * Context of requests in the manifest file (defaults to the webpack context).
	 */
	context?: string;

	/**
	 * If true, only entry points will be exposed (default: true).
	 */
	entryOnly?: boolean;

	/**
	 * If true, manifest json file (output) will be formatted.
	 */
	format?: boolean;

	/**
	 * Name of the exposed dll function (external name, use value of 'output.library').
	 */
	name?: string;

	/**
	 * Absolute path to the manifest json file (output).
	 */
	path: string;

	/**
	 * Type of the dll bundle (external type, use value of 'output.libraryTarget').
	 */
	type?: string;
}
declare interface LibraryContext<T> {
	compilation: Compilation;
	chunkGraph: ChunkGraph;
	options: T;
}

/**
 * Set explicit comments for `commonjs`, `commonjs2`, `amd`, and `root`.
 */
declare interface LibraryCustomUmdCommentObject {
	/**
	 * Set comment for `amd` section in UMD.
	 */
	amd?: string;

	/**
	 * Set comment for `commonjs` (exports) section in UMD.
	 */
	commonjs?: string;

	/**
	 * Set comment for `commonjs2` (module.exports) section in UMD.
	 */
	commonjs2?: string;

	/**
	 * Set comment for `root` (global variable) section in UMD.
	 */
	root?: string;
}

/**
 * Description object for all UMD variants of the library name.
 */
declare interface LibraryCustomUmdObject {
	/**
	 * Name of the exposed AMD library in the UMD.
	 */
	amd?: string;

	/**
	 * Name of the exposed commonjs export in the UMD.
	 */
	commonjs?: string;

	/**
	 * Name of the property exposed globally by a UMD library.
	 */
	root?: string | string[];
}
type LibraryExport = string | string[];
type LibraryName = string | string[] | LibraryCustomUmdObject;

/**
 * Options for library.
 */
declare interface LibraryOptions {
	/**
	 * Add a container for define/require functions in the AMD module.
	 */
	amdContainer?: string;

	/**
	 * Add a comment in the UMD wrapper.
	 */
	auxiliaryComment?: string | LibraryCustomUmdCommentObject;

	/**
	 * Specify which export should be exposed as library.
	 */
	export?: string | string[];

	/**
	 * The name of the library (some types allow unnamed libraries too).
	 */
	name?: string | string[] | LibraryCustomUmdObject;

	/**
	 * Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins).
	 */
	type: string;

	/**
	 * If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.
	 */
	umdNamedDefine?: boolean;
}
declare class LibraryTemplatePlugin {
	/**
	 * Creates an instance of LibraryTemplatePlugin.
	 */
	constructor(
		name: LibraryName,
		target: string,
		umdNamedDefine: boolean,
		auxiliaryComment: AuxiliaryComment,
		exportProperty: LibraryExport
	);
	library: {
		type: string;
		name: LibraryName;
		umdNamedDefine: boolean;
		auxiliaryComment: AuxiliaryComment;
		export: LibraryExport;
	};

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare class LimitChunkCountPlugin {
	/**
	 * Creates an instance of LimitChunkCountPlugin.
	 */
	constructor(options?: LimitChunkCountPluginOptions);
	options: LimitChunkCountPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface LimitChunkCountPluginOptions {
	/**
	 * Constant overhead for a chunk.
	 */
	chunkOverhead?: number;

	/**
	 * Multiplicator for initial chunks.
	 */
	entryChunkMultiplicator?: number;

	/**
	 * Limit the maximum number of chunks using a value greater than or equal to 1.
	 */
	maxChunks: number;
}
declare interface LoadScriptCompilationHooks {
	createScript: SyncWaterfallHook<[string, Chunk], string>;
}
declare class LoadScriptRuntimeModule extends HelperRuntimeModule {
	constructor(withCreateScriptUrl?: boolean, withFetchPriority?: boolean);
	static getCompilationHooks(
		compilation: Compilation
	): LoadScriptCompilationHooks;

	/**
	 * Runtime modules without any dependencies to other runtime modules
	 */
	static STAGE_NORMAL: number;

	/**
	 * Runtime modules with simple dependencies on other runtime modules
	 */
	static STAGE_BASIC: number;

	/**
	 * Runtime modules which attach to handlers of other runtime modules
	 */
	static STAGE_ATTACH: number;

	/**
	 * Runtime modules which trigger actions on bootstrap
	 */
	static STAGE_TRIGGER: number;

	/**
	 * Gets source basic types.
	 * @deprecated In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
	 */
	static getSourceBasicTypes(module: Module): ReadonlySet<string>;
}

/**
 * Custom values available in the loader context.
 */
declare interface Loader {
	[index: string]: any;
}
type LoaderContext<OptionsType> = NormalModuleLoaderContext<OptionsType> &
	LoaderRunnerLoaderContext<OptionsType> &
	LoaderPluginLoaderContext &
	HotModuleReplacementPluginLoaderContext;
type LoaderDefinition<
	OptionsType = {},
	ContextAdditions = {}
> = LoaderDefinitionFunction<OptionsType, ContextAdditions> & {
	raw?: false;
	pitch?: PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>;
};
declare interface LoaderDefinitionFunction<
	OptionsType = {},
	ContextAdditions = {}
> {
	(
		this: NormalModuleLoaderContext<OptionsType> &
			LoaderRunnerLoaderContext<OptionsType> &
			LoaderPluginLoaderContext &
			HotModuleReplacementPluginLoaderContext &
			ContextAdditions,
		content: string,
		sourceMap?: string | RawSourceMap,
		additionalData?: AdditionalData
	): string | void | Buffer | Promise<string | Buffer>;
}
declare interface LoaderItem {
	loader: string;
	options?: null | string | Record<string, any>;
	ident?: null | string;
	type?: null | string;
}
declare interface LoaderModule<OptionsType = {}, ContextAdditions = {}> {
	default?:
		| RawLoaderDefinitionFunction<OptionsType, ContextAdditions>
		| LoaderDefinitionFunction<OptionsType, ContextAdditions>;
	raw?: false;
	pitch?: PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>;
}
declare class LoaderOptionsPlugin {
	/**
	 * Creates an instance of LoaderOptionsPlugin.
	 */
	constructor(options?: LoaderOptionsPluginOptions & MatchObject);
	options: LoaderOptionsPluginOptions & MatchObject;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface LoaderOptionsPluginOptions {
	[index: string]: any;

	/**
	 * Whether loaders should be in debug mode or not. debug will be removed as of webpack 3.
	 */
	debug?: boolean;

	/**
	 * Where loaders can be switched to minimize mode.
	 */
	minimize?: boolean;

	/**
	 * A configuration object that can be used to configure older loaders.
	 */
	options?: {
		[index: string]: any;
		/**
		 * The context that can be used to configure older loaders.
		 */
		context?: string;
	};
}

/**
 * These properties are added by the LoaderPlugin
 */
declare interface LoaderPluginLoaderContext {
	/**
	 * Resolves the given request to a module, applies all configured loaders and calls
	 * back with the generated source, the sourceMap and the module instance (usually an
	 * instance of NormalModule). Use this function if you need to know the source code
	 * of another module to generate the result.
	 */
	loadModule(
		request: string,
		callback: (
			err: null | Error,
			source?: string | Buffer,
			sourceMap?: null | object,
			module?: Module
		) => void
	): void;
	importModule(
		request: string,
		options: undefined | ImportModuleOptions,
		callback: (err?: null | Error, exports?: any) => void
	): void;
	importModule(request: string, options?: ImportModuleOptions): Promise<any>;
}

/**
 * The properties are added by https://github.com/webpack/loader-runner
 */
declare interface LoaderRunnerLoaderContext<OptionsType> {
	/**
	 * Add a directory as dependency of the loader result.
	 */
	addContextDependency(context: string): void;

	/**
	 * Adds a file as dependency of the loader result in order to make them watchable.
	 * For example, html-loader uses this technique as it finds src and src-set attributes.
	 * Then, it sets the url's for those attributes as dependencies of the html file that is parsed.
	 */
	addDependency(file: string): void;
	addMissingDependency(context: string): void;

	/**
	 * Make this loader async.
	 */
	async(): (
		err?: null | Error,
		content?: string | Buffer,
		sourceMap?: null | string | RawSourceMap,
		additionalData?: AdditionalData
	) => void;

	/**
	 * Make this loader result cacheable. By default it's cacheable.
	 * A cacheable loader must have a deterministic result, when inputs and dependencies haven't changed.
	 * This means the loader shouldn't have other dependencies than specified with this.addDependency.
	 * Most loaders are deterministic and cacheable.
	 */
	cacheable(flag?: boolean): void;
	callback: (
		err?: null | Error,
		content?: string | Buffer,
		sourceMap?: null | string | RawSourceMap,
		additionalData?: AdditionalData
	) => void;

	/**
	 * Remove all dependencies of the loader result. Even initial dependencies and these of other loaders.
	 */
	clearDependencies(): void;

	/**
	 * The directory of the module. Can be used as context for resolving other stuff.
	 * eg '/workspaces/ts-loader/examples/vanilla/src'
	 */
	context: string;
	readonly currentRequest: string;
	readonly data: any;

	/**
	 * alias of addDependency
	 * Adds a file as dependency of the loader result in order to make them watchable.
	 * For example, html-loader uses this technique as it finds src and src-set attributes.
	 * Then, it sets the url's for those attributes as dependencies of the html file that is parsed.
	 */
	dependency(file: string): void;
	getContextDependencies(): string[];
	getDependencies(): string[];
	getMissingDependencies(): string[];

	/**
	 * The index in the loaders array of the current loader.
	 * In the example: in loader1: 0, in loader2: 1
	 */
	loaderIndex: number;
	readonly previousRequest: string;
	readonly query: string | OptionsType;
	readonly remainingRequest: string;
	readonly request: string;

	/**
	 * An array of all the loaders. It is writeable in the pitch phase.
	 * loaders = [{request: string, path: string, query: string, module: function}]
	 * In the example:
	 * [
	 *   { request: "/abc/loader1.js?xyz",
	 *     path: "/abc/loader1.js",
	 *     query: "?xyz",
	 *     module: [Function]
	 *   },
	 *   { request: "/abc/node_modules/loader2/index.js",
	 *     path: "/abc/node_modules/loader2/index.js",
	 *     query: "",
	 *     module: [Function]
	 *   }
	 * ]
	 */
	loaders: {
		request: string;
		path: string;
		query: string;
		fragment: string;
		options?: string | object;
		ident: string;
		normal?: Function;
		pitch?: Function;
		raw?: boolean;
		data?: object;
		pitchExecuted: boolean;
		normalExecuted: boolean;
		type?: "module" | "commonjs";
	}[];

	/**
	 * The resource path.
	 * In the example: "/abc/resource.js"
	 */
	resourcePath: string;

	/**
	 * The resource query string.
	 * Example: "?query"
	 */
	resourceQuery: string;

	/**
	 * The resource fragment.
	 * Example: "#frag"
	 */
	resourceFragment: string;

	/**
	 * The resource inclusive query and fragment.
	 * Example: "/abc/resource.js?query#frag"
	 */
	resource: string;

	/**
	 * Target of compilation.
	 * Example: "web"
	 */
	target: string;

	/**
	 * Tell what kind of ES-features may be used in the generated runtime-code.
	 * Example: { arrowFunction: true }
	 */
	environment: Environment;
}
declare class LoaderTargetPlugin {
	/**
	 * Creates an instance of LoaderTargetPlugin.
	 */
	constructor(target: string);
	target: string;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare abstract class LocalModule {
	name: string;
	idx: number;
	used: boolean;
	flagUsed(): void;

	/**
	 * Returns variable name.
	 */
	variableName(): string;

	/**
	 * Serializes this instance into the provided serializer context.
	 */
	serialize(context: ObjectSerializerContext): void;

	/**
	 * Restores this instance from the provided deserializer context.
	 */
	deserialize(context: ObjectDeserializerContext): void;
}
declare interface LogEntry {
	type:
		| "error"
		| "warn"
		| "info"
		| "log"
		| "debug"
		| "clear"
		| "profile"
		| "trace"
		| "group"
		| "groupCollapsed"
		| "groupEnd"
		| "profileEnd"
		| "time"
		| "status";
	args?: any[];
	time: number;
	trace?: string[];
}
type LogTypeEnum =
	| "error"
	| "warn"
	| "info"
	| "log"
	| "debug"
	| "clear"
	| "profile"
	| "trace"
	| "group"
	| "groupCollapsed"
	| "groupEnd"
	| "profileEnd"
	| "time"
	| "status";
declare const MEASURE_END_OPERATION: unique symbol;
declare const MEASURE_START_OPERATION: unique symbol;
declare interface MainRenderContext {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * results of code generation
	 */
	codeGenerationResults: CodeGenerationResults;

	/**
	 * hash to be used for render call
	 */
	hash: string;

	/**
	 * rendering in strict context
	 */
	strictMode?: boolean;
}
declare abstract class MainTemplate {
	hooks: Readonly<{
		renderManifest: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					renderManifestEntries: RenderManifestEntry[],
					renderManifestOptions: RenderManifestOptions
				) => RenderManifestEntry[]
			) => void;
		};
		modules: { tap: () => never };
		moduleObj: { tap: () => never };
		require: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					value: string,
					renderBootstrapContext: RenderBootstrapContext
				) => string
			) => void;
		};
		beforeStartup: { tap: () => never };
		startup: { tap: () => never };
		afterStartup: { tap: () => never };
		render: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					source: Source,
					chunk: Chunk,
					hash: undefined | string,
					moduleTemplate: ModuleTemplate,
					dependencyTemplates: DependencyTemplates
				) => Source
			) => void;
		};
		renderWithEntry: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (source: Source, chunk: Chunk, hash?: string) => Source
			) => void;
		};
		assetPath: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (value: string, path: PathData, assetInfo?: AssetInfo) => string
			) => void;
			call: (filename: TemplatePath, options: PathData) => string;
		};
		hash: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (hash: Hash) => void
			) => void;
		};
		hashForChunk: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (hash: Hash, chunk: Chunk) => void
			) => void;
		};
		globalHashPaths: { tap: () => void };
		globalHash: { tap: () => void };
		hotBootstrap: { tap: () => never };
		bootstrap: SyncWaterfallHook<
			[string, Chunk, string, ModuleTemplate, DependencyTemplates],
			string
		>;
		localVars: SyncWaterfallHook<[string, Chunk, string], string>;
		requireExtensions: SyncWaterfallHook<[string, Chunk, string], string>;
		requireEnsure: SyncWaterfallHook<[string, Chunk, string, string], string>;
		get jsonpScript(): SyncWaterfallHook<[string, Chunk], string>;
		get linkPrefetch(): SyncWaterfallHook<[string, Chunk], string>;
		get linkPreload(): SyncWaterfallHook<[string, Chunk], string>;
	}>;
	renderCurrentHashCode: (hash: string, length?: number) => string;
	getPublicPath: (options: PathData) => string;
	getAssetPath: (path: TemplatePath, options: PathData) => string;
	getAssetPathWithInfo: (
		path: TemplatePath,
		options: PathData
	) => InterpolatedPathAndAssetInfo;
	get requireFn(): "__webpack_require__";
	get outputOptions(): Output;
}
declare interface MakeDirectoryOptions {
	recursive?: boolean;
	mode?: string | number;
}

/**
 * Describes a manifest entrypoint.
 */
declare interface ManifestEntrypoint {
	/**
	 * Contains the names of entrypoints.
	 */
	imports: string[];

	/**
	 * Contains the names of parent entrypoints.
	 */
	parents?: string[];
}

/**
 * Describes a manifest asset that links the emitted path to the producing asset.
 */
declare interface ManifestItem {
	/**
	 * The path absolute URL (this indicates that the path is absolute from the server's root directory) to file.
	 */
	file: string;

	/**
	 * The source path relative to the context.
	 */
	src?: string;
}

/**
 * The manifest object.
 */
declare interface ManifestObject {
	[index: string]: any;

	/**
	 * Contains the names of assets.
	 */
	assets: Record<string, ManifestItem>;

	/**
	 * Contains the names of entrypoints.
	 */
	entrypoints: Record<string, ManifestEntrypoint>;
}
declare class ManifestPlugin {
	/**
	 * Creates an instance of ManifestPlugin.
	 */
	constructor(options?: ManifestPluginOptions);
	options: ManifestPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface ManifestPluginOptions {
	/**
	 * Enables/disables generation of the entrypoints manifest section.
	 */
	entrypoints?: boolean;

	/**
	 * Specifies the filename of the output file on disk. By default the plugin will emit `manifest.json` inside the 'output.path' directory.
	 */
	filename?: string;

	/**
	 * Allows filtering the files which make up the manifest.
	 */
	filter?: (item: ManifestItem) => boolean;

	/**
	 * A function that receives the manifest object, modifies it, and returns the modified manifest.
	 */
	generate?: (manifest: ManifestObject) => ManifestObject;

	/**
	 * Specifies a path prefix for all keys in the manifest.
	 */
	prefix?: string;

	/**
	 * A function that receives the manifest object and returns the manifest string.
	 */
	serialize?: (manifest: ManifestObject) => string;
}
declare interface MapOptions {
	/**
	 * need columns?
	 */
	columns?: boolean;

	/**
	 * is module
	 */
	module?: boolean;
}
declare interface MatchObject {
	test?:
		| string
		| RegExp
		| ((str: string) => boolean)
		| (string | RegExp | ((str: string) => boolean))[];
	include?:
		| string
		| RegExp
		| ((str: string) => boolean)
		| (string | RegExp | ((str: string) => boolean))[];
	exclude?:
		| string
		| RegExp
		| ((str: string) => boolean)
		| (string | RegExp | ((str: string) => boolean))[];
}
type Matcher =
	| string
	| RegExp
	| ((str: string) => boolean)
	| (string | RegExp | ((str: string) => boolean))[];

/**
 * Extract fragment index.
 */
declare interface MaybeMergeableInitFragment<GenerateContext> {
	key?: string;
	stage: number;
	position: number;
	getContent: (context: GenerateContext) => undefined | string | Source;
	getEndContent: (context: GenerateContext) => undefined | string | Source;
	merge?: (
		fragments: MaybeMergeableInitFragment<GenerateContext>
	) => MaybeMergeableInitFragment<GenerateContext>;
	mergeAll?: (
		fragments: MaybeMergeableInitFragment<GenerateContext>[]
	) => MaybeMergeableInitFragment<GenerateContext>[];
}
type Media = undefined | string;

/**
 * Options object for in-memory caching.
 */
declare interface MemoryCacheOptions {
	/**
	 * Additionally cache computation of modules that are unchanged and reference only unchanged modules.
	 */
	cacheUnaffected?: boolean;

	/**
	 * Number of generations unused cache entries stay in memory cache at minimum (1 = may be removed after unused for a single compilation, ..., Infinity: kept forever).
	 */
	maxGenerations?: number;

	/**
	 * In memory caching.
	 */
	type: "memory";
}
declare class MemoryCachePlugin {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare class MergeDuplicateChunksPlugin {
	/**
	 * Creates an instance of MergeDuplicateChunksPlugin.
	 */
	constructor(options?: MergeDuplicateChunksPluginOptions);
	options: MergeDuplicateChunksPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface MergeDuplicateChunksPluginOptions {
	/**
	 * Specifies the stage for merging duplicate chunks.
	 */
	stage?: number;
}
type Meta = KnownMeta & Record<symbol, string[]> & Record<string, any>;
declare class MinChunkSizePlugin {
	/**
	 * Creates an instance of MinChunkSizePlugin.
	 */
	constructor(options: MinChunkSizePluginOptions);
	options: MinChunkSizePluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface MinChunkSizePluginOptions {
	/**
	 * Constant overhead for a chunk.
	 */
	chunkOverhead?: number;

	/**
	 * Multiplicator for initial chunks.
	 */
	entryChunkMultiplicator?: number;

	/**
	 * Minimum number of characters.
	 */
	minChunkSize: number;
}
declare interface Mkdir {
	(
		file: PathLikeFs,
		options: MakeDirectoryOptions & { recursive: true },
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
	(
		file: PathLikeFs,
		options:
			| undefined
			| null
			| string
			| number
			| (MakeDirectoryOptions & { recursive?: false }),
		callback: (err: null | NodeJS.ErrnoException) => void
	): void;
	(
		file: PathLikeFs,
		options: undefined | null | string | number | MakeDirectoryOptions,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
	(
		file: PathLikeFs,
		callback: (err: null | NodeJS.ErrnoException) => void
	): void;
}
declare interface MkdirSync {
	(
		path: PathLikeFs,
		options: MakeDirectoryOptions & { recursive: true }
	): undefined | string;
	(
		path: PathLikeFs,
		options?:
			| null
			| string
			| number
			| (MakeDirectoryOptions & { recursive?: false })
	): void;
	(
		path: PathLikeFs,
		options?: null | string | number | MakeDirectoryOptions
	): undefined | string;
}
declare class Module extends DependenciesBlock {
	/**
	 * Creates an instance of Module.
	 */
	constructor(type: string, context?: null | string, layer?: null | string);
	type: string;
	context: null | string;
	layer: null | string;
	needId: boolean;
	debugId: number;
	resolveOptions?: ResolveOptions;
	factoryMeta?: FactoryMeta;
	useSourceMap: boolean;
	useSimpleSourceMap: boolean;
	hot: boolean;
	buildMeta?: BuildMeta;
	buildInfo?: BuildInfo;
	presentationalDependencies?: Dependency[];
	codeGenerationDependencies?: Dependency[];

	/**
	 * Returns the module id assigned by the chunk graph.
	 * Updates the module id using the provided value.
	 * @deprecated
	 * @deprecated
	 */
	id: null | string | number;

	/**
	 * Returns the hash of the module.
	 * @deprecated
	 */
	get hash(): string;

	/**
	 * Returns the rendered hash of the module.
	 * @deprecated
	 */
	get renderedHash(): string;

	/**
	 * @deprecated
	 * @deprecated
	 */
	profile?: ModuleProfile;

	/**
	 * Returns the pre-order index.
	 * Updates the pre-order index using the provided value.
	 * @deprecated
	 * @deprecated
	 */
	index: null | number;

	/**
	 * Returns the post-order index.
	 * Updates the post-order index using the provided value.
	 * @deprecated
	 * @deprecated
	 */
	index2: null | number;

	/**
	 * Returns the depth.
	 * Updates the depth using the provided value.
	 * @deprecated
	 * @deprecated
	 */
	depth: null | number;

	/**
	 * Returns the issuer.
	 * Updates the issuer using the provided value.
	 * @deprecated
	 * @deprecated
	 */
	issuer?: null | Module;

	/**
	 * @deprecated
	 */
	get usedExports(): null | boolean | SortableSet<string>;

	/**
	 * Gets optimization bailout.
	 * @deprecated
	 */
	get optimizationBailout(): (
		| string
		| ((requestShortener: RequestShortener) => string)
	)[];

	/**
	 * @deprecated
	 */
	get optional(): boolean;

	/**
	 * Adds the provided chunk to the module.
	 * @deprecated
	 */
	addChunk(chunk: Chunk): boolean;

	/**
	 * Removes the provided chunk from the module.
	 * @deprecated
	 */
	removeChunk(chunk: Chunk): void;

	/**
	 * Checks whether this module is in the provided chunk.
	 * @deprecated
	 */
	isInChunk(chunk: Chunk): boolean;

	/**
	 * @deprecated
	 */
	isEntryModule(): boolean;

	/**
	 * @deprecated
	 */
	getChunks(): Chunk[];

	/**
	 * @deprecated
	 */
	getNumberOfChunks(): number;

	/**
	 * @deprecated
	 */
	get chunksIterable(): Iterable<Chunk>;

	/**
	 * Checks whether this module provides the specified export.
	 * @deprecated
	 */
	isProvided(exportName: string): null | boolean;

	/**
	 * Gets exports argument.
	 */
	get exportsArgument(): string;

	/**
	 * Gets module argument.
	 */
	get moduleArgument(): string;

	/**
	 * Returns export type.
	 */
	getExportsType(moduleGraph: ModuleGraph, strict?: boolean): ExportsType;

	/**
	 * Adds presentational dependency.
	 */
	addPresentationalDependency(presentationalDependency: Dependency): void;

	/**
	 * Adds code generation dependency.
	 */
	addCodeGenerationDependency(codeGenerationDependency: Dependency): void;

	/**
	 * Adds the provided warning to the module.
	 */
	addWarning(warning: WebpackError): void;

	/**
	 * Returns list of warnings if any.
	 */
	getWarnings(): undefined | Iterable<WebpackError>;

	/**
	 * Gets number of warnings.
	 */
	getNumberOfWarnings(): number;

	/**
	 * Adds the provided error to the module.
	 */
	addError(error: WebpackError): void;

	/**
	 * Returns list of errors if any.
	 */
	getErrors(): undefined | Iterable<WebpackError>;

	/**
	 * Gets number of errors.
	 */
	getNumberOfErrors(): number;

	/**
	 * removes all warnings and errors
	 */
	clearWarningsAndErrors(): void;

	/**
	 * Checks whether this module is optional.
	 */
	isOptional(moduleGraph: ModuleGraph): boolean;

	/**
	 * Checks whether this module is accessible in chunk.
	 */
	isAccessibleInChunk(
		chunkGraph: ChunkGraph,
		chunk: Chunk,
		ignoreChunk?: Chunk
	): boolean;

	/**
	 * Checks whether this module is accessible in chunk group.
	 */
	isAccessibleInChunkGroup(
		chunkGraph: ChunkGraph,
		chunkGroup: ChunkGroup,
		ignoreChunk?: Chunk
	): boolean;

	/**
	 * Checks whether this module contains the chunk.
	 */
	hasReasonForChunk(
		chunk: Chunk,
		moduleGraph: ModuleGraph,
		chunkGraph: ChunkGraph
	): boolean;

	/**
	 * Checks whether this module contains the module graph.
	 */
	hasReasons(moduleGraph: ModuleGraph, runtime: RuntimeSpec): boolean;

	/**
	 * Checks whether the module needs to be rebuilt for the current build state.
	 */
	needBuild(
		context: NeedBuildContext,
		callback: (err?: null | WebpackError, needBuild?: boolean) => void
	): void;

	/**
	 * Checks whether it needs rebuild.
	 * @deprecated Use needBuild instead
	 */
	needRebuild(
		fileTimestamps: Map<string, null | number>,
		contextTimestamps: Map<string, null | number>
	): boolean;

	/**
	 * Invalidates the cached state associated with this value.
	 */
	invalidateBuild(): void;

	/**
	 * Returns the unique identifier used to reference this module.
	 */
	identifier(): string;

	/**
	 * Returns a human-readable identifier for this module.
	 */
	readableIdentifier(requestShortener: RequestShortener): string;

	/**
	 * Builds the module using the provided compilation context.
	 */
	build(
		options: WebpackOptionsNormalizedWithDefaults,
		compilation: Compilation,
		resolver: ResolverWithOptions,
		fs: InputFileSystem,
		callback: (err?: WebpackError) => void
	): void;

	/**
	 * Returns the source types this module can generate.
	 */
	getSourceTypes(): ReadonlySet<string>;

	/**
	 * Basic source types are high-level categories like javascript, css, webassembly, etc.
	 * We only have built-in knowledge about the javascript basic type here; other basic types may be
	 * added or changed over time by generators and do not need to be handled or detected here.
	 * Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
	 * from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.
	 */
	getSourceBasicTypes(): ReadonlySet<string>;

	/**
	 * Returns generated source.
	 * @deprecated Use codeGeneration() instead
	 */
	source(
		dependencyTemplates: DependencyTemplates,
		runtimeTemplate: RuntimeTemplate,
		type?: string
	): Source;

	/**
	 * Returns the estimated size for the requested source type.
	 */
	size(type?: string): number;

	/**
	 * Gets the library identifier.
	 */
	libIdent(options: LibIdentOptions): null | string;

	/**
	 * Returns the path used when matching this module against rule conditions.
	 */
	nameForCondition(): null | string;

	/**
	 * Returns the reason this module cannot be concatenated, when one exists.
	 */
	getConcatenationBailoutReason(
		context: ConcatenationBailoutReasonContext
	): undefined | string;

	/**
	 * Gets side effects connection state.
	 */
	getSideEffectsConnectionState(moduleGraph: ModuleGraph): ConnectionState;

	/**
	 * Generates code and runtime requirements for this module.
	 */
	codeGeneration(context: CodeGenerationContext): CodeGenerationResult;

	/**
	 * Returns true if the module can be placed in the chunk.
	 */
	chunkCondition(chunk: Chunk, compilation: Compilation): boolean;
	hasChunkCondition(): boolean;

	/**
	 * Assuming this module is in the cache. Update the (cached) module with
	 * the fresh module from the factory. Usually updates internal references
	 * and properties.
	 */
	updateCacheModule(module: Module): void;

	/**
	 * Module should be unsafe cached. Get data that's needed for that.
	 * This data will be passed to restoreFromUnsafeCache later.
	 */
	getUnsafeCacheData(): UnsafeCacheData;

	/**
	 * Assuming this module is in the cache. Remove internal references to allow freeing some memory.
	 */
	cleanupForCache(): void;

	/**
	 * Gets the original source.
	 */
	originalSource(): null | Source;

	/**
	 * Adds the provided file dependencies to the module.
	 */
	addCacheDependencies(
		fileDependencies: LazySet<string>,
		contextDependencies: LazySet<string>,
		missingDependencies: LazySet<string>,
		buildDependencies: LazySet<string>
	): void;
	get hasEqualsChunks(): any;
	get isUsed(): any;
	get errors(): any;
	get warnings(): any;
	used: any;

	/**
	 * Gets source basic types.
	 * @deprecated In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
	 */
	static getSourceBasicTypes(module: Module): ReadonlySet<string>;
}
declare class ModuleChunkLoadingRuntimeModule extends RuntimeModule {
	/**
	 * Creates an instance of ModuleChunkLoadingRuntimeModule.
	 */
	constructor(runtimeRequirements: ReadonlySet<string>);

	/**
	 * Returns hooks.
	 */
	static getCompilationHooks(
		compilation: Compilation
	): JsonpCompilationPluginHooks;

	/**
	 * Runtime modules without any dependencies to other runtime modules
	 */
	static STAGE_NORMAL: number;

	/**
	 * Runtime modules with simple dependencies on other runtime modules
	 */
	static STAGE_BASIC: number;

	/**
	 * Runtime modules which attach to handlers of other runtime modules
	 */
	static STAGE_ATTACH: number;

	/**
	 * Runtime modules which trigger actions on bootstrap
	 */
	static STAGE_TRIGGER: number;

	/**
	 * Gets source basic types.
	 * @deprecated In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
	 */
	static getSourceBasicTypes(module: Module): ReadonlySet<string>;
}
declare class ModuleConcatenationPlugin {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare class ModuleDependency extends Dependency {
	/**
	 * Creates an instance of ModuleDependency.
	 */
	constructor(request: string, sourceOrder?: number);
	request: string;
	userRequest: string;
	sourceOrder?: number;
	range?: [number, number];
	static Template: typeof DependencyTemplate;
	static NO_EXPORTS_REFERENCED: string[][];
	static EXPORTS_OBJECT_REFERENCED: string[][];

	/**
	 * Returns true if the dependency is a low priority dependency.
	 */
	static isLowPriorityDependency(dependency: Dependency): boolean;
	static TRANSITIVE: symbol;
}
declare class ModuleExternalInitFragment extends InitFragment<GenerateContext> {
	/**
	 * Creates an instance of ModuleExternalInitFragment.
	 */
	constructor(
		request: string,
		imported: Imported,
		ident?: string,
		dependencyMeta?: ImportDependencyMeta,
		hashFunction?: string | typeof Hash
	);

	/**
	 * Returns imported.
	 */
	getImported(): Imported;

	/**
	 * Updates imported using the provided imported.
	 */
	setImported(imported: Imported): void;
	getNamespaceIdentifier(): string;

	/**
	 * Returns identifier.
	 */
	buildIdentifier(ident: string): string;

	/**
	 * Returns normalized imported.
	 */
	buildImported(imported: Imported): Imported;

	/**
	 * Adds the provided source to the init fragment.
	 */
	static addToSource<Context>(
		source: Source,
		initFragments: MaybeMergeableInitFragment<Context>[],
		context: Context
	): Source;
	static STAGE_CONSTANTS: number;
	static STAGE_ASYNC_BOUNDARY: number;
	static STAGE_HARMONY_EXPORTS: number;
	static STAGE_HARMONY_IMPORTS: number;
	static STAGE_PROVIDES: number;
	static STAGE_ASYNC_DEPENDENCIES: number;
	static STAGE_ASYNC_HARMONY_IMPORTS: number;
}
declare class ModuleFactory {
	constructor();

	/**
	 * Processes the provided data.
	 */
	create(
		data: ModuleFactoryCreateData,
		callback: (err?: null | Error, result?: ModuleFactoryResult) => void
	): void;
}
declare interface ModuleFactoryCacheEntry {
	/**
	 * - The undo path to the CSS file
	 */
	undoPath: string;

	/**
	 * - The inheritance chain
	 */
	inheritance: [CssLayer, Supports, Media][];

	/**
	 * - The cached source
	 */
	source: CachedSource;
}
declare interface ModuleFactoryCreateData {
	contextInfo: ModuleFactoryCreateDataContextInfo;
	resolveOptions?: ResolveOptions;
	context: string;
	dependencies: Dependency[];
}
declare interface ModuleFactoryCreateDataContextInfo {
	issuer: string;
	issuerLayer: IssuerLayer;
	compiler?: string;
}
declare interface ModuleFactoryResult {
	/**
	 * the created module or unset if no module was created
	 */
	module?: Module;
	fileDependencies?: Set<string>;
	contextDependencies?: Set<string>;
	missingDependencies?: Set<string>;

	/**
	 * allow to use the unsafe cache
	 */
	cacheable?: boolean;
}
declare class ModuleFederationPlugin {
	/**
	 * Creates an instance of ModuleFederationPlugin.
	 */
	constructor(options: ModuleFederationPluginOptions);
	options: ModuleFederationPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Get the compilation hooks associated with this plugin.
	 */
	static getCompilationHooks(
		compilation: Compilation
	): CompilationHooksModuleFederationPlugin;
}
declare interface ModuleFederationPluginOptions {
	/**
	 * Modules that should be exposed by this container. When provided, property name is used as public name, otherwise public name is automatically inferred from request.
	 */
	exposes?: (string | ExposesObject)[] | ExposesObject;

	/**
	 * The filename of the container as relative path inside the `output.path` directory.
	 */
	filename?: string;

	/**
	 * Options for library.
	 */
	library?: LibraryOptions;

	/**
	 * The name of the container.
	 */
	name?: string;

	/**
	 * The external type of the remote containers.
	 */
	remoteType?:
		| "import"
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "commonjs-static"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system"
		| "promise"
		| "module-import"
		| "script"
		| "node-commonjs"
		| "asset"
		| "css-import"
		| "css-url";

	/**
	 * Container locations and request scopes from which modules should be resolved and loaded at runtime. When provided, property name is used as request scope, otherwise request scope is automatically inferred from container location.
	 */
	remotes?: (string | RemotesObject)[] | RemotesObject;

	/**
	 * The name of the runtime chunk. If set a runtime chunk with this name is created or an existing entrypoint is used as runtime.
	 */
	runtime?: string | false;

	/**
	 * Share scope name used for all shared modules (defaults to 'default').
	 */
	shareScope?: string;

	/**
	 * Modules that should be shared in the share scope. When provided, property names are used to match requested modules in this compilation.
	 */
	shared?: (string | SharedObject)[] | SharedObject;
}
declare interface ModuleFilenameTemplateContext {
	/**
	 * the identifier of the module
	 */
	identifier: string;

	/**
	 * the shortened identifier of the module
	 */
	shortIdentifier: string;

	/**
	 * the resource of the module request
	 */
	resource: string;

	/**
	 * the resource path of the module request
	 */
	resourcePath: string;

	/**
	 * the absolute resource path of the module request
	 */
	absoluteResourcePath: string;

	/**
	 * the loaders of the module request
	 */
	loaders: string;

	/**
	 * the all loaders of the module request
	 */
	allLoaders: string;

	/**
	 * the query of the module identifier
	 */
	query: string;

	/**
	 * the module id of the module
	 */
	moduleId: string;

	/**
	 * the hash of the module identifier
	 */
	hash: string;

	/**
	 * the module namespace
	 */
	namespace: string;
}
type ModuleFilterItemTypes =
	| string
	| RegExp
	| ((
			name: string,
			module: StatsModule,
			type: "module" | "chunk" | "root-of-chunk" | "nested"
	  ) => boolean);
declare class ModuleGraph {
	constructor();

	/**
	 * Updates parents using the provided dependency.
	 */
	setParents(
		dependency: Dependency,
		block: DependenciesBlock,
		module: Module,
		indexInBlock?: number
	): void;

	/**
	 * Sets parent dependencies block index.
	 */
	setParentDependenciesBlockIndex(dependency: Dependency, index: number): void;

	/**
	 * Gets parent module.
	 */
	getParentModule(dependency: Dependency): undefined | Module;

	/**
	 * Returns parent block.
	 */
	getParentBlock(dependency: Dependency): undefined | DependenciesBlock;

	/**
	 * Gets parent block index.
	 */
	getParentBlockIndex(dependency: Dependency): number;

	/**
	 * Sets resolved module.
	 */
	setResolvedModule(
		originModule: null | Module,
		dependency: Dependency,
		module: Module
	): void;

	/**
	 * Updates module using the provided dependency.
	 */
	updateModule(dependency: Dependency, module: Module): void;

	/**
	 * Updates parent using the provided dependency.
	 */
	updateParent(
		dependency: Dependency,
		connection?: ModuleGraphConnection,
		parentModule?: Module
	): void;

	/**
	 * Finish update parent.
	 */
	finishUpdateParent(): void;

	/**
	 * Removes connection.
	 */
	removeConnection(dependency: Dependency): void;

	/**
	 * Adds the provided dependency to the module graph.
	 */
	addExplanation(dependency: Dependency, explanation: string): void;

	/**
	 * Clones module attributes.
	 */
	cloneModuleAttributes(sourceModule: Module, targetModule: Module): void;

	/**
	 * Removes module attributes.
	 */
	removeModuleAttributes(module: Module): void;

	/**
	 * Removes all module attributes.
	 */
	removeAllModuleAttributes(): void;

	/**
	 * Move module connections.
	 */
	moveModuleConnections(
		oldModule: Module,
		newModule: Module,
		filterConnection: (moduleGraphConnection: ModuleGraphConnection) => boolean
	): void;

	/**
	 * Copies outgoing module connections.
	 */
	copyOutgoingModuleConnections(
		oldModule: Module,
		newModule: Module,
		filterConnection: (moduleGraphConnection: ModuleGraphConnection) => boolean
	): void;

	/**
	 * Adds the provided module to the module graph.
	 */
	addExtraReason(module: Module, explanation: string): void;

	/**
	 * Gets resolved module.
	 */
	getResolvedModule(dependency: Dependency): null | Module;

	/**
	 * Returns the connection.
	 */
	getConnection(dependency: Dependency): undefined | ModuleGraphConnection;

	/**
	 * Returns the referenced module.
	 */
	getModule(dependency: Dependency): null | Module;

	/**
	 * Returns the referencing module.
	 */
	getOrigin(dependency: Dependency): null | Module;

	/**
	 * Gets resolved origin.
	 */
	getResolvedOrigin(dependency: Dependency): null | Module;

	/**
	 * Gets incoming connections.
	 */
	getIncomingConnections(module: Module): Iterable<ModuleGraphConnection>;

	/**
	 * Gets outgoing connections.
	 */
	getOutgoingConnections(module: Module): Iterable<ModuleGraphConnection>;

	/**
	 * Gets incoming connections by origin module.
	 */
	getIncomingConnectionsByOriginModule(
		module: Module
	): ReadonlyMap<
		undefined | null | Module,
		ReadonlyArray<ModuleGraphConnection>
	>;

	/**
	 * Gets outgoing connections by module.
	 */
	getOutgoingConnectionsByModule(
		module: Module
	):
		| undefined
		| ReadonlyMap<undefined | Module, ReadonlyArray<ModuleGraphConnection>>;

	/**
	 * Returns the module profile.
	 */
	getProfile(module: Module): undefined | ModuleProfile;

	/**
	 * Updates profile using the provided module.
	 */
	setProfile(module: Module, profile?: ModuleProfile): void;

	/**
	 * Returns the issuer module.
	 */
	getIssuer(module: Module): Issuer;

	/**
	 * Updates issuer using the provided module.
	 */
	setIssuer(module: Module, issuer: null | Module): void;

	/**
	 * Sets issuer if unset.
	 */
	setIssuerIfUnset(module: Module, issuer: null | Module): void;

	/**
	 * Gets optimization bailout.
	 */
	getOptimizationBailout(
		module: Module
	): (string | ((requestShortener: RequestShortener) => string))[];

	/**
	 * Gets provided exports.
	 */
	getProvidedExports(module: Module): null | true | string[];

	/**
	 * Checks whether this module graph is export provided.
	 */
	isExportProvided(
		module: Module,
		exportName: string | string[]
	): null | boolean;

	/**
	 * Returns info about the exports.
	 */
	getExportsInfo(module: Module): ExportsInfo;

	/**
	 * Returns info about the export.
	 */
	getExportInfo(module: Module, exportName: string): ExportInfo;

	/**
	 * Gets read only export info.
	 */
	getReadOnlyExportInfo(module: Module, exportName: string): ExportInfo;

	/**
	 * Returns the used exports.
	 */
	getUsedExports(
		module: Module,
		runtime: RuntimeSpec
	): null | boolean | SortableSet<string>;

	/**
	 * Gets pre order index.
	 */
	getPreOrderIndex(module: Module): null | number;

	/**
	 * Gets post order index.
	 */
	getPostOrderIndex(module: Module): null | number;

	/**
	 * Sets pre order index.
	 */
	setPreOrderIndex(module: Module, index: number): void;

	/**
	 * Sets pre order index if unset.
	 */
	setPreOrderIndexIfUnset(module: Module, index: number): boolean;

	/**
	 * Sets post order index.
	 */
	setPostOrderIndex(module: Module, index: number): void;

	/**
	 * Sets post order index if unset.
	 */
	setPostOrderIndexIfUnset(module: Module, index: number): boolean;

	/**
	 * Returns the depth of the module.
	 */
	getDepth(module: Module): null | number;

	/**
	 * Updates depth using the provided module.
	 */
	setDepth(module: Module, depth: number): void;

	/**
	 * Sets depth if lower.
	 */
	setDepthIfLower(module: Module, depth: number): boolean;

	/**
	 * Checks whether this module graph is async.
	 */
	isAsync(module: Module): boolean;

	/**
	 * Checks whether this module graph is deferred.
	 */
	isDeferred(module: Module): boolean;

	/**
	 * Updates async using the provided module.
	 */
	setAsync(module: Module): void;

	/**
	 * Returns metadata.
	 */
	getMeta(thing: object): Meta;

	/**
	 * Gets meta if existing.
	 */
	getMetaIfExisting(thing: object): undefined | Meta;

	/**
	 * Processes the provided cache stage.
	 */
	freeze(cacheStage?: string): void;
	unfreeze(): void;

	/**
	 * Returns computed value or cached.
	 */
	cached<T extends any[], R>(
		fn: (moduleGraph: ModuleGraph, ...args: T) => R,
		...args: T
	): R;

	/**
	 * Sets module mem caches.
	 */
	setModuleMemCaches(
		moduleMemCaches: Map<Module, WeakTupleMap<any[], any>>
	): void;

	/**
	 * Dependency cache provide.
	 */
	dependencyCacheProvide<D extends Dependency, ARGS extends any[], R>(
		dependency: D,
		...args: [
			ARGS,
			...((moduleGraph: ModuleGraph, dependency: D, ...args: ARGS) => R)[]
		]
	): R;

	/**
	 * Gets module graph for module.
	 * @deprecated
	 */
	static getModuleGraphForModule(
		module: Module,
		deprecateMessage: string,
		deprecationCode: string
	): ModuleGraph;

	/**
	 * Sets module graph for module.
	 * @deprecated
	 */
	static setModuleGraphForModule(
		module: Module,
		moduleGraph: ModuleGraph
	): void;

	/**
	 * Clear module graph for module.
	 * @deprecated
	 */
	static clearModuleGraphForModule(module: Module): void;
	static ModuleGraphConnection: typeof ModuleGraphConnection;
}
declare class ModuleGraphConnection {
	/**
	 * Creates an instance of ModuleGraphConnection.
	 */
	constructor(
		originModule: null | Module,
		dependency: null | Dependency,
		module: Module,
		explanation?: string,
		weak?: boolean,
		condition?:
			| null
			| false
			| ((
					moduleGraphConnection: ModuleGraphConnection,
					runtime: RuntimeSpec
			  ) => ConnectionState)
	);
	originModule: null | Module;
	resolvedOriginModule: null | Module;
	dependency: null | Dependency;
	resolvedModule: Module;
	module: Module;
	weak?: boolean;
	conditional: boolean;
	condition?:
		| null
		| false
		| ((
				moduleGraphConnection: ModuleGraphConnection,
				runtime: RuntimeSpec
		  ) => ConnectionState);
	explanations?: Set<string>;
	clone(): ModuleGraphConnection;

	/**
	 * Adds the provided condition to the module graph connection.
	 */
	addCondition(
		condition: (
			moduleGraphConnection: ModuleGraphConnection,
			runtime: RuntimeSpec
		) => ConnectionState
	): void;

	/**
	 * Adds the provided explanation to the module graph connection.
	 */
	addExplanation(explanation: string): void;
	get explanation(): string;

	/**
	 * Checks whether this module graph connection is active.
	 */
	isActive(runtime: RuntimeSpec): boolean;

	/**
	 * Checks whether this module graph connection is target active.
	 */
	isTargetActive(runtime: RuntimeSpec): boolean;

	/**
	 * Returns true: fully active, false: inactive, TRANSITIVE: direct module inactive, but transitive connection maybe active.
	 */
	getActiveState(runtime: RuntimeSpec): ConnectionState;

	/**
	 * Updates active using the provided value.
	 */
	setActive(value: boolean): void;
	static CIRCULAR_CONNECTION: typeof CIRCULAR_CONNECTION;
	static TRANSITIVE_ONLY: typeof TRANSITIVE_ONLY;
	static addConnectionStates: (
		a: ConnectionState,
		b: ConnectionState
	) => ConnectionState;
}
type ModuleId = string | number;
type ModuleInfo = ConcatenatedModuleInfo | ExternalModuleInfo;
declare interface ModuleMemCachesItem {
	buildInfo: BuildInfo;
	references?: WeakMap<Dependency, Module>;
	memCache: WeakTupleMap<any[], any>;
}

/**
 * Options affecting the normal modules (`NormalModuleFactory`).
 */
declare interface ModuleOptions {
	/**
	 * An array of rules applied by default for modules.
	 */
	defaultRules?: (undefined | null | false | "" | 0 | RuleSetRule | "...")[];

	/**
	 * Enable warnings for full dynamic dependencies.
	 * @deprecated
	 */
	exprContextCritical?: boolean;

	/**
	 * Enable recursive directory lookup for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRecursive'.
	 * @deprecated
	 */
	exprContextRecursive?: boolean;

	/**
	 * Sets the default regular expression for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRegExp'.
	 * @deprecated
	 */
	exprContextRegExp?: boolean | RegExp;

	/**
	 * Set the default request for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRequest'.
	 * @deprecated
	 */
	exprContextRequest?: string;

	/**
	 * Specify options for each generator.
	 */
	generator?: GeneratorOptionsByModuleType;

	/**
	 * Don't parse files matching. It's matched against the full resolved request.
	 */
	noParse?:
		| string
		| RegExp
		| ((content: string) => boolean)
		| (string | RegExp | ((content: string) => boolean))[];

	/**
	 * Specify options for each parser.
	 */
	parser?: ParserOptionsByModuleType;

	/**
	 * An array of rules applied for modules.
	 */
	rules?: (undefined | null | false | "" | 0 | RuleSetRule | "...")[];

	/**
	 * Emit errors instead of warnings when imported names don't exist in imported module. Deprecated: This option has moved to 'module.parser.javascript.strictExportPresence'.
	 * @deprecated
	 */
	strictExportPresence?: boolean;

	/**
	 * Handle the this context correctly according to the spec for namespace objects. Deprecated: This option has moved to 'module.parser.javascript.strictThisContextOnImports'.
	 * @deprecated
	 */
	strictThisContextOnImports?: boolean;

	/**
	 * Enable warnings when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextCritical'.
	 * @deprecated
	 */
	unknownContextCritical?: boolean;

	/**
	 * Enable recursive directory lookup when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRecursive'.
	 * @deprecated
	 */
	unknownContextRecursive?: boolean;

	/**
	 * Sets the regular expression when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRegExp'.
	 * @deprecated
	 */
	unknownContextRegExp?: boolean | RegExp;

	/**
	 * Sets the request when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRequest'.
	 * @deprecated
	 */
	unknownContextRequest?: string;

	/**
	 * Cache the resolving of module requests.
	 */
	unsafeCache?: boolean | ((module: Module) => boolean);

	/**
	 * Enable warnings for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextCritical'.
	 * @deprecated
	 */
	wrappedContextCritical?: boolean;

	/**
	 * Enable recursive directory lookup for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRecursive'.
	 * @deprecated
	 */
	wrappedContextRecursive?: boolean;

	/**
	 * Set the inner regular expression for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRegExp'.
	 * @deprecated
	 */
	wrappedContextRegExp?: RegExp;
}

/**
 * Options affecting the normal modules (`NormalModuleFactory`).
 */
declare interface ModuleOptionsNormalized {
	/**
	 * An array of rules applied by default for modules.
	 */
	defaultRules: (undefined | null | false | "" | 0 | RuleSetRule | "...")[];

	/**
	 * Specify options for each generator.
	 */
	generator: GeneratorOptionsByModuleType;

	/**
	 * Don't parse files matching. It's matched against the full resolved request.
	 */
	noParse?:
		| string
		| RegExp
		| ((content: string) => boolean)
		| (string | RegExp | ((content: string) => boolean))[];

	/**
	 * Specify options for each parser.
	 */
	parser: ParserOptionsByModuleType;

	/**
	 * An array of rules applied for modules.
	 */
	rules: (undefined | null | false | "" | 0 | RuleSetRule | "...")[];

	/**
	 * Cache the resolving of module requests.
	 */
	unsafeCache?: boolean | ((module: Module) => boolean);
}
declare interface ModulePathData {
	id: string | number;
	hash: string;
	hashWithLength?: (length: number) => string;
}
declare abstract class ModuleProfile {
	startTime: number;
	factoryStartTime: number;
	factoryEndTime: number;
	factory: number;
	factoryParallelismFactor: number;
	restoringStartTime: number;
	restoringEndTime: number;
	restoring: number;
	restoringParallelismFactor: number;
	integrationStartTime: number;
	integrationEndTime: number;
	integration: number;
	integrationParallelismFactor: number;
	buildingStartTime: number;
	buildingEndTime: number;
	building: number;
	buildingParallelismFactor: number;
	storingStartTime: number;
	storingEndTime: number;
	storing: number;
	storingParallelismFactor: number;
	additionalFactoryTimes?: { start: number; end: number }[];
	additionalFactories: number;
	additionalFactoriesParallelismFactor: number;

	/**
	 * @deprecated
	 */
	additionalIntegration: number;
	markFactoryStart(): void;
	markFactoryEnd(): void;
	markRestoringStart(): void;
	markRestoringEnd(): void;
	markIntegrationStart(): void;
	markIntegrationEnd(): void;
	markBuildingStart(): void;
	markBuildingEnd(): void;
	markStoringStart(): void;
	markStoringEnd(): void;

	/**
	 * Merge this profile into another one
	 */
	mergeInto(realProfile: ModuleProfile): void;
}
declare interface ModuleReferenceOptions {
	/**
	 * the properties or exports selected from the referenced module
	 */
	ids: string[];

	/**
	 * true, when this referenced export is called
	 */
	call: boolean;

	/**
	 * true, when this referenced export is directly imported (not via property access)
	 */
	directImport: boolean;

	/**
	 * true, when this referenced export is deferred
	 */
	deferredImport: boolean;

	/**
	 * if the position is ASI safe or unknown
	 */
	asiSafe?: boolean;
}
declare interface ModuleRenderContext {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * results of code generation
	 */
	codeGenerationResults: CodeGenerationResults;

	/**
	 * init fragments for the chunk
	 */
	chunkInitFragments: InitFragment<ChunkRenderContextJavascriptModulesPlugin>[];

	/**
	 * rendering in strict context
	 */
	strictMode?: boolean;

	/**
	 * true: renders as factory method, false: pure module content
	 */
	factory: boolean;

	/**
	 * the inlined entry module is wrapped in an IIFE, existing only when `factory` is set to false
	 */
	inlinedInIIFE?: boolean;

	/**
	 * render module in object container
	 */
	renderInObject?: boolean;
}
declare interface ModuleResult {
	client: string;
	data: string;
	active: boolean;
}
declare interface ModuleSettings {
	/**
	 * Specifies the layer in which the module should be placed in.
	 */
	layer?: string;

	/**
	 * Module type to use for the module.
	 */
	type?: string;

	/**
	 * Options for parsing.
	 */
	parser?: { [index: string]: any };

	/**
	 * The options for the module generator.
	 */
	generator?: { [index: string]: any };

	/**
	 * Enable/Disable extracting source map.
	 */
	extractSourceMap?: boolean;

	/**
	 * Options for the resolver.
	 */
	resolve?: ResolveOptions;

	/**
	 * Flags a module as with or without side effects.
	 */
	sideEffects?: boolean;
}
declare abstract class ModuleTemplate {
	type: string;
	hooks: Readonly<{
		content: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					source: Source,
					module: Module,
					moduleRenderContext: ModuleRenderContext,
					dependencyTemplates: DependencyTemplates
				) => Source
			) => void;
		};
		module: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					source: Source,
					module: Module,
					moduleRenderContext: ModuleRenderContext,
					dependencyTemplates: DependencyTemplates
				) => Source
			) => void;
		};
		render: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					source: Source,
					module: Module,
					chunkRenderContext: ChunkRenderContextJavascriptModulesPlugin,
					dependencyTemplates: DependencyTemplates
				) => Source
			) => void;
		};
		package: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (
					source: Source,
					module: Module,
					chunkRenderContext: ChunkRenderContextJavascriptModulesPlugin,
					dependencyTemplates: DependencyTemplates
				) => Source
			) => void;
		};
		hash: {
			tap: <AdditionalOptions>(
				options:
					| string
					| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
				fn: (hash: Hash) => void
			) => void;
		};
	}>;
	get runtimeTemplate(): RuntimeTemplate;
}
declare interface ModuleTemplates {
	javascript: ModuleTemplate;
}
declare interface ModuleTrace {
	origin: Module;
	module: Module;
}
declare class MultiCompiler {
	/**
	 * Creates an instance of MultiCompiler.
	 */
	constructor(
		compilers: Compiler[] | Record<string, Compiler>,
		options: MultiCompilerOptions
	);
	hooks: Readonly<{
		done: SyncHook<[MultiStats]>;
		invalid: MultiHook<SyncHook<[null | string, number]>>;
		run: MultiHook<AsyncSeriesHook<[Compiler]>>;
		watchClose: SyncHook<[]>;
		watchRun: MultiHook<AsyncSeriesHook<[Compiler]>>;
		infrastructureLog: MultiHook<
			SyncBailHook<[string, string, undefined | any[]], true | void>
		>;
	}>;
	compilers: Compiler[];
	dependencies: WeakMap<Compiler, string[]>;
	running: boolean;
	get options(): WebpackOptionsNormalized[] & MultiCompilerOptions;
	get outputPath(): string;

	/**
	 * Sets input file system.
	 */
	inputFileSystem: InputFileSystem;

	/**
	 * Sets output file system.
	 */
	outputFileSystem: OutputFileSystem;

	/**
	 * Sets watch file system.
	 */
	watchFileSystem: WatchFileSystem;

	/**
	 * Sets intermediate file system.
	 */
	intermediateFileSystem: IntermediateFileSystem;

	/**
	 * Gets infrastructure logger.
	 */
	getInfrastructureLogger(name: string | (() => string)): WebpackLogger;

	/**
	 * Updates dependencies using the provided compiler.
	 */
	setDependencies(compiler: Compiler, dependencies: string[]): void;

	/**
	 * Validate dependencies.
	 */
	validateDependencies(
		callback: CallbackWebpackFunction_2<MultiStats, void>
	): boolean;

	/**
	 * Run with dependencies.
	 * @deprecated This method should have been private
	 */
	runWithDependencies(
		compilers: Compiler[],
		fn: (
			compiler: Compiler,
			callback: CallbackWebpackFunction_2<MultiStats, void>
		) => void,
		callback: CallbackWebpackFunction_2<Stats[], void>
	): void;

	/**
	 * Returns a compiler watcher.
	 */
	watch(
		watchOptions: WatchOptions | WatchOptions[],
		handler: CallbackWebpackFunction_2<MultiStats, void>
	): undefined | MultiWatching;

	/**
	 * Processes the provided multi stat.
	 */
	run(callback: CallbackWebpackFunction_2<MultiStats, void>): void;
	purgeInputFileSystem(): void;

	/**
	 * Processes the provided error callback.
	 */
	close(callback: (err: null | Error, result?: void) => void): void;
}
declare interface MultiCompilerOptions {
	/**
	 * how many Compilers are allows to run at the same time in parallel
	 */
	parallelism?: number;
}
type MultiConfiguration = ReadonlyArray<Configuration> & MultiCompilerOptions;
declare abstract class MultiStats {
	stats: Stats[];
	get hash(): string;

	/**
	 * Checks whether this multi stats has errors.
	 */
	hasErrors(): boolean;

	/**
	 * Checks whether this multi stats has warnings.
	 */
	hasWarnings(): boolean;

	/**
	 * Returns json output.
	 */
	toJson(
		options?:
			| boolean
			| StatsOptions
			| "none"
			| "summary"
			| "errors-only"
			| "errors-warnings"
			| "minimal"
			| "normal"
			| "detailed"
			| "verbose"
	): StatsCompilation;

	/**
	 * Returns a string representation.
	 */
	toString(
		options?:
			| boolean
			| StatsOptions
			| "none"
			| "summary"
			| "errors-only"
			| "errors-warnings"
			| "minimal"
			| "normal"
			| "detailed"
			| "verbose"
	): string;
}
declare abstract class MultiWatching {
	watchings: Watching[];
	compiler: MultiCompiler;

	/**
	 * Processes the provided error callback.
	 */
	invalidate(callback?: (err: null | Error, result?: void) => void): void;
	suspend(): void;
	resume(): void;

	/**
	 * Processes the provided error callback.
	 */
	close(callback: (err: null | Error, result?: void) => void): void;
}
declare class NamedChunkIdsPlugin {
	/**
	 * Creates an instance of NamedChunkIdsPlugin.
	 */
	constructor(options?: NamedChunkIdsPluginOptions);
	options: NamedChunkIdsPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface NamedChunkIdsPluginOptions {
	/**
	 * context
	 */
	context?: string;

	/**
	 * delimiter
	 */
	delimiter?: string;
}
declare class NamedModuleIdsPlugin {
	/**
	 * Creates an instance of NamedModuleIdsPlugin.
	 */
	constructor(options?: NamedModuleIdsPluginOptions);
	options: NamedModuleIdsPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface NamedModuleIdsPluginOptions {
	/**
	 * context
	 */
	context?: string;
}
declare class NaturalModuleIdsPlugin {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface NeedBuildContext {
	compilation: Compilation;
	fileSystemInfo: FileSystemInfo;
	valueCacheVersions: Map<string, ValueCacheVersion>;
}
declare interface NewContentCreateContextMap {
	[index: string]: string;
}
declare class NoEmitOnErrorsPlugin {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
type Node = false | NodeOptions;
declare class NodeEnvironmentPlugin {
	/**
	 * Creates an instance of NodeEnvironmentPlugin.
	 */
	constructor(options: NodeEnvironmentPluginOptions);
	options: NodeEnvironmentPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface NodeEnvironmentPluginOptions {
	/**
	 * infrastructure logging options
	 */
	infrastructureLogging: InfrastructureLogging;
}

/**
 * Options object for node compatibility features.
 */
declare interface NodeOptions {
	/**
	 * Include a polyfill for the '__dirname' variable.
	 */
	__dirname?: boolean | "warn-mock" | "mock" | "node-module" | "eval-only";

	/**
	 * Include a polyfill for the '__filename' variable.
	 */
	__filename?: boolean | "warn-mock" | "mock" | "node-module" | "eval-only";

	/**
	 * Include a polyfill for the 'global' variable.
	 */
	global?: boolean | "warn";
}
declare class NodeSourcePlugin {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare class NodeTargetPlugin {
	/**
	 * Creates an instance of NodeTargetPlugin.
	 */
	constructor(type?: ExternalsType);
	type: ExternalsType;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare class NodeTemplatePlugin {
	/**
	 * Creates an instance of NodeTemplatePlugin.
	 */
	constructor(options?: NodeTemplatePluginOptions);

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface NodeTemplatePluginOptions {
	/**
	 * enable async chunk loading
	 */
	asyncChunkLoading?: boolean;
}
type NonNullable<T> = T & {};
declare class NormalModule extends Module {
	constructor(__0: NormalModuleCreateData);
	request: string;
	userRequest: string;
	rawRequest: string;
	binary: boolean;
	parser?: ParserClass;
	parserOptions?: ParserOptions;
	generator?: Generator;
	generatorOptions?: GeneratorOptions;
	resource: string;
	resourceResolveData?: ResourceSchemeData & Partial<ResolveRequest>;
	matchResource?: string;
	loaders: LoaderItem[];
	extractSourceMap: boolean;
	error: null | WebpackError;
	getResource(): null | string;

	/**
	 * restore unsafe cache data
	 */
	restoreFromUnsafeCache(
		unsafeCacheData: UnsafeCacheData,
		normalModuleFactory: NormalModuleFactory
	): void;
	createSourceForAsset(
		context: string,
		name: string,
		content: string | Buffer,
		sourceMap?: string | RawSourceMap,
		associatedObjectForCache?: object
	): Source;
	getCurrentLoader(
		loaderContext: AnyLoaderContext,
		index?: number
	): null | LoaderItem;
	createSource(
		context: string,
		content: string | Buffer,
		sourceMap?: null | string | RawSourceMap,
		associatedObjectForCache?: object
	): Source;
	markModuleAsErrored(error: WebpackError): void;
	applyNoParseRule(
		rule: string | RegExp | ((content: string) => boolean),
		content: string
	): boolean;
	shouldPreventParsing(
		noParseRule:
			| undefined
			| string
			| RegExp
			| ((content: string) => boolean)
			| (string | RegExp | ((content: string) => boolean))[],
		request: string
	): boolean;
	static getCompilationHooks(
		compilation: Compilation
	): NormalModuleCompilationHooks;
	static deserialize(context: ObjectDeserializerContext): NormalModule;

	/**
	 * Gets source basic types.
	 * @deprecated In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
	 */
	static getSourceBasicTypes(module: Module): ReadonlySet<string>;
}
declare interface NormalModuleCompilationHooks {
	loader: SyncHook<[AnyLoaderContext, NormalModule]>;
	beforeLoaders: SyncHook<[LoaderItem[], NormalModule, AnyLoaderContext]>;
	beforeParse: SyncHook<[NormalModule]>;
	beforeSnapshot: SyncHook<[NormalModule]>;
	readResourceForScheme: HookMap<
		FakeHook<
			AsyncSeriesBailHook<[string, NormalModule], null | string | Buffer>
		>
	>;
	readResource: HookMap<
		AsyncSeriesBailHook<[AnyLoaderContext], null | string | Buffer>
	>;
	processResult: SyncWaterfallHook<
		[
			[
				string | Buffer,
				undefined | string | RawSourceMap,
				undefined | PreparsedAst
			],
			NormalModule
		],
		[
			string | Buffer,
			undefined | string | RawSourceMap,
			undefined | PreparsedAst
		]
	>;
	needBuild: AsyncSeriesBailHook<[NormalModule, NeedBuildContext], boolean>;
}
declare interface NormalModuleCreateData {
	/**
	 * an optional layer in which the module is
	 */
	layer?: string;

	/**
	 * module type. When deserializing, this is set to an empty string "".
	 */
	type: string;

	/**
	 * request string
	 */
	request: string;

	/**
	 * request intended by user (without loaders from config)
	 */
	userRequest: string;

	/**
	 * request without resolving
	 */
	rawRequest: string;

	/**
	 * list of loaders
	 */
	loaders: LoaderItem[];

	/**
	 * path + query of the real resource
	 */
	resource: string;

	/**
	 * resource resolve data
	 */
	resourceResolveData?: ResourceSchemeData & Partial<ResolveRequest>;

	/**
	 * context directory for resolving
	 */
	context: string;

	/**
	 * path + query of the matched resource (virtual)
	 */
	matchResource?: string;

	/**
	 * the parser used
	 */
	parser: ParserClass;

	/**
	 * the options of the parser used
	 */
	parserOptions?: ParserOptions;

	/**
	 * the generator used
	 */
	generator: Generator;

	/**
	 * the options of the generator used
	 */
	generatorOptions?: GeneratorOptions;

	/**
	 * options used for resolving requests from this module
	 */
	resolveOptions?: ResolveOptions;

	/**
	 * enable/disable extracting source map
	 */
	extractSourceMap: boolean;
}
declare abstract class NormalModuleFactory extends ModuleFactory {
	hooks: Readonly<{
		resolve: AsyncSeriesBailHook<[ResolveData], false | void | Module>;
		resolveForScheme: HookMap<
			AsyncSeriesBailHook<[ResourceDataWithData, ResolveData], true | void>
		>;
		resolveInScheme: HookMap<
			AsyncSeriesBailHook<[ResourceDataWithData, ResolveData], true | void>
		>;
		factorize: AsyncSeriesBailHook<[ResolveData], undefined | Module>;
		beforeResolve: AsyncSeriesBailHook<[ResolveData], false | void>;
		afterResolve: AsyncSeriesBailHook<[ResolveData], false | void>;
		createModule: AsyncSeriesBailHook<
			[
				Partial<NormalModuleCreateData & { settings: ModuleSettings }>,
				ResolveData
			],
			void | Module
		>;
		module: SyncWaterfallHook<
			[
				Module,
				Partial<NormalModuleCreateData & { settings: ModuleSettings }>,
				ResolveData
			],
			Module
		>;
		createParser: TypedHookMap<
			Record<
				"javascript/auto",
				SyncBailHook<[JavascriptParserOptions], JavascriptParser>
			> &
				Record<
					"javascript/dynamic",
					SyncBailHook<[JavascriptParserOptions], JavascriptParser>
				> &
				Record<
					"javascript/esm",
					SyncBailHook<[JavascriptParserOptions], JavascriptParser>
				> &
				Record<"json", SyncBailHook<[JsonParserOptions], JsonParser>> &
				Record<"asset", SyncBailHook<[AssetParserOptions], AssetParser>> &
				Record<
					"asset/inline",
					SyncBailHook<[EmptyParserOptions], AssetParser>
				> &
				Record<
					"asset/resource",
					SyncBailHook<[EmptyParserOptions], AssetParser>
				> &
				Record<
					"asset/source",
					SyncBailHook<[EmptyParserOptions], AssetSourceParser>
				> &
				Record<
					"asset/bytes",
					SyncBailHook<[EmptyParserOptions], AssetBytesParser>
				> &
				Record<
					"webassembly/async",
					SyncBailHook<[EmptyParserOptions], AsyncWebAssemblyParser>
				> &
				Record<
					"webassembly/sync",
					SyncBailHook<[EmptyParserOptions], WebAssemblyParser>
				> &
				Record<"css", SyncBailHook<[CssParserOptions], CssParser>> &
				Record<"css/auto", SyncBailHook<[CssModuleParserOptions], CssParser>> &
				Record<
					"css/module",
					SyncBailHook<[CssModuleParserOptions], CssParser>
				> &
				Record<
					"css/global",
					SyncBailHook<[CssModuleParserOptions], CssParser>
				> &
				Record<string, SyncBailHook<[ParserOptions], ParserClass>>
		>;
		parser: TypedHookMap<
			Record<
				"javascript/auto",
				SyncBailHook<[JavascriptParser, JavascriptParserOptions], void>
			> &
				Record<
					"javascript/dynamic",
					SyncBailHook<[JavascriptParser, JavascriptParserOptions], void>
				> &
				Record<
					"javascript/esm",
					SyncBailHook<[JavascriptParser, JavascriptParserOptions], void>
				> &
				Record<"json", SyncBailHook<[JsonParser, JsonParserOptions], void>> &
				Record<"asset", SyncBailHook<[AssetParser, AssetParserOptions], void>> &
				Record<
					"asset/inline",
					SyncBailHook<[AssetParser, EmptyParserOptions], void>
				> &
				Record<
					"asset/resource",
					SyncBailHook<[AssetParser, EmptyParserOptions], void>
				> &
				Record<
					"asset/source",
					SyncBailHook<[AssetSourceParser, EmptyParserOptions], void>
				> &
				Record<
					"asset/bytes",
					SyncBailHook<[AssetBytesParser, EmptyParserOptions], void>
				> &
				Record<
					"webassembly/async",
					SyncBailHook<[AsyncWebAssemblyParser, EmptyParserOptions], void>
				> &
				Record<
					"webassembly/sync",
					SyncBailHook<[WebAssemblyParser, EmptyParserOptions], void>
				> &
				Record<"css", SyncBailHook<[CssParser, CssParserOptions], void>> &
				Record<
					"css/auto",
					SyncBailHook<[CssParser, CssModuleParserOptions], void>
				> &
				Record<
					"css/module",
					SyncBailHook<[CssParser, CssModuleParserOptions], void>
				> &
				Record<
					"css/global",
					SyncBailHook<[CssParser, CssModuleParserOptions], void>
				> &
				Record<string, SyncBailHook<[ParserClass, ParserOptions], void>>
		>;
		createGenerator: TypedHookMap<
			Record<
				"javascript/auto",
				SyncBailHook<[EmptyGeneratorOptions], JavascriptGenerator>
			> &
				Record<
					"javascript/dynamic",
					SyncBailHook<[EmptyGeneratorOptions], JavascriptGenerator>
				> &
				Record<
					"javascript/esm",
					SyncBailHook<[EmptyGeneratorOptions], JavascriptGenerator>
				> &
				Record<"json", SyncBailHook<[JsonGeneratorOptions], JsonGenerator>> &
				Record<"asset", SyncBailHook<[AssetGeneratorOptions], AssetGenerator>> &
				Record<
					"asset/inline",
					SyncBailHook<[AssetGeneratorOptions], AssetGenerator>
				> &
				Record<
					"asset/resource",
					SyncBailHook<[AssetGeneratorOptions], AssetGenerator>
				> &
				Record<
					"asset/source",
					SyncBailHook<[EmptyGeneratorOptions], AssetSourceGenerator>
				> &
				Record<
					"asset/bytes",
					SyncBailHook<[EmptyGeneratorOptions], AssetBytesGenerator>
				> &
				Record<
					"webassembly/async",
					SyncBailHook<[EmptyParserOptions], Generator>
				> &
				Record<
					"webassembly/sync",
					SyncBailHook<[EmptyParserOptions], Generator>
				> &
				Record<"css", SyncBailHook<[CssGeneratorOptions], CssGenerator>> &
				Record<
					"css/auto",
					SyncBailHook<[CssModuleGeneratorOptions], CssGenerator>
				> &
				Record<
					"css/module",
					SyncBailHook<[CssModuleGeneratorOptions], CssGenerator>
				> &
				Record<
					"css/global",
					SyncBailHook<[CssModuleGeneratorOptions], CssGenerator>
				> &
				Record<string, SyncBailHook<[GeneratorOptions], Generator>>
		>;
		generator: TypedHookMap<
			Record<
				"javascript/auto",
				SyncBailHook<[JavascriptGenerator, EmptyGeneratorOptions], void>
			> &
				Record<
					"javascript/dynamic",
					SyncBailHook<[JavascriptGenerator, EmptyGeneratorOptions], void>
				> &
				Record<
					"javascript/esm",
					SyncBailHook<[JavascriptGenerator, EmptyGeneratorOptions], void>
				> &
				Record<
					"json",
					SyncBailHook<[JsonGenerator, JsonGeneratorOptions], void>
				> &
				Record<
					"asset",
					SyncBailHook<[AssetGenerator, AssetGeneratorOptions], void>
				> &
				Record<
					"asset/inline",
					SyncBailHook<[AssetGenerator, AssetGeneratorOptions], void>
				> &
				Record<
					"asset/resource",
					SyncBailHook<[AssetGenerator, AssetGeneratorOptions], void>
				> &
				Record<
					"asset/source",
					SyncBailHook<[AssetSourceGenerator, EmptyGeneratorOptions], void>
				> &
				Record<
					"asset/bytes",
					SyncBailHook<[AssetBytesGenerator, EmptyGeneratorOptions], void>
				> &
				Record<
					"webassembly/async",
					SyncBailHook<[Generator, EmptyParserOptions], void>
				> &
				Record<
					"webassembly/sync",
					SyncBailHook<[Generator, EmptyParserOptions], void>
				> &
				Record<"css", SyncBailHook<[CssGenerator, CssGeneratorOptions], void>> &
				Record<
					"css/auto",
					SyncBailHook<[CssGenerator, CssModuleGeneratorOptions], void>
				> &
				Record<
					"css/module",
					SyncBailHook<[CssGenerator, CssModuleGeneratorOptions], void>
				> &
				Record<
					"css/global",
					SyncBailHook<[CssGenerator, CssModuleGeneratorOptions], void>
				> &
				Record<string, SyncBailHook<[Generator, GeneratorOptions], void>>
		>;
		createModuleClass: HookMap<
			SyncBailHook<
				[
					Partial<NormalModuleCreateData & { settings: ModuleSettings }>,
					ResolveData
				],
				void | Module
			>
		>;
	}>;
	resolverFactory: ResolverFactory;
	ruleSet: RuleSet;
	context: string;
	fs: InputFileSystem;
	parserCache: Map<string, WeakMap<ParserOptions, ParserClass>>;
	generatorCache: Map<string, WeakMap<GeneratorOptions, Generator>>;
	cleanupForCache(): void;

	/**
	 * Processes the provided context info.
	 */
	resolveResource(
		contextInfo: ModuleFactoryCreateDataContextInfo,
		context: string,
		unresolvedResource: string,
		resolver: ResolverWithOptions,
		resolveContext: ResolveContext,
		callback: (
			err: null | Error,
			res?: string | false,
			req?: ResolveRequest
		) => void
	): void;

	/**
	 * Resolves request array.
	 */
	resolveRequestArray(
		contextInfo: ModuleFactoryCreateDataContextInfo,
		context: string,
		array: LoaderItem[],
		resolver: ResolverWithOptions,
		resolveContext: ResolveContext,
		callback: CallbackWebpackFunction_1<LoaderItem[]>
	): void;

	/**
	 * Returns parser.
	 */
	getParser(type: string, parserOptions?: ParserOptions): ParserClass;

	/**
	 * Creates a parser from the provided type.
	 */
	createParser(type: string, parserOptions?: ParserOptions): ParserClass;

	/**
	 * Returns generator.
	 */
	getGenerator(type: string, generatorOptions?: GeneratorOptions): Generator;

	/**
	 * Creates a generator.
	 */
	createGenerator(type: string, generatorOptions?: GeneratorOptions): Generator;

	/**
	 * Returns the resolver.
	 */
	getResolver(
		type: string,
		resolveOptions?: ResolveOptionsWithDependencyType
	): ResolverWithOptions;
}

/**
 * These properties are added by the NormalModule
 */
declare interface NormalModuleLoaderContext<OptionsType> {
	version: number;
	getOptions(): OptionsType;
	getOptions(schema: Parameters<typeof validateFunction>[0]): OptionsType;
	emitWarning(warning: Error): void;
	emitError(error: Error): void;
	getLogger(name?: string): WebpackLogger;
	resolve(
		context: string,
		request: string,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest
		) => void
	): void;
	getResolve(options?: ResolveOptionsWithDependencyType): {
		(
			context: string,
			request: string,
			callback: (
				err: null | ErrorWithDetail,
				res?: string | false,
				req?: ResolveRequest
			) => void
		): void;
		(context: string, request: string): Promise<string>;
	};
	emitFile(
		name: string,
		content: string | Buffer,
		sourceMap?: string,
		assetInfo?: AssetInfo
	): void;
	addBuildDependency(dep: string): void;
	utils: {
		absolutify: (context: string, request: string) => string;
		contextify: (context: string, request: string) => string;
		createHash: (algorithm?: string | typeof Hash) => Hash;
	};
	rootContext: string;
	fs: InputFileSystem;
	sourceMap?: boolean;
	mode: "none" | "development" | "production";
	webpack?: boolean;
	hashFunction: HashFunction;
	hashDigest: string;
	hashDigestLength: number;
	hashSalt?: string;
	_module?: NormalModule;
	_compilation?: Compilation;
	_compiler?: Compiler;
}
declare class NormalModuleReplacementPlugin {
	/**
	 * Create an instance of the plugin
	 */
	constructor(
		resourceRegExp: RegExp,
		newResource: string | ((resolveData: ResolveData) => void)
	);
	resourceRegExp: RegExp;
	newResource: string | ((resolveData: ResolveData) => void);

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare abstract class NormalReexportItem {
	name: string;
	ids: string[];
	exportInfo: ExportInfo;
	checked: boolean;
	hidden: boolean;
}
declare interface NormalizedModules {
	[index: string]: VirtualModule;
}
type NormalizedStatsOptions = KnownNormalizedStatsOptions &
	Omit<
		StatsOptions,
		| "context"
		| "chunkGroups"
		| "requestShortener"
		| "chunksSort"
		| "modulesSort"
		| "chunkModulesSort"
		| "nestedModulesSort"
		| "assetsSort"
		| "ids"
		| "cachedAssets"
		| "groupAssetsByEmitStatus"
		| "groupAssetsByPath"
		| "groupAssetsByExtension"
		| "assetsSpace"
		| "excludeAssets"
		| "excludeModules"
		| "warningsFilter"
		| "cachedModules"
		| "orphanModules"
		| "dependentModules"
		| "runtimeModules"
		| "groupModulesByCacheStatus"
		| "groupModulesByLayer"
		| "groupModulesByAttributes"
		| "groupModulesByPath"
		| "groupModulesByExtension"
		| "groupModulesByType"
		| "entrypoints"
		| "chunkGroupAuxiliary"
		| "chunkGroupChildren"
		| "chunkGroupMaxAssets"
		| "modulesSpace"
		| "chunkModulesSpace"
		| "nestedModulesSpace"
		| "logging"
		| "loggingDebug"
		| "loggingTrace"
		| "_env"
	> &
	Record<string, any>;
declare class NullDependency extends Dependency {
	constructor();
	static Template: typeof NullDependencyTemplate;
	static NO_EXPORTS_REFERENCED: string[][];
	static EXPORTS_OBJECT_REFERENCED: string[][];

	/**
	 * Returns true if the dependency is a low priority dependency.
	 */
	static isLowPriorityDependency(dependency: Dependency): boolean;
	static TRANSITIVE: symbol;
}
declare class NullDependencyTemplate extends DependencyTemplate {
	constructor();
}
declare interface ObjectConfiguration {
	[index: string]: any;
}

/**
 * Updates set size using the provided set.
 */
declare interface ObjectDeserializerContext {
	read: () => any;
	setCircularReference: (value: ReferenceableItem) => void;
}

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface ObjectEncodingOptionsFs {
	encoding?:
		| null
		| "ascii"
		| "utf8"
		| "utf-8"
		| "utf16le"
		| "utf-16le"
		| "ucs2"
		| "ucs-2"
		| "base64"
		| "base64url"
		| "latin1"
		| "binary"
		| "hex";
}
declare interface ObjectEncodingOptionsTypes {
	/**
	 * encoding
	 */
	encoding?:
		| null
		| "ascii"
		| "utf8"
		| "utf-8"
		| "utf16le"
		| "utf-16le"
		| "ucs2"
		| "ucs-2"
		| "base64"
		| "base64url"
		| "latin1"
		| "binary"
		| "hex";
}

/**
 * Updates set size using the provided set.
 */
declare interface ObjectSerializer {
	serialize: (value: any, context: ObjectSerializerContext) => void;
	deserialize: (context: ObjectDeserializerContext) => any;
}

/**
 * Updates set size using the provided set.
 */
declare interface ObjectSerializerContext {
	write: (value?: any) => void;
	setCircularReference: (value: ReferenceableItem) => void;
	snapshot: () => ObjectSerializerSnapshot;
	rollback: (snapshot: ObjectSerializerSnapshot) => void;
	writeLazy?: (item?: any) => void;
	writeSeparate?: (
		item: any,
		obj?: LazyOptions
	) => LazyFunction<any, any, any, LazyOptions>;
}

/**
 * Updates set size using the provided set.
 */
declare interface ObjectSerializerSnapshot {
	length: number;
	cycleStackSize: number;
	referenceableSize: number;
	currentPos: number;
	objectTypeLookupSize: number;
	currentPosTypeLookup: number;
}
declare class OccurrenceChunkIdsPlugin {
	/**
	 * Creates an instance of OccurrenceChunkIdsPlugin.
	 */
	constructor(options?: OccurrenceChunkIdsPluginOptions);
	options: OccurrenceChunkIdsPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface OccurrenceChunkIdsPluginOptions {
	/**
	 * Prioritise initial size over total size.
	 */
	prioritiseInitial?: boolean;
}
declare class OccurrenceModuleIdsPlugin {
	/**
	 * Creates an instance of OccurrenceModuleIdsPlugin.
	 */
	constructor(options?: OccurrenceModuleIdsPluginOptions);
	options: OccurrenceModuleIdsPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface OccurrenceModuleIdsPluginOptions {
	/**
	 * Prioritise initial size over total size.
	 */
	prioritiseInitial?: boolean;
}
declare interface OnlySafeTimeEntry {
	safeTime: number;
}
declare interface Open {
	(
		file: PathLikeFs,
		flags: undefined | string | number,
		mode: undefined | null | string | number,
		callback: (err: null | NodeJS.ErrnoException, result?: number) => void
	): void;
	(
		file: PathLikeFs,
		flags: undefined | string | number,
		callback: (err: null | NodeJS.ErrnoException, result?: number) => void
	): void;
	(
		file: PathLikeFs,
		callback: (err: null | NodeJS.ErrnoException, result?: number) => void
	): void;
}

/**
 * Enables/Disables integrated optimizations.
 */
declare interface Optimization {
	/**
	 * Avoid wrapping the entry module in an IIFE.
	 */
	avoidEntryIife?: boolean;

	/**
	 * Check for incompatible wasm types when importing/exporting from/to ESM.
	 */
	checkWasmTypes?: boolean;

	/**
	 * Define the algorithm to choose chunk ids (named: readable ids for better debugging, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, total-size: numeric ids focused on minimal total download size, false: no algorithm used, as custom one can be provided via plugin).
	 */
	chunkIds?:
		| false
		| "natural"
		| "named"
		| "deterministic"
		| "size"
		| "total-size";

	/**
	 * Concatenate modules when possible to generate less modules, more efficient code and enable more optimizations by the minimizer.
	 */
	concatenateModules?: boolean;

	/**
	 * Emit assets even when errors occur. Critical errors are emitted into the generated code and will cause errors at runtime.
	 */
	emitOnErrors?: boolean;

	/**
	 * Also flag chunks as loaded which contain a subset of the modules.
	 */
	flagIncludedChunks?: boolean;

	/**
	 * Creates a module-internal dependency graph for top level symbols, exports and imports, to improve unused exports detection.
	 */
	innerGraph?: boolean;

	/**
	 * Rename exports when possible to generate shorter code (depends on optimization.usedExports and optimization.providedExports, true/"deterministic": generate short deterministic names optimized for caching, "size": generate the shortest possible names).
	 */
	mangleExports?: boolean | "deterministic" | "size";

	/**
	 * Reduce size of WASM by changing imports to shorter strings.
	 */
	mangleWasmImports?: boolean;

	/**
	 * Merge chunks which contain the same modules.
	 */
	mergeDuplicateChunks?: boolean;

	/**
	 * Enable minimizing the output. Uses optimization.minimizer.
	 */
	minimize?: boolean;

	/**
	 * Minimizer(s) to use for minimizing the output.
	 */
	minimizer?: (
		| undefined
		| null
		| false
		| ""
		| 0
		| ((this: Compiler, compiler: Compiler) => void)
		| WebpackPluginInstance
		| "..."
	)[];

	/**
	 * Define the algorithm to choose module ids (natural: numeric ids in order of usage, named: readable ids for better debugging, hashed: (deprecated) short hashes as ids for better long term caching, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, false: no algorithm used, as custom one can be provided via plugin).
	 */
	moduleIds?: false | "natural" | "named" | "deterministic" | "size" | "hashed";

	/**
	 * Avoid emitting assets when errors occur (deprecated: use 'emitOnErrors' instead).
	 * @deprecated
	 */
	noEmitOnErrors?: boolean;

	/**
	 * Set process.env.NODE_ENV to a specific value.
	 */
	nodeEnv?: string | false;

	/**
	 * Generate records with relative paths to be able to move the context folder.
	 */
	portableRecords?: boolean;

	/**
	 * Figure out which exports are provided by modules to generate more efficient code.
	 */
	providedExports?: boolean;

	/**
	 * Use real [contenthash] based on final content of the assets.
	 */
	realContentHash?: boolean;

	/**
	 * Removes modules from chunks when these modules are already included in all parents.
	 */
	removeAvailableModules?: boolean;

	/**
	 * Remove chunks which are empty.
	 */
	removeEmptyChunks?: boolean;

	/**
	 * Create an additional chunk which contains only the webpack runtime and chunk hash maps.
	 */
	runtimeChunk?:
		| boolean
		| "single"
		| "multiple"
		| {
				/**
				 * The name or name factory for the runtime chunks.
				 */
				name?: string | ((entrypoint: { name: string }) => string);
		  };

	/**
	 * Skip over modules which contain no side effects when exports are not used (false: disabled, 'flag': only use manually placed side effects flag, true: also analyse source code for side effects).
	 */
	sideEffects?: boolean | "flag";

	/**
	 * Optimize duplication and caching by splitting chunks by shared modules and cache group.
	 */
	splitChunks?: false | OptimizationSplitChunksOptions;

	/**
	 * Figure out which exports are used by modules to mangle export names, omit unused exports and generate more efficient code (true: analyse used exports for each runtime, "global": analyse exports globally for all runtimes combined).
	 */
	usedExports?: boolean | "global";
}

/**
 * Enables/Disables integrated optimizations.
 */
declare interface OptimizationNormalized {
	/**
	 * Avoid wrapping the entry module in an IIFE.
	 */
	avoidEntryIife?: boolean;

	/**
	 * Check for incompatible wasm types when importing/exporting from/to ESM.
	 */
	checkWasmTypes?: boolean;

	/**
	 * Define the algorithm to choose chunk ids (named: readable ids for better debugging, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, total-size: numeric ids focused on minimal total download size, false: no algorithm used, as custom one can be provided via plugin).
	 */
	chunkIds?:
		| false
		| "natural"
		| "named"
		| "deterministic"
		| "size"
		| "total-size";

	/**
	 * Concatenate modules when possible to generate less modules, more efficient code and enable more optimizations by the minimizer.
	 */
	concatenateModules?: boolean;

	/**
	 * Emit assets even when errors occur. Critical errors are emitted into the generated code and will cause errors at runtime.
	 */
	emitOnErrors?: boolean;

	/**
	 * Also flag chunks as loaded which contain a subset of the modules.
	 */
	flagIncludedChunks?: boolean;

	/**
	 * Creates a module-internal dependency graph for top level symbols, exports and imports, to improve unused exports detection.
	 */
	innerGraph?: boolean;

	/**
	 * Rename exports when possible to generate shorter code (depends on optimization.usedExports and optimization.providedExports, true/"deterministic": generate short deterministic names optimized for caching, "size": generate the shortest possible names).
	 */
	mangleExports?: boolean | "deterministic" | "size";

	/**
	 * Reduce size of WASM by changing imports to shorter strings.
	 */
	mangleWasmImports?: boolean;

	/**
	 * Merge chunks which contain the same modules.
	 */
	mergeDuplicateChunks?: boolean;

	/**
	 * Enable minimizing the output. Uses optimization.minimizer.
	 */
	minimize?: boolean;

	/**
	 * Minimizer(s) to use for minimizing the output.
	 */
	minimizer?: (
		| ((this: Compiler, compiler: Compiler) => void)
		| WebpackPluginInstance
		| "..."
	)[];

	/**
	 * Define the algorithm to choose module ids (natural: numeric ids in order of usage, named: readable ids for better debugging, hashed: (deprecated) short hashes as ids for better long term caching, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, false: no algorithm used, as custom one can be provided via plugin).
	 */
	moduleIds?: false | "natural" | "named" | "deterministic" | "size" | "hashed";

	/**
	 * Avoid emitting assets when errors occur (deprecated: use 'emitOnErrors' instead).
	 * @deprecated
	 */
	noEmitOnErrors?: boolean;

	/**
	 * Set process.env.NODE_ENV to a specific value.
	 */
	nodeEnv?: string | false;

	/**
	 * Generate records with relative paths to be able to move the context folder.
	 */
	portableRecords?: boolean;

	/**
	 * Figure out which exports are provided by modules to generate more efficient code.
	 */
	providedExports?: boolean;

	/**
	 * Use real [contenthash] based on final content of the assets.
	 */
	realContentHash?: boolean;

	/**
	 * Removes modules from chunks when these modules are already included in all parents.
	 */
	removeAvailableModules?: boolean;

	/**
	 * Remove chunks which are empty.
	 */
	removeEmptyChunks?: boolean;

	/**
	 * Create an additional chunk which contains only the webpack runtime and chunk hash maps.
	 */
	runtimeChunk?:
		| false
		| {
				/**
				 * The name factory for the runtime chunks.
				 */
				name?: (entrypoint: { name: string }) => string;
		  };

	/**
	 * Skip over modules which contain no side effects when exports are not used (false: disabled, 'flag': only use manually placed side effects flag, true: also analyse source code for side effects).
	 */
	sideEffects?: boolean | "flag";

	/**
	 * Optimize duplication and caching by splitting chunks by shared modules and cache group.
	 */
	splitChunks?: false | OptimizationSplitChunksOptions;

	/**
	 * Figure out which exports are used by modules to mangle export names, omit unused exports and generate more efficient code (true: analyse used exports for each runtime, "global": analyse exports globally for all runtimes combined).
	 */
	usedExports?: boolean | "global";
}
type OptimizationNormalizedWithDefaults = OptimizationNormalized & {
	runtimeChunk: NonNullable<
		| undefined
		| false
		| {
				/**
				 * The name factory for the runtime chunks.
				 */
				name?: (entrypoint: { name: string }) => string;
		  }
	>;
	splitChunks: NonNullable<undefined | false | OptimizationSplitChunksOptions>;
	mergeDuplicateChunks: NonNullable<undefined | boolean>;
	removeAvailableModules: NonNullable<undefined | boolean>;
	removeEmptyChunks: NonNullable<undefined | boolean>;
	flagIncludedChunks: NonNullable<undefined | boolean>;
	moduleIds: NonNullable<
		| undefined
		| false
		| "natural"
		| "named"
		| "deterministic"
		| "size"
		| "hashed"
	>;
	chunkIds: NonNullable<
		| undefined
		| false
		| "natural"
		| "named"
		| "deterministic"
		| "size"
		| "total-size"
	>;
	sideEffects: NonNullable<undefined | boolean | "flag">;
	providedExports: NonNullable<undefined | boolean>;
	usedExports: NonNullable<undefined | boolean | "global">;
	mangleExports: NonNullable<undefined | boolean | "deterministic" | "size">;
	innerGraph: NonNullable<undefined | boolean>;
	concatenateModules: NonNullable<undefined | boolean>;
	avoidEntryIife: NonNullable<undefined | boolean>;
	emitOnErrors: NonNullable<undefined | boolean>;
	checkWasmTypes: NonNullable<undefined | boolean>;
	mangleWasmImports: NonNullable<undefined | boolean>;
	portableRecords: NonNullable<undefined | boolean>;
	realContentHash: NonNullable<undefined | boolean>;
	minimize: NonNullable<undefined | boolean>;
	minimizer: (
		| ((this: Compiler, compiler: Compiler) => void)
		| WebpackPluginInstance
		| "..."
	)[];
	nodeEnv: NonNullable<undefined | string | false>;
};

/**
 * Options object for describing behavior of a cache group selecting modules that should be cached together.
 */
declare interface OptimizationSplitChunksCacheGroup {
	/**
	 * Sets the name delimiter for created chunks.
	 */
	automaticNameDelimiter?: string;

	/**
	 * Select chunks for determining cache group content (defaults to "initial", "initial" and "all" requires adding these chunks to the HTML).
	 */
	chunks?:
		| RegExp
		| "all"
		| "initial"
		| "async"
		| ((chunk: Chunk) => undefined | boolean);

	/**
	 * Ignore minimum size, minimum chunks and maximum requests and always create chunks for this cache group.
	 */
	enforce?: boolean;

	/**
	 * Size threshold at which splitting is enforced and other restrictions (minRemainingSize, maxAsyncRequests, maxInitialRequests) are ignored.
	 */
	enforceSizeThreshold?: number | { [index: string]: number };

	/**
	 * Sets the template for the filename for created chunks.
	 */
	filename?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Sets the hint for chunk id.
	 */
	idHint?: string;

	/**
	 * Assign modules to a cache group by module layer.
	 */
	layer?: string | RegExp | ((layer: null | string) => boolean);

	/**
	 * Maximum number of requests which are accepted for on-demand loading.
	 */
	maxAsyncRequests?: number;

	/**
	 * Maximal size hint for the on-demand chunks.
	 */
	maxAsyncSize?: number | { [index: string]: number };

	/**
	 * Maximum number of initial chunks which are accepted for an entry point.
	 */
	maxInitialRequests?: number;

	/**
	 * Maximal size hint for the initial chunks.
	 */
	maxInitialSize?: number | { [index: string]: number };

	/**
	 * Maximal size hint for the created chunks.
	 */
	maxSize?: number | { [index: string]: number };

	/**
	 * Minimum number of times a module has to be duplicated until it's considered for splitting.
	 */
	minChunks?: number;

	/**
	 * Minimal size for the chunks the stay after moving the modules to a new chunk.
	 */
	minRemainingSize?: number | { [index: string]: number };

	/**
	 * Minimal size for the created chunk.
	 */
	minSize?: number | { [index: string]: number };

	/**
	 * Minimum size reduction due to the created chunk.
	 */
	minSizeReduction?: number | { [index: string]: number };

	/**
	 * Give chunks for this cache group a name (chunks with equal name are merged).
	 */
	name?:
		| string
		| false
		| ((module: Module, chunks: Chunk[], key: string) => undefined | string);

	/**
	 * Priority of this cache group.
	 */
	priority?: number;

	/**
	 * Try to reuse existing chunk (with name) when it has matching modules.
	 */
	reuseExistingChunk?: boolean;

	/**
	 * Assign modules to a cache group by module name.
	 */
	test?:
		| string
		| RegExp
		| ((module: Module, context: CacheGroupsContext) => boolean);

	/**
	 * Assign modules to a cache group by module type.
	 */
	type?: string | RegExp | ((type: string) => boolean);

	/**
	 * Compare used exports when checking common modules. Modules will only be put in the same chunk when exports are equal.
	 */
	usedExports?: boolean;
}

/**
 * Options object for splitting chunks into smaller chunks.
 */
declare interface OptimizationSplitChunksOptions {
	/**
	 * Sets the name delimiter for created chunks.
	 */
	automaticNameDelimiter?: string;

	/**
	 * Assign modules to a cache group (modules from different cache groups are tried to keep in separate chunks, default categories: 'default', 'defaultVendors').
	 */
	cacheGroups?: {
		[index: string]:
			| string
			| false
			| RegExp
			| ((
					module: Module
			  ) =>
					| void
					| OptimizationSplitChunksCacheGroup
					| OptimizationSplitChunksCacheGroup[])
			| OptimizationSplitChunksCacheGroup;
	};

	/**
	 * Select chunks for determining shared modules (defaults to "async", "initial" and "all" requires adding these chunks to the HTML).
	 */
	chunks?:
		| RegExp
		| "all"
		| "initial"
		| "async"
		| ((chunk: Chunk) => undefined | boolean);

	/**
	 * Sets the size types which are used when a number is used for sizes.
	 */
	defaultSizeTypes?: string[];

	/**
	 * Size threshold at which splitting is enforced and other restrictions (minRemainingSize, maxAsyncRequests, maxInitialRequests) are ignored.
	 */
	enforceSizeThreshold?: number | { [index: string]: number };

	/**
	 * Options for modules not selected by any other cache group.
	 */
	fallbackCacheGroup?: {
		/**
		 * Sets the name delimiter for created chunks.
		 */
		automaticNameDelimiter?: string;
		/**
		 * Select chunks for determining shared modules (defaults to "async", "initial" and "all" requires adding these chunks to the HTML).
		 */
		chunks?:
			| RegExp
			| "all"
			| "initial"
			| "async"
			| ((chunk: Chunk) => undefined | boolean);
		/**
		 * Maximal size hint for the on-demand chunks.
		 */
		maxAsyncSize?: number | { [index: string]: number };
		/**
		 * Maximal size hint for the initial chunks.
		 */
		maxInitialSize?: number | { [index: string]: number };
		/**
		 * Maximal size hint for the created chunks.
		 */
		maxSize?: number | { [index: string]: number };
		/**
		 * Minimal size for the created chunk.
		 */
		minSize?: number | { [index: string]: number };
		/**
		 * Minimum size reduction due to the created chunk.
		 */
		minSizeReduction?: number | { [index: string]: number };
	};

	/**
	 * Sets the template for the filename for created chunks.
	 */
	filename?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Prevents exposing path info when creating names for parts splitted by maxSize.
	 */
	hidePathInfo?: boolean;

	/**
	 * Maximum number of requests which are accepted for on-demand loading.
	 */
	maxAsyncRequests?: number;

	/**
	 * Maximal size hint for the on-demand chunks.
	 */
	maxAsyncSize?: number | { [index: string]: number };

	/**
	 * Maximum number of initial chunks which are accepted for an entry point.
	 */
	maxInitialRequests?: number;

	/**
	 * Maximal size hint for the initial chunks.
	 */
	maxInitialSize?: number | { [index: string]: number };

	/**
	 * Maximal size hint for the created chunks.
	 */
	maxSize?: number | { [index: string]: number };

	/**
	 * Minimum number of times a module has to be duplicated until it's considered for splitting.
	 */
	minChunks?: number;

	/**
	 * Minimal size for the chunks the stay after moving the modules to a new chunk.
	 */
	minRemainingSize?: number | { [index: string]: number };

	/**
	 * Minimal size for the created chunks.
	 */
	minSize?: number | { [index: string]: number };

	/**
	 * Minimum size reduction due to the created chunk.
	 */
	minSizeReduction?: number | { [index: string]: number };

	/**
	 * Give chunks created a name (chunks with equal name are merged).
	 */
	name?:
		| string
		| false
		| ((module: Module, chunks: Chunk[], key: string) => undefined | string);

	/**
	 * Compare used exports when checking common modules. Modules will only be put in the same chunk when exports are equal.
	 */
	usedExports?: boolean;
}
declare interface Options {
	/**
	 * source
	 */
	source: string;

	/**
	 * absolute context path to which lib ident is relative to
	 */
	context: string;

	/**
	 * content
	 */
	content: DllReferencePluginOptionsContent;

	/**
	 * type
	 */
	type?: "object" | "require";

	/**
	 * extensions
	 */
	extensions?: string[];

	/**
	 * scope
	 */
	scope?: string;

	/**
	 * object for caching
	 */
	associatedObjectForCache?: object;
}
declare abstract class OptionsApply {
	/**
	 * Returns options object.
	 */
	process(
		options: WebpackOptionsNormalizedWithDefaults,
		compiler: Compiler,
		interception?: WebpackOptionsInterception
	): WebpackOptionsNormalizedWithDefaults;
}
declare interface OriginRecord {
	module: null | Module;
	loc: DependencyLocation;
	request: string;
}
declare class OriginalSource extends Source {
	constructor(value: string | Buffer, name: string);
	getName(): string;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string
		) => void,
		_onName: (nameIndex: number, name: string) => void
	): GeneratedSourceInfo;
}

/**
 * Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
 */
declare interface Output {
	/**
	 * Add a container for define/require functions in the AMD module.
	 */
	amdContainer?: string;

	/**
	 * The filename of asset modules as relative path inside the 'output.path' directory.
	 */
	assetModuleFilename?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Enable/disable creating async chunks that are loaded on demand.
	 */
	asyncChunks?: boolean;

	/**
	 * Add a comment in the UMD wrapper.
	 */
	auxiliaryComment?: string | LibraryCustomUmdCommentObject;

	/**
	 * Add charset attribute for script tag.
	 */
	charset?: boolean;

	/**
	 * Specifies the filename template of output files of non-initial chunks on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	chunkFilename?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * The format of chunks (formats included by default are 'array-push' (web/WebWorker), 'commonjs' (node.js), 'module' (ESM), but others might be added by plugins).
	 */
	chunkFormat?: string | false;

	/**
	 * Number of milliseconds before chunk request expires.
	 */
	chunkLoadTimeout?: number;

	/**
	 * The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins).
	 */
	chunkLoading?: string | false;

	/**
	 * The global variable used by webpack for loading of chunks.
	 */
	chunkLoadingGlobal?: string;

	/**
	 * Clean the output directory before emit.
	 */
	clean?: boolean | CleanOptions;

	/**
	 * Check if to be emitted file already exists and have the same content before writing to output filesystem.
	 */
	compareBeforeEmit?: boolean;

	/**
	 * This option enables cross-origin loading of chunks.
	 */
	crossOriginLoading?: false | "anonymous" | "use-credentials";

	/**
	 * Specifies the filename template of non-initial output css files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	cssChunkFilename?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Specifies the filename template of output css files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	cssFilename?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Similar to `output.devtoolModuleFilenameTemplate`, but used in the case of duplicate module identifiers.
	 */
	devtoolFallbackModuleFilenameTemplate?:
		| string
		| ((context: ModuleFilenameTemplateContext) => string);

	/**
	 * Filename template string of function for the sources array in a generated SourceMap.
	 */
	devtoolModuleFilenameTemplate?:
		| string
		| ((context: ModuleFilenameTemplateContext) => string);

	/**
	 * Module namespace to use when interpolating filename template string for the sources array in a generated SourceMap. Defaults to `output.library` if not set. It's useful for avoiding runtime collisions in sourcemaps from multiple webpack projects built as libraries.
	 */
	devtoolNamespace?: string;

	/**
	 * List of chunk loading types enabled for use by entry points.
	 */
	enabledChunkLoadingTypes?: string[];

	/**
	 * List of library types enabled for use by entry points.
	 */
	enabledLibraryTypes?: string[];

	/**
	 * List of wasm loading types enabled for use by entry points.
	 */
	enabledWasmLoadingTypes?: string[];

	/**
	 * The abilities of the environment where the webpack generated code should run.
	 */
	environment?: Environment;

	/**
	 * Specifies the filename of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	filename?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * An expression which is used to address the global object/scope in runtime code.
	 */
	globalObject?: string;

	/**
	 * Digest types used for the hash.
	 */
	hashDigest?: string;

	/**
	 * Number of chars which are used for the hash.
	 */
	hashDigestLength?: number;

	/**
	 * Algorithm used for generation the hash (see node.js crypto package).
	 */
	hashFunction?: string | typeof Hash;

	/**
	 * Any string which is added to the hash to salt it.
	 */
	hashSalt?: string;

	/**
	 * The filename of the Hot Update Chunks. They are inside the output.path directory.
	 */
	hotUpdateChunkFilename?: string;

	/**
	 * The global variable used by webpack for loading of hot update chunks.
	 */
	hotUpdateGlobal?: string;

	/**
	 * The filename of the Hot Update Main File. It is inside the 'output.path' directory.
	 */
	hotUpdateMainFilename?: string;

	/**
	 * Ignore warnings in the browser.
	 */
	ignoreBrowserWarnings?: boolean;

	/**
	 * Wrap javascript code into IIFE's to avoid leaking into global scope.
	 */
	iife?: boolean;

	/**
	 * The name of the native import() function (can be exchanged for a polyfill).
	 */
	importFunctionName?: string;

	/**
	 * The name of the native import.meta object (can be exchanged for a polyfill).
	 */
	importMetaName?: string;

	/**
	 * Make the output files a library, exporting the exports of the entry point.
	 */
	library?: string | string[] | LibraryOptions | LibraryCustomUmdObject;

	/**
	 * Specify which export should be exposed as library.
	 */
	libraryExport?: string | string[];

	/**
	 * Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins).
	 */
	libraryTarget?: string;

	/**
	 * Output javascript files as module source type.
	 */
	module?: boolean;

	/**
	 * The output directory as **absolute path** (required).
	 */
	path?: string;

	/**
	 * Include comments with information about the modules.
	 */
	pathinfo?: boolean | "verbose";

	/**
	 * The 'publicPath' specifies the public URL address of the output files when referenced in a browser.
	 */
	publicPath?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * This option enables loading async chunks via a custom script type, such as script type="module".
	 */
	scriptType?: false | "module" | "text/javascript";

	/**
	 * The filename of the SourceMaps for the JavaScript files. They are inside the 'output.path' directory.
	 */
	sourceMapFilename?: string;

	/**
	 * Prefixes every line of the source in the bundle with this string.
	 */
	sourcePrefix?: string;

	/**
	 * Handles error in module loading correctly at a performance cost. This will handle module error compatible with the EcmaScript Modules spec.
	 */
	strictModuleErrorHandling?: boolean;

	/**
	 * Handles exceptions in module loading correctly at a performance cost (Deprecated). This will handle module error compatible with the Node.js CommonJS way.
	 * @deprecated
	 */
	strictModuleExceptionHandling?: boolean;

	/**
	 * Use a Trusted Types policy to create urls for chunks. 'output.uniqueName' is used a default policy name. Passing a string sets a custom policy name.
	 */
	trustedTypes?: string | true | TrustedTypes;

	/**
	 * If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.
	 */
	umdNamedDefine?: boolean;

	/**
	 * A unique name of the webpack build to avoid multiple webpack runtimes to conflict when using globals.
	 */
	uniqueName?: string;

	/**
	 * The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins).
	 */
	wasmLoading?: string | false;

	/**
	 * The filename of WebAssembly modules as relative path inside the 'output.path' directory.
	 */
	webassemblyModuleFilename?: string;

	/**
	 * The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins).
	 */
	workerChunkLoading?: string | false;

	/**
	 * Worker public path. Much like the public path, this sets the location where the worker script file is intended to be found. If not set, webpack will use the publicPath. Don't set this option unless your worker scripts are located at a different path from your other script files.
	 */
	workerPublicPath?: string;

	/**
	 * The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins).
	 */
	workerWasmLoading?: string | false;
}

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface OutputFileSystem {
	mkdir: Mkdir;
	readdir?: ReaddirFs;
	rmdir?: (
		file: PathLikeFs,
		callback: (err: null | NodeJS.ErrnoException) => void
	) => void;
	writeFile: WriteFile;
	unlink?: (
		pathLike: PathLikeFs,
		callback: (err: null | NodeJS.ErrnoException) => void
	) => void;
	stat: StatFs;
	lstat?: LStatFs;
	readFile: ReadFileFs;
	createReadStream?: (
		path: PathLikeFs,
		options?:
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| ReadStreamOptions
	) => NodeJS.ReadableStream;
	join?: (path1: string, path2: string) => string;
	relative?: (from: string, to: string) => string;
	dirname?: (dirname: string) => string;
}

/**
 * Normalized options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
 */
declare interface OutputNormalized {
	/**
	 * The filename of asset modules as relative path inside the 'output.path' directory.
	 */
	assetModuleFilename?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Enable/disable creating async chunks that are loaded on demand.
	 */
	asyncChunks?: boolean;

	/**
	 * Add charset attribute for script tag.
	 */
	charset?: boolean;

	/**
	 * Specifies the filename template of output files of non-initial chunks on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	chunkFilename?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * The format of chunks (formats included by default are 'array-push' (web/WebWorker), 'commonjs' (node.js), 'module' (ESM), but others might be added by plugins).
	 */
	chunkFormat?: string | false;

	/**
	 * Number of milliseconds before chunk request expires.
	 */
	chunkLoadTimeout?: number;

	/**
	 * The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins).
	 */
	chunkLoading?: string | false;

	/**
	 * The global variable used by webpack for loading of chunks.
	 */
	chunkLoadingGlobal?: string;

	/**
	 * Clean the output directory before emit.
	 */
	clean?: boolean | CleanOptions;

	/**
	 * Check if to be emitted file already exists and have the same content before writing to output filesystem.
	 */
	compareBeforeEmit?: boolean;

	/**
	 * This option enables cross-origin loading of chunks.
	 */
	crossOriginLoading?: false | "anonymous" | "use-credentials";

	/**
	 * Specifies the filename template of non-initial output css files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	cssChunkFilename?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Specifies the filename template of output css files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	cssFilename?:
		| string
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Similar to `output.devtoolModuleFilenameTemplate`, but used in the case of duplicate module identifiers.
	 */
	devtoolFallbackModuleFilenameTemplate?:
		| string
		| ((context: ModuleFilenameTemplateContext) => string);

	/**
	 * Filename template string of function for the sources array in a generated SourceMap.
	 */
	devtoolModuleFilenameTemplate?:
		| string
		| ((context: ModuleFilenameTemplateContext) => string);

	/**
	 * Module namespace to use when interpolating filename template string for the sources array in a generated SourceMap. Defaults to `output.library` if not set. It's useful for avoiding runtime collisions in sourcemaps from multiple webpack projects built as libraries.
	 */
	devtoolNamespace?: string;

	/**
	 * List of chunk loading types enabled for use by entry points.
	 */
	enabledChunkLoadingTypes: string[];

	/**
	 * List of library types enabled for use by entry points.
	 */
	enabledLibraryTypes: string[];

	/**
	 * List of wasm loading types enabled for use by entry points.
	 */
	enabledWasmLoadingTypes: string[];

	/**
	 * The abilities of the environment where the webpack generated code should run.
	 */
	environment: Environment;

	/**
	 * Specifies the filename of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.
	 */
	filename?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * An expression which is used to address the global object/scope in runtime code.
	 */
	globalObject?: string;

	/**
	 * Digest types used for the hash.
	 */
	hashDigest?: string;

	/**
	 * Number of chars which are used for the hash.
	 */
	hashDigestLength?: number;

	/**
	 * Algorithm used for generation the hash (see node.js crypto package).
	 */
	hashFunction?: string | typeof Hash;

	/**
	 * Any string which is added to the hash to salt it.
	 */
	hashSalt?: string;

	/**
	 * The filename of the Hot Update Chunks. They are inside the output.path directory.
	 */
	hotUpdateChunkFilename?: string;

	/**
	 * The global variable used by webpack for loading of hot update chunks.
	 */
	hotUpdateGlobal?: string;

	/**
	 * The filename of the Hot Update Main File. It is inside the 'output.path' directory.
	 */
	hotUpdateMainFilename?: string;

	/**
	 * Ignore warnings in the browser.
	 */
	ignoreBrowserWarnings?: boolean;

	/**
	 * Wrap javascript code into IIFE's to avoid leaking into global scope.
	 */
	iife?: boolean;

	/**
	 * The name of the native import() function (can be exchanged for a polyfill).
	 */
	importFunctionName?: string;

	/**
	 * The name of the native import.meta object (can be exchanged for a polyfill).
	 */
	importMetaName?: string;

	/**
	 * Options for library.
	 */
	library?: LibraryOptions;

	/**
	 * Output javascript files as module source type.
	 */
	module?: boolean;

	/**
	 * The output directory as **absolute path** (required).
	 */
	path?: string;

	/**
	 * Include comments with information about the modules.
	 */
	pathinfo?: boolean | "verbose";

	/**
	 * The 'publicPath' specifies the public URL address of the output files when referenced in a browser.
	 */
	publicPath?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * This option enables loading async chunks via a custom script type, such as script type="module".
	 */
	scriptType?: false | "module" | "text/javascript";

	/**
	 * The filename of the SourceMaps for the JavaScript files. They are inside the 'output.path' directory.
	 */
	sourceMapFilename?: string;

	/**
	 * Prefixes every line of the source in the bundle with this string.
	 */
	sourcePrefix?: string;

	/**
	 * Handles error in module loading correctly at a performance cost. This will handle module error compatible with the EcmaScript Modules spec.
	 */
	strictModuleErrorHandling?: boolean;

	/**
	 * Handles exceptions in module loading correctly at a performance cost (Deprecated). This will handle module error compatible with the Node.js CommonJS way.
	 * @deprecated
	 */
	strictModuleExceptionHandling?: boolean;

	/**
	 * Use a Trusted Types policy to create urls for chunks.
	 */
	trustedTypes?: TrustedTypes;

	/**
	 * A unique name of the webpack build to avoid multiple webpack runtimes to conflict when using globals.
	 */
	uniqueName?: string;

	/**
	 * The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins).
	 */
	wasmLoading?: string | false;

	/**
	 * The filename of WebAssembly modules as relative path inside the 'output.path' directory.
	 */
	webassemblyModuleFilename?: string;

	/**
	 * The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins).
	 */
	workerChunkLoading?: string | false;

	/**
	 * Worker public path. Much like the public path, this sets the location where the worker script file is intended to be found. If not set, webpack will use the publicPath. Don't set this option unless your worker scripts are located at a different path from your other script files.
	 */
	workerPublicPath?: string;

	/**
	 * The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins).
	 */
	workerWasmLoading?: string | false;
}
type OutputNormalizedWithDefaults = OutputNormalized & {
	uniqueName: string;
	filename: NonNullable<
		undefined | string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
	>;
	cssFilename: NonNullable<
		undefined | string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
	>;
	chunkFilename: NonNullable<
		undefined | string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
	>;
	cssChunkFilename: NonNullable<
		undefined | string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
	>;
	hotUpdateChunkFilename: string;
	hotUpdateGlobal: string;
	assetModuleFilename: NonNullable<
		undefined | string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
	>;
	webassemblyModuleFilename: string;
	sourceMapFilename: string;
	hotUpdateMainFilename: string;
	devtoolNamespace: string;
	publicPath: NonNullable<
		undefined | string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
	>;
	workerPublicPath: string;
	workerWasmLoading: NonNullable<undefined | string | false>;
	workerChunkLoading: NonNullable<undefined | string | false>;
	chunkFormat: NonNullable<undefined | string | false>;
	module: NonNullable<undefined | boolean>;
	asyncChunks: NonNullable<undefined | boolean>;
	charset: NonNullable<undefined | boolean>;
	iife: NonNullable<undefined | boolean>;
	globalObject: string;
	scriptType: NonNullable<undefined | false | "module" | "text/javascript">;
	path: string;
	pathinfo: NonNullable<undefined | boolean | "verbose">;
	hashFunction: NonNullable<undefined | string | typeof Hash>;
	hashDigest: string;
	hashDigestLength: number;
	chunkLoadTimeout: number;
	chunkLoading: NonNullable<undefined | string | false>;
	chunkLoadingGlobal: string;
	compareBeforeEmit: NonNullable<undefined | boolean>;
	strictModuleErrorHandling: NonNullable<undefined | boolean>;
	strictModuleExceptionHandling: NonNullable<undefined | boolean>;
	importFunctionName: string;
	importMetaName: string;
	environment: RecursiveNonNullable<Environment>;
	crossOriginLoading: NonNullable<
		undefined | false | "anonymous" | "use-credentials"
	>;
	wasmLoading: NonNullable<undefined | string | false>;
};
declare interface ParameterizedComparator<TArg extends object, T> {
	(tArg: TArg): Comparator<T>;
}
declare interface ParseOptions {
	sourceType: "module" | "script";
	ecmaVersion: ecmaVersion;
	locations?: boolean;
	comments?: boolean;
	ranges?: boolean;
	semicolons?: boolean;
	allowHashBang?: boolean;
	allowReturnOutsideFunction?: boolean;
}
declare interface ParseResult {
	ast: Program;
	comments: CommentJavascriptParser[];
	semicolons: Set<number>;
}
declare interface ParsedIdentifier {
	/**
	 * request
	 */
	request: string;

	/**
	 * query
	 */
	query: string;

	/**
	 * fragment
	 */
	fragment: string;

	/**
	 * is directory
	 */
	directory: boolean;

	/**
	 * is module
	 */
	module: boolean;

	/**
	 * is file
	 */
	file: boolean;

	/**
	 * is internal
	 */
	internal: boolean;
}
declare class ParserClass {
	constructor();

	/**
	 * Parses the provided source and updates the parser state.
	 */
	parse(
		source: string | Buffer | PreparsedAst,
		state: ParserState
	): ParserState;
}
declare interface ParserOptions {
	[index: string]: any;
}
type ParserOptionsByModuleType = ParserOptionsByModuleTypeKnown &
	ParserOptionsByModuleTypeUnknown;

/**
 * Specify options for each parser.
 */
declare interface ParserOptionsByModuleTypeKnown {
	/**
	 * Parser options for asset modules.
	 */
	asset?: AssetParserOptions;

	/**
	 * No parser options are supported for this module type.
	 */
	"asset/bytes"?: EmptyParserOptions;

	/**
	 * No parser options are supported for this module type.
	 */
	"asset/inline"?: EmptyParserOptions;

	/**
	 * No parser options are supported for this module type.
	 */
	"asset/resource"?: EmptyParserOptions;

	/**
	 * No parser options are supported for this module type.
	 */
	"asset/source"?: EmptyParserOptions;

	/**
	 * Parser options for css modules.
	 */
	css?: CssParserOptions;

	/**
	 * Parser options for css/module modules.
	 */
	"css/auto"?: CssModuleParserOptions;

	/**
	 * Parser options for css/module modules.
	 */
	"css/global"?: CssModuleParserOptions;

	/**
	 * Parser options for css/module modules.
	 */
	"css/module"?: CssModuleParserOptions;

	/**
	 * Parser options for javascript modules.
	 */
	javascript?: JavascriptParserOptions;

	/**
	 * Parser options for javascript modules.
	 */
	"javascript/auto"?: JavascriptParserOptions;

	/**
	 * Parser options for javascript modules.
	 */
	"javascript/dynamic"?: JavascriptParserOptions;

	/**
	 * Parser options for javascript modules.
	 */
	"javascript/esm"?: JavascriptParserOptions;

	/**
	 * Parser options for JSON modules.
	 */
	json?: JsonParserOptions;
}

/**
 * Specify options for each parser.
 */
declare interface ParserOptionsByModuleTypeUnknown {
	[index: string]: { [index: string]: any };
}
type ParserState = ParserStateBase & Record<string, any>;
declare interface ParserStateBase {
	source: string | Buffer;
	current: NormalModule;
	module: NormalModule;
	compilation: Compilation;
	options: WebpackOptionsNormalizedWithDefaults;
}
declare interface PathData {
	chunkGraph?: ChunkGraph;
	hash?: string;
	hashWithLength?: (length: number) => string;
	chunk?: Chunk | ChunkPathData;
	module?: Module | ModulePathData;
	runtime?: RuntimeSpec;
	filename?: string;
	basename?: string;
	query?: string;
	contentHashType?: string;
	contentHash?: string;
	contentHashWithLength?: (length: number) => string;
	noChunkHash?: boolean;
	url?: string;
	local?: string;
	prepareId?: (id: string | number) => string | number;
}
type PathLikeFs = string | Buffer | URL;
type PathLikeTypes = string | URL_url | Buffer;
type PathOrFileDescriptorFs = string | number | Buffer | URL;
type PathOrFileDescriptorTypes = string | number | Buffer | URL_url;
type Pattern =
	| Identifier
	| MemberExpression
	| ObjectPattern
	| ArrayPattern
	| RestElement
	| AssignmentPattern;

/**
 * Configuration object for web performance recommendations.
 */
declare interface PerformanceOptions {
	/**
	 * Filter function to select assets that are checked.
	 */
	assetFilter?: (name: string, source: Source, assetInfo: AssetInfo) => boolean;

	/**
	 * Sets the format of the hints: warnings, errors or nothing at all.
	 */
	hints?: false | "error" | "warning";

	/**
	 * File size limit (in bytes) when exceeded, that webpack will provide performance hints.
	 */
	maxAssetSize?: number;

	/**
	 * Total size of an entry point (in bytes).
	 */
	maxEntrypointSize?: number;
}
declare interface PitchLoaderDefinitionFunction<
	OptionsType = {},
	ContextAdditions = {}
> {
	(
		this: NormalModuleLoaderContext<OptionsType> &
			LoaderRunnerLoaderContext<OptionsType> &
			LoaderPluginLoaderContext &
			HotModuleReplacementPluginLoaderContext &
			ContextAdditions,
		remainingRequest: string,
		previousRequest: string,
		data: object
	): string | void | Buffer | Promise<string | Buffer>;
}
declare class PlatformPlugin {
	/**
	 * Creates an instance of PlatformPlugin.
	 */
	constructor(platform: Partial<PlatformTargetProperties>);
	platform: Partial<PlatformTargetProperties>;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}

/**
 * Returns check if version is greater or equal.
 */
declare interface PlatformTargetProperties {
	/**
	 * web platform, importing of http(s) and std: is available
	 */
	web?: null | boolean;

	/**
	 * browser platform, running in a normal web browser
	 */
	browser?: null | boolean;

	/**
	 * (Web)Worker platform, running in a web/shared/service worker
	 */
	webworker?: null | boolean;

	/**
	 * node platform, require of node built-in modules is available
	 */
	node?: null | boolean;

	/**
	 * nwjs platform, require of legacy nw.gui is available
	 */
	nwjs?: null | boolean;

	/**
	 * electron platform, require of some electron built-in modules is available
	 */
	electron?: null | boolean;
}
type Plugin =
	| undefined
	| null
	| false
	| ""
	| 0
	| { apply: (this: Resolver, resolver: Resolver) => void }
	| ((this: Resolver, resolver: Resolver) => void);
declare interface PnpApi {
	/**
	 * resolve to unqualified
	 */
	resolveToUnqualified: (
		packageName: string,
		issuer: string,
		options: { considerBuiltins: boolean }
	) => null | string;
}
declare interface Position {
	line: number;
	column: number;
}
declare class PrefetchPlugin {
	/**
	 * Creates an instance of PrefetchPlugin.
	 */
	constructor(context: string, request?: string);
	context: null | string;
	request: string;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare class PrefixSource extends Source {
	constructor(prefix: string, source: string | Buffer | Source);
	getPrefix(): string;
	original(): Source;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string
		) => void,
		onName: (nameIndex: number, name: string) => void
	): GeneratedSourceInfo;
}
declare interface PreparsedAst {
	[index: string]: any;
}
declare interface PrintedElement {
	element: string;
	content?: string;
}

/**
 * Returns object of arguments.
 */
declare interface Problem {
	type: ProblemType;
	path: string;
	argument: string;
	value?: string | number | boolean | RegExp;
	index?: number;
	expected?: string;
}
type ProblemType =
	| "unknown-argument"
	| "unexpected-non-array-in-path"
	| "unexpected-non-object-in-path"
	| "multiple-values-unexpected"
	| "invalid-value";
declare interface ProcessAssetsAdditionalOptions {
	additionalAssets?: boolean | ((assets: CompilationAssets) => void);
}
declare class Profiler {
	/**
	 * Creates an instance of Profiler.
	 */
	constructor(inspector: Inspector);
	session?: SessionImportInspectorClass_2;
	inspector: Inspector;
	hasSession(): boolean;
	startProfiling(): Promise<void> | Promise<[any, any, any]>;

	/**
	 * Returns promise for the result.
	 */
	sendCommand(method: string, params?: object): Promise<any>;
	destroy(): Promise<void>;

	/**
	 * Returns }>} profile result.
	 */
	stopProfiling(): Promise<{ profile: { startTime: number; endTime: number } }>;
}
declare class ProfilingPlugin {
	/**
	 * Creates an instance of ProfilingPlugin.
	 */
	constructor(options?: ProfilingPluginOptions);
	options: ProfilingPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
	static Profiler: typeof Profiler;
}
declare interface ProfilingPluginOptions {
	/**
	 * Path to the output file e.g. `path.resolve(__dirname, 'profiling/events.json')`. Defaults to `events.json`.
	 */
	outputPath?: string;
}
declare class ProgressPlugin {
	/**
	 * Creates an instance of ProgressPlugin.
	 */
	constructor(options?: ProgressPluginArgument);
	options: ProgressPluginOptions;
	profile: null | boolean;
	handler?: (percentage: number, msg: string, ...args: string[]) => void;
	modulesCount: number;
	dependenciesCount: number;
	showEntries: boolean;
	showModules: boolean;
	showDependencies: boolean;
	showActiveModules: boolean;
	percentBy: null | "entries" | "modules" | "dependencies";

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: MultiCompiler | Compiler): void;

	/**
	 * Returns a progress reporter, if any.
	 */
	static getReporter(
		compiler: Compiler
	): undefined | ((p: number, ...args: string[]) => void);
	static defaultOptions: Required<Omit<ProgressPluginOptions, "handler">>;
	static createDefaultHandler: (
		profile: undefined | null | boolean,
		logger: WebpackLogger
	) => (percentage: number, msg: string, ...args: string[]) => void;
}
type ProgressPluginArgument =
	| ProgressPluginOptions
	| ((percentage: number, msg: string, ...args: string[]) => void);

/**
 * Options object for the ProgressPlugin.
 */
declare interface ProgressPluginOptions {
	/**
	 * Show active modules count and one active module in progress message.
	 */
	activeModules?: boolean;

	/**
	 * Show dependencies count in progress message.
	 */
	dependencies?: boolean;

	/**
	 * Minimum dependencies count to start with. For better progress calculation. Default: 10000.
	 */
	dependenciesCount?: number;

	/**
	 * Show entries count in progress message.
	 */
	entries?: boolean;

	/**
	 * Function that executes for every progress step.
	 */
	handler?: (percentage: number, msg: string, ...args: string[]) => void;

	/**
	 * Show modules count in progress message.
	 */
	modules?: boolean;

	/**
	 * Minimum modules count to start with. For better progress calculation. Default: 5000.
	 */
	modulesCount?: number;

	/**
	 * Collect percent algorithm. By default it calculates by a median from modules, entries and dependencies percent.
	 */
	percentBy?: null | "entries" | "modules" | "dependencies";

	/**
	 * Collect profile data for progress steps. Default: false.
	 */
	profile?: null | boolean;
}
declare class ProvidePlugin {
	/**
	 * Creates an instance of ProvidePlugin.
	 */
	constructor(definitions: Record<string, string | string[]>);
	definitions: Record<string, string | string[]>;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare class ProvideSharedPlugin {
	/**
	 * Creates an instance of ProvideSharedPlugin.
	 */
	constructor(options: ProvideSharedPluginOptions);
	options: ProvideSharedPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface ProvideSharedPluginOptions {
	/**
	 * Modules that should be provided as shared modules to the share scope. When provided, property name is used to match modules, otherwise this is automatically inferred from share key.
	 */
	provides: Provides;

	/**
	 * Share scope name used for all provided modules (defaults to 'default').
	 */
	shareScope?: string;
}
type Provides = (string | ProvidesObject)[] | ProvidesObject;

/**
 * Advanced configuration for modules that should be provided as shared modules to the share scope.
 */
declare interface ProvidesConfig {
	/**
	 * Include the provided module directly instead behind an async request. This allows to use this shared module in initial load too. All possible shared modules need to be eager too.
	 */
	eager?: boolean;

	/**
	 * Key in the share scope under which the shared modules should be stored.
	 */
	shareKey?: string;

	/**
	 * Share scope name.
	 */
	shareScope?: string;

	/**
	 * Version of the provided module. Will replace lower matching versions, but not higher.
	 */
	version?: string | false;
}

/**
 * Modules that should be provided as shared modules to the share scope. Property names are used as share keys.
 */
declare interface ProvidesObject {
	[index: string]: string | ProvidesConfig;
}
declare interface RawChunkGroupOptions {
	preloadOrder?: number;
	prefetchOrder?: number;
	fetchPriority?: "auto" | "low" | "high";
}
type RawDevTool = string | false;
type RawLoaderDefinition<
	OptionsType = {},
	ContextAdditions = {}
> = RawLoaderDefinitionFunction<OptionsType, ContextAdditions> & {
	raw: true;
	pitch?: PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>;
};
declare interface RawLoaderDefinitionFunction<
	OptionsType = {},
	ContextAdditions = {}
> {
	(
		this: NormalModuleLoaderContext<OptionsType> &
			LoaderRunnerLoaderContext<OptionsType> &
			LoaderPluginLoaderContext &
			HotModuleReplacementPluginLoaderContext &
			ContextAdditions,
		content: Buffer,
		sourceMap?: string | RawSourceMap,
		additionalData?: AdditionalData
	): string | void | Buffer | Promise<string | Buffer>;
}
declare class RawSource extends Source {
	constructor(value: string | Buffer, convertToString?: boolean);
	isBuffer(): boolean;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string
		) => void,
		onName: (nameIndex: number, name: string) => void
	): GeneratedSourceInfo;
}
declare interface RawSourceMap {
	/**
	 * version
	 */
	version: number;

	/**
	 * sources
	 */
	sources: string[];

	/**
	 * names
	 */
	names: string[];

	/**
	 * source root
	 */
	sourceRoot?: string;

	/**
	 * sources content
	 */
	sourcesContent?: string[];

	/**
	 * mappings
	 */
	mappings: string;

	/**
	 * file
	 */
	file: string;

	/**
	 * debug id
	 */
	debugId?: string;

	/**
	 * ignore list
	 */
	ignoreList?: number[];
}
declare interface Read<
	TBuffer extends NodeJS.ArrayBufferView = NodeJS.ArrayBufferView
> {
	(
		fd: number,
		buffer: TBuffer,
		offset: number,
		length: number,
		position: null | number | bigint,
		callback: (
			err: null | NodeJS.ErrnoException,
			bytesRead: number,
			buffer: TBuffer
		) => void
	): void;
	(
		fd: number,
		options: ReadAsyncOptions<TBuffer>,
		callback: (
			err: null | NodeJS.ErrnoException,
			bytesRead: number,
			buffer: TBuffer
		) => void
	): void;
	(
		fd: number,
		callback: (
			err: null | NodeJS.ErrnoException,
			bytesRead: number,
			buffer: NodeJS.ArrayBufferView
		) => void
	): void;
}

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface ReadAsyncOptions<TBuffer extends NodeJS.ArrayBufferView> {
	offset?: number;
	length?: number;
	position?: null | number | bigint;
	buffer?: TBuffer;
}
declare class ReadFileCompileAsyncWasmPlugin {
	/**
	 * Creates an instance of ReadFileCompileAsyncWasmPlugin.
	 */
	constructor(__0?: ReadFileCompileAsyncWasmPluginOptions);

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface ReadFileCompileAsyncWasmPluginOptions {
	/**
	 * use import?
	 */
	import?: boolean;
}
declare class ReadFileCompileWasmPlugin {
	/**
	 * Creates an instance of ReadFileCompileWasmPlugin.
	 */
	constructor(options?: ReadFileCompileWasmPluginOptions);
	options: ReadFileCompileWasmPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface ReadFileCompileWasmPluginOptions {
	/**
	 * mangle imports
	 */
	mangleImports?: boolean;

	/**
	 * use import?
	 */
	import?: boolean;
}
declare interface ReadFileFs {
	(
		path: PathOrFileDescriptorFs,
		options:
			| undefined
			| null
			| ({ encoding?: null; flag?: string } & Abortable),
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void
	): void;
	(
		path: PathOrFileDescriptorFs,
		options:
			| ({ encoding: BufferEncoding; flag?: string } & Abortable)
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex",
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
	(
		path: PathOrFileDescriptorFs,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptionsFs & { flag?: string } & Abortable),
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: string | Buffer
		) => void
	): void;
	(
		path: PathOrFileDescriptorFs,
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void
	): void;
}
declare interface ReadFileSync {
	(
		path: PathOrFileDescriptorFs,
		options?: null | { encoding?: null; flag?: string }
	): Buffer;
	(
		path: PathOrFileDescriptorFs,
		options:
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| { encoding: BufferEncoding; flag?: string }
	): string;
	(
		path: PathOrFileDescriptorFs,
		options?:
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptionsFs & { flag?: string })
	): string | Buffer;
}
declare interface ReadFileTypes {
	(
		path: PathOrFileDescriptorTypes,
		options:
			| undefined
			| null
			| ({ encoding?: null; flag?: string } & Abortable),
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void
	): void;
	(
		path: PathOrFileDescriptorTypes,
		options:
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| ({ encoding: BufferEncoding; flag?: string } & Abortable),
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
	(
		path: PathOrFileDescriptorTypes,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptionsTypes & { flag?: string } & Abortable),
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: string | Buffer
		) => void
	): void;
	(
		path: PathOrFileDescriptorTypes,
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void
	): void;
}
type ReadStreamOptions = StreamOptions & {
	fs?: null | CreateReadStreamFSImplementation;
	end?: number;
};
declare interface ReaddirFs {
	(
		path: PathLikeFs,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| {
					encoding:
						| null
						| "ascii"
						| "utf8"
						| "utf-8"
						| "utf16le"
						| "utf-16le"
						| "ucs2"
						| "ucs-2"
						| "base64"
						| "base64url"
						| "latin1"
						| "binary"
						| "hex";
					withFileTypes?: false;
					recursive?: boolean;
			  },
		callback: (err: null | NodeJS.ErrnoException, files?: string[]) => void
	): void;
	(
		path: PathLikeFs,
		options:
			| "buffer"
			| { encoding: "buffer"; withFileTypes?: false; recursive?: boolean },
		callback: (err: null | NodeJS.ErrnoException, files?: Buffer[]) => void
	): void;
	(
		path: PathLikeFs,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptionsFs & {
					withFileTypes?: false;
					recursive?: boolean;
			  }),
		callback: (
			err: null | NodeJS.ErrnoException,
			files?: string[] | Buffer[]
		) => void
	): void;
	(
		path: PathLikeFs,
		callback: (err: null | NodeJS.ErrnoException, files?: string[]) => void
	): void;
	(
		path: PathLikeFs,
		options: ObjectEncodingOptionsFs & {
			withFileTypes: true;
			recursive?: boolean;
		},
		callback: (
			err: null | NodeJS.ErrnoException,
			files?: DirentFs<string>[]
		) => void
	): void;
	(
		path: PathLikeFs,
		options: { encoding: "buffer"; withFileTypes: true; recursive?: boolean },
		callback: (
			err: null | NodeJS.ErrnoException,
			files: DirentFs<Buffer>[]
		) => void
	): void;
}
declare interface ReaddirSync {
	(
		path: PathLikeFs,
		options?:
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| {
					encoding:
						| null
						| "ascii"
						| "utf8"
						| "utf-8"
						| "utf16le"
						| "utf-16le"
						| "ucs2"
						| "ucs-2"
						| "base64"
						| "base64url"
						| "latin1"
						| "binary"
						| "hex";
					withFileTypes?: false;
					recursive?: boolean;
			  }
	): string[];
	(
		path: PathLikeFs,
		options:
			| "buffer"
			| { encoding: "buffer"; withFileTypes?: false; recursive?: boolean }
	): Buffer[];
	(
		path: PathLikeFs,
		options?:
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptionsFs & {
					withFileTypes?: false;
					recursive?: boolean;
			  })
	): string[] | Buffer[];
	(
		path: PathLikeFs,
		options: ObjectEncodingOptionsFs & {
			withFileTypes: true;
			recursive?: boolean;
		}
	): DirentFs<string>[];
	(
		path: PathLikeFs,
		options: { encoding: "buffer"; withFileTypes: true; recursive?: boolean }
	): DirentFs<Buffer>[];
}
declare interface ReaddirTypes {
	(
		path: PathLikeTypes,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| {
					encoding:
						| null
						| "ascii"
						| "utf8"
						| "utf-8"
						| "utf16le"
						| "utf-16le"
						| "ucs2"
						| "ucs-2"
						| "base64"
						| "base64url"
						| "latin1"
						| "binary"
						| "hex";
					withFileTypes?: false;
					recursive?: boolean;
			  },
		callback: (err: null | NodeJS.ErrnoException, files?: string[]) => void
	): void;
	(
		path: PathLikeTypes,
		options:
			| "buffer"
			| { encoding: "buffer"; withFileTypes?: false; recursive?: boolean },
		callback: (err: null | NodeJS.ErrnoException, files?: Buffer[]) => void
	): void;
	(
		path: PathLikeTypes,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptionsTypes & {
					withFileTypes?: false;
					recursive?: boolean;
			  }),
		callback: (
			err: null | NodeJS.ErrnoException,
			files?: string[] | Buffer[]
		) => void
	): void;
	(
		path: PathLikeTypes,
		callback: (err: null | NodeJS.ErrnoException, files?: string[]) => void
	): void;
	(
		path: PathLikeTypes,
		options: ObjectEncodingOptionsTypes & {
			withFileTypes: true;
			recursive?: boolean;
		},
		callback: (
			err: null | NodeJS.ErrnoException,
			files?: DirentTypes<string>[]
		) => void
	): void;
	(
		path: PathLikeTypes,
		options: { encoding: "buffer"; withFileTypes: true; recursive?: boolean },
		callback: (
			err: null | NodeJS.ErrnoException,
			files: DirentTypes<Buffer>[]
		) => void
	): void;
}
declare interface ReadlinkFs {
	(
		path: PathLikeFs,
		options: EncodingOptionFs,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
	(
		path: PathLikeFs,
		options: BufferEncodingOption,
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void
	): void;
	(
		path: PathLikeFs,
		options: EncodingOptionFs,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: string | Buffer
		) => void
	): void;
	(
		path: PathLikeFs,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
}
declare interface ReadlinkSync {
	(path: PathLikeFs, options?: EncodingOptionFs): string;
	(path: PathLikeFs, options: BufferEncodingOption): Buffer;
	(path: PathLikeFs, options?: EncodingOptionFs): string | Buffer;
}
declare interface ReadlinkTypes {
	(
		path: PathLikeTypes,
		options: EncodingOptionTypes,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
	(
		path: PathLikeTypes,
		options: BufferEncodingOption,
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void
	): void;
	(
		path: PathLikeTypes,
		options: EncodingOptionTypes,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: string | Buffer
		) => void
	): void;
	(
		path: PathLikeTypes,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
}
declare class RealContentHashPlugin {
	/**
	 * Creates an instance of RealContentHashPlugin.
	 */
	constructor(__0: RealContentHashPluginOptions);

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Returns the attached hooks.
	 */
	static getCompilationHooks(
		compilation: Compilation
	): CompilationHooksRealContentHashPlugin;
}
declare interface RealContentHashPluginOptions {
	/**
	 * the hash function to use
	 */
	hashFunction: HashFunction;

	/**
	 * the hash digest to use
	 */
	hashDigest: string;
}
declare interface RealDependencyLocation {
	start: SourcePosition;
	end?: SourcePosition;
	index?: number;
}
declare interface RealPathFs {
	(
		path: PathLikeFs,
		options: EncodingOptionFs,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
	(
		path: PathLikeFs,
		options: BufferEncodingOption,
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void
	): void;
	(
		path: PathLikeFs,
		options: EncodingOptionFs,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: string | Buffer
		) => void
	): void;
	(
		path: PathLikeFs,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
}
declare interface RealPathSync {
	(path: PathLikeFs, options?: EncodingOptionFs): string;
	(path: PathLikeFs, options: BufferEncodingOption): Buffer;
	(path: PathLikeFs, options?: EncodingOptionFs): string | Buffer;
}
declare interface RealPathTypes {
	(
		path: PathLikeTypes,
		options: EncodingOptionTypes,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
	(
		path: PathLikeTypes,
		options: BufferEncodingOption,
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void
	): void;
	(
		path: PathLikeTypes,
		options: EncodingOptionTypes,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: string | Buffer
		) => void
	): void;
	(
		path: PathLikeTypes,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void
	): void;
}
type Records = KnownRecords &
	Record<string, KnownRecords[]> &
	Record<string, any>;
declare interface RecordsChunks {
	byName?: Record<string, number>;
	bySource?: Record<string, number>;
	usedIds?: number[];
}
declare interface RecordsModules {
	byIdentifier?: Record<string, number>;
	usedIds?: number[];
}
type RecursiveArrayOrRecord<T> =
	| { [index: string]: RecursiveArrayOrRecord<T> }
	| RecursiveArrayOrRecord<T>[]
	| T;
declare interface RecursiveNonNullable<T> {}
type ReferenceableItem = string | object;
declare interface ReferencedExport {
	/**
	 * name of the referenced export
	 */
	name: string[];

	/**
	 * when false, referenced export can not be mangled, defaults to true
	 */
	canMangle?: boolean;
}
type Remotes = (string | RemotesObject)[] | RemotesObject;

/**
 * Advanced configuration for container locations from which modules should be resolved and loaded at runtime.
 */
declare interface RemotesConfig {
	/**
	 * Container locations from which modules should be resolved and loaded at runtime.
	 */
	external: string | string[];

	/**
	 * The name of the share scope shared with this remote.
	 */
	shareScope?: string;
}

/**
 * Container locations from which modules should be resolved and loaded at runtime. Property names are used as request scopes.
 */
declare interface RemotesObject {
	[index: string]: string | RemotesConfig | string[];
}
declare interface RenderBootstrapContext {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * results of code generation
	 */
	codeGenerationResults: CodeGenerationResults;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * hash to be used for render call
	 */
	hash: string;
}
declare interface RenderContextCssModulesPlugin {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * results of code generation
	 */
	codeGenerationResults: CodeGenerationResults;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the unique name
	 */
	uniqueName: string;

	/**
	 * undo path to css file
	 */
	undoPath: string;

	/**
	 * modules
	 */
	modules: CssModule[];
}
declare interface RenderContextJavascriptModulesPlugin {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * results of code generation
	 */
	codeGenerationResults: CodeGenerationResults;

	/**
	 * rendering in strict context
	 */
	strictMode?: boolean;
}
type RenderManifestEntry =
	| RenderManifestEntryTemplated
	| RenderManifestEntryStatic;
declare interface RenderManifestEntryStatic {
	render: () => Source;
	filename: string;
	info: AssetInfo;
	identifier: string;
	hash?: string;
	auxiliary?: boolean;
}
declare interface RenderManifestEntryTemplated {
	render: () => Source;
	filenameTemplate: TemplatePath;
	pathOptions?: PathData;
	info?: AssetInfo;
	identifier: string;
	hash?: string;
	auxiliary?: boolean;
}
declare interface RenderManifestOptions {
	/**
	 * the chunk used to render
	 */
	chunk: Chunk;
	hash: string;
	fullHash: string;
	outputOptions: OutputNormalizedWithDefaults;
	codeGenerationResults: CodeGenerationResults;
	moduleTemplates: { javascript: ModuleTemplate };
	dependencyTemplates: DependencyTemplates;
	runtimeTemplate: RuntimeTemplate;
	moduleGraph: ModuleGraph;
	chunkGraph: ChunkGraph;
}
declare class ReplaceSource extends Source {
	constructor(source: Source, name?: string);
	getName(): undefined | string;
	getReplacements(): Replacement[];
	replace(start: number, end: number, newValue: string, name?: string): void;
	insert(pos: number, newValue: string, name?: string): void;
	original(): Source;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string
		) => void,
		onName: (nameIndex: number, name: string) => void
	): GeneratedSourceInfo;
	static Replacement: typeof Replacement;
}
declare class Replacement {
	constructor(start: number, end: number, content: string, name?: string);
	start: number;
	end: number;
	content: string;
	name?: string;
	index?: number;
}
declare interface RequestRecord {
	[index: string]: string | string[];
}
declare abstract class RequestShortener {
	contextify: (value: string) => string;

	/**
	 * Returns a request string rewritten relative to the configured directory
	 * when one is provided.
	 */
	shorten(request?: null | string): undefined | null | string;
}
declare interface ResolveBuildDependenciesResult {
	/**
	 * list of files
	 */
	files: Set<string>;

	/**
	 * list of directories
	 */
	directories: Set<string>;

	/**
	 * list of missing entries
	 */
	missing: Set<string>;

	/**
	 * stored resolve results
	 */
	resolveResults: Map<string, undefined | string | false>;

	/**
	 * dependencies of the resolving
	 */
	resolveDependencies: ResolveDependencies;
}
declare interface ResolveContext {
	/**
	 * directories that was found on file system
	 */
	contextDependencies?: WriteOnlySet<string>;

	/**
	 * files that was found on file system
	 */
	fileDependencies?: WriteOnlySet<string>;

	/**
	 * dependencies that was not found on file system
	 */
	missingDependencies?: WriteOnlySet<string>;

	/**
	 * set of hooks' calls. For instance, `resolve → parsedResolve → describedResolve`,
	 */
	stack?: Set<string>;

	/**
	 * log function
	 */
	log?: (str: string) => void;

	/**
	 * yield result, if provided plugins can return several results
	 */
	yield?: (request: ResolveRequest) => void;
}
declare interface ResolveData {
	contextInfo: ModuleFactoryCreateDataContextInfo;
	resolveOptions?: ResolveOptions;
	context: string;
	request: string;
	phase?: "defer" | "source" | "evaluation";
	attributes?: ImportAttributes;
	dependencies: ModuleDependency[];
	dependencyType: string;
	createData: Partial<NormalModuleCreateData & { settings: ModuleSettings }>;
	fileDependencies: LazySet<string>;
	missingDependencies: LazySet<string>;
	contextDependencies: LazySet<string>;
	ignoredModule?: Module;

	/**
	 * allow to use the unsafe cache
	 */
	cacheable: boolean;
}
declare interface ResolveDependencies {
	/**
	 * list of files
	 */
	files: Set<string>;

	/**
	 * list of directories
	 */
	directories: Set<string>;

	/**
	 * list of missing entries
	 */
	missing: Set<string>;
}

/**
 * Options object for resolving requests.
 */
declare interface ResolveOptions {
	/**
	 * Redirect module requests.
	 */
	alias?:
		| {
				/**
				 * New request.
				 */
				alias: string | false | string[];
				/**
				 * Request to be redirected.
				 */
				name: string;
				/**
				 * Redirect only exact matching request.
				 */
				onlyModule?: boolean;
		  }[]
		| { [index: string]: string | false | string[] };

	/**
	 * Fields in the description file (usually package.json) which are used to redirect requests inside the module.
	 */
	aliasFields?: (string | string[])[];

	/**
	 * Extra resolve options per dependency category. Typical categories are "commonjs", "amd", "esm".
	 */
	byDependency?: { [index: string]: ResolveOptions };

	/**
	 * Enable caching of successfully resolved requests (cache entries are revalidated).
	 */
	cache?: boolean;

	/**
	 * Predicate function to decide which requests should be cached.
	 */
	cachePredicate?: (request: ResolveRequest) => boolean;

	/**
	 * Include the context information in the cache identifier when caching.
	 */
	cacheWithContext?: boolean;

	/**
	 * Condition names for exports field entry point.
	 */
	conditionNames?: string[];

	/**
	 * Filenames used to find a description file (like a package.json).
	 */
	descriptionFiles?: string[];

	/**
	 * Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension).
	 */
	enforceExtension?: boolean;

	/**
	 * Field names from the description file (usually package.json) which are used to provide entry points of a package.
	 */
	exportsFields?: string[];

	/**
	 * An object which maps extension to extension aliases.
	 */
	extensionAlias?: { [index: string]: string | string[] };

	/**
	 * Extensions added to the request when trying to find the file.
	 */
	extensions?: string[];

	/**
	 * Redirect module requests when normal resolving fails.
	 */
	fallback?:
		| {
				/**
				 * New request.
				 */
				alias: string | false | string[];
				/**
				 * Request to be redirected.
				 */
				name: string;
				/**
				 * Redirect only exact matching request.
				 */
				onlyModule?: boolean;
		  }[]
		| { [index: string]: string | false | string[] };

	/**
	 * Filesystem for the resolver.
	 */
	fileSystem?: InputFileSystem;

	/**
	 * Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases).
	 */
	fullySpecified?: boolean;

	/**
	 * Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal).
	 */
	importsFields?: string[];

	/**
	 * Field names from the description file (package.json) which are used to find the default entry point.
	 */
	mainFields?: (string | string[])[];

	/**
	 * Filenames used to find the default entry point if there is no description file or main field.
	 */
	mainFiles?: string[];

	/**
	 * Folder names or directory paths where to find modules.
	 */
	modules?: string[];

	/**
	 * Plugins for the resolver.
	 */
	plugins?: (
		| undefined
		| null
		| false
		| ""
		| 0
		| {
				[index: string]: any;
				/**
				 * The run point of the plugin, required method.
				 */
				apply: (arg0: Resolver) => void;
		  }
		| ((this: Resolver, arg1: Resolver) => void)
		| "..."
	)[];

	/**
	 * Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'.
	 */
	preferAbsolute?: boolean;

	/**
	 * Prefer to resolve module requests as relative request and fallback to resolving as module.
	 */
	preferRelative?: boolean;

	/**
	 * Custom resolver.
	 */
	resolver?: Resolver;

	/**
	 * A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met.
	 */
	restrictions?: (string | RegExp)[];

	/**
	 * A list of directories in which requests that are server-relative URLs (starting with '/') are resolved.
	 */
	roots?: string[];

	/**
	 * Enable resolving symlinks to the original location.
	 */
	symlinks?: boolean;

	/**
	 * TypeScript config for paths mapping. Can be `false` (disabled), `true` (use default `tsconfig.json`), a string path to `tsconfig.json`, or an object with `configFile` and `references` options.
	 */
	tsconfig?:
		| string
		| boolean
		| {
				/**
				 * A path to the tsconfig file.
				 */
				configFile?: string;
				/**
				 * References to other tsconfig files. 'auto' inherits from TypeScript config, or an array of relative/absolute paths.
				 */
				references?: string;
		  };

	/**
	 * Enable caching of successfully resolved requests (cache entries are not revalidated).
	 */
	unsafeCache?: boolean | { [index: string]: any };

	/**
	 * Use synchronous filesystem calls for the resolver.
	 */
	useSyncFileSystemCalls?: boolean;
}
declare interface ResolveOptionsResolverFactoryObject1 {
	/**
	 * alias
	 */
	alias: AliasOption[];

	/**
	 * fallback
	 */
	fallback: AliasOption[];

	/**
	 * alias fields
	 */
	aliasFields: Set<string | string[]>;

	/**
	 * extension alias
	 */
	extensionAlias: ExtensionAliasOption[];

	/**
	 * cache predicate
	 */
	cachePredicate: (predicate: ResolveRequest) => boolean;

	/**
	 * cache with context
	 */
	cacheWithContext: boolean;

	/**
	 * A list of exports field condition names.
	 */
	conditionNames: Set<string>;

	/**
	 * description files
	 */
	descriptionFiles: string[];

	/**
	 * enforce extension
	 */
	enforceExtension: boolean;

	/**
	 * exports fields
	 */
	exportsFields: Set<string | string[]>;

	/**
	 * imports fields
	 */
	importsFields: Set<string | string[]>;

	/**
	 * extensions
	 */
	extensions: Set<string>;

	/**
	 * fileSystem
	 */
	fileSystem: FileSystem;

	/**
	 * unsafe cache
	 */
	unsafeCache: false | CacheTypes;

	/**
	 * symlinks
	 */
	symlinks: boolean;

	/**
	 * resolver
	 */
	resolver?: Resolver;

	/**
	 * modules
	 */
	modules: (string | string[])[];

	/**
	 * main fields
	 */
	mainFields: { name: string[]; forceRelative: boolean }[];

	/**
	 * main files
	 */
	mainFiles: Set<string>;

	/**
	 * plugins
	 */
	plugins: Plugin[];

	/**
	 * pnp API
	 */
	pnpApi: null | PnpApi;

	/**
	 * roots
	 */
	roots: Set<string>;

	/**
	 * fully specified
	 */
	fullySpecified: boolean;

	/**
	 * resolve to context
	 */
	resolveToContext: boolean;

	/**
	 * restrictions
	 */
	restrictions: Set<string | RegExp>;

	/**
	 * prefer relative
	 */
	preferRelative: boolean;

	/**
	 * prefer absolute
	 */
	preferAbsolute: boolean;

	/**
	 * tsconfig file path or config object
	 */
	tsconfig: string | boolean | TsconfigOptions;
}
declare interface ResolveOptionsResolverFactoryObject2 {
	/**
	 * A list of module alias configurations or an object which maps key to value
	 */
	alias?: AliasOption[] | AliasOptions;

	/**
	 * A list of module alias configurations or an object which maps key to value, applied only after modules option
	 */
	fallback?: AliasOption[] | AliasOptions;

	/**
	 * An object which maps extension to extension aliases
	 */
	extensionAlias?: ExtensionAliasOptions;

	/**
	 * A list of alias fields in description files
	 */
	aliasFields?: (string | string[])[];

	/**
	 * A function which decides whether a request should be cached or not. An object is passed with at least `path` and `request` properties.
	 */
	cachePredicate?: (predicate: ResolveRequest) => boolean;

	/**
	 * Whether or not the unsafeCache should include request context as part of the cache key.
	 */
	cacheWithContext?: boolean;

	/**
	 * A list of description files to read from
	 */
	descriptionFiles?: string[];

	/**
	 * A list of exports field condition names.
	 */
	conditionNames?: string[];

	/**
	 * Enforce that a extension from extensions must be used
	 */
	enforceExtension?: boolean;

	/**
	 * A list of exports fields in description files
	 */
	exportsFields?: (string | string[])[];

	/**
	 * A list of imports fields in description files
	 */
	importsFields?: (string | string[])[];

	/**
	 * A list of extensions which should be tried for files
	 */
	extensions?: string[];

	/**
	 * The file system which should be used
	 */
	fileSystem: FileSystem;

	/**
	 * Use this cache object to unsafely cache the successful requests
	 */
	unsafeCache?: boolean | CacheTypes;

	/**
	 * Resolve symlinks to their symlinked location
	 */
	symlinks?: boolean;

	/**
	 * A prepared Resolver to which the plugins are attached
	 */
	resolver?: Resolver;

	/**
	 * A list of directories to resolve modules from, can be absolute path or folder name
	 */
	modules?: string | string[];

	/**
	 * A list of main fields in description files
	 */
	mainFields?: (
		| string
		| string[]
		| { name: string | string[]; forceRelative: boolean }
	)[];

	/**
	 * A list of main files in directories
	 */
	mainFiles?: string[];

	/**
	 * A list of additional resolve plugins which should be applied
	 */
	plugins?: Plugin[];

	/**
	 * A PnP API that should be used - null is "never", undefined is "auto"
	 */
	pnpApi?: null | PnpApi;

	/**
	 * A list of root paths
	 */
	roots?: string[];

	/**
	 * The request is already fully specified and no extensions or directories are resolved for it
	 */
	fullySpecified?: boolean;

	/**
	 * Resolve to a context instead of a file
	 */
	resolveToContext?: boolean;

	/**
	 * A list of resolve restrictions
	 */
	restrictions?: (string | RegExp)[];

	/**
	 * Use only the sync constraints of the file system calls
	 */
	useSyncFileSystemCalls?: boolean;

	/**
	 * Prefer to resolve module requests as relative requests before falling back to modules
	 */
	preferRelative?: boolean;

	/**
	 * Prefer to resolve server-relative urls as absolute paths before falling back to resolve in roots
	 */
	preferAbsolute?: boolean;

	/**
	 * TypeScript config file path or config object with configFile and references
	 */
	tsconfig?: string | boolean | TsconfigOptions;
}
type ResolveOptionsWithDependencyType = ResolveOptions & {
	dependencyType?: string;
	resolveToContext?: boolean;
};
type ResolvePluginInstance =
	| {
			[index: string]: any;
			/**
			 * The run point of the plugin, required method.
			 */
			apply: (arg0: Resolver) => void;
	  }
	| ((this: Resolver, arg1: Resolver) => void);
type ResolveRequest = BaseResolveRequest & Partial<ParsedIdentifier>;
declare interface ResolvedContextFileSystemInfoEntry {
	safeTime: number;
	timestampHash?: string;
}
declare interface ResolvedContextTimestampAndHash {
	safeTime: number;
	timestampHash?: string;
	hash: string;
}
declare interface ResolvedOptions {
	/**
	 * - platform target properties
	 */
	platform: false | PlatformTargetProperties;
}
declare abstract class Resolver {
	fileSystem: FileSystem;
	options: ResolveOptionsResolverFactoryObject1;
	hooks: KnownHooks;
	ensureHook(
		name:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >
	): AsyncSeriesBailHook<
		[ResolveRequest, ResolveContext],
		null | ResolveRequest
	>;
	getHook(
		name:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >
	): AsyncSeriesBailHook<
		[ResolveRequest, ResolveContext],
		null | ResolveRequest
	>;
	resolveSync(
		context: ContextTypes,
		path: string,
		request: string
	): string | false;
	resolve(
		context: ContextTypes,
		path: string,
		request: string,
		resolveContext: ResolveContext,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest
		) => void
	): void;
	doResolve(
		hook: AsyncSeriesBailHook<
			[ResolveRequest, ResolveContext],
			null | ResolveRequest
		>,
		request: ResolveRequest,
		message: null | string,
		resolveContext: ResolveContext,
		callback: (err?: null | Error, result?: ResolveRequest) => void
	): void;
	parse(identifier: string): ParsedIdentifier;
	isModule(path: string): boolean;
	isPrivate(path: string): boolean;
	isDirectory(path: string): boolean;
	join(path: string, request: string): string;
	normalize(path: string): string;
}
declare interface ResolverCache {
	direct: WeakMap<ResolveOptionsWithDependencyType, ResolverWithOptions>;
	stringified: Map<string, ResolverWithOptions>;
}
declare abstract class ResolverFactory {
	hooks: Readonly<{
		resolveOptions: HookMap<
			SyncWaterfallHook<
				[ResolveOptionsWithDependencyType],
				ResolveOptionsWithDependencyType
			>
		>;
		resolver: HookMap<
			SyncHook<
				[
					Resolver,
					ResolveOptionsResolverFactoryObject2,
					ResolveOptionsWithDependencyType
				]
			>
		>;
	}>;
	cache: Map<string, ResolverCache>;

	/**
	 * Returns the resolver.
	 */
	get(
		type: string,
		resolveOptions?: ResolveOptionsWithDependencyType
	): ResolverWithOptions;
}
type ResolverWithOptions = Resolver & WithOptions;

declare interface ResourceDataWithData {
	resource: string;
	path?: string;
	query?: string;
	fragment?: string;
	context?: string;
	data: ResourceSchemeData & Partial<ResolveRequest>;
}
declare interface ResourceSchemeData {
	/**
	 * mime type of the resource
	 */
	mimetype?: string;

	/**
	 * additional parameters for the resource
	 */
	parameters?: string;

	/**
	 * encoding of the resource
	 */
	encoding?: false | "base64";

	/**
	 * encoded content of the resource
	 */
	encodedContent?: string;
}
declare abstract class RestoreProvidedData {
	exports: RestoreProvidedDataExports[];
	otherProvided?: null | boolean;
	otherCanMangleProvide?: boolean;
	otherTerminalBinding: boolean;

	/**
	 * Serializes this instance into the provided serializer context.
	 */
	serialize(__0: ObjectSerializerContext): void;
}
declare interface RestoreProvidedDataExports {
	name: string;
	provided?: null | boolean;
	canMangleProvide?: boolean;
	terminalBinding: boolean;
	exportsInfo?: RestoreProvidedData;
}
type Rule = string | RegExp | ((str: string) => boolean);
declare interface RuleSet {
	/**
	 * map of references in the rule set (may grow over time)
	 */
	references: Map<string, RuleSetLoaderOptions>;

	/**
	 * execute the rule set
	 */
	exec: (effectData: EffectData) => Effect[];
}
type RuleSetCondition =
	| string
	| RegExp
	| ((value: string) => boolean)
	| RuleSetLogicalConditions
	| RuleSetCondition[];
type RuleSetConditionAbsolute =
	| string
	| RegExp
	| ((value: string) => boolean)
	| RuleSetLogicalConditionsAbsolute
	| RuleSetConditionAbsolute[];
type RuleSetConditionOrConditions =
	| string
	| RegExp
	| ((value: string) => boolean)
	| RuleSetLogicalConditions
	| RuleSetCondition[];
type RuleSetLoaderOptions = string | { [index: string]: any };

/**
 * Logic operators used in a condition matcher.
 */
declare interface RuleSetLogicalConditions {
	/**
	 * Logical AND.
	 */
	and?: RuleSetCondition[];

	/**
	 * Logical NOT.
	 */
	not?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditions
		| RuleSetCondition[];

	/**
	 * Logical OR.
	 */
	or?: RuleSetCondition[];
}

/**
 * Logic operators used in a condition matcher.
 */
declare interface RuleSetLogicalConditionsAbsolute {
	/**
	 * Logical AND.
	 */
	and?: RuleSetConditionAbsolute[];

	/**
	 * Logical NOT.
	 */
	not?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditionsAbsolute
		| RuleSetConditionAbsolute[];

	/**
	 * Logical OR.
	 */
	or?: RuleSetConditionAbsolute[];
}

/**
 * A rule description with conditions and effects for modules.
 */
declare interface RuleSetRule {
	/**
	 * Match on import assertions of the dependency.
	 */
	assert?: { [index: string]: RuleSetConditionOrConditions };

	/**
	 * Match the child compiler name.
	 */
	compiler?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditions
		| RuleSetCondition[];

	/**
	 * Match dependency type.
	 */
	dependency?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditions
		| RuleSetCondition[];

	/**
	 * Match values of properties in the description file (usually package.json).
	 */
	descriptionData?: { [index: string]: RuleSetConditionOrConditions };

	/**
	 * Enforce this rule as pre or post step.
	 */
	enforce?: "pre" | "post";

	/**
	 * Shortcut for resource.exclude.
	 */
	exclude?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditionsAbsolute
		| RuleSetConditionAbsolute[];

	/**
	 * Enable/Disable extracting source map.
	 */
	extractSourceMap?: boolean;

	/**
	 * The options for the module generator.
	 */
	generator?: { [index: string]: any };

	/**
	 * Shortcut for resource.include.
	 */
	include?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditionsAbsolute
		| RuleSetConditionAbsolute[];

	/**
	 * Match the issuer of the module (The module pointing to this module).
	 */
	issuer?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditionsAbsolute
		| RuleSetConditionAbsolute[];

	/**
	 * Match layer of the issuer of this module (The module pointing to this module).
	 */
	issuerLayer?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditions
		| RuleSetCondition[];

	/**
	 * Specifies the layer in which the module should be placed in.
	 */
	layer?: string;

	/**
	 * Shortcut for use.loader.
	 */
	loader?: string;

	/**
	 * Match module mimetype when load from Data URI.
	 */
	mimetype?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditions
		| RuleSetCondition[];

	/**
	 * Only execute the first matching rule in this array.
	 */
	oneOf?: (undefined | null | false | "" | 0 | RuleSetRule)[];

	/**
	 * Shortcut for use.options.
	 */
	options?: string | { [index: string]: any };

	/**
	 * Options for parsing.
	 */
	parser?: { [index: string]: any };

	/**
	 * Match the import phase of the dependency.
	 */
	phase?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditions
		| RuleSetCondition[];

	/**
	 * Match the real resource path of the module.
	 */
	realResource?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditionsAbsolute
		| RuleSetConditionAbsolute[];

	/**
	 * Options for the resolver.
	 */
	resolve?: ResolveOptions;

	/**
	 * Match the resource path of the module.
	 */
	resource?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditionsAbsolute
		| RuleSetConditionAbsolute[];

	/**
	 * Match the resource fragment of the module.
	 */
	resourceFragment?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditions
		| RuleSetCondition[];

	/**
	 * Match the resource query of the module.
	 */
	resourceQuery?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditions
		| RuleSetCondition[];

	/**
	 * Match and execute these rules when this rule is matched.
	 */
	rules?: (undefined | null | false | "" | 0 | RuleSetRule)[];

	/**
	 * Match module scheme.
	 */
	scheme?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditions
		| RuleSetCondition[];

	/**
	 * Flags a module as with or without side effects.
	 */
	sideEffects?: boolean;

	/**
	 * Shortcut for resource.test.
	 */
	test?:
		| string
		| RegExp
		| ((value: string) => boolean)
		| RuleSetLogicalConditionsAbsolute
		| RuleSetConditionAbsolute[];

	/**
	 * Module type to use for the module.
	 */
	type?: string;

	/**
	 * Modifiers applied to the module when rule is matched.
	 */
	use?:
		| string
		| (
				| undefined
				| null
				| string
				| false
				| 0
				| RuleSetUseFunction
				| {
						/**
						 * Unique loader options identifier.
						 */
						ident?: string;
						/**
						 * Loader name.
						 */
						loader?: string;
						/**
						 * Loader options.
						 */
						options?: string | { [index: string]: any };
				  }
		  )[]
		| RuleSetUseFunction
		| {
				/**
				 * Unique loader options identifier.
				 */
				ident?: string;
				/**
				 * Loader name.
				 */
				loader?: string;
				/**
				 * Loader options.
				 */
				options?: string | { [index: string]: any };
		  };

	/**
	 * Match on import attributes of the dependency.
	 */
	with?: { [index: string]: RuleSetConditionOrConditions };
}
type RuleSetUse =
	| string
	| (
			| undefined
			| null
			| string
			| false
			| 0
			| RuleSetUseFunction
			| {
					/**
					 * Unique loader options identifier.
					 */
					ident?: string;
					/**
					 * Loader name.
					 */
					loader?: string;
					/**
					 * Loader options.
					 */
					options?: string | { [index: string]: any };
			  }
	  )[]
	| RuleSetUseFunction
	| {
			/**
			 * Unique loader options identifier.
			 */
			ident?: string;
			/**
			 * Loader name.
			 */
			loader?: string;
			/**
			 * Loader options.
			 */
			options?: string | { [index: string]: any };
	  };
type RuleSetUseFunction = (data: EffectData) =>
	| string
	| RuleSetUseFunction
	| {
			/**
			 * Unique loader options identifier.
			 */
			ident?: string;
			/**
			 * Loader name.
			 */
			loader?: string;
			/**
			 * Loader options.
			 */
			options?: string | { [index: string]: any };
	  }
	| (
			| undefined
			| null
			| string
			| false
			| 0
			| RuleSetUseFunction
			| {
					/**
					 * Unique loader options identifier.
					 */
					ident?: string;
					/**
					 * Loader name.
					 */
					loader?: string;
					/**
					 * Loader options.
					 */
					options?: string | { [index: string]: any };
			  }
	  )[];
type RuleSetUseItem =
	| string
	| RuleSetUseFunction
	| {
			/**
			 * Unique loader options identifier.
			 */
			ident?: string;
			/**
			 * Loader name.
			 */
			loader?: string;
			/**
			 * Loader options.
			 */
			options?: string | { [index: string]: any };
	  };
declare class RuntimeChunkPlugin {
	/**
	 * Creates an instance of RuntimeChunkPlugin.
	 */
	constructor(options?: {
		/**
		 * The name factory for the runtime chunks.
		 */
		name?: (entrypoint: { name: string }) => string;
	});
	options: { name: string | ((entrypoint: { name: string }) => string) };

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
type RuntimeCondition = undefined | string | boolean | SortableSet<string>;
type RuntimeId = string | number;
declare class RuntimeModule extends Module {
	/**
	 * Creates an instance of RuntimeModule.
	 */
	constructor(name: string, stage?: number);
	name: string;
	stage: number;
	compilation?: Compilation;
	chunk?: Chunk;
	chunkGraph?: ChunkGraph;
	fullHash: boolean;
	dependentHash: boolean;

	/**
	 * Processes the provided compilation.
	 */
	attach(compilation: Compilation, chunk: Chunk, chunkGraph?: ChunkGraph): void;

	/**
	 * Generates runtime code for this runtime module.
	 */
	generate(): null | string;

	/**
	 * Gets generated code.
	 */
	getGeneratedCode(): null | string;

	/**
	 * Returns true, if the runtime module should get it's own scope.
	 */
	shouldIsolate(): boolean;

	/**
	 * Runtime modules without any dependencies to other runtime modules
	 */
	static STAGE_NORMAL: number;

	/**
	 * Runtime modules with simple dependencies on other runtime modules
	 */
	static STAGE_BASIC: number;

	/**
	 * Runtime modules which attach to handlers of other runtime modules
	 */
	static STAGE_ATTACH: number;

	/**
	 * Runtime modules which trigger actions on bootstrap
	 */
	static STAGE_TRIGGER: number;

	/**
	 * Gets source basic types.
	 * @deprecated In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
	 */
	static getSourceBasicTypes(module: Module): ReadonlySet<string>;
}
declare interface RuntimeRequirementsContext {
	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * the code generation results
	 */
	codeGenerationResults: CodeGenerationResults;
}
type RuntimeSpec = undefined | string | SortableSet<string>;
declare class RuntimeSpecMap<T, R = T> {
	/**
	 * Creates an instance of RuntimeSpecMap.
	 */
	constructor(clone?: RuntimeSpecMap<T, R>);

	/**
	 * Returns value.
	 */
	get(runtime: RuntimeSpec): undefined | R;

	/**
	 * Returns true, when the runtime is stored.
	 */
	has(runtime: RuntimeSpec): boolean;

	/**
	 * Updates default using the provided runtime.
	 */
	set(runtime: RuntimeSpec, value: R): void;

	/**
	 * Returns the new value.
	 */
	provide(runtime: RuntimeSpec, computer: () => R): R;

	/**
	 * Processes the provided runtime.
	 */
	delete(runtime: RuntimeSpec): void;

	/**
	 * Processes the provided runtime.
	 */
	update(runtime: RuntimeSpec, fn: (value?: R) => R): void;
	keys(): RuntimeSpec[];

	/**
	 * Returns values.
	 */
	values(): IterableIterator<R>;
	get size(): number;
}
declare class RuntimeSpecSet {
	/**
	 * Creates an instance of RuntimeSpecSet.
	 */
	constructor(iterable?: Iterable<RuntimeSpec>);

	/**
	 * Processes the provided runtime.
	 */
	add(runtime: RuntimeSpec): void;

	/**
	 * Returns true, when the runtime exists.
	 */
	has(runtime: RuntimeSpec): boolean;
	get size(): number;

	/**
	 * Returns iterable iterator.
	 */
	[Symbol.iterator](): IterableIterator<RuntimeSpec>;
}
declare abstract class RuntimeTemplate {
	compilation: Compilation;
	outputOptions: OutputNormalizedWithDefaults;
	requestShortener: RequestShortener;
	globalObject: string;
	contentHashReplacement: string;
	isIIFE(): boolean;
	isModule(): boolean;
	isNeutralPlatform(): boolean;
	supportsConst(): boolean;
	supportsMethodShorthand(): boolean;
	supportsArrowFunction(): boolean;
	supportsAsyncFunction(): boolean;
	supportsOptionalChaining(): boolean;
	supportsForOf(): boolean;
	supportsDestructuring(): boolean;
	supportsBigIntLiteral(): boolean;
	supportsDynamicImport(): boolean;
	supportsEcmaScriptModuleSyntax(): boolean;
	supportTemplateLiteral(): boolean;
	supportNodePrefixForCoreModules(): boolean;

	/**
	 * Renders node prefix for core module.
	 */
	renderNodePrefixForCoreModule(mod: string): string;

	/**
	 * Renders return const when it is supported, otherwise var.
	 */
	renderConst(): "var" | "const";

	/**
	 * Returning function.
	 */
	returningFunction(returnValue: string, args?: string): string;

	/**
	 * Returns basic function.
	 */
	basicFunction(args: string, body: string | string[]): string;

	/**
	 * Returns result expression.
	 */
	concatenation(...args: (string | { expr: string })[]): string;

	/**
	 * Expression function.
	 */
	expressionFunction(expression: string, args?: string): string;

	/**
	 * Returns empty function code.
	 */
	emptyFunction(): string;

	/**
	 * Returns destructure array code.
	 */
	destructureArray(items: string[], value: string): string;

	/**
	 * Destructure object.
	 */
	destructureObject(items: string[], value: string): string;

	/**
	 * Returns iIFE code.
	 */
	iife(args: string, body: string): string;

	/**
	 * Returns for each code.
	 */
	forEach(variable: string, array: string, body: string | string[]): string;

	/**
	 * Returns comment.
	 */
	comment(__0: {
		/**
		 * request string used originally
		 */
		request?: string;
		/**
		 * name of the chunk referenced
		 */
		chunkName?: null | string;
		/**
		 * reason information of the chunk
		 */
		chunkReason?: string;
		/**
		 * additional message
		 */
		message?: string;
		/**
		 * name of the export
		 */
		exportName?: string;
	}): string;

	/**
	 * Throw missing module error block.
	 */
	throwMissingModuleErrorBlock(__0: {
		/**
		 * request string used originally
		 */
		request?: string;
	}): string;

	/**
	 * Throw missing module error function.
	 */
	throwMissingModuleErrorFunction(__0: {
		/**
		 * request string used originally
		 */
		request?: string;
	}): string;

	/**
	 * Returns generated error IIFE.
	 */
	missingModule(__0: {
		/**
		 * request string used originally
		 */
		request?: string;
	}): string;

	/**
	 * Missing module statement.
	 */
	missingModuleStatement(__0: {
		/**
		 * request string used originally
		 */
		request?: string;
	}): string;

	/**
	 * Missing module promise.
	 */
	missingModulePromise(__0: {
		/**
		 * request string used originally
		 */
		request?: string;
	}): string;

	/**
	 * Returns the code.
	 */
	weakError(__0: {
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the request that should be printed as comment
		 */
		request?: string;
		/**
		 * expression to use as id expression
		 */
		idExpr?: string;
		/**
		 * which kind of code should be returned
		 */
		type: "promise" | "expression" | "statements";
	}): string;

	/**
	 * Returns the expression.
	 */
	moduleId(__0: {
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the request that should be printed as comment
		 */
		request?: string;
		/**
		 * if the dependency is weak (will create a nice error message)
		 */
		weak?: boolean;
	}): string;

	/**
	 * Returns the expression.
	 */
	moduleRaw(__0: {
		/**
		 * the module
		 */
		module: null | Module;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the request that should be printed as comment
		 */
		request?: string;
		/**
		 * if the dependency is weak (will create a nice error message)
		 */
		weak?: boolean;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}): string;

	/**
	 * Returns the expression.
	 */
	moduleExports(__0: {
		/**
		 * the module
		 */
		module: null | Module;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the request that should be printed as comment
		 */
		request: string;
		/**
		 * if the dependency is weak (will create a nice error message)
		 */
		weak?: boolean;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}): string;

	/**
	 * Returns the expression.
	 */
	moduleNamespace(__0: {
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the request that should be printed as comment
		 */
		request: string;
		/**
		 * if the current module is in strict esm mode
		 */
		strict?: boolean;
		/**
		 * if the dependency is weak (will create a nice error message)
		 */
		weak?: boolean;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}): string;

	/**
	 * Module namespace promise.
	 */
	moduleNamespacePromise(__0: {
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the current dependencies block
		 */
		block?: AsyncDependenciesBlock;
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the request that should be printed as comment
		 */
		request: string;
		/**
		 * a message for the comment
		 */
		message: string;
		/**
		 * if the current module is in strict esm mode
		 */
		strict?: boolean;
		/**
		 * if the dependency is weak (will create a nice error message)
		 */
		weak?: boolean;
		/**
		 * dependency
		 */
		dependency: Dependency;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}): string;

	/**
	 * Runtime condition expression.
	 */
	runtimeConditionExpression(__0: {
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * runtime for which this code will be generated
		 */
		runtime?: RuntimeSpec;
		/**
		 * only execute the statement in some runtimes
		 */
		runtimeCondition?: string | boolean | SortableSet<string>;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}): string;

	/**
	 * Returns the import statement and the compat statement.
	 */
	importStatement(__0: {
		/**
		 * whether a new variable should be created or the existing one updated
		 */
		update?: boolean;
		/**
		 * the module
		 */
		module: Module;
		/**
		 * module in which the statement is emitted
		 */
		originModule: Module;
		/**
		 * the module graph
		 */
		moduleGraph: ModuleGraph;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
		/**
		 * name of the import variable
		 */
		importVar: string;
		/**
		 * the request that should be printed as comment
		 */
		request?: string;
		/**
		 * true, if this is a weak dependency
		 */
		weak?: boolean;
		/**
		 * module dependency
		 */
		dependency?: ModuleDependency;
	}): [string, string];

	/**
	 * Export from import.
	 */
	exportFromImport<GenerateContext>(__0: {
		/**
		 * the module graph
		 */
		moduleGraph: ModuleGraph;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * the module
		 */
		module: Module;
		/**
		 * the request
		 */
		request: string;
		/**
		 * the export name
		 */
		exportName: string | string[];
		/**
		 * the origin module
		 */
		originModule: Module;
		/**
		 * true, if location is safe for ASI, a bracket can be emitted
		 */
		asiSafe?: boolean;
		/**
		 * true, if expression will be called
		 */
		isCall?: boolean;
		/**
		 * when false, call context will not be preserved
		 */
		callContext: null | boolean;
		/**
		 * when true and accessing the default exports, interop code will be generated
		 */
		defaultInterop: boolean;
		/**
		 * the identifier name of the import variable
		 */
		importVar: string;
		/**
		 * init fragments will be added here
		 */
		initFragments: InitFragment<GenerateContext>[];
		/**
		 * runtime for which this code will be generated
		 */
		runtime: RuntimeSpec;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
		/**
		 * module dependency
		 */
		dependency: ModuleDependency;
	}): string;

	/**
	 * Returns expression.
	 */
	blockPromise(__0: {
		/**
		 * the async block
		 */
		block?: AsyncDependenciesBlock;
		/**
		 * the message
		 */
		message: string;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}): string;

	/**
	 * Async module factory.
	 */
	asyncModuleFactory(__0: {
		/**
		 * the async block
		 */
		block: AsyncDependenciesBlock;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
		/**
		 * request string used originally
		 */
		request?: string;
	}): string;

	/**
	 * Sync module factory.
	 */
	syncModuleFactory(__0: {
		/**
		 * the dependency
		 */
		dependency: Dependency;
		/**
		 * the chunk graph
		 */
		chunkGraph: ChunkGraph;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
		/**
		 * request string used originally
		 */
		request?: string;
	}): string;

	/**
	 * Define es module flag statement.
	 */
	defineEsModuleFlagStatement(__0: {
		/**
		 * the name of the exports object
		 */
		exportsArgument: string;
		/**
		 * if set, will be filled with runtime requirements
		 */
		runtimeRequirements: Set<string>;
	}): string;
}
declare abstract class RuntimeValue {
	fn: (value: {
		module: NormalModule;
		key: string;
		readonly version: ValueCacheVersion;
	}) => CodeValuePrimitive;
	options: true | RuntimeValueOptions;
	get fileDependencies(): true | string[];

	/**
	 * Returns code.
	 */
	exec(
		parser: JavascriptParser,
		valueCacheVersions: Map<string, ValueCacheVersion>,
		key: string
	): CodeValuePrimitive;
	getCacheVersion(): undefined | string;
}
declare interface RuntimeValueOptions {
	fileDependencies?: string[];
	contextDependencies?: string[];
	missingDependencies?: string[];
	buildDependencies?: string[];
	version?: string | (() => string);
}

/**
 * Helper function for joining two ranges into a single range. This is useful
 * when working with AST nodes, as it allows you to combine the ranges of child nodes
 * to create the range of the _parent node_.
 */
declare interface ScopeInfo {
	definitions: StackedMap<string, VariableInfo | ScopeInfo>;
	topLevelScope: boolean | "arrow";
	inShorthand: string | boolean;
	inTaggedTemplateTag: boolean;
	inTry: boolean;
	isStrict: boolean;
	isAsmJs: boolean;
	terminated?: 1 | 2;
}
declare interface Selector<A, B> {
	(input: A): undefined | null | B;
}
declare abstract class Serializer<DeserializedValue, SerializedValue, Context> {
	serializeMiddlewares: SerializerMiddleware<any, any, any>[];
	deserializeMiddlewares: SerializerMiddleware<any, any, any>[];
	context?: Context;

	/**
	 * Serializes this instance into the provided serializer context.
	 */
	serialize<ExtendedContext>(
		obj: DeserializedValue | Promise<DeserializedValue>,
		context: Context & ExtendedContext
	): Promise<SerializedValue>;

	/**
	 * Restores this instance from the provided deserializer context.
	 */
	deserialize<ExtendedContext>(
		value: SerializedValue | Promise<SerializedValue>,
		context: Context & ExtendedContext
	): Promise<DeserializedValue>;
}
declare abstract class SerializerMiddleware<
	DeserializedType,
	SerializedType,
	Context
> {
	/**
	 * Serializes this instance into the provided serializer context.
	 */
	serialize(
		data: DeserializedType,
		context: Context
	): null | SerializedType | Promise<SerializedType>;

	/**
	 * Restores this instance from the provided deserializer context.
	 */
	deserialize(
		data: SerializedType,
		context: Context
	): DeserializedType | Promise<DeserializedType>;
}
type ServerLazyCompilationBackend =
	| ServerImportHttp<typeof IncomingMessage>
	| ServerImportHttps<typeof IncomingMessage>;
declare interface SetIterator<T> extends IteratorObject<T, undefined> {
	[Symbol.iterator](): SetIterator<T>;
	[Symbol.dispose](): void;
}
declare class SharePlugin {
	/**
	 * Creates an instance of SharePlugin.
	 */
	constructor(options: SharePluginOptions);

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}

/**
 * Options for shared modules.
 */
declare interface SharePluginOptions {
	/**
	 * Share scope name used for all shared modules (defaults to 'default').
	 */
	shareScope?: string;

	/**
	 * Modules that should be shared in the share scope. When provided, property names are used to match requested modules in this compilation.
	 */
	shared: Shared;
}
type Shared = (string | SharedObject)[] | SharedObject;

/**
 * Advanced configuration for modules that should be shared in the share scope.
 */
declare interface SharedConfig {
	/**
	 * Include the provided and fallback module directly instead behind an async request. This allows to use this shared module in initial load too. All possible shared modules need to be eager too.
	 */
	eager?: boolean;

	/**
	 * Provided module that should be provided to share scope. Also acts as fallback module if no shared module is found in share scope or version isn't valid. Defaults to the property name.
	 */
	import?: string | false;

	/**
	 * Package name to determine required version from description file. This is only needed when package name can't be automatically determined from request.
	 */
	packageName?: string;

	/**
	 * Version requirement from module in share scope.
	 */
	requiredVersion?: string | false;

	/**
	 * Module is looked up under this key from the share scope.
	 */
	shareKey?: string;

	/**
	 * Share scope name.
	 */
	shareScope?: string;

	/**
	 * Allow only a single version of the shared module in share scope (disabled by default).
	 */
	singleton?: boolean;

	/**
	 * Do not accept shared module if version is not valid (defaults to yes, if local fallback module is available and shared module is not a singleton, otherwise no, has no effect if there is no required version specified).
	 */
	strictVersion?: boolean;

	/**
	 * Version of the provided module. Will replace lower matching versions, but not higher.
	 */
	version?: string | false;
}

/**
 * Modules that should be shared in the share scope. Property names are used to match requested modules in this compilation. Relative requests are resolved, module requests are matched unresolved, absolute paths will match resolved requests. A trailing slash will match all requests with this prefix. In this case shareKey must also have a trailing slash.
 */
declare interface SharedObject {
	[index: string]: string | SharedConfig;
}
declare class SideEffectsFlagPlugin {
	/**
	 * Creates an instance of SideEffectsFlagPlugin.
	 */
	constructor(analyseSource?: boolean);

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Module has side effects.
	 */
	static moduleHasSideEffects(
		moduleName: string,
		flagValue: SideEffectsFlagValue,
		cache: Map<string, RegExp>
	): undefined | boolean;
}
type SideEffectsFlagValue = undefined | string | boolean | string[];
type SimpleType = "string" | "number" | "boolean";
declare class SizeOnlySource extends Source {
	constructor(size: number);
}
declare abstract class Snapshot {
	startTime?: number;
	fileTimestamps?: Map<string, null | FileSystemInfoEntry>;
	fileHashes?: Map<string, null | string>;
	fileTshs?: Map<string, null | string | TimestampAndHash>;
	contextTimestamps?: Map<string, null | ResolvedContextFileSystemInfoEntry>;
	contextHashes?: Map<string, null | string>;
	contextTshs?: Map<string, null | ResolvedContextTimestampAndHash>;
	missingExistence?: Map<string, boolean>;
	managedItemInfo?: Map<string, string>;
	managedFiles?: Set<string>;
	managedContexts?: Set<string>;
	managedMissing?: Set<string>;
	children?: Set<Snapshot>;
	hasStartTime(): boolean;

	/**
	 * Updates start time using the provided value.
	 */
	setStartTime(value: number): void;

	/**
	 * Sets merged start time.
	 */
	setMergedStartTime(value: undefined | number, snapshot: Snapshot): void;
	hasFileTimestamps(): boolean;

	/**
	 * Sets file timestamps.
	 */
	setFileTimestamps(value: Map<string, null | FileSystemInfoEntry>): void;
	hasFileHashes(): boolean;

	/**
	 * Updates file hashes using the provided value.
	 */
	setFileHashes(value: Map<string, null | string>): void;
	hasFileTshs(): boolean;

	/**
	 * Updates file tshs using the provided value.
	 */
	setFileTshs(value: Map<string, null | string | TimestampAndHash>): void;
	hasContextTimestamps(): boolean;

	/**
	 * Sets context timestamps.
	 */
	setContextTimestamps(
		value: Map<string, null | ResolvedContextFileSystemInfoEntry>
	): void;
	hasContextHashes(): boolean;

	/**
	 * Sets context hashes.
	 */
	setContextHashes(value: Map<string, null | string>): void;
	hasContextTshs(): boolean;

	/**
	 * Updates context tshs using the provided value.
	 */
	setContextTshs(
		value: Map<string, null | ResolvedContextTimestampAndHash>
	): void;
	hasMissingExistence(): boolean;

	/**
	 * Sets missing existence.
	 */
	setMissingExistence(value: Map<string, boolean>): void;
	hasManagedItemInfo(): boolean;

	/**
	 * Sets managed item info.
	 */
	setManagedItemInfo(value: Map<string, string>): void;
	hasManagedFiles(): boolean;

	/**
	 * Sets managed files.
	 */
	setManagedFiles(value: Set<string>): void;
	hasManagedContexts(): boolean;

	/**
	 * Sets managed contexts.
	 */
	setManagedContexts(value: Set<string>): void;
	hasManagedMissing(): boolean;

	/**
	 * Sets managed missing.
	 */
	setManagedMissing(value: Set<string>): void;
	hasChildren(): boolean;

	/**
	 * Updates children using the provided value.
	 */
	setChildren(value: Set<Snapshot>): void;

	/**
	 * Adds the provided child to the snapshot.
	 */
	addChild(child: Snapshot): void;

	/**
	 * Serializes this instance into the provided serializer context.
	 */
	serialize(__0: ObjectSerializerContext): void;

	/**
	 * Restores this instance from the provided deserializer context.
	 */
	deserialize(__0: ObjectDeserializerContext): void;

	/**
	 * Gets file iterable.
	 */
	getFileIterable(): Iterable<string>;

	/**
	 * Gets context iterable.
	 */
	getContextIterable(): Iterable<string>;

	/**
	 * Gets missing iterable.
	 */
	getMissingIterable(): Iterable<string>;
}
type SnapshotNormalizedWithDefaults = SnapshotOptionsWebpackOptions & {
	managedPaths: (string | RegExp)[];
	unmanagedPaths: (string | RegExp)[];
	immutablePaths: (string | RegExp)[];
	resolveBuildDependencies: {
		/**
		 * Use hashes of the content of the files/directories to determine invalidation.
		 */
		hash?: boolean;
		/**
		 * Use timestamps of the files/directories to determine invalidation.
		 */
		timestamp?: boolean;
	};
	buildDependencies: {
		/**
		 * Use hashes of the content of the files/directories to determine invalidation.
		 */
		hash?: boolean;
		/**
		 * Use timestamps of the files/directories to determine invalidation.
		 */
		timestamp?: boolean;
	};
	module: {
		/**
		 * Use hashes of the content of the files/directories to determine invalidation.
		 */
		hash?: boolean;
		/**
		 * Use timestamps of the files/directories to determine invalidation.
		 */
		timestamp?: boolean;
	};
	resolve: {
		/**
		 * Use hashes of the content of the files/directories to determine invalidation.
		 */
		hash?: boolean;
		/**
		 * Use timestamps of the files/directories to determine invalidation.
		 */
		timestamp?: boolean;
	};
};
declare interface SnapshotOptionsFileSystemInfo {
	/**
	 * should use hash to snapshot
	 */
	hash?: boolean;

	/**
	 * should use timestamp to snapshot
	 */
	timestamp?: boolean;
}

/**
 * Options affecting how file system snapshots are created and validated.
 */
declare interface SnapshotOptionsWebpackOptions {
	/**
	 * Options for snapshotting build dependencies to determine if the whole cache need to be invalidated.
	 */
	buildDependencies?: {
		/**
		 * Use hashes of the content of the files/directories to determine invalidation.
		 */
		hash?: boolean;
		/**
		 * Use timestamps of the files/directories to determine invalidation.
		 */
		timestamp?: boolean;
	};

	/**
	 * Options for snapshotting the context module to determine if it needs to be built again.
	 */
	contextModule?: {
		/**
		 * Use hashes of the content of the files/directories to determine invalidation.
		 */
		hash?: boolean;
		/**
		 * Use timestamps of the files/directories to determine invalidation.
		 */
		timestamp?: boolean;
	};

	/**
	 * List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable.
	 */
	immutablePaths?: (string | RegExp)[];

	/**
	 * List of paths that are managed by a package manager and can be trusted to not be modified otherwise.
	 */
	managedPaths?: (string | RegExp)[];

	/**
	 * Options for snapshotting dependencies of modules to determine if they need to be built again.
	 */
	module?: {
		/**
		 * Use hashes of the content of the files/directories to determine invalidation.
		 */
		hash?: boolean;
		/**
		 * Use timestamps of the files/directories to determine invalidation.
		 */
		timestamp?: boolean;
	};

	/**
	 * Options for snapshotting dependencies of request resolving to determine if requests need to be re-resolved.
	 */
	resolve?: {
		/**
		 * Use hashes of the content of the files/directories to determine invalidation.
		 */
		hash?: boolean;
		/**
		 * Use timestamps of the files/directories to determine invalidation.
		 */
		timestamp?: boolean;
	};

	/**
	 * Options for snapshotting the resolving of build dependencies to determine if the build dependencies need to be re-resolved.
	 */
	resolveBuildDependencies?: {
		/**
		 * Use hashes of the content of the files/directories to determine invalidation.
		 */
		hash?: boolean;
		/**
		 * Use timestamps of the files/directories to determine invalidation.
		 */
		timestamp?: boolean;
	};

	/**
	 * List of paths that are not managed by a package manager and the contents are subject to change.
	 */
	unmanagedPaths?: (string | RegExp)[];
}
declare interface SortFunction<T> {
	(a: T, b: T): number;
}
declare abstract class SortableSet<T> extends Set<T> {
	/**
	 * Sort with a comparer function
	 */
	sortWith(sortFn?: SortFunction<T>): void;
	sort(): SortableSet<T>;

	/**
	 * Get data from cache
	 */
	getFromCache<R extends unknown>(fn: (set: SortableSet<T>) => R): R;

	/**
	 * Get data from cache (ignoring sorting)
	 */
	getFromUnorderedCache<R>(fn: (set: SortableSet<T>) => R): R;

	/**
	 * Returns the raw array.
	 */
	toJSON(): T[];
}
declare class Source {
	constructor();
	source(): SourceValue;
	buffer(): Buffer;
	size(): number;
	map(options?: MapOptions): null | RawSourceMap;
	sourceAndMap(options?: MapOptions): SourceAndMap;
	updateHash(hash: HashLike): void;
}
declare interface SourceAndMap {
	/**
	 * source
	 */
	source: SourceValue;

	/**
	 * map
	 */
	map: null | RawSourceMap;
}
declare interface SourceLike {
	/**
	 * source
	 */
	source: () => SourceValue;

	/**
	 * buffer
	 */
	buffer?: () => Buffer;

	/**
	 * size
	 */
	size?: () => number;

	/**
	 * map
	 */
	map?: (options?: MapOptions) => null | RawSourceMap;

	/**
	 * source and map
	 */
	sourceAndMap?: (options?: MapOptions) => SourceAndMap;

	/**
	 * hash updater
	 */
	updateHash?: (hash: HashLike) => void;
}
declare class SourceMapDevToolPlugin {
	/**
	 * Creates an instance of SourceMapDevToolPlugin.
	 */
	constructor(options?: SourceMapDevToolPluginOptions);
	sourceMapFilename?: null | string | false;
	sourceMappingURLComment:
		| string
		| false
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);
	moduleFilenameTemplate: DevtoolModuleFilenameTemplate;
	fallbackModuleFilenameTemplate: DevtoolFallbackModuleFilenameTemplate;
	namespace: string;
	options: SourceMapDevToolPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface SourceMapDevToolPluginOptions {
	/**
	 * Appends the given value to the original asset. Usually the #sourceMappingURL comment. [url] is replaced with a URL to the source map file. false disables the appending.
	 */
	append?:
		| null
		| string
		| false
		| ((pathData: PathData, assetInfo?: AssetInfo) => string);

	/**
	 * Indicates whether column mappings should be used (defaults to true).
	 */
	columns?: boolean;

	/**
	 * Emit debug IDs into source and SourceMap.
	 */
	debugIds?: boolean;

	/**
	 * Exclude modules that match the given value from source map generation.
	 */
	exclude?: string | RegExp | ((str: string) => boolean) | Rule[];

	/**
	 * Generator string or function to create identifiers of modules for the 'sources' array in the SourceMap used only if 'moduleFilenameTemplate' would result in a conflict.
	 */
	fallbackModuleFilenameTemplate?:
		| string
		| ((context: ModuleFilenameTemplateContext) => string);

	/**
	 * Path prefix to which the [file] placeholder is relative to.
	 */
	fileContext?: string;

	/**
	 * Defines the output filename of the SourceMap (will be inlined if no value is provided).
	 */
	filename?: null | string | false;

	/**
	 * Decide whether to ignore source files that match the specified value in the SourceMap.
	 */
	ignoreList?: string | RegExp | ((str: string) => boolean) | Rule[];

	/**
	 * Include source maps for module paths that match the given value.
	 */
	include?: string | RegExp | ((str: string) => boolean) | Rule[];

	/**
	 * Indicates whether SourceMaps from loaders should be used (defaults to true).
	 */
	module?: boolean;

	/**
	 * Generator string or function to create identifiers of modules for the 'sources' array in the SourceMap.
	 */
	moduleFilenameTemplate?:
		| string
		| ((context: ModuleFilenameTemplateContext) => string);

	/**
	 * Namespace prefix to allow multiple webpack roots in the devtools.
	 */
	namespace?: string;

	/**
	 * Omit the 'sourceContents' array from the SourceMap.
	 */
	noSources?: boolean;

	/**
	 * Provide a custom public path for the SourceMapping comment.
	 */
	publicPath?: string;

	/**
	 * Provide a custom value for the 'sourceRoot' property in the SourceMap.
	 */
	sourceRoot?: string;

	/**
	 * Include source maps for modules based on their extension (defaults to .js and .css).
	 */
	test?: string | RegExp | ((str: string) => boolean) | Rule[];
}
declare class SourceMapSource extends Source {
	constructor(
		value: string | Buffer,
		name: string,
		sourceMap?: string | Buffer | RawSourceMap,
		originalSource?: string | Buffer,
		innerSourceMap?: null | string | Buffer | RawSourceMap,
		removeOriginalSource?: boolean
	);
	getArgsAsBuffers(): [
		Buffer,
		string,
		Buffer,
		undefined | Buffer,
		undefined | Buffer,
		undefined | boolean
	];
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string
		) => void,
		onName: (nameIndex: number, name: string) => void
	): GeneratedSourceInfo;
}
declare interface SourcePosition {
	line: number;
	column?: number;
}
type SourceValue = string | Buffer;
declare interface SplitChunksOptions {
	chunksFilter: (chunk: Chunk) => undefined | boolean;
	defaultSizeTypes: string[];
	minSize: SplitChunksSizes;
	minSizeReduction: SplitChunksSizes;
	minRemainingSize: SplitChunksSizes;
	enforceSizeThreshold: SplitChunksSizes;
	maxInitialSize: SplitChunksSizes;
	maxAsyncSize: SplitChunksSizes;
	minChunks: number;
	maxAsyncRequests: number;
	maxInitialRequests: number;
	hidePathInfo: boolean;
	filename?: string | ((pathData: PathData, assetInfo?: AssetInfo) => string);
	automaticNameDelimiter: string;
	getCacheGroups: (
		module: Module,
		context: CacheGroupsContext
	) => null | CacheGroupSource[];
	getName: (module: Module, chunks: Chunk[], key: string) => undefined | string;
	usedExports: boolean;
	fallbackCacheGroup: FallbackCacheGroup;
}
declare class SplitChunksPlugin {
	/**
	 * Creates an instance of SplitChunksPlugin.
	 */
	constructor(options?: OptimizationSplitChunksOptions);
	options: SplitChunksOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface SplitChunksSizes {
	[index: string]: number;
}
declare interface SplitData {
	id?: string | number;
	hash?: string;
	modules: string[];
	size: number;
}
declare abstract class StackedMap<K, V> {
	map: Map<K, InternalCell<V>>;
	stack: Map<K, InternalCell<V>>[];

	/**
	 * Stores a value in the current layer, preserving explicit `undefined`
	 * values with an internal marker.
	 */
	set(item: K, value: V): void;

	/**
	 * Deletes a key from the current view, either by removing it outright in the
	 * root layer or by recording a tombstone in child layers.
	 */
	delete(item: K): void;

	/**
	 * Checks whether a key exists in the current scope chain, caching any parent
	 * lookup result in the current layer.
	 */
	has(item: K): boolean;

	/**
	 * Returns the visible value for a key, caching parent hits and misses in the
	 * current layer.
	 */
	get(item: K): Cell<V>;

	/**
	 * Returns the visible keys as an array after collapsing the stack.
	 */
	asArray(): K[];

	/**
	 * Returns the visible keys as a `Set` after collapsing the stack.
	 */
	asSet(): Set<K>;

	/**
	 * Returns visible key/value pairs using the external representation.
	 */
	asPairArray(): [K, Cell<V>][];

	/**
	 * Returns the visible contents as a plain `Map`.
	 */
	asMap(): Map<K, Cell<V>>;

	/**
	 * Returns the number of visible keys after collapsing the stack.
	 */
	get size(): number;

	/**
	 * Creates a child `StackedMap` that sees the current layers as its parent
	 * scope.
	 */
	createChild(): StackedMap<K, V>;
}
declare interface StartupRenderContext {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * results of code generation
	 */
	codeGenerationResults: CodeGenerationResults;

	/**
	 * rendering in strict context
	 */
	strictMode?: boolean;

	/**
	 * inlined
	 */
	inlined?: boolean;

	/**
	 * the inlined entry module is wrapped in an IIFE
	 */
	inlinedInIIFE?: boolean;

	/**
	 * whether the top-level exports declaration needs to be generated
	 */
	needExportsDeclaration?: boolean;
}
declare interface StatFs {
	(
		path: PathLikeFs,
		callback: (err: null | NodeJS.ErrnoException, result?: IStatsFs) => void
	): void;
	(
		path: PathLikeFs,
		options: undefined | (StatOptionsFs & { bigint?: false }),
		callback: (err: null | NodeJS.ErrnoException, result?: IStatsFs) => void
	): void;
	(
		path: PathLikeFs,
		options: StatOptionsFs & { bigint: true },
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IBigIntStatsFs
		) => void
	): void;
	(
		path: PathLikeFs,
		options: undefined | StatOptionsFs,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IStatsFs | IBigIntStatsFs
		) => void
	): void;
}

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface StatOptionsFs {
	bigint?: boolean;
}
declare interface StatOptionsTypes {
	/**
	 * need bigint values
	 */
	bigint?: boolean;
}
declare interface StatSync {
	(path: PathLikeFs, options?: undefined): IStatsFs;
	(
		path: PathLikeFs,
		options?: StatSyncOptions & { bigint?: false; throwIfNoEntry: false }
	): undefined | IStatsFs;
	(
		path: PathLikeFs,
		options: StatSyncOptions & { bigint: true; throwIfNoEntry: false }
	): undefined | IBigIntStatsFs;
	(path: PathLikeFs, options?: StatSyncOptions & { bigint?: false }): IStatsFs;
	(
		path: PathLikeFs,
		options: StatSyncOptions & { bigint: true }
	): IBigIntStatsFs;
	(
		path: PathLikeFs,
		options: StatSyncOptions & { bigint: boolean; throwIfNoEntry?: false }
	): IStatsFs | IBigIntStatsFs;
	(
		path: PathLikeFs,
		options?: StatSyncOptions
	): undefined | IStatsFs | IBigIntStatsFs;
}

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface StatSyncOptions {
	bigint?: boolean;
	throwIfNoEntry?: boolean;
}
declare interface StatTypes {
	(
		path: PathLikeTypes,
		callback: (err: null | NodeJS.ErrnoException, result?: IStatsTypes) => void
	): void;
	(
		path: PathLikeTypes,
		options: undefined | (StatOptionsTypes & { bigint?: false }),
		callback: (err: null | NodeJS.ErrnoException, result?: IStatsTypes) => void
	): void;
	(
		path: PathLikeTypes,
		options: StatOptionsTypes & { bigint: true },
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IBigIntStatsTypes
		) => void
	): void;
	(
		path: PathLikeTypes,
		options: undefined | StatOptionsTypes,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IStatsTypes | IBigIntStatsTypes
		) => void
	): void;
}
type Statement =
	| FunctionDeclaration
	| VariableDeclaration
	| ClassDeclaration
	| ExpressionStatement
	| BlockStatement
	| StaticBlock
	| EmptyStatement
	| DebuggerStatement
	| WithStatement
	| ReturnStatement
	| LabeledStatement
	| BreakStatement
	| ContinueStatement
	| IfStatement
	| SwitchStatement
	| ThrowStatement
	| TryStatement
	| WhileStatement
	| DoWhileStatement
	| ForStatement
	| ForInStatement
	| ForOfStatement;
type StatementPathItem =
	| ImportDeclaration
	| ExportNamedDeclaration
	| ExportAllDeclaration
	| ImportExpressionImport
	| UnaryExpression
	| ArrayExpression
	| ArrowFunctionExpression
	| AssignmentExpression
	| AwaitExpression
	| BinaryExpression
	| SimpleCallExpression
	| NewExpression
	| ChainExpression
	| ClassExpression
	| ConditionalExpression
	| FunctionExpression
	| Identifier
	| SimpleLiteral
	| RegExpLiteral
	| BigIntLiteral
	| LogicalExpression
	| MemberExpression
	| MetaProperty
	| ObjectExpression
	| SequenceExpression
	| TaggedTemplateExpression
	| TemplateLiteral
	| ThisExpression
	| UpdateExpression
	| YieldExpression
	| FunctionDeclaration
	| MaybeNamedFunctionDeclaration
	| VariableDeclaration
	| ClassDeclaration
	| MaybeNamedClassDeclaration
	| ExpressionStatement
	| BlockStatement
	| StaticBlock
	| EmptyStatement
	| DebuggerStatement
	| WithStatement
	| ReturnStatement
	| LabeledStatement
	| BreakStatement
	| ContinueStatement
	| IfStatement
	| SwitchStatement
	| ThrowStatement
	| TryStatement
	| WhileStatement
	| DoWhileStatement
	| ForStatement
	| ForInStatement
	| ForOfStatement
	| ExportDefaultDeclaration;
declare class Stats {
	/**
	 * Creates an instance of Stats.
	 */
	constructor(compilation: Compilation);
	compilation: Compilation;
	get hash(): string;
	get startTime(): number;
	get endTime(): number;

	/**
	 * Checks whether this stats has warnings.
	 */
	hasWarnings(): boolean;

	/**
	 * Checks whether this stats has errors.
	 */
	hasErrors(): boolean;

	/**
	 * Returns json output.
	 */
	toJson(
		options?:
			| boolean
			| StatsOptions
			| "none"
			| "summary"
			| "errors-only"
			| "errors-warnings"
			| "minimal"
			| "normal"
			| "detailed"
			| "verbose"
	): StatsCompilation;

	/**
	 * Returns a string representation.
	 */
	toString(
		options?:
			| boolean
			| StatsOptions
			| "none"
			| "summary"
			| "errors-only"
			| "errors-warnings"
			| "minimal"
			| "normal"
			| "detailed"
			| "verbose"
	): string;
}
type StatsAsset = KnownStatsAsset & Record<string, any>;
type StatsChunk = KnownStatsChunk & Record<string, any>;
type StatsChunkGroup = KnownStatsChunkGroup & Record<string, any>;
type StatsChunkOrigin = KnownStatsChunkOrigin & Record<string, any>;
type StatsCompilation = KnownStatsCompilation & Record<string, any>;
type StatsError = KnownStatsError & Record<string, any>;
declare abstract class StatsFactory {
	hooks: StatsFactoryHooks;

	/**
	 * Returns created object.
	 */
	create<FactoryData, FallbackCreatedObject>(
		type: string,
		data: FactoryData,
		baseContext: Omit<StatsFactoryContext, "type">
	): CreatedObject<FactoryData, FallbackCreatedObject>;
}
type StatsFactoryContext = KnownStatsFactoryContext & Record<string, any>;
declare interface StatsFactoryHooks {
	extract: HookMap<SyncBailHook<[any, any, StatsFactoryContext], void>>;
	filter: HookMap<
		SyncBailHook<[any, StatsFactoryContext, number, number], boolean | void>
	>;
	sort: HookMap<
		SyncBailHook<
			[((a?: any, b?: any) => 0 | 1 | -1)[], StatsFactoryContext],
			void
		>
	>;
	filterSorted: HookMap<
		SyncBailHook<[any, StatsFactoryContext, number, number], boolean | void>
	>;
	groupResults: HookMap<
		SyncBailHook<[GroupConfig<any, any>[], StatsFactoryContext], void>
	>;
	sortResults: HookMap<
		SyncBailHook<
			[((a?: any, b?: any) => 0 | 1 | -1)[], StatsFactoryContext],
			void
		>
	>;
	filterResults: HookMap<
		SyncBailHook<[any, StatsFactoryContext, number, number], boolean | void>
	>;
	merge: HookMap<SyncBailHook<[any[], StatsFactoryContext], any>>;
	result: HookMap<SyncBailHook<[any, StatsFactoryContext], any>>;
	getItemName: HookMap<SyncBailHook<[any, StatsFactoryContext], string | void>>;
	getItemFactory: HookMap<
		SyncBailHook<[any, StatsFactoryContext], void | StatsFactory>
	>;
}
type StatsLogging = KnownStatsLogging & Record<string, any>;
type StatsLoggingEntry = KnownStatsLoggingEntry & Record<string, any>;
type StatsModule = KnownStatsModule & Record<string, any>;
type StatsModuleIssuer = KnownStatsModuleIssuer & Record<string, any>;
type StatsModuleReason = KnownStatsModuleReason & Record<string, any>;
type StatsModuleTraceDependency = KnownStatsModuleTraceDependency &
	Record<string, any>;
type StatsModuleTraceItem = KnownStatsModuleTraceItem & Record<string, any>;
type StatsObject<T, F> = T extends Compilation
	? StatsCompilation
	: T extends ChunkGroupInfoWithName
		? StatsChunkGroup
		: T extends Chunk
			? StatsChunk
			: T extends OriginRecord
				? StatsChunkOrigin
				: T extends Module
					? StatsModule
					: T extends ModuleGraphConnection
						? StatsModuleReason
						: T extends Asset
							? StatsAsset
							: T extends ModuleTrace
								? StatsModuleTraceItem
								: T extends Dependency
									? StatsModuleTraceDependency
									: T extends Error
										? StatsError
										: T extends ModuleProfile
											? StatsProfile
											: F;

/**
 * Stats options object.
 */
declare interface StatsOptions {
	/**
	 * Fallback value for stats options when an option is not defined (has precedence over local webpack defaults).
	 */
	all?: boolean;

	/**
	 * Add assets information.
	 */
	assets?: boolean;

	/**
	 * Sort the assets by that field.
	 */
	assetsSort?: string | false;

	/**
	 * Space to display assets (groups will be collapsed to fit this space).
	 */
	assetsSpace?: number;

	/**
	 * Add built at time information.
	 */
	builtAt?: boolean;

	/**
	 * Add information about cached (not built) modules (deprecated: use 'cachedModules' instead).
	 * @deprecated
	 */
	cached?: boolean;

	/**
	 * Show cached assets (setting this to `false` only shows emitted files).
	 */
	cachedAssets?: boolean;

	/**
	 * Add information about cached (not built) modules.
	 */
	cachedModules?: boolean;

	/**
	 * Add children information.
	 */
	children?:
		| boolean
		| StatsOptions
		| "none"
		| "summary"
		| "errors-only"
		| "errors-warnings"
		| "minimal"
		| "normal"
		| "detailed"
		| "verbose"
		| StatsValue[];

	/**
	 * Display auxiliary assets in chunk groups.
	 */
	chunkGroupAuxiliary?: boolean;

	/**
	 * Display children of chunk groups.
	 */
	chunkGroupChildren?: boolean;

	/**
	 * Limit of assets displayed in chunk groups.
	 */
	chunkGroupMaxAssets?: number;

	/**
	 * Display all chunk groups with the corresponding bundles.
	 */
	chunkGroups?: boolean;

	/**
	 * Add built modules information to chunk information.
	 */
	chunkModules?: boolean;

	/**
	 * Space to display chunk modules (groups will be collapsed to fit this space, value is in number of modules/group).
	 */
	chunkModulesSpace?: number;

	/**
	 * Add the origins of chunks and chunk merging info.
	 */
	chunkOrigins?: boolean;

	/**
	 * Add information about parent, children and sibling chunks to chunk information.
	 */
	chunkRelations?: boolean;

	/**
	 * Add chunk information.
	 */
	chunks?: boolean;

	/**
	 * Sort the chunks by that field.
	 */
	chunksSort?: string | false;

	/**
	 * Enables/Disables colorful output.
	 */
	colors?:
		| boolean
		| {
				/**
				 * Custom color for bold text.
				 */
				bold?: string;
				/**
				 * Custom color for cyan text.
				 */
				cyan?: string;
				/**
				 * Custom color for green text.
				 */
				green?: string;
				/**
				 * Custom color for magenta text.
				 */
				magenta?: string;
				/**
				 * Custom color for red text.
				 */
				red?: string;
				/**
				 * Custom color for yellow text.
				 */
				yellow?: string;
		  };

	/**
	 * Context directory for request shortening.
	 */
	context?: string;

	/**
	 * Show chunk modules that are dependencies of other modules of the chunk.
	 */
	dependentModules?: boolean;

	/**
	 * Add module depth in module graph.
	 */
	depth?: boolean;

	/**
	 * Display the entry points with the corresponding bundles.
	 */
	entrypoints?: boolean | "auto";

	/**
	 * Add --env information.
	 */
	env?: boolean;

	/**
	 * Add cause to errors.
	 */
	errorCause?: boolean | "auto";

	/**
	 * Add details to errors (like resolving log).
	 */
	errorDetails?: boolean | "auto";

	/**
	 * Add nested errors to errors (like in AggregateError).
	 */
	errorErrors?: boolean | "auto";

	/**
	 * Add internal stack trace to errors.
	 */
	errorStack?: boolean;

	/**
	 * Add errors.
	 */
	errors?: boolean;

	/**
	 * Add errors count.
	 */
	errorsCount?: boolean;

	/**
	 * Space to display errors (value is in number of lines).
	 */
	errorsSpace?: number;

	/**
	 * Please use excludeModules instead.
	 */
	exclude?:
		| string
		| boolean
		| RegExp
		| ModuleFilterItemTypes[]
		| ((
				name: string,
				module: StatsModule,
				type: "module" | "chunk" | "root-of-chunk" | "nested"
		  ) => boolean);

	/**
	 * Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions.
	 */
	excludeAssets?:
		| string
		| RegExp
		| AssetFilterItemTypes[]
		| ((name: string, asset: StatsAsset) => boolean);

	/**
	 * Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions.
	 */
	excludeModules?:
		| string
		| boolean
		| RegExp
		| ModuleFilterItemTypes[]
		| ((
				name: string,
				module: StatsModule,
				type: "module" | "chunk" | "root-of-chunk" | "nested"
		  ) => boolean);

	/**
	 * Group assets by how their are related to chunks.
	 */
	groupAssetsByChunk?: boolean;

	/**
	 * Group assets by their status (emitted, compared for emit or cached).
	 */
	groupAssetsByEmitStatus?: boolean;

	/**
	 * Group assets by their extension.
	 */
	groupAssetsByExtension?: boolean;

	/**
	 * Group assets by their asset info (immutable, development, hotModuleReplacement, etc).
	 */
	groupAssetsByInfo?: boolean;

	/**
	 * Group assets by their path.
	 */
	groupAssetsByPath?: boolean;

	/**
	 * Group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent).
	 */
	groupModulesByAttributes?: boolean;

	/**
	 * Group modules by their status (cached or built and cacheable).
	 */
	groupModulesByCacheStatus?: boolean;

	/**
	 * Group modules by their extension.
	 */
	groupModulesByExtension?: boolean;

	/**
	 * Group modules by their layer.
	 */
	groupModulesByLayer?: boolean;

	/**
	 * Group modules by their path.
	 */
	groupModulesByPath?: boolean;

	/**
	 * Group modules by their type.
	 */
	groupModulesByType?: boolean;

	/**
	 * Group reasons by their origin module.
	 */
	groupReasonsByOrigin?: boolean;

	/**
	 * Add the hash of the compilation.
	 */
	hash?: boolean;

	/**
	 * Add ids.
	 */
	ids?: boolean;

	/**
	 * Add logging output.
	 */
	logging?: boolean | "none" | "verbose" | "error" | "warn" | "info" | "log";

	/**
	 * Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions.
	 */
	loggingDebug?:
		| string
		| boolean
		| RegExp
		| FilterItemTypes[]
		| ((value: string) => boolean);

	/**
	 * Add stack traces to logging output.
	 */
	loggingTrace?: boolean;

	/**
	 * Add information about assets inside modules.
	 */
	moduleAssets?: boolean;

	/**
	 * Add dependencies and origin of warnings/errors.
	 */
	moduleTrace?: boolean;

	/**
	 * Add built modules information.
	 */
	modules?: boolean;

	/**
	 * Sort the modules by that field.
	 */
	modulesSort?: string | false;

	/**
	 * Space to display modules (groups will be collapsed to fit this space, value is in number of modules/groups).
	 */
	modulesSpace?: number;

	/**
	 * Add information about modules nested in other modules (like with module concatenation).
	 */
	nestedModules?: boolean;

	/**
	 * Space to display modules nested within other modules (groups will be collapsed to fit this space, value is in number of modules/group).
	 */
	nestedModulesSpace?: number;

	/**
	 * Show reasons why optimization bailed out for modules.
	 */
	optimizationBailout?: boolean;

	/**
	 * Add information about orphan modules.
	 */
	orphanModules?: boolean;

	/**
	 * Add output path information.
	 */
	outputPath?: boolean;

	/**
	 * Add performance hint flags.
	 */
	performance?: boolean;

	/**
	 * Preset for the default values.
	 */
	preset?: string | boolean;

	/**
	 * Show exports provided by modules.
	 */
	providedExports?: boolean;

	/**
	 * Add public path information.
	 */
	publicPath?: boolean;

	/**
	 * Add information about the reasons why modules are included.
	 */
	reasons?: boolean;

	/**
	 * Space to display reasons (groups will be collapsed to fit this space).
	 */
	reasonsSpace?: number;

	/**
	 * Add information about assets that are related to other assets (like SourceMaps for assets).
	 */
	relatedAssets?: boolean;

	/**
	 * Add information about runtime modules (deprecated: use 'runtimeModules' instead).
	 * @deprecated
	 */
	runtime?: boolean;

	/**
	 * Add information about runtime modules.
	 */
	runtimeModules?: boolean;

	/**
	 * Add the source code of modules.
	 */
	source?: boolean;

	/**
	 * Add timing information.
	 */
	timings?: boolean;

	/**
	 * Show exports used by modules.
	 */
	usedExports?: boolean;

	/**
	 * Add webpack version information.
	 */
	version?: boolean;

	/**
	 * Add warnings.
	 */
	warnings?: boolean;

	/**
	 * Add warnings count.
	 */
	warningsCount?: boolean;

	/**
	 * Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions.
	 */
	warningsFilter?:
		| string
		| RegExp
		| WarningFilterItemTypes[]
		| ((warning: StatsError, warningString: string) => boolean);

	/**
	 * Space to display warnings (value is in number of lines).
	 */
	warningsSpace?: number;
}
declare interface StatsPrintHooks {
	sortElements: HookMap<SyncBailHook<[string[], StatsPrinterContext], void>>;
	printElements: HookMap<
		SyncBailHook<
			[PrintedElement[], StatsPrinterContext],
			undefined | string | void
		>
	>;
	sortItems: HookMap<
		SyncBailHook<[any[], StatsPrinterContext], boolean | void>
	>;
	getItemName: HookMap<SyncBailHook<[any, StatsPrinterContext], string | void>>;
	printItems: HookMap<
		SyncBailHook<[string[], StatsPrinterContext], undefined | string>
	>;
	print: HookMap<
		SyncBailHook<[any, StatsPrinterContext], undefined | string | void>
	>;
	result: HookMap<SyncWaterfallHook<[string, StatsPrinterContext], string>>;
}
declare abstract class StatsPrinter {
	hooks: StatsPrintHooks;

	/**
	 * Returns printed result.
	 */
	print(
		type: string,
		object?: any,
		baseContext?: StatsPrinterContext
	): undefined | string;
}
type StatsPrinterContext = KnownStatsPrinterColorFunctions &
	KnownStatsPrinterFormatters &
	KnownStatsPrinterContext &
	Record<string, any>;
type StatsProfile = KnownStatsProfile & Record<string, any>;
type StatsValue =
	| boolean
	| StatsOptions
	| "none"
	| "summary"
	| "errors-only"
	| "errors-warnings"
	| "minimal"
	| "normal"
	| "detailed"
	| "verbose";
declare interface StreamChunksOptions {
	source?: boolean;
	finalSource?: boolean;
	columns?: boolean;
}

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface StreamOptions {
	flags?: string;
	encoding?:
		| "ascii"
		| "utf8"
		| "utf-8"
		| "utf16le"
		| "utf-16le"
		| "ucs2"
		| "ucs-2"
		| "base64"
		| "base64url"
		| "latin1"
		| "binary"
		| "hex";
	fd?: any;
	mode?: number;
	autoClose?: boolean;
	emitClose?: boolean;
	start?: number;
	signal?: null | AbortSignal;
}
declare interface Stringable {
	toString: () => string;
}
type Supports = undefined | string;
declare class SyncModuleIdsPlugin {
	/**
	 * Creates an instance of SyncModuleIdsPlugin.
	 */
	constructor(options: SyncModuleIdsPluginOptions);
	options: SyncModuleIdsPluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface SyncModuleIdsPluginOptions {
	/**
	 * path to file
	 */
	path: string;

	/**
	 * context for module names
	 */
	context?: string;

	/**
	 * selector for modules
	 */
	test?: (module: Module) => boolean;

	/**
	 * operation mode (defaults to merge)
	 */
	mode?: "read" | "create" | "merge" | "update";
}
declare interface SyntheticDependencyLocation {
	name: string;
	index?: number;
}
declare const TOMBSTONE: unique symbol;
declare const TRANSITIVE_ONLY: unique symbol;
declare interface TagInfo {
	tag: symbol;
	data?:
		| Record<string, any>
		| TopLevelSymbol
		| HarmonySettings
		| ImportSettings
		| CommonJsImportSettings
		| CompatibilitySettings
		| HarmonySpecifierGuards;
	next?: TagInfo;
}
declare interface TargetItemWithConnection {
	module: Module;
	connection: ModuleGraphConnection;
	export?: string[];
}
declare interface TargetItemWithoutConnection {
	module: Module;
	export: string[];
	deferred: boolean;
}
declare class Template {
	constructor();

	/**
	 * Gets function content.
	 */
	static getFunctionContent(fn: Stringable): string;

	/**
	 * Returns created identifier.
	 */
	static toIdentifier(str: string): string;

	/**
	 * Returns a commented version of string.
	 */
	static toComment(str: string): string;

	/**
	 * Returns a commented version of string.
	 */
	static toNormalComment(str: string): string;

	/**
	 * Returns normalized bundle-safe path.
	 */
	static toPath(str: string): string;

	/**
	 * Number to identifier.
	 */
	static numberToIdentifier(n: number): string;

	/**
	 * Number to identifier continuation.
	 */
	static numberToIdentifierContinuation(n: number): string;

	/**
	 * Returns converted identity.
	 */
	static indent(s: string | string[]): string;

	/**
	 * Returns new prefix string.
	 */
	static prefix(s: string | string[], prefix: string): string;

	/**
	 * Returns a single string from array.
	 */
	static asString(str: string | string[]): string;

	/**
	 * Gets modules array bounds.
	 */
	static getModulesArrayBounds(modules: WithId[]): false | [number, number];

	/**
	 * Renders chunk modules.
	 */
	static renderChunkModules(
		renderContext: ChunkRenderContextJavascriptModulesPlugin,
		modules: Module[],
		renderModule: (module: Module, renderInArray?: boolean) => null | Source,
		prefix?: string
	): null | Source;

	/**
	 * Renders runtime modules.
	 */
	static renderRuntimeModules(
		runtimeModules: RuntimeModule[],
		renderContext: RenderContextJavascriptModulesPlugin & {
			codeGenerationResults?: CodeGenerationResults;
		}
	): Source;

	/**
	 * Renders chunk runtime modules.
	 */
	static renderChunkRuntimeModules(
		runtimeModules: RuntimeModule[],
		renderContext: RenderContextJavascriptModulesPlugin
	): Source;
	static NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS: number;
	static NUMBER_OF_IDENTIFIER_START_CHARS: number;
}
type TemplatePath =
	| string
	| ((pathData: PathData, assetInfo?: AssetInfo) => string);
declare interface TimestampAndHash {
	safeTime: number;
	timestamp?: number;
	hash: string;
}
declare class TopLevelSymbol {
	/**
	 * Creates an instance of TopLevelSymbol.
	 */
	constructor(name: string);
	name: string;
}

/**
 * Use a Trusted Types policy to create urls for chunks.
 */
declare interface TrustedTypes {
	/**
	 * If the call to `trustedTypes.createPolicy(...)` fails -- e.g., due to the policy name missing from the CSP `trusted-types` list, or it being a duplicate name, etc. -- controls whether to continue with loading in the hope that `require-trusted-types-for 'script'` isn't enforced yet, versus fail immediately. Default behavior is 'stop'.
	 */
	onPolicyCreationFailure?: "continue" | "stop";

	/**
	 * The name of the Trusted Types policy created by webpack to serve bundle chunks.
	 */
	policyName?: string;
}
declare interface TsconfigOptions {
	/**
	 * A relative path to the tsconfig file based on cwd, or an absolute path of tsconfig file
	 */
	configFile?: string;

	/**
	 * References to other tsconfig files. 'auto' inherits from TypeScript config, or an array of relative/absolute paths
	 */
	references?: string[] | "auto";

	/**
	 * Override baseUrl from tsconfig.json. If provided, this value will be used instead of the baseUrl in the tsconfig file
	 */
	baseUrl?: string;
}
declare interface TsconfigPathsData {
	/**
	 * tsconfig file data
	 */
	alias: AliasOption[];

	/**
	 * tsconfig file data
	 */
	modules: string[];
}
declare interface TsconfigPathsMap {
	/**
	 * main tsconfig paths data
	 */
	main: TsconfigPathsData;

	/**
	 * main tsconfig base URL (absolute path)
	 */
	mainContext: string;

	/**
	 * referenced tsconfig paths data mapped by baseUrl
	 */
	refs: { [index: string]: TsconfigPathsData };

	/**
	 * all contexts (main + refs) for quick lookup
	 */
	allContexts: { [index: string]: TsconfigPathsData };

	/**
	 * file dependencies
	 */
	fileDependencies: Set<string>;
}
declare const UNDEFINED_MARKER: unique symbol;
declare interface URL_url extends URL {}
type UnsafeCacheData = KnownUnsafeCacheData & Record<string, any>;
declare interface UpdateHashContextDependency {
	chunkGraph: ChunkGraph;
	runtime: RuntimeSpec;
	runtimeTemplate?: RuntimeTemplate;
}
declare interface UpdateHashContextGenerator {
	/**
	 * the module
	 */
	module: NormalModule;
	chunkGraph: ChunkGraph;
	runtime: RuntimeSpec;
	runtimeTemplate?: RuntimeTemplate;
}
type Usage = string | true | TopLevelSymbol;
type UsageStateType = 0 | 1 | 2 | 3 | 4;
type UsedName = string | false | string[];
type Value = string | number | boolean | RegExp;
type ValueCacheVersion = string | Set<string>;
declare interface Values {
	[index: string]: Value[];
}
declare class VariableInfo {
	/**
	 * Creates an instance of VariableInfo.
	 */
	constructor(
		declaredScope: ScopeInfo,
		name: undefined | string,
		flags: VariableInfoFlagsType,
		tagInfo?: TagInfo
	);
	declaredScope: ScopeInfo;
	name?: string;
	flags: VariableInfoFlagsType;
	tagInfo?: TagInfo;

	/**
	 * Checks whether this variable info is free.
	 */
	isFree(): boolean;

	/**
	 * Checks whether this variable info is tagged.
	 */
	isTagged(): boolean;
}
type VariableInfoFlagsType = 0 | 1 | 2 | 4;

/**
 * A virtual module definition.
 */
declare interface VirtualModule {
	/**
	 * The context for the virtual module. A string path. Defaults to 'auto', which will try to resolve the context from the module id.
	 */
	context?: string;

	/**
	 * The source function that provides the virtual content.
	 */
	source: (
		loaderContext: LoaderContext<any>
	) => string | Buffer | Promise<string | Buffer>;

	/**
	 * The module type.
	 */
	type?: string;

	/**
	 * Optional version function or value for cache invalidation.
	 */
	version?: string | true | (() => string);
}
type VirtualModuleContent =
	| string
	| ((
			loaderContext: LoaderContext<any>
	  ) => string | Buffer | Promise<string | Buffer>)
	| VirtualModule;
declare interface VirtualModules {
	[index: string]: VirtualModuleContent;
}

/**
 * Options for building virtual resources.
 */
declare interface VirtualUrlOptions {
	/**
	 * The default context for virtual modules. A string path. Defaults to 'auto', which will try to resolve the context from the module id.
	 */
	context?: string;

	/**
	 * The virtual modules configuration.
	 */
	modules: { [index: string]: VirtualModuleContent };

	/**
	 * The URL scheme to use for virtual resources.
	 */
	scheme?: string;
}
declare class VirtualUrlPlugin {
	/**
	 * Creates an instance of VirtualUrlPlugin.
	 */
	constructor(
		modules: VirtualModules,
		schemeOrOptions?: string | Omit<VirtualUrlOptions, "modules">
	);
	options: VirtualUrlOptions;
	scheme: string;
	context?: string;
	modules: NormalizedModules;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;

	/**
	 * Finds virtual module config by id.
	 */
	findVirtualModuleConfigById(id: string): VirtualModule;

	/**
	 * Get the cache version for a given version value
	 */
	getCacheVersion(version: string | true | (() => string)): undefined | string;
	static DEFAULT_SCHEME: string;
}
type WarningFilterItemTypes =
	| string
	| RegExp
	| ((warning: StatsError, warningString: string) => boolean);

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface WatchFileSystem {
	watch: (
		files: Iterable<string>,
		directories: Iterable<string>,
		missing: Iterable<string>,
		startTime: number,
		options: WatchOptions,
		callback: (
			err: null | Error,
			timeInfoEntries1?: Map<
				string,
				| null
				| EntryTypesIndex
				| OnlySafeTimeEntry
				| ExistenceOnlyTimeEntryTypesIndex
				| "ignore"
			>,
			timeInfoEntries2?: Map<
				string,
				| null
				| EntryTypesIndex
				| OnlySafeTimeEntry
				| ExistenceOnlyTimeEntryTypesIndex
				| "ignore"
			>,
			changes?: Set<string>,
			removals?: Set<string>
		) => void,
		callbackUndelayed: (value: string, num: number) => void
	) => Watcher;
}
declare class WatchIgnorePlugin {
	/**
	 * Creates an instance of WatchIgnorePlugin.
	 */
	constructor(options: WatchIgnorePluginOptions);
	options: WatchIgnorePluginOptions;

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare interface WatchIgnorePluginOptions {
	/**
	 * A list of RegExps or absolute paths to directories or files that should be ignored.
	 */
	paths: (string | RegExp)[];
}

/**
 * Options for the watcher.
 */
declare interface WatchOptions {
	/**
	 * Delay the rebuilt after the first change. Value is a time in ms.
	 */
	aggregateTimeout?: number;

	/**
	 * Resolve symlinks and watch symlink and real file. This is usually not needed as webpack already resolves symlinks ('resolve.symlinks').
	 */
	followSymlinks?: boolean;

	/**
	 * Ignore some files from watching (glob pattern or regexp).
	 */
	ignored?: string | RegExp | string[];

	/**
	 * Enable polling mode for watching.
	 */
	poll?: number | boolean;

	/**
	 * Stop watching when stdin stream has ended.
	 */
	stdin?: boolean;
}

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface Watcher {
	/**
	 * closes the watcher and all underlying file watchers
	 */
	close: () => void;

	/**
	 * closes the watcher, but keeps underlying file watchers alive until the next watch call
	 */
	pause: () => void;

	/**
	 * get current aggregated changes that have not yet send to callback
	 */
	getAggregatedChanges?: () => null | Set<string>;

	/**
	 * get current aggregated removals that have not yet send to callback
	 */
	getAggregatedRemovals?: () => null | Set<string>;

	/**
	 * get info about files
	 */
	getFileTimeInfoEntries: () => Map<
		string,
		| null
		| EntryTypesIndex
		| OnlySafeTimeEntry
		| ExistenceOnlyTimeEntryTypesIndex
		| "ignore"
	>;

	/**
	 * get info about directories
	 */
	getContextTimeInfoEntries: () => Map<
		string,
		| null
		| EntryTypesIndex
		| OnlySafeTimeEntry
		| ExistenceOnlyTimeEntryTypesIndex
		| "ignore"
	>;

	/**
	 * get info about timestamps and changes
	 */
	getInfo?: () => WatcherInfo;
}

/**
 * Returns location of targetPath relative to rootPath.
 */
declare interface WatcherInfo {
	/**
	 * get current aggregated changes that have not yet send to callback
	 */
	changes: null | Set<string>;

	/**
	 * get current aggregated removals that have not yet send to callback
	 */
	removals: null | Set<string>;

	/**
	 * get info about files
	 */
	fileTimeInfoEntries: Map<
		string,
		| null
		| EntryTypesIndex
		| OnlySafeTimeEntry
		| ExistenceOnlyTimeEntryTypesIndex
		| "ignore"
	>;

	/**
	 * get info about directories
	 */
	contextTimeInfoEntries: Map<
		string,
		| null
		| EntryTypesIndex
		| OnlySafeTimeEntry
		| ExistenceOnlyTimeEntryTypesIndex
		| "ignore"
	>;
}
declare abstract class Watching {
	startTime: null | number;
	invalid: boolean;
	handler: CallbackWebpackFunction_2<Stats, void>;
	callbacks: ((err: null | Error, result?: void) => void)[];
	closed: boolean;
	suspended: boolean;
	blocked: boolean;
	watchOptions: WatchOptions;
	compiler: Compiler;
	running: boolean;
	watcher?: null | Watcher;
	pausedWatcher?: null | Watcher;
	lastWatcherStartTime?: number;

	/**
	 * Processes the provided file.
	 */
	watch(
		files: Iterable<string>,
		dirs: Iterable<string>,
		missing: Iterable<string>
	): void;

	/**
	 * Processes the provided error callback.
	 */
	invalidate(callback?: (err: null | Error, result?: void) => void): void;
	suspend(): void;
	resume(): void;

	/**
	 * Processes the provided error callback.
	 */
	close(callback: (err: null | Error, result?: void) => void): void;
}
declare abstract class WeakTupleMap<K extends any[], V> {
	/**
	 * Stores a value at the node identified by the provided tuple key.
	 */
	set(...args: [K, ...V[]]): void;

	/**
	 * Checks whether the exact tuple key has a stored value.
	 */
	has(...args: K): boolean;

	/**
	 * Returns the value stored for the exact tuple key, if any.
	 */
	get(...args: K): undefined | V;

	/**
	 * Returns an existing value for the tuple or computes, stores, and returns a
	 * new one when the tuple is missing.
	 */
	provide(...args: [K, ...((...args: K) => V)[]]): V;

	/**
	 * Removes the value stored for the tuple key without pruning the trie.
	 */
	delete(...args: K): void;

	/**
	 * Clears the stored value and all strong and weak child maps from this node.
	 */
	clear(): void;
}
declare abstract class WebAssemblyParser extends ParserClass {}
declare interface WebAssemblyRenderContext {
	/**
	 * the chunk
	 */
	chunk: Chunk;

	/**
	 * the dependency templates
	 */
	dependencyTemplates: DependencyTemplates;

	/**
	 * the runtime template
	 */
	runtimeTemplate: RuntimeTemplate;

	/**
	 * the module graph
	 */
	moduleGraph: ModuleGraph;

	/**
	 * the chunk graph
	 */
	chunkGraph: ChunkGraph;

	/**
	 * results of code generation
	 */
	codeGenerationResults: CodeGenerationResults;
}
declare class WebWorkerTemplatePlugin {
	constructor();

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 */
	apply(compiler: Compiler): void;
}
declare class WebpackError extends Error {
	/**
	 * Creates an instance of WebpackError.
	 */
	constructor(message?: string, options?: { cause?: unknown });
	[index: number]: () => string;
	details?: string;
	module?: null | Module;
	loc?: SyntheticDependencyLocation | RealDependencyLocation;
	hideStack?: boolean;
	chunk?: Chunk;
	file?: string;

	/**
	 * Serializes this instance into the provided serializer context.
	 */
	serialize(__0: ObjectSerializerContext): void;

	/**
	 * Restores this instance from the provided deserializer context.
	 */
	deserialize(__0: ObjectDeserializerContext): void;

	/**
	 * Creates a `.stack` property on `targetObject`, which when accessed returns
	 * a string representing the location in the code at which
	 * `Error.captureStackTrace()` was called.
	 * ```js
	 * const myObject = {};
	 * Error.captureStackTrace(myObject);
	 * myObject.stack;  // Similar to `new Error().stack`
	 * ```
	 * The first line of the trace will be prefixed with
	 * `${myObject.name}: ${myObject.message}`.
	 * The optional `constructorOpt` argument accepts a function. If given, all frames
	 * above `constructorOpt`, including `constructorOpt`, will be omitted from the
	 * generated stack trace.
	 * The `constructorOpt` argument is useful for hiding implementation
	 * details of error generation from the user. For instance:
	 * ```js
	 * function a() {
	 *   b();
	 * }
	 * function b() {
	 *   c();
	 * }
	 * function c() {
	 *   // Create an error without stack trace to avoid calculating the stack trace twice.
	 *   const { stackTraceLimit } = Error;
	 *   Error.stackTraceLimit = 0;
	 *   const error = new Error();
	 *   Error.stackTraceLimit = stackTraceLimit;
	 *   // Capture the stack trace above function b
	 *   Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
	 *   throw error;
	 * }
	 * a();
	 * ```
	 */
	static captureStackTrace(
		targetObject: object,
		constructorOpt?: Function
	): void;
	static prepareStackTrace(err: Error, stackTraces: NodeJS.CallSite[]): any;

	/**
	 * The `Error.stackTraceLimit` property specifies the number of stack frames
	 * collected by a stack trace (whether generated by `new Error().stack` or
	 * `Error.captureStackTrace(obj)`).
	 * The default value is `10` but may be set to any valid JavaScript number. Changes
	 * will affect any stack trace captured _after_ the value has been changed.
	 * If set to a non-number value, or set to a negative number, stack traces will
	 * not capture any frames.
	 */
	static stackTraceLimit: number;
}
declare abstract class WebpackLogger {
	getChildLogger: (name: string | (() => string)) => WebpackLogger;

	/**
	 * Processes the provided arg.
	 */
	error(...args: any[]): void;

	/**
	 * Processes the provided arg.
	 */
	warn(...args: any[]): void;

	/**
	 * Processes the provided arg.
	 */
	info(...args: any[]): void;

	/**
	 * Processes the provided arg.
	 */
	log(...args: any[]): void;

	/**
	 * Processes the provided arg.
	 */
	debug(...args: any[]): void;

	/**
	 * Processes the provided condition.
	 */
	assert(condition: undefined | boolean, ...args: any[]): void;
	trace(): void;
	clear(): void;

	/**
	 * Processes the provided arg.
	 */
	status(...args: any[]): void;

	/**
	 * Processes the provided arg.
	 */
	group(...args: any[]): void;

	/**
	 * Processes the provided arg.
	 */
	groupCollapsed(...args: any[]): void;
	groupEnd(): void;

	/**
	 * Processes the provided label.
	 */
	profile(label?: string): void;

	/**
	 * Processes the provided label.
	 */
	profileEnd(label?: string): void;

	/**
	 * Processes the provided label.
	 */
	time(label: string): void;

	/**
	 * Processes the provided label.
	 */
	timeLog(label?: string): void;

	/**
	 * Processes the provided label.
	 */
	timeEnd(label?: string): void;

	/**
	 * Processes the provided label.
	 */
	timeAggregate(label?: string): void;

	/**
	 * Time aggregate end.
	 */
	timeAggregateEnd(label?: string): void;
}
declare class WebpackOptionsApply extends OptionsApply {
	constructor();
}
declare class WebpackOptionsDefaulter {
	constructor();

	/**
	 * Returns normalized webpack options.
	 */
	process(options: Configuration): WebpackOptionsNormalized;
}
declare interface WebpackOptionsInterception {
	devtool?:
		| string
		| false
		| {
				/**
				 * Which asset type should receive this devtool value.
				 */
				type: "all" | "javascript" | "css";
				/**
				 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
				 */
				use: RawDevTool;
		  }[];
}

/**
 * Normalized webpack options object.
 */
declare interface WebpackOptionsNormalized {
	/**
	 * Set the value of `require.amd` and `define.amd`. Or disable AMD support.
	 */
	amd?: false | { [index: string]: any };

	/**
	 * Report the first error as a hard error instead of tolerating it.
	 */
	bail?: boolean;

	/**
	 * Cache generated modules and chunks to improve performance for multiple incremental builds.
	 */
	cache: CacheOptionsNormalized;

	/**
	 * The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
	 */
	context?: string;

	/**
	 * References to other configurations to depend on.
	 */
	dependencies?: string[];

	/**
	 * Options for the webpack-dev-server.
	 */
	devServer?: false | { [index: string]: any };

	/**
	 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
	 */
	devtool?:
		| string
		| false
		| {
				/**
				 * Which asset type should receive this devtool value.
				 */
				type: "all" | "javascript" | "css";
				/**
				 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
				 */
				use: RawDevTool;
		  }[];

	/**
	 * Enable and configure the Dotenv plugin to load environment variables from .env files.
	 */
	dotenv?: boolean | DotenvPluginOptions;

	/**
	 * The entry point(s) of the compilation.
	 */
	entry: EntryNormalized;

	/**
	 * Enables/Disables experiments (experimental features with relax SemVer compatibility).
	 */
	experiments: ExperimentsNormalized;

	/**
	 * Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
	 */
	externals: Externals;

	/**
	 * Enable presets of externals for specific targets.
	 */
	externalsPresets: ExternalsPresets;

	/**
	 * Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).
	 */
	externalsType?:
		| "import"
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "commonjs-static"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system"
		| "promise"
		| "module-import"
		| "script"
		| "node-commonjs"
		| "asset"
		| "css-import"
		| "css-url";

	/**
	 * Ignore specific warnings.
	 */
	ignoreWarnings?: ((warning: Error, compilation: Compilation) => boolean)[];

	/**
	 * Options for infrastructure level logging.
	 */
	infrastructureLogging: InfrastructureLogging;

	/**
	 * Custom values available in the loader context.
	 */
	loader?: Loader;

	/**
	 * Enable production optimizations or development hints.
	 */
	mode?: "none" | "development" | "production";

	/**
	 * Options affecting the normal modules (`NormalModuleFactory`).
	 */
	module: ModuleOptionsNormalized;

	/**
	 * Name of the configuration. Used when loading multiple configurations.
	 */
	name?: string;

	/**
	 * Include polyfills or mocks for various node stuff.
	 */
	node: Node;

	/**
	 * Enables/Disables integrated optimizations.
	 */
	optimization: OptimizationNormalized;

	/**
	 * Normalized options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
	 */
	output: OutputNormalized;

	/**
	 * The number of parallel processed modules in the compilation.
	 */
	parallelism?: number;

	/**
	 * Configuration for web performance recommendations.
	 */
	performance?: false | PerformanceOptions;

	/**
	 * Add additional plugins to the compiler.
	 */
	plugins: (
		| ((this: Compiler, compiler: Compiler) => void)
		| WebpackPluginInstance
	)[];

	/**
	 * Capture timing information for each module.
	 */
	profile?: boolean;

	/**
	 * Store compiler state to a json file.
	 */
	recordsInputPath?: string | false;

	/**
	 * Load compiler state from a json file.
	 */
	recordsOutputPath?: string | false;

	/**
	 * Options for the resolver.
	 */
	resolve: ResolveOptions;

	/**
	 * Options for the resolver when resolving loaders.
	 */
	resolveLoader: ResolveOptions;

	/**
	 * Options affecting how file system snapshots are created and validated.
	 */
	snapshot: SnapshotOptionsWebpackOptions;

	/**
	 * Stats options object or preset name.
	 */
	stats: StatsValue;

	/**
	 * Environment to build for. An array of environments to build for all of them when possible.
	 */
	target?: string | false | string[];

	/**
	 * Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.
	 */
	validate?: boolean;

	/**
	 * Enter watch mode, which rebuilds on file change.
	 */
	watch?: boolean;

	/**
	 * Options for the watcher.
	 */
	watchOptions: WatchOptions;
}
type WebpackOptionsNormalizedWithDefaults = WebpackOptionsNormalized & {
	context: string;
} & { infrastructureLogging: InfrastructureLoggingNormalizedWithDefaults } & {
	target: NonNullable<undefined | string | false | string[]>;
} & { output: OutputNormalizedWithDefaults } & {
	optimization: OptimizationNormalizedWithDefaults;
} & {
	devtool: NonNullable<
		| undefined
		| string
		| false
		| {
				/**
				 * Which asset type should receive this devtool value.
				 */
				type: "all" | "javascript" | "css";
				/**
				 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
				 */
				use: RawDevTool;
		  }[]
	>;
} & { stats: NonNullable<StatsValue> } & { node: NonNullable<Node> } & {
	profile: NonNullable<undefined | boolean>;
} & { parallelism: number } & { snapshot: SnapshotNormalizedWithDefaults } & {
	externalsPresets: ExternalsPresetsNormalizedWithDefaults;
} & {
	externalsType: NonNullable<
		| undefined
		| "import"
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "commonjs-static"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system"
		| "promise"
		| "module-import"
		| "script"
		| "node-commonjs"
		| "asset"
		| "css-import"
		| "css-url"
	>;
} & { watch: NonNullable<undefined | boolean> } & {
	performance: NonNullable<undefined | false | PerformanceOptions>;
} & { recordsInputPath: NonNullable<undefined | string | false> } & {
	recordsOutputPath: NonNullable<undefined | string | false>;
} & { dotenv: NonNullable<undefined | boolean | DotenvPluginOptions> };

/**
 * Plugin instance.
 */
declare interface WebpackPluginInstance {
	[index: string]: any;

	/**
	 * The run point of the plugin, required method.
	 */
	apply: (compiler: Compiler) => void;
}

declare interface WebpackRequire {
	(id: string): any;
	i?: ((options: ExecuteOptions) => void)[];
	c?: Record<string, ExecuteModuleObject>;
}
declare interface WithId {
	id: string | number;
}
declare interface WithOptions {
	/**
	 * create a resolver with additional/different options
	 */
	withOptions: (
		options: Partial<ResolveOptionsWithDependencyType>
	) => ResolverWithOptions;
}
declare interface WriteFile {
	(
		file: PathOrFileDescriptorFs,
		data: string | NodeJS.ArrayBufferView,
		options: WriteFileOptions,
		callback: (err: null | NodeJS.ErrnoException) => void
	): void;
	(
		file: PathOrFileDescriptorFs,
		data: string | NodeJS.ArrayBufferView,
		callback: (err: null | NodeJS.ErrnoException) => void
	): void;
}
type WriteFileOptions =
	| null
	| "ascii"
	| "utf8"
	| "utf-8"
	| "utf16le"
	| "utf-16le"
	| "ucs2"
	| "ucs-2"
	| "base64"
	| "base64url"
	| "latin1"
	| "binary"
	| "hex"
	| (ObjectEncodingOptionsFs &
			Abortable & { mode?: string | number; flag?: string; flush?: boolean });
declare interface WriteOnlySet<T> {
	add: (item: T) => void;
}
type WriteStreamOptions = StreamOptions & {
	fs?: null | CreateWriteStreamFSImplementation;
	flush?: boolean;
};

/**
 * Returns compiler or MultiCompiler.
 */
declare interface _functionWebpack {
	/**
	 * Returns the compiler object.
	 */
	(
		options: Configuration,
		callback: CallbackWebpackFunction_2<Stats, void>
	): null | Compiler;

	/**
	 * Returns the compiler object.
	 */
	(options: Configuration): Compiler;

	/**
	 * Returns the multi compiler object.
	 */
	(
		options: MultiConfiguration,
		callback: CallbackWebpackFunction_2<MultiStats, void>
	): null | MultiCompiler;

	/**
	 * Returns the multi compiler object.
	 */
	(options: MultiConfiguration): MultiCompiler;
}
declare interface chunkModuleHashMap {
	[index: number]: string;
	[index: string]: string;
}
type ecmaVersion =
	| 3
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 2015
	| 2016
	| 2017
	| 2018
	| 2019
	| 2020
	| 2021
	| 2022
	| 2023
	| 2024
	| 2025
	| 2026
	| "latest";
declare function exports(
	options: Configuration,
	callback: CallbackWebpackFunction_2<Stats, void>
): null | Compiler;
declare function exports(options: Configuration): Compiler;
declare function exports(
	options: MultiConfiguration,
	callback: CallbackWebpackFunction_2<MultiStats, void>
): null | MultiCompiler;
declare function exports(options: MultiConfiguration): MultiCompiler;
declare namespace exports {
	export const webpack: _functionWebpack;
	export const validate: (
		configuration: Configuration | MultiConfiguration
	) => void;
	export const validateSchema: (
		schema: Parameters<typeof validateFunction>[0],
		options: Parameters<typeof validateFunction>[1],
		validationConfiguration?: ValidationErrorConfiguration
	) => void;
	export const version: string;
	export namespace cli {
		export let createColors: (__0?: ColorsOptions) => Colors;
		export let getArguments: (
			schema?:
				| (JSONSchema4 & {
						absolutePath: boolean;
						instanceof: string;
						cli: {
							helper?: boolean;
							exclude?: boolean;
							description?: string;
							negatedDescription?: string;
							resetDescription?: string;
						};
				  })
				| (JSONSchema6 & {
						absolutePath: boolean;
						instanceof: string;
						cli: {
							helper?: boolean;
							exclude?: boolean;
							description?: string;
							negatedDescription?: string;
							resetDescription?: string;
						};
				  })
				| (JSONSchema7 & {
						absolutePath: boolean;
						instanceof: string;
						cli: {
							helper?: boolean;
							exclude?: boolean;
							description?: string;
							negatedDescription?: string;
							resetDescription?: string;
						};
				  })
		) => Flags;
		export let isColorSupported: () => boolean;
		export let processArguments: (
			args: Flags,
			config: ObjectConfiguration,
			values: Values
		) => null | Problem[];
	}
	export namespace ModuleFilenameHelpers {
		export let ALL_LOADERS_RESOURCE: string;
		export let REGEXP_ALL_LOADERS_RESOURCE: RegExp;
		export let LOADERS_RESOURCE: string;
		export let REGEXP_LOADERS_RESOURCE: RegExp;
		export let RESOURCE: string;
		export let REGEXP_RESOURCE: RegExp;
		export let ABSOLUTE_RESOURCE_PATH: string;
		export let REGEXP_ABSOLUTE_RESOURCE_PATH: RegExp;
		export let RESOURCE_PATH: string;
		export let REGEXP_RESOURCE_PATH: RegExp;
		export let ALL_LOADERS: string;
		export let REGEXP_ALL_LOADERS: RegExp;
		export let LOADERS: string;
		export let REGEXP_LOADERS: RegExp;
		export let QUERY: string;
		export let REGEXP_QUERY: RegExp;
		export let ID: string;
		export let REGEXP_ID: RegExp;
		export let HASH: string;
		export let REGEXP_HASH: RegExp;
		export let NAMESPACE: string;
		export let REGEXP_NAMESPACE: RegExp;
		export let createFilename: (
			module: string | Module,
			options: {
				namespace?: string;
				moduleFilenameTemplate?:
					| string
					| ((context: ModuleFilenameTemplateContext) => string);
			},
			__2: {
				requestShortener: RequestShortener;
				chunkGraph: ChunkGraph;
				hashFunction?: string | typeof Hash;
			}
		) => string;
		export let replaceDuplicates: <T>(
			array: T[],
			fn: (
				duplicateItem: T,
				duplicateItemIndex: number,
				numberOfTimesReplaced: number
			) => T,
			comparator?: (firstElement: T, nextElement: T) => 0 | 1 | -1
		) => T[];
		export let matchPart: (str: string, test: Matcher) => boolean;
		export let matchObject: (obj: MatchObject, str: string) => boolean;
	}
	export namespace OptimizationStages {
		export let STAGE_ADVANCED: 10;
		export let STAGE_BASIC: -10;
		export let STAGE_DEFAULT: 0;
	}
	export namespace RuntimeGlobals {
		export let amdDefine: "__webpack_require__.amdD";
		export let amdOptions: "__webpack_require__.amdO";
		export let asyncModule: "__webpack_require__.a";
		export let asyncModuleDoneSymbol: "__webpack_require__.aD";
		export let asyncModuleExportSymbol: "__webpack_require__.aE";
		export let baseURI: "__webpack_require__.b";
		export let chunkCallback: "webpackChunk";
		export let chunkName: "__webpack_require__.cn";
		export let compatGetDefaultExport: "__webpack_require__.n";
		export let compileWasm: "__webpack_require__.vs";
		export let createFakeNamespaceObject: "__webpack_require__.t";
		export let createScript: "__webpack_require__.ts";
		export let createScriptUrl: "__webpack_require__.tu";
		export let cssInjectStyle: "__webpack_require__.is";
		export let cssMergeStyleSheets: "__webpack_require__.mcs";
		export let currentRemoteGetScope: "__webpack_require__.R";
		export let deferredModuleAsyncTransitiveDependencies: "__webpack_require__.zT";
		export let deferredModuleAsyncTransitiveDependenciesSymbol: "__webpack_require__.zS";
		export let definePropertyGetters: "__webpack_require__.d";
		export let ensureChunk: "__webpack_require__.e";
		export let ensureChunkHandlers: "__webpack_require__.f";
		export let ensureChunkIncludeEntries: "__webpack_require__.f (include entries)";
		export let entryModuleId: "__webpack_require__.s";
		export let esmId: "__webpack_esm_id__";
		export let esmIds: "__webpack_esm_ids__";
		export let esmModules: "__webpack_esm_modules__";
		export let esmRuntime: "__webpack_esm_runtime__";
		export let exports: "__webpack_exports__";
		export let externalInstallChunk: "__webpack_require__.C";
		export let getChunkCssFilename: "__webpack_require__.k";
		export let getChunkScriptFilename: "__webpack_require__.u";
		export let getChunkUpdateCssFilename: "__webpack_require__.hk";
		export let getChunkUpdateScriptFilename: "__webpack_require__.hu";
		export let getFullHash: "__webpack_require__.h";
		export let getTrustedTypesPolicy: "__webpack_require__.tt";
		export let getUpdateManifestFilename: "__webpack_require__.hmrF";
		export let global: "__webpack_require__.g";
		export let harmonyModuleDecorator: "__webpack_require__.hmd";
		export let hasCssModules: "has css modules";
		export let hasFetchPriority: "has fetch priority";
		export let hasOwnProperty: "__webpack_require__.o";
		export let hmrDownloadManifest: "__webpack_require__.hmrM";
		export let hmrDownloadUpdateHandlers: "__webpack_require__.hmrC";
		export let hmrInvalidateModuleHandlers: "__webpack_require__.hmrI";
		export let hmrModuleData: "__webpack_require__.hmrD";
		export let hmrRuntimeStatePrefix: "__webpack_require__.hmrS";
		export let initializeSharing: "__webpack_require__.I";
		export let instantiateWasm: "__webpack_require__.v";
		export let interceptModuleExecution: "__webpack_require__.i";
		export let loadScript: "__webpack_require__.l";
		export let makeDeferredNamespaceObject: "__webpack_require__.z";
		export let makeNamespaceObject: "__webpack_require__.r";
		export let makeOptimizedDeferredNamespaceObject: "__webpack_require__.zO";
		export let module: "module";
		export let moduleCache: "__webpack_require__.c";
		export let moduleFactories: "__webpack_require__.m";
		export let moduleFactoriesAddOnly: "__webpack_require__.m (add only)";
		export let moduleId: "module.id";
		export let moduleLoaded: "module.loaded";
		export let nodeModuleDecorator: "__webpack_require__.nmd";
		export let onChunksLoaded: "__webpack_require__.O";
		export let prefetchChunk: "__webpack_require__.E";
		export let prefetchChunkHandlers: "__webpack_require__.F";
		export let preloadChunk: "__webpack_require__.G";
		export let preloadChunkHandlers: "__webpack_require__.H";
		export let publicPath: "__webpack_require__.p";
		export let relativeUrl: "__webpack_require__.U";
		export let require: "__webpack_require__";
		export let requireScope: "__webpack_require__.*";
		export let returnExportsFromRuntime: "return-exports-from-runtime";
		export let runtimeId: "__webpack_require__.j";
		export let scriptNonce: "__webpack_require__.nc";
		export let shareScopeMap: "__webpack_require__.S";
		export let startup: "__webpack_require__.x";
		export let startupEntrypoint: "__webpack_require__.X";
		export let startupNoDefault: "__webpack_require__.x (no default handler)";
		export let startupOnlyAfter: "__webpack_require__.x (only after)";
		export let startupOnlyBefore: "__webpack_require__.x (only before)";
		export let system: "__webpack_require__.System";
		export let systemContext: "__webpack_require__.y";
		export let thisAsExports: "top-level-this-exports";
		export let toBinary: "__webpack_require__.tb";
		export let uncaughtErrorHandler: "__webpack_require__.oe";
		export let wasmInstances: "__webpack_require__.w";
	}
	export const UsageState: Readonly<{
		Unused: 0;
		OnlyPropertiesUsed: 1;
		NoInfo: 2;
		Unknown: 3;
		Used: 4;
	}>;
	export namespace cache {
		export { MemoryCachePlugin };
	}
	export namespace config {
		export const getNormalizedWebpackOptions: (
			config: Configuration
		) => WebpackOptionsNormalized;
		export const applyWebpackOptionsDefaults: (
			options: WebpackOptionsNormalized,
			compilerIndex?: number
		) => ResolvedOptions;
	}
	export namespace dependencies {
		export {
			ModuleDependency,
			HarmonyImportDependency,
			ConstDependency,
			NullDependency
		};
	}
	export namespace ids {
		export {
			ChunkModuleIdRangePlugin,
			NaturalModuleIdsPlugin,
			OccurrenceModuleIdsPlugin,
			NamedModuleIdsPlugin,
			DeterministicChunkIdsPlugin,
			DeterministicModuleIdsPlugin,
			NamedChunkIdsPlugin,
			OccurrenceChunkIdsPlugin,
			HashedModuleIdsPlugin
		};
	}
	export namespace javascript {
		export {
			EnableChunkLoadingPlugin,
			JavascriptModulesPlugin,
			JavascriptParser
		};
	}
	export namespace optimize {
		export namespace InnerGraph {
			export let addUsage: (
				state: ParserState,
				symbol: null | TopLevelSymbol,
				usage: Usage
			) => void;
			export let addVariableUsage: (
				parser: JavascriptParser,
				name: string,
				usage: Usage
			) => void;
			export let bailout: (parserState: ParserState) => void;
			export let enable: (parserState: ParserState) => void;
			export let getDependencyUsedByExportsCondition: (
				dependency: Dependency,
				usedByExports: undefined | boolean | Set<string>,
				moduleGraph: ModuleGraph
			) =>
				| null
				| false
				| ((
						moduleGraphConnection: ModuleGraphConnection,
						runtime: RuntimeSpec
				  ) => ConnectionState);
			export let getTopLevelSymbol: (
				state: ParserState
			) => void | TopLevelSymbol;
			export let inferDependencyUsage: (state: ParserState) => void;
			export let isDependencyUsedByExports: (
				dependency: Dependency,
				usedByExports: undefined | boolean | Set<string>,
				moduleGraph: ModuleGraph,
				runtime: RuntimeSpec
			) => boolean;
			export let isEnabled: (parserState: ParserState) => boolean;
			export let onUsage: (
				state: ParserState,
				onUsageCallback: (value?: boolean | Set<string>) => void
			) => void;
			export let setTopLevelSymbol: (
				state: ParserState,
				symbol?: TopLevelSymbol
			) => void;
			export let tagTopLevelSymbol: (
				parser: JavascriptParser,
				name: string
			) => undefined | TopLevelSymbol;
			export { TopLevelSymbol, topLevelSymbolTag };
		}
		export {
			AggressiveMergingPlugin,
			AggressiveSplittingPlugin,
			LimitChunkCountPlugin,
			MergeDuplicateChunksPlugin,
			MinChunkSizePlugin,
			ModuleConcatenationPlugin,
			RealContentHashPlugin,
			RuntimeChunkPlugin,
			SideEffectsFlagPlugin,
			SplitChunksPlugin
		};
	}
	export namespace runtime {
		export { GetChunkFilenameRuntimeModule, LoadScriptRuntimeModule };
	}
	export namespace prefetch {
		export { ChunkPrefetchPreloadPlugin };
	}
	export namespace web {
		export {
			FetchCompileWasmPlugin,
			FetchCompileAsyncWasmPlugin,
			JsonpChunkLoadingRuntimeModule,
			JsonpTemplatePlugin,
			CssLoadingRuntimeModule
		};
	}
	export namespace esm {
		export { ModuleChunkLoadingRuntimeModule };
	}
	export namespace webworker {
		export { WebWorkerTemplatePlugin };
	}
	export namespace node {
		export {
			NodeEnvironmentPlugin,
			NodeSourcePlugin,
			NodeTargetPlugin,
			NodeTemplatePlugin,
			ReadFileCompileWasmPlugin,
			ReadFileCompileAsyncWasmPlugin
		};
	}
	export namespace electron {
		export { ElectronTargetPlugin };
	}
	export namespace wasm {
		export { AsyncWebAssemblyModulesPlugin, EnableWasmLoadingPlugin };
	}
	export namespace css {
		export { CssModulesPlugin };
	}
	export namespace library {
		export { AbstractLibraryPlugin, EnableLibraryPlugin };
	}
	export namespace container {
		export const scope: <T>(
			scope: string,
			options: ContainerOptionsFormat<T>
		) => Record<string, string | string[] | T>;
		export {
			ContainerPlugin,
			ContainerReferencePlugin,
			ModuleFederationPlugin
		};
	}
	export namespace sharing {
		export const scope: <T>(
			scope: string,
			options: ContainerOptionsFormat<T>
		) => Record<string, string | string[] | T>;
		export { ConsumeSharedPlugin, ProvideSharedPlugin, SharePlugin };
	}
	export namespace debug {
		export { ProfilingPlugin };
	}
	export namespace util {
		export const createHash: (algorithm: HashFunction) => Hash;
		export namespace comparators {
			export let compareChunkGroupsByIndex: (
				a: ChunkGroup,
				b: ChunkGroup
			) => 0 | 1 | -1;
			export let compareChunks: ParameterizedComparator<ChunkGraph, Chunk>;
			export let compareChunksById: (a: Chunk, b: Chunk) => 0 | 1 | -1;
			export let compareChunksNatural: (
				chunkGraph: ChunkGraph
			) => Comparator<Chunk>;
			export let compareIds: (
				a: string | number,
				b: string | number
			) => 0 | 1 | -1;
			export let compareIterables: <T>(
				elementComparator: Comparator<T>
			) => Comparator<Iterable<T>>;
			export let compareLocations: (
				a: DependencyLocation,
				b: DependencyLocation
			) => 0 | 1 | -1;
			export let compareModulesByFullName: ParameterizedComparator<
				Compiler,
				Module
			>;
			export let compareModulesById: ParameterizedComparator<
				ChunkGraph,
				Module
			>;
			export let compareModulesByIdOrIdentifier: ParameterizedComparator<
				ChunkGraph,
				Module
			>;
			export let compareModulesByIdentifier: (
				a: Module,
				b: Module
			) => 0 | 1 | -1;
			export let compareModulesByPostOrderIndexOrIdentifier: ParameterizedComparator<
				ModuleGraph,
				Module
			>;
			export let compareModulesByPreOrderIndexOrIdentifier: ParameterizedComparator<
				ModuleGraph,
				Module
			>;
			export let compareNumbers: (a: number, b: number) => 0 | 1 | -1;
			export let compareSelect: <T, R>(
				getter: Selector<T, R>,
				comparator: Comparator<R>
			) => Comparator<T>;
			export let compareStrings: (a: string, b: string) => 0 | 1 | -1;
			export let compareStringsNumeric: (a: string, b: string) => 0 | 1 | -1;
			export let concatComparators: <T>(
				c1: Comparator<T>,
				c2: Comparator<T>,
				...cRest: Comparator<T>[]
			) => Comparator<T>;
			export let keepOriginalOrder: <T>(iterable: Iterable<T>) => Comparator<T>;
			export let sortWithSourceOrder: (
				dependencies: Dependency[],
				dependencySourceOrderMap: WeakMap<Dependency, DependencySourceOrder>,
				onDependencyReSort?: (dep: Dependency, index: number) => void
			) => void;
		}
		export namespace runtime {
			export let compareRuntime: (a: RuntimeSpec, b: RuntimeSpec) => 0 | 1 | -1;
			export let filterRuntime: (
				runtime: RuntimeSpec,
				filter: (runtime?: RuntimeSpec) => boolean
			) => undefined | string | boolean | SortableSet<string>;
			export let forEachRuntime: (
				runtime: RuntimeSpec,
				fn: (runtime?: string) => void,
				deterministicOrder?: boolean
			) => void;
			export let getEntryRuntime: (
				compilation: Compilation,
				name: string,
				options?: EntryOptions
			) => RuntimeSpec;
			export let getRuntimeKey: (runtime: RuntimeSpec) => string;
			export let intersectRuntime: (
				a: RuntimeSpec,
				b: RuntimeSpec
			) => RuntimeSpec;
			export let keyToRuntime: (key: string) => RuntimeSpec;
			export let mergeRuntime: (a: RuntimeSpec, b: RuntimeSpec) => RuntimeSpec;
			export let mergeRuntimeCondition: (
				a: RuntimeCondition,
				b: RuntimeCondition,
				runtime: RuntimeSpec
			) => RuntimeCondition;
			export let mergeRuntimeConditionNonFalse: (
				a: undefined | string | true | SortableSet<string>,
				b: undefined | string | true | SortableSet<string>,
				runtime: RuntimeSpec
			) => undefined | string | true | SortableSet<string>;
			export let mergeRuntimeOwned: (
				a: RuntimeSpec,
				b: RuntimeSpec
			) => RuntimeSpec;
			export let runtimeConditionToString: (
				runtimeCondition: RuntimeCondition
			) => string;
			export let runtimeEqual: (a: RuntimeSpec, b: RuntimeSpec) => boolean;
			export let runtimeToString: (runtime: RuntimeSpec) => string;
			export let subtractRuntime: (
				a: RuntimeSpec,
				b: RuntimeSpec
			) => RuntimeSpec;
			export let subtractRuntimeCondition: (
				a: RuntimeCondition,
				b: RuntimeCondition,
				runtime: RuntimeSpec
			) => RuntimeCondition;
			export { RuntimeSpecMap, RuntimeSpecSet };
		}
		export namespace serialization {
			export const register: (
				Constructor: Constructor,
				request: string,
				name: null | string,
				serializer: ObjectSerializer
			) => void;
			export const registerLoader: (
				regExp: RegExp,
				loader: (request: string) => boolean
			) => void;
			export const registerNotSerializable: (Constructor: Constructor) => void;
			export const NOT_SERIALIZABLE: object;
			export const buffersSerializer: Serializer<any, any, any>;
			export let createFileSerializer: <D, S, C>(
				fs: IntermediateFileSystem,
				hashFunction: HashFunction
			) => Serializer<D, S, C>;
			export { MEASURE_START_OPERATION, MEASURE_END_OPERATION };
		}
		export const cleverMerge: <T, O>(
			first?: null | T,
			second?: null | O
		) => T | O | (T & O);
		export function compileBooleanMatcher(
			map: Record<string | number, boolean>
		): boolean | ((value: string) => string);
		export namespace compileBooleanMatcher {
			export let fromLists: (
				positiveItems: string[],
				negativeItems: string[]
			) => (value: string) => string;
			export let itemsToRegexp: (itemsArr: string[]) => string;
		}
		export { LazySet };
	}
	export namespace sources {
		export {
			Source,
			RawSource,
			OriginalSource,
			ReplaceSource,
			SourceMapSource,
			ConcatSource,
			PrefixSource,
			CachedSource,
			SizeOnlySource,
			CompatSource
		};
	}
	export namespace experiments {
		export namespace schemes {
			export { HttpUriPlugin, VirtualUrlPlugin };
		}
		export namespace ids {
			export { SyncModuleIdsPlugin };
		}
	}
	export type RuleSetUseFunction = (data: EffectData) =>
		| string
		| RuleSetUseFunction
		| {
				/**
				 * Unique loader options identifier.
				 */
				ident?: string;
				/**
				 * Loader name.
				 */
				loader?: string;
				/**
				 * Loader options.
				 */
				options?: string | { [index: string]: any };
		  }
		| (
				| undefined
				| null
				| string
				| false
				| 0
				| RuleSetUseFunction
				| {
						/**
						 * Unique loader options identifier.
						 */
						ident?: string;
						/**
						 * Loader name.
						 */
						loader?: string;
						/**
						 * Loader options.
						 */
						options?: string | { [index: string]: any };
				  }
		  )[];
	export type WebpackPluginFunction = (
		this: Compiler,
		compiler: Compiler
	) => void;
	export type ExternalItemFunctionCallback = (
		data: ExternalItemFunctionData,
		callback: (
			err?: null | Error,
			result?: string | boolean | string[] | { [index: string]: any }
		) => void
	) => void;
	export type ExternalItemFunctionDataGetResolve = (
		options?: ResolveOptions
	) =>
		| ((
				context: string,
				request: string,
				callback: (
					err?: null | Error,
					result?: string | false,
					resolveRequest?: ResolveRequest
				) => void
		  ) => void)
		| ((context: string, request: string) => Promise<string>);
	export type ExternalItemFunctionDataGetResolveCallbackResult = (
		context: string,
		request: string,
		callback: (
			err?: null | Error,
			result?: string | false,
			resolveRequest?: ResolveRequest
		) => void
	) => void;
	export type ExternalItemFunctionDataGetResolveResult = (
		context: string,
		request: string
	) => Promise<string>;
	export type ExternalItemFunctionPromise = (
		data: ExternalItemFunctionData
	) => Promise<ExternalItemValue>;
	export {
		AutomaticPrefetchPlugin,
		AsyncDependenciesBlock,
		BannerPlugin,
		CacheClass as Cache,
		Chunk,
		ChunkGraph,
		CleanPlugin,
		Compilation,
		Compiler,
		ConcatenationScope,
		ContextExclusionPlugin,
		ContextReplacementPlugin,
		DefinePlugin,
		DelegatedPlugin,
		Dependency,
		DllPlugin,
		DllReferencePlugin,
		DynamicEntryPlugin,
		DotenvPlugin,
		EntryOptionPlugin,
		EntryPlugin,
		EnvironmentPlugin,
		EvalDevToolModulePlugin,
		EvalSourceMapDevToolPlugin,
		ExternalModule,
		ExternalsPlugin,
		Generator,
		HotUpdateChunk,
		HotModuleReplacementPlugin,
		InitFragment,
		IgnorePlugin,
		JavascriptModulesPlugin,
		LibManifestPlugin,
		LibraryTemplatePlugin,
		LoaderOptionsPlugin,
		LoaderTargetPlugin,
		Module,
		ModuleFactory,
		ModuleGraph,
		ModuleGraphConnection,
		NoEmitOnErrorsPlugin,
		NormalModule,
		NormalModuleReplacementPlugin,
		MultiCompiler,
		ParserClass as Parser,
		PlatformPlugin,
		PrefetchPlugin,
		ProgressPlugin,
		ProvidePlugin,
		RuntimeModule,
		EntryPlugin as SingleEntryPlugin,
		SourceMapDevToolPlugin,
		Stats,
		ManifestPlugin,
		Template,
		WatchIgnorePlugin,
		WebpackError,
		WebpackOptionsApply,
		WebpackOptionsDefaulter,
		ValidationError as WebpackOptionsValidationError,
		ValidationError,
		EntryLibIndex as Entry,
		EntryNormalized,
		EntryObject,
		ExternalItem,
		ExternalItemFunction,
		ExternalItemObjectKnown,
		ExternalItemObjectUnknown,
		ExternalItemValue,
		Externals,
		FileCacheOptions,
		GeneratorOptionsByModuleTypeKnown,
		LibraryOptions,
		MemoryCacheOptions,
		ModuleOptions,
		ParserOptionsByModuleTypeKnown,
		ResolveOptions,
		RuleSetCondition,
		RuleSetConditionAbsolute,
		RuleSetRule,
		RuleSetUse,
		RuleSetUseItem,
		StatsOptions,
		Configuration,
		WebpackOptionsNormalized,
		WebpackPluginInstance,
		ChunkGroup,
		AssetEmittedInfo,
		Asset,
		AssetInfo,
		EntryOptions,
		PathData,
		CodeGenerationResults,
		Entrypoint,
		ExternalItemFunctionData,
		MultiCompilerOptions,
		MultiConfiguration,
		MultiStats,
		StatsOptions as MultiStatsOptions,
		ResolveData,
		ParserState,
		ResolvePluginInstance,
		Resolver,
		RenderManifestEntry,
		RenderManifestOptions,
		TemplatePath,
		Watching,
		Argument,
		Problem,
		Colors,
		ColorsOptions,
		StatsAsset,
		StatsChunk,
		StatsChunkGroup,
		StatsChunkOrigin,
		StatsCompilation,
		StatsError,
		StatsLogging,
		StatsLoggingEntry,
		StatsModule,
		StatsModuleIssuer,
		StatsModuleReason,
		StatsModuleTraceDependency,
		StatsModuleTraceItem,
		StatsProfile,
		ObjectSerializerContext,
		ObjectDeserializerContext,
		InputFileSystem,
		OutputFileSystem,
		LoaderModule,
		RawLoaderDefinition,
		LoaderDefinition,
		LoaderDefinitionFunction,
		PitchLoaderDefinitionFunction,
		RawLoaderDefinitionFunction,
		LoaderContext
	};
}
declare const topLevelSymbolTag: unique symbol;

export = exports;
