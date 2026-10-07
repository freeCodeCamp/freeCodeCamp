'use strict';

/**
 * RecommendParameters is the data structure that contains all the information
 * usable for getting recommendations from the Algolia API. It doesn't do the
 * search itself, nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It
 * will be provided when needed.
 * @constructor
 * @classdesc contains all the parameters for recommendations
 * @param {RecommendParametersOptions} opts the options to create the object
 */
function RecommendParameters(opts) {
  opts = opts || {};
  this.params = opts.params || [];
}

RecommendParameters.prototype = {
  constructor: RecommendParameters,

  addParams: function (params) {
    var newParams = this.params.slice();

    newParams.push(params);

    return new RecommendParameters({ params: newParams });
  },

  removeParams: function (id) {
    return new RecommendParameters({
      params: this.params.filter(function (param) {
        return param.$$id !== id;
      }),
    });
  },

  addFrequentlyBoughtTogether: function (params) {
    return this.addParams(
      Object.assign({}, params, { model: 'bought-together' })
    );
  },

  addRelatedProducts: function (params) {
    return this.addParams(
      Object.assign({}, params, { model: 'related-products' })
    );
  },

  addTrendingItems: function (params) {
    return this.addParams(
      Object.assign({}, params, { model: 'trending-items' })
    );
  },

  addTrendingFacets: function (params) {
    return this.addParams(
      Object.assign({}, params, { model: 'trending-facets' })
    );
  },

  addLookingSimilar: function (params) {
    return this.addParams(
      Object.assign({}, params, { model: 'looking-similar' })
    );
  },

  _buildQueries: function (indexName, cache) {
    return this.params
      .filter(function (params) {
        return cache[params.$$id] === undefined;
      })
      .map(function (params) {
        var query = Object.assign({}, params, {
          indexName: indexName,
          // @TODO: remove this if it ever gets handled by the API
          threshold: params.threshold || 0,
        });
        delete query.$$id;

        return query;
      });
  },
};

module.exports = RecommendParameters;
