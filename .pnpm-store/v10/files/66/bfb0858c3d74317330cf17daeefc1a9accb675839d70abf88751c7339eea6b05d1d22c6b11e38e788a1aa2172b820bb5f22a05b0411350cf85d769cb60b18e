import { DbQuery } from "../common/query";
import { FiltersCache, IGatsbyNodePartial } from "./indexing";
import { IRunQueryArgs, IQueryResult } from "../types";
export interface IRunFilterArg extends IRunQueryArgs {
    filtersCache: FiltersCache;
}
/**
 * Given the path of a set of filters, return the sets of nodes that pass the
 * filter.
 * Only nodes of given node types will be considered
 * A fast index is created if one doesn't exist yet so cold call is slower.
 *
 * Note: Not a public API. Exported for tests.
 */
export declare function applyFastFilters(filters: Array<DbQuery>, nodeTypeNames: Array<string>, filtersCache: FiltersCache, sortFields: Array<string>, resolvedFields: any): Array<IGatsbyNodePartial> | null;
/**
 * Filters and sorts a list of nodes using mongodb-like syntax.
 *
 * @param args raw graphql query filter/sort as an object
 * @property {{filter?: Object, sort?: Object, skip?: number, limit?: number} | undefined} args.queryArgs
 * @property {FiltersCache} args.filtersCache A cache of indexes where you can
 *   look up Nodes grouped by a FilterCacheKey, which yields a Map which holds
 *   an arr of Nodes for the value that the filter is trying to query against.
 *   This object lives in query/query-runner.js and is passed down runQuery.
 * @returns Collection of results. Collection will be sliced by `skip` and `limit`
 */
export declare function runFastFiltersAndSort(args: IRunFilterArg): IQueryResult;
