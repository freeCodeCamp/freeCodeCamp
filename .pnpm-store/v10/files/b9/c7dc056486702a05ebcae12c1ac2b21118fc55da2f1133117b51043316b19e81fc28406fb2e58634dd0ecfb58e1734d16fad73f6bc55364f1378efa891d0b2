/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var RelayFeatureFlags = require('../util/RelayFeatureFlags');

var areEqual = require("fbjs/lib/areEqual");

var getPendingOperationsForFragment = require('../util/getPendingOperationsForFragment');

var invariant = require('invariant');

var isScalarAndEqual = require('../util/isScalarAndEqual');

var recycleNodesInto = require('../util/recycleNodesInto');

var reportMissingRequiredFields = require('../util/reportMissingRequiredFields');

var warning = require("fbjs/lib/warning");

var _require = require('./RelayModernOperationDescriptor'),
    createRequestDescriptor = _require.createRequestDescriptor;

var _require2 = require('./RelayModernSelector'),
    areEqualSelectors = _require2.areEqualSelectors,
    createReaderSelector = _require2.createReaderSelector,
    getSelectorsFromObject = _require2.getSelectorsFromObject;

/**
 * A utility for resolving and subscribing to the results of a fragment spec
 * (key -> fragment mapping) given some "props" that determine the root ID
 * and variables to use when reading each fragment. When props are changed via
 * `setProps()`, the resolver will update its results and subscriptions
 * accordingly. Internally, the resolver:
 * - Converts the fragment map & props map into a map of `Selector`s.
 * - Removes any resolvers for any props that became null.
 * - Creates resolvers for any props that became non-null.
 * - Updates resolvers with the latest props.
 *
 * This utility is implemented as an imperative, stateful API for performance
 * reasons: reusing previous resolvers, callback functions, and subscriptions
 * all helps to reduce object allocation and thereby decrease GC time.
 *
 * The `resolve()` function is also lazy and memoized: changes in the store mark
 * the resolver as stale and notify the caller, and the actual results are
 * recomputed the first time `resolve()` is called.
 */
var RelayModernFragmentSpecResolver = /*#__PURE__*/function () {
  function RelayModernFragmentSpecResolver(context, fragments, props, callback, rootIsQueryRenderer) {
    var _this = this;

    (0, _defineProperty2["default"])(this, "_onChange", function () {
      _this._stale = true;

      if (typeof _this._callback === 'function') {
        _this._callback();
      }
    });
    this._callback = callback;
    this._context = context;
    this._data = {};
    this._fragments = fragments;
    this._props = {};
    this._resolvers = {};
    this._stale = false;
    this._rootIsQueryRenderer = rootIsQueryRenderer;
    this.setProps(props);
  }

  var _proto = RelayModernFragmentSpecResolver.prototype;

  _proto.dispose = function dispose() {
    for (var _key in this._resolvers) {
      if (this._resolvers.hasOwnProperty(_key)) {
        disposeCallback(this._resolvers[_key]);
      }
    }
  };

  _proto.resolve = function resolve() {
    if (this._stale) {
      // Avoid mapping the object multiple times, which could occur if data for
      // multiple keys changes in the same event loop.
      var prevData = this._data;
      var nextData;

      for (var _key2 in this._resolvers) {
        if (this._resolvers.hasOwnProperty(_key2)) {
          var resolver = this._resolvers[_key2];
          var prevItem = prevData[_key2];

          if (resolver) {
            var nextItem = resolver.resolve();

            if (nextData || nextItem !== prevItem) {
              nextData = nextData || (0, _objectSpread2["default"])({}, prevData);
              nextData[_key2] = nextItem;
            }
          } else {
            var prop = this._props[_key2];

            var _nextItem = prop !== undefined ? prop : null;

            if (nextData || !isScalarAndEqual(_nextItem, prevItem)) {
              nextData = nextData || (0, _objectSpread2["default"])({}, prevData);
              nextData[_key2] = _nextItem;
            }
          }
        }
      }

      this._data = nextData || prevData;
      this._stale = false;
    }

    return this._data;
  };

  _proto.setCallback = function setCallback(props, callback) {
    this._callback = callback;

    if (RelayFeatureFlags.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === true) {
      this.setProps(props);
    }
  };

  _proto.setProps = function setProps(props) {
    this._props = {};
    var ownedSelectors = getSelectorsFromObject(this._fragments, props);

    for (var _key3 in ownedSelectors) {
      if (ownedSelectors.hasOwnProperty(_key3)) {
        var ownedSelector = ownedSelectors[_key3];
        var resolver = this._resolvers[_key3];

        if (ownedSelector == null) {
          if (resolver != null) {
            resolver.dispose();
          }

          resolver = null;
        } else if (ownedSelector.kind === 'PluralReaderSelector') {
          if (resolver == null) {
            resolver = new SelectorListResolver(this._context.environment, this._rootIsQueryRenderer, ownedSelector, this._callback != null, this._onChange);
          } else {
            !(resolver instanceof SelectorListResolver) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernFragmentSpecResolver: Expected prop `%s` to always be an array.', _key3) : invariant(false) : void 0;
            resolver.setSelector(ownedSelector);
          }
        } else {
          if (resolver == null) {
            resolver = new SelectorResolver(this._context.environment, this._rootIsQueryRenderer, ownedSelector, this._callback != null, this._onChange);
          } else {
            !(resolver instanceof SelectorResolver) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernFragmentSpecResolver: Expected prop `%s` to always be an object.', _key3) : invariant(false) : void 0;
            resolver.setSelector(ownedSelector);
          }
        }

        this._props[_key3] = props[_key3];
        this._resolvers[_key3] = resolver;
      }
    }

    this._stale = true;
  };

  _proto.setVariables = function setVariables(variables, request) {
    for (var _key4 in this._resolvers) {
      if (this._resolvers.hasOwnProperty(_key4)) {
        var resolver = this._resolvers[_key4];

        if (resolver) {
          resolver.setVariables(variables, request);
        }
      }
    }

    this._stale = true;
  };

  return RelayModernFragmentSpecResolver;
}();
/**
 * A resolver for a single Selector.
 */


var SelectorResolver = /*#__PURE__*/function () {
  function SelectorResolver(environment, rootIsQueryRenderer, selector, subscribeOnConstruction, callback) {
    var _this2 = this;

    (0, _defineProperty2["default"])(this, "_onChange", function (snapshot) {
      _this2._data = snapshot.data;
      _this2._isMissingData = snapshot.isMissingData;
      _this2._missingRequiredFields = snapshot.missingRequiredFields;

      _this2._callback();
    });

    var _snapshot = environment.lookup(selector);

    this._callback = callback;
    this._data = _snapshot.data;
    this._isMissingData = _snapshot.isMissingData;
    this._missingRequiredFields = _snapshot.missingRequiredFields;
    this._environment = environment;
    this._rootIsQueryRenderer = rootIsQueryRenderer;
    this._selector = selector;

    if (RelayFeatureFlags.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === true) {
      if (subscribeOnConstruction) {
        this._subscription = environment.subscribe(_snapshot, this._onChange);
      }
    } else {
      this._subscription = environment.subscribe(_snapshot, this._onChange);
    }
  }

  var _proto2 = SelectorResolver.prototype;

  _proto2.dispose = function dispose() {
    if (this._subscription) {
      this._subscription.dispose();

      this._subscription = null;
    }
  };

  _proto2.resolve = function resolve() {
    if (this._isMissingData === true) {
      // NOTE: This branch exists to handle the case in which:
      // - A RelayModern container is rendered as a descendant of a Relay Hook
      //   root using a "partial" renderPolicy (this means that eargerly
      //   reading any cached data that is available instead of blocking
      //   at the root until the whole query is fetched).
      // - A parent Relay Hook didnt' suspend earlier on data being fetched,
      //   either because the fragment data for the parent was available, or
      //   the parent fragment didn't have any data dependencies.
      // Even though our Flow types reflect the possiblity of null data, there
      // might still be cases where it's not handled at runtime becuase the
      // Flow types are being ignored, or simply not being used (for example,
      // the case reported here: https://fburl.com/srnbucf8, was due to
      // misuse of Flow types here: https://fburl.com/g3m0mqqh).
      // Additionally, even though the null data might be handled without a
      // runtime error, we might not suspend when we intended to if a parent
      // Relay Hook (e.g. that is using @defer) decided not to suspend becuase
      // it's immediate data was already available (even if it was deferred),
      // or it didn't actually need any data (was just spreading other fragments).
      // This should eventually go away with something like @optional, where we only
      // suspend at specific boundaries depending on whether the boundary
      // can be fulfilled or not.
      var pendingOperationsResult = getPendingOperationsForFragment(this._environment, this._selector.node, this._selector.owner);
      var promise = pendingOperationsResult === null || pendingOperationsResult === void 0 ? void 0 : pendingOperationsResult.promise;

      if (promise != null) {
        if (this._rootIsQueryRenderer) {
          process.env.NODE_ENV !== "production" ? warning(false, 'Relay: Relay Container for fragment `%s` has missing data and ' + 'would suspend. When using features such as @defer or @module, ' + 'use `useFragment` instead of a Relay Container.', this._selector.node.name) : void 0;
        } else {
          var _pendingOperationsRes;

          var pendingOperations = (_pendingOperationsRes = pendingOperationsResult === null || pendingOperationsResult === void 0 ? void 0 : pendingOperationsResult.pendingOperations) !== null && _pendingOperationsRes !== void 0 ? _pendingOperationsRes : [];
          process.env.NODE_ENV !== "production" ? warning(false, 'Relay: Relay Container for fragment `%s` suspended. When using ' + 'features such as @defer or @module, use `useFragment` instead ' + 'of a Relay Container.', this._selector.node.name) : void 0;

          this._environment.__log({
            name: 'suspense.fragment',
            data: this._data,
            fragment: this._selector.node,
            isRelayHooks: false,
            isMissingData: this._isMissingData,
            isPromiseCached: false,
            pendingOperations: pendingOperations
          });

          throw promise;
        }
      }
    }

    if (this._missingRequiredFields != null) {
      reportMissingRequiredFields(this._environment, this._missingRequiredFields);
    }

    return this._data;
  };

  _proto2.setSelector = function setSelector(selector) {
    if (this._subscription != null && areEqualSelectors(selector, this._selector)) {
      return;
    }

    this.dispose();

    var snapshot = this._environment.lookup(selector);

    this._data = recycleNodesInto(this._data, snapshot.data);
    this._isMissingData = snapshot.isMissingData;
    this._missingRequiredFields = snapshot.missingRequiredFields;
    this._selector = selector;
    this._subscription = this._environment.subscribe(snapshot, this._onChange);
  };

  _proto2.setVariables = function setVariables(variables, request) {
    if (areEqual(variables, this._selector.variables)) {
      // If we're not actually setting new variables, we don't actually want
      // to create a new fragment owner, since areEqualSelectors relies on
      // owner identity.
      // In fact, we don't even need to try to attempt to set a new selector.
      // When fragment ownership is not enabled, setSelector will also bail
      // out since the selector doesn't really change, so we're doing it here
      // earlier.
      return;
    } // NOTE: We manually create the request descriptor here instead of
    // calling createOperationDescriptor() because we want to set a
    // descriptor with *unaltered* variables as the fragment owner.
    // This is a hack that allows us to preserve existing (broken)
    // behavior of RelayModern containers while using fragment ownership
    // to propagate variables instead of Context.
    // For more details, see the summary of D13999308


    var requestDescriptor = createRequestDescriptor(request, variables);
    var selector = createReaderSelector(this._selector.node, this._selector.dataID, variables, requestDescriptor);
    this.setSelector(selector);
  };

  return SelectorResolver;
}();
/**
 * A resolver for an array of Selectors.
 */


var SelectorListResolver = /*#__PURE__*/function () {
  function SelectorListResolver(environment, rootIsQueryRenderer, selector, subscribeOnConstruction, callback) {
    var _this3 = this;

    (0, _defineProperty2["default"])(this, "_onChange", function (data) {
      _this3._stale = true;

      _this3._callback();
    });
    this._callback = callback;
    this._data = [];
    this._environment = environment;
    this._resolvers = [];
    this._stale = true;
    this._rootIsQueryRenderer = rootIsQueryRenderer;
    this._subscribeOnConstruction = subscribeOnConstruction;
    this.setSelector(selector);
  }

  var _proto3 = SelectorListResolver.prototype;

  _proto3.dispose = function dispose() {
    this._resolvers.forEach(disposeCallback);
  };

  _proto3.resolve = function resolve() {
    if (this._stale) {
      // Avoid mapping the array multiple times, which could occur if data for
      // multiple indices changes in the same event loop.
      var prevData = this._data;
      var nextData;

      for (var ii = 0; ii < this._resolvers.length; ii++) {
        var prevItem = prevData[ii];

        var nextItem = this._resolvers[ii].resolve();

        if (nextData || nextItem !== prevItem) {
          nextData = nextData || prevData.slice(0, ii);
          nextData.push(nextItem);
        }
      }

      if (!nextData && this._resolvers.length !== prevData.length) {
        nextData = prevData.slice(0, this._resolvers.length);
      }

      this._data = nextData || prevData;
      this._stale = false;
    }

    return this._data;
  };

  _proto3.setSelector = function setSelector(selector) {
    var selectors = selector.selectors;

    while (this._resolvers.length > selectors.length) {
      var resolver = this._resolvers.pop();

      resolver.dispose();
    }

    for (var ii = 0; ii < selectors.length; ii++) {
      if (ii < this._resolvers.length) {
        this._resolvers[ii].setSelector(selectors[ii]);
      } else {
        this._resolvers[ii] = new SelectorResolver(this._environment, this._rootIsQueryRenderer, selectors[ii], this._subscribeOnConstruction, this._onChange);
      }
    }

    this._stale = true;
  };

  _proto3.setVariables = function setVariables(variables, request) {
    this._resolvers.forEach(function (resolver) {
      return resolver.setVariables(variables, request);
    });

    this._stale = true;
  };

  return SelectorListResolver;
}();

function disposeCallback(disposable) {
  disposable && disposable.dispose();
}

module.exports = RelayModernFragmentSpecResolver;