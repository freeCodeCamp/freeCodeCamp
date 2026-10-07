import { addEventType } from "./_addEventType";
import type AlgoliaAnalytics from "./insights";
import type { WithAdditionalParams } from "./utils";
import { extractAdditionalParams, storeQueryForObject } from "./utils";

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

export function clickedObjectIDsAfterSearch(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchClickEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchClickEvent>(params);

  events.forEach(({ index, queryID, objectIDs }) =>
    objectIDs.forEach(
      (objectID) =>
        !this._userHasOptedOut && storeQueryForObject(index, objectID, queryID)
    )
  );

  return this.sendEvents(addEventType("click", events), additionalParams);
}

export interface InsightsClickObjectIDsEvent {
  eventName: string;
  userToken?: string;
  authenticatedUserToken?: string;
  timestamp?: number;
  index: string;

  objectIDs: string[];
}

export function clickedObjectIDs(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsClickObjectIDsEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsClickObjectIDsEvent>(params);

  return this.sendEvents(addEventType("click", events), additionalParams);
}

export interface InsightsClickFiltersEvent {
  eventName: string;
  userToken?: string;
  authenticatedUserToken?: string;
  timestamp?: number;
  index: string;

  filters: string[];
}

export function clickedFilters(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsClickFiltersEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsClickFiltersEvent>(params);

  return this.sendEvents(addEventType("click", events), additionalParams);
}
