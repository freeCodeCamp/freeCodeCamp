/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const RelayFeatureFlags = require('../util/RelayFeatureFlags');

const areEqual = require('areEqual');
const getPendingOperationsForFragment = require('../util/getPendingOperationsForFragment');
const invariant = require('invariant');
const isScalarAndEqual = require('../util/isScalarAndEqual');
const recycleNodesInto = require('../util/recycleNodesInto');
const reportMissingRequiredFields = require('../util/reportMissingRequiredFields');
const warning = require('warning');

const {createRequestDescriptor} = require('./RelayModernOperationDescriptor');
const {
  areEqualSelectors,
  createReaderSelector,
  getSelectorsFromObject,
} = require('./RelayModernSelector');

import type {ConcreteRequest} from '../util/RelayConcreteNode';
import type {Disposable, Variables} from '../util/RelayRuntimeTypes';
import type {
  IEnvironment,
  FragmentMap,
  FragmentSpecResolver,
  FragmentSpecResults,
  MissingRequiredFields,
  PluralReaderSelector,
  RelayContext,
  SelectorData,
  SingularReaderSelector,
  Snapshot,
} from './RelayStoreTypes';

type Props = {[key: string]: mixed, ...};
type Resolvers = {
  [key: string]: ?(SelectorListResolver | SelectorResolver),
  ...,
};

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
class RelayModernFragmentSpecResolver implements FragmentSpecResolver {
  _callback: ?() => void;
  _context: RelayContext;
  _rootIsQueryRenderer: boolean;
  _data: Object;
  _fragments: FragmentMap;
  _props: Props;
  _resolvers: Resolvers;
  _stale: boolean;

  constructor(
    context: RelayContext,
    fragments: FragmentMap,
    props: Props,
    callback?: () => void,
    rootIsQueryRenderer: boolean,
  ) {
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

  dispose(): void {
    for (const key in this._resolvers) {
      if (this._resolvers.hasOwnProperty(key)) {
        disposeCallback(this._resolvers[key]);
      }
    }
  }

  resolve(): FragmentSpecResults {
    if (this._stale) {
      // Avoid mapping the object multiple times, which could occur if data for
      // multiple keys changes in the same event loop.
      const prevData = this._data;
      let nextData;
      for (const key in this._resolvers) {
        if (this._resolvers.hasOwnProperty(key)) {
          const resolver = this._resolvers[key];
          const prevItem = prevData[key];
          if (resolver) {
            const nextItem = resolver.resolve();
            if (nextData || nextItem !== prevItem) {
              nextData = nextData || {...prevData};
              nextData[key] = nextItem;
            }
          } else {
            const prop = this._props[key];
            const nextItem = prop !== undefined ? prop : null;
            if (nextData || !isScalarAndEqual(nextItem, prevItem)) {
              nextData = nextData || {...prevData};
              nextData[key] = nextItem;
            }
          }
        }
      }
      this._data = nextData || prevData;
      this._stale = false;
    }
    return this._data;
  }

  setCallback(props: Props, callback: () => void): void {
    this._callback = callback;
    if (RelayFeatureFlags.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === true) {
      this.setProps(props);
    }
  }

  setProps(props: Props): void {
    this._props = {};
    const ownedSelectors = getSelectorsFromObject(this._fragments, props);

    for (const key in ownedSelectors) {
      if (ownedSelectors.hasOwnProperty(key)) {
        const ownedSelector = ownedSelectors[key];
        let resolver = this._resolvers[key];
        if (ownedSelector == null) {
          if (resolver != null) {
            resolver.dispose();
          }
          resolver = null;
        } else if (ownedSelector.kind === 'PluralReaderSelector') {
          if (resolver == null) {
            resolver = new SelectorListResolver(
              this._context.environment,
              this._rootIsQueryRenderer,
              ownedSelector,
              this._callback != null,
              this._onChange,
            );
          } else {
            invariant(
              resolver instanceof SelectorListResolver,
              'RelayModernFragmentSpecResolver: Expected prop `%s` to always be an array.',
              key,
            );
            resolver.setSelector(ownedSelector);
          }
        } else {
          if (resolver == null) {
            resolver = new SelectorResolver(
              this._context.environment,
              this._rootIsQueryRenderer,
              ownedSelector,
              this._callback != null,
              this._onChange,
            );
          } else {
            invariant(
              resolver instanceof SelectorResolver,
              'RelayModernFragmentSpecResolver: Expected prop `%s` to always be an object.',
              key,
            );
            resolver.setSelector(ownedSelector);
          }
        }
        this._props[key] = props[key];
        this._resolvers[key] = resolver;
      }
    }
    this._stale = true;
  }

  setVariables(variables: Variables, request: ConcreteRequest): void {
    for (const key in this._resolvers) {
      if (this._resolvers.hasOwnProperty(key)) {
        const resolver = this._resolvers[key];
        if (resolver) {
          resolver.setVariables(variables, request);
        }
      }
    }
    this._stale = true;
  }

  _onChange = (): void => {
    this._stale = true;

    if (typeof this._callback === 'function') {
      this._callback();
    }
  };
}

/**
 * A resolver for a single Selector.
 */
class SelectorResolver {
  _callback: () => void;
  _data: ?SelectorData;
  _environment: IEnvironment;
  _isMissingData: boolean;
  _missingRequiredFields: ?MissingRequiredFields;
  _rootIsQueryRenderer: boolean;
  _selector: SingularReaderSelector;
  _subscription: ?Disposable;

  constructor(
    environment: IEnvironment,
    rootIsQueryRenderer: boolean,
    selector: SingularReaderSelector,
    subscribeOnConstruction: boolean,
    callback: () => void,
  ) {
    const snapshot = environment.lookup(selector);
    this._callback = callback;
    this._data = snapshot.data;
    this._isMissingData = snapshot.isMissingData;
    this._missingRequiredFields = snapshot.missingRequiredFields;
    this._environment = environment;
    this._rootIsQueryRenderer = rootIsQueryRenderer;
    this._selector = selector;
    if (RelayFeatureFlags.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === true) {
      if (subscribeOnConstruction) {
        this._subscription = environment.subscribe(snapshot, this._onChange);
      }
    } else {
      this._subscription = environment.subscribe(snapshot, this._onChange);
    }
  }

  dispose(): void {
    if (this._subscription) {
      this._subscription.dispose();
      this._subscription = null;
    }
  }

  resolve(): ?Object {
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
      const pendingOperationsResult = getPendingOperationsForFragment(
        this._environment,
        this._selector.node,
        this._selector.owner,
      );
      const promise: void | Promise<void> = pendingOperationsResult?.promise;
      if (promise != null) {
        if (this._rootIsQueryRenderer) {
          warning(
            false,
            'Relay: Relay Container for fragment `%s` has missing data and ' +
              'would suspend. When using features such as @defer or @module, ' +
              'use `useFragment` instead of a Relay Container.',
            this._selector.node.name,
          );
        } else {
          const pendingOperations =
            pendingOperationsResult?.pendingOperations ?? [];
          warning(
            false,
            'Relay: Relay Container for fragment `%s` suspended. When using ' +
              'features such as @defer or @module, use `useFragment` instead ' +
              'of a Relay Container.',
            this._selector.node.name,
          );
          this._environment.__log({
            name: 'suspense.fragment',
            data: this._data,
            fragment: this._selector.node,
            isRelayHooks: false,
            isMissingData: this._isMissingData,
            isPromiseCached: false,
            pendingOperations,
          });
          throw promise;
        }
      }
    }
    if (this._missingRequiredFields != null) {
      reportMissingRequiredFields(
        this._environment,
        this._missingRequiredFields,
      );
    }
    return this._data;
  }

  setSelector(selector: SingularReaderSelector): void {
    if (
      this._subscription != null &&
      areEqualSelectors(selector, this._selector)
    ) {
      return;
    }
    this.dispose();
    const snapshot = this._environment.lookup(selector);
    this._data = recycleNodesInto(this._data, snapshot.data);
    this._isMissingData = snapshot.isMissingData;
    this._missingRequiredFields = snapshot.missingRequiredFields;
    this._selector = selector;
    this._subscription = this._environment.subscribe(snapshot, this._onChange);
  }

  setVariables(variables: Variables, request: ConcreteRequest): void {
    if (areEqual(variables, this._selector.variables)) {
      // If we're not actually setting new variables, we don't actually want
      // to create a new fragment owner, since areEqualSelectors relies on
      // owner identity.
      // In fact, we don't even need to try to attempt to set a new selector.
      // When fragment ownership is not enabled, setSelector will also bail
      // out since the selector doesn't really change, so we're doing it here
      // earlier.
      return;
    }
    // NOTE: We manually create the request descriptor here instead of
    // calling createOperationDescriptor() because we want to set a
    // descriptor with *unaltered* variables as the fragment owner.
    // This is a hack that allows us to preserve existing (broken)
    // behavior of RelayModern containers while using fragment ownership
    // to propagate variables instead of Context.
    // For more details, see the summary of D13999308
    const requestDescriptor = createRequestDescriptor(request, variables);
    const selector = createReaderSelector(
      this._selector.node,
      this._selector.dataID,
      variables,
      requestDescriptor,
    );
    this.setSelector(selector);
  }

  _onChange = (snapshot: Snapshot): void => {
    this._data = snapshot.data;
    this._isMissingData = snapshot.isMissingData;
    this._missingRequiredFields = snapshot.missingRequiredFields;
    this._callback();
  };
}

/**
 * A resolver for an array of Selectors.
 */
class SelectorListResolver {
  _callback: () => void;
  _data: Array<?SelectorData>;
  _environment: IEnvironment;
  _resolvers: Array<SelectorResolver>;
  _rootIsQueryRenderer: boolean;
  _stale: boolean;
  _subscribeOnConstruction: boolean;

  constructor(
    environment: IEnvironment,
    rootIsQueryRenderer: boolean,
    selector: PluralReaderSelector,
    subscribeOnConstruction: boolean,
    callback: () => void,
  ) {
    this._callback = callback;
    this._data = [];
    this._environment = environment;
    this._resolvers = [];
    this._stale = true;
    this._rootIsQueryRenderer = rootIsQueryRenderer;
    this._subscribeOnConstruction = subscribeOnConstruction;

    this.setSelector(selector);
  }

  dispose(): void {
    this._resolvers.forEach(disposeCallback);
  }

  resolve(): Array<?Object> {
    if (this._stale) {
      // Avoid mapping the array multiple times, which could occur if data for
      // multiple indices changes in the same event loop.
      const prevData = this._data;
      let nextData;
      for (let ii = 0; ii < this._resolvers.length; ii++) {
        const prevItem = prevData[ii];
        const nextItem = this._resolvers[ii].resolve();
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
  }

  setSelector(selector: PluralReaderSelector): void {
    const {selectors} = selector;
    while (this._resolvers.length > selectors.length) {
      const resolver = this._resolvers.pop();
      resolver.dispose();
    }
    for (let ii = 0; ii < selectors.length; ii++) {
      if (ii < this._resolvers.length) {
        this._resolvers[ii].setSelector(selectors[ii]);
      } else {
        this._resolvers[ii] = new SelectorResolver(
          this._environment,
          this._rootIsQueryRenderer,
          selectors[ii],
          this._subscribeOnConstruction,
          this._onChange,
        );
      }
    }
    this._stale = true;
  }

  setVariables(variables: Variables, request: ConcreteRequest): void {
    this._resolvers.forEach(resolver =>
      resolver.setVariables(variables, request),
    );
    this._stale = true;
  }

  _onChange = (data: ?Object): void => {
    this._stale = true;
    this._callback();
  };
}

function disposeCallback(disposable: ?Disposable): void {
  disposable && disposable.dispose();
}

module.exports = RelayModernFragmentSpecResolver;
