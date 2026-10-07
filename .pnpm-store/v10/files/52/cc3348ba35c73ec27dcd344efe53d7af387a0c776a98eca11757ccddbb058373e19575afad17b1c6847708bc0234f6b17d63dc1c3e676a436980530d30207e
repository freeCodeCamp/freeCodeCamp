import type AlgoliaAnalytics from "./insights";
import type { WithAdditionalParams } from "./utils";
export interface InsightsSearchClickEvent {
    eventName: string;
    userToken?: string;
    authenticatedUserToken?: string;
    timestamp?: number;
    index: string;
    queryID: string;
    objectIDs: string[];
    positions: number[];
}
export declare function clickedObjectIDsAfterSearch(this: AlgoliaAnalytics, ...params: Array<WithAdditionalParams<InsightsSearchClickEvent>>): ReturnType<AlgoliaAnalytics["sendEvents"]>;
export interface InsightsClickObjectIDsEvent {
    eventName: string;
    userToken?: string;
    authenticatedUserToken?: string;
    timestamp?: number;
    index: string;
    objectIDs: string[];
}
export declare function clickedObjectIDs(this: AlgoliaAnalytics, ...params: Array<WithAdditionalParams<InsightsClickObjectIDsEvent>>): ReturnType<AlgoliaAnalytics["sendEvents"]>;
export interface InsightsClickFiltersEvent {
    eventName: string;
    userToken?: string;
    authenticatedUserToken?: string;
    timestamp?: number;
    index: string;
    filters: string[];
}
export declare function clickedFilters(this: AlgoliaAnalytics, ...params: Array<WithAdditionalParams<InsightsClickFiltersEvent>>): ReturnType<AlgoliaAnalytics["sendEvents"]>;
