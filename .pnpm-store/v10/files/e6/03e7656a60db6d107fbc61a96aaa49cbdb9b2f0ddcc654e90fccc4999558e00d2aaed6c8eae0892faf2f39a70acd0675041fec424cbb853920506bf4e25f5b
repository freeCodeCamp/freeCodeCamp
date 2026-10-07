'use strict';

var EventEmitter = require('@algolia/events');

var DerivedHelper = require('./DerivedHelper');
var escapeFacetValue = require('./functions/escapeFacetValue').escapeFacetValue;
var inherits = require('./functions/inherits');
var merge = require('./functions/merge');
var objectHasKeys = require('./functions/objectHasKeys');
var omit = require('./functions/omit');
var RecommendParameters = require('./RecommendParameters');
var RecommendResults = require('./RecommendResults');
var requestBuilder = require('./requestBuilder');
var SearchParameters = require('./SearchParameters');
var SearchResults = require('./SearchResults');
var sortAndMergeRecommendations = require('./utils/sortAndMergeRecommendations');
var version = require('./version');

/**
 * Event triggered when a parameter is set or updated
 * @event AlgoliaSearchHelper#event:change
 * @property {object} event
 * @property {SearchParameters} event.state the current parameters with the latest changes applied
 * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
 * @example
 * helper.on('change', function(event) {
 *   console.log('The parameters have changed');
 * });
 */

/**
 * Event triggered when a main search is sent to Algolia
 * @event AlgoliaSearchHelper#event:search
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search
 * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
 * @example
 * helper.on('search', function(event) {
 *   console.log('Search sent');
 * });
 */

/**
 * Event triggered when a search using `searchForFacetValues` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchForFacetValues
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @property {string} event.facet the facet searched into
 * @property {string} event.query the query used to search in the facets
 * @example
 * helper.on('searchForFacetValues', function(event) {
 *   console.log('searchForFacetValues sent');
 * });
 */

/**
 * Event triggered when a search using `searchOnce` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchOnce
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @example
 * helper.on('searchOnce', function(event) {
 *   console.log('searchOnce sent');
 * });
 */

/**
 * Event triggered when the results are retrieved from Algolia
 * @event AlgoliaSearchHelper#event:result
 * @property {object} event
 * @property {SearchResults} event.results the results received from Algolia
 * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
 * @example
 * helper.on('result', function(event) {
 *   console.log('Search results received');
 * });
 */

/**
 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
 * used, the error can be caught using this event.
 * @event AlgoliaSearchHelper#event:error
 * @property {object} event
 * @property {Error} event.error the error returned by the Algolia.
 * @example
 * helper.on('error', function(event) {
 *   console.log('Houston we got a problem.');
 * });
 */

/**
 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
 * @event AlgoliaSearchHelper#event:searchQueueEmpty
 * @example
 * helper.on('searchQueueEmpty', function() {
 *   console.log('No more search pending');
 *   // This is received before the result event if we're not expecting new results
 * });
 *
 * helper.search();
 */

/**
 * Initialize a new AlgoliaSearchHelper
 * @class
 * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
 * search. It provides an event based interface for search callbacks:
 *  - change: when the internal search state is changed.
 *    This event contains a {@link SearchParameters} object and the
 *    {@link SearchResults} of the last result if any.
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 *  - error: when the response is an error. This event contains the error returned by the server.
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial
 * config of the search. It doesn't have to be a {SearchParameters},
 * just an object containing the properties you need from it.
 * @param {SearchResultsOptions|object} searchResultsOptions an object defining the options to use when creating the search results.
 */
function AlgoliaSearchHelper(client, index, options, searchResultsOptions) {
  if (typeof client.addAlgoliaAgent === 'function') {
    client.addAlgoliaAgent('JS Helper (' + version + ')');
  }

  this.setClient(client);
  var opts = options || {};
  opts.index = index;
  this.state = SearchParameters.make(opts);
  this.recommendState = new RecommendParameters({
    params: opts.recommendState,
  });
  this.lastResults = null;
  this.lastRecommendResults = null;
  this._queryId = 0;
  this._recommendQueryId = 0;
  this._lastQueryIdReceived = -1;
  this._lastRecommendQueryIdReceived = -1;
  this.derivedHelpers = [];
  this._currentNbQueries = 0;
  this._currentNbRecommendQueries = 0;
  this._searchResultsOptions = searchResultsOptions;
  this._recommendCache = {};
}

inherits(AlgoliaSearchHelper, EventEmitter);

/**
 * Start the search with the parameters set in the state. When the
 * method is called, it triggers a `search` event. The results will
 * be available through the `result` event. If an error occurs, an
 * `error` will be fired instead.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires search
 * @fires result
 * @fires error
 * @chainable
 */
AlgoliaSearchHelper.prototype.search = function () {
  this._search({ onlyWithDerivedHelpers: false });
  return this;
};

AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function () {
  this._search({ onlyWithDerivedHelpers: true });
  return this;
};

AlgoliaSearchHelper.prototype.searchWithComposition = function () {
  this._runComposition({ onlyWithDerivedHelpers: true });
  return this;
};
/**
 * Sends the recommendation queries set in the state. When the method is
 * called, it triggers a `fetch` event. The results will be available through
 * the `result` event. If an error occurs, an `error` will be fired instead.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires fetch
 * @fires result
 * @fires error
 * @chainable
 */
AlgoliaSearchHelper.prototype.recommend = function () {
  this._recommend();
  return this;
};

/**
 * Gets the search query parameters that would be sent to the Algolia Client
 * for the hits
 * @return {object} Query Parameters
 */
AlgoliaSearchHelper.prototype.getQuery = function () {
  var state = this.state;
  return requestBuilder._getHitsSearchParams(state);
};

/**
 * Start a search using a modified version of the current state. This method does
 * not trigger the helper lifecycle and does not modify the state kept internally
 * by the helper. This second aspect means that the next search call will be the
 * same as a search call before calling searchOnce.
 * @param {object} options can contain all the parameters that can be set to SearchParameters
 * plus the index
 * @param {function} [cb] optional callback executed when the response from the
 * server is back.
 * @return {promise|undefined} if a callback is passed the method returns undefined
 * otherwise it returns a promise containing an object with two keys :
 *  - content with a SearchResults
 *  - state with the state used for the query as a SearchParameters
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the callback API
 * var state = helper.searchOnce({hitsPerPage: 1},
 *   function(error, content, state) {
 *     // if an error occurred it will be passed in error, otherwise its value is null
 *     // content contains the results formatted as a SearchResults
 *     // state is the instance of SearchParameters used for this search
 *   });
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the promise API
 * var state1 = helper.searchOnce({hitsPerPage: 1})
 *                 .then(promiseHandler);
 *
 * function promiseHandler(res) {
 *   // res contains
 *   // {
 *   //   content : SearchResults
 *   //   state   : SearchParameters (the one used for this specific search)
 *   // }
 * }
 */
AlgoliaSearchHelper.prototype.searchOnce = function (options, cb) {
  var tempState = !options
    ? this.state
    : this.state.setQueryParameters(options);
  var queries = requestBuilder._getQueries(tempState.index, tempState);
  // eslint-disable-next-line consistent-this
  var self = this;

  this._currentNbQueries++;

  this.emit('searchOnce', {
    state: tempState,
  });

  if (cb) {
    this.client
      .search(queries)
      .then(function (content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) {
          self.emit('searchQueueEmpty');
        }

        cb(null, new SearchResults(tempState, content.results), tempState);
      })
      .catch(function (err) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) {
          self.emit('searchQueueEmpty');
        }

        cb(err, null, tempState);
      });

    return undefined;
  }

  return this.client.search(queries).then(
    function (content) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      return {
        content: new SearchResults(tempState, content.results),
        state: tempState,
        _originalResponse: content,
      };
    },
    function (e) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      throw e;
    }
  );
};

/**
 * Start the search for answers with the parameters set in the state.
 * This method returns a promise.
 * @param {Object} options - the options for answers API call
 * @param {string[]} options.attributesForPrediction - Attributes to use for predictions. If empty, `searchableAttributes` is used instead.
 * @param {string[]} options.queryLanguages - The languages in the query. Currently only supports ['en'].
 * @param {number} options.nbHits - Maximum number of answers to retrieve from the Answers Engine. Cannot be greater than 1000.
 *
 * @return {promise} the answer results
 * @deprecated answers is deprecated and will be replaced with new initiatives
 */
AlgoliaSearchHelper.prototype.findAnswers = function (options) {
  // eslint-disable-next-line no-console
  console.warn('[algoliasearch-helper] answers is no longer supported');
  var state = this.state;
  var derivedHelper = this.derivedHelpers[0];
  if (!derivedHelper) {
    return Promise.resolve([]);
  }
  var derivedState = derivedHelper.getModifiedState(state);
  var data = merge(
    {
      attributesForPrediction: options.attributesForPrediction,
      nbHits: options.nbHits,
    },
    {
      params: omit(requestBuilder._getHitsSearchParams(derivedState), [
        'attributesToSnippet',
        'hitsPerPage',
        'restrictSearchableAttributes',
        'snippetEllipsisText',
      ]),
    }
  );

  var errorMessage =
    'search for answers was called, but this client does not have a function client.initIndex(index).findAnswers';
  if (typeof this.client.initIndex !== 'function') {
    throw new Error(errorMessage);
  }
  var index = this.client.initIndex(derivedState.index);
  if (typeof index.findAnswers !== 'function') {
    throw new Error(errorMessage);
  }
  return index.findAnswers(derivedState.query, options.queryLanguages, data);
};

/**
 * Structure of each result when using
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * @typedef FacetSearchHit
 * @type {object}
 * @property {string} value the facet value
 * @property {string} highlighted the facet value highlighted with the query string
 * @property {number} count number of occurrence of this facet value
 * @property {boolean} isRefined true if the value is already refined
 */

/**
 * Structure of the data resolved by the
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * promise.
 * @typedef FacetSearchResult
 * @type {object}
 * @property {FacetSearchHit} facetHits the results for this search for facet values
 * @property {number} processingTimeMS time taken by the query inside the engine
 */

/**
 * Search for facet values based on an query and the name of a faceted attribute. This
 * triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */
AlgoliaSearchHelper.prototype.searchForFacetValues = function (
  facet,
  query,
  maxFacetHits,
  userState
) {
  var clientHasSFFV =
    typeof this.client.searchForFacetValues === 'function' &&
    // v5 has a wrong sffv signature
    typeof this.client.searchForFacets !== 'function';
  var clientHasInitIndex = typeof this.client.initIndex === 'function';
  if (
    !clientHasSFFV &&
    !clientHasInitIndex &&
    typeof this.client.search !== 'function'
  ) {
    throw new Error(
      'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues'
    );
  }

  var state = this.state.setQueryParameters(userState || {});
  var isDisjunctive = state.isDisjunctiveFacet(facet);
  var algoliaQuery = requestBuilder.getSearchForFacetQuery(
    facet,
    query,
    maxFacetHits,
    state
  );

  this._currentNbQueries++;
  // eslint-disable-next-line consistent-this
  var self = this;
  var searchForFacetValuesPromise;
  // newer algoliasearch ^3.27.1 - ~4.0.0
  if (clientHasSFFV) {
    searchForFacetValuesPromise = this.client.searchForFacetValues([
      { indexName: state.index, params: algoliaQuery },
    ]);
    // algoliasearch < 3.27.1
  } else if (clientHasInitIndex) {
    searchForFacetValuesPromise = this.client
      .initIndex(state.index)
      .searchForFacetValues(algoliaQuery);
    // algoliasearch ~5.0.0
  } else {
    // @MAJOR only use client.search
    delete algoliaQuery.facetName;
    searchForFacetValuesPromise = this.client
      .search([
        {
          type: 'facet',
          facet: facet,
          indexName: state.index,
          params: algoliaQuery,
        },
      ])
      .then(function processResponse(response) {
        return response.results[0];
      });
  }

  this.emit('searchForFacetValues', {
    state: state,
    facet: facet,
    query: query,
  });

  var hide =
    (this.lastResults &&
      this.lastResults.index === state.index &&
      this.lastResults.renderingContent &&
      this.lastResults.renderingContent.facetOrdering &&
      this.lastResults.renderingContent.facetOrdering.values &&
      this.lastResults.renderingContent.facetOrdering.values[facet] &&
      this.lastResults.renderingContent.facetOrdering.values[facet].hide) ||
    [];

  return searchForFacetValuesPromise.then(
    function addIsRefined(content) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');

      content = Array.isArray(content) ? content[0] : content;

      content.facetHits = content.facetHits.reduce(function (acc, f) {
        if (hide.indexOf(f.value) > -1) {
          return acc;
        }

        f.escapedValue = escapeFacetValue(f.value);
        f.isRefined = isDisjunctive
          ? state.isDisjunctiveFacetRefined(facet, f.escapedValue)
          : state.isFacetRefined(facet, f.escapedValue);

        acc.push(f);
        return acc;
      }, []);

      return content;
    },
    function (e) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      throw e;
    }
  );
};

/**
 * Search for facet values using the Composition API & based on a query and the name of a faceted attribute.
 * This triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */
AlgoliaSearchHelper.prototype.searchForCompositionFacetValues = function (
  facet,
  query,
  maxFacetHits,
  userState
) {
  if (typeof this.client.searchForFacetValues !== 'function') {
    throw new Error(
      'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues'
    );
  }

  var state = this.state.setQueryParameters(userState || {});
  var isDisjunctive = state.isDisjunctiveFacet(facet);

  this._currentNbQueries++;
  // eslint-disable-next-line consistent-this
  var self = this;
  var searchForFacetValuesPromise;

  searchForFacetValuesPromise = this.client.searchForFacetValues({
    compositionID: state.index,
    facetName: facet,
    searchForFacetValuesRequest: {
      params: {
        query: query,
        maxFacetHits: maxFacetHits,
        searchQuery: requestBuilder._getCompositionHitsSearchParams(state),
      },
    },
  });

  this.emit('searchForFacetValues', {
    state: state,
    facet: facet,
    query: query,
  });

  return searchForFacetValuesPromise.then(
    function addIsRefined(content) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');

      content = content.results[0];

      content.facetHits.forEach(function (f) {
        f.escapedValue = escapeFacetValue(f.value);
        f.isRefined = isDisjunctive
          ? state.isDisjunctiveFacetRefined(facet, f.escapedValue)
          : state.isFacetRefined(facet, f.escapedValue);
      });

      return content;
    },
    function (e) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      throw e;
    }
  );
};

/**
 * Sets the text query used for the search.
 *
 * This method resets the current page to 0.
 * @param  {string} q the user query
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setQuery = function (q) {
  this._change({
    state: this.state.resetPage().setQuery(q),
    isPageReset: true,
  });

  return this;
};

/**
 * Remove all the types of refinements except tags. A string can be provided to remove
 * only the refinements of a specific attribute. For more advanced use case, you can
 * provide a function instead. This function should follow the
 * [clearCallback definition](#SearchParameters.clearCallback).
 *
 * This method resets the current page to 0.
 * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 * @example
 * // Removing all the refinements
 * helper.clearRefinements().search();
 * @example
 * // Removing all the filters on a the category attribute.
 * helper.clearRefinements('category').search();
 * @example
 * // Removing only the exclude filters on the category facet.
 * helper.clearRefinements(function(value, attribute, type) {
 *   return type === 'exclude' && attribute === 'category';
 * }).search();
 */
AlgoliaSearchHelper.prototype.clearRefinements = function (name) {
  this._change({
    state: this.state.resetPage().clearRefinements(name),
    isPageReset: true,
  });

  return this;
};

/**
 * Remove all the tag filters.
 *
 * This method resets the current page to 0.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.clearTags = function () {
  this._change({
    state: this.state.resetPage().clearTags(),
    isPageReset: true,
  });

  return this;
};

/**
 * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function (
  facet,
  value
) {
  this._change({
    state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
 */
AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function () {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};

/**
 * Adds a refinement on a hierarchical facet. It will throw
 * an exception if the facet is not defined or if the facet
 * is already refined.
 *
 * This method resets the current page to 0.
 * @param {string} facet the facet name
 * @param {string} path the hierarchical facet path
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error if the facet is not defined or if the facet is refined
 * @chainable
 * @fires change
 */
AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function (
  facet,
  path
) {
  this._change({
    state: this.state.resetPage().addHierarchicalFacetRefinement(facet, path),
    isPageReset: true,
  });

  return this;
};

/**
 * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} operator the operator of the filter
 * @param  {number} value the value of the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addNumericRefinement = function (
  attribute,
  operator,
  value
) {
  this._change({
    state: this.state
      .resetPage()
      .addNumericRefinement(attribute, operator, value),
    isPageReset: true,
  });

  return this;
};

/**
 * Adds a filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().addFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
 */
AlgoliaSearchHelper.prototype.addRefine = function () {
  return this.addFacetRefinement.apply(this, arguments);
};

/**
 * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFacetExclusion = function (facet, value) {
  this._change({
    state: this.state.resetPage().addExcludeRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
 */
AlgoliaSearchHelper.prototype.addExclude = function () {
  return this.addFacetExclusion.apply(this, arguments);
};

/**
 * Adds a tag filter with the `tag` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag the tag to add to the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addTag = function (tag) {
  this._change({
    state: this.state.resetPage().addTagRefinement(tag),
    isPageReset: true,
  });

  return this;
};

/**
 * Adds a "frequently bought together" recommendation query.
 *
 * @param {FrequentlyBoughtTogetherQuery} params the parameters for the recommendation
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFrequentlyBoughtTogether = function (params) {
  this._recommendChange({
    state: this.recommendState.addFrequentlyBoughtTogether(params),
  });

  return this;
};

/**
 * Adds a "related products" recommendation query.
 *
 * @param {RelatedProductsQuery} params the parameters for the recommendation
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addRelatedProducts = function (params) {
  this._recommendChange({
    state: this.recommendState.addRelatedProducts(params),
  });

  return this;
};

/**
 * Adds a "trending items" recommendation query.
 *
 * @param {TrendingItemsQuery} params the parameters for the recommendation
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addTrendingItems = function (params) {
  this._recommendChange({
    state: this.recommendState.addTrendingItems(params),
  });

  return this;
};

/**
 * Adds a "trending facets" recommendation query.
 *
 * @param {TrendingFacetsQuery} params the parameters for the recommendation
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addTrendingFacets = function (params) {
  this._recommendChange({
    state: this.recommendState.addTrendingFacets(params),
  });

  return this;
};

/**
 * Adds a "looking similar" recommendation query.
 *
 * @param {LookingSimilarQuery} params the parameters for the recommendation
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addLookingSimilar = function (params) {
  this._recommendChange({
    state: this.recommendState.addLookingSimilar(params),
  });

  return this;
};

/**
 * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * Some parameters are optional, triggering different behavior:
 *  - if the value is not provided, then all the numeric value will be removed for the
 *  specified attribute/operator couple.
 *  - if the operator is not provided either, then all the numeric filter on this attribute
 *  will be removed.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} [operator] the operator of the filter
 * @param  {number} [value] the value of the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeNumericRefinement = function (
  attribute,
  operator,
  value
) {
  this._change({
    state: this.state
      .resetPage()
      .removeNumericRefinement(attribute, operator, value),
    isPageReset: true,
  });

  return this;
};

/**
 * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function (
  facet,
  value
) {
  this._change({
    state: this.state
      .resetPage()
      .removeDisjunctiveFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
 */
AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function () {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};

/**
 * Removes the refinement set on a hierarchical facet.
 * @param {string} facet the facet name
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error if the facet is not defined or if the facet is not refined
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function (
  facet
) {
  this._change({
    state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
    isPageReset: true,
  });

  return this;
};

/**
 * Removes a filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().removeFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
 */
AlgoliaSearchHelper.prototype.removeRefine = function () {
  return this.removeFacetRefinement.apply(this, arguments);
};

/**
 * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFacetExclusion = function (facet, value) {
  this._change({
    state: this.state.resetPage().removeExcludeRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
 */
AlgoliaSearchHelper.prototype.removeExclude = function () {
  return this.removeFacetExclusion.apply(this, arguments);
};

/**
 * Removes a tag filter with the `tag` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove from the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeTag = function (tag) {
  this._change({
    state: this.state.resetPage().removeTagRefinement(tag),
    isPageReset: true,
  });

  return this;
};

/**
 * Removes a "frequently bought together" recommendation query.
 *
 * @param {number} id identifier of the recommendation widget
 * @returns {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFrequentlyBoughtTogether = function (id) {
  this._recommendChange({
    state: this.recommendState.removeParams(id),
  });

  return this;
};

/**
 * Removes a "related products" recommendation query.
 *
 * @param {number} id identifier of the recommendation widget
 * @returns {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeRelatedProducts = function (id) {
  this._recommendChange({
    state: this.recommendState.removeParams(id),
  });

  return this;
};

/**
 * Removes a "trending items" recommendation query.
 *
 * @param {number} id identifier of the recommendation widget
 * @returns {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeTrendingItems = function (id) {
  this._recommendChange({
    state: this.recommendState.removeParams(id),
  });

  return this;
};

/**
 * Removes a "trending facets" recommendation query.
 *
 * @param {number} id identifier of the recommendation widget
 * @returns {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeTrendingFacets = function (id) {
  this._recommendChange({
    state: this.recommendState.removeParams(id),
  });

  return this;
};

/**
 * Removes a "looking similar" recommendation query.
 *
 * @param {number} id identifier of the recommendation widget
 * @returns {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeLookingSimilar = function (id) {
  this._recommendChange({
    state: this.recommendState.removeParams(id),
  });

  return this;
};

/**
 * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleFacetExclusion = function (facet, value) {
  this._change({
    state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
 */
AlgoliaSearchHelper.prototype.toggleExclude = function () {
  return this.toggleFacetExclusion.apply(this, arguments);
};

/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */
AlgoliaSearchHelper.prototype.toggleRefinement = function (facet, value) {
  return this.toggleFacetRefinement(facet, value);
};

/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleFacetRefinement = function (facet, value) {
  this._change({
    state: this.state.resetPage().toggleFacetRefinement(facet, value),
    isPageReset: true,
  });

  return this;
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */
AlgoliaSearchHelper.prototype.toggleRefine = function () {
  return this.toggleFacetRefinement.apply(this, arguments);
};

/**
 * Adds or removes a tag filter with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove or add
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleTag = function (tag) {
  this._change({
    state: this.state.resetPage().toggleTagRefinement(tag),
    isPageReset: true,
  });

  return this;
};

/**
 * Increments the page number by one.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 * @example
 * helper.setPage(0).nextPage().getPage();
 * // returns 1
 */
AlgoliaSearchHelper.prototype.nextPage = function () {
  var page = this.state.page || 0;
  return this.setPage(page + 1);
};

/**
 * Decrements the page number by one.
 * @fires change
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @chainable
 * @example
 * helper.setPage(1).previousPage().getPage();
 * // returns 0
 */
AlgoliaSearchHelper.prototype.previousPage = function () {
  var page = this.state.page || 0;
  return this.setPage(page - 1);
};

/**
 * @private
 * @param {number} page The page number
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @chainable
 * @fires change
 */
function setCurrentPage(page) {
  if (page < 0) throw new Error('Page requested below 0.');

  this._change({
    state: this.state.setPage(page),
    isPageReset: false,
  });

  return this;
}

/**
 * Change the current page
 * @deprecated
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;

/**
 * Updates the current page.
 * @function
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setPage = setCurrentPage;

/**
 * Updates the name of the index that will be targeted by the query.
 *
 * This method resets the current page to 0.
 * @param {string} name the index name
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setIndex = function (name) {
  this._change({
    state: this.state.resetPage().setIndex(name),
    isPageReset: true,
  });

  return this;
};

/**
 * Update a parameter of the search. This method reset the page
 *
 * The complete list of parameters is available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
 *
 * This method resets the current page to 0.
 * @param {string} parameter name of the parameter to update
 * @param {any} value new value of the parameter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 * @example
 * helper.setQueryParameter('hitsPerPage', 20).search();
 */
AlgoliaSearchHelper.prototype.setQueryParameter = function (parameter, value) {
  this._change({
    state: this.state.resetPage().setQueryParameter(parameter, value),
    isPageReset: true,
  });

  return this;
};

/**
 * Set the whole state (warning: will erase previous state)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setState = function (newState) {
  this._change({
    state: SearchParameters.make(newState),
    isPageReset: false,
  });

  return this;
};

/**
 * Override the current state without triggering a change event.
 * Do not use this method unless you know what you are doing. (see the example
 * for a legit use case)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @example
 *  helper.on('change', function(state){
 *    // In this function you might want to find a way to store the state in the url/history
 *    updateYourURL(state)
 *  })
 *  window.onpopstate = function(event){
 *    // This is naive though as you should check if the state is really defined etc.
 *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
 *  }
 * @chainable
 */
AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent =
  function (newState) {
    this.state = new SearchParameters(newState);
    return this;
  };

/**
 * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
 * @param {string} attribute the name of the attribute
 * @return {boolean} true if the attribute is filtered by at least one value
 * @example
 * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
 * helper.hasRefinements('price'); // false
 * helper.addNumericRefinement('price', '>', 100);
 * helper.hasRefinements('price'); // true
 *
 * helper.hasRefinements('color'); // false
 * helper.addFacetRefinement('color', 'blue');
 * helper.hasRefinements('color'); // true
 *
 * helper.hasRefinements('material'); // false
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * helper.hasRefinements('material'); // true
 *
 * helper.hasRefinements('categories'); // false
 * helper.toggleFacetRefinement('categories', 'kitchen > knife');
 * helper.hasRefinements('categories'); // true
 *
 */
AlgoliaSearchHelper.prototype.hasRefinements = function (attribute) {
  if (objectHasKeys(this.state.getNumericRefinements(attribute))) {
    return true;
  } else if (this.state.isConjunctiveFacet(attribute)) {
    return this.state.isFacetRefined(attribute);
  } else if (this.state.isDisjunctiveFacet(attribute)) {
    return this.state.isDisjunctiveFacetRefined(attribute);
  } else if (this.state.isHierarchicalFacet(attribute)) {
    return this.state.isHierarchicalFacetRefined(attribute);
  }

  // there's currently no way to know that the user did call `addNumericRefinement` at some point
  // thus we cannot distinguish if there once was a numeric refinement that was cleared
  // so we will return false in every other situations to be consistent
  // while what we should do here is throw because we did not find the attribute in any type
  // of refinement
  return false;
};

/**
 * Check if a value is excluded for a specific faceted attribute. If the value
 * is omitted then the function checks if there is any excluding refinements.
 *
 * @param  {string}  facet name of the attribute for used for faceting
 * @param  {string}  [value] optional value. If passed will test that this value
 * is filtering the given facet.
 * @return {boolean} true if refined
 * @example
 * helper.isExcludeRefined('color'); // false
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // false
 *
 * helper.addFacetExclusion('color', 'red');
 *
 * helper.isExcludeRefined('color'); // true
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // true
 */
AlgoliaSearchHelper.prototype.isExcluded = function (facet, value) {
  return this.state.isExcludeRefined(facet, value);
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */
AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function (facet, value) {
  return this.state.isDisjunctiveFacetRefined(facet, value);
};

/**
 * Check if the string is a currently filtering tag.
 * @param {string} tag tag to check
 * @return {boolean} true if the tag is currently refined
 */
AlgoliaSearchHelper.prototype.hasTag = function (tag) {
  return this.state.isTagRefined(tag);
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
 */
AlgoliaSearchHelper.prototype.isTagRefined = function () {
  return this.hasTagRefinements.apply(this, arguments);
};

/**
 * Get the name of the currently used index.
 * @return {string} name of the index
 * @example
 * helper.setIndex('highestPrice_products').getIndex();
 * // returns 'highestPrice_products'
 */
AlgoliaSearchHelper.prototype.getIndex = function () {
  return this.state.index;
};

function getCurrentPage() {
  return this.state.page;
}

/**
 * Get the currently selected page
 * @deprecated
 * @return {number} the current page
 */
AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
/**
 * Get the currently selected page
 * @function
 * @return {number} the current page
 */
AlgoliaSearchHelper.prototype.getPage = getCurrentPage;

/**
 * Get all the tags currently set to filters the results.
 *
 * @return {string[]} The list of tags currently set.
 */
AlgoliaSearchHelper.prototype.getTags = function () {
  return this.state.tagRefinements;
};

/**
 * Get the list of refinements for a given attribute. This method works with
 * conjunctive, disjunctive, excluding and numerical filters.
 *
 * See also SearchResults#getRefinements
 *
 * @param {string} facetName attribute name used for faceting
 * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
 * a type. Numeric also contains an operator.
 * @example
 * helper.addNumericRefinement('price', '>', 100);
 * helper.getRefinements('price');
 * // [
 * //   {
 * //     "value": [
 * //       100
 * //     ],
 * //     "operator": ">",
 * //     "type": "numeric"
 * //   }
 * // ]
 * @example
 * helper.addFacetRefinement('color', 'blue');
 * helper.addFacetExclusion('color', 'red');
 * helper.getRefinements('color');
 * // [
 * //   {
 * //     "value": "blue",
 * //     "type": "conjunctive"
 * //   },
 * //   {
 * //     "value": "red",
 * //     "type": "exclude"
 * //   }
 * // ]
 * @example
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * // [
 * //   {
 * //     "value": "plastic",
 * //     "type": "disjunctive"
 * //   }
 * // ]
 */
AlgoliaSearchHelper.prototype.getRefinements = function (facetName) {
  var refinements = [];

  if (this.state.isConjunctiveFacet(facetName)) {
    var conjRefinements = this.state.getConjunctiveRefinements(facetName);

    conjRefinements.forEach(function (r) {
      refinements.push({
        value: r,
        type: 'conjunctive',
      });
    });

    var excludeRefinements = this.state.getExcludeRefinements(facetName);

    excludeRefinements.forEach(function (r) {
      refinements.push({
        value: r,
        type: 'exclude',
      });
    });
  } else if (this.state.isDisjunctiveFacet(facetName)) {
    var disjunctiveRefinements =
      this.state.getDisjunctiveRefinements(facetName);

    disjunctiveRefinements.forEach(function (r) {
      refinements.push({
        value: r,
        type: 'disjunctive',
      });
    });
  }

  var numericRefinements = this.state.getNumericRefinements(facetName);

  Object.keys(numericRefinements).forEach(function (operator) {
    var value = numericRefinements[operator];

    refinements.push({
      value: value,
      operator: operator,
      type: 'numeric',
    });
  });

  return refinements;
};

/**
 * Return the current refinement for the (attribute, operator)
 * @param {string} attribute attribute in the record
 * @param {string} operator operator applied on the refined values
 * @return {Array.<number|number[]>} refined values
 */
AlgoliaSearchHelper.prototype.getNumericRefinement = function (
  attribute,
  operator
) {
  return this.state.getNumericRefinement(attribute, operator);
};

/**
 * Get the current breadcrumb for a hierarchical facet, as an array
 * @param  {string} facetName Hierarchical facet name
 * @return {array.<string>} the path as an array of string
 */
AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function (
  facetName
) {
  return this.state.getHierarchicalFacetBreadcrumb(facetName);
};

// /////////// PRIVATE

/**
 * Perform the underlying queries
 * @private
 * @param {object} options options for the query
 * @param {boolean} [options.onlyWithDerivedHelpers=false] if true, only the derived helpers will be queried
 * @return {undefined} does not return anything
 * @fires search
 * @fires result
 * @fires error
 */
AlgoliaSearchHelper.prototype._search = function (options) {
  var state = this.state;
  var states = [];
  var mainQueries = [];

  if (!options.onlyWithDerivedHelpers) {
    mainQueries = requestBuilder._getQueries(state.index, state);

    states.push({
      state: state,
      queriesCount: mainQueries.length,
      helper: this,
    });

    this.emit('search', {
      state: state,
      results: this.lastResults,
    });
  }

  var derivedQueries = this.derivedHelpers.map(function (derivedHelper) {
    var derivedState = derivedHelper.getModifiedState(state);
    var derivedStateQueries = derivedState.index
      ? requestBuilder._getQueries(derivedState.index, derivedState)
      : [];

    states.push({
      state: derivedState,
      queriesCount: derivedStateQueries.length,
      helper: derivedHelper,
    });

    derivedHelper.emit('search', {
      state: derivedState,
      results: derivedHelper.lastResults,
    });

    return derivedStateQueries;
  });

  var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);

  var queryId = this._queryId++;
  this._currentNbQueries++;

  if (!queries.length) {
    return Promise.resolve({ results: [] }).then(
      this._dispatchAlgoliaResponse.bind(this, states, queryId)
    );
  }

  try {
    this.client
      .search(queries)
      .then(this._dispatchAlgoliaResponse.bind(this, states, queryId))
      .catch(this._dispatchAlgoliaError.bind(this, queryId));
  } catch (error) {
    // If we reach this part, we're in an internal error state
    this.emit('error', {
      error: error,
    });
  }

  return undefined;
};

/**
 * Perform the underlying queries
 * @private
 * @param {boolean} [options.onlyWithDerivedHelpers=false] if true, only the derived helpers will be queried
 * @return {undefined} does not return anything
 * @fires search
 * @fires result
 * @fires error
 */
AlgoliaSearchHelper.prototype._runComposition = function () {
  var state = this.state;
  var states = [];
  var mainQueries = [];

  var derivedQueries = this.derivedHelpers.map(function (derivedHelper) {
    var derivedState = derivedHelper.getModifiedState(state);
    var derivedStateQueries =
      requestBuilder._getCompositionQueries(derivedState);

    states.push({
      state: derivedState,
      queriesCount: derivedStateQueries.length,
      helper: derivedHelper,
    });

    derivedHelper.emit('search', {
      state: derivedState,
      results: derivedHelper.lastResults,
    });

    return derivedStateQueries;
  });

  var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);

  var queryId = this._queryId++;
  this._currentNbQueries++;

  if (!queries.length) {
    return Promise.resolve({ results: [] }).then(
      this._dispatchAlgoliaResponse.bind(this, states, queryId)
    );
  }

  if (queries.length > 1) {
    throw new Error('Only one query is allowed when using a composition.');
  }

  var query = queries[0];

  try {
    this.client
      .search(query)
      .then(this._dispatchAlgoliaResponse.bind(this, states, queryId))
      .catch(this._dispatchAlgoliaError.bind(this, queryId));
  } catch (error) {
    // If we reach this part, we're in an internal error state
    this.emit('error', {
      error: error,
    });
  }

  return undefined;
};

AlgoliaSearchHelper.prototype._recommend = function () {
  var searchState = this.state;
  var recommendState = this.recommendState;
  var index = this.getIndex();
  var states = [{ state: recommendState, index: index, helper: this }];
  var ids = recommendState.params.map(function (param) {
    return param.$$id;
  });

  this.emit('fetch', {
    recommend: {
      state: recommendState,
      results: this.lastRecommendResults,
    },
  });

  var cache = this._recommendCache;

  var derivedQueries = this.derivedHelpers.map(function (derivedHelper) {
    var derivedIndex = derivedHelper.getModifiedState(searchState).index;
    if (!derivedIndex) {
      return [];
    }

    // Contrary to what is done when deriving the search state, we don't want to
    // provide the current recommend state to the derived helper, as it would
    // inherit unwanted queries. We instead provide an empty recommend state.
    var derivedState = derivedHelper.getModifiedRecommendState(
      new RecommendParameters()
    );
    states.push({
      state: derivedState,
      index: derivedIndex,
      helper: derivedHelper,
    });

    ids = Array.prototype.concat.apply(
      ids,
      derivedState.params.map(function (param) {
        return param.$$id;
      })
    );

    derivedHelper.emit('fetch', {
      recommend: {
        state: derivedState,
        results: derivedHelper.lastRecommendResults,
      },
    });

    return derivedState._buildQueries(derivedIndex, cache);
  });

  var queries = Array.prototype.concat.apply(
    this.recommendState._buildQueries(index, cache),
    derivedQueries
  );

  if (queries.length === 0) {
    return;
  }

  if (
    queries.length > 0 &&
    typeof this.client.getRecommendations === 'undefined'
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      'Please update algoliasearch/lite to the latest version in order to use recommend widgets.'
    );
    return;
  }

  var queryId = this._recommendQueryId++;
  this._currentNbRecommendQueries++;

  try {
    this.client
      .getRecommendations(queries)
      .then(this._dispatchRecommendResponse.bind(this, queryId, states, ids))
      .catch(this._dispatchRecommendError.bind(this, queryId));
  } catch (error) {
    // If we reach this part, we're in an internal error state
    this.emit('error', {
      error: error,
    });
  }

  return;
};

/**
 * Transform the responses as sent by the server and transform them into a user
 * usable object that merge the results of all the batch requests. It will dispatch
 * over the different helper + derived helpers (when there are some).
 * @private
 * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>} states state used to generate the request
 * @param {number} queryId id of the current request
 * @param {object} content content of the response
 * @return {undefined}
 */
AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function (
  states,
  queryId,
  content
) {
  // eslint-disable-next-line consistent-this
  var self = this;

  // @TODO remove the number of outdated queries discarded instead of just one

  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= queryId - this._lastQueryIdReceived;
  this._lastQueryIdReceived = queryId;

  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');

  var results = content.results.slice();
  var rawContent = Object.keys(content).reduce(function (value, key) {
    if (key !== 'results') value[key] = content[key];
    return value;
  }, {});

  if (Object.keys(rawContent).length <= 0) {
    rawContent = undefined;
  }

  states.forEach(function (s) {
    var state = s.state;
    var queriesCount = s.queriesCount;
    var helper = s.helper;
    var specificResults = results.splice(0, queriesCount);

    if (!state.index) {
      helper.emit('result', {
        results: null,
        state: state,
      });
      return;
    }

    helper.lastResults = new SearchResults(
      state,
      specificResults,
      self._searchResultsOptions
    );
    if (rawContent !== undefined) helper.lastResults._rawContent = rawContent;

    helper.emit('result', {
      results: helper.lastResults,
      state: state,
    });
  });
};

AlgoliaSearchHelper.prototype._dispatchRecommendResponse = function (
  queryId,
  states,
  ids,
  content
) {
  // @TODO remove the number of outdated queries discarded instead of just one

  if (queryId < this._lastRecommendQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbRecommendQueries -=
    queryId - this._lastRecommendQueryIdReceived;
  this._lastRecommendQueryIdReceived = queryId;

  if (this._currentNbRecommendQueries === 0) this.emit('recommendQueueEmpty');

  var cache = this._recommendCache;

  var idsMap = {};
  ids
    .filter(function (id) {
      return cache[id] === undefined;
    })
    .forEach(function (id, index) {
      if (!idsMap[id]) idsMap[id] = [];

      idsMap[id].push(index);
    });

  Object.keys(idsMap).forEach(function (id) {
    var indices = idsMap[id];
    var firstResult = content.results[indices[0]];
    if (indices.length === 1) {
      cache[id] = firstResult;
      return;
    }
    cache[id] = Object.assign({}, firstResult, {
      hits: sortAndMergeRecommendations(
        ids,
        indices.map(function (idx) {
          return content.results[idx].hits;
        })
      ),
    });
  });

  var results = {};
  ids.forEach(function (id) {
    results[id] = cache[id];
  });

  states.forEach(function (s) {
    var state = s.state;
    var helper = s.helper;

    if (!s.index) {
      // eslint-disable-next-line no-warning-comments
      // TODO: emit "result" event when events for Recommend are implemented
      helper.emit('recommend:result', {
        results: null,
        state: state,
      });
      return;
    }

    helper.lastRecommendResults = new RecommendResults(state, results);

    // eslint-disable-next-line no-warning-comments
    // TODO: emit "result" event when events for Recommend are implemented
    helper.emit('recommend:result', {
      recommend: {
        results: helper.lastRecommendResults,
        state: state,
      },
    });
  });
};

AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function (
  queryId,
  error
) {
  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= queryId - this._lastQueryIdReceived;
  this._lastQueryIdReceived = queryId;

  this.emit('error', {
    error: error,
  });

  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
};

AlgoliaSearchHelper.prototype._dispatchRecommendError = function (
  queryId,
  error
) {
  if (queryId < this._lastRecommendQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbRecommendQueries -=
    queryId - this._lastRecommendQueryIdReceived;
  this._lastRecommendQueryIdReceived = queryId;

  this.emit('error', {
    error: error,
  });

  if (this._currentNbRecommendQueries === 0) this.emit('recommendQueueEmpty');
};

AlgoliaSearchHelper.prototype.containsRefinement = function (
  query,
  facetFilters,
  numericFilters,
  tagFilters
) {
  return (
    query ||
    facetFilters.length !== 0 ||
    numericFilters.length !== 0 ||
    tagFilters.length !== 0
  );
};

/**
 * Test if there are some disjunctive refinements on the facet
 * @private
 * @param {string} facet the attribute to test
 * @return {boolean} true if there are refinements on this attribute
 */
AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function (facet) {
  return (
    this.state.disjunctiveRefinements[facet] &&
    this.state.disjunctiveRefinements[facet].length > 0
  );
};

AlgoliaSearchHelper.prototype._change = function (event) {
  var state = event.state;
  var isPageReset = event.isPageReset;

  if (state !== this.state) {
    this.state = state;

    this.emit('change', {
      state: this.state,
      results: this.lastResults,
      isPageReset: isPageReset,
    });
  }
};

AlgoliaSearchHelper.prototype._recommendChange = function (event) {
  var state = event.state;

  if (state !== this.recommendState) {
    this.recommendState = state;

    // eslint-disable-next-line no-warning-comments
    // TODO: emit "change" event when events for Recommend are implemented
    this.emit('recommend:change', {
      search: {
        results: this.lastResults,
        state: this.state,
      },
      recommend: {
        results: this.lastRecommendResults,
        state: this.recommendState,
      },
    });
  }
};

/**
 * Clears the cache of the underlying Algolia client.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 */
AlgoliaSearchHelper.prototype.clearCache = function () {
  if (this.client.clearCache) this.client.clearCache();
  return this;
};

/**
 * Updates the internal client instance. If the reference of the clients
 * are equal then no update is actually done.
 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 */
AlgoliaSearchHelper.prototype.setClient = function (newClient) {
  if (this.client === newClient) return this;

  if (typeof newClient.addAlgoliaAgent === 'function') {
    newClient.addAlgoliaAgent('JS Helper (' + version + ')');
  }
  this.client = newClient;

  return this;
};

/**
 * Gets the instance of the currently used client.
 * @return {AlgoliaSearch} the currently used client
 */
AlgoliaSearchHelper.prototype.getClient = function () {
  return this.client;
};

/**
 * Creates an derived instance of the Helper. A derived helper
 * is a way to request other indices synchronised with the lifecycle
 * of the main Helper. This mechanism uses the multiqueries feature
 * of Algolia to aggregate all the requests in a single network call.
 *
 * This method takes a function that is used to create a new SearchParameter
 * that will be used to create requests to Algolia. Those new requests
 * are created just before the `search` event. The signature of the function
 * is `SearchParameters -> SearchParameters`.
 *
 * This method returns a new DerivedHelper which is an EventEmitter
 * that fires the same `search`, `result` and `error` events. Those
 * events, however, will receive data specific to this DerivedHelper
 * and the SearchParameters that is returned by the call of the
 * parameter function.
 * @param {function} fn SearchParameters -> SearchParameters
 * @param {function} recommendFn RecommendParameters -> RecommendParameters
 * @return {DerivedHelper} a new DerivedHelper
 */
AlgoliaSearchHelper.prototype.derive = function (fn, recommendFn) {
  var derivedHelper = new DerivedHelper(this, fn, recommendFn);
  this.derivedHelpers.push(derivedHelper);
  return derivedHelper;
};

/**
 * This method detaches a derived Helper from the main one. Prefer using the one from the
 * derived helper itself, to remove the event listeners too.
 * @private
 * @param  {DerivedHelper} derivedHelper the derived helper to detach
 * @return {undefined} nothing is returned
 * @throws Error
 */
AlgoliaSearchHelper.prototype.detachDerivedHelper = function (derivedHelper) {
  var pos = this.derivedHelpers.indexOf(derivedHelper);
  if (pos === -1) throw new Error('Derived helper already detached');
  this.derivedHelpers.splice(pos, 1);
};

/**
 * This method returns true if there is currently at least one on-going search.
 * @return {boolean} true if there is a search pending
 */
AlgoliaSearchHelper.prototype.hasPendingRequests = function () {
  return this._currentNbQueries > 0;
};

/**
 * @typedef AlgoliaSearchHelper.NumericRefinement
 * @type {object}
 * @property {number[]} value the numbers that are used for filtering this attribute with
 * the operator specified.
 * @property {string} operator the faceting data: value, number of entries
 * @property {string} type will be 'numeric'
 */

/**
 * @typedef AlgoliaSearchHelper.FacetRefinement
 * @type {object}
 * @property {string} value the string use to filter the attribute
 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
 */

module.exports = AlgoliaSearchHelper;
