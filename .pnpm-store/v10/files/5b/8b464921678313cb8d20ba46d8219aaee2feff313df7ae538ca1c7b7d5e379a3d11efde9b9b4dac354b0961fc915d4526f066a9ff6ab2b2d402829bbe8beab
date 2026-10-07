'use strict';

module.exports = generateTrees;

var fv = require('../functions/escapeFacetValue');
var find = require('../functions/find');
var prepareHierarchicalFacetSortBy = require('../functions/formatSort');
var orderBy = require('../functions/orderBy');
var escapeFacetValue = fv.escapeFacetValue;
var unescapeFacetValue = fv.unescapeFacetValue;

function generateTrees(state) {
  return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
    var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
    var hierarchicalFacetRefinement =
      (state.hierarchicalFacetsRefinements[hierarchicalFacet.name] &&
        state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0]) ||
      '';
    var hierarchicalSeparator =
      state._getHierarchicalFacetSeparator(hierarchicalFacet);
    var hierarchicalRootPath =
      state._getHierarchicalRootPath(hierarchicalFacet);
    var hierarchicalShowParentLevel =
      state._getHierarchicalShowParentLevel(hierarchicalFacet);
    var sortBy = prepareHierarchicalFacetSortBy(
      state._getHierarchicalFacetSortBy(hierarchicalFacet)
    );

    var rootExhaustive = hierarchicalFacetResult.every(function (facetResult) {
      return facetResult.exhaustive;
    });

    var generateTreeFn = generateHierarchicalTree(
      sortBy,
      hierarchicalSeparator,
      hierarchicalRootPath,
      hierarchicalShowParentLevel,
      hierarchicalFacetRefinement
    );

    var results = hierarchicalFacetResult;

    if (hierarchicalRootPath) {
      results = hierarchicalFacetResult.slice(
        hierarchicalRootPath.split(hierarchicalSeparator).length
      );
    }

    return results.reduce(generateTreeFn, {
      name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
      count: null, // root level, no count
      isRefined: true, // root level, always refined
      path: null, // root level, no path
      escapedValue: null,
      exhaustive: rootExhaustive,
      data: null,
    });
  };
}

function generateHierarchicalTree(
  sortBy,
  hierarchicalSeparator,
  hierarchicalRootPath,
  hierarchicalShowParentLevel,
  currentRefinement
) {
  return function generateTree(
    hierarchicalTree,
    hierarchicalFacetResult,
    currentHierarchicalLevel
  ) {
    var parent = hierarchicalTree;

    if (currentHierarchicalLevel > 0) {
      var level = 0;

      parent = hierarchicalTree;

      while (level < currentHierarchicalLevel) {
        /**
         * @type {object[]]} hierarchical data
         */
        var data = parent && Array.isArray(parent.data) ? parent.data : [];
        parent = find(data, function (subtree) {
          return subtree.isRefined;
        });
        level++;
      }
    }

    // we found a refined parent, let's add current level data under it
    if (parent) {
      // filter values in case an object has multiple categories:
      //   {
      //     categories: {
      //       level0: ['beers', 'bières'],
      //       level1: ['beers > IPA', 'bières > Belges']
      //     }
      //   }
      //
      // If parent refinement is `beers`, then we do not want to have `bières > Belges`
      // showing up

      var picked = Object.keys(hierarchicalFacetResult.data)
        .map(function (facetValue) {
          return [facetValue, hierarchicalFacetResult.data[facetValue]];
        })
        .filter(function (tuple) {
          var facetValue = tuple[0];
          return onlyMatchingTree(
            facetValue,
            parent.path || hierarchicalRootPath,
            currentRefinement,
            hierarchicalSeparator,
            hierarchicalRootPath,
            hierarchicalShowParentLevel
          );
        });

      parent.data = orderBy(
        picked.map(function (tuple) {
          var facetValue = tuple[0];
          var facetCount = tuple[1];

          return format(
            facetCount,
            facetValue,
            hierarchicalSeparator,
            unescapeFacetValue(currentRefinement),
            hierarchicalFacetResult.exhaustive
          );
        }),
        sortBy[0],
        sortBy[1]
      );
    }

    return hierarchicalTree;
  };
}

// eslint-disable-next-line max-params
function onlyMatchingTree(
  facetValue,
  parentPath,
  currentRefinement,
  hierarchicalSeparator,
  hierarchicalRootPath,
  hierarchicalShowParentLevel
) {
  // we want the facetValue is a child of hierarchicalRootPath
  if (
    hierarchicalRootPath &&
    (facetValue.indexOf(hierarchicalRootPath) !== 0 ||
      hierarchicalRootPath === facetValue)
  ) {
    return false;
  }

  // we always want root levels (only when there is no prefix path)
  return (
    (!hierarchicalRootPath &&
      facetValue.indexOf(hierarchicalSeparator) === -1) ||
    // if there is a rootPath, being root level mean 1 level under rootPath
    (hierarchicalRootPath &&
      facetValue.split(hierarchicalSeparator).length -
        hierarchicalRootPath.split(hierarchicalSeparator).length ===
        1) ||
    // if current refinement is a root level and current facetValue is a root level,
    // keep the facetValue
    (facetValue.indexOf(hierarchicalSeparator) === -1 &&
      currentRefinement.indexOf(hierarchicalSeparator) === -1) ||
    // currentRefinement is a child of the facet value
    currentRefinement.indexOf(facetValue) === 0 ||
    // facetValue is a child of the current parent, add it
    (facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 &&
      (hierarchicalShowParentLevel ||
        facetValue.indexOf(currentRefinement) === 0))
  );
}

function format(
  facetCount,
  facetValue,
  hierarchicalSeparator,
  currentRefinement,
  exhaustive
) {
  var parts = facetValue.split(hierarchicalSeparator);
  return {
    name: parts[parts.length - 1].trim(),
    path: facetValue,
    escapedValue: escapeFacetValue(facetValue),
    count: facetCount,
    isRefined:
      currentRefinement === facetValue ||
      currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
    exhaustive: exhaustive,
    data: null,
  };
}
