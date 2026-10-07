import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$3 } from '@swc/helpers/esm/_sliced_to_array.js';
import { _ as _$4 } from '@swc/helpers/esm/_to_consumable_array.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'rating-menu',
    connector: true
});
var $$type = 'ais.ratingMenu';
var STEP = 1;
var createSendEvent = function createSendEvent(param) {
    var instantSearchInstance = param.instantSearchInstance, helper = param.helper, getRefinedStar = param.getRefinedStar, attribute = param.attribute;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (args.length === 1) {
            instantSearchInstance.sendEventToInsights(args[0]);
            return;
        }
        var _args = _$3(args, 3), facetValue = _args[1], tmp = _args[2], eventName = tmp === void 0 ? 'Filter Applied' : tmp;
        var _args__split = _$3(args[0].split(':'), 2), eventType = _args__split[0], eventModifier = _args__split[1];
        if (eventType !== 'click') {
            return;
        }
        var isRefined = getRefinedStar() === Number(facetValue);
        if (!isRefined) {
            var _helper_lastResults;
            instantSearchInstance.sendEventToInsights({
                insightsMethod: 'clickedFilters',
                widgetType: $$type,
                eventType: eventType,
                eventModifier: eventModifier,
                payload: {
                    eventName: eventName,
                    index: ((_helper_lastResults = helper.lastResults) === null || _helper_lastResults === void 0 ? void 0 : _helper_lastResults.index) || helper.state.index,
                    filters: [
                        "".concat(attribute, ">=").concat(facetValue)
                    ]
                },
                attribute: attribute
            });
        }
    };
};
/**
 * **StarRating** connector provides the logic to build a custom widget that will let
 * the user refine search results based on ratings.
 *
 * The connector provides to the rendering: `refine()` to select a value and
 * `items` that are the values that can be selected. `refine` should be used
 * with `items.value`.
 */ var connectRatingMenu = function connectRatingMenu(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, attribute = _ref.attribute, _ref_max = _ref.max, max = _ref_max === void 0 ? 5 : _ref_max;
        var sendEvent;
        if (!attribute) {
            throw new Error(withUsage('The `attribute` option is required.'));
        }
        var getRefinedStar = function getRefinedStar(state) {
            var _values_;
            var values = state.getNumericRefinements(attribute);
            if (!((_values_ = values['>=']) === null || _values_ === void 0 ? void 0 : _values_.length)) {
                return undefined;
            }
            return values['>='][0];
        };
        var getFacetsMaxDecimalPlaces = function getFacetsMaxDecimalPlaces(facetResults) {
            var maxDecimalPlaces = 0;
            facetResults.forEach(function(facetResult) {
                var _facetResult_name_split = _$3(facetResult.name.split('.'), 2), tmp = _facetResult_name_split[1], decimal = tmp === void 0 ? '' : tmp;
                maxDecimalPlaces = Math.max(maxDecimalPlaces, decimal.length);
            });
            return maxDecimalPlaces;
        };
        function getRefinedState(state, facetValue) {
            var isRefined = getRefinedStar(state) === Number(facetValue);
            var emptyState = state.resetPage().removeNumericRefinement(attribute);
            if (!isRefined) {
                return emptyState.addNumericRefinement(attribute, '<=', max).addNumericRefinement(attribute, '>=', Number(facetValue));
            }
            return emptyState;
        }
        var toggleRefinement = function toggleRefinement(helper, facetValue) {
            sendEvent('click:internal', facetValue);
            helper.setState(getRefinedState(helper.state, facetValue)).search();
        };
        var connectorState = {
            toggleRefinementFactory: function toggleRefinementFactory(helper) {
                return toggleRefinement.bind(null, helper);
            },
            createURLFactory: function createURLFactory(param) {
                var state = param.state, createURL = param.createURL, getWidgetUiState = param.getWidgetUiState, helper = param.helper;
                return function(value) {
                    return createURL(function(uiState) {
                        return getWidgetUiState(uiState, {
                            searchParameters: getRefinedState(state, value),
                            helper: helper
                        });
                    });
                };
            }
        };
        return {
            $$type: $$type,
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_(_$1({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_(_$1({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    ratingMenu: _(_$1({}, renderState.ratingMenu), _$2({}, attribute, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var helper = param.helper, results = param.results, state = param.state, instantSearchInstance = param.instantSearchInstance, createURL = param.createURL;
                var facetValues = [];
                if (!sendEvent) {
                    sendEvent = createSendEvent({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        getRefinedStar: function getRefinedStar1() {
                            return getRefinedStar(helper.state);
                        },
                        attribute: attribute
                    });
                }
                var refinementIsApplied = false;
                var totalCount = 0;
                var facetResults = results === null || results === void 0 ? void 0 : results.getFacetValues(attribute, {});
                if (results && facetResults) {
                    var _loop = function(star) {
                        var isRefined = refinedStar === star;
                        refinementIsApplied = refinementIsApplied || isRefined;
                        var count = facetResults.filter(function(f) {
                            return Number(f.name) >= star && Number(f.name) <= max;
                        }).map(function(f) {
                            return f.count;
                        }).reduce(function(sum, current) {
                            return sum + current;
                        }, 0);
                        totalCount += count;
                        if (refinedStar && !isRefined && count === 0) {
                            // skip count==0 when at least 1 refinement is enabled
                            // eslint-disable-next-line no-continue
                            return "continue";
                        }
                        var stars = _$4(new Array(Math.floor(max / STEP))).map(function(_v, i) {
                            return i * STEP < star;
                        });
                        facetValues.push({
                            stars: stars,
                            name: String(star),
                            label: String(star),
                            value: String(star),
                            count: count,
                            isRefined: isRefined
                        });
                    };
                    facetResults.length;
                    getFacetsMaxDecimalPlaces(facetResults);
                    var refinedStar = getRefinedStar(state);
                    for(var star = STEP; star < max; star += STEP)_loop(star);
                }
                facetValues = facetValues.reverse();
                var hasNoResults = results ? results.nbHits === 0 : true;
                return {
                    items: facetValues,
                    hasNoResults: hasNoResults,
                    canRefine: (!hasNoResults || refinementIsApplied) && totalCount > 0,
                    refine: connectorState.toggleRefinementFactory(helper),
                    sendEvent: sendEvent,
                    createURL: connectorState.createURLFactory({
                        state: state,
                        createURL: createURL,
                        helper: helper,
                        getWidgetUiState: this.getWidgetUiState
                    }),
                    widgetParams: widgetParams
                };
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.removeNumericRefinement(attribute);
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var value = getRefinedStar(searchParameters);
                return removeEmptyRefinementsFromUiState(_(_$1({}, uiState), {
                    ratingMenu: _(_$1({}, uiState.ratingMenu), _$2({}, attribute, typeof value === 'number' ? value : undefined))
                }), attribute);
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var value = uiState.ratingMenu && uiState.ratingMenu[attribute];
                var withDisjunctiveFacet = searchParameters.addDisjunctiveFacet(attribute).removeNumericRefinement(attribute).removeDisjunctiveFacetRefinement(attribute);
                if (!value) {
                    return withDisjunctiveFacet.setQueryParameters({
                        numericRefinements: _(_$1({}, withDisjunctiveFacet.numericRefinements), _$2({}, attribute, {}))
                    });
                }
                return withDisjunctiveFacet.addNumericRefinement(attribute, '<=', max).addNumericRefinement(attribute, '>=', value);
            }
        };
    };
};
function removeEmptyRefinementsFromUiState(indexUiState, attribute) {
    if (!indexUiState.ratingMenu) {
        return indexUiState;
    }
    if (typeof indexUiState.ratingMenu[attribute] !== 'number') {
        delete indexUiState.ratingMenu[attribute];
    }
    if (Object.keys(indexUiState.ratingMenu).length === 0) {
        delete indexUiState.ratingMenu;
    }
    return indexUiState;
}

export { connectRatingMenu as default };
