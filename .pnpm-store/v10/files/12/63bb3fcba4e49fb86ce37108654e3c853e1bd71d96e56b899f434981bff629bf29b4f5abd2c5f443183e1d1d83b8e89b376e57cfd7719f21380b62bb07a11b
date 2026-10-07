export interface ImportGlobOptions<
  Eager extends boolean,
  AsType extends string,
> {
  /**
   * Import type for the import url.
   *
   * @deprecated Use `query` instead, e.g. `as: 'url'` -> `query: '?url', import: 'default'`
   */
  as?: AsType
  /**
   * Import as static or dynamic
   *
   * @default false
   */
  eager?: Eager
  /**
   * Import only the specific named export. Set to `default` to import the default export.
   */
  import?: string
  /**
   * Custom queries
   */
  query?: string | Record<string, string | number | boolean>
  /**
   * Search files also inside `node_modules/` and hidden directories (e.g. `.git/`). This might have impact on performance.
   *
   * @default false
   */
  exhaustive?: boolean
  /**
   * Base path to resolve relative paths.
   */
  base?: string
}

export type GeneralImportGlobOptions = ImportGlobOptions<boolean, string>

/**
 * Declare Worker in case DOM is not added to the tsconfig lib causing
 * Worker interface is not defined. For developers with DOM lib added,
 * the Worker interface will be merged correctly.
 */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Worker {}
}

export interface KnownAsTypeMap {
  raw: string
  url: string
  worker: Worker
}

export interface ImportGlobFunction {
  /**
   * Import a list of files with a glob pattern.
   *
   * Overload 1: No generic provided, infer the type from `eager` and `as`
   */
  <
    Eager extends boolean,
    As extends string,
    T = As extends keyof KnownAsTypeMap ? KnownAsTypeMap[As] : unknown,
  >(
    glob: string | string[],
    options?: ImportGlobOptions<Eager, As>,
  ): (Eager extends true ? true : false) extends true
    ? Record<string, T>
    : Record<string, () => Promise<T>>
  /**
   * Import a list of files with a glob pattern.
   *
   * Overload 2: Module generic provided, infer the type from `eager: false`
   */
  <M>(
    glob: string | string[],
    options?: ImportGlobOptions<false, string>,
  ): Record<string, () => Promise<M>>
  /**
   * Import a list of files with a glob pattern.
   *
   * Overload 3: Module generic provided, infer the type from `eager: true`
   */
  <M>(
    glob: string | string[],
    options: ImportGlobOptions<true, string>,
  ): Record<string, M>
}
