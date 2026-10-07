import { IDbFilterStatement } from "../../common/query";
import { IGatsbyNode } from "../../../redux/types";
export declare function isDesc(sortOrder: "asc" | "desc" | "ASC" | "DESC" | boolean | void): boolean;
/**
 * Given dotted field selector (e.g. `foo.bar`) returns a plain list of values matching this selector.
 * It is possible that the path maps to several values when one of the intermediate values is an array.
 *
 * Example node:
 * {
 *   foo: [{ bar: `bar1`}, { bar: `bar2` }]
 * }
 *
 * In this case resolveFieldValue([`foo`, `bar`], node) returns [`bar1`, `bar2`]
 *
 * When `resolvedNodeFields` argument is passed the function first looks for values in this object
 * and only looks in the node if the value is not found in `resolvedNodeFields`
 */
export declare function resolveFieldValue(dottedFieldPath: string | Array<string>, nodeOrThunk: IGatsbyNode | (() => IGatsbyNode), resolvedNodeFields?: {
    [field: string]: unknown;
}): unknown;
export declare function matchesFilter(filter: IDbFilterStatement, fieldValue: unknown): boolean;
export declare function cartesianProduct(...arr: Array<Array<any>>): Array<any>;
export declare function compareKey(a: unknown, b: unknown): number;
