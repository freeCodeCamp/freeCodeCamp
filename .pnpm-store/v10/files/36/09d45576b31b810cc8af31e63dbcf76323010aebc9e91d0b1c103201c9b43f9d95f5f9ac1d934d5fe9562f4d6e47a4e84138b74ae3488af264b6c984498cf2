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
var _define_property = require("@swc/helpers/_/_define_property");
var _instanceof = require("@swc/helpers/_/_instanceof");
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _algoliasearchhelper = /*#__PURE__*/ _interop_require_default._(require("algoliasearch-helper"));
var _utils = require("../../lib/utils");
var _addWidgetId = require("../../lib/utils/addWidgetId");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'index-widget'
});
/**
 * This is the same content as helper._change / setState, but allowing for extra
 * UiState to be synchronized.
 * see: https://github.com/algolia/algoliasearch-helper-js/blob/6b835ffd07742f2d6b314022cce6848f5cfecd4a/src/algoliasearch.helper.js#L1311-L1324
 */ function privateHelperSetState(helper, param) {
    var state = param.state, recommendState = param.recommendState, isPageReset = param.isPageReset, _uiState = param._uiState;
    if (state !== helper.state) {
        helper.state = state;
        helper.emit('change', {
            state: helper.state,
            results: helper.lastResults,
            isPageReset: isPageReset,
            _uiState: _uiState
        });
    }
    if (recommendState !== helper.recommendState) {
        helper.recommendState = recommendState;
    // eslint-disable-next-line no-warning-comments
    // TODO: emit "change" event when events for Recommend are implemented
    }
}
function getLocalWidgetsUiState(widgets, widgetStateOptions) {
    var initialUiState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return widgets.reduce(function(uiState, widget) {
        if ((0, _utils.isIndexWidget)(widget)) {
            return uiState;
        }
        if (!widget.getWidgetUiState && !widget.getWidgetState) {
            return uiState;
        }
        if (widget.getWidgetUiState) {
            return widget.getWidgetUiState(uiState, widgetStateOptions);
        }
        return widget.getWidgetState(uiState, widgetStateOptions);
    }, initialUiState);
}
function getLocalWidgetsSearchParameters(widgets, widgetSearchParametersOptions) {
    var initialSearchParameters = widgetSearchParametersOptions.initialSearchParameters, rest = _object_without_properties._(widgetSearchParametersOptions, [
        "initialSearchParameters"
    ]);
    return widgets.reduce(function(state, widget) {
        if (!widget.getWidgetSearchParameters || (0, _utils.isIndexWidget)(widget)) {
            return state;
        }
        if (widget.dependsOn === 'search' && widget.getWidgetParameters) {
            return widget.getWidgetParameters(state, rest);
        }
        return widget.getWidgetSearchParameters(state, rest);
    }, initialSearchParameters);
}
function getLocalWidgetsRecommendParameters(widgets, widgetRecommendParametersOptions) {
    var initialRecommendParameters = widgetRecommendParametersOptions.initialRecommendParameters, rest = _object_without_properties._(widgetRecommendParametersOptions, [
        "initialRecommendParameters"
    ]);
    return widgets.reduce(function(state, widget) {
        if (!(0, _utils.isIndexWidget)(widget) && widget.dependsOn === 'recommend' && widget.getWidgetParameters) {
            return widget.getWidgetParameters(state, rest);
        }
        return state;
    }, initialRecommendParameters);
}
function resetPageFromWidgets(widgets) {
    var indexWidgets = widgets.filter(_utils.isIndexWidget);
    if (indexWidgets.length === 0) {
        return;
    }
    indexWidgets.forEach(function(widget) {
        var widgetHelper = widget.getHelper();
        privateHelperSetState(widgetHelper, {
            state: widgetHelper.state.resetPage(),
            recommendState: widgetHelper.recommendState,
            isPageReset: true
        });
        resetPageFromWidgets(widget.getWidgets());
    });
}
function resolveScopedResultsFromWidgets(widgets) {
    var indexWidgets = widgets.filter(_utils.isIndexWidget);
    return indexWidgets.reduce(function(scopedResults, current) {
        var _scopedResults;
        return (_scopedResults = scopedResults).concat.apply(_scopedResults, [
            {
                indexId: current.getIndexId(),
                results: current.getResults(),
                helper: current.getHelper()
            }
        ].concat(_to_consumable_array._(resolveScopedResultsFromWidgets(current.getWidgets()))));
    }, []);
}
var index = function index(widgetParams) {
    if (widgetParams === undefined || widgetParams.indexName === undefined && !widgetParams.EXPERIMENTAL_isolated) {
        throw new Error(withUsage('The `indexName` option is required.'));
    }
    // When isolated=true, we use an empty string as the default indexName.
    // This is intentional: isolated indices do not require a real index name.
    var _widgetParams_indexName = widgetParams.indexName, indexName = _widgetParams_indexName === void 0 ? '' : _widgetParams_indexName, _widgetParams_indexId = widgetParams.indexId, indexId = _widgetParams_indexId === void 0 ? indexName : _widgetParams_indexId, tmp = widgetParams.EXPERIMENTAL_isolated, isolated = tmp === void 0 ? false : tmp;
    var localWidgets = [];
    var localUiState = {};
    var localInstantSearchInstance = null;
    var localParent = null;
    var helper = null;
    var derivedHelper = null;
    var lastValidSearchParameters = null;
    var hasRecommendWidget = false;
    var hasSearchWidget = false;
    return {
        $$type: 'ais.index',
        $$widgetType: 'ais.index',
        _isolated: isolated,
        getIndexName: function getIndexName() {
            return indexName;
        },
        getIndexId: function getIndexId() {
            return indexId;
        },
        getHelper: function getHelper() {
            return helper;
        },
        getResults: function getResults() {
            if (!(derivedHelper === null || derivedHelper === void 0 ? void 0 : derivedHelper.lastResults)) return null;
            // To make the UI optimistic, we patch the state to display to the current
            // one instead of the one associated with the latest results.
            // This means user-driven UI changes (e.g., checked checkbox) are reflected
            // immediately instead of waiting for Algolia to respond, regardless of
            // the status of the network request.
            derivedHelper.lastResults._state = helper.state;
            return derivedHelper.lastResults;
        },
        getResultsForWidget: function getResultsForWidget(widget) {
            if (widget.dependsOn !== 'recommend' || (0, _utils.isIndexWidget)(widget) || widget.$$id === undefined) {
                return this.getResults();
            }
            if (!(helper === null || helper === void 0 ? void 0 : helper.lastRecommendResults)) {
                return null;
            }
            return helper.lastRecommendResults[widget.$$id];
        },
        getPreviousState: function getPreviousState() {
            return lastValidSearchParameters;
        },
        getScopedResults: function getScopedResults() {
            var widgetParent = this.getParent();
            var widgetSiblings;
            if (widgetParent) {
                widgetSiblings = widgetParent.getWidgets();
            } else if (indexName.length === 0) {
                // The widget is the root but has no index name:
                // we resolve results from its children index widgets
                widgetSiblings = this.getWidgets();
            } else {
                // The widget is the root and has an index name:
                // we consider itself as the only sibling
                widgetSiblings = [
                    this
                ];
            }
            return resolveScopedResultsFromWidgets(widgetSiblings);
        },
        getParent: function getParent() {
            return isolated ? null : localParent;
        },
        createURL: function createURL(nextState) {
            if (typeof nextState === 'function') {
                return localInstantSearchInstance._createURL(_define_property._({}, indexId, nextState(localUiState)));
            }
            return localInstantSearchInstance._createURL(_define_property._({}, indexId, getLocalWidgetsUiState(localWidgets, {
                searchParameters: nextState,
                helper: helper
            })));
        },
        scheduleLocalSearch: (0, _utils.defer)(function() {
            if (isolated) {
                helper === null || helper === void 0 ? void 0 : helper.search();
            }
        }),
        getWidgets: function getWidgets() {
            return localWidgets;
        },
        addWidgets: function addWidgets(widgets) {
            var _this = this;
            if (!Array.isArray(widgets)) {
                throw new Error(withUsage('The `addWidgets` method expects an array of widgets.'));
            }
            var flatWidgets = widgets.reduce(function(acc, w) {
                return acc.concat(Array.isArray(w) ? w : [
                    w
                ]);
            }, []);
            if (flatWidgets.some(function(widget) {
                return typeof widget.init !== 'function' && typeof widget.render !== 'function';
            })) {
                throw new Error(withUsage('The widget definition expects a `render` and/or an `init` method.'));
            }
            flatWidgets.forEach(function(widget) {
                widget.parent = _this;
                if ((0, _utils.isIndexWidget)(widget)) {
                    return;
                }
                if (localInstantSearchInstance && widget.dependsOn === 'recommend') {
                    localInstantSearchInstance._hasRecommendWidget = true;
                } else if (localInstantSearchInstance) {
                    localInstantSearchInstance._hasSearchWidget = true;
                } else if (widget.dependsOn === 'recommend') {
                    hasRecommendWidget = true;
                } else {
                    hasSearchWidget = true;
                }
                (0, _addWidgetId.addWidgetId)(widget);
            });
            localWidgets = localWidgets.concat(flatWidgets);
            if (localInstantSearchInstance && Boolean(flatWidgets.length)) {
                privateHelperSetState(helper, {
                    state: getLocalWidgetsSearchParameters(localWidgets, {
                        uiState: localUiState,
                        initialSearchParameters: helper.state
                    }),
                    recommendState: getLocalWidgetsRecommendParameters(localWidgets, {
                        uiState: localUiState,
                        initialRecommendParameters: helper.recommendState
                    }),
                    _uiState: localUiState
                });
                // We compute the render state before calling `init` in a separate loop
                // to construct the whole render state object that is then passed to
                // `init`.
                flatWidgets.forEach(function(widget) {
                    if (widget.getRenderState) {
                        var renderState = widget.getRenderState(localInstantSearchInstance.renderState[_this.getIndexId()] || {}, (0, _utils.createInitArgs)(localInstantSearchInstance, _this, localInstantSearchInstance._initialUiState));
                        storeRenderState({
                            renderState: renderState,
                            instantSearchInstance: localInstantSearchInstance,
                            parent: _this
                        });
                    }
                });
                flatWidgets.forEach(function(widget) {
                    if (widget.init) {
                        widget.init((0, _utils.createInitArgs)(localInstantSearchInstance, _this, localInstantSearchInstance._initialUiState));
                    }
                });
                if (isolated) {
                    this.scheduleLocalSearch();
                } else {
                    localInstantSearchInstance.scheduleSearch();
                }
            }
            return this;
        },
        removeWidgets: function removeWidgets(widgets) {
            var _this = this;
            if (!Array.isArray(widgets)) {
                throw new Error(withUsage('The `removeWidgets` method expects an array of widgets.'));
            }
            var flatWidgets = widgets.reduce(function(acc, w) {
                return acc.concat(Array.isArray(w) ? w : [
                    w
                ]);
            }, []);
            if (flatWidgets.some(function(widget) {
                return typeof widget.dispose !== 'function';
            })) {
                throw new Error(withUsage('The widget definition expects a `dispose` method.'));
            }
            localWidgets = localWidgets.filter(function(widget) {
                return flatWidgets.indexOf(widget) === -1;
            });
            localWidgets.forEach(function(widget) {
                widget.parent = undefined;
                if ((0, _utils.isIndexWidget)(widget)) {
                    return;
                }
                if (localInstantSearchInstance && widget.dependsOn === 'recommend') {
                    localInstantSearchInstance._hasRecommendWidget = true;
                } else if (localInstantSearchInstance) {
                    localInstantSearchInstance._hasSearchWidget = true;
                } else if (widget.dependsOn === 'recommend') {
                    hasRecommendWidget = true;
                } else {
                    hasSearchWidget = true;
                }
            });
            if (localInstantSearchInstance && Boolean(flatWidgets.length)) {
                var _flatWidgets_reduce = flatWidgets.reduce(function(states, widget) {
                    // the `dispose` method exists at this point we already assert it
                    var next = widget.dispose({
                        helper: helper,
                        state: states.cleanedSearchState,
                        recommendState: states.cleanedRecommendState,
                        parent: _this
                    });
                    if (_instanceof._(next, _algoliasearchhelper.default.RecommendParameters)) {
                        states.cleanedRecommendState = next;
                    } else if (next) {
                        states.cleanedSearchState = next;
                    }
                    return states;
                }, {
                    cleanedSearchState: helper.state,
                    cleanedRecommendState: helper.recommendState
                }), cleanedSearchState = _flatWidgets_reduce.cleanedSearchState, cleanedRecommendState = _flatWidgets_reduce.cleanedRecommendState;
                var newState = localInstantSearchInstance.future.preserveSharedStateOnUnmount ? getLocalWidgetsSearchParameters(localWidgets, {
                    uiState: localUiState,
                    initialSearchParameters: new _algoliasearchhelper.default.SearchParameters({
                        index: this.getIndexName()
                    })
                }) : getLocalWidgetsSearchParameters(localWidgets, {
                    uiState: getLocalWidgetsUiState(localWidgets, {
                        searchParameters: cleanedSearchState,
                        helper: helper
                    }),
                    initialSearchParameters: cleanedSearchState
                });
                localUiState = getLocalWidgetsUiState(localWidgets, {
                    searchParameters: newState,
                    helper: helper
                });
                helper.setState(newState);
                helper.recommendState = cleanedRecommendState;
                if (localWidgets.length) {
                    if (isolated) {
                        this.scheduleLocalSearch();
                    } else {
                        localInstantSearchInstance.scheduleSearch();
                    }
                }
            }
            return this;
        },
        init: function init(param) {
            var _this = this;
            var instantSearchInstance = param.instantSearchInstance, parent = param.parent, uiState = param.uiState;
            var _instantSearchInstance__initialResults;
            if (helper !== null) {
                // helper is already initialized, therefore we do not need to set up
                // any listeners
                return;
            }
            localInstantSearchInstance = instantSearchInstance;
            localParent = parent;
            localUiState = uiState[indexId] || {};
            // The `mainHelper` is already defined at this point. The instance is created
            // inside InstantSearch at the `start` method, which occurs before the `init`
            // step.
            var mainHelper = instantSearchInstance.mainHelper;
            var parameters = getLocalWidgetsSearchParameters(localWidgets, {
                uiState: localUiState,
                initialSearchParameters: new _algoliasearchhelper.default.SearchParameters({
                    index: indexName
                })
            });
            var recommendParameters = getLocalWidgetsRecommendParameters(localWidgets, {
                uiState: localUiState,
                initialRecommendParameters: new _algoliasearchhelper.default.RecommendParameters()
            });
            // This Helper is only used for state management we do not care about the
            // `searchClient`. Only the "main" Helper created at the `InstantSearch`
            // level is aware of the client.
            helper = (0, _algoliasearchhelper.default)(mainHelper.getClient(), parameters.index, parameters);
            helper.recommendState = recommendParameters;
            // We forward the call to `search` to the "main" instance of the Helper
            // which is responsible for managing the queries (it's the only one that is
            // aware of the `searchClient`).
            helper.search = function() {
                if (isolated) {
                    instantSearchInstance.status = 'loading';
                    _this.render({
                        instantSearchInstance: instantSearchInstance
                    });
                    return instantSearchInstance.compositionID ? helper.searchWithComposition() : helper.searchOnlyWithDerivedHelpers();
                }
                if (instantSearchInstance.onStateChange) {
                    instantSearchInstance.onStateChange({
                        uiState: instantSearchInstance.mainIndex.getWidgetUiState({}),
                        setUiState: function setUiState(nextState) {
                            return instantSearchInstance.setUiState(nextState, false);
                        }
                    });
                    // We don't trigger a search when controlled because it becomes the
                    // responsibility of `setUiState`.
                    return mainHelper;
                }
                return mainHelper.search();
            };
            helper.searchWithoutTriggeringOnStateChange = function() {
                return mainHelper.search();
            };
            // We use the same pattern for the `searchForFacetValues`.
            helper.searchForFacetValues = function(facetName, facetValue, maxFacetHits, userState) {
                var state = _utils.mergeSearchParameters.apply(void 0, [
                    mainHelper.state
                ].concat(_to_consumable_array._((0, _utils.resolveSearchParameters)(_this)))).setQueryParameters(userState);
                return mainHelper.searchForFacetValues(facetName, facetValue, maxFacetHits, state);
            };
            var isolatedHelper = indexName ? helper : (0, _algoliasearchhelper.default)({}, '__empty_index__', {});
            var derivingHelper = isolated ? isolatedHelper : nearestIsolatedHelper(parent, mainHelper);
            derivedHelper = derivingHelper.derive(function() {
                return _utils.mergeSearchParameters.apply(void 0, [
                    mainHelper.state
                ].concat(_to_consumable_array._((0, _utils.resolveSearchParameters)(_this))));
            }, function() {
                return _this.getHelper().recommendState;
            });
            var indexInitialResults = (_instantSearchInstance__initialResults = instantSearchInstance._initialResults) === null || _instantSearchInstance__initialResults === void 0 ? void 0 : _instantSearchInstance__initialResults[this.getIndexId()];
            if (indexInitialResults === null || indexInitialResults === void 0 ? void 0 : indexInitialResults.results) {
                // We restore the shape of the results provided to the instance to respect
                // the helper's structure.
                var results = new _algoliasearchhelper.default.SearchResults(new _algoliasearchhelper.default.SearchParameters(indexInitialResults.state), indexInitialResults.results);
                derivedHelper.lastResults = results;
                helper.lastResults = results;
            }
            if (indexInitialResults === null || indexInitialResults === void 0 ? void 0 : indexInitialResults.recommendResults) {
                var recommendResults = new _algoliasearchhelper.default.RecommendResults(new _algoliasearchhelper.default.RecommendParameters({
                    params: indexInitialResults.recommendResults.params
                }), indexInitialResults.recommendResults.results);
                derivedHelper.lastRecommendResults = recommendResults;
                helper.lastRecommendResults = recommendResults;
            }
            // Subscribe to the Helper state changes for the page before widgets
            // are initialized. This behavior mimics the original one of the Helper.
            // It makes sense to replicate it at the `init` step. We have another
            // listener on `change` below, once `init` is done.
            helper.on('change', function(param) {
                var isPageReset = param.isPageReset;
                if (isPageReset) {
                    resetPageFromWidgets(localWidgets);
                }
            });
            derivedHelper.on('search', function() {
                // The index does not manage the "staleness" of the search. This is the
                // responsibility of the main instance. It does not make sense to manage
                // it at the index level because it's either: all of them or none of them
                // that are stalled. The queries are performed into a single network request.
                instantSearchInstance.scheduleStalledRender();
            });
            derivedHelper.on('result', function(param) {
                var results = param.results;
                // The index does not render the results it schedules a new render
                // to let all the other indices emit their own results. It allows us to
                // run the render process in one pass.
                instantSearchInstance.scheduleRender();
                // the derived helper is the one which actually searches, but the helper
                // which is exposed e.g. via instance.helper, doesn't search, and thus
                // does not have access to lastResults, which it used to in pre-federated
                // search behavior.
                helper.lastResults = results;
                lastValidSearchParameters = results === null || results === void 0 ? void 0 : results._state;
            });
            // eslint-disable-next-line no-warning-comments
            // TODO: listen to "result" event when events for Recommend are implemented
            derivedHelper.on('recommend:result', function(param) {
                var recommend = param.recommend;
                // The index does not render the results it schedules a new render
                // to let all the other indices emit their own results. It allows us to
                // run the render process in one pass.
                instantSearchInstance.scheduleRender();
                // the derived helper is the one which actually searches, but the helper
                // which is exposed e.g. via instance.helper, doesn't search, and thus
                // does not have access to lastRecommendResults.
                helper.lastRecommendResults = recommend.results;
            });
            // We compute the render state before calling `init` in a separate loop
            // to construct the whole render state object that is then passed to
            // `init`.
            localWidgets.forEach(function(widget) {
                if (widget.getRenderState) {
                    var renderState = widget.getRenderState(instantSearchInstance.renderState[_this.getIndexId()] || {}, (0, _utils.createInitArgs)(instantSearchInstance, _this, uiState));
                    storeRenderState({
                        renderState: renderState,
                        instantSearchInstance: instantSearchInstance,
                        parent: _this
                    });
                }
            });
            localWidgets.forEach(function(widget) {
                (0, _utils.warning)(// if it has NO getWidgetState or if it has getWidgetUiState, we don't warn
                // aka we warn if there's _only_ getWidgetState
                !widget.getWidgetState || Boolean(widget.getWidgetUiState), 'The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.');
                if (widget.init) {
                    widget.init((0, _utils.createInitArgs)(instantSearchInstance, _this, uiState));
                }
            });
            // Subscribe to the Helper state changes for the `uiState` once widgets
            // are initialized. Until the first render, state changes are part of the
            // configuration step. This is mainly for backward compatibility with custom
            // widgets. When the subscription happens before the `init` step, the (static)
            // configuration of the widget is pushed in the URL. That's what we want to avoid.
            // https://github.com/algolia/instantsearch/pull/994/commits/4a672ae3fd78809e213de0368549ef12e9dc9454
            helper.on('change', function(event) {
                var state = event.state;
                var _uiState = event._uiState;
                localUiState = getLocalWidgetsUiState(localWidgets, {
                    searchParameters: state,
                    helper: helper
                }, _uiState || {});
                // We don't trigger an internal change when controlled because it
                // becomes the responsibility of `setUiState`.
                if (!instantSearchInstance.onStateChange) {
                    instantSearchInstance.onInternalStateChange();
                }
            });
            if (indexInitialResults) {
                // If there are initial results, we're not notified of the next results
                // because we don't trigger an initial search. We therefore need to directly
                // schedule a render that will render the results injected on the helper.
                instantSearchInstance.scheduleRender();
            }
            if (hasRecommendWidget) {
                instantSearchInstance._hasRecommendWidget = true;
            }
            if (hasSearchWidget) {
                instantSearchInstance._hasSearchWidget = true;
            }
        },
        render: function render(param) {
            var _this = this;
            var instantSearchInstance = param.instantSearchInstance;
            // we can't attach a listener to the error event of search, as the error
            // then would no longer be thrown for global handlers.
            if (instantSearchInstance.status === 'error' && !instantSearchInstance.mainHelper.hasPendingRequests() && lastValidSearchParameters) {
                helper.setState(lastValidSearchParameters);
            }
            // We only render index widgets if there are no results.
            // This makes sure `render` is never called with `results` being `null`.
            // If it's an isolated index without an index name, we render all widgets,
            // as there are no results to display for the isolated index itself.
            var widgetsToRender = this.getResults() || (derivedHelper === null || derivedHelper === void 0 ? void 0 : derivedHelper.lastRecommendResults) || isolated && !indexName ? localWidgets : localWidgets.filter(function(widget) {
                return widget.shouldRender;
            });
            widgetsToRender = widgetsToRender.filter(function(widget) {
                if (!widget.shouldRender) {
                    return true;
                }
                return widget.shouldRender({
                    instantSearchInstance: instantSearchInstance
                });
            });
            widgetsToRender.forEach(function(widget) {
                if (widget.getRenderState) {
                    var renderState = widget.getRenderState(instantSearchInstance.renderState[_this.getIndexId()] || {}, (0, _utils.createRenderArgs)(instantSearchInstance, _this, widget));
                    storeRenderState({
                        renderState: renderState,
                        instantSearchInstance: instantSearchInstance,
                        parent: _this
                    });
                }
            });
            widgetsToRender.forEach(function(widget) {
                // At this point, all the variables used below are set. Both `helper`
                // and `derivedHelper` have been created at the `init` step. The attribute
                // `lastResults` might be `null` though. It's possible that a stalled render
                // happens before the result e.g with a dynamically added index the request might
                // be delayed. The render is triggered for the complete tree but some parts do
                // not have results yet.
                if (widget.render) {
                    widget.render((0, _utils.createRenderArgs)(instantSearchInstance, _this, widget));
                }
            });
        },
        dispose: function dispose() {
            var _this = this;
            localWidgets.forEach(function(widget) {
                if (widget.dispose && helper) {
                    // The dispose function is always called once the instance is started
                    // (it's an effect of `removeWidgets`). The index is initialized and
                    // the Helper is available. We don't care about the return value of
                    // `dispose` because the index is removed. We can't call `removeWidgets`
                    // because we want to keep the widgets on the instance, to allow idempotent
                    // operations on `add` & `remove`.
                    widget.dispose({
                        helper: helper,
                        state: helper.state,
                        recommendState: helper.recommendState,
                        parent: _this
                    });
                }
            });
            localInstantSearchInstance = null;
            localParent = null;
            helper === null || helper === void 0 ? void 0 : helper.removeAllListeners();
            helper = null;
            derivedHelper === null || derivedHelper === void 0 ? void 0 : derivedHelper.detach();
            derivedHelper = null;
        },
        getWidgetUiState: function getWidgetUiState(uiState) {
            return localWidgets.filter(_utils.isIndexWidget).filter(function(w) {
                return !w._isolated;
            }).reduce(function(previousUiState, innerIndex) {
                return innerIndex.getWidgetUiState(previousUiState);
            }, _object_spread_props._(_object_spread._({}, uiState), _define_property._({}, indexId, _object_spread._({}, uiState[indexId], localUiState))));
        },
        getWidgetState: function getWidgetState(uiState) {
            (0, _utils.warning)(false, 'The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.');
            return this.getWidgetUiState(uiState);
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
            var uiState = param.uiState;
            return getLocalWidgetsSearchParameters(localWidgets, {
                uiState: uiState,
                initialSearchParameters: searchParameters
            });
        },
        shouldRender: function shouldRender() {
            return true;
        },
        refreshUiState: function refreshUiState() {
            localUiState = getLocalWidgetsUiState(localWidgets, {
                searchParameters: this.getHelper().state,
                helper: this.getHelper()
            }, localUiState);
        },
        setIndexUiState: function setIndexUiState(indexUiState) {
            var nextIndexUiState = typeof indexUiState === 'function' ? indexUiState(localUiState) : indexUiState;
            localInstantSearchInstance.setUiState(function(state) {
                return _object_spread_props._(_object_spread._({}, state), _define_property._({}, indexId, nextIndexUiState));
            });
        }
    };
};
var _default = index;
function storeRenderState(param) {
    var renderState = param.renderState, instantSearchInstance = param.instantSearchInstance, parent = param.parent;
    var parentIndexName = parent ? parent.getIndexId() : instantSearchInstance.mainIndex.getIndexId();
    instantSearchInstance.renderState = _object_spread_props._(_object_spread._({}, instantSearchInstance.renderState), _define_property._({}, parentIndexName, _object_spread._({}, instantSearchInstance.renderState[parentIndexName], renderState)));
}
/**
 * Walk up the parent chain to find the closest isolated index, or fall back to mainHelper
 */ function nearestIsolatedHelper(current, mainHelper) {
    while(current){
        if (current._isolated) {
            return current.getHelper();
        }
        current = current.getParent();
    }
    return mainHelper;
}
