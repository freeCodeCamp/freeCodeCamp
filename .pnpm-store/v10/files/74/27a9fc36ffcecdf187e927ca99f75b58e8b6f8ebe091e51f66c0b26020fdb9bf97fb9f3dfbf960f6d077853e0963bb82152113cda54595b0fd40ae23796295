import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$3 } from '@swc/helpers/esm/_object_without_properties.js';
import { _ as _$4 } from '@swc/helpers/esm/_sliced_to_array.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { createSendEventForFacet } from '../../lib/utils/createSendEventForFacet.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'menu',
    connector: true
});
var DEFAULT_SORT = [
    'isRefined',
    'name:asc'
];
/**
 * **Menu** connector provides the logic to build a widget that will give the user the ability to choose a single value for a specific facet. The typical usage of menu is for navigation in categories.
 *
 * This connector provides a `toggleShowMore()` function to display more or less items and a `refine()`
 * function to select an item. While selecting a new element, the `refine` will also unselect the
 * one that is currently selected.
 *
 * **Requirement:** the attribute passed as `attribute` must be present in "attributes for faceting" on the Algolia dashboard or configured as attributesForFaceting via a set settings call to the Algolia API.
 */ var connectMenu = function connectMenu(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, attribute = _ref.attribute, _ref_limit = _ref.limit, limit = _ref_limit === void 0 ? 10 : _ref_limit, _ref_showMore = _ref.showMore, showMore = _ref_showMore === void 0 ? false : _ref_showMore, _ref_showMoreLimit = _ref.showMoreLimit, showMoreLimit = _ref_showMoreLimit === void 0 ? 20 : _ref_showMoreLimit, _ref_sortBy = _ref.sortBy, sortBy = _ref_sortBy === void 0 ? DEFAULT_SORT : _ref_sortBy, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        if (!attribute) {
            throw new Error(withUsage('The `attribute` option is required.'));
        }
        if (showMore === true && showMoreLimit <= limit) {
            throw new Error(withUsage('The `showMoreLimit` option must be greater than `limit`.'));
        }
        var sendEvent;
        var _createURL;
        var _refine;
        // Provide the same function to the `renderFn` so that way the user
        // has to only bind it once when `isFirstRendering` for instance
        var isShowingMore = false;
        var toggleShowMore = function toggleShowMore() {};
        function createToggleShowMore(renderOptions, widget) {
            return function() {
                isShowingMore = !isShowingMore;
                widget.render(renderOptions);
            };
        }
        function cachedToggleShowMore() {
            toggleShowMore();
        }
        function getLimit() {
            return isShowingMore ? showMoreLimit : limit;
        }
        return {
            $$type: 'ais.menu',
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
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.removeHierarchicalFacet(attribute).setQueryParameter('maxValuesPerFacet', undefined);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    menu: _(_$1({}, renderState.menu), _$2({}, attribute, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(renderOptions) {
                var _this = this;
                var results = renderOptions.results, createURL = renderOptions.createURL, instantSearchInstance = renderOptions.instantSearchInstance, helper = renderOptions.helper;
                var items = [];
                var canToggleShowMore = false;
                if (!sendEvent) {
                    sendEvent = createSendEventForFacet({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        attribute: attribute,
                        widgetType: this.$$type
                    });
                }
                if (!_createURL) {
                    _createURL = function _createURL(facetValue) {
                        return createURL(function(uiState) {
                            return _this.getWidgetUiState(uiState, {
                                searchParameters: helper.state.resetPage().toggleFacetRefinement(attribute, facetValue),
                                helper: helper
                            });
                        });
                    };
                }
                if (!_refine) {
                    _refine = function _refine(facetValue) {
                        var _helper_getHierarchicalFacetBreadcrumb = _$4(helper.getHierarchicalFacetBreadcrumb(attribute), 1), refinedItem = _helper_getHierarchicalFacetBreadcrumb[0];
                        sendEvent('click:internal', facetValue ? facetValue : refinedItem);
                        helper.toggleFacetRefinement(attribute, facetValue ? facetValue : refinedItem).search();
                    };
                }
                if (renderOptions.results) {
                    toggleShowMore = createToggleShowMore(renderOptions, this);
                }
                if (results) {
                    var facetValues = results.getFacetValues(attribute, {
                        sortBy: sortBy,
                        facetOrdering: sortBy === DEFAULT_SORT
                    });
                    var facetItems = facetValues && !Array.isArray(facetValues) && facetValues.data ? facetValues.data : [];
                    canToggleShowMore = showMore && (isShowingMore || facetItems.length > getLimit());
                    items = transformItems(facetItems.slice(0, getLimit()).map(function(_0) {
                        var label = _0.name, value = _0.escapedValue; _0.path; var item = _$3(_0, [
                            "name",
                            "escapedValue",
                            "path"
                        ]);
                        return _(_$1({}, item), {
                            label: label,
                            value: value
                        });
                    }), {
                        results: results
                    });
                }
                return {
                    items: items,
                    createURL: _createURL,
                    refine: _refine,
                    sendEvent: sendEvent,
                    canRefine: items.length > 0,
                    widgetParams: widgetParams,
                    isShowingMore: isShowingMore,
                    toggleShowMore: cachedToggleShowMore,
                    canToggleShowMore: canToggleShowMore
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var _searchParameters_getHierarchicalFacetBreadcrumb = _$4(searchParameters.getHierarchicalFacetBreadcrumb(attribute), 1), value = _searchParameters_getHierarchicalFacetBreadcrumb[0];
                return removeEmptyRefinementsFromUiState(_(_$1({}, uiState), {
                    menu: _(_$1({}, uiState.menu), _$2({}, attribute, value))
                }), attribute);
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var value = uiState.menu && uiState.menu[attribute];
                if (searchParameters.isConjunctiveFacet(attribute) || searchParameters.isDisjunctiveFacet(attribute)) {
                    return searchParameters;
                }
                var withFacetConfiguration = searchParameters.removeHierarchicalFacet(attribute).addHierarchicalFacet({
                    name: attribute,
                    attributes: [
                        attribute
                    ]
                });
                var currentMaxValuesPerFacet = withFacetConfiguration.maxValuesPerFacet || 0;
                var nextMaxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
                var withMaxValuesPerFacet = withFacetConfiguration.setQueryParameter('maxValuesPerFacet', nextMaxValuesPerFacet);
                if (!value) {
                    return withMaxValuesPerFacet.setQueryParameters({
                        hierarchicalFacetsRefinements: _(_$1({}, withMaxValuesPerFacet.hierarchicalFacetsRefinements), _$2({}, attribute, []))
                    });
                }
                return withMaxValuesPerFacet.addHierarchicalFacetRefinement(attribute, value);
            }
        };
    };
};
function removeEmptyRefinementsFromUiState(indexUiState, attribute) {
    if (!indexUiState.menu) {
        return indexUiState;
    }
    if (indexUiState.menu[attribute] === undefined) {
        delete indexUiState.menu[attribute];
    }
    if (Object.keys(indexUiState.menu).length === 0) {
        delete indexUiState.menu;
    }
    return indexUiState;
}

export { connectMenu as default };
