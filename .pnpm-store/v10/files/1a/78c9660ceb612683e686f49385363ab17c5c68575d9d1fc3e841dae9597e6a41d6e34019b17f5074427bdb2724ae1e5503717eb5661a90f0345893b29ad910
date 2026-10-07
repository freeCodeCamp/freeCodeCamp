import type { IndexWidget, InitialResults, InstantSearch, SearchOptions } from '../types';
/**
 * Waits for the results from the search instance to coordinate the next steps
 * in `getServerState()`.
 */
export declare function waitForResults(search: InstantSearch, skipRecommend?: boolean): Promise<SearchOptions[]>;
/**
 * Walks the InstantSearch root index to construct the initial results.
 */
export declare function getInitialResults(rootIndex: IndexWidget, 
/**
 * Search parameters sent to the search client,
 * returned by `waitForResults()`.
 */
requestParamsList?: SearchOptions[]): InitialResults;
