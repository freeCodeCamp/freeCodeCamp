export type Task<T> = () => Promise<T>;
export type FunctionReturning<T> = () => T;
export type ExtractCommentsOptions =
  import("./index.js").ExtractCommentsOptions;
export type ExtractCommentsFunction =
  import("./index.js").ExtractCommentsFunction;
export type ExtractCommentsCondition =
  import("./index.js").ExtractCommentsCondition;
export type Input = import("./index.js").Input;
export type MinimizedResult = import("./index.js").MinimizedResult;
export type CustomOptions = import("./index.js").CustomOptions;
export type RawSourceMap = import("./index.js").RawSourceMap;
export type PredefinedOptions<T> = import("./index.js").PredefinedOptions<T>;
export type ExtractedComments = string[];
/**
 * @param {Input} input input
 * @param {RawSourceMap=} sourceMap source map
 * @param {CustomOptions=} minimizerOptions options
 * @returns {Promise<MinimizedResult>} minimized result
 */
export function esbuildMinify(
  input: Input,
  sourceMap?: RawSourceMap | undefined,
  minimizerOptions?: CustomOptions | undefined,
): Promise<MinimizedResult>;
export namespace esbuildMinify {
  /**
   * @returns {string | undefined} the minimizer version
   */
  function getMinimizerVersion(): string | undefined;
  /**
   * @returns {boolean | undefined} true if worker thread is supported, false otherwise
   */
  function supportsWorkerThreads(): boolean | undefined;
}
/**
 * @param {Input} input input
 * @param {RawSourceMap=} sourceMap source map
 * @param {CustomOptions=} minimizerOptions options
 * @returns {Promise<MinimizedResult>} minimized result
 */
export function jsonMinify(
  input: Input,
  sourceMap?: RawSourceMap | undefined,
  minimizerOptions?: CustomOptions | undefined,
): Promise<MinimizedResult>;
export namespace jsonMinify {
  function getMinimizerVersion(): string;
  function supportsWorker(): boolean;
  function supportsWorkerThreads(): boolean;
}
/**
 * @template T
 * @typedef {() => T} FunctionReturning
 */
/**
 * @template T
 * @param {FunctionReturning<T>} fn memorized function
 * @returns {FunctionReturning<T>} new function
 */
export function memoize<T>(fn: FunctionReturning<T>): FunctionReturning<T>;
/**
 * @param {Input} input input
 * @param {RawSourceMap=} sourceMap source map
 * @param {CustomOptions=} minimizerOptions options
 * @returns {Promise<MinimizedResult>} minimized result
 */
export function swcMinify(
  input: Input,
  sourceMap?: RawSourceMap | undefined,
  minimizerOptions?: CustomOptions | undefined,
): Promise<MinimizedResult>;
export namespace swcMinify {
  /**
   * @returns {string | undefined} the minimizer version
   */
  function getMinimizerVersion(): string | undefined;
  /**
   * @returns {boolean | undefined} true if worker thread is supported, false otherwise
   */
  function supportsWorkerThreads(): boolean | undefined;
}
/**
 * @param {Input} input input
 * @param {RawSourceMap=} sourceMap source map
 * @param {CustomOptions=} minimizerOptions options
 * @param {ExtractCommentsOptions=} extractComments extract comments option
 * @returns {Promise<MinimizedResult>} minimized result
 */
export function terserMinify(
  input: Input,
  sourceMap?: RawSourceMap | undefined,
  minimizerOptions?: CustomOptions | undefined,
  extractComments?: ExtractCommentsOptions | undefined,
): Promise<MinimizedResult>;
export namespace terserMinify {
  /**
   * @returns {string | undefined} the minimizer version
   */
  function getMinimizerVersion(): string | undefined;
  /**
   * @returns {boolean | undefined} true if worker thread is supported, false otherwise
   */
  function supportsWorkerThreads(): boolean | undefined;
}
/**
 * @template T
 * @typedef {() => Promise<T>} Task
 */
/**
 * Run tasks with limited concurrency.
 * @template T
 * @param {number} limit Limit of tasks that run at once.
 * @param {Task<T>[]} tasks List of tasks to run.
 * @returns {Promise<T[]>} A promise that fulfills to an array of the results
 */
export function throttleAll<T>(limit: number, tasks: Task<T>[]): Promise<T[]>;
/**
 * @param {Input} input input
 * @param {RawSourceMap=} sourceMap source map
 * @param {CustomOptions=} minimizerOptions options
 * @param {ExtractCommentsOptions=} extractComments extract comments option
 * @returns {Promise<MinimizedResult>} minimized result
 */
export function uglifyJsMinify(
  input: Input,
  sourceMap?: RawSourceMap | undefined,
  minimizerOptions?: CustomOptions | undefined,
  extractComments?: ExtractCommentsOptions | undefined,
): Promise<MinimizedResult>;
export namespace uglifyJsMinify {
  /**
   * @returns {string | undefined} the minimizer version
   */
  function getMinimizerVersion(): string | undefined;
  /**
   * @returns {boolean | undefined} true if worker thread is supported, false otherwise
   */
  function supportsWorkerThreads(): boolean | undefined;
}
