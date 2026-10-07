import * as _$_oxc_project_types0 from "@oxc-project/types";

//#region src/binding.d.cts
type MaybePromise<T> = T | Promise<T>;
type VoidNullable<T = void> = T | null | undefined | void;
type BindingStringOrRegex = string | RegExp;
interface CodegenOptions {
  /**
   * Remove whitespace.
   *
   * @default true
   */
  removeWhitespace?: boolean;
}
interface CompressOptions {
  /**
   * Set desired EcmaScript standard version for output.
   *
   * Set `esnext` to enable all target highering.
   *
   * Example:
   *
   * * `'es2015'`
   * * `['es2020', 'chrome58', 'edge16', 'firefox57', 'node12', 'safari11']`
   *
   * @default 'esnext'
   *
   * @see [esbuild#target](https://esbuild.github.io/api/#target)
   */
  target?: string | Array<string>;
  /**
   * Pass true to discard calls to `console.*`.
   *
   * @default false
   */
  dropConsole?: boolean;
  /**
   * Remove `debugger;` statements.
   *
   * @default true
   */
  dropDebugger?: boolean;
  /**
   * Pass `true` to drop unreferenced functions and variables.
   *
   * Simple direct variable assignments do not count as references unless set to `keep_assign`.
   * @default true
   */
  unused?: boolean | 'keep_assign';
  /** Keep function / class names. */
  keepNames?: CompressOptionsKeepNames;
  /**
   * Join consecutive var, let and const statements.
   *
   * @default true
   */
  joinVars?: boolean;
  /**
   * Join consecutive simple statements using the comma operator.
   *
   * `a; b` -> `a, b`
   *
   * @default true
   */
  sequences?: boolean;
  /**
   * Set of label names to drop from the code.
   *
   * Labeled statements matching these names will be removed during minification.
   *
   * @default []
   */
  dropLabels?: Array<string>;
  /** Limit the maximum number of iterations for debugging purpose. */
  maxIterations?: number;
  /** Treeshake options. */
  treeshake?: TreeShakeOptions;
}
interface CompressOptionsKeepNames {
  /**
   * Keep function names so that `Function.prototype.name` is preserved.
   *
   * This does not guarantee that the `undefined` name is preserved.
   *
   * @default false
   */
  function: boolean;
  /**
   * Keep class names so that `Class.prototype.name` is preserved.
   *
   * This does not guarantee that the `undefined` name is preserved.
   *
   * @default false
   */
  class: boolean;
}
interface MangleOptions {
  /**
   * Pass `true` to mangle names declared in the top level scope.
   *
   * @default true for modules and commonjs, otherwise false
   */
  toplevel?: boolean;
  /**
   * Preserve `name` property for functions and classes.
   *
   * @default false
   */
  keepNames?: boolean | MangleOptionsKeepNames;
  /** Debug mangled names. */
  debug?: boolean;
}
interface MangleOptionsKeepNames {
  /**
   * Preserve `name` property for functions.
   *
   * @default false
   */
  function: boolean;
  /**
   * Preserve `name` property for classes.
   *
   * @default false
   */
  class: boolean;
}
interface MinifyOptions {
  /** Use when minifying an ES module. */
  module?: boolean;
  compress?: boolean | CompressOptions;
  mangle?: boolean | MangleOptions;
  codegen?: boolean | CodegenOptions;
  sourcemap?: boolean;
}
interface MinifyResult {
  code: string;
  map?: SourceMap;
  errors: Array<OxcError>;
}
interface TreeShakeOptions {
  /**
   * Whether to respect the pure annotations.
   *
   * Pure annotations are comments that mark an expression as pure.
   * For example: @__PURE__ or #__NO_SIDE_EFFECTS__.
   *
   * @default true
   */
  annotations?: boolean;
  /**
   * Whether to treat this function call as pure.
   *
   * This function is called for normal function calls, new calls, and
   * tagged template calls.
   */
  manualPureFunctions?: Array<string>;
  /**
   * Whether property read accesses have side effects.
   *
   * @default 'always'
   */
  propertyReadSideEffects?: boolean | 'always';
  /**
   * Whether property write accesses (assignments to member expressions) have side effects.
   *
   * When false, assignments like `obj.prop = value` are considered side-effect-free
   * (assuming the object and value expressions themselves are side-effect-free).
   *
   * @default true
   */
  propertyWriteSideEffects?: boolean;
  /**
   * Whether accessing a global variable has side effects.
   *
   * Accessing a non-existing global variable will throw an error.
   * Global variable may be a getter that has side effects.
   *
   * @default true
   */
  unknownGlobalSideEffects?: boolean;
  /**
   * Whether invalid import statements have side effects.
   *
   * Accessing a non-existing import name will throw an error.
   * Also import statements that cannot be resolved will throw an error.
   *
   * @default true
   */
  invalidImportSideEffects?: boolean;
}
interface Comment {
  type: 'Line' | 'Block';
  value: string;
  start: number;
  end: number;
}
interface ErrorLabel {
  message: string | null;
  start: number;
  end: number;
}
interface OxcError {
  severity: Severity;
  message: string;
  labels: Array<ErrorLabel>;
  helpMessage: string | null;
  codeframe: string | null;
}
type Severity = 'Error' | 'Warning' | 'Advice';
declare class ParseResult {
  get program(): _$_oxc_project_types0.Program;
  get module(): EcmaScriptModule;
  get comments(): Array<Comment>;
  get errors(): Array<OxcError>;
}
interface DynamicImport {
  start: number;
  end: number;
  moduleRequest: Span;
}
interface EcmaScriptModule {
  /**
   * Has ESM syntax.
   *
   * i.e. `import` and `export` statements, and `import.meta`.
   *
   * Dynamic imports `import('foo')` are ignored since they can be used in non-ESM files.
   */
  hasModuleSyntax: boolean;
  /** Import statements. */
  staticImports: Array<StaticImport>;
  /** Export statements. */
  staticExports: Array<StaticExport>;
  /** Dynamic import expressions. */
  dynamicImports: Array<DynamicImport>;
  /** Span positions` of `import.meta` */
  importMetas: Array<Span>;
}
interface ExportExportName {
  kind: ExportExportNameKind;
  name: string | null;
  start: number | null;
  end: number | null;
}
type ExportExportNameKind = /** `export { name } */'Name' | /** `export default expression` */'Default' | /** `export * from "mod" */'None';
interface ExportImportName {
  kind: ExportImportNameKind;
  name: string | null;
  start: number | null;
  end: number | null;
}
type ExportImportNameKind = /** `export { name } */'Name' | /** `export * as ns from "mod"` */'All' | /** `export * from "mod"` */'AllButDefault' | /** Does not have a specifier. */'None';
interface ExportLocalName {
  kind: ExportLocalNameKind;
  name: string | null;
  start: number | null;
  end: number | null;
}
type ExportLocalNameKind = /** `export { name } */'Name' | /** `export default expression` */'Default' |
/**
 * If the exported value is not locally accessible from within the module.
 * `export default function () {}`
 */
'None';
interface ImportName {
  kind: ImportNameKind;
  name: string | null;
  start: number | null;
  end: number | null;
}
type ImportNameKind = /** `import { x } from "mod"` */'Name' | /** `import * as ns from "mod"` */'NamespaceObject' | /** `import defaultExport from "mod"` */'Default';
interface ParserOptions {
  /** Treat the source text as `js`, `jsx`, `ts`, `tsx` or `dts`. */
  lang?: 'js' | 'jsx' | 'ts' | 'tsx' | 'dts';
  /** Treat the source text as `script` or `module` code. */
  sourceType?: 'script' | 'module' | 'commonjs' | 'unambiguous' | undefined;
  /**
   * Return an AST which includes TypeScript-related properties, or excludes them.
   *
   * `'js'` is default for JS / JSX files.
   * `'ts'` is default for TS / TSX files.
   * The type of the file is determined from `lang` option, or extension of provided `filename`.
   */
  astType?: 'js' | 'ts';
  /**
   * Controls whether the `range` property is included on AST nodes.
   * The `range` property is a `[number, number]` which indicates the start/end offsets
   * of the node in the file contents.
   *
   * @default false
   */
  range?: boolean;
  /**
   * Emit `ParenthesizedExpression` and `TSParenthesizedType` in AST.
   *
   * If this option is true, parenthesized expressions are represented by
   * (non-standard) `ParenthesizedExpression` and `TSParenthesizedType` nodes that
   * have a single `expression` property containing the expression inside parentheses.
   *
   * @default true
   */
  preserveParens?: boolean;
  /**
   * Produce semantic errors with an additional AST pass.
   * Semantic errors depend on symbols and scopes, where the parser does not construct.
   * This adds a small performance overhead.
   *
   * @default false
   */
  showSemanticErrors?: boolean;
}
interface Span {
  start: number;
  end: number;
}
interface StaticExport {
  start: number;
  end: number;
  entries: Array<StaticExportEntry>;
}
interface StaticExportEntry {
  start: number;
  end: number;
  moduleRequest: ValueSpan | null;
  /** The name under which the desired binding is exported by the module`. */
  importName: ExportImportName;
  /** The name used to export this binding by this module. */
  exportName: ExportExportName;
  /** The name that is used to locally access the exported value from within the importing module. */
  localName: ExportLocalName;
  /**
   * Whether the export is a TypeScript `export type`.
   *
   * Examples:
   *
   * ```ts
   * export type * from 'mod';
   * export type * as ns from 'mod';
   * export type { foo };
   * export { type foo }:
   * export type { foo } from 'mod';
   * ```
   */
  isType: boolean;
}
interface StaticImport {
  /** Start of import statement. */
  start: number;
  /** End of import statement. */
  end: number;
  /**
   * Import source.
   *
   * ```js
   * import { foo } from "mod";
   * //                   ^^^
   * ```
   */
  moduleRequest: ValueSpan;
  /**
   * Import specifiers.
   *
   * Empty for `import "mod"`.
   */
  entries: Array<StaticImportEntry>;
}
interface StaticImportEntry {
  /**
   * The name under which the desired binding is exported by the module.
   *
   * ```js
   * import { foo } from "mod";
   * //       ^^^
   * import { foo as bar } from "mod";
   * //       ^^^
   * ```
   */
  importName: ImportName;
  /**
   * The name that is used to locally access the imported value from within the importing module.
   * ```js
   * import { foo } from "mod";
   * //       ^^^
   * import { foo as bar } from "mod";
   * //              ^^^
   * ```
   */
  localName: ValueSpan;
  /**
   * Whether this binding is for a TypeScript type-only import.
   *
   * `true` for the following imports:
   * ```ts
   * import type { foo } from "mod";
   * import { type foo } from "mod";
   * ```
   */
  isType: boolean;
}
interface ValueSpan {
  value: string;
  start: number;
  end: number;
}
declare class ResolverFactory {
  constructor(options?: NapiResolveOptions | undefined | null);
  static default(): ResolverFactory;
  /** Clone the resolver using the same underlying cache. */
  cloneWithOptions(options: NapiResolveOptions): ResolverFactory;
  /**
   * Clear the underlying cache.
   *
   * Warning: The caller must ensure that there're no ongoing resolution operations when calling this method. Otherwise, it may cause those operations to return an incorrect result.
   */
  clearCache(): void;
  /** Synchronously resolve `specifier` at an absolute path to a `directory`. */
  sync(directory: string, request: string): ResolveResult;
  /** Asynchronously resolve `specifier` at an absolute path to a `directory`. */
  async(directory: string, request: string): Promise<ResolveResult>;
  /**
   * Synchronously resolve `specifier` at an absolute path to a `file`.
   *
   * This method automatically discovers tsconfig.json by traversing parent directories.
   */
  resolveFileSync(file: string, request: string): ResolveResult;
  /**
   * Asynchronously resolve `specifier` at an absolute path to a `file`.
   *
   * This method automatically discovers tsconfig.json by traversing parent directories.
   */
  resolveFileAsync(file: string, request: string): Promise<ResolveResult>;
  /**
   * Synchronously resolve `specifier` for TypeScript declaration files.
   *
   * `file` is the absolute path to the containing file.
   * Uses TypeScript's `moduleResolution: "bundler"` algorithm.
   */
  resolveDtsSync(file: string, request: string): ResolveResult;
  /**
   * Asynchronously resolve `specifier` for TypeScript declaration files.
   *
   * `file` is the absolute path to the containing file.
   * Uses TypeScript's `moduleResolution: "bundler"` algorithm.
   */
  resolveDtsAsync(file: string, request: string): Promise<ResolveResult>;
}
/** Node.js builtin module when `Options::builtin_modules` is enabled. */
interface Builtin {
  /**
   * Resolved module.
   *
   * Always prefixed with "node:" in compliance with the ESM specification.
   */
  resolved: string;
  /**
   * Whether the request was prefixed with `node:` or not.
   * `fs` -> `false`.
   * `node:fs` returns `true`.
   */
  isRuntimeModule: boolean;
}
declare enum EnforceExtension {
  Auto = 0,
  Enabled = 1,
  Disabled = 2
}
type ModuleType = 'module' | 'commonjs' | 'json' | 'wasm' | 'addon';
/**
 * Module Resolution Options
 *
 * Options are directly ported from [enhanced-resolve](https://github.com/webpack/enhanced-resolve#resolver-options).
 *
 * See [webpack resolve](https://webpack.js.org/configuration/resolve/) for information and examples
 */
interface NapiResolveOptions {
  /**
   * Discover tsconfig automatically or use the specified tsconfig.json path.
   *
   * Default `None`
   */
  tsconfig?: 'auto' | TsconfigOptions;
  /**
   * Alias for [ResolveOptions::alias] and [ResolveOptions::fallback].
   *
   * For the second value of the tuple, `None -> AliasValue::Ignore`, Some(String) ->
   * AliasValue::Path(String)`
   * Create aliases to import or require certain modules more easily.
   * A trailing $ can also be added to the given object's keys to signify an exact match.
   * Default `{}`
   */
  alias?: Record<string, Array<string | undefined | null>>;
  /**
   * A list of alias fields in description files.
   * Specify a field, such as `browser`, to be parsed according to [this specification](https://github.com/defunctzombie/package-browser-field-spec).
   * Can be a path to json object such as `["path", "to", "exports"]`.
   *
   * Default `[]`
   */
  aliasFields?: (string | string[])[];
  /**
   * Condition names for exports field which defines entry points of a package.
   * The key order in the exports field is significant. During condition matching, earlier entries have higher priority and take precedence over later entries.
   *
   * Default `[]`
   */
  conditionNames?: Array<string>;
  /**
   * If true, it will not allow extension-less files.
   * So by default `require('./foo')` works if `./foo` has a `.js` extension,
   * but with this enabled only `require('./foo.js')` will work.
   *
   * Default to `true` when [ResolveOptions::extensions] contains an empty string.
   * Use `Some(false)` to disable the behavior.
   * See <https://github.com/webpack/enhanced-resolve/pull/285>
   *
   * Default None, which is the same as `Some(false)` when the above empty rule is not applied.
   */
  enforceExtension?: EnforceExtension;
  /**
   * A list of exports fields in description files.
   * Can be a path to json object such as `["path", "to", "exports"]`.
   *
   * Default `[["exports"]]`.
   */
  exportsFields?: (string | string[])[];
  /**
   * Fields from `package.json` which are used to provide the internal requests of a package
   * (requests starting with # are considered internal).
   *
   * Can be a path to a JSON object such as `["path", "to", "imports"]`.
   *
   * Default `[["imports"]]`.
   */
  importsFields?: (string | string[])[];
  /**
   * An object which maps extension to extension aliases.
   *
   * Default `{}`
   */
  extensionAlias?: Record<string, Array<string>>;
  /**
   * Attempt to resolve these extensions in order.
   * If multiple files share the same name but have different extensions,
   * will resolve the one with the extension listed first in the array and skip the rest.
   *
   * Default `[".js", ".json", ".node"]`
   */
  extensions?: Array<string>;
  /**
   * Redirect module requests when normal resolving fails.
   *
   * Default `{}`
   */
  fallback?: Record<string, Array<string | undefined | null>>;
  /**
   * Request passed to resolve is already fully specified and extensions or main files are not resolved for it (they are still resolved for internal requests).
   *
   * See also webpack configuration [resolve.fullySpecified](https://webpack.js.org/configuration/module/#resolvefullyspecified)
   *
   * Default `false`
   */
  fullySpecified?: boolean;
  /**
   * A list of main fields in description files
   *
   * Default `["main"]`.
   */
  mainFields?: string | string[];
  /**
   * The filename to be used while resolving directories.
   *
   * Default `["index"]`
   */
  mainFiles?: Array<string>;
  /**
   * A list of directories to resolve modules from, can be absolute path or folder name.
   *
   * Default `["node_modules"]`
   */
  modules?: string | string[];
  /**
   * Resolve to a context instead of a file.
   *
   * Default `false`
   */
  resolveToContext?: boolean;
  /**
   * Prefer to resolve module requests as relative requests instead of using modules from node_modules directories.
   *
   * Default `false`
   */
  preferRelative?: boolean;
  /**
   * Prefer to resolve server-relative urls as absolute paths before falling back to resolve in ResolveOptions::roots.
   *
   * Default `false`
   */
  preferAbsolute?: boolean;
  /**
   * A list of resolve restrictions to restrict the paths that a request can be resolved on.
   *
   * Default `[]`
   */
  restrictions?: Array<Restriction>;
  /**
   * A list of directories where requests of server-relative URLs (starting with '/') are resolved.
   * On non-Windows systems these requests are resolved as an absolute path first.
   *
   * Default `[]`
   */
  roots?: Array<string>;
  /**
   * Whether to resolve symlinks to their symlinked location.
   * When enabled, symlinked resources are resolved to their real path, not their symlinked location.
   * Note that this may cause module resolution to fail when using tools that symlink packages (like npm link).
   *
   * Default `true`
   */
  symlinks?: boolean;
  /**
   * Whether to read the `NODE_PATH` environment variable and append its entries to `modules`.
   *
   * `NODE_PATH` is a deprecated Node.js feature that is not part of ESM resolution.
   * Set this to `false` to disable the behavior.
   *
   * Default `true`
   */
  nodePath?: boolean;
  /**
   * Whether to parse [module.builtinModules](https://nodejs.org/api/module.html#modulebuiltinmodules) or not.
   * For example, "zlib" will throw [crate::ResolveError::Builtin] when set to true.
   *
   * Default `false`
   */
  builtinModules?: boolean;
  /**
   * Resolve [ResolveResult::moduleType].
   *
   * Default `false`
   */
  moduleType?: boolean;
  /**
   * Allow `exports` field in `require('../directory')`.
   *
   * This is not part of the spec but some vite projects rely on this behavior.
   * See
   * * <https://github.com/vitejs/vite/pull/20252>
   * * <https://github.com/nodejs/node/issues/58827>
   *
   * Default: `false`
   */
  allowPackageExportsInDirectoryResolve?: boolean;
}
interface ResolveResult {
  path?: string;
  error?: string;
  builtin?: Builtin;
  /**
   * Module type for this path.
   *
   * Enable with `ResolveOptions#moduleType`.
   *
   * The module type is computed `ESM_FILE_FORMAT` from the [ESM resolution algorithm specification](https://nodejs.org/docs/latest/api/esm.html#resolution-algorithm-specification).
   *
   *  The algorithm uses the file extension or finds the closest `package.json` with the `type` field.
   */
  moduleType?: ModuleType;
  /** `package.json` path for the given module. */
  packageJsonPath?: string;
}
/**
 * Alias Value for [ResolveOptions::alias] and [ResolveOptions::fallback].
 * Use struct because napi don't support structured union now
 */
interface Restriction {
  path?: string;
  regex?: string;
}
/**
 * Tsconfig Options
 *
 * Derived from [tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin#options)
 */
interface TsconfigOptions {
  /**
   * Allows you to specify where to find the TypeScript configuration file.
   * You may provide
   * * a relative path to the configuration file. It will be resolved relative to cwd.
   * * an absolute path to the configuration file.
   */
  configFile: string;
  /**
   * Support for Typescript Project References.
   *
   * * `'auto'`: use the `references` field from tsconfig of `config_file`.
   */
  references?: 'auto';
}
interface SourceMap {
  file?: string;
  mappings: string;
  names: Array<string>;
  sourceRoot?: string;
  sources: Array<string>;
  sourcesContent?: Array<string>;
  version: number;
  x_google_ignoreList?: Array<number>;
}
interface CompilerAssumptions {
  ignoreFunctionLength?: boolean;
  noDocumentAll?: boolean;
  objectRestNoSymbols?: boolean;
  pureGetters?: boolean;
  /**
   * When using public class fields, assume that they don't shadow any getter in the current class,
   * in its subclasses or in its superclass. Thus, it's safe to assign them rather than using
   * `Object.defineProperty`.
   *
   * For example:
   *
   * Input:
   * ```js
   * class Test {
   *  field = 2;
   *
   *  static staticField = 3;
   * }
   * ```
   *
   * When `set_public_class_fields` is `true`, the output will be:
   * ```js
   * class Test {
   *  constructor() {
   *    this.field = 2;
   *  }
   * }
   * Test.staticField = 3;
   * ```
   *
   * Otherwise, the output will be:
   * ```js
   * import _defineProperty from "@oxc-project/runtime/helpers/defineProperty";
   * class Test {
   *   constructor() {
   *     _defineProperty(this, "field", 2);
   *   }
   * }
   * _defineProperty(Test, "staticField", 3);
   * ```
   *
   * NOTE: For TypeScript, if you wanted behavior is equivalent to `useDefineForClassFields: false`, you should
   * set both `set_public_class_fields` and [`crate::TypeScriptOptions::remove_class_fields_without_initializer`]
   * to `true`.
   */
  setPublicClassFields?: boolean;
}
interface DecoratorOptions {
  /**
   * Enables experimental support for decorators, which is a version of decorators that predates the TC39 standardization process.
   *
   * Decorators are a language feature which hasn’t yet been fully ratified into the JavaScript specification.
   * This means that the implementation version in TypeScript may differ from the implementation in JavaScript when it it decided by TC39.
   *
   * @see https://www.typescriptlang.org/tsconfig/#experimentalDecorators
   * @default false
   */
  legacy?: boolean;
  /**
   * Enables emitting decorator metadata.
   *
   * This option the same as [emitDecoratorMetadata](https://www.typescriptlang.org/tsconfig/#emitDecoratorMetadata)
   * in TypeScript, and it only works when `legacy` is true.
   *
   * @see https://www.typescriptlang.org/tsconfig/#emitDecoratorMetadata
   * @default false
   */
  emitDecoratorMetadata?: boolean;
}
type HelperMode =
/**
* Runtime mode (default): Helper functions are imported from a runtime package.
*
* Example:
*
* ```js
* import helperName from "@oxc-project/runtime/helpers/helperName";
* helperName(...arguments);
* ```
*/
'Runtime' |
/**
 * External mode: Helper functions are accessed from a global `babelHelpers` object.
 *
 * Example:
 *
 * ```js
 * babelHelpers.helperName(...arguments);
 * ```
 */
'External';
interface Helpers {
  mode?: HelperMode;
}
/**
 * TypeScript Isolated Declarations for Standalone DTS Emit (async)
 *
 * Note: This function can be slower than `isolatedDeclarationSync` due to the overhead of spawning a thread.
 */
declare function isolatedDeclaration(filename: string, sourceText: string, options?: IsolatedDeclarationsOptions | undefined | null): Promise<IsolatedDeclarationsResult>;
interface IsolatedDeclarationsOptions {
  /**
   * Do not emit declarations for code that has an @internal annotation in its JSDoc comment.
   * This is an internal compiler option; use at your own risk, because the compiler does not check that the result is valid.
   *
   * Default: `false`
   *
   * See <https://www.typescriptlang.org/tsconfig/#stripInternal>
   */
  stripInternal?: boolean;
  sourcemap?: boolean;
}
interface IsolatedDeclarationsResult {
  code: string;
  map?: SourceMap;
  errors: Array<OxcError>;
}
/** TypeScript Isolated Declarations for Standalone DTS Emit */
declare function isolatedDeclarationSync(filename: string, sourceText: string, options?: IsolatedDeclarationsOptions | undefined | null): IsolatedDeclarationsResult;
/**
 * Configure how TSX and JSX are transformed.
 *
 * @see {@link https://oxc.rs/docs/guide/usage/transformer/jsx}
 */
interface JsxOptions {
  /**
   * Decides which runtime to use.
   *
   * - 'automatic' - auto-import the correct JSX factories
   * - 'classic' - no auto-import
   *
   * @default 'automatic'
   */
  runtime?: 'classic' | 'automatic';
  /**
   * Emit development-specific information, such as `__source` and `__self`.
   *
   * @default false
   */
  development?: boolean;
  /**
   * Toggles whether or not to throw an error if an XML namespaced tag name
   * is used.
   *
   * Though the JSX spec allows this, it is disabled by default since React's
   * JSX does not currently have support for it.
   *
   * @default true
   */
  throwIfNamespace?: boolean;
  /**
   * Mark JSX elements and top-level React method calls as pure for tree shaking.
   *
   * @default true
   */
  pure?: boolean;
  /**
   * Replaces the import source when importing functions.
   *
   * @default 'react'
   */
  importSource?: string;
  /**
   * Replace the function used when compiling JSX expressions. It should be a
   * qualified name (e.g. `React.createElement`) or an identifier (e.g.
   * `createElement`).
   *
   * Only used for `classic` {@link runtime}.
   *
   * @default 'React.createElement'
   */
  pragma?: string;
  /**
   * Replace the component used when compiling JSX fragments. It should be a
   * valid JSX tag name.
   *
   * Only used for `classic` {@link runtime}.
   *
   * @default 'React.Fragment'
   */
  pragmaFrag?: string;
  /**
   * Enable React Fast Refresh .
   *
   * Conforms to the implementation in {@link https://github.com/facebook/react/tree/v18.3.1/packages/react-refresh}
   *
   * @default false
   */
  refresh?: boolean | ReactRefreshOptions;
}
/**
 * Transform JavaScript code to a Vite Node runnable module.
 *
 * @param filename The name of the file being transformed.
 * @param sourceText the source code itself
 * @param options The options for the transformation. See {@link
 * ModuleRunnerTransformOptions} for more information.
 *
 * @returns an object containing the transformed code, source maps, and any
 * errors that occurred during parsing or transformation.
 *
 * Note: This function can be slower than `moduleRunnerTransformSync` due to the overhead of spawning a thread.
 *
 * @deprecated Only works for Vite.
 */
declare function moduleRunnerTransform(filename: string, sourceText: string, options?: ModuleRunnerTransformOptions | undefined | null): Promise<ModuleRunnerTransformResult>;
interface ModuleRunnerTransformOptions {
  /**
   * Enable source map generation.
   *
   * When `true`, the `sourceMap` field of transform result objects will be populated.
   *
   * @default false
   *
   * @see {@link SourceMap}
   */
  sourcemap?: boolean;
}
interface ModuleRunnerTransformResult {
  /**
   * The transformed code.
   *
   * If parsing failed, this will be an empty string.
   */
  code: string;
  /**
   * The source map for the transformed code.
   *
   * This will be set if {@link TransformOptions#sourcemap} is `true`.
   */
  map?: SourceMap;
  deps: Array<string>;
  dynamicDeps: Array<string>;
  /**
   * Parse and transformation errors.
   *
   * Oxc's parser recovers from common syntax errors, meaning that
   * transformed code may still be available even if there are errors in this
   * list.
   */
  errors: Array<OxcError>;
}
interface PluginsOptions {
  styledComponents?: StyledComponentsOptions;
  taggedTemplateEscape?: boolean;
}
interface ReactRefreshOptions {
  /**
   * Specify the identifier of the refresh registration variable.
   *
   * @default `$RefreshReg$`.
   */
  refreshReg?: string;
  /**
   * Specify the identifier of the refresh signature variable.
   *
   * @default `$RefreshSig$`.
   */
  refreshSig?: string;
  emitFullSignatures?: boolean;
}
/**
 * Configure how styled-components are transformed.
 *
 * @see {@link https://oxc.rs/docs/guide/usage/transformer/plugins#styled-components}
 */
interface StyledComponentsOptions {
  /**
   * Enhances the attached CSS class name on each component with richer output to help
   * identify your components in the DOM without React DevTools.
   *
   * @default true
   */
  displayName?: boolean;
  /**
   * Controls whether the `displayName` of a component will be prefixed with the filename
   * to make the component name as unique as possible.
   *
   * @default true
   */
  fileName?: boolean;
  /**
   * Adds a unique identifier to every styled component to avoid checksum mismatches
   * due to different class generation on the client and server during server-side rendering.
   *
   * @default true
   */
  ssr?: boolean;
  /**
   * Transpiles styled-components tagged template literals to a smaller representation
   * than what Babel normally creates, helping to reduce bundle size.
   *
   * @default true
   */
  transpileTemplateLiterals?: boolean;
  /**
   * Minifies CSS content by removing all whitespace and comments from your CSS,
   * keeping valuable bytes out of your bundles.
   *
   * @default true
   */
  minify?: boolean;
  /**
   * Enables transformation of JSX `css` prop when using styled-components.
   *
   * **Note: This feature is not yet implemented in oxc.**
   *
   * @default true
   */
  cssProp?: boolean;
  /**
   * Enables "pure annotation" to aid dead code elimination by bundlers.
   *
   * @default false
   */
  pure?: boolean;
  /**
   * Adds a namespace prefix to component identifiers to ensure class names are unique.
   *
   * Example: With `namespace: "my-app"`, generates `componentId: "my-app__sc-3rfj0a-1"`
   */
  namespace?: string;
  /**
   * List of file names that are considered meaningless for component naming purposes.
   *
   * When the `fileName` option is enabled and a component is in a file with a name
   * from this list, the directory name will be used instead of the file name for
   * the component's display name.
   *
   * @default `["index"]`
   */
  meaninglessFileNames?: Array<string>;
  /**
   * Import paths to be considered as styled-components imports at the top level.
   *
   * **Note: This feature is not yet implemented in oxc.**
   */
  topLevelImportPaths?: Array<string>;
}
/**
 * Options for transforming a JavaScript or TypeScript file.
 *
 * @see {@link transform}
 */
interface TransformOptions {
  /** Treat the source text as `js`, `jsx`, `ts`, `tsx`, or `dts`. */
  lang?: 'js' | 'jsx' | 'ts' | 'tsx' | 'dts';
  /** Treat the source text as `script` or `module` code. */
  sourceType?: 'script' | 'module' | 'commonjs' | 'unambiguous' | undefined;
  /**
   * The current working directory. Used to resolve relative paths in other
   * options.
   */
  cwd?: string;
  /**
   * Enable source map generation.
   *
   * When `true`, the `sourceMap` field of transform result objects will be populated.
   *
   * @default false
   *
   * @see {@link SourceMap}
   */
  sourcemap?: boolean;
  /** Set assumptions in order to produce smaller output. */
  assumptions?: CompilerAssumptions;
  /**
   * Configure how TypeScript is transformed.
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/typescript}
   */
  typescript?: TypeScriptOptions;
  /**
   * Configure how TSX and JSX are transformed.
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/jsx}
   */
  jsx?: 'preserve' | JsxOptions;
  /**
   * Sets the target environment for the generated JavaScript.
   *
   * The lowest target is `es2015`.
   *
   * Example:
   *
   * * `'es2015'`
   * * `['es2020', 'chrome58', 'edge16', 'firefox57', 'node12', 'safari11']`
   *
   * @default `esnext` (No transformation)
   *
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/lowering#target}
   */
  target?: string | Array<string>;
  /** Behaviour for runtime helpers. */
  helpers?: Helpers;
  /**
   * Define Plugin
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/global-variable-replacement#define}
   */
  define?: Record<string, string>;
  /**
   * Inject Plugin
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/global-variable-replacement#inject}
   */
  inject?: Record<string, string | [string, string]>;
  /** Decorator plugin */
  decorator?: DecoratorOptions;
  /**
   * Third-party plugins to use.
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/plugins}
   */
  plugins?: PluginsOptions;
}
interface TypeScriptOptions {
  jsxPragma?: string;
  jsxPragmaFrag?: string;
  onlyRemoveTypeImports?: boolean;
  allowNamespaces?: boolean;
  /**
   * When enabled, type-only class fields are only removed if they are prefixed with the declare modifier:
   *
   * @deprecated
   *
   * Allowing `declare` fields is built-in support in Oxc without any option. If you want to remove class fields
   * without initializer, you can use `remove_class_fields_without_initializer: true` instead.
   */
  allowDeclareFields?: boolean;
  /**
   * When enabled, class fields without initializers are removed.
   *
   * For example:
   * ```ts
   * class Foo {
   *    x: number;
   *    y: number = 0;
   * }
   * ```
   * // transform into
   * ```js
   * class Foo {
   *    x: number;
   * }
   * ```
   *
   * The option is used to align with the behavior of TypeScript's `useDefineForClassFields: false` option.
   * When you want to enable this, you also need to set [`crate::CompilerAssumptions::set_public_class_fields`]
   * to `true`. The `set_public_class_fields: true` + `remove_class_fields_without_initializer: true` is
   * equivalent to `useDefineForClassFields: false` in TypeScript.
   *
   * When `set_public_class_fields` is true and class-properties plugin is enabled, the above example transforms into:
   *
   * ```js
   * class Foo {
   *   constructor() {
   *     this.y = 0;
   *   }
   * }
   * ```
   *
   * Defaults to `false`.
   */
  removeClassFieldsWithoutInitializer?: boolean;
  /**
   * When true, optimize const enums by inlining their values at usage sites
   * and removing the enum declaration.
   *
   * @default false
   */
  optimizeConstEnums?: boolean;
  /**
   * When true, optimize regular (non-const) enums by inlining their member
   * accesses at usage sites when the member value is statically known.
   *
   * Non-exported enum declarations are also removed when all members are
   * evaluable and no references to the enum as a runtime value exist
   * (e.g., `console.log(Foo)`, `typeof Foo`, or passing the enum as an argument).
   *
   * @default false
   */
  optimizeEnums?: boolean;
  /**
   * Also generate a `.d.ts` declaration file for TypeScript files.
   *
   * The source file must be compliant with all
   * [`isolatedDeclarations`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#isolated-declarations)
   * requirements.
   *
   * @default false
   */
  declaration?: IsolatedDeclarationsOptions;
  /**
   * Rewrite or remove TypeScript import/export declaration extensions.
   *
   * - When set to `rewrite`, it will change `.ts`, `.mts`, `.cts` extensions to `.js`, `.mjs`, `.cjs` respectively.
   * - When set to `remove`, it will remove `.ts`/`.mts`/`.cts`/`.tsx` extension entirely.
   * - When set to `true`, it's equivalent to `rewrite`.
   * - When set to `false` or omitted, no changes will be made to the extensions.
   *
   * @default false
   */
  rewriteImportExtensions?: 'rewrite' | 'remove' | boolean;
}
/** A decoded source map with mappings as an array of arrays instead of VLQ-encoded string. */
declare class BindingDecodedMap {
  /** The source map version (always 3). */
  get version(): number;
  /** The generated file name. */
  get file(): string | null;
  /** The list of original source files. */
  get sources(): Array<string>;
  /** The original source contents (if `includeContent` was true). */
  get sourcesContent(): Array<string | undefined | null>;
  /** The list of symbol names used in mappings. */
  get names(): Array<string>;
  /**
   * The decoded mappings as an array of line arrays.
   * Each line is an array of segments, where each segment is [generatedColumn, sourceIndex, originalLine, originalColumn, nameIndex?].
   */
  get mappings(): Array<Array<Array<number>>>;
  /** The list of source indices that should be excluded from debugging. */
  get x_google_ignoreList(): Array<number> | null;
}
declare class BindingMagicString {
  constructor(source: string, options?: BindingMagicStringOptions | undefined | null);
  get original(): string;
  get filename(): string | null;
  get indentExclusionRanges(): Array<Array<number>> | Array<number> | null;
  get ignoreList(): boolean;
  get offset(): number;
  set offset(offset: number);
  replace(from: string, to: string): this;
  replaceAll(from: string, to: string): this;
  /**
   * Returns the UTF-16 offset past the last match, or -1 if no match was found.
   * The JS wrapper uses this to update `lastIndex` on the caller's RegExp.
   * Global/sticky behavior is derived from the regex's own flags.
   */
  replaceRegex(from: RegExp, to: string): number;
  prepend(content: string): this;
  append(content: string): this;
  prependLeft(index: number, content: string): this;
  prependRight(index: number, content: string): this;
  appendLeft(index: number, content: string): this;
  appendRight(index: number, content: string): this;
  overwrite(start: number, end: number, content: string, options?: BindingOverwriteOptions | undefined | null): this;
  toString(): string;
  hasChanged(): boolean;
  length(): number;
  isEmpty(): boolean;
  remove(start: number, end: number): this;
  update(start: number, end: number, content: string, options?: BindingUpdateOptions | undefined | null): this;
  relocate(start: number, end: number, to: number): this;
  /**
   * Alias for `relocate` to match the original magic-string API.
   * Moves the characters from `start` to `end` to `index`.
   * Returns `this` for method chaining.
   */
  move(start: number, end: number, index: number): this;
  indent(indentor?: string | undefined | null, options?: BindingIndentOptions | undefined | null): this;
  /** Trims whitespace or specified characters from the start and end. */
  trim(charType?: string | undefined | null): this;
  /** Trims whitespace or specified characters from the start. */
  trimStart(charType?: string | undefined | null): this;
  /** Trims whitespace or specified characters from the end. */
  trimEnd(charType?: string | undefined | null): this;
  /** Trims newlines from the start and end. */
  trimLines(): this;
  /**
   * Deprecated method that throws an error directing users to use prependRight or appendLeft.
   * This matches the original magic-string API which deprecated this method.
   */
  insert(index: number, content: string): void;
  /** Returns a clone of the MagicString instance. */
  clone(): BindingMagicString;
  /** Returns the last character of the generated string, or an empty string if empty. */
  lastChar(): string;
  /** Returns the content after the last newline in the generated string. */
  lastLine(): string;
  /** Returns the guessed indentation string, or `\t` if none is found. */
  getIndentString(): string;
  /** Returns a clone with content outside the specified range removed. */
  snip(start: number, end: number): BindingMagicString;
  /**
   * Resets the portion of the string from `start` to `end` to its original content.
   * This undoes any modifications made to that range.
   * Supports negative indices (counting from the end).
   */
  reset(start: number, end: number): this;
  /**
   * Returns the content between the specified UTF-16 code unit positions (JS string indices).
   * Supports negative indices (counting from the end).
   *
   * When an index falls in the middle of a surrogate pair, the lone surrogate is
   * included in the result (matching the original magic-string / JS behavior).
   * This is done by returning a UTF-16 encoded JS string via `napi_create_string_utf16`.
   */
  slice(start?: number | undefined | null, end?: number | undefined | null): string;
  /**
   * Generates a source map for the transformations applied to this MagicString.
   * Returns a BindingSourceMap object with version, file, sources, sourcesContent, names, mappings.
   */
  generateMap(options?: BindingSourceMapOptions | undefined | null): BindingSourceMap;
  /**
   * Generates a decoded source map for the transformations applied to this MagicString.
   * Returns a BindingDecodedMap object with mappings as an array of arrays.
   */
  generateDecodedMap(options?: BindingSourceMapOptions | undefined | null): BindingDecodedMap;
}
declare class BindingNormalizedOptions {
  get input(): Array<string> | Record<string, string>;
  get cwd(): string;
  get platform(): 'node' | 'browser' | 'neutral';
  get shimMissingExports(): boolean;
  get name(): string | null;
  get entryFilenames(): string | undefined;
  get chunkFilenames(): string | undefined;
  get assetFilenames(): string | undefined;
  get dir(): string | null;
  get file(): string | null;
  get format(): 'es' | 'cjs' | 'iife' | 'umd';
  get exports(): 'default' | 'named' | 'none' | 'auto';
  get esModule(): boolean | 'if-default-prop';
  get codeSplitting(): boolean;
  get dynamicImportInCjs(): boolean;
  get sourcemap(): boolean | 'inline' | 'hidden';
  get sourcemapBaseUrl(): string | null;
  get banner(): string | undefined | null | undefined;
  get footer(): string | undefined | null | undefined;
  get intro(): string | undefined | null | undefined;
  get outro(): string | undefined | null | undefined;
  get postBanner(): string | undefined | null | undefined;
  get postFooter(): string | undefined | null | undefined;
  get externalLiveBindings(): boolean;
  get extend(): boolean;
  get globals(): Record<string, string> | undefined;
  get hashCharacters(): 'base64' | 'base36' | 'hex';
  get sourcemapDebugIds(): boolean;
  get sourcemapExcludeSources(): boolean;
  get polyfillRequire(): boolean;
  get minify(): false | 'dce-only' | MinifyOptions;
  get legalComments(): 'none' | 'inline';
  get comments(): BindingCommentsOptions;
  get preserveModules(): boolean;
  get preserveModulesRoot(): string | undefined;
  get virtualDirname(): string;
  get topLevelVar(): boolean;
  get minifyInternalExports(): boolean;
  get context(): string;
}
declare class BindingRenderedChunk {
  get name(): string;
  get isEntry(): boolean;
  get isDynamicEntry(): boolean;
  get facadeModuleId(): string | null;
  get moduleIds(): Array<string>;
  get exports(): Array<string>;
  get fileName(): string;
  get modules(): BindingModules;
  get imports(): Array<string>;
  get dynamicImports(): Array<string>;
}
declare class BindingRenderedModule {
  get code(): string | null;
  get renderedExports(): Array<string>;
}
/** A source map object with properties matching the SourceMap V3 specification. */
declare class BindingSourceMap {
  /** The source map version (always 3). */
  get version(): number;
  /** The generated file name. */
  get file(): string | null;
  /** The list of original source files. */
  get sources(): Array<string>;
  /** The original source contents (if `includeContent` was true). */
  get sourcesContent(): Array<string | undefined | null>;
  /** The list of symbol names used in mappings. */
  get names(): Array<string>;
  /** The VLQ-encoded mappings string. */
  get mappings(): string;
  /** The list of source indices that should be excluded from debugging. */
  get x_google_ignoreList(): Array<number> | null;
  /** Returns the source map as a JSON string. */
  toString(): string;
  /** Returns the source map as a base64-encoded data URL. */
  toUrl(): string;
}
/**
 * Minimal wrapper around a `BundleHandle` for watcher events.
 * This is returned from watcher event data to allow calling `result.close()`.
 */
declare class BindingWatcherBundler {
  close(): Promise<void>;
}
declare class TsconfigCache {
  /** Create a new transform cache with auto tsconfig discovery enabled. */
  constructor(yarnPnp: boolean);
  /**
   * Clear the cache.
   *
   * Call this when tsconfig files have changed to ensure fresh resolution.
   */
  clear(): void;
  /** Get the number of cached entries. */
  size(): number;
}
type BindingBuiltinPluginName = 'builtin:bundle-analyzer' | 'builtin:esm-external-require' | 'builtin:isolated-declaration' | 'builtin:replace' | 'builtin:vite-alias' | 'builtin:vite-build-import-analysis' | 'builtin:vite-dynamic-import-vars' | 'builtin:vite-import-glob' | 'builtin:vite-json' | 'builtin:vite-load-fallback' | 'builtin:vite-manifest' | 'builtin:vite-module-preload-polyfill' | 'builtin:vite-react-refresh-wrapper' | 'builtin:vite-reporter' | 'builtin:vite-resolve' | 'builtin:vite-transform' | 'builtin:vite-wasm-fallback' | 'builtin:vite-web-worker-post' | 'builtin:oxc-runtime';
interface BindingBundleAnalyzerPluginConfig {
  /** Output filename for the bundle analysis data (default: "analyze-data.json") */
  fileName?: string;
  /** Output format: "json" (default) or "md" for LLM-friendly markdown */
  format?: 'json' | 'md';
}
interface BindingBundleState {
  lastFullBuildFailed: boolean;
  hasStaleOutput: boolean;
}
interface BindingClientHmrUpdate {
  clientId: string;
  update: BindingHmrUpdate;
}
interface BindingCommentsOptions {
  legal?: boolean;
  annotation?: boolean;
  jsdoc?: boolean;
}
interface BindingCompilerOptions {
  baseUrl?: string;
  paths?: Record<string, Array<string>>;
  experimentalDecorators?: boolean;
  emitDecoratorMetadata?: boolean;
  useDefineForClassFields?: boolean;
  rewriteRelativeImportExtensions?: boolean;
  jsx?: string;
  jsxFactory?: string;
  jsxFragmentFactory?: string;
  jsxImportSource?: string;
  verbatimModuleSyntax?: boolean;
  preserveValueImports?: boolean;
  importsNotUsedAsValues?: string;
  target?: string;
  module?: string;
  allowJs?: boolean;
  rootDirs?: Array<string>;
}
/** Enhanced transform options with tsconfig and inputMap support. */
interface BindingEnhancedTransformOptions {
  /** Treat the source text as 'js', 'jsx', 'ts', 'tsx', or 'dts'. */
  lang?: 'js' | 'jsx' | 'ts' | 'tsx' | 'dts';
  /** Treat the source text as 'script', 'module', 'commonjs', or 'unambiguous'. */
  sourceType?: 'script' | 'module' | 'commonjs' | 'unambiguous' | undefined;
  /**
   * The current working directory. Used to resolve relative paths in other
   * options.
   */
  cwd?: string;
  /**
   * Enable source map generation.
   *
   * When `true`, the `sourceMap` field of transform result objects will be populated.
   *
   * @default false
   */
  sourcemap?: boolean;
  /** Set assumptions in order to produce smaller output. */
  assumptions?: CompilerAssumptions;
  /**
   * Configure how TypeScript is transformed.
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/typescript}
   */
  typescript?: TypeScriptOptions;
  /**
   * Configure how TSX and JSX are transformed.
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/jsx}
   */
  jsx?: 'preserve' | JsxOptions;
  /**
   * Sets the target environment for the generated JavaScript.
   *
   * The lowest target is `es2015`.
   *
   * Example:
   *
   * * `'es2015'`
   * * `['es2020', 'chrome58', 'edge16', 'firefox57', 'node12', 'safari11']`
   *
   * @default `esnext` (No transformation)
   *
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/lowering#target}
   */
  target?: string | Array<string>;
  /** Behaviour for runtime helpers. */
  helpers?: Helpers;
  /**
   * Define Plugin
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/global-variable-replacement#define}
   */
  define?: Record<string, string>;
  /**
   * Inject Plugin
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/global-variable-replacement#inject}
   */
  inject?: Record<string, string | [string, string]>;
  /** Decorator plugin */
  decorator?: DecoratorOptions;
  /**
   * Third-party plugins to use.
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/plugins}
   */
  plugins?: PluginsOptions;
  /**
   * Configure tsconfig handling.
   * - true: Auto-discover and load the nearest tsconfig.json
   * - TsconfigRawOptions: Use the provided inline tsconfig options
   */
  tsconfig?: boolean | BindingTsconfigRawOptions;
  /** An input source map to collapse with the output source map. */
  inputMap?: SourceMap;
}
/** Result of the enhanced transform API. */
interface BindingEnhancedTransformResult {
  /**
   * The transformed code.
   *
   * If parsing failed, this will be an empty string.
   */
  code: string;
  /**
   * The source map for the transformed code.
   *
   * This will be set if {@link BindingEnhancedTransformOptions#sourcemap} is `true`.
   */
  map?: SourceMap;
  /**
   * The `.d.ts` declaration file for the transformed code. Declarations are
   * only generated if `declaration` is set to `true` and a TypeScript file
   * is provided.
   *
   * If parsing failed and `declaration` is set, this will be an empty string.
   *
   * @see {@link TypeScriptOptions#declaration}
   * @see [declaration tsconfig option](https://www.typescriptlang.org/tsconfig/#declaration)
   */
  declaration?: string;
  /**
   * Declaration source map. Only generated if both
   * {@link TypeScriptOptions#declaration declaration} and
   * {@link BindingEnhancedTransformOptions#sourcemap sourcemap} are set to `true`.
   */
  declarationMap?: SourceMap;
  /**
   * Helpers used.
   *
   * @internal
   *
   * Example:
   *
   * ```text
   * { "_objectSpread": "@oxc-project/runtime/helpers/objectSpread2" }
   * ```
   */
  helpersUsed: Record<string, string>;
  /** Parse and transformation errors. */
  errors: Array<BindingError>;
  /** Parse and transformation warnings. */
  warnings: Array<BindingError>;
  /** Paths to tsconfig files that were loaded during transformation. */
  tsconfigFilePaths: Array<string>;
}
type BindingError = {
  type: 'JsError';
  field0: Error;
} | {
  type: 'NativeError';
  field0: NativeError;
};
interface BindingEsmExternalRequirePluginConfig {
  external: Array<BindingStringOrRegex>;
  skipDuplicateCheck?: boolean;
}
interface BindingHmrBoundaryOutput {
  boundary: string;
  acceptedVia: string;
}
type BindingHmrUpdate = {
  type: 'Patch';
  code: string;
  filename: string;
  sourcemap?: string;
  sourcemapFilename?: string;
  hmrBoundaries: Array<BindingHmrBoundaryOutput>;
} | {
  type: 'FullReload';
  reason?: string;
} | {
  type: 'Noop';
};
interface BindingHookResolveIdExtraArgs {
  custom?: number;
  isEntry: boolean;
  /**
   * - `import-statement`: `import { foo } from './lib.js';`
   * - `dynamic-import`: `import('./lib.js')`
   * - `require-call`: `require('./lib.js')`
   * - `import-rule`: `@import 'bg-color.css'`
   * - `url-token`: `url('./icon.png')`
   * - `new-url`: `new URL('./worker.js', import.meta.url)`
   * - `hot-accept`: `import.meta.hot.accept('./lib.js', () => {})`
   */
  kind: 'import-statement' | 'dynamic-import' | 'require-call' | 'import-rule' | 'url-token' | 'new-url' | 'hot-accept';
}
interface BindingIndentOptions {
  exclude?: Array<Array<number>> | Array<number>;
}
interface BindingIsolatedDeclarationPluginConfig {
  stripInternal?: boolean;
}
interface BindingLogLocation {
  /** 1-based */
  line: number;
  /** 0-based position in the line in UTF-16 code units */
  column: number;
  file?: string;
}
interface BindingMagicStringOptions {
  filename?: string;
  offset?: number;
  indentExclusionRanges?: Array<Array<number>> | Array<number>;
  ignoreList?: boolean;
}
interface BindingModulePreloadOptions {
  polyfill: boolean;
  resolveDependencies?: (filename: string, deps: string[], context: {
    hostId: string;
    hostType: 'html' | 'js';
  }) => string[];
}
interface BindingModules {
  values: Array<BindingRenderedModule>;
  keys: Array<string>;
}
interface BindingOverwriteOptions {
  contentOnly?: boolean;
}
interface BindingPluginContextResolveOptions {
  /**
   * - `import-statement`: `import { foo } from './lib.js';`
   * - `dynamic-import`: `import('./lib.js')`
   * - `require-call`: `require('./lib.js')`
   * - `import-rule`: `@import 'bg-color.css'`
   * - `url-token`: `url('./icon.png')`
   * - `new-url`: `new URL('./worker.js', import.meta.url)`
   * - `hot-accept`: `import.meta.hot.accept('./lib.js', () => {})`
   */
  importKind?: 'import-statement' | 'dynamic-import' | 'require-call' | 'import-rule' | 'url-token' | 'new-url' | 'hot-accept';
  isEntry?: boolean;
  skipSelf?: boolean;
  custom?: number;
  vitePluginCustom?: BindingVitePluginCustom;
}
declare enum BindingRebuildStrategy {
  Always = 0,
  Auto = 1,
  Never = 2
}
interface BindingRenderBuiltUrlConfig {
  ssr: boolean;
  type: 'asset' | 'public';
  hostId: string;
  hostType: 'js' | 'css' | 'html';
}
interface BindingRenderBuiltUrlRet {
  relative?: boolean;
  runtime?: string;
}
interface BindingReplacePluginConfig {
  values: Record<string, string>;
  delimiters?: [string, string];
  preventAssignment?: boolean;
  objectGuards?: boolean;
  sourcemap?: boolean;
}
interface BindingSourceMapOptions {
  /** The filename for the generated file (goes into `map.file`) */
  file?: string;
  /** The filename of the original source (goes into `map.sources`) */
  source?: string;
  includeContent?: boolean;
  /**
   * Accepts boolean or string: true, false, "boundary"
   * - true: high-resolution sourcemaps (character-level)
   * - false: low-resolution sourcemaps (line-level) - default
   * - "boundary": high-resolution only at word boundaries
   */
  hires?: boolean | string;
}
interface BindingTransformHookExtraArgs {
  moduleType: string;
}
interface BindingTsconfig {
  files?: Array<string>;
  include?: Array<string>;
  exclude?: Array<string>;
  compilerOptions: BindingCompilerOptions;
}
/**
 * TypeScript compiler options for inline tsconfig configuration.
 *
 * @category Utilities
 */
interface BindingTsconfigCompilerOptions {
  /** Specifies the JSX factory function to use. */
  jsx?: 'react' | 'react-jsx' | 'react-jsxdev' | 'preserve' | 'react-native';
  /** Specifies the JSX factory function. */
  jsxFactory?: string;
  /** Specifies the JSX fragment factory function. */
  jsxFragmentFactory?: string;
  /** Specifies the module specifier for JSX imports. */
  jsxImportSource?: string;
  /** Enables experimental decorators. */
  experimentalDecorators?: boolean;
  /** Enables decorator metadata emission. */
  emitDecoratorMetadata?: boolean;
  /** Preserves module structure of imports/exports. */
  verbatimModuleSyntax?: boolean;
  /** Configures how class fields are emitted. */
  useDefineForClassFields?: boolean;
  /** The ECMAScript target version. */
  target?: string;
  /** @deprecated Use verbatimModuleSyntax instead. */
  preserveValueImports?: boolean;
  /** @deprecated Use verbatimModuleSyntax instead. */
  importsNotUsedAsValues?: 'remove' | 'preserve' | 'error';
}
/**
 * Raw tsconfig options for inline configuration.
 *
 * @category Utilities
 */
interface BindingTsconfigRawOptions {
  /** TypeScript compiler options. */
  compilerOptions?: BindingTsconfigCompilerOptions;
}
interface BindingTsconfigResult {
  tsconfig: BindingTsconfig;
  tsconfigFilePaths: Array<string>;
}
interface BindingUpdateOptions {
  overwrite?: boolean;
}
interface BindingViteBuildImportAnalysisPluginConfig {
  preloadCode: string;
  insertPreload: boolean;
  optimizeModulePreloadRelativePaths: boolean;
  renderBuiltUrl: boolean;
  isRelativeBase: boolean;
  v2?: BindingViteBuildImportAnalysisPluginV2Config;
}
interface BindingViteBuildImportAnalysisPluginV2Config {
  isSsr: boolean;
  urlBase: string;
  decodedBase: string;
  modulePreload: false | BindingModulePreloadOptions;
  renderBuiltUrl?: (filename: string, type: BindingRenderBuiltUrlConfig) => undefined | string | BindingRenderBuiltUrlRet;
}
interface BindingViteDynamicImportVarsPluginConfig {
  sourcemap?: boolean;
  include?: Array<BindingStringOrRegex>;
  exclude?: Array<BindingStringOrRegex>;
  resolver?: (id: string, importer: string) => MaybePromise<string | undefined>;
}
interface BindingViteImportGlobPluginConfig {
  root?: string;
  sourcemap?: boolean;
  restoreQueryExtension?: boolean;
}
interface BindingViteJsonPluginConfig {
  minify?: boolean;
  namedExports?: boolean;
  stringify?: BindingViteJsonPluginStringify;
}
type BindingViteJsonPluginStringify = boolean | string;
interface BindingViteManifestPluginConfig {
  root: string;
  outPath: string;
  isEnableV2?: boolean;
  isLegacy?: (args: BindingNormalizedOptions) => boolean;
  cssEntries: () => Record<string, string>;
}
interface BindingViteModulePreloadPolyfillPluginConfig {
  isServer?: boolean;
}
interface BindingVitePluginCustom {
  'vite:import-glob'?: ViteImportGlobMeta;
}
interface BindingViteReactRefreshWrapperPluginConfig {
  cwd: string;
  include?: Array<BindingStringOrRegex>;
  exclude?: Array<BindingStringOrRegex>;
  jsxImportSource: string;
  reactRefreshHost: string;
}
interface BindingViteReporterPluginConfig {
  root: string;
  isTty: boolean;
  isLib: boolean;
  assetsDir: string;
  chunkLimit: number;
  warnLargeChunks: boolean;
  reportCompressedSize: boolean;
  logInfo?: (msg: string) => void;
}
interface BindingViteResolvePluginConfig {
  resolveOptions: BindingViteResolvePluginResolveOptions;
  environmentConsumer: string;
  environmentName: string;
  builtins: Array<BindingStringOrRegex>;
  external: true | string[];
  noExternal: true | Array<string | RegExp>;
  dedupe: Array<string>;
  disableCache?: boolean;
  legacyInconsistentCjsInterop?: boolean;
  finalizeBareSpecifier?: (resolvedId: string, rawId: string, importer: string | null | undefined) => VoidNullable<string>;
  finalizeOtherSpecifiers?: (resolvedId: string, rawId: string) => VoidNullable<string>;
  resolveSubpathImports: (id: string, importer: string, isRequire: boolean, scan: boolean) => VoidNullable<string>;
  onWarn?: (message: string) => void;
  onDebug?: (message: string) => void;
  yarnPnp: boolean;
}
interface BindingViteResolvePluginResolveOptions {
  isBuild: boolean;
  isProduction: boolean;
  asSrc: boolean;
  preferRelative: boolean;
  isRequire?: boolean;
  root: string;
  scan: boolean;
  mainFields: Array<string>;
  conditions: Array<string>;
  externalConditions: Array<string>;
  extensions: Array<string>;
  tryIndex: boolean;
  tryPrefix?: string;
  preserveSymlinks: boolean;
  tsconfigPaths: boolean;
}
interface BindingViteTransformPluginConfig {
  root: string;
  include?: Array<BindingStringOrRegex>;
  exclude?: Array<BindingStringOrRegex>;
  jsxRefreshInclude?: Array<BindingStringOrRegex>;
  jsxRefreshExclude?: Array<BindingStringOrRegex>;
  isServerConsumer?: boolean;
  jsxInject?: string;
  transformOptions?: TransformOptions;
  yarnPnp?: boolean;
}
interface ExternalMemoryStatus {
  freed: boolean;
  reason?: string;
}
/** Error emitted from native side, it only contains kind and message, no stack trace. */
interface NativeError {
  kind: string;
  message: string;
  /** The id of the file associated with the error */
  id?: string;
  /** The exporter associated with the error (for import/export errors) */
  exporter?: string;
  /** Location information (line, column, file) */
  loc?: BindingLogLocation;
  /** Position in the source file in UTF-16 code units */
  pos?: number;
}
interface PreRenderedChunk {
  /** The name of this chunk, which is used in naming patterns. */
  name: string;
  /** Whether this chunk is a static entry point. */
  isEntry: boolean;
  /** Whether this chunk is a dynamic entry point. */
  isDynamicEntry: boolean;
  /** The id of a module that this chunk corresponds to. */
  facadeModuleId?: string;
  /** The list of ids of modules included in this chunk. */
  moduleIds: Array<string>;
  /** Exported variable names from this chunk. */
  exports: Array<string>;
}
interface ViteImportGlobMeta {
  isSubImportsPattern?: boolean;
}
//#endregion
export { ExternalMemoryStatus as A, ResolveResult as B, BindingViteManifestPluginConfig as C, BindingViteResolvePluginConfig as D, BindingViteReporterPluginConfig as E, MinifyResult as F, isolatedDeclaration as G, SourceMap as H, NapiResolveOptions as I, isolatedDeclarationSync as K, ParseResult as L, IsolatedDeclarationsResult as M, JsxOptions as N, BindingViteTransformPluginConfig as O, MinifyOptions as P, ParserOptions as R, BindingViteJsonPluginConfig as S, BindingViteReactRefreshWrapperPluginConfig as T, TransformOptions as U, ResolverFactory as V, TsconfigCache as W, BindingTsconfigRawOptions as _, BindingEnhancedTransformOptions as a, BindingViteDynamicImportVarsPluginConfig as b, BindingHookResolveIdExtraArgs as c, BindingPluginContextResolveOptions as d, BindingRebuildStrategy as f, BindingTsconfigCompilerOptions as g, BindingTransformHookExtraArgs as h, BindingClientHmrUpdate as i, IsolatedDeclarationsOptions as j, BindingWatcherBundler as k, BindingIsolatedDeclarationPluginConfig as l, BindingReplacePluginConfig as m, BindingBundleAnalyzerPluginConfig as n, BindingEnhancedTransformResult as o, BindingRenderedChunk as p, moduleRunnerTransform as q, BindingBundleState as r, BindingEsmExternalRequirePluginConfig as s, BindingBuiltinPluginName as t, BindingMagicString as u, BindingTsconfigResult as v, BindingViteModulePreloadPolyfillPluginConfig as w, BindingViteImportGlobPluginConfig as x, BindingViteBuildImportAnalysisPluginConfig as y, PreRenderedChunk as z };