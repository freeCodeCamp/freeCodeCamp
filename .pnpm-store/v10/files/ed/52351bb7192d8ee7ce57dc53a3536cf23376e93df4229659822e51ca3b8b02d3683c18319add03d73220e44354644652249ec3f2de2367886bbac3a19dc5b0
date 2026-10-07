import { version } from "../package.json";

import { addAlgoliaAgent } from "./_algoliaAgent";
import { getVersion } from "./_getVersion";
import { makeSendEvents } from "./_sendEvent";
import {
  getUserToken,
  setUserToken,
  setAnonymousUserToken,
  onUserTokenChange,
  MONTH,
  setAuthenticatedUserToken,
  onAuthenticatedUserTokenChange,
  getAuthenticatedUserToken
} from "./_tokenUtils";
import {
  clickedObjectIDsAfterSearch,
  clickedObjectIDs,
  clickedFilters
} from "./click";
import {
  convertedObjectIDsAfterSearch,
  addedToCartObjectIDsAfterSearch,
  purchasedObjectIDsAfterSearch,
  convertedObjectIDs,
  addedToCartObjectIDs,
  purchasedObjectIDs,
  convertedFilters
} from "./conversion";
import { init } from "./init";
import type { RequestFnType } from "./utils/request";
import { viewedObjectIDs, viewedFilters } from "./view";

type Queue = {
  queue: string[][];
};

type AnalyticsFunction = {
  [key: string]: (fnName: string, fnArgs: any[]) => void;
};

export type AlgoliaAnalyticsObject = AnalyticsFunction | Queue;

declare global {
  interface Window {
    AlgoliaAnalyticsObject?: string;
  }
}

/**
 *  AlgoliaAnalytics class.
 */
class AlgoliaAnalytics {
  _apiKey?: string;
  _appId?: string;
  _region?: string;
  _host?: string;
  _endpointOrigin = "https://insights.algolia.io";
  _anonymousUserToken = true;
  _userToken?: number | string;
  _authenticatedUserToken?: number | string;
  _userHasOptedOut = false;
  _useCookie = false;
  _cookieDuration = 6 * MONTH;

  // user agent
  _ua: string[] = [];

  _onUserTokenChangeCallback?: (userToken?: number | string) => void;
  _onAuthenticatedUserTokenChangeCallback?: (
    authenticatedUserToken?: number | string
  ) => void;

  version: string = version;

  // Public methods
  init: typeof init;
  getVersion: typeof getVersion;
  addAlgoliaAgent: typeof addAlgoliaAgent;

  setUserToken: typeof setUserToken;
  setAnonymousUserToken: typeof setAnonymousUserToken;
  getUserToken: typeof getUserToken;
  onUserTokenChange: typeof onUserTokenChange;
  setAuthenticatedUserToken: typeof setAuthenticatedUserToken;
  getAuthenticatedUserToken: typeof getAuthenticatedUserToken;
  onAuthenticatedUserTokenChange: typeof onAuthenticatedUserTokenChange;

  sendEvents: ReturnType<typeof makeSendEvents>;

  clickedObjectIDsAfterSearch: typeof clickedObjectIDsAfterSearch;
  clickedObjectIDs: typeof clickedObjectIDs;
  clickedFilters: typeof clickedFilters;

  convertedObjectIDsAfterSearch: typeof convertedObjectIDsAfterSearch;
  purchasedObjectIDsAfterSearch: typeof purchasedObjectIDsAfterSearch;
  addedToCartObjectIDsAfterSearch: typeof addedToCartObjectIDsAfterSearch;
  convertedObjectIDs: typeof convertedObjectIDs;
  addedToCartObjectIDs: typeof addedToCartObjectIDs;
  purchasedObjectIDs: typeof purchasedObjectIDs;
  convertedFilters: typeof convertedFilters;

  viewedObjectIDs: typeof viewedObjectIDs;
  viewedFilters: typeof viewedFilters;

  constructor({ requestFn }: { requestFn: RequestFnType }) {
    this.sendEvents = makeSendEvents(requestFn).bind(this);

    this.init = init.bind(this);

    this.addAlgoliaAgent = addAlgoliaAgent.bind(this);

    this.setUserToken = setUserToken.bind(this);
    this.setAnonymousUserToken = setAnonymousUserToken.bind(this);
    this.getUserToken = getUserToken.bind(this);
    this.onUserTokenChange = onUserTokenChange.bind(this);
    this.setAuthenticatedUserToken = setAuthenticatedUserToken.bind(this);
    this.getAuthenticatedUserToken = getAuthenticatedUserToken.bind(this);
    this.onAuthenticatedUserTokenChange =
      onAuthenticatedUserTokenChange.bind(this);

    this.clickedObjectIDsAfterSearch = clickedObjectIDsAfterSearch.bind(this);
    this.clickedObjectIDs = clickedObjectIDs.bind(this);
    this.clickedFilters = clickedFilters.bind(this);

    this.convertedObjectIDsAfterSearch =
      convertedObjectIDsAfterSearch.bind(this);
    this.purchasedObjectIDsAfterSearch =
      purchasedObjectIDsAfterSearch.bind(this);
    this.addedToCartObjectIDsAfterSearch =
      addedToCartObjectIDsAfterSearch.bind(this);
    this.convertedObjectIDs = convertedObjectIDs.bind(this);
    this.addedToCartObjectIDs = addedToCartObjectIDs.bind(this);
    this.purchasedObjectIDs = purchasedObjectIDs.bind(this);
    this.convertedFilters = convertedFilters.bind(this);

    this.viewedObjectIDs = viewedObjectIDs.bind(this);
    this.viewedFilters = viewedFilters.bind(this);

    this.getVersion = getVersion.bind(this);
  }
}

export default AlgoliaAnalytics;
