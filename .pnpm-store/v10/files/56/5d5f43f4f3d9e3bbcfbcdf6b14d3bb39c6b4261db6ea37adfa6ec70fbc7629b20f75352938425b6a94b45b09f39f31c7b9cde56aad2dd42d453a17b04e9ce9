/**
 * Constructs a RegExp that matches the exact string specified.
 *
 * This is useful for plugin hook filters.
 *
 * @param str the string to match.
 * @param flags flags for the RegExp.
 *
 * @example
 * ```ts
 * import { exactRegex } from '@rolldown/pluginutils';
 * const plugin = {
 *   name: 'plugin',
 *   resolveId: {
 *     filter: { id: exactRegex('foo') },
 *     handler(id) {} // will only be called for `foo`
 *   }
 * }
 * ```
 */
export function exactRegex(str, flags) {
    return new RegExp(`^${escapeRegex(str)}$`, flags);
}
/**
 * Constructs a RegExp that matches a value that has the specified prefix.
 *
 * This is useful for plugin hook filters.
 *
 * @param str the string to match.
 * @param flags flags for the RegExp.
 *
 * @example
 * ```ts
 * import { prefixRegex } from '@rolldown/pluginutils';
 * const plugin = {
 *   name: 'plugin',
 *   resolveId: {
 *     filter: { id: prefixRegex('foo') },
 *     handler(id) {} // will only be called for IDs starting with `foo`
 *   }
 * }
 * ```
 */
export function prefixRegex(str, flags) {
    return new RegExp(`^${escapeRegex(str)}`, flags);
}
const escapeRegexRE = /[-/\\^$*+?.()|[\]{}]/g;
function escapeRegex(str) {
    return str.replace(escapeRegexRE, '\\$&');
}
export function makeIdFiltersToMatchWithQuery(input) {
    if (!Array.isArray(input)) {
        return makeIdFilterToMatchWithQuery(
        // Array.isArray cannot narrow the type
        // https://github.com/microsoft/TypeScript/issues/17002
        input);
    }
    return input.map((i) => makeIdFilterToMatchWithQuery(i));
}
function makeIdFilterToMatchWithQuery(input) {
    if (typeof input === 'string') {
        return `${input}{?*,}`;
    }
    return makeRegexIdFilterToMatchWithQuery(input);
}
function makeRegexIdFilterToMatchWithQuery(input) {
    return new RegExp(
    // replace `$` with `(?:\?.*)?$` (ignore `\$`)
    input.source.replace(/(?<!\\)\$/g, '(?:\\?.*)?$'), input.flags);
}
