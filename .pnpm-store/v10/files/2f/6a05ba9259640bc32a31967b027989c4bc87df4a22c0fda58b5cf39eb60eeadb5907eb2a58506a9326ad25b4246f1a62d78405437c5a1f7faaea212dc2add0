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
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'breadcrumb',
    connector: true
});
var connectBreadcrumb = function connectBreadcrumb(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    var connectorState = {};
    return function(widgetParams) {
        var _ref = widgetParams || {}, attributes = _ref.attributes, _ref_separator = _ref.separator, separator = _ref_separator === void 0 ? ' > ' : _ref_separator, _ref_rootPath = _ref.rootPath, rootPath = _ref_rootPath === void 0 ? null : _ref_rootPath, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        if (!attributes || !Array.isArray(attributes) || attributes.length === 0) {
            throw new Error(withUsage('The `attributes` option expects an array of strings.'));
        }
        var _attributes = _sliced_to_array._(attributes, 1), hierarchicalFacetName = _attributes[0];
        function getRefinedState(state, facetValue) {
            if (!facetValue) {
                var breadcrumb = state.getHierarchicalFacetBreadcrumb(hierarchicalFacetName);
                if (breadcrumb.length === 0) {
                    return state;
                } else {
                    return state.resetPage().toggleFacetRefinement(hierarchicalFacetName, breadcrumb[0]);
                }
            }
            return state.resetPage().toggleFacetRefinement(hierarchicalFacetName, facetValue);
        }
        return {
            $$type: 'ais.breadcrumb',
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
            dispose: function dispose() {
                unmountFn();
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    breadcrumb: _object_spread_props._(_object_spread._({}, renderState.breadcrumb), _define_property._({}, hierarchicalFacetName, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var _this = this;
                var helper = param.helper, createURL = param.createURL, results = param.results, state = param.state;
                function getItems() {
                    // The hierarchicalFacets condition is required for flavors
                    // that render immediately with empty results, without relying
                    // on init() (like React InstantSearch).
                    if (!results || state.hierarchicalFacets.length === 0) {
                        return [];
                    }
                    var facetValues = results.getFacetValues(hierarchicalFacetName, {});
                    var facetItems = facetValues && !Array.isArray(facetValues) && facetValues.data ? facetValues.data : [];
                    var items = transformItems(shiftItemsValues(prepareItems(facetItems)), {
                        results: results
                    });
                    return items;
                }
                var items = getItems();
                if (!connectorState.createURL) {
                    connectorState.createURL = function(facetValue) {
                        return createURL(function(uiState) {
                            return _this.getWidgetUiState(uiState, {
                                searchParameters: getRefinedState(helper.state, facetValue),
                                helper: helper
                            });
                        });
                    };
                }
                if (!connectorState.refine) {
                    connectorState.refine = function(facetValue) {
                        helper.setState(getRefinedState(helper.state, facetValue)).search();
                    };
                }
                return {
                    canRefine: items.length > 0,
                    createURL: connectorState.createURL,
                    items: items,
                    refine: connectorState.refine,
                    widgetParams: widgetParams
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
                    rootPath: rootPath
                });
                if (!values) {
                    return withFacetConfiguration.setQueryParameters({
                        hierarchicalFacetsRefinements: _object_spread_props._(_object_spread._({}, withFacetConfiguration.hierarchicalFacetsRefinements), _define_property._({}, hierarchicalFacetName, []))
                    });
                }
                return withFacetConfiguration.addHierarchicalFacetRefinement(hierarchicalFacetName, values.join(separator));
            }
        };
    };
};
function prepareItems(data) {
    return data.reduce(function(result, currentItem) {
        if (currentItem.isRefined) {
            result.push({
                label: currentItem.name,
                value: currentItem.escapedValue
            });
            if (Array.isArray(currentItem.data)) {
                result = result.concat(prepareItems(currentItem.data));
            }
        }
        return result;
    }, []);
}
function shiftItemsValues(array) {
    return array.map(function(x, idx) {
        return {
            label: x.label,
            value: idx + 1 === array.length ? null : array[idx + 1].value
        };
    });
}
function removeEmptyRefinementsFromUiState(indexUiState, attribute) {
    if (!indexUiState.hierarchicalMenu) {
        return indexUiState;
    }
    if (!indexUiState.hierarchicalMenu[attribute] || !indexUiState.hierarchicalMenu[attribute].length) {
        delete indexUiState.hierarchicalMenu[attribute];
    }
    if (Object.keys(indexUiState.hierarchicalMenu).length === 0) {
        delete indexUiState.hierarchicalMenu;
    }
    return indexUiState;
}
var _default = connectBreadcrumb;
