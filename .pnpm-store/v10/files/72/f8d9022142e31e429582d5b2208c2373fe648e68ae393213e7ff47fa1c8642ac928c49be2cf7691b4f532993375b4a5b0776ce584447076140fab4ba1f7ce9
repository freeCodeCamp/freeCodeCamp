'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createInsightsMiddleware", {
    enumerable: true,
    get: function() {
        return createInsightsMiddleware;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _helpers = require("../helpers");
var _utils = require("../lib/utils");
var _uuid = require("../lib/utils/uuid");
var ALGOLIA_INSIGHTS_VERSION = '2.17.2';
var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@".concat(ALGOLIA_INSIGHTS_VERSION, "/dist/search-insights.min.js");
function createInsightsMiddleware() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _insightsClient = props.insightsClient, insightsInitParams = props.insightsInitParams, onEvent = props.onEvent, _props_$$internal = props.$$internal, $$internal = _props_$$internal === void 0 ? false : _props_$$internal, _props_$$automatic = props.$$automatic, $$automatic = _props_$$automatic === void 0 ? false : _props_$$automatic;
    var potentialInsightsClient = _insightsClient;
    if (!_insightsClient && _insightsClient !== null) {
        (0, _utils.safelyRunOnBrowser)(function(param) {
            var window = param.window;
            var pointer = window.AlgoliaAnalyticsObject || 'aa';
            if (typeof pointer === 'string') {
                potentialInsightsClient = window[pointer];
            }
            if (!potentialInsightsClient) {
                window.AlgoliaAnalyticsObject = pointer;
                if (!window[pointer]) {
                    window[pointer] = function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        if (!window[pointer].queue) {
                            window[pointer].queue = [];
                        }
                        window[pointer].queue.push(args);
                    };
                    window[pointer].version = ALGOLIA_INSIGHTS_VERSION;
                    window[pointer].shouldAddScript = true;
                }
                potentialInsightsClient = window[pointer];
            }
        });
    }
    // if still no insightsClient was found, we use a noop
    var insightsClient = potentialInsightsClient || _utils.noop;
    return function(param) {
        var instantSearchInstance = param.instantSearchInstance;
        var _instantSearchInstance;
        // remove existing default insights middleware
        // user-provided insights middleware takes precedence
        var existingInsightsMiddlewares = instantSearchInstance.middleware.filter(function(m) {
            return m.instance.$$type === 'ais.insights' && m.instance.$$internal;
        }).map(function(m) {
            return m.creator;
        });
        (_instantSearchInstance = instantSearchInstance).unuse.apply(_instantSearchInstance, _to_consumable_array._(existingInsightsMiddlewares));
        var _getAppIdAndApiKey = _sliced_to_array._((0, _utils.getAppIdAndApiKey)(instantSearchInstance.client), 2), appId = _getAppIdAndApiKey[0], apiKey = _getAppIdAndApiKey[1];
        // search-insights.js also throws an error so dev-only clarification is sufficient
        (0, _utils.warning)(Boolean(appId && apiKey), 'could not extract Algolia credentials from searchClient in insights middleware.');
        var queuedInitParams = undefined;
        var queuedUserToken = undefined;
        var userTokenBeforeInit = undefined;
        var queue = insightsClient.queue;
        if (Array.isArray(queue)) {
            var ref;
            // Context: The umd build of search-insights is asynchronously loaded by the snippet.
            //
            // When user calls `aa('setUserToken', 'my-user-token')` before `search-insights` is loaded,
            // ['setUserToken', 'my-user-token'] gets stored in `aa.queue`.
            // Whenever `search-insights` is finally loaded, it will process the queue.
            //
            // But here's the reason why we handle it here:
            // At this point, even though `search-insights` is not loaded yet,
            // we still want to read the token from the queue.
            // Otherwise, the first search call will be fired without the token.
            ref = _sliced_to_array._([
                'setUserToken',
                'init'
            ].map(function(key) {
                var _ref = _sliced_to_array._((0, _utils.find)(queue.slice().reverse(), function(param) {
                    var _param = _sliced_to_array._(param, 1), method = _param[0];
                    return method === key;
                }) || [], 2), value = _ref[1];
                return value;
            }), 2), queuedUserToken = ref[0], queuedInitParams = ref[1];
        }
        // If user called `aa('setUserToken')` before creating the Insights middleware,
        // we temporarily store the token and set it later on.
        //
        // Otherwise, the `init` call might override them with anonymous user token.
        insightsClient('getUserToken', null, function(_error, userToken) {
            userTokenBeforeInit = normalizeUserToken(userToken);
        });
        // Only `init` if the `insightsInitParams` option is passed or
        // if the `insightsClient` version doesn't supports optional `init` calling.
        if (insightsInitParams || !isModernInsightsClient(insightsClient)) {
            insightsClient('init', _object_spread._({
                appId: appId,
                apiKey: apiKey,
                partial: true
            }, insightsInitParams));
        }
        var initialParameters;
        var helper;
        return {
            $$type: 'ais.insights',
            $$internal: $$internal,
            $$automatic: $$automatic,
            onStateChange: function onStateChange() {},
            subscribe: function subscribe() {
                if (!insightsClient.shouldAddScript) return;
                var errorMessage = '[insights middleware]: could not load search-insights.js. Please load it manually following https://alg.li/insights-init';
                try {
                    var script = document.createElement('script');
                    script.async = true;
                    script.src = ALGOLIA_INSIGHTS_SRC;
                    script.onerror = function() {
                        instantSearchInstance.emit('error', new Error(errorMessage));
                    };
                    document.body.appendChild(script);
                    insightsClient.shouldAddScript = false;
                } catch (cause) {
                    insightsClient.shouldAddScript = false;
                    instantSearchInstance.emit('error', new Error(errorMessage));
                }
            },
            started: function started() {
                insightsClient('addAlgoliaAgent', 'insights-middleware');
                helper = instantSearchInstance.mainHelper;
                var queueAtStart = insightsClient.queue;
                if (Array.isArray(queueAtStart)) {
                    var ref;
                    ref = _sliced_to_array._([
                        'setUserToken',
                        'init'
                    ].map(function(key) {
                        var _ref = _sliced_to_array._((0, _utils.find)(queueAtStart.slice().reverse(), function(param) {
                            var _param = _sliced_to_array._(param, 1), method = _param[0];
                            return method === key;
                        }) || [], 2), value = _ref[1];
                        return value;
                    }), 2), queuedUserToken = ref[0], queuedInitParams = ref[1];
                }
                initialParameters = getInitialParameters(instantSearchInstance);
                // We don't want to force clickAnalytics when the insights is enabled from the search response.
                // This means we don't enable insights for indices that don't opt in
                if (!$$automatic) {
                    helper.overrideStateWithoutTriggeringChangeEvent(_object_spread_props._(_object_spread._({}, helper.state), {
                        clickAnalytics: true
                    }));
                }
                if (!$$internal) {
                    instantSearchInstance.scheduleSearch();
                }
                var setUserTokenToSearch = function setUserTokenToSearch(userToken) {
                    var immediate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    var normalizedUserToken = normalizeUserToken(userToken);
                    if (!normalizedUserToken) {
                        return;
                    }
                    var existingToken = helper.state.userToken;
                    function applyToken() {
                        helper.overrideStateWithoutTriggeringChangeEvent(_object_spread_props._(_object_spread._({}, helper.state), {
                            userToken: normalizedUserToken
                        }));
                        if (existingToken && existingToken !== userToken) {
                            instantSearchInstance.scheduleSearch();
                        }
                    }
                    // Delay the token application to the next render cycle
                    if (!immediate) {
                        setTimeout(applyToken, 0);
                    } else {
                        applyToken();
                    }
                };
                function setUserToken(token) {
                    setUserTokenToSearch(token, true);
                    insightsClient('setUserToken', token);
                }
                var anonymousUserToken = undefined;
                var anonymousTokenFromInsights = (0, _helpers.getInsightsAnonymousUserTokenInternal)();
                if (anonymousTokenFromInsights) {
                    // When `aa('init', { ... })` is called, it creates an anonymous user token in cookie.
                    // We can set it as userToken on instantsearch and insights. If it's not set as an insights
                    // userToken before a sendEvent, insights automatically generates a new anonymous token,
                    // causing a state change and an unnecessary query on instantsearch.
                    anonymousUserToken = anonymousTokenFromInsights;
                } else {
                    var token = "anonymous-".concat((0, _uuid.createUUID)());
                    anonymousUserToken = token;
                }
                var userTokenFromInit;
                // With SSR, the token could be be set on the state. We make sure
                // that insights is in sync with that token since, there is no
                // insights lib on the server.
                var tokenFromSearchParameters = initialParameters.userToken;
                // When the first query is sent, the token is possibly not yet set by
                // the insights onChange callbacks (if insights isn't yet loaded).
                // It is explicitly being set here so that the first query has the
                // initial tokens set and ensure a second query isn't automatically
                // made when the onChange callback actually changes the state.
                if (insightsInitParams === null || insightsInitParams === void 0 ? void 0 : insightsInitParams.userToken) {
                    userTokenFromInit = insightsInitParams.userToken;
                }
                if (userTokenFromInit) {
                    setUserToken(userTokenFromInit);
                } else if (tokenFromSearchParameters) {
                    setUserToken(tokenFromSearchParameters);
                } else if (userTokenBeforeInit) {
                    setUserToken(userTokenBeforeInit);
                } else if (queuedUserToken) {
                    setUserToken(queuedUserToken);
                } else if (anonymousUserToken) {
                    setUserToken(anonymousUserToken);
                    if ((insightsInitParams === null || insightsInitParams === void 0 ? void 0 : insightsInitParams.useCookie) || (queuedInitParams === null || queuedInitParams === void 0 ? void 0 : queuedInitParams.useCookie)) {
                        saveTokenAsCookie(anonymousUserToken, (insightsInitParams === null || insightsInitParams === void 0 ? void 0 : insightsInitParams.cookieDuration) || (queuedInitParams === null || queuedInitParams === void 0 ? void 0 : queuedInitParams.cookieDuration));
                    }
                }
                // This updates userToken which is set explicitly by `aa('setUserToken', userToken)`
                insightsClient('onUserTokenChange', function(token) {
                    return setUserTokenToSearch(token, true);
                }, {
                    immediate: true
                });
                var insightsClientWithLocalCredentials = insightsClient;
                if (isModernInsightsClient(insightsClient)) {
                    insightsClientWithLocalCredentials = function insightsClientWithLocalCredentials(method, payload) {
                        var _getAppIdAndApiKey = _sliced_to_array._((0, _utils.getAppIdAndApiKey)(instantSearchInstance.client), 2), latestAppId = _getAppIdAndApiKey[0], latestApiKey = _getAppIdAndApiKey[1];
                        var extraParams = {
                            headers: {
                                'X-Algolia-Application-Id': latestAppId,
                                'X-Algolia-API-Key': latestApiKey
                            }
                        };
                        // @ts-ignore we are calling this only when we know that the client actually is correct
                        return insightsClient(method, payload, extraParams);
                    };
                }
                var viewedObjectIDs = new Set();
                var lastQueryId;
                instantSearchInstance.mainHelper.derivedHelpers[0].on('result', function(param) {
                    var results = param.results;
                    if (results && (!results.queryID || results.queryID !== lastQueryId)) {
                        lastQueryId = results.queryID;
                        viewedObjectIDs.clear();
                    }
                });
                instantSearchInstance.sendEventToInsights = function(event) {
                    if (onEvent) {
                        onEvent(event, insightsClientWithLocalCredentials);
                    } else if (event.insightsMethod) {
                        if (event.insightsMethod === 'viewedObjectIDs') {
                            var payload = event.payload;
                            var difference = payload.objectIDs.filter(function(objectID) {
                                return !viewedObjectIDs.has(objectID);
                            });
                            if (difference.length === 0) {
                                return;
                            }
                            difference.forEach(function(objectID) {
                                return viewedObjectIDs.add(objectID);
                            });
                            payload.objectIDs = difference;
                        }
                        // Source is used to differentiate events sent by instantsearch from those sent manually.
                        event.payload.algoliaSource = [
                            'instantsearch'
                        ];
                        if ($$automatic) {
                            event.payload.algoliaSource.push('instantsearch-automatic');
                        }
                        if (event.eventModifier === 'internal') {
                            event.payload.algoliaSource.push('instantsearch-internal');
                        }
                        insightsClientWithLocalCredentials(event.insightsMethod, event.payload);
                        (0, _utils.warning)(Boolean(helper.state.userToken), "\nCannot send event to Algolia Insights because `userToken` is not set.\n\nSee documentation: https://www.algolia.com/doc/guides/building-search-ui/going-further/send-insights-events/js/#setting-the-usertoken\n");
                    } else {
                        (0, _utils.warning)(false, 'Cannot send event to Algolia Insights because `insightsMethod` option is missing.');
                    }
                };
            },
            unsubscribe: function unsubscribe() {
                insightsClient('onUserTokenChange', undefined);
                instantSearchInstance.sendEventToInsights = _utils.noop;
                if (helper && initialParameters) {
                    helper.overrideStateWithoutTriggeringChangeEvent(_object_spread._({}, helper.state, initialParameters));
                    instantSearchInstance.scheduleSearch();
                }
            }
        };
    };
}
function getInitialParameters(instantSearchInstance) {
    var _instantSearchInstance__initialResults_instantSearchInstance_indexName, _instantSearchInstance__initialResults;
    // in SSR, the initial state we use in this domain is set on the main index
    var stateFromInitialResults = ((_instantSearchInstance__initialResults = instantSearchInstance._initialResults) === null || _instantSearchInstance__initialResults === void 0 ? void 0 : (_instantSearchInstance__initialResults_instantSearchInstance_indexName = _instantSearchInstance__initialResults[instantSearchInstance.indexName]) === null || _instantSearchInstance__initialResults_instantSearchInstance_indexName === void 0 ? void 0 : _instantSearchInstance__initialResults_instantSearchInstance_indexName.state) || {};
    var stateFromHelper = instantSearchInstance.mainHelper.state;
    return {
        userToken: stateFromInitialResults.userToken || stateFromHelper.userToken,
        clickAnalytics: stateFromInitialResults.clickAnalytics || stateFromHelper.clickAnalytics
    };
}
function saveTokenAsCookie(token, cookieDuration) {
    var MONTH = 30 * 24 * 60 * 60 * 1000;
    var d = new Date();
    d.setTime(d.getTime() + (cookieDuration || MONTH * 6));
    var expires = "expires=".concat(d.toUTCString());
    document.cookie = "_ALGOLIA=".concat(token, ";").concat(expires, ";path=/");
}
/**
 * Determines if a given insights `client` supports the optional call to `init`
 * and the ability to set credentials via extra parameters when sending events.
 */ function isModernInsightsClient(client) {
    var _split_map = _sliced_to_array._((client.version || '').split('.').map(Number), 2), major = _split_map[0], minor = _split_map[1];
    /* eslint-disable instantsearch/naming-convention */ var v3 = major >= 3;
    var v2_6 = major === 2 && minor >= 6;
    var v1_10 = major === 1 && minor >= 10;
    /* eslint-enable instantsearch/naming-convention */ return v3 || v2_6 || v1_10;
}
/**
 * While `search-insights` supports both string and number user tokens,
 * the Search API only accepts strings. This function normalizes the user token.
 */ function normalizeUserToken(userToken) {
    if (!userToken) {
        return undefined;
    }
    return typeof userToken === 'number' ? userToken.toString() : userToken;
}
