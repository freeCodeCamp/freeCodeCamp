import { _ as _$3 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_sliced_to_array.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'breadcrumb',
    connector: true
});
var connectBreadcrumb = function connectBreadcrumb(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    var connectorState = {};
    return function(widgetParams) {
        var _ref = widgetParams || {}, attributes = _ref.attributes, _ref_separator = _ref.separator, separator = _ref_separator === void 0 ? ' > ' : _ref_separator, _ref_rootPath = _ref.rootPath, rootPath = _ref_rootPath === void 0 ? null : _ref_rootPath, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        if (!attributes || !Array.isArray(attributes) || attributes.length === 0) {
            throw new Error(withUsage('The `attributes` option expects an array of strings.'));
        }
        var _attributes = _(attributes, 1), hierarchicalFacetName = _attributes[0];
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
                renderFn(_$1(_$2({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                renderFn(_$1(_$2({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            dispose: function dispose() {
                unmountFn();
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _$1(_$2({}, renderState), {
                    breadcrumb: _$1(_$2({}, renderState.breadcrumb), _$3({}, hierarchicalFacetName, this.getWidgetRenderState(renderOptions)))
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
                return removeEmptyRefinementsFromUiState(_$1(_$2({}, uiState), {
                    hierarchicalMenu: _$1(_$2({}, uiState.hierarchicalMenu), _$3({}, hierarchicalFacetName, path))
                }), hierarchicalFacetName);
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var values = uiState.hierarchicalMenu && uiState.hierarchicalMenu[hierarchicalFacetName];
                if (searchParameters.isConjunctiveFacet(hierarchicalFacetName) || searchParameters.isDisjunctiveFacet(hierarchicalFacetName)) {
                    return searchParameters;
                }
                if (searchParameters.isHierarchicalFacet(hierarchicalFacetName)) {
                    searchParameters.getHierarchicalFacetByName(hierarchicalFacetName);
                }
                var withFacetConfiguration = searchParameters.removeHierarchicalFacet(hierarchicalFacetName).addHierarchicalFacet({
                    name: hierarchicalFacetName,
                    attributes: attributes,
                    separator: separator,
                    rootPath: rootPath
                });
                if (!values) {
                    return withFacetConfiguration.setQueryParameters({
                        hierarchicalFacetsRefinements: _$1(_$2({}, withFacetConfiguration.hierarchicalFacetsRefinements), _$3({}, hierarchicalFacetName, []))
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

export { connectBreadcrumb as default };
