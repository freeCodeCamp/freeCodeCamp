export type RequireResolveOptions = {
    /**
     * Additional paths to resolve from.
     */
    paths?: string[];
};
export type RequireResolve = (id: string, options: RequireResolveOptions) => string;
/**
 * Resolves modules according to Node's resolution rules.
 *
 * @param {string} id Module name or path.
 * @param {string[]} [paths] Additional paths to resolve from.
 * @returns {string} Resolved module path.
 */
export function resolveModule(id: string, paths?: string[]): string;
/**
 * @typedef RequireResolveOptions
 * @property {string[]} [paths] Additional paths to resolve from.
 */
/**
 * @callback RequireResolve
 * @param {string} id Module name or path.
 * @param {RequireResolveOptions} options Options to apply.
 * @returns {string} Resolved module path.
 */
/**
 * Resolves modules according to Node's resolution rules.
 *
 * @param {RequireResolve} resolve Node-like require.resolve implementation.
 * @param {string} id Module name or path.
 * @param {string[]} [paths] Additional paths to resolve from.
 * @returns {string} Resolved module path.
 */
export function resolveModuleCustomResolve(resolve: RequireResolve, id: string, paths?: string[]): string;
