import type { addAlgoliaAgent } from "./_algoliaAgent";
import type { getVersion } from "./_getVersion";
import type { makeSendEvents } from "./_sendEvent";
import type {
  getUserToken,
  setUserToken,
  onUserTokenChange,
  onAuthenticatedUserTokenChange,
  setAuthenticatedUserToken,
  getAuthenticatedUserToken
} from "./_tokenUtils";
import type {
  clickedObjectIDsAfterSearch,
  clickedObjectIDs,
  clickedFilters
} from "./click";
import type {
  convertedObjectIDsAfterSearch,
  convertedObjectIDs,
  convertedFilters,
  purchasedObjectIDs,
  purchasedObjectIDsAfterSearch,
  addedToCartObjectIDsAfterSearch,
  addedToCartObjectIDs
} from "./conversion";
import type { init } from "./init";
import type { viewedObjectIDs, viewedFilters } from "./view";

type ParamReturnTypeTuple<T extends (...args: any) => any> = [
  Parameters<T>,
  ReturnType<T>
];
export type InsightsMethodMap = {
  init: ParamReturnTypeTuple<typeof init>;
  getVersion: ParamReturnTypeTuple<typeof getVersion>;
  addAlgoliaAgent: ParamReturnTypeTuple<typeof addAlgoliaAgent>;
  setUserToken: ParamReturnTypeTuple<typeof setUserToken>;
  getUserToken: ParamReturnTypeTuple<typeof getUserToken>;
  onUserTokenChange: ParamReturnTypeTuple<typeof onUserTokenChange>;
  setAuthenticatedUserToken: ParamReturnTypeTuple<
    typeof setAuthenticatedUserToken
  >;
  getAuthenticatedUserToken: ParamReturnTypeTuple<
    typeof getAuthenticatedUserToken
  >;
  onAuthenticatedUserTokenChange: ParamReturnTypeTuple<
    typeof onAuthenticatedUserTokenChange
  >;
  clickedObjectIDsAfterSearch: ParamReturnTypeTuple<
    typeof clickedObjectIDsAfterSearch
  >;
  clickedObjectIDs: ParamReturnTypeTuple<typeof clickedObjectIDs>;
  clickedFilters: ParamReturnTypeTuple<typeof clickedFilters>;
  convertedObjectIDsAfterSearch: ParamReturnTypeTuple<
    typeof convertedObjectIDsAfterSearch
  >;
  convertedObjectIDs: ParamReturnTypeTuple<typeof convertedObjectIDs>;
  convertedFilters: ParamReturnTypeTuple<typeof convertedFilters>;
  viewedObjectIDs: ParamReturnTypeTuple<typeof viewedObjectIDs>;
  viewedFilters: ParamReturnTypeTuple<typeof viewedFilters>;
  purchasedObjectIDs: ParamReturnTypeTuple<typeof purchasedObjectIDs>;
  purchasedObjectIDsAfterSearch: ParamReturnTypeTuple<
    typeof purchasedObjectIDsAfterSearch
  >;
  addedToCartObjectIDs: ParamReturnTypeTuple<typeof addedToCartObjectIDs>;
  addedToCartObjectIDsAfterSearch: ParamReturnTypeTuple<
    typeof addedToCartObjectIDsAfterSearch
  >;
  sendEvents: ParamReturnTypeTuple<ReturnType<typeof makeSendEvents>>;
};

type MethodType<MethodName extends keyof InsightsMethodMap> = (
  method: MethodName,
  ...args: InsightsMethodMap[MethodName][0]
) => InsightsMethodMap[MethodName][1];

export type Init = MethodType<"init">;

export type GetVersion = MethodType<"getVersion">;

export type AddAlgoliaAgent = MethodType<"addAlgoliaAgent">;

export type SetUserToken = MethodType<"setUserToken">;

export type GetUserToken = MethodType<"getUserToken">;

export type OnUserTokenChange = MethodType<"onUserTokenChange">;

export type ClickedObjectIDsAfterSearch =
  MethodType<"clickedObjectIDsAfterSearch">;

export type ClickedObjectIDs = MethodType<"clickedObjectIDs">;

export type ClickedFilters = MethodType<"clickedFilters">;

export type ConvertedObjectIDsAfterSearch =
  MethodType<"convertedObjectIDsAfterSearch">;

export type ConvertedObjectIDs = MethodType<"convertedObjectIDs">;

export type ConvertedFilters = MethodType<"convertedFilters">;

export type ViewedObjectIDs = MethodType<"viewedObjectIDs">;

export type ViewedFilters = MethodType<"viewedFilters">;

export type SendEvents = MethodType<"sendEvents">;

export type InsightsClient = (<MethodName extends keyof InsightsMethodMap>(
  method: MethodName,
  ...args: InsightsMethodMap[MethodName][0]
) => InsightsMethodMap[MethodName][1]) & { version?: string };

export type InsightsEventType = "click" | "conversion" | "view";
export type InsightsEventConversionSubType = "addToCart" | "purchase";

export type InsightsEventObjectData = {
  queryID?: string;

  price?: number | string;
  discount?: number | string;
  quantity?: number;
};

export type InsightsEvent = {
  eventType: InsightsEventType;
  eventSubtype?: InsightsEventConversionSubType;

  eventName: string;
  userToken?: number | string;
  authenticatedUserToken?: number | string;
  timestamp?: number;
  index: string;

  queryID?: string;
  objectIDs?: string[];
  positions?: number[];
  objectData?: InsightsEventObjectData[];
  objectIDsWithInferredQueryID?: string[];

  filters?: string[];

  value?: number | string;
  currency?: string;
};

export type InsightsAdditionalEventParams = {
  headers?: Record<string, string>;
  inferQueryID?: boolean;
};
