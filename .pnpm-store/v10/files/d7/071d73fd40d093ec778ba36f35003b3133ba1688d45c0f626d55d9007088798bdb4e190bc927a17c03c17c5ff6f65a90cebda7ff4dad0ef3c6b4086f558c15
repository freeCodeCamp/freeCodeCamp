/*! Algolia Search Helper 3.28.2 | © Algolia, Inc. and contributors; MIT License | https://github.com/algolia/instantsearch */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.algoliasearchHelper = factory());
})(this, (function () { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var events;
	var hasRequiredEvents;

	function requireEvents () {
		if (hasRequiredEvents) return events;
		hasRequiredEvents = 1;
		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		function EventEmitter() {
		  this._events = this._events || {};
		  this._maxListeners = this._maxListeners || undefined;
		}
		events = EventEmitter;

		// Backwards-compat with node 0.10.x
		// EventEmitter.EventEmitter = EventEmitter;

		EventEmitter.prototype._events = undefined;
		EventEmitter.prototype._maxListeners = undefined;

		// By default EventEmitters will print a warning if more than 10 listeners are
		// added to it. This is a useful default which helps finding memory leaks.
		EventEmitter.defaultMaxListeners = 10;

		// Obviously not all Emitters should be limited to 10. This function allows
		// that to be increased. Set to zero for unlimited.
		EventEmitter.prototype.setMaxListeners = function(n) {
		  if (!isNumber(n) || n < 0 || isNaN(n))
		    throw TypeError('n must be a positive number');
		  this._maxListeners = n;
		  return this;
		};

		EventEmitter.prototype.emit = function(type) {
		  var er, handler, len, args, i, listeners;

		  if (!this._events)
		    this._events = {};

		  // If there is no 'error' event listener then throw.
		  if (type === 'error') {
		    if (!this._events.error ||
		        (isObject(this._events.error) && !this._events.error.length)) {
		      er = arguments[1];
		      if (er instanceof Error) {
		        throw er; // Unhandled 'error' event
		      } else {
		        // At least give some kind of context to the user
		        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
		        err.context = er;
		        throw err;
		      }
		    }
		  }

		  handler = this._events[type];

		  if (isUndefined(handler))
		    return false;

		  if (isFunction(handler)) {
		    switch (arguments.length) {
		      // fast cases
		      case 1:
		        handler.call(this);
		        break;
		      case 2:
		        handler.call(this, arguments[1]);
		        break;
		      case 3:
		        handler.call(this, arguments[1], arguments[2]);
		        break;
		      // slower
		      default:
		        args = Array.prototype.slice.call(arguments, 1);
		        handler.apply(this, args);
		    }
		  } else if (isObject(handler)) {
		    args = Array.prototype.slice.call(arguments, 1);
		    listeners = handler.slice();
		    len = listeners.length;
		    for (i = 0; i < len; i++)
		      listeners[i].apply(this, args);
		  }

		  return true;
		};

		EventEmitter.prototype.addListener = function(type, listener) {
		  var m;

		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');

		  if (!this._events)
		    this._events = {};

		  // To avoid recursion in the case that type === "newListener"! Before
		  // adding it to the listeners, first emit "newListener".
		  if (this._events.newListener)
		    this.emit('newListener', type,
		              isFunction(listener.listener) ?
		              listener.listener : listener);

		  if (!this._events[type])
		    // Optimize the case of one listener. Don't need the extra array object.
		    this._events[type] = listener;
		  else if (isObject(this._events[type]))
		    // If we've already got an array, just append.
		    this._events[type].push(listener);
		  else
		    // Adding the second element, need to change to array.
		    this._events[type] = [this._events[type], listener];

		  // Check for listener leak
		  if (isObject(this._events[type]) && !this._events[type].warned) {
		    if (!isUndefined(this._maxListeners)) {
		      m = this._maxListeners;
		    } else {
		      m = EventEmitter.defaultMaxListeners;
		    }

		    if (m && m > 0 && this._events[type].length > m) {
		      this._events[type].warned = true;
		      console.error('(node) warning: possible EventEmitter memory ' +
		                    'leak detected. %d listeners added. ' +
		                    'Use emitter.setMaxListeners() to increase limit.',
		                    this._events[type].length);
		      if (typeof console.trace === 'function') {
		        // not supported in IE 10
		        console.trace();
		      }
		    }
		  }

		  return this;
		};

		EventEmitter.prototype.on = EventEmitter.prototype.addListener;

		EventEmitter.prototype.once = function(type, listener) {
		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');

		  var fired = false;

		  function g() {
		    this.removeListener(type, g);

		    if (!fired) {
		      fired = true;
		      listener.apply(this, arguments);
		    }
		  }

		  g.listener = listener;
		  this.on(type, g);

		  return this;
		};

		// emits a 'removeListener' event iff the listener was removed
		EventEmitter.prototype.removeListener = function(type, listener) {
		  var list, position, length, i;

		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');

		  if (!this._events || !this._events[type])
		    return this;

		  list = this._events[type];
		  length = list.length;
		  position = -1;

		  if (list === listener ||
		      (isFunction(list.listener) && list.listener === listener)) {
		    delete this._events[type];
		    if (this._events.removeListener)
		      this.emit('removeListener', type, listener);

		  } else if (isObject(list)) {
		    for (i = length; i-- > 0;) {
		      if (list[i] === listener ||
		          (list[i].listener && list[i].listener === listener)) {
		        position = i;
		        break;
		      }
		    }

		    if (position < 0)
		      return this;

		    if (list.length === 1) {
		      list.length = 0;
		      delete this._events[type];
		    } else {
		      list.splice(position, 1);
		    }

		    if (this._events.removeListener)
		      this.emit('removeListener', type, listener);
		  }

		  return this;
		};

		EventEmitter.prototype.removeAllListeners = function(type) {
		  var key, listeners;

		  if (!this._events)
		    return this;

		  // not listening for removeListener, no need to emit
		  if (!this._events.removeListener) {
		    if (arguments.length === 0)
		      this._events = {};
		    else if (this._events[type])
		      delete this._events[type];
		    return this;
		  }

		  // emit removeListener for all listeners on all events
		  if (arguments.length === 0) {
		    for (key in this._events) {
		      if (key === 'removeListener') continue;
		      this.removeAllListeners(key);
		    }
		    this.removeAllListeners('removeListener');
		    this._events = {};
		    return this;
		  }

		  listeners = this._events[type];

		  if (isFunction(listeners)) {
		    this.removeListener(type, listeners);
		  } else if (listeners) {
		    // LIFO order
		    while (listeners.length)
		      this.removeListener(type, listeners[listeners.length - 1]);
		  }
		  delete this._events[type];

		  return this;
		};

		EventEmitter.prototype.listeners = function(type) {
		  var ret;
		  if (!this._events || !this._events[type])
		    ret = [];
		  else if (isFunction(this._events[type]))
		    ret = [this._events[type]];
		  else
		    ret = this._events[type].slice();
		  return ret;
		};

		EventEmitter.prototype.listenerCount = function(type) {
		  if (this._events) {
		    var evlistener = this._events[type];

		    if (isFunction(evlistener))
		      return 1;
		    else if (evlistener)
		      return evlistener.length;
		  }
		  return 0;
		};

		EventEmitter.listenerCount = function(emitter, type) {
		  return emitter.listenerCount(type);
		};

		function isFunction(arg) {
		  return typeof arg === 'function';
		}

		function isNumber(arg) {
		  return typeof arg === 'number';
		}

		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}

		function isUndefined(arg) {
		  return arg === void 0;
		}
		return events;
	}

	var inherits_1;
	var hasRequiredInherits;
	function requireInherits() {
	    if (hasRequiredInherits) return inherits_1;
	    hasRequiredInherits = 1;
	    function inherits(ctor, superCtor) {
	        ctor.prototype = Object.create(superCtor.prototype, {
	            constructor: {
	                value: ctor,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	    }
	    inherits_1 = inherits;
	    return inherits_1;
	}

	var DerivedHelper_1;
	var hasRequiredDerivedHelper;
	function requireDerivedHelper() {
	    if (hasRequiredDerivedHelper) return DerivedHelper_1;
	    hasRequiredDerivedHelper = 1;
	    var EventEmitter = requireEvents();
	    var inherits = requireInherits();
	    /**
		 * A DerivedHelper is a way to create sub requests to
		 * Algolia from a main helper.
		 * @class
		 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
		 *  - search: when a search is triggered using the `search()` method.
		 *  - result: when the response is retrieved from Algolia and is processed.
		 *    This event contains a {@link SearchResults} object and the
		 *    {@link SearchParameters} corresponding to this answer.
		 * @param {AlgoliaSearchHelper} mainHelper the main helper
		 * @param {function} fn the function to create the derived state for search
		 * @param {function} recommendFn the function to create the derived state for recommendations
		 */ function DerivedHelper(mainHelper, fn, recommendFn) {
	        this.main = mainHelper;
	        this.fn = fn;
	        this.recommendFn = recommendFn;
	        this.lastResults = null;
	        this.lastRecommendResults = null;
	    }
	    inherits(DerivedHelper, EventEmitter);
	    /**
		 * Detach this helper from the main helper
		 * @return {undefined}
		 * @throws Error if the derived helper is already detached
		 */ DerivedHelper.prototype.detach = function() {
	        this.removeAllListeners();
	        this.main.detachDerivedHelper(this);
	    };
	    DerivedHelper.prototype.getModifiedState = function(parameters) {
	        return this.fn(parameters);
	    };
	    DerivedHelper.prototype.getModifiedRecommendState = function(parameters) {
	        return this.recommendFn(parameters);
	    };
	    DerivedHelper_1 = DerivedHelper;
	    return DerivedHelper_1;
	}

	var escapeFacetValue_1;
	var hasRequiredEscapeFacetValue;
	function requireEscapeFacetValue() {
	    if (hasRequiredEscapeFacetValue) return escapeFacetValue_1;
	    hasRequiredEscapeFacetValue = 1;
	    /**
		 * Replaces a leading - with \-
		 * @private
		 * @param {any} value the facet value to replace
		 * @returns {any} the escaped facet value or the value if it was not a string
		 */ function escapeFacetValue(value) {
	        if (typeof value !== 'string') return value;
	        return String(value).replace(/^-/, '\\-');
	    }
	    /**
		 * Replaces a leading \- with -
		 * @private
		 * @param {any} value the escaped facet value
		 * @returns {any} the unescaped facet value or the value if it was not a string
		 */ function unescapeFacetValue(value) {
	        if (typeof value !== 'string') return value;
	        return value.replace(/^\\-/, '-');
	    }
	    escapeFacetValue_1 = {
	        escapeFacetValue: escapeFacetValue,
	        unescapeFacetValue: unescapeFacetValue
	    };
	    return escapeFacetValue_1;
	}

	function _type_of(obj) {
	    "@swc/helpers - typeof";

	    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
	}

	var merge_1;
	var hasRequiredMerge;
	function requireMerge() {
	    if (hasRequiredMerge) return merge_1;
	    hasRequiredMerge = 1;
	    function clone(value) {
	        if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === 'object' && value !== null) {
	            return _merge(Array.isArray(value) ? [] : {}, value);
	        }
	        return value;
	    }
	    function isObjectOrArrayOrFunction(value) {
	        return typeof value === 'function' || Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]';
	    }
	    function _merge(target, source) {
	        if (target === source) {
	            return target;
	        }
	        // eslint-disable-next-line instantsearch/no-for-in
	        for(var key in source){
	            if (!Object.prototype.hasOwnProperty.call(source, key) || key === '__proto__' || key === 'constructor') {
	                continue;
	            }
	            var sourceVal = source[key];
	            var targetVal = target[key];
	            if (typeof targetVal !== 'undefined' && typeof sourceVal === 'undefined') {
	                continue;
	            }
	            if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) {
	                target[key] = _merge(targetVal, sourceVal);
	            } else {
	                target[key] = clone(sourceVal);
	            }
	        }
	        return target;
	    }
	    /**
		 * This method is like Object.assign, but recursively merges own and inherited
		 * enumerable keyed properties of source objects into the destination object.
		 *
		 * NOTE: this behaves like lodash/merge, but:
		 * - does mutate functions if they are a source
		 * - treats non-plain objects as plain
		 * - does not work for circular objects
		 * - treats sparse arrays as sparse
		 * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
		 *
		 * @param {Object} target The destination object.
		 * @param {...Object} [sources] The source objects.
		 * @returns {Object} Returns `object`.
		 */ function merge(target) {
	        if (!isObjectOrArrayOrFunction(target)) {
	            target = {};
	        }
	        for(var i = 1, l = arguments.length; i < l; i++){
	            var source = arguments[i];
	            if (isObjectOrArrayOrFunction(source)) {
	                _merge(target, source);
	            }
	        }
	        return target;
	    }
	    merge_1 = merge;
	    return merge_1;
	}

	var objectHasKeys_1;
	var hasRequiredObjectHasKeys;
	function requireObjectHasKeys() {
	    if (hasRequiredObjectHasKeys) return objectHasKeys_1;
	    hasRequiredObjectHasKeys = 1;
	    function objectHasKeys(obj) {
	        return obj && Object.keys(obj).length > 0;
	    }
	    objectHasKeys_1 = objectHasKeys;
	    return objectHasKeys_1;
	}

	var omit;
	var hasRequiredOmit;
	function requireOmit() {
	    if (hasRequiredOmit) return omit;
	    hasRequiredOmit = 1;
	    // https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
	    function _objectWithoutPropertiesLoose(source, excluded) {
	        if (source === null) return {};
	        var target = {};
	        var sourceKeys = Object.keys(source);
	        var key;
	        var i;
	        for(i = 0; i < sourceKeys.length; i++){
	            key = sourceKeys[i];
	            // eslint-disable-next-line no-continue
	            if (excluded.indexOf(key) >= 0) continue;
	            target[key] = source[key];
	        }
	        return target;
	    }
	    omit = _objectWithoutPropertiesLoose;
	    return omit;
	}

	var RecommendParameters_1;
	var hasRequiredRecommendParameters;
	function requireRecommendParameters() {
	    if (hasRequiredRecommendParameters) return RecommendParameters_1;
	    hasRequiredRecommendParameters = 1;
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
		 */ function RecommendParameters(opts) {
	        opts = opts || {};
	        this.params = opts.params || [];
	    }
	    RecommendParameters.prototype = {
	        constructor: RecommendParameters,
	        addParams: function addParams(params) {
	            var newParams = this.params.slice();
	            newParams.push(params);
	            return new RecommendParameters({
	                params: newParams
	            });
	        },
	        removeParams: function removeParams(id) {
	            return new RecommendParameters({
	                params: this.params.filter(function(param) {
	                    return param.$$id !== id;
	                })
	            });
	        },
	        addFrequentlyBoughtTogether: function addFrequentlyBoughtTogether(params) {
	            return this.addParams(Object.assign({}, params, {
	                model: 'bought-together'
	            }));
	        },
	        addRelatedProducts: function addRelatedProducts(params) {
	            return this.addParams(Object.assign({}, params, {
	                model: 'related-products'
	            }));
	        },
	        addTrendingItems: function addTrendingItems(params) {
	            return this.addParams(Object.assign({}, params, {
	                model: 'trending-items'
	            }));
	        },
	        addTrendingFacets: function addTrendingFacets(params) {
	            return this.addParams(Object.assign({}, params, {
	                model: 'trending-facets'
	            }));
	        },
	        addLookingSimilar: function addLookingSimilar(params) {
	            return this.addParams(Object.assign({}, params, {
	                model: 'looking-similar'
	            }));
	        },
	        _buildQueries: function _buildQueries(indexName, cache) {
	            return this.params.filter(function(params) {
	                return cache[params.$$id] === undefined;
	            }).map(function(params) {
	                var query = Object.assign({}, params, {
	                    indexName: indexName,
	                    // @TODO: remove this if it ever gets handled by the API
	                    threshold: params.threshold || 0
	                });
	                delete query.$$id;
	                return query;
	            });
	        }
	    };
	    RecommendParameters_1 = RecommendParameters;
	    return RecommendParameters_1;
	}

	var RecommendResults_1;
	var hasRequiredRecommendResults;
	function requireRecommendResults() {
	    if (hasRequiredRecommendResults) return RecommendResults_1;
	    hasRequiredRecommendResults = 1;
	    /**
		 * Constructor for SearchResults
		 * @class
		 * @classdesc SearchResults contains the results of a query to Algolia using the
		 * {@link AlgoliaSearchHelper}.
		 * @param {RecommendParameters} state state that led to the response
		 * @param {Record<string,RecommendResultItem>} results the results from algolia client
		 **/ function RecommendResults(state, results) {
	        this._state = state;
	        this._rawResults = {};
	        // eslint-disable-next-line consistent-this
	        var self = this;
	        state.params.forEach(function(param) {
	            var id = param.$$id;
	            self[id] = results[id];
	            self._rawResults[id] = results[id];
	        });
	    }
	    RecommendResults.prototype = {
	        constructor: RecommendResults
	    };
	    RecommendResults_1 = RecommendResults;
	    return RecommendResults_1;
	}

	var requestBuilder_1;
	var hasRequiredRequestBuilder;
	function requireRequestBuilder() {
	    if (hasRequiredRequestBuilder) return requestBuilder_1;
	    hasRequiredRequestBuilder = 1;
	    var merge = requireMerge();
	    function sortObject(obj) {
	        return Object.keys(obj).sort().reduce(function(acc, curr) {
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
		   */ _getQueries: function getQueries(index, state) {
	            var queries = [];
	            // One query for the hits
	            queries.push({
	                indexName: index,
	                params: requestBuilder._getHitsSearchParams(state)
	            });
	            // One for each disjunctive facets
	            state.getRefinedDisjunctiveFacets().forEach(function(refinedFacet) {
	                queries.push({
	                    indexName: index,
	                    params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)
	                });
	            });
	            // More to get the parent levels of the hierarchical facets when refined
	            state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
	                var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
	                var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
	                var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
	                // If we are deeper than level 0 (starting from `beer > IPA`)
	                // we want to get all parent values
	                if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
	                    // We generate a map of the filters we will use for our facet values queries
	                    var filtersMap = currentRefinement[0].split(separator).slice(0, -1).reduce(function createFiltersMap(map, segment, level) {
	                        return map.concat({
	                            attribute: hierarchicalFacet.attributes[level],
	                            value: level === 0 ? segment : [
	                                map[map.length - 1].value,
	                                segment
	                            ].join(separator)
	                        });
	                    }, []);
	                    filtersMap.forEach(function(filter, level) {
	                        var params = requestBuilder._getDisjunctiveFacetSearchParams(state, filter.attribute, level === 0);
	                        // Keep facet filters unrelated to current hierarchical attributes
	                        function hasHierarchicalFacetFilter(value) {
	                            return hierarchicalFacet.attributes.some(function(attribute) {
	                                return attribute === value.split(':')[0];
	                            });
	                        }
	                        var filteredFacetFilters = (params.facetFilters || []).reduce(function(acc, facetFilter) {
	                            if (Array.isArray(facetFilter)) {
	                                var filtered = facetFilter.filter(function(filterValue) {
	                                    return !hasHierarchicalFacetFilter(filterValue);
	                                });
	                                if (filtered.length > 0) {
	                                    acc.push(filtered);
	                                }
	                            }
	                            if (typeof facetFilter === 'string' && !hasHierarchicalFacetFilter(facetFilter)) {
	                                acc.push(facetFilter);
	                            }
	                            return acc;
	                        }, []);
	                        var parent = filtersMap[level - 1];
	                        if (level > 0) {
	                            params.facetFilters = filteredFacetFilters.concat(parent.attribute + ':' + parent.value);
	                        } else if (filteredFacetFilters.length > 0) {
	                            params.facetFilters = filteredFacetFilters;
	                        } else {
	                            delete params.facetFilters;
	                        }
	                        queries.push({
	                            indexName: index,
	                            params: params
	                        });
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
		   */ _getCompositionQueries: function getQueries(state) {
	            return [
	                {
	                    compositionID: state.index,
	                    requestBody: {
	                        params: requestBuilder._getCompositionHitsSearchParams(state)
	                    }
	                }
	            ];
	        },
	        /**
		   * Build search parameters used to fetch hits
		   * @private
		   * @param  {SearchParameters} state The state from which to get the queries
		   * @return {object.<string, any>} The search parameters for hits
		   */ _getHitsSearchParams: function _getHitsSearchParams(state) {
	            var facets = state.facets.concat(state.disjunctiveFacets).concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state)).sort();
	            var facetFilters = requestBuilder._getFacetFilters(state);
	            var numericFilters = requestBuilder._getNumericFilters(state);
	            var tagFilters = requestBuilder._getTagFilters(state);
	            var additionalParams = {};
	            if (facets.length > 0) {
	                additionalParams.facets = facets.indexOf('*') > -1 ? [
	                    '*'
	                ] : facets;
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
		   */ _getCompositionHitsSearchParams: function _getCompositionHitsSearchParams(state) {
	            var facets = state.facets.concat(state.disjunctiveFacets.map(function(value) {
	                if (state.disjunctiveFacetsRefinements && state.disjunctiveFacetsRefinements[value] && state.disjunctiveFacetsRefinements[value].length > 0) {
	                    // only tag a disjunctiveFacet as disjunctive if it has a value selected
	                    // this helps avoid hitting the limit of 20 disjunctive facets in the Composition API
	                    return 'disjunctive(' + value + ')';
	                }
	                return value;
	            })).concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state)).sort();
	            var facetFilters = requestBuilder._getFacetFilters(state);
	            var numericFilters = requestBuilder._getNumericFilters(state);
	            var tagFilters = requestBuilder._getTagFilters(state);
	            var additionalParams = {};
	            if (facets.length > 0) {
	                additionalParams.facets = facets.indexOf('*') > -1 ? [
	                    '*'
	                ] : facets;
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
		   */ _getDisjunctiveFacetSearchParams: function _getDisjunctiveFacetSearchParams(state, facet, hierarchicalRootLevel) {
	            var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);
	            var numericFilters = requestBuilder._getNumericFilters(state, facet);
	            var tagFilters = requestBuilder._getTagFilters(state);
	            var additionalParams = {
	                hitsPerPage: 0,
	                page: 0,
	                analytics: false,
	                clickAnalytics: false
	            };
	            if (tagFilters.length > 0) {
	                additionalParams.tagFilters = tagFilters;
	            }
	            var hierarchicalFacet = state.getHierarchicalFacetByName(facet);
	            if (hierarchicalFacet) {
	                additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, hierarchicalRootLevel);
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
		   */ _getNumericFilters: function _getNumericFilters(state, facetName) {
	            if (state.numericFilters) {
	                return state.numericFilters;
	            }
	            var numericFilters = [];
	            Object.keys(state.numericRefinements).forEach(function(attribute) {
	                var operators = state.numericRefinements[attribute] || {};
	                Object.keys(operators).forEach(function(operator) {
	                    var values = operators[operator] || [];
	                    if (facetName !== attribute) {
	                        values.forEach(function(value) {
	                            if (Array.isArray(value)) {
	                                var vs = value.map(function(v) {
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
		   */ _getTagFilters: function _getTagFilters(state) {
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
		   */ _getFacetFilters: function _getFacetFilters(state, facet, hierarchicalRootLevel) {
	            var facetFilters = [];
	            var facetsRefinements = state.facetsRefinements || {};
	            Object.keys(facetsRefinements).sort().forEach(function(facetName) {
	                var facetValues = facetsRefinements[facetName] || [];
	                facetValues.slice().sort().forEach(function(facetValue) {
	                    facetFilters.push(facetName + ':' + facetValue);
	                });
	            });
	            var facetsExcludes = state.facetsExcludes || {};
	            Object.keys(facetsExcludes).sort().forEach(function(facetName) {
	                var facetValues = facetsExcludes[facetName] || [];
	                facetValues.sort().forEach(function(facetValue) {
	                    facetFilters.push(facetName + ':-' + facetValue);
	                });
	            });
	            var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
	            Object.keys(disjunctiveFacetsRefinements).sort().forEach(function(facetName) {
	                var facetValues = disjunctiveFacetsRefinements[facetName] || [];
	                if (facetName === facet || !facetValues || facetValues.length === 0) {
	                    return;
	                }
	                var orFilters = [];
	                facetValues.slice().sort().forEach(function(facetValue) {
	                    orFilters.push(facetName + ':' + facetValue);
	                });
	                facetFilters.push(orFilters);
	            });
	            var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {};
	            Object.keys(hierarchicalFacetsRefinements).sort().forEach(function(facetName) {
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
	                    if (facetValue.indexOf(separator) === -1 || !rootPath && hierarchicalRootLevel === true || rootPath && rootPath.split(separator).length === facetValue.split(separator).length) {
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
	                    facetFilters.push([
	                        attributeToRefine + ':' + facetValue
	                    ]);
	                }
	            });
	            return facetFilters;
	        },
	        _getHitsHierarchicalFacetsAttributes: function _getHitsHierarchicalFacetsAttributes(state) {
	            var out = [];
	            return state.hierarchicalFacets.reduce(// ask for as much levels as there's hierarchical refinements
	            function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
	                var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0];
	                // if no refinement, ask for root level
	                if (!hierarchicalRefinement) {
	                    allAttributes.push(hierarchicalFacet.attributes[0]);
	                    return allAttributes;
	                }
	                var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
	                var level = hierarchicalRefinement.split(separator).length;
	                var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);
	                return allAttributes.concat(newAttributes);
	            }, out);
	        },
	        _getDisjunctiveHierarchicalFacetAttribute: function _getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, rootLevel) {
	            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
	            if (rootLevel === true) {
	                var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
	                var attributeIndex = 0;
	                if (rootPath) {
	                    attributeIndex = rootPath.split(separator).length;
	                }
	                return [
	                    hierarchicalFacet.attributes[attributeIndex]
	                ];
	            }
	            var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || '';
	            // if refinement is 'beers > IPA > Flying dog',
	            // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)
	            var parentLevel = hierarchicalRefinement.split(separator).length - 1;
	            return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
	        },
	        getSearchForFacetQuery: function getSearchForFacetQuery(facetName, query, maxFacetHits, state) {
	            var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ? state.clearRefinements(facetName) : state;
	            var searchForFacetSearchParameters = {
	                facetQuery: query,
	                facetName: facetName
	            };
	            if (typeof maxFacetHits === 'number') {
	                searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
	            }
	            return sortObject(merge({}, requestBuilder._getHitsSearchParams(stateForSearchForFacetValues), searchForFacetSearchParameters));
	        }
	    };
	    requestBuilder_1 = requestBuilder;
	    return requestBuilder_1;
	}

	function _instanceof(left, right) {
	    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
	        return !!right[Symbol.hasInstance](left);
	    } else return left instanceof right;
	}

	var defaultsPure;
	var hasRequiredDefaultsPure;
	function requireDefaultsPure() {
	    if (hasRequiredDefaultsPure) return defaultsPure;
	    hasRequiredDefaultsPure = 1;
	    // NOTE: this behaves like lodash/defaults, but doesn't mutate the target
	    // it also preserve keys order
	    defaultsPure = function defaultsPure() {
	        var sources = Array.prototype.slice.call(arguments);
	        return sources.reduceRight(function(acc, source) {
	            Object.keys(Object(source)).forEach(function(key) {
	                if (source[key] === undefined) {
	                    return;
	                }
	                if (acc[key] !== undefined) {
	                    // remove if already added, so that we can add it in correct order
	                    delete acc[key];
	                }
	                acc[key] = source[key];
	            });
	            return acc;
	        }, {});
	    };
	    return defaultsPure;
	}

	var find;
	var hasRequiredFind;
	function requireFind() {
	    if (hasRequiredFind) return find;
	    hasRequiredFind = 1;
	    // @MAJOR can be replaced by native Array#find when we change support
	    find = function find(array, comparator) {
	        if (!Array.isArray(array)) {
	            return undefined;
	        }
	        for(var i = 0; i < array.length; i++){
	            if (comparator(array[i])) {
	                return array[i];
	            }
	        }
	        return undefined;
	    };
	    return find;
	}

	var intersection_1;
	var hasRequiredIntersection;
	function requireIntersection() {
	    if (hasRequiredIntersection) return intersection_1;
	    hasRequiredIntersection = 1;
	    function intersection(arr1, arr2) {
	        return arr1.filter(function(value, index) {
	            return arr2.indexOf(value) > -1 && arr1.indexOf(value) === index /* skips duplicates */ ;
	        });
	    }
	    intersection_1 = intersection;
	    return intersection_1;
	}

	var valToNumber_1;
	var hasRequiredValToNumber;
	function requireValToNumber() {
	    if (hasRequiredValToNumber) return valToNumber_1;
	    hasRequiredValToNumber = 1;
	    function valToNumber(v) {
	        if (typeof v === 'number') {
	            return v;
	        } else if (typeof v === 'string') {
	            return parseFloat(v);
	        } else if (Array.isArray(v)) {
	            return v.map(valToNumber);
	        }
	        throw new Error('The value should be a number, a parsable string or an array of those.');
	    }
	    valToNumber_1 = valToNumber;
	    return valToNumber_1;
	}

	var isValidUserToken;
	var hasRequiredIsValidUserToken;
	function requireIsValidUserToken() {
	    if (hasRequiredIsValidUserToken) return isValidUserToken;
	    hasRequiredIsValidUserToken = 1;
	    isValidUserToken = function isValidUserToken(userToken) {
	        if (userToken === null) {
	            return false;
	        }
	        return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
	    };
	    return isValidUserToken;
	}

	var RefinementList;
	var hasRequiredRefinementList;
	function requireRefinementList() {
	    if (hasRequiredRefinementList) return RefinementList;
	    hasRequiredRefinementList = 1;
	    /**
		 * Functions to manipulate refinement lists
		 *
		 * The RefinementList is not formally defined through a prototype but is based
		 * on a specific structure.
		 *
		 * @module SearchParameters.refinementList
		 *
		 * @typedef {string[]} SearchParameters.refinementList.Refinements
		 * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
		 */ var defaultsPure = requireDefaultsPure();
	    var objectHasKeys = requireObjectHasKeys();
	    var omit = requireOmit();
	    var lib = {
	        /**
		   * Adds a refinement to a RefinementList
		   * @param {RefinementList} refinementList the initial list
		   * @param {string} attribute the attribute to refine
		   * @param {string} value the value of the refinement, if the value is not a string it will be converted
		   * @return {RefinementList} a new and updated refinement list
		   */ addRefinement: function addRefinement(refinementList, attribute, value) {
	            if (lib.isRefined(refinementList, attribute, value)) {
	                return refinementList;
	            }
	            var valueAsString = '' + value;
	            var facetRefinement = !refinementList[attribute] ? [
	                valueAsString
	            ] : refinementList[attribute].concat(valueAsString);
	            var mod = {};
	            mod[attribute] = facetRefinement;
	            return defaultsPure(mod, refinementList);
	        },
	        /**
		   * Removes refinement(s) for an attribute:
		   *  - if the value is specified removes the refinement for the value on the attribute
		   *  - if no value is specified removes all the refinements for this attribute
		   * @param {RefinementList} refinementList the initial list
		   * @param {string} attribute the attribute to refine
		   * @param {string} [value] the value of the refinement
		   * @return {RefinementList} a new and updated refinement lst
		   */ removeRefinement: function removeRefinement(refinementList, attribute, value) {
	            if (value === undefined) {
	                // we use the "filter" form of clearRefinement, since it leaves empty values as-is
	                // the form with a string will remove the attribute completely
	                return lib.clearRefinement(refinementList, function(v, f) {
	                    return attribute === f;
	                });
	            }
	            var valueAsString = '' + value;
	            return lib.clearRefinement(refinementList, function(v, f) {
	                return attribute === f && valueAsString === v;
	            });
	        },
	        /**
		   * Toggles the refinement value for an attribute.
		   * @param {RefinementList} refinementList the initial list
		   * @param {string} attribute the attribute to refine
		   * @param {string} value the value of the refinement
		   * @return {RefinementList} a new and updated list
		   */ toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
	            if (value === undefined) throw new Error('toggleRefinement should be used with a value');
	            if (lib.isRefined(refinementList, attribute, value)) {
	                return lib.removeRefinement(refinementList, attribute, value);
	            }
	            return lib.addRefinement(refinementList, attribute, value);
	        },
	        /**
		   * Clear all or parts of a RefinementList. Depending on the arguments, three
		   * kinds of behavior can happen:
		   *  - if no attribute is provided: clears the whole list
		   *  - if an attribute is provided as a string: clears the list for the specific attribute
		   *  - if an attribute is provided as a function: discards the elements for which the function returns true
		   * @param {RefinementList} refinementList the initial list
		   * @param {string} [attribute] the attribute or function to discard
		   * @param {string} [refinementType] optional parameter to give more context to the attribute function
		   * @return {RefinementList} a new and updated refinement list
		   */ clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
	            if (attribute === undefined) {
	                // return the same object if the list is already empty
	                // this is mainly for tests, as it doesn't have much impact on performance
	                if (!objectHasKeys(refinementList)) {
	                    return refinementList;
	                }
	                return {};
	            } else if (typeof attribute === 'string') {
	                return omit(refinementList, [
	                    attribute
	                ]);
	            } else if (typeof attribute === 'function') {
	                var hasChanged = false;
	                var newRefinementList = Object.keys(refinementList).reduce(function(memo, key) {
	                    var values = refinementList[key] || [];
	                    var facetList = values.filter(function(value) {
	                        return !attribute(value, key, refinementType);
	                    });
	                    if (facetList.length !== values.length) {
	                        hasChanged = true;
	                    }
	                    memo[key] = facetList;
	                    return memo;
	                }, {});
	                if (hasChanged) return newRefinementList;
	                return refinementList;
	            }
	            // We return nothing if the attribute is not undefined, a string or a function,
	            // as it is not a valid value for a refinement
	            return undefined;
	        },
	        /**
		   * Test if the refinement value is used for the attribute. If no refinement value
		   * is provided, test if the refinementList contains any refinement for the
		   * given attribute.
		   * @param {RefinementList} refinementList the list of refinement
		   * @param {string} attribute name of the attribute
		   * @param {string} [refinementValue] value of the filter/refinement
		   * @return {boolean} true if the attribute is refined, false otherwise
		   */ isRefined: function isRefined(refinementList, attribute, refinementValue) {
	            var containsRefinements = Boolean(refinementList[attribute]) && refinementList[attribute].length > 0;
	            if (refinementValue === undefined || !containsRefinements) {
	                return containsRefinements;
	            }
	            var refinementValueAsString = '' + refinementValue;
	            return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
	        }
	    };
	    RefinementList = lib;
	    return RefinementList;
	}

	var SearchParameters_1;
	var hasRequiredSearchParameters;
	function requireSearchParameters() {
	    if (hasRequiredSearchParameters) return SearchParameters_1;
	    hasRequiredSearchParameters = 1;
	    var defaultsPure = requireDefaultsPure();
	    var find = requireFind();
	    var intersection = requireIntersection();
	    var merge = requireMerge();
	    var objectHasKeys = requireObjectHasKeys();
	    var omit = requireOmit();
	    var valToNumber = requireValToNumber();
	    var isValidUserToken = requireIsValidUserToken();
	    var RefinementList = requireRefinementList();
	    /**
		 * isEqual, but only for numeric refinement values, possible values:
		 * - 5
		 * - [5]
		 * - [[5]]
		 * - [[5,5],[4]]
		 * @param {any} a numeric refinement value
		 * @param {any} b numeric refinement value
		 * @return {boolean} true if the values are equal
		 */ function isEqualNumericRefinement(a, b) {
	        if (Array.isArray(a) && Array.isArray(b)) {
	            return a.length === b.length && a.every(function(el, i) {
	                return isEqualNumericRefinement(b[i], el);
	            });
	        }
	        return a === b;
	    }
	    /**
		 * like _.find but using deep equality to be able to use it
		 * to find arrays.
		 * @private
		 * @param {any[]} array array to search into (elements are base or array of base)
		 * @param {any} searchedValue the value we're looking for (base or array of base)
		 * @return {any} the searched value or undefined
		 */ function findArray(array, searchedValue) {
	        return find(array, function(currentValue) {
	            return isEqualNumericRefinement(currentValue, searchedValue);
	        });
	    }
	    /**
		 * The facet list is the structure used to store the list of values used to
		 * filter a single attribute.
		 * @typedef {string[]} SearchParameters.FacetList
		 */ /**
		 * Structure to store numeric filters with the operator as the key. The supported operators
		 * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
		 * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
		 */ /**
		 * SearchParameters is the data structure that contains all the information
		 * usable for making a search to Algolia API. It doesn't do the search itself,
		 * nor does it contains logic about the parameters.
		 * It is an immutable object, therefore it has been created in a way that each
		 * changes does not change the object itself but returns a copy with the
		 * modification.
		 * This object should probably not be instantiated outside of the helper. It will
		 * be provided when needed. This object is documented for reference as you'll
		 * get it from events generated by the {@link AlgoliaSearchHelper}.
		 * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
		 * @constructor
		 * @classdesc contains all the parameters of a search
		 * @param {object|SearchParameters} newParameters existing parameters or partial object
		 * for the properties of a new SearchParameters
		 * @see SearchParameters.make
		 * @example <caption>SearchParameters of the first query in
		 *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
		{
		   "query": "",
		   "disjunctiveFacets": [
		      "customerReviewCount",
		      "category",
		      "salePrice_range",
		      "manufacturer"
		  ],
		   "maxValuesPerFacet": 30,
		   "page": 0,
		   "hitsPerPage": 10,
		   "facets": [
		      "type",
		      "shipping"
		  ]
		}
		 */ function SearchParameters(newParameters) {
	        var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {};
	        if (params.userToken !== undefined && !isValidUserToken(params.userToken)) {
	            // eslint-disable-next-line no-console
	            console.warn('[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}');
	        }
	        /**
		   * This attribute contains the list of all the conjunctive facets
		   * used. This list will be added to requested facets in the
		   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
		   * @member {string[]}
		   */ this.facets = params.facets || [];
	        /**
		   * This attribute contains the list of all the disjunctive facets
		   * used. This list will be added to requested facets in the
		   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
		   * @member {string[]}
		   */ this.disjunctiveFacets = params.disjunctiveFacets || [];
	        /**
		   * This attribute contains the list of all the hierarchical facets
		   * used. This list will be added to requested facets in the
		   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
		   * Hierarchical facets are a sub type of disjunctive facets that
		   * let you filter faceted attributes hierarchically.
		   * @member {string[]|object[]}
		   */ this.hierarchicalFacets = params.hierarchicalFacets || [];
	        // Refinements
	        /**
		   * This attribute contains all the filters that need to be
		   * applied on the conjunctive facets. Each facet must be properly
		   * defined in the `facets` attribute.
		   *
		   * The key is the name of the facet, and the `FacetList` contains all
		   * filters selected for the associated facet name.
		   *
		   * When querying algolia, the values stored in this attribute will
		   * be translated into the `facetFilters` attribute.
		   * @member {Object.<string, SearchParameters.FacetList>}
		   */ this.facetsRefinements = params.facetsRefinements || {};
	        /**
		   * This attribute contains all the filters that need to be
		   * excluded from the conjunctive facets. Each facet must be properly
		   * defined in the `facets` attribute.
		   *
		   * The key is the name of the facet, and the `FacetList` contains all
		   * filters excluded for the associated facet name.
		   *
		   * When querying algolia, the values stored in this attribute will
		   * be translated into the `facetFilters` attribute.
		   * @member {Object.<string, SearchParameters.FacetList>}
		   */ this.facetsExcludes = params.facetsExcludes || {};
	        /**
		   * This attribute contains all the filters that need to be
		   * applied on the disjunctive facets. Each facet must be properly
		   * defined in the `disjunctiveFacets` attribute.
		   *
		   * The key is the name of the facet, and the `FacetList` contains all
		   * filters selected for the associated facet name.
		   *
		   * When querying algolia, the values stored in this attribute will
		   * be translated into the `facetFilters` attribute.
		   * @member {Object.<string, SearchParameters.FacetList>}
		   */ this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
	        /**
		   * This attribute contains all the filters that need to be
		   * applied on the numeric attributes.
		   *
		   * The key is the name of the attribute, and the value is the
		   * filters to apply to this attribute.
		   *
		   * When querying algolia, the values stored in this attribute will
		   * be translated into the `numericFilters` attribute.
		   * @member {Object.<string, SearchParameters.OperatorList>}
		   */ this.numericRefinements = params.numericRefinements || {};
	        /**
		   * This attribute contains all the tags used to refine the query.
		   *
		   * When querying algolia, the values stored in this attribute will
		   * be translated into the `tagFilters` attribute.
		   * @member {string[]}
		   */ this.tagRefinements = params.tagRefinements || [];
	        /**
		   * This attribute contains all the filters that need to be
		   * applied on the hierarchical facets. Each facet must be properly
		   * defined in the `hierarchicalFacets` attribute.
		   *
		   * The key is the name of the facet, and the `FacetList` contains all
		   * filters selected for the associated facet name. The FacetList values
		   * are structured as a string that contain the values for each level
		   * separated by the configured separator.
		   *
		   * When querying algolia, the values stored in this attribute will
		   * be translated into the `facetFilters` attribute.
		   * @member {Object.<string, SearchParameters.FacetList>}
		   */ this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};
	        // eslint-disable-next-line consistent-this
	        var self = this;
	        Object.keys(params).forEach(function(paramName) {
	            var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
	            var isValueDefined = params[paramName] !== undefined;
	            if (!isKeyKnown && isValueDefined) {
	                self[paramName] = params[paramName];
	            }
	        });
	    }
	    /**
		 * List all the properties in SearchParameters and therefore all the known Algolia properties
		 * This doesn't contain any beta/hidden features.
		 * @private
		 */ SearchParameters.PARAMETERS = Object.keys(new SearchParameters());
	    // Returns a finite number or null. Used to reject Infinity/-Infinity from parseFloat.
	    function parseFiniteFloat(value) {
	        var n = parseFloat(value);
	        // global isFinite is safe here: n is always a number type (no string coercion risk)
	        return isFinite(n) ? n : null;
	    }
	    /**
		 * @private
		 * @param {object} partialState full or part of a state
		 * @return {object} a new object with the number keys as number
		 */ SearchParameters._parseNumbers = function(partialState) {
	        // Do not parse numbers again in SearchParameters, they ought to be parsed already
	        if (_instanceof(partialState, SearchParameters)) return partialState;
	        var numbers = {};
	        var numberKeys = [
	            'aroundPrecision',
	            'aroundRadius',
	            'getRankingInfo',
	            'minWordSizefor2Typos',
	            'minWordSizefor1Typo',
	            'page',
	            'maxValuesPerFacet',
	            'distinct',
	            'minimumAroundRadius',
	            'hitsPerPage',
	            'minProximity'
	        ];
	        numberKeys.forEach(function(k) {
	            var value = partialState[k];
	            if (typeof value === 'string') {
	                var parsedValue = parseFloat(value);
	                if (isNaN(parsedValue)) {
	                    // originally an unparseable string like "all", keep NaN
	                    numbers[k] = value;
	                } else if (!isFinite(parsedValue)) {
	                    // Infinity/-Infinity — convert to null
	                    numbers[k] = null;
	                } else {
	                    numbers[k] = parsedValue;
	                }
	            } else if (typeof value === 'number' && !isFinite(value)) {
	                // Already-numeric Infinity — convert to null
	                numbers[k] = null;
	            }
	        });
	        // there's two formats of insideBoundingBox, we need to parse
	        // the one which is an array of float geo rectangles
	        if (Array.isArray(partialState.insideBoundingBox)) {
	            numbers.insideBoundingBox = partialState.insideBoundingBox.map(function(geoRect) {
	                if (Array.isArray(geoRect)) {
	                    return geoRect.map(function(value) {
	                        if (typeof value === 'string') {
	                            return parseFiniteFloat(value);
	                        }
	                        if (typeof value === 'number' && !isFinite(value)) {
	                            return null;
	                        }
	                        return value;
	                    });
	                }
	                return geoRect;
	            });
	        }
	        if (partialState.numericRefinements) {
	            var numericRefinements = {};
	            Object.keys(partialState.numericRefinements).forEach(function(attribute) {
	                var operators = partialState.numericRefinements[attribute] || {};
	                numericRefinements[attribute] = {};
	                Object.keys(operators).forEach(function(operator) {
	                    var values = operators[operator];
	                    var parsedValues = values.map(function(v) {
	                        if (Array.isArray(v)) {
	                            return v.map(function(vPrime) {
	                                if (typeof vPrime === 'string') {
	                                    return parseFiniteFloat(vPrime);
	                                }
	                                if (typeof vPrime === 'number' && !isFinite(vPrime)) {
	                                    return null;
	                                }
	                                return vPrime;
	                            });
	                        } else if (typeof v === 'string') {
	                            return parseFiniteFloat(v);
	                        } else if (typeof v === 'number' && !isFinite(v)) {
	                            return null;
	                        }
	                        return v;
	                    });
	                    numericRefinements[attribute][operator] = parsedValues;
	                });
	            });
	            numbers.numericRefinements = numericRefinements;
	        }
	        return merge(partialState, numbers);
	    };
	    /**
		 * Factory for SearchParameters
		 * @param {object|SearchParameters} newParameters existing parameters or partial
		 * object for the properties of a new SearchParameters
		 * @return {SearchParameters} frozen instance of SearchParameters
		 */ SearchParameters.make = function makeSearchParameters(newParameters) {
	        var instance = new SearchParameters(newParameters);
	        var hierarchicalFacets = newParameters.hierarchicalFacets || [];
	        hierarchicalFacets.forEach(function(facet) {
	            if (facet.rootPath) {
	                var currentRefinement = instance.getHierarchicalRefinement(facet.name);
	                if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) {
	                    instance = instance.clearRefinements(facet.name);
	                }
	                // get it again in case it has been cleared
	                currentRefinement = instance.getHierarchicalRefinement(facet.name);
	                if (currentRefinement.length === 0) {
	                    instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
	                }
	            }
	        });
	        return instance;
	    };
	    /**
		 * Validates the new parameters based on the previous state
		 * @param {SearchParameters} currentState the current state
		 * @param {object|SearchParameters} parameters the new parameters to set
		 * @return {Error|null} Error if the modification is invalid, null otherwise
		 */ SearchParameters.validate = function(currentState, parameters) {
	        var params = parameters || {};
	        if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) {
	            return new Error('[Tags] Cannot switch from the managed tag API to the advanced API. It is probably ' + 'an error, if it is really what you want, you should first clear the tags with clearTags method.');
	        }
	        if (currentState.tagRefinements.length > 0 && params.tagFilters) {
	            return new Error('[Tags] Cannot switch from the advanced tag API to the managed API. It is probably ' + 'an error, if it is not, you should first clear the tags with clearTags method.');
	        }
	        if (currentState.numericFilters && params.numericRefinements && objectHasKeys(params.numericRefinements)) {
	            return new Error("[Numeric filters] Can't switch from the advanced to the managed API. It" + ' is probably an error, if this is really what you want, you have to first' + ' clear the numeric filters.');
	        }
	        if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) {
	            return new Error("[Numeric filters] Can't switch from the managed API to the advanced. It" + ' is probably an error, if this is really what you want, you have to first' + ' clear the numeric filters.');
	        }
	        return null;
	    };
	    SearchParameters.prototype = {
	        constructor: SearchParameters,
	        /**
		   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
		   * @method
		   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
		   * - If not given, means to clear all the filters.
		   * - If `string`, means to clear all refinements for the `attribute` named filter.
		   * - If `function`, means to clear all the refinements that return truthy values.
		   * @return {SearchParameters} new instance with filters cleared
		   */ clearRefinements: function clearRefinements(attribute) {
	            var patch = {
	                numericRefinements: this._clearNumericRefinements(attribute),
	                facetsRefinements: RefinementList.clearRefinement(this.facetsRefinements, attribute, 'conjunctiveFacet'),
	                facetsExcludes: RefinementList.clearRefinement(this.facetsExcludes, attribute, 'exclude'),
	                disjunctiveFacetsRefinements: RefinementList.clearRefinement(this.disjunctiveFacetsRefinements, attribute, 'disjunctiveFacet'),
	                hierarchicalFacetsRefinements: RefinementList.clearRefinement(this.hierarchicalFacetsRefinements, attribute, 'hierarchicalFacet')
	            };
	            if (patch.numericRefinements === this.numericRefinements && patch.facetsRefinements === this.facetsRefinements && patch.facetsExcludes === this.facetsExcludes && patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements) {
	                return this;
	            }
	            return this.setQueryParameters(patch);
	        },
	        /**
		   * Remove all the refined tags from the SearchParameters
		   * @method
		   * @return {SearchParameters} new instance with tags cleared
		   */ clearTags: function clearTags() {
	            if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;
	            return this.setQueryParameters({
	                tagFilters: undefined,
	                tagRefinements: []
	            });
	        },
	        /**
		   * Set the index.
		   * @method
		   * @param {string} index the index name
		   * @return {SearchParameters} new instance
		   */ setIndex: function setIndex(index) {
	            if (index === this.index) return this;
	            return this.setQueryParameters({
	                index: index
	            });
	        },
	        /**
		   * Query setter
		   * @method
		   * @param {string} newQuery value for the new query
		   * @return {SearchParameters} new instance
		   */ setQuery: function setQuery(newQuery) {
	            if (newQuery === this.query) return this;
	            return this.setQueryParameters({
	                query: newQuery
	            });
	        },
	        /**
		   * Page setter
		   * @method
		   * @param {number} newPage new page number
		   * @return {SearchParameters} new instance
		   */ setPage: function setPage(newPage) {
	            if (newPage === this.page) return this;
	            return this.setQueryParameters({
	                page: newPage
	            });
	        },
	        /**
		   * Facets setter
		   * The facets are the simple facets, used for conjunctive (and) faceting.
		   * @method
		   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
		   * @return {SearchParameters} new instance
		   */ setFacets: function setFacets(facets) {
	            return this.setQueryParameters({
	                facets: facets
	            });
	        },
	        /**
		   * Disjunctive facets setter
		   * Change the list of disjunctive (or) facets the helper chan handle.
		   * @method
		   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
		   * @return {SearchParameters} new instance
		   */ setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
	            return this.setQueryParameters({
	                disjunctiveFacets: facets
	            });
	        },
	        /**
		   * HitsPerPage setter
		   * Hits per page represents the number of hits retrieved for this query
		   * @method
		   * @param {number} n number of hits retrieved per page of results
		   * @return {SearchParameters} new instance
		   */ setHitsPerPage: function setHitsPerPage(n) {
	            if (this.hitsPerPage === n) return this;
	            return this.setQueryParameters({
	                hitsPerPage: n
	            });
	        },
	        /**
		   * typoTolerance setter
		   * Set the value of typoTolerance
		   * @method
		   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
		   * @return {SearchParameters} new instance
		   */ setTypoTolerance: function setTypoTolerance(typoTolerance) {
	            if (this.typoTolerance === typoTolerance) return this;
	            return this.setQueryParameters({
	                typoTolerance: typoTolerance
	            });
	        },
	        /**
		   * Add a numeric filter for a given attribute
		   * When value is an array, they are combined with OR
		   * When value is a single value, it will combined with AND
		   * @method
		   * @param {string} attribute attribute to set the filter on
		   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
		   * @param {number | number[]} value value of the filter
		   * @return {SearchParameters} new instance
		   * @example
		   * // for price = 50 or 40
		   * state.addNumericRefinement('price', '=', [50, 40]);
		   * @example
		   * // for size = 38 and 40
		   * state.addNumericRefinement('size', '=', 38);
		   * state.addNumericRefinement('size', '=', 40);
		   */ addNumericRefinement: function addNumericRefinement(attribute, operator, value) {
	            var val = valToNumber(value);
	            if (this.isNumericRefined(attribute, operator, val)) return this;
	            var mod = merge({}, this.numericRefinements);
	            mod[attribute] = merge({}, mod[attribute]);
	            if (mod[attribute][operator]) {
	                // Array copy
	                mod[attribute][operator] = mod[attribute][operator].slice();
	                // Add the element. Concat can't be used here because value can be an array.
	                mod[attribute][operator].push(val);
	            } else {
	                mod[attribute][operator] = [
	                    val
	                ];
	            }
	            return this.setQueryParameters({
	                numericRefinements: mod
	            });
	        },
	        /**
		   * Get the list of conjunctive refinements for a single facet
		   * @param {string} facetName name of the attribute used for faceting
		   * @return {string[]} list of refinements
		   */ getConjunctiveRefinements: function getConjunctiveRefinements(facetName) {
	            if (!this.isConjunctiveFacet(facetName)) {
	                return [];
	            }
	            return this.facetsRefinements[facetName] || [];
	        },
	        /**
		   * Get the list of disjunctive refinements for a single facet
		   * @param {string} facetName name of the attribute used for faceting
		   * @return {string[]} list of refinements
		   */ getDisjunctiveRefinements: function getDisjunctiveRefinements(facetName) {
	            if (!this.isDisjunctiveFacet(facetName)) {
	                return [];
	            }
	            return this.disjunctiveFacetsRefinements[facetName] || [];
	        },
	        /**
		   * Get the list of hierarchical refinements for a single facet
		   * @param {string} facetName name of the attribute used for faceting
		   * @return {string[]} list of refinements
		   */ getHierarchicalRefinement: function getHierarchicalRefinement(facetName) {
	            // we send an array but we currently do not support multiple
	            // hierarchicalRefinements for a hierarchicalFacet
	            return this.hierarchicalFacetsRefinements[facetName] || [];
	        },
	        /**
		   * Get the list of exclude refinements for a single facet
		   * @param {string} facetName name of the attribute used for faceting
		   * @return {string[]} list of refinements
		   */ getExcludeRefinements: function getExcludeRefinements(facetName) {
	            if (!this.isConjunctiveFacet(facetName)) {
	                return [];
	            }
	            return this.facetsExcludes[facetName] || [];
	        },
	        /**
		   * Remove all the numeric filter for a given (attribute, operator)
		   * @method
		   * @param {string} attribute attribute to set the filter on
		   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
		   * @param {number} [number] the value to be removed
		   * @return {SearchParameters} new instance
		   */ removeNumericRefinement: function removeNumericRefinement(attribute, operator, number) {
	            var paramValue = number;
	            if (paramValue !== undefined) {
	                if (!this.isNumericRefined(attribute, operator, paramValue)) {
	                    return this;
	                }
	                return this.setQueryParameters({
	                    numericRefinements: this._clearNumericRefinements(function(value, key) {
	                        return key === attribute && value.op === operator && isEqualNumericRefinement(value.val, valToNumber(paramValue));
	                    })
	                });
	            } else if (operator !== undefined) {
	                if (!this.isNumericRefined(attribute, operator)) return this;
	                return this.setQueryParameters({
	                    numericRefinements: this._clearNumericRefinements(function(value, key) {
	                        return key === attribute && value.op === operator;
	                    })
	                });
	            }
	            if (!this.isNumericRefined(attribute)) return this;
	            return this.setQueryParameters({
	                numericRefinements: this._clearNumericRefinements(function(value, key) {
	                    return key === attribute;
	                })
	            });
	        },
	        /**
		   * Get the list of numeric refinements for a single facet
		   * @param {string} facetName name of the attribute used for faceting
		   * @return {SearchParameters.OperatorList} list of refinements
		   */ getNumericRefinements: function getNumericRefinements(facetName) {
	            return this.numericRefinements[facetName] || {};
	        },
	        /**
		   * Return the current refinement for the (attribute, operator)
		   * @param {string} attribute attribute in the record
		   * @param {string} operator operator applied on the refined values
		   * @return {Array.<number|number[]>} refined values
		   */ getNumericRefinement: function getNumericRefinement(attribute, operator) {
	            return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
	        },
	        /**
		   * Clear numeric filters.
		   * @method
		   * @private
		   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
		   * - If not given, means to clear all the filters.
		   * - If `string`, means to clear all refinements for the `attribute` named filter.
		   * - If `function`, means to clear all the refinements that return truthy values.
		   * @return {Object.<string, OperatorList>} new numeric refinements
		   */ _clearNumericRefinements: function _clearNumericRefinements(attribute) {
	            if (attribute === undefined) {
	                if (!objectHasKeys(this.numericRefinements)) {
	                    return this.numericRefinements;
	                }
	                return {};
	            } else if (typeof attribute === 'string') {
	                return omit(this.numericRefinements, [
	                    attribute
	                ]);
	            } else if (typeof attribute === 'function') {
	                var hasChanged = false;
	                var numericRefinements = this.numericRefinements;
	                var newNumericRefinements = Object.keys(numericRefinements).reduce(function(memo, key) {
	                    var operators = numericRefinements[key];
	                    var operatorList = {};
	                    operators = operators || {};
	                    Object.keys(operators).forEach(function(operator) {
	                        var values = operators[operator] || [];
	                        var outValues = [];
	                        values.forEach(function(value) {
	                            var predicateResult = attribute({
	                                val: value,
	                                op: operator
	                            }, key, 'numeric');
	                            if (!predicateResult) outValues.push(value);
	                        });
	                        if (outValues.length !== values.length) {
	                            hasChanged = true;
	                        }
	                        operatorList[operator] = outValues;
	                    });
	                    memo[key] = operatorList;
	                    return memo;
	                }, {});
	                if (hasChanged) return newNumericRefinements;
	                return this.numericRefinements;
	            }
	            // We return nothing if the attribute is not undefined, a string or a function,
	            // as it is not a valid value for a refinement
	            return undefined;
	        },
	        /**
		   * Add a facet to the facets attribute of the helper configuration, if it
		   * isn't already present.
		   * @method
		   * @param {string} facet facet name to add
		   * @return {SearchParameters} new instance
		   */ addFacet: function addFacet(facet) {
	            if (this.isConjunctiveFacet(facet)) {
	                return this;
	            }
	            return this.setQueryParameters({
	                facets: this.facets.concat([
	                    facet
	                ])
	            });
	        },
	        /**
		   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
		   * configuration, if it isn't already present.
		   * @method
		   * @param {string} facet disjunctive facet name to add
		   * @return {SearchParameters} new instance
		   */ addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
	            if (this.isDisjunctiveFacet(facet)) {
	                return this;
	            }
	            return this.setQueryParameters({
	                disjunctiveFacets: this.disjunctiveFacets.concat([
	                    facet
	                ])
	            });
	        },
	        /**
		   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
		   * configuration.
		   * @method
		   * @param {object} hierarchicalFacet hierarchical facet to add
		   * @return {SearchParameters} new instance
		   * @throws will throw an error if a hierarchical facet with the same name was already declared
		   */ addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
	            if (this.isHierarchicalFacet(hierarchicalFacet.name)) {
	                throw new Error('Cannot declare two hierarchical facets with the same name: `' + hierarchicalFacet.name + '`');
	            }
	            return this.setQueryParameters({
	                hierarchicalFacets: this.hierarchicalFacets.concat([
	                    hierarchicalFacet
	                ])
	            });
	        },
	        /**
		   * Add a refinement on a "normal" facet
		   * @method
		   * @param {string} facet attribute to apply the faceting on
		   * @param {string} value value of the attribute (will be converted to string)
		   * @return {SearchParameters} new instance
		   */ addFacetRefinement: function addFacetRefinement(facet, value) {
	            if (!this.isConjunctiveFacet(facet)) {
	                throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
	            }
	            if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
	            return this.setQueryParameters({
	                facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
	            });
	        },
	        /**
		   * Exclude a value from a "normal" facet
		   * @method
		   * @param {string} facet attribute to apply the exclusion on
		   * @param {string} value value of the attribute (will be converted to string)
		   * @return {SearchParameters} new instance
		   */ addExcludeRefinement: function addExcludeRefinement(facet, value) {
	            if (!this.isConjunctiveFacet(facet)) {
	                throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
	            }
	            if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
	            return this.setQueryParameters({
	                facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
	            });
	        },
	        /**
		   * Adds a refinement on a disjunctive facet.
		   * @method
		   * @param {string} facet attribute to apply the faceting on
		   * @param {string} value value of the attribute (will be converted to string)
		   * @return {SearchParameters} new instance
		   */ addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
	            if (!this.isDisjunctiveFacet(facet)) {
	                throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
	            }
	            if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
	            return this.setQueryParameters({
	                disjunctiveFacetsRefinements: RefinementList.addRefinement(this.disjunctiveFacetsRefinements, facet, value)
	            });
	        },
	        /**
		   * addTagRefinement adds a tag to the list used to filter the results
		   * @param {string} tag tag to be added
		   * @return {SearchParameters} new instance
		   */ addTagRefinement: function addTagRefinement(tag) {
	            if (this.isTagRefined(tag)) return this;
	            var modification = {
	                tagRefinements: this.tagRefinements.concat(tag)
	            };
	            return this.setQueryParameters(modification);
	        },
	        /**
		   * Remove a facet from the facets attribute of the helper configuration, if it
		   * is present.
		   * @method
		   * @param {string} facet facet name to remove
		   * @return {SearchParameters} new instance
		   */ removeFacet: function removeFacet(facet) {
	            if (!this.isConjunctiveFacet(facet)) {
	                return this;
	            }
	            return this.clearRefinements(facet).setQueryParameters({
	                facets: this.facets.filter(function(f) {
	                    return f !== facet;
	                })
	            });
	        },
	        /**
		   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
		   * helper configuration, if it is present.
		   * @method
		   * @param {string} facet disjunctive facet name to remove
		   * @return {SearchParameters} new instance
		   */ removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
	            if (!this.isDisjunctiveFacet(facet)) {
	                return this;
	            }
	            return this.clearRefinements(facet).setQueryParameters({
	                disjunctiveFacets: this.disjunctiveFacets.filter(function(f) {
	                    return f !== facet;
	                })
	            });
	        },
	        /**
		   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
		   * helper configuration, if it is present.
		   * @method
		   * @param {string} facet hierarchical facet name to remove
		   * @return {SearchParameters} new instance
		   */ removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
	            if (!this.isHierarchicalFacet(facet)) {
	                return this;
	            }
	            return this.clearRefinements(facet).setQueryParameters({
	                hierarchicalFacets: this.hierarchicalFacets.filter(function(f) {
	                    return f.name !== facet;
	                })
	            });
	        },
	        /**
		   * Remove a refinement set on facet. If a value is provided, it will clear the
		   * refinement for the given value, otherwise it will clear all the refinement
		   * values for the faceted attribute.
		   * @method
		   * @param {string} facet name of the attribute used for faceting
		   * @param {string} [value] value used to filter
		   * @return {SearchParameters} new instance
		   */ removeFacetRefinement: function removeFacetRefinement(facet, value) {
	            if (!this.isConjunctiveFacet(facet)) {
	                throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
	            }
	            if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
	            return this.setQueryParameters({
	                facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
	            });
	        },
	        /**
		   * Remove a negative refinement on a facet
		   * @method
		   * @param {string} facet name of the attribute used for faceting
		   * @param {string} value value used to filter
		   * @return {SearchParameters} new instance
		   */ removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
	            if (!this.isConjunctiveFacet(facet)) {
	                throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
	            }
	            if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
	            return this.setQueryParameters({
	                facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
	            });
	        },
	        /**
		   * Remove a refinement on a disjunctive facet
		   * @method
		   * @param {string} facet name of the attribute used for faceting
		   * @param {string} value value used to filter
		   * @return {SearchParameters} new instance
		   */ removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
	            if (!this.isDisjunctiveFacet(facet)) {
	                throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
	            }
	            if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
	            return this.setQueryParameters({
	                disjunctiveFacetsRefinements: RefinementList.removeRefinement(this.disjunctiveFacetsRefinements, facet, value)
	            });
	        },
	        /**
		   * Remove a tag from the list of tag refinements
		   * @method
		   * @param {string} tag the tag to remove
		   * @return {SearchParameters} new instance
		   */ removeTagRefinement: function removeTagRefinement(tag) {
	            if (!this.isTagRefined(tag)) return this;
	            var modification = {
	                tagRefinements: this.tagRefinements.filter(function(t) {
	                    return t !== tag;
	                })
	            };
	            return this.setQueryParameters(modification);
	        },
	        /**
		   * Generic toggle refinement method to use with facet, disjunctive facets
		   * and hierarchical facets
		   * @param  {string} facet the facet to refine
		   * @param  {string} value the associated value
		   * @return {SearchParameters} new instance
		   * @throws will throw an error if the facet is not declared in the settings of the helper
		   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
		   */ toggleRefinement: function toggleRefinement(facet, value) {
	            return this.toggleFacetRefinement(facet, value);
	        },
	        /**
		   * Generic toggle refinement method to use with facet, disjunctive facets
		   * and hierarchical facets
		   * @param  {string} facet the facet to refine
		   * @param  {string} value the associated value
		   * @return {SearchParameters} new instance
		   * @throws will throw an error if the facet is not declared in the settings of the helper
		   */ toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
	            if (this.isHierarchicalFacet(facet)) {
	                return this.toggleHierarchicalFacetRefinement(facet, value);
	            } else if (this.isConjunctiveFacet(facet)) {
	                return this.toggleConjunctiveFacetRefinement(facet, value);
	            } else if (this.isDisjunctiveFacet(facet)) {
	                return this.toggleDisjunctiveFacetRefinement(facet, value);
	            }
	            throw new Error('Cannot refine the undeclared facet ' + facet + '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets');
	        },
	        /**
		   * Switch the refinement applied over a facet/value
		   * @method
		   * @param {string} facet name of the attribute used for faceting
		   * @param {value} value value used for filtering
		   * @return {SearchParameters} new instance
		   */ toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
	            if (!this.isConjunctiveFacet(facet)) {
	                throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
	            }
	            return this.setQueryParameters({
	                facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
	            });
	        },
	        /**
		   * Switch the refinement applied over a facet/value
		   * @method
		   * @param {string} facet name of the attribute used for faceting
		   * @param {value} value value used for filtering
		   * @return {SearchParameters} new instance
		   */ toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
	            if (!this.isConjunctiveFacet(facet)) {
	                throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
	            }
	            return this.setQueryParameters({
	                facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
	            });
	        },
	        /**
		   * Switch the refinement applied over a facet/value
		   * @method
		   * @param {string} facet name of the attribute used for faceting
		   * @param {value} value value used for filtering
		   * @return {SearchParameters} new instance
		   */ toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
	            if (!this.isDisjunctiveFacet(facet)) {
	                throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
	            }
	            return this.setQueryParameters({
	                disjunctiveFacetsRefinements: RefinementList.toggleRefinement(this.disjunctiveFacetsRefinements, facet, value)
	            });
	        },
	        /**
		   * Switch the refinement applied over a facet/value
		   * @method
		   * @param {string} facet name of the attribute used for faceting
		   * @param {value} value value used for filtering
		   * @return {SearchParameters} new instance
		   */ toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
	            if (!this.isHierarchicalFacet(facet)) {
	                throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');
	            }
	            var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));
	            var mod = {};
	            var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined && this.hierarchicalFacetsRefinements[facet].length > 0 && // remove current refinement:
	            // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
	            (this.hierarchicalFacetsRefinements[facet][0] === value || // remove a parent refinement of the current refinement:
	            //  - refinement was 'beer > IPA > Flying dog'
	            //  - call is toggleRefine('beer > IPA')
	            //  - refinement should be `beer`
	            this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0);
	            if (upOneOrMultipleLevel) {
	                if (value.indexOf(separator) === -1) {
	                    // go back to root level
	                    mod[facet] = [];
	                } else {
	                    mod[facet] = [
	                        value.slice(0, value.lastIndexOf(separator))
	                    ];
	                }
	            } else {
	                mod[facet] = [
	                    value
	                ];
	            }
	            return this.setQueryParameters({
	                hierarchicalFacetsRefinements: defaultsPure(mod, this.hierarchicalFacetsRefinements)
	            });
	        },
	        /**
		   * Adds a refinement on a hierarchical facet.
		   * @param {string} facet the facet name
		   * @param {string} path the hierarchical facet path
		   * @return {SearchParameter} the new state
		   * @throws Error if the facet is not defined or if the facet is refined
		   */ addHierarchicalFacetRefinement: function addHierarchicalFacetRefinement(facet, path) {
	            if (this.isHierarchicalFacetRefined(facet)) {
	                throw new Error(facet + ' is already refined.');
	            }
	            if (!this.isHierarchicalFacet(facet)) {
	                throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration.');
	            }
	            var mod = {};
	            mod[facet] = [
	                path
	            ];
	            return this.setQueryParameters({
	                hierarchicalFacetsRefinements: defaultsPure(mod, this.hierarchicalFacetsRefinements)
	            });
	        },
	        /**
		   * Removes the refinement set on a hierarchical facet.
		   * @param {string} facet the facet name
		   * @return {SearchParameter} the new state
		   * @throws Error if the facet is not defined or if the facet is not refined
		   */ removeHierarchicalFacetRefinement: function removeHierarchicalFacetRefinement(facet) {
	            if (!this.isHierarchicalFacetRefined(facet)) {
	                return this;
	            }
	            var mod = {};
	            mod[facet] = [];
	            return this.setQueryParameters({
	                hierarchicalFacetsRefinements: defaultsPure(mod, this.hierarchicalFacetsRefinements)
	            });
	        },
	        /**
		   * Switch the tag refinement
		   * @method
		   * @param {string} tag the tag to remove or add
		   * @return {SearchParameters} new instance
		   */ toggleTagRefinement: function toggleTagRefinement(tag) {
	            if (this.isTagRefined(tag)) {
	                return this.removeTagRefinement(tag);
	            }
	            return this.addTagRefinement(tag);
	        },
	        /**
		   * Test if the facet name is from one of the disjunctive facets
		   * @method
		   * @param {string} facet facet name to test
		   * @return {boolean} true if facet is a disjunctive facet
		   */ isDisjunctiveFacet: function isDisjunctiveFacet(facet) {
	            return this.disjunctiveFacets.indexOf(facet) > -1;
	        },
	        /**
		   * Test if the facet name is from one of the hierarchical facets
		   * @method
		   * @param {string} facetName facet name to test
		   * @return {boolean} true if facetName is a hierarchical facet
		   */ isHierarchicalFacet: function isHierarchicalFacet(facetName) {
	            return this.getHierarchicalFacetByName(facetName) !== undefined;
	        },
	        /**
		   * Test if the facet name is from one of the conjunctive/normal facets
		   * @method
		   * @param {string} facet facet name to test
		   * @return {boolean} true if facet is a conjunctive facet
		   */ isConjunctiveFacet: function isConjunctiveFacet(facet) {
	            return this.facets.indexOf(facet) > -1;
	        },
	        /**
		   * Returns true if the facet is refined, either for a specific value or in
		   * general.
		   * @method
		   * @param {string} facet name of the attribute for used for faceting
		   * @param {string} value, optional value. If passed will test that this value
		   * is filtering the given facet.
		   * @return {boolean} returns true if refined
		   */ isFacetRefined: function isFacetRefined(facet, value) {
	            if (!this.isConjunctiveFacet(facet)) {
	                return false;
	            }
	            return RefinementList.isRefined(this.facetsRefinements, facet, value);
	        },
	        /**
		   * Returns true if the facet contains exclusions or if a specific value is
		   * excluded.
		   *
		   * @method
		   * @param {string} facet name of the attribute for used for faceting
		   * @param {string} [value] optional value. If passed will test that this value
		   * is filtering the given facet.
		   * @return {boolean} returns true if refined
		   */ isExcludeRefined: function isExcludeRefined(facet, value) {
	            if (!this.isConjunctiveFacet(facet)) {
	                return false;
	            }
	            return RefinementList.isRefined(this.facetsExcludes, facet, value);
	        },
	        /**
		   * Returns true if the facet contains a refinement, or if a value passed is a
		   * refinement for the facet.
		   * @method
		   * @param {string} facet name of the attribute for used for faceting
		   * @param {string} value optional, will test if the value is used for refinement
		   * if there is one, otherwise will test if the facet contains any refinement
		   * @return {boolean} true if the facet is refined
		   */ isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
	            if (!this.isDisjunctiveFacet(facet)) {
	                return false;
	            }
	            return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
	        },
	        /**
		   * Returns true if the facet contains a refinement, or if a value passed is a
		   * refinement for the facet.
		   * @method
		   * @param {string} facet name of the attribute for used for faceting
		   * @param {string} value optional, will test if the value is used for refinement
		   * if there is one, otherwise will test if the facet contains any refinement
		   * @return {boolean} true if the facet is refined
		   */ isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
	            if (!this.isHierarchicalFacet(facet)) {
	                return false;
	            }
	            var refinements = this.getHierarchicalRefinement(facet);
	            if (!value) {
	                return refinements.length > 0;
	            }
	            return refinements.indexOf(value) !== -1;
	        },
	        /**
		   * Test if the triple (attribute, operator, value) is already refined.
		   * If only the attribute and the operator are provided, it tests if the
		   * contains any refinement value.
		   * @method
		   * @param {string} attribute attribute for which the refinement is applied
		   * @param {string} [operator] operator of the refinement
		   * @param {string} [value] value of the refinement
		   * @return {boolean} true if it is refined
		   */ isNumericRefined: function isNumericRefined(attribute, operator, value) {
	            if (value === undefined && operator === undefined) {
	                return Boolean(this.numericRefinements[attribute]);
	            }
	            var isOperatorDefined = this.numericRefinements[attribute] && this.numericRefinements[attribute][operator] !== undefined;
	            if (value === undefined || !isOperatorDefined) {
	                return isOperatorDefined;
	            }
	            var parsedValue = valToNumber(value);
	            var isAttributeValueDefined = findArray(this.numericRefinements[attribute][operator], parsedValue) !== undefined;
	            return isOperatorDefined && isAttributeValueDefined;
	        },
	        /**
		   * Returns true if the tag refined, false otherwise
		   * @method
		   * @param {string} tag the tag to check
		   * @return {boolean} true if tag is refined
		   */ isTagRefined: function isTagRefined(tag) {
	            return this.tagRefinements.indexOf(tag) !== -1;
	        },
	        /**
		   * Returns the list of all disjunctive facets refined
		   * @method
		   * @param {string} facet name of the attribute used for faceting
		   * @param {value} value value used for filtering
		   * @return {string[]} returns the list of refinements
		   */ getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
	            // eslint-disable-next-line consistent-this
	            var self = this;
	            // attributes used for numeric filter can also be disjunctive
	            var disjunctiveNumericRefinedFacets = intersection(Object.keys(this.numericRefinements).filter(function(facet) {
	                return Object.keys(self.numericRefinements[facet]).length > 0;
	            }), this.disjunctiveFacets);
	            return Object.keys(this.disjunctiveFacetsRefinements).filter(function(facet) {
	                return self.disjunctiveFacetsRefinements[facet].length > 0;
	            }).concat(disjunctiveNumericRefinedFacets).concat(this.getRefinedHierarchicalFacets()).sort();
	        },
	        /**
		   * Returns the list of all disjunctive facets refined
		   * @method
		   * @param {string} facet name of the attribute used for faceting
		   * @param {value} value value used for filtering
		   * @return {string[]} returns the list of refinements
		   */ getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
	            // eslint-disable-next-line consistent-this
	            var self = this;
	            return intersection(// enforce the order between the two arrays,
	            // so that refinement name index === hierarchical facet index
	            this.hierarchicalFacets.map(function(facet) {
	                return facet.name;
	            }), Object.keys(this.hierarchicalFacetsRefinements).filter(function(facet) {
	                return self.hierarchicalFacetsRefinements[facet].length > 0;
	            })).sort();
	        },
	        /**
		   * Returned the list of all disjunctive facets not refined
		   * @method
		   * @return {string[]} returns the list of facets that are not refined
		   */ getUnrefinedDisjunctiveFacets: function getUnrefinedDisjunctiveFacets() {
	            var refinedFacets = this.getRefinedDisjunctiveFacets();
	            return this.disjunctiveFacets.filter(function(f) {
	                return refinedFacets.indexOf(f) === -1;
	            });
	        },
	        managedParameters: [
	            'index',
	            'facets',
	            'disjunctiveFacets',
	            'facetsRefinements',
	            'hierarchicalFacets',
	            'facetsExcludes',
	            'disjunctiveFacetsRefinements',
	            'numericRefinements',
	            'tagRefinements',
	            'hierarchicalFacetsRefinements'
	        ],
	        getQueryParams: function getQueryParams() {
	            var managedParameters = this.managedParameters;
	            var queryParams = {};
	            // eslint-disable-next-line consistent-this
	            var self = this;
	            Object.keys(this).forEach(function(paramName) {
	                var paramValue = self[paramName];
	                if (managedParameters.indexOf(paramName) === -1 && paramValue !== undefined) {
	                    queryParams[paramName] = paramValue;
	                }
	            });
	            return queryParams;
	        },
	        /**
		   * Let the user set a specific value for a given parameter. Will return the
		   * same instance if the parameter is invalid or if the value is the same as the
		   * previous one.
		   * @method
		   * @param {string} parameter the parameter name
		   * @param {any} value the value to be set, must be compliant with the definition
		   * of the attribute on the object
		   * @return {SearchParameters} the updated state
		   */ setQueryParameter: function setParameter(parameter, value) {
	            if (this[parameter] === value) return this;
	            var modification = {};
	            modification[parameter] = value;
	            return this.setQueryParameters(modification);
	        },
	        /**
		   * Let the user set any of the parameters with a plain object.
		   * @method
		   * @param {object} params all the keys and the values to be updated
		   * @return {SearchParameters} a new updated instance
		   */ setQueryParameters: function setQueryParameters(params) {
	            if (!params) return this;
	            var error = SearchParameters.validate(this, params);
	            if (error) {
	                throw error;
	            }
	            // eslint-disable-next-line consistent-this
	            var self = this;
	            var nextWithNumbers = SearchParameters._parseNumbers(params);
	            var previousPlainObject = Object.keys(this).reduce(function(acc, key) {
	                acc[key] = self[key];
	                return acc;
	            }, {});
	            var nextPlainObject = Object.keys(nextWithNumbers).reduce(function(previous, key) {
	                var isPreviousValueDefined = previous[key] !== undefined;
	                var isNextValueDefined = nextWithNumbers[key] !== undefined;
	                if (isPreviousValueDefined && !isNextValueDefined) {
	                    return omit(previous, [
	                        key
	                    ]);
	                }
	                if (isNextValueDefined) {
	                    previous[key] = nextWithNumbers[key];
	                }
	                return previous;
	            }, previousPlainObject);
	            return new this.constructor(nextPlainObject);
	        },
	        /**
		   * Returns a new instance with the page reset. Two scenarios possible:
		   * the page is omitted -> return the given instance
		   * the page is set -> return a new instance with a page of 0
		   * @return {SearchParameters} a new updated instance
		   */ resetPage: function resetPage() {
	            if (this.page === undefined) {
	                return this;
	            }
	            return this.setPage(0);
	        },
	        /**
		   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
		   * @param  {object} hierarchicalFacet the hierarchicalFacet object
		   * @return {string} returns the hierarchicalFacet.separator or `>` as default
		   */ _getHierarchicalFacetSortBy: function _getHierarchicalFacetSortBy(hierarchicalFacet) {
	            return hierarchicalFacet.sortBy || [
	                'isRefined:desc',
	                'name:asc'
	            ];
	        },
	        /**
		   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
		   * @private
		   * @param  {object} hierarchicalFacet the hierarchicalFacet object
		   * @return {string} returns the hierarchicalFacet.separator or `>` as default
		   */ _getHierarchicalFacetSeparator: function _getHierarchicalFacetSeparator(hierarchicalFacet) {
	            return hierarchicalFacet.separator || ' > ';
	        },
	        /**
		   * Helper function to get the hierarchicalFacet prefix path or null
		   * @private
		   * @param  {object} hierarchicalFacet the hierarchicalFacet object
		   * @return {string} returns the hierarchicalFacet.rootPath or null as default
		   */ _getHierarchicalRootPath: function _getHierarchicalRootPath(hierarchicalFacet) {
	            return hierarchicalFacet.rootPath || null;
	        },
	        /**
		   * Helper function to check if we show the parent level of the hierarchicalFacet
		   * @private
		   * @param  {object} hierarchicalFacet the hierarchicalFacet object
		   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
		   */ _getHierarchicalShowParentLevel: function _getHierarchicalShowParentLevel(hierarchicalFacet) {
	            if (typeof hierarchicalFacet.showParentLevel === 'boolean') {
	                return hierarchicalFacet.showParentLevel;
	            }
	            return true;
	        },
	        /**
		   * Helper function to get the hierarchicalFacet by it's name
		   * @param  {string} hierarchicalFacetName the hierarchicalFacet name
		   * @return {object} a hierarchicalFacet
		   */ getHierarchicalFacetByName: function getHierarchicalFacetByName(hierarchicalFacetName) {
	            return find(this.hierarchicalFacets, function(f) {
	                return f.name === hierarchicalFacetName;
	            });
	        },
	        /**
		   * Get the current breadcrumb for a hierarchical facet, as an array
		   * @param  {string} facetName Hierarchical facet name
		   * @return {array.<string>} the path as an array of string
		   */ getHierarchicalFacetBreadcrumb: function getHierarchicalFacetBreadcrumb(facetName) {
	            if (!this.isHierarchicalFacet(facetName)) {
	                return [];
	            }
	            var refinement = this.getHierarchicalRefinement(facetName)[0];
	            if (!refinement) return [];
	            var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facetName));
	            var path = refinement.split(separator);
	            return path.map(function(part) {
	                return part.trim();
	            });
	        },
	        toString: function toString() {
	            return JSON.stringify(this, null, 2);
	        }
	    };
	    /**
		 * Callback used for clearRefinement method
		 * @callback SearchParameters.clearCallback
		 * @param {OperatorList|FacetList} value the value of the filter
		 * @param {string} key the current attribute name
		 * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
		 * depending on the type of facet
		 * @return {boolean} `true` if the element should be removed. `false` otherwise.
		 */ SearchParameters_1 = SearchParameters;
	    return SearchParameters_1;
	}

	var compact;
	var hasRequiredCompact;
	function requireCompact() {
	    if (hasRequiredCompact) return compact;
	    hasRequiredCompact = 1;
	    compact = function compact(array) {
	        if (!Array.isArray(array)) {
	            return [];
	        }
	        return array.filter(Boolean);
	    };
	    return compact;
	}

	var findIndex;
	var hasRequiredFindIndex;
	function requireFindIndex() {
	    if (hasRequiredFindIndex) return findIndex;
	    hasRequiredFindIndex = 1;
	    // @MAJOR can be replaced by native Array#findIndex when we change support
	    findIndex = function find(array, comparator) {
	        if (!Array.isArray(array)) {
	            return -1;
	        }
	        for(var i = 0; i < array.length; i++){
	            if (comparator(array[i])) {
	                return i;
	            }
	        }
	        return -1;
	    };
	    return findIndex;
	}

	var formatSort;
	var hasRequiredFormatSort;
	function requireFormatSort() {
	    if (hasRequiredFormatSort) return formatSort;
	    hasRequiredFormatSort = 1;
	    var find = requireFind();
	    /**
		 * Transform sort format from user friendly notation to lodash format
		 * @param {string[]} sortBy array of predicate of the form "attribute:order"
		 * @param {string[]} [defaults] array of predicate of the form "attribute:order"
		 * @return {array.<string[]>} array containing 2 elements : attributes, orders
		 */ formatSort = function formatSort(sortBy, defaults) {
	        var defaultInstructions = (defaults || []).map(function(sort) {
	            return sort.split(':');
	        });
	        return sortBy.reduce(function preparePredicate(out, sort) {
	            var sortInstruction = sort.split(':');
	            var matchingDefault = find(defaultInstructions, function(defaultInstruction) {
	                return defaultInstruction[0] === sortInstruction[0];
	            });
	            if (sortInstruction.length > 1 || !matchingDefault) {
	                out[0].push(sortInstruction[0]);
	                out[1].push(sortInstruction[1]);
	                return out;
	            }
	            out[0].push(matchingDefault[0]);
	            out[1].push(matchingDefault[1]);
	            return out;
	        }, [
	            [],
	            []
	        ]);
	    };
	    return formatSort;
	}

	var mergeNumericMax_1;
	var hasRequiredMergeNumericMax;
	function requireMergeNumericMax() {
	    if (hasRequiredMergeNumericMax) return mergeNumericMax_1;
	    hasRequiredMergeNumericMax = 1;
	    // NOTE: this behaves like lodash/defaults, but doesn't mutate the target
	    // it also preserve keys order and keep the highest numeric value
	    function mergeNumericMax() {
	        var sources = Array.prototype.slice.call(arguments);
	        return sources.reduceRight(function(acc, source) {
	            Object.keys(Object(source)).forEach(function(key) {
	                var accValue = typeof acc[key] === 'number' ? acc[key] : 0;
	                var sourceValue = source[key];
	                if (sourceValue === undefined) {
	                    return;
	                }
	                if (sourceValue >= accValue) {
	                    if (acc[key] !== undefined) {
	                        // remove if already added, so that we can add it in correct order
	                        delete acc[key];
	                    }
	                    acc[key] = sourceValue;
	                }
	            });
	            return acc;
	        }, {});
	    }
	    mergeNumericMax_1 = mergeNumericMax;
	    return mergeNumericMax_1;
	}

	var orderBy_1;
	var hasRequiredOrderBy;
	function requireOrderBy() {
	    if (hasRequiredOrderBy) return orderBy_1;
	    hasRequiredOrderBy = 1;
	    function compareAscending(value, other) {
	        if (value !== other) {
	            var valIsDefined = value !== undefined;
	            var valIsNull = value === null;
	            var othIsDefined = other !== undefined;
	            var othIsNull = other === null;
	            if (!othIsNull && value > other || valIsNull && othIsDefined || !valIsDefined) {
	                return 1;
	            }
	            if (!valIsNull && value < other || othIsNull && valIsDefined || !othIsDefined) {
	                return -1;
	            }
	        }
	        return 0;
	    }
	    /**
		 * @param {Array<object>} collection object with keys in attributes
		 * @param {Array<string>} iteratees attributes
		 * @param {Array<string>} orders asc | desc
		 * @return {Array<object>} sorted collection
		 */ function orderBy(collection, iteratees, orders) {
	        if (!Array.isArray(collection)) {
	            return [];
	        }
	        if (!Array.isArray(orders)) {
	            orders = [];
	        }
	        var result = collection.map(function(value, index) {
	            return {
	                criteria: iteratees.map(function(iteratee) {
	                    return value[iteratee];
	                }),
	                index: index,
	                value: value
	            };
	        });
	        result.sort(function comparer(object, other) {
	            var index = -1;
	            while(++index < object.criteria.length){
	                var res = compareAscending(object.criteria[index], other.criteria[index]);
	                if (res) {
	                    if (index >= orders.length) {
	                        return res;
	                    }
	                    if (orders[index] === 'desc') {
	                        return -res;
	                    }
	                    return res;
	                }
	            }
	            // This ensures a stable sort in V8 and other engines.
	            // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	            return object.index - other.index;
	        });
	        return result.map(function(res) {
	            return res.value;
	        });
	    }
	    orderBy_1 = orderBy;
	    return orderBy_1;
	}

	var generateHierarchicalTree_1;
	var hasRequiredGenerateHierarchicalTree;
	function requireGenerateHierarchicalTree() {
	    if (hasRequiredGenerateHierarchicalTree) return generateHierarchicalTree_1;
	    hasRequiredGenerateHierarchicalTree = 1;
	    generateHierarchicalTree_1 = generateTrees;
	    var fv = requireEscapeFacetValue();
	    var find = requireFind();
	    var prepareHierarchicalFacetSortBy = requireFormatSort();
	    var orderBy = requireOrderBy();
	    var escapeFacetValue = fv.escapeFacetValue;
	    var unescapeFacetValue = fv.unescapeFacetValue;
	    function generateTrees(state) {
	        return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
	            var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
	            var hierarchicalFacetRefinement = state.hierarchicalFacetsRefinements[hierarchicalFacet.name] && state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0] || '';
	            var hierarchicalSeparator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
	            var hierarchicalRootPath = state._getHierarchicalRootPath(hierarchicalFacet);
	            var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(hierarchicalFacet);
	            var sortBy = prepareHierarchicalFacetSortBy(state._getHierarchicalFacetSortBy(hierarchicalFacet));
	            var rootExhaustive = hierarchicalFacetResult.every(function(facetResult) {
	                return facetResult.exhaustive;
	            });
	            var generateTreeFn = generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, hierarchicalFacetRefinement);
	            var results = hierarchicalFacetResult;
	            if (hierarchicalRootPath) {
	                results = hierarchicalFacetResult.slice(hierarchicalRootPath.split(hierarchicalSeparator).length);
	            }
	            return results.reduce(generateTreeFn, {
	                name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
	                count: null,
	                isRefined: true,
	                path: null,
	                escapedValue: null,
	                exhaustive: rootExhaustive,
	                data: null
	            });
	        };
	    }
	    function generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, currentRefinement) {
	        return function generateTree(hierarchicalTree, hierarchicalFacetResult, currentHierarchicalLevel) {
	            var parent = hierarchicalTree;
	            if (currentHierarchicalLevel > 0) {
	                var level = 0;
	                parent = hierarchicalTree;
	                while(level < currentHierarchicalLevel){
	                    /**
		         * @type {object[]]} hierarchical data
		         */ var data = parent && Array.isArray(parent.data) ? parent.data : [];
	                    parent = find(data, function(subtree) {
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
	                var picked = Object.keys(hierarchicalFacetResult.data).map(function(facetValue) {
	                    return [
	                        facetValue,
	                        hierarchicalFacetResult.data[facetValue]
	                    ];
	                }).filter(function(tuple) {
	                    var facetValue = tuple[0];
	                    return onlyMatchingTree(facetValue, parent.path || hierarchicalRootPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel);
	                });
	                parent.data = orderBy(picked.map(function(tuple) {
	                    var facetValue = tuple[0];
	                    var facetCount = tuple[1];
	                    return format(facetCount, facetValue, hierarchicalSeparator, unescapeFacetValue(currentRefinement), hierarchicalFacetResult.exhaustive);
	                }), sortBy[0], sortBy[1]);
	            }
	            return hierarchicalTree;
	        };
	    }
	    // eslint-disable-next-line max-params
	    function onlyMatchingTree(facetValue, parentPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel) {
	        // we want the facetValue is a child of hierarchicalRootPath
	        if (hierarchicalRootPath && (facetValue.indexOf(hierarchicalRootPath) !== 0 || hierarchicalRootPath === facetValue)) {
	            return false;
	        }
	        // we always want root levels (only when there is no prefix path)
	        return !hierarchicalRootPath && facetValue.indexOf(hierarchicalSeparator) === -1 || // if there is a rootPath, being root level mean 1 level under rootPath
	        hierarchicalRootPath && facetValue.split(hierarchicalSeparator).length - hierarchicalRootPath.split(hierarchicalSeparator).length === 1 || // if current refinement is a root level and current facetValue is a root level,
	        // keep the facetValue
	        facetValue.indexOf(hierarchicalSeparator) === -1 && currentRefinement.indexOf(hierarchicalSeparator) === -1 || // currentRefinement is a child of the facet value
	        currentRefinement.indexOf(facetValue) === 0 || // facetValue is a child of the current parent, add it
	        facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 && (hierarchicalShowParentLevel || facetValue.indexOf(currentRefinement) === 0);
	    }
	    function format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, exhaustive) {
	        var parts = facetValue.split(hierarchicalSeparator);
	        return {
	            name: parts[parts.length - 1].trim(),
	            path: facetValue,
	            escapedValue: escapeFacetValue(facetValue),
	            count: facetCount,
	            isRefined: currentRefinement === facetValue || currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
	            exhaustive: exhaustive,
	            data: null
	        };
	    }
	    return generateHierarchicalTree_1;
	}

	var SearchResults_1;
	var hasRequiredSearchResults;
	function requireSearchResults() {
	    if (hasRequiredSearchResults) return SearchResults_1;
	    hasRequiredSearchResults = 1;
	    var compact = requireCompact();
	    var defaultsPure = requireDefaultsPure();
	    var fv = requireEscapeFacetValue();
	    var find = requireFind();
	    var findIndex = requireFindIndex();
	    var formatSort = requireFormatSort();
	    var mergeNumericMax = requireMergeNumericMax();
	    var orderBy = requireOrderBy();
	    var escapeFacetValue = fv.escapeFacetValue;
	    var unescapeFacetValue = fv.unescapeFacetValue;
	    var generateHierarchicalTree = requireGenerateHierarchicalTree();
	    /**
		 * @typedef SearchResults.Facet
		 * @type {object}
		 * @property {string} name name of the attribute in the record
		 * @property {object} data the faceting data: value, number of entries
		 * @property {object} stats undefined unless facet_stats is retrieved from algolia
		 */ /**
		 * @typedef SearchResults.HierarchicalFacet
		 * @type {object}
		 * @property {string} name name of the current value given the hierarchical level, trimmed.
		 * If root node, you get the facet name
		 * @property {number} count number of objects matching this hierarchical value
		 * @property {string} path the current hierarchical value full path
		 * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
		 * @property {HierarchicalFacet[]} data sub values for the current level
		 */ /**
		 * @typedef SearchResults.FacetValue
		 * @type {object}
		 * @property {string} name the facet value itself
		 * @property {number} count times this facet appears in the results
		 * @property {boolean} isRefined is the facet currently selected
		 * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
		 */ /**
		 * @typedef Refinement
		 * @type {object}
		 * @property {string} type the type of filter used:
		 * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
		 * @property {string} attributeName name of the attribute used for filtering
		 * @property {string} name the value of the filter
		 * @property {number} numericValue the value as a number. Only for numeric filters.
		 * @property {string} operator the operator used. Only for numeric filters.
		 * @property {number} count the number of computed hits for this filter. Only on facets.
		 * @property {boolean} exhaustive if the count is exhaustive
		 */ /**
		 * Turn an array of attributes in an object of attributes with their position in the array as value
		 * @param {string[]} attributes the list of attributes in the record
		 * @return {object} the list of attributes indexed by attribute name
		 */ function getIndices(attributes) {
	        var indices = {};
	        attributes.forEach(function(val, idx) {
	            indices[val] = idx;
	        });
	        return indices;
	    }
	    function assignFacetStats(dest, facetStats, key) {
	        if (facetStats && facetStats[key]) {
	            dest.stats = facetStats[key];
	        }
	    }
	    /**
		 * @typedef {Object} HierarchicalFacet
		 * @property {string} name
		 * @property {string[]} attributes
		 */ /**
		 * @param {HierarchicalFacet[]} hierarchicalFacets All hierarchical facets
		 * @param {string} hierarchicalAttributeName The name of the hierarchical attribute
		 * @return {HierarchicalFacet} The hierarchical facet matching the attribute name
		 */ function findMatchingHierarchicalFacetFromAttributeName(hierarchicalFacets, hierarchicalAttributeName) {
	        return find(hierarchicalFacets, function facetKeyMatchesAttribute(hierarchicalFacet) {
	            var facetNames = hierarchicalFacet.attributes || [];
	            return facetNames.indexOf(hierarchicalAttributeName) > -1;
	        });
	    }
	    /**
		 * Constructor for SearchResults
		 * @class
		 * @classdesc SearchResults contains the results of a query to Algolia using the
		 * {@link AlgoliaSearchHelper}.
		 * @param {SearchParameters} state state that led to the response
		 * @param {array.<object>} results the results from algolia client
		 * @param {object} options options to control results content
		 * @example <caption>SearchResults of the first query in
		 * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
		{
		   "hitsPerPage": 10,
		   "processingTimeMS": 2,
		   "facets": [
		      {
		         "name": "type",
		         "data": {
		            "HardGood": 6627,
		            "BlackTie": 550,
		            "Music": 665,
		            "Software": 131,
		            "Game": 456,
		            "Movie": 1571
		         },
		         "exhaustive": false
		      },
		      {
		         "exhaustive": false,
		         "data": {
		            "Free shipping": 5507
		         },
		         "name": "shipping"
		      }
		  ],
		   "hits": [
		      {
		         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
		         "_highlightResult": {
		            "shortDescription": {
		               "matchLevel": "none",
		               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
		               "matchedWords": []
		            },
		            "category": {
		               "matchLevel": "none",
		               "value": "Computer Security Software",
		               "matchedWords": []
		            },
		            "manufacturer": {
		               "matchedWords": [],
		               "value": "Webroot",
		               "matchLevel": "none"
		            },
		            "name": {
		               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
		               "matchedWords": [],
		               "matchLevel": "none"
		            }
		         },
		         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
		         "shipping": "Free shipping",
		         "bestSellingRank": 4,
		         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
		         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
		         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
		         "category": "Computer Security Software",
		         "salePrice_range": "1 - 50",
		         "objectID": "1688832",
		         "type": "Software",
		         "customerReviewCount": 5980,
		         "salePrice": 49.99,
		         "manufacturer": "Webroot"
		      },
		      ....
		  ],
		   "nbHits": 10000,
		   "disjunctiveFacets": [
		      {
		         "exhaustive": false,
		         "data": {
		            "5": 183,
		            "12": 112,
		            "7": 149,
		            ...
		         },
		         "name": "customerReviewCount",
		         "stats": {
		            "max": 7461,
		            "avg": 157.939,
		            "min": 1
		         }
		      },
		      {
		         "data": {
		            "Printer Ink": 142,
		            "Wireless Speakers": 60,
		            "Point & Shoot Cameras": 48,
		            ...
		         },
		         "name": "category",
		         "exhaustive": false
		      },
		      {
		         "exhaustive": false,
		         "data": {
		            "> 5000": 2,
		            "1 - 50": 6524,
		            "501 - 2000": 566,
		            "201 - 500": 1501,
		            "101 - 200": 1360,
		            "2001 - 5000": 47
		         },
		         "name": "salePrice_range"
		      },
		      {
		         "data": {
		            "Dynex™": 202,
		            "Insignia™": 230,
		            "PNY": 72,
		            ...
		         },
		         "name": "manufacturer",
		         "exhaustive": false
		      }
		  ],
		   "query": "",
		   "nbPages": 100,
		   "page": 0,
		   "index": "bestbuy"
		}
		 **/ function SearchResults(state, results, options) {
	        var mainSubResponse = results[0] || {};
	        this._rawResults = results;
	        // eslint-disable-next-line consistent-this
	        var self = this;
	        // https://www.algolia.com/doc/api-reference/api-methods/search/#response
	        Object.keys(mainSubResponse).forEach(function(key) {
	            self[key] = mainSubResponse[key];
	        });
	        // Make every key of the result options reachable from the instance
	        var opts = defaultsPure(options, {
	            persistHierarchicalRootCount: false
	        });
	        Object.keys(opts).forEach(function(key) {
	            self[key] = opts[key];
	        });
	        /**
		   * query used to generate the results
		   * @name query
		   * @member {string}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * The query as parsed by the engine given all the rules.
		   * @name parsedQuery
		   * @member {string}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * all the records that match the search parameters. Each record is
		   * augmented with a new attribute `_highlightResult`
		   * which is an object keyed by attribute and with the following properties:
		   * - `value` : the value of the facet highlighted (html)
		   * - `matchLevel`: `full`, `partial` or `none`, depending on how the query terms match
		   * @name hits
		   * @member {object[]}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * index where the results come from
		   * @name index
		   * @member {string}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * number of hits per page requested
		   * @name hitsPerPage
		   * @member {number}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * total number of hits of this query on the index
		   * @name nbHits
		   * @member {number}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * total number of pages with respect to the number of hits per page and the total number of hits
		   * @name nbPages
		   * @member {number}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * current page
		   * @name page
		   * @member {number}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * The position if the position was guessed by IP.
		   * @name aroundLatLng
		   * @member {string}
		   * @memberof SearchResults
		   * @instance
		   * @example "48.8637,2.3615",
		   */ /**
		   * The radius computed by Algolia.
		   * @name automaticRadius
		   * @member {string}
		   * @memberof SearchResults
		   * @instance
		   * @example "126792922",
		   */ /**
		   * String identifying the server used to serve this request.
		   *
		   * getRankingInfo needs to be set to `true` for this to be returned
		   *
		   * @name serverUsed
		   * @member {string}
		   * @memberof SearchResults
		   * @instance
		   * @example "c7-use-2.algolia.net",
		   */ /**
		   * Boolean that indicates if the computation of the counts did time out.
		   * @deprecated
		   * @name timeoutCounts
		   * @member {boolean}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * Boolean that indicates if the computation of the hits did time out.
		   * @deprecated
		   * @name timeoutHits
		   * @member {boolean}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * True if the counts of the facets is exhaustive
		   * @name exhaustiveFacetsCount
		   * @member {boolean}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * True if the number of hits is exhaustive
		   * @name exhaustiveNbHits
		   * @member {boolean}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
		   * @name userData
		   * @member {object[]}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * queryID is the unique identifier of the query used to generate the current search results.
		   * This value is only available if the `clickAnalytics` search parameter is set to `true`.
		   * @name queryID
		   * @member {string}
		   * @memberof SearchResults
		   * @instance
		   */ /**
		   * sum of the processing time of all the queries
		   * @name processingTimeMS
		   * @member {number}
		   * @memberof SearchResults
		   * @instance
		   */ this.processingTimeMS = results.reduce(function(sum, result) {
	            return result.processingTimeMS === undefined ? sum : sum + result.processingTimeMS;
	        }, 0);
	        /**
		   * disjunctive facets results
		   * @member {SearchResults.Facet[]}
		   */ this.disjunctiveFacets = [];
	        /**
		   * disjunctive facets results
		   * @member {SearchResults.HierarchicalFacet[]}
		   */ this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {
	            return [];
	        });
	        /**
		   * other facets results
		   * @member {SearchResults.Facet[]}
		   */ this.facets = [];
	        var disjunctiveFacets = state.getRefinedDisjunctiveFacets();
	        var facetsIndices = getIndices(state.facets);
	        var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
	        var nextDisjunctiveResult = 1;
	        // Since we send request only for disjunctive facets that have been refined,
	        // we get the facets information from the first, general, response.
	        var mainFacets = mainSubResponse.facets || {};
	        Object.keys(mainFacets).forEach(function(facetKey) {
	            var facetValueObject = mainFacets[facetKey];
	            var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(state.hierarchicalFacets, facetKey);
	            if (hierarchicalFacet) {
	                // Place the hierarchicalFacet data at the correct index depending on
	                // the attributes order that was defined at the helper initialization
	                var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
	                var idxAttributeName = findIndex(state.hierarchicalFacets, function(f) {
	                    return f.name === hierarchicalFacet.name;
	                });
	                self.hierarchicalFacets[idxAttributeName][facetIndex] = {
	                    attribute: facetKey,
	                    data: facetValueObject,
	                    exhaustive: mainSubResponse.exhaustiveFacetsCount
	                };
	            } else {
	                var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
	                var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
	                var position;
	                if (isFacetDisjunctive) {
	                    position = disjunctiveFacetsIndices[facetKey];
	                    self.disjunctiveFacets[position] = {
	                        name: facetKey,
	                        data: facetValueObject,
	                        exhaustive: mainSubResponse.exhaustiveFacetsCount
	                    };
	                    assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
	                }
	                if (isFacetConjunctive) {
	                    position = facetsIndices[facetKey];
	                    self.facets[position] = {
	                        name: facetKey,
	                        data: facetValueObject,
	                        exhaustive: mainSubResponse.exhaustiveFacetsCount
	                    };
	                    assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);
	                }
	            }
	        });
	        // Make sure we do not keep holes within the hierarchical facets
	        this.hierarchicalFacets = compact(this.hierarchicalFacets);
	        // aggregate the refined disjunctive facets
	        disjunctiveFacets.forEach(function(disjunctiveFacet) {
	            var result = results[nextDisjunctiveResult];
	            var facets = result && result.facets ? result.facets : {};
	            var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);
	            // There should be only item in facets.
	            Object.keys(facets).forEach(function(dfacet) {
	                var facetResults = facets[dfacet];
	                var position;
	                if (hierarchicalFacet) {
	                    position = findIndex(state.hierarchicalFacets, function(f) {
	                        return f.name === hierarchicalFacet.name;
	                    });
	                    var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
	                        return f.attribute === dfacet;
	                    });
	                    // previous refinements and no results so not able to find it
	                    if (attributeIndex === -1) {
	                        return;
	                    }
	                    self.hierarchicalFacets[position][attributeIndex].data = self.persistHierarchicalRootCount ? mergeNumericMax(self.hierarchicalFacets[position][attributeIndex].data, facetResults) : defaultsPure(facetResults, self.hierarchicalFacets[position][attributeIndex].data);
	                } else {
	                    position = disjunctiveFacetsIndices[dfacet];
	                    var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};
	                    self.disjunctiveFacets[position] = {
	                        name: dfacet,
	                        data: mergeNumericMax(dataFromMainRequest, facetResults),
	                        exhaustive: result.exhaustiveFacetsCount
	                    };
	                    assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);
	                    if (state.disjunctiveFacetsRefinements[dfacet]) {
	                        state.disjunctiveFacetsRefinements[dfacet].forEach(function(refinementValue) {
	                            // add the disjunctive refinements if it is no more retrieved
	                            if (!self.disjunctiveFacets[position].data[refinementValue] && state.disjunctiveFacetsRefinements[dfacet].indexOf(unescapeFacetValue(refinementValue)) > -1) {
	                                self.disjunctiveFacets[position].data[refinementValue] = 0;
	                            }
	                        });
	                    }
	                }
	            });
	            nextDisjunctiveResult++;
	        });
	        // if we have some parent level values for hierarchical facets, merge them
	        state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
	            var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
	            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
	            var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
	            // if we are already at a root refinement (or no refinement at all), there is no
	            // root level values request
	            if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) {
	                return;
	            }
	            results.slice(nextDisjunctiveResult).forEach(function(result) {
	                var facets = result && result.facets ? result.facets : {};
	                Object.keys(facets).forEach(function(dfacet) {
	                    var facetResults = facets[dfacet];
	                    var position = findIndex(state.hierarchicalFacets, function(f) {
	                        return f.name === hierarchicalFacet.name;
	                    });
	                    var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
	                        return f.attribute === dfacet;
	                    });
	                    // previous refinements and no results so not able to find it
	                    if (attributeIndex === -1) {
	                        return;
	                    }
	                    // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
	                    // then the disjunctive values will be `beers` (count: 100),
	                    // but we do not want to display
	                    //   | beers (100)
	                    //     > IPA (5)
	                    // We want
	                    //   | beers (5)
	                    //     > IPA (5)
	                    // @MAJOR: remove this legacy behaviour in next major version
	                    var defaultData = {};
	                    if (currentRefinement.length > 0 && !self.persistHierarchicalRootCount) {
	                        var root = currentRefinement[0].split(separator)[0];
	                        defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];
	                    }
	                    self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(defaultData, facetResults, self.hierarchicalFacets[position][attributeIndex].data);
	                });
	                nextDisjunctiveResult++;
	            });
	        });
	        // add the excludes
	        Object.keys(state.facetsExcludes).forEach(function(facetName) {
	            var excludes = state.facetsExcludes[facetName];
	            var position = facetsIndices[facetName];
	            self.facets[position] = {
	                name: facetName,
	                data: mainFacets[facetName],
	                exhaustive: mainSubResponse.exhaustiveFacetsCount
	            };
	            excludes.forEach(function(facetValue) {
	                self.facets[position] = self.facets[position] || {
	                    name: facetName
	                };
	                self.facets[position].data = self.facets[position].data || {};
	                self.facets[position].data[facetValue] = 0;
	            });
	        });
	        /**
		   * @type {Array}
		   */ this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree(state));
	        /**
		   * @type {Array}
		   */ this.facets = compact(this.facets);
	        /**
		   * @type {Array}
		   */ this.disjunctiveFacets = compact(this.disjunctiveFacets);
	        this._state = state;
	    }
	    /**
		 * Get a facet object with its name
		 * @deprecated
		 * @param {string} name name of the faceted attribute
		 * @return {SearchResults.Facet} the facet object
		 */ SearchResults.prototype.getFacetByName = function(name) {
	        function predicate(facet) {
	            return facet.name === name;
	        }
	        return find(this.facets, predicate) || find(this.disjunctiveFacets, predicate) || find(this.hierarchicalFacets, predicate);
	    };
	    /**
		 * Get the facet values of a specified attribute from a SearchResults object.
		 * @private
		 * @param {SearchResults} results the search results to search in
		 * @param {string} attribute name of the faceted attribute to search for
		 * @return {array|object} facet values. For the hierarchical facets it is an object.
		 */ function extractNormalizedFacetValues(results, attribute) {
	        function predicate(facet) {
	            return facet.name === attribute;
	        }
	        if (results._state.isConjunctiveFacet(attribute)) {
	            var facet = find(results.facets, predicate);
	            if (!facet) return [];
	            return Object.keys(facet.data).map(function(name) {
	                var value = escapeFacetValue(name);
	                return {
	                    name: name,
	                    escapedValue: value,
	                    count: facet.data[name],
	                    isRefined: results._state.isFacetRefined(attribute, value),
	                    isExcluded: results._state.isExcludeRefined(attribute, name)
	                };
	            });
	        } else if (results._state.isDisjunctiveFacet(attribute)) {
	            var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
	            if (!disjunctiveFacet) return [];
	            return Object.keys(disjunctiveFacet.data).map(function(name) {
	                var value = escapeFacetValue(name);
	                return {
	                    name: name,
	                    escapedValue: value,
	                    count: disjunctiveFacet.data[name],
	                    isRefined: results._state.isDisjunctiveFacetRefined(attribute, value)
	                };
	            });
	        } else if (results._state.isHierarchicalFacet(attribute)) {
	            var hierarchicalFacetValues = find(results.hierarchicalFacets, predicate);
	            if (!hierarchicalFacetValues) return hierarchicalFacetValues;
	            var hierarchicalFacet = results._state.getHierarchicalFacetByName(attribute);
	            var separator = results._state._getHierarchicalFacetSeparator(hierarchicalFacet);
	            var currentRefinement = unescapeFacetValue(results._state.getHierarchicalRefinement(attribute)[0] || '');
	            if (currentRefinement.indexOf(hierarchicalFacet.rootPath) === 0) {
	                currentRefinement = currentRefinement.replace(hierarchicalFacet.rootPath + separator, '');
	            }
	            var currentRefinementSplit = currentRefinement.split(separator);
	            currentRefinementSplit.unshift(attribute);
	            setIsRefined(hierarchicalFacetValues, currentRefinementSplit, 0);
	            return hierarchicalFacetValues;
	        }
	        return undefined;
	    }
	    /**
		 * Set the isRefined of a hierarchical facet result based on the current state.
		 * @param {SearchResults.HierarchicalFacet} item Hierarchical facet to fix
		 * @param {string[]} currentRefinement array of parts of the current hierarchical refinement
		 * @param {number} depth recursion depth in the currentRefinement
		 * @return {undefined} function mutates the item
		 */ function setIsRefined(item, currentRefinement, depth) {
	        item.isRefined = item.name === (currentRefinement[depth] && currentRefinement[depth].trim());
	        if (item.data) {
	            item.data.forEach(function(child) {
	                setIsRefined(child, currentRefinement, depth + 1);
	            });
	        }
	    }
	    /**
		 * Sort nodes of a hierarchical or disjunctive facet results
		 * @private
		 * @param {function} sortFn sort function to apply
		 * @param {HierarchicalFacet|Array} node node upon which we want to apply the sort
		 * @param {string[]} names attribute names
		 * @param {number} [level=0] current index in the names array
		 * @return {HierarchicalFacet|Array} sorted node
		 */ function recSort(sortFn, node, names, level) {
	        level = level || 0;
	        if (Array.isArray(node)) {
	            return sortFn(node, names[level]);
	        }
	        if (!node.data || node.data.length === 0) {
	            return node;
	        }
	        var children = node.data.map(function(childNode) {
	            return recSort(sortFn, childNode, names, level + 1);
	        });
	        var sortedChildren = sortFn(children, names[level]);
	        var newNode = defaultsPure({
	            data: sortedChildren
	        }, node);
	        return newNode;
	    }
	    SearchResults.DEFAULT_SORT = [
	        'isRefined:desc',
	        'count:desc',
	        'name:asc'
	    ];
	    function vanillaSortFn(order, data) {
	        return data.sort(order);
	    }
	    /**
		 * @typedef FacetOrdering
		 * @type {Object}
		 * @property {string[]} [order]
		 * @property {'count' | 'alpha' | 'hidden'} [sortRemainingBy]
		 */ /**
		 * Sorts facet arrays via their facet ordering
		 * @param {Array} facetValues the values
		 * @param {FacetOrdering} facetOrdering the ordering
		 * @returns {Array} the sorted facet values
		 */ function sortViaFacetOrdering(facetValues, facetOrdering) {
	        var orderedFacets = [];
	        var remainingFacets = [];
	        var hide = facetOrdering.hide || [];
	        var order = facetOrdering.order || [];
	        /**
		   * an object with the keys being the values in order, the values their index:
		   * ['one', 'two'] -> { one: 0, two: 1 }
		   */ var reverseOrder = order.reduce(function(acc, name, i) {
	            acc[name] = i;
	            return acc;
	        }, {});
	        facetValues.forEach(function(item) {
	            // hierarchical facets get sorted using their raw name
	            var name = item.path || item.name;
	            var hidden = hide.indexOf(name) > -1;
	            if (!hidden && reverseOrder[name] !== undefined) {
	                orderedFacets[reverseOrder[name]] = item;
	            } else if (!hidden) {
	                remainingFacets.push(item);
	            }
	        });
	        orderedFacets = orderedFacets.filter(function(facet) {
	            return facet;
	        });
	        var sortRemainingBy = facetOrdering.sortRemainingBy;
	        var ordering;
	        if (sortRemainingBy === 'hidden') {
	            return orderedFacets;
	        } else if (sortRemainingBy === 'alpha') {
	            ordering = [
	                [
	                    'path',
	                    'name'
	                ],
	                [
	                    'asc',
	                    'asc'
	                ]
	            ];
	        } else {
	            ordering = [
	                [
	                    'count'
	                ],
	                [
	                    'desc'
	                ]
	            ];
	        }
	        return orderedFacets.concat(orderBy(remainingFacets, ordering[0], ordering[1]));
	    }
	    /**
		 * @param {SearchResults} results the search results class
		 * @param {string} attribute the attribute to retrieve ordering of
		 * @returns {FacetOrdering | undefined} the facet ordering
		 */ function getFacetOrdering(results, attribute) {
	        return results.renderingContent && results.renderingContent.facetOrdering && results.renderingContent.facetOrdering.values && results.renderingContent.facetOrdering.values[attribute];
	    }
	    /**
		 * Get a the list of values for a given facet attribute. Those values are sorted
		 * refinement first, descending count (bigger value on top), and name ascending
		 * (alphabetical order). The sort formula can overridden using either string based
		 * predicates or a function.
		 *
		 * This method will return all the values returned by the Algolia engine plus all
		 * the values already refined. This means that it can happen that the
		 * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
		 * might not be respected if you have facet values that are already refined.
		 * @param {string} attribute attribute name
		 * @param {object} opts configuration options.
		 * @param {boolean} [opts.facetOrdering]
		 * Force the use of facetOrdering from the result if a sortBy is present. If
		 * sortBy isn't present, facetOrdering will be used automatically.
		 * @param {Array.<string> | function} opts.sortBy
		 * When using strings, it consists of
		 * the name of the [FacetValue](#SearchResults.FacetValue) or the
		 * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
		 * order (`asc` or `desc`). For example to order the value by count, the
		 * argument would be `['count:asc']`.
		 *
		 * If only the attribute name is specified, the ordering defaults to the one
		 * specified in the default value for this attribute.
		 *
		 * When not specified, the order is
		 * ascending.  This parameter can also be a function which takes two facet
		 * values and should return a number, 0 if equal, 1 if the first argument is
		 * bigger or -1 otherwise.
		 *
		 * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
		 * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of
		 * the attribute requested (hierarchical, disjunctive or conjunctive)
		 * @example
		 * helper.on('result', function(event){
		 *   //get values ordered only by name ascending using the string predicate
		 *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
		 *   //get values  ordered only by count ascending using a function
		 *   event.results.getFacetValues('city', {
		 *     // this is equivalent to ['count:asc']
		 *     sortBy: function(a, b) {
		 *       if (a.count === b.count) return 0;
		 *       if (a.count > b.count)   return 1;
		 *       if (b.count > a.count)   return -1;
		 *     }
		 *   });
		 * });
		 */ SearchResults.prototype.getFacetValues = function(attribute, opts) {
	        var facetValues = extractNormalizedFacetValues(this, attribute);
	        if (!facetValues) {
	            return undefined;
	        }
	        var options = defaultsPure(opts, {
	            sortBy: SearchResults.DEFAULT_SORT,
	            // if no sortBy is given, attempt to sort based on facetOrdering
	            // if it is given, we still allow to sort via facet ordering first
	            facetOrdering: !(opts && opts.sortBy)
	        });
	        // eslint-disable-next-line consistent-this
	        var results = this;
	        var attributes;
	        if (Array.isArray(facetValues)) {
	            attributes = [
	                attribute
	            ];
	        } else {
	            var config = results._state.getHierarchicalFacetByName(facetValues.name);
	            attributes = config.attributes;
	        }
	        return recSort(function(data, facetName) {
	            var facetOrdering = getFacetOrdering(results, facetName);
	            if (options.facetOrdering) {
	                if (facetOrdering) {
	                    return sortViaFacetOrdering(data, facetOrdering);
	                }
	            }
	            if (Array.isArray(options.sortBy)) {
	                var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
	                var items = orderBy(data, order[0], order[1]);
	                var hide = facetOrdering && facetOrdering.hide ? facetOrdering.hide : [];
	                if (hide.length > 0) {
	                    var visible = [];
	                    items.forEach(function(item) {
	                        // hierarchical facets get sorted using their raw name
	                        var name = item.path || item.name;
	                        if (hide.indexOf(name) === -1) {
	                            visible.push(item);
	                        }
	                    });
	                    return visible;
	                }
	                return items;
	            } else if (typeof options.sortBy === 'function') {
	                return vanillaSortFn(options.sortBy, data);
	            }
	            throw new Error('options.sortBy is optional but if defined it must be ' + 'either an array of string (predicates) or a sorting function');
	        }, facetValues, attributes);
	    };
	    /**
		 * Returns the facet stats if attribute is defined and the facet contains some.
		 * Otherwise returns undefined.
		 * @param {string} attribute name of the faceted attribute
		 * @return {object} The stats of the facet
		 */ SearchResults.prototype.getFacetStats = function(attribute) {
	        if (this._state.isConjunctiveFacet(attribute)) {
	            return getFacetStatsIfAvailable(this.facets, attribute);
	        } else if (this._state.isDisjunctiveFacet(attribute)) {
	            return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
	        }
	        return undefined;
	    };
	    /**
		 * @typedef {Object} FacetListItem
		 * @property {string} name
		 */ /**
		 * @param {FacetListItem[]} facetList (has more items, but enough for here)
		 * @param {string} facetName The attribute to look for
		 * @return {object|undefined} The stats of the facet
		 */ function getFacetStatsIfAvailable(facetList, facetName) {
	        var data = find(facetList, function(facet) {
	            return facet.name === facetName;
	        });
	        return data && data.stats;
	    }
	    /**
		 * Returns all refinements for all filters + tags. It also provides
		 * additional information: count and exhaustiveness for each filter.
		 *
		 * See the [refinement type](#Refinement) for an exhaustive view of the available
		 * data.
		 *
		 * Note that for a numeric refinement, results are grouped per operator, this
		 * means that it will return responses for operators which are empty.
		 *
		 * @return {Array.<Refinement>} all the refinements
		 */ SearchResults.prototype.getRefinements = function() {
	        var state = this._state;
	        // eslint-disable-next-line consistent-this
	        var results = this;
	        var res = [];
	        Object.keys(state.facetsRefinements).forEach(function(attributeName) {
	            state.facetsRefinements[attributeName].forEach(function(name) {
	                res.push(getRefinement(state, 'facet', attributeName, name, results.facets));
	            });
	        });
	        Object.keys(state.facetsExcludes).forEach(function(attributeName) {
	            state.facetsExcludes[attributeName].forEach(function(name) {
	                res.push(getRefinement(state, 'exclude', attributeName, name, results.facets));
	            });
	        });
	        Object.keys(state.disjunctiveFacetsRefinements).forEach(function(attributeName) {
	            state.disjunctiveFacetsRefinements[attributeName].forEach(function(name) {
	                res.push(getRefinement(state, 'disjunctive', attributeName, name, results.disjunctiveFacets));
	            });
	        });
	        Object.keys(state.hierarchicalFacetsRefinements).forEach(function(attributeName) {
	            state.hierarchicalFacetsRefinements[attributeName].forEach(function(name) {
	                res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
	            });
	        });
	        Object.keys(state.numericRefinements).forEach(function(attributeName) {
	            var operators = state.numericRefinements[attributeName];
	            Object.keys(operators).forEach(function(operator) {
	                operators[operator].forEach(function(value) {
	                    res.push({
	                        type: 'numeric',
	                        attributeName: attributeName,
	                        name: value,
	                        numericValue: value,
	                        operator: operator
	                    });
	                });
	            });
	        });
	        state.tagRefinements.forEach(function(name) {
	            res.push({
	                type: 'tag',
	                attributeName: '_tags',
	                name: name
	            });
	        });
	        return res;
	    };
	    /**
		 * @typedef {Object} Facet
		 * @property {string} name
		 * @property {Object} data
		 * @property {boolean} exhaustive
		 */ /**
		 * @param {SearchParameters} state the current state
		 * @param {string} type the type of the refinement
		 * @param {string} attributeName The attribute of the facet
		 * @param {*} name The name of the facet
		 * @param {Facet[]} resultsFacets facets from the results
		 * @return {Refinement} the refinement
		 */ function getRefinement(state, type, attributeName, name, resultsFacets) {
	        var facet = find(resultsFacets, function(f) {
	            return f.name === attributeName;
	        });
	        var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
	        var exhaustive = facet && facet.exhaustive || false;
	        return {
	            type: type,
	            attributeName: attributeName,
	            name: name,
	            count: count,
	            exhaustive: exhaustive
	        };
	    }
	    /**
		 * @param {SearchParameters} state the current state
		 * @param {string} attributeName the attribute of the hierarchical facet
		 * @param {string} name the name of the facet
		 * @param {Facet[]} resultsFacets facets from the results
		 * @return {HierarchicalFacet} the hierarchical facet
		 */ function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
	        var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
	        var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
	        var split = name.split(separator);
	        var rootFacet = find(resultsFacets, function(facet) {
	            return facet.name === attributeName;
	        });
	        var facet = split.reduce(function(intermediateFacet, part) {
	            var newFacet = intermediateFacet && find(intermediateFacet.data, function(f) {
	                return f.name === part;
	            });
	            return newFacet !== undefined ? newFacet : intermediateFacet;
	        }, rootFacet);
	        var count = facet && facet.count || 0;
	        var exhaustive = facet && facet.exhaustive || false;
	        var path = facet && facet.path || '';
	        return {
	            type: 'hierarchical',
	            attributeName: attributeName,
	            name: path,
	            count: count,
	            exhaustive: exhaustive
	        };
	    }
	    SearchResults_1 = SearchResults;
	    return SearchResults_1;
	}

	var flat;
	var hasRequiredFlat;
	function requireFlat() {
	    if (hasRequiredFlat) return flat;
	    hasRequiredFlat = 1;
	    // @MAJOR: remove this function and use Array.prototype.flat
	    flat = function flat(arr) {
	        return arr.reduce(function(acc, val) {
	            return acc.concat(val);
	        }, []);
	    };
	    return flat;
	}

	var sortAndMergeRecommendations_1;
	var hasRequiredSortAndMergeRecommendations;
	function requireSortAndMergeRecommendations() {
	    if (hasRequiredSortAndMergeRecommendations) return sortAndMergeRecommendations_1;
	    hasRequiredSortAndMergeRecommendations = 1;
	    var find = requireFind();
	    var flat = requireFlat();
	    function getAverageIndices(indexTracker, nrOfObjs) {
	        var avgIndices = [];
	        Object.keys(indexTracker).forEach(function(key) {
	            if (indexTracker[key].count < 2) {
	                indexTracker[key].indexSum += 100;
	            }
	            avgIndices.push({
	                objectID: key,
	                avgOfIndices: indexTracker[key].indexSum / nrOfObjs
	            });
	        });
	        return avgIndices.sort(function(a, b) {
	            return a.avgOfIndices > b.avgOfIndices ? 1 : -1;
	        });
	    }
	    function sortAndMergeRecommendations(objectIDs, results) {
	        var indexTracker = {};
	        results.forEach(function(hits) {
	            hits.forEach(function(hit, index) {
	                if (objectIDs.includes(hit.objectID)) return;
	                if (!indexTracker[hit.objectID]) {
	                    indexTracker[hit.objectID] = {
	                        indexSum: index,
	                        count: 1
	                    };
	                } else {
	                    indexTracker[hit.objectID] = {
	                        indexSum: indexTracker[hit.objectID].indexSum + index,
	                        count: indexTracker[hit.objectID].count + 1
	                    };
	                }
	            });
	        });
	        var sortedAverageIndices = getAverageIndices(indexTracker, results.length);
	        var finalOrder = sortedAverageIndices.reduce(function(orderedHits, avgIndexRef) {
	            var result = find(flat(results), function(hit) {
	                return hit.objectID === avgIndexRef.objectID;
	            });
	            return result ? orderedHits.concat(result) : orderedHits;
	        }, []);
	        return finalOrder;
	    }
	    sortAndMergeRecommendations_1 = sortAndMergeRecommendations;
	    return sortAndMergeRecommendations_1;
	}

	var version;
	var hasRequiredVersion;
	function requireVersion() {
	    if (hasRequiredVersion) return version;
	    hasRequiredVersion = 1;
	    version = '3.28.2';
	    return version;
	}

	var algoliasearch_helper;
	var hasRequiredAlgoliasearch_helper;
	function requireAlgoliasearch_helper() {
	    if (hasRequiredAlgoliasearch_helper) return algoliasearch_helper;
	    hasRequiredAlgoliasearch_helper = 1;
	    var EventEmitter = requireEvents();
	    var DerivedHelper = requireDerivedHelper();
	    var escapeFacetValue = requireEscapeFacetValue().escapeFacetValue;
	    var inherits = requireInherits();
	    var merge = requireMerge();
	    var objectHasKeys = requireObjectHasKeys();
	    var omit = requireOmit();
	    var RecommendParameters = requireRecommendParameters();
	    var RecommendResults = requireRecommendResults();
	    var requestBuilder = requireRequestBuilder();
	    var SearchParameters = requireSearchParameters();
	    var SearchResults = requireSearchResults();
	    var sortAndMergeRecommendations = requireSortAndMergeRecommendations();
	    var version = requireVersion();
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
		 */ /**
		 * Event triggered when a main search is sent to Algolia
		 * @event AlgoliaSearchHelper#event:search
		 * @property {object} event
		 * @property {SearchParameters} event.state the parameters used for this search
		 * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
		 * @example
		 * helper.on('search', function(event) {
		 *   console.log('Search sent');
		 * });
		 */ /**
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
		 */ /**
		 * Event triggered when a search using `searchOnce` is sent to Algolia
		 * @event AlgoliaSearchHelper#event:searchOnce
		 * @property {object} event
		 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
		 * @example
		 * helper.on('searchOnce', function(event) {
		 *   console.log('searchOnce sent');
		 * });
		 */ /**
		 * Event triggered when the results are retrieved from Algolia
		 * @event AlgoliaSearchHelper#event:result
		 * @property {object} event
		 * @property {SearchResults} event.results the results received from Algolia
		 * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
		 * @example
		 * helper.on('result', function(event) {
		 *   console.log('Search results received');
		 * });
		 */ /**
		 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
		 * used, the error can be caught using this event.
		 * @event AlgoliaSearchHelper#event:error
		 * @property {object} event
		 * @property {Error} event.error the error returned by the Algolia.
		 * @example
		 * helper.on('error', function(event) {
		 *   console.log('Houston we got a problem.');
		 * });
		 */ /**
		 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
		 * @event AlgoliaSearchHelper#event:searchQueueEmpty
		 * @example
		 * helper.on('searchQueueEmpty', function() {
		 *   console.log('No more search pending');
		 *   // This is received before the result event if we're not expecting new results
		 * });
		 *
		 * helper.search();
		 */ /**
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
		 */ function AlgoliaSearchHelper(client, index, options, searchResultsOptions) {
	        if (typeof client.addAlgoliaAgent === 'function') {
	            client.addAlgoliaAgent('JS Helper (' + version + ')');
	        }
	        this.setClient(client);
	        var opts = options || {};
	        opts.index = index;
	        this.state = SearchParameters.make(opts);
	        this.recommendState = new RecommendParameters({
	            params: opts.recommendState
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
		 */ AlgoliaSearchHelper.prototype.search = function() {
	        this._search({
	            onlyWithDerivedHelpers: false
	        });
	        return this;
	    };
	    AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function() {
	        this._search({
	            onlyWithDerivedHelpers: true
	        });
	        return this;
	    };
	    AlgoliaSearchHelper.prototype.searchWithComposition = function() {
	        this._runComposition({
	            onlyWithDerivedHelpers: true
	        });
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
		 */ AlgoliaSearchHelper.prototype.recommend = function() {
	        this._recommend();
	        return this;
	    };
	    /**
		 * Gets the search query parameters that would be sent to the Algolia Client
		 * for the hits
		 * @return {object} Query Parameters
		 */ AlgoliaSearchHelper.prototype.getQuery = function() {
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
		 */ AlgoliaSearchHelper.prototype.searchOnce = function(options, cb) {
	        var tempState = !options ? this.state : this.state.setQueryParameters(options);
	        var queries = requestBuilder._getQueries(tempState.index, tempState);
	        // eslint-disable-next-line consistent-this
	        var self = this;
	        this._currentNbQueries++;
	        this.emit('searchOnce', {
	            state: tempState
	        });
	        if (cb) {
	            this.client.search(queries).then(function(content) {
	                self._currentNbQueries--;
	                if (self._currentNbQueries === 0) {
	                    self.emit('searchQueueEmpty');
	                }
	                cb(null, new SearchResults(tempState, content.results), tempState);
	            }).catch(function(err) {
	                self._currentNbQueries--;
	                if (self._currentNbQueries === 0) {
	                    self.emit('searchQueueEmpty');
	                }
	                cb(err, null, tempState);
	            });
	            return undefined;
	        }
	        return this.client.search(queries).then(function(content) {
	            self._currentNbQueries--;
	            if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
	            return {
	                content: new SearchResults(tempState, content.results),
	                state: tempState,
	                _originalResponse: content
	            };
	        }, function(e) {
	            self._currentNbQueries--;
	            if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
	            throw e;
	        });
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
		 */ AlgoliaSearchHelper.prototype.findAnswers = function(options) {
	        // eslint-disable-next-line no-console
	        console.warn('[algoliasearch-helper] answers is no longer supported');
	        var state = this.state;
	        var derivedHelper = this.derivedHelpers[0];
	        if (!derivedHelper) {
	            return Promise.resolve([]);
	        }
	        var derivedState = derivedHelper.getModifiedState(state);
	        var data = merge({
	            attributesForPrediction: options.attributesForPrediction,
	            nbHits: options.nbHits
	        }, {
	            params: omit(requestBuilder._getHitsSearchParams(derivedState), [
	                'attributesToSnippet',
	                'hitsPerPage',
	                'restrictSearchableAttributes',
	                'snippetEllipsisText'
	            ])
	        });
	        var errorMessage = 'search for answers was called, but this client does not have a function client.initIndex(index).findAnswers';
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
		 */ /**
		 * Structure of the data resolved by the
		 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
		 * promise.
		 * @typedef FacetSearchResult
		 * @type {object}
		 * @property {FacetSearchHit} facetHits the results for this search for facet values
		 * @property {number} processingTimeMS time taken by the query inside the engine
		 */ /**
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
		 */ AlgoliaSearchHelper.prototype.searchForFacetValues = function(facet, query, maxFacetHits, userState) {
	        var clientHasSFFV = typeof this.client.searchForFacetValues === 'function' && // v5 has a wrong sffv signature
	        typeof this.client.searchForFacets !== 'function';
	        var clientHasInitIndex = typeof this.client.initIndex === 'function';
	        if (!clientHasSFFV && !clientHasInitIndex && typeof this.client.search !== 'function') {
	            throw new Error('search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues');
	        }
	        var state = this.state.setQueryParameters(userState || {});
	        var isDisjunctive = state.isDisjunctiveFacet(facet);
	        var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);
	        this._currentNbQueries++;
	        // eslint-disable-next-line consistent-this
	        var self = this;
	        var searchForFacetValuesPromise;
	        // newer algoliasearch ^3.27.1 - ~4.0.0
	        if (clientHasSFFV) {
	            searchForFacetValuesPromise = this.client.searchForFacetValues([
	                {
	                    indexName: state.index,
	                    params: algoliaQuery
	                }
	            ]);
	        // algoliasearch < 3.27.1
	        } else if (clientHasInitIndex) {
	            searchForFacetValuesPromise = this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);
	        // algoliasearch ~5.0.0
	        } else {
	            // @MAJOR only use client.search
	            delete algoliaQuery.facetName;
	            searchForFacetValuesPromise = this.client.search([
	                {
	                    type: 'facet',
	                    facet: facet,
	                    indexName: state.index,
	                    params: algoliaQuery
	                }
	            ]).then(function processResponse(response) {
	                return response.results[0];
	            });
	        }
	        this.emit('searchForFacetValues', {
	            state: state,
	            facet: facet,
	            query: query
	        });
	        var hide = this.lastResults && this.lastResults.index === state.index && this.lastResults.renderingContent && this.lastResults.renderingContent.facetOrdering && this.lastResults.renderingContent.facetOrdering.values && this.lastResults.renderingContent.facetOrdering.values[facet] && this.lastResults.renderingContent.facetOrdering.values[facet].hide || [];
	        return searchForFacetValuesPromise.then(function addIsRefined(content) {
	            self._currentNbQueries--;
	            if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
	            content = Array.isArray(content) ? content[0] : content;
	            content.facetHits = content.facetHits.reduce(function(acc, f) {
	                if (hide.indexOf(f.value) > -1) {
	                    return acc;
	                }
	                f.escapedValue = escapeFacetValue(f.value);
	                f.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f.escapedValue) : state.isFacetRefined(facet, f.escapedValue);
	                acc.push(f);
	                return acc;
	            }, []);
	            return content;
	        }, function(e) {
	            self._currentNbQueries--;
	            if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
	            throw e;
	        });
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
		 */ AlgoliaSearchHelper.prototype.searchForCompositionFacetValues = function(facet, query, maxFacetHits, userState) {
	        if (typeof this.client.searchForFacetValues !== 'function') {
	            throw new Error('search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues');
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
	                    searchQuery: requestBuilder._getCompositionHitsSearchParams(state)
	                }
	            }
	        });
	        this.emit('searchForFacetValues', {
	            state: state,
	            facet: facet,
	            query: query
	        });
	        return searchForFacetValuesPromise.then(function addIsRefined(content) {
	            self._currentNbQueries--;
	            if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
	            content = content.results[0];
	            content.facetHits.forEach(function(f) {
	                f.escapedValue = escapeFacetValue(f.value);
	                f.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f.escapedValue) : state.isFacetRefined(facet, f.escapedValue);
	            });
	            return content;
	        }, function(e) {
	            self._currentNbQueries--;
	            if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
	            throw e;
	        });
	    };
	    /**
		 * Sets the text query used for the search.
		 *
		 * This method resets the current page to 0.
		 * @param  {string} q the user query
		 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
		 * @fires change
		 * @chainable
		 */ AlgoliaSearchHelper.prototype.setQuery = function(q) {
	        this._change({
	            state: this.state.resetPage().setQuery(q),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.clearRefinements = function(name) {
	        this._change({
	            state: this.state.resetPage().clearRefinements(name),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.clearTags = function() {
	        this._change({
	            state: this.state.resetPage().clearTags(),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function(facet, value) {
	        this._change({
	            state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
	            isPageReset: true
	        });
	        return this;
	    };
	    // eslint-disable-next-line valid-jsdoc
	    /**
		 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
		 */ AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function() {
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
		 */ AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function(facet, path) {
	        this._change({
	            state: this.state.resetPage().addHierarchicalFacetRefinement(facet, path),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.addNumericRefinement = function(attribute, operator, value) {
	        this._change({
	            state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.addFacetRefinement = function(facet, value) {
	        this._change({
	            state: this.state.resetPage().addFacetRefinement(facet, value),
	            isPageReset: true
	        });
	        return this;
	    };
	    // eslint-disable-next-line valid-jsdoc
	    /**
		 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
		 */ AlgoliaSearchHelper.prototype.addRefine = function() {
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
		 */ AlgoliaSearchHelper.prototype.addFacetExclusion = function(facet, value) {
	        this._change({
	            state: this.state.resetPage().addExcludeRefinement(facet, value),
	            isPageReset: true
	        });
	        return this;
	    };
	    // eslint-disable-next-line valid-jsdoc
	    /**
		 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
		 */ AlgoliaSearchHelper.prototype.addExclude = function() {
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
		 */ AlgoliaSearchHelper.prototype.addTag = function(tag) {
	        this._change({
	            state: this.state.resetPage().addTagRefinement(tag),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.addFrequentlyBoughtTogether = function(params) {
	        this._recommendChange({
	            state: this.recommendState.addFrequentlyBoughtTogether(params)
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
		 */ AlgoliaSearchHelper.prototype.addRelatedProducts = function(params) {
	        this._recommendChange({
	            state: this.recommendState.addRelatedProducts(params)
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
		 */ AlgoliaSearchHelper.prototype.addTrendingItems = function(params) {
	        this._recommendChange({
	            state: this.recommendState.addTrendingItems(params)
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
		 */ AlgoliaSearchHelper.prototype.addTrendingFacets = function(params) {
	        this._recommendChange({
	            state: this.recommendState.addTrendingFacets(params)
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
		 */ AlgoliaSearchHelper.prototype.addLookingSimilar = function(params) {
	        this._recommendChange({
	            state: this.recommendState.addLookingSimilar(params)
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
		 */ AlgoliaSearchHelper.prototype.removeNumericRefinement = function(attribute, operator, value) {
	        this._change({
	            state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function(facet, value) {
	        this._change({
	            state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
	            isPageReset: true
	        });
	        return this;
	    };
	    // eslint-disable-next-line valid-jsdoc
	    /**
		 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
		 */ AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function() {
	        return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
	    };
	    /**
		 * Removes the refinement set on a hierarchical facet.
		 * @param {string} facet the facet name
		 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
		 * @throws Error if the facet is not defined or if the facet is not refined
		 * @fires change
		 * @chainable
		 */ AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function(facet) {
	        this._change({
	            state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.removeFacetRefinement = function(facet, value) {
	        this._change({
	            state: this.state.resetPage().removeFacetRefinement(facet, value),
	            isPageReset: true
	        });
	        return this;
	    };
	    // eslint-disable-next-line valid-jsdoc
	    /**
		 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
		 */ AlgoliaSearchHelper.prototype.removeRefine = function() {
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
		 */ AlgoliaSearchHelper.prototype.removeFacetExclusion = function(facet, value) {
	        this._change({
	            state: this.state.resetPage().removeExcludeRefinement(facet, value),
	            isPageReset: true
	        });
	        return this;
	    };
	    // eslint-disable-next-line valid-jsdoc
	    /**
		 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
		 */ AlgoliaSearchHelper.prototype.removeExclude = function() {
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
		 */ AlgoliaSearchHelper.prototype.removeTag = function(tag) {
	        this._change({
	            state: this.state.resetPage().removeTagRefinement(tag),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.removeFrequentlyBoughtTogether = function(id) {
	        this._recommendChange({
	            state: this.recommendState.removeParams(id)
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
		 */ AlgoliaSearchHelper.prototype.removeRelatedProducts = function(id) {
	        this._recommendChange({
	            state: this.recommendState.removeParams(id)
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
		 */ AlgoliaSearchHelper.prototype.removeTrendingItems = function(id) {
	        this._recommendChange({
	            state: this.recommendState.removeParams(id)
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
		 */ AlgoliaSearchHelper.prototype.removeTrendingFacets = function(id) {
	        this._recommendChange({
	            state: this.recommendState.removeParams(id)
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
		 */ AlgoliaSearchHelper.prototype.removeLookingSimilar = function(id) {
	        this._recommendChange({
	            state: this.recommendState.removeParams(id)
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
		 */ AlgoliaSearchHelper.prototype.toggleFacetExclusion = function(facet, value) {
	        this._change({
	            state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
	            isPageReset: true
	        });
	        return this;
	    };
	    // eslint-disable-next-line valid-jsdoc
	    /**
		 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
		 */ AlgoliaSearchHelper.prototype.toggleExclude = function() {
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
		 */ AlgoliaSearchHelper.prototype.toggleRefinement = function(facet, value) {
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
		 */ AlgoliaSearchHelper.prototype.toggleFacetRefinement = function(facet, value) {
	        this._change({
	            state: this.state.resetPage().toggleFacetRefinement(facet, value),
	            isPageReset: true
	        });
	        return this;
	    };
	    // eslint-disable-next-line valid-jsdoc
	    /**
		 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
		 */ AlgoliaSearchHelper.prototype.toggleRefine = function() {
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
		 */ AlgoliaSearchHelper.prototype.toggleTag = function(tag) {
	        this._change({
	            state: this.state.resetPage().toggleTagRefinement(tag),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.nextPage = function() {
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
		 */ AlgoliaSearchHelper.prototype.previousPage = function() {
	        var page = this.state.page || 0;
	        return this.setPage(page - 1);
	    };
	    /**
		 * @private
		 * @param {number} page The page number
		 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
		 * @chainable
		 * @fires change
		 */ function setCurrentPage(page) {
	        if (page < 0) throw new Error('Page requested below 0.');
	        this._change({
	            state: this.state.setPage(page),
	            isPageReset: false
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
		 */ AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;
	    /**
		 * Updates the current page.
		 * @function
		 * @param  {number} page The page number
		 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
		 * @fires change
		 * @chainable
		 */ AlgoliaSearchHelper.prototype.setPage = setCurrentPage;
	    /**
		 * Updates the name of the index that will be targeted by the query.
		 *
		 * This method resets the current page to 0.
		 * @param {string} name the index name
		 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
		 * @fires change
		 * @chainable
		 */ AlgoliaSearchHelper.prototype.setIndex = function(name) {
	        this._change({
	            state: this.state.resetPage().setIndex(name),
	            isPageReset: true
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
		 */ AlgoliaSearchHelper.prototype.setQueryParameter = function(parameter, value) {
	        this._change({
	            state: this.state.resetPage().setQueryParameter(parameter, value),
	            isPageReset: true
	        });
	        return this;
	    };
	    /**
		 * Set the whole state (warning: will erase previous state)
		 * @param {SearchParameters} newState the whole new state
		 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
		 * @fires change
		 * @chainable
		 */ AlgoliaSearchHelper.prototype.setState = function(newState) {
	        this._change({
	            state: SearchParameters.make(newState),
	            isPageReset: false
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
		 */ AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function(newState) {
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
		 */ AlgoliaSearchHelper.prototype.hasRefinements = function(attribute) {
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
		 */ AlgoliaSearchHelper.prototype.isExcluded = function(facet, value) {
	        return this.state.isExcludeRefined(facet, value);
	    };
	    // eslint-disable-next-line valid-jsdoc
	    /**
		 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
		 */ AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function(facet, value) {
	        return this.state.isDisjunctiveFacetRefined(facet, value);
	    };
	    /**
		 * Check if the string is a currently filtering tag.
		 * @param {string} tag tag to check
		 * @return {boolean} true if the tag is currently refined
		 */ AlgoliaSearchHelper.prototype.hasTag = function(tag) {
	        return this.state.isTagRefined(tag);
	    };
	    // eslint-disable-next-line valid-jsdoc
	    /**
		 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
		 */ AlgoliaSearchHelper.prototype.isTagRefined = function() {
	        return this.hasTagRefinements.apply(this, arguments);
	    };
	    /**
		 * Get the name of the currently used index.
		 * @return {string} name of the index
		 * @example
		 * helper.setIndex('highestPrice_products').getIndex();
		 * // returns 'highestPrice_products'
		 */ AlgoliaSearchHelper.prototype.getIndex = function() {
	        return this.state.index;
	    };
	    function getCurrentPage() {
	        return this.state.page;
	    }
	    /**
		 * Get the currently selected page
		 * @deprecated
		 * @return {number} the current page
		 */ AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
	    /**
		 * Get the currently selected page
		 * @function
		 * @return {number} the current page
		 */ AlgoliaSearchHelper.prototype.getPage = getCurrentPage;
	    /**
		 * Get all the tags currently set to filters the results.
		 *
		 * @return {string[]} The list of tags currently set.
		 */ AlgoliaSearchHelper.prototype.getTags = function() {
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
		 */ AlgoliaSearchHelper.prototype.getRefinements = function(facetName) {
	        var refinements = [];
	        if (this.state.isConjunctiveFacet(facetName)) {
	            var conjRefinements = this.state.getConjunctiveRefinements(facetName);
	            conjRefinements.forEach(function(r) {
	                refinements.push({
	                    value: r,
	                    type: 'conjunctive'
	                });
	            });
	            var excludeRefinements = this.state.getExcludeRefinements(facetName);
	            excludeRefinements.forEach(function(r) {
	                refinements.push({
	                    value: r,
	                    type: 'exclude'
	                });
	            });
	        } else if (this.state.isDisjunctiveFacet(facetName)) {
	            var disjunctiveRefinements = this.state.getDisjunctiveRefinements(facetName);
	            disjunctiveRefinements.forEach(function(r) {
	                refinements.push({
	                    value: r,
	                    type: 'disjunctive'
	                });
	            });
	        }
	        var numericRefinements = this.state.getNumericRefinements(facetName);
	        Object.keys(numericRefinements).forEach(function(operator) {
	            var value = numericRefinements[operator];
	            refinements.push({
	                value: value,
	                operator: operator,
	                type: 'numeric'
	            });
	        });
	        return refinements;
	    };
	    /**
		 * Return the current refinement for the (attribute, operator)
		 * @param {string} attribute attribute in the record
		 * @param {string} operator operator applied on the refined values
		 * @return {Array.<number|number[]>} refined values
		 */ AlgoliaSearchHelper.prototype.getNumericRefinement = function(attribute, operator) {
	        return this.state.getNumericRefinement(attribute, operator);
	    };
	    /**
		 * Get the current breadcrumb for a hierarchical facet, as an array
		 * @param  {string} facetName Hierarchical facet name
		 * @return {array.<string>} the path as an array of string
		 */ AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function(facetName) {
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
		 */ AlgoliaSearchHelper.prototype._search = function(options) {
	        var state = this.state;
	        var states = [];
	        var mainQueries = [];
	        if (!options.onlyWithDerivedHelpers) {
	            mainQueries = requestBuilder._getQueries(state.index, state);
	            states.push({
	                state: state,
	                queriesCount: mainQueries.length,
	                helper: this
	            });
	            this.emit('search', {
	                state: state,
	                results: this.lastResults
	            });
	        }
	        var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
	            var derivedState = derivedHelper.getModifiedState(state);
	            var derivedStateQueries = derivedState.index ? requestBuilder._getQueries(derivedState.index, derivedState) : [];
	            states.push({
	                state: derivedState,
	                queriesCount: derivedStateQueries.length,
	                helper: derivedHelper
	            });
	            derivedHelper.emit('search', {
	                state: derivedState,
	                results: derivedHelper.lastResults
	            });
	            return derivedStateQueries;
	        });
	        var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
	        var queryId = this._queryId++;
	        this._currentNbQueries++;
	        if (!queries.length) {
	            return Promise.resolve({
	                results: []
	            }).then(this._dispatchAlgoliaResponse.bind(this, states, queryId));
	        }
	        try {
	            this.client.search(queries).then(this._dispatchAlgoliaResponse.bind(this, states, queryId)).catch(this._dispatchAlgoliaError.bind(this, queryId));
	        } catch (error) {
	            // If we reach this part, we're in an internal error state
	            this.emit('error', {
	                error: error
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
		 */ AlgoliaSearchHelper.prototype._runComposition = function() {
	        var state = this.state;
	        var states = [];
	        var mainQueries = [];
	        var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
	            var derivedState = derivedHelper.getModifiedState(state);
	            var derivedStateQueries = requestBuilder._getCompositionQueries(derivedState);
	            states.push({
	                state: derivedState,
	                queriesCount: derivedStateQueries.length,
	                helper: derivedHelper
	            });
	            derivedHelper.emit('search', {
	                state: derivedState,
	                results: derivedHelper.lastResults
	            });
	            return derivedStateQueries;
	        });
	        var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
	        var queryId = this._queryId++;
	        this._currentNbQueries++;
	        if (!queries.length) {
	            return Promise.resolve({
	                results: []
	            }).then(this._dispatchAlgoliaResponse.bind(this, states, queryId));
	        }
	        if (queries.length > 1) {
	            throw new Error('Only one query is allowed when using a composition.');
	        }
	        var query = queries[0];
	        try {
	            this.client.search(query).then(this._dispatchAlgoliaResponse.bind(this, states, queryId)).catch(this._dispatchAlgoliaError.bind(this, queryId));
	        } catch (error) {
	            // If we reach this part, we're in an internal error state
	            this.emit('error', {
	                error: error
	            });
	        }
	        return undefined;
	    };
	    AlgoliaSearchHelper.prototype._recommend = function() {
	        var searchState = this.state;
	        var recommendState = this.recommendState;
	        var index = this.getIndex();
	        var states = [
	            {
	                state: recommendState,
	                index: index,
	                helper: this
	            }
	        ];
	        var ids = recommendState.params.map(function(param) {
	            return param.$$id;
	        });
	        this.emit('fetch', {
	            recommend: {
	                state: recommendState,
	                results: this.lastRecommendResults
	            }
	        });
	        var cache = this._recommendCache;
	        var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
	            var derivedIndex = derivedHelper.getModifiedState(searchState).index;
	            if (!derivedIndex) {
	                return [];
	            }
	            // Contrary to what is done when deriving the search state, we don't want to
	            // provide the current recommend state to the derived helper, as it would
	            // inherit unwanted queries. We instead provide an empty recommend state.
	            var derivedState = derivedHelper.getModifiedRecommendState(new RecommendParameters());
	            states.push({
	                state: derivedState,
	                index: derivedIndex,
	                helper: derivedHelper
	            });
	            ids = Array.prototype.concat.apply(ids, derivedState.params.map(function(param) {
	                return param.$$id;
	            }));
	            derivedHelper.emit('fetch', {
	                recommend: {
	                    state: derivedState,
	                    results: derivedHelper.lastRecommendResults
	                }
	            });
	            return derivedState._buildQueries(derivedIndex, cache);
	        });
	        var queries = Array.prototype.concat.apply(this.recommendState._buildQueries(index, cache), derivedQueries);
	        if (queries.length === 0) {
	            return;
	        }
	        if (queries.length > 0 && typeof this.client.getRecommendations === 'undefined') {
	            // eslint-disable-next-line no-console
	            console.warn('Please update algoliasearch/lite to the latest version in order to use recommend widgets.');
	            return;
	        }
	        var queryId = this._recommendQueryId++;
	        this._currentNbRecommendQueries++;
	        try {
	            this.client.getRecommendations(queries).then(this._dispatchRecommendResponse.bind(this, queryId, states, ids)).catch(this._dispatchRecommendError.bind(this, queryId));
	        } catch (error) {
	            // If we reach this part, we're in an internal error state
	            this.emit('error', {
	                error: error
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
		 */ AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function(states, queryId, content) {
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
	        var rawContent = Object.keys(content).reduce(function(value, key) {
	            if (key !== 'results') value[key] = content[key];
	            return value;
	        }, {});
	        if (Object.keys(rawContent).length <= 0) {
	            rawContent = undefined;
	        }
	        states.forEach(function(s) {
	            var state = s.state;
	            var queriesCount = s.queriesCount;
	            var helper = s.helper;
	            var specificResults = results.splice(0, queriesCount);
	            if (!state.index) {
	                helper.emit('result', {
	                    results: null,
	                    state: state
	                });
	                return;
	            }
	            helper.lastResults = new SearchResults(state, specificResults, self._searchResultsOptions);
	            if (rawContent !== undefined) helper.lastResults._rawContent = rawContent;
	            helper.emit('result', {
	                results: helper.lastResults,
	                state: state
	            });
	        });
	    };
	    AlgoliaSearchHelper.prototype._dispatchRecommendResponse = function(queryId, states, ids, content) {
	        // @TODO remove the number of outdated queries discarded instead of just one
	        if (queryId < this._lastRecommendQueryIdReceived) {
	            // Outdated answer
	            return;
	        }
	        this._currentNbRecommendQueries -= queryId - this._lastRecommendQueryIdReceived;
	        this._lastRecommendQueryIdReceived = queryId;
	        if (this._currentNbRecommendQueries === 0) this.emit('recommendQueueEmpty');
	        var cache = this._recommendCache;
	        var idsMap = {};
	        ids.filter(function(id) {
	            return cache[id] === undefined;
	        }).forEach(function(id, index) {
	            if (!idsMap[id]) idsMap[id] = [];
	            idsMap[id].push(index);
	        });
	        Object.keys(idsMap).forEach(function(id) {
	            var indices = idsMap[id];
	            var firstResult = content.results[indices[0]];
	            if (indices.length === 1) {
	                cache[id] = firstResult;
	                return;
	            }
	            cache[id] = Object.assign({}, firstResult, {
	                hits: sortAndMergeRecommendations(ids, indices.map(function(idx) {
	                    return content.results[idx].hits;
	                }))
	            });
	        });
	        var results = {};
	        ids.forEach(function(id) {
	            results[id] = cache[id];
	        });
	        states.forEach(function(s) {
	            var state = s.state;
	            var helper = s.helper;
	            if (!s.index) {
	                // eslint-disable-next-line no-warning-comments
	                // TODO: emit "result" event when events for Recommend are implemented
	                helper.emit('recommend:result', {
	                    results: null,
	                    state: state
	                });
	                return;
	            }
	            helper.lastRecommendResults = new RecommendResults(state, results);
	            // eslint-disable-next-line no-warning-comments
	            // TODO: emit "result" event when events for Recommend are implemented
	            helper.emit('recommend:result', {
	                recommend: {
	                    results: helper.lastRecommendResults,
	                    state: state
	                }
	            });
	        });
	    };
	    AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function(queryId, error) {
	        if (queryId < this._lastQueryIdReceived) {
	            // Outdated answer
	            return;
	        }
	        this._currentNbQueries -= queryId - this._lastQueryIdReceived;
	        this._lastQueryIdReceived = queryId;
	        this.emit('error', {
	            error: error
	        });
	        if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
	    };
	    AlgoliaSearchHelper.prototype._dispatchRecommendError = function(queryId, error) {
	        if (queryId < this._lastRecommendQueryIdReceived) {
	            // Outdated answer
	            return;
	        }
	        this._currentNbRecommendQueries -= queryId - this._lastRecommendQueryIdReceived;
	        this._lastRecommendQueryIdReceived = queryId;
	        this.emit('error', {
	            error: error
	        });
	        if (this._currentNbRecommendQueries === 0) this.emit('recommendQueueEmpty');
	    };
	    AlgoliaSearchHelper.prototype.containsRefinement = function(query, facetFilters, numericFilters, tagFilters) {
	        return query || facetFilters.length !== 0 || numericFilters.length !== 0 || tagFilters.length !== 0;
	    };
	    /**
		 * Test if there are some disjunctive refinements on the facet
		 * @private
		 * @param {string} facet the attribute to test
		 * @return {boolean} true if there are refinements on this attribute
		 */ AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function(facet) {
	        return this.state.disjunctiveRefinements[facet] && this.state.disjunctiveRefinements[facet].length > 0;
	    };
	    AlgoliaSearchHelper.prototype._change = function(event) {
	        var state = event.state;
	        var isPageReset = event.isPageReset;
	        if (state !== this.state) {
	            this.state = state;
	            this.emit('change', {
	                state: this.state,
	                results: this.lastResults,
	                isPageReset: isPageReset
	            });
	        }
	    };
	    AlgoliaSearchHelper.prototype._recommendChange = function(event) {
	        var state = event.state;
	        if (state !== this.recommendState) {
	            this.recommendState = state;
	            // eslint-disable-next-line no-warning-comments
	            // TODO: emit "change" event when events for Recommend are implemented
	            this.emit('recommend:change', {
	                search: {
	                    results: this.lastResults,
	                    state: this.state
	                },
	                recommend: {
	                    results: this.lastRecommendResults,
	                    state: this.recommendState
	                }
	            });
	        }
	    };
	    /**
		 * Clears the cache of the underlying Algolia client.
		 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
		 */ AlgoliaSearchHelper.prototype.clearCache = function() {
	        if (this.client.clearCache) this.client.clearCache();
	        return this;
	    };
	    /**
		 * Updates the internal client instance. If the reference of the clients
		 * are equal then no update is actually done.
		 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
		 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
		 */ AlgoliaSearchHelper.prototype.setClient = function(newClient) {
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
		 */ AlgoliaSearchHelper.prototype.getClient = function() {
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
		 */ AlgoliaSearchHelper.prototype.derive = function(fn, recommendFn) {
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
		 */ AlgoliaSearchHelper.prototype.detachDerivedHelper = function(derivedHelper) {
	        var pos = this.derivedHelpers.indexOf(derivedHelper);
	        if (pos === -1) throw new Error('Derived helper already detached');
	        this.derivedHelpers.splice(pos, 1);
	    };
	    /**
		 * This method returns true if there is currently at least one on-going search.
		 * @return {boolean} true if there is a search pending
		 */ AlgoliaSearchHelper.prototype.hasPendingRequests = function() {
	        return this._currentNbQueries > 0;
	    };
	    /**
		 * @typedef AlgoliaSearchHelper.NumericRefinement
		 * @type {object}
		 * @property {number[]} value the numbers that are used for filtering this attribute with
		 * the operator specified.
		 * @property {string} operator the faceting data: value, number of entries
		 * @property {string} type will be 'numeric'
		 */ /**
		 * @typedef AlgoliaSearchHelper.FacetRefinement
		 * @type {object}
		 * @property {string} value the string use to filter the attribute
		 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
		 */ algoliasearch_helper = AlgoliaSearchHelper;
	    return algoliasearch_helper;
	}

	var algoliasearchHelper_1;
	var hasRequiredAlgoliasearchHelper;
	function requireAlgoliasearchHelper() {
	    if (hasRequiredAlgoliasearchHelper) return algoliasearchHelper_1;
	    hasRequiredAlgoliasearchHelper = 1;
	    var AlgoliaSearchHelper = requireAlgoliasearch_helper();
	    var RecommendParameters = requireRecommendParameters();
	    var RecommendResults = requireRecommendResults();
	    var SearchParameters = requireSearchParameters();
	    var SearchResults = requireSearchResults();
	    /**
		 * The algoliasearchHelper module is the function that will let its
		 * contains everything needed to use the Algoliasearch
		 * Helper. It is a also a function that instanciate the helper.
		 * To use the helper, you also need the Algolia JS client v3.
		 * @example
		 * //using the UMD build
		 * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
		 * var helper = algoliasearchHelper(client, 'bestbuy', {
		 *   facets: ['shipping'],
		 *   disjunctiveFacets: ['category']
		 * });
		 * helper.on('result', function(event) {
		 *   console.log(event.results);
		 * });
		 * helper
		 *   .toggleFacetRefinement('category', 'Movies & TV Shows')
		 *   .toggleFacetRefinement('shipping', 'Free shipping')
		 *   .search();
		 * @example
		 * // The helper is an event emitter using the node API
		 * helper.on('result', updateTheResults);
		 * helper.once('result', updateTheResults);
		 * helper.removeListener('result', updateTheResults);
		 * helper.removeAllListeners('result');
		 * @module algoliasearchHelper
		 * @param  {AlgoliaSearch} client an AlgoliaSearch client
		 * @param  {string} index the name of the index to query
		 * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
		 * @param {SearchResultsOptions|object} searchResultsOptions an object defining the options to use when creating the search results.
		 * @return {AlgoliaSearchHelper} The helper instance
		 */ function algoliasearchHelper(client, index, opts, searchResultsOptions) {
	        return new AlgoliaSearchHelper(client, index, opts, searchResultsOptions);
	    }
	    /**
		 * The version currently used
		 * @member module:algoliasearchHelper.version
		 * @type {number}
		 */ algoliasearchHelper.version = requireVersion();
	    /**
		 * Constructor for the Helper.
		 * @member module:algoliasearchHelper.AlgoliaSearchHelper
		 * @type {AlgoliaSearchHelper}
		 */ algoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;
	    /**
		 * Constructor for the object containing all the parameters of the search.
		 * @member module:algoliasearchHelper.SearchParameters
		 * @type {SearchParameters}
		 */ algoliasearchHelper.SearchParameters = SearchParameters;
	    /**
		 * Constructor for the object containing all the parameters for Recommend.
		 * @member module:algoliasearchHelper.RecommendParameters
		 * @type {RecommendParameters}
		 */ algoliasearchHelper.RecommendParameters = RecommendParameters;
	    /**
		 * Constructor for the object containing the results of the search.
		 * @member module:algoliasearchHelper.SearchResults
		 * @type {SearchResults}
		 */ algoliasearchHelper.SearchResults = SearchResults;
	    /**
		 * Constructor for the object containing the results for Recommend.
		 * @member module:algoliasearchHelper.RecommendResults
		 * @type {RecommendResults}
		 */ algoliasearchHelper.RecommendResults = RecommendResults;
	    algoliasearchHelper_1 = algoliasearchHelper;
	    return algoliasearchHelper_1;
	}

	var algoliasearchHelperExports = requireAlgoliasearchHelper();
	var index = /*@__PURE__*/getDefaultExportFromCjs(algoliasearchHelperExports);

	return index;

}));
