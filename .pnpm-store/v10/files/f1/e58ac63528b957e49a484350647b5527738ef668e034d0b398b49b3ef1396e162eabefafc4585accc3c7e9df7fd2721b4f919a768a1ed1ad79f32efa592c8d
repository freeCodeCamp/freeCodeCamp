interface ImportGlobOptions<Eager extends boolean> {
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

type GeneralImportGlobOptions = ImportGlobOptions<boolean>

interface KnownAsTypeMap {
  raw: string
  url: string
}

interface ImportGlobFunction {
  /**
   * Import a list of files with a glob pattern.
   *
   * Overload 1: Module generic provided, infer the type from `eager: false`
   */
  <M>(
    glob: string | string[],
    options?: ImportGlobOptions<false>,
  ): Record<string, () => Promise<M>>
  /**
   * Import a list of files with a glob pattern.
   *
   * Overload 2: Module generic provided, infer the type from `eager: true`
   */
  <M>(
    glob: string | string[],
    options: ImportGlobOptions<true>,
  ): Record<string, M>
}

interface ImportMeta {
  glob: ImportGlobFunction
}

declare module '*?inline' {
  const src: string
  export default src
}
