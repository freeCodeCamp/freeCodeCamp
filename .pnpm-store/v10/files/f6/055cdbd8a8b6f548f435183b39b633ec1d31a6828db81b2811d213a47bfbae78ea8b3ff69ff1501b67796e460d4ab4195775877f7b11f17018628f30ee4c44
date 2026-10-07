import { addEventType, addEventTypeAndSubtype } from "./_addEventType";
import type AlgoliaAnalytics from "./insights";
import type { InsightsEvent } from "./types";
import type { WithAdditionalParams } from "./utils";
import { extractAdditionalParams, storeQueryForObject } from "./utils";

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

export function convertedObjectIDsAfterSearch(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionEvent>(params);

  return this.sendEvents(addEventType("conversion", events), additionalParams);
}

export function addedToCartObjectIDsAfterSearch(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionEvent>(params);

  events.forEach(({ index, queryID, objectIDs, objectData }) =>
    objectIDs.forEach((objectID, i) => {
      const objQueryID = objectData?.[i]?.queryID ?? queryID;
      if (!this._userHasOptedOut && objQueryID)
        storeQueryForObject(index, objectID, objQueryID);
    })
  );

  return this.sendEvents(
    addEventTypeAndSubtype("conversion", "addToCart", events),
    additionalParams
  );
}

export type InsightsSearchPurchaseEvent = Omit<
  InsightsSearchConversionEvent,
  "queryID"
> & {
  /** @deprecated Use objectData.queryID instead. */
  queryID?: string;
};

export function purchasedObjectIDsAfterSearch(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchPurchaseEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchPurchaseEvent>(params);

  return this.sendEvents(
    addEventTypeAndSubtype("conversion", "purchase", events),
    additionalParams
  );
}

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

export function convertedObjectIDs(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionObjectIDsEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionObjectIDsEvent>(params);

  return this.sendEvents(addEventType("conversion", events), additionalParams);
}

export function addedToCartObjectIDs(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionObjectIDsEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionObjectIDsEvent>(params);

  events.forEach(({ index, objectIDs, objectData }) =>
    objectIDs.forEach((objectID, i) => {
      const queryID = objectData?.[i]?.queryID;
      if (!this._userHasOptedOut && queryID)
        storeQueryForObject(index, objectID, queryID);
    })
  );

  return this.sendEvents(
    addEventTypeAndSubtype("conversion", "addToCart", events),
    additionalParams
  );
}

export function purchasedObjectIDs(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionObjectIDsEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionObjectIDsEvent>(params);

  return this.sendEvents(
    addEventTypeAndSubtype("conversion", "purchase", events),
    additionalParams
  );
}

export interface InsightsSearchConversionFiltersEvent {
  eventName: string;
  userToken?: string;
  authenticatedUserToken?: string;
  timestamp?: number;
  index: string;

  filters: string[];
}

export function convertedFilters(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionFiltersEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionFiltersEvent>(params);

  return this.sendEvents(addEventType("conversion", events), additionalParams);
}
