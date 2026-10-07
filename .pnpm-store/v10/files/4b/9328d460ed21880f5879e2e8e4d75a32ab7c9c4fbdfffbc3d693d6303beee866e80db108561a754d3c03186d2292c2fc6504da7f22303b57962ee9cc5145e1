import { ActionsUnion, IComponentState, IGatsbyState, IQueryState } from "../types";
export declare const FLAG_DIRTY_NEW_PAGE = 1;
export declare const FLAG_DIRTY_TEXT = 2;
export declare const FLAG_DIRTY_DATA = 4;
export declare const FLAG_DIRTY_PAGE_CONTEXT = 8;
export declare const FLAG_ERROR_EXTRACTION = 1;
export declare const FLAG_RUNNING_INFLIGHT = 1;
/**
 * Tracks query dirtiness. Dirty queries are queries that:
 *
 * - depend on nodes or node collections (via `actions.createPageDependency`) that have changed.
 * - have been recently extracted (or their query text has changed)
 * - belong to newly created pages (or pages with modified context)
 *
 * Dirty queries must be re-ran.
 */
export declare function queriesReducer(state: {
    byNode: Map<string, Set<string>>;
    byConnection: Map<string, Set<string>>;
    queryNodes: Map<string, Set<string>>;
    trackedQueries: Map<string, IQueryState>;
    trackedComponents: Map<string, IComponentState>;
    deletedQueries: Set<string>;
    dirtyQueriesListToEmitViaWebsocket: string[];
} | undefined, action: ActionsUnion): IGatsbyState["queries"];
export declare function hasFlag(allFlags: number, flag: number): boolean;
