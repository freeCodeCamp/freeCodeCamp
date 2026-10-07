import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$2 } from '@swc/helpers/esm/_to_consumable_array.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { isEqual } from '../../lib/utils/isEqual.js';
import { noop } from '../../lib/utils/noop.js';
import { getRefinements } from '../../lib/utils/getRefinements.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'query-rules',
    connector: true
});
function hasStateRefinements(state) {
    return [
        state.disjunctiveFacetsRefinements,
        state.facetsRefinements,
        state.hierarchicalFacetsRefinements,
        state.numericRefinements
    ].some(function(refinement) {
        return Boolean(refinement && Object.keys(refinement).length > 0);
    });
}
// A context rule must consist only of alphanumeric characters, hyphens, and underscores.
// See https://www.algolia.com/doc/guides/managing-results/refine-results/merchandising-and-promoting/in-depth/implementing-query-rules/#context
function escapeRuleContext(ruleName) {
    return ruleName.replace(/[^a-z0-9-_]+/gi, '_');
}
function getRuleContextsFromTrackedFilters(param) {
    var helper = param.helper, sharedHelperState = param.sharedHelperState, trackedFilters = param.trackedFilters;
    var ruleContexts = Object.keys(trackedFilters).reduce(function(facets, facetName) {
        var facetRefinements = getRefinements(helper.lastResults || {}, sharedHelperState, true).filter(function(refinement) {
            return refinement.attribute === facetName;
        }).map(function(refinement) {
            return refinement.numericValue || refinement.name;
        });
        var getTrackedFacetValues = trackedFilters[facetName];
        var trackedFacetValues = getTrackedFacetValues(facetRefinements);
        return _$2(facets).concat(_$2(facetRefinements.filter(function(facetRefinement) {
            return trackedFacetValues.includes(facetRefinement);
        }).map(function(facetValue) {
            return escapeRuleContext("ais-".concat(facetName, "-").concat(facetValue));
        })));
    }, []);
    return ruleContexts;
}
function applyRuleContexts(event) {
    var _this = this, helper = _this.helper, initialRuleContexts = _this.initialRuleContexts, trackedFilters = _this.trackedFilters, transformRuleContexts = _this.transformRuleContexts;
    var sharedHelperState = event.state;
    var previousRuleContexts = sharedHelperState.ruleContexts || [];
    var newRuleContexts = getRuleContextsFromTrackedFilters({
        helper: helper,
        sharedHelperState: sharedHelperState,
        trackedFilters: trackedFilters
    });
    var nextRuleContexts = _$2(initialRuleContexts).concat(_$2(newRuleContexts));
    var ruleContexts = transformRuleContexts(nextRuleContexts).slice(0, 10);
    if (!isEqual(previousRuleContexts, ruleContexts)) {
        helper.overrideStateWithoutTriggeringChangeEvent(_(_$1({}, sharedHelperState), {
            ruleContexts: ruleContexts
        }));
    }
}
var connectQueryRules = function connectQueryRules(render) {
    var unmount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(render, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_trackedFilters = _ref.trackedFilters, trackedFilters = _ref_trackedFilters === void 0 ? {} : _ref_trackedFilters, _ref_transformRuleContexts = _ref.transformRuleContexts, transformRuleContexts = _ref_transformRuleContexts === void 0 ? function(rules) {
            return rules;
        } : _ref_transformRuleContexts, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        Object.keys(trackedFilters).forEach(function(facetName) {
            if (typeof trackedFilters[facetName] !== 'function') {
                throw new Error(withUsage("'The \"".concat(facetName, '" filter value in the `trackedFilters` option expects a function.')));
            }
        });
        var hasTrackedFilters = Object.keys(trackedFilters).length > 0;
        // We store the initial rule contexts applied before creating the widget
        // so that we do not override them with the rules created from `trackedFilters`.
        var initialRuleContexts = [];
        var onHelperChange;
        return {
            $$type: 'ais.queryRules',
            init: function init(initOptions) {
                var helper = initOptions.helper, state = initOptions.state, instantSearchInstance = initOptions.instantSearchInstance;
                initialRuleContexts = state.ruleContexts || [];
                onHelperChange = applyRuleContexts.bind({
                    helper: helper,
                    initialRuleContexts: initialRuleContexts,
                    trackedFilters: trackedFilters,
                    transformRuleContexts: transformRuleContexts
                });
                if (hasTrackedFilters) {
                    // We need to apply the `ruleContexts` based on the `trackedFilters`
                    // before the helper changes state in some cases:
                    //   - Some filters are applied on the first load (e.g. using `configure`)
                    //   - The `transformRuleContexts` option sets initial `ruleContexts`.
                    if (hasStateRefinements(state) || Boolean(widgetParams.transformRuleContexts)) {
                        onHelperChange({
                            state: state
                        });
                    }
                    // We track every change in the helper to override its state and add
                    // any `ruleContexts` needed based on the `trackedFilters`.
                    helper.on('change', onHelperChange);
                }
                render(_(_$1({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render1(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                render(_(_$1({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results;
                var _ref = results || {}, _ref_userData = _ref.userData, userData = _ref_userData === void 0 ? [] : _ref_userData;
                var items = transformItems(userData, {
                    results: results
                });
                return {
                    items: items,
                    widgetParams: widgetParams
                };
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    queryRules: this.getWidgetRenderState(renderOptions)
                });
            },
            dispose: function dispose(param) {
                var helper = param.helper, state = param.state;
                unmount();
                if (hasTrackedFilters) {
                    helper.removeListener('change', onHelperChange);
                    return state.setQueryParameter('ruleContexts', initialRuleContexts);
                }
                return state;
            }
        };
    };
};

export { connectQueryRules as default };
