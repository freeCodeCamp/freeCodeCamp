export type ESModuleOptions = {
  /**
   * Files to explicitly exclude from flagged as ES Modules.
   */
  exclude?: string | RegExp | (string | RegExp)[] | undefined;
  /**
   * Files to explicitly include for flagged as ES Modules.
   */
  include?: string | RegExp | (string | RegExp)[] | undefined;
};
export type ReactRefreshLoaderOptions = {
  /**
   * Enables usage of ES6 `const` and `let` in generated runtime code.
   */
  const?: boolean | undefined;
  /**
   * Enables strict ES Modules compatible runtime.
   */
  esModule?: boolean | ESModuleOptions | undefined;
};
export type NormalizedLoaderOptions = import('type-fest').SetRequired<
  ReactRefreshLoaderOptions,
  'const'
>;
