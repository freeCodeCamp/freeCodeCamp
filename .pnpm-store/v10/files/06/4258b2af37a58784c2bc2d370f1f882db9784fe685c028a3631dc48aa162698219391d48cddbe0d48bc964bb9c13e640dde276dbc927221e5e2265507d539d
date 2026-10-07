import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["reactReduxForwardedRef"];

/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */
import hoistStatics from 'hoist-non-react-statics';
import * as React from 'react';
import { isValidElementType, isContextConsumer } from 'react-is';
import defaultSelectorFactory from '../connect/selectorFactory';
import { mapDispatchToPropsFactory } from '../connect/mapDispatchToProps';
import { mapStateToPropsFactory } from '../connect/mapStateToProps';
import { mergePropsFactory } from '../connect/mergeProps';
import { createSubscription } from '../utils/Subscription';
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect';
import shallowEqual from '../utils/shallowEqual';
import warning from '../utils/warning';
import { ReactReduxContext } from './Context';
import { notInitialized } from '../utils/useSyncExternalStore';
let useSyncExternalStore = notInitialized;
export const initializeConnect = fn => {
  useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these

const EMPTY_ARRAY = [null, 0];
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


const initStateUpdates = () => EMPTY_ARRAY;

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
  if (process.env.NODE_ENV !== 'production') {
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
    if (process.env.NODE_ENV !== 'production' && !isValidElementType(WrappedComponent)) {
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
      const [propsContext, reactReduxForwardedRef, wrapperProps] = React.useMemo(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = _objectWithoutPropertiesLoose(props, _excluded);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = React.useMemo(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        isContextConsumer( /*#__PURE__*/React.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = React.useContext(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (process.env.NODE_ENV !== 'production' && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error(`Could not find "store" in the context of ` + `"${displayName}". Either wrap the root component in a <Provider>, ` + `or pass a custom React context provider to <Provider> and the corresponding ` + `React context consumer to ${displayName} in connect options.`);
      } // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = React.useMemo(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return defaultSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = React.useMemo(() => {
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

      const overriddenContextValue = React.useMemo(() => {
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

      const lastChildProps = React.useRef();
      const lastWrapperProps = React.useRef(wrapperProps);
      const childPropsFromStoreUpdate = React.useRef();
      const renderIsScheduled = React.useRef(false);
      const isProcessingDispatch = React.useRef(false);
      const isMounted = React.useRef(false);
      const latestSubscriptionCallbackError = React.useRef();
      useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = React.useMemo(() => {
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

      const subscribeForReact = React.useMemo(() => {
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
          ;
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

      const renderedWrappedComponent = React.useMemo(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          React.createElement(WrappedComponent, _extends({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = React.useMemo(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/React.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = React.memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = React.forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/React.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistStatics(forwarded, WrappedComponent);
    }

    return hoistStatics(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

export default connect;