'use strict';

var merge = require('./functions/merge');

function sortObject(obj) {
  return Object.keys(obj)
    .sort()
    .reduce(function (acc, curr) {
      acc[curr] = obj[curr];
      return acc;
    }, {});
}

var requestBuilder = {
  /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @param  {string} index The name of the index
   * @param  {SearchParameters} state The state from which to get the queries
   * @return {object[]} The queries
   */
  _getQueries: function getQueries(index, state) {
    var queries = [];

    // One query for the hits
    queries.push({
      indexName: index,
      params: requestBuilder._getHitsSearchParams(state),
    });

    // One for each disjunctive facets
    state.getRefinedDisjunctiveFacets().forEach(function (refinedFacet) {
      queries.push({
        indexName: index,
        params: requestBuilder._getDisjunctiveFacetSearchParams(
          state,
          refinedFacet
        ),
      });
    });

    // More to get the parent levels of the hierarchical facets when refined
    state.getRefinedHierarchicalFacets().forEach(function (refinedFacet) {
      var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
      var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

      // If we are deeper than level 0 (starting from `beer > IPA`)
      // we want to get all parent values
      if (
        currentRefinement.length > 0 &&
        currentRefinement[0].split(separator).length > 1
      ) {
        // We generate a map of the filters we will use for our facet values queries
        var filtersMap = currentRefinement[0]
          .split(separator)
          .slice(0, -1)
          .reduce(function createFiltersMap(map, segment, level) {
            return map.concat({
              attribute: hierarchicalFacet.attributes[level],
              value:
                level === 0
                  ? segment
                  : [map[map.length - 1].value, segment].join(separator),
            });
          }, []);

        filtersMap.forEach(function (filter, level) {
          var params = requestBuilder._getDisjunctiveFacetSearchParams(
            state,
            filter.attribute,
            level === 0
          );

          // Keep facet filters unrelated to current hierarchical attributes
          function hasHierarchicalFacetFilter(value) {
            return hierarchicalFacet.attributes.some(function (attribute) {
              return attribute === value.split(':')[0];
            });
          }

          var filteredFacetFilters = (params.facetFilters || []).reduce(
            function (acc, facetFilter) {
              if (Array.isArray(facetFilter)) {
                var filtered = facetFilter.filter(function (filterValue) {
                  return !hasHierarchicalFacetFilter(filterValue);
                });

                if (filtered.length > 0) {
                  acc.push(filtered);
                }
              }

              if (
                typeof facetFilter === 'string' &&
                !hasHierarchicalFacetFilter(facetFilter)
              ) {
                acc.push(facetFilter);
              }

              return acc;
            },
            []
          );

          var parent = filtersMap[level - 1];
          if (level > 0) {
            params.facetFilters = filteredFacetFilters.concat(
              parent.attribute + ':' + parent.value
            );
          } else if (filteredFacetFilters.length > 0) {
            params.facetFilters = filteredFacetFilters;
          } else {
            delete params.facetFilters;
          }

          queries.push({ indexName: index, params: params });
        });
      }
    });

    return queries;
  },

  /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @return {object[]} The queries
   */
  _getCompositionQueries: function getQueries(state) {
    return [
      {
        compositionID: state.index,
        requestBody: {
          params: requestBuilder._getCompositionHitsSearchParams(state),
        },
      },
    ];
  },

  /**
   * Build search parameters used to fetch hits
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @return {object.<string, any>} The search parameters for hits
   */
  _getHitsSearchParams: function (state) {
    var facets = state.facets
      .concat(state.disjunctiveFacets)
      .concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state))
      .sort();

    var facetFilters = requestBuilder._getFacetFilters(state);
    var numericFilters = requestBuilder._getNumericFilters(state);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {};

    if (facets.length > 0) {
      additionalParams.facets = facets.indexOf('*') > -1 ? ['*'] : facets;
    }

    if (tagFilters.length > 0) {
      additionalParams.tagFilters = tagFilters;
    }

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    return sortObject(merge({}, state.getQueryParams(), additionalParams));
  },

  /**
   * Build search parameters used to fetch hits
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @return {object.<string, any>} The search parameters for hits
   */
  _getCompositionHitsSearchParams: function (state) {
    var facets = state.facets
      .concat(
        state.disjunctiveFacets.map(function (value) {
          if (
            state.disjunctiveFacetsRefinements &&
            state.disjunctiveFacetsRefinements[value] &&
            state.disjunctiveFacetsRefinements[value].length > 0
          ) {
            // only tag a disjunctiveFacet as disjunctive if it has a value selected
            // this helps avoid hitting the limit of 20 disjunctive facets in the Composition API
            return 'disjunctive(' + value + ')';
          }
          return value;
        })
      )
      .concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state))
      .sort();

    var facetFilters = requestBuilder._getFacetFilters(state);
    var numericFilters = requestBuilder._getNumericFilters(state);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {};

    if (facets.length > 0) {
      additionalParams.facets = facets.indexOf('*') > -1 ? ['*'] : facets;
    }

    if (tagFilters.length > 0) {
      additionalParams.tagFilters = tagFilters;
    }

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    var params = state.getQueryParams();

    delete params.highlightPreTag;
    delete params.highlightPostTag;
    // not a valid search parameter, it is handled in _getCompositionQueries
    delete params.index;

    return sortObject(merge({}, params, additionalParams));
  },

  /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object} The search parameters for a disjunctive facet
   */
  _getDisjunctiveFacetSearchParams: function (
    state,
    facet,
    hierarchicalRootLevel
  ) {
    var facetFilters = requestBuilder._getFacetFilters(
      state,
      facet,
      hierarchicalRootLevel
    );
    var numericFilters = requestBuilder._getNumericFilters(state, facet);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {
      hitsPerPage: 0,
      page: 0,
      analytics: false,
      clickAnalytics: false,
    };

    if (tagFilters.length > 0) {
      additionalParams.tagFilters = tagFilters;
    }

    var hierarchicalFacet = state.getHierarchicalFacetByName(facet);

    if (hierarchicalFacet) {
      additionalParams.facets =
        requestBuilder._getDisjunctiveHierarchicalFacetAttribute(
          state,
          hierarchicalFacet,
          hierarchicalRootLevel
        );
    } else {
      additionalParams.facets = facet;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    return sortObject(merge({}, state.getQueryParams(), additionalParams));
  },

  /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {SearchParameters} state the state from which to get the filters
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */
  _getNumericFilters: function (state, facetName) {
    if (state.numericFilters) {
      return state.numericFilters;
    }

    var numericFilters = [];

    Object.keys(state.numericRefinements).forEach(function (attribute) {
      var operators = state.numericRefinements[attribute] || {};
      Object.keys(operators).forEach(function (operator) {
        var values = operators[operator] || [];
        if (facetName !== attribute) {
          values.forEach(function (value) {
            if (Array.isArray(value)) {
              var vs = value.map(function (v) {
                return attribute + operator + v;
              });
              numericFilters.push(vs);
            } else {
              numericFilters.push(attribute + operator + value);
            }
          });
        }
      });
    });

    return numericFilters;
  },

  /**
   * Return the tags filters depending on which format is used, either tagFilters or tagRefinements
   * @private
   * @param {SearchParameters} state the state from which to get the filters
   * @return {string} Tag filters in a single string
   */
  _getTagFilters: function (state) {
    if (state.tagFilters) {
      return state.tagFilters;
    }

    return state.tagRefinements.join(',');
  },

  /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @param  {string} [facet] if set, the current disjunctive facet
   * @param  {boolean} [hierarchicalRootLevel] ?? FIXME
   * @return {array.<string>} The facet filters in the algolia format
   */
  _getFacetFilters: function (state, facet, hierarchicalRootLevel) {
    var facetFilters = [];

    var facetsRefinements = state.facetsRefinements || {};
    Object.keys(facetsRefinements)
      .sort()
      .forEach(function (facetName) {
        var facetValues = facetsRefinements[facetName] || [];
        facetValues
          .slice()
          .sort()
          .forEach(function (facetValue) {
            facetFilters.push(facetName + ':' + facetValue);
          });
      });

    var facetsExcludes = state.facetsExcludes || {};
    Object.keys(facetsExcludes)
      .sort()
      .forEach(function (facetName) {
        var facetValues = facetsExcludes[facetName] || [];
        facetValues.sort().forEach(function (facetValue) {
          facetFilters.push(facetName + ':-' + facetValue);
        });
      });

    var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
    Object.keys(disjunctiveFacetsRefinements)
      .sort()
      .forEach(function (facetName) {
        var facetValues = disjunctiveFacetsRefinements[facetName] || [];
        if (facetName === facet || !facetValues || facetValues.length === 0) {
          return;
        }
        var orFilters = [];

        facetValues
          .slice()
          .sort()
          .forEach(function (facetValue) {
            orFilters.push(facetName + ':' + facetValue);
          });

        facetFilters.push(orFilters);
      });

    var hierarchicalFacetsRefinements =
      state.hierarchicalFacetsRefinements || {};
    Object.keys(hierarchicalFacetsRefinements)
      .sort()
      .forEach(function (facetName) {
        var facetValues = hierarchicalFacetsRefinements[facetName] || [];
        var facetValue = facetValues[0];

        if (facetValue === undefined) {
          return;
        }

        var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
        var attributeToRefine;
        var attributesIndex;

        // we ask for parent facet values only when the `facet` is the current hierarchical facet
        if (facet === facetName) {
          // if we are at the root level already, no need to ask for facet values, we get them from
          // the hits query
          if (
            facetValue.indexOf(separator) === -1 ||
            (!rootPath && hierarchicalRootLevel === true) ||
            (rootPath &&
              rootPath.split(separator).length ===
                facetValue.split(separator).length)
          ) {
            return;
          }

          if (!rootPath) {
            attributesIndex = facetValue.split(separator).length - 2;
            facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
          } else {
            attributesIndex = rootPath.split(separator).length - 1;
            facetValue = rootPath;
          }

          attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
        } else {
          attributesIndex = facetValue.split(separator).length - 1;

          attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
        }

        if (attributeToRefine) {
          facetFilters.push([attributeToRefine + ':' + facetValue]);
        }
      });

    return facetFilters;
  },

  _getHitsHierarchicalFacetsAttributes: function (state) {
    var out = [];

    return state.hierarchicalFacets.reduce(
      // ask for as much levels as there's hierarchical refinements
      function getHitsAttributesForHierarchicalFacet(
        allAttributes,
        hierarchicalFacet
      ) {
        var hierarchicalRefinement = state.getHierarchicalRefinement(
          hierarchicalFacet.name
        )[0];

        // if no refinement, ask for root level
        if (!hierarchicalRefinement) {
          allAttributes.push(hierarchicalFacet.attributes[0]);
          return allAttributes;
        }

        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var level = hierarchicalRefinement.split(separator).length;
        var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);

        return allAttributes.concat(newAttributes);
      },
      out
    );
  },

  _getDisjunctiveHierarchicalFacetAttribute: function (
    state,
    hierarchicalFacet,
    rootLevel
  ) {
    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
    if (rootLevel === true) {
      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
      var attributeIndex = 0;

      if (rootPath) {
        attributeIndex = rootPath.split(separator).length;
      }
      return [hierarchicalFacet.attributes[attributeIndex]];
    }

    var hierarchicalRefinement =
      state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || '';
    // if refinement is 'beers > IPA > Flying dog',
    // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)

    var parentLevel = hierarchicalRefinement.split(separator).length - 1;
    return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
  },

  getSearchForFacetQuery: function (facetName, query, maxFacetHits, state) {
    var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName)
      ? state.clearRefinements(facetName)
      : state;
    var searchForFacetSearchParameters = {
      facetQuery: query,
      facetName: facetName,
    };
    if (typeof maxFacetHits === 'number') {
      searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
    }
    return sortObject(
      merge(
        {},
        requestBuilder._getHitsSearchParams(stateForSearchForFacetValues),
        searchForFacetSearchParameters
      )
    );
  },
};

module.exports = requestBuilder;
