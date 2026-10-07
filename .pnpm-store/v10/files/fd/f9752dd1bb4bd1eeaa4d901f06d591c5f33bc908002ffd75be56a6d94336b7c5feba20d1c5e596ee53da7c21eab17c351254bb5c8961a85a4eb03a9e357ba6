import type * as estree from 'estree';

declare module 'estree' {
	export interface Decorator extends estree.BaseNode {
		type: 'Decorator';
		expression: estree.Expression;
	}
	interface PropertyDefinition {
		decorators: estree.Decorator[];
	}
	interface MethodDefinition {
		decorators: estree.Decorator[];
	}
	interface BaseClass {
		decorators: estree.Decorator[];
	}
}

export const VERSION: string;

// utils
type NullValue = null | undefined | void;
type MaybeArray<T> = T | T[];
type MaybePromise<T> = T | Promise<T>;

type PartialNull<T> = {
	[P in keyof T]: T[P] | null;
};

export interface RollupError extends RollupLog {
	name?: string | undefined;
	stack?: string | undefined;
	watchFiles?: string[] | undefined;
}

export interface RollupLog {
	binding?: string | undefined;
	cause?: unknown | undefined;
	code?: string | undefined;
	exporter?: string | undefined;
	frame?: string | undefined;
	hook?: string | undefined;
	id?: string | undefined;
	ids?: string[] | undefined;
	loc?: {
		column: number;
		file?: string | undefined;
		line: number;
	};
	message: string;
	meta?: any | undefined;
	names?: string[] | undefined;
	plugin?: string | undefined;
	pluginCode?: unknown | undefined;
	pos?: number | undefined;
	reexporter?: string | undefined;
	stack?: string | undefined;
	url?: string | undefined;
}

export type LogLevel = 'warn' | 'info' | 'debug';
export type LogLevelOption = LogLevel | 'silent';

export type SourceMapSegment =
	| [number]
	| [number, number, number, number]
	| [number, number, number, number, number];

export interface ExistingDecodedSourceMap {
	file?: string | undefined;
	readonly mappings: SourceMapSegment[][];
	names: string[];
	sourceRoot?: string | undefined;
	sources: string[];
	sourcesContent?: string[] | undefined;
	version: number;
	x_google_ignoreList?: number[] | undefined;
}

export interface ExistingRawSourceMap {
	file?: string | undefined;
	mappings: string;
	names: string[];
	sourceRoot?: string | undefined;
	sources: string[];
	sourcesContent?: string[] | undefined;
	version: number;
	x_google_ignoreList?: number[] | undefined;
}

export type DecodedSourceMapOrMissing =
	| {
			missing: true;
			plugin: string;
	  }
	| (ExistingDecodedSourceMap & { missing?: false | undefined });

export interface SourceMap {
	file: string;
	mappings: string;
	names: string[];
	sources: string[];
	sourcesContent?: string[] | undefined;
	version: number;
	debugId?: string | undefined;
	toString(): string;
	toUrl(): string;
}

export type SourceMapInput = ExistingRawSourceMap | string | null | { mappings: '' };

interface ModuleOptions {
	attributes: Record<string, string>;
	meta: CustomPluginOptions;
	moduleSideEffects: boolean | 'no-treeshake';
	syntheticNamedExports: boolean | string;
}

export interface SourceDescription extends Partial<PartialNull<ModuleOptions>> {
	ast?: ProgramNode | undefined;
	code: string;
	map?: SourceMapInput | undefined;
}

export interface TransformModuleJSON {
	ast?: ProgramNode | undefined;
	code: string;
	safeVariableNames: Record<string, string> | null;
	// note if plugins use new this.cache to opt-out auto transform cache
	customTransformCache: boolean;
	originalCode: string;
	originalSourcemap: ExistingDecodedSourceMap | null;
	sourcemapChain: DecodedSourceMapOrMissing[];
	transformDependencies: string[];
}

export interface ModuleJSON extends TransformModuleJSON, ModuleOptions {
	safeVariableNames: Record<string, string> | null;
	ast: ProgramNode;
	dependencies: string[];
	id: string;
	resolvedIds: ResolvedIdMap;
	transformFiles: EmittedFile[] | undefined;
}

export interface PluginCache {
	delete(id: string): boolean;
	get<T = any>(id: string): T;
	has(id: string): boolean;
	set<T = any>(id: string, value: T): void;
}

export type LoggingFunction = (log: RollupLog | string | (() => RollupLog | string)) => void;

export interface MinimalPluginContext {
	debug: LoggingFunction;
	error: (error: RollupError | string) => never;
	info: LoggingFunction;
	meta: PluginContextMeta;
	warn: LoggingFunction;
}

export interface EmittedAsset {
	fileName?: string | undefined;
	name?: string | undefined;
	needsCodeReference?: boolean | undefined;
	originalFileName?: string | null | undefined;
	source?: string | Uint8Array | undefined;
	type: 'asset';
}

export interface EmittedChunk {
	fileName?: string | undefined;
	id: string;
	implicitlyLoadedAfterOneOf?: string[] | undefined;
	importer?: string | undefined;
	name?: string | undefined;
	preserveSignature?: PreserveEntrySignaturesOption | undefined;
	type: 'chunk';
}

export interface EmittedPrebuiltChunk {
	code: string;
	exports?: string[] | undefined;
	fileName: string;
	map?: SourceMap | undefined;
	sourcemapFileName?: string | undefined;
	type: 'prebuilt-chunk';
}

export type EmittedFile = EmittedAsset | EmittedChunk | EmittedPrebuiltChunk;

export type EmitFile = (emittedFile: EmittedFile) => string;

export interface ModuleInfo extends ModuleOptions {
	ast: ProgramNode | null;
	code: string | null;
	dynamicImporters: readonly string[];
	dynamicallyImportedIdResolutions: readonly ResolvedId[];
	dynamicallyImportedIds: readonly string[];
	exportedBindings: Record<string, string[]> | null;
	exports: string[] | null;
	safeVariableNames: Record<string, string> | null;
	hasDefaultExport: boolean | null;
	id: string;
	implicitlyLoadedAfterOneOf: readonly string[];
	implicitlyLoadedBefore: readonly string[];
	importedIdResolutions: readonly ResolvedId[];
	importedIds: readonly string[];
	importers: readonly string[];
	isEntry: boolean;
	isExternal: boolean;
	isIncluded: boolean | null;
}

export type GetModuleInfo = (moduleId: string) => ModuleInfo | null;

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style -- this is an interface so that it can be extended by plugins
export interface CustomPluginOptions {
	[plugin: string]: any;
}

type LoggingFunctionWithPosition = (
	log: RollupLog | string | (() => RollupLog | string),
	pos?: number | { column: number; line: number }
) => void;

export type ParseAst = (
	input: string,
	options?: { allowReturnOutsideFunction?: boolean; jsx?: boolean }
) => ProgramNode;

// declare AbortSignal here for environments without DOM lib or @types/node
declare global {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	interface AbortSignal {}
}

export type ParseAstAsync = (
	input: string,
	options?: { allowReturnOutsideFunction?: boolean; jsx?: boolean; signal?: AbortSignal }
) => Promise<ProgramNode>;

export interface PluginContext extends MinimalPluginContext {
	addWatchFile: (id: string) => void;
	cache: PluginCache;
	debug: LoggingFunction;
	emitFile: EmitFile;
	error: (error: RollupError | string) => never;
	fs: RollupFsModule;
	getFileName: (fileReferenceId: string) => string;
	getModuleIds: () => IterableIterator<string>;
	getModuleInfo: GetModuleInfo;
	getWatchFiles: () => string[];
	info: LoggingFunction;
	load: (
		options: { id: string; resolveDependencies?: boolean } & Partial<PartialNull<ModuleOptions>>
	) => Promise<ModuleInfo>;
	parse: ParseAst;
	resolve: (
		source: string,
		importer?: string,
		options?: {
			importerAttributes?: Record<string, string>;
			attributes?: Record<string, string>;
			custom?: CustomPluginOptions;
			isEntry?: boolean;
			skipSelf?: boolean;
		}
	) => Promise<ResolvedId | null>;
	setAssetSource: (assetReferenceId: string, source: string | Uint8Array) => void;
	warn: LoggingFunction;
}

export interface PluginContextMeta {
	rollupVersion: string;
	watchMode: boolean;
}

export type StringOrRegExp = string | RegExp;

export type StringFilter<Value = StringOrRegExp> =
	| MaybeArray<Value>
	| {
			include?: MaybeArray<Value> | undefined;
			exclude?: MaybeArray<Value> | undefined;
	  };

export interface HookFilter {
	id?: StringFilter | undefined;
	code?: StringFilter | undefined;
}

export interface ResolvedId extends ModuleOptions {
	external: boolean | 'absolute';
	id: string;
	resolvedBy: string;
}

export type ResolvedIdMap = Record<string, ResolvedId>;

export interface PartialResolvedId extends Partial<PartialNull<ModuleOptions>> {
	external?: boolean | 'absolute' | 'relative' | undefined;
	id: string;
	resolvedBy?: string | undefined;
}

export type ResolveIdResult = string | NullValue | false | PartialResolvedId;

export type ResolveIdResultWithoutNullValue = string | false | PartialResolvedId;

export type ResolveIdHook = (
	this: PluginContext,
	source: string,
	importer: string | undefined,
	options: {
		attributes: Record<string, string>;
		custom?: CustomPluginOptions;
		importerAttributes?: Record<string, string> | undefined;
		isEntry: boolean;
	}
) => ResolveIdResult;

export type ShouldTransformCachedModuleHook = (
	this: PluginContext,
	options: {
		ast: ProgramNode;
		attributes: Record<string, string>;
		code: string;
		id: string;
		meta: CustomPluginOptions;
		moduleSideEffects: boolean | 'no-treeshake';
		resolvedSources: ResolvedIdMap;
		syntheticNamedExports: boolean | string;
	}
) => boolean | NullValue;

export type IsExternal = (
	source: string,
	importer: string | undefined,
	isResolved: boolean
) => boolean;

export type HasModuleSideEffects = (id: string, external: boolean) => boolean;

export type LoadResult = SourceDescription | string | NullValue;

export type LoadHook = (
	this: PluginContext,
	id: string,
	// temporarily marked as optional for better Vite type-compatibility
	options?:
		| {
				// unused, temporarily added for better Vite type-compatibility
				ssr?: boolean | undefined;
				// temporarily marked as optional for better Vite type-compatibility
				attributes?: Record<string, string>;
		  }
		| undefined
) => LoadResult;

export interface TransformPluginContext extends PluginContext {
	debug: LoggingFunctionWithPosition;
	error: (error: RollupError | string, pos?: number | { column: number; line: number }) => never;
	getCombinedSourcemap: () => SourceMap;
	info: LoggingFunctionWithPosition;
	warn: LoggingFunctionWithPosition;
}

export type TransformResult = string | NullValue | Partial<SourceDescription>;

export type TransformHook = (
	this: TransformPluginContext,
	code: string,
	id: string,
	// temporarily marked as optional for better Vite type-compatibility
	options?:
		| {
				// unused, temporarily added for better Vite type-compatibility
				ssr?: boolean | undefined;
				// temporarily marked as optional for better Vite type-compatibility
				attributes?: Record<string, string>;
		  }
		| undefined
) => TransformResult;

export type ModuleParsedHook = (this: PluginContext, info: ModuleInfo) => void;

export type RenderChunkHook = (
	this: PluginContext,
	code: string,
	chunk: RenderedChunk,
	options: NormalizedOutputOptions,
	meta: { chunks: Record<string, RenderedChunk> }
) => { code: string; map?: SourceMapInput } | string | NullValue;

export type ResolveDynamicImportHook = (
	this: PluginContext,
	specifier: string | AstNode,
	importer: string,
	options: { attributes: Record<string, string>; importerAttributes: Record<string, string> }
) => ResolveIdResult;

export type ResolveImportMetaHook = (
	this: PluginContext,
	property: string | null,
	options: {
		attributes: Record<string, string>;
		chunkId: string;
		format: InternalModuleFormat;
		moduleId: string;
	}
) => string | NullValue;

export type ResolveFileUrlHook = (
	this: PluginContext,
	options: {
		attributes: Record<string, string>;
		chunkId: string;
		fileName: string;
		format: InternalModuleFormat;
		moduleId: string;
		referenceId: string;
		relativePath: string;
	}
) => string | NullValue;

export type AddonHookFunction = (
	this: PluginContext,
	chunk: RenderedChunk
) => string | Promise<string>;
export type AddonHook = string | AddonHookFunction;

export type ChangeEvent = 'create' | 'update' | 'delete';
export type WatchChangeHook = (
	this: PluginContext,
	id: string,
	change: { event: ChangeEvent }
) => void;

/**
 * use this type for plugin annotation
 * @example
 * ```ts
 * interface Options {
 * ...
 * }
 * const myPlugin: PluginImpl<Options> = (options = {}) => { ... }
 * ```
 */
export type PluginImpl<O extends object = object, A = any> = (options?: O) => Plugin<A>;

export type OutputBundle = Record<string, OutputAsset | OutputChunk>;

export type PreRenderedChunkWithFileName = PreRenderedChunk & { fileName: string };

export interface ImportedInternalChunk {
	type: 'internal';
	fileName: string;
	resolvedImportPath: string;
	chunk: PreRenderedChunk;
}

export interface ImportedExternalChunk {
	type: 'external';
	fileName: string;
	resolvedImportPath: string;
}

export type DynamicImportTargetChunk = ImportedInternalChunk | ImportedExternalChunk;

export interface FunctionPluginHooks {
	augmentChunkHash: (this: PluginContext, chunk: RenderedChunk) => string | void;
	buildEnd: (this: PluginContext, error?: Error) => void;
	buildStart: (this: PluginContext, options: NormalizedInputOptions) => void;
	closeBundle: (this: PluginContext, error?: Error) => void;
	closeWatcher: (this: PluginContext) => void;
	generateBundle: (
		this: PluginContext,
		options: NormalizedOutputOptions,
		bundle: OutputBundle,
		isWrite: boolean
	) => void;
	load: LoadHook;
	moduleParsed: ModuleParsedHook;
	onLog: (this: MinimalPluginContext, level: LogLevel, log: RollupLog) => boolean | NullValue;
	options: (this: MinimalPluginContext, options: InputOptions) => InputOptions | NullValue;
	outputOptions: (this: PluginContext, options: OutputOptions) => OutputOptions | NullValue;
	renderChunk: RenderChunkHook;
	renderDynamicImport: (
		this: PluginContext,
		options: {
			customResolution: string | null;
			format: InternalModuleFormat;
			moduleId: string;
			targetModuleId: string | null;
			chunk: PreRenderedChunkWithFileName;
			targetChunk: PreRenderedChunkWithFileName | null;
			getTargetChunkImports: () => DynamicImportTargetChunk[] | null;
			targetModuleAttributes: Record<string, string>;
		}
	) => { left: string; right: string } | NullValue;
	renderError: (this: PluginContext, error?: Error) => void;
	renderStart: (
		this: PluginContext,
		outputOptions: NormalizedOutputOptions,
		inputOptions: NormalizedInputOptions
	) => void;
	resolveDynamicImport: ResolveDynamicImportHook;
	resolveFileUrl: ResolveFileUrlHook;
	resolveId: ResolveIdHook;
	resolveImportMeta: ResolveImportMetaHook;
	shouldTransformCachedModule: ShouldTransformCachedModuleHook;
	transform: TransformHook;
	watchChange: WatchChangeHook;
	writeBundle: (
		this: PluginContext,
		options: NormalizedOutputOptions,
		bundle: OutputBundle
	) => void;
}

export type OutputPluginHooks =
	| 'augmentChunkHash'
	| 'generateBundle'
	| 'outputOptions'
	| 'renderChunk'
	| 'renderDynamicImport'
	| 'renderError'
	| 'renderStart'
	| 'resolveFileUrl'
	| 'resolveImportMeta'
	| 'writeBundle';

export type InputPluginHooks = Exclude<keyof FunctionPluginHooks, OutputPluginHooks>;

export type SyncPluginHooks =
	| 'augmentChunkHash'
	| 'onLog'
	| 'outputOptions'
	| 'renderDynamicImport'
	| 'resolveFileUrl'
	| 'resolveImportMeta';

export type AsyncPluginHooks = Exclude<keyof FunctionPluginHooks, SyncPluginHooks>;

export type FirstPluginHooks =
	| 'load'
	| 'renderDynamicImport'
	| 'resolveDynamicImport'
	| 'resolveFileUrl'
	| 'resolveId'
	| 'resolveImportMeta'
	| 'shouldTransformCachedModule';

export type SequentialPluginHooks =
	| 'augmentChunkHash'
	| 'generateBundle'
	| 'onLog'
	| 'options'
	| 'outputOptions'
	| 'renderChunk'
	| 'transform';

export type ParallelPluginHooks = Exclude<
	keyof FunctionPluginHooks | AddonHooks,
	FirstPluginHooks | SequentialPluginHooks
>;

export type AddonHooks = 'banner' | 'footer' | 'intro' | 'outro';

type MakeAsync<Function_> = Function_ extends (
	this: infer This,
	...parameters: infer Arguments
) => infer Return
	? (this: This, ...parameters: Arguments) => Return | Promise<Return>
	: never;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ObjectHook<T, O = {}> = T | ({ handler: T; order?: 'pre' | 'post' | null } & O);

export type HookFilterExtension<K extends keyof FunctionPluginHooks> = K extends 'transform'
	? { filter?: HookFilter | undefined }
	: K extends 'load'
		? { filter?: Pick<HookFilter, 'id'> | undefined }
		: K extends 'resolveId'
			? { filter?: { id?: StringFilter<RegExp> | undefined } } | undefined
			: // eslint-disable-next-line @typescript-eslint/no-empty-object-type
				{};

export type PluginHooks = {
	[K in keyof FunctionPluginHooks]: ObjectHook<
		K extends AsyncPluginHooks ? MakeAsync<FunctionPluginHooks[K]> : FunctionPluginHooks[K],
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		HookFilterExtension<K> & (K extends ParallelPluginHooks ? { sequential?: boolean } : {})
	>;
};

export interface OutputPlugin
	extends
		Partial<{ [K in OutputPluginHooks]: PluginHooks[K] }>,
		Partial<Record<AddonHooks, ObjectHook<AddonHook>>> {
	cacheKey?: string | undefined;
	name: string;
	version?: string | undefined;
}

export interface Plugin<A = any> extends OutputPlugin, Partial<PluginHooks> {
	// for inter-plugin communication
	api?: A | undefined;
}

export type JsxPreset = 'react' | 'react-jsx' | 'preserve' | 'preserve-react';

export type NormalizedJsxOptions =
	| NormalizedJsxPreserveOptions
	| NormalizedJsxClassicOptions
	| NormalizedJsxAutomaticOptions;

interface NormalizedJsxPreserveOptions {
	factory: string | null;
	fragment: string | null;
	importSource: string | null;
	mode: 'preserve';
}

interface NormalizedJsxClassicOptions {
	factory: string;
	fragment: string;
	importSource: string | null;
	mode: 'classic';
}

interface NormalizedJsxAutomaticOptions {
	factory: string;
	importSource: string | null;
	jsxImportSource: string;
	mode: 'automatic';
}

export type JsxOptions = Partial<NormalizedJsxOptions> & {
	preset?: JsxPreset | undefined;
};

export type TreeshakingPreset = 'smallest' | 'safest' | 'recommended';

export interface NormalizedTreeshakingOptions {
	annotations: boolean;
	correctVarValueBeforeDeclaration: boolean;
	manualPureFunctions: readonly string[];
	moduleSideEffects: HasModuleSideEffects;
	propertyReadSideEffects: boolean | 'always';
	tryCatchDeoptimization: boolean;
	unknownGlobalSideEffects: boolean;
}

export interface TreeshakingOptions extends Partial<
	Omit<NormalizedTreeshakingOptions, 'moduleSideEffects'>
> {
	moduleSideEffects?: ModuleSideEffectsOption | undefined;
	preset?: TreeshakingPreset | undefined;
}

interface ManualChunkMeta {
	getModuleIds: () => IterableIterator<string>;
	getModuleInfo: GetModuleInfo;
}

export type GetManualChunk = (id: string, meta: ManualChunkMeta) => string | NullValue;

export type ExternalOption =
	| (string | RegExp)[]
	| string
	| RegExp
	| ((source: string, importer: string | undefined, isResolved: boolean) => boolean | NullValue);

export type GlobalsOption = Record<string, string> | ((name: string) => string);

export type InputOption = string | string[] | Record<string, string>;

export type ManualChunksOption = Record<string, string[]> | GetManualChunk;

export type LogHandlerWithDefault = (
	level: LogLevel,
	log: RollupLog,
	defaultHandler: LogOrStringHandler
) => void;

export type LogOrStringHandler = (level: LogLevel | 'error', log: RollupLog | string) => void;

export type LogHandler = (level: LogLevel, log: RollupLog) => void;

export type ModuleSideEffectsOption = boolean | 'no-external' | string[] | HasModuleSideEffects;

export type PreserveEntrySignaturesOption = false | 'strict' | 'allow-extension' | 'exports-only';

export type SourcemapPathTransformOption = (
	relativeSourcePath: string,
	sourcemapPath: string
) => string;

export type SourcemapIgnoreListOption = (
	relativeSourcePath: string,
	sourcemapPath: string
) => boolean;

export type InputPluginOption = MaybePromise<Plugin | NullValue | false | InputPluginOption[]>;

export interface InputOptions {
	cache?: boolean | RollupCache | undefined;
	context?: string | undefined;
	experimentalCacheExpiry?: number | undefined;
	experimentalLogSideEffects?: boolean | undefined;
	external?: ExternalOption | undefined;
	fs?: RollupFsModule | undefined;
	input?: InputOption | undefined;
	jsx?: false | JsxPreset | JsxOptions | undefined;
	logLevel?: LogLevelOption | undefined;
	makeAbsoluteExternalsRelative?: boolean | 'ifRelativeSource' | undefined;
	maxParallelFileOps?: number | undefined;
	moduleContext?: ((id: string) => string | NullValue) | Record<string, string> | undefined;
	onLog?: LogHandlerWithDefault | undefined;
	onwarn?: WarningHandlerWithDefault | undefined;
	perf?: boolean | undefined;
	plugins?: InputPluginOption | undefined;
	preserveEntrySignatures?: PreserveEntrySignaturesOption | undefined;
	preserveSymlinks?: boolean | undefined;
	shimMissingExports?: boolean | undefined;
	strictDeprecations?: boolean | undefined;
	treeshake?: boolean | TreeshakingPreset | TreeshakingOptions | undefined;
	watch?: WatcherOptions | false | undefined;
}

export interface InputOptionsWithPlugins extends InputOptions {
	plugins: Plugin[];
}

export interface NormalizedInputOptions {
	cache: false | undefined | RollupCache;
	context: string;
	experimentalCacheExpiry: number;
	experimentalLogSideEffects: boolean;
	external: IsExternal;
	fs: RollupFsModule;
	input: string[] | Record<string, string>;
	jsx: false | NormalizedJsxOptions;
	logLevel: LogLevelOption;
	makeAbsoluteExternalsRelative: boolean | 'ifRelativeSource';
	maxParallelFileOps: number;
	moduleContext: (id: string) => string;
	onLog: LogHandler;
	perf: boolean;
	plugins: Plugin[];
	preserveEntrySignatures: PreserveEntrySignaturesOption;
	preserveSymlinks: boolean;
	shimMissingExports: boolean;
	strictDeprecations: boolean;
	treeshake: false | NormalizedTreeshakingOptions;
}

export type InternalModuleFormat = 'amd' | 'cjs' | 'es' | 'iife' | 'system' | 'umd';
export type ImportAttributesKey = 'with' | 'assert';

export type ModuleFormat = InternalModuleFormat | 'commonjs' | 'esm' | 'module' | 'systemjs';

type GeneratedCodePreset = 'es5' | 'es2015';

interface NormalizedGeneratedCodeOptions {
	arrowFunctions: boolean;
	constBindings: boolean;
	objectShorthand: boolean;
	reservedNamesAsProps: boolean;
	symbols: boolean;
}

interface GeneratedCodeOptions extends Partial<NormalizedGeneratedCodeOptions> {
	preset?: GeneratedCodePreset | undefined;
}

export type OptionsPaths = Record<string, string> | ((id: string) => string);

export type InteropType = 'compat' | 'auto' | 'esModule' | 'default' | 'defaultOnly';

export type GetInterop = (id: string | null) => InteropType;

export type AmdOptions = (
	| {
			autoId?: false | undefined;
			id: string;
	  }
	| {
			autoId: true;
			basePath?: string | undefined;
			id?: undefined | undefined;
	  }
	| {
			autoId?: false | undefined;
			id?: undefined | undefined;
	  }
) & {
	define?: string | undefined;
	forceJsExtensionForImports?: boolean | undefined;
};

export type NormalizedAmdOptions = (
	| {
			autoId: false;
			id?: string | undefined;
	  }
	| {
			autoId: true;
			basePath: string;
	  }
) & {
	define: string;
	forceJsExtensionForImports: boolean;
};

type AddonFunction = (chunk: RenderedChunk) => string | Promise<string>;

type OutputPluginOption = MaybePromise<OutputPlugin | NullValue | false | OutputPluginOption[]>;

type HashCharacters = 'base64' | 'base36' | 'hex';

export interface OutputOptions {
	amd?: AmdOptions | undefined;
	assetFileNames?: string | ((chunkInfo: PreRenderedAsset) => string) | undefined;
	banner?: string | AddonFunction | undefined;
	chunkFileNames?: string | ((chunkInfo: PreRenderedChunk) => string) | undefined;
	compact?: boolean | undefined;
	// only required for bundle.write
	dir?: string | undefined;
	dynamicImportInCjs?: boolean | undefined;
	entryFileNames?: string | ((chunkInfo: PreRenderedChunk) => string) | undefined;
	esModule?: boolean | 'if-default-prop' | undefined;
	experimentalMinChunkSize?: number | undefined;
	exports?: 'default' | 'named' | 'none' | 'auto' | undefined;
	extend?: boolean | undefined;
	/** @deprecated Use "externalImportAttributes" instead. */
	externalImportAssertions?: boolean | undefined;
	externalImportAttributes?: boolean | undefined;
	externalLiveBindings?: boolean | undefined;
	// only required for bundle.write
	file?: string | undefined;
	footer?: string | AddonFunction | undefined;
	format?: ModuleFormat | undefined;
	freeze?: boolean | undefined;
	generatedCode?: GeneratedCodePreset | GeneratedCodeOptions | undefined;
	globals?: GlobalsOption | undefined;
	hashCharacters?: HashCharacters | undefined;
	hoistTransitiveImports?: boolean | undefined;
	importAttributesKey?: ImportAttributesKey | undefined;
	indent?: string | boolean | undefined;
	inlineDynamicImports?: boolean | undefined;
	interop?: InteropType | GetInterop | undefined;
	intro?: string | AddonFunction | undefined;
	manualChunks?: ManualChunksOption | undefined;
	minifyInternalExports?: boolean | undefined;
	name?: string | undefined;
	noConflict?: boolean | undefined;
	/** @deprecated This will be the new default in Rollup 5. */
	onlyExplicitManualChunks?: boolean | undefined;
	outro?: string | AddonFunction | undefined;
	paths?: OptionsPaths | undefined;
	plugins?: OutputPluginOption | undefined;
	preserveModules?: boolean | undefined;
	preserveModulesRoot?: string | undefined;
	reexportProtoFromExternal?: boolean | undefined;
	sanitizeFileName?: boolean | ((fileName: string) => string) | undefined;
	sourcemap?: boolean | 'inline' | 'hidden' | undefined;
	sourcemapBaseUrl?: string | undefined;
	sourcemapExcludeSources?: boolean | undefined;
	sourcemapFile?: string | undefined;
	sourcemapFileNames?: string | ((chunkInfo: PreRenderedChunk) => string) | undefined;
	sourcemapIgnoreList?: boolean | SourcemapIgnoreListOption | undefined;
	sourcemapPathTransform?: SourcemapPathTransformOption | undefined;
	sourcemapDebugIds?: boolean | undefined;
	strict?: boolean | undefined;
	systemNullSetters?: boolean | undefined;
	validate?: boolean | undefined;
	virtualDirname?: string | undefined;
}

export interface NormalizedOutputOptions {
	amd: NormalizedAmdOptions;
	assetFileNames: string | ((chunkInfo: PreRenderedAsset) => string);
	banner: AddonFunction;
	chunkFileNames: string | ((chunkInfo: PreRenderedChunk) => string);
	compact: boolean;
	dir: string | undefined;
	dynamicImportInCjs: boolean;
	entryFileNames: string | ((chunkInfo: PreRenderedChunk) => string);
	esModule: boolean | 'if-default-prop';
	experimentalMinChunkSize: number;
	exports: 'default' | 'named' | 'none' | 'auto';
	extend: boolean;
	/** @deprecated Use "externalImportAttributes" instead. */
	externalImportAssertions: boolean;
	externalImportAttributes: boolean;
	externalLiveBindings: boolean;
	file: string | undefined;
	footer: AddonFunction;
	format: InternalModuleFormat;
	freeze: boolean;
	generatedCode: NormalizedGeneratedCodeOptions;
	globals: GlobalsOption;
	hashCharacters: HashCharacters;
	hoistTransitiveImports: boolean;
	importAttributesKey: ImportAttributesKey;
	indent: true | string;
	inlineDynamicImports: boolean;
	interop: GetInterop;
	intro: AddonFunction;
	manualChunks: ManualChunksOption;
	minifyInternalExports: boolean;
	name: string | undefined;
	noConflict: boolean;
	onlyExplicitManualChunks: boolean;
	outro: AddonFunction;
	paths: OptionsPaths;
	plugins: OutputPlugin[];
	preserveModules: boolean;
	preserveModulesRoot: string | undefined;
	reexportProtoFromExternal: boolean;
	sanitizeFileName: (fileName: string) => string;
	sourcemap: boolean | 'inline' | 'hidden';
	sourcemapBaseUrl: string | undefined;
	sourcemapExcludeSources: boolean;
	sourcemapFile: string | undefined;
	sourcemapFileNames: string | ((chunkInfo: PreRenderedChunk) => string) | undefined;
	sourcemapIgnoreList: SourcemapIgnoreListOption;
	sourcemapPathTransform: SourcemapPathTransformOption | undefined;
	sourcemapDebugIds: boolean;
	strict: boolean;
	systemNullSetters: boolean;
	validate: boolean;
	virtualDirname: string;
}

export type WarningHandlerWithDefault = (
	warning: RollupLog,
	defaultHandler: LoggingFunction
) => void;

export type SerializedTimings = Record<string, [number, number, number]>;

export interface PreRenderedAsset {
	/** @deprecated Use "names" instead. */
	name: string | undefined;
	names: string[];
	/** @deprecated Use "originalFileNames" instead. */
	originalFileName: string | null;
	originalFileNames: string[];
	source: string | Uint8Array;
	type: 'asset';
}

export interface OutputAsset extends PreRenderedAsset {
	fileName: string;
	needsCodeReference: boolean;
}

export interface RenderedModule {
	readonly code: string | null;
	originalLength: number;
	removedExports: string[];
	renderedExports: string[];
	renderedLength: number;
}

export interface PreRenderedChunk {
	exports: string[];
	facadeModuleId: string | null;
	isDynamicEntry: boolean;
	isEntry: boolean;
	isImplicitEntry: boolean;
	moduleIds: string[];
	name: string;
	type: 'chunk';
}

export interface RenderedChunk extends PreRenderedChunk {
	dynamicImports: string[];
	fileName: string;
	implicitlyLoadedBefore: string[];
	importedBindings: Record<string, string[]>;
	imports: string[];
	modules: Record<string, RenderedModule>;
	referencedFiles: string[];
}

export interface OutputChunk extends RenderedChunk {
	code: string;
	map: SourceMap | null;
	sourcemapFileName: string | null;
	preliminaryFileName: string;
}

export type SerializablePluginCache = Record<string, [number, any]>;

export interface RollupCache {
	modules: ModuleJSON[];
	plugins?: Record<string, SerializablePluginCache>;
}

export interface RollupOutput {
	output: [OutputChunk, ...(OutputChunk | OutputAsset)[]];
}

export interface RollupBuild {
	cache: RollupCache | undefined;
	close: () => Promise<void>;
	closed: boolean;
	[Symbol.asyncDispose](): Promise<void>;
	generate: (outputOptions: OutputOptions) => Promise<RollupOutput>;
	getTimings?: (() => SerializedTimings) | undefined;
	watchFiles: string[];
	write: (options: OutputOptions) => Promise<RollupOutput>;
}

export interface RollupOptions extends InputOptions {
	// This is included for compatibility with config files but ignored by rollup.rollup
	output?: OutputOptions | OutputOptions[] | undefined;
}

export interface MergedRollupOptions extends InputOptionsWithPlugins {
	output: OutputOptions[];
}

export function rollup(options: RollupOptions): Promise<RollupBuild>;

export interface ChokidarOptions {
	alwaysStat?: boolean | undefined;
	atomic?: boolean | number | undefined;
	awaitWriteFinish?:
		| {
				pollInterval?: number | undefined;
				stabilityThreshold?: number | undefined;
		  }
		| boolean
		| undefined;
	binaryInterval?: number | undefined;
	cwd?: string | undefined;
	depth?: number | undefined;
	disableGlobbing?: boolean | undefined;
	followSymlinks?: boolean | undefined;
	ignoreInitial?: boolean | undefined;
	ignorePermissionErrors?: boolean | undefined;
	ignored?: any | undefined;
	interval?: number | undefined;
	persistent?: boolean | undefined;
	useFsEvents?: boolean | undefined;
	usePolling?: boolean | undefined;
}

export type RollupWatchHooks = 'onError' | 'onStart' | 'onBundleStart' | 'onBundleEnd' | 'onEnd';

export interface WatcherOptions {
	allowInputInsideOutputPath?: boolean | undefined;
	buildDelay?: number | undefined;
	chokidar?: ChokidarOptions | undefined;
	clearScreen?: boolean | undefined;
	exclude?: string | RegExp | (string | RegExp)[] | undefined;
	include?: string | RegExp | (string | RegExp)[] | undefined;
	skipWrite?: boolean | undefined;
	onInvalidate?: ((id: string) => void) | undefined;
}

export interface RollupWatchOptions extends InputOptions {
	output?: OutputOptions | OutputOptions[] | undefined;
	watch?: WatcherOptions | false | undefined;
}

export type AwaitedEventListener<
	T extends Record<string, (...parameters: any) => any>,
	K extends keyof T
> = (...parameters: Parameters<T[K]>) => void | Promise<void>;

export interface AwaitingEventEmitter<T extends Record<string, (...parameters: any) => any>> {
	close(): Promise<void>;
	emit<K extends keyof T>(event: K, ...parameters: Parameters<T[K]>): Promise<unknown>;
	/**
	 * Removes an event listener.
	 */
	off<K extends keyof T>(event: K, listener: AwaitedEventListener<T, K>): this;
	/**
	 * Registers an event listener that will be awaited before Rollup continues.
	 * All listeners will be awaited in parallel while rejections are tracked via
	 * Promise.all.
	 */
	on<K extends keyof T>(event: K, listener: AwaitedEventListener<T, K>): this;
	/**
	 * Registers an event listener that will be awaited before Rollup continues.
	 * All listeners will be awaited in parallel while rejections are tracked via
	 * Promise.all.
	 * Listeners are removed automatically when removeListenersForCurrentRun is
	 * called, which happens automatically after each run.
	 */
	onCurrentRun<K extends keyof T>(
		event: K,
		listener: (...parameters: Parameters<T[K]>) => Promise<ReturnType<T[K]>>
	): this;
	removeAllListeners(): this;
	removeListenersForCurrentRun(): this;
}

export type RollupWatcherEvent =
	| { code: 'START' }
	| { code: 'BUNDLE_START'; input?: InputOption | undefined; output: readonly string[] }
	| {
			code: 'BUNDLE_END';
			duration: number;
			input?: InputOption | undefined;
			output: readonly string[];
			result: RollupBuild;
	  }
	| { code: 'END' }
	| { code: 'ERROR'; error: RollupError; result: RollupBuild | null };

export type RollupWatcher = AwaitingEventEmitter<{
	change: (id: string, change: { event: ChangeEvent }) => void;
	close: () => void;
	event: (event: RollupWatcherEvent) => void;
	restart: () => void;
}>;

export function watch(config: RollupWatchOptions | RollupWatchOptions[]): RollupWatcher;

interface AstNodeLocation {
	end: number;
	start: number;
}

type OmittedEstreeKeys =
	| 'loc'
	| 'range'
	| 'leadingComments'
	| 'trailingComments'
	| 'innerComments'
	| 'comments';
type RollupAstNode<T> = Omit<T, OmittedEstreeKeys> & AstNodeLocation;

type ProgramNode = RollupAstNode<estree.Program>;
export type AstNode = RollupAstNode<estree.Node>;

export function defineConfig(options: RollupOptions): RollupOptions;
export function defineConfig(options: RollupOptions[]): RollupOptions[];
export function defineConfig(optionsFunction: RollupOptionsFunction): RollupOptionsFunction;

export type RollupOptionsFunction = (
	commandLineArguments: Record<string, any>
) => MaybePromise<RollupOptions | RollupOptions[]>;

export interface RollupFsModule {
	appendFile(
		path: string,
		data: string | Uint8Array,
		options?: { encoding?: BufferEncoding | null; mode?: string | number; flag?: string | number }
	): Promise<void>;

	copyFile(source: string, destination: string, mode?: string | number): Promise<void>;

	mkdir(path: string, options?: { recursive?: boolean; mode?: string | number }): Promise<void>;

	mkdtemp(prefix: string): Promise<string>;

	readdir(path: string, options?: { withFileTypes?: false }): Promise<string[]>;
	readdir(path: string, options?: { withFileTypes: true }): Promise<RollupDirectoryEntry[]>;

	readFile(
		path: string,
		options?: { encoding?: null; flag?: string | number; signal?: AbortSignal }
	): Promise<Uint8Array>;
	readFile(
		path: string,
		options?: { encoding: BufferEncoding; flag?: string | number; signal?: AbortSignal }
	): Promise<string>;

	realpath(path: string): Promise<string>;

	rename(oldPath: string, newPath: string): Promise<void>;

	rmdir(path: string, options?: { recursive?: boolean }): Promise<void>;

	stat(path: string): Promise<RollupFileStats>;

	lstat(path: string): Promise<RollupFileStats>;

	unlink(path: string): Promise<void>;

	writeFile(
		path: string,
		data: string | Uint8Array,
		options?: { encoding?: BufferEncoding | null; mode?: string | number; flag?: string | number }
	): Promise<void>;
}

export type BufferEncoding =
	| 'ascii'
	| 'utf8'
	| 'utf16le'
	| 'ucs2'
	| 'base64'
	| 'base64url'
	| 'latin1'
	| 'binary'
	| 'hex';

export interface RollupDirectoryEntry {
	isFile(): boolean;
	isDirectory(): boolean;
	isSymbolicLink(): boolean;
	name: string;
}

export interface RollupFileStats {
	isFile(): boolean;
	isDirectory(): boolean;
	isSymbolicLink(): boolean;
	size: number;
	mtime: Date;
	ctime: Date;
	atime: Date;
	birthtime: Date;
}
