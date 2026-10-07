import { unescapeFacetValue, escapeFacetValue } from './escapeFacetValue.js';
import { find } from './find.js';

function getRefinement(state, type, attribute, name) {
    var resultsFacets = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
    var res = {
        type: type,
        attribute: attribute,
        name: name,
        escapedValue: escapeFacetValue(name)
    };
    var facet = find(resultsFacets, function(resultsFacet) {
        return resultsFacet.name === attribute;
    });
    var count;
    if (type === 'hierarchical') {
        var _loop = function(i) {
            facet = facet && facet.data && find(Object.keys(facet.data).map(getFacetRefinement(facet.data)), function(refinement) {
                return refinement.name === nameParts[i];
            });
        };
        var facetDeclaration = state.getHierarchicalFacetByName(attribute);
        var nameParts = name.split(facetDeclaration.separator);
        var getFacetRefinement = function getFacetRefinement(facetData) {
            return function(refinementKey) {
                return facetData[refinementKey];
            };
        };
        for(var i = 0; facet !== undefined && i < nameParts.length; ++i)_loop(i);
        count = facet && facet.count;
    } else {
        count = facet && facet.data && facet.data[res.name];
    }
    if (count !== undefined) {
        res.count = count;
    }
    if (facet && facet.exhaustive !== undefined) {
        res.exhaustive = facet.exhaustive;
    }
    return res;
}
function getRefinements(_results, state) {
    var includesQuery = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var results = _results || {};
    var refinements = [];
    var _state_facetsRefinements = state.facetsRefinements, facetsRefinements = _state_facetsRefinements === void 0 ? {} : _state_facetsRefinements, _state_facetsExcludes = state.facetsExcludes, facetsExcludes = _state_facetsExcludes === void 0 ? {} : _state_facetsExcludes, _state_disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements, disjunctiveFacetsRefinements = _state_disjunctiveFacetsRefinements === void 0 ? {} : _state_disjunctiveFacetsRefinements, _state_hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements, hierarchicalFacetsRefinements = _state_hierarchicalFacetsRefinements === void 0 ? {} : _state_hierarchicalFacetsRefinements, _state_numericRefinements = state.numericRefinements, numericRefinements = _state_numericRefinements === void 0 ? {} : _state_numericRefinements, _state_tagRefinements = state.tagRefinements, tagRefinements = _state_tagRefinements === void 0 ? [] : _state_tagRefinements;
    Object.keys(facetsRefinements).forEach(function(attribute) {
        var refinementNames = facetsRefinements[attribute];
        refinementNames.forEach(function(refinementName) {
            refinements.push(getRefinement(state, 'facet', attribute, refinementName, results.facets));
        });
    });
    Object.keys(facetsExcludes).forEach(function(attribute) {
        var refinementNames = facetsExcludes[attribute];
        refinementNames.forEach(function(refinementName) {
            refinements.push({
                type: 'exclude',
                attribute: attribute,
                name: refinementName,
                exclude: true
            });
        });
    });
    Object.keys(disjunctiveFacetsRefinements).forEach(function(attribute) {
        var refinementNames = disjunctiveFacetsRefinements[attribute];
        refinementNames.forEach(function(refinementName) {
            refinements.push(getRefinement(state, 'disjunctive', attribute, // We unescape any disjunctive refined values with `unescapeFacetValue` because
            // they can be escaped on negative numeric values with `escapeFacetValue`.
            unescapeFacetValue(refinementName), results.disjunctiveFacets));
        });
    });
    Object.keys(hierarchicalFacetsRefinements).forEach(function(attribute) {
        var refinementNames = hierarchicalFacetsRefinements[attribute];
        refinementNames.forEach(function(refinement) {
            refinements.push(getRefinement(state, 'hierarchical', attribute, refinement, results.hierarchicalFacets));
        });
    });
    Object.keys(numericRefinements).forEach(function(attribute) {
        var operators = numericRefinements[attribute];
        Object.keys(operators).forEach(function(operatorOriginal) {
            var operator = operatorOriginal;
            var valueOrValues = operators[operator];
            var refinementNames = Array.isArray(valueOrValues) ? valueOrValues : [
                valueOrValues
            ];
            refinementNames.forEach(function(refinementName) {
                refinements.push({
                    type: 'numeric',
                    attribute: attribute,
                    name: "".concat(refinementName),
                    numericValue: refinementName,
                    operator: operator
                });
            });
        });
    });
    tagRefinements.forEach(function(refinementName) {
        refinements.push({
            type: 'tag',
            attribute: '_tags',
            name: refinementName
        });
    });
    if (includesQuery && state.query && state.query.trim()) {
        refinements.push({
            attribute: 'query',
            type: 'query',
            name: state.query,
            query: state.query
        });
    }
    return refinements;
}

export { getRefinements };
