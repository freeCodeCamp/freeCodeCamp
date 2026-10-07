import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$2 } from '@swc/helpers/esm/_to_consumable_array.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { noop } from '../../lib/utils/noop.js';
import { getRefinements } from '../../lib/utils/getRefinements.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'current-refinements',
    connector: true
});
var connectCurrentRefinements = function connectCurrentRefinements(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        if ((widgetParams || {}).includedAttributes && (widgetParams || {}).excludedAttributes) {
            throw new Error(withUsage('The options `includedAttributes` and `excludedAttributes` cannot be used together.'));
        }
        var _ref = widgetParams || {}, includedAttributes = _ref.includedAttributes, _ref_excludedAttributes = _ref.excludedAttributes, excludedAttributes = _ref_excludedAttributes === void 0 ? [
            'query'
        ] : _ref_excludedAttributes, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        return {
            $$type: 'ais.currentRefinements',
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
            dispose: function dispose() {
                unmountFn();
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    currentRefinements: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, scopedResults = param.scopedResults, createURL = param.createURL, helper = param.helper;
                function getItems() {
                    if (!results) {
                        return transformItems(getRefinementsItems({
                            results: null,
                            helper: helper,
                            indexId: helper.state.index,
                            includedAttributes: includedAttributes,
                            excludedAttributes: excludedAttributes
                        }), {
                            results: results
                        });
                    }
                    return scopedResults.reduce(function(accResults, scopedResult) {
                        return accResults.concat(transformItems(getRefinementsItems({
                            results: scopedResult.results,
                            helper: scopedResult.helper,
                            indexId: scopedResult.indexId,
                            includedAttributes: includedAttributes,
                            excludedAttributes: excludedAttributes
                        }), {
                            results: results
                        }));
                    }, []);
                }
                var items = getItems();
                return {
                    items: items,
                    canRefine: items.length > 0,
                    refine: function refine(refinement) {
                        return clearRefinement(helper, refinement);
                    },
                    createURL: function createURL1(refinement) {
                        return createURL(clearRefinementFromState(helper.state, refinement));
                    },
                    widgetParams: widgetParams
                };
            }
        };
    };
};
function getRefinementsItems(param) {
    var results = param.results, helper = param.helper, indexId = param.indexId, includedAttributes = param.includedAttributes, excludedAttributes = param.excludedAttributes;
    var includesQuery = (includedAttributes || []).indexOf('query') !== -1 || (excludedAttributes || []).indexOf('query') === -1;
    var filterFunction = includedAttributes ? function(item) {
        return includedAttributes.indexOf(item.attribute) !== -1;
    } : function(item) {
        return excludedAttributes.indexOf(item.attribute) === -1;
    };
    var items = getRefinements(results, helper.state, includesQuery).map(normalizeRefinement).filter(filterFunction);
    return items.reduce(function(allItems, currentItem) {
        return _$2(allItems.filter(function(item) {
            return item.attribute !== currentItem.attribute;
        })).concat([
            {
                indexName: helper.state.index,
                indexId: indexId,
                attribute: currentItem.attribute,
                label: currentItem.attribute,
                refinements: items.filter(function(result) {
                    return result.attribute === currentItem.attribute;
                })// We want to keep the order of refinements except the numeric ones.
                .sort(function(a, b) {
                    return a.type === 'numeric' ? a.value - b.value : 0;
                }),
                refine: function refine(refinement) {
                    return clearRefinement(helper, refinement);
                }
            }
        ]);
    }, []);
}
function clearRefinementFromState(state, refinement) {
    state = state.resetPage();
    switch(refinement.type){
        case 'facet':
            return state.removeFacetRefinement(refinement.attribute, String(refinement.value));
        case 'disjunctive':
            return state.removeDisjunctiveFacetRefinement(refinement.attribute, String(refinement.value));
        case 'hierarchical':
            return state.removeHierarchicalFacetRefinement(refinement.attribute);
        case 'exclude':
            return state.removeExcludeRefinement(refinement.attribute, String(refinement.value));
        case 'numeric':
            return state.removeNumericRefinement(refinement.attribute, refinement.operator, String(refinement.value));
        case 'tag':
            return state.removeTagRefinement(String(refinement.value));
        case 'query':
            return state.setQueryParameter('query', '');
        default:
            return state;
    }
}
function clearRefinement(helper, refinement) {
    helper.setState(clearRefinementFromState(helper.state, refinement)).search();
}
function getOperatorSymbol(operator) {
    switch(operator){
        case '>=':
            return '≥';
        case '<=':
            return '≤';
        default:
            return operator;
    }
}
function normalizeRefinement(refinement) {
    var value = getValue(refinement);
    var label = refinement.operator ? "".concat(getOperatorSymbol(refinement.operator), " ").concat(refinement.name) : refinement.name;
    var normalizedRefinement = {
        attribute: refinement.attribute,
        type: refinement.type,
        value: value,
        label: label
    };
    if (refinement.operator !== undefined) {
        normalizedRefinement.operator = refinement.operator;
    }
    if (refinement.count !== undefined) {
        normalizedRefinement.count = refinement.count;
    }
    if (refinement.exhaustive !== undefined) {
        normalizedRefinement.exhaustive = refinement.exhaustive;
    }
    return normalizedRefinement;
}
function getValue(refinement) {
    if (refinement.type === 'numeric') {
        return Number(refinement.name);
    }
    if ('escapedValue' in refinement) {
        return refinement.escapedValue;
    }
    return refinement.name;
}

export { connectCurrentRefinements as default };
