/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const RelayFeatureFlags = require('../util/RelayFeatureFlags');
const RelayReader = require('./RelayReader');

const deepFreeze = require('../util/deepFreeze');
const hasOverlappingIDs = require('./hasOverlappingIDs');
const recycleNodesInto = require('../util/recycleNodesInto');

import type {Disposable} from '../util/RelayRuntimeTypes';
import type {
  LogFunction,
  OperationDescriptor,
  DataIDSet,
  RecordSource,
  RequestDescriptor,
  Snapshot,
  StoreSubscriptions,
} from './RelayStoreTypes';
import type {ResolverCache} from './ResolverCache';

type Subscription = {|
  callback: (snapshot: Snapshot) => void,
  snapshot: Snapshot,
  stale: boolean,
  backup: ?Snapshot,
|};

class RelayStoreSubscriptions implements StoreSubscriptions {
  _subscriptions: Set<Subscription>;
  __log: ?LogFunction;
  _resolverCache: ResolverCache;

  constructor(log?: ?LogFunction, resolverCache: ResolverCache) {
    this._subscriptions = new Set();
    this.__log = log;
    this._resolverCache = resolverCache;
  }

  subscribe(
    snapshot: Snapshot,
    callback: (snapshot: Snapshot) => void,
  ): Disposable {
    const subscription = {backup: null, callback, snapshot, stale: false};
    const dispose = () => {
      this._subscriptions.delete(subscription);
    };
    this._subscriptions.add(subscription);
    return {dispose};
  }

  snapshotSubscriptions(source: RecordSource) {
    this._subscriptions.forEach(subscription => {
      // Backup occurs after writing a new "final" payload(s) and before (re)applying
      // optimistic changes. Each subscription's `snapshot` represents what was *last
      // published to the subscriber*, which notably may include previous optimistic
      // updates. Therefore a subscription can be in any of the following states:
      // - stale=true: This subscription was restored to a different value than
      //   `snapshot`. That means this subscription has changes relative to its base,
      //   but its base has changed (we just applied a final payload): recompute
      //   a backup so that we can later restore to the state the subscription
      //   should be in.
      // - stale=false: This subscription was restored to the same value as
      //   `snapshot`. That means this subscription does *not* have changes relative
      //   to its base, so the current `snapshot` is valid to use as a backup.
      if (!subscription.stale) {
        subscription.backup = subscription.snapshot;
        return;
      }
      const snapshot = subscription.snapshot;
      const backup = RelayReader.read(
        source,
        snapshot.selector,
        this._resolverCache,
      );
      const nextData = recycleNodesInto(snapshot.data, backup.data);
      (backup: $FlowFixMe).data = nextData; // backup owns the snapshot and can safely mutate
      subscription.backup = backup;
    });
  }

  restoreSubscriptions() {
    this._subscriptions.forEach(subscription => {
      const backup = subscription.backup;
      subscription.backup = null;
      if (backup) {
        if (backup.data !== subscription.snapshot.data) {
          subscription.stale = true;
        }
        subscription.snapshot = {
          data: subscription.snapshot.data,
          isMissingData: backup.isMissingData,
          seenRecords: backup.seenRecords,
          selector: backup.selector,
          missingRequiredFields: backup.missingRequiredFields,
        };
      } else {
        subscription.stale = true;
      }
    });
  }

  updateSubscriptions(
    source: RecordSource,
    updatedRecordIDs: DataIDSet,
    updatedOwners: Array<RequestDescriptor>,
    sourceOperation?: OperationDescriptor,
  ) {
    const hasUpdatedRecords = updatedRecordIDs.size !== 0;
    this._subscriptions.forEach(subscription => {
      const owner = this._updateSubscription(
        source,
        subscription,
        updatedRecordIDs,
        hasUpdatedRecords,
        sourceOperation,
      );
      if (owner != null) {
        updatedOwners.push(owner);
      }
    });
  }

  /**
   * Notifies the callback for the subscription if the data for the associated
   * snapshot has changed.
   * Additionally, updates the subscription snapshot with the latest snapshot,
   * and marks it as not stale.
   * Returns the owner (RequestDescriptor) if the subscription was affected by the
   * latest update, or null if it was not affected.
   */
  _updateSubscription(
    source: RecordSource,
    subscription: Subscription,
    updatedRecordIDs: DataIDSet,
    hasUpdatedRecords: boolean,
    sourceOperation?: OperationDescriptor,
  ): ?RequestDescriptor {
    const {backup, callback, snapshot, stale} = subscription;
    const hasOverlappingUpdates =
      hasUpdatedRecords &&
      hasOverlappingIDs(snapshot.seenRecords, updatedRecordIDs);
    if (!stale && !hasOverlappingUpdates) {
      return;
    }
    let nextSnapshot: Snapshot =
      hasOverlappingUpdates || !backup
        ? RelayReader.read(source, snapshot.selector, this._resolverCache)
        : backup;
    const nextData = recycleNodesInto(snapshot.data, nextSnapshot.data);
    nextSnapshot = ({
      data: nextData,
      isMissingData: nextSnapshot.isMissingData,
      seenRecords: nextSnapshot.seenRecords,
      selector: nextSnapshot.selector,
      missingRequiredFields: nextSnapshot.missingRequiredFields,
    }: Snapshot);
    if (__DEV__) {
      deepFreeze(nextSnapshot);
    }
    subscription.snapshot = nextSnapshot;
    subscription.stale = false;
    if (nextSnapshot.data !== snapshot.data) {
      if (this.__log && RelayFeatureFlags.ENABLE_NOTIFY_SUBSCRIPTION) {
        this.__log({
          name: 'store.notify.subscription',
          sourceOperation,
          snapshot,
          nextSnapshot,
        });
      }
      callback(nextSnapshot);
      return snapshot.selector.owner;
    }
  }
}

module.exports = RelayStoreSubscriptions;
