'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "clearRefinements", {
    enumerable: true,
    get: function() {
        return clearRefinements;
    }
});
function clearRefinements(param) {
    var helper = param.helper, _param_attributesToClear = param.attributesToClear, attributesToClear = _param_attributesToClear === void 0 ? [] : _param_attributesToClear;
    var finalState = helper.state.setPage(0);
    finalState = attributesToClear.reduce(function(state, attribute) {
        if (finalState.isNumericRefined(attribute)) {
            return state.removeNumericRefinement(attribute);
        }
        if (finalState.isHierarchicalFacet(attribute)) {
            return state.removeHierarchicalFacetRefinement(attribute);
        }
        if (finalState.isDisjunctiveFacet(attribute)) {
            return state.removeDisjunctiveFacetRefinement(attribute);
        }
        if (finalState.isConjunctiveFacet(attribute)) {
            return state.removeFacetRefinement(attribute);
        }
        return state;
    }, finalState);
    if (attributesToClear.indexOf('query') !== -1) {
        finalState = finalState.setQuery('');
    }
    return finalState;
}
