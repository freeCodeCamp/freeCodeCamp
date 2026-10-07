'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "mergeSearchParameters", {
    enumerable: true,
    get: function() {
        return mergeSearchParameters;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _findIndex = require("./findIndex");
var _uniq = require("./uniq");
var mergeWithRest = function mergeWithRest(left, right) {
    right.facets; right.disjunctiveFacets; right.facetsRefinements; right.facetsExcludes; right.disjunctiveFacetsRefinements; right.numericRefinements; right.tagRefinements; right.hierarchicalFacets; right.hierarchicalFacetsRefinements; right.ruleContexts; var rest = _object_without_properties._(right, [
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
            var index = (0, _findIndex.findIndex)(facets, function(_) {
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
        facetsRefinements: _object_spread._({}, left.facetsRefinements, right.facetsRefinements)
    });
};
var mergeFacetsExcludes = function mergeFacetsExcludes(left, right) {
    return left.setQueryParameters({
        facetsExcludes: _object_spread._({}, left.facetsExcludes, right.facetsExcludes)
    });
};
var mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements(left, right) {
    return left.setQueryParameters({
        disjunctiveFacetsRefinements: _object_spread._({}, left.disjunctiveFacetsRefinements, right.disjunctiveFacetsRefinements)
    });
};
var mergeNumericRefinements = function mergeNumericRefinements(left, right) {
    return left.setQueryParameters({
        numericRefinements: _object_spread._({}, left.numericRefinements, right.numericRefinements)
    });
};
var mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements(left, right) {
    return left.setQueryParameters({
        hierarchicalFacetsRefinements: _object_spread._({}, left.hierarchicalFacetsRefinements, right.hierarchicalFacetsRefinements)
    });
};
var mergeRuleContexts = function mergeRuleContexts(left, right) {
    var ruleContexts = (0, _uniq.uniq)([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));
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
