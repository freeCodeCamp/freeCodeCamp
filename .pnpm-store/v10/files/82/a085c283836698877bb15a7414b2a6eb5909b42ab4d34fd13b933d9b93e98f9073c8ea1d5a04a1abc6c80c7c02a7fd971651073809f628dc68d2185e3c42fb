export interface IDbQueryQuery {
    type: "query";
    path: Array<string>;
    query: IDbFilterStatement;
}
export interface IDbQueryElemMatch {
    type: "elemMatch";
    path: Array<string>;
    nestedQuery: DbQuery;
}
export type DbQuery = IDbQueryQuery | IDbQueryElemMatch;
export declare enum DbComparator {
    EQ = "$eq",
    NE = "$ne",
    GT = "$gt",
    GTE = "$gte",
    LT = "$lt",
    LTE = "$lte",
    IN = "$in",
    NIN = "$nin",
    REGEX = "$regex",
    GLOB = "$glob"
}
export type FilterValueNullable = string | number | boolean | null | undefined | RegExp | Array<string | number | boolean | null | undefined>;
export type FilterValue = string | number | boolean | RegExp | Array<string | number | boolean>;
export interface IInputQuery {
    [key: string]: FilterValueNullable | IInputQuery;
}
export interface IPreparedQueryArg {
    [key: string]: FilterValueNullable | IPreparedQueryArg;
}
export type DbComparatorValue = string | number | boolean | RegExp | null;
export interface IDbFilterStatement {
    comparator: DbComparator;
    value: DbComparatorValue | Array<DbComparatorValue>;
}
/**
 * Converts a nested mongo args object into array of DbQuery objects,
 * structured representation of each distinct path of the query. We convert
 * nested objects with multiple keys to separate instances.
 */
export declare function createDbQueriesFromObject(filter: Record<string, any>): Array<DbQuery>;
/**
 * Takes a DbQuery structure and returns a dotted representation of a field referenced in this query.
 *
 * Example:
 * ```js
 *   const query = createDbQueriesFromObject({
 *     foo: { $elemMatch: { id: { $eq: 5 }, test: { $gt: 42 } } },
 *     bar: { $in: [`bar`] }
 *   })
 *   const result = query.map(dbQueryToDottedField)
 * ```
 * Returns:
 *   [`foo.id`, `foo.test`, `bar`]
 */
export declare function dbQueryToDottedField(query: DbQuery): string;
export declare function getFilterStatement(dbQuery: DbQuery): IDbFilterStatement;
export declare function prefixResolvedFields(queries: Array<DbQuery>, resolvedFields: Record<string, unknown>): Array<DbQuery>;
/**
 * Transforms filters coming from input GraphQL query to mongodb-compatible format
 * (by prefixing comparators with "$").
 *
 * Example:
 *   { foo: { eq: 5 } } -> { foo: { $eq: 5 }}
 */
export declare function prepareQueryArgs(filterFields?: Array<IInputQuery> | IInputQuery): IPreparedQueryArg;
export declare function objectToDottedField(obj: Record<string, unknown>, path?: Array<string>): Record<string, unknown>;
export declare function sortBySpecificity(all: Array<DbQuery>): Array<DbQuery>;
