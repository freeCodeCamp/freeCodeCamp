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
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'refinement-list',
    connector: true
});
var DEFAULT_SORT = [
    'isRefined',
    'count:desc',
    'name:asc'
];
/**
 * **RefinementList** connector provides the logic to build a custom widget that
 * will let the user filter the results based on the values of a specific facet.
 *
 * **Requirement:** the attribute passed as `attribute` must be present in
 * attributesForFaceting of the searched index.
 *
 * This connector provides:
 * - a `refine()` function to select an item.
 * - a `toggleShowMore()` function to display more or less items
 * - a `searchForItems()` function to search within the items.
 */ var connectRefinementList = function connectRefinementList(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, attribute = _ref.attribute, _ref_operator = _ref.operator, operator = _ref_operator === void 0 ? 'or' : _ref_operator, _ref_limit = _ref.limit, limit = _ref_limit === void 0 ? 10 : _ref_limit, _ref_showMore = _ref.showMore, showMore = _ref_showMore === void 0 ? false : _ref_showMore, _ref_showMoreLimit = _ref.showMoreLimit, showMoreLimit = _ref_showMoreLimit === void 0 ? 20 : _ref_showMoreLimit, _ref_sortBy = _ref.sortBy, sortBy = _ref_sortBy === void 0 ? DEFAULT_SORT : _ref_sortBy, _ref_escapeFacetValues = _ref.escapeFacetValues, escapeFacetValues = _ref_escapeFacetValues === void 0 ? true : _ref_escapeFacetValues, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        if (!attribute) {
            throw new Error(withUsage('The `attribute` option is required.'));
        }
        if (!/^(and|or)$/.test(operator)) {
            throw new Error(withUsage('The `operator` must one of: `"and"`, `"or"` (got "'.concat(operator, '").')));
        }
        if (showMore === true && showMoreLimit <= limit) {
            throw new Error(withUsage('`showMoreLimit` should be greater than `limit`.'));
        }
        var formatItems = function formatItems(_0) {
            var label = _0.name, value = _0.escapedValue, item = _object_without_properties._(_0, [
                "name",
                "escapedValue"
            ]);
            return _object_spread_props._(_object_spread._({}, item), {
                value: value,
                label: label,
                highlighted: label
            });
        };
        var lastResultsFromMainSearch;
        var lastItemsFromMainSearch = [];
        var hasExhaustiveItems = true;
        var triggerRefine;
        var sendEvent;
        var isShowingMore = false;
        // Provide the same function to the `renderFn` so that way the user
        // has to only bind it once when `isFirstRendering` for instance
        var toggleShowMore = function toggleShowMore() {};
        function cachedToggleShowMore() {
            toggleShowMore();
        }
        function createToggleShowMore(renderOptions, widget) {
            return function() {
                isShowingMore = !isShowingMore;
                widget.render(renderOptions);
            };
        }
        function getLimit() {
            return isShowingMore ? showMoreLimit : limit;
        }
        var searchForFacetValues = function searchForFacetValues() {
            return function() {};
        };
        var createSearchForFacetValues = function createSearchForFacetValues(helper, widget) {
            return function(renderOptions) {
                return function(query) {
                    var instantSearchInstance = renderOptions.instantSearchInstance, searchResults = renderOptions.results;
                    if (query === '' && lastItemsFromMainSearch) {
                        // render with previous data from the helper.
                        renderFn(_object_spread_props._(_object_spread._({}, widget.getWidgetRenderState(_object_spread_props._(_object_spread._({}, renderOptions), {
                            results: lastResultsFromMainSearch
                        }))), {
                            instantSearchInstance: instantSearchInstance
                        }), false);
                    } else {
                        var tags = {
                            highlightPreTag: escapeFacetValues ? _utils.TAG_PLACEHOLDER.highlightPreTag : _utils.TAG_REPLACEMENT.highlightPreTag,
                            highlightPostTag: escapeFacetValues ? _utils.TAG_PLACEHOLDER.highlightPostTag : _utils.TAG_REPLACEMENT.highlightPostTag
                        };
                        helper.searchForFacetValues(attribute, query, // We cap the `maxFacetHits` value to 100 because the Algolia API
                        // doesn't support a greater number.
                        // See https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits/
                        Math.min(getLimit(), 100), tags).then(function(results) {
                            var facetValues = escapeFacetValues ? (0, _utils.escapeFacets)(results.facetHits) : results.facetHits;
                            var normalizedFacetValues = transformItems(facetValues.map(function(_0) {
                                var escapedValue = _0.escapedValue, value = _0.value, item = _object_without_properties._(_0, [
                                    "escapedValue",
                                    "value"
                                ]);
                                return _object_spread_props._(_object_spread._({}, item), {
                                    value: escapedValue,
                                    label: value
                                });
                            }), {
                                results: searchResults
                            });
                            renderFn(_object_spread_props._(_object_spread._({}, widget.getWidgetRenderState(_object_spread_props._(_object_spread._({}, renderOptions), {
                                results: lastResultsFromMainSearch
                            }))), {
                                items: normalizedFacetValues,
                                canToggleShowMore: false,
                                canRefine: true,
                                isFromSearch: true,
                                instantSearchInstance: instantSearchInstance
                            }), false);
                        });
                    }
                };
            };
        };
        return {
            $$type: 'ais.refinementList',
            init: function init(initOptions) {
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    refinementList: _object_spread_props._(_object_spread._({}, renderState.refinementList), _define_property._({}, attribute, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(renderOptions) {
                var _this = this;
                var results = renderOptions.results, state = renderOptions.state, createURL = renderOptions.createURL, instantSearchInstance = renderOptions.instantSearchInstance, helper = renderOptions.helper;
                var items = [];
                var facetValues = [];
                if (!sendEvent || !triggerRefine || !searchForFacetValues) {
                    sendEvent = (0, _utils.createSendEventForFacet)({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        attribute: attribute,
                        widgetType: this.$$type
                    });
                    triggerRefine = function triggerRefine(facetValue) {
                        sendEvent('click:internal', facetValue);
                        helper.toggleFacetRefinement(attribute, facetValue).search();
                    };
                    searchForFacetValues = createSearchForFacetValues(helper, this);
                }
                if (results) {
                    var values = results.getFacetValues(attribute, {
                        sortBy: sortBy,
                        facetOrdering: sortBy === DEFAULT_SORT
                    });
                    facetValues = values && Array.isArray(values) ? values : [];
                    items = transformItems(facetValues.slice(0, getLimit()).map(formatItems), {
                        results: results
                    });
                    var maxValuesPerFacetConfig = state.maxValuesPerFacet;
                    var currentLimit = getLimit();
                    // If the limit is the max number of facet retrieved it is impossible to know
                    // if the facets are exhaustive. The only moment we are sure it is exhaustive
                    // is when it is strictly under the number requested unless we know that another
                    // widget has requested more values (maxValuesPerFacet > getLimit()).
                    // Because this is used for making the search of facets unable or not, it is important
                    // to be conservative here.
                    hasExhaustiveItems = maxValuesPerFacetConfig > currentLimit ? facetValues.length <= currentLimit : facetValues.length < currentLimit;
                    lastResultsFromMainSearch = results;
                    lastItemsFromMainSearch = items;
                    if (renderOptions.results) {
                        toggleShowMore = createToggleShowMore(renderOptions, this);
                    }
                }
                // Do not mistake searchForFacetValues and searchFacetValues which is the actual search
                // function
                var searchFacetValues = searchForFacetValues && searchForFacetValues(renderOptions);
                var canShowLess = isShowingMore && lastItemsFromMainSearch.length > limit;
                var canShowMore = showMore && !hasExhaustiveItems;
                var canToggleShowMore = canShowLess || canShowMore;
                return {
                    createURL: function createURL1(facetValue) {
                        return createURL(function(uiState) {
                            return _this.getWidgetUiState(uiState, {
                                searchParameters: state.resetPage().toggleFacetRefinement(attribute, facetValue),
                                helper: helper
                            });
                        });
                    },
                    items: items,
                    refine: triggerRefine,
                    searchForItems: searchFacetValues,
                    isFromSearch: false,
                    canRefine: items.length > 0,
                    widgetParams: widgetParams,
                    isShowingMore: isShowingMore,
                    canToggleShowMore: canToggleShowMore,
                    toggleShowMore: cachedToggleShowMore,
                    sendEvent: sendEvent,
                    hasExhaustiveItems: hasExhaustiveItems
                };
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                var withoutMaxValuesPerFacet = state.setQueryParameter('maxValuesPerFacet', undefined);
                if (operator === 'and') {
                    return withoutMaxValuesPerFacet.removeFacet(attribute);
                }
                return withoutMaxValuesPerFacet.removeDisjunctiveFacet(attribute);
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var values = operator === 'or' ? searchParameters.getDisjunctiveRefinements(attribute) : searchParameters.getConjunctiveRefinements(attribute);
                return removeEmptyRefinementsFromUiState(_object_spread_props._(_object_spread._({}, uiState), {
                    refinementList: _object_spread_props._(_object_spread._({}, uiState.refinementList), _define_property._({}, attribute, values))
                }), attribute);
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var isDisjunctive = operator === 'or';
                if (searchParameters.isHierarchicalFacet(attribute)) {
                    (0, _utils.warning)(false, 'RefinementList: Attribute "'.concat(attribute, '" is already used by another widget applying hierarchical faceting.\nAs this is not supported, please make sure to remove this other widget or this RefinementList widget will not work at all.'));
                    return searchParameters;
                }
                if (isDisjunctive && searchParameters.isConjunctiveFacet(attribute) || !isDisjunctive && searchParameters.isDisjunctiveFacet(attribute)) {
                    (0, _utils.warning)(false, 'RefinementList: Attribute "'.concat(attribute, '" is used by another refinement list with a different operator.\nAs this is not supported, please make sure to only use this attribute with one of the two operators.'));
                    return searchParameters;
                }
                var values = uiState.refinementList && uiState.refinementList[attribute];
                var withFacetConfiguration = isDisjunctive ? searchParameters.addDisjunctiveFacet(attribute).removeDisjunctiveFacetRefinement(attribute) : searchParameters.addFacet(attribute).removeFacetRefinement(attribute);
                var currentMaxValuesPerFacet = withFacetConfiguration.maxValuesPerFacet || 0;
                var nextMaxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
                var withMaxValuesPerFacet = withFacetConfiguration.setQueryParameter('maxValuesPerFacet', nextMaxValuesPerFacet);
                if (!values) {
                    var key = isDisjunctive ? 'disjunctiveFacetsRefinements' : 'facetsRefinements';
                    return withMaxValuesPerFacet.setQueryParameters(_define_property._({}, key, _object_spread_props._(_object_spread._({}, withMaxValuesPerFacet[key]), _define_property._({}, attribute, []))));
                }
                return values.reduce(function(parameters, value) {
                    return isDisjunctive ? parameters.addDisjunctiveFacetRefinement(attribute, value) : parameters.addFacetRefinement(attribute, value);
                }, withMaxValuesPerFacet);
            }
        };
    };
};
function removeEmptyRefinementsFromUiState(indexUiState, attribute) {
    if (!indexUiState.refinementList) {
        return indexUiState;
    }
    if (!indexUiState.refinementList[attribute] || indexUiState.refinementList[attribute].length === 0) {
        delete indexUiState.refinementList[attribute];
    }
    if (Object.keys(indexUiState.refinementList).length === 0) {
        delete indexUiState.refinementList;
    }
    return indexUiState;
}
var _default = connectRefinementList;
