import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { find } from '../../lib/utils/find.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'sort-by',
    connector: true
});
function isStrategyItem(item) {
    return 'strategy' in item && item.strategy !== undefined;
}
function getItemValue(item) {
    if (isStrategyItem(item)) {
        return item.strategy;
    }
    return item.value;
}
function isValidStrategy(itemsLookup, value) {
    if (!value) return false;
    var item = itemsLookup[value];
    return item !== undefined && isStrategyItem(item);
}
var connectSortBy = function connectSortBy(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    var connectorState = {};
    return function(widgetParams) {
        var _ref = widgetParams || {}, items = _ref.items, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(x) {
            return x;
        } : _ref_transformItems;
        if (!Array.isArray(items)) {
            throw new Error(withUsage('The `items` option expects an array of objects.'));
        }
        var itemsLookup = {};
        items.forEach(function(item, index) {
            var hasValue = 'value' in item && item.value !== undefined;
            var hasStrategy = 'strategy' in item && item.strategy !== undefined;
            // Validate mutual exclusivity
            if (hasValue && hasStrategy) {
                throw new Error(withUsage("Item at index ".concat(index, ' cannot have both "value" and "strategy" properties.')));
            }
            if (!hasValue && !hasStrategy) {
                throw new Error(withUsage("Item at index ".concat(index, ' must have either a "value" or "strategy" property.')));
            }
            var itemValue = getItemValue(item);
            itemsLookup[itemValue] = item;
        });
        connectorState.itemsLookup = itemsLookup;
        return {
            $$type: 'ais.sortBy',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                // Check if strategies are used outside composition mode
                var hasStrategyItems = items.some(function(item) {
                    return 'strategy' in item && item.strategy;
                });
                if (hasStrategyItems && !instantSearchInstance.compositionID) {
                    throw new Error(withUsage('Sorting strategies can only be used in composition mode. Please provide a "compositionID" to your InstantSearch instance.'));
                }
                var widgetRenderState = this.getWidgetRenderState(initOptions);
                var currentIndex = widgetRenderState.currentRefinement;
                find(items, function(item) {
                    return getItemValue(item) === currentIndex;
                });
                renderFn(_(_$1({}, widgetRenderState), {
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
                // Clear sortBy parameter if it was set
                if (connectorState.isUsingComposition && state.sortBy) {
                    state = state.setQueryParameter('sortBy', undefined);
                }
                // Restore initial index if changed
                if (connectorState.initialValue && state.index !== connectorState.initialValue) {
                    return state.setIndex(connectorState.initialValue);
                }
                return state;
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    sortBy: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, helper = param.helper, state = param.state, parent = param.parent, instantSearchInstance = param.instantSearchInstance;
                // Capture initial value (composition ID or main index)
                if (!connectorState.initialValue && parent) {
                    connectorState.initialValue = parent.getIndexName();
                }
                // Create refine function if not exists
                if (!connectorState.refine) {
                    // Cache composition mode status for lifecycle methods that don't have access to instantSearchInstance
                    connectorState.isUsingComposition = Boolean(instantSearchInstance === null || instantSearchInstance === void 0 ? void 0 : instantSearchInstance.compositionID);
                    connectorState.refine = function(value) {
                        // O(1) lookup using the items lookup table
                        var item = connectorState.itemsLookup[value];
                        if (item && isStrategyItem(item)) {
                            // Strategy-based: set sortBy parameter for composition API
                            // The composition backend will interpret this and apply the sorting strategy
                            helper.setQueryParameter('sortBy', item.strategy).search();
                        } else {
                            // Index-based: clear any existing sortBy parameter and switch to the new index
                            // Clearing sortBy is critical when transitioning from strategy to index-based sorting
                            helper.setQueryParameter('sortBy', undefined).setIndex(value).search();
                        }
                    };
                }
                // Transform items first (on original structure)
                var transformedItems = transformItems(items, {
                    results: results
                });
                // Normalize items: all get a 'value' property for the render state
                var normalizedItems = transformedItems.map(function(item) {
                    return {
                        label: item.label,
                        value: getItemValue(item)
                    };
                });
                // Determine current refinement
                // In composition mode, prefer sortBy parameter if it corresponds to a valid strategy item
                // Otherwise use the index (for index-based items or when no valid strategy is active)
                var currentRefinement = connectorState.isUsingComposition && isValidStrategy(connectorState.itemsLookup, state.sortBy) ? state.sortBy : state.index;
                var hasNoResults = results ? results.nbHits === 0 : true;
                return {
                    currentRefinement: currentRefinement,
                    options: normalizedItems,
                    refine: connectorState.refine,
                    hasNoResults: hasNoResults,
                    canRefine: !hasNoResults && items.length > 0,
                    widgetParams: widgetParams
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                // In composition mode with an active strategy, use sortBy parameter
                // Otherwise use index-based behavior (traditional mode)
                var currentValue = connectorState.isUsingComposition && isValidStrategy(connectorState.itemsLookup, searchParameters.sortBy) ? searchParameters.sortBy : searchParameters.index;
                return _(_$1({}, uiState), {
                    sortBy: currentValue !== connectorState.initialValue ? currentValue : undefined
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var sortByValue = uiState.sortBy || connectorState.initialValue || searchParameters.index;
                if (isValidStrategy(connectorState.itemsLookup, sortByValue)) {
                    var item = connectorState.itemsLookup[sortByValue];
                    // Strategy-based: set the sortBy parameter for composition API
                    // The index remains as the compositionID
                    return searchParameters.setQueryParameter('sortBy', item.strategy);
                }
                // Index-based: set the index parameter (traditional behavior)
                return searchParameters.setQueryParameter('index', sortByValue);
            }
        };
    };
};

export { connectSortBy as default };
