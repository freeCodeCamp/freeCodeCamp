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

var RelayFeatureFlags = require('../util/RelayFeatureFlags');

var RelayReader = require('./RelayReader');

var deepFreeze = require('../util/deepFreeze');

var hasOverlappingIDs = require('./hasOverlappingIDs');

var recycleNodesInto = require('../util/recycleNodesInto');

var RelayStoreSubscriptions = /*#__PURE__*/function () {
  function RelayStoreSubscriptions(log, resolverCache) {
    this._subscriptions = new Set();
    this.__log = log;
    this._resolverCache = resolverCache;
  }

  var _proto = RelayStoreSubscriptions.prototype;

  _proto.subscribe = function subscribe(snapshot, callback) {
    var _this = this;

    var subscription = {
      backup: null,
      callback: callback,
      snapshot: snapshot,
      stale: false
    };

    var dispose = function dispose() {
      _this._subscriptions["delete"](subscription);
    };

    this._subscriptions.add(subscription);

    return {
      dispose: dispose
    };
  };

  _proto.snapshotSubscriptions = function snapshotSubscriptions(source) {
    var _this2 = this;

    this._subscriptions.forEach(function (subscription) {
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

      var snapshot = subscription.snapshot;
      var backup = RelayReader.read(source, snapshot.selector, _this2._resolverCache);
      var nextData = recycleNodesInto(snapshot.data, backup.data);
      backup.data = nextData; // backup owns the snapshot and can safely mutate

      subscription.backup = backup;
    });
  };

  _proto.restoreSubscriptions = function restoreSubscriptions() {
    this._subscriptions.forEach(function (subscription) {
      var backup = subscription.backup;
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
          missingRequiredFields: backup.missingRequiredFields
        };
      } else {
        subscription.stale = true;
      }
    });
  };

  _proto.updateSubscriptions = function updateSubscriptions(source, updatedRecordIDs, updatedOwners, sourceOperation) {
    var _this3 = this;

    var hasUpdatedRecords = updatedRecordIDs.size !== 0;

    this._subscriptions.forEach(function (subscription) {
      var owner = _this3._updateSubscription(source, subscription, updatedRecordIDs, hasUpdatedRecords, sourceOperation);

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
  ;

  _proto._updateSubscription = function _updateSubscription(source, subscription, updatedRecordIDs, hasUpdatedRecords, sourceOperation) {
    var backup = subscription.backup,
        callback = subscription.callback,
        snapshot = subscription.snapshot,
        stale = subscription.stale;
    var hasOverlappingUpdates = hasUpdatedRecords && hasOverlappingIDs(snapshot.seenRecords, updatedRecordIDs);

    if (!stale && !hasOverlappingUpdates) {
      return;
    }

    var nextSnapshot = hasOverlappingUpdates || !backup ? RelayReader.read(source, snapshot.selector, this._resolverCache) : backup;
    var nextData = recycleNodesInto(snapshot.data, nextSnapshot.data);
    nextSnapshot = {
      data: nextData,
      isMissingData: nextSnapshot.isMissingData,
      seenRecords: nextSnapshot.seenRecords,
      selector: nextSnapshot.selector,
      missingRequiredFields: nextSnapshot.missingRequiredFields
    };

    if (process.env.NODE_ENV !== "production") {
      deepFreeze(nextSnapshot);
    }

    subscription.snapshot = nextSnapshot;
    subscription.stale = false;

    if (nextSnapshot.data !== snapshot.data) {
      if (this.__log && RelayFeatureFlags.ENABLE_NOTIFY_SUBSCRIPTION) {
        this.__log({
          name: 'store.notify.subscription',
          sourceOperation: sourceOperation,
          snapshot: snapshot,
          nextSnapshot: nextSnapshot
        });
      }

      callback(nextSnapshot);
      return snapshot.selector.owner;
    }
  };

  return RelayStoreSubscriptions;
}();

module.exports = RelayStoreSubscriptions;