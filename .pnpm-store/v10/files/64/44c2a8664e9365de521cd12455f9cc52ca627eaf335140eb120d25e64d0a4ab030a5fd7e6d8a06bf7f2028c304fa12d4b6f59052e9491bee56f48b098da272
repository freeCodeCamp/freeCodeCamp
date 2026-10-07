// @flow strict-local

import type {Readable} from 'stream';
import type SourceMap from '@parcel/source-map';
import type {FileSystem} from '@parcel/fs';
import type WorkerFarm from '@parcel/workers';
import type {PackageManager} from '@parcel/package-manager';
import type {
  Diagnostic,
  Diagnostifiable,
  DiagnosticWithoutOrigin,
} from '@parcel/diagnostic';
import type {Cache} from '@parcel/cache';

import type {AST as _AST, ConfigResult as _ConfigResult} from './unsafe';

/** Plugin-specific AST, <code>any</code> */
export type AST = _AST;
export type ConfigResult = _ConfigResult;
/** Plugin-specific config result, <code>any</code> */
export type ConfigResultWithFilePath<T> = {|
  contents: T,
  filePath: FilePath,
|};
/** <code>process.env</code> */
export type EnvMap = typeof process.env;

export type JSONValue =
  | null
  | void // ? Is this okay?
  | boolean
  | number
  | string
  | Array<JSONValue>
  | JSONObject;

/** A JSON object (as in "map") */
export type JSONObject = {[key: string]: JSONValue, ...};

export type PackageName = string;
export type FilePath = string;
export type Glob = string;
export type Semver = string;
export type SemverRange = string;
/** See Dependency */
export type DependencySpecifier = string;

/** A pipeline as specified in the config mapping to <code>T</code>  */
export type GlobMap<T> = {[Glob]: T, ...};

export type RawParcelConfigPipeline = Array<PackageName>;

export type HMROptions = {port?: number, host?: string, ...};

/** The format of .parcelrc  */
export type RawParcelConfig = {|
  extends?: PackageName | FilePath | Array<PackageName | FilePath>,
  resolvers?: RawParcelConfigPipeline,
  transformers?: {[Glob]: RawParcelConfigPipeline, ...},
  bundler?: PackageName,
  namers?: RawParcelConfigPipeline,
  runtimes?: RawParcelConfigPipeline,
  packagers?: {[Glob]: PackageName, ...},
  optimizers?: {[Glob]: RawParcelConfigPipeline, ...},
  compressors?: {[Glob]: RawParcelConfigPipeline, ...},
  reporters?: RawParcelConfigPipeline,
  validators?: {[Glob]: RawParcelConfigPipeline, ...},
|};

/** A .parcelrc where all package names are resolved */
export type ResolvedParcelConfigFile = {|
  ...RawParcelConfig,
  +filePath: FilePath,
  +resolveFrom?: FilePath,
|};

/** Corresponds to <code>pkg#engines</code> */
export type Engines = {
  +browsers?: string | Array<string>,
  +electron?: SemverRange,
  +node?: SemverRange,
  +parcel?: SemverRange,
  ...
};

/** Corresponds to <code>pkg#targets.*.sourceMap</code> */
export type TargetSourceMapOptions = {|
  +sourceRoot?: string,
  +inline?: boolean,
  +inlineSources?: boolean,
|};

/**
 * A parsed version of PackageTargetDescriptor
 */
export interface Target {
  /** The output filename of the entry */
  +distEntry: ?FilePath;
  /** The output folder */
  +distDir: FilePath;
  +env: Environment;
  +name: string;
  +publicUrl: string;
  /** The location that created this Target, e.g. `package.json#main`*/
  +loc: ?SourceLocation;
}

/** In which environment the output should run (influces e.g. bundle loaders) */
export type EnvironmentContext =
  | 'browser'
  | 'web-worker'
  | 'service-worker'
  | 'worklet'
  | 'node'
  | 'electron-main'
  | 'electron-renderer';

/** The JS module format for the bundle output */
export type OutputFormat = 'esmodule' | 'commonjs' | 'global';

/**
 * The format of <code>pkg#targets.*</code>
 *
 * See Environment and Target.
 */
export type PackageTargetDescriptor = {|
  +context?: EnvironmentContext,
  +engines?: Engines,
  +includeNodeModules?:
    | boolean
    | Array<PackageName>
    | {[PackageName]: boolean, ...},
  +outputFormat?: OutputFormat,
  +publicUrl?: string,
  +distDir?: FilePath,
  +sourceMap?: boolean | TargetSourceMapOptions,
  +isLibrary?: boolean,
  +optimize?: boolean,
  +scopeHoist?: boolean,
  +source?: FilePath | Array<FilePath>,
|};

/**
 * The target format when using the JS API.
 *
 * (Same as PackageTargetDescriptor, but <code>distDir</code> is required.)
 */
export type TargetDescriptor = {|
  ...PackageTargetDescriptor,
  +distDir: FilePath,
  +distEntry?: FilePath,
|};

export type SourceType = 'script' | 'module';

/**
 * This is used when creating an Environment (see that).
 */
export type EnvironmentOptions = {|
  +context?: EnvironmentContext,
  +engines?: Engines,
  +includeNodeModules?:
    | boolean
    | Array<PackageName>
    | {[PackageName]: boolean, ...},
  +outputFormat?: OutputFormat,
  +sourceType?: SourceType,
  +isLibrary?: boolean,
  +shouldOptimize?: boolean,
  +shouldScopeHoist?: boolean,
  +sourceMap?: ?TargetSourceMapOptions,
  +loc?: ?SourceLocation,
|};

/**
 * A resolved browserslist, e.g.:
 * <pre><code>
 * {
 *   edge: '76',
 *   firefox: '67',
 *   chrome: '63',
 *   safari: '11.1',
 *   opera: '50',
 * }
 * </code></pre>
 */
export type VersionMap = {
  [string]: string,
  ...
};

export type EnvironmentFeature =
  | 'esmodules'
  | 'dynamic-import'
  | 'worker-module'
  | 'service-worker-module'
  | 'import-meta-url'
  | 'arrow-functions';

/**
 * Defines the environment in for the output bundle
 */
export interface Environment {
  +id: string;
  +context: EnvironmentContext;
  +engines: Engines;
  /** Whether to include all/none packages \
   *  (<code>true / false</code>), an array of package names to include, or an object \
   *  (of a package is not specified, it's included).
   */
  +includeNodeModules:
    | boolean
    | Array<PackageName>
    | {[PackageName]: boolean, ...};
  +outputFormat: OutputFormat;
  +sourceType: SourceType;
  /** Whether this is a library build (e.g. less loaders) */
  +isLibrary: boolean;
  /** Whether the output should be minified. */
  +shouldOptimize: boolean;
  /** Whether scope hoisting is enabled. */
  +shouldScopeHoist: boolean;
  +sourceMap: ?TargetSourceMapOptions;
  +loc: ?SourceLocation;

  /** Whether <code>context</code> specifies a browser context. */
  isBrowser(): boolean;
  /** Whether <code>context</code> specifies a node context. */
  isNode(): boolean;
  /** Whether <code>context</code> specifies an electron context. */
  isElectron(): boolean;
  /** Whether <code>context</code> specifies a worker context. */
  isWorker(): boolean;
  /** Whether <code>context</code> specifies a worklet context. */
  isWorklet(): boolean;
  /** Whether <code>context</code> specifies an isolated context (can't access other loaded ancestor bundles). */
  isIsolated(): boolean;
  matchesEngines(minVersions: VersionMap, defaultValue?: boolean): boolean;
  supports(feature: EnvironmentFeature, defaultValue?: boolean): boolean;
}

/**
 * Format of <code>pkg#dependencies</code>, <code>pkg#devDependencies</code>, <code>pkg#peerDependencies</code>
 */
type PackageDependencies = {|
  [PackageName]: Semver,
|};

/**
 * Format of <code>package.json</code>
 */
export type PackageJSON = {
  name: PackageName,
  version: Semver,
  type?: 'module',
  main?: FilePath,
  module?: FilePath,
  types?: FilePath,
  browser?: FilePath | {[FilePath]: FilePath | boolean, ...},
  source?: FilePath | Array<FilePath>,
  alias?: {
    [PackageName | FilePath | Glob]:
      | PackageName
      | FilePath
      | {|global: string|},
    ...
  },
  browserslist?: Array<string> | {[string]: Array<string>},
  engines?: Engines,
  targets?: {[string]: PackageTargetDescriptor, ...},
  dependencies?: PackageDependencies,
  devDependencies?: PackageDependencies,
  peerDependencies?: PackageDependencies,
  sideEffects?: boolean | FilePath | Array<FilePath>,
  bin?: string | {|[string]: FilePath|},
  ...
};

export type LogLevel = 'none' | 'error' | 'warn' | 'info' | 'verbose';
export type BuildMode = 'development' | 'production' | string;
export type DetailedReportOptions = {|
  assetsPerBundle?: number,
|};

export type InitialParcelOptions = {|
  +entries?: FilePath | Array<FilePath>,
  +config?: DependencySpecifier,
  +defaultConfig?: DependencySpecifier,
  +env?: EnvMap,
  +targets?: ?(Array<string> | {+[string]: TargetDescriptor, ...}),

  +shouldDisableCache?: boolean,
  +cacheDir?: FilePath,
  +mode?: BuildMode,
  +hmrOptions?: ?HMROptions,
  +shouldContentHash?: boolean,
  +serveOptions?: InitialServerOptions | false,
  +shouldAutoInstall?: boolean,
  +logLevel?: LogLevel,
  +shouldProfile?: boolean,
  +shouldPatchConsole?: boolean,
  +shouldBuildLazily?: boolean,
  +shouldBundleIncrementally?: boolean,

  +inputFS?: FileSystem,
  +outputFS?: FileSystem,
  +cache?: Cache,
  +workerFarm?: WorkerFarm,
  +packageManager?: PackageManager,
  +detailedReport?: ?DetailedReportOptions,

  +defaultTargetOptions?: {|
    +shouldOptimize?: boolean,
    +shouldScopeHoist?: boolean,
    +sourceMaps?: boolean,
    +publicUrl?: string,
    +distDir?: FilePath,
    +engines?: Engines,
    +outputFormat?: OutputFormat,
    +isLibrary?: boolean,
  |},

  +additionalReporters?: Array<{|
    packageName: DependencySpecifier,
    resolveFrom: FilePath,
  |}>,

  // throwErrors
  // global?
|};

export type InitialServerOptions = {|
  +publicUrl?: string,
  +host?: string,
  +port: number,
  +https?: HTTPSOptions | boolean,
|};

export interface PluginOptions {
  +mode: BuildMode;
  +env: EnvMap;
  +hmrOptions: ?HMROptions;
  +serveOptions: ServerOptions | false;
  +shouldBuildLazily: boolean;
  +shouldAutoInstall: boolean;
  +logLevel: LogLevel;
  +projectRoot: FilePath;
  +cacheDir: FilePath;
  +inputFS: FileSystem;
  +outputFS: FileSystem;
  +packageManager: PackageManager;
  +instanceId: string;
  +detailedReport: ?DetailedReportOptions;
}

export type ServerOptions = {|
  +distDir: FilePath,
  +host?: string,
  +port: number,
  +https?: HTTPSOptions | boolean,
  +publicUrl?: string,
|};

export type HTTPSOptions = {|
  +cert: FilePath,
  +key: FilePath,
|};

/**
 * Source locations are 1-based, meaning lines and columns start at 1
 */
export type SourceLocation = {|
  +filePath: string,
  /** inclusive */
  +start: {|
    +line: number,
    +column: number,
  |},
  /** exclusive */
  +end: {|
    +line: number,
    +column: number,
  |},
|};

/**
 * An object that plugins can write arbitatry data to.
 */
export type Meta = JSONObject;

/**
 * An identifier in an asset (likely imported/exported).
 */
export type Symbol = string;

/**
 * A map of export names to the corresponding asset's local variable names.
 */
export interface AssetSymbols // eslint-disable-next-line no-undef
  extends Iterable<
    [Symbol, {|local: Symbol, loc: ?SourceLocation, meta?: ?Meta|}],
  > {
  /**
   * The exports of the asset are unknown, rather than just empty.
   * This is the default state.
   */
  +isCleared: boolean;
  get(exportSymbol: Symbol): ?{|
    local: Symbol,
    loc: ?SourceLocation,
    meta?: ?Meta,
  |};
  hasExportSymbol(exportSymbol: Symbol): boolean;
  hasLocalSymbol(local: Symbol): boolean;
  exportSymbols(): Iterable<Symbol>;
}

export interface MutableAssetSymbols extends AssetSymbols {
  /**
   * Initilizes the map, sets isCleared to false.
   */
  ensure(): void;
  set(
    exportSymbol: Symbol,
    local: Symbol,
    loc: ?SourceLocation,
    meta?: ?Meta,
  ): void;
  delete(exportSymbol: Symbol): void;
}

/**
 * isWeak means: the symbol is not used by the parent asset itself and is merely reexported
 */
export interface MutableDependencySymbols // eslint-disable-next-line no-undef
  extends Iterable<
    [
      Symbol,
      {|local: Symbol, loc: ?SourceLocation, isWeak: boolean, meta?: ?Meta|},
    ],
  > {
  /**
   * Initilizes the map, sets isCleared to false.
   */
  ensure(): void;
  /**
   * The symbols taht are imports are unknown, rather than just empty.
   * This is the default state.
   */
  +isCleared: boolean;
  get(exportSymbol: Symbol): ?{|
    local: Symbol,
    loc: ?SourceLocation,
    isWeak: boolean,
    meta?: ?Meta,
  |};
  hasExportSymbol(exportSymbol: Symbol): boolean;
  hasLocalSymbol(local: Symbol): boolean;
  exportSymbols(): Iterable<Symbol>;
  set(
    exportSymbol: Symbol,
    local: Symbol,
    loc: ?SourceLocation,
    isWeak: ?boolean,
  ): void;
  delete(exportSymbol: Symbol): void;
}

export type DependencyPriority = 'sync' | 'parallel' | 'lazy';
export type SpecifierType = 'commonjs' | 'esm' | 'url' | 'custom';

/**
 * Usen when creating a Dependency, see that.
 * @section transformer
 */
export type DependencyOptions = {|
  /** The specifier used to resolve the dependency. */
  +specifier: DependencySpecifier,
  /**
   * How the specifier should be interpreted.
   *   - esm: An ES module specifier. It is parsed as a URL, but bare specifiers are treated as node_modules.
   *   - commonjs: A CommonJS specifier. It is not parsed as a URL.
   *   - url: A URL that works as in a browser. Bare specifiers are treated as relative URLs.
   *   - custom: A custom specifier. Must be handled by a custom resolver plugin.
   */
  +specifierType: SpecifierType,
  /**
   * When the dependency should be loaded.
   *   - sync: The dependency should be resolvable synchronously. The resolved asset will be placed
   *       in the same bundle as the parent, or another bundle that's already on the page.
   *   - parallel: The dependency should be placed in a separate bundle that's loaded in parallel
   *       with the current bundle.
   *   - lazy: The dependency should be placed in a separate bundle that's loaded later.
   * @default 'sync'
   */
  +priority?: DependencyPriority,
  /**
   * Controls the behavior of the bundle the resolved asset is placed into. Use in combination with `priority`
   * to determine when the bundle is loaded.
   *   - inline: The resolved asset will be placed into a new inline bundle. Inline bundles are not written
   *       to a separate file, but embedded into the parent bundle.
   *   - isolated: The resolved asset will be isolated from its parents in a separate bundle.
   *       Shared assets will be duplicated.
   */
  +bundleBehavior?: BundleBehavior,
  /**
   * When the dependency is a bundle entry (priority is "parallel" or "lazy"), this controls the naming
   * of that bundle. `needsStableName` indicates that the name should be stable over time, even when the
   * content of the bundle changes. This is useful for entries that a user would manually enter the URL
   * for, as well as for things like service workers or RSS feeds, where the URL must remain consistent
   * over time.
   */
  +needsStableName?: boolean,
  /** Whether the dependency is optional. If the dependency cannot be resolved, this will not fail the build. */
  +isOptional?: boolean,
  /** The location within the source file where the dependency was found. */
  +loc?: SourceLocation,
  /** The environment of the dependency. */
  +env?: EnvironmentOptions,
  /** Plugin-specific metadata for the dependency. */
  +meta?: Meta,
  /** The pipeline defined in .parcelrc that the dependency should be processed with. */
  +pipeline?: string,
  /**
   * The file path where the dependency should be resolved from.
   * By default, this is the path of the source file where the dependency was specified.
   */
  +resolveFrom?: FilePath,
  /** The semver version range expected for the dependency. */
  +range?: SemverRange,
  /** The symbols within the resolved module that the source file depends on. */
  +symbols?: $ReadOnlyMap<
    Symbol,
    {|local: Symbol, loc: ?SourceLocation, isWeak: boolean, meta?: Meta|},
  >,
|};

/**
 * A Dependency denotes a connection between two assets \
 * (likely some effect from the importee is expected - be it a side effect or a value is being imported).
 *
 * @section transformer
 */
export interface Dependency {
  /** The id of the dependency. */
  +id: string;
  /** The specifier used to resolve the dependency. */
  +specifier: DependencySpecifier;
  /**
   * How the specifier should be interpreted.
   *   - esm: An ES module specifier. It is parsed as a URL, but bare specifiers are treated as node_modules.
   *   - commonjs: A CommonJS specifier. It is not parsed as a URL.
   *   - url: A URL that works as in a browser. Bare specifiers are treated as relative URLs.
   *   - custom: A custom specifier. Must be handled by a custom resolver plugin.
   */
  +specifierType: SpecifierType;
  /**
   * When the dependency should be loaded.
   *   - sync: The dependency should be resolvable synchronously. The resolved asset will be placed
   *       in the same bundle as the parent, or another bundle that's already on the page.
   *   - parallel: The dependency should be placed in a separate bundle that's loaded in parallel
   *       with the current bundle.
   *   - lazy: The dependency should be placed in a separate bundle that's loaded later.
   * @default 'sync'
   */
  +priority: DependencyPriority;
  /**
   * Controls the behavior of the bundle the resolved asset is placed into. Use in combination with `priority`
   * to determine when the bundle is loaded.
   *   - inline: The resolved asset will be placed into a new inline bundle. Inline bundles are not written
   *       to a separate file, but embedded into the parent bundle.
   *   - isolated: The resolved asset will be isolated from its parents in a separate bundle.
   *       Shared assets will be duplicated.
   */
  +bundleBehavior: ?BundleBehavior;
  /**
   * When the dependency is a bundle entry (priority is "parallel" or "lazy"), this controls the naming
   * of that bundle. `needsStableName` indicates that the name should be stable over time, even when the
   * content of the bundle changes. This is useful for entries that a user would manually enter the URL
   * for, as well as for things like service workers or RSS feeds, where the URL must remain consistent
   * over time.
   */
  +needsStableName: boolean;
  /** Whether the dependency is optional. If the dependency cannot be resolved, this will not fail the build. */
  +isOptional: boolean;
  /** Whether the dependency is an entry. */
  +isEntry: boolean;
  /** The location within the source file where the dependency was found. */
  +loc: ?SourceLocation;
  /** The environment of the dependency. */
  +env: Environment;
  /** Plugin-specific metadata for the dependency. */
  +meta: Meta;
  /** If this is an entry, this is the target that is associated with that entry. */
  +target: ?Target;
  /** The id of the asset with this dependency. */
  +sourceAssetId: ?string;
  /** The file path of the asset with this dependency. */
  +sourcePath: ?FilePath;
  /** The type of the asset that referenced this dependency. */
  +sourceAssetType: ?string;
  /**
   * The file path where the dependency should be resolved from.
   * By default, this is the path of the source file where the dependency was specified.
   */
  +resolveFrom: ?FilePath;
  /** The semver version range expected for the dependency. */
  +range: ?SemverRange;
  /** The pipeline defined in .parcelrc that the dependency should be processed with. */
  +pipeline: ?string;

  // TODO make immutable
  /** The symbols within the resolved module that the source file depends on. */
  +symbols: MutableDependencySymbols;
}

export type File = {|
  +filePath: FilePath,
  +hash?: string,
|};

/**
 * @section transformer
 */
export type ASTGenerator = {|
  type: string,
  version: Semver,
|};

export type BundleBehavior = 'inline' | 'isolated';

/**
 * An asset represents a file or part of a file. It may represent any data type, including source code,
 * binary data, etc. Assets may exist in the file system or may be virtual.
 *
 * @section transformer
 */
export interface BaseAsset {
  /** The id of the asset. */
  +id: string;
  /** The file system where the source is located. */
  +fs: FileSystem;
  /** The file path of the asset. */
  +filePath: FilePath;
  /**
   * The asset's type. This initially corresponds to the source file extension,
   * but it may be changed during transformation.
   */
  +type: string;
  /** The transformer options for the asset from the dependency query string. */
  +query: URLSearchParams;
  /** The environment of the asset. */
  +env: Environment;
  /**
   * Whether this asset is part of the project, and not an external dependency (e.g. in node_modules).
   * This indicates that transformation using the project's configuration should be applied.
   */
  +isSource: boolean;
  /** Plugin-specific metadata for the asset. */
  +meta: Meta;
  /**
   * Controls which bundle the asset is placed into.
   *   - inline: The asset will be placed into a new inline bundle. Inline bundles are not written
   *       to a separate file, but embedded into the parent bundle.
   *   - isolated: The asset will be isolated from its parents in a separate bundle. Shared assets
   *       will be duplicated.
   */
  +bundleBehavior: ?BundleBehavior;
  /**
   * If the asset is used as a bundle entry, this controls whether that bundle can be split
   * into multiple, or whether all of the dependencies must be placed in a single bundle.
   */
  +isBundleSplittable: boolean;
  /**
   * Whether this asset can be omitted if none of its exports are being used.
   * This is initially set by the resolver, but can be overridden by transformers.
   */
  +sideEffects: boolean;
  /**
   * When a transformer returns multiple assets, it can give them unique keys to identify them.
   * This can be used to find assets during packaging, or to create dependencies between multiple
   * assets returned by a transformer by using the unique key as the dependency specifier.
   */
  +uniqueKey: ?string;
  /** The type of the AST. */
  +astGenerator: ?ASTGenerator;
  /** The pipeline defined in .parcelrc that the asset should be processed with. */
  +pipeline: ?string;
  /** The symbols that the asset exports. */
  +symbols: AssetSymbols;
  /** Returns the current AST. */
  getAST(): Promise<?AST>;
  /** Returns the asset contents as a string. */
  getCode(): Promise<string>;
  /** Returns the asset contents as a buffer. */
  getBuffer(): Promise<Buffer>;
  /** Returns the asset contents as a stream. */
  getStream(): Readable;
  /** Returns the source map for the asset, if available. */
  getMap(): Promise<?SourceMap>;
  /** Returns a buffer representation of the source map, if available. */
  getMapBuffer(): Promise<?Buffer>;
  /** Returns a list of dependencies for the asset. */
  getDependencies(): $ReadOnlyArray<Dependency>;
}

/**
 * A mutable Asset, available during transformation.
 * @section transformer
 */
export interface MutableAsset extends BaseAsset {
  /**
   * The asset's type. This initially corresponds to the source file extension,
   * but it may be changed during transformation.
   */
  type: string;
  /**
   * Controls which bundle the asset is placed into.
   *   - inline: The asset will be placed into a new inline bundle. Inline bundles are not written
   *       to a separate file, but embedded into the parent bundle.
   *   - isolated: The asset will be isolated from its parents in a separate bundle. Shared assets
   *       will be duplicated.
   */
  bundleBehavior: ?BundleBehavior;
  /**
   * If the asset is used as a bundle entry, this controls whether that bundle can be split
   * into multiple, or whether all of the dependencies must be placed in a single bundle.
   * @default true
   */
  isBundleSplittable: boolean;
  /**
   * Whether this asset can be omitted if none of its exports are being used.
   * This is initially set by the resolver, but can be overridden by transformers.
   */
  sideEffects: boolean;
  /** The symbols that the asset exports. */
  +symbols: MutableAssetSymbols;

  /** Adds a dependency to the asset. */
  addDependency(DependencyOptions): string;
  /**
   * Adds a url dependency to the asset.
   * This is a shortcut for addDependency that sets the specifierType to 'url' and priority to 'lazy'.
   */
  addURLDependency(url: string, opts: $Shape<DependencyOptions>): string;
  /** Invalidates the transformation when the given file is modified or deleted. */
  invalidateOnFileChange(FilePath): void;
  /** Invalidates the transformation when matched files are created. */
  invalidateOnFileCreate(FileCreateInvalidation): void;
  /** Invalidates the transformation when the given environment variable changes. */
  invalidateOnEnvChange(string): void;
  /** Sets the asset contents as a string. */
  setCode(string): void;
  /** Sets the asset contents as a buffer. */
  setBuffer(Buffer): void;
  /** Sets the asset contents as a stream. */
  setStream(Readable): void;
  /** Sets the asset's AST. */
  setAST(AST): void;
  /** Returns whether the AST has been modified. */
  isASTDirty(): boolean;
  /** Sets the asset's source map. */
  setMap(?SourceMap): void;
  setEnvironment(opts: EnvironmentOptions): void;
}

/**
 * An immutable Asset, available after transformation.
 * @section transformer
 */
export interface Asset extends BaseAsset {
  /** Statistics about the asset. */
  +stats: Stats;
}

export type DevDepOptions = {|
  specifier: DependencySpecifier,
  resolveFrom: FilePath,
  range?: ?SemverRange,
  /**
   * When this dev dependency is invalidated, also invalidate these dependencies.
   * This is useful if the parcel plugin or another parent dependency
   * has its own cache for this dev dependency other than Node's require cache.
   */
  additionalInvalidations?: Array<{|
    specifier: DependencySpecifier,
    resolveFrom: FilePath,
    range?: ?SemverRange,
  |}>,
|};

/**
 * @section transformer
 */
export interface Config {
  /**
   * Whether this config is part of the project, and not an external dependency (e.g. in node_modules).
   * This indicates that transformation using the project's configuration should be applied.
   */
  +isSource: boolean;
  /** The path of the file to start searching for config from. */
  +searchPath: FilePath;
  /** The environment */
  +env: Environment;

  /** Invalidates the config when the given file is modified or deleted. */
  invalidateOnFileChange(FilePath): void;
  /** Invalidates the config when matched files are created. */
  invalidateOnFileCreate(FileCreateInvalidation): void;
  /** Invalidates the config when the given environment variable changes. */
  invalidateOnEnvChange(string): void;
  /** Invalidates the config only when Parcel restarts. */
  invalidateOnStartup(): void;
  /** Invalidates the config on every build. */
  invalidateOnBuild(): void;
  /**
   * Adds a dev dependency to the config. If the dev dependency or any of its
   * dependencies change, the config will be invalidated.
   */
  addDevDependency(DevDepOptions): void;
  /**
   * Sets the cache key for the config. By default, this is computed as a hash of the
   * files passed to invalidateOnFileChange or loaded by getConfig. If none, then a
   * hash of the result returned from loadConfig is used. This method can be used to
   * override this behavior and explicitly control the cache key. This can be useful
   * in cases where only part of a file is used to avoid unnecessary invalidations,
   * or when the result is not hashable (i.e. contains non-serializable properties like functions).
   */
  setCacheKey(string): void;

  /**
   * Searches for config files with the given names in all parent directories
   * of the config's searchPath.
   */
  getConfig<T>(
    filePaths: Array<FilePath>,
    options?: {|
      packageKey?: string,
      parse?: boolean,
      exclude?: boolean,
    |},
  ): Promise<?ConfigResultWithFilePath<T>>;
  /**
   * Searches for config files with the given names in all parent directories
   * of the passed searchPath.
   */
  getConfigFrom<T>(
    searchPath: FilePath,
    filePaths: Array<FilePath>,
    options?: {|
      packageKey?: string,
      parse?: boolean,
      exclude?: boolean,
    |},
  ): Promise<?ConfigResultWithFilePath<T>>;
  /** Finds the nearest package.json from the config's searchPath. */
  getPackage(): Promise<?PackageJSON>;
}

export type Stats = {|
  time: number,
  size: number,
|};

/**
 * @section transformer
 */
export type GenerateOutput = {|
  +content: Blob,
  +map?: ?SourceMap,
|};

export type Blob = string | Buffer | Readable;

/**
 * Transformers can return multiple result objects to create new assets.
 * For example, a file may contain multiple parts of different types,
 * which should be processed by their respective transformation pipelines.
 *
 * @section transformer
 */
export type TransformerResult = {|
  /** The asset's type. */
  +type: string,
  /** The content of the asset. Either content or an AST is required. */
  +content?: ?Blob,
  /** The asset's AST. Either content or an AST is required. */
  +ast?: ?AST,
  /** The source map for the asset. */
  +map?: ?SourceMap,
  /** The dependencies of the asset. */
  +dependencies?: $ReadOnlyArray<DependencyOptions>,
  /** The environment of the asset. The options are merged with the input asset's environment. */
  +env?: EnvironmentOptions | Environment,
  /**
   * Controls which bundle the asset is placed into.
   *   - inline: The asset will be placed into a new inline bundle. Inline bundles are not written
   *       to a separate file, but embedded into the parent bundle.
   *   - isolated: The asset will be isolated from its parents in a separate bundle. Shared assets
   *       will be duplicated.
   */
  +bundleBehavior?: ?BundleBehavior,
  /**
   * If the asset is used as a bundle entry, this controls whether that bundle can be split
   * into multiple, or whether all of the dependencies must be placed in a single bundle.
   */
  +isBundleSplittable?: boolean,
  /** Plugin-specific metadata for the asset. */
  +meta?: Meta,
  /** The pipeline defined in .parcelrc that the asset should be processed with. */
  +pipeline?: ?string,
  /**
   * Whether this asset can be omitted if none of its exports are being used.
   * This is initially set by the resolver, but can be overridden by transformers.
   */
  +sideEffects?: boolean,
  /** The symbols that the asset exports. */
  +symbols?: $ReadOnlyMap<Symbol, {|local: Symbol, loc: ?SourceLocation|}>,
  /**
   * When a transformer returns multiple assets, it can give them unique keys to identify them.
   * This can be used to find assets during packaging, or to create dependencies between multiple
   * assets returned by a transformer by using the unique key as the dependency specifier.
   */
  +uniqueKey?: ?string,
|};

export type Async<T> = T | Promise<T>;

export interface PluginLogger {
  /** Logs a diagnostic at the verbose log level. */
  verbose(
    diagnostic: DiagnosticWithoutOrigin | Array<DiagnosticWithoutOrigin>,
  ): void;

  /** Logs a diagnostic at the info log level. */
  info(
    diagnostic: DiagnosticWithoutOrigin | Array<DiagnosticWithoutOrigin>,
  ): void;

  /** Synonym for logger.info. */
  log(
    diagnostic: DiagnosticWithoutOrigin | Array<DiagnosticWithoutOrigin>,
  ): void;

  /** Logs a diagnostic at the verbose warning log level. */
  warn(
    diagnostic: DiagnosticWithoutOrigin | Array<DiagnosticWithoutOrigin>,
  ): void;

  /** Logs a diagnostic at the verbose error log level. */
  error(
    input:
      | Diagnostifiable
      | DiagnosticWithoutOrigin
      | Array<DiagnosticWithoutOrigin>,
  ): void;
}

/**
 * @section transformer
 */
export type ResolveFn = (from: FilePath, to: string) => Promise<FilePath>;

/**
 * @section validator
 * @experimental
 */
type ResolveConfigFn = (configNames: Array<FilePath>) => Promise<?FilePath>;

/**
 * @section validator
 * @experimental
 */
type ResolveConfigWithPathFn = (
  configNames: Array<FilePath>,
  assetFilePath: string,
) => Promise<?FilePath>;

/**
 * @section validator
 * @experimental
 */
export type ValidateResult = {|
  warnings: Array<Diagnostic>,
  errors: Array<Diagnostic>,
|};

/**
 * @section validator
 * @experimental
 */
export type DedicatedThreadValidator = {|
  validateAll: ({|
    assets: Asset[],
    resolveConfigWithPath: ResolveConfigWithPathFn,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Async<Array<?ValidateResult>>,
|};

/**
 * @section validator
 * @experimental
 */
export type MultiThreadValidator = {|
  validate: ({|
    asset: Asset,
    config: ConfigResult | void,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Async<ValidateResult | void>,
  getConfig?: ({|
    asset: Asset,
    resolveConfig: ResolveConfigFn,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Async<ConfigResult | void>,
|};

/**
 * @section validator
 */
export type Validator = DedicatedThreadValidator | MultiThreadValidator;

/**
 * The methods for a transformer plugin.
 * @section transformer
 */
export type Transformer<ConfigType> = {|
  loadConfig?: ({|
    config: Config,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Promise<ConfigType> | ConfigType,
  /** Whether an AST from a previous transformer can be reused (to prevent double-parsing) */
  canReuseAST?: ({|
    ast: AST,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => boolean,
  /** Parse the contents into an ast */
  parse?: ({|
    asset: Asset,
    config: ConfigType,
    resolve: ResolveFn,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Async<?AST>,
  /** Transform the asset and/or add new assets */
  transform({|
    asset: MutableAsset,
    config: ConfigType,
    resolve: ResolveFn,
    options: PluginOptions,
    logger: PluginLogger,
  |}): Async<Array<TransformerResult | MutableAsset>>,
  /**
   * Do some processing after the transformation
   * @experimental
   */
  postProcess?: ({|
    assets: Array<MutableAsset>,
    config: ConfigType,
    resolve: ResolveFn,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Async<Array<TransformerResult>>,
  /** Stringify the AST */
  generate?: ({|
    asset: Asset,
    ast: AST,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Async<GenerateOutput>,
|};

/**
 * Used to control a traversal
 * @section bundler
 */
export type TraversalActions = {|
  /** Skip the current node's children and continue the traversal if there are other nodes in the queue. */
  skipChildren(): void,
  /** Stop the traversal */
  stop(): void,
|};

/**
 * Essentially GraphTraversalCallback, but allows adding specific node enter and exit callbacks.
 * @section bundler
 */
export type GraphVisitor<TNode, TContext> =
  | GraphTraversalCallback<TNode, TContext>
  | {|
      enter?: GraphTraversalCallback<TNode, TContext>,
      exit?: GraphTraversalCallback<TNode, TContext>,
    |};

/**
 * A generic callback for graph traversals
 * @param context The parent node's return value is passed as a parameter to the children's callback. \
 * This can be used to forward information from the parent to children in a DFS (unlike a global variable).
 * @section bundler
 */
export type GraphTraversalCallback<TNode, TContext> = (
  node: TNode,
  context: ?TContext,
  actions: TraversalActions,
) => ?TContext;

/**
 * @section bundler
 */
export type BundleTraversable =
  | {|+type: 'asset', value: Asset|}
  | {|+type: 'dependency', value: Dependency|};

/**
 * @section bundler
 */
export type BundleGraphTraversable =
  | {|+type: 'asset', value: Asset|}
  | {|+type: 'dependency', value: Dependency|};

/**
 * Options for MutableBundleGraph's <code>createBundle</code>.
 *
 * If an <code>entryAsset</code> is provided, <code>uniqueKey</code> (for the bundle id),
 * <code>type</code>, and <code>env</code> will be inferred from the <code>entryAsset</code>.
 *
 * If an <code>entryAsset</code> is not provided, <code>uniqueKey</code> (for the bundle id),
 * <code>type</code>, and <code>env</code> must be provided.
 *
 * isSplittable defaults to <code>entryAsset.isSplittable</code> or <code>false</code>
 * @section bundler
 */
export type CreateBundleOpts =
  // If an entryAsset is provided, a bundle id, type, and environment will be
  // inferred from the entryAsset.
  | {|
      /** The entry asset of the bundle. If provided, many bundle properties will be inferred from it. */
      +entryAsset: Asset,
      /** The target of the bundle. Should come from the dependency that created the bundle. */
      +target: Target,
      /**
       * Indicates that the bundle's file name should be stable over time, even when the content of the bundle
       * changes. This is useful for entries that a user would manually enter the URL for, as well as for things
       * like service workers or RSS feeds, where the URL must remain consistent over time.
       */
      +needsStableName?: ?boolean,
      /**
       * Controls the behavior of the bundle.
       * to determine when the bundle is loaded.
       *   - inline: Inline bundles are not written to a separate file, but embedded into the parent bundle.
       *   - isolated: The bundle will be isolated from its parents. Shared assets will be duplicated.
       */
      +bundleBehavior?: ?BundleBehavior,
    |}
  // If an entryAsset is not provided, a bundle id, type, and environment must
  // be provided.
  | {|
      /** The type of the bundle. */
      +type: string,
      /** The environment of the bundle. */
      +env: Environment,
      /** A unique value for the bundle to be used in its id. */
      +uniqueKey: string,
      /** The target of the bundle. Should come from the dependency that created the bundle. */
      +target: Target,
      /**
       * Indicates that the bundle's file name should be stable over time, even when the content of the bundle
       * changes. This is useful for entries that a user would manually enter the URL for, as well as for things
       * like service workers or RSS feeds, where the URL must remain consistent over time.
       */
      +needsStableName?: ?boolean,
      /**
       * Controls the behavior of the bundle.
       * to determine when the bundle is loaded.
       *   - inline: Inline bundles are not written to a separate file, but embedded into the parent bundle.
       *   - isolated: The bundle will be isolated from its parents. Shared assets will be duplicated.
       */
      +bundleBehavior?: ?BundleBehavior,
      /**
       * Whether the bundle can be split. If false, then all dependencies of the bundle will be kept
       * internal to the bundle, rather than referring to other bundles. This may result in assets
       * being duplicated between multiple bundles, but can be useful for things like server side rendering.
       */
      +isSplittable?: ?boolean,
      /** The bundle's pipeline, to be used for optimization. Usually based on the pipeline of the entry asset. */
      +pipeline?: ?string,
    |};

/**
 * Specifies a symbol in an asset
 * @section packager
 */
export type SymbolResolution = {|
  /** The Asset which exports the symbol. */
  +asset: Asset,
  /** under which name the symbol is exported */
  +exportSymbol: Symbol | string,
  /** The identifier under which the symbol can be referenced. */
  +symbol: void | null | false | Symbol,
  /** The location of the specifier that lead to this result. */
  +loc: ?SourceLocation,
|};

/**
 * @section packager
 */
export type ExportSymbolResolution = {|
  ...SymbolResolution,
  +exportAs: Symbol | string,
|};

/**
 * A Bundle (a collection of assets)
 *
 * @section bundler
 */
export interface Bundle {
  /** The bundle id. */
  +id: string;
  /** The type of the bundle. */
  +type: string;
  /** The environment of the bundle. */
  +env: Environment;
  /** The bundle's target. */
  +target: Target;
  /** Assets that run when the bundle is loaded (e.g. runtimes could be added). VERIFY */
  /**
   * Indicates that the bundle's file name should be stable over time, even when the content of the bundle
   * changes. This is useful for entries that a user would manually enter the URL for, as well as for things
   * like service workers or RSS feeds, where the URL must remain consistent over time.
   */
  +needsStableName: ?boolean;
  /**
   * Controls the behavior of the bundle.
   * to determine when the bundle is loaded.
   *   - inline: Inline bundles are not written to a separate file, but embedded into the parent bundle.
   *   - isolated: The bundle will be isolated from its parents. Shared assets will be duplicated.
   */
  +bundleBehavior: ?BundleBehavior;
  /**
   * Whether the bundle can be split. If false, then all dependencies of the bundle will be kept
   * internal to the bundle, rather than referring to other bundles. This may result in assets
   * being duplicated between multiple bundles, but can be useful for things like server side rendering.
   */
  +isSplittable: ?boolean;
  /**
   * A placeholder for the bundle's content hash that can be used in the bundle's name or the contents of another
   * bundle. Hash references are replaced with a content hash of the bundle after packaging and optimizing.
   */
  +hashReference: string;
  /**
   * Returns the assets that are executed immediately when the bundle is loaded.
   * Some bundles may not have any entry assets, for example, shared bundles.
   */
  getEntryAssets(): Array<Asset>;
  /**
   * Returns the main entry of the bundle, which will provide the bundle's exports.
   * Some bundles do not have a main entry, for example, shared bundles.
   */
  getMainEntry(): ?Asset;
  /** Returns whether the bundle includes the given asset. */
  hasAsset(Asset): boolean;
  /** Returns whether the bundle includes the given dependency. */
  hasDependency(Dependency): boolean;
  /** Traverses the assets in the bundle. */
  traverseAssets<TContext>(
    visit: GraphVisitor<Asset, TContext>,
    startAsset?: Asset,
  ): ?TContext;
  /** Traverses assets and dependencies in the bundle. */
  traverse<TContext>(
    visit: GraphVisitor<BundleTraversable, TContext>,
  ): ?TContext;
}

/**
 * A Bundle that got named by a Namer
 * @section bundler
 */
export interface NamedBundle extends Bundle {
  /** A shortened version of the bundle id that is used to refer to the bundle at runtime. */
  +publicId: string;
  /**
   * The bundle's name. This is a file path relative to the bundle's target directory.
   * The bundle name may include a hash reference, but not the final content hash.
   */
  +name: string;
  /** A version of the bundle's name with hash references removed for display. */
  +displayName: string;
}

export interface PackagedBundle extends NamedBundle {
  /** The absolute file path of the written bundle, including the final content hash if any. */
  +filePath: FilePath;
  /** Statistics about the bundle. */
  +stats: Stats;
}

/**
 * A collection of sibling bundles (which are stored in the BundleGraph) that should be loaded together (in order).
 * @section bundler
 */
export interface BundleGroup {
  /** The target of the bundle group. */
  +target: Target;
  /** The id of the entry asset in the bundle group, which is executed immediately when the bundle group is loaded. */
  +entryAssetId: string;
}

/**
 * A BundleGraph in the Bundler that can be modified
 * @section bundler
 * @experimental
 */
export interface MutableBundleGraph extends BundleGraph<Bundle> {
  /** Add asset and all child nodes to the bundle. */
  addAssetGraphToBundle(
    Asset,
    Bundle,
    shouldSkipDependency?: (Dependency) => boolean,
  ): void;
  addAssetToBundle(Asset, Bundle): void;
  /**
   * Adds an asset as an entry to a bundle. Entry assets are executed immediately
   * when the bundle is loaded.
   */
  addEntryToBundle(
    Asset,
    Bundle,
    shouldSkipDependency?: (Dependency) => boolean,
  ): void;
  /** Adds the Bundle to the BundleGroup, loading it along with others in the group */
  addBundleToBundleGroup(Bundle, BundleGroup): void;
  createAssetReference(Dependency, Asset, Bundle): void;
  createBundleReference(Bundle, Bundle): void;
  createBundle(CreateBundleOpts): Bundle;
  /** Turns an edge (Dependency -> Asset-s) into (Dependency -> BundleGroup -> Asset-s) */
  createBundleGroup(Dependency, Target): BundleGroup;
  /** @returns all Asset-s attached to the Dependency */
  getDependencyAssets(Dependency): Array<Asset>;
  /** Get Bundles that load this bundle asynchronously. */
  getParentBundlesOfBundleGroup(BundleGroup): Array<Bundle>;
  /** @returns the size in bytes of an asset and all assets in its subgraph */
  getTotalSize(Asset): number;
  /**
   * Recursively removes an asset and its dependencies from a bundle. Stops at
   * bundle group boundaries.
   */
  removeAssetGraphFromBundle(Asset, Bundle): void;
  /**
   * Removes a BundleGroup from the graph. If any of the group's Bundle-s no
   * longer exist in the graph, those are removed as well.
   */
  removeBundleGroup(bundleGroup: BundleGroup): void;
  /** Turns a dependency to a different bundle into a dependency to an asset inside <code>bundle</code>. */
  internalizeAsyncDependency(bundle: Bundle, dependency: Dependency): void;
}

/**
 * A Graph that contains Bundle-s, Asset-s, Dependency-s, BundleGroup-s
 * @section bundler
 */
export interface BundleGraph<TBundle: Bundle> {
  /** Retrieves an asset by id. */
  getAssetById(id: string): Asset;
  /** Returns the public (short) id for an asset. */
  getAssetPublicId(asset: Asset): string;
  /** Returns a list of bundles in the bundle graph. By default, inline bundles are excluded. */
  getBundles(opts?: {|includeInline: boolean|}): Array<TBundle>;
  /** Traverses the assets and dependencies in the bundle graph, in depth first order. */
  traverse<TContext>(
    visit: GraphVisitor<BundleGraphTraversable, TContext>,
    startAsset: ?Asset,
  ): ?TContext;
  /** Traverses all bundles in the bundle graph, including inline bundles, in depth first order. */
  traverseBundles<TContext>(
    visit: GraphVisitor<TBundle, TContext>,
    startBundle: ?Bundle,
  ): ?TContext;
  /** Returns a list of bundle groups that load the given bundle. */
  getBundleGroupsContainingBundle(bundle: Bundle): Array<BundleGroup>;
  /** Returns a list of bundles that load together in the given bundle group. */
  getBundlesInBundleGroup(
    bundleGroup: BundleGroup,
    opts?: {|includeInline: boolean|},
  ): Array<TBundle>;
  /** Returns a list of bundles that this bundle loads asynchronously. */
  getChildBundles(bundle: Bundle): Array<TBundle>;
  /** Returns a list of bundles that load this bundle asynchronously. */
  getParentBundles(bundle: Bundle): Array<TBundle>;
  /** Returns whether the bundle was loaded by another bundle of the given type. */
  hasParentBundleOfType(bundle: Bundle, type: string): boolean;
  /** Returns a list of bundles that are referenced by this bundle. By default, inline bundles are excluded. */
  getReferencedBundles(
    bundle: Bundle,
    opts?: {|recursive?: boolean, includeInline?: boolean|},
  ): Array<TBundle>;
  /** Get the dependencies that the asset requires */
  getDependencies(asset: Asset): Array<Dependency>;
  /** Get the dependencies that require the asset */
  getIncomingDependencies(asset: Asset): Array<Dependency>;
  /** Get the asset that created the dependency. */
  getAssetWithDependency(dep: Dependency): ?Asset;
  /** Returns whether the given bundle group is an entry. */
  isEntryBundleGroup(bundleGroup: BundleGroup): boolean;
  /**
   * Returns undefined if the specified dependency was excluded or wasn't async \
   * and otherwise the BundleGroup or Asset that the dependency resolves to.
   */
  resolveAsyncDependency(
    dependency: Dependency,
    bundle: ?Bundle,
  ): ?(
    | {|type: 'bundle_group', value: BundleGroup|}
    | {|type: 'asset', value: Asset|}
  );
  /** Returns whether a dependency was excluded because it had no used symbols. */
  isDependencySkipped(dependency: Dependency): boolean;
  /**
   * Returns the asset that the dependency resolved to.
   * If a bundle is given, assets in that bundle are preferred.
   * Returns null if the dependency was excluded.
   */
  getResolvedAsset(dependency: Dependency, bundle: ?Bundle): ?Asset;
  /** Returns the bundle that a dependency in a given bundle references, if any. */
  getReferencedBundle(dependency: Dependency, bundle: Bundle): ?TBundle;
  /** Returns a list of bundles that contain the given asset. */
  getBundlesWithAsset(Asset): Array<TBundle>;
  /** Returns a list of bundles that contain the given dependency. */
  getBundlesWithDependency(Dependency): Array<TBundle>;
  /**
   * Returns whether the given asset is reachable in a sibling, or all possible
   * ancestries of the given bundle. This indicates that the asset may be excluded
   * from the given bundle.
   */
  isAssetReachableFromBundle(asset: Asset, bundle: Bundle): boolean;
  /** Returns whether an asset is referenced outside the given bundle. */
  isAssetReferenced(bundle: Bundle, asset: Asset): boolean;
  /**
   * Resolves the export `symbol` of `asset` to the source,
   * stopping at the first asset after leaving `bundle`.
   * `symbol === null`: bailout (== caller should do `asset.exports[exportsSymbol]`)
   * `symbol === undefined`: symbol not found
   * `symbol === false`: skipped
   *
   * <code>asset</code> exports <code>symbol</code>, try to find the asset where the \
   * corresponding variable lives (resolves re-exports). Stop resolving transitively once \
   * <code>boundary</code> was left (<code>bundle.hasAsset(asset) === false</code>), then <code>result.symbol</code> is undefined.
   */
  getSymbolResolution(
    asset: Asset,
    symbol: Symbol,
    boundary: ?Bundle,
  ): SymbolResolution;
  /** Returns a list of symbols that are exported by the asset, including re-exports. */
  getExportedSymbols(
    asset: Asset,
    boundary: ?Bundle,
  ): Array<ExportSymbolResolution>;
  /**
   * Returns a list of symbols from an asset or dependency that are referenced by a dependent asset.
   *
   * Returns null if symbol propagation didn't run (so the result is unknown).
   */
  getUsedSymbols(Asset | Dependency): ?$ReadOnlySet<Symbol>;
  /** Returns the common root directory for the entry assets of a target. */
  getEntryRoot(target: Target): FilePath;
}

/**
 * @section bundler
 */
export type BundleResult = {|
  +contents: Blob,
  +ast?: AST,
  +map?: ?SourceMap,
  +type?: string,
|};

export type GlobInvalidation = {|
  glob: Glob,
|};

export type FileInvalidation = {|
  filePath: FilePath,
|};

export type FileAboveInvalidation = {|
  fileName: string,
  aboveFilePath: FilePath,
|};

export type FileCreateInvalidation =
  | FileInvalidation
  | GlobInvalidation
  | FileAboveInvalidation;

/**
 * @section resolver
 */
export type ResolveResult = {|
  /** An absolute path to the resolved file. */
  +filePath?: FilePath,
  /** An optional named pipeline to use to compile the resolved file. */
  +pipeline?: ?string,
  /** Query parameters to be used by transformers when compiling the resolved file. */
  +query?: URLSearchParams,
  /** Whether the resolved file should be excluded from the build. */
  +isExcluded?: boolean,
  /** Overrides the priority set on the dependency. */
  +priority?: DependencyPriority,
  /** Corresponds to BaseAsset's <code>sideEffects</code>. */
  +sideEffects?: boolean,
  /** The code of the resolved asset. If provided, this is used rather than reading the file from disk. */
  +code?: string,
  /** Whether this dependency can be deferred by Parcel itself (true by default). */
  +canDefer?: boolean,
  /** A resolver might return diagnostics to also run subsequent resolvers while still providing a reason why it failed. */
  +diagnostics?: Diagnostic | Array<Diagnostic>,
  /** Is spread (shallowly merged) onto the request's dependency.meta */
  +meta?: JSONObject,
  /** A list of file paths or patterns that should invalidate the resolution if created. */
  +invalidateOnFileCreate?: Array<FileCreateInvalidation>,
  /** A list of files that should invalidate the resolution if modified or deleted. */
  +invalidateOnFileChange?: Array<FilePath>,
  /** Invalidates the resolution when the given environment variable changes.*/
  +invalidateOnEnvChange?: Array<string>,
|};

/**
 * Turns an asset graph into a BundleGraph.
 *
 * bundle and optimize run in series and are functionally identitical.
 * @section bundler
 */
export type Bundler<ConfigType> = {|
  loadConfig?: ({|
    config: Config,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Promise<ConfigType> | ConfigType,
  bundle({|
    bundleGraph: MutableBundleGraph,
    config: ConfigType,
    options: PluginOptions,
    logger: PluginLogger,
  |}): Async<void>,
  optimize({|
    bundleGraph: MutableBundleGraph,
    config: ConfigType,
    options: PluginOptions,
    logger: PluginLogger,
  |}): Async<void>,
|};

/**
 * @section namer
 */
export type Namer<ConfigType> = {|
  loadConfig?: ({|
    config: Config,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Promise<ConfigType> | ConfigType,
  /** Return a filename/-path for <code>bundle</code> or nullish to leave it to the next namer plugin. */
  name({|
    bundle: Bundle,
    bundleGraph: BundleGraph<Bundle>,
    config: ConfigType,
    options: PluginOptions,
    logger: PluginLogger,
  |}): Async<?FilePath>,
|};

/**
 * A "synthetic" asset that will be inserted into the bundle graph.
 * @section runtime
 */
export type RuntimeAsset = {|
  +filePath: FilePath,
  +code: string,
  +dependency?: Dependency,
  +isEntry?: boolean,
  +env?: EnvironmentOptions,
|};

/**
 * @section runtime
 */
export type Runtime<ConfigType> = {|
  loadConfig?: ({|
    config: Config,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Promise<ConfigType> | ConfigType,
  apply({|
    bundle: NamedBundle,
    bundleGraph: BundleGraph<NamedBundle>,
    config: ConfigType,
    options: PluginOptions,
    logger: PluginLogger,
  |}): Async<void | RuntimeAsset | Array<RuntimeAsset>>,
|};

/**
 * @section packager
 */
export type Packager<ConfigType, BundleConfigType> = {|
  loadConfig?: ({|
    config: Config,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Async<ConfigType>,
  loadBundleConfig?: ({|
    bundle: NamedBundle,
    bundleGraph: BundleGraph<NamedBundle>,
    config: Config,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Async<BundleConfigType>,
  package({|
    bundle: NamedBundle,
    bundleGraph: BundleGraph<NamedBundle>,
    options: PluginOptions,
    logger: PluginLogger,
    config: ConfigType,
    bundleConfig: BundleConfigType,
    getInlineBundleContents: (
      Bundle,
      BundleGraph<NamedBundle>,
    ) => Async<{|contents: Blob|}>,
    getSourceMapReference: (map: ?SourceMap) => Async<?string>,
  |}): Async<BundleResult>,
|};

/**
 * @section optimizer
 */
export type Optimizer<ConfigType, BundleConfigType> = {|
  loadConfig?: ({|
    config: Config,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Async<ConfigType>,
  loadBundleConfig?: ({|
    bundle: NamedBundle,
    bundleGraph: BundleGraph<NamedBundle>,
    config: Config,
    options: PluginOptions,
    logger: PluginLogger,
  |}) => Async<BundleConfigType>,
  optimize({|
    bundle: NamedBundle,
    bundleGraph: BundleGraph<NamedBundle>,
    contents: Blob,
    map: ?SourceMap,
    options: PluginOptions,
    logger: PluginLogger,
    config: ConfigType,
    bundleConfig: BundleConfigType,
    getSourceMapReference: (map: ?SourceMap) => Async<?string>,
  |}): Async<BundleResult>,
|};

/**
 * @section compressor
 */
export type Compressor = {|
  compress({|
    stream: Readable,
    options: PluginOptions,
    logger: PluginLogger,
  |}): Async<?{|
    stream: Readable,
    type?: string,
  |}>,
|};

/**
 * @section resolver
 */
export type Resolver = {|
  resolve({|
    dependency: Dependency,
    options: PluginOptions,
    logger: PluginLogger,
    specifier: FilePath,
    pipeline: ?string,
  |}): Async<?ResolveResult>,
|};

/**
 * @section reporter
 */
export type ProgressLogEvent = {|
  +type: 'log',
  +level: 'progress',
  +phase?: string,
  +message: string,
|};

/**
 * A log event with a rich diagnostic
 * @section reporter
 */
export type DiagnosticLogEvent = {|
  +type: 'log',
  +level: 'error' | 'warn' | 'info' | 'verbose',
  +diagnostics: Array<Diagnostic>,
|};

/**
 * @section reporter
 */
export type TextLogEvent = {|
  +type: 'log',
  +level: 'success',
  +message: string,
|};

/**
 * @section reporter
 */
export type LogEvent = ProgressLogEvent | DiagnosticLogEvent | TextLogEvent;

/**
 * The build just started.
 * @section reporter
 */
export type BuildStartEvent = {|
  +type: 'buildStart',
|};

/**
 * The build just started in watch mode.
 * @section reporter
 */
export type WatchStartEvent = {|
  +type: 'watchStart',
|};

/**
 * The build just ended in watch mode.
 * @section reporter
 */
export type WatchEndEvent = {|
  +type: 'watchEnd',
|};

/**
 * A new Dependency is being resolved.
 * @section reporter
 */
export type ResolvingProgressEvent = {|
  +type: 'buildProgress',
  +phase: 'resolving',
  +dependency: Dependency,
|};

/**
 * A new Asset is being transformed.
 * @section reporter
 */
export type TransformingProgressEvent = {|
  +type: 'buildProgress',
  +phase: 'transforming',
  +filePath: FilePath,
|};

/**
 * The BundleGraph is generated.
 * @section reporter
 */
export type BundlingProgressEvent = {|
  +type: 'buildProgress',
  +phase: 'bundling',
|};

export type BundledProgressEvent = {|
  +type: 'buildProgress',
  +phase: 'bundled',
  +bundleGraph: BundleGraph<NamedBundle>,
  +changedAssets: Map<string, Asset>,
|};

/**
 * A new Bundle is being packaged.
 * @section reporter
 */
export type PackagingProgressEvent = {|
  +type: 'buildProgress',
  +phase: 'packaging',
  +bundle: NamedBundle,
|};

/**
 * A new Bundle is being optimized.
 * @section reporter
 */
export type OptimizingProgressEvent = {|
  +type: 'buildProgress',
  +phase: 'optimizing',
  +bundle: NamedBundle,
|};

/**
 * @section reporter
 */
export type BuildProgressEvent =
  | ResolvingProgressEvent
  | TransformingProgressEvent
  | BundlingProgressEvent
  | BundledProgressEvent
  | PackagingProgressEvent
  | OptimizingProgressEvent;

/**
 * The build was successful.
 * @section reporter
 */
export type BuildSuccessEvent = {|
  +type: 'buildSuccess',
  +bundleGraph: BundleGraph<PackagedBundle>,
  +buildTime: number,
  +changedAssets: Map<string, Asset>,
  +requestBundle: (bundle: NamedBundle) => Promise<BuildSuccessEvent>,
|};

/**
 * The build failed.
 * @section reporter
 */
export type BuildFailureEvent = {|
  +type: 'buildFailure',
  +diagnostics: Array<Diagnostic>,
|};

/**
 * @section reporter
 */
export type BuildEvent = BuildFailureEvent | BuildSuccessEvent;

/**
 * A new file is being validated.
 * @section reporter
 */
export type ValidationEvent = {|
  +type: 'validation',
  +filePath: FilePath,
|};

/**
 * @section reporter
 */
export type ReporterEvent =
  | LogEvent
  | BuildStartEvent
  | BuildProgressEvent
  | BuildSuccessEvent
  | BuildFailureEvent
  | WatchStartEvent
  | WatchEndEvent
  | ValidationEvent;

/**
 * @section reporter
 */
export type Reporter = {|
  report({|
    event: ReporterEvent,
    options: PluginOptions,
    logger: PluginLogger,
  |}): Async<void>,
|};

export interface ErrorWithCode extends Error {
  +code?: string;
}

export interface IDisposable {
  dispose(): mixed;
}

export type AsyncSubscription = {|
  unsubscribe(): Promise<mixed>,
|};
