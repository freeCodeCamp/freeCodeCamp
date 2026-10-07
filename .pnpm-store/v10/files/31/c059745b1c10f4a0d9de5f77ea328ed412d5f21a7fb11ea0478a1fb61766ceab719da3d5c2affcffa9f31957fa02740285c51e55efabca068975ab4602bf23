import { QuansyncFn } from "quansync/macro";

//#region ../../node_modules/.pnpm/@antfu+utils@9.3.0/node_modules/@antfu/utils/dist/index.d.mts
/**
 * Promise, or maybe not
 */
type Awaitable<T> = T | PromiseLike<T>;
/**
 * Null or whatever
 */
//#endregion
//#region src/types.d.ts
type CustomParser<T> = (filepath: string) => Awaitable<T | undefined>;
interface CoreLoadConfigSource<T = any> {
  files: Array<string>;
  extensions?: string[];
  /**
   * Parser for loading config,
   */
  parser: CustomParser<T>;
  /**
   * Skip this source if error occurred on loading
   *
   * @default false
   */
  skipOnError?: boolean;
}
interface CoreSearchOptions {
  /**
   * Root directory
   *
   * @default process.cwd()
   */
  cwd?: string;
  /**
   * @default path.parse(cwd).root
   */
  stopAt?: string;
  multiple?: boolean;
}
interface CoreLoadConfigOptions<T = any> extends CoreSearchOptions {
  sources: Array<CoreLoadConfigSource<T>>;
}
interface CoreLoadConfigResult<T> {
  config: T;
  source: string;
}
//#endregion
//#region src/index.d.ts
declare function createConfigCoreLoader<T>(options: CoreLoadConfigOptions): {
  load: QuansyncFn<CoreLoadConfigResult<T>[], [force?: boolean | undefined]>;
  findConfigs: QuansyncFn<string[], []>;
};
//#endregion
export { CoreLoadConfigOptions, CoreLoadConfigResult, CoreLoadConfigSource, CoreSearchOptions, CustomParser, createConfigCoreLoader };