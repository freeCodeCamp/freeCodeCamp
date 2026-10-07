(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Reselect = {}));
})(this, (function (exports) { 'use strict';

  // Cache implementation based on Erik Rasmussen's `lru-memoize`:
  // https://github.com/erikras/lru-memoize
  var NOT_FOUND = 'NOT_FOUND';

  function createSingletonCache(equals) {
    var entry;
    return {
      get: function get(key) {
        if (entry && equals(entry.key, key)) {
          return entry.value;
        }

        return NOT_FOUND;
      },
      put: function put(key, value) {
        entry = {
          key: key,
          value: value
        };
      },
      getEntries: function getEntries() {
        return entry ? [entry] : [];
      },
      clear: function clear() {
        entry = undefined;
      }
    };
  }

  function createLruCache(maxSize, equals) {
    var entries = [];

    function get(key) {
      var cacheIndex = entries.findIndex(function (entry) {
        return equals(key, entry.key);
      }); // We found a cached entry

      if (cacheIndex > -1) {
        var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

        if (cacheIndex > 0) {
          entries.splice(cacheIndex, 1);
          entries.unshift(entry);
        }

        return entry.value;
      } // No entry found in cache, return sentinel


      return NOT_FOUND;
    }

    function put(key, value) {
      if (get(key) === NOT_FOUND) {
        // TODO Is unshift slow?
        entries.unshift({
          key: key,
          value: value
        });

        if (entries.length > maxSize) {
          entries.pop();
        }
      }
    }

    function getEntries() {
      return entries;
    }

    function clear() {
      entries = [];
    }

    return {
      get: get,
      put: put,
      getEntries: getEntries,
      clear: clear
    };
  }

  var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
    return a === b;
  };
  function createCacheKeyComparator(equalityCheck) {
    return function areArgumentsShallowlyEqual(prev, next) {
      if (prev === null || next === null || prev.length !== next.length) {
        return false;
      } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


      var length = prev.length;

      for (var i = 0; i < length; i++) {
        if (!equalityCheck(prev[i], next[i])) {
          return false;
        }
      }

      return true;
    };
  }
  // defaultMemoize now supports a configurable cache size with LRU behavior,
  // and optional comparison of the result value with existing values
  function defaultMemoize(func, equalityCheckOrOptions) {
    var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
      equalityCheck: equalityCheckOrOptions
    };
    var _providedOptions$equa = providedOptions.equalityCheck,
        equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
        _providedOptions$maxS = providedOptions.maxSize,
        maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
        resultEqualityCheck = providedOptions.resultEqualityCheck;
    var comparator = createCacheKeyComparator(equalityCheck);
    var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

    function memoized() {
      var value = cache.get(arguments);

      if (value === NOT_FOUND) {
        // @ts-ignore
        value = func.apply(null, arguments);

        if (resultEqualityCheck) {
          var entries = cache.getEntries();
          var matchingEntry = entries.find(function (entry) {
            return resultEqualityCheck(entry.value, value);
          });

          if (matchingEntry) {
            value = matchingEntry.value;
          }
        }

        cache.put(arguments, value);
      }

      return value;
    }

    memoized.clearCache = function () {
      return cache.clear();
    };

    return memoized;
  }

  function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

    if (!dependencies.every(function (dep) {
      return typeof dep === 'function';
    })) {
      var dependencyTypes = dependencies.map(function (dep) {
        return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
      }).join(', ');
      throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
    }

    return dependencies;
  }

  function createSelectorCreator(memoize) {
    for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      memoizeOptionsFromArgs[_key - 1] = arguments[_key];
    }

    var createSelector = function createSelector() {
      for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        funcs[_key2] = arguments[_key2];
      }

      var _recomputations = 0;

      var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
      // So, start by declaring the default value here.
      // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


      var directlyPassedOptions = {
        memoizeOptions: undefined
      }; // Normally, the result func or "output selector" is the last arg

      var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

      if (typeof resultFunc === 'object') {
        directlyPassedOptions = resultFunc; // and pop the real result func off

        resultFunc = funcs.pop();
      }

      if (typeof resultFunc !== 'function') {
        throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
      } // Determine which set of options we're using. Prefer options passed directly,
      // but fall back to options given to createSelectorCreator.


      var _directlyPassedOption = directlyPassedOptions,
          _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
          memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
      // is an array. In most libs I've looked at, it's an equality function or options object.
      // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
      // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
      // we wrap it in an array so we can apply it.

      var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
      var dependencies = getDependencies(funcs);
      var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
        _recomputations++; // apply arguments instead of spreading for performance.

        return resultFunc.apply(null, arguments);
      }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

      var selector = memoize(function dependenciesChecker() {
        var params = [];
        var length = dependencies.length;

        for (var i = 0; i < length; i++) {
          // apply arguments instead of spreading and mutate a local list of params for performance.
          // @ts-ignore
          params.push(dependencies[i].apply(null, arguments));
        } // apply arguments instead of spreading for performance.


        _lastResult = memoizedResultFunc.apply(null, params);
        return _lastResult;
      });
      Object.assign(selector, {
        resultFunc: resultFunc,
        memoizedResultFunc: memoizedResultFunc,
        dependencies: dependencies,
        lastResult: function lastResult() {
          return _lastResult;
        },
        recomputations: function recomputations() {
          return _recomputations;
        },
        resetRecomputations: function resetRecomputations() {
          return _recomputations = 0;
        }
      });
      return selector;
    }; // @ts-ignore


    return createSelector;
  }
  var createSelector = /* #__PURE__ */createSelectorCreator(defaultMemoize);
  // Manual definition of state and output arguments
  var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
    if (selectorCreator === void 0) {
      selectorCreator = createSelector;
    }

    if (typeof selectors !== 'object') {
      throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
    }

    var objectKeys = Object.keys(selectors);
    var resultSelector = selectorCreator( // @ts-ignore
    objectKeys.map(function (key) {
      return selectors[key];
    }), function () {
      for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }

      return values.reduce(function (composition, value, index) {
        composition[objectKeys[index]] = value;
        return composition;
      }, {});
    });
    return resultSelector;
  };

  exports.createSelector = createSelector;
  exports.createSelectorCreator = createSelectorCreator;
  exports.createStructuredSelector = createStructuredSelector;
  exports.defaultEqualityCheck = defaultEqualityCheck;
  exports.defaultMemoize = defaultMemoize;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
