'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isFacetRefined", {
    enumerable: true,
    get: function() {
        return isFacetRefined;
    }
});
function isFacetRefined(helper, facet, value) {
    if (helper.state.isHierarchicalFacet(facet)) {
        return helper.state.isHierarchicalFacetRefined(facet, value);
    } else if (helper.state.isConjunctiveFacet(facet)) {
        return helper.state.isFacetRefined(facet, value);
    } else {
        return helper.state.isDisjunctiveFacetRefined(facet, value);
    }
}
