/**
 * Options to configure module resolution.
 */
type ResolveOptions = {
    /**
     * A URL, path, or array of URLs/paths from which to resolve the module.
     * If not provided, resolution starts from the current working directory.
     * You can use `import.meta.url` to mimic the behavior of `import.meta.resolve()`.
     * For better performance, use a `file://` URL or path that ends with `/`.
     */
    from?: string | URL | (string | URL)[];
    /**
     * Resolve cache (enabled by default with a shared global object).
     * Can be set to `false` to disable or a custom `Map` to bring your own cache object.
     */
    cache?: boolean | Map<string, unknown>;
    /**
     * Additional file extensions to check.
     * For better performance, use explicit extensions and avoid this option.
     */
    extensions?: string[];
    /**
     * Conditions to apply when resolving package exports.
     * Defaults to `["node", "import"]`.
     * Conditions are applied without order.
     */
    conditions?: string[];
    /**
     * Path suffixes to check.
     * For better performance, use explicit paths and avoid this option.
     * Example: `["", "/index"]`
     */
    suffixes?: string[];
    /**
     * If set to `true` and the module cannot be resolved,
     * the resolver returns `undefined` instead of throwing an error.
     */
    try?: boolean;
};
type ResolverOptions = Omit<ResolveOptions, "try">;
type ResolveRes<Opts extends ResolveOptions> = Opts["try"] extends true ? string | undefined : string;
/**
 * Synchronously resolves a module url based on the options provided.
 *
 * @param {string} input - The identifier or path of the module to resolve.
 * @param {ResolveOptions} [options] - Options to resolve the module. See {@link ResolveOptions}.
 * @returns {string} The resolved URL as a string.
 */
declare function resolveModuleURL<O extends ResolveOptions>(input: string | URL, options?: O): ResolveRes<O>;
/**
 * Synchronously resolves a module then converts it to a file path
 *
 * (throws error if reolved path is not file:// scheme)
 *
 * @param {string} id - The identifier or path of the module to resolve.
 * @param {ResolveOptions} [options] - Options to resolve the module. See {@link ResolveOptions}.
 * @returns {string} The resolved URL as a string.
 */
declare function resolveModulePath<O extends ResolveOptions>(id: string | URL, options?: O): ResolveRes<O>;
declare function createResolver(defaults?: ResolverOptions): {
    resolveModuleURL: <O extends ResolveOptions>(id: string | URL, opts: ResolveOptions) => ResolveRes<O>;
    resolveModulePath: <O extends ResolveOptions>(id: string | URL, opts: ResolveOptions) => ResolveRes<O>;
    clearResolveCache: () => void;
};
declare function clearResolveCache(): void;

export { clearResolveCache, createResolver, resolveModulePath, resolveModuleURL };
export type { ResolveOptions, ResolverOptions };
