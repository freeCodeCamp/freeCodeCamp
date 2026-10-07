'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get INSTANTSEARCH_FUTURE_DEFAULTS () {
        return INSTANTSEARCH_FUTURE_DEFAULTS;
    },
    get default () {
        return _default;
    }
});
var _call_super = require("@swc/helpers/_/_call_super");
var _class_call_check = require("@swc/helpers/_/_class_call_check");
var _create_class = require("@swc/helpers/_/_create_class");
var _define_property = require("@swc/helpers/_/_define_property");
var _inherits = require("@swc/helpers/_/_inherits");
var _instanceof = require("@swc/helpers/_/_instanceof");
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _events = /*#__PURE__*/ _interop_require_default._(require("@algolia/events"));
var _algoliasearchhelper = /*#__PURE__*/ _interop_require_default._(require("algoliasearch-helper"));
var _createInsightsMiddleware = require("../middlewares/createInsightsMiddleware");
var _createMetadataMiddleware = require("../middlewares/createMetadataMiddleware");
var _createRouterMiddleware = require("../middlewares/createRouterMiddleware");
var _index = /*#__PURE__*/ _interop_require_default._(require("../widgets/index/index"));
var _createHelpers = /*#__PURE__*/ _interop_require_default._(require("./createHelpers"));
var _utils = require("./utils");
var _version = /*#__PURE__*/ _interop_require_default._(require("./version"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'instantsearch'
});
function defaultCreateURL() {
    return '#';
}
var INSTANTSEARCH_FUTURE_DEFAULTS = {
    preserveSharedStateOnUnmount: false,
    persistHierarchicalRootCount: false
};
/**
 * The actual implementation of the InstantSearch. This is
 * created using the `instantsearch` factory function.
 * It emits the 'render' event every time a search is done
 */ var InstantSearch = /*#__PURE__*/ function(EventEmitter) {
    _inherits._(InstantSearch, EventEmitter);
    function InstantSearch(options) {
        _class_call_check._(this, InstantSearch);
        var _this;
        _this = _call_super._(this, InstantSearch), _define_property._(_this, "client", void 0), _define_property._(_this, "indexName", void 0), _define_property._(_this, "compositionID", void 0), _define_property._(_this, "insightsClient", void 0), _define_property._(_this, "onStateChange", null), _define_property._(_this, "future", void 0), _define_property._(_this, "helper", void 0), _define_property._(_this, "mainHelper", void 0), _define_property._(_this, "mainIndex", void 0), _define_property._(_this, "started", void 0), _define_property._(_this, "templatesConfig", void 0), _define_property._(_this, "renderState", {}), _define_property._(_this, "_stalledSearchDelay", void 0), _define_property._(_this, "_searchStalledTimer", void 0), _define_property._(_this, "_initialUiState", void 0), _define_property._(_this, "_initialResults", void 0), _define_property._(_this, "_manuallyResetScheduleSearch", false), _define_property._(_this, "_resetScheduleSearch", void 0), _define_property._(_this, "_createURL", void 0), _define_property._(_this, "_searchFunction", void 0), _define_property._(_this, "_mainHelperSearch", void 0), _define_property._(_this, "_hasSearchWidget", false), _define_property._(_this, "_hasRecommendWidget", false), _define_property._(_this, "_insights", void 0), _define_property._(_this, "middleware", []), _define_property._(_this, "sendEventToInsights", void 0), /**
   * The status of the search. Can be "idle", "loading", "stalled", or "error".
   */ _define_property._(_this, "status", 'idle'), /**
   * The last returned error from the Search API.
   * The error gets cleared when the next valid search response is rendered.
   */ _define_property._(_this, "error", undefined), _define_property._(_this, "scheduleSearch", (0, _utils.defer)(function() {
            if (_this.started) {
                _this.mainHelper.search();
            }
        })), _define_property._(_this, "scheduleRender", (0, _utils.defer)(function() {
            var shouldResetStatus = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            var _this_mainHelper;
            if (!((_this_mainHelper = _this.mainHelper) === null || _this_mainHelper === void 0 ? void 0 : _this_mainHelper.hasPendingRequests())) {
                clearTimeout(_this._searchStalledTimer);
                _this._searchStalledTimer = null;
                if (shouldResetStatus) {
                    _this.status = 'idle';
                    _this.error = undefined;
                }
            }
            _this.mainIndex.render({
                instantSearchInstance: _this
            });
            _this.emit('render');
        })), _define_property._(_this, "onInternalStateChange", (0, _utils.defer)(function() {
            var nextUiState = _this.mainIndex.getWidgetUiState({});
            _this.middleware.forEach(function(param) {
                var instance = param.instance;
                instance.onStateChange({
                    uiState: nextUiState
                });
            });
        }));
        // prevent `render` event listening from causing a warning
        _this.setMaxListeners(100);
        var _options_indexName = options.indexName, indexName = _options_indexName === void 0 ? '' : _options_indexName, compositionID = options.compositionID, numberLocale = options.numberLocale, _options_initialUiState = options.initialUiState, initialUiState = _options_initialUiState === void 0 ? {} : _options_initialUiState, _options_routing = options.routing, routing = _options_routing === void 0 ? null : _options_routing, _options_insights = options.insights, insights = _options_insights === void 0 ? undefined : _options_insights, searchFunction = options.searchFunction, _options_stalledSearchDelay = options.stalledSearchDelay, stalledSearchDelay = _options_stalledSearchDelay === void 0 ? 200 : _options_stalledSearchDelay, _options_searchClient = options.searchClient, searchClient = _options_searchClient === void 0 ? null : _options_searchClient, _options_insightsClient = options.insightsClient, insightsClient = _options_insightsClient === void 0 ? null : _options_insightsClient, _options_onStateChange = options.onStateChange, onStateChange = _options_onStateChange === void 0 ? null : _options_onStateChange, _options_future1 = options.future, future = _options_future1 === void 0 ? _object_spread._({}, INSTANTSEARCH_FUTURE_DEFAULTS, options.future || {}) : _options_future1;
        if (searchClient === null) {
            throw new Error(withUsage('The `searchClient` option is required.'));
        }
        if (typeof searchClient.search !== 'function') {
            throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
        }
        if (typeof searchClient.addAlgoliaAgent === 'function') {
            searchClient.addAlgoliaAgent("instantsearch.js (".concat(_version.default, ")"));
        }
        (0, _utils.warning)(insightsClient === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
        if (insightsClient && typeof insightsClient !== 'function') {
            throw new Error(withUsage('The `insightsClient` option should be a function.'));
        }
        (0, _utils.warning)(!options.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(options.searchParameters, null, 2), ")\n]);\n```\n\nSee ").concat((0, _utils.createDocumentationLink)({
            name: 'configure'
        })));
        _this.client = searchClient;
        _this.future = future;
        _this.insightsClient = insightsClient;
        _this.indexName = indexName;
        _this.compositionID = compositionID;
        _this.helper = null;
        _this.mainHelper = null;
        _this.mainIndex = (0, _index.default)({
            // we use an index widget to render compositions
            // this only works because there's only one composition index allow for now
            indexName: _this.compositionID || _this.indexName
        });
        _this.onStateChange = onStateChange;
        _this.started = false;
        _this.templatesConfig = {
            helpers: (0, _createHelpers.default)({
                numberLocale: numberLocale
            }),
            compileOptions: {}
        };
        _this._stalledSearchDelay = stalledSearchDelay;
        _this._searchStalledTimer = null;
        _this._createURL = defaultCreateURL;
        _this._initialUiState = initialUiState;
        _this._initialResults = null;
        _this._insights = insights;
        if (searchFunction) {
            (0, _utils.warning)(false, "The `searchFunction` option is deprecated. Use `onStateChange` instead.");
            _this._searchFunction = searchFunction;
        }
        _this.sendEventToInsights = _utils.noop;
        if (routing) {
            var routerOptions = typeof routing === 'boolean' ? {} : routing;
            routerOptions.$$internal = true;
            _this.use((0, _createRouterMiddleware.createRouterMiddleware)(routerOptions));
        }
        // This is the default Insights middleware,
        // added when `insights` is set to true by the user.
        // Any user-provided middleware will be added later and override this one.
        if (insights) {
            var insightsOptions = typeof insights === 'boolean' ? {} : insights;
            insightsOptions.$$internal = true;
            _this.use((0, _createInsightsMiddleware.createInsightsMiddleware)(insightsOptions));
        }
        if ((0, _createMetadataMiddleware.isMetadataEnabled)()) {
            _this.use((0, _createMetadataMiddleware.createMetadataMiddleware)({
                $$internal: true
            }));
        }
        return _this;
    }
    _create_class._(InstantSearch, [
        {
            key: "_isSearchStalled",
            get: /**
   * @deprecated use `status === 'stalled'` instead
   */ function get() {
                (0, _utils.warning)(false, '`InstantSearch._isSearchStalled` is deprecated and will be removed in InstantSearch.js 5.0.\n\nUse `InstantSearch.status === "stalled"` instead.');
                return this.status === 'stalled';
            }
        },
        {
            key: "use",
            value: /**
   * Hooks a middleware into the InstantSearch lifecycle.
   */ function use() {
                var _this = this;
                for(var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++){
                    middleware[_key] = arguments[_key];
                }
                var newMiddlewareList = middleware.map(function(fn) {
                    var newMiddleware = _object_spread._({
                        $$type: '__unknown__',
                        $$internal: false,
                        subscribe: _utils.noop,
                        started: _utils.noop,
                        unsubscribe: _utils.noop,
                        onStateChange: _utils.noop
                    }, fn({
                        instantSearchInstance: _this
                    }));
                    _this.middleware.push({
                        creator: fn,
                        instance: newMiddleware
                    });
                    return newMiddleware;
                });
                // If the instance has already started, we directly subscribe the
                // middleware so they're notified of changes.
                if (this.started) {
                    newMiddlewareList.forEach(function(m) {
                        m.subscribe();
                        m.started();
                    });
                }
                return this;
            }
        },
        {
            key: "unuse",
            value: /**
   * Removes a middleware from the InstantSearch lifecycle.
   */ function unuse() {
                for(var _len = arguments.length, middlewareToUnuse = new Array(_len), _key = 0; _key < _len; _key++){
                    middlewareToUnuse[_key] = arguments[_key];
                }
                this.middleware.filter(function(m) {
                    return middlewareToUnuse.includes(m.creator);
                }).forEach(function(m) {
                    return m.instance.unsubscribe();
                });
                this.middleware = this.middleware.filter(function(m) {
                    return !middlewareToUnuse.includes(m.creator);
                });
                return this;
            }
        },
        {
            key: "EXPERIMENTAL_use",
            value: // @major we shipped with EXPERIMENTAL_use, but have changed that to just `use` now
            function EXPERIMENTAL_use() {
                for(var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++){
                    middleware[_key] = arguments[_key];
                }
                (0, _utils.warning)(false, 'The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version.');
                return this.use.apply(this, _to_consumable_array._(middleware));
            }
        },
        {
            key: "addWidget",
            value: /**
   * Adds a widget to the search instance.
   * A widget can be added either before or after InstantSearch has started.
   * @param widget The widget to add to InstantSearch.
   *
   * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`.
   */ function addWidget(widget) {
                (0, _utils.warning)(false, 'addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`');
                return this.addWidgets([
                    widget
                ]);
            }
        },
        {
            key: "addWidgets",
            value: /**
   * Adds multiple widgets to the search instance.
   * Widgets can be added either before or after InstantSearch has started.
   * @param widgets The array of widgets to add to InstantSearch.
   */ function addWidgets(widgets) {
                if (!Array.isArray(widgets)) {
                    throw new Error(withUsage('The `addWidgets` method expects an array of widgets. Please use `addWidget`.'));
                }
                if (this.compositionID && widgets.some(function(w) {
                    return !Array.isArray(w) && (0, _utils.isIndexWidget)(w) && !w._isolated;
                })) {
                    throw new Error(withUsage('The `index` widget cannot be used with a composition-based InstantSearch implementation.'));
                }
                this.mainIndex.addWidgets(widgets);
                return this;
            }
        },
        {
            key: "removeWidget",
            value: /**
   * Removes a widget from the search instance.
   * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`
   * @param widget The widget instance to remove from InstantSearch.
   *
   * The widget must implement a `dispose()` method to clear its state.
   */ function removeWidget(widget) {
                (0, _utils.warning)(false, 'removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`');
                return this.removeWidgets([
                    widget
                ]);
            }
        },
        {
            key: "removeWidgets",
            value: /**
   * Removes multiple widgets from the search instance.
   * @param widgets Array of widgets instances to remove from InstantSearch.
   *
   * The widgets must implement a `dispose()` method to clear their states.
   */ function removeWidgets(widgets) {
                if (!Array.isArray(widgets)) {
                    throw new Error(withUsage('The `removeWidgets` method expects an array of widgets. Please use `removeWidget`.'));
                }
                this.mainIndex.removeWidgets(widgets);
                return this;
            }
        },
        {
            key: "start",
            value: /**
   * Ends the initialization of InstantSearch.js and triggers the
   * first search.
   */ function start() {
                var _this = this;
                if (this.started) {
                    throw new Error(withUsage('The `start` method has already been called once.'));
                }
                // This Helper is used for the queries, we don't care about its state. The
                // states are managed at the `index` level. We use this Helper to create
                // DerivedHelper scoped into the `index` widgets.
                // In Vue InstantSearch' hydrate, a main helper gets set before start, so
                // we need to respect this helper as a way to keep all listeners correct.
                var mainHelper = this.mainHelper || (0, _algoliasearchhelper.default)(this.client, this.indexName, undefined, {
                    persistHierarchicalRootCount: this.future.persistHierarchicalRootCount
                });
                if (this.compositionID) {
                    mainHelper.searchForFacetValues = mainHelper.searchForCompositionFacetValues.bind(mainHelper);
                }
                mainHelper.search = function() {
                    _this.status = 'loading';
                    _this.scheduleRender(false);
                    (0, _utils.warning)(Boolean(_this.indexName) || Boolean(_this.compositionID) || _this.mainIndex.getWidgets().some(_utils.isIndexWidget), 'No indexName provided, nor an explicit index widget in the widgets tree. This is required to be able to display results.');
                    // This solution allows us to keep the exact same API for the users but
                    // under the hood, we have a different implementation. It should be
                    // completely transparent for the rest of the codebase. Only this module
                    // is impacted.
                    if (_this._hasSearchWidget) {
                        if (_this.compositionID) {
                            mainHelper.searchWithComposition();
                        } else {
                            mainHelper.searchOnlyWithDerivedHelpers();
                        }
                    }
                    if (_this._hasRecommendWidget) {
                        mainHelper.recommend();
                    }
                    return mainHelper;
                };
                if (this._searchFunction) {
                    // this client isn't used to actually search, but required for the helper
                    // to not throw errors
                    var fakeClient = {
                        search: function search() {
                            return new Promise(_utils.noop);
                        }
                    };
                    this._mainHelperSearch = mainHelper.search.bind(mainHelper);
                    mainHelper.search = function() {
                        var mainIndexHelper = _this.mainIndex.getHelper();
                        var searchFunctionHelper = (0, _algoliasearchhelper.default)(fakeClient, mainIndexHelper.state.index, mainIndexHelper.state);
                        searchFunctionHelper.once('search', function(param) {
                            var state = param.state;
                            mainIndexHelper.overrideStateWithoutTriggeringChangeEvent(state);
                            _this._mainHelperSearch();
                        });
                        // Forward state changes from `searchFunctionHelper` to `mainIndexHelper`
                        searchFunctionHelper.on('change', function(param) {
                            var state = param.state;
                            mainIndexHelper.setState(state);
                        });
                        _this._searchFunction(searchFunctionHelper);
                        return mainHelper;
                    };
                }
                // Only the "main" Helper emits the `error` event vs the one for `search`
                // and `results` that are also emitted on the derived one.
                mainHelper.on('error', function(param) {
                    var error = param.error;
                    if (!_instanceof._(error, Error)) {
                        // typescript lies here, error is in some cases { name: string, message: string }
                        var err = error;
                        error = Object.keys(err).reduce(function(acc, key) {
                            acc[key] = err[key];
                            return acc;
                        }, new Error(err.message));
                    }
                    // If an error is emitted, it is re-thrown by events. In previous versions
                    // we emitted {error}, which is thrown as:
                    // "Uncaught, unspecified \"error\" event. ([object Object])"
                    // To avoid breaking changes, we make the error available in both
                    // `error` and `error.error`
                    // @MAJOR emit only error
                    error.error = error;
                    _this.error = error;
                    _this.status = 'error';
                    _this.scheduleRender(false);
                    // This needs to execute last because it throws the error.
                    _this.emit('error', error);
                });
                this.mainHelper = mainHelper;
                this.middleware.forEach(function(param) {
                    var instance = param.instance;
                    instance.subscribe();
                });
                this.mainIndex.init({
                    instantSearchInstance: this,
                    parent: null,
                    uiState: this._initialUiState
                });
                if (this._initialResults) {
                    (0, _utils.hydrateSearchClient)(this.client, this._initialResults);
                    (0, _utils.hydrateRecommendCache)(this.mainHelper, this._initialResults);
                    var originalScheduleSearch = this.scheduleSearch;
                    // We don't schedule a first search when initial results are provided
                    // because we already have the results to render. This skips the initial
                    // network request on the browser on `start`.
                    this.scheduleSearch = (0, _utils.defer)(_utils.noop);
                    if (this._manuallyResetScheduleSearch) {
                        // If `_manuallyResetScheduleSearch` is passed, it means that we don't
                        // want to rely on a single `defer` to reset the `scheduleSearch`.
                        // Instead, the consumer will call `_resetScheduleSearch` to restore
                        // the original `scheduleSearch` function.
                        // This happens in the React flavour after rendering.
                        this._resetScheduleSearch = function() {
                            _this.scheduleSearch = originalScheduleSearch;
                        };
                    } else {
                        // We also skip the initial network request when widgets are dynamically
                        // added in the first tick (that's the case in all the framework-based flavors).
                        // When we add a widget to `index`, it calls `scheduleSearch`. We can rely
                        // on our `defer` util to restore the original `scheduleSearch` value once
                        // widgets are added to hook back to the regular lifecycle.
                        (0, _utils.defer)(function() {
                            _this.scheduleSearch = originalScheduleSearch;
                        })();
                    }
                } else if (this.mainIndex.getWidgets().length > 0) {
                    this.scheduleSearch();
                }
                // Keep the previous reference for legacy purpose, some pattern use
                // the direct Helper access `search.helper` (e.g multi-index).
                this.helper = this.mainIndex.getHelper();
                // track we started the search if we add more widgets,
                // to init them directly after add
                this.started = true;
                this.middleware.forEach(function(param) {
                    var instance = param.instance;
                    instance.started();
                });
                // This is the automatic Insights middleware,
                // added when `insights` is unset and the initial results possess `queryID`.
                // Any user-provided middleware will be added later and override this one.
                if (typeof this._insights === 'undefined') {
                    mainHelper.derivedHelpers[0].once('result', function() {
                        var hasAutomaticInsights = _this.mainIndex.getScopedResults().some(function(param) {
                            var results = param.results;
                            return results === null || results === void 0 ? void 0 : results._automaticInsights;
                        });
                        if (hasAutomaticInsights) {
                            _this.use((0, _createInsightsMiddleware.createInsightsMiddleware)({
                                $$internal: true,
                                $$automatic: true
                            }));
                        }
                    });
                }
            }
        },
        {
            key: "dispose",
            value: /**
   * Removes all widgets without triggering a search afterwards.
   * @return {undefined} This method does not return anything
   */ function dispose() {
                var _this_mainHelper;
                this.scheduleSearch.cancel();
                this.scheduleRender.cancel();
                clearTimeout(this._searchStalledTimer);
                this.removeWidgets(this.mainIndex.getWidgets());
                this.mainIndex.dispose();
                // You can not start an instance two times, therefore a disposed instance
                // needs to set started as false otherwise this can not be restarted at a
                // later point.
                this.started = false;
                // The helper needs to be reset to perform the next search from a fresh state.
                // If not reset, it would use the state stored before calling `dispose()`.
                this.removeAllListeners();
                (_this_mainHelper = this.mainHelper) === null || _this_mainHelper === void 0 ? void 0 : _this_mainHelper.removeAllListeners();
                this.mainHelper = null;
                this.helper = null;
                this.middleware.forEach(function(param) {
                    var instance = param.instance;
                    instance.unsubscribe();
                });
            }
        },
        {
            key: "scheduleStalledRender",
            value: function scheduleStalledRender() {
                var _this = this;
                if (!this._searchStalledTimer) {
                    this._searchStalledTimer = setTimeout(function() {
                        _this.status = 'stalled';
                        _this.scheduleRender();
                    }, this._stalledSearchDelay);
                }
            }
        },
        {
            key: "setUiState",
            value: /**
   * Set the UI state and trigger a search.
   * @param uiState The next UI state or a function computing it from the current state
   * @param callOnStateChange private parameter used to know if the method is called from a state change
   */ function setUiState(uiState) {
                var _this = this;
                var callOnStateChange = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                if (!this.mainHelper) {
                    throw new Error(withUsage('The `start` method needs to be called before `setUiState`.'));
                }
                // We refresh the index UI state to update the local UI state that the
                // main index passes to the function form of `setUiState`.
                this.mainIndex.refreshUiState();
                var nextUiState = typeof uiState === 'function' ? uiState(this.mainIndex.getWidgetUiState({})) : uiState;
                if (this.onStateChange && callOnStateChange) {
                    this.onStateChange({
                        uiState: nextUiState,
                        setUiState: function setUiState(finalUiState) {
                            (0, _utils.setIndexHelperState)(typeof finalUiState === 'function' ? finalUiState(nextUiState) : finalUiState, _this.mainIndex);
                            _this.scheduleSearch();
                            _this.onInternalStateChange();
                        }
                    });
                } else {
                    (0, _utils.setIndexHelperState)(nextUiState, this.mainIndex);
                    this.scheduleSearch();
                    this.onInternalStateChange();
                }
            }
        },
        {
            key: "getUiState",
            value: function getUiState() {
                if (this.started) {
                    // We refresh the index UI state to make sure changes from `refine` are taken in account
                    this.mainIndex.refreshUiState();
                }
                return this.mainIndex.getWidgetUiState({});
            }
        },
        {
            key: "createURL",
            value: function createURL() {
                var nextState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                if (!this.started) {
                    throw new Error(withUsage('The `start` method needs to be called before `createURL`.'));
                }
                return this._createURL(nextState);
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (!this.mainHelper) {
                    throw new Error(withUsage('The `start` method needs to be called before `refresh`.'));
                }
                this.mainHelper.clearCache().search();
            }
        }
    ]);
    return InstantSearch;
}(_events.default);
var _default = InstantSearch;
