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
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'hierarchical-menu',
    connector: true
});
var DEFAULT_SORT = [
    'name:asc'
];
/**
 * **HierarchicalMenu** connector provides the logic to build a custom widget
 * that will give the user the ability to explore facets in a tree-like structure.
 *
 * This is commonly used for multi-level categorization of products on e-commerce
 * websites. From a UX point of view, we suggest not displaying more than two
 * levels deep.
 *
 * @type {Connector}
 * @param {function(HierarchicalMenuRenderingOptions, boolean)} renderFn Rendering function for the custom **HierarchicalMenu** widget.
 * @param {function} unmountFn Unmount function called when the widget is disposed.
 * @return {function(CustomHierarchicalMenuWidgetParams)} Re-usable widget factory for a custom **HierarchicalMenu** widget.
 */ var connectHierarchicalMenu = function connectHierarchicalMenu(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, attributes = _ref.attributes, _ref_separator = _ref.separator, separator = _ref_separator === void 0 ? ' > ' : _ref_separator, _ref_rootPath = _ref.rootPath, rootPath = _ref_rootPath === void 0 ? null : _ref_rootPath, _ref_showParentLevel = _ref.showParentLevel, showParentLevel = _ref_showParentLevel === void 0 ? true : _ref_showParentLevel, _ref_limit = _ref.limit, limit = _ref_limit === void 0 ? 10 : _ref_limit, _ref_showMore = _ref.showMore, showMore = _ref_showMore === void 0 ? false : _ref_showMore, _ref_showMoreLimit = _ref.showMoreLimit, showMoreLimit = _ref_showMoreLimit === void 0 ? 20 : _ref_showMoreLimit, _ref_sortBy = _ref.sortBy, sortBy = _ref_sortBy === void 0 ? DEFAULT_SORT : _ref_sortBy, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        if (!attributes || !Array.isArray(attributes) || attributes.length === 0) {
            throw new Error(withUsage('The `attributes` option expects an array of strings.'));
        }
        if (showMore === true && showMoreLimit <= limit) {
            throw new Error(withUsage('The `showMoreLimit` option must be greater than `limit`.'));
        }
        // we need to provide a hierarchicalFacet name for the search state
        // so that we can always map $hierarchicalFacetName => real attributes
        // we use the first attribute name
        var _attributes = _sliced_to_array._(attributes, 1), hierarchicalFacetName = _attributes[0];
        var sendEvent;
        // Provide the same function to the `renderFn` so that way the user
        // has to only bind it once when `isFirstRendering` for instance
        var toggleShowMore = function toggleShowMore() {};
        function cachedToggleShowMore() {
            toggleShowMore();
        }
        var _refine;
        var isShowingMore = false;
        function createToggleShowMore(renderOptions, widget) {
            return function() {
                isShowingMore = !isShowingMore;
                widget.render(renderOptions);
            };
        }
        function getLimit() {
            return isShowingMore ? showMoreLimit : limit;
        }
        function _prepareFacetValues(facetValues) {
            return facetValues.slice(0, getLimit()).map(function(_0) {
                var label = _0.name, value = _0.escapedValue, data = _0.data; _0.path; var subValue = _object_without_properties._(_0, [
                    "name",
                    "escapedValue",
                    "data",
                    "path"
                ]);
                var item = _object_spread_props._(_object_spread._({}, subValue), {
                    value: value,
                    label: label,
                    data: null
                });
                if (Array.isArray(data)) {
                    item.data = _prepareFacetValues(data);
                }
                return item;
            });
        }
        function _hasMoreItems(facetValues, maxValuesPerFacet) {
            var currentLimit = getLimit();
            return(// Check if we have exhaustive items at this level
            // If the limit is the max number of facet retrieved it is impossible to know
            // if the facets are exhaustive. The only moment we are sure it is exhaustive
            // is when it is strictly under the number requested unless we know that another
            // widget has requested more values (maxValuesPerFacet > getLimit()).
            !(maxValuesPerFacet > currentLimit ? facetValues.length <= currentLimit : facetValues.length < currentLimit) || // Check if any of the children are not exhaustive.
            facetValues.slice(0, limit).some(function(item) {
                return Array.isArray(item.data) && item.data.length > 0 && _hasMoreItems(item.data, maxValuesPerFacet);
            }));
        }
        return {
            $$type: 'ais.hierarchicalMenu',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                toggleShowMore = createToggleShowMore(renderOptions, this);
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.removeHierarchicalFacet(hierarchicalFacetName).setQueryParameter('maxValuesPerFacet', undefined);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    hierarchicalMenu: _object_spread_props._(_object_spread._({}, renderState.hierarchicalMenu), _define_property._({}, hierarchicalFacetName, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var _this = this;
                var results = param.results, state = param.state, createURL = param.createURL, instantSearchInstance = param.instantSearchInstance, helper = param.helper;
                var items = [];
                var canToggleShowMore = false;
                // Bind createURL to this specific attribute
                var _createURL = function _createURL(facetValue) {
                    return createURL(function(uiState) {
                        return _this.getWidgetUiState(uiState, {
                            searchParameters: state.resetPage().toggleFacetRefinement(hierarchicalFacetName, facetValue),
                            helper: helper
                        });
                    });
                };
                if (!sendEvent) {
                    sendEvent = (0, _utils.createSendEventForFacet)({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        attribute: function attribute(facetValue) {
                            var index = facetValue.split(separator).length - 1;
                            return attributes[index];
                        },
                        widgetType: this.$$type
                    });
                }
                if (!_refine) {
                    _refine = function _refine(facetValue) {
                        sendEvent('click:internal', facetValue);
                        helper.toggleFacetRefinement(hierarchicalFacetName, facetValue).search();
                    };
                }
                if (results) {
                    var facetValues = results.getFacetValues(hierarchicalFacetName, {
                        sortBy: sortBy,
                        facetOrdering: sortBy === DEFAULT_SORT
                    });
                    var facetItems = facetValues && !Array.isArray(facetValues) && facetValues.data ? facetValues.data : [];
                    // Check if there are more items to show at any level
                    // This checks both the exhaustiveness of items retrieved from the API
                    // and whether there are hidden items at any visible child level
                    var hasMoreItems = _hasMoreItems(facetItems, state.maxValuesPerFacet || 0);
                    canToggleShowMore = showMore && (isShowingMore || hasMoreItems);
                    items = transformItems(_prepareFacetValues(facetItems), {
                        results: results
                    });
                }
                return {
                    items: items,
                    refine: _refine,
                    canRefine: items.length > 0,
                    createURL: _createURL,
                    sendEvent: sendEvent,
                    widgetParams: widgetParams,
                    isShowingMore: isShowingMore,
                    toggleShowMore: cachedToggleShowMore,
                    canToggleShowMore: canToggleShowMore
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var path = searchParameters.getHierarchicalFacetBreadcrumb(hierarchicalFacetName);
                return removeEmptyRefinementsFromUiState(_object_spread_props._(_object_spread._({}, uiState), {
                    hierarchicalMenu: _object_spread_props._(_object_spread._({}, uiState.hierarchicalMenu), _define_property._({}, hierarchicalFacetName, path))
                }), hierarchicalFacetName);
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var values = uiState.hierarchicalMenu && uiState.hierarchicalMenu[hierarchicalFacetName];
                if (searchParameters.isConjunctiveFacet(hierarchicalFacetName) || searchParameters.isDisjunctiveFacet(hierarchicalFacetName)) {
                    (0, _utils.warning)(false, 'HierarchicalMenu: Attribute "'.concat(hierarchicalFacetName, '" is already used by another widget applying conjunctive or disjunctive faceting.\nAs this is not supported, please make sure to remove this other widget or this HierarchicalMenu widget will not work at all.'));
                    return searchParameters;
                }
                if (searchParameters.isHierarchicalFacet(hierarchicalFacetName)) {
                    var facet = searchParameters.getHierarchicalFacetByName(hierarchicalFacetName);
                    (0, _utils.warning)((0, _utils.isEqual)(facet.attributes, attributes) && facet.separator === separator && facet.rootPath === rootPath, 'Using Breadcrumb and HierarchicalMenu on the same facet with different options overrides the configuration of the HierarchicalMenu.');
                }
                var withFacetConfiguration = searchParameters.removeHierarchicalFacet(hierarchicalFacetName).addHierarchicalFacet({
                    name: hierarchicalFacetName,
                    attributes: attributes,
                    separator: separator,
                    rootPath: rootPath,
                    showParentLevel: showParentLevel
                });
                var currentMaxValuesPerFacet = withFacetConfiguration.maxValuesPerFacet || 0;
                var nextMaxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
                var withMaxValuesPerFacet = withFacetConfiguration.setQueryParameter('maxValuesPerFacet', nextMaxValuesPerFacet);
                if (!values) {
                    return withMaxValuesPerFacet.setQueryParameters({
                        hierarchicalFacetsRefinements: _object_spread_props._(_object_spread._({}, withMaxValuesPerFacet.hierarchicalFacetsRefinements), _define_property._({}, hierarchicalFacetName, []))
                    });
                }
                return withMaxValuesPerFacet.addHierarchicalFacetRefinement(hierarchicalFacetName, values.join(separator));
            }
        };
    };
};
function removeEmptyRefinementsFromUiState(indexUiState, attribute) {
    if (!indexUiState.hierarchicalMenu) {
        return indexUiState;
    }
    if (!indexUiState.hierarchicalMenu[attribute] || indexUiState.hierarchicalMenu[attribute].length === 0) {
        delete indexUiState.hierarchicalMenu[attribute];
    }
    if (Object.keys(indexUiState.hierarchicalMenu).length === 0) {
        delete indexUiState.hierarchicalMenu;
    }
    return indexUiState;
}
var _default = connectHierarchicalMenu;
