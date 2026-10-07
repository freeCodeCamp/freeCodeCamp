/**
 * @since v0.3.7
 */
declare module "module" {
    import { URL } from "node:url";
    class Module {
        constructor(id: string, parent?: Module);
    }
    interface Module extends NodeJS.Module {}
    namespace Module {
        export { Module };
    }
    namespace Module {
        /**
         * A list of the names of all modules provided by Node.js. Can be used to verify
         * if a module is maintained by a third party or not.
         *
         * Note: the list doesn't contain prefix-only modules like `node:test`.
         * @since v9.3.0, v8.10.0, v6.13.0
         */
        const builtinModules: readonly string[];
        /**
         * @since v12.2.0
         * @param path Filename to be used to construct the require
         * function. Must be a file URL object, file URL string, or absolute path
         * string.
         */
        function createRequire(path: string | URL): NodeJS.Require;
        namespace constants {
            /**
             * The following constants are returned as the `status` field in the object returned by
             * {@link enableCompileCache} to indicate the result of the attempt to enable the
             * [module compile cache](https://nodejs.org/docs/latest-v24.x/api/module.html#module-compile-cache).
             * @since v22.8.0
             */
            namespace compileCacheStatus {
                /**
                 * Node.js has enabled the compile cache successfully. The directory used to store the
                 * compile cache will be returned in the `directory` field in the
                 * returned object.
                 */
                const ENABLED: number;
                /**
                 * The compile cache has already been enabled before, either by a previous call to
                 * {@link enableCompileCache}, or by the `NODE_COMPILE_CACHE=dir`
                 * environment variable. The directory used to store the
                 * compile cache will be returned in the `directory` field in the
                 * returned object.
                 */
                const ALREADY_ENABLED: number;
                /**
                 * Node.js fails to enable the compile cache. This can be caused by the lack of
                 * permission to use the specified directory, or various kinds of file system errors.
                 * The detail of the failure will be returned in the `message` field in the
                 * returned object.
                 */
                const FAILED: number;
                /**
                 * Node.js cannot enable the compile cache because the environment variable
                 * `NODE_DISABLE_COMPILE_CACHE=1` has been set.
                 */
                const DISABLED: number;
            }
        }
        interface EnableCompileCacheResult {
            /**
             * One of the {@link constants.compileCacheStatus}
             */
            status: number;
            /**
             * If Node.js cannot enable the compile cache, this contains
             * the error message. Only set if `status` is `module.constants.compileCacheStatus.FAILED`.
             */
            message?: string;
            /**
             * If the compile cache is enabled, this contains the directory
             * where the compile cache is stored. Only set if  `status` is
             * `module.constants.compileCacheStatus.ENABLED` or
             * `module.constants.compileCacheStatus.ALREADY_ENABLED`.
             */
            directory?: string;
        }
        interface EnableCompileCacheOptions {
            /**
             * Optional. Directory to store the compile cache. If not specified, the directory specified by
             * the [`NODE_COMPILE_CACHE=dir`](https://nodejs.org/docs/latest-v24.x/api/cli.html#node_compile_cachedir)
             * environment variable will be used if it's set, or `path.join(os.tmpdir(), 'node-compile-cache')` otherwise.
             * @since v24.12.0
             */
            directory?: string | undefined;
            /**
             * Optional. If `true`, enables portable compile cache so that the cache can be reused even if the project directory
             * is moved. This is a best-effort feature. If not specified, it will depend on whether the environment variable
             * [NODE_COMPILE_CACHE_PORTABLE=1](https://nodejs.org/docs/latest-v24.x/api/cli.html#node_compile_cache_portable1) is set.
             * @since v24.12.0
             */
            portable?: boolean | undefined;
        }
        /**
         * Enable [module compile cache](https://nodejs.org/docs/latest-v24.x/api/module.html#module-compile-cache)
         * in the current Node.js instance.
         *
         * For general use cases, it's recommended to call `module.enableCompileCache()` without specifying the
         * `options.directory`, so that the directory can be overridden by the `NODE_COMPILE_CACHE` environment
         * variable when necessary.
         *
         * Since compile cache is supposed to be a optimization that is not mission critical, this method is
         * designed to not throw any exception when the compile cache cannot be enabled. Instead, it will return
         * an object containing an error message in the `message` field to aid debugging. If compile cache is
         * enabled successfully, the `directory` field in the returned object contains the path to the directory
         * where the compile cache is stored. The `status` field in the returned object would be one of the
         * `module.constants.compileCacheStatus` values to indicate the result of the attempt to enable the
         * [module compile cache](https://nodejs.org/docs/latest-v24.x/api/module.html#module-compile-cache).
         *
         * This method only affects the current Node.js instance. To enable it in child worker threads,
         * either call this method in child worker threads too, or set the
         * `process.env.NODE_COMPILE_CACHE` value to compile cache directory so the behavior can
         * be inherited into the child workers. The directory can be obtained either from the
         * `directory` field returned by this method, or with {@link getCompileCacheDir `module.getCompileCacheDir()`}.
         * @since v22.8.0
         * @param options Optional. If a string is passed, it is considered to be `options.directory`.
         * will be stored/retrieved.
         */
        function enableCompileCache(options?: string | EnableCompileCacheOptions): EnableCompileCacheResult;
        /**
         * Flush the [module compile cache](https://nodejs.org/docs/latest-v24.x/api/module.html#module-compile-cache)
         * accumulated from modules already loaded
         * in the current Node.js instance to disk. This returns after all the flushing
         * file system operations come to an end, no matter they succeed or not. If there
         * are any errors, this will fail silently, since compile cache misses should not
         * interfere with the actual operation of the application.
         * @since v22.10.0
         */
        function flushCompileCache(): void;
        /**
         * @since v22.8.0
         * @return Path to the [module compile cache](https://nodejs.org/docs/latest-v24.x/api/module.html#module-compile-cache)
         * directory if it is enabled, or `undefined` otherwise.
         */
        function getCompileCacheDir(): string | undefined;
        /**
         * ```text
         * /path/to/project
         *   ├ packages/
         *     ├ bar/
         *       ├ bar.js
         *       └ package.json // name = '@foo/bar'
         *     └ qux/
         *       ├ node_modules/
         *         └ some-package/
         *           └ package.json // name = 'some-package'
         *       ├ qux.js
         *       └ package.json // name = '@foo/qux'
         *   ├ main.js
         *   └ package.json // name = '@foo'
         * ```
         * ```js
         * // /path/to/project/packages/bar/bar.js
         * import { findPackageJSON } from 'node:module';
         *
         * findPackageJSON('..', import.meta.url);
         * // '/path/to/project/package.json'
         * // Same result when passing an absolute specifier instead:
         * findPackageJSON(new URL('../', import.meta.url));
         * findPackageJSON(import.meta.resolve('../'));
         *
         * findPackageJSON('some-package', import.meta.url);
         * // '/path/to/project/packages/bar/node_modules/some-package/package.json'
         * // When passing an absolute specifier, you might get a different result if the
         * // resolved module is inside a subfolder that has nested `package.json`.
         * findPackageJSON(import.meta.resolve('some-package'));
         * // '/path/to/project/packages/bar/node_modules/some-package/some-subfolder/package.json'
         *
         * findPackageJSON('@foo/qux', import.meta.url);
         * // '/path/to/project/packages/qux/package.json'
         * ```
         * @since v22.14.0
         * @param specifier The specifier for the module whose `package.json` to
         * retrieve. When passing a _bare specifier_, the `package.json` at the root of
         * the package is returned. When passing a _relative specifier_ or an _absolute specifier_,
         * the closest parent `package.json` is returned.
         * @param base The absolute location (`file:` URL string or FS path) of the
         * containing  module. For CJS, use `__filename` (not `__dirname`!); for ESM, use
         * `import.meta.url`. You do not need to pass it if `specifier` is an _absolute specifier_.
         * @returns A path if the `package.json` is found. When `startLocation`
         * is a package, the package's root `package.json`; when a relative or unresolved, the closest
         * `package.json` to the `startLocation`.
         */
        function findPackageJSON(specifier: string | URL, base?: string | URL): string | undefined;
        /**
         * @since v18.6.0, v16.17.0
         */
        function isBuiltin(moduleName: string): boolean;
        interface RegisterOptions<Data> {
            /**
             * If you want to resolve `specifier` relative to a
             * base URL, such as `import.meta.url`, you can pass that URL here. This
             * property is ignored if the `parentURL` is supplied as the second argument.
             * @default 'data:'
             */
            parentURL?: string | URL | undefined;
            /**
             * Any arbitrary, cloneable JavaScript value to pass into the
             * {@link initialize} hook.
             */
            data?: Data | undefined;
            /**
             * [Transferable objects](https://nodejs.org/docs/latest-v24.x/api/worker_threads.html#portpostmessagevalue-transferlist)
             * to be passed into the `initialize` hook.
             */
            transferList?: any[] | undefined;
        }
        /* eslint-disable @definitelytyped/no-unnecessary-generics */
        /**
         * Register a module that exports hooks that customize Node.js module
         * resolution and loading behavior. See
         * [Customization hooks](https://nodejs.org/docs/latest-v24.x/api/module.html#customization-hooks).
         *
         * This feature requires `--allow-worker` if used with the
         * [Permission Model](https://nodejs.org/docs/latest-v24.x/api/permissions.html#permission-model).
         * @since v20.6.0, v18.19.0
         * @param specifier Customization hooks to be registered; this should be
         * the same string that would be passed to `import()`, except that if it is
         * relative, it is resolved relative to `parentURL`.
         * @param parentURL f you want to resolve `specifier` relative to a base
         * URL, such as `import.meta.url`, you can pass that URL here.
         */
        function register<Data = any>(
            specifier: string | URL,
            parentURL?: string | URL,
            options?: RegisterOptions<Data>,
        ): void;
        function register<Data = any>(specifier: string | URL, options?: RegisterOptions<Data>): void;
        interface RegisterHooksOptions {
            /**
             * See [load hook](https://nodejs.org/docs/latest-v24.x/api/module.html#loadurl-context-nextload).
             * @default undefined
             */
            load?: LoadHookSync | undefined;
            /**
             * See [resolve hook](https://nodejs.org/docs/latest-v24.x/api/module.html#resolvespecifier-context-nextresolve).
             * @default undefined
             */
            resolve?: ResolveHookSync | undefined;
        }
        interface ModuleHooks {
            /**
             * Deregister the hook instance.
             */
            deregister(): void;
        }
        /**
         * Register [hooks](https://nodejs.org/docs/latest-v24.x/api/module.html#customization-hooks)
         * that customize Node.js module resolution and loading behavior.
         * @since v22.15.0
         * @experimental
         */
        function registerHooks(options: RegisterHooksOptions): ModuleHooks;
        interface StripTypeScriptTypesOptions {
            /**
             * Possible values are:
             * * `'strip'` Only strip type annotations without performing the transformation of TypeScript features.
             * * `'transform'` Strip type annotations and transform TypeScript features to JavaScript.
             * @default 'strip'
             */
            mode?: "strip" | "transform" | undefined;
            /**
             * Only when `mode` is `'transform'`, if `true`, a source map
             * will be generated for the transformed code.
             * @default false
             */
            sourceMap?: boolean | undefined;
            /**
             * Specifies the source url used in the source map.
             */
            sourceUrl?: string | undefined;
        }
        /**
         * `module.stripTypeScriptTypes()` removes type annotations from TypeScript code. It
         * can be used to strip type annotations from TypeScript code before running it
         * with `vm.runInContext()` or `vm.compileFunction()`.
         * By default, it will throw an error if the code contains TypeScript features
         * that require transformation such as `Enums`,
         * see [type-stripping](https://nodejs.org/docs/latest-v24.x/api/typescript.md#type-stripping) for more information.
         * When mode is `'transform'`, it also transforms TypeScript features to JavaScript,
         * see [transform TypeScript features](https://nodejs.org/docs/latest-v24.x/api/typescript.md#typescript-features) for more information.
         * When mode is `'strip'`, source maps are not generated, because locations are preserved.
         * If `sourceMap` is provided, when mode is `'strip'`, an error will be thrown.
         *
         * _WARNING_: The output of this function should not be considered stable across Node.js versions,
         * due to changes in the TypeScript parser.
         *
         * ```js
         * import { stripTypeScriptTypes } from 'node:module';
         * const code = 'const a: number = 1;';
         * const strippedCode = stripTypeScriptTypes(code);
         * console.log(strippedCode);
         * // Prints: const a         = 1;
         * ```
         *
         * If `sourceUrl` is provided, it will be used appended as a comment at the end of the output:
         *
         * ```js
         * import { stripTypeScriptTypes } from 'node:module';
         * const code = 'const a: number = 1;';
         * const strippedCode = stripTypeScriptTypes(code, { mode: 'strip', sourceUrl: 'source.ts' });
         * console.log(strippedCode);
         * // Prints: const a         = 1\n\n//# sourceURL=source.ts;
         * ```
         *
         * When `mode` is `'transform'`, the code is transformed to JavaScript:
         *
         * ```js
         * import { stripTypeScriptTypes } from 'node:module';
         * const code = `
         *   namespace MathUtil {
         *     export const add = (a: number, b: number) => a + b;
         *   }`;
         * const strippedCode = stripTypeScriptTypes(code, { mode: 'transform', sourceMap: true });
         * console.log(strippedCode);
         * // Prints:
         * // var MathUtil;
         * // (function(MathUtil) {
         * //     MathUtil.add = (a, b)=>a + b;
         * // })(MathUtil || (MathUtil = {}));
         * // # sourceMappingURL=data:application/json;base64, ...
         * ```
         * @since v22.13.0
         * @param code The code to strip type annotations from.
         * @returns The code with type annotations stripped.
         */
        function stripTypeScriptTypes(code: string, options?: StripTypeScriptTypesOptions): string;
        /* eslint-enable @definitelytyped/no-unnecessary-generics */
        /**
         * The `module.syncBuiltinESMExports()` method updates all the live bindings for
         * builtin `ES Modules` to match the properties of the `CommonJS` exports. It
         * does not add or remove exported names from the `ES Modules`.
         *
         * ```js
         * import fs from 'node:fs';
         * import assert from 'node:assert';
         * import { syncBuiltinESMExports } from 'node:module';
         *
         * fs.readFile = newAPI;
         *
         * delete fs.readFileSync;
         *
         * function newAPI() {
         *   // ...
         * }
         *
         * fs.newAPI = newAPI;
         *
         * syncBuiltinESMExports();
         *
         * import('node:fs').then((esmFS) => {
         *   // It syncs the existing readFile property with the new value
         *   assert.strictEqual(esmFS.readFile, newAPI);
         *   // readFileSync has been deleted from the required fs
         *   assert.strictEqual('readFileSync' in fs, false);
         *   // syncBuiltinESMExports() does not remove readFileSync from esmFS
         *   assert.strictEqual('readFileSync' in esmFS, true);
         *   // syncBuiltinESMExports() does not add names
         *   assert.strictEqual(esmFS.newAPI, undefined);
         * });
         * ```
         * @since v12.12.0
         */
        function syncBuiltinESMExports(): void;
        interface ImportAttributes extends NodeJS.Dict<string> {
            type?: string | undefined;
        }
        type ImportPhase = "source" | "evaluation";
        type ModuleFormat =
            | "addon"
            | "builtin"
            | "commonjs"
            | "commonjs-typescript"
            | "json"
            | "module"
            | "module-typescript"
            | "wasm";
        type ModuleSource = string | ArrayBuffer | NodeJS.TypedArray;
        /**
         * The `initialize` hook provides a way to define a custom function that runs in
         * the hooks thread when the hooks module is initialized. Initialization happens
         * when the hooks module is registered via {@link register}.
         *
         * This hook can receive data from a {@link register} invocation, including
         * ports and other transferable objects. The return value of `initialize` can be a
         * `Promise`, in which case it will be awaited before the main application thread
         * execution resumes.
         */
        type InitializeHook<Data = any> = (data: Data) => void | Promise<void>;
        interface ResolveHookContext {
            /**
             * Export conditions of the relevant `package.json`
             */
            conditions: string[];
            /**
             *  An object whose key-value pairs represent the assertions for the module to import
             */
            importAttributes: ImportAttributes;
            /**
             * The module importing this one, or undefined if this is the Node.js entry point
             */
            parentURL: string | undefined;
        }
        interface ResolveFnOutput {
            /**
             * A hint to the load hook (it might be ignored); can be an intermediary value.
             */
            format?: string | null | undefined;
            /**
             * The import attributes to use when caching the module (optional; if excluded the input will be used)
             */
            importAttributes?: ImportAttributes | undefined;
            /**
             * A signal that this hook intends to terminate the chain of `resolve` hooks.
             * @default false
             */
            shortCircuit?: boolean | undefined;
            /**
             * The absolute URL to which this input resolves
             */
            url: string;
        }
        /**
         * The `resolve` hook chain is responsible for telling Node.js where to find and
         * how to cache a given `import` statement or expression, or `require` call. It can
         * optionally return a format (such as `'module'`) as a hint to the `load` hook. If
         * a format is specified, the `load` hook is ultimately responsible for providing
         * the final `format` value (and it is free to ignore the hint provided by
         * `resolve`); if `resolve` provides a `format`, a custom `load` hook is required
         * even if only to pass the value to the Node.js default `load` hook.
         */
        type ResolveHook = (
            specifier: string,
            context: ResolveHookContext,
            nextResolve: (
                specifier: string,
                context?: Partial<ResolveHookContext>,
            ) => ResolveFnOutput | Promise<ResolveFnOutput>,
        ) => ResolveFnOutput | Promise<ResolveFnOutput>;
        type ResolveHookSync = (
            specifier: string,
            context: ResolveHookContext,
            nextResolve: (
                specifier: string,
                context?: Partial<ResolveHookContext>,
            ) => ResolveFnOutput,
        ) => ResolveFnOutput;
        interface LoadHookContext {
            /**
             * Export conditions of the relevant `package.json`
             */
            conditions: string[];
            /**
             * The format optionally supplied by the `resolve` hook chain (can be an intermediary value).
             */
            format: string | null | undefined;
            /**
             *  An object whose key-value pairs represent the assertions for the module to import
             */
            importAttributes: ImportAttributes;
        }
        interface LoadFnOutput {
            format: string | null | undefined;
            /**
             * A signal that this hook intends to terminate the chain of `resolve` hooks.
             * @default false
             */
            shortCircuit?: boolean | undefined;
            /**
             * The source for Node.js to evaluate
             */
            source?: ModuleSource | undefined;
        }
        /**
         * The `load` hook provides a way to define a custom method of determining how a
         * URL should be interpreted, retrieved, and parsed. It is also in charge of
         * validating the import attributes.
         */
        type LoadHook = (
            url: string,
            context: LoadHookContext,
            nextLoad: (
                url: string,
                context?: Partial<LoadHookContext>,
            ) => LoadFnOutput | Promise<LoadFnOutput>,
        ) => LoadFnOutput | Promise<LoadFnOutput>;
        type LoadHookSync = (
            url: string,
            context: LoadHookContext,
            nextLoad: (
                url: string,
                context?: Partial<LoadHookContext>,
            ) => LoadFnOutput,
        ) => LoadFnOutput;
        interface SourceMapsSupport {
            /**
             * If the source maps support is enabled
             */
            enabled: boolean;
            /**
             * If the support is enabled for files in `node_modules`.
             */
            nodeModules: boolean;
            /**
             * If the support is enabled for generated code from `eval` or `new Function`.
             */
            generatedCode: boolean;
        }
        /**
         * This method returns whether the [Source Map v3](https://tc39.es/ecma426/) support for stack
         * traces is enabled.
         * @since v23.7.0, v22.14.0
         */
        function getSourceMapsSupport(): SourceMapsSupport;
        /**
         * `path` is the resolved path for the file for which a corresponding source map
         * should be fetched.
         * @since v13.7.0, v12.17.0
         * @return Returns `module.SourceMap` if a source map is found, `undefined` otherwise.
         */
        function findSourceMap(path: string): SourceMap | undefined;
        interface SetSourceMapsSupportOptions {
            /**
             * If enabling the support for files in `node_modules`.
             * @default false
             */
            nodeModules?: boolean | undefined;
            /**
             * If enabling the support for generated code from `eval` or `new Function`.
             * @default false
             */
            generatedCode?: boolean | undefined;
        }
        /**
         * This function enables or disables the [Source Map v3](https://tc39.es/ecma426/) support for
         * stack traces.
         *
         * It provides same features as launching Node.js process with commandline options
         * `--enable-source-maps`, with additional options to alter the support for files
         * in `node_modules` or generated codes.
         *
         * Only source maps in JavaScript files that are loaded after source maps has been
         * enabled will be parsed and loaded. Preferably, use the commandline options
         * `--enable-source-maps` to avoid losing track of source maps of modules loaded
         * before this API call.
         * @since v23.7.0, v22.14.0
         */
        function setSourceMapsSupport(enabled: boolean, options?: SetSourceMapsSupportOptions): void;
        interface SourceMapConstructorOptions {
            /**
             * @since v21.0.0, v20.5.0
             */
            lineLengths?: readonly number[] | undefined;
        }
        interface SourceMapPayload {
            file: string;
            version: number;
            sources: string[];
            sourcesContent: string[];
            names: string[];
            mappings: string;
            sourceRoot: string;
        }
        interface SourceMapping {
            generatedLine: number;
            generatedColumn: number;
            originalSource: string;
            originalLine: number;
            originalColumn: number;
        }
        interface SourceOrigin {
            /**
             * The name of the range in the source map, if one was provided
             */
            name: string | undefined;
            /**
             * The file name of the original source, as reported in the SourceMap
             */
            fileName: string;
            /**
             * The 1-indexed lineNumber of the corresponding call site in the original source
             */
            lineNumber: number;
            /**
             * The 1-indexed columnNumber of the corresponding call site in the original source
             */
            columnNumber: number;
        }
        /**
         * @since v13.7.0, v12.17.0
         */
        class SourceMap {
            constructor(payload: SourceMapPayload, options?: SourceMapConstructorOptions);
            /**
             * Getter for the payload used to construct the `SourceMap` instance.
             */
            readonly payload: SourceMapPayload;
            /**
             * Given a line offset and column offset in the generated source
             * file, returns an object representing the SourceMap range in the
             * original file if found, or an empty object if not.
             *
             * The object returned contains the following keys:
             *
             * The returned value represents the raw range as it appears in the
             * SourceMap, based on zero-indexed offsets, _not_ 1-indexed line and
             * column numbers as they appear in Error messages and CallSite
             * objects.
             *
             * To get the corresponding 1-indexed line and column numbers from a
             * lineNumber and columnNumber as they are reported by Error stacks
             * and CallSite objects, use `sourceMap.findOrigin(lineNumber, columnNumber)`
             * @param lineOffset The zero-indexed line number offset in the generated source
             * @param columnOffset The zero-indexed column number offset in the generated source
             */
            findEntry(lineOffset: number, columnOffset: number): SourceMapping | {};
            /**
             * Given a 1-indexed `lineNumber` and `columnNumber` from a call site in the generated source,
             * find the corresponding call site location in the original source.
             *
             * If the `lineNumber` and `columnNumber` provided are not found in any source map,
             * then an empty object is returned.
             * @param lineNumber The 1-indexed line number of the call site in the generated source
             * @param columnNumber The 1-indexed column number of the call site in the generated source
             */
            findOrigin(lineNumber: number, columnNumber: number): SourceOrigin | {};
        }
        function runMain(main?: string): void;
        function wrap(script: string): string;
    }
    global {
        interface ImportMeta {
            /**
             * The directory name of the current module.
             *
             * This is the same as the `path.dirname()` of the `import.meta.filename`.
             *
             * > **Caveat**: only present on `file:` modules.
             * @since v21.2.0, v20.11.0
             */
            dirname: string;
            /**
             * The full absolute path and filename of the current module, with
             * symlinks resolved.
             *
             * This is the same as the `url.fileURLToPath()` of the `import.meta.url`.
             *
             * > **Caveat** only local modules support this property. Modules not using the
             * > `file:` protocol will not provide it.
             * @since v21.2.0, v20.11.0
             */
            filename: string;
            /**
             * The absolute `file:` URL of the module.
             *
             * This is defined exactly the same as it is in browsers providing the URL of the
             * current module file.
             *
             * This enables useful patterns such as relative file loading:
             *
             * ```js
             * import { readFileSync } from 'node:fs';
             * const buffer = readFileSync(new URL('./data.proto', import.meta.url));
             * ```
             */
            url: string;
            /**
             * `import.meta.resolve` is a module-relative resolution function scoped to
             * each module, returning the URL string.
             *
             * ```js
             * const dependencyAsset = import.meta.resolve('component-lib/asset.css');
             * // file:///app/node_modules/component-lib/asset.css
             * import.meta.resolve('./dep.js');
             * // file:///app/dep.js
             * ```
             *
             * All features of the Node.js module resolution are supported. Dependency
             * resolutions are subject to the permitted exports resolutions within the package.
             *
             * **Caveats**:
             *
             * * This can result in synchronous file-system operations, which
             *   can impact performance similarly to `require.resolve`.
             * * This feature is not available within custom loaders (it would
             *   create a deadlock).
             * @since v13.9.0, v12.16.0
             * @param specifier The module specifier to resolve relative to the
             * current module.
             * @param parent An optional absolute parent module URL to resolve from.
             * **Default:** `import.meta.url`
             * @returns The absolute URL string that the specifier would resolve to.
             */
            resolve(specifier: string, parent?: string | URL): string;
            /**
             * `true` when the current module is the entry point of the current process; `false` otherwise.
             *
             * Equivalent to `require.main === module` in CommonJS.
             *
             * Analogous to Python's `__name__ == "__main__"`.
             *
             * ```js
             * export function foo() {
             *   return 'Hello, world';
             * }
             *
             * function main() {
             *   const message = foo();
             *   console.log(message);
             * }
             *
             * if (import.meta.main) main();
             * // `foo` can be imported from another module without possible side-effects from `main`
             * ```
             * @since v24.2.0
             * @experimental
             */
            main: boolean;
        }
        namespace NodeJS {
            interface Module {
                /**
                 * The module objects required for the first time by this one.
                 * @since v0.1.16
                 */
                children: Module[];
                /**
                 * The `module.exports` object is created by the `Module` system. Sometimes this is
                 * not acceptable; many want their module to be an instance of some class. To do
                 * this, assign the desired export object to `module.exports`.
                 * @since v0.1.16
                 */
                exports: any;
                /**
                 * The fully resolved filename of the module.
                 * @since v0.1.16
                 */
                filename: string;
                /**
                 * The identifier for the module. Typically this is the fully resolved
                 * filename.
                 * @since v0.1.16
                 */
                id: string;
                /**
                 * `true` if the module is running during the Node.js preload
                 * phase.
                 * @since v15.4.0, v14.17.0
                 */
                isPreloading: boolean;
                /**
                 * Whether or not the module is done loading, or is in the process of
                 * loading.
                 * @since v0.1.16
                 */
                loaded: boolean;
                /**
                 * The module that first required this one, or `null` if the current module is the
                 * entry point of the current process, or `undefined` if the module was loaded by
                 * something that is not a CommonJS module (e.g. REPL or `import`).
                 * @since v0.1.16
                 * @deprecated Please use `require.main` and `module.children` instead.
                 */
                parent: Module | null | undefined;
                /**
                 * The directory name of the module. This is usually the same as the
                 * `path.dirname()` of the `module.id`.
                 * @since v11.14.0
                 */
                path: string;
                /**
                 * The search paths for the module.
                 * @since v0.4.0
                 */
                paths: string[];
                /**
                 * The `module.require()` method provides a way to load a module as if
                 * `require()` was called from the original module.
                 * @since v0.5.1
                 */
                require(id: string): any;
            }
            interface Require {
                /**
                 * Used to import modules, `JSON`, and local files.
                 * @since v0.1.13
                 */
                (id: string): any;
                /**
                 * Modules are cached in this object when they are required. By deleting a key
                 * value from this object, the next `require` will reload the module.
                 * This does not apply to
                 * [native addons](https://nodejs.org/docs/latest-v24.x/api/addons.html),
                 * for which reloading will result in an error.
                 * @since v0.3.0
                 */
                cache: Dict<Module>;
                /**
                 * Instruct `require` on how to handle certain file extensions.
                 * @since v0.3.0
                 * @deprecated
                 */
                extensions: RequireExtensions;
                /**
                 * The `Module` object representing the entry script loaded when the Node.js
                 * process launched, or `undefined` if the entry point of the program is not a
                 * CommonJS module.
                 * @since v0.1.17
                 */
                main: Module | undefined;
                /**
                 * @since v0.3.0
                 */
                resolve: RequireResolve;
            }
            /** @deprecated */
            interface RequireExtensions extends Dict<(module: Module, filename: string) => any> {
                ".js": (module: Module, filename: string) => any;
                ".json": (module: Module, filename: string) => any;
                ".node": (module: Module, filename: string) => any;
            }
            interface RequireResolveOptions {
                /**
                 * Paths to resolve module location from. If present, these
                 * paths are used instead of the default resolution paths, with the exception
                 * of
                 * [GLOBAL\_FOLDERS](https://nodejs.org/docs/latest-v24.x/api/modules.html#loading-from-the-global-folders)
                 * like `$HOME/.node_modules`, which are
                 * always included. Each of these paths is used as a starting point for
                 * the module resolution algorithm, meaning that the `node_modules` hierarchy
                 * is checked from this location.
                 * @since v8.9.0
                 */
                paths?: string[] | undefined;
            }
            interface RequireResolve {
                /**
                 * Use the internal `require()` machinery to look up the location of a module,
                 * but rather than loading the module, just return the resolved filename.
                 *
                 * If the module can not be found, a `MODULE_NOT_FOUND` error is thrown.
                 * @since v0.3.0
                 * @param request The module path to resolve.
                 */
                (request: string, options?: RequireResolveOptions): string;
                /**
                 * Returns an array containing the paths searched during resolution of `request` or
                 * `null` if the `request` string references a core module, for example `http` or
                 * `fs`.
                 * @since v8.9.0
                 * @param request The module path whose lookup paths are being retrieved.
                 */
                paths(request: string): string[] | null;
            }
        }
        /**
         * The directory name of the current module. This is the same as the
         * `path.dirname()` of the `__filename`.
         * @since v0.1.27
         */
        var __dirname: string;
        /**
         * The file name of the current module. This is the current module file's absolute
         * path with symlinks resolved.
         *
         * For a main program this is not necessarily the same as the file name used in the
         * command line.
         * @since v0.0.1
         */
        var __filename: string;
        /**
         * The `exports` variable is available within a module's file-level scope, and is
         * assigned the value of `module.exports` before the module is evaluated.
         * @since v0.1.16
         */
        var exports: NodeJS.Module["exports"];
        /**
         * A reference to the current module.
         * @since v0.1.16
         */
        var module: NodeJS.Module;
        /**
         * @since v0.1.13
         */
        var require: NodeJS.Require;
        // Global-scope aliases for backwards compatibility with @types/node <13.0.x
        // TODO: consider removing in a future major version update
        /** @deprecated Use `NodeJS.Module` instead. */
        interface NodeModule extends NodeJS.Module {}
        /** @deprecated Use `NodeJS.Require` instead. */
        interface NodeRequire extends NodeJS.Require {}
        /** @deprecated Use `NodeJS.RequireResolve` instead. */
        interface RequireResolve extends NodeJS.RequireResolve {}
    }
    export = Module;
}
declare module "node:module" {
    import module = require("module");
    export = module;
}
