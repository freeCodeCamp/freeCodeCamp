import { M as withFilter } from "./shared/define-config-5HJ1b9vG.mjs";

//#region ../pluginutils/dist/filter/composable-filters.d.ts
type StringOrRegExp = string | RegExp;
type PluginModuleType = 'js' | 'jsx' | 'ts' | 'tsx' | 'json' | 'text' | 'base64' | 'dataurl' | 'binary' | 'empty' | (string & {});
type FilterExpressionKind = FilterExpression['kind'];
type FilterExpression = And | Or | Not | Id | ImporterId | ModuleType | Code | Query;
type TopLevelFilterExpression = Include | Exclude;
declare class And {
  kind: 'and';
  args: FilterExpression[];
  constructor(...args: FilterExpression[]);
}
declare class Or {
  kind: 'or';
  args: FilterExpression[];
  constructor(...args: FilterExpression[]);
}
declare class Not {
  kind: 'not';
  expr: FilterExpression;
  constructor(expr: FilterExpression);
}
interface QueryFilterObject {
  [key: string]: StringOrRegExp | boolean;
}
interface IdParams {
  cleanUrl?: boolean;
}
declare class Id {
  kind: 'id';
  pattern: StringOrRegExp;
  params: IdParams;
  constructor(pattern: StringOrRegExp, params?: IdParams);
}
declare class ImporterId {
  kind: 'importerId';
  pattern: StringOrRegExp;
  params: IdParams;
  constructor(pattern: StringOrRegExp, params?: IdParams);
}
declare class ModuleType {
  kind: 'moduleType';
  pattern: PluginModuleType;
  constructor(pattern: PluginModuleType);
}
declare class Code {
  kind: 'code';
  pattern: StringOrRegExp;
  constructor(expr: StringOrRegExp);
}
declare class Query {
  kind: 'query';
  key: string;
  pattern: StringOrRegExp | boolean;
  constructor(key: string, pattern: StringOrRegExp | boolean);
}
declare class Include {
  kind: 'include';
  expr: FilterExpression;
  constructor(expr: FilterExpression);
}
declare class Exclude {
  kind: 'exclude';
  expr: FilterExpression;
  constructor(expr: FilterExpression);
}
declare function and(...args: FilterExpression[]): And;
declare function or(...args: FilterExpression[]): Or;
declare function not(expr: FilterExpression): Not;
declare function id(pattern: StringOrRegExp, params?: IdParams): Id;
declare function importerId(pattern: StringOrRegExp, params?: IdParams): ImporterId;
declare function moduleType(pattern: PluginModuleType): ModuleType;
declare function code(pattern: StringOrRegExp): Code;
declare function query(key: string, pattern: StringOrRegExp | boolean): Query;
declare function include(expr: FilterExpression): Include;
declare function exclude(expr: FilterExpression): Exclude;
/**
 * convert a queryObject to FilterExpression like
 * ```js
 *   and(query(k1, v1), query(k2, v2))
 * ```
 * @param queryFilterObject The query filter object needs to be matched.
 * @returns a `And` FilterExpression
 */
declare function queries(queryFilter: QueryFilterObject): And;
declare function interpreter(exprs: TopLevelFilterExpression | TopLevelFilterExpression[], code?: string, id?: string, moduleType?: PluginModuleType, importerId?: string): boolean;
interface InterpreterCtx {
  urlSearchParamsCache?: URLSearchParams;
}
declare function interpreterImpl(expr: TopLevelFilterExpression[], code?: string, id?: string, moduleType?: PluginModuleType, importerId?: string, ctx?: InterpreterCtx): boolean;
declare function exprInterpreter(expr: FilterExpression, code?: string, id?: string, moduleType?: PluginModuleType, importerId?: string, ctx?: InterpreterCtx): boolean;
//#endregion
//#region ../pluginutils/dist/filter/filter-vite-plugins.d.ts
/**
 * Filters out Vite plugins that have `apply: 'serve'` set.
 *
 * Since Rolldown operates in build mode, plugins marked with `apply: 'serve'`
 * are intended only for Vite's dev server and should be excluded from the build process.
 *
 * @param plugins - Array of plugins (can include nested arrays)
 * @returns Filtered array with serve-only plugins removed
 *
 * @example
 * ```ts
 * import { defineConfig } from 'rolldown';
 * import { filterVitePlugins } from '@rolldown/pluginutils';
 * import viteReact from '@vitejs/plugin-react';
 *
 * export default defineConfig({
 *   plugins: filterVitePlugins([
 *     viteReact(),
 *     {
 *       name: 'dev-only',
 *       apply: 'serve', // This will be filtered out
 *       // ...
 *     }
 *   ])
 * });
 * ```
 */
declare function filterVitePlugins<T = any>(plugins: T | T[] | null | undefined | false): T[];
//#endregion
//#region ../pluginutils/dist/filter/simple-filters.d.ts
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
declare function exactRegex(str: string, flags?: string): RegExp;
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
declare function prefixRegex(str: string, flags?: string): RegExp;
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
declare function makeIdFiltersToMatchWithQuery<T extends string | RegExp>(input: T): WidenString<T>;
declare function makeIdFiltersToMatchWithQuery<T extends string | RegExp>(input: readonly T[]): WidenString<T>[];
declare function makeIdFiltersToMatchWithQuery(input: string | RegExp | readonly (string | RegExp)[]): string | RegExp | (string | RegExp)[];
//#endregion
export { FilterExpression, FilterExpressionKind, QueryFilterObject, TopLevelFilterExpression, and, code, exactRegex, exclude, exprInterpreter, filterVitePlugins, id, importerId, include, interpreter, interpreterImpl, makeIdFiltersToMatchWithQuery, moduleType, not, or, prefixRegex, queries, query, withFilter };