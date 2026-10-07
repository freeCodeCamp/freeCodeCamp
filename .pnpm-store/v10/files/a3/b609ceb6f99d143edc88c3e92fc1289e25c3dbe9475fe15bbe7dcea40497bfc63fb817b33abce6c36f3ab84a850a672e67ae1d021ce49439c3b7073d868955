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
var _utils = require("../../lib/utils");
function hasFindAnswersMethod(answersIndex) {
    return typeof answersIndex.findAnswers === 'function';
}
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'answers',
    connector: true
});
/**
 * @deprecated the answers service is no longer offered, and this widget will be removed in InstantSearch.js v5
 */ var connectAnswers = function connectAnswers(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, queryLanguages = _ref.queryLanguages, attributesForPrediction = _ref.attributesForPrediction, _ref_nbHits = _ref.nbHits, nbHits = _ref_nbHits === void 0 ? 1 : _ref_nbHits, _ref_renderDebounceTime = _ref.renderDebounceTime, renderDebounceTime = _ref_renderDebounceTime === void 0 ? 100 : _ref_renderDebounceTime, _ref_searchDebounceTime = _ref.searchDebounceTime, searchDebounceTime = _ref_searchDebounceTime === void 0 ? 100 : _ref_searchDebounceTime, _ref_escapeHTML = _ref.// @MAJOR: this can default to false
        escapeHTML, escapeHTML = _ref_escapeHTML === void 0 ? true : _ref_escapeHTML, _ref_extraParameters = _ref.extraParameters, extraParameters = _ref_extraParameters === void 0 ? {} : _ref_extraParameters;
        // @ts-expect-error checking for the wrong value
        if (!queryLanguages || queryLanguages.length === 0) {
            throw new Error(withUsage('The `queryLanguages` expects an array of strings.'));
        }
        var runConcurrentSafePromise = (0, _utils.createConcurrentSafePromise)();
        var lastHits = [];
        var isLoading = false;
        var debouncedRender = (0, _utils.debounce)(renderFn, renderDebounceTime);
        var debouncedRefine;
        return {
            $$type: 'ais.answers',
            init: function init(initOptions) {
                var state = initOptions.state, instantSearchInstance = initOptions.instantSearchInstance;
                if (typeof instantSearchInstance.client.initIndex !== 'function') {
                    throw new Error(withUsage('`algoliasearch` <5 required.'));
                }
                var answersIndex = instantSearchInstance.client.initIndex(state.index);
                if (!hasFindAnswersMethod(answersIndex)) {
                    throw new Error(withUsage('`algoliasearch` >= 4.8.0 required.'));
                }
                debouncedRefine = (0, _utils.debounce)(answersIndex.findAnswers, searchDebounceTime);
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var _this = this;
                var query = renderOptions.state.query;
                if (!query) {
                    // renders nothing with empty query
                    lastHits = [];
                    isLoading = false;
                    renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(renderOptions)), {
                        instantSearchInstance: renderOptions.instantSearchInstance
                    }), false);
                    return;
                }
                // render the loader
                lastHits = [];
                isLoading = true;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
                // call /answers API
                runConcurrentSafePromise(debouncedRefine(query, queryLanguages, _object_spread_props._(_object_spread._({}, extraParameters), {
                    nbHits: nbHits,
                    attributesForPrediction: attributesForPrediction
                }))).then(function(result) {
                    if (!result) {
                        // It's undefined when it's debounced.
                        return;
                    }
                    if (escapeHTML && result.hits.length > 0) {
                        result.hits = (0, _utils.escapeHits)(result.hits);
                    }
                    var hitsWithAbsolutePosition = (0, _utils.addAbsolutePosition)(result.hits, 0, nbHits);
                    var hitsWithAbsolutePositionAndQueryID = (0, _utils.addQueryID)(hitsWithAbsolutePosition, result.queryID);
                    lastHits = hitsWithAbsolutePositionAndQueryID;
                    isLoading = false;
                    debouncedRender(_object_spread_props._(_object_spread._({}, _this.getWidgetRenderState(renderOptions)), {
                        instantSearchInstance: renderOptions.instantSearchInstance
                    }), false);
                });
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    answers: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState() {
                return {
                    hits: lastHits,
                    isLoading: isLoading,
                    widgetParams: widgetParams
                };
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state;
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state) {
                return state;
            }
        };
    };
};
var _default = connectAnswers;
