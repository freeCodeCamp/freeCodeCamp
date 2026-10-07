import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { findIndex } from './findIndex.js';
import { uniq } from './uniq.js';

var mergeWithRest = function mergeWithRest(left, right) {
    right.facets; right.disjunctiveFacets; right.facetsRefinements; right.facetsExcludes; right.disjunctiveFacetsRefinements; right.numericRefinements; right.tagRefinements; right.hierarchicalFacets; right.hierarchicalFacetsRefinements; right.ruleContexts; var rest = _(right, [
        "facets",
        "disjunctiveFacets",
        "facetsRefinements",
        "facetsExcludes",
        "disjunctiveFacetsRefinements",
        "numericRefinements",
        "tagRefinements",
        "hierarchicalFacets",
        "hierarchicalFacetsRefinements",
        "ruleContexts"
    ]);
    return left.setQueryParameters(rest);
};
// Merge facets
var mergeFacets = function mergeFacets(left, right) {
    return right.facets.reduce(function(_, name) {
        return _.addFacet(name);
    }, left);
};
var mergeDisjunctiveFacets = function mergeDisjunctiveFacets(left, right) {
    return right.disjunctiveFacets.reduce(function(_, name) {
        return _.addDisjunctiveFacet(name);
    }, left);
};
var mergeHierarchicalFacets = function mergeHierarchicalFacets(left, right) {
    return left.setQueryParameters({
        hierarchicalFacets: right.hierarchicalFacets.reduce(function(facets, facet) {
            var index = findIndex(facets, function(_) {
                return _.name === facet.name;
            });
            if (index === -1) {
                return facets.concat(facet);
            }
            var nextFacets = facets.slice();
            nextFacets.splice(index, 1, facet);
            return nextFacets;
        }, left.hierarchicalFacets)
    });
};
// Merge facet refinements
var mergeTagRefinements = function mergeTagRefinements(left, right) {
    return right.tagRefinements.reduce(function(_, value) {
        return _.addTagRefinement(value);
    }, left);
};
var mergeFacetRefinements = function mergeFacetRefinements(left, right) {
    return left.setQueryParameters({
        facetsRefinements: _$1({}, left.facetsRefinements, right.facetsRefinements)
    });
};
var mergeFacetsExcludes = function mergeFacetsExcludes(left, right) {
    return left.setQueryParameters({
        facetsExcludes: _$1({}, left.facetsExcludes, right.facetsExcludes)
    });
};
var mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements(left, right) {
    return left.setQueryParameters({
        disjunctiveFacetsRefinements: _$1({}, left.disjunctiveFacetsRefinements, right.disjunctiveFacetsRefinements)
    });
};
var mergeNumericRefinements = function mergeNumericRefinements(left, right) {
    return left.setQueryParameters({
        numericRefinements: _$1({}, left.numericRefinements, right.numericRefinements)
    });
};
var mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements(left, right) {
    return left.setQueryParameters({
        hierarchicalFacetsRefinements: _$1({}, left.hierarchicalFacetsRefinements, right.hierarchicalFacetsRefinements)
    });
};
var mergeRuleContexts = function mergeRuleContexts(left, right) {
    var ruleContexts = uniq([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));
    if (ruleContexts.length > 0) {
        return left.setQueryParameters({
            ruleContexts: ruleContexts
        });
    }
    return left;
};
var mergeSearchParameters = function mergeSearchParameters() {
    for(var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++){
        parameters[_key] = arguments[_key];
    }
    return parameters.reduce(function(left, right) {
        var hierarchicalFacetsRefinementsMerged = mergeHierarchicalFacetsRefinements(left, right);
        var hierarchicalFacetsMerged = mergeHierarchicalFacets(hierarchicalFacetsRefinementsMerged, right);
        var tagRefinementsMerged = mergeTagRefinements(hierarchicalFacetsMerged, right);
        var numericRefinementsMerged = mergeNumericRefinements(tagRefinementsMerged, right);
        var disjunctiveFacetsRefinementsMerged = mergeDisjunctiveFacetsRefinements(numericRefinementsMerged, right);
        var facetsExcludesMerged = mergeFacetsExcludes(disjunctiveFacetsRefinementsMerged, right);
        var facetRefinementsMerged = mergeFacetRefinements(facetsExcludesMerged, right);
        var disjunctiveFacetsMerged = mergeDisjunctiveFacets(facetRefinementsMerged, right);
        var ruleContextsMerged = mergeRuleContexts(disjunctiveFacetsMerged, right);
        var facetsMerged = mergeFacets(ruleContextsMerged, right);
        return mergeWithRest(facetsMerged, right);
    });
};

export { mergeSearchParameters };
