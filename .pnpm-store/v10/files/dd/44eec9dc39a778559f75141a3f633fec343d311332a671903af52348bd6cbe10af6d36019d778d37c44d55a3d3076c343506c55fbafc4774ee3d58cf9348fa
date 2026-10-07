'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var version="2.17.2";

function extractAdditionalParams(params) {
    return params.reduce(function (ref, param) {
        var events = ref.events;
        var additionalParams = ref.additionalParams;

        // Real events all have `index` as a mandatory parameter, which we
        // can rely on to distinguish them from additional parameters
        if ("index" in param) {
            return { additionalParams: additionalParams, events: events.concat( [param]) };
        }
        return { events: events, additionalParams: param };
    }, {
        events: [],
        additionalParams: undefined
    });
}

var supportsCookies = function () {
    try {
        return Boolean(navigator.cookieEnabled);
    }
    catch (e) {
        return false;
    }
};
var supportsNodeHttpModule = function () {
    try {
        /* eslint-disable @typescript-eslint/no-var-requires */
        var ref = require("http");
        var nodeHttpRequest = ref.request;
        var ref$1 = require("https");
        var nodeHttpsRequest = ref$1.request;
        /* eslint-enable */
        return Boolean(nodeHttpRequest) && Boolean(nodeHttpsRequest);
    }
    catch (e) {
        return false;
    }
};
var supportsNativeFetch = function () {
    try {
        return fetch !== undefined;
    }
    catch (e) {
        return false;
    }
};

/**
 * A utility class for safely interacting with localStorage.
 */
var LocalStorage = function LocalStorage () {};

LocalStorage.get = function get (key) {
    var _a;
    var val = (_a = this.store) === null || _a === void 0 ? void 0 : _a.getItem(key);
    if (!val) {
        return null;
    }
    try {
        return JSON.parse(val);
    }
    catch (_b) {
        return null;
    }
};
/**
 * Safely set a value in localStorage.
 * If the storage is full, this method will catch the error and log a warning.
 *
 * @param key - String value of the key.
 * @param value - Any value to store.
 */
LocalStorage.set = function set (key, value) {
    var _a;
    try {
        (_a = this.store) === null || _a === void 0 ? void 0 : _a.setItem(key, JSON.stringify(value));
    }
    catch (_b) {
        // eslint-disable-next-line no-console
        console.error(("Unable to set " + key + " in localStorage, storage may be full."));
    }
};
/**
 * Remove a value from localStorage.
 *
 * @param key - String value of the key.
 */
LocalStorage.remove = function remove (key) {
    var _a;
    (_a = this.store) === null || _a === void 0 ? void 0 : _a.removeItem(key);
};
LocalStorage.store = ensureLocalStorage();
function ensureLocalStorage() {
    try {
        var testKey = "__test_localStorage__";
        globalThis.localStorage.setItem(testKey, testKey);
        globalThis.localStorage.removeItem(testKey);
        return globalThis.localStorage;
    }
    catch (_a) {
        return undefined;
    }
}

var STORE = "AlgoliaObjectQueryCache";
var LIMIT = 5000; // 1 entry is typically no more than 100 bytes, so this is ~500kB worth of data - most browsers allow at least 5MB per origin
var FREE = 1000;
function getCache() {
    var _a;
    return (_a = LocalStorage.get(STORE)) !== null && _a !== void 0 ? _a : {};
}
function setCache(objectQueryMap) {
    LocalStorage.set(STORE, limited(objectQueryMap));
}
function limited(objectQueryMap) {
    return Object.keys(objectQueryMap).length > LIMIT
        ? purgeOldest(objectQueryMap)
        : objectQueryMap;
}
function purgeOldest(objectQueryMap) {
    var sorted = Object.entries(objectQueryMap).sort(function (ref, ref$1) {
        var aTimestamp = ref[1][1];
        var bTimestamp = ref$1[1][1];

        return bTimestamp - aTimestamp;
    });
    var newObjectQueryMap = sorted
        .slice(0, sorted.length - FREE - 1)
        .reduce(function (acc, ref) {
            var obj;

            var key = ref[0];
            var value = ref[1];
            return (Object.assign(Object.assign({}, acc), ( obj = {}, obj[key] = value, obj )));
    }, {});
    return newObjectQueryMap;
}
function makeKey(index, objectID) {
    return (index + "_" + objectID);
}
function storeQueryForObject(index, objectID, queryID) {
    var objectQueryMap = getCache();
    objectQueryMap[makeKey(index, objectID)] = [queryID, Date.now()];
    setCache(objectQueryMap);
}
function getQueryForObject(index, objectID) {
    return getCache()[makeKey(index, objectID)];
}
function removeQueryForObjects(index, objectIDs) {
    var objectQueryMap = getCache();
    objectIDs.forEach(function (objectID) {
        delete objectQueryMap[makeKey(index, objectID)];
    });
    setCache(objectQueryMap);
}

// use theses type checking helpers to avoid mistyping "undefind", I mean "undfined"
var isUndefined = function (value) { return typeof value === "undefined"; };
var isNumber = function (value) { return typeof value === "number"; };
/* eslint-disable @typescript-eslint/ban-types */
var isFunction = function (value) { return typeof value === "function"; };
/* eslint-enable */
var isPromise = function (value) { return typeof (value === null || value === void 0 ? void 0 : value.then) === "function"; };

function getFunctionalInterface(instance) {
    return function (functionName) {
        var functionArguments = [], len = arguments.length - 1;
        while ( len-- > 0 ) functionArguments[ len ] = arguments[ len + 1 ];

        if (functionName && isFunction(instance[functionName])) {
            // @ts-expect-error
            return instance[functionName].apply(instance, functionArguments);
        }
        // eslint-disable-next-line no-console
        console.warn(("The method `" + functionName + "` doesn't exist."));
        return undefined;
    };
}

var DEFAULT_ALGOLIA_AGENTS = [
    ("insights-js (" + version + ")"),
    ("insights-js-" + ("node-cjs") + " (" + version + ")")
];
function addAlgoliaAgent(algoliaAgent) {
    if (this._ua.indexOf(algoliaAgent) === -1) {
        this._ua.push(algoliaAgent);
    }
}

function getVersion(callback) {
    if (isFunction(callback)) {
        callback(this.version);
    }
    return this.version;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */


function __rest(s, e) {
    var t = {};
    for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        { t[p] = s[p]; } }
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        { for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                { t[p[i]] = s[p[i]]; }
        } }
    return t;
}

function addQueryId(events) {
    return events.map(function (event) {
        var _a;
        if (!isValidEventForQueryIdLookup(event)) {
            return event;
        }
        var objectIDsWithInferredQueryID = [];
        var updatedObjectData = (_a = event.objectIDs) === null || _a === void 0 ? void 0 : _a.map(function (objectID, i) {
            var _a, _b;
            var objectData = (_a = event.objectData) === null || _a === void 0 ? void 0 : _a[i];
            if (objectData === null || objectData === void 0 ? void 0 : objectData.queryID) {
                return objectData;
            }
            var ref = (_b = getQueryForObject(event.index, objectID)) !== null && _b !== void 0 ? _b : [];
            var queryID = ref[0];
            if (queryID) {
                objectIDsWithInferredQueryID.push(objectID);
            }
            return Object.assign(Object.assign({}, objectData), { queryID: queryID });
        });
        if (objectIDsWithInferredQueryID.length === 0) {
            return event;
        }
        return Object.assign(Object.assign({}, event), { objectData: updatedObjectData, objectIDsWithInferredQueryID: objectIDsWithInferredQueryID });
    });
}
function isValidEventForQueryIdLookup(event) {
    return !event.queryID && event.eventType === "conversion";
}

function makeSendEvents(requestFn) {
    return function sendEvents(eventData, additionalParams) {
        var this$1$1 = this;

        var _a, _b;
        if (this._userHasOptedOut) {
            return Promise.resolve(false);
        }
        var hasCredentials = (!isUndefined(this._apiKey) && !isUndefined(this._appId)) ||
            (((_a = additionalParams === null || additionalParams === void 0 ? void 0 : additionalParams.headers) === null || _a === void 0 ? void 0 : _a["X-Algolia-Application-Id"]) &&
                ((_b = additionalParams === null || additionalParams === void 0 ? void 0 : additionalParams.headers) === null || _b === void 0 ? void 0 : _b["X-Algolia-API-Key"]));
        if (!hasCredentials) {
            throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters or provide custom credentials in additional parameters.");
        }
        if (!this._userToken && this._anonymousUserToken) {
            this.setAnonymousUserToken(true);
        }
        var events = ((additionalParams === null || additionalParams === void 0 ? void 0 : additionalParams.inferQueryID) ? addQueryId(eventData) : eventData).map(function (data) {
            var _a, _b;
            var filters = data.filters;
            var rest = __rest(data, ["filters"]);
            var payload = Object.assign(Object.assign({}, rest), { userToken: (_a = data === null || data === void 0 ? void 0 : data.userToken) !== null && _a !== void 0 ? _a : this$1$1._userToken, authenticatedUserToken: (_b = data === null || data === void 0 ? void 0 : data.authenticatedUserToken) !== null && _b !== void 0 ? _b : this$1$1._authenticatedUserToken });
            if (!isUndefined(filters)) {
                payload.filters = filters.map(encodeURIComponent);
            }
            return payload;
        });
        if (events.length === 0) {
            return Promise.resolve(false);
        }
        var send = sendRequest(requestFn, this._ua, this._endpointOrigin, events, this._appId, this._apiKey, additionalParams === null || additionalParams === void 0 ? void 0 : additionalParams.headers);
        return isPromise(send) ? send.then(purgePurchased(events)) : send;
    };
}
function purgePurchased(events) {
    return function (sent) {
        if (sent) {
            events
                .filter(function (ref) {
                    var eventType = ref.eventType;
                    var eventSubtype = ref.eventSubtype;
                    var objectIDs = ref.objectIDs;

                    return eventType === "conversion" &&
                eventSubtype === "purchase" &&
                (objectIDs === null || objectIDs === void 0 ? void 0 : objectIDs.length);
            })
                .forEach(function (ref) {
                    var index = ref.index;
                    var objectIDs = ref.objectIDs;

                    return removeQueryForObjects(index, objectIDs);
            });
        }
        return sent;
    };
}
// eslint-disable-next-line max-params
function sendRequest(requestFn, userAgents, endpointOrigin, events, appId, apiKey, additionalHeaders) {
    if ( additionalHeaders === void 0 ) additionalHeaders = {};

    var providedAppId = additionalHeaders["X-Algolia-Application-Id"];
    var providedApiKey = additionalHeaders["X-Algolia-API-Key"];
    var restHeaders = __rest(additionalHeaders, ["X-Algolia-Application-Id", "X-Algolia-API-Key"]);
    // Auth query
    var headers = Object.assign({ "X-Algolia-Application-Id": providedAppId !== null && providedAppId !== void 0 ? providedAppId : appId, "X-Algolia-API-Key": providedApiKey !== null && providedApiKey !== void 0 ? providedApiKey : apiKey, "X-Algolia-Agent": encodeURIComponent(userAgents.join("; ")) }, restHeaders);
    var queryParameters = Object.keys(headers)
        .map(function (key) { return (key + "=" + (headers[key])); })
        .join("&");
    var reportingURL = endpointOrigin + "/1/events?" + queryParameters;
    return requestFn(reportingURL, { events: events });
}

/**
 * Create UUID according to
 * https://www.ietf.org/rfc/rfc4122.txt.
 *
 * @returns Generated UUID.
 */
function createUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        /* eslint-disable no-bitwise */
        var r = (Math.random() * 16) | 0;
        var v = c === "x" ? r : (r & 0x3) | 0x8;
        /* eslint-enable */
        return v.toString(16);
    });
}

var COOKIE_KEY = "_ALGOLIA";
var MONTH = 30 * 24 * 60 * 60 * 1000;
var setCookie = function (name, value, duration) {
    var d = new Date();
    d.setTime(d.getTime() + duration);
    var expires = "expires=" + (d.toUTCString());
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};
var getCookie = function (name) {
    var prefix = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(prefix) === 0) {
            return c.substring(prefix.length, c.length);
        }
    }
    return "";
};
function setAnonymousUserToken(inMemory) {
    if ( inMemory === void 0 ) inMemory = false;

    if (inMemory) {
        this.setUserToken(("anonymous-" + (createUUID())));
        return;
    }
    if (!supportsCookies()) {
        return;
    }
    var foundToken = getCookie(COOKIE_KEY);
    if (!foundToken ||
        foundToken === "" ||
        foundToken.indexOf("anonymous-") !== 0) {
        var savedUserToken = this.setUserToken(("anonymous-" + (createUUID())));
        setCookie(COOKIE_KEY, savedUserToken, this._cookieDuration);
    }
    else {
        this.setUserToken(foundToken);
    }
}
function setUserToken(userToken) {
    this._userToken = userToken;
    if (isFunction(this._onUserTokenChangeCallback)) {
        this._onUserTokenChangeCallback(this._userToken);
    }
    return this._userToken;
}
function getUserToken(options, callback) {
    if (isFunction(callback)) {
        callback(null, this._userToken);
    }
    return this._userToken;
}
function onUserTokenChange(callback, options) {
    this._onUserTokenChangeCallback = callback;
    if (options &&
        options.immediate &&
        isFunction(this._onUserTokenChangeCallback)) {
        this._onUserTokenChangeCallback(this._userToken);
    }
}
function setAuthenticatedUserToken(authenticatedUserToken) {
    this._authenticatedUserToken = authenticatedUserToken;
    if (isFunction(this._onAuthenticatedUserTokenChangeCallback)) {
        this._onAuthenticatedUserTokenChangeCallback(this._authenticatedUserToken);
    }
    return this._authenticatedUserToken;
}
function getAuthenticatedUserToken(options, callback) {
    if (isFunction(callback)) {
        callback(null, this._authenticatedUserToken);
    }
    return this._authenticatedUserToken;
}
function onAuthenticatedUserTokenChange(callback, options) {
    this._onAuthenticatedUserTokenChangeCallback = callback;
    if (options &&
        options.immediate &&
        isFunction(this._onAuthenticatedUserTokenChangeCallback)) {
        this._onAuthenticatedUserTokenChangeCallback(this._authenticatedUserToken);
    }
}

function addEventType(eventType, params) {
    return params.map(function (event) { return (Object.assign({ eventType: eventType }, event)); });
}
function addEventTypeAndSubtype(eventType, eventSubtype, params) {
    return params.map(function (event) { return (Object.assign({ eventType: eventType,
        eventSubtype: eventSubtype }, event)); });
}

function clickedObjectIDsAfterSearch() {
    var this$1$1 = this;
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    events.forEach(function (ref) {
        var index = ref.index;
        var queryID = ref.queryID;
        var objectIDs = ref.objectIDs;

        return objectIDs.forEach(function (objectID) { return !this$1$1._userHasOptedOut && storeQueryForObject(index, objectID, queryID); });
    });
    return this.sendEvents(addEventType("click", events), additionalParams);
}
function clickedObjectIDs() {
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    return this.sendEvents(addEventType("click", events), additionalParams);
}
function clickedFilters() {
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    return this.sendEvents(addEventType("click", events), additionalParams);
}

function convertedObjectIDsAfterSearch() {
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    return this.sendEvents(addEventType("conversion", events), additionalParams);
}
function addedToCartObjectIDsAfterSearch() {
    var this$1$1 = this;
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    events.forEach(function (ref) {
        var index = ref.index;
        var queryID = ref.queryID;
        var objectIDs = ref.objectIDs;
        var objectData = ref.objectData;

        return objectIDs.forEach(function (objectID, i) {
        var _a, _b;
        var objQueryID = (_b = (_a = objectData === null || objectData === void 0 ? void 0 : objectData[i]) === null || _a === void 0 ? void 0 : _a.queryID) !== null && _b !== void 0 ? _b : queryID;
        if (!this$1$1._userHasOptedOut && objQueryID)
            { storeQueryForObject(index, objectID, objQueryID); }
    });
    });
    return this.sendEvents(addEventTypeAndSubtype("conversion", "addToCart", events), additionalParams);
}
function purchasedObjectIDsAfterSearch() {
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    return this.sendEvents(addEventTypeAndSubtype("conversion", "purchase", events), additionalParams);
}
function convertedObjectIDs() {
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    return this.sendEvents(addEventType("conversion", events), additionalParams);
}
function addedToCartObjectIDs() {
    var this$1$1 = this;
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    events.forEach(function (ref) {
        var index = ref.index;
        var objectIDs = ref.objectIDs;
        var objectData = ref.objectData;

        return objectIDs.forEach(function (objectID, i) {
        var _a;
        var queryID = (_a = objectData === null || objectData === void 0 ? void 0 : objectData[i]) === null || _a === void 0 ? void 0 : _a.queryID;
        if (!this$1$1._userHasOptedOut && queryID)
            { storeQueryForObject(index, objectID, queryID); }
    });
    });
    return this.sendEvents(addEventTypeAndSubtype("conversion", "addToCart", events), additionalParams);
}
function purchasedObjectIDs() {
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    return this.sendEvents(addEventTypeAndSubtype("conversion", "purchase", events), additionalParams);
}
function convertedFilters() {
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    return this.sendEvents(addEventType("conversion", events), additionalParams);
}

var SUPPORTED_REGIONS = ["de", "us"];
/**
 * Binds credentials and settings to class.
 *
 * @param options - InitParams.
 */
function init(options) {
    if ( options === void 0 ) options = {};

    var _a, _b;
    if (!isUndefined(options.region) &&
        SUPPORTED_REGIONS.indexOf(options.region) === -1) {
        throw new Error(("optional region is incorrect, please provide either one of: " + (SUPPORTED_REGIONS.join(", ")) + "."));
    }
    if (!isUndefined(options.cookieDuration) &&
        (!isNumber(options.cookieDuration) ||
            !isFinite(options.cookieDuration) ||
            Math.floor(options.cookieDuration) !== options.cookieDuration)) {
        throw new Error("optional cookieDuration is incorrect, expected an integer.");
    }
    /* eslint-disable no-console */
    if (process.env.NODE_ENV === "development") {
        console.info("Since v2.0.4, search-insights no longer validates event payloads.\nYou can visit https://algolia.com/events/debugger instead.");
    }
    /* eslint-enable */
    setOptions(this, options, {
        _userHasOptedOut: Boolean(options.userHasOptedOut),
        _region: options.region,
        _host: options.host,
        _anonymousUserToken: (_a = options.anonymousUserToken) !== null && _a !== void 0 ? _a : true,
        _useCookie: (_b = options.useCookie) !== null && _b !== void 0 ? _b : false,
        _cookieDuration: options.cookieDuration || 6 * MONTH
    });
    this._endpointOrigin =
        this._host ||
            (this._region
                ? ("https://insights." + (this._region) + ".algolia.io")
                : "https://insights.algolia.io");
    // user agent
    this._ua = [].concat( DEFAULT_ALGOLIA_AGENTS );
    if (options.authenticatedUserToken) {
        this.setAuthenticatedUserToken(options.authenticatedUserToken);
    }
    if (options.userToken) {
        this.setUserToken(options.userToken);
    }
    else if (!this._userToken && !this._userHasOptedOut && this._useCookie) {
        this.setAnonymousUserToken();
    }
}
function setOptions(target, _a, defaultValues) {
    var partial = _a.partial;
    var options = __rest(_a, ["partial"]);
    if (!partial) {
        Object.assign(target, defaultValues);
    }
    Object.assign(target, Object.keys(options).reduce(function (acc, key) {
        var obj;

        return (Object.assign(Object.assign({}, acc), ( obj = {}, obj[("_" + key)] = options[key], obj )));
    }, {}));
}

function viewedObjectIDs() {
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    return this.sendEvents(addEventType("view", events), additionalParams);
}
function viewedFilters() {
    var params = [], len = arguments.length;
    while ( len-- ) params[ len ] = arguments[ len ];

    var ref = extractAdditionalParams(params);
    var events = ref.events;
    var additionalParams = ref.additionalParams;
    return this.sendEvents(addEventType("view", events), additionalParams);
}

/**
 *  AlgoliaAnalytics class.
 */
var AlgoliaAnalytics = function AlgoliaAnalytics(ref) {
    var requestFn = ref.requestFn;

    this._endpointOrigin = "https://insights.algolia.io";
    this._anonymousUserToken = true;
    this._userHasOptedOut = false;
    this._useCookie = false;
    this._cookieDuration = 6 * MONTH;
    // user agent
    this._ua = [];
    this.version = version;
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
};

function createInsightsClient(requestFn) {
    var aa = getFunctionalInterface(new AlgoliaAnalytics({ requestFn: requestFn }));
    if (typeof window === "object") {
        if (!window.AlgoliaAnalyticsObject) {
            var pointer;
            do {
                pointer = createUUID();
            } while (window[pointer] !== undefined);
            window.AlgoliaAnalyticsObject = pointer;
            window[window.AlgoliaAnalyticsObject] = aa;
        }
    }
    aa.version = version;
    return aa;
}

/**
 * Processes queue that might have been set before
 * the script was actually loaded and reassigns
 * class over globalObject variable to execute commands
 * instead of putting them to the queue.
 */
function processQueue(globalObject) {
    // Set pointer which allows renaming of the script
    var pointer = globalObject.AlgoliaAnalyticsObject;
    if (pointer) {
        var _aa = getFunctionalInterface(this);
        // `aa` is the user facing function, which is defined in the install snippet.
        //  - before library is initialized  `aa` fills a queue
        //  - after library is initialized  `aa` calls `_aa`
        var aa = globalObject[pointer];
        aa.queue = aa.queue || [];
        var queue = aa.queue;
        // Loop queue and execute functions in the queue
        queue.forEach(function (args) {
            var ref = [].slice.call(args);
            var functionName = ref[0];
            var functionArguments = ref.slice(1);
            _aa.apply(void 0, [ functionName ].concat( functionArguments ));
        });
        /* eslint-disable no-warning-comments */
        // FIXME: Reassigning the pointer is a bad idea (cf: https://github.com/algolia/search-insights.js/issues/127)
        //   to remove this without any breaking change, we redefine the Array.prototype.push method on the queue array.
        //   for next major version, use a custom method instead of push.
        /* eslint-enable */
        // @ts-expect-error (otherwise typescript won't let you change the signature)
        queue.push = function (args) {
            var ref = [].slice.call(args);
            var functionName = ref[0];
            var functionArguments = ref.slice(1);
            _aa.apply(void 0, [ functionName ].concat( functionArguments ));
        };
    }
}

var requestWithNodeHttpModule = function (url, data) {
    return new Promise(function (resolve, reject) {
        var serializedData = JSON.stringify(data);
        /* eslint-disable @typescript-eslint/no-var-requires */
        var ref = require("url").parse(url);
        var protocol = ref.protocol;
        var host = ref.host;
        var path = ref.path;
        /* eslint-enable */
        var options = {
            protocol: protocol,
            host: host,
            path: path,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": serializedData.length
            }
        };
        var ref$1 = url.startsWith("https://")
            ? require("https")
            : require("http");
        var request = ref$1.request;
        var req = request(options, function (ref) {
            var statusCode = ref.statusCode;

            if (statusCode === 200) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
        req.on("error", function (error) {
            /* eslint-disable no-console */
            console.error(error);
            /* eslint-enable */
            reject(error);
        });
        req.on("timeout", function () { return resolve(false); });
        req.write(serializedData);
        req.end();
    });
};
var requestWithNativeFetch = function (url, data) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(function (response) {
            resolve(response.status === 200);
        })
            .catch(function (e) {
            reject(e);
        });
    });
};

function getRequesterForNode() {
    if (supportsNodeHttpModule()) {
        return requestWithNodeHttpModule;
    }
    if (supportsNativeFetch()) {
        return requestWithNativeFetch;
    }
    throw new Error("Could not find a supported HTTP request client in this environment.");
}

var entryNode = createInsightsClient(getRequesterForNode());

exports.AlgoliaAnalytics = AlgoliaAnalytics;
exports.LocalStorage = LocalStorage;
exports.createInsightsClient = createInsightsClient;
exports.default = entryNode;
exports.getFunctionalInterface = getFunctionalInterface;
exports.getRequesterForNode = getRequesterForNode;
exports.processQueue = processQueue;
