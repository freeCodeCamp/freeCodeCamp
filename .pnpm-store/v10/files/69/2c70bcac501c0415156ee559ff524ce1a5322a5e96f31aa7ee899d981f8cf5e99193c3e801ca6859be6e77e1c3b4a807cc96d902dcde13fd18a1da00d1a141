import { IGatsbyState } from "../redux/types";
import { IGroupedQueryIds } from "../services";
/**
 * Calculates the set of dirty query IDs (page.paths, or staticQuery.id's).
 *
 * Dirty state is tracked in `queries` reducer, here we simply filter
 * them from all tracked queries.
 */
export declare function calcDirtyQueryIds(state: IGatsbyState): Array<string>;
export { calcDirtyQueryIds as calcInitialDirtyQueryIds };
/**
 * Groups queryIds by whether they are static or page queries.
 */
export declare function groupQueryIds(queryIds: Array<string>): IGroupedQueryIds;
export declare function processStaticQueries(queryIds: IGroupedQueryIds["staticQueryIds"], { state, activity, graphqlRunner, graphqlTracing }: {
    state: any;
    activity: any;
    graphqlRunner: any;
    graphqlTracing: any;
}): Promise<void>;
export declare function processSliceQueries(queryIds: IGroupedQueryIds["sliceQueryIds"], { state, activity, graphqlRunner, graphqlTracing }: {
    state: any;
    activity: any;
    graphqlRunner: any;
    graphqlTracing: any;
}): Promise<void>;
export declare function processPageQueries(queryIds: IGroupedQueryIds["pageQueryIds"], { state, activity, graphqlRunner, graphqlTracing }: {
    state: any;
    activity: any;
    graphqlRunner: any;
    graphqlTracing: any;
}): Promise<void>;
