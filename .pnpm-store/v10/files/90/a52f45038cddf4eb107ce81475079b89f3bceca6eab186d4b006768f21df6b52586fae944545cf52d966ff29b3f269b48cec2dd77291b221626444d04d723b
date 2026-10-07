'use strict';

/**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {RecommendParameters} state state that led to the response
 * @param {Record<string,RecommendResultItem>} results the results from algolia client
 **/
function RecommendResults(state, results) {
  this._state = state;
  this._rawResults = {};

  // eslint-disable-next-line consistent-this
  var self = this;

  state.params.forEach(function (param) {
    var id = param.$$id;
    self[id] = results[id];
    self._rawResults[id] = results[id];
  });
}

RecommendResults.prototype = {
  constructor: RecommendResults,
};

module.exports = RecommendResults;
