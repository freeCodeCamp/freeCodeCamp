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
export declare function exactRegex(str: string, flags?: string): RegExp;
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
export declare function prefixRegex(str: string, flags?: string): RegExp;
type WidenString<T> = T extends string ? string : T;
/**
 * Converts a id filter to match with an id with a query.
 *
 * @param input the id filters to convert.
 *
 * @example
 * ```ts
 * import { makeIdFiltersToMatchWithQuery } from '@rolldown/pluginutils';
 * const plugin = {
 *   name: 'plugin',
 *   transform: {
 *     filter: { id: makeIdFiltersToMatchWithQuery(['**' + '/*.js', /\.ts$/]) },
 *     // The handler will be called for IDs like:
 *     // - foo.js
 *     // - foo.js?foo
 *     // - foo.txt?foo.js
 *     // - foo.ts
 *     // - foo.ts?foo
 *     // - foo.txt?foo.ts
 *     handler(code, id) {}
 *   }
 * }
 * ```
 */
export declare function makeIdFiltersToMatchWithQuery<T extends string | RegExp>(input: T): WidenString<T>;
export declare function makeIdFiltersToMatchWithQuery<T extends string | RegExp>(input: readonly T[]): WidenString<T>[];
export declare function makeIdFiltersToMatchWithQuery(input: string | RegExp | readonly (string | RegExp)[]): string | RegExp | (string | RegExp)[];
export {};
