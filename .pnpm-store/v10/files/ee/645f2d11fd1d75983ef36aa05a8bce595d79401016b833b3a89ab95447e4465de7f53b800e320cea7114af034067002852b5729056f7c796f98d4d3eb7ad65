/**
 * The “Resolver Algorithm Specification” as detailed in the Node docs (which is
 * sync and slightly lower-level than `resolve`).
 *
 * @param {string} specifier
 *   `/example.js`, `./example.js`, `../example.js`, `some-package`, `fs`, etc.
 * @param {URL} base
 *   Full URL (to a file) that `specifier` is resolved relative from.
 * @param {Set<string>} [conditions]
 *   Conditions.
 * @param {boolean} [preserveSymlinks]
 *   Keep symlinks instead of resolving them.
 * @returns {URL}
 *   A URL object to the found thing.
 */
export function moduleResolve(specifier: string, base: URL, conditions?: Set<string>, preserveSymlinks?: boolean): URL;
/**
 * @param {string} specifier
 * @param {{parentURL?: string, conditions?: Array<string>}} context
 * @returns {{url: string, format?: string | null}}
 */
export function defaultResolve(specifier: string, context?: {
    parentURL?: string;
    conditions?: Array<string>;
}): {
    url: string;
    format?: string | null;
};
//# sourceMappingURL=resolve.d.ts.map