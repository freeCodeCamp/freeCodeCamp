'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'filter-suggestions',
    connector: true
});
var connectFilterSuggestions = function connectFilterSuggestions(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var agentId = widgetParams.agentId, attributes = widgetParams.attributes, _widgetParams_maxSuggestions = widgetParams.maxSuggestions, maxSuggestions = _widgetParams_maxSuggestions === void 0 ? 3 : _widgetParams_maxSuggestions, _widgetParams_debounceMs = widgetParams.debounceMs, debounceMs = _widgetParams_debounceMs === void 0 ? 300 : _widgetParams_debounceMs, _widgetParams_hitsToSample = widgetParams.hitsToSample, hitsToSample = _widgetParams_hitsToSample === void 0 ? 5 : _widgetParams_hitsToSample, _widgetParams_transformItems = widgetParams.transformItems, transformItems = _widgetParams_transformItems === void 0 ? function(items) {
            return items;
        } : _widgetParams_transformItems, transport = widgetParams.transport;
        if (!agentId && !transport) {
            throw new Error(withUsage('The `agentId` option is required unless a custom `transport` is provided.'));
        }
        var endpoint;
        var headers;
        var suggestions = [];
        var isLoading = false;
        var debounceTimer;
        var lastStateSignature = null; // null means never fetched
        var refine;
        var searchHelper = null;
        var latestRenderOptions = null;
        // Create a signature of the current search state (query + refinements)
        var getStateSignature = function getStateSignature(results) {
            var query = results.query || '';
            var refinements = searchHelper ? JSON.stringify(searchHelper.state.facetsRefinements) + JSON.stringify(searchHelper.state.disjunctiveFacetsRefinements) + JSON.stringify(searchHelper.state.hierarchicalFacetsRefinements) : '';
            return "".concat(query, "|").concat(refinements);
        };
        var getWidgetRenderState = function getWidgetRenderState(renderOptions) {
            var results = 'results' in renderOptions ? renderOptions.results : undefined;
            var transformedSuggestions = transformItems(suggestions, {
                results: results
            });
            return {
                suggestions: transformedSuggestions,
                isLoading: isLoading,
                refine: refine,
                widgetParams: widgetParams
            };
        };
        // Minimum duration to show skeleton to avoid flash when results are cached
        var MIN_SKELETON_DURATION_MS = 300;
        var fetchSuggestions = function fetchSuggestions(results, renderOptions) {
            var _results_hits, _rawResults_;
            if (!(results === null || results === void 0 ? void 0 : (_results_hits = results.hits) === null || _results_hits === void 0 ? void 0 : _results_hits.length)) {
                suggestions = [];
                isLoading = false;
                renderFn(_object_spread_props._(_object_spread._({}, getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
                return;
            }
            var loadingStartTime = Date.now();
            isLoading = true;
            renderFn(_object_spread_props._(_object_spread._({}, getWidgetRenderState(renderOptions)), {
                instantSearchInstance: renderOptions.instantSearchInstance
            }), false);
            // Get facets from raw results (results.facets is processed differently)
            var rawResults = results._rawResults;
            var rawFacets = (rawResults === null || rawResults === void 0 ? void 0 : (_rawResults_ = rawResults[0]) === null || _rawResults_ === void 0 ? void 0 : _rawResults_.facets) || {};
            var facetsToSend = attributes ? Object.fromEntries(Object.entries(rawFacets).filter(function(param) {
                var _param = _sliced_to_array._(param, 1), key = _param[0];
                return attributes.includes(key);
            })) : rawFacets;
            // Collect current refinements to exclude from suggestions
            var currentRefinements = searchHelper ? (0, _utils.getRefinements)(results, searchHelper.state).map(function(refinement) {
                return {
                    attribute: refinement.attribute,
                    value: refinement.name
                };
            }) : [];
            var messageText = JSON.stringify({
                query: results.query,
                facets: facetsToSend,
                hitsSample: results.hits.slice(0, hitsToSample),
                currentRefinements: currentRefinements,
                maxSuggestions: maxSuggestions
            });
            var payload = {
                messages: [
                    {
                        id: "sr-".concat(Date.now()),
                        createdAt: new Date().toISOString(),
                        role: 'user',
                        parts: [
                            {
                                type: 'text',
                                text: messageText
                            }
                        ]
                    }
                ]
            };
            // Apply custom body transformation if provided
            var finalPayload = (transport === null || transport === void 0 ? void 0 : transport.prepareSendMessagesRequest) ? transport.prepareSendMessagesRequest(payload).body : payload;
            fetch(endpoint, {
                method: 'POST',
                headers: _object_spread_props._(_object_spread._({}, headers), {
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(finalPayload)
            }).then(function(response) {
                if (!response.ok) {
                    throw new Error("HTTP error ".concat(response.status));
                }
                return response.json();
            }).then(function(data) {
                var parsedSuggestions = JSON.parse(data.parts[1].text);
                var validSuggestions = (Array.isArray(parsedSuggestions) ? parsedSuggestions : []).filter(function(suggestion) {
                    if (!(suggestion === null || suggestion === void 0 ? void 0 : suggestion.attribute) || !(suggestion === null || suggestion === void 0 ? void 0 : suggestion.value) || !(suggestion === null || suggestion === void 0 ? void 0 : suggestion.label)) {
                        return false;
                    }
                    // If attributes filter is specified, only allow suggestions for those attributes
                    if (attributes && !attributes.includes(suggestion.attribute)) {
                        return false;
                    }
                    return true;
                }).slice(0, maxSuggestions);
                suggestions = validSuggestions;
            }).catch(function() {
                suggestions = [];
            }).finally(function() {
                var elapsed = Date.now() - loadingStartTime;
                var remainingDelay = Math.max(0, MIN_SKELETON_DURATION_MS - elapsed);
                var finishLoading = function finishLoading() {
                    isLoading = false;
                    renderFn(_object_spread_props._(_object_spread._({}, getWidgetRenderState(renderOptions)), {
                        instantSearchInstance: renderOptions.instantSearchInstance
                    }), false);
                };
                if (remainingDelay > 0) {
                    setTimeout(finishLoading, remainingDelay);
                } else {
                    finishLoading();
                }
            });
        };
        return {
            $$type: 'ais.filterSuggestions',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance, helper = initOptions.helper;
                searchHelper = helper;
                if (transport) {
                    // Use custom transport configuration
                    endpoint = transport.api;
                    headers = transport.headers || {};
                } else {
                    // Use default Algolia agent endpoint
                    var _getAppIdAndApiKey = _sliced_to_array._((0, _utils.getAppIdAndApiKey)(instantSearchInstance.client), 2), appId = _getAppIdAndApiKey[0], apiKey = _getAppIdAndApiKey[1];
                    if (!appId || !apiKey) {
                        throw new Error(withUsage('Could not extract Algolia credentials from the search client.'));
                    }
                    endpoint = "https://".concat(appId, ".algolia.net/agent-studio/1/agents/").concat(agentId, "/completions?compatibilityMode=ai-sdk-5&stream=false");
                    headers = {
                        'x-algolia-application-id': appId,
                        'x-algolia-api-key': apiKey,
                        'x-algolia-agent': (0, _utils.getAlgoliaAgent)(instantSearchInstance.client)
                    };
                }
                refine = function refine(attribute, value) {
                    var _helper_state_hierarchicalFacets_find;
                    // Check if the attribute belongs to a hierarchical facet
                    // by finding a hierarchical facet that includes this attribute
                    var attr = ((_helper_state_hierarchicalFacets_find = helper.state.hierarchicalFacets.find(function(facet) {
                        return facet.attributes.includes(attribute);
                    })) === null || _helper_state_hierarchicalFacets_find === void 0 ? void 0 : _helper_state_hierarchicalFacets_find.name) || attribute;
                    helper.toggleFacetRefinement(attr, value);
                    helper.search();
                };
                renderFn(_object_spread_props._(_object_spread._({}, getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var results = renderOptions.results, instantSearchInstance = renderOptions.instantSearchInstance;
                // Always store the latest render options
                latestRenderOptions = renderOptions;
                if (!results) {
                    renderFn(_object_spread_props._(_object_spread._({}, getWidgetRenderState(renderOptions)), {
                        instantSearchInstance: instantSearchInstance
                    }), false);
                    return;
                }
                // Debounce: only fetch if search state changed (query or refinements) and after delay
                var stateSignature = getStateSignature(results);
                if (stateSignature !== lastStateSignature) {
                    lastStateSignature = stateSignature;
                    clearTimeout(debounceTimer);
                    debounceTimer = setTimeout(function() {
                        // Use the latest render options when the timeout fires
                        if (latestRenderOptions === null || latestRenderOptions === void 0 ? void 0 : latestRenderOptions.results) {
                            fetchSuggestions(latestRenderOptions.results, latestRenderOptions);
                        }
                    }, debounceMs);
                }
                renderFn(_object_spread_props._(_object_spread._({}, getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose() {
                clearTimeout(debounceTimer);
                unmountFn();
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    filterSuggestions: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState1(renderOptions) {
                return getWidgetRenderState(renderOptions);
            }
        };
    };
};
var _default = connectFilterSuggestions;
