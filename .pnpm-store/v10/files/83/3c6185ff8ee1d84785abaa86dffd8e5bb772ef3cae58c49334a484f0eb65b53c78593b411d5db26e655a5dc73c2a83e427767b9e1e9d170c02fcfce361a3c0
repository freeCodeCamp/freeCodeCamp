// @flow strict-local

import type {ContentKey} from '@parcel/graph';
import type {
  ASTGenerator,
  BuildMode,
  Engines,
  EnvironmentContext,
  EnvMap,
  FilePath,
  Glob,
  LogLevel,
  Meta,
  DependencySpecifier,
  PackageName,
  ReporterEvent,
  SemverRange,
  ServerOptions,
  SourceType,
  Stats,
  Symbol,
  TargetSourceMapOptions,
  ConfigResult,
  OutputFormat,
  TargetDescriptor,
  HMROptions,
  DetailedReportOptions,
} from '@parcel/types';
import type {SharedReference} from '@parcel/workers';
import type {FileSystem} from '@parcel/fs';
import type {Cache} from '@parcel/cache';
import type {PackageManager} from '@parcel/package-manager';
import type {ProjectPath} from './projectPath';

export type ParcelPluginNode = {|
  packageName: PackageName,
  resolveFrom: ProjectPath,
  keyPath?: string,
|};

export type PureParcelConfigPipeline = $ReadOnlyArray<ParcelPluginNode>;
export type ExtendableParcelConfigPipeline = $ReadOnlyArray<
  ParcelPluginNode | '...',
>;

export type ProcessedParcelConfig = {|
  resolvers?: PureParcelConfigPipeline,
  transformers?: {[Glob]: ExtendableParcelConfigPipeline, ...},
  bundler: ?ParcelPluginNode,
  namers?: PureParcelConfigPipeline,
  runtimes?: PureParcelConfigPipeline,
  packagers?: {[Glob]: ParcelPluginNode, ...},
  optimizers?: {[Glob]: ExtendableParcelConfigPipeline, ...},
  compressors?: {[Glob]: ExtendableParcelConfigPipeline, ...},
  reporters?: PureParcelConfigPipeline,
  validators?: {[Glob]: ExtendableParcelConfigPipeline, ...},
  filePath: ProjectPath,
  resolveFrom?: ProjectPath,
|};

export type Environment = {|
  id: string,
  context: EnvironmentContext,
  engines: Engines,
  includeNodeModules:
    | boolean
    | Array<PackageName>
    | {[PackageName]: boolean, ...},
  outputFormat: OutputFormat,
  sourceType: SourceType,
  isLibrary: boolean,
  shouldOptimize: boolean,
  shouldScopeHoist: boolean,
  sourceMap: ?TargetSourceMapOptions,
  loc: ?InternalSourceLocation,
|};

export type InternalSourceLocation = {|
  +filePath: ProjectPath,
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

export type Target = {|
  distEntry?: ?FilePath,
  distDir: ProjectPath,
  env: Environment,
  name: string,
  publicUrl: string,
  loc?: ?InternalSourceLocation,
  pipeline?: string,
  source?: FilePath | Array<FilePath>,
|};

export const SpecifierType = {
  esm: 0,
  commonjs: 1,
  url: 2,
  custom: 3,
};

export const Priority = {
  sync: 0,
  parallel: 1,
  lazy: 2,
};

export type Dependency = {|
  id: string,
  specifier: DependencySpecifier,
  specifierType: $Values<typeof SpecifierType>,
  priority: $Values<typeof Priority>,
  needsStableName: boolean,
  bundleBehavior: ?$Values<typeof BundleBehavior>,
  isEntry: boolean,
  isOptional: boolean,
  loc: ?InternalSourceLocation,
  env: Environment,
  meta: Meta,
  resolverMeta?: ?Meta,
  target: ?Target,
  sourceAssetId: ?string,
  sourcePath: ?ProjectPath,
  sourceAssetType?: ?string,
  resolveFrom: ?ProjectPath,
  range: ?SemverRange,
  symbols: ?Map<
    Symbol,
    {|
      local: Symbol,
      loc: ?InternalSourceLocation,
      isWeak: boolean,
      meta?: ?Meta,
    |},
  >,
  pipeline?: ?string,
|};

export const BundleBehavior = {
  inline: 0,
  isolated: 1,
};

export const BundleBehaviorNames: Array<$Keys<typeof BundleBehavior>> =
  Object.keys(BundleBehavior);

export type Asset = {|
  id: ContentKey,
  committed: boolean,
  hash: ?string,
  filePath: ProjectPath,
  query: ?string,
  type: string,
  dependencies: Map<string, Dependency>,
  bundleBehavior: ?$Values<typeof BundleBehavior>,
  isBundleSplittable: boolean,
  isSource: boolean,
  env: Environment,
  meta: Meta,
  stats: Stats,
  contentKey: ?string,
  mapKey: ?string,
  outputHash: ?string,
  pipeline: ?string,
  astKey: ?string,
  astGenerator: ?ASTGenerator,
  symbols: ?Map<
    Symbol,
    {|local: Symbol, loc: ?InternalSourceLocation, meta?: ?Meta|},
  >,
  sideEffects: boolean,
  uniqueKey: ?string,
  configPath?: ProjectPath,
  plugin: ?PackageName,
  configKeyPath?: string,
  isLargeBlob?: boolean,
|};

export type InternalGlob = ProjectPath;

export type InternalFile = {|
  +filePath: ProjectPath,
  +hash?: string,
|};

export type FileInvalidation = {|
  type: 'file',
  filePath: ProjectPath,
|};

export type EnvInvalidation = {|
  type: 'env',
  key: string,
|};

export type OptionInvalidation = {|
  type: 'option',
  key: string,
|};

export type RequestInvalidation =
  | FileInvalidation
  | EnvInvalidation
  | OptionInvalidation;

export type InternalFileInvalidation = {|
  filePath: ProjectPath,
|};

export type InternalGlobInvalidation = {|
  glob: InternalGlob,
|};

export type InternalFileAboveInvalidation = {|
  fileName: string,
  aboveFilePath: ProjectPath,
|};

export type InternalFileCreateInvalidation =
  | InternalFileInvalidation
  | InternalGlobInvalidation
  | InternalFileAboveInvalidation;

export type DevDepRequest = {|
  specifier: DependencySpecifier,
  resolveFrom: ProjectPath,
  hash: string,
  invalidateOnFileCreate?: Array<InternalFileCreateInvalidation>,
  invalidateOnFileChange?: Set<ProjectPath>,
  additionalInvalidations?: Array<{|
    specifier: DependencySpecifier,
    resolveFrom: ProjectPath,
    range?: ?SemverRange,
  |}>,
|};

export type ParcelOptions = {|
  entries: Array<ProjectPath>,
  config?: DependencySpecifier,
  defaultConfig?: DependencySpecifier,
  env: EnvMap,
  targets: ?(Array<string> | {+[string]: TargetDescriptor, ...}),

  shouldDisableCache: boolean,
  cacheDir: FilePath,
  mode: BuildMode,
  hmrOptions: ?HMROptions,
  shouldContentHash: boolean,
  serveOptions: ServerOptions | false,
  shouldBuildLazily: boolean,
  shouldBundleIncrementally: boolean,
  shouldAutoInstall: boolean,
  logLevel: LogLevel,
  projectRoot: FilePath,
  shouldProfile: boolean,
  shouldPatchConsole: boolean,
  detailedReport?: ?DetailedReportOptions,

  inputFS: FileSystem,
  outputFS: FileSystem,
  cache: Cache,
  packageManager: PackageManager,
  additionalReporters: Array<{|
    packageName: DependencySpecifier,
    resolveFrom: ProjectPath,
  |}>,

  instanceId: string,

  +defaultTargetOptions: {|
    +shouldOptimize: boolean,
    +shouldScopeHoist?: boolean,
    +sourceMaps: boolean,
    +publicUrl: string,
    +distDir?: ProjectPath,
    +engines?: Engines,
    +outputFormat?: OutputFormat,
    +isLibrary?: boolean,
  |},
|};

export type AssetNode = {|
  id: ContentKey,
  +type: 'asset',
  value: Asset,
  usedSymbols: Set<Symbol>,
  hasDeferred?: boolean,
  usedSymbolsDownDirty: boolean,
  usedSymbolsUpDirty: boolean,
  requested?: boolean,
|};

export type DependencyNode = {|
  id: ContentKey,
  type: 'dependency',
  value: Dependency,
  complete?: boolean,
  correspondingRequest?: string,
  deferred: boolean,
  /** dependency was deferred (= no used symbols (in immediate parents) & side-effect free) */
  hasDeferred?: boolean,
  usedSymbolsDown: Set<Symbol>,
  /**
   * a requested symbol -> either
   *  - if ambiguous (e.g. dependency to asset group with both CSS modules and JS asset): undefined
   *  - if external: null
   *  - the asset it resolved to, and the potentially renamed export name
   */
  usedSymbolsUp: Map<
    Symbol,
    {|asset: ContentKey, symbol: ?Symbol|} | void | null,
  >,
  /** for the "down" pass, the dependency resolution asset needs to be updated */
  usedSymbolsDownDirty: boolean,
  /** for the "up" pass, the parent asset needs to be updated */
  usedSymbolsUpDirtyUp: boolean,
  /** for the "up" pass, the dependency resolution asset needs to be updated */
  usedSymbolsUpDirtyDown: boolean,
  /** dependency was excluded (= no used symbols (globally) & side-effect free) */
  excluded: boolean,
|};

export type RootNode = {|id: ContentKey, +type: 'root', value: string | null|};

export type AssetRequestInput = {|
  name?: string, // AssetGraph name, needed so that different graphs can isolated requests since the results are not stored
  filePath: ProjectPath,
  env: Environment,
  isSource?: boolean,
  canDefer?: boolean,
  sideEffects?: boolean,
  code?: string,
  pipeline?: ?string,
  optionsRef: SharedReference,
  isURL?: boolean,
  query?: ?string,
  isSingleChangeRebuild?: boolean,
|};

export type AssetRequestResult = Array<Asset>;
// Asset group nodes are essentially used as placeholders for the results of an asset request
export type AssetGroup = $Rest<
  AssetRequestInput,
  {|optionsRef: SharedReference|},
>;
export type AssetGroupNode = {|
  id: ContentKey,
  +type: 'asset_group',
  value: AssetGroup,
  correspondingRequest?: string,
  /** this node was deferred (= no used symbols (in immediate parents) & side-effect free) */
  deferred?: boolean,
  hasDeferred?: boolean,
  usedSymbolsDownDirty: boolean,
|};

export type TransformationRequest = {|
  ...AssetGroup,
  invalidations: Array<RequestInvalidation>,
  invalidateReason: number,
  devDeps: Map<PackageName, string>,
  invalidDevDeps: Array<{|
    specifier: DependencySpecifier,
    resolveFrom: ProjectPath,
  |}>,
|};

export type DepPathRequestNode = {|
  id: ContentKey,
  +type: 'dep_path_request',
  value: Dependency,
|};

export type AssetRequestNode = {|
  id: ContentKey,
  +type: 'asset_request',
  value: AssetRequestInput,
|};

export type EntrySpecifierNode = {|
  id: ContentKey,
  +type: 'entry_specifier',
  value: ProjectPath,
  correspondingRequest?: string,
|};

export type Entry = {|
  filePath: ProjectPath,
  packagePath: ProjectPath,
  target?: string,
  loc?: ?InternalSourceLocation,
|};

export type EntryFileNode = {|
  id: ContentKey,
  +type: 'entry_file',
  value: Entry,
  correspondingRequest?: string,
|};

export type AssetGraphNode =
  | AssetGroupNode
  | AssetNode
  | DependencyNode
  | EntrySpecifierNode
  | EntryFileNode
  | RootNode;

export type BundleGraphNode =
  | AssetNode
  | DependencyNode
  | EntrySpecifierNode
  | EntryFileNode
  | RootNode
  | BundleGroupNode
  | BundleNode;

export type InternalDevDepOptions = {|
  specifier: DependencySpecifier,
  resolveFrom: ProjectPath,
  range?: ?SemverRange,
  additionalInvalidations?: Array<{|
    specifier: DependencySpecifier,
    resolveFrom: ProjectPath,
    range?: ?SemverRange,
  |}>,
|};

export type Config = {|
  id: string,
  isSource: boolean,
  searchPath: ProjectPath,
  env: Environment,
  cacheKey: ?string,
  result: ConfigResult,
  invalidateOnFileChange: Set<ProjectPath>,
  invalidateOnFileCreate: Array<InternalFileCreateInvalidation>,
  invalidateOnEnvChange: Set<string>,
  invalidateOnOptionChange: Set<string>,
  devDeps: Array<InternalDevDepOptions>,
  invalidateOnStartup: boolean,
  invalidateOnBuild: boolean,
|};

export type EntryRequest = {|
  specifier: DependencySpecifier,
  result?: ProjectPath,
|};

export type EntryRequestNode = {|
  id: ContentKey,
  +type: 'entry_request',
  value: string,
|};

export type TargetRequestNode = {|
  id: ContentKey,
  +type: 'target_request',
  value: ProjectPath,
|};

export type CacheEntry = {|
  filePath: ProjectPath,
  env: Environment,
  hash: string,
  assets: Array<Asset>,
  // Initial assets, pre-post processing
  initialAssets: ?Array<Asset>,
|};

export type Bundle = {|
  id: ContentKey,
  publicId: ?string,
  hashReference: string,
  type: string,
  env: Environment,
  entryAssetIds: Array<ContentKey>,
  mainEntryId: ?ContentKey,
  needsStableName: ?boolean,
  bundleBehavior: ?$Values<typeof BundleBehavior>,
  isSplittable: ?boolean,
  isPlaceholder?: boolean,
  target: Target,
  name: ?string,
  displayName: ?string,
  pipeline: ?string,
|};

export type BundleNode = {|
  id: ContentKey,
  +type: 'bundle',
  value: Bundle,
|};

export type BundleGroup = {|
  target: Target,
  entryAssetId: string,
|};

export type BundleGroupNode = {|
  id: ContentKey,
  +type: 'bundle_group',
  value: BundleGroup,
|};

export type PackagedBundleInfo = {|
  filePath: ProjectPath,
  type: string,
  stats: Stats,
|};

export type TransformationOpts = {|
  request: AssetGroup,
  optionsRef: SharedReference,
  configCachePath: string,
|};

export type ValidationOpts = {|
  requests: AssetGroup[],
  optionsRef: SharedReference,
  configCachePath: string,
|};

export type ReportFn = (event: ReporterEvent) => void | Promise<void>;
