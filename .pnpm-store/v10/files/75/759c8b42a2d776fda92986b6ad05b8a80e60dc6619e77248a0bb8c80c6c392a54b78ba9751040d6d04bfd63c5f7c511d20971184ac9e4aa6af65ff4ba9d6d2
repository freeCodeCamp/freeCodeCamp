import { addAlgoliaAgent } from "./_algoliaAgent";
import { getVersion } from "./_getVersion";
import { makeSendEvents } from "./_sendEvent";
import { getUserToken, setUserToken, setAnonymousUserToken, onUserTokenChange, setAuthenticatedUserToken, onAuthenticatedUserTokenChange, getAuthenticatedUserToken } from "./_tokenUtils";
import { clickedObjectIDsAfterSearch, clickedObjectIDs, clickedFilters } from "./click";
import { convertedObjectIDsAfterSearch, addedToCartObjectIDsAfterSearch, purchasedObjectIDsAfterSearch, convertedObjectIDs, addedToCartObjectIDs, purchasedObjectIDs, convertedFilters } from "./conversion";
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
declare class AlgoliaAnalytics {
    _apiKey?: string;
    _appId?: string;
    _region?: string;
    _host?: string;
    _endpointOrigin: string;
    _anonymousUserToken: boolean;
    _userToken?: number | string;
    _authenticatedUserToken?: number | string;
    _userHasOptedOut: boolean;
    _useCookie: boolean;
    _cookieDuration: number;
    _ua: string[];
    _onUserTokenChangeCallback?: (userToken?: number | string) => void;
    _onAuthenticatedUserTokenChangeCallback?: (authenticatedUserToken?: number | string) => void;
    version: string;
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
    constructor({ requestFn }: {
        requestFn: RequestFnType;
    });
}
export default AlgoliaAnalytics;
