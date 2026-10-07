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
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _utils = require("../../lib/utils");
var _voiceSearchHelper = /*#__PURE__*/ _interop_require_default._(require("../../lib/voiceSearchHelper"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'voice-search',
    connector: true
});
var connectVoiceSearch = function connectVoiceSearch(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _widgetParams_searchAsYouSpeak = widgetParams.searchAsYouSpeak, searchAsYouSpeak = _widgetParams_searchAsYouSpeak === void 0 ? false : _widgetParams_searchAsYouSpeak, language = widgetParams.language, additionalQueryParameters = widgetParams.additionalQueryParameters, _widgetParams_createVoiceSearchHelper = widgetParams.createVoiceSearchHelper, createVoiceSearchHelper = _widgetParams_createVoiceSearchHelper === void 0 ? _voiceSearchHelper.default : _widgetParams_createVoiceSearchHelper;
        return {
            $$type: 'ais.voiceSearch',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    voiceSearch: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(renderOptions) {
                var _this = this;
                var helper = renderOptions.helper, instantSearchInstance = renderOptions.instantSearchInstance;
                if (!this._refine) {
                    this._refine = function(query) {
                        if (query !== helper.state.query) {
                            var queryLanguages = language ? [
                                language.split('-')[0]
                            ] : undefined;
                            // @ts-ignore queryLanguages is allowed to be a string, not just an array
                            helper.setQueryParameter('queryLanguages', queryLanguages);
                            if (typeof additionalQueryParameters === 'function') {
                                helper.setState(helper.state.setQueryParameters(_object_spread._({
                                    ignorePlurals: true,
                                    removeStopWords: true,
                                    // @ts-ignore optionalWords is allowed to be a string too
                                    optionalWords: query
                                }, additionalQueryParameters({
                                    query: query
                                }))));
                            }
                            helper.setQuery(query).search();
                        }
                    };
                }
                if (!this._voiceSearchHelper) {
                    this._voiceSearchHelper = createVoiceSearchHelper({
                        searchAsYouSpeak: searchAsYouSpeak,
                        language: language,
                        onQueryChange: function onQueryChange(query) {
                            return _this._refine(query);
                        },
                        onStateChange: function onStateChange() {
                            renderFn(_object_spread_props._(_object_spread._({}, _this.getWidgetRenderState(renderOptions)), {
                                instantSearchInstance: instantSearchInstance
                            }), false);
                        }
                    });
                }
                var _this__voiceSearchHelper = this._voiceSearchHelper, isBrowserSupported = _this__voiceSearchHelper.isBrowserSupported, isListening = _this__voiceSearchHelper.isListening, startListening = _this__voiceSearchHelper.startListening, stopListening = _this__voiceSearchHelper.stopListening, getState = _this__voiceSearchHelper.getState;
                return {
                    isBrowserSupported: isBrowserSupported(),
                    isListening: isListening(),
                    toggleListening: function toggleListening() {
                        if (!isBrowserSupported()) {
                            return;
                        }
                        if (isListening()) {
                            stopListening();
                        } else {
                            startListening();
                        }
                    },
                    voiceListeningState: getState(),
                    widgetParams: widgetParams
                };
            },
            dispose: function dispose(param) {
                var state = param.state;
                this._voiceSearchHelper.dispose();
                unmountFn();
                var newState = state;
                if (typeof additionalQueryParameters === 'function') {
                    var additional = additionalQueryParameters({
                        query: ''
                    });
                    var toReset = additional ? Object.keys(additional).reduce(function(acc, current) {
                        // @ts-ignore search parameters is typed as readonly in v4
                        acc[current] = undefined;
                        return acc;
                    }, {}) : {};
                    newState = state.setQueryParameters(_object_spread._({
                        // @ts-ignore (queryLanguages is not added to algoliasearch v3)
                        queryLanguages: undefined,
                        ignorePlurals: undefined,
                        removeStopWords: undefined,
                        optionalWords: undefined
                    }, toReset));
                }
                return newState.setQueryParameter('query', undefined);
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var query = searchParameters.query || '';
                if (!query) {
                    return uiState;
                }
                return _object_spread_props._(_object_spread._({}, uiState), {
                    query: query
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                return searchParameters.setQueryParameter('query', uiState.query || '');
            }
        };
    };
};
var _default = connectVoiceSearch;
