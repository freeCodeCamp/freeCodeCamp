import { IGatsbyNode } from "../../redux/types";
import { IDbQueryElemMatch, FilterValue, FilterValueNullable } from "../common/query";
export type FilterOp = "$eq" | "$ne" | "$lt" | "$lte" | "$gt" | "$gte" | "$in" | "$nin" | "$regex";
export type FilterCacheKey = string;
type GatsbyNodeID = string;
export interface IGatsbyNodePartial {
    id: GatsbyNodeID;
    internal: {
        type: string;
        counter: number;
    };
    gatsbyNodePartialInternalData: {
        indexFields: Set<string>;
    };
    [k: string]: any;
}
/**
 * Grabs an instance of IGatsbyNodePartial for the given node.
 * This accepts an IGatsbyNode or IGatsbyNodePartial as input, which allows
 * us to conditionally store index fields on the partial if we encounter
 * one that hasn't been stored on the partial yet.
 */
export declare const getGatsbyNodePartial: (node: IGatsbyNode | IGatsbyNodePartial, indexFields: Array<string>, resolvedFields: Record<string, any>) => IGatsbyNodePartial;
export interface IFilterCache {
    op: FilterOp;
    byValue: Map<FilterValueNullable, Array<IGatsbyNodePartial>>;
    meta: {
        nodesUnordered?: Array<IGatsbyNodePartial>;
        orderedByCounter?: Array<IGatsbyNodePartial>;
        valuesAsc?: Array<FilterValue>;
        nodesByValueAsc?: Array<IGatsbyNodePartial>;
        valueRangesAsc?: Map<FilterValue, [number, number]>;
        valuesDesc?: Array<FilterValue>;
        nodesByValueDesc?: Array<IGatsbyNodePartial>;
        valueRangesDesc?: Map<FilterValue, [number, number]>;
    };
}
export type FiltersCache = Map<FilterCacheKey, IFilterCache>;
export declare function postIndexingMetaSetup(filterCache: IFilterCache, op: FilterOp): void;
/**
 * Given a single non-elemMatch filter path, a list of node types, and a
 * cache, create a cache that for each resulting value of the filter contains
 * all the Nodes in a list.
 * This cache is used for applying the filter and is a massive improvement over
 * looping over all the nodes, when the number of pages (/nodes) scales up.
 */
export declare const ensureIndexByQuery: (op: FilterOp, filterCacheKey: FilterCacheKey, filterPath: Array<string>, nodeTypeNames: Array<string>, filtersCache: FiltersCache, indexFields: Array<string>, resolvedFields: Record<string, any>) => void;
export declare function ensureEmptyFilterCache(filterCacheKey: any, nodeTypeNames: Array<string>, filtersCache: FiltersCache, indexFields: Array<string>, resolvedFields: Record<string, any>): void;
export declare const ensureIndexByElemMatch: (op: FilterOp, filterCacheKey: FilterCacheKey, filter: IDbQueryElemMatch, nodeTypeNames: Array<string>, filtersCache: FiltersCache, indexFields: Array<string>, resolvedFields: Record<string, any>) => void;
/**
 * Given the cache key for a filter and a target value return the list of nodes
 * that resolve to this value. The returned array should be ordered by id.
 * This returns `undefined` if there is no such node
 *
 * Basically if the filter was {a: {b: {slug: {eq: "foo/bar"}}}} then it will
 * return all the nodes that have `node.slug === "foo/bar"`. That usually (but
 * not always) at most one node for slug, but this filter can apply to anything.
 *
 * Arrays returned by this function must be ordered by internal.counter and
 * not contain duplicate nodes (!)
 */
export declare const getNodesFromCacheByValue: (filterCacheKey: FilterCacheKey, filterValue: FilterValueNullable, filtersCache: FiltersCache, wasElemMatch: any) => Array<IGatsbyNodePartial> | undefined;
/**
 * Finds the intersection of two arrays in O(n) with n = min(a.length, b.length)
 * The returned set should not contain duplicate nodes.
 *
 * The input should be ordered by node.internal.counter and it will return a
 * list that is also ordered by node.internal.counter
 */
export declare function intersectNodesByCounter(a: Array<IGatsbyNodePartial>, b: Array<IGatsbyNodePartial>): Array<IGatsbyNodePartial>;
/**
 * Merge two lists of nodes.
 * The returned set should not contain duplicate nodes.
 *
 * The input should be ordered by node.internal.counter and it will return a
 * list that is also ordered by node.internal.counter
 */
export declare function unionNodesByCounter(a: Array<IGatsbyNodePartial>, b: Array<IGatsbyNodePartial>): Array<IGatsbyNodePartial>;
export declare function getSortFieldIdentifierKeys(indexFields: Array<string>, resolvedFields: Record<string, any>): Array<string>;
export {};
