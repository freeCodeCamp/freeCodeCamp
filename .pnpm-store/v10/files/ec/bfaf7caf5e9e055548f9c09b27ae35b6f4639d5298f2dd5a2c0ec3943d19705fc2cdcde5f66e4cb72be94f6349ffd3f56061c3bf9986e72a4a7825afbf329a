import { addEventType } from "./_addEventType";
import type AlgoliaAnalytics from "./insights";
import type { WithAdditionalParams } from "./utils";
import { extractAdditionalParams } from "./utils";

export interface InsightsSearchViewObjectIDsEvent {
  eventName: string;
  userToken?: string;
  authenticatedUserToken?: string;
  timestamp?: number;
  index: string;

  objectIDs: string[];
}

export function viewedObjectIDs(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchViewObjectIDsEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchViewObjectIDsEvent>(params);

  return this.sendEvents(addEventType("view", events), additionalParams);
}

export interface InsightsSearchViewFiltersEvent {
  eventName: string;
  userToken?: string;
  authenticatedUserToken?: string;
  timestamp?: number;
  index: string;

  filters: string[];
}

export function viewedFilters(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchViewFiltersEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchViewFiltersEvent>(params);

  return this.sendEvents(addEventType("view", events), additionalParams);
}
