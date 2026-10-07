import { a as Arrayable, c as Overwrite, n as LogLevel, o as Awaitable, r as Logger, s as MarkPartial, t as PackageJson } from "./index-DraNj4FA.mjs";
import { BuildOptions, ChecksOptions, ExternalOption, InputOptions, InternalModuleFormat, MinifyOptions, ModuleFormat, ModuleTypes, OutputAsset, OutputChunk, OutputOptions, Plugin, RolldownPlugin, TreeshakingOptions } from "rolldown";
import { Hookable } from "hookable";
import { Buffer } from "node:buffer";
import * as _$_tsdown_css0 from "@tsdown/css";
import { StartOptions } from "@vitejs/devtools/cli-commands";
import { ExeExtensionOptions } from "@tsdown/exe";
import * as _$_arethetypeswrong_core0 from "@arethetypeswrong/core";
import { CheckPackageOptions } from "@arethetypeswrong/core";
import * as _$publint from "publint";
import { Options } from "publint";
import * as _$publint_utils0 from "publint/utils";
import { Options as Options$1 } from "rolldown-plugin-dts";
import { Options as UnusedOptions } from "unplugin-unused";

//#region src/features/copy.d.ts
interface CopyEntry {
  /**
  * Source path or glob pattern.
  */
  from: string | string[];
  /**
  * Destination path.
  * If not specified, defaults to the output directory ("outDir").
  */
  to?: string;
  /**
  * Whether to flatten the copied files (not preserving directory structure).
  *
  * @default true
  */
  flatten?: boolean;
  /**
  * Output copied items to console.
  * @default false
  */
  verbose?: boolean;
  /**
  * Change destination file or folder name.
  */
  rename?: string | ((name: string, extension: string, fullPath: string) => string);
}
type CopyOptions = Arrayable<string | CopyEntry>;
type CopyOptionsFn = (options: ResolvedConfig) => Awaitable<CopyOptions>;
//#endregion
//#region src/utils/chunks.d.ts
type RolldownChunk = (OutputChunk | OutputAsset) & {
  outDir: string;
};
type ChunksByFormat = Partial<Record<NormalizedFormat, RolldownChunk[]>>;
interface TsdownBundle extends AsyncDisposable {
  chunks: RolldownChunk[];
  config: ResolvedConfig;
  inlinedDeps: Map<string, Set<string>>;
}
//#endregion
//#region src/features/deps.d.ts
type NoExternalFn = (id: string, importer: string | undefined) => boolean | null | undefined | void;
interface DepsConfig {
  /**
  * Mark dependencies as external (not bundled).
  * Accepts strings, regular expressions, or Rolldown's `ExternalOption`.
  */
  neverBundle?: ExternalOption;
  /**
  * Force dependencies to be bundled, even if they are in `dependencies`, `peerDependencies`, or `optionalDependencies`.
  */
  alwaysBundle?: Arrayable<string | RegExp> | NoExternalFn;
  /**
  * Whitelist of dependencies allowed to be bundled from `node_modules`.
  * Throws an error if any unlisted dependency is bundled.
  *
  * - `undefined` (default): Show warnings for bundled dependencies.
  * - `false`: Suppress all warnings about bundled dependencies.
  *
  * Note: Be sure to include all required sub-dependencies as well.
  */
  onlyBundle?: Arrayable<string | RegExp> | false;
  /**
  * @deprecated Use {@link onlyBundle} instead.
  */
  onlyAllowBundle?: Arrayable<string | RegExp> | false;
  /**
  * Skip bundling all `node_modules` dependencies.
  *
  * **Note:** This option cannot be used together with `alwaysBundle`.
  *
  * @default false
  */
  skipNodeModulesBundle?: boolean;
}
interface ResolvedDepsConfig {
  neverBundle?: ExternalOption;
  alwaysBundle?: NoExternalFn;
  onlyBundle?: Array<string | RegExp> | false;
  skipNodeModulesBundle: boolean;
}
declare function DepsPlugin({
  pkg,
  deps: {
    alwaysBundle,
    onlyBundle,
    skipNodeModulesBundle
  },
  logger,
  nameLabel
}: ResolvedConfig, tsdownBundle: TsdownBundle): Plugin;
//#endregion
//#region src/features/devtools.d.ts
interface DevtoolsOptions extends NonNullable<InputOptions["devtools"]> {
  /**
  * **[experimental]** Enable devtools integration. `@vitejs/devtools` must be installed as a dependency.
  *
  * Defaults to true, if `@vitejs/devtools` is installed.
  */
  ui?: boolean | Partial<StartOptions>;
  /**
  * Clean devtools stale sessions.
  *
  * @default true
  */
  clean?: boolean;
}
//#endregion
//#region src/features/exe.d.ts
interface ExeOptions extends ExeExtensionOptions {
  seaConfig?: Omit<SeaConfig, "main" | "output" | "mainFormat">;
  /**
  * Output file name without any suffix or extension.
  * For example, do not include `.exe`, platform suffixes, or architecture suffixes.
  */
  fileName?: string | ((chunk: RolldownChunk) => string);
  /**
  * Output directory for executables.
  * @default 'build'
  */
  outDir?: string;
}
/**
* See also [Node.js SEA Documentation](https://nodejs.org/api/single-executable-applications.html#generating-single-executable-applications-with---build-sea)
*
* Note some default values are different from Node.js defaults to optimize for typical use cases (e.g. disabling experimental warning, enabling code cache). These can be overridden.
*/
interface SeaConfig {
  main?: string;
  /** Optional, if not specified, uses the current Node.js binary */
  executable?: string;
  output?: string;
  mainFormat?: "commonjs" | "module";
  /** @default true */
  disableExperimentalSEAWarning?: boolean;
  /** @default false */
  useSnapshot?: boolean;
  /** @default false */
  useCodeCache?: boolean;
  execArgv?: string[];
  /** @default "env" */
  execArgvExtension?: "none" | "env" | "cli";
  assets?: Record<string, string>;
}
//#endregion
//#region src/features/hooks.d.ts
interface BuildContext {
  options: ResolvedConfig;
  hooks: Hookable<TsdownHooks>;
}
interface RolldownContext {
  buildOptions: BuildOptions;
}
/**
* Hooks for tsdown.
*/
interface TsdownHooks {
  /**
  * Invoked before each tsdown build starts.
  * Use this hook to perform setup or preparation tasks.
  */
  "build:prepare": (ctx: BuildContext) => void | Promise<void>;
  /**
  * Invoked before each Rolldown build.
  * For dual-format builds, this hook is called for each format.
  * Useful for configuring or modifying the build context before bundling.
  */
  "build:before": (ctx: BuildContext & RolldownContext) => void | Promise<void>;
  /**
  * Invoked after each tsdown build completes.
  * Use this hook for cleanup or post-processing tasks.
  */
  "build:done": (ctx: BuildContext & {
    chunks: RolldownChunk[];
  }) => void | Promise<void>;
}
//#endregion
//#region src/utils/package.d.ts
interface PackageJsonWithPath extends PackageJson {
  packageJsonPath: string;
}
type PackageType = "module" | "commonjs" | undefined;
//#endregion
//#region src/features/output.d.ts
interface OutExtensionContext {
  options: InputOptions;
  format: NormalizedFormat;
  /** "type" field in project's package.json */
  pkgType?: PackageType;
}
interface OutExtensionObject {
  js?: string;
  dts?: string;
}
type OutExtensionFactory = (context: OutExtensionContext) => OutExtensionObject | undefined;
interface ChunkAddonObject {
  js?: string;
  css?: string;
  dts?: string;
}
type ChunkAddonFunction = (ctx: {
  format: Format;
  fileName: string;
}) => ChunkAddonObject | string | undefined;
type ChunkAddon = ChunkAddonObject | ChunkAddonFunction | string;
//#endregion
//#region src/features/pkg/attw.d.ts
interface AttwOptions extends CheckPackageOptions {
  module?: typeof _$_arethetypeswrong_core0;
  /**
  * Profiles select a set of resolution modes to require/ignore. All are evaluated but failures outside
  * of those required are ignored.
  *
  * The available profiles are:
  * - `strict`: requires all resolutions
  * - `node16`: ignores node10 resolution failures
  * - `esm-only`: ignores CJS resolution failures
  *
  * @default 'strict'
  */
  profile?: "strict" | "node16" | "esm-only";
  /**
  * The level of the check.
  *
  * The available levels are:
  * - `error`: fails the build
  * - `warn`: warns the build
  *
  * @default 'warn'
  */
  level?: "error" | "warn";
  /**
  * List of problem types to ignore by rule name.
  *
  * The available values are:
  * - `no-resolution`
  * - `untyped-resolution`
  * - `false-cjs`
  * - `false-esm`
  * - `cjs-resolves-to-esm`
  * - `fallback-condition`
  * - `cjs-only-exports-default`
  * - `named-exports`
  * - `false-export-default`
  * - `missing-export-equals`
  * - `unexpected-module-syntax`
  * - `internal-resolution-error`
  *
  * @example
  * ```ts
  * ignoreRules: ['no-resolution', 'false-cjs']
  * ```
  */
  ignoreRules?: ("no-resolution" | "untyped-resolution" | "false-cjs" | "false-esm" | "cjs-resolves-to-esm" | "fallback-condition" | "cjs-only-exports-default" | "named-exports" | "false-export-default" | "missing-export-equals" | "unexpected-module-syntax" | "internal-resolution-error" | (string & {}))[];
}
//#endregion
//#region src/features/pkg/exports.d.ts
interface ExportsOptions {
  /**
  * Generate exports that link to source code during development.
  * - string: add as a custom condition.
  * - true: all conditions point to source files, and add dist exports to `publishConfig`.
  */
  devExports?: boolean | string;
  /**
  * Exports for package.json file.
  * @default true
  */
  packageJson?: boolean;
  /**
  * Exports for all files.
  */
  all?: boolean;
  /**
  * Specifies file patterns (as glob patterns or regular expressions) to exclude from package exports.
  * Use this to prevent certain files from being included in the exported package, such as test files, binaries, or internal utilities.
  *
  * **Note:** Do not include file extensions, and paths should be relative to the dist directory.
  *
  * @example
  * exclude: ['cli', '**\/*.test', /internal/]
  */
  exclude?: (RegExp | string)[];
  /**
  * Generate legacy fields (`main` and `module`) for older Node.js and bundlers
  * that do not support package `exports` field.
  *
  * Defaults to false, if only ESM builds are included, true otherwise.
  *
  * @see {@link https://github.com/publint/publint/issues/24}
  */
  legacy?: boolean;
  /**
  * Specifies custom exports to add to the package exports in addition to the ones generated by tsdown.
  * Use this to add additional exports in the exported package, such as workers or assets.
  *
  * @example
  * customExports(exports) {
  *   exports['./worker.js'] = './dist/worker.js';
  *   return exports;
  * }
  *
  * @example
  * ```jsonc
  * {
  *   "customExports": {
  *     "./worker.js": {
  *       "types": "./dist/worker.d.ts",
  *       "default": "./dist/worker.js"
  *     }
  *   }
  * }
  * ```
  */
  customExports?: Record<string, any> | ((exports: Record<string, any>, context: {
    pkg: PackageJson;
    chunks: ChunksByFormat;
    isPublish: boolean;
  }) => Awaitable<Record<string, any>>);
  /**
  * Generate `inlinedDependencies` field in package.json.
  * Lists dependencies that are physically inlined into the bundle with their exact versions.
  *
  * @default true
  * @see {@link https://github.com/e18e/ecosystem-issues/issues/237}
  */
  inlinedDependencies?: boolean;
  /**
  * Add file extensions to subpath export keys.
  *
  * When enabled, all subpath exports (except the root `"."`) will include
  * a `.js` extension in the key (e.g., `"./utils.js"` instead of `"./utils"`).
  *
  * This follows the Node.js recommendation for subpath exports:
  * @see {@link https://nodejs.org/api/packages.html#extensions-in-subpaths}
  *
  * @default false
  */
  extensions?: boolean;
  /**
  * Auto-generate the `bin` field in package.json.
  *
  * - `true`: Auto-detect entry chunks with shebangs. Uses package name (without scope) as bin name.
  *   Errors if multiple shebang entries are found.
  * - `string`: Source file path to use as the bin entry. Bin name defaults to package name (without scope).
  * - `Record<string, string>`: Map of bin command names to source file paths.
  *
  * @example
  * bin: true
  * @example
  * bin: './src/cli.ts'
  * @example
  * bin: { tool: './src/cli-tool.ts' }
  */
  bin?: boolean | string | Record<string, string>;
}
//#endregion
//#region src/features/pkg/publint.d.ts
interface PublintOptions extends Omit<Options, "pack" | "pkgDir"> {
  module?: [typeof _$publint, typeof _$publint_utils0];
}
//#endregion
//#region src/features/plugin.d.ts
/**
* A tsdown-aware plugin. Extends Rolldown's `Plugin` with tsdown-specific
* lifecycle hooks.
*
* Plugins that only use Rolldown's own lifecycle continue to work unchanged;
* tsdown detects these optional methods via runtime duck-typing.
*/
interface TsdownPlugin<A = any> extends Plugin<A> {
  /**
  * Modify tsdown's user config before it is resolved. Analogous to Vite's
  * [`config`](https://vite.dev/guide/api-plugin.html#config) hook.
  *
  * The hook may mutate `config` in place, or return a partial {@link UserConfig}
  * that will be deep-merged into the current config. Array fields are
  * replaced (not concatenated) during merging — to append plugins, mutate
  * `config.plugins` in place.
  *
  * The second argument is the original {@link InlineConfig} passed to
  * `build()` (typically the CLI flags), useful for distinguishing values
  * that came from the command line vs. the config file.
  *
  * Plugins injected via `fromVite` do not receive this hook, because they
  * are loaded after the tsdownConfig phase. Likewise, new plugins added by
  * another plugin's `tsdownConfig` do not themselves receive this hook
  * (plugins are snapshotted before dispatch).
  */
  tsdownConfig?: (config: UserConfig, inlineConfig: InlineConfig) => Awaitable<UserConfig | void | null>;
  /**
  * Called after tsdown has fully resolved the user config. Analogous to
  * Vite's [`configResolved`](https://vite.dev/guide/api-plugin.html#configresolved)
  * hook.
  *
  * This hook fires once per produced {@link ResolvedConfig} — i.e. once
  * per output format when `format` is an array. Typical usage is to stash
  * the resolved config for later use in Rolldown hooks. Mutations made to
  * `resolvedConfig` here are not supported.
  */
  tsdownConfigResolved?: (resolvedConfig: ResolvedConfig) => Awaitable<void>;
}
/**
* A tsdown plugin slot — accepts tsdown plugins, any Rolldown plugin form,
* `null`/`undefined`/`false`, promises, and nested arrays. Mirrors Rolldown's
* {@link RolldownPluginOption} but with {@link TsdownPlugin} as the atom so
* that tsdown-specific hooks are type-checked.
*/
type TsdownPluginOption<A = any> = Awaitable<TsdownPlugin<A> | RolldownPlugin<A> | {
  name: string;
} | undefined | null | void | false | TsdownPluginOption<A>[]>;
//#endregion
//#region src/features/report.d.ts
interface ReportOptions {
  /**
  * Enable/disable gzip-compressed size reporting.
  * Compressing large output files can be slow, so disabling this may increase build performance for large projects.
  *
  * @default true
  */
  gzip?: boolean;
  /**
  * Enable/disable brotli-compressed size reporting.
  * Compressing large output files can be slow, so disabling this may increase build performance for large projects.
  *
  * @default false
  */
  brotli?: boolean;
  /**
  * Skip reporting compressed size for files larger than this size.
  * @default 1_000_000 // 1MB
  */
  maxCompressSize?: number;
}
declare function ReportPlugin(config: ResolvedConfig, cjsDts?: boolean, isDualFormat?: boolean): Plugin;
//#endregion
//#region src/config/types.d.ts
interface DtsOptions extends Options$1 {
  /**
  * When building dual ESM+CJS formats, generate a `.d.cts` re-export stub
  * instead of running a full second TypeScript compilation pass.
  *
  * The stub re-exports everything from the corresponding `.d.mts` file,
  * ensuring CJS and ESM consumers share the same type declarations. This
  * eliminates the TypeScript "dual module hazard" where separate `.d.cts`
  * and `.d.mts` declarations cause `TS2352` ("neither type sufficiently
  * overlaps") errors when casting between types derived from the same class.
  *
  * Only applies when building both `esm` and `cjs` formats simultaneously.
  *
  * @default false
  */
  cjsReexport?: boolean;
}
type Sourcemap = boolean | "inline" | "hidden";
type Format = ModuleFormat;
type NormalizedFormat = InternalModuleFormat;
/**
* Extended input option that supports glob negation patterns.
*
* When using object form, values can be:
* - A single glob pattern string
* - An array of glob patterns, including negation patterns (prefixed with `!`)
*
* @example
* ```ts
* entry: {
*   // Single pattern
*   "utils/*": "./src/utils/*.ts",
*   // Array with negation pattern to exclude files
*   "hooks/*": ["./src/hooks/*.ts", "!./src/hooks/index.ts"],
* }
* ```
*/
type TsdownInputOption = Arrayable<string | Record<string, Arrayable<string>>>;
interface Workspace {
  /**
  * Workspace directories. Glob patterns are supported.
  * - `auto`: Automatically detect `package.json` files in the workspace.
  * @default 'auto'
  */
  include?: Arrayable<string> | "auto";
  /**
  * Exclude directories from workspace.
  * Defaults to all `node_modules`, `dist`, `test`, `tests`, `temp`, and `tmp` directories.
  */
  exclude?: Arrayable<string>;
  /**
  * Path to the workspace configuration file.
  */
  config?: boolean | string;
}
type CIOption = "ci-only" | "local-only";
type WithEnabled<T> = boolean | undefined | CIOption | (T & {
  /** @default true */enabled?: boolean | CIOption;
});
/**
* Options for tsdown.
*/
interface UserConfig {
  /**
  * Defaults to `'src/index.ts'` if it exists.
  *
  * Supports glob patterns with negation to exclude files:
  * @example
  * ```ts
  * entry: {
  *   "hooks/*": ["./src/hooks/*.ts", "!./src/hooks/index.ts"],
  * }
  * ```
  */
  entry?: TsdownInputOption;
  /**
  * Dependency handling options.
  */
  deps?: DepsConfig;
  /**
  * @deprecated Use `deps.neverBundle` instead.
  */
  external?: ExternalOption;
  /**
  * @deprecated Use `deps.alwaysBundle` instead.
  */
  noExternal?: Arrayable<string | RegExp> | NoExternalFn;
  /**
  * @deprecated Use `deps.onlyBundle` instead.
  */
  inlineOnly?: Arrayable<string | RegExp> | false;
  /**
  * @deprecated Use `deps.skipNodeModulesBundle` instead.
  * @default false
  */
  skipNodeModulesBundle?: boolean;
  alias?: Record<string, string>;
  tsconfig?: string | boolean;
  /**
  * Specifies the target runtime platform for the build.
  *
  * - `node`: Node.js and compatible runtimes (e.g., Deno, Bun).
  *   For CJS format, this is always set to `node` and cannot be changed.
  * - `neutral`: A platform-agnostic target with no specific runtime assumptions.
  * - `browser`: Web browsers.
  *
  * @default 'node'
  * @see https://tsdown.dev/options/platform
  */
  platform?: "node" | "neutral" | "browser";
  /**
  * Specifies the compilation target environment(s).
  *
  * Determines the JavaScript version or runtime(s) for which the code should be compiled.
  * If not set, defaults to the value of `engines.node` in your project's `package.json`.
  * If no `engines.node` field exists, no syntax transformations are applied.
  *
  * Accepts a single target (e.g., `'es2020'`, `'node18'`, `'baseline-widely-available'`), an array of targets, or `false` to disable all transformations.
  *
  * @see {@link https://tsdown.dev/options/target#supported-targets} for a list of valid targets and more details.
  *
  * @example
  * ```jsonc
  * // Target a single environment
  * { "target": "node18" }
  * ```
  *
  * @example
  * ```jsonc
  * // Target multiple environments
  * { "target": ["node18", "es2020"] }
  * ```
  *
  * @example
  * ```jsonc
  * // Disable all syntax transformations
  * { "target": false }
  * ```
  */
  target?: string | string[] | false;
  /**
  * Compile-time env variables, which can be accessed via `import.meta.env` or `process.env`.
  * @example
  * ```json
  * {
  *   "DEBUG": true,
  *   "NODE_ENV": "production"
  * }
  * ```
  */
  env?: Record<string, any>;
  /**
  * Path to env file providing compile-time env variables.
  * @example
  * `.env`, `.env.production`, etc.
  */
  envFile?: string;
  /**
  * When loading env variables from `envFile`, only include variables with these prefixes.
  * @default 'TSDOWN_'
  */
  envPrefix?: string | string[];
  define?: Record<string, string>;
  /** @default false */
  shims?: boolean;
  /**
  * Configure tree shaking options.
  * @see {@link https://rolldown.rs/options/treeshake} for more details.
  * @default true
  */
  treeshake?: boolean | TreeshakingOptions;
  /**
  * Sets how input files are processed.
  * For example, use 'js' to treat files as JavaScript or 'base64' for images.
  * Lets you import or require files like images or fonts.
  * @example
  * ```json
  * { '.jpg': 'asset', '.png': 'base64' }
  * ```
  */
  loader?: ModuleTypes;
  /**
  * If enabled, strips the `node:` protocol prefix from import source.
  *
  * @default false
  * @deprecated Use `nodeProtocol: 'strip'` instead.
  *
  * @example
  * // With removeNodeProtocol enabled:
  * import('node:fs'); // becomes import('fs')
  */
  removeNodeProtocol?: boolean;
  /**
  * - If `true`, add `node:` prefix to built-in modules.
  * - If `'strip'`, strips the `node:` protocol prefix from import source.
  * - If `false`, does not modify the import source.
  *
  * @default false
  *
  * @example
  * // With nodeProtocol enabled:
  * import('fs'); // becomes import('node:fs')
  * // With nodeProtocol set to 'strip':
  * import('node:fs'); // becomes import('fs')
  * // With nodeProtocol set to false:
  * import('node:fs'); // remains import('node:fs')
  *
  */
  nodeProtocol?: "strip" | boolean;
  /**
  * Controls which warnings are emitted during the build process. Each option can be set to `true` (emit warning) or `false` (suppress warning).
  */
  checks?: ChecksOptions & {
    /**
    * If the config includes the `cjs` format and
    * one of its target >= node 20.19.0 / 22.12.0,
    * warn the user about the deprecation of CommonJS.
    *
    * @default true
    */
    legacyCjs?: boolean;
  };
  plugins?: TsdownPluginOption;
  /**
  * Use with caution; ensure you understand the implications.
  */
  inputOptions?: InputOptions | ((options: InputOptions, format: NormalizedFormat, context: {
    cjsDts: boolean;
  }) => Awaitable<InputOptions | void | null>);
  /**
  * Output format(s). Available formats are
  * - `esm`: ESM
  * - `cjs`: CommonJS
  * - `iife`: IIFE
  * - `umd`: UMD
  *
  * Defaults to ESM.
  */
  format?: Format | Format[] | Partial<Record<Format, Partial<ResolvedConfig>>>;
  globalName?: string;
  /** @default 'dist' */
  outDir?: string;
  /**
  * Whether to write the files to disk.
  * This option is incompatible with watch mode.
  * @default true
  */
  write?: boolean;
  /**
  * Whether to generate source map files.
  *
  * Note that this option will always be `true` if you have
  * [`declarationMap`](https://www.typescriptlang.org/tsconfig/#declarationMap)
  * option enabled in your `tsconfig.json`.
  *
  * @default false
  */
  sourcemap?: Sourcemap;
  /**
  * Clean directories before build.
  *
  * Default to output directory.
  * @default true
  */
  clean?: boolean | string[];
  /**
  * @default false
  */
  minify?: boolean | "dce-only" | MinifyOptions;
  footer?: ChunkAddon;
  banner?: ChunkAddon;
  /**
  * Determines whether unbundle mode is enabled.
  * When set to true, the output files will mirror the input file structure.
  * @default false
  */
  unbundle?: boolean;
  /**
  * Specifies the root directory of input files, similar to TypeScript's `rootDir`.
  * This determines the output directory structure.
  *
  * By default, the root is computed as the common base directory of all entry files.
  *
  * @see https://www.typescriptlang.org/tsconfig/#rootDir
  */
  root?: string;
  /**
  * @deprecated Use `unbundle` instead.
  * @default true
  */
  bundle?: boolean;
  /**
  * Use a fixed extension for output files.
  * The extension will always be `.cjs` or `.mjs`.
  * Otherwise, it will depend on the package type.
  *
  * Defaults to `true` if `platform` is set to `node`, `false` otherwise.
  */
  fixedExtension?: boolean;
  /**
  * Custom extensions for output files.
  * `fixedExtension` will be overridden by this option.
  */
  outExtensions?: OutExtensionFactory;
  /**
  * If enabled, appends hash to chunk filenames.
  * @default true
  */
  hash?: boolean;
  /**
  * @default true
  */
  cjsDefault?: boolean;
  /**
  * Use with caution; ensure you understand the implications.
  */
  outputOptions?: OutputOptions | ((options: OutputOptions, format: NormalizedFormat, context: {
    cjsDts: boolean;
  }) => Awaitable<OutputOptions | void | null>);
  /**
  * The working directory of the config file.
  * - Defaults to `process.cwd()` for root config.
  * - Defaults to the package directory for workspace config.
  */
  cwd?: string;
  /**
  * The name to show in CLI output. This is useful for monorepos or workspaces.
  * When using workspace mode, this option defaults to the package name from package.json.
  * In non-workspace mode, this option must be set explicitly for the name to show in the CLI output.
  */
  name?: string;
  /**
  * Log level.
  * @default 'info'
  */
  logLevel?: LogLevel;
  /**
  * If true, fails the build on warnings.
  * @default false
  */
  failOnWarn?: boolean | CIOption;
  /**
  * Custom logger.
  */
  customLogger?: Logger;
  /**
  * Reuse config from Vite or Vitest (experimental)
  * @default false
  */
  fromVite?: boolean | "vitest";
  /**
  * @default false
  */
  watch?: boolean | Arrayable<string>;
  /**
  * Files or patterns to not watch while in watch mode.
  */
  ignoreWatch?: Arrayable<string | RegExp>;
  /**
  * **[experimental]** Enable devtools.
  *
  *DevTools is still under development, and this is for early testers only.
  *
  * This may slow down the build process significantly.
  *
  * @default false
  */
  devtools?: WithEnabled<DevtoolsOptions>;
  /**
  * You can specify command to be executed after a successful build, specially useful for Watch mode
  */
  onSuccess?: string | ((config: ResolvedConfig, signal: AbortSignal) => void | Promise<void>);
  /**
  * Enables generation of TypeScript declaration files (`.d.ts`).
  *
  * By default, this option is auto-detected based on your project's `package.json`:
  * - If {@link exe} is enabled, declaration file generation is disabled by default.
  * - If the `types` field is present, or if the main `exports` contains a `types` entry, declaration file generation is enabled by default.
  * - Otherwise, declaration file generation is disabled by default.
  */
  dts?: WithEnabled<DtsOptions>;
  /**
  * Enable unused dependencies check with `unplugin-unused`
  * Requires `unplugin-unused` to be installed.
  * @default false
  */
  unused?: WithEnabled<UnusedOptions>;
  /**
  * Run publint after bundling.
  * Requires `publint` to be installed.
  * @default false
  */
  publint?: WithEnabled<PublintOptions>;
  /**
  * Run `arethetypeswrong` after bundling.
  * Requires `@arethetypeswrong/core` to be installed.
  *
  * @default false
  * @see https://github.com/arethetypeswrong/arethetypeswrong.github.io
  */
  attw?: WithEnabled<AttwOptions>;
  /**
  * Enable size reporting after bundling.
  * @default true
  */
  report?: WithEnabled<ReportOptions>;
  /**
  * `import.meta.glob` support.
  * @see https://vite.dev/guide/features.html#glob-import
  * @default true
  */
  globImport?: boolean;
  /**
  * Generate package exports for `package.json`.
  *
  * This will set the `main`, `module`, `types`, `exports` fields in `package.json`
  * to point to the generated files.
  */
  exports?: WithEnabled<ExportsOptions>;
  /**
  * **[experimental]** CSS options.
  * Requires `@tsdown/css` to be installed.
  */
  css?: _$_tsdown_css0.CssOptions;
  /**
  * @deprecated Use `css.inject` instead.
  */
  injectStyle?: boolean;
  /**
  * @deprecated Alias for `copy`, will be removed in the future.
  */
  publicDir?: CopyOptions | CopyOptionsFn;
  /**
  * Copy files to another directory.
  * @example
  * ```ts
  * [
  *   'src/assets',
  *   'src/env.d.ts',
  *   'src/styles/**\/*.css',
  *   { from: 'src/assets', to: 'dist/assets' },
  *   { from: 'src/styles/**\/*.css', to: 'dist', flatten: true },
  * ]
  * ```
  */
  copy?: CopyOptions | CopyOptionsFn;
  hooks?: Partial<TsdownHooks> | ((hooks: Hookable<TsdownHooks>) => Awaitable<void>);
  /**
  * **[experimental]** Bundle as executable using Node.js SEA (Single Executable Applications).
  *
  * This will bundle the output into a single executable file using Node.js SEA.
  * Note that this is only supported on Node.js 25.7.0 and later, and is not supported in Bun or Deno.
  */
  exe?: WithEnabled<ExeOptions>;
  /**
  * **[experimental]** Enable workspace mode.
  * This allows you to build multiple packages in a monorepo.
  */
  workspace?: Workspace | Arrayable<string> | true;
}
interface InlineConfig extends UserConfig {
  /**
  * Config file path
  */
  config?: boolean | string;
  /**
  * Config loader to use. It can only be set via CLI or API.
  * @default 'auto'
  */
  configLoader?: "auto" | "native" | "unrun";
  /**
  * Filter configs by cwd or name.
  */
  filter?: RegExp | Arrayable<string>;
}
type UserConfigFn = (inlineConfig: InlineConfig, context: {
  ci: boolean;
  rootConfig?: UserConfig;
}) => Awaitable<Arrayable<UserConfig>>;
type UserConfigExport = Awaitable<Arrayable<UserConfig> | UserConfigFn>;
type ResolvedConfig = Overwrite<MarkPartial<Omit<UserConfig, "workspace" | "fromVite" | "publicDir" | "bundle" | "injectStyle" | "removeNodeProtocol" | "external" | "noExternal" | "inlineOnly" | "skipNodeModulesBundle" | "logLevel" | "failOnWarn" | "customLogger" | "envFile" | "envPrefix">, "globalName" | "inputOptions" | "outputOptions" | "minify" | "define" | "alias" | "onSuccess" | "outExtensions" | "hooks" | "copy" | "loader" | "name" | "banner" | "footer" | "checks" | "css">, {
  /** Resolved entry map (after glob expansion) */entry: Record<string, string>; /** Original entry config before glob resolution (for watch mode re-globbing) */
  rawEntry?: TsdownInputOption;
  nameLabel: string | undefined;
  format: NormalizedFormat;
  target?: string[];
  clean: string[];
  pkg?: PackageJsonWithPath;
  nodeProtocol: "strip" | boolean;
  logger: Logger;
  ignoreWatch: Array<string | RegExp>;
  deps: ResolvedDepsConfig; /** Resolved root directory of input files */
  root: string;
  configDeps: Set<string>;
  dts: false | DtsOptions;
  report: false | ReportOptions;
  tsconfig: false | string;
  exports: false | ExportsOptions;
  devtools: false | DevtoolsOptions;
  publint: false | PublintOptions;
  attw: false | AttwOptions;
  unused: false | UnusedOptions;
  exe: false | ExeOptions;
}>;
//#endregion
export { PackageType as A, ResolvedDepsConfig as B, ChunkAddon as C, OutExtensionFactory as D, OutExtensionContext as E, SeaConfig as F, CopyOptionsFn as G, TsdownBundle as H, DevtoolsOptions as I, DepsConfig as L, RolldownContext as M, TsdownHooks as N, OutExtensionObject as O, ExeOptions as P, DepsPlugin as R, AttwOptions as S, ChunkAddonObject as T, CopyEntry as U, RolldownChunk as V, CopyOptions as W, ReportPlugin as _, NormalizedFormat as a, PublintOptions as b, TreeshakingOptions as c, UserConfig as d, UserConfigExport as f, ReportOptions as g, Workspace as h, InlineConfig as i, BuildContext as j, PackageJsonWithPath as k, TsdownInputOption as l, WithEnabled as m, DtsOptions as n, ResolvedConfig as o, UserConfigFn as p, Format as r, Sourcemap as s, CIOption as t, UnusedOptions as u, TsdownPlugin as v, ChunkAddonFunction as w, ExportsOptions as x, TsdownPluginOption as y, NoExternalFn as z };