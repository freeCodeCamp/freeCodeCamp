"use client";

/*!
 * react-paypal-js v10.3.0 (2026-07-31T15:41:18.126Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { createContext, useContext, useRef, useState, useCallback, useEffect, useMemo, useLayoutEffect, useReducer } from 'react';
import { loadCoreSdkScript } from '@paypal/paypal-js/sdk-v6';
var INSTANCE_LOADING_STATE;
(function (INSTANCE_LOADING_STATE) {
  INSTANCE_LOADING_STATE["PENDING"] = "pending";
  INSTANCE_LOADING_STATE["RESOLVED"] = "resolved";
  INSTANCE_LOADING_STATE["REJECTED"] = "rejected";
})(INSTANCE_LOADING_STATE || (INSTANCE_LOADING_STATE = {}));
var INSTANCE_DISPATCH_ACTION;
(function (INSTANCE_DISPATCH_ACTION) {
  INSTANCE_DISPATCH_ACTION["SET_LOADING_STATUS"] = "setLoadingStatus";
  INSTANCE_DISPATCH_ACTION["SET_INSTANCE"] = "setInstance";
  INSTANCE_DISPATCH_ACTION["SET_ELIGIBILITY"] = "setEligibility";
  INSTANCE_DISPATCH_ACTION["SET_ELIGIBILITY_HYDRATION_STATUS"] = "setEligibilityHydrationStatus";
  INSTANCE_DISPATCH_ACTION["SET_ELIGIBILITY_HYDRATED"] = "setEligibilityHydrated";
  INSTANCE_DISPATCH_ACTION["SET_ERROR"] = "setError";
  INSTANCE_DISPATCH_ACTION["RESET_STATE"] = "resetState";
})(INSTANCE_DISPATCH_ACTION || (INSTANCE_DISPATCH_ACTION = {}));
var BRAINTREE_DISPATCH_ACTION;
(function (BRAINTREE_DISPATCH_ACTION) {
  BRAINTREE_DISPATCH_ACTION["SET_LOADING_STATUS"] = "setLoadingStatus";
  BRAINTREE_DISPATCH_ACTION["SET_INSTANCE"] = "setInstance";
  BRAINTREE_DISPATCH_ACTION["SET_ELIGIBILITY"] = "setEligibility";
  BRAINTREE_DISPATCH_ACTION["SET_ERROR"] = "setError";
  BRAINTREE_DISPATCH_ACTION["RESET_STATE"] = "resetState";
})(BRAINTREE_DISPATCH_ACTION || (BRAINTREE_DISPATCH_ACTION = {}));
function validateBraintreeNamespace(namespace) {
  const ns = namespace;
  return typeof ns?.client?.create === "function" && typeof ns?.paypalCheckoutV6?.create === "function";
}
const initialState = {
  sdkInstance: null,
  eligiblePaymentMethods: null,
  eligiblePaymentMethodsPayload: null,
  loadingStatus: INSTANCE_LOADING_STATE.PENDING,
  error: null,
  isHydrated: false,
  eligibilityHydrationStatus: INSTANCE_LOADING_STATE.RESOLVED,
  isEligibilityHydrated: false
};
function instanceReducer(state, action) {
  switch (action.type) {
    case INSTANCE_DISPATCH_ACTION.SET_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: action.value
      };
    case INSTANCE_DISPATCH_ACTION.SET_INSTANCE:
      return {
        ...state,
        sdkInstance: action.value,
        loadingStatus: INSTANCE_LOADING_STATE.RESOLVED
      };
    case INSTANCE_DISPATCH_ACTION.SET_ELIGIBILITY:
      return {
        ...state,
        eligiblePaymentMethods: action.value.eligiblePaymentMethods,
        eligiblePaymentMethodsPayload: action.value.payload
      };
    case INSTANCE_DISPATCH_ACTION.SET_ELIGIBILITY_HYDRATION_STATUS:
      return {
        ...state,
        eligibilityHydrationStatus: action.value
      };
    case INSTANCE_DISPATCH_ACTION.SET_ELIGIBILITY_HYDRATED:
      return {
        ...state,
        eligiblePaymentMethods: action.value.eligiblePaymentMethods,
        eligiblePaymentMethodsPayload: null,
        isEligibilityHydrated: true
      };
    case INSTANCE_DISPATCH_ACTION.SET_ERROR:
      return {
        ...state,
        error: action.value,
        loadingStatus: INSTANCE_LOADING_STATE.REJECTED
      };
    case INSTANCE_DISPATCH_ACTION.RESET_STATE:
      return initialState;
    default:
      return state;
  }
}
const PayPalContext = createContext(null);

/**
 * Returns {@link PayPalState} provided by a parent {@link PayPalProvider}.
 *
 * @returns {PayPalState}
 */
function usePayPal() {
  const context = useContext(PayPalContext);
  if (context === null) {
    throw new Error("usePayPal must be used within a PayPalProvider");
  }
  return context;
}

/**
 * Performs a shallow equality check on two arrays.
 *
 * This function compares two arrays element-by-element using strict equality (===).
 * It's primarily used to compare the `components` prop arrays passed to PayPalProvider
 * to prevent unnecessary re-initialization of the PayPal SDK.
 *
 * This optimization is important because re-initializing the SDK is an expensive operation
 * that involves loading scripts and setting up PayPal integrations.
 *
 * @param arr1 - First array to compare
 * @param arr2 - Second array to compare
 * @returns `true` if both arrays are null/undefined, or if they contain the same elements in the same order
 *
 * @example
 * // Returns true - both arrays have the same elements in the same order
 * shallowEqualArray(
 *   ["paypal-payments", "venmo-payments"],
 *   ["paypal-payments", "venmo-payments"]
 * );
 *
 * @example
 * // Returns false - different order
 * shallowEqualArray(
 *   ["paypal-payments", "venmo-payments"],
 *   ["venmo-payments", "paypal-payments"]
 * );
 *
 * @example
 * // Returns true - both are null
 * shallowEqualArray(null, null);
 */
function shallowEqualArray(arr1, arr2) {
  if (!arr1 && !arr2) {
    return true;
  }
  if (!arr1 || !arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
/**
 * Custom hook that memoizes a components array based on shallow equality comparison.
 * Returns a stable reference when the array contents haven't changed.
 *
 * This allows developers to pass inline component arrays without causing unnecessary re-renders
 * when the array values are the same, even if the array reference changes.
 *
 * @param value - The components array to memoize
 * @returns A stable reference to the components array
 *
 * @example
 * const memoizedComponents = useCompareMemoize(["paypal-payments", "venmo-payments"]);
 */
function useCompareMemoize(value) {
  const ref = useRef(value);
  if (!shallowEqualArray(ref.current, value)) {
    ref.current = value;
  }
  return ref.current;
}
function useProxyProps(props) {
  const proxyRef = useRef(new Proxy({}, {
    get(target, prop, receiver) {
      /**
       *
       * If target[prop] is a function, return a function that accesses
       * this function off the target object. We can mutate the target with
       * new copies of this function without having to re-render the
       * SDK components to pass new callbacks.
       *
       * */
      if (typeof target[prop] === "function") {
        return (...args) => target[prop](...args);
      }
      return Reflect.get(target, prop, receiver);
    }
  }));
  proxyRef.current = Object.assign(proxyRef.current, props);
  return proxyRef.current;
}
/**
 * Normalize input to an {@link Error} instance.
 *
 * @param {unknown} error - this argument will be coerced into a String then passed into a new
 *      {@link Error}. If it's already an {@link Error} instance, it will be returned without modification.
 * @returns {Error}
 *
 * @example
 * toError("An error occurred");
 *
 * @example
 * const myError = new Error("An error occurred");
 * toError(myError);
 */
function toError(error) {
  if (error instanceof Error) {
    return error;
  }
  return new Error(String(error));
}
/**
 * Custom hook that memoizes a value based on deep equality comparison.
 * Returns a stable reference when the value hasn't changed, even if the
 * object or array reference is new.
 *
 * This allows developers to pass inline objects or arrays without causing
 * unnecessary re-renders or effect re-runs when the values are the same.
 *
 * @param value - The value to memoize
 * @returns A stable reference to the value
 *
 * @example
 * const memoizedAmount = useDeepCompareMemoize({ value: "10.00", currencyCode: "USD" });
 */
function useDeepCompareMemoize(value) {
  const ref = useRef();
  if (!ref.current || !deepEqual(value, ref.current.value)) {
    ref.current = {
      value
    };
  }
  return ref.current.value;
}
/**
 * Performs a recursive deep equality check on two values.
 *
 * Handles primitives, null/undefined, arrays, and plain objects. Recursion is
 * bounded by `maxDepth` (default: 10) to prevent stack overflow on deeply nested
 * structures — comparison returns `false` if the limit is exceeded.
 *
 * @param obj1 - First value to compare
 * @param obj2 - Second value to compare
 * @param maxDepth - Maximum recursion depth (default: 10)
 * @param currentDepth - Current recursion depth, used internally
 * @returns `true` if both values are deeply equal, `false` otherwise
 *
 * @example
 * deepEqual({ amount: "10.00", currency: "USD" }, { amount: "10.00", currency: "USD" }); // true
 * deepEqual({ amount: "10.00" }, { amount: "20.00" }); // false
 */
// eslint-disable-next-line max-params
function deepEqual(obj1, obj2, maxDepth = 10, currentDepth = 0) {
  // Prevent infinite recursion by limiting depth
  if (currentDepth > maxDepth) {
    return false;
  }
  // Handle primitives and same reference
  if (obj1 === obj2) {
    return true;
  }
  // Handle null/undefined
  if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined) {
    return false;
  }
  // Different types are not equal
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  // Non-object primitives (number, string, boolean, function, symbol, bigint) that
  // Same typeof (verified above) but not ===, so unequal primitives
  if (typeof obj1 !== "object") {
    return false;
  }
  // Handle Arrays
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i], maxDepth, currentDepth + 1)) {
        return false;
      }
    }
    return true;
  }
  // One is array, the other is not
  if (Array.isArray(obj1) || Array.isArray(obj2)) {
    return false;
  }
  // At this point, we know both are non-null objects
  const record1 = obj1;
  const record2 = obj2;
  const keys1 = Object.keys(record1);
  const keys2 = Object.keys(record2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!deepEqual(record1[key], record2[key], maxDepth, currentDepth + 1)) {
      return false;
    }
  }
  return true;
}
/**
 * Detects the empty sentinel MessageContent the SDK returns on a fetch error.
 *
 * On an API error, PayPal Messages `fetchContent` resolves to a MessageContent whose
 * `messageItems` is null or has empty main/action arrays (rather than throwing), so the
 * `<paypal-message>` element recognizes the error state and collapses. A nullish result
 * is likewise treated as empty. `messageItems` being absent is treated as valid content
 * to avoid false positives.
 *
 * @param content - The value returned by `fetchContent`
 * @returns `true` if the content is the empty error sentinel (or nullish)
 *
 * @example
 * isEmptyMessageContent({ messageItems: { mainItems: [], actionItems: [] } }); // true
 * isEmptyMessageContent({ messageItems: { mainItems: [block] } }); // false
 */
function isEmptyMessageContent(content) {
  if (content === null || content === undefined) {
    return true;
  }
  if (typeof content !== "object") {
    return false;
  }
  const items = content.messageItems;
  if (items === undefined) {
    return false; // no signal -> assume valid content
  }
  if (items === null) {
    return true;
  }
  return (items.mainItems?.length ?? 0) === 0 && (items.actionItems?.length ?? 0) === 0;
}
/**
 * Creates a payment session with error handling and retry prevention.
 *
 * @param options - Configuration for creating the payment session
 * @returns The payment session or null if creation fails
 *
 * @example
 * const session = createPaymentSession({
 *   sessionCreator: () => sdkInstance.createPayPalOneTimePaymentSession({ orderId, ...callbacks }),
 *   failedSdkRef,
 *   sdkInstance,
 *   setError,
 *   errorMessage: 'Failed to create payment session. This may occur if the required component "paypal-payments" is not included in the SDK components array.',
 * });
 *
 * if (!session) return;
 */
function createPaymentSession({
  sessionCreator,
  failedSdkRef,
  sdkInstance,
  setError,
  errorMessage
}) {
  // Skip retry if this SDK instance already failed
  if (failedSdkRef.current === sdkInstance) {
    return null;
  }
  try {
    return sessionCreator();
  } catch (err) {
    failedSdkRef.current = sdkInstance;
    const detailedError = new Error(errorMessage, {
      cause: err
    });
    setError(detailedError);
    return null;
  }
}
const CardFieldsSessionContext = createContext(null);
const CardFieldsStatusContext = createContext(null);

/**
 * Centralized hook for handling {@link Error}s in a consistent manner.
 *
 * @param {Boolean} noConsoleErrors - set to `true` to prevent `setError` calls from logging to `console.error`.
 */
function useError(noConsoleErrors = false) {
  const [error, setErrorInternal] = useState(null);
  const setError = useCallback(newError => {
    setErrorInternal(newError);
    if (!noConsoleErrors && newError) {
      console.error(newError);
    }
  }, [noConsoleErrors]);
  return [error, setError];
}
const CARD_FIELDS_SESSION_TYPES = {
  ONE_TIME_PAYMENT: "one-time-payment",
  SAVE_PAYMENT: "save-payment"
};
/**
 * {@link PayPalCardFieldsProvider} creates a Card Fields session and provides it to child components.
 *
 * @remarks
 * Child components must use either {@link usePayPalCardFieldsOneTimePaymentSession} or
 * {@link usePayPalCardFieldsSavePaymentSession} to initialize the appropriate session type.
 * The session will not be created until one of these hooks is called.
 *
 * @example
 * // Amount can be updated dynamically
 * const [amount, setAmount] = useState<OrderAmount>({ value: "10.00", currencyCode: "USD" });
 * const onBlur = useCallback((event) => { ... }, []);
 * <PayPalProvider
 *  components={["card-fields"]}
 *  clientToken={clientToken}
 *  pageType="checkout"
 * >
 *   <PayPalCardFieldsProvider
 *     blur={onBlur}
 *     validitychange={(event) => console.log('Validity:', event)}
 *     cardtypechange={(event) => console.log('Card type:', event)}
 *     amount={amount}
 *     isCobrandedEligible={true}
 *   >
 *     <CheckoutForm />
 *   </PayPalCardFieldsProvider>
 * </PayPalProvider>
 */
const PayPalCardFieldsProvider = ({
  children,
  amount,
  isCobrandedEligible,
  ...eventHandlers
}) => {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const [cardFieldsSession, setCardFieldsSession] = useState(null);
  const [cardFieldsSessionType, setCardFieldsSessionType] = useState(null);
  const [cardFieldsError, setCardFieldsError] = useState(null);
  const [, setError] = useError();
  // Use proxy props for event handlers to avoid re-renders
  const proxyEventHandlers = useProxyProps(eventHandlers);
  // Memoize amount to avoid unnecessary updates when value hasn't changed
  const memoizedAmount = useDeepCompareMemoize(amount);
  const handleError = useCallback(error => {
    setError(error);
    setCardFieldsError(error);
  }, [setError]);
  // Effect to create Card Fields session
  useEffect(() => {
    // Early return: Still loading, wait for sdkInstance
    if (loadingStatus === INSTANCE_LOADING_STATE.PENDING) {
      return;
    }
    // Error case: Loading finished but no sdkInstance
    if (!sdkInstance) {
      handleError(toError("no sdk instance available"));
      return;
    }
    // Clear previous sdkInstance loading errors
    handleError(null);
    // Wait for session type to be set by child hooks
    if (!cardFieldsSessionType) {
      return;
    }
    // Create Card Fields session based on sessionType
    let newCardFieldsSession;
    try {
      newCardFieldsSession = cardFieldsSessionType === CARD_FIELDS_SESSION_TYPES.ONE_TIME_PAYMENT ? sdkInstance.createCardFieldsOneTimePaymentSession() : sdkInstance.createCardFieldsSavePaymentSession();
      setCardFieldsSession(newCardFieldsSession);
    } catch (error) {
      handleError(toError(error));
    }
    // Cleanup: destroy session on unmount or when dependencies change
    return () => {
      newCardFieldsSession?.destroy();
      setCardFieldsSession(null);
    };
  }, [sdkInstance, loadingStatus, cardFieldsSessionType, handleError]);
  /**
   * Registers Card Fields event handlers with the session.
   * Uses useProxyProps for stable handler references and useDeepCompareMemoize to avoid
   * unnecessary re-registrations when handler values have not changed.
   *
   * @remarks
   * For best performance, wrap handler functions with useCallback or useDeepCompareMemoize
   * before passing them as props to avoid unnecessary SDK event handler re-registrations.
   */
  useEffect(() => {
    if (!cardFieldsSession) {
      return;
    }
    try {
      /*
            Register all event handlers that are defined
            by iterating over the keys of proxyEventHandlers directly
            */
      Object.keys(proxyEventHandlers).forEach(eventName => {
        const handler = proxyEventHandlers[eventName];
        if (handler && typeof handler === "function") {
          cardFieldsSession.on(eventName, handler);
        }
      });
    } catch (error) {
      handleError(toError(`Failed to register event handlers: ${error}`));
    }
  }, [cardFieldsSession, proxyEventHandlers, handleError]);
  // Update session configuration when props change
  useEffect(() => {
    if (!cardFieldsSession) {
      return;
    }
    // Build update configuration from props
    const updateOptions = {};
    let hasUpdates = false;
    if (memoizedAmount !== undefined) {
      updateOptions.amount = memoizedAmount;
      hasUpdates = true;
    }
    if (isCobrandedEligible !== undefined) {
      updateOptions.isCobrandedEligible = isCobrandedEligible;
      hasUpdates = true;
    }
    // Only call update if there are configuration changes
    if (!hasUpdates) {
      return;
    }
    try {
      cardFieldsSession.update(updateOptions);
    } catch (error) {
      handleError(toError(`Failed to update card fields configuration: ${error}`));
    }
  }, [cardFieldsSession, memoizedAmount, isCobrandedEligible, handleError]);
  const sessionContextValue = useMemo(() => ({
    cardFieldsSession,
    setCardFieldsSessionType,
    setError: handleError
  }), [cardFieldsSession, setCardFieldsSessionType, handleError]);
  const statusContextValue = useMemo(() => ({
    error: cardFieldsError
  }), [cardFieldsError]);
  return React.createElement(CardFieldsSessionContext.Provider, {
    value: sessionContextValue
  }, React.createElement(CardFieldsStatusContext.Provider, {
    value: statusContextValue
  }, children));
};

/**
 * Return a {@link React.MutableRefObject} a stable ref that's `true` if the component is mounted, `false` otherwise.
 *
 * The return must, unfortunately be included in dependency arrays. See the issue here: [\[eslint-plugin-react-hooks\] allow configuring custom hooks as "static" #16873](https://github.com/facebook/react/issues/16873).
 */
function useIsMountedRef() {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

/**
 * Hook for managing Pay Later one-time payment sessions.
 *
 * This hook creates and manages a Pay Later payment session. It handles session lifecycle, resume flows
 * for redirect-based presentation modes (`"redirect"` and `"direct-app-switch"`), and provides methods
 * to start, cancel, and destroy the session.
 *
 * Eligibility must be fetched separately (via the `useEligibleMethods` hook client-side or
 * `fetchEligibleMethods` server-side) to obtain the `countryCode`/`productCode` the
 * `<paypal-pay-later-button>` needs to render.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function PayLaterCheckoutButton() {
 *   const { error, isPending, handleClick, handleCancel } = usePayLaterOneTimePaymentSession({
 *     presentationMode: 'popup',
 *     createOrder: async () => ({ orderId: 'ORDER-123' }),
 *     onApprove: (data) => console.log('Approved:', data),
 *     onCancel: () => console.log('Cancelled'),
 *   });
 *
 *   // Fetch eligibility (or hydrate server-side via fetchEligibleMethods)
 *   const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
 *     payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
 *   });
 *
 *   if (isPending || isLoading) return <Spinner />;
 *
 *   if (!eligiblePaymentMethods?.isEligible("paylater")) {
 *     return null;
 *   }
 *
 *   const payLaterDetails = eligiblePaymentMethods?.getDetails?.("paylater");
 *
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-pay-later-button
 *       countryCode={payLaterDetails?.countryCode}
 *       productCode={payLaterDetails?.productCode}
 *       onClick={handleClick}
 *       onCancel={handleCancel}
 *     />
 *   );
 * }
 */
function usePayLaterOneTimePaymentSession({
  presentationMode = "auto",
  fullPageOverlay,
  autoRedirect,
  createOrder,
  orderId,
  ...callbacks
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const proxyCallbacks = useProxyProps(callbacks);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed SDK instance
  const failedSdkRef = useRef(null);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const handleDestroy = useCallback(() => {
    sessionRef.current?.destroy();
    sessionRef.current = null;
  }, []);
  // Handle SDK availability
  useEffect(() => {
    // Reset failed SDK tracking when SDK instance changes
    if (failedSdkRef.current !== sdkInstance) {
      failedSdkRef.current = null;
    }
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => sdkInstance.createPayLaterOneTimePaymentSession({
        orderId,
        ...proxyCallbacks
      }),
      failedSdkRef,
      sdkInstance,
      setError,
      errorMessage: 'Failed to create payment session. This may occur if the required component "paypal-payments" is not included in the SDK components array.'
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    // check for resume flow in redirect-based presentation modes
    const isRedirectMode = presentationMode === "redirect" || presentationMode === "direct-app-switch";
    if (isRedirectMode) {
      const handleReturnFromPayPal = async () => {
        try {
          if (!newSession) {
            return;
          }
          const isResumeFlow = newSession.hasReturned?.();
          if (isResumeFlow) {
            await newSession.resume?.();
          }
        } catch (err) {
          setError(err);
        }
      };
      handleReturnFromPayPal();
    }
    return () => {
      newSession.destroy();
    };
  }, [sdkInstance, orderId, proxyCallbacks, presentationMode, setError]);
  const handleCancel = useCallback(() => {
    sessionRef.current?.cancel();
  }, []);
  const handleClick = useCallback(async () => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("PayLater session not available"));
      return;
    }
    const startOptions = {
      presentationMode,
      fullPageOverlay,
      autoRedirect
    };
    const result = await sessionRef.current.start(startOptions, createOrder?.());
    return result;
  }, [createOrder, presentationMode, fullPageOverlay, autoRedirect, isMountedRef, setError]);
  return {
    error,
    isPending,
    handleCancel,
    handleClick,
    handleDestroy
  };
}

/**
 * `PayLaterOneTimePaymentButton` is a button that provides a PayLater payment flow.
 *
 * `PayLaterOneTimePaymentButtonProps` combines the arguments for {@link UsePayLaterOneTimePaymentSessionProps}
 * with a `disabled` prop.
 *
 * The `countryCode` and `productCode` are automatically populated from the eligibility API response
 * (available via `usePayPal().eligiblePaymentMethods`). The button requires eligibility to be configured
 * in the parent `PayPalProvider`, using either the `useEligibleMethods` hook client-side or
 * `fetchEligibleMethods` server-side.
 *
 * **Eligibility must be fetched first.** Until eligibility is available, internally the button has no
 * `countryCode`/`productCode` to render with. Fetch eligibility (and wait for it) before rendering.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayLaterOneTimePaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function PayLaterCheckout() {
 *   // Fetch eligibility before rendering the button (or hydrate it server-side
 *   // via fetchEligibleMethods)
 *   const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
 *     payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
 *   });
 *
 *   if (isLoading) return <Spinner />;
 *   if (!eligiblePaymentMethods?.isEligible("paylater")) {
 *     return null;
 *   }
 *
 *   return (
 *     <PayLaterOneTimePaymentButton
 *       onApprove={() => {
 *         // ... on approve logic
 *       }}
 *       orderId="your-order-id"
 *     />
 *   );
 * }
 */
const PayLaterOneTimePaymentButton = ({
  disabled = false,
  ...hookProps
}) => {
  const {
    eligiblePaymentMethods,
    isHydrated
  } = usePayPal();
  const {
    error,
    isPending,
    handleClick
  } = usePayLaterOneTimePaymentSession(hookProps);
  const payLaterDetails = eligiblePaymentMethods?.getDetails("paylater");
  const countryCode = payLaterDetails?.countryCode;
  const productCode = payLaterDetails?.productCode;
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  if (isPending) {
    return null;
  }
  return isHydrated ? React.createElement("paypal-pay-later-button", {
    onClick: handleClick,
    countryCode: countryCode,
    productCode: productCode,
    disabled: disabled || !!error || undefined
  }) : React.createElement("div", null);
};

/**
 * Hook for managing PayPal Credit one-time payment sessions.
 *
 * This hook creates and manages a PayPal Credit payment session. It handles session lifecycle, resume flows
 * for redirect-based flows, and provides methods to start, cancel, and destroy the session.
 *
 * Eligibility must be fetched separately (via the `useEligibleMethods` hook client-side or
 * `fetchEligibleMethods` server-side) to obtain the `countryCode` the
 * `<paypal-credit-button>` needs to render.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function CreditCheckoutButton() {
 *   const { error, isPending, handleClick, handleCancel } = usePayPalCreditOneTimePaymentSession({
 *     presentationMode: 'popup',
 *     createOrder: async () => ({ orderId: 'ORDER-123' }),
 *     onApprove: (data) => console.log('Approved:', data),
 *     onCancel: () => console.log('Cancelled'),
 *   });
 *
 *   // Fetch eligibility (or hydrate server-side via fetchEligibleMethods)
 *   const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
 *     payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
 *   });
 *   const creditDetails = eligiblePaymentMethods?.getDetails?.("credit");
 *
 *   if (isPending || isLoading) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-credit-button
 *       countryCode={creditDetails?.countryCode}
 *       onClick={handleClick}
 *       onCancel={handleCancel}
 *     />
 *   );
 * }
 */
function usePayPalCreditOneTimePaymentSession({
  presentationMode = "auto",
  fullPageOverlay,
  autoRedirect,
  createOrder,
  orderId,
  ...callbacks
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const proxyCallbacks = useProxyProps(callbacks);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed SDK instance
  const failedSdkRef = useRef(null);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const handleDestroy = useCallback(() => {
    sessionRef.current?.destroy();
    sessionRef.current = null;
  }, []);
  const handleCancel = useCallback(() => {
    sessionRef.current?.cancel();
  }, []);
  // Handle SDK availability
  useEffect(() => {
    // Reset failed SDK tracking when SDK instance changes
    if (failedSdkRef.current !== sdkInstance) {
      failedSdkRef.current = null;
    }
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => sdkInstance.createPayPalCreditOneTimePaymentSession({
        orderId,
        ...proxyCallbacks
      }),
      failedSdkRef,
      sdkInstance,
      setError,
      errorMessage: 'Failed to create payment session. This may occur if the required component "paypal-payments" is not included in the SDK components array.'
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    // Only check for resume flow in redirect-based presentation modes
    const shouldCheckResume = presentationMode === "redirect" || presentationMode === "direct-app-switch";
    if (shouldCheckResume) {
      const handleReturnFromPayPal = async () => {
        try {
          if (!newSession) {
            return;
          }
          const isResumeFlow = newSession.hasReturned?.();
          if (isResumeFlow) {
            await newSession.resume?.();
          }
        } catch (err) {
          setError(err);
        }
      };
      handleReturnFromPayPal();
    }
    return () => {
      newSession.destroy();
    };
  }, [sdkInstance, orderId, proxyCallbacks, presentationMode, setError]);
  const handleClick = useCallback(async () => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("PayPal session not available"));
      return;
    }
    const startOptions = {
      presentationMode: presentationMode,
      fullPageOverlay,
      autoRedirect
    };
    const result = await sessionRef.current.start(startOptions, createOrder?.());
    return result;
  }, [isMountedRef, presentationMode, fullPageOverlay, autoRedirect, createOrder, setError]);
  return {
    error,
    isPending,
    handleClick,
    handleDestroy,
    handleCancel
  };
}

/**
 * `PayPalCreditOneTimePaymentButton` is a button that provides a PayPal Credit payment flow.
 *
 * The `countryCode` is automatically populated from the eligibility API response
 * (available via `usePayPal().eligiblePaymentMethods`). The button requires eligibility to be configured
 * in the parent `PayPalProvider`, using either the `useEligibleMethods` hook client-side or `fetchEligibleMethods` server-side.
 *
 * **Eligibility must be fetched first.** Until eligibility is available, internally the button has no
 * `countryCode` to render with. Fetch eligibility (and wait for it) before rendering.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayPalCreditOneTimePaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function CreditCheckout() {
 *   // Fetch eligibility before rendering the button (or hydrate it server-side
 *   // via fetchEligibleMethods)
 *   const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
 *     payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
 *   });
 *
 *   if (isLoading) return <Spinner />;
 *   if (!eligiblePaymentMethods?.isEligible("credit")) {
 *     return null;
 *   }
 *
 *   return (
 *     <PayPalCreditOneTimePaymentButton
 *       onApprove={() => {
 *         // ... on approve logic
 *       }}
 *       orderId="your-order-id"
 *     />
 *   );
 * }
 */
const PayPalCreditOneTimePaymentButton = ({
  disabled = false,
  ...hookProps
}) => {
  const {
    eligiblePaymentMethods,
    isHydrated
  } = usePayPal();
  const {
    error,
    isPending,
    handleClick
  } = usePayPalCreditOneTimePaymentSession(hookProps);
  const creditDetails = eligiblePaymentMethods?.getDetails("credit");
  const countryCode = creditDetails?.countryCode;
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  if (isPending) {
    return null;
  }
  return isHydrated ? React.createElement("paypal-credit-button", {
    onClick: handleClick,
    countryCode: countryCode,
    disabled: disabled || !!error || undefined
  }) : React.createElement("div", null);
};

/**
 * Hook for managing PayPal Credit save payment sessions.
 *
 * This hook creates and manages a PayPal Credit save payment session for vaulting payment methods.
 * It handles session lifecycle, resume flows for redirect-based flows, and provides methods to start, cancel, and destroy the session.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function SaveCreditButton() {
 *   const { error, isPending, handleClick, handleCancel } = usePayPalCreditSavePaymentSession({
 *     presentationMode: 'redirect',
 *     createVaultToken: async () => ({ vaultSetupToken: 'VAULT-TOKEN-123' }),
 *     onApprove: (data) => console.log('Vaulted:', data),
 *     onCancel: () => console.log('Cancelled'),
 *   });
 *   const { eligiblePaymentMethods } = usePayPal();
 *   const creditDetails = eligiblePaymentMethods?.getDetails?.("credit");
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-credit-button
 *       countryCode={creditDetails?.countryCode}
 *       onClick={handleClick}
 *       onCancel={handleCancel}
 *     />
 *   );
 * }
 */
function usePayPalCreditSavePaymentSession({
  presentationMode = "auto",
  fullPageOverlay,
  autoRedirect,
  createVaultToken,
  vaultSetupToken,
  ...callbacks
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const proxyCallbacks = useProxyProps(callbacks);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed SDK instance
  const failedSdkRef = useRef(null);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const handleDestroy = useCallback(() => {
    sessionRef.current?.destroy();
    sessionRef.current = null;
  }, []);
  // Handle SDK availability
  useEffect(() => {
    // Reset failed SDK tracking when SDK instance changes
    if (failedSdkRef.current !== sdkInstance) {
      failedSdkRef.current = null;
    }
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => sdkInstance.createPayPalSavePaymentSession({
        vaultSetupToken,
        ...proxyCallbacks
      }),
      failedSdkRef,
      sdkInstance,
      setError,
      errorMessage: 'Failed to create payment session. This may occur if the required component "paypal-payments" is not included in the SDK components array.'
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    const shouldCheckResume = presentationMode === "redirect" || presentationMode === "direct-app-switch";
    if (shouldCheckResume) {
      const handleReturnFromPayPal = async () => {
        try {
          if (!newSession) {
            return;
          }
          const isResumeFlow = newSession.hasReturned?.();
          if (isResumeFlow) {
            await newSession.resume?.();
          }
        } catch (err) {
          setError(err);
        }
      };
      handleReturnFromPayPal();
    }
    return () => {
      newSession.destroy();
    };
  }, [sdkInstance, vaultSetupToken, proxyCallbacks, presentationMode, setError]);
  const handleCancel = useCallback(() => {
    sessionRef.current?.cancel();
  }, []);
  const handleClick = useCallback(async () => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("Credit Save Payment session not available"));
      return;
    }
    const startOptions = {
      presentationMode,
      fullPageOverlay,
      autoRedirect
    };
    if (createVaultToken) {
      await sessionRef.current.start(startOptions, createVaultToken());
    } else {
      await sessionRef.current.start(startOptions);
    }
  }, [isMountedRef, presentationMode, fullPageOverlay, autoRedirect, createVaultToken, setError]);
  return {
    error,
    isPending,
    handleClick,
    handleDestroy,
    handleCancel
  };
}

/**
 * `PayPalCreditSavePaymentButton` is a button that provides a PayPal Credit save payment flow.
 *
 * The `countryCode` is automatically populated from the eligibility API response
 * (available via `usePayPal().eligiblePaymentMethods`). The button requires eligibility to be configured
 * in the parent `PayPalProvider`, using either the `useEligibleMethods` hook client-side or `fetchEligibleMethods` server-side.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayPalCreditSavePaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * <PayPalCreditSavePaymentButton
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 *   vaultSetupToken="your-vault-setup-token"
 * />
 */
const PayPalCreditSavePaymentButton = ({
  disabled = false,
  ...hookProps
}) => {
  const {
    eligiblePaymentMethods,
    isHydrated
  } = usePayPal();
  const {
    error,
    isPending,
    handleClick
  } = usePayPalCreditSavePaymentSession(hookProps);
  const creditDetails = eligiblePaymentMethods?.getDetails("credit");
  const countryCode = creditDetails?.countryCode;
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  if (isPending) {
    return null;
  }
  return isHydrated ? React.createElement("paypal-credit-button", {
    onClick: handleClick,
    countryCode: countryCode,
    disabled: disabled || !!error || undefined
  }) : React.createElement("div", null);
};

/**
 * `usePayPalGuestPaymentSession` is used to interface with a guest checkout session. Guest checkout
 * sessions require a `<paypal-basic-card-button>` to target for displaying the guest checkout form.
 *
 * @returns Object with: `buttonRef` (ref for the target button element), `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * @example
 * function GuestCheckoutButton() {
 *   const { buttonRef, error, isPending, handleClick, handleCancel } =
 *     usePayPalGuestPaymentSession({
 *       createOrder: async () => ({ orderId: 'ORDER-123' }),
 *       onApprove: (data) => console.log('Approved:', data),
 *       onCancel: () => console.log('Cancelled'),
 *     });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-basic-card-container>
 *       <paypal-basic-card-button
 *         onClick={handleClick}
 *         onCancel={handleCancel}
 *         ref={buttonRef}
 *       />
 *     </paypal-basic-card-container>
 *   );
 * }
 */
function usePayPalGuestPaymentSession({
  fullPageOverlay,
  createOrder,
  orderId,
  onShippingAddressChange,
  onShippingOptionsChange,
  ...callbacks
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const buttonRef = useRef(null);
  const proxyCallbacks = useProxyProps(callbacks);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed SDK instance
  const failedSdkRef = useRef(null);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const handleDestroy = useCallback(() => {
    sessionRef.current?.destroy();
    sessionRef.current = null;
  }, []);
  const handleCancel = useCallback(() => {
    sessionRef.current?.cancel();
  }, []);
  // Handle SDK availability
  useEffect(() => {
    // Reset failed SDK tracking when SDK instance changes
    if (failedSdkRef.current !== sdkInstance) {
      failedSdkRef.current = null;
    }
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => sdkInstance.createPayPalGuestOneTimePaymentSession({
        orderId,
        ...proxyCallbacks,
        ...(onShippingAddressChange && {
          onShippingAddressChange
        }),
        ...(onShippingOptionsChange && {
          onShippingOptionsChange
        })
      }),
      failedSdkRef,
      sdkInstance,
      setError,
      errorMessage: 'Failed to create payment session. This may occur if the required component "paypal-guest-payments" is not included in the SDK components array.'
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    return () => {
      newSession.destroy();
    };
  }, [sdkInstance, orderId, proxyCallbacks, onShippingAddressChange, onShippingOptionsChange, isMountedRef, setError]);
  const handleClick = useCallback(async () => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("PayPal Guest Checkout session not available"));
      return;
    }
    try {
      const startOptions = {
        presentationMode: "auto",
        fullPageOverlay,
        ...(buttonRef.current ? {
          targetElement: buttonRef.current
        } : {})
      };
      await sessionRef.current.start(startOptions, createOrder?.());
    } catch (err) {
      if (isMountedRef.current) {
        setError(err);
      }
    }
  }, [isMountedRef, fullPageOverlay, createOrder, setError]);
  return {
    buttonRef,
    error,
    isPending,
    handleClick,
    handleCancel,
    handleDestroy
  };
}

/**
 * `PayPalGuestPaymentButton` is a button that provides a guest checkout (BCDC) payment flow.
 *
 * `PayPalGuestPaymentButtonProps` combines the arguments for {@link UsePayPalGuestPaymentSessionProps}
 * with a `disabled` prop.
 *
 * This component automatically wraps the button with `<paypal-basic-card-container>` which is
 * required for the guest checkout form to display properly.
 *
 * @example
 * <PayPalGuestPaymentButton
 *   createOrder={createOrder}
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 * />
 */
const PayPalGuestPaymentButton = ({
  disabled = false,
  ...hookProps
}) => {
  const {
    error,
    isPending,
    handleClick,
    buttonRef
  } = usePayPalGuestPaymentSession(hookProps);
  const {
    isHydrated
  } = usePayPal();
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  const button = isHydrated ? React.createElement("paypal-basic-card-button", {
    ref: buttonRef,
    onClick: handleClick,
    disabled: disabled || isPending || error !== null ? true : undefined
  }) : React.createElement("div", null);
  return React.createElement("paypal-basic-card-container", null, button);
};

/**
 * Hook for managing one-time payment sessions with PayPal.
 *
 * The hook returns an `isPending` flag that indicates whether the SDK instance is still being
 * initialized. This is useful when using deferred clientToken loading - buttons should wait
 * to render until `isPending` is false.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function PayPalCheckoutButton() {
 *   const { isPending, error, handleClick, handleCancel } = usePayPalOneTimePaymentSession({
 *     orderId: "ORDER-123",
 *     onApprove: (data) => console.log("Approved:", data),
 *   });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-button onClick={handleClick} onCancel={handleCancel} />
 *   );
 * }
 */
function usePayPalOneTimePaymentSession({
  presentationMode = "auto",
  fullPageOverlay,
  autoRedirect,
  createOrder,
  orderId,
  savePayment,
  testBuyerCountry,
  ...callbacks
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const proxyCallbacks = useProxyProps(callbacks);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed SDK instance
  const failedSdkRef = useRef(null);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const handleDestroy = useCallback(() => {
    sessionRef.current?.destroy();
    sessionRef.current = null;
  }, []);
  const handleCancel = useCallback(() => {
    sessionRef.current?.cancel();
  }, []);
  // Handle SDK availability
  useEffect(() => {
    // Reset failed SDK tracking when SDK instance changes
    if (failedSdkRef.current !== sdkInstance) {
      failedSdkRef.current = null;
    }
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => sdkInstance.createPayPalOneTimePaymentSession({
        orderId,
        savePayment,
        testBuyerCountry,
        ...proxyCallbacks
      }),
      failedSdkRef,
      sdkInstance,
      setError,
      errorMessage: 'Failed to create payment session. This may occur if the required component "paypal-payments" is not included in the SDK components array.'
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    // Only check for resume flow in redirect-based presentation modes
    const shouldCheckResume = presentationMode === "redirect" || presentationMode === "direct-app-switch";
    if (shouldCheckResume) {
      const handleReturnFromPayPal = async () => {
        try {
          if (!newSession) {
            return;
          }
          const isResumeFlow = newSession.hasReturned?.();
          if (isResumeFlow) {
            await newSession.resume?.();
          }
        } catch (err) {
          setError(err);
        }
      };
      handleReturnFromPayPal();
    }
    return () => {
      newSession.destroy();
    };
  }, [sdkInstance, orderId, proxyCallbacks, presentationMode, setError, savePayment, testBuyerCountry]);
  const handleClick = useCallback(async () => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("PayPal session not available"));
      return;
    }
    const startOptions = {
      presentationMode,
      fullPageOverlay,
      autoRedirect
    };
    const result = await sessionRef.current.start(startOptions, createOrder?.());
    return result;
  }, [isMountedRef, presentationMode, fullPageOverlay, autoRedirect, createOrder, setError]);
  return {
    error,
    isPending,
    handleClick,
    handleCancel,
    handleDestroy
  };
}

/**
 * `PayPalOneTimePaymentButton` is a button that provides a standard PayPal payment flow.
 *
 * `PayPalOneTimePaymentButtonProps` combines the arguments for {@link UsePayPalOneTimePaymentSessionProps}
 * and {@link ButtonProps}.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayPalOneTimePaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * <PayPalOneTimePaymentButton
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 *   orderId="your-order-id"
 * />
 */
const PayPalOneTimePaymentButton = ({
  type = "pay",
  disabled = false,
  ...hookProps
}) => {
  const {
    error,
    isPending,
    handleClick
  } = usePayPalOneTimePaymentSession(hookProps);
  const {
    isHydrated
  } = usePayPal();
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  return isHydrated ? React.createElement("paypal-button", {
    onClick: handleClick,
    type: type,
    disabled: disabled || isPending || error !== null ? true : undefined
  }) : React.createElement("div", null);
};

/**
 * Hook for managing PayPal subscription payment sessions.
 *
 * This hook creates and manages a PayPal subscription payment session, supporting multiple presentation modes
 * including popup and modal. It handles session lifecycle and provides methods to start, cancel, and destroy the session.
 *
 * @param props - Configuration options including presentation mode and callbacks
 * @param props.createSubscription - Function that returns a promise resolving to an object with subscriptionId
 * @param props.presentationMode - (Optional, defaults to `'auto'`) How the subscription experience is presented: 'popup', 'modal', 'auto', or 'payment-handler'
 * @param props.fullPageOverlay - Whether to show a full-page overlay during the subscription flow
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function SubscriptionCheckoutButton() {
 *   const { error, isPending, handleClick, handleCancel } = usePayPalSubscriptionPaymentSession({
 *     presentationMode: 'popup',
 *     createSubscription: async () => ({ subscriptionId: 'SUB-123' }),
 *     onApprove: (data) => console.log('Subscription approved:', data),
 *     onCancel: () => console.log('Subscription cancelled'),
 *     onError: (err) => console.error('Subscription error:', err),
 *   });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-button onClick={handleClick} onCancel={handleCancel} />
 *   );
 * }
 */
function usePayPalSubscriptionPaymentSession({
  presentationMode = "auto",
  fullPageOverlay,
  createSubscription,
  ...callbacks
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const proxyCallbacks = useProxyProps(callbacks);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed SDK instance
  const failedSdkRef = useRef(null);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const handleDestroy = useCallback(() => {
    sessionRef.current?.destroy();
    sessionRef.current = null;
  }, []);
  const handleCancel = useCallback(() => {
    sessionRef.current?.cancel();
  }, []);
  // Handle SDK availability
  useEffect(() => {
    // Reset failed SDK tracking when SDK instance changes
    if (failedSdkRef.current !== sdkInstance) {
      failedSdkRef.current = null;
    }
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => sdkInstance.createPayPalSubscriptionPaymentSession({
        ...proxyCallbacks
      }),
      failedSdkRef,
      sdkInstance,
      setError,
      errorMessage: 'Failed to create payment session. This may occur if the required component "paypal-subscriptions" is not included in the SDK components array.'
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    return () => {
      newSession.destroy();
    };
  }, [sdkInstance, proxyCallbacks, setError]);
  const handleClick = useCallback(async () => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("PayPal subscription session not available"));
      return;
    }
    const startOptions = {
      presentationMode,
      fullPageOverlay
    };
    const result = await sessionRef.current.start(startOptions, createSubscription());
    return result;
  }, [isMountedRef, presentationMode, fullPageOverlay, createSubscription, setError]);
  return {
    error,
    isPending,
    handleClick,
    handleCancel,
    handleDestroy
  };
}

/**
 * `PayPalSubscriptionButton` is a button that provides a PayPal subscription payment flow.
 *
 * `PayPalSubscriptionButtonProps` combines the arguments for {@link UsePayPalSubscriptionPaymentSessionProps}
 * and {@link ButtonProps}.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayPalSubscriptionPaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * <PayPalSubscriptionButton
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 *   createSubscription={() => Promise.resolve({ subscriptionId: "SUB-123" })}
 * />
 */
const PayPalSubscriptionButton = ({
  type = "subscribe",
  disabled = false,
  ...hookProps
}) => {
  const {
    error,
    isPending,
    handleClick
  } = usePayPalSubscriptionPaymentSession(hookProps);
  const {
    isHydrated
  } = usePayPal();
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  return isHydrated ? React.createElement("paypal-button", {
    onClick: handleClick,
    type: type,
    disabled: disabled || isPending || error !== null ? true : undefined
  }) : React.createElement("div", null);
};

/**
 * Internal context for dispatching PayPal instance state updates.
 * This is NOT exported to external consumers.
 * Only hooks like useEligibleMethods can access this internally.
 *
 * @internal
 */
const PayPalDispatchContext = createContext(null);

/**
 * Uses useLayoutEffect on client (runs before paint) and useEffect on server (avoids warning).
 * This ensures state updates happen before the browser paints, preventing visual flashes.
 */
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * {@link PayPalProvider} creates the SDK script, component scripts, runs eligibility, then
 * provides these in context to child components via the {@link usePayPal} hook.
 *
 * SDK loading is automatically deferred until clientToken or clientId is available.
 * Both can be either a string, Promise, or undefined.
 *
 * **Important:** When passing a Promise, you must ensure referential stability across renders.
 * An unstable Promise reference (e.g., calling `fetchClientToken()` or `fetchClientId()` inline)
 * will cause the SDK to re-initialize on every render. Wrap the promise in `useMemo` or store it in state.
 *
 * **The `environment` prop is required.** `clientId` does not select the environment in v6 — a
 * live `clientId` will still load the sandbox SDK if `environment="sandbox"`. Pass
 * `environment="production"` or `environment="sandbox"` explicitly.
 *
 * @example
 * // With string clientToken
 * <PayPalProvider
 *   clientToken={token}
 *   environment="sandbox"
 *   components={["paypal-payments", "venmo-payments"]}
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // With string clientId
 * <PayPalProvider
 *   clientId="YOUR_CLIENT_ID"
 *   environment="sandbox"
 *   components={["paypal-payments"]}
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // With Promise clientToken (memoize to prevent re-fetching)
 * const tokenPromise = useMemo(() => fetchClientToken(), []);
 *
 * <PayPalProvider
 *   clientToken={tokenPromise}
 *   environment="sandbox"
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // With Promise clientId
 * const clientIdPromise = useMemo(() => fetchClientId(), []);
 *
 * <PayPalProvider
 *   clientId={clientIdPromise}
 *   environment="sandbox"
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // With deferred loading (clientToken)
 * const [clientToken, setClientToken] = useState<string>();
 *
 * useEffect(() => {
 *   fetchClientToken().then(setClientToken);
 * }, []);
 *
 * <PayPalProvider
 *   clientToken={clientToken}
 *   environment="sandbox"
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // With deferred loading (clientId)
 * const [clientId, setClientId] = useState<string>();
 *
 * useEffect(() => {
 *   fetchClientId().then(setClientId);
 * }, []);
 *
 * <PayPalProvider
 *   clientId={clientId}
 *   environment="sandbox"
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // Show custom loader while SDK initializes
 * function MyCheckout() {
 *   const { loadingStatus } = usePayPal();
 *   const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
 *
 *   if (isPending) {
 *     return <div>Loading PayPal SDK...</div>;
 *   }
 *
 *   return <PayPalOneTimePaymentButton orderId="ORDER-123" />;
 * }
 *
 * <PayPalProvider clientToken={token} environment="sandbox" pageType="checkout">
 *   <MyCheckout />
 * </PayPalProvider>
 */
const PayPalProvider = ({
  clientMetadataId,
  clientToken,
  clientId,
  components = ["paypal-payments"],
  locale,
  pageType,
  partnerAttributionId,
  shopperSessionId,
  testBuyerCountry,
  eligibleMethodsResponse,
  children,
  merchantId,
  ...scriptOptions
}) => {
  const memoizedComponents = useCompareMemoize(components);
  const memoizedMerchantId = useDeepCompareMemoize(merchantId);
  const memoizedEligibleMethodsResponse = useDeepCompareMemoize(eligibleMethodsResponse);
  const [paypalNamespace, setPaypalNamespace] = useState(null);
  const [state, dispatch] = useReducer(instanceReducer, initialState);
  const [isHydrated, setIsHydrated] = useState(false);
  // Ref to hold script options to avoid re-running effect
  const loadCoreScriptOptions = useRef({
    ...scriptOptions,
    dataSdkIntegrationSource: "react-paypal-js"
  });
  // Set hydrated state after initial client render to prevent hydration mismatch
  useIsomorphicLayoutEffect(() => {
    setIsHydrated(true);
  }, []);
  // Using the error hook here so it can participate in side-effects provided by the hook.
  // The actual error instance is stored in the reducer's state.
  const [, setError] = useError();
  // Load Core SDK script
  useEffect(() => {
    let isSubscribed = true;
    const loadSdk = async () => {
      try {
        const sdkNamespace = await loadCoreSdkScript({
          environment: loadCoreScriptOptions.current.environment,
          debug: loadCoreScriptOptions.current.debug,
          dataNamespace: loadCoreScriptOptions.current.dataNamespace,
          dataSdkIntegrationSource: loadCoreScriptOptions.current.dataSdkIntegrationSource
        });
        if (sdkNamespace && isSubscribed) {
          setPaypalNamespace(sdkNamespace);
        }
      } catch (error) {
        if (isSubscribed) {
          setError(error);
          dispatch({
            type: INSTANCE_DISPATCH_ACTION.SET_ERROR,
            value: toError(error)
          });
        }
      }
    };
    loadSdk();
    return () => {
      isSubscribed = false;
    };
  }, [setError]);
  // Create SDK Instance
  useEffect(() => {
    if (!paypalNamespace) {
      return;
    }
    if (!clientToken && !clientId) {
      return;
    }
    dispatch({
      type: INSTANCE_DISPATCH_ACTION.SET_LOADING_STATUS,
      value: INSTANCE_LOADING_STATE.PENDING
    });
    let isSubscribed = true;
    const createSdkInstance = async () => {
      try {
        const authCredential = clientToken || clientId;
        const isClientToken = !!clientToken;
        let credentialValue;
        if (typeof authCredential === "string") {
          credentialValue = authCredential;
        } else if (authCredential) {
          try {
            credentialValue = await authCredential;
          } catch (error) {
            const authError = new Error(`Failed to resolve ${isClientToken ? "clientToken" : "clientId"}. Expected a Promise that resolves to a string, but it was rejected with: ${toError(error).message}`);
            if (isSubscribed) {
              setError(authError);
              dispatch({
                type: INSTANCE_DISPATCH_ACTION.SET_ERROR,
                value: authError
              });
            }
            return;
          }
        }
        if (!credentialValue || !isSubscribed) {
          return;
        }
        const baseOptions = {
          clientMetadataId,
          components: memoizedComponents,
          locale,
          pageType,
          partnerAttributionId,
          shopperSessionId,
          testBuyerCountry,
          merchantId: memoizedMerchantId
        };
        const instanceOptions = isClientToken ? {
          ...baseOptions,
          clientToken: credentialValue
        } : {
          ...baseOptions,
          clientId: credentialValue
        };
        const instance = await paypalNamespace.createInstance(instanceOptions);
        if (!isSubscribed) {
          return;
        }
        dispatch({
          type: INSTANCE_DISPATCH_ACTION.SET_INSTANCE,
          value: instance
        });
      } catch (error) {
        if (isSubscribed) {
          setError(error);
          dispatch({
            type: INSTANCE_DISPATCH_ACTION.SET_ERROR,
            value: toError(error)
          });
        }
      }
    };
    createSdkInstance();
    return () => {
      isSubscribed = false;
    };
  }, [clientMetadataId, clientToken, clientId, locale, memoizedComponents, memoizedMerchantId, pageType, partnerAttributionId, paypalNamespace, shopperSessionId, testBuyerCountry, setError]);
  useEffect(() => {
    const sdkInstance = state.sdkInstance;
    if (!sdkInstance || !memoizedEligibleMethodsResponse) {
      return;
    }
    try {
      const eligiblePaymentMethods = sdkInstance.hydrateEligibleMethods(memoizedEligibleMethodsResponse);
      dispatch({
        type: INSTANCE_DISPATCH_ACTION.SET_ELIGIBILITY_HYDRATED,
        value: {
          eligiblePaymentMethods
        }
      });
    } catch (error) {
      setError(error);
      dispatch({
        type: INSTANCE_DISPATCH_ACTION.SET_ERROR,
        value: toError(error)
      });
    }
  }, [state.sdkInstance, memoizedEligibleMethodsResponse, setError]);
  // Dispatched during render (not in an effect) so children see the
  // correct status on the same render, before their own effects run.
  let eligibilityHydrationStatus = INSTANCE_LOADING_STATE.RESOLVED;
  if (memoizedEligibleMethodsResponse && !state.isEligibilityHydrated) {
    eligibilityHydrationStatus = state.error ? INSTANCE_LOADING_STATE.REJECTED : INSTANCE_LOADING_STATE.PENDING;
  }
  if (eligibilityHydrationStatus !== state.eligibilityHydrationStatus) {
    dispatch({
      type: INSTANCE_DISPATCH_ACTION.SET_ELIGIBILITY_HYDRATION_STATUS,
      value: eligibilityHydrationStatus
    });
  }
  const contextValue = useMemo(() => ({
    sdkInstance: state.sdkInstance,
    eligiblePaymentMethods: state.eligiblePaymentMethods,
    eligiblePaymentMethodsPayload: state.eligiblePaymentMethodsPayload,
    error: state.error,
    loadingStatus: state.loadingStatus,
    isHydrated,
    eligibilityHydrationStatus,
    isEligibilityHydrated: state.isEligibilityHydrated
  }), [state.sdkInstance, state.eligiblePaymentMethods, state.eligiblePaymentMethodsPayload, state.error, state.loadingStatus, isHydrated, eligibilityHydrationStatus, state.isEligibilityHydrated]);
  return React.createElement(PayPalDispatchContext.Provider, {
    value: dispatch
  }, React.createElement(PayPalContext.Provider, {
    value: contextValue
  }, children));
};
const braintreeInitialState = {
  braintreePayPalCheckoutInstance: null,
  eligiblePaymentMethods: null,
  eligiblePaymentMethodsPayload: null,
  loadingStatus: INSTANCE_LOADING_STATE.PENDING,
  error: null,
  isHydrated: false
};
function braintreeReducer(state, action) {
  switch (action.type) {
    case BRAINTREE_DISPATCH_ACTION.SET_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: action.value
      };
    case BRAINTREE_DISPATCH_ACTION.SET_INSTANCE:
      return {
        ...state,
        braintreePayPalCheckoutInstance: action.value,
        loadingStatus: INSTANCE_LOADING_STATE.RESOLVED
      };
    case BRAINTREE_DISPATCH_ACTION.SET_ELIGIBILITY:
      return {
        ...state,
        eligiblePaymentMethods: action.value.eligiblePaymentMethods,
        eligiblePaymentMethodsPayload: action.value.payload
      };
    case BRAINTREE_DISPATCH_ACTION.SET_ERROR:
      return {
        ...state,
        error: action.value,
        loadingStatus: INSTANCE_LOADING_STATE.REJECTED
      };
    case BRAINTREE_DISPATCH_ACTION.RESET_STATE:
      return braintreeInitialState;
    default:
      return state;
  }
}
const BraintreePayPalContext = createContext(null);

/**
 * Internal context for dispatching Braintree PayPal state updates.
 * This is NOT exported to external consumers.
 * Only hooks like useBraintreeEligibleMethods can access this internally.
 *
 * @internal
 */
const BraintreeDispatchContext = createContext(null);

/**
 * {@link BraintreePayPalProvider} validates the Braintree namespace, creates a Braintree client
 * and PayPal Checkout V6 instance, loads the PayPal SDK, then provides the checkout instance
 * in context to child components via the `useBraintreePayPal` hook.
 *
 * The merchant is responsible for loading the Braintree client and paypal-checkout-v6 scripts
 * before rendering this provider.
 *
 * **Important:** The `namespace` prop must have referential stability across renders.
 * An unstable reference (e.g., creating the object inline) will cause re-initialization
 * on every render. Use a module-level constant, `useRef`, or `useMemo`.
 *
 * @example
 * // Merchant loads scripts in their HTML:
 * // <script src="https://www.paypalobjects.com/braintree/web/3.139.0/js/client.min.js"></script>
 * // <script src="https://js.braintreegateway.com/web/3.139.0/js/paypal-checkout-v6.min.js"></script>
 *
 * function App() {
 *   const [clientToken, setClientToken] = useState<string | undefined>(undefined);
 *
 *   useEffect(() => {
 *     fetch("/auth/browser-safe-client-token")
 *       .then((res) => res.json())
 *       .then(({ clientToken }) => setClientToken(clientToken));
 *   }, []);
 *
 *   if (!clientToken) return <div>Loading...</div>;
 *
 *   return (
 *     <BraintreePayPalProvider
 *       namespace={window.braintree}
 *       braintreeClientToken={clientToken}
 *     >
 *       <CheckoutButtons />
 *     </BraintreePayPalProvider>
 *   );
 * }
 *
 * @example
 * // Inside a child component, use prebuilt buttons or custom hooks:
 * function CheckoutButtons() {
 *   const { braintreePayPalCheckoutInstance, loadingStatus } = useBraintreePayPal();
 *
 *   const handleOnApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       orderID: data.orderId,
 *       payerID: data.payerId,
 *     });
 *     // Send nonce to your server to complete the transaction
 *   };
 *
 *   return (
 *     <BraintreePayPalOneTimePaymentButton
 *       amount="100"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *     />
 *   );
 * }
 */
const BraintreePayPalProvider = ({
  namespace,
  braintreeClientToken,
  children
}) => {
  const [state, dispatch] = useReducer(braintreeReducer, braintreeInitialState);
  const [isHydrated, setIsHydrated] = useState(false);
  const [, setError] = useError();
  const braintreePayPalCheckoutRef = useRef(null);
  // Set hydrated state after initial client render to prevent hydration mismatch
  useIsomorphicLayoutEffect(() => {
    setIsHydrated(true);
  }, []);
  useEffect(() => {
    if (!validateBraintreeNamespace(namespace)) {
      const validationError = new Error("Invalid Braintree namespace. Ensure the Braintree client and " + "paypal-checkout-v6 scripts are loaded and that " + "namespace.client.create and namespace.paypalCheckoutV6.create are functions.");
      setError(validationError);
      dispatch({
        type: BRAINTREE_DISPATCH_ACTION.SET_ERROR,
        value: validationError
      });
      return;
    }
    let isSubscribed = true;
    dispatch({
      type: BRAINTREE_DISPATCH_ACTION.SET_LOADING_STATUS,
      value: INSTANCE_LOADING_STATE.PENDING
    });
    const initialize = async () => {
      if (!braintreeClientToken) {
        const clientTokenError = new Error("Braintree client token is required to initialize the PayPal Checkout instance.");
        if (isSubscribed) {
          setError(clientTokenError);
          dispatch({
            type: BRAINTREE_DISPATCH_ACTION.SET_ERROR,
            value: clientTokenError
          });
        }
        return;
      }
      try {
        const clientInstance = await namespace.client.create({
          authorization: braintreeClientToken
        });
        if (!isSubscribed) {
          return;
        }
        const paypalCheckoutInstance = await namespace.paypalCheckoutV6.create({
          client: clientInstance
        });
        if (!isSubscribed) {
          return;
        }
        await paypalCheckoutInstance.loadPayPalSDK();
        if (!isSubscribed) {
          return;
        }
        braintreePayPalCheckoutRef.current = paypalCheckoutInstance;
        dispatch({
          type: BRAINTREE_DISPATCH_ACTION.SET_INSTANCE,
          value: paypalCheckoutInstance
        });
      } catch (error) {
        if (isSubscribed) {
          setError(error);
          dispatch({
            type: BRAINTREE_DISPATCH_ACTION.SET_ERROR,
            value: toError(error)
          });
        }
      }
    };
    initialize();
    return () => {
      isSubscribed = false;
      braintreePayPalCheckoutRef.current?.teardown();
      braintreePayPalCheckoutRef.current = null;
    };
  }, [namespace, braintreeClientToken, setError]);
  const contextValue = useMemo(() => ({
    braintreePayPalCheckoutInstance: state.braintreePayPalCheckoutInstance,
    eligiblePaymentMethods: state.eligiblePaymentMethods,
    eligiblePaymentMethodsPayload: state.eligiblePaymentMethodsPayload,
    loadingStatus: state.loadingStatus,
    error: state.error,
    isHydrated
  }), [state.braintreePayPalCheckoutInstance, state.eligiblePaymentMethods, state.eligiblePaymentMethodsPayload, state.loadingStatus, state.error, isHydrated]);
  return React.createElement(BraintreeDispatchContext.Provider, {
    value: dispatch
  }, React.createElement(BraintreePayPalContext.Provider, {
    value: contextValue
  }, children));
};

/**
 * Returns the {@link BraintreePayPalState} provided by a parent {@link BraintreePayPalProvider}.
 *
 * The returned state includes:
 * - `braintreePayPalCheckoutInstance` — the Braintree PayPal Checkout V6 instance
 *   used for `tokenizePayment()`, `findEligibleMethods()`, and `updatePayment()`
 * - `eligiblePaymentMethods` — eligibility result cached by `useBraintreeEligibleMethods`,
 *   or `null` if it has not been fetched yet
 * - `eligiblePaymentMethodsPayload` — the options the cached `eligiblePaymentMethods` was
 *   fetched with, used to detect stale data
 * - `loadingStatus` — `"pending"`, `"resolved"`, or `"rejected"`
 * - `error` — any initialization error
 * - `isHydrated` — `false` during SSR, `true` after client hydration
 *
 * Must be used within a `BraintreePayPalProvider`.
 *
 * @returns {BraintreePayPalState}
 *
 * @example
 * function CheckoutButtons() {
 *   const { braintreePayPalCheckoutInstance, loadingStatus } = useBraintreePayPal();
 *
 *   const handleOnApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       orderID: data.orderId,
 *       payerID: data.payerId,
 *     });
 *     // Send nonce to your server to complete the transaction
 *   };
 *
 *   if (loadingStatus !== "resolved") return <div>Loading...</div>;
 *
 *   return (
 *     <BraintreePayPalOneTimePaymentButton
 *       amount="100"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *     />
 *   );
 * }
 */
function useBraintreePayPal() {
  const context = useContext(BraintreePayPalContext);
  if (context === null) {
    throw new Error("useBraintreePayPal must be used within a BraintreePayPalProvider");
  }
  return context;
}

/**
 * Hook for managing one-time payment sessions with Braintree PayPal.
 *
 * The hook returns an `isPending` flag that indicates whether the Braintree checkout
 * instance is still being initialized. Buttons should wait to render until `isPending`
 * is false.
 *
 * For a ready-to-use component that wraps this hook, see `BraintreePayPalOneTimePaymentButton`.
 *
 * @returns Object with: `error` (any session error), `isPending` (checkout instance loading), `handleClick` (starts session)
 *
 * @example
 * // Custom button using the hook directly with a <paypal-button> web component
 * function PayPalOneTimePaymentButton(props: UseBraintreePayPalOneTimePaymentSessionProps) {
 *   const { isPending, handleClick } = useBraintreePayPalOneTimePaymentSession(props);
 *
 *   return (
 *     <paypal-button
 *       type="pay"
 *       onClick={() => handleClick()}
 *       disabled={isPending}
 *     />
 *   );
 * }
 *
 * // Usage with tokenization in onApprove:
 * function Checkout() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *
 *   const handleOnApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       orderID: data.orderId,
 *       payerID: data.payerId,
 *     });
 *     // Send nonce to your server to complete the transaction
 *   };
 *
 *   return (
 *     <PayPalOneTimePaymentButton
 *       amount="10.00"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *     />
 *   );
 * }
 */
function useBraintreePayPalOneTimePaymentSession({
  // Callbacks
  onApprove,
  onCancel,
  onError: onErrorCallback,
  onShippingAddressChange,
  onShippingOptionsChange,
  // Primitive data options
  amount,
  currency,
  intent,
  commit,
  offerCredit,
  userAuthenticationEmail,
  returnUrl,
  cancelUrl,
  displayName,
  presentationMode,
  shippingCallbackUrl,
  // Object/array data options (require deep comparison)
  lineItems,
  shippingOptions,
  amountBreakdown,
  shippingAddressOverride
}) {
  const {
    braintreePayPalCheckoutInstance,
    loadingStatus,
    error: contextError
  } = useBraintreePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed checkout instance
  const failedInstanceRef = useRef(null);
  const proxyCallbacks = useProxyProps({
    onApprove,
    onCancel,
    onError: onErrorCallback,
    onShippingAddressChange,
    onShippingOptionsChange
  });
  // Deep-memoize only object/array options that consumers may pass inline
  const memoizedLineItems = useDeepCompareMemoize(lineItems);
  const memoizedShippingOptions = useDeepCompareMemoize(shippingOptions);
  const memoizedAmountBreakdown = useDeepCompareMemoize(amountBreakdown);
  const memoizedShippingAddressOverride = useDeepCompareMemoize(shippingAddressOverride);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  // Handle checkout instance availability
  useEffect(() => {
    // Reset failed instance tracking when checkout instance changes
    if (failedInstanceRef.current !== braintreePayPalCheckoutInstance) {
      failedInstanceRef.current = null;
    }
    if (braintreePayPalCheckoutInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(contextError ? new Error(`Braintree provider error: ${contextError.message}`, {
        cause: contextError
      }) : new Error("Braintree One-Time Payment checkout instance not available"));
    }
  }, [braintreePayPalCheckoutInstance, setError, loadingStatus, contextError]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!braintreePayPalCheckoutInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => braintreePayPalCheckoutInstance.createOneTimePaymentSession({
        amount,
        currency,
        intent,
        commit,
        offerCredit,
        userAuthenticationEmail,
        returnUrl,
        cancelUrl,
        displayName,
        presentationMode,
        shippingCallbackUrl,
        lineItems: memoizedLineItems,
        shippingOptions: memoizedShippingOptions,
        amountBreakdown: memoizedAmountBreakdown,
        shippingAddressOverride: memoizedShippingAddressOverride,
        ...proxyCallbacks
      }),
      failedSdkRef: failedInstanceRef,
      sdkInstance: braintreePayPalCheckoutInstance,
      setError,
      errorMessage: "Failed to create Braintree payment session. Ensure the BraintreePayPalProvider is properly initialized with a valid client token and namespace."
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    return () => {
      sessionRef.current = null;
    };
  }, [braintreePayPalCheckoutInstance, amount, currency, intent, commit, offerCredit, userAuthenticationEmail, returnUrl, cancelUrl, displayName, presentationMode, shippingCallbackUrl, memoizedLineItems, memoizedShippingOptions, memoizedAmountBreakdown, memoizedShippingAddressOverride, proxyCallbacks, setError]);
  const handleClick = useCallback(() => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("Braintree payment session not available"));
      return;
    }
    sessionRef.current.start();
  }, [isMountedRef, setError]);
  return {
    error,
    isPending,
    handleClick
  };
}

/**
 * `BraintreePayPalOneTimePaymentButton` is a prebuilt button that renders a `<paypal-button>`
 * web component and manages the Braintree PayPal one-time payment flow.
 *
 * Combines {@link UseBraintreePayPalOneTimePaymentSessionProps} and {@link ButtonProps}.
 * Must be rendered inside a BraintreePayPalProvider.
 *
 * For full control over the button UI, use the {@link useBraintreePayPalOneTimePaymentSession}
 * hook directly instead.
 *
 * @example
 * function CheckoutButtons() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *
 *   const handleOnApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       orderID: data.orderId,
 *       payerID: data.payerId,
 *     });
 *     // Send nonce to your server to complete the transaction
 *   };
 *
 *   return (
 *     <BraintreePayPalOneTimePaymentButton
 *       amount="100"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *     />
 *   );
 * }
 */
const BraintreePayPalOneTimePaymentButton = ({
  type = "pay",
  disabled = false,
  // Callbacks
  onApprove,
  onCancel,
  onError,
  onShippingAddressChange,
  onShippingOptionsChange,
  // Primitive data options
  amount,
  currency,
  intent,
  commit,
  offerCredit,
  userAuthenticationEmail,
  returnUrl,
  cancelUrl,
  displayName,
  presentationMode,
  // Object/array data options
  lineItems,
  shippingOptions,
  amountBreakdown
}) => {
  const {
    error,
    isPending,
    handleClick
  } = useBraintreePayPalOneTimePaymentSession({
    onApprove,
    onCancel,
    onError,
    onShippingAddressChange,
    onShippingOptionsChange,
    amount,
    currency,
    intent,
    commit,
    offerCredit,
    userAuthenticationEmail,
    returnUrl,
    cancelUrl,
    displayName,
    presentationMode,
    lineItems,
    shippingOptions,
    amountBreakdown
  });
  const {
    isHydrated
  } = useBraintreePayPal();
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  return isHydrated ? React.createElement("paypal-button", {
    onClick: handleClick,
    type: type,
    disabled: disabled || isPending || error !== null ? true : undefined
  }) : React.createElement("div", null);
};

/**
 * Hook for managing billing agreement sessions with Braintree PayPal.
 *
 * Supports all billing agreement plan types: basic vault-only (no planType),
 * RECURRING, SUBSCRIPTION, UNSCHEDULED, and INSTALLMENTS.
 *
 * The hook returns an `isPending` flag that indicates whether the Braintree checkout
 * instance is still being initialized. Buttons should wait to render until `isPending`
 * is false.
 *
 * For a ready-to-use component that wraps this hook, see `BraintreePayPalBillingAgreementButton`.
 *
 * @returns Object with: `error` (any session error), `isPending` (checkout instance loading), `handleClick` (starts session)
 *
 * @example
 * // Custom button using the hook directly with a <paypal-button> web component
 * function PayPalBillingAgreementButton(props: UseBraintreePayPalBillingAgreementSessionProps) {
 *   const { isPending, handleClick } = useBraintreePayPalBillingAgreementSession(props);
 *
 *   return (
 *     <paypal-button
 *       type="checkout"
 *       onClick={() => handleClick()}
 *       disabled={isPending}
 *     />
 *   );
 * }
 *
 * // Usage with tokenization in onApprove:
 * function Checkout() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *
 *   const handleApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       billingToken: data.billingToken,
 *     });
 *     // Send nonce to your server to vault the payment method
 *   };
 *
 *   return (
 *     <PayPalBillingAgreementButton
 *       onApprove={handleApprove}
 *       onCancel={(data) => console.log("onCancel", data)}
 *       onError={(err) => console.error("onError", err)}
 *     />
 *   );
 * }
 *
 * @example
 * // Subscription billing agreement with plan metadata
 * <PayPalBillingAgreementButton
 *   billingAgreementDescription="Monthly subscription"
 *   planType="SUBSCRIPTION"
 *   planMetadata={{
 *     currencyIsoCode: "USD",
 *     name: "Premium Plan",
 *     billingCycles: [{
 *       billingFrequency: 1,
 *       billingFrequencyUnit: "MONTH",
 *       numberOfExecutions: 0,
 *       sequence: 1,
 *       startDate: "2025-12-01T00:00:00Z",
 *       trial: false,
 *       pricingScheme: { pricingModel: "FIXED", price: "9.99" },
 *     }],
 *   }}
 *   onApprove={handleApprove}
 * />
 */
function useBraintreePayPalBillingAgreementSession({
  // Callbacks
  onApprove,
  onCancel,
  onError: onErrorCallback,
  // Primitive data options
  billingAgreementDescription,
  planType,
  amount,
  currency,
  offerCredit,
  userAction,
  displayName,
  returnUrl,
  cancelUrl,
  presentationMode,
  // Object data options (require deep comparison)
  planMetadata,
  shippingAddressOverride
}) {
  const {
    braintreePayPalCheckoutInstance,
    loadingStatus,
    error: contextError
  } = useBraintreePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const [error, setError] = useError();
  const failedInstanceRef = useRef(null);
  const proxyCallbacks = useProxyProps({
    onApprove,
    onCancel,
    onError: onErrorCallback
  });
  const memoizedPlanMetadata = useDeepCompareMemoize(planMetadata);
  const memoizedShippingAddressOverride = useDeepCompareMemoize(shippingAddressOverride);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  useEffect(() => {
    if (failedInstanceRef.current !== braintreePayPalCheckoutInstance) {
      failedInstanceRef.current = null;
    }
    if (braintreePayPalCheckoutInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(contextError ? new Error(`Braintree provider error: ${contextError.message}`, {
        cause: contextError
      }) : new Error("Braintree Billing Agreement checkout instance not available"));
    }
  }, [braintreePayPalCheckoutInstance, setError, loadingStatus, contextError]);
  useEffect(() => {
    if (!braintreePayPalCheckoutInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => braintreePayPalCheckoutInstance.createBillingAgreementSession({
        billingAgreementDescription,
        planType,
        amount,
        currency,
        offerCredit,
        userAction,
        displayName,
        returnUrl,
        cancelUrl,
        presentationMode,
        planMetadata: memoizedPlanMetadata,
        shippingAddressOverride: memoizedShippingAddressOverride,
        ...proxyCallbacks
      }),
      failedSdkRef: failedInstanceRef,
      sdkInstance: braintreePayPalCheckoutInstance,
      setError,
      errorMessage: "Failed to create Braintree billing agreement session. Ensure the BraintreePayPalProvider is properly initialized with a valid client token and namespace."
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    return () => {
      sessionRef.current = null;
    };
  }, [braintreePayPalCheckoutInstance, billingAgreementDescription, planType, amount, currency, offerCredit, userAction, displayName, returnUrl, cancelUrl, presentationMode, memoizedPlanMetadata, memoizedShippingAddressOverride, proxyCallbacks, setError]);
  const handleClick = useCallback(() => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("Braintree billing agreement session not available"));
      return;
    }
    sessionRef.current.start();
  }, [isMountedRef, setError]);
  return {
    error,
    isPending,
    handleClick
  };
}

/**
 * `BraintreePayPalBillingAgreementButton` is a prebuilt button that renders a `<paypal-button>`
 * web component and manages the Braintree PayPal billing agreement flow.
 *
 * Combines UseBraintreePayPalBillingAgreementSessionProps and ButtonProps.
 * Must be rendered inside a BraintreePayPalProvider.
 *
 * For full control over the button UI, use the {@link useBraintreePayPalBillingAgreementSession}
 * hook directly instead.
 *
 * @example
 * function CheckoutButtons() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *
 *   const handleApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       billingToken: data.billingToken,
 *     });
 *     // Send nonce to your server to vault the payment method
 *   };
 *
 *   return (
 *     <BraintreePayPalBillingAgreementButton
 *       onApprove={handleApprove}
 *       onCancel={(data) => console.log("onCancel", data)}
 *       onError={(err) => console.error("onError", err)}
 *     />
 *   );
 * }
 */
const BraintreePayPalBillingAgreementButton = ({
  type = "pay",
  disabled = false,
  // Callbacks
  onApprove,
  onCancel,
  onError,
  // Primitive data options
  billingAgreementDescription,
  planType,
  amount,
  currency,
  offerCredit,
  userAction,
  displayName,
  returnUrl,
  cancelUrl,
  presentationMode,
  // Object data options
  planMetadata,
  shippingAddressOverride
}) => {
  const {
    error,
    isPending,
    handleClick
  } = useBraintreePayPalBillingAgreementSession({
    onApprove,
    onCancel,
    onError,
    billingAgreementDescription,
    planType,
    amount,
    currency,
    offerCredit,
    userAction,
    displayName,
    returnUrl,
    cancelUrl,
    presentationMode,
    planMetadata,
    shippingAddressOverride
  });
  const {
    isHydrated
  } = useBraintreePayPal();
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  return isHydrated ? React.createElement("paypal-button", {
    onClick: handleClick,
    type: type,
    disabled: disabled || isPending || error !== null ? true : undefined
  }) : React.createElement("div", null);
};

/**
 * Hook for managing checkout with vault sessions with Braintree PayPal.
 *
 * Combines a one-time charge and billing agreement consent in a single flow,
 * enabling merchants to charge a customer and save their payment method together.
 *
 * The hook returns an `isPending` flag that indicates whether the Braintree checkout
 * instance is still being initialized. Buttons should wait to render until `isPending`
 * is false.
 *
 * @returns Object with: `error` (any session error), `isPending` (checkout instance loading), `handleClick` (starts session)
 *
 * @example
 * function BraintreeCheckoutWithVaultButton() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *   const { isPending, error, handleClick } = useBraintreePayPalCheckoutWithVaultSession({
 *     amount: "10.00",
 *     currency: "USD",
 *     billingAgreementDetails: { description: "Save payment method for future use" },
 *     onApprove: async (data) => {
 *       const payload = await braintreePayPalCheckoutInstance.tokenizePayment({
 *         payerID: data.payerId,
 *         orderID: data.orderId,
 *       });
 *       // Send payload.nonce to your server
 *     },
 *   });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return <button onClick={handleClick}>Pay and Save Payment Method</button>;
 * }
 */
function useBraintreePayPalCheckoutWithVaultSession({
  // Callbacks
  onApprove,
  onCancel,
  onError: onErrorCallback,
  onShippingAddressChange,
  onShippingOptionsChange,
  // Primitive data options
  amount,
  currency,
  intent,
  commit,
  userAuthenticationEmail,
  returnUrl,
  cancelUrl,
  displayName,
  presentationMode,
  shippingCallbackUrl,
  // Object/array data options (require deep comparison)
  billingAgreementDetails,
  lineItems,
  shippingOptions,
  amountBreakdown
}) {
  const {
    braintreePayPalCheckoutInstance,
    loadingStatus,
    error: contextError
  } = useBraintreePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed checkout instance
  const failedInstanceRef = useRef(null);
  const proxyCallbacks = useProxyProps({
    onApprove,
    onCancel,
    onError: onErrorCallback,
    onShippingAddressChange,
    onShippingOptionsChange
  });
  // Deep-memoize only object/array options that consumers may pass inline
  const memoizedBillingAgreementDetails = useDeepCompareMemoize(billingAgreementDetails);
  const memoizedLineItems = useDeepCompareMemoize(lineItems);
  const memoizedShippingOptions = useDeepCompareMemoize(shippingOptions);
  const memoizedAmountBreakdown = useDeepCompareMemoize(amountBreakdown);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  useEffect(() => {
    if (failedInstanceRef.current !== braintreePayPalCheckoutInstance) {
      failedInstanceRef.current = null;
    }
    if (braintreePayPalCheckoutInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(contextError ? new Error(`Braintree provider error: ${contextError.message}`, {
        cause: contextError
      }) : new Error("Braintree Checkout With Vault checkout instance not available"));
    }
  }, [braintreePayPalCheckoutInstance, setError, loadingStatus, contextError]);
  useEffect(() => {
    if (!braintreePayPalCheckoutInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => braintreePayPalCheckoutInstance.createCheckoutWithVaultSession({
        amount,
        currency,
        intent,
        commit,
        userAuthenticationEmail,
        returnUrl,
        cancelUrl,
        displayName,
        presentationMode,
        shippingCallbackUrl,
        billingAgreementDetails: memoizedBillingAgreementDetails,
        lineItems: memoizedLineItems,
        shippingOptions: memoizedShippingOptions,
        amountBreakdown: memoizedAmountBreakdown,
        ...proxyCallbacks
      }),
      failedSdkRef: failedInstanceRef,
      sdkInstance: braintreePayPalCheckoutInstance,
      setError,
      errorMessage: "Failed to create Braintree checkout with vault session. Ensure the BraintreePayPalProvider is properly initialized with a valid client token and namespace."
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    return () => {
      sessionRef.current = null;
    };
  }, [braintreePayPalCheckoutInstance, amount, currency, intent, commit, userAuthenticationEmail, returnUrl, cancelUrl, displayName, presentationMode, shippingCallbackUrl, memoizedBillingAgreementDetails, memoizedLineItems, memoizedShippingOptions, memoizedAmountBreakdown, proxyCallbacks, setError]);
  const handleClick = useCallback(() => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("Braintree checkout with vault session not available"));
      return;
    }
    sessionRef.current.start();
  }, [isMountedRef, setError]);
  return {
    error,
    isPending,
    handleClick
  };
}

/**
 * `BraintreePayPalCheckoutWithVaultButton` is a button that provides a Braintree PayPal checkout with vault flow.
 *
 * `BraintreePayPalCheckoutWithVaultButtonProps` combines the arguments for {@link UseBraintreePayPalCheckoutWithVaultSessionProps}
 * and {@link ButtonProps}.
 *
 * Must be rendered inside a `BraintreePayPalProvider`.
 *
 * @example
 * <BraintreePayPalCheckoutWithVaultButton
 *   amount="10.00"
 *   currency="USD"
 *   billingAgreementDetails={{ description: "Save payment method for future use" }}
 *   onApprove={async (data) => {
 *     const payload = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       payerID: data.payerId,
 *       orderID: data.orderId,
 *     });
 *     // Send payload.nonce to your server
 *   }}
 * />
 */
const BraintreePayPalCheckoutWithVaultButton = ({
  type = "pay",
  disabled = false,
  // Callbacks
  onApprove,
  onCancel,
  onError,
  onShippingAddressChange,
  onShippingOptionsChange,
  // Primitive data options
  amount,
  currency,
  intent,
  commit,
  userAuthenticationEmail,
  returnUrl,
  cancelUrl,
  displayName,
  presentationMode,
  // Object/array data options
  billingAgreementDetails,
  lineItems,
  shippingOptions,
  amountBreakdown
}) => {
  const {
    error,
    isPending,
    handleClick
  } = useBraintreePayPalCheckoutWithVaultSession({
    onApprove,
    onCancel,
    onError,
    onShippingAddressChange,
    onShippingOptionsChange,
    amount,
    currency,
    intent,
    commit,
    userAuthenticationEmail,
    returnUrl,
    cancelUrl,
    displayName,
    presentationMode,
    billingAgreementDetails,
    lineItems,
    shippingOptions,
    amountBreakdown
  });
  const {
    isHydrated
  } = useBraintreePayPal();
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  return isHydrated ? React.createElement("paypal-button", {
    onClick: handleClick,
    type: type,
    disabled: disabled || isPending || error ? true : undefined
  }) : React.createElement("div", null);
};

/**
 * Hook for managing Pay Later (Buy Now, Pay Later) sessions with Braintree PayPal.
 *
 * The hook returns an `isPending` flag that indicates whether the Braintree checkout
 * instance is still being initialized. Buttons should wait to render until `isPending`
 * is false.
 *
 * @returns Object with: `error` (any session error), `isPending` (checkout instance loading), `handleClick` (starts session)
 *
 * @example
 * // Custom button using the hook directly with a <paypal-pay-later-button> web component
 * function PayPalPayLaterButton(props: UseBraintreePayPalPayLaterSessionProps) {
 *   const { isPending, handleClick } = useBraintreePayPalPayLaterSession(props);
 *   const { isLoading, eligiblePaymentMethods } = useBraintreeEligibleMethods({
 *     currency: "USD"
 *   });
 *
 *   if (isPending || isLoading) return <Spinner />;
 *
 *   if (!eligiblePaymentMethods?.paylater) {
 *    return null;
 *   }
 *
 *   const payLaterDetails = eligiblePaymentMethods.getDetails("paylater");
 *
 *   return (
 *     <paypal-pay-later-button
 *       onClick={() => handleClick()}
 *       disabled={isPending}
 *       countryCode={payLaterDetails?.countryCode}
 *       productCode={payLaterDetails?.productCode}
 *     />
 *   );
 * }
 *
 * // Pass your custom button props from a parent component:
 * function Checkout() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *
 *   // Tokenize payment in the onApprove callback and send the nonce to your server
 *   const handleOnApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment(data);
 *     // Send nonce to your server to complete the transaction
 *   };
 *
 *   return (
 *     <PayPalPayLaterButton
 *       amount="100.00"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *       // ...other props (onCancel, onError, etc.)
 *     />
 *   );
 * }
 */
function useBraintreePayPalPayLaterSession({
  // Callbacks
  onApprove,
  onCancel,
  onComplete,
  onError: onErrorCallback,
  onShippingAddressChange,
  onShippingOptionsChange,
  // Primitive data options
  amount,
  currency,
  intent,
  userAuthenticationEmail,
  returnUrl,
  cancelUrl,
  displayName,
  presentationMode,
  shippingCallbackUrl,
  // Object/array data options (require deep comparison)
  lineItems,
  shippingOptions,
  amountBreakdown,
  shippingAddressOverride,
  contactPreference
}) {
  const {
    braintreePayPalCheckoutInstance,
    loadingStatus,
    error: contextError
  } = useBraintreePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed checkout instance
  const failedInstanceRef = useRef(null);
  const proxyCallbacks = useProxyProps({
    onApprove,
    onCancel,
    onComplete,
    onError: onErrorCallback,
    onShippingAddressChange,
    onShippingOptionsChange
  });
  // Deep-memoize only object/array options that consumers may pass inline
  const memoizedLineItems = useDeepCompareMemoize(lineItems);
  const memoizedShippingOptions = useDeepCompareMemoize(shippingOptions);
  const memoizedAmountBreakdown = useDeepCompareMemoize(amountBreakdown);
  const memoizedShippingAddressOverride = useDeepCompareMemoize(shippingAddressOverride);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  // Handle checkout instance availability
  useEffect(() => {
    // Reset failed instance tracking when checkout instance changes
    if (failedInstanceRef.current !== braintreePayPalCheckoutInstance) {
      failedInstanceRef.current = null;
    }
    if (braintreePayPalCheckoutInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(contextError ? new Error(`Braintree provider error: ${contextError.message}`, {
        cause: contextError
      }) : new Error("Braintree Pay Later checkout instance not available"));
    }
  }, [braintreePayPalCheckoutInstance, setError, loadingStatus, contextError]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!braintreePayPalCheckoutInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => braintreePayPalCheckoutInstance.createPayLaterSession({
        amount,
        currency,
        intent,
        userAuthenticationEmail,
        returnUrl,
        cancelUrl,
        displayName,
        presentationMode,
        shippingCallbackUrl,
        lineItems: memoizedLineItems,
        shippingOptions: memoizedShippingOptions,
        amountBreakdown: memoizedAmountBreakdown,
        shippingAddressOverride: memoizedShippingAddressOverride,
        contactPreference,
        ...proxyCallbacks
      }),
      failedSdkRef: failedInstanceRef,
      sdkInstance: braintreePayPalCheckoutInstance,
      setError,
      errorMessage: "Failed to create Braintree Pay Later session. Ensure the BraintreePayPalProvider is properly initialized with a valid client token and namespace."
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    return () => {
      sessionRef.current = null;
    };
  }, [braintreePayPalCheckoutInstance, amount, currency, intent, userAuthenticationEmail, returnUrl, cancelUrl, displayName, presentationMode, shippingCallbackUrl, contactPreference, memoizedLineItems, memoizedShippingOptions, memoizedAmountBreakdown, memoizedShippingAddressOverride, proxyCallbacks, setError]);
  const handleClick = useCallback(() => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("Braintree payment session not available"));
      return;
    }
    sessionRef.current.start();
  }, [isMountedRef, setError]);
  return {
    error,
    isPending,
    handleClick
  };
}

/**
 * `BraintreePayPalPayLaterButton` is a prebuilt button that renders a
 * `<paypal-pay-later-button>` web component and manages the Braintree PayPal
 * Pay Later (Buy Now, Pay Later) flow.
 *
 * Combines {@link UseBraintreePayPalPayLaterSessionProps} and a `disabled` prop.
 * Must be rendered inside a BraintreePayPalProvider.
 *
 * **Requires eligibility data.** This component reads `countryCode` and
 * `productCode` from `useBraintreePayPal().eligiblePaymentMethods`, which is
 * populated by `useBraintreeEligibleMethods`. **Without eligibility, the button
 * renders with `display: none` and is invisible.** Wait for eligibility before
 * rendering.
 *
 * For full control over the button UI, use the {@link useBraintreePayPalPayLaterSession}
 * hook directly instead.
 *
 * @example
 * function CheckoutButtons() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *   // Wait for eligibility to be determined before rendering buttons
 *   const { eligiblePaymentMethods, isLoading } = useBraintreeEligibleMethods({
 *     amount, // dynamic checkout amount that can be used for eligibility checks
 *     currency: "USD",
 *     countryCode: "US",
 *     paymentFlow: "ONE_TIME_PAYMENT",
 *   });
 *   if (isLoading) return <Spinner />;
 *
 *   const handleOnApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment(data);
 *     // Send nonce to your server to complete the transaction
 *   };
 *
 *   if (!eligiblePaymentMethods?.paylater) {
 *     return null;
 *   }
 *
 *   return (
 *     <BraintreePayPalPayLaterButton
 *       amount="100"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *       // ...other props (onCancel, onError, etc.)
 *     />
 *   );
 * }
 */
const BraintreePayPalPayLaterButton = ({
  disabled = false,
  ...hookProps
}) => {
  const {
    eligiblePaymentMethods,
    isHydrated
  } = useBraintreePayPal();
  const {
    error,
    isPending,
    handleClick
  } = useBraintreePayPalPayLaterSession(hookProps);
  const payLaterDetails = eligiblePaymentMethods?.getDetails("paylater");
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  return isHydrated ? React.createElement("paypal-pay-later-button", {
    onClick: handleClick,
    countryCode: payLaterDetails?.countryCode,
    productCode: payLaterDetails?.productCode,
    disabled: disabled || isPending || error !== null ? true : undefined
  }) : React.createElement("div", null);
};

/**
 * Hook for managing a PayPal save payment session, vault without purchase.
 *
 * This hook creates and manages a PayPal save payment session for vaulting payment methods.
 * It supports multiple presentation modes and handles session lifecycle, resume flows for redirect-based
 * flows, and provides methods to start, cancel, and destroy the session.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function SavePayPalButton() {
 *   const { error, isPending, handleClick, handleCancel } = usePayPalSavePaymentSession({
 *     presentationMode: 'popup',
 *     createVaultToken: async () => ({ vaultSetupToken: 'VAULT-TOKEN-123' }),
 *     onApprove: (data) => console.log('Vaulted:', data),
 *     onCancel: () => console.log('Cancelled'),
 *   });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-button onClick={handleClick} onCancel={handleCancel} />
 *   );
 * }
 */
function usePayPalSavePaymentSession({
  presentationMode = "auto",
  fullPageOverlay,
  autoRedirect,
  createVaultToken,
  vaultSetupToken,
  ...callbacks
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const proxyCallbacks = useProxyProps(callbacks);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed SDK instance
  const failedSdkRef = useRef(null);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const handleDestroy = useCallback(() => {
    sessionRef.current?.destroy();
    sessionRef.current = null;
  }, []);
  // Handle SDK availability
  useEffect(() => {
    // Reset failed SDK tracking when SDK instance changes
    if (failedSdkRef.current !== sdkInstance) {
      failedSdkRef.current = null;
    }
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => sdkInstance.createPayPalSavePaymentSession({
        vaultSetupToken,
        ...proxyCallbacks
      }),
      failedSdkRef,
      sdkInstance,
      setError,
      errorMessage: 'Failed to create payment session. This may occur if the required component "paypal-payments" is not included in the SDK components array.'
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    const shouldCheckResume = presentationMode === "redirect" || presentationMode === "direct-app-switch";
    if (shouldCheckResume) {
      const handleReturnFromPayPal = async () => {
        try {
          if (!newSession) {
            return;
          }
          const isResumeFlow = newSession.hasReturned?.();
          if (isResumeFlow) {
            await newSession.resume?.();
          }
        } catch (err) {
          setError(err);
        }
      };
      handleReturnFromPayPal();
    }
    return () => {
      newSession.destroy();
    };
  }, [sdkInstance, vaultSetupToken, proxyCallbacks, presentationMode, setError]);
  const handleCancel = useCallback(() => {
    sessionRef.current?.cancel();
  }, []);
  const handleClick = useCallback(async () => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("Save Payment session not available"));
      return;
    }
    const startOptions = {
      presentationMode,
      fullPageOverlay,
      autoRedirect
    };
    if (createVaultToken) {
      await sessionRef.current.start(startOptions, createVaultToken());
    } else {
      await sessionRef.current.start(startOptions);
    }
  }, [isMountedRef, presentationMode, fullPageOverlay, autoRedirect, createVaultToken, setError]);
  return {
    error,
    isPending,
    handleClick,
    handleCancel,
    handleDestroy
  };
}

/**
 * `PayPalSavePaymentButton` is a button that provides a PayPal vault/save payment flow
 * (without purchase).
 *
 * `PayPalSavePaymentButtonProps` combines the arguments for {@link UsePayPalSavePaymentSessionProps}
 * and {@link ButtonProps}.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayPalSavePaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * <PayPalSavePaymentButton
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 *   vaultSetupToken="your-vault-setup-token"
 * />
 */
const PayPalSavePaymentButton = ({
  type = "pay",
  disabled = false,
  ...hookProps
}) => {
  const {
    error,
    isPending,
    handleClick
  } = usePayPalSavePaymentSession(hookProps);
  const {
    isHydrated
  } = usePayPal();
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  return isHydrated ? React.createElement("paypal-button", {
    type: type,
    disabled: disabled || isPending || error !== null ? true : undefined,
    onClick: handleClick
  }) : React.createElement("div", null);
};

/**
 * Hook for managing Venmo one-time payment sessions.
 *
 * This hook creates and manages a Venmo payment session. It handles session lifecycle
 * and provides methods to start, cancel, and destroy the session.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function VenmoCheckout() {
 *   const { error, isPending, handleClick, handleCancel } = useVenmoOneTimePaymentSession({
 *     createOrder: async () => ({ orderId: 'ORDER-123' }),
 *     onApprove: (data) => console.log('Approved:', data),
 *     onCancel: () => console.log('Cancelled'),
 *   });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <venmo-button onClick={handleClick} onCancel={handleCancel} />
 *   );
 * }
 */
function useVenmoOneTimePaymentSession({
  presentationMode = "auto",
  fullPageOverlay,
  createOrder,
  orderId,
  ...callbacks
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const proxyCallbacks = useProxyProps(callbacks);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed SDK instance
  const failedSdkRef = useRef(null);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const handleDestroy = useCallback(() => {
    sessionRef.current?.destroy();
    sessionRef.current = null;
  }, []);
  // Handle SDK availability
  useEffect(() => {
    // Reset failed SDK tracking when SDK instance changes
    if (failedSdkRef.current !== sdkInstance) {
      failedSdkRef.current = null;
    }
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => sdkInstance.createVenmoOneTimePaymentSession({
        orderId,
        ...proxyCallbacks
      }),
      failedSdkRef,
      sdkInstance,
      setError,
      errorMessage: 'Failed to create payment session. This may occur if the required component "venmo-payments" is not included in the SDK components array.'
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    return () => {
      newSession.destroy();
    };
  }, [sdkInstance, orderId, proxyCallbacks, setError]);
  const handleCancel = useCallback(() => {
    sessionRef.current?.cancel();
  }, []);
  const handleClick = useCallback(async () => {
    if (!isMountedRef.current) {
      return;
    }
    if (!sessionRef.current) {
      setError(new Error("Venmo session not available"));
      return;
    }
    const startOptions = {
      presentationMode,
      fullPageOverlay
    };
    await sessionRef.current.start(startOptions, createOrder?.());
  }, [isMountedRef, presentationMode, fullPageOverlay, createOrder, setError]);
  return {
    error,
    isPending,
    handleCancel,
    handleClick,
    handleDestroy
  };
}

/**
 * `VenmoOneTimePaymentButton` is a button that provides a standard Venmo payment flow.
 *
 * `VenmoOneTimePaymentButtonProps` combines the arguments for {@link UseVenmoOneTimePaymentSessionProps}
 * and {@link ButtonProps}.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * <VenmoOneTimePaymentButton
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 *   orderId="your-order-id"
 * />
 */
const VenmoOneTimePaymentButton = ({
  type = "pay",
  disabled = false,
  ...hookProps
}) => {
  const {
    error,
    isPending,
    handleClick
  } = useVenmoOneTimePaymentSession(hookProps);
  const {
    isHydrated
  } = usePayPal();
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  return isHydrated ? React.createElement("venmo-button", {
    onClick: handleClick,
    type: type,
    disabled: disabled || isPending || error !== null ? true : undefined
  }) : React.createElement("div", null);
};

/**
 * Hook for managing Apple Pay one-time payment sessions.
 *
 * This hook creates and manages a complete Apple Pay payment session, handling the entire
 * flow from button click through merchant validation to payment confirmation.
 *
 * @example
 * ```typescript
 * function ApplePayCheckoutButton() {
 *   const { sdkInstance } = usePayPal();
 *   const [applePayConfig, setApplePayConfig] = useState(null);
 *
 *   useEffect(() => {
 *     const fetchConfig = async () => {
 *       const methods = await sdkInstance?.findEligibleMethods({ currencyCode: "USD" });
 *       if (methods?.isEligible("applepay")) {
 *         setApplePayConfig(methods.getDetails("applepay").config);
 *       }
 *     };
 *     fetchConfig();
 *   }, [sdkInstance]);
 *
 *   const { isPending, error, handleClick } = useApplePayOneTimePaymentSession({
 *     applePayConfig,
 *     paymentRequest: {
 *       countryCode: "US",
 *       currencyCode: "USD",
 *       total: { label: "Demo Store", amount: "100.00", type: "final" },
 *     },
 *     createOrder: async () => {
 *       const response = await fetch("/api/orders", { method: "POST" });
 *       const data = await response.json();
 *       return { orderId: data.id };
 *     },
 *     onApprove: (data) => console.log("Payment approved:", data),
 *     onError: (err) => console.error("Payment error:", err),
 *   });
 *
 *   if (isPending || !applePayConfig) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <apple-pay-button
 *       buttonstyle="black"
 *       type="buy"
 *       locale="en"
 *       onClick={handleClick}
 *     />
 *   );
 * }
 * ```
 */
function useApplePayOneTimePaymentSession({
  applePayConfig,
  paymentRequest,
  displayName,
  domainName,
  createOrder,
  applePaySessionVersion,
  ...callbacks
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const activeApplePaySessionRef = useRef(null);
  const proxyCallbacks = useProxyProps(callbacks);
  const [error, setError] = useError();
  // Prevents retrying session creation with a failed SDK instance
  const failedSdkRef = useRef(null);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const handleCancel = useCallback(() => {
    if (activeApplePaySessionRef.current) {
      try {
        activeApplePaySessionRef.current.abort();
      } catch {
        // Session may already be complete
      }
      activeApplePaySessionRef.current = null;
    }
  }, []);
  const handleDestroy = useCallback(() => {
    handleCancel();
    sessionRef.current = null;
  }, [handleCancel]);
  // Handle SDK availability
  useEffect(() => {
    // Reset failed SDK tracking when SDK instance changes
    if (failedSdkRef.current !== sdkInstance) {
      failedSdkRef.current = null;
    }
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => sdkInstance.createApplePayOneTimePaymentSession(),
      failedSdkRef,
      sdkInstance,
      setError,
      errorMessage: 'Failed to create payment session. This may occur if the required component "applepay-payments" is not included in the SDK components array.'
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    return () => {
      sessionRef.current = null;
    };
  }, [sdkInstance, setError]);
  const handleClick = useCallback(async () => {
    if (!isMountedRef.current) {
      return;
    }
    // Clear any error from a previous attempt so the user can retry
    setError(null);
    if (!sessionRef.current) {
      setError(new Error("Apple Pay session not available"));
      return;
    }
    // Check if Apple Pay is available on this device/browser
    if (typeof window === "undefined" || !window.ApplePaySession?.canMakePayments()) {
      setError(new Error("Apple Pay is not available"));
      return;
    }
    // ApplePaySession constructor throws InvalidAccessError on non-HTTPS; provide a clearer message
    if (window.location.protocol !== "https:") {
      setError(new Error("Apple Pay requires a secure (HTTPS) connection"));
      return;
    }
    const {
      ApplePaySession: ApplePaySessionConstructor
    } = window;
    try {
      const paypalSession = sessionRef.current;
      // Format the payment request with Apple Pay config
      const formattedConfig = paypalSession.formatConfigForPaymentRequest(applePayConfig);
      const fullPaymentRequest = {
        ...paymentRequest,
        ...formattedConfig
      };
      // Create Apple's native payment session
      const applePaySession = new ApplePaySessionConstructor(applePaySessionVersion, fullPaymentRequest);
      activeApplePaySessionRef.current = applePaySession;
      // Handle merchant validation
      applePaySession.onvalidatemerchant = async event => {
        try {
          const payload = await paypalSession.validateMerchant({
            validationUrl: event.validationURL,
            ...(displayName && {
              displayName
            }),
            ...(domainName && {
              domainName
            })
          });
          applePaySession.completeMerchantValidation(payload.merchantSession);
        } catch (err) {
          const merchantError = toError(err);
          setError(merchantError);
          proxyCallbacks.onError?.(merchantError);
          applePaySession.abort();
        }
      };
      // Handle payment method selection
      applePaySession.onpaymentmethodselected = () => {
        applePaySession.completePaymentMethodSelection({
          newTotal: paymentRequest.total
        });
      };
      // Handle payment authorization
      applePaySession.onpaymentauthorized = async event => {
        let didCompletePayment = false;
        // Call completePayment only once per ApplePaySession.
        const completePaymentOnce = status => {
          if (didCompletePayment) {
            return;
          }
          didCompletePayment = true;
          try {
            applePaySession.completePayment({
              status
            });
          } catch (err) {
            const completePaymentError = toError(err);
            setError(completePaymentError);
            proxyCallbacks.onError?.(completePaymentError);
          }
        };
        try {
          // Create the order
          const order = await createOrder();
          // Confirm the order with PayPal
          const confirmResult = await paypalSession.confirmOrder({
            orderId: order.orderId,
            token: event.payment.token,
            billingContact: event.payment.billingContact,
            shippingContact: event.payment.shippingContact
          });
          // Call onApprove callback
          await proxyCallbacks.onApprove(confirmResult);
          // Complete the Apple Pay session successfully
          completePaymentOnce(ApplePaySessionConstructor.STATUS_SUCCESS);
          // Run non-critical post-completion logic without affecting payment status.
          try {
            await proxyCallbacks.onApproveCompleted?.(confirmResult);
          } catch (err) {
            const postApproveError = toError(err);
            setError(postApproveError);
            proxyCallbacks.onError?.(postApproveError);
          }
        } catch (err) {
          const paymentError = toError(err);
          setError(paymentError);
          proxyCallbacks.onError?.(paymentError);
          completePaymentOnce(ApplePaySessionConstructor.STATUS_FAILURE);
        }
      };
      // Handle cancellation
      applePaySession.oncancel = () => {
        activeApplePaySessionRef.current = null;
        proxyCallbacks.onCancel?.();
      };
      // Begin the Apple Pay session
      applePaySession.begin();
    } catch (err) {
      const sessionError = toError(err);
      setError(sessionError);
      proxyCallbacks.onError?.(sessionError);
    }
  }, [isMountedRef, applePayConfig, paymentRequest, displayName, domainName, createOrder, applePaySessionVersion, proxyCallbacks, setError]);
  return {
    error,
    isPending,
    handleClick,
    handleCancel,
    handleDestroy
  };
}

/**
 * `ApplePayOneTimePaymentButton` renders a native Apple Pay button and manages
 * the full Apple Pay payment flow via the PayPal SDK.
 *
 * @example
 * ```tsx
 * <ApplePayOneTimePaymentButton
 *   applePayConfig={applePayConfig}
 *   paymentRequest={{
 *     countryCode: "US",
 *     currencyCode: "USD",
 *     total: { label: "Demo Store", amount: "100.00", type: "final" },
 *   }}
 *   createOrder={async () => {
 *     const res = await fetch("/api/orders", { method: "POST" });
 *     const data = await res.json();
 *     return { orderId: data.id };
 *   }}
 *   onApprove={(data) => console.log("Approved:", data)}
 *   onError={(err) => console.error(err)}
 * />
 * ```
 */
const ApplePayOneTimePaymentButton = ({
  buttonstyle = "black",
  type = "pay",
  locale = "en",
  className,
  ...hookProps
}) => {
  const {
    error,
    handleClick,
    handleDestroy
  } = useApplePayOneTimePaymentSession(hookProps);
  const {
    isHydrated
  } = usePayPal();
  const buttonRef = useRef(null);
  const handleClickRef = useRef(handleClick);
  handleClickRef.current = handleClick;
  // Apple's <apple-pay-button> manages its own enabled/disabled state internally
  // via canMakePayments(); we deliberately don't add an SDK-level disabled layer
  // (merchants control presentation themselves). React's onClick also doesn't
  // work on the element due to its shadow DOM, so we attach the handler directly.
  useEffect(() => {
    const el = buttonRef.current;
    if (!el) {
      return;
    }
    const onClick = () => {
      handleClickRef.current().catch(() => {
        // Errors are captured by the hook's setError
      });
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      handleDestroy();
    };
  }, [handleDestroy]);
  if (!isHydrated) {
    return React.createElement("div", null);
  }
  return React.createElement("div", {
    className: className
  }, React.createElement("apple-pay-button", {
    ref: buttonRef,
    buttonstyle: buttonstyle,
    type: type,
    locale: locale
  }));
};

/**
 * Hook for managing Google Pay one-time payment sessions.
 *
 * This hook creates and manages a complete Google Pay payment session, handling the entire
 * flow from button click through payment authorization to order confirmation.
 *
 * Unlike Apple Pay and Venmo (which use web components), Google Pay uses Google's PaymentsClient
 * to drive the payment UI. This hook returns the PaymentsClient and formatted config so the
 * GooglePayOneTimePaymentButton component can:
 * 1. Check device/browser readiness with `isReadyToPay()`
 * 2. Create the native Google Pay button before user interaction
 * 3. Load payment data and handle payment callbacks
 *
 * The hook manages the entire session lifecycle including order creation, payment confirmation,
 * 3DS (PAYER_ACTION_REQUIRED) handling, and error management.
 *
 * @example
 * ```typescript
 * function GooglePayCheckoutButton() {
 *   const { sdkInstance } = usePayPal();
 *   const [googlePayConfig, setGooglePayConfig] = useState(null);
 *
 *   useEffect(() => {
 *     const fetchConfig = async () => {
 *       const methods = await sdkInstance?.findEligibleMethods({ currencyCode: "USD" });
 *       if (methods?.isEligible("googlepay")) {
 *         setGooglePayConfig(methods.getDetails("googlepay").config);
 *       }
 *     };
 *     fetchConfig();
 *   }, [sdkInstance]);
 *
 *   const { isPending, error, handleClick } = useGooglePayOneTimePaymentSession({
 *     googlePayConfig,
 *     transactionInfo: {
 *       countryCode: "US",
 *       currencyCode: "USD",
 *       totalPriceStatus: "FINAL",
 *       totalPrice: "100.00",
 *     },
 *     createOrder: async () => {
 *       const response = await fetch("/api/orders", { method: "POST" });
 *       const data = await response.json();
 *       return { orderId: data.id };
 *     },
 *     onApprove: (data) => console.log("Payment approved:", data),
 *     onError: (err) => console.error("Payment error:", err),
 *   });
 *
 *   if (isPending || !googlePayConfig) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return <button onClick={handleClick}>Pay with Google Pay</button>;
 * }
 * ```
 */
function useGooglePayOneTimePaymentSession({
  googlePayConfig,
  transactionInfo,
  environment = "TEST",
  createOrder,
  ...callbacks
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const sessionRef = useRef(null);
  const paymentsClientRef = useRef(null);
  const createOrderRef = useRef(createOrder);
  createOrderRef.current = createOrder;
  const proxyCallbacks = useProxyProps(callbacks);
  const [error, setError] = useError();
  const [paymentsClient, setPaymentsClient] = useState(null);
  const [formattedConfig, setFormattedConfig] = useState(null);
  // Prevents retrying session creation with a failed SDK instance
  const failedSdkRef = useRef(null);
  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const handleCancel = useCallback(() => {
    // Google Pay doesn't have a persistent session to cancel;
    // the payment sheet is managed by Google's PaymentsClient.
  }, []);
  const handleDestroy = useCallback(() => {
    sessionRef.current = null;
    paymentsClientRef.current = null;
    setPaymentsClient(null);
    setFormattedConfig(null);
  }, []);
  // Handle SDK availability
  useEffect(() => {
    // Reset failed SDK tracking when SDK instance changes
    if (failedSdkRef.current !== sdkInstance) {
      failedSdkRef.current = null;
    }
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  // Create and manage session lifecycle
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = createPaymentSession({
      sessionCreator: () => sdkInstance.createGooglePayOneTimePaymentSession(),
      failedSdkRef,
      sdkInstance,
      setError,
      errorMessage: 'Failed to create payment session. This may occur if the required component "googlepay-payments" is not included in the SDK components array.'
    });
    if (!newSession) {
      return;
    }
    sessionRef.current = newSession;
    return () => {
      sessionRef.current = null;
    };
  }, [sdkInstance, setError]);
  // Create a reusable PaymentsClient and formatted config so the component can
  // run isReadyToPay and mount the native Google Pay button before user click.
  useEffect(() => {
    if (!sessionRef.current) {
      paymentsClientRef.current = null;
      setPaymentsClient(null);
      setFormattedConfig(null);
      return;
    }
    if (typeof window === "undefined" || !window.google?.payments?.api?.PaymentsClient) {
      paymentsClientRef.current = null;
      setPaymentsClient(null);
      setFormattedConfig(null);
      // This effect only runs in the browser (React skips effects during SSR),
      // so reaching here means pay.js has not loaded yet. Fail loudly instead of
      // silently rendering an empty button container.
      const sdkNotLoadedError = new Error("Google Pay JS SDK (pay.js) is not loaded. Add " + '<script src="https://pay.google.com/gp/p/js/pay.js"></script> ' + "to your HTML before <GooglePayOneTimePaymentButton> mounts.");
      setError(sdkNotLoadedError);
      proxyCallbacks.onError?.(sdkNotLoadedError);
      return;
    }
    try {
      const paypalSession = sessionRef.current;
      const nextFormattedConfig = paypalSession.formatConfigForPaymentRequest(googlePayConfig);
      const nextPaymentsClient = new window.google.payments.api.PaymentsClient({
        environment,
        paymentDataCallbacks: {
          onPaymentAuthorized: async paymentData => {
            try {
              const order = await createOrderRef.current();
              const confirmResult = await paypalSession.confirmOrder({
                orderId: order.orderId,
                paymentMethodData: paymentData.paymentMethodData
              });
              // Handle 3DS (3-D Secure) authentication if required
              // When confirmOrder returns PAYER_ACTION_REQUIRED status, initiate payer action
              if (confirmResult.status === "PAYER_ACTION_REQUIRED") {
                paypalSession.initiatePayerAction();
              }
              await proxyCallbacks.onApprove(confirmResult);
              return {
                transactionState: "SUCCESS"
              };
            } catch (err) {
              const paymentError = toError(err);
              setError(paymentError);
              proxyCallbacks.onError?.(paymentError);
              return {
                transactionState: "ERROR",
                error: {
                  intent: "PAYMENT_AUTHORIZATION",
                  message: paymentError.message,
                  reason: "OTHER_ERROR"
                }
              };
            }
          }
        }
      });
      paymentsClientRef.current = nextPaymentsClient;
      setPaymentsClient(nextPaymentsClient);
      setFormattedConfig(nextFormattedConfig);
    } catch (err) {
      paymentsClientRef.current = null;
      setPaymentsClient(null);
      setFormattedConfig(null);
      const setupError = toError(err);
      setError(setupError);
      proxyCallbacks.onError?.(setupError);
    }
  }, [googlePayConfig, environment, proxyCallbacks, sdkInstance, setError]);
  const createGooglePayButton = useCallback(async options => {
    if (!paymentsClientRef.current || !formattedConfig) {
      return null;
    }
    try {
      const isReadyToPay = await paymentsClientRef.current.isReadyToPay({
        allowedPaymentMethods: formattedConfig.allowedPaymentMethods,
        apiVersion: formattedConfig.apiVersion,
        apiVersionMinor: formattedConfig.apiVersionMinor
      });
      if (!isReadyToPay.result) {
        return null;
      }
      return paymentsClientRef.current.createButton(options);
    } catch (err) {
      const setupError = toError(err);
      setError(setupError);
      proxyCallbacks.onError?.(setupError);
      return null;
    }
  }, [formattedConfig, proxyCallbacks, setError]);
  const handleClick = useCallback(async () => {
    if (!isMountedRef.current) {
      return;
    }
    // Clear any error from a previous attempt so the user can retry
    setError(null);
    if (!sessionRef.current) {
      setError(new Error("Google Pay session not available"));
      return;
    }
    if (!paymentsClientRef.current || !formattedConfig) {
      setError(new Error("Google Pay client is not available"));
      return;
    }
    try {
      const paymentDataRequest = {
        apiVersion: formattedConfig.apiVersion,
        apiVersionMinor: formattedConfig.apiVersionMinor,
        allowedPaymentMethods: formattedConfig.allowedPaymentMethods,
        merchantInfo: formattedConfig.merchantInfo,
        transactionInfo,
        callbackIntents: ["PAYMENT_AUTHORIZATION"]
      };
      await paymentsClientRef.current.loadPaymentData(paymentDataRequest);
    } catch (err) {
      if (err?.statusCode === "CANCELED") {
        proxyCallbacks.onCancel?.();
        return;
      }
      // Authorization errors are already reported in onPaymentAuthorized.
      // Other rejections (e.g. DEVELOPER_ERROR) are configuration issues
      // that surface during development, not runtime payment failures.
    }
  }, [isMountedRef, transactionInfo, formattedConfig, proxyCallbacks, setError]);
  return {
    error,
    isPending,
    paymentsClient,
    formattedConfig,
    createGooglePayButton,
    handleClick,
    handleCancel,
    handleDestroy
  };
}

/**
 * `GooglePayOneTimePaymentButton` renders a native Google Pay button and manages
 * the full Google Pay payment flow via the PayPal SDK.
 *
 * Unlike PayPal/Venmo buttons (which use PayPal web components), this component
 * mounts the native Google Pay button created by `google.payments.api.PaymentsClient.createButton()`.
 *
 * @example
 * ```tsx
 * <GooglePayOneTimePaymentButton
 *   googlePayConfig={googlePayConfig}
 *   transactionInfo={{
 *     countryCode: "US",
 *     currencyCode: "USD",
 *     totalPriceStatus: "FINAL",
 *     totalPrice: "100.00",
 *   }}
 *   createOrder={async () => {
 *     const res = await fetch("/api/orders", { method: "POST" });
 *     const data = await res.json();
 *     return { orderId: data.id };
 *   }}
 *   onApprove={(data) => console.log("Approved:", data)}
 *   onError={(err) => console.error(err)}
 *   buttonColor="black"
 *   buttonType="pay"
 * />
 * ```
 */
const GooglePayOneTimePaymentButton = ({
  disabled = false,
  buttonType = "pay",
  buttonColor = "default",
  buttonSizeMode = "fill",
  buttonLocale,
  ...hookProps
}) => {
  const {
    isPending,
    handleClick,
    handleDestroy,
    createGooglePayButton
  } = useGooglePayOneTimePaymentSession(hookProps);
  const {
    isHydrated
  } = usePayPal();
  const containerRef = useRef(null);
  const buttonMountedRef = useRef(false);
  const handleClickRef = useRef(handleClick);
  handleClickRef.current = handleClick;
  const isDisabled = disabled || isPending;
  // Create and mount the Google Pay button
  const mountButton = useCallback(() => {
    const container = containerRef.current;
    if (!container || buttonMountedRef.current) {
      return;
    }
    const mountIfReady = async () => {
      const button = await createGooglePayButton({
        onClick: () => {
          // handleClick already normalizes callback errors into hook state + onError
          handleClickRef.current();
        },
        buttonType,
        buttonColor,
        buttonSizeMode,
        ...(buttonLocale && {
          buttonLocale
        })
      });
      if (!button) {
        return;
      }
      // Clear any previous content and mount the button
      container.replaceChildren(button);
      buttonMountedRef.current = true;
    };
    void mountIfReady();
  }, [createGooglePayButton, buttonType, buttonColor, buttonSizeMode, buttonLocale]);
  // Mount the button when hydrated and not pending
  useEffect(() => {
    if (isHydrated && !isPending) {
      // Reset mounted flag when button options change so we remount
      buttonMountedRef.current = false;
      mountButton();
    }
  }, [isHydrated, isPending, mountButton]);
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      handleDestroy();
    };
  }, [handleDestroy]);
  if (!isHydrated) {
    return React.createElement("div", null);
  }
  return React.createElement("div", {
    ref: containerRef,
    "aria-disabled": isDisabled || undefined,
    style: isDisabled ? {
      pointerEvents: "none",
      opacity: "0.5"
    } : undefined
  });
};

/**
 * Returns {@link CardFieldsStatusState} provided by a parent {@link PayPalCardFieldsProvider}
 *
 * @returns {CardFieldsStatusState}
 */
function usePayPalCardFields() {
  const context = useContext(CardFieldsStatusContext);
  if (context === null) {
    throw new Error("usePayPalCardFields must be used within a PayPalCardFieldsProvider");
  }
  return context;
}
/**
 * Returns {@link CardFieldsSessionState} provided by a parent {@link PayPalCardFieldsProvider}
 *
 * @returns {CardFieldsSessionState}
 */
function usePayPalCardFieldsSession() {
  const context = useContext(CardFieldsSessionContext);
  if (context === null) {
    throw new Error("usePayPalCardFieldsSession must be used within a PayPalCardFieldsProvider");
  }
  return context;
}

/**
 * `PayPalCardField` is a component that renders a single card field (number, expiry, or cvv) using the PayPal Card Fields SDK. It must be used within a {@link PayPalCardFieldsProvider} component.
 *
 * @example
 * // Basic usage creating a number field
 * <PayPalCardField
 *   type="number"
 *   placeholder="Enter a number"
 *   containerStyles={{ height: "3rem", marginBottom: "1rem" }}
 * />
 *
 */
const PayPalCardField = ({
  containerStyles,
  containerClassName,
  ...options
}) => {
  const {
    cardFieldsSession,
    setError
  } = usePayPalCardFieldsSession();
  const cardFieldContainerRef = useRef(null);
  const optionsRef = useRef(options);
  useEffect(() => {
    if (!cardFieldsSession) {
      return;
    }
    let cardField;
    optionsRef.current = options;
    try {
      cardField = cardFieldsSession.createCardFieldsComponent(optionsRef.current);
      cardFieldContainerRef.current?.appendChild(cardField);
    } catch (error) {
      setError(toError(error));
    }
    return () => {
      cardField?.remove();
      cardField?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardFieldsSession]);
  return React.createElement("div", {
    style: containerStyles,
    className: containerClassName,
    ref: cardFieldContainerRef
  });
};

/**
 * `PayPalCardNumberField` is a component that renders a card number field using the PayPal Card Fields SDK. It must be used within a {@link PayPalCardFieldsProvider} component.
 *
 * @example
 * // Basic usage creating a number field
 * <PayPalCardNumberField
 *   placeholder="Enter a card number"
 *   containerStyles={{ height: "3rem", marginBottom: "1rem" }}
 * />
 */
const PayPalCardNumberField = ({
  containerStyles,
  containerClassName,
  placeholder,
  label,
  style,
  ariaDescription,
  ariaLabel,
  ariaInvalidErrorMessage
}) => {
  return React.createElement(PayPalCardField, {
    type: "number",
    containerStyles: containerStyles,
    containerClassName: containerClassName,
    placeholder: placeholder,
    label: label,
    style: style,
    ariaDescription: ariaDescription,
    ariaLabel: ariaLabel,
    ariaInvalidErrorMessage: ariaInvalidErrorMessage
  });
};

/**
 * `PayPalCardExpiryField` is a component that renders an expiry field using the PayPal Card Fields SDK. It must be used within a {@link PayPalCardFieldsProvider} component.
 *
 * @example
 * // Basic usage creating an expiry field
 * <PayPalCardExpiryField
 *   placeholder="Enter an expiry date"
 *   containerStyles={{ height: "3rem", marginBottom: "1rem" }}
 * />
 */
const PayPalCardExpiryField = ({
  containerStyles,
  containerClassName,
  placeholder,
  label,
  style,
  ariaDescription,
  ariaLabel,
  ariaInvalidErrorMessage
}) => {
  return React.createElement(PayPalCardField, {
    type: "expiry",
    containerStyles: containerStyles,
    containerClassName: containerClassName,
    placeholder: placeholder,
    label: label,
    style: style,
    ariaDescription: ariaDescription,
    ariaLabel: ariaLabel,
    ariaInvalidErrorMessage: ariaInvalidErrorMessage
  });
};

/**
 * `PayPalCardCvvField` is a component that renders a CVV field using the PayPal Card Fields SDK. It must be used within a {@link PayPalCardFieldsProvider} component.
 *
 * @example
 * // Basic usage creating a CVV field
 * <PayPalCardCvvField
 *   placeholder="Enter CVV"
 *   containerStyles={{ height: "3rem", marginBottom: "1rem" }}
 * />
 */
const PayPalCardCvvField = ({
  containerStyles,
  containerClassName,
  placeholder,
  label,
  style,
  ariaDescription,
  ariaLabel,
  ariaInvalidErrorMessage
}) => {
  return React.createElement(PayPalCardField, {
    type: "cvv",
    containerStyles: containerStyles,
    containerClassName: containerClassName,
    placeholder: placeholder,
    label: label,
    style: style,
    ariaDescription: ariaDescription,
    ariaLabel: ariaLabel,
    ariaInvalidErrorMessage: ariaInvalidErrorMessage
  });
};

/**
 * Internal hook for dispatching Braintree PayPal state updates.
 *
 * @remarks
 * This is an INTERNAL API and should not be used directly by external consumers.
 * Only use this in internal hooks that need to update the Braintree PayPal
 * context state.
 *
 * @internal
 *
 * @returns Dispatch function for Braintree PayPal actions
 */
function useBraintreePayPalDispatch() {
  const dispatch = useContext(BraintreeDispatchContext);
  if (dispatch === null) {
    throw new Error("useBraintreePayPalDispatch must be used within a BraintreePayPalProvider");
  }
  return dispatch;
}

/**
 * Hook for fetching Braintree PayPal eligibility for given checkout options.
 *
 * Calls {@link https://braintree.github.io/braintree-web/current/PayPalCheckoutV6.html#findEligibleMethods | BraintreePayPalCheckoutInstance.findEligibleMethods}
 * on the shared instance from {@link useBraintreePayPal} and stores the result
 * in the `BraintreePayPalProvider` context. The fetch is deduplicated by
 * `(instance, options)` so that mounting this hook in multiple components, or
 * re-mounting it with the same options, will reuse the cached result instead
 * of firing a new request. The hook re-fetches when the options change.
 *
 * `isLoading` is true while the provider's checkout instance is initializing
 * OR while eligibility is being fetched OR while the cached eligibility was
 * fetched with different options than the ones currently requested. It is
 * forced false whenever an error (fetch- or provider-level) is present.
 *
 * @example
 * function Checkout() {
 *   const { eligiblePaymentMethods, isLoading, error } = useBraintreeEligibleMethods({
 *     amount: "10.00",
 *     currency: "USD",
 *     countryCode: "US",
 *     paymentFlow: "ONE_TIME_PAYMENT",
 *   });
 *
 *   if (isLoading) return <Spinner />;
 *   if (error) return <ErrorMessage error={error} />;
 *
 *   return (
 *     <>
 *       {eligiblePaymentMethods?.paypal && <BraintreePayPalOneTimePaymentButton ... />}
 *       {eligiblePaymentMethods?.paylater && <PayPalPayLaterButton ... />}
 *     </>
 *   );
 * }
 */
function useBraintreeEligibleMethods(options) {
  const {
    braintreePayPalCheckoutInstance,
    eligiblePaymentMethods,
    eligiblePaymentMethodsPayload,
    loadingStatus,
    error: contextError
  } = useBraintreePayPal();
  const dispatch = useBraintreePayPalDispatch();
  const isMountedRef = useIsMountedRef();
  const [error, setError] = useError();
  const [isFetching, setIsFetching] = useState(false);
  // Refs let the effect see the latest context-cached eligibility without
  // adding it to the dep array (which would re-run the effect every time
  // *we* dispatch SET_ELIGIBILITY and re-trigger the fetch).
  const eligiblePaymentMethodsRef = useRef(eligiblePaymentMethods);
  const eligiblePaymentMethodsPayloadRef = useRef(eligiblePaymentMethodsPayload);
  eligiblePaymentMethodsRef.current = eligiblePaymentMethods;
  eligiblePaymentMethodsPayloadRef.current = eligiblePaymentMethodsPayload;
  // Memoize the whole options object so every field the caller passes is
  // forwarded to findEligibleMethods. Don't destructure-and-rebuild a fixed
  // set of keys here — that would silently drop any field later added to
  // BraintreeFindEligibleMethodsOptions.
  const memoizedOptions = useDeepCompareMemoize(options);
  // Track what we've fetched (instance + payload combo) to prevent duplicate fetches
  const lastFetchRef = useRef(null);
  // Prevents auto-retrying the exact (instance, payload) call that just failed.
  // Keyed on payload too so that changing options on the same failed instance
  // is still allowed to retry — a failed request shouldn't pin the hook in an
  // error state forever when the consumer corrects the input.
  const failedFetchRef = useRef(null);
  useEffect(() => {
    if (failedFetchRef.current?.instance !== braintreePayPalCheckoutInstance) {
      failedFetchRef.current = null;
    }
    if (!braintreePayPalCheckoutInstance) {
      return;
    }
    if (failedFetchRef.current?.instance === braintreePayPalCheckoutInstance && failedFetchRef.current?.payload === memoizedOptions) {
      return;
    }
    const hasFetchedThisConfig = lastFetchRef.current?.instance === braintreePayPalCheckoutInstance && lastFetchRef.current?.payload === memoizedOptions;
    if (hasFetchedThisConfig) {
      return;
    }
    // Another hook instance (or earlier mount) may have already populated
    // eligibility on context with a deep-equal payload. If so, claim it as
    // ours and skip the network call. Use deepEqual instead of === because
    // separate hook mounts will memoize different references for the same
    // option values.
    if (eligiblePaymentMethodsRef.current && lastFetchRef.current === null && deepEqual(eligiblePaymentMethodsPayloadRef.current, memoizedOptions)) {
      lastFetchRef.current = {
        instance: braintreePayPalCheckoutInstance,
        payload: memoizedOptions
      };
      return;
    }
    lastFetchRef.current = {
      instance: braintreePayPalCheckoutInstance,
      payload: memoizedOptions
    };
    let isSubscribed = true;
    let didSettle = false;
    setIsFetching(true);
    setError(null);
    braintreePayPalCheckoutInstance.findEligibleMethods(memoizedOptions).then(result => {
      if (!isSubscribed || !isMountedRef.current) {
        return;
      }
      dispatch({
        type: BRAINTREE_DISPATCH_ACTION.SET_ELIGIBILITY,
        value: {
          eligiblePaymentMethods: result,
          payload: memoizedOptions
        }
      });
    }).catch(err => {
      if (!isSubscribed || !isMountedRef.current) {
        return;
      }
      failedFetchRef.current = {
        instance: braintreePayPalCheckoutInstance,
        payload: memoizedOptions
      };
      setError(err);
    }).finally(() => {
      // Mark the request as settled regardless of subscription so the
      // cleanup below knows it completed and should not roll back the dedup
      // marker.
      didSettle = true;
      if (!isSubscribed || !isMountedRef.current) {
        return;
      }
      setIsFetching(false);
    });
    return () => {
      isSubscribed = false;
      // If this fetch was torn down before it settled (e.g. a React 18
      // StrictMode mount/cleanup/mount cycle), clear the dedup marker so the
      // remount re-fetches. Without this, the remount sees lastFetchRef already
      // matching (instance, payload) and skips, while the only in-flight fetch
      // was just aborted — leaving the hook stuck with isLoading=true forever.
      if (!didSettle && lastFetchRef.current?.instance === braintreePayPalCheckoutInstance && lastFetchRef.current?.payload === memoizedOptions) {
        lastFetchRef.current = null;
      }
    };
  }, [braintreePayPalCheckoutInstance, memoizedOptions, dispatch, setError, isMountedRef]);
  // Cached eligibility is stale if it was fetched with a different payload than
  // the one currently requested. Normalize null/undefined so the deepEqual
  // doesn't treat "no stored payload" as different from "no provided payload".
  const isStaleData = !!eligiblePaymentMethods && !deepEqual(eligiblePaymentMethodsPayload ?? undefined, memoizedOptions ?? undefined);
  const isLoading = !error && (loadingStatus === INSTANCE_LOADING_STATE.PENDING || isFetching || !eligiblePaymentMethods || isStaleData);
  // Provider-level failures (e.g. the checkout instance failed to initialize)
  // are surfaced in their own return and labeled, distinct from fetch-level
  // errors, so the developer can tell which layer failed — rather than merging
  // both into a single error.
  if (contextError) {
    return {
      eligiblePaymentMethods,
      isLoading: false,
      error: new Error(`Braintree PayPal context error: ${contextError}`)
    };
  }
  return {
    eligiblePaymentMethods,
    isLoading,
    error
  };
}

/**
 * Hook for creating a Braintree PayPal Messages instance to fetch promotional /
 * BNPL messaging content for `<paypal-message>` elements.
 *
 * Wraps {@link https://braintree.github.io/braintree-web/current/PayPalCheckoutV6.html#createMessages | BraintreePayPalCheckoutInstance.createMessages}
 * on the shared instance from {@link useBraintreePayPal}. Unlike the PayPal SDK's
 * synchronous `createPayPalMessages`, Braintree's `createMessages` is asynchronous,
 * so the instance is created in an effect that awaits the Promise and guards against
 * unmount / instance change before storing it.
 *
 * Use `handleFetchContent` to fetch content for a `<paypal-message>` element. It
 * resolves to the content object, which exposes `update({ amount })` so you can
 * change the displayed amount later without re-fetching.
 *
 * @returns Object with: `error` (any instance/fetch error), `isReady` (messages
 * instance created), `isLoading` (instance initializing or being created),
 * `handleFetchContent` (fetches message content)
 *
 * @example
 * function PayPalMessaging({ amount }: { amount: string }) {
 *   const messageRef = useRef<PayPalMessagesElement | null>(null);
 *   const { handleFetchContent, isReady } = useBraintreePayPalMessages({
 *     buyerCountry: "US",
 *     currencyCode: "USD",
 *   });
 *
 *   useEffect(() => {
 *     if (!isReady) return;
 *
 *     handleFetchContent({
 *       amount,
 *       onReady: (content) => {
 *         messageRef.current?.setContent(content);
 *       },
 *     });
 *   }, [amount, isReady, handleFetchContent]);
 *
 *   return <paypal-message ref={messageRef} />;
 * }
 */
function useBraintreePayPalMessages({
  buyerCountry,
  currencyCode
}) {
  const {
    braintreePayPalCheckoutInstance,
    loadingStatus,
    error: contextError
  } = useBraintreePayPal();
  const isMountedRef = useIsMountedRef();
  const [messages, setMessages] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useError();
  // Prevents auto-retrying the exact (instance, buyerCountry, currencyCode) call
  // that just failed. Keyed on the options too so that changing them on the same
  // failed instance is still allowed to retry.
  const failedInstanceRef = useRef(null);
  // Surface instance availability as an error, mirroring the other Braintree hooks.
  useEffect(() => {
    if (braintreePayPalCheckoutInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("Braintree PayPal Messages instance not available"));
    }
  }, [braintreePayPalCheckoutInstance, setError, loadingStatus]);
  // Create the messages instance. createMessages is async, so await the Promise
  // and guard against unmount / instance change before committing state.
  useEffect(() => {
    if (failedInstanceRef.current?.instance !== braintreePayPalCheckoutInstance) {
      failedInstanceRef.current = null;
    }
    if (!braintreePayPalCheckoutInstance) {
      return;
    }
    if (failedInstanceRef.current?.instance === braintreePayPalCheckoutInstance && failedInstanceRef.current?.buyerCountry === buyerCountry && failedInstanceRef.current?.currencyCode === currencyCode) {
      return;
    }
    let isSubscribed = true;
    setIsCreating(true);
    setError(null);
    braintreePayPalCheckoutInstance.createMessages({
      buyerCountry,
      currencyCode
    }).then(messagesInstance => {
      if (!isSubscribed || !isMountedRef.current) {
        return;
      }
      setMessages(messagesInstance);
    }).catch(err => {
      if (!isSubscribed || !isMountedRef.current) {
        return;
      }
      failedInstanceRef.current = {
        instance: braintreePayPalCheckoutInstance,
        buyerCountry,
        currencyCode
      };
      setError(err);
    }).finally(() => {
      if (!isSubscribed || !isMountedRef.current) {
        return;
      }
      setIsCreating(false);
    });
    return () => {
      isSubscribed = false;
      setMessages(null);
    };
  }, [braintreePayPalCheckoutInstance, buyerCountry, currencyCode, isMountedRef, setError]);
  const handleFetchContent = useCallback(async options => {
    if (!isMountedRef.current) {
      return;
    }
    if (!messages) {
      setError(new Error("Braintree PayPal Messages instance not available"));
      return;
    }
    setError(null);
    const result = await messages.fetchContent(options);
    // On an API error, fetchContent resolves to an empty sentinel MessageContent
    // (empty messageItems) instead of throwing, so the <paypal-message> element
    // recognizes the error state and collapses. Surface the error, but still
    // return the content so setContent() performs that collapse.
    if (isEmptyMessageContent(result)) {
      setError(new Error("Failed to fetch Braintree PayPal Messages content"));
    }
    return result;
  }, [isMountedRef, messages, setError]);
  // Provider-level failures (e.g. the checkout instance failed to initialize)
  // are surfaced in their own return and labeled, distinct from instance/fetch
  // errors, so the developer can tell which layer failed — rather than merging
  // both into a single error.
  if (contextError) {
    return {
      error: new Error(`Braintree PayPal context error: ${contextError}`),
      isReady: false,
      isLoading: false,
      handleFetchContent
    };
  }
  const isReady = Boolean(messages);
  const isLoading = !error && (loadingStatus === INSTANCE_LOADING_STATE.PENDING || isCreating || !messages);
  return {
    error,
    isReady,
    isLoading,
    handleFetchContent
  };
}

/**
 * Internal hook for dispatching PayPal state updates.
 *
 * @remarks
 * This is an INTERNAL API and should not be used directly by external consumers.
 * Only use this in internal hooks that need to update the PayPal context state.
 *
 * @internal
 *
 * @returns Dispatch function for PayPal instance actions
 */
function usePayPalDispatch() {
  const dispatch = useContext(PayPalDispatchContext);
  if (dispatch === null) {
    throw new Error("usePayPalDispatch must be used within a PayPalProvider");
  }
  return dispatch;
}

/**
 * Client-side hook to access eligible payment methods from the PayPal context.
 *
 * This hook handles both server-hydrated and client-fetch scenarios:
 * - If eligibility was pre-fetched server-side, returns it immediately
 * - If not present, fetches via the SDK and stores in context
 * - Prevents duplicate API calls across components
 *
 * @param options - Configuration for the eligibility request
 * @param options.payload - Optional request payload with customer/purchase details
 * @returns Object containing eligibility state
 * @returns eligiblePaymentMethods - The eligible payment methods
 * @returns isLoading - True while fetching eligibility
 * @returns error - Any error that occurred during the fetch
 *
 * @example
 * function Checkout({props}) {
 *     const { handleClick } = usePayLaterOneTimePaymentSession(props);
 *     const { eligiblePaymentMethods, isLoading, error } = useEligibleMethods({
 *         payload: { purchase_units: [{ amount: { currency_code: "USD" } }] }
 *     });
 *
 *     const payLaterDetails = eligiblePaymentMethods?.getDetails?.("paylater");
 *     const countryCode = payLaterDetails?.countryCode;
 *     const productCode = payLaterDetails?.productCode;
 *
 *     if (isLoading) return <Spinner />;
 *     if (error) return <Error message={error.message} />;
 *     return (
 *       <paypal-pay-later-button
 *          onClick={handleClick}
 *          countryCode={countryCode}
 *          productCode={productCode}
 *       />
 *      );
 * }
 */
function useEligibleMethods(options = {}) {
  const {
    payload
  } = options;
  const {
    sdkInstance,
    eligiblePaymentMethods,
    eligiblePaymentMethodsPayload,
    error: contextError,
    eligibilityHydrationStatus
  } = usePayPal();
  const dispatch = usePayPalDispatch();
  const [eligibilityError, setError] = useError();
  const [isFetching, setIsFetching] = useState(false);
  // Use ref to access eligiblePaymentMethods in effect without adding to deps
  const eligiblePaymentMethodsRef = useRef(eligiblePaymentMethods);
  const eligiblePaymentMethodsPayloadRef = useRef(eligiblePaymentMethodsPayload);
  eligiblePaymentMethodsRef.current = eligiblePaymentMethods;
  eligiblePaymentMethodsPayloadRef.current = eligiblePaymentMethodsPayload;
  // Memoize payload to avoid unnecessary re-fetches when object reference changes
  const memoizedPayload = useDeepCompareMemoize(payload);
  // Track what we've fetched (instance + payload combo) to prevent duplicate fetches
  const lastFetchRef = useRef(null);
  useEffect(() => {
    // Only fetch if:
    // 1. sdkInstance is available
    // 2. Haven't already fetched for THIS sdkInstance with THIS payload
    // 3. Eligibility not already in context (from server hydration or another fetch)
    //    UNLESS the payload has changed from what was used to fetch it
    if (!sdkInstance) {
      return;
    }
    // Hydrated data always has payload null, so it can only ever satisfy a
    // no-payload call. Only block those on hydration; let payload-specific
    // calls fetch immediately since hydration will never answer them.
    if (eligibilityHydrationStatus === INSTANCE_LOADING_STATE.PENDING && memoizedPayload === undefined) {
      return;
    }
    const hasFetchedThisConfig = lastFetchRef.current?.instance === sdkInstance && lastFetchRef.current?.payload === memoizedPayload;
    // Skip if we already fetched with this exact config
    if (hasFetchedThisConfig) {
      return;
    }
    // If eligibility exists and we haven't fetched anything yet (e.g., server hydration),
    // mark as fetched to avoid unnecessary re-fetch with same payload.
    // Use deepEqual instead of === because different component instances will have
    // different memoizedPayload references even if the values are the same.
    if (eligiblePaymentMethodsRef.current && lastFetchRef.current === null &&
    // Normalize null to undefined so a server-hydrated payload (stored as
    // null by PayPalProvider) matches a consumer that passes no payload
    // (undefined). Mirrors the isStaleData normalization below.
    deepEqual(eligiblePaymentMethodsPayloadRef.current ?? undefined, memoizedPayload ?? undefined)) {
      lastFetchRef.current = {
        instance: sdkInstance,
        payload: memoizedPayload
      };
      return;
    }
    // Mark as fetched before starting
    lastFetchRef.current = {
      instance: sdkInstance,
      payload: memoizedPayload
    };
    let isSubscribed = true;
    setIsFetching(true);
    // Clear any prior error when a new fetch begins so a successful refetch
    // (e.g. after the consumer changes the payload) doesn't return fresh data
    // alongside a stale error from the previous attempt.
    setError(null);
    sdkInstance.findEligibleMethods(memoizedPayload).then(result => {
      if (isSubscribed) {
        dispatch({
          type: INSTANCE_DISPATCH_ACTION.SET_ELIGIBILITY,
          value: {
            eligiblePaymentMethods: result,
            payload: memoizedPayload
          }
        });
      }
    }).catch(err => {
      if (isSubscribed) {
        setError(err);
      }
    }).finally(() => {
      if (isSubscribed) {
        setIsFetching(false);
      }
    });
    return () => {
      isSubscribed = false;
      lastFetchRef.current = null; // Reset fetch tracking on unmount or dependency change
    };
  }, [sdkInstance, memoizedPayload, dispatch, setError, eligibilityHydrationStatus]);
  // isLoading should be true (unless an error is present) if:
  // 1. We're actively fetching, OR
  // 2. We don't have eligibility data yet, OR
  // 3. Eligibility data exists but was fetched with a different payload
  //    (e.g., navigating from VAULT_WITHOUT_PAYMENT to ONE_TIME_PAYMENT)
  // This prevents a flash of stale buttons before the new fetch completes
  const isStaleData = !!eligiblePaymentMethods &&
  // Normalize null to undefined so deepEqual doesn't treat
  // null (no stored payload) as different from undefined (no provided payload)
  !deepEqual(eligiblePaymentMethodsPayload ?? undefined, memoizedPayload ?? undefined);
  // Forced false whenever an error is present so a consumer that checks
  // isLoading before error never shows a perpetual spinner over a failure.
  const isLoading = !eligibilityError && (isFetching || !eligiblePaymentMethods || isStaleData);
  if (contextError) {
    return {
      eligiblePaymentMethods,
      isLoading: false,
      error: new Error(`PayPal context error: ${contextError}`)
    };
  }
  return {
    eligiblePaymentMethods,
    isLoading,
    error: eligibilityError
  };
}

/**
 * Hook for creating a PayPal Messages session to fetch messaging content and create learn more modals.
 *
 * This hook manages the lifecycle of a PayPal Messages session. It supports two integration modes:
 *
 * - **Auto-bootstrap**: Pass an empty options object and let `<paypal-message auto-bootstrap>` handle
 *   content fetching automatically. This is the simplest integration path.
 * - **Manual fetch**: Use `handleFetchContent` with an `onReady` callback to programmatically fetch
 *   and apply content via `setContent()`. Use this when you need control over when content is fetched
 *   or want to customize fetch options per render.
 *
 * Use `handleCreateLearnMore` to create a learn more modal that can be opened programmatically.
 *
 * @returns Object with: `error` (any session error), `isReady` (session created), `handleFetchContent` (fetches message content), `handleCreateLearnMore` (creates learn more modal)
 *
 * @example
 * // Auto-bootstrap mode (recommended for basic usage)
 * function PayPalMessaging({ amount }: { amount: string }) {
 *   const { error } = usePayPalMessages({});
 *
 *   if (error) return null;
 *
 *   return (
 *     <paypal-message
 *       auto-bootstrap={true}
 *       amount={amount}
 *       currency-code="USD"
 *       buyer-country="US"
 *     />
 *   );
 * }
 *
 * @example
 * // Manual fetch mode (for advanced control)
 * function ManualMessaging({ amount }: { amount: string }) {
 *   const containerRef = useRef<PayPalMessagesElement | null>(null);
 *   const { handleFetchContent, isReady } = usePayPalMessages({
 *     buyerCountry: 'US',
 *     currencyCode: 'USD',
 *   });
 *
 *   useEffect(() => {
 *     if (!isReady) return;
 *
 *     handleFetchContent({
 *       amount,
 *       logoPosition: 'INLINE',
 *       logoType: 'WORDMARK',
 *       onReady: (content) => {
 *         containerRef.current?.setContent(content);
 *       },
 *     });
 *   }, [amount, isReady, handleFetchContent]);
 *
 *   return <paypal-message ref={containerRef} />;
 * }
 */
function usePayPalMessages({
  buyerCountry,
  currencyCode,
  shopperSessionId
}) {
  const {
    sdkInstance,
    loadingStatus
  } = usePayPal();
  const isMountedRef = useIsMountedRef();
  const [session, setSession] = useState(null);
  const [error, setError] = useError();
  useEffect(() => {
    if (sdkInstance) {
      setError(null);
    } else if (loadingStatus !== INSTANCE_LOADING_STATE.PENDING) {
      setError(new Error("no sdk instance available"));
    }
  }, [sdkInstance, setError, loadingStatus]);
  useEffect(() => {
    if (!sdkInstance) {
      return;
    }
    const newSession = sdkInstance.createPayPalMessages({
      buyerCountry,
      currencyCode,
      shopperSessionId
    });
    setSession(newSession);
    return () => {
      setSession(null);
    };
  }, [buyerCountry, currencyCode, sdkInstance, shopperSessionId]);
  const handleFetchContent = useCallback(async options => {
    if (!isMountedRef.current) {
      return;
    }
    if (!session) {
      setError(new Error("PayPal Messages session not available"));
      return;
    }
    const result = await session.fetchContent(options);
    // On an API error, fetchContent resolves to an empty sentinel MessageContent
    // (empty messageItems) instead of throwing, so the <paypal-message> element
    // recognizes the error state and collapses. Surface the error, but still
    // return the content so setContent() performs that collapse.
    if (isEmptyMessageContent(result)) {
      setError(new Error("Failed to fetch PayPal Messages content"));
    }
    return result;
  }, [isMountedRef, session, setError]);
  const handleCreateLearnMore = useCallback(options => {
    if (!isMountedRef.current) {
      return;
    }
    if (!session) {
      setError(new Error("PayPal Messages session not available"));
      return;
    }
    return session.createLearnMore(options);
  }, [isMountedRef, session, setError]);
  return {
    error,
    isReady: Boolean(session),
    handleCreateLearnMore,
    handleFetchContent
  };
}

/**
 * Hook for managing one-time payment Card Fields sessions.
 *
 * This hook must be used within a {@link PayPalCardFieldsProvider} to initialize
 * a one-time payment session.
 *
 * @returns {UsePayPalCardFieldsOneTimePaymentSessionResult}
 */
function usePayPalCardFieldsOneTimePaymentSession() {
  const {
    cardFieldsSession,
    setCardFieldsSessionType
  } = usePayPalCardFieldsSession();
  const [submitResponse, setSubmitResponse] = useState(null);
  const [error, setError] = useError();
  useEffect(() => {
    setCardFieldsSessionType(CARD_FIELDS_SESSION_TYPES.ONE_TIME_PAYMENT);
  }, [setCardFieldsSessionType]);
  const submit = useCallback(async (orderId, options) => {
    if (!cardFieldsSession) {
      setError(toError("Submit error: CardFields session not available"));
      setSubmitResponse(null);
      return;
    }
    try {
      const id = await orderId;
      const submitResult = await cardFieldsSession.submit(id, options);
      setSubmitResponse(submitResult);
      setError(null);
    } catch (error) {
      setError(toError(error));
      setSubmitResponse(null);
    }
  }, [cardFieldsSession, setError]);
  return {
    submit,
    submitResponse,
    error
  };
}

/**
 * Hook for managing save payment Card Fields sessions.
 *
 * This hook must be used within a {@link PayPalCardFieldsProvider} to initialize
 * a save payment session.
 *
 * @returns {UsePayPalCardFieldsSavePaymentSessionResult}
 */
function usePayPalCardFieldsSavePaymentSession() {
  const {
    cardFieldsSession,
    setCardFieldsSessionType
  } = usePayPalCardFieldsSession();
  const [submitResponse, setSubmitResponse] = useState(null);
  const [error, setError] = useError();
  useEffect(() => {
    setCardFieldsSessionType(CARD_FIELDS_SESSION_TYPES.SAVE_PAYMENT);
  }, [setCardFieldsSessionType]);
  const submit = useCallback(async (vaultSetupToken, options) => {
    if (!cardFieldsSession) {
      setError(toError("Submit error: CardFields session not available"));
      setSubmitResponse(null);
      return;
    }
    try {
      const token = await vaultSetupToken;
      const submitResult = await cardFieldsSession.submit(token, options);
      setSubmitResponse(submitResult);
      setError(null);
    } catch (error) {
      setError(toError(error));
      setSubmitResponse(null);
    }
  }, [cardFieldsSession, setError]);
  return {
    submit,
    submitResponse,
    error
  };
}
export { ApplePayOneTimePaymentButton, BRAINTREE_DISPATCH_ACTION, BraintreePayPalBillingAgreementButton, BraintreePayPalCheckoutWithVaultButton, BraintreePayPalOneTimePaymentButton, BraintreePayPalPayLaterButton, BraintreePayPalProvider, GooglePayOneTimePaymentButton, INSTANCE_DISPATCH_ACTION, INSTANCE_LOADING_STATE, PayLaterOneTimePaymentButton, PayPalCardCvvField, PayPalCardExpiryField, PayPalCardFieldsProvider, PayPalCardNumberField, PayPalCreditOneTimePaymentButton, PayPalCreditSavePaymentButton, PayPalGuestPaymentButton, PayPalOneTimePaymentButton, PayPalProvider, PayPalSavePaymentButton, PayPalSubscriptionButton, VenmoOneTimePaymentButton, useApplePayOneTimePaymentSession, useBraintreeEligibleMethods, useBraintreePayPal, useBraintreePayPalBillingAgreementSession, useBraintreePayPalCheckoutWithVaultSession, useBraintreePayPalMessages, useBraintreePayPalOneTimePaymentSession, useBraintreePayPalPayLaterSession, useEligibleMethods, useGooglePayOneTimePaymentSession, usePayLaterOneTimePaymentSession, usePayPal, usePayPalCardFields, usePayPalCardFieldsOneTimePaymentSession, usePayPalCardFieldsSavePaymentSession, usePayPalCreditOneTimePaymentSession, usePayPalCreditSavePaymentSession, usePayPalGuestPaymentSession, usePayPalMessages, usePayPalOneTimePaymentSession, usePayPalSavePaymentSession, usePayPalSubscriptionPaymentSession, useVenmoOneTimePaymentSession, validateBraintreeNamespace };
