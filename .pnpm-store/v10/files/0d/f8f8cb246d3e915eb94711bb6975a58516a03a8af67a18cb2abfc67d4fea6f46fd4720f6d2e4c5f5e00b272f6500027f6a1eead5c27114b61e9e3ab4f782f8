import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { debounce } from '../../lib/utils/debounce.js';
import { escapeHits } from '../../lib/utils/escape-highlight.js';
import { addAbsolutePosition } from '../../lib/utils/hits-absolute-position.js';
import { addQueryID } from '../../lib/utils/hits-query-id.js';
import { createConcurrentSafePromise } from '../../lib/utils/createConcurrentSafePromise.js';
import { noop } from '../../lib/utils/noop.js';

function hasFindAnswersMethod(answersIndex) {
    return typeof answersIndex.findAnswers === 'function';
}
var withUsage = createDocumentationMessageGenerator({
    name: 'answers',
    connector: true
});
/**
 * @deprecated the answers service is no longer offered, and this widget will be removed in InstantSearch.js v5
 */ var connectAnswers = function connectAnswers(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, queryLanguages = _ref.queryLanguages, attributesForPrediction = _ref.attributesForPrediction, _ref_nbHits = _ref.nbHits, nbHits = _ref_nbHits === void 0 ? 1 : _ref_nbHits, _ref_renderDebounceTime = _ref.renderDebounceTime, renderDebounceTime = _ref_renderDebounceTime === void 0 ? 100 : _ref_renderDebounceTime, _ref_searchDebounceTime = _ref.searchDebounceTime, searchDebounceTime = _ref_searchDebounceTime === void 0 ? 100 : _ref_searchDebounceTime, _ref_escapeHTML = _ref.// @MAJOR: this can default to false
        escapeHTML, escapeHTML = _ref_escapeHTML === void 0 ? true : _ref_escapeHTML, _ref_extraParameters = _ref.extraParameters, extraParameters = _ref_extraParameters === void 0 ? {} : _ref_extraParameters;
        // @ts-expect-error checking for the wrong value
        if (!queryLanguages || queryLanguages.length === 0) {
            throw new Error(withUsage('The `queryLanguages` expects an array of strings.'));
        }
        var runConcurrentSafePromise = createConcurrentSafePromise();
        var lastHits = [];
        var isLoading = false;
        var debouncedRender = debounce(renderFn, renderDebounceTime);
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
                debouncedRefine = debounce(answersIndex.findAnswers, searchDebounceTime);
                renderFn(_(_$1({}, this.getWidgetRenderState(initOptions)), {
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
                    renderFn(_(_$1({}, this.getWidgetRenderState(renderOptions)), {
                        instantSearchInstance: renderOptions.instantSearchInstance
                    }), false);
                    return;
                }
                // render the loader
                lastHits = [];
                isLoading = true;
                renderFn(_(_$1({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
                // call /answers API
                runConcurrentSafePromise(debouncedRefine(query, queryLanguages, _(_$1({}, extraParameters), {
                    nbHits: nbHits,
                    attributesForPrediction: attributesForPrediction
                }))).then(function(result) {
                    if (!result) {
                        // It's undefined when it's debounced.
                        return;
                    }
                    if (escapeHTML && result.hits.length > 0) {
                        result.hits = escapeHits(result.hits);
                    }
                    var hitsWithAbsolutePosition = addAbsolutePosition(result.hits, 0, nbHits);
                    var hitsWithAbsolutePositionAndQueryID = addQueryID(hitsWithAbsolutePosition, result.queryID);
                    lastHits = hitsWithAbsolutePositionAndQueryID;
                    isLoading = false;
                    debouncedRender(_(_$1({}, _this.getWidgetRenderState(renderOptions)), {
                        instantSearchInstance: renderOptions.instantSearchInstance
                    }), false);
                });
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
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

export { connectAnswers as default };
