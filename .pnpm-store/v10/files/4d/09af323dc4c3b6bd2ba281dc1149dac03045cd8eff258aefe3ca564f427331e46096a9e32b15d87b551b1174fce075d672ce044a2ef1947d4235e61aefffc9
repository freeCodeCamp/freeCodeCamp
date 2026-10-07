import type AlgoliaAnalytics from "./insights";
import type { InsightsEvent } from "./types";
import type { WithAdditionalParams } from "./utils";
export interface InsightsSearchConversionEvent {
    eventName: string;
    userToken?: string;
    authenticatedUserToken?: string;
    timestamp?: number;
    index: string;
    queryID: string;
    objectIDs: string[];
    objectData?: InsightsEvent["objectData"];
    value?: InsightsEvent["value"];
    currency?: InsightsEvent["currency"];
}
export declare function convertedObjectIDsAfterSearch(this: AlgoliaAnalytics, ...params: Array<WithAdditionalParams<InsightsSearchConversionEvent>>): ReturnType<AlgoliaAnalytics["sendEvents"]>;
export declare function addedToCartObjectIDsAfterSearch(this: AlgoliaAnalytics, ...params: Array<WithAdditionalParams<InsightsSearchConversionEvent>>): ReturnType<AlgoliaAnalytics["sendEvents"]>;
export type InsightsSearchPurchaseEvent = Omit<InsightsSearchConversionEvent, "queryID"> & {
    /** @deprecated Use objectData.queryID instead. */
    queryID?: string;
};
export declare function purchasedObjectIDsAfterSearch(this: AlgoliaAnalytics, ...params: Array<WithAdditionalParams<InsightsSearchPurchaseEvent>>): ReturnType<AlgoliaAnalytics["sendEvents"]>;
export interface InsightsSearchConversionObjectIDsEvent {
    eventName: string;
    userToken?: string;
    authenticatedUserToken?: string;
    timestamp?: number;
    index: string;
    objectIDs: string[];
    objectData?: InsightsEvent["objectData"];
    value?: InsightsEvent["value"];
    currency?: InsightsEvent["currency"];
}
export declare function convertedObjectIDs(this: AlgoliaAnalytics, ...params: Array<WithAdditionalParams<InsightsSearchConversionObjectIDsEvent>>): ReturnType<AlgoliaAnalytics["sendEvents"]>;
export declare function addedToCartObjectIDs(this: AlgoliaAnalytics, ...params: Array<WithAdditionalParams<InsightsSearchConversionObjectIDsEvent>>): ReturnType<AlgoliaAnalytics["sendEvents"]>;
export declare function purchasedObjectIDs(this: AlgoliaAnalytics, ...params: Array<WithAdditionalParams<InsightsSearchConversionObjectIDsEvent>>): ReturnType<AlgoliaAnalytics["sendEvents"]>;
export interface InsightsSearchConversionFiltersEvent {
    eventName: string;
    userToken?: string;
    authenticatedUserToken?: string;
    timestamp?: number;
    index: string;
    filters: string[];
}
export declare function convertedFilters(this: AlgoliaAnalytics, ...params: Array<WithAdditionalParams<InsightsSearchConversionFiltersEvent>>): ReturnType<AlgoliaAnalytics["sendEvents"]>;
