import { a as RolldownLog } from "./logging-C6h4g8dA.mjs";
import { F as MinifyResult$1, H as SourceMap, L as ParseResult$1, P as MinifyOptions$1, R as ParserOptions$1, W as TsconfigCache$1, a as BindingEnhancedTransformOptions, o as BindingEnhancedTransformResult, v as BindingTsconfigResult } from "./binding-zH1vcmbM.mjs";

//#region src/utils/resolve-tsconfig.d.ts
/**
* Cache for tsconfig resolution to avoid redundant file system operations.
*
* The cache stores resolved tsconfig configurations keyed by their file paths.
* When transforming multiple files in the same project, tsconfig lookups are
* deduplicated, improving performance.
*
* @category Utilities
* @experimental
*/
declare class TsconfigCache extends TsconfigCache$1 {
  constructor();
}
/** @hidden This is only expected to be used by Vite */
declare function resolveTsconfig(filename: string, cache?: TsconfigCache | null): BindingTsconfigResult | null;
//#endregion
//#region src/utils/parse.d.ts
/**
* Result of parsing a code
*
* @category Utilities
*/
interface ParseResult extends ParseResult$1 {}
/**
* Options for parsing a code
*
* @category Utilities
*/
interface ParserOptions extends ParserOptions$1 {}
/**
* Parse JS/TS source asynchronously on a separate thread.
*
* Note that not all of the workload can happen on a separate thread.
* Parsing on Rust side does happen in a separate thread, but deserialization of the AST to JS objects
* has to happen on current thread. This synchronous deserialization work typically outweighs
* the asynchronous parsing by a factor of between 3 and 20.
*
* i.e. the majority of the workload cannot be parallelized by using this method.
*
* Generally {@linkcode parseSync} is preferable to use as it does not have the overhead of spawning a thread.
* If you need to parallelize parsing multiple files, it is recommended to use worker threads.
*
* @category Utilities
*/
declare function parse(filename: string, sourceText: string, options?: ParserOptions | null): Promise<ParseResult>;
/**
* Parse JS/TS source synchronously on current thread.
*
* This is generally preferable over {@linkcode parse} (async) as it does not have the overhead
* of spawning a thread, and the majority of the workload cannot be parallelized anyway
* (see {@linkcode parse} documentation for details).
*
* If you need to parallelize parsing multiple files, it is recommended to use worker threads
* with {@linkcode parseSync} rather than using {@linkcode parse}.
*
* @category Utilities
*/
declare function parseSync(filename: string, sourceText: string, options?: ParserOptions | null): ParseResult;
//#endregion
//#region src/utils/minify.d.ts
/**
* Options for minification.
*
* @category Utilities
*/
interface MinifyOptions extends MinifyOptions$1 {
  inputMap?: SourceMap;
}
/**
* The result of minification.
*
* @category Utilities
*/
interface MinifyResult extends MinifyResult$1 {}
/**
* Minify asynchronously.
*
* Note: This function can be slower than {@linkcode minifySync} due to the overhead of spawning a thread.
*
* @category Utilities
* @experimental
*/
declare function minify(filename: string, sourceText: string, options?: MinifyOptions | null): Promise<MinifyResult>;
/**
* Minify synchronously.
*
* @category Utilities
* @experimental
*/
declare function minifySync(filename: string, sourceText: string, options?: MinifyOptions | null): MinifyResult;
//#endregion
//#region src/utils/transform.d.ts
/**
* Options for transforming a code.
*
* @category Utilities
*/
interface TransformOptions extends BindingEnhancedTransformOptions {}
/**
* Result of transforming a code.
*
* @category Utilities
*/
type TransformResult = Omit<BindingEnhancedTransformResult, "errors" | "warnings"> & {
  errors: Error[];
  warnings: RolldownLog[];
};
/**
* Transpile a JavaScript or TypeScript into a target ECMAScript version, asynchronously.
*
* Note: This function can be slower than `transformSync` due to the overhead of spawning a thread.
*
* @param filename The name of the file being transformed. If this is a
* relative path, consider setting the {@linkcode TransformOptions#cwd} option.
* @param sourceText The source code to transform.
* @param options The transform options including tsconfig and inputMap. See {@linkcode TransformOptions} for more information.
* @param cache Optional tsconfig cache for reusing resolved tsconfig across multiple transforms.
* Only used when `options.tsconfig` is `true`.
*
* @returns a promise that resolves to an object containing the transformed code,
* source maps, and any errors that occurred during parsing or transformation.
*
* @category Utilities
* @experimental
*/
declare function transform(filename: string, sourceText: string, options?: TransformOptions | null, cache?: TsconfigCache | null): Promise<TransformResult>;
/**
* Transpile a JavaScript or TypeScript into a target ECMAScript version.
*
* @param filename The name of the file being transformed. If this is a
* relative path, consider setting the {@linkcode TransformOptions#cwd} option.
* @param sourceText The source code to transform.
* @param options The transform options including tsconfig and inputMap. See {@linkcode TransformOptions} for more information.
* @param cache Optional tsconfig cache for reusing resolved tsconfig across multiple transforms.
* Only used when `options.tsconfig` is `true`.
*
* @returns an object containing the transformed code, source maps, and any errors
* that occurred during parsing or transformation.
*
* @category Utilities
* @experimental
*/
declare function transformSync(filename: string, sourceText: string, options?: TransformOptions | null, cache?: TsconfigCache | null): TransformResult;
//#endregion
export { MinifyOptions as a, minifySync as c, parse as d, parseSync as f, transformSync as i, ParseResult as l, resolveTsconfig as m, TransformResult as n, MinifyResult as o, TsconfigCache as p, transform as r, minify as s, TransformOptions as t, ParserOptions as u };