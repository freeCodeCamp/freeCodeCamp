"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/query/react/index.ts
var react_exports = {};
__export(react_exports, {
  ApiProvider: () => ApiProvider,
  UNINITIALIZED_VALUE: () => UNINITIALIZED_VALUE,
  createApi: () => createApi,
  reactHooksModule: () => reactHooksModule,
  reactHooksModuleName: () => reactHooksModuleName
});
module.exports = __toCommonJS(react_exports);

// src/query/react/rtkqImports.ts
var import_query = require("@reduxjs/toolkit/query");

// src/query/react/module.ts
var import_toolkit2 = require("@reduxjs/toolkit");
var import_react_redux2 = require("react-redux");
var import_reselect = require("reselect");

// src/query/utils/capitalize.ts
function capitalize(str) {
  return str.replace(str[0], str[0].toUpperCase());
}

// src/query/utils/countObjectKeys.ts
function countObjectKeys(obj) {
  let count = 0;
  for (const _key in obj) {
    count++;
  }
  return count;
}

// src/query/endpointDefinitions.ts
var ENDPOINT_QUERY = "query" /* query */;
var ENDPOINT_MUTATION = "mutation" /* mutation */;
var ENDPOINT_INFINITEQUERY = "infinitequery" /* infinitequery */;
function isQueryDefinition(e) {
  return e.type === ENDPOINT_QUERY;
}
function isMutationDefinition(e) {
  return e.type === ENDPOINT_MUTATION;
}
function isInfiniteQueryDefinition(e) {
  return e.type === ENDPOINT_INFINITEQUERY;
}

// src/query/tsHelpers.ts
function safeAssign(target, ...args) {
  return Object.assign(target, ...args);
}

// src/query/react/buildHooks.ts
var import_toolkit = require("@reduxjs/toolkit");

// src/query/react/reactImports.ts
var import_react = require("react");

// src/query/react/reactReduxImports.ts
var import_react_redux = require("react-redux");

// src/query/react/constants.ts
var UNINITIALIZED_VALUE = Symbol();

// src/query/react/useSerializedStableValue.ts
function useStableQueryArgs(queryArgs) {
  const cache = (0, import_react.useRef)(queryArgs);
  const copy = (0, import_react.useMemo)(() => (0, import_query.copyWithStructuralSharing)(cache.current, queryArgs), [queryArgs]);
  (0, import_react.useEffect)(() => {
    if (cache.current !== copy) {
      cache.current = copy;
    }
  }, [copy]);
  return copy;
}

// src/query/react/useShallowStableValue.ts
function useShallowStableValue(value) {
  const cache = (0, import_react.useRef)(value);
  (0, import_react.useEffect)(() => {
    if (!(0, import_react_redux.shallowEqual)(cache.current, value)) {
      cache.current = value;
    }
  }, [value]);
  return (0, import_react_redux.shallowEqual)(cache.current, value) ? cache.current : value;
}

// src/query/react/buildHooks.ts
var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? import_react.useLayoutEffect : import_react.useEffect;
var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
var noPendingQueryStateSelector = (selected) => {
  if (selected.isUninitialized) {
    return {
      ...selected,
      isUninitialized: false,
      isFetching: true,
      isLoading: selected.data !== void 0 ? false : true,
      // This is the one place where we still have to use `QueryStatus` as an enum,
      // since it's the only reference in the React package and not in the core.
      status: import_query.QueryStatus.pending
    };
  }
  return selected;
};
function pick(obj, ...keys) {
  const ret = {};
  keys.forEach((key) => {
    ret[key] = obj[key];
  });
  return ret;
}
var COMMON_HOOK_DEBUG_FIELDS = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function buildHooks({
  api,
  moduleOptions: {
    batch,
    hooks: {
      useDispatch,
      useSelector,
      useStore
    },
    unstable__sideEffectsInRender,
    createSelector
  },
  serializeQueryArgs,
  context
}) {
  const usePossiblyImmediateEffect = unstable__sideEffectsInRender ? (cb) => cb() : import_react.useEffect;
  const unsubscribePromiseRef = (ref) => ref.current?.unsubscribe?.();
  const endpointDefinitions = context.endpointDefinitions;
  return {
    buildQueryHooks,
    buildInfiniteQueryHooks,
    buildMutationHook,
    usePrefetch
  };
  function queryStatePreSelector(currentState, lastResult, queryArgs) {
    if (lastResult?.endpointName && currentState.isUninitialized) {
      const {
        endpointName
      } = lastResult;
      const endpointDefinition = endpointDefinitions[endpointName];
      if (queryArgs !== import_query.skipToken && serializeQueryArgs({
        queryArgs: lastResult.originalArgs,
        endpointDefinition,
        endpointName
      }) === serializeQueryArgs({
        queryArgs,
        endpointDefinition,
        endpointName
      })) lastResult = void 0;
    }
    let data = currentState.isSuccess ? currentState.data : lastResult?.data;
    if (data === void 0) data = currentState.data;
    const hasData = data !== void 0;
    const isFetching = currentState.isLoading;
    const isLoading = (!lastResult || lastResult.isLoading || lastResult.isUninitialized) && !hasData && isFetching;
    const isSuccess = currentState.isSuccess || hasData && (isFetching && !lastResult?.isError || currentState.isUninitialized);
    return {
      ...currentState,
      data,
      currentData: currentState.data,
      isFetching,
      isLoading,
      isSuccess
    };
  }
  function infiniteQueryStatePreSelector(currentState, lastResult, queryArgs) {
    if (lastResult?.endpointName && currentState.isUninitialized) {
      const {
        endpointName
      } = lastResult;
      const endpointDefinition = endpointDefinitions[endpointName];
      if (queryArgs !== import_query.skipToken && serializeQueryArgs({
        queryArgs: lastResult.originalArgs,
        endpointDefinition,
        endpointName
      }) === serializeQueryArgs({
        queryArgs,
        endpointDefinition,
        endpointName
      })) lastResult = void 0;
    }
    let data = currentState.isSuccess ? currentState.data : lastResult?.data;
    if (data === void 0) data = currentState.data;
    const hasData = data !== void 0;
    const isFetching = currentState.isLoading;
    const isLoading = (!lastResult || lastResult.isLoading || lastResult.isUninitialized) && !hasData && isFetching;
    const isSuccess = currentState.isSuccess || isFetching && hasData;
    return {
      ...currentState,
      data,
      currentData: currentState.data,
      isFetching,
      isLoading,
      isSuccess
    };
  }
  function usePrefetch(endpointName, defaultOptions) {
    const dispatch = useDispatch();
    const stableDefaultOptions = useShallowStableValue(defaultOptions);
    return (0, import_react.useCallback)((arg, options) => dispatch(api.util.prefetch(endpointName, arg, {
      ...stableDefaultOptions,
      ...options
    })), [endpointName, dispatch, stableDefaultOptions]);
  }
  function useQuerySubscriptionCommonImpl(endpointName, arg, {
    refetchOnReconnect,
    refetchOnFocus,
    refetchOnMountOrArgChange,
    skip = false,
    pollingInterval = 0,
    skipPollingIfUnfocused = false,
    ...rest
  } = {}) {
    const {
      initiate
    } = api.endpoints[endpointName];
    const dispatch = useDispatch();
    const subscriptionSelectorsRef = (0, import_react.useRef)(void 0);
    if (!subscriptionSelectorsRef.current) {
      const returnedValue = dispatch(api.internalActions.internal_getRTKQSubscriptions());
      if (true) {
        if (typeof returnedValue !== "object" || typeof returnedValue?.type === "string") {
          throw new Error(false ? _formatProdErrorMessage(37) : `Warning: Middleware for RTK-Query API at reducerPath "${api.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        }
      }
      subscriptionSelectorsRef.current = returnedValue;
    }
    const stableArg = useStableQueryArgs(skip ? import_query.skipToken : arg);
    const stableSubscriptionOptions = useShallowStableValue({
      refetchOnReconnect,
      refetchOnFocus,
      pollingInterval,
      skipPollingIfUnfocused
    });
    const initialPageParam = rest.initialPageParam;
    const stableInitialPageParam = useShallowStableValue(initialPageParam);
    const refetchCachedPages = rest.refetchCachedPages;
    const stableRefetchCachedPages = useShallowStableValue(refetchCachedPages);
    const promiseRef = (0, import_react.useRef)(void 0);
    let {
      queryCacheKey,
      requestId
    } = promiseRef.current || {};
    let currentRenderHasSubscription = false;
    if (queryCacheKey && requestId) {
      currentRenderHasSubscription = subscriptionSelectorsRef.current.isRequestSubscribed(queryCacheKey, requestId);
    }
    const subscriptionRemoved = !currentRenderHasSubscription && promiseRef.current !== void 0;
    usePossiblyImmediateEffect(() => {
      if (subscriptionRemoved) {
        promiseRef.current = void 0;
      }
    }, [subscriptionRemoved]);
    usePossiblyImmediateEffect(() => {
      const lastPromise = promiseRef.current;
      if (typeof process !== "undefined" && false) {
        console.log(subscriptionRemoved);
      }
      if (stableArg === import_query.skipToken) {
        lastPromise?.unsubscribe();
        promiseRef.current = void 0;
        return;
      }
      const lastSubscriptionOptions = promiseRef.current?.subscriptionOptions;
      if (!lastPromise || lastPromise.arg !== stableArg) {
        lastPromise?.unsubscribe();
        const promise = dispatch(initiate(stableArg, {
          subscriptionOptions: stableSubscriptionOptions,
          forceRefetch: refetchOnMountOrArgChange,
          ...isInfiniteQueryDefinition(endpointDefinitions[endpointName]) ? {
            initialPageParam: stableInitialPageParam,
            refetchCachedPages: stableRefetchCachedPages
          } : {}
        }));
        promiseRef.current = promise;
      } else if (stableSubscriptionOptions !== lastSubscriptionOptions) {
        lastPromise.updateSubscriptionOptions(stableSubscriptionOptions);
      }
    }, [dispatch, initiate, refetchOnMountOrArgChange, stableArg, stableSubscriptionOptions, subscriptionRemoved, stableInitialPageParam, stableRefetchCachedPages, endpointName]);
    return [promiseRef, dispatch, initiate, stableSubscriptionOptions];
  }
  function buildUseQueryState(endpointName, preSelector) {
    const useQueryState = (arg, {
      skip = false,
      selectFromResult
    } = {}) => {
      const {
        select
      } = api.endpoints[endpointName];
      const stableArg = useStableQueryArgs(skip ? import_query.skipToken : arg);
      const lastValue = (0, import_react.useRef)(void 0);
      const selectDefaultResult = (0, import_react.useMemo)(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        createSelector([
          // @ts-ignore
          select(stableArg),
          (_, lastResult) => lastResult,
          (_) => stableArg
        ], preSelector, {
          memoizeOptions: {
            resultEqualityCheck: import_react_redux.shallowEqual
          }
        })
      ), [select, stableArg]);
      const querySelector = (0, import_react.useMemo)(() => selectFromResult ? createSelector([selectDefaultResult], selectFromResult, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : selectDefaultResult, [selectDefaultResult, selectFromResult]);
      const currentState = useSelector((state) => querySelector(state, lastValue.current), import_react_redux.shallowEqual);
      const store = useStore();
      const newLastValue = selectDefaultResult(store.getState(), lastValue.current);
      useIsomorphicLayoutEffect(() => {
        lastValue.current = newLastValue;
      }, [newLastValue]);
      return currentState;
    };
    return useQueryState;
  }
  function usePromiseRefUnsubscribeOnUnmount(promiseRef) {
    (0, import_react.useEffect)(() => {
      return () => {
        unsubscribePromiseRef(promiseRef);
        promiseRef.current = void 0;
      };
    }, [promiseRef]);
  }
  function refetchOrErrorIfUnmounted(promiseRef) {
    if (!promiseRef.current) throw new Error(false ? _formatProdErrorMessage2(38) : "Cannot refetch a query that has not been started yet.");
    return promiseRef.current.refetch();
  }
  function buildQueryHooks(endpointName) {
    const useQuerySubscription = (arg, options = {}) => {
      const [promiseRef] = useQuerySubscriptionCommonImpl(endpointName, arg, options);
      usePromiseRefUnsubscribeOnUnmount(promiseRef);
      return (0, import_react.useMemo)(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => refetchOrErrorIfUnmounted(promiseRef)
      }), [promiseRef]);
    };
    const useLazyQuerySubscription = ({
      refetchOnReconnect,
      refetchOnFocus,
      pollingInterval = 0,
      skipPollingIfUnfocused = false
    } = {}) => {
      const {
        initiate
      } = api.endpoints[endpointName];
      const dispatch = useDispatch();
      const [arg, setArg] = (0, import_react.useState)(UNINITIALIZED_VALUE);
      const promiseRef = (0, import_react.useRef)(void 0);
      const stableSubscriptionOptions = useShallowStableValue({
        refetchOnReconnect,
        refetchOnFocus,
        pollingInterval,
        skipPollingIfUnfocused
      });
      usePossiblyImmediateEffect(() => {
        const lastSubscriptionOptions = promiseRef.current?.subscriptionOptions;
        if (stableSubscriptionOptions !== lastSubscriptionOptions) {
          promiseRef.current?.updateSubscriptionOptions(stableSubscriptionOptions);
        }
      }, [stableSubscriptionOptions]);
      const subscriptionOptionsRef = (0, import_react.useRef)(stableSubscriptionOptions);
      usePossiblyImmediateEffect(() => {
        subscriptionOptionsRef.current = stableSubscriptionOptions;
      }, [stableSubscriptionOptions]);
      const trigger = (0, import_react.useCallback)(function(arg2, preferCacheValue = false) {
        let promise;
        batch(() => {
          unsubscribePromiseRef(promiseRef);
          promiseRef.current = promise = dispatch(initiate(arg2, {
            subscriptionOptions: subscriptionOptionsRef.current,
            forceRefetch: !preferCacheValue
          }));
          setArg(arg2);
        });
        return promise;
      }, [dispatch, initiate]);
      const reset = (0, import_react.useCallback)(() => {
        if (promiseRef.current?.queryCacheKey) {
          dispatch(api.internalActions.removeQueryResult({
            queryCacheKey: promiseRef.current?.queryCacheKey
          }));
        }
      }, [dispatch]);
      (0, import_react.useEffect)(() => {
        return () => {
          unsubscribePromiseRef(promiseRef);
        };
      }, []);
      (0, import_react.useEffect)(() => {
        if (arg !== UNINITIALIZED_VALUE && !promiseRef.current) {
          trigger(arg, true);
        }
      }, [arg, trigger]);
      return (0, import_react.useMemo)(() => [trigger, arg, {
        reset
      }], [trigger, arg, reset]);
    };
    const useQueryState = buildUseQueryState(endpointName, queryStatePreSelector);
    return {
      useQueryState,
      useQuerySubscription,
      useLazyQuerySubscription,
      useLazyQuery(options) {
        const [trigger, arg, {
          reset
        }] = useLazyQuerySubscription(options);
        const queryStateResults = useQueryState(arg, {
          ...options,
          skip: arg === UNINITIALIZED_VALUE
        });
        const info = (0, import_react.useMemo)(() => ({
          lastArg: arg
        }), [arg]);
        return (0, import_react.useMemo)(() => [trigger, {
          ...queryStateResults,
          reset
        }, info], [trigger, queryStateResults, reset, info]);
      },
      useQuery(arg, options) {
        const querySubscriptionResults = useQuerySubscription(arg, options);
        const queryStateResults = useQueryState(arg, {
          selectFromResult: arg === import_query.skipToken || options?.skip ? void 0 : noPendingQueryStateSelector,
          ...options
        });
        const debugValue = pick(queryStateResults, ...COMMON_HOOK_DEBUG_FIELDS);
        (0, import_react.useDebugValue)(debugValue);
        return (0, import_react.useMemo)(() => ({
          ...queryStateResults,
          ...querySubscriptionResults
        }), [queryStateResults, querySubscriptionResults]);
      }
    };
  }
  function buildInfiniteQueryHooks(endpointName) {
    const useInfiniteQuerySubscription = (arg, options = {}) => {
      const [promiseRef, dispatch, initiate, stableSubscriptionOptions] = useQuerySubscriptionCommonImpl(endpointName, arg, options);
      const subscriptionOptionsRef = (0, import_react.useRef)(stableSubscriptionOptions);
      usePossiblyImmediateEffect(() => {
        subscriptionOptionsRef.current = stableSubscriptionOptions;
      }, [stableSubscriptionOptions]);
      const hookRefetchCachedPages = options.refetchCachedPages;
      const stableHookRefetchCachedPages = useShallowStableValue(hookRefetchCachedPages);
      const trigger = (0, import_react.useCallback)(function(arg2, direction) {
        let promise;
        batch(() => {
          unsubscribePromiseRef(promiseRef);
          promiseRef.current = promise = dispatch(initiate(arg2, {
            subscriptionOptions: subscriptionOptionsRef.current,
            direction
          }));
        });
        return promise;
      }, [promiseRef, dispatch, initiate]);
      usePromiseRefUnsubscribeOnUnmount(promiseRef);
      const stableArg = useStableQueryArgs(options.skip ? import_query.skipToken : arg);
      const refetch = (0, import_react.useCallback)((options2) => {
        if (!promiseRef.current) throw new Error(false ? _formatProdErrorMessage3(38) : "Cannot refetch a query that has not been started yet.");
        const mergedOptions = {
          refetchCachedPages: options2?.refetchCachedPages ?? stableHookRefetchCachedPages
        };
        return promiseRef.current.refetch(mergedOptions);
      }, [promiseRef, stableHookRefetchCachedPages]);
      return (0, import_react.useMemo)(() => {
        const fetchNextPage = () => {
          return trigger(stableArg, "forward");
        };
        const fetchPreviousPage = () => {
          return trigger(stableArg, "backward");
        };
        return {
          trigger,
          /**
           * A method to manually refetch data for the query
           */
          refetch,
          fetchNextPage,
          fetchPreviousPage
        };
      }, [refetch, trigger, stableArg]);
    };
    const useInfiniteQueryState = buildUseQueryState(endpointName, infiniteQueryStatePreSelector);
    return {
      useInfiniteQueryState,
      useInfiniteQuerySubscription,
      useInfiniteQuery(arg, options) {
        const {
          refetch,
          fetchNextPage,
          fetchPreviousPage
        } = useInfiniteQuerySubscription(arg, options);
        const queryStateResults = useInfiniteQueryState(arg, {
          selectFromResult: arg === import_query.skipToken || options?.skip ? void 0 : noPendingQueryStateSelector,
          ...options
        });
        const debugValue = pick(queryStateResults, ...COMMON_HOOK_DEBUG_FIELDS, "hasNextPage", "hasPreviousPage");
        (0, import_react.useDebugValue)(debugValue);
        return (0, import_react.useMemo)(() => ({
          ...queryStateResults,
          fetchNextPage,
          fetchPreviousPage,
          refetch
        }), [queryStateResults, fetchNextPage, fetchPreviousPage, refetch]);
      }
    };
  }
  function buildMutationHook(name) {
    return ({
      selectFromResult,
      fixedCacheKey
    } = {}) => {
      const {
        select,
        initiate
      } = api.endpoints[name];
      const dispatch = useDispatch();
      const [promise, setPromise] = (0, import_react.useState)();
      (0, import_react.useEffect)(() => () => {
        if (!promise?.arg.fixedCacheKey) {
          promise?.reset();
        }
      }, [promise]);
      const triggerMutation = (0, import_react.useCallback)(function(arg) {
        const promise2 = dispatch(initiate(arg, {
          fixedCacheKey
        }));
        setPromise(promise2);
        return promise2;
      }, [dispatch, initiate, fixedCacheKey]);
      const {
        requestId
      } = promise || {};
      const selectDefaultResult = (0, import_react.useMemo)(() => select({
        fixedCacheKey,
        requestId: promise?.requestId
      }), [fixedCacheKey, promise, select]);
      const mutationSelector = (0, import_react.useMemo)(() => selectFromResult ? createSelector([selectDefaultResult], selectFromResult) : selectDefaultResult, [selectFromResult, selectDefaultResult]);
      const currentState = useSelector(mutationSelector, import_react_redux.shallowEqual);
      const originalArgs = fixedCacheKey == null ? promise?.arg.originalArgs : void 0;
      const reset = (0, import_react.useCallback)(() => {
        batch(() => {
          if (promise) {
            setPromise(void 0);
          }
          if (fixedCacheKey) {
            dispatch(api.internalActions.removeMutationResult({
              requestId,
              fixedCacheKey
            }));
          }
        });
      }, [dispatch, fixedCacheKey, promise, requestId]);
      const debugValue = pick(currentState, ...COMMON_HOOK_DEBUG_FIELDS, "endpointName");
      (0, import_react.useDebugValue)(debugValue);
      const finalState = (0, import_react.useMemo)(() => ({
        ...currentState,
        originalArgs,
        reset
      }), [currentState, originalArgs, reset]);
      return (0, import_react.useMemo)(() => [triggerMutation, finalState], [triggerMutation, finalState]);
    };
  }
}

// src/query/react/module.ts
var reactHooksModuleName = /* @__PURE__ */ Symbol();
var reactHooksModule = ({
  batch = import_react_redux2.batch,
  hooks = {
    useDispatch: import_react_redux2.useDispatch,
    useSelector: import_react_redux2.useSelector,
    useStore: import_react_redux2.useStore
  },
  createSelector = import_reselect.createSelector,
  unstable__sideEffectsInRender = false,
  ...rest
} = {}) => {
  if (true) {
    const hookNames = ["useDispatch", "useSelector", "useStore"];
    let warned = false;
    for (const hookName of hookNames) {
      if (countObjectKeys(rest) > 0) {
        if (rest[hookName]) {
          if (!warned) {
            console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`");
            warned = true;
          }
        }
        hooks[hookName] = rest[hookName];
      }
      if (typeof hooks[hookName] !== "function") {
        throw new Error(false ? _formatProdErrorMessage4(36) : `When using custom hooks for context, all ${hookNames.length} hooks need to be provided: ${hookNames.join(", ")}.
Hook ${hookName} was either not provided or not a function.`);
      }
    }
  }
  return {
    name: reactHooksModuleName,
    init(api, {
      serializeQueryArgs
    }, context) {
      const anyApi = api;
      const {
        buildQueryHooks,
        buildInfiniteQueryHooks,
        buildMutationHook,
        usePrefetch
      } = buildHooks({
        api,
        moduleOptions: {
          batch,
          hooks,
          unstable__sideEffectsInRender,
          createSelector
        },
        serializeQueryArgs,
        context
      });
      safeAssign(anyApi, {
        usePrefetch
      });
      safeAssign(context, {
        batch
      });
      return {
        injectEndpoint(endpointName, definition) {
          if (isQueryDefinition(definition)) {
            const {
              useQuery,
              useLazyQuery,
              useLazyQuerySubscription,
              useQueryState,
              useQuerySubscription
            } = buildQueryHooks(endpointName);
            safeAssign(anyApi.endpoints[endpointName], {
              useQuery,
              useLazyQuery,
              useLazyQuerySubscription,
              useQueryState,
              useQuerySubscription
            });
            api[`use${capitalize(endpointName)}Query`] = useQuery;
            api[`useLazy${capitalize(endpointName)}Query`] = useLazyQuery;
          }
          if (isMutationDefinition(definition)) {
            const useMutation = buildMutationHook(endpointName);
            safeAssign(anyApi.endpoints[endpointName], {
              useMutation
            });
            api[`use${capitalize(endpointName)}Mutation`] = useMutation;
          } else if (isInfiniteQueryDefinition(definition)) {
            const {
              useInfiniteQuery,
              useInfiniteQuerySubscription,
              useInfiniteQueryState
            } = buildInfiniteQueryHooks(endpointName);
            safeAssign(anyApi.endpoints[endpointName], {
              useInfiniteQuery,
              useInfiniteQuerySubscription,
              useInfiniteQueryState
            });
            api[`use${capitalize(endpointName)}InfiniteQuery`] = useInfiniteQuery;
          }
        }
      };
    }
  };
};

// src/query/react/index.ts
__reExport(react_exports, require("@reduxjs/toolkit/query"), module.exports);

// src/query/react/ApiProvider.tsx
var import_toolkit3 = require("@reduxjs/toolkit");
var React = __toESM(require("react"));
function ApiProvider(props) {
  const context = props.context || import_react_redux.ReactReduxContext;
  const existingContext = (0, import_react.useContext)(context);
  if (existingContext) {
    throw new Error(false ? _formatProdErrorMessage5(35) : "Existing Redux context detected. If you already have a store set up, please use the traditional Redux setup.");
  }
  const [store] = React.useState(() => (0, import_toolkit3.configureStore)({
    reducer: {
      [props.api.reducerPath]: props.api.reducer
    },
    middleware: (gDM) => gDM().concat(props.api.middleware)
  }));
  (0, import_react.useEffect)(() => props.setupListeners === false ? void 0 : (0, import_query.setupListeners)(store.dispatch, props.setupListeners), [props.setupListeners, store.dispatch]);
  return /* @__PURE__ */ React.createElement(import_react_redux.Provider, { store, context }, props.children);
}

// src/query/react/index.ts
var createApi = /* @__PURE__ */ (0, import_query.buildCreateApi)((0, import_query.coreModule)(), reactHooksModule());
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ApiProvider,
  UNINITIALIZED_VALUE,
  createApi,
  reactHooksModule,
  reactHooksModuleName,
  ...require("@reduxjs/toolkit/query")
});
//# sourceMappingURL=rtk-query-react.development.cjs.map