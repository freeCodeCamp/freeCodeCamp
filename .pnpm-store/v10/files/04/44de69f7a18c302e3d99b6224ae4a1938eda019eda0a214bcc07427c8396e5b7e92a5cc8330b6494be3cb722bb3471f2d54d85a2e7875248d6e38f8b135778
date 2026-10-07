/**
 * Clears the refinements of a SearchParameters object based on rules provided.
 * The included attributes list is applied before the excluded attributes list. If the list
 * is not provided, this list of all the currently refined attributes is used as included attributes.
 * @returns search parameters with refinements cleared
 */ function clearRefinements(param) {
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

export { clearRefinements };
