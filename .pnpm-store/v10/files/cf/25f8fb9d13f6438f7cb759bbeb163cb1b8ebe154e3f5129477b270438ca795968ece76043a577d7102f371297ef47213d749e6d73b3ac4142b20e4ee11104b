/// <reference types="node" />
import * as nativeFs from "fs";
import picomatch from "picomatch";

//#region src/api/aborter.d.ts
/**
 * AbortController is not supported on Node 14 so we use this until we can drop
 * support for Node 14.
 */
declare class Aborter {
  aborted: boolean;
  abort(): void;
}
//#endregion
//#region src/api/queue.d.ts
type OnQueueEmptyCallback = (error: Error | null, output: WalkerState) => void;
/**
 * This is a custom stateless queue to track concurrent async fs calls.
 * It increments a counter whenever a call is queued and decrements it
 * as soon as it completes. When the counter hits 0, it calls onQueueEmpty.
 */
declare class Queue {
  private onQueueEmpty?;
  count: number;
  constructor(onQueueEmpty?: OnQueueEmptyCallback | undefined);
  enqueue(): number;
  dequeue(error: Error | null, output: WalkerState): void;
}
//#endregion
//#region src/types.d.ts
type Counts = {
  files: number;
  directories: number;
  /**
   * @deprecated use `directories` instead. Will be removed in v7.0.
   */
  dirs: number;
};
type Group = {
  directory: string;
  files: string[];
  /**
   * @deprecated use `directory` instead. Will be removed in v7.0.
   */
  dir: string;
};
type GroupOutput = Group[];
type OnlyCountsOutput = Counts;
type PathsOutput = string[];
type Output = OnlyCountsOutput | PathsOutput | GroupOutput;
type FSLike = {
  readdir: typeof nativeFs.readdir;
  readdirSync: typeof nativeFs.readdirSync;
  realpath: typeof nativeFs.realpath;
  realpathSync: typeof nativeFs.realpathSync;
  stat: typeof nativeFs.stat;
  statSync: typeof nativeFs.statSync;
};
type WalkerState = {
  root: string;
  paths: string[];
  groups: Group[];
  counts: Counts;
  options: Options;
  queue: Queue;
  controller: Aborter;
  fs: FSLike;
  symlinks: Map<string, string>;
  visited: string[];
};
type ResultCallback<TOutput extends Output> = (error: Error | null, output: TOutput) => void;
type FilterPredicate = (path: string, isDirectory: boolean) => boolean;
type ExcludePredicate = (dirName: string, dirPath: string) => boolean;
type PathSeparator = "/" | "\\";
type Options<TGlobFunction = unknown> = {
  includeBasePath?: boolean;
  includeDirs?: boolean;
  normalizePath?: boolean;
  maxDepth: number;
  maxFiles?: number;
  resolvePaths?: boolean;
  suppressErrors: boolean;
  group?: boolean;
  onlyCounts?: boolean;
  filters: FilterPredicate[];
  resolveSymlinks?: boolean;
  useRealPaths?: boolean;
  excludeFiles?: boolean;
  excludeSymlinks?: boolean;
  exclude?: ExcludePredicate;
  relativePaths?: boolean;
  pathSeparator: PathSeparator;
  signal?: AbortSignal;
  globFunction?: TGlobFunction;
  fs?: FSLike;
};
type GlobMatcher = (test: string) => boolean;
type GlobFunction = (glob: string | string[], ...params: unknown[]) => GlobMatcher;
type GlobParams<T> = T extends ((globs: string | string[], ...params: infer TParams extends unknown[]) => GlobMatcher) ? TParams : [];
//#endregion
//#region src/builder/api-builder.d.ts
declare class APIBuilder<TReturnType extends Output> {
  private readonly root;
  private readonly options;
  constructor(root: string, options: Options);
  withPromise(): Promise<TReturnType>;
  withCallback(cb: ResultCallback<TReturnType>): void;
  sync(): TReturnType;
}
//#endregion
//#region src/builder/index.d.ts
declare class Builder<TReturnType extends Output = PathsOutput, TGlobFunction = typeof picomatch> {
  private readonly globCache;
  private options;
  private globFunction?;
  constructor(options?: Partial<Options<TGlobFunction>>);
  group(): Builder<GroupOutput, TGlobFunction>;
  withPathSeparator(separator: "/" | "\\"): this;
  withBasePath(): this;
  withRelativePaths(): this;
  withDirs(): this;
  withMaxDepth(depth: number): this;
  withMaxFiles(limit: number): this;
  withFullPaths(): this;
  withErrors(): this;
  withSymlinks({
    resolvePaths
  }?: {
    resolvePaths?: boolean | undefined;
  }): this;
  withAbortSignal(signal: AbortSignal): this;
  normalize(): this;
  filter(predicate: FilterPredicate): this;
  onlyDirs(): this;
  exclude(predicate: ExcludePredicate): this;
  onlyCounts(): Builder<OnlyCountsOutput, TGlobFunction>;
  crawl(root?: string): APIBuilder<TReturnType>;
  withGlobFunction<TFunc>(fn: TFunc): Builder<TReturnType, TFunc>;
  /**
   * @deprecated Pass options using the constructor instead:
   * ```ts
   * new fdir(options).crawl("/path/to/root");
   * ```
   * This method will be removed in v7.0
   */
  crawlWithOptions(root: string, options: Partial<Options<TGlobFunction>>): APIBuilder<TReturnType>;
  glob(...patterns: string[]): Builder<TReturnType, TGlobFunction>;
  globWithOptions(patterns: string[]): Builder<TReturnType, TGlobFunction>;
  globWithOptions(patterns: string[], ...options: GlobParams<TGlobFunction>): Builder<TReturnType, TGlobFunction>;
}
//#endregion
//#region src/index.d.ts
type Fdir = typeof Builder;
//#endregion
export { Counts, ExcludePredicate, FSLike, Fdir, FilterPredicate, GlobFunction, GlobMatcher, GlobParams, Group, GroupOutput, OnlyCountsOutput, Options, Output, PathSeparator, PathsOutput, ResultCallback, WalkerState, Builder as fdir };