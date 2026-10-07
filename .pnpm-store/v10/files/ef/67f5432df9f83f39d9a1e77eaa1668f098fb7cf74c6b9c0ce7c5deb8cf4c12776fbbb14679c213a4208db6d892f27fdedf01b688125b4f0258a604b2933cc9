/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the `debug` singleton, or b) put your function elsewhere.
 */
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
export declare function isNodeEnv(): boolean;
/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @param existingModule module to use for requiring
 * @returns possibly required module
 */
export declare function loadModule<T>(moduleName: string, existingModule?: any): T | undefined;
//# sourceMappingURL=node.d.ts.map
