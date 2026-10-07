/**
 * Creates a new {@linkcode Jiti} instance with custom options.
 *
 * @param id - Instance id, usually the current filename.
 * @param userOptions - Custom options to override the default options.
 * @returns A {@linkcode Jiti} instance.
 *
 * @example
 * <caption>ESM Usage</caption>
 *
 * ```ts
 * import { createJiti } from "jiti";
 *
 * const jiti = createJiti(import.meta.url, { debug: true });
 * ```
 *
 * @example
 * <caption>CommonJS Usage **(deprecated)**</caption>
 *
 * ```ts
 * const { createJiti } = require("jiti");
 *
 * const jiti = createJiti(__filename, { debug: true });
 * ```
 *
 * @since 2.0.0
 */
export declare function createJiti(id: string, userOptions?: JitiOptions): Jiti;

/**
 * Jiti instance
 *
 * Calling `jiti()` is similar to CommonJS {@linkcode require()} but adds
 * extra features such as TypeScript and ESM compatibility.
 *
 * **Note:** It is recommended to use
 * {@linkcode Jiti.import | await jiti.import()} instead.
 */
export interface Jiti extends NodeRequire {
  /**
   * Resolved options
   */
  options: JitiOptions;

  /**
   * ESM import a module with additional TypeScript and ESM compatibility.
   *
   * If you need the default export of module, you can use
   * `jiti.import(id, { default: true })` as shortcut to `mod?.default ?? mod`.
   */
  import<T = unknown>(
    id: string,
    opts?: JitiResolveOptions & { default?: true },
  ): Promise<T>;

  /**
   * Resolve with ESM import conditions.
   */
  esmResolve(id: string, parentURL?: string): string;
  esmResolve<T extends JitiResolveOptions = JitiResolveOptions>(
    id: string,
    opts?: T,
  ): T["try"] extends true ? string | undefined : string;

  /**
   * Transform source code
   */
  transform: (opts: TransformOptions) => string;

  /**
   * Evaluate transformed code as a module
   */
  evalModule: (source: string, options?: EvalModuleOptions) => unknown;
}

/**
 * Jiti instance options
 */
export interface JitiOptions {
  /**
   * Filesystem source cache
   *
   * An string can be passed to set the custom cache directory.
   *
   * By default (when set to `true`), jiti uses
   * `node_modules/.cache/jiti` (if exists) or `{TMP_DIR}/jiti`.
   *
   * This option can also be disabled using
   * `JITI_FS_CACHE=false` environment variable.
   *
   * **Note:** It is recommended to keep this option
   * enabled for better performance.
   *
   * @default true
   */
  fsCache?: boolean | string;

  /**
   * Rebuild the filesystem source cache
   *
   * This option can also be enabled using
   * `JITI_REBUILD_FS_CACHE=true` environment variable.
   *
   * @default false
   */
  rebuildFsCache?: boolean;

  /**
   * @deprecated Use the {@linkcode fsCache} option.
   *
   * @default true
   */
  cache?: boolean | string;

  /**
   * Runtime module cache
   *
   * Disabling allows editing code and importing same module multiple times.
   *
   * When enabled, jiti integrates with Node.js native CommonJS cache store.
   *
   * This option can also be disabled using
   * `JITI_MODULE_CACHE=false` environment variable.
   *
   * @default true
   */
  moduleCache?: boolean;

  /**
   * @deprecated Use the {@linkcode moduleCache} option.
   *
   * @default true
   */
  requireCache?: boolean;

  /**
   * Custom transform function
   */
  transform?: (opts: TransformOptions) => TransformResult;

  /**
   * Enable verbose debugging.
   *
   * Can also be enabled using `JITI_DEBUG=1` environment variable.
   *
   * @default false
   */
  debug?: boolean;

  /**
   * Enable sourcemaps for transformed code.
   *
   * Can also be disabled using `JITI_SOURCE_MAPS=0` environment variable.
   *
   * @default false
   */
  sourceMaps?: boolean;

  /**
   * Jiti combines module exports with the `default` export using an
   * internal Proxy to improve compatibility with mixed CJS/ESM usage.
   * You can check the current implementation
   * {@link https://github.com/unjs/jiti/blob/main/src/utils.ts#L105 here}.
   *
   * Can be disabled using `JITI_INTEROP_DEFAULT=0` environment variable.
   *
   * @default true
   */
  interopDefault?: boolean;

  /**
   * Jiti hard source cache version.
   *
   * @internal
   */
  cacheVersion?: string;

  /**
   * Supported extensions to resolve.
   *
   * @default [".js", ".mjs", ".cjs", ".ts", ".tsx", ".mts", ".cts", ".mtsx", ".ctsx", ".json"]
   */
  extensions?: string[];

  /**
   * Transform options
   */
  transformOptions?: Omit<TransformOptions, "source">;

  /**
   * Resolve aliases
   *
   * You can use `JITI_ALIAS` environment variable to set aliases as
   * a JSON string.
   *
   * @default {}
   */
  alias?: Record<string, string>;

  /**
   * List of modules (within `node_modules`) to always use native
   * require/import for them.
   *
   * You can use `JITI_NATIVE_MODULES` environment variable to set
   * native modules as a JSON string.
   *
   * @default []
   */
  nativeModules?: string[];

  /**
   * List of modules (within `node_modules`) to transform them
   * regardless of syntax.
   *
   * You can use `JITI_TRANSFORM_MODULES` environment variable to set
   * transform modules as a JSON string.
   *
   * @default []
   */
  transformModules?: string[];

  /**
   * Parent module's {@linkcode ImportMeta | import.meta} context to use
   * for ESM resolution.
   *
   * (Only used for `jiti/native` import)
   */
  importMeta?: ImportMeta;

  /**
   * Try to use native require and import without jiti transformations first.
   *
   * Enabled if Bun is detected.
   *
   * @default false
   */
  tryNative?: boolean;

  /**
   * Enable JSX support Enable JSX support using
   * {@link https://babeljs.io/docs/babel-plugin-transform-react-jsx | `@babel/plugin-transform-react-jsx`}.
   *
   * You can also use `JITI_JSX=1` environment variable to enable JSX support.
   *
   * @default false
   */
  jsx?: boolean | JSXOptions;
}

interface NodeRequire {
  /**
   * Module cache
   */
  cache: ModuleCache;

  /**
   * @deprecated Prefer {@linkcode Jiti.import | await jiti.import()}
   * for better compatibility.
   */
  (id: string): any;

  /**
   * @deprecated Prefer {@linkcode Jiti.esmResolve | jiti.esmResolve}
   * for better compatibility.
   */
  resolve: {
    /** @deprecated */
    (id: string, options?: { paths?: string[] | undefined }): string;
    /** @deprecated */
    paths(request: string): string[] | null;
  };

  /** @deprecated CommonJS API */
  extensions: Record<
    ".js" | ".json" | ".node",
    (m: NodeModule, filename: string) => any | undefined
  >;

  /** @deprecated CommonJS API */
  main: NodeModule | undefined;
}

export interface NodeModule {
  /**
   * `true` if the module is running during the Node.js preload.
   */
  isPreloading: boolean;
  exports: any;
  require: NodeRequire;
  id: string;
  filename: string;
  loaded: boolean;
  /**
   * @deprecated since Node.js **v14.6.0** Please use
   * {@linkcode NodeRequire.main | require.main} and
   * {@linkcode NodeModule.children | module.children} instead.
   */
  parent: NodeModule | null | undefined;
  children: NodeModule[];
  /**
   * The directory name of the module.
   * This is usually the same as the `path.dirname()` of the `module.id`.
   *
   * @since Node.js **v11.14.0**
   */
  path: string;
  paths: string[];
}

export type ModuleCache = Record<string, NodeModule>;

export type EvalModuleOptions = Partial<{
  id: string;
  filename: string;
  ext: string;
  cache: ModuleCache;
  /**
   * @default true
   */
  async: boolean;
  forceTranspile: boolean;
}>;

export interface TransformOptions {
  source: string;
  filename?: string;
  ts?: boolean;
  retainLines?: boolean;
  interopDefault?: boolean;
  /**
   * @default false
   */
  async?: boolean;
  /**
   * @default false
   */
  jsx?: boolean | JSXOptions;
  babel?: Record<string, any>;
}

export interface TransformResult {
  code: string;
  error?: any;
}

export interface JitiResolveOptions {
  conditions?: string[];
  parentURL?: string | URL;
  try?: boolean;
}

/**
 * @see {@link https://babeljs.io/docs/babel-plugin-transform-react-jsx#options | Reference}
 */
export interface JSXOptions {
  throwIfNamespace?: boolean;
  runtime?: "classic" | "automatic";
  importSource?: string;
  pragma?: string;
  pragmaFrag?: string;
  useBuiltIns?: boolean;
  useSpread?: boolean;
}
