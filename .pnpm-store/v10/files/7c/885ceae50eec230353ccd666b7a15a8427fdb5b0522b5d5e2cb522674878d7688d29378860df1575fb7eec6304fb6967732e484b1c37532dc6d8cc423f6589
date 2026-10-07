(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactRedux = {}, global.React, global.ReactDOM));
}(this, (function (exports, React, reactDom) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				}
			});
		}
		n['default'] = e;
		return Object.freeze(n);
	}

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var React__namespace = /*#__PURE__*/_interopNamespace(React);

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var useSyncExternalStoreShim_development = createCommonjsModule(function (module, exports) {

	{
	  (function() {

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	}
	          var React = React__default['default'];

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	// dispatch for CommonJS interop named imports.

	var useState = React.useState,
	    useEffect = React.useEffect,
	    useLayoutEffect = React.useLayoutEffect,
	    useDebugValue = React.useDebugValue;
	var didWarnOld18Alpha = false;
	var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
	// because of a very particular set of implementation details and assumptions
	// -- change any one of them and it will break. The most important assumption
	// is that updates are always synchronous, because concurrent rendering is
	// only available in versions of React that also have a built-in
	// useSyncExternalStore API. And we only use this shim when the built-in API
	// does not exist.
	//
	// Do not assume that the clever hacks used by this hook also work in general.
	// The point of this shim is to replace the need for hacks by other libraries.

	function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	// React do not expose a way to check if we're hydrating. So users of the shim
	// will need to track that themselves and return the correct value
	// from `getSnapshot`.
	getServerSnapshot) {
	  {
	    if (!didWarnOld18Alpha) {
	      if (React.startTransition !== undefined) {
	        didWarnOld18Alpha = true;

	        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
	      }
	    }
	  } // Read the current snapshot from the store on every render. Again, this
	  // breaks the rules of React, and only works here because of specific
	  // implementation details, most importantly that updates are
	  // always synchronous.


	  var value = getSnapshot();

	  {
	    if (!didWarnUncachedGetSnapshot) {
	      var cachedValue = getSnapshot();

	      if (!objectIs(value, cachedValue)) {
	        error('The result of getSnapshot should be cached to avoid an infinite loop');

	        didWarnUncachedGetSnapshot = true;
	      }
	    }
	  } // Because updates are synchronous, we don't queue them. Instead we force a
	  // re-render whenever the subscribed state changes by updating an some
	  // arbitrary useState hook. Then, during render, we call getSnapshot to read
	  // the current value.
	  //
	  // Because we don't actually use the state returned by the useState hook, we
	  // can save a bit of memory by storing other stuff in that slot.
	  //
	  // To implement the early bailout, we need to track some things on a mutable
	  // object. Usually, we would put that in a useRef hook, but we can stash it in
	  // our useState hook instead.
	  //
	  // To force a re-render, we call forceUpdate({inst}). That works because the
	  // new object always fails an equality check.


	  var _useState = useState({
	    inst: {
	      value: value,
	      getSnapshot: getSnapshot
	    }
	  }),
	      inst = _useState[0].inst,
	      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
	  // in the layout phase so we can access it during the tearing check that
	  // happens on subscribe.


	  useLayoutEffect(function () {
	    inst.value = value;
	    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
	    // commit phase if there was an interleaved mutation. In concurrent mode
	    // this can happen all the time, but even in synchronous mode, an earlier
	    // effect may have mutated the store.

	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst: inst
	      });
	    }
	  }, [subscribe, value, getSnapshot]);
	  useEffect(function () {
	    // Check for changes right before subscribing. Subsequent changes will be
	    // detected in the subscription handler.
	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst: inst
	      });
	    }

	    var handleStoreChange = function () {
	      // TODO: Because there is no cross-renderer API for batching updates, it's
	      // up to the consumer of this library to wrap their subscription event
	      // with unstable_batchedUpdates. Should we try to detect when this isn't
	      // the case and print a warning in development?
	      // The store changed. Check if the snapshot changed since the last time we
	      // read from the store.
	      if (checkIfSnapshotChanged(inst)) {
	        // Force a re-render.
	        forceUpdate({
	          inst: inst
	        });
	      }
	    }; // Subscribe to the store and return a clean-up function.


	    return subscribe(handleStoreChange);
	  }, [subscribe]);
	  useDebugValue(value);
	  return value;
	}

	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  var prevValue = inst.value;

	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(prevValue, nextValue);
	  } catch (error) {
	    return true;
	  }
	}

	function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
	  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	  // React do not expose a way to check if we're hydrating. So users of the shim
	  // will need to track that themselves and return the correct value
	  // from `getSnapshot`.
	  return getSnapshot();
	}

	var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

	var isServerEnvironment = !canUseDOM;

	var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
	var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

	exports.useSyncExternalStore = useSyncExternalStore$2;
	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	}
	        
	  })();
	}
	});

	var shim = createCommonjsModule(function (module) {

	{
	  module.exports = useSyncExternalStoreShim_development;
	}
	});

	var withSelector_development = createCommonjsModule(function (module, exports) {

	{
	  (function() {

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	}
	          var React = React__default['default'];
	var shim$1 = shim;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	var useSyncExternalStore = shim$1.useSyncExternalStore;

	// for CommonJS interop.

	var useRef = React.useRef,
	    useEffect = React.useEffect,
	    useMemo = React.useMemo,
	    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

	function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
	  // Use this to track the rendered snapshot.
	  var instRef = useRef(null);
	  var inst;

	  if (instRef.current === null) {
	    inst = {
	      hasValue: false,
	      value: null
	    };
	    instRef.current = inst;
	  } else {
	    inst = instRef.current;
	  }

	  var _useMemo = useMemo(function () {
	    // Track the memoized state using closure variables that are local to this
	    // memoized instance of a getSnapshot function. Intentionally not using a
	    // useRef hook, because that state would be shared across all concurrent
	    // copies of the hook/component.
	    var hasMemo = false;
	    var memoizedSnapshot;
	    var memoizedSelection;

	    var memoizedSelector = function (nextSnapshot) {
	      if (!hasMemo) {
	        // The first time the hook is called, there is no memoized result.
	        hasMemo = true;
	        memoizedSnapshot = nextSnapshot;

	        var _nextSelection = selector(nextSnapshot);

	        if (isEqual !== undefined) {
	          // Even if the selector has changed, the currently rendered selection
	          // may be equal to the new selection. We should attempt to reuse the
	          // current value if possible, to preserve downstream memoizations.
	          if (inst.hasValue) {
	            var currentSelection = inst.value;

	            if (isEqual(currentSelection, _nextSelection)) {
	              memoizedSelection = currentSelection;
	              return currentSelection;
	            }
	          }
	        }

	        memoizedSelection = _nextSelection;
	        return _nextSelection;
	      } // We may be able to reuse the previous invocation's result.

	      
	      //console.log("Memoized selector: ", {memoizedSnapshot, nextSnapshot, identical: memoizedSnapshot === nextSnapshot});


	      // We may be able to reuse the previous invocation's result.
	      var prevSnapshot = memoizedSnapshot;
	      var prevSelection = memoizedSelection;

	      if (objectIs(prevSnapshot, nextSnapshot)) {
	        // The snapshot is the same as last time. Reuse the previous selection.
	        return prevSelection;
	      } // The snapshot has changed, so we need to compute a new selection.


	      // The snapshot has changed, so we need to compute a new selection.
	      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
	      // has changed. If it hasn't, return the previous selection. That signals
	      // to React that the selections are conceptually equal, and we can bail
	      // out of rendering.

	      // If a custom isEqual function is provided, use that to check if the data
	      // has changed. If it hasn't, return the previous selection. That signals
	      // to React that the selections are conceptually equal, and we can bail
	      // out of rendering.
	      //console.log("Selections: ", {prevSelection, nextSelection, equal: prevSelection === nextSelection})
	      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
	        return prevSelection;
	      }

	      memoizedSnapshot = nextSnapshot;
	      memoizedSelection = nextSelection;
	      return nextSelection;
	    }; // Assigning this to a constant so that Flow knows it can't change.


	    // Assigning this to a constant so that Flow knows it can't change.
	    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

	    var getSnapshotWithSelector = function () {
	      //console.log("getSnapshotWithSelector")
	      return memoizedSelector(getSnapshot());
	    };

	    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
	      return memoizedSelector(maybeGetServerSnapshot());
	    };
	    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
	  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
	      getSelection = _useMemo[0],
	      getServerSelection = _useMemo[1];

	  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
	  useEffect(function () {
	    inst.hasValue = true;
	    inst.value = value;
	  }, [value]);
	  useDebugValue(value);
	  return value;
	}

	exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	}
	        
	  })();
	}
	});

	var withSelector = createCommonjsModule(function (module) {

	{
	  module.exports = withSelector_development;
	}
	});

	// Default to a dummy "batch" implementation that just runs the callback
	function defaultNoopBatch(callback) {
	  callback();
	}

	let batch = defaultNoopBatch; // Allow injecting another batching function later

	const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

	const getBatch = () => batch;

	const ContextKey = Symbol.for(`react-redux-context`);
	const gT = typeof globalThis !== "undefined" ? globalThis :
	/* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
	{};

	function getContext() {
	  var _gT$ContextKey;

	  if (!React__namespace.createContext) return {};
	  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = new Map();
	  let realContext = contextMap.get(React__namespace.createContext);

	  if (!realContext) {
	    realContext = React__namespace.createContext(null);

	    {
	      realContext.displayName = 'ReactRedux';
	    }

	    contextMap.set(React__namespace.createContext, realContext);
	  }

	  return realContext;
	}

	const ReactReduxContext = /*#__PURE__*/getContext();

	/**
	 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
	 * hook that you should usually not need to call directly.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useReduxContext` hook bound to the specified context.
	 */
	function createReduxContextHook(context = ReactReduxContext) {
	  return function useReduxContext() {
	    const contextValue = React.useContext(context);

	    if (!contextValue) {
	      throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
	    }

	    return contextValue;
	  };
	}
	/**
	 * A hook to access the value of the `ReactReduxContext`. This is a low-level
	 * hook that you should usually not need to call directly.
	 *
	 * @returns {any} the value of the `ReactReduxContext`
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useReduxContext } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const { store } = useReduxContext()
	 *   return <div>{store.getState()}</div>
	 * }
	 */

	const useReduxContext = /*#__PURE__*/createReduxContextHook();

	const notInitialized = () => {
	  throw new Error('uSES not initialized!');
	};

	let useSyncExternalStoreWithSelector = notInitialized;
	const initializeUseSelector = fn => {
	  useSyncExternalStoreWithSelector = fn;
	};

	const refEquality = (a, b) => a === b;
	/**
	 * Hook factory, which creates a `useSelector` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useSelector` hook bound to the specified context.
	 */


	function createSelectorHook(context = ReactReduxContext) {
	  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
	  return function useSelector(selector, equalityFnOrOptions = {}) {
	    const {
	      equalityFn = refEquality,
	      stabilityCheck = undefined,
	      noopCheck = undefined
	    } = typeof equalityFnOrOptions === 'function' ? {
	      equalityFn: equalityFnOrOptions
	    } : equalityFnOrOptions;

	    {
	      if (!selector) {
	        throw new Error(`You must pass a selector to useSelector`);
	      }

	      if (typeof selector !== 'function') {
	        throw new Error(`You must pass a function as a selector to useSelector`);
	      }

	      if (typeof equalityFn !== 'function') {
	        throw new Error(`You must pass a function as an equality function to useSelector`);
	      }
	    }

	    const {
	      store,
	      subscription,
	      getServerState,
	      stabilityCheck: globalStabilityCheck,
	      noopCheck: globalNoopCheck
	    } = useReduxContext$1();
	    const firstRun = React.useRef(true);
	    const wrappedSelector = React.useCallback({
	      [selector.name](state) {
	        const selected = selector(state);

	        {
	          const finalStabilityCheck = typeof stabilityCheck === 'undefined' ? globalStabilityCheck : stabilityCheck;

	          if (finalStabilityCheck === 'always' || finalStabilityCheck === 'once' && firstRun.current) {
	            const toCompare = selector(state);

	            if (!equalityFn(selected, toCompare)) {
	              let stack = undefined;

	              try {
	                throw new Error();
	              } catch (e) {
	                ({
	                  stack
	                } = e);
	              }

	              console.warn('Selector ' + (selector.name || 'unknown') + ' returned a different result when called with the same parameters. This can lead to unnecessary rerenders.' + '\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization', {
	                state,
	                selected,
	                selected2: toCompare,
	                stack
	              });
	            }
	          }

	          const finalNoopCheck = typeof noopCheck === 'undefined' ? globalNoopCheck : noopCheck;

	          if (finalNoopCheck === 'always' || finalNoopCheck === 'once' && firstRun.current) {
	            // @ts-ignore
	            if (selected === state) {
	              let stack = undefined;

	              try {
	                throw new Error();
	              } catch (e) {
	                ({
	                  stack
	                } = e);
	              }

	              console.warn('Selector ' + (selector.name || 'unknown') + ' returned the root state when called. This can lead to unnecessary rerenders.' + '\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.', {
	                stack
	              });
	            }
	          }

	          if (firstRun.current) firstRun.current = false;
	        }

	        return selected;
	      }

	    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
	    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
	    React.useDebugValue(selectedState);
	    return selectedState;
	  };
	}
	/**
	 * A hook to access the redux store's state. This hook takes a selector function
	 * as an argument. The selector is called with the store state.
	 *
	 * This hook takes an optional equality comparison function as the second parameter
	 * that allows you to customize the way the selected state is compared to determine
	 * whether the component needs to be re-rendered.
	 *
	 * @param {Function} selector the selector function
	 * @param {Function=} equalityFn the function that will be used to determine equality
	 *
	 * @returns {any} the selected state
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useSelector } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const counter = useSelector(state => state.counter)
	 *   return <div>{counter}</div>
	 * }
	 */

	const useSelector = /*#__PURE__*/createSelectorHook();

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var reactIs_development$1 = createCommonjsModule(function (module, exports) {



	{
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}
	});

	var reactIs$1 = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development$1;
	}
	});

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs$1.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	var reactIs_development = createCommonjsModule(function (module, exports) {

	{
	  (function() {

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_SERVER_CONTEXT_TYPE:
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isConcurrentMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	function isSuspenseList(object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	}

	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.SuspenseList = SuspenseList;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isSuspenseList = isSuspenseList;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}
	});

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development;
	}
	});

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */


	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	}

	function verify(selector, methodName) {
	  if (!selector) {
	    throw new Error(`Unexpected value for ${methodName} in connect.`);
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
	      warning(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
	  verify(mapStateToProps, 'mapStateToProps');
	  verify(mapDispatchToProps, 'mapDispatchToProps');
	  verify(mergeProps, 'mergeProps');
	}

	const _excluded$1 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
	  areStatesEqual,
	  areOwnPropsEqual,
	  areStatePropsEqual
	}) {
	  let hasRunAtLeastOnce = false;
	  let state;
	  let ownProps;
	  let stateProps;
	  let dispatchProps;
	  let mergedProps;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    const nextStateProps = mapStateToProps(state, ownProps);
	    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
	    state = nextState;
	    ownProps = nextOwnProps;
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}
	// TODO: Add more comments
	// The selector returned by selectorFactory will memoize its results,
	// allowing connect's shouldComponentUpdate to return false if final
	// props have not changed.
	function finalPropsSelectorFactory(dispatch, _ref) {
	  let {
	    initMapStateToProps,
	    initMapDispatchToProps,
	    initMergeProps
	  } = _ref,
	      options = _objectWithoutPropertiesLoose(_ref, _excluded$1);

	  const mapStateToProps = initMapStateToProps(dispatch, options);
	  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  const mergeProps = initMergeProps(dispatch, options);

	  {
	    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps);
	  }

	  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

	function bindActionCreators(actionCreators, dispatch) {
	  const boundActionCreators = {};

	  for (const key in actionCreators) {
	    const actionCreator = actionCreators[key];

	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
	    }
	  }

	  return boundActionCreators;
	}

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  let proto = Object.getPrototypeOf(obj);
	  if (proto === null) return true;
	  let baseProto = proto;

	  while (Object.getPrototypeOf(baseProto) !== null) {
	    baseProto = Object.getPrototypeOf(baseProto);
	  }

	  return proto === baseProto;
	}

	function verifyPlainObject(value, displayName, methodName) {
	  if (!isPlainObject(value)) {
	    warning(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
	  }
	}

	function wrapMapToPropsConstant( // * Note:
	//  It seems that the dispatch argument
	//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
	//  and a state object in some others (ex: whenMapStateToPropsIsMissing)
	// eslint-disable-next-line no-unused-vars
	getConstant) {
	  return function initConstantSelector(dispatch) {
	    const constant = getConstant(dispatch);

	    function constantSelector() {
	      return constant;
	    }

	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	//
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?

	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	//
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//

	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, {
	    displayName
	  }) {
	    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);
	    }; // allow detectFactoryAndVerify to get ownProps


	    proxy.dependsOnOwnProps = true;

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      let props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      verifyPlainObject(props, displayName, methodName);
	      return props;
	    };

	    return proxy;
	  };
	}

	function createInvalidArgFactory(arg, name) {
	  return (dispatch, options) => {
	    throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
	  };
	}

	function mapDispatchToPropsFactory(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(dispatch => // @ts-ignore
	  bindActionCreators(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? wrapMapToPropsConstant(dispatch => ({
	    dispatch
	  })) : typeof mapDispatchToProps === 'function' ? // @ts-ignore
	  wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : createInvalidArgFactory(mapDispatchToProps, 'mapDispatchToProps');
	}

	function mapStateToPropsFactory(mapStateToProps) {
	  return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
	  wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : createInvalidArgFactory(mapStateToProps, 'mapStateToProps');
	}

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  // @ts-ignore
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, {
	    displayName,
	    areMergedPropsEqual
	  }) {
	    let hasRunOnce = false;
	    let mergedProps;
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	        verifyPlainObject(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}
	function mergePropsFactory(mergeProps) {
	  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, 'mergeProps');
	}

	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	function createListenerCollection() {
	  const batch = getBatch();
	  let first = null;
	  let last = null;
	  return {
	    clear() {
	      first = null;
	      last = null;
	    },

	    notify() {
	      batch(() => {
	        let listener = first;

	        while (listener) {
	          listener.callback();
	          listener = listener.next;
	        }
	      });
	    },

	    get() {
	      let listeners = [];
	      let listener = first;

	      while (listener) {
	        listeners.push(listener);
	        listener = listener.next;
	      }

	      return listeners;
	    },

	    subscribe(callback) {
	      let isSubscribed = true;
	      let listener = last = {
	        callback,
	        next: null,
	        prev: last
	      };

	      if (listener.prev) {
	        listener.prev.next = listener;
	      } else {
	        first = listener;
	      }

	      return function unsubscribe() {
	        if (!isSubscribed || first === null) return;
	        isSubscribed = false;

	        if (listener.next) {
	          listener.next.prev = listener.prev;
	        } else {
	          last = listener.prev;
	        }

	        if (listener.prev) {
	          listener.prev.next = listener.next;
	        } else {
	          first = listener.next;
	        }
	      };
	    }

	  };
	}

	const nullListeners = {
	  notify() {},

	  get: () => []
	};
	function createSubscription(store, parentSub) {
	  let unsubscribe;
	  let listeners = nullListeners; // Reasons to keep the subscription active

	  let subscriptionsAmount = 0; // Is this specific subscription subscribed (or only nested ones?)

	  let selfSubscribed = false;

	  function addNestedSub(listener) {
	    trySubscribe();
	    const cleanupListener = listeners.subscribe(listener); // cleanup nested sub

	    let removed = false;
	    return () => {
	      if (!removed) {
	        removed = true;
	        cleanupListener();
	        tryUnsubscribe();
	      }
	    };
	  }

	  function notifyNestedSubs() {
	    listeners.notify();
	  }

	  function handleChangeWrapper() {
	    if (subscription.onStateChange) {
	      subscription.onStateChange();
	    }
	  }

	  function isSubscribed() {
	    return selfSubscribed;
	  }

	  function trySubscribe() {
	    subscriptionsAmount++;

	    if (!unsubscribe) {
	      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
	      listeners = createListenerCollection();
	    }
	  }

	  function tryUnsubscribe() {
	    subscriptionsAmount--;

	    if (unsubscribe && subscriptionsAmount === 0) {
	      unsubscribe();
	      unsubscribe = undefined;
	      listeners.clear();
	      listeners = nullListeners;
	    }
	  }

	  function trySubscribeSelf() {
	    if (!selfSubscribed) {
	      selfSubscribed = true;
	      trySubscribe();
	    }
	  }

	  function tryUnsubscribeSelf() {
	    if (selfSubscribed) {
	      selfSubscribed = false;
	      tryUnsubscribe();
	    }
	  }

	  const subscription = {
	    addNestedSub,
	    notifyNestedSubs,
	    handleChangeWrapper,
	    isSubscribed,
	    trySubscribe: trySubscribeSelf,
	    tryUnsubscribe: tryUnsubscribeSelf,
	    getListeners: () => listeners
	  };
	  return subscription;
	}

	// To get around it, we can conditionally useEffect on the server (no-op) and
	// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
	// subscription callback always has the selector from the latest render commit
	// available, otherwise a store update may happen between render and the effect,
	// which may cause missed updates; we also must ensure the store subscription
	// is created synchronously, otherwise a store update may occur before the
	// subscription is created and an inconsistent state may be observed
	// Matches logic in React's `shared/ExecutionEnvironment` file

	const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
	const useIsomorphicLayoutEffect = canUseDOM ? React__namespace.useLayoutEffect : React__namespace.useEffect;

	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  const keysA = Object.keys(objA);
	  const keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;

	  for (let i = 0; i < keysA.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	const _excluded = ["reactReduxForwardedRef"];
	let useSyncExternalStore = notInitialized;
	const initializeConnect = fn => {
	  useSyncExternalStore = fn;
	}; // Define some constant arrays just to avoid re-creating these
	const NO_SUBSCRIPTION_ARRAY = [null, null]; // Attempts to stringify whatever not-really-a-component value we were given
	// for logging in an error message

	const stringifyComponent = Comp => {
	  try {
	    return JSON.stringify(Comp);
	  } catch (err) {
	    return String(Comp);
	  }
	};

	// This is "just" a `useLayoutEffect`, but with two modifications:
	// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
	// - we extract this to a separate function to avoid closing over values
	//   and causing memory leaks
	function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
	  useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
	} // Effect callback, extracted: assign the latest props values to refs for later usage


	function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
	childPropsFromStoreUpdate, notifyNestedSubs) {
	  // We want to capture the wrapper props and child props we used for later comparisons
	  lastWrapperProps.current = wrapperProps;
	  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

	  if (childPropsFromStoreUpdate.current) {
	    childPropsFromStoreUpdate.current = null;
	    notifyNestedSubs();
	  }
	} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
	// check for updates after dispatched actions, and trigger re-renders.


	function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
	additionalSubscribeListener) {
	  // If we're not subscribed to the store, nothing to do here
	  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

	  let didUnsubscribe = false;
	  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

	  const checkForUpdates = () => {
	    if (didUnsubscribe || !isMounted.current) {
	      // Don't run stale listeners.
	      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
	      return;
	    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


	    const latestStoreState = store.getState();
	    let newChildProps, error;

	    try {
	      // Actually run the selector with the most recent store state and wrapper props
	      // to determine what the child props should be
	      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
	    } catch (e) {
	      error = e;
	      lastThrownError = e;
	    }

	    if (!error) {
	      lastThrownError = null;
	    } // If the child props haven't changed, nothing to do here - cascade the subscription update


	    if (newChildProps === lastChildProps.current) {
	      if (!renderIsScheduled.current) {
	        notifyNestedSubs();
	      }
	    } else {
	      // Save references to the new child props.  Note that we track the "child props from store update"
	      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
	      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
	      // forcing another re-render, which we don't want.
	      lastChildProps.current = newChildProps;
	      childPropsFromStoreUpdate.current = newChildProps;
	      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
	      // Trigger the React `useSyncExternalStore` subscriber

	      additionalSubscribeListener();
	    }
	  }; // Actually subscribe to the nearest connected ancestor (or store)


	  subscription.onStateChange = checkForUpdates;
	  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
	  // changed since we began.

	  checkForUpdates();

	  const unsubscribeWrapper = () => {
	    didUnsubscribe = true;
	    subscription.tryUnsubscribe();
	    subscription.onStateChange = null;

	    if (lastThrownError) {
	      // It's possible that we caught an error due to a bad mapState function, but the
	      // parent re-rendered without this component and we're about to unmount.
	      // This shouldn't happen as long as we do top-down subscriptions correctly, but
	      // if we ever do those wrong, this throw will surface the error in our tests.
	      // In that case, throw the error from here so it doesn't get lost.
	      throw lastThrownError;
	    }
	  };

	  return unsubscribeWrapper;
	} // Reducer initial state creation for our update reducer

	function strictEqual(a, b) {
	  return a === b;
	}
	/**
	 * Infers the type of props that a connector will inject into a component.
	 */


	let hasWarnedAboutDeprecatedPureOption = false;
	/**
	 * Connects a React component to a Redux store.
	 *
	 * - Without arguments, just wraps the component, without changing the behavior / props
	 *
	 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
	 * is to override ownProps (as stated in the docs), so what remains is everything that's
	 * not a state or dispatch prop
	 *
	 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
	 * should be valid component props, because it depends on mergeProps implementation.
	 * As such, it is the user's responsibility to extend ownProps interface from state or
	 * dispatch props or both when applicable
	 *
	 * @param mapStateToProps A function that extracts values from state
	 * @param mapDispatchToProps Setup for dispatching actions
	 * @param mergeProps Optional callback to merge state and dispatch props together
	 * @param options Options for configuring the connection
	 *
	 */

	function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
	  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
	  // @ts-ignore
	  pure,
	  areStatesEqual = strictEqual,
	  areOwnPropsEqual = shallowEqual,
	  areStatePropsEqual = shallowEqual,
	  areMergedPropsEqual = shallowEqual,
	  // use React's forwardRef to expose a ref of the wrapped component
	  forwardRef = false,
	  // the context consumer to use
	  context = ReactReduxContext
	} = {}) {
	  {
	    if (pure !== undefined && !hasWarnedAboutDeprecatedPureOption) {
	      hasWarnedAboutDeprecatedPureOption = true;
	      warning('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
	    }
	  }

	  const Context = context;
	  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
	  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
	  const initMergeProps = mergePropsFactory(mergeProps);
	  const shouldHandleStateChanges = Boolean(mapStateToProps);

	  const wrapWithConnect = WrappedComponent => {
	    if (!reactIs.isValidElementType(WrappedComponent)) {
	      throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
	    }

	    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	    const displayName = `Connect(${wrappedComponentName})`;
	    const selectorFactoryOptions = {
	      shouldHandleStateChanges,
	      displayName,
	      wrappedComponentName,
	      WrappedComponent,
	      // @ts-ignore
	      initMapStateToProps,
	      // @ts-ignore
	      initMapDispatchToProps,
	      initMergeProps,
	      areStatesEqual,
	      areStatePropsEqual,
	      areOwnPropsEqual,
	      areMergedPropsEqual
	    };

	    function ConnectFunction(props) {
	      const [propsContext, reactReduxForwardedRef, wrapperProps] = React__namespace.useMemo(() => {
	        // Distinguish between actual "data" props that were passed to the wrapper component,
	        // and values needed to control behavior (forwarded refs, alternate context instances).
	        // To maintain the wrapperProps object reference, memoize this destructuring.
	        const {
	          reactReduxForwardedRef
	        } = props,
	              wrapperProps = _objectWithoutPropertiesLoose(props, _excluded);

	        return [props.context, reactReduxForwardedRef, wrapperProps];
	      }, [props]);
	      const ContextToUse = React__namespace.useMemo(() => {
	        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
	        // Memoize the check that determines which context instance we should use.
	        return propsContext && propsContext.Consumer && // @ts-ignore
	        reactIs.isContextConsumer( /*#__PURE__*/React__namespace.createElement(propsContext.Consumer, null)) ? propsContext : Context;
	      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

	      const contextValue = React__namespace.useContext(ContextToUse); // The store _must_ exist as either a prop or in context.
	      // We'll check to see if it _looks_ like a Redux store first.
	      // This allows us to pass through a `store` prop that is just a plain value.

	      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
	      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

	      if (!didStoreComeFromProps && !didStoreComeFromContext) {
	        throw new Error(`Could not find "store" in the context of ` + `"${displayName}". Either wrap the root component in a <Provider>, ` + `or pass a custom React context provider to <Provider> and the corresponding ` + `React context consumer to ${displayName} in connect options.`);
	      } // Based on the previous check, one of these must be true


	      const store = didStoreComeFromProps ? props.store : contextValue.store;
	      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
	      const childPropsSelector = React__namespace.useMemo(() => {
	        // The child props selector needs the store reference as an input.
	        // Re-create this selector whenever the store changes.
	        return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
	      }, [store]);
	      const [subscription, notifyNestedSubs] = React__namespace.useMemo(() => {
	        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.

	        const subscription = createSubscription(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
	        // the middle of the notification loop, where `subscription` will then be null. This can
	        // probably be avoided if Subscription's listeners logic is changed to not call listeners
	        // that have been unsubscribed in the  middle of the notification loop.

	        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
	        return [subscription, notifyNestedSubs];
	      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
	      // and memoize that value to avoid unnecessary context updates.

	      const overriddenContextValue = React__namespace.useMemo(() => {
	        if (didStoreComeFromProps) {
	          // This component is directly subscribed to a store from props.
	          // We don't want descendants reading from this store - pass down whatever
	          // the existing context value is from the nearest connected ancestor.
	          return contextValue;
	        } // Otherwise, put this component's subscription instance into context, so that
	        // connected descendants won't update until after this component is done


	        return _extends({}, contextValue, {
	          subscription
	        });
	      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

	      const lastChildProps = React__namespace.useRef();
	      const lastWrapperProps = React__namespace.useRef(wrapperProps);
	      const childPropsFromStoreUpdate = React__namespace.useRef();
	      const renderIsScheduled = React__namespace.useRef(false);
	      React__namespace.useRef(false);
	      const isMounted = React__namespace.useRef(false);
	      const latestSubscriptionCallbackError = React__namespace.useRef();
	      useIsomorphicLayoutEffect(() => {
	        isMounted.current = true;
	        return () => {
	          isMounted.current = false;
	        };
	      }, []);
	      const actualChildPropsSelector = React__namespace.useMemo(() => {
	        const selector = () => {
	          // Tricky logic here:
	          // - This render may have been triggered by a Redux store update that produced new child props
	          // - However, we may have gotten new wrapper props after that
	          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
	          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
	          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
	          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
	            return childPropsFromStoreUpdate.current;
	          } // TODO We're reading the store directly in render() here. Bad idea?
	          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
	          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
	          // to determine what the child props should be.


	          return childPropsSelector(store.getState(), wrapperProps);
	        };

	        return selector;
	      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
	      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
	      // just useEffect instead to avoid the warning, since neither will run anyway.

	      const subscribeForReact = React__namespace.useMemo(() => {
	        const subscribe = reactListener => {
	          if (!subscription) {
	            return () => {};
	          }

	          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
	          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
	        };

	        return subscribe;
	      }, [subscription]);
	      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
	      let actualChildProps;

	      try {
	        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
	        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
	        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
	        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
	      } catch (err) {
	        if (latestSubscriptionCallbackError.current) {
	          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
	        }

	        throw err;
	      }

	      useIsomorphicLayoutEffect(() => {
	        latestSubscriptionCallbackError.current = undefined;
	        childPropsFromStoreUpdate.current = undefined;
	        lastChildProps.current = actualChildProps;
	      }); // Now that all that's done, we can finally try to actually render the child component.
	      // We memoize the elements for the rendered child component as an optimization.

	      const renderedWrappedComponent = React__namespace.useMemo(() => {
	        return (
	          /*#__PURE__*/
	          // @ts-ignore
	          React__namespace.createElement(WrappedComponent, _extends({}, actualChildProps, {
	            ref: reactReduxForwardedRef
	          }))
	        );
	      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
	      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

	      const renderedChild = React__namespace.useMemo(() => {
	        if (shouldHandleStateChanges) {
	          // If this component is subscribed to store updates, we need to pass its own
	          // subscription instance down to our descendants. That means rendering the same
	          // Context instance, and putting a different value into the context.
	          return /*#__PURE__*/React__namespace.createElement(ContextToUse.Provider, {
	            value: overriddenContextValue
	          }, renderedWrappedComponent);
	        }

	        return renderedWrappedComponent;
	      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
	      return renderedChild;
	    }

	    const _Connect = React__namespace.memo(ConnectFunction);

	    // Add a hacky cast to get the right output type
	    const Connect = _Connect;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = ConnectFunction.displayName = displayName;

	    if (forwardRef) {
	      const _forwarded = React__namespace.forwardRef(function forwardConnectRef(props, ref) {
	        // @ts-ignore
	        return /*#__PURE__*/React__namespace.createElement(Connect, _extends({}, props, {
	          reactReduxForwardedRef: ref
	        }));
	      });

	      const forwarded = _forwarded;
	      forwarded.displayName = displayName;
	      forwarded.WrappedComponent = WrappedComponent;
	      return hoistNonReactStatics_cjs(forwarded, WrappedComponent);
	    }

	    return hoistNonReactStatics_cjs(Connect, WrappedComponent);
	  };

	  return wrapWithConnect;
	}

	function Provider({
	  store,
	  context,
	  children,
	  serverState,
	  stabilityCheck = 'once',
	  noopCheck = 'once'
	}) {
	  const contextValue = React__namespace.useMemo(() => {
	    const subscription = createSubscription(store);
	    return {
	      store,
	      subscription,
	      getServerState: serverState ? () => serverState : undefined,
	      stabilityCheck,
	      noopCheck
	    };
	  }, [store, serverState, stabilityCheck, noopCheck]);
	  const previousState = React__namespace.useMemo(() => store.getState(), [store]);
	  useIsomorphicLayoutEffect(() => {
	    const {
	      subscription
	    } = contextValue;
	    subscription.onStateChange = subscription.notifyNestedSubs;
	    subscription.trySubscribe();

	    if (previousState !== store.getState()) {
	      subscription.notifyNestedSubs();
	    }

	    return () => {
	      subscription.tryUnsubscribe();
	      subscription.onStateChange = undefined;
	    };
	  }, [contextValue, previousState]);
	  const Context = context || ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

	  return /*#__PURE__*/React__namespace.createElement(Context.Provider, {
	    value: contextValue
	  }, children);
	}

	/**
	 * Hook factory, which creates a `useStore` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useStore` hook bound to the specified context.
	 */

	function createStoreHook(context = ReactReduxContext) {
	  const useReduxContext$1 = // @ts-ignore
	  context === ReactReduxContext ? useReduxContext : // @ts-ignore
	  createReduxContextHook(context);
	  return function useStore() {
	    const {
	      store
	    } = useReduxContext$1(); // @ts-ignore

	    return store;
	  };
	}
	/**
	 * A hook to access the redux store.
	 *
	 * @returns {any} the redux store
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useStore } from 'react-redux'
	 *
	 * export const ExampleComponent = () => {
	 *   const store = useStore()
	 *   return <div>{store.getState()}</div>
	 * }
	 */

	const useStore = /*#__PURE__*/createStoreHook();

	/**
	 * Hook factory, which creates a `useDispatch` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useDispatch` hook bound to the specified context.
	 */

	function createDispatchHook(context = ReactReduxContext) {
	  const useStore$1 = // @ts-ignore
	  context === ReactReduxContext ? useStore : createStoreHook(context);
	  return function useDispatch() {
	    const store = useStore$1(); // @ts-ignore

	    return store.dispatch;
	  };
	}
	/**
	 * A hook to access the redux `dispatch` function.
	 *
	 * @returns {any|function} redux store's `dispatch` function
	 *
	 * @example
	 *
	 * import React, { useCallback } from 'react'
	 * import { useDispatch } from 'react-redux'
	 *
	 * export const CounterComponent = ({ value }) => {
	 *   const dispatch = useDispatch()
	 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
	 *   return (
	 *     <div>
	 *       <span>{value}</span>
	 *       <button onClick={increaseCounter}>Increase counter</button>
	 *     </div>
	 *   )
	 * }
	 */

	const useDispatch = /*#__PURE__*/createDispatchHook();

	// The primary entry point assumes we're working with standard ReactDOM/RN, but
	initializeUseSelector(withSelector.useSyncExternalStoreWithSelector);
	initializeConnect(shim.useSyncExternalStore); // Enable batched updates in our subscriptions for use
	// with standard React renderers (ReactDOM, React Native)

	setBatch(reactDom.unstable_batchedUpdates);

	Object.defineProperty(exports, 'batch', {
		enumerable: true,
		get: function () {
			return reactDom.unstable_batchedUpdates;
		}
	});
	exports.Provider = Provider;
	exports.ReactReduxContext = ReactReduxContext;
	exports.connect = connect;
	exports.createDispatchHook = createDispatchHook;
	exports.createSelectorHook = createSelectorHook;
	exports.createStoreHook = createStoreHook;
	exports.shallowEqual = shallowEqual;
	exports.useDispatch = useDispatch;
	exports.useSelector = useSelector;
	exports.useStore = useStore;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
