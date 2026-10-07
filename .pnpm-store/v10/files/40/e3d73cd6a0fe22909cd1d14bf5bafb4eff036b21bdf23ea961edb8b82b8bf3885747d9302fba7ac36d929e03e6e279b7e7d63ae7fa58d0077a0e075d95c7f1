type StringOrRegExp = string | RegExp;
type PluginModuleType = 'js' | 'jsx' | 'ts' | 'tsx' | 'json' | 'text' | 'base64' | 'dataurl' | 'binary' | 'empty' | (string & {});
export type FilterExpressionKind = FilterExpression['kind'];
export type FilterExpression = And | Or | Not | Id | ImporterId | ModuleType | Code | Query;
export type TopLevelFilterExpression = Include | Exclude;
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
export interface QueryFilterObject {
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
export declare function and(...args: FilterExpression[]): And;
export declare function or(...args: FilterExpression[]): Or;
export declare function not(expr: FilterExpression): Not;
export declare function id(pattern: StringOrRegExp, params?: IdParams): Id;
export declare function importerId(pattern: StringOrRegExp, params?: IdParams): ImporterId;
export declare function moduleType(pattern: PluginModuleType): ModuleType;
export declare function code(pattern: StringOrRegExp): Code;
export declare function query(key: string, pattern: StringOrRegExp | boolean): Query;
export declare function include(expr: FilterExpression): Include;
export declare function exclude(expr: FilterExpression): Exclude;
/**
 * convert a queryObject to FilterExpression like
 * ```js
 *   and(query(k1, v1), query(k2, v2))
 * ```
 * @param queryFilterObject The query filter object needs to be matched.
 * @returns a `And` FilterExpression
 */
export declare function queries(queryFilter: QueryFilterObject): And;
export declare function interpreter(exprs: TopLevelFilterExpression | TopLevelFilterExpression[], code?: string, id?: string, moduleType?: PluginModuleType, importerId?: string): boolean;
interface InterpreterCtx {
    urlSearchParamsCache?: URLSearchParams;
}
export declare function interpreterImpl(expr: TopLevelFilterExpression[], code?: string, id?: string, moduleType?: PluginModuleType, importerId?: string, ctx?: InterpreterCtx): boolean;
export declare function exprInterpreter(expr: FilterExpression, code?: string, id?: string, moduleType?: PluginModuleType, importerId?: string, ctx?: InterpreterCtx): boolean;
export {};
