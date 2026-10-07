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

var _global$ErrorUtils$ap, _global, _global$ErrorUtils;

var RelayReader = require('./RelayReader');

var RelayRecordSource = require('./RelayRecordSource');

var RelayRecordSourceMutator = require('../mutations/RelayRecordSourceMutator');

var RelayRecordSourceProxy = require('../mutations/RelayRecordSourceProxy');

var RelayRecordSourceSelectorProxy = require('../mutations/RelayRecordSourceSelectorProxy');

var invariant = require('invariant');

var warning = require("fbjs/lib/warning");

var applyWithGuard = (_global$ErrorUtils$ap = (_global = global) === null || _global === void 0 ? void 0 : (_global$ErrorUtils = _global.ErrorUtils) === null || _global$ErrorUtils === void 0 ? void 0 : _global$ErrorUtils.applyWithGuard) !== null && _global$ErrorUtils$ap !== void 0 ? _global$ErrorUtils$ap : function (callback, context, args, onError, name) {
  return callback.apply(context, args);
};
/**
 * Coordinates the concurrent modification of a `Store` due to optimistic and
 * non-revertable client updates and server payloads:
 * - Applies optimistic updates.
 * - Reverts optimistic updates, rebasing any subsequent updates.
 * - Commits client updates (typically for client schema extensions).
 * - Commits server updates:
 *   - Normalizes query/mutation/subscription responses.
 *   - Executes handlers for "handle" fields.
 *   - Reverts and reapplies pending optimistic updates.
 */

var RelayPublishQueue = /*#__PURE__*/function () {
  // True if the next `run()` should apply the backup and rerun all optimistic
  // updates performing a rebase.
  // Payloads to apply or Sources to publish to the store with the next `run()`.
  // Optimistic updaters to add with the next `run()`.
  // Optimistic updaters that are already added and might be rerun in order to
  // rebase them.
  // Garbage collection hold, should rerun gc on dispose
  function RelayPublishQueue(store, handlerProvider, getDataID) {
    this._hasStoreSnapshot = false;
    this._handlerProvider = handlerProvider || null;
    this._pendingBackupRebase = false;
    this._pendingData = new Set();
    this._pendingOptimisticUpdates = new Set();
    this._store = store;
    this._appliedOptimisticUpdates = new Set();
    this._gcHold = null;
    this._getDataID = getDataID;
  }
  /**
   * Schedule applying an optimistic updates on the next `run()`.
   */


  var _proto = RelayPublishQueue.prototype;

  _proto.applyUpdate = function applyUpdate(updater) {
    !(!this._appliedOptimisticUpdates.has(updater) && !this._pendingOptimisticUpdates.has(updater)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayPublishQueue: Cannot apply the same update function more than ' + 'once concurrently.') : invariant(false) : void 0;

    this._pendingOptimisticUpdates.add(updater);
  }
  /**
   * Schedule reverting an optimistic updates on the next `run()`.
   */
  ;

  _proto.revertUpdate = function revertUpdate(updater) {
    if (this._pendingOptimisticUpdates.has(updater)) {
      // Reverted before it was applied
      this._pendingOptimisticUpdates["delete"](updater);
    } else if (this._appliedOptimisticUpdates.has(updater)) {
      this._pendingBackupRebase = true;

      this._appliedOptimisticUpdates["delete"](updater);
    }
  }
  /**
   * Schedule a revert of all optimistic updates on the next `run()`.
   */
  ;

  _proto.revertAll = function revertAll() {
    this._pendingBackupRebase = true;

    this._pendingOptimisticUpdates.clear();

    this._appliedOptimisticUpdates.clear();
  }
  /**
   * Schedule applying a payload to the store on the next `run()`.
   */
  ;

  _proto.commitPayload = function commitPayload(operation, payload, updater) {
    this._pendingBackupRebase = true;

    this._pendingData.add({
      kind: 'payload',
      operation: operation,
      payload: payload,
      updater: updater
    });
  }
  /**
   * Schedule an updater to mutate the store on the next `run()` typically to
   * update client schema fields.
   */
  ;

  _proto.commitUpdate = function commitUpdate(updater) {
    this._pendingBackupRebase = true;

    this._pendingData.add({
      kind: 'updater',
      updater: updater
    });
  }
  /**
   * Schedule a publish to the store from the provided source on the next
   * `run()`. As an example, to update the store with substituted fields that
   * are missing in the store.
   */
  ;

  _proto.commitSource = function commitSource(source) {
    this._pendingBackupRebase = true;

    this._pendingData.add({
      kind: 'source',
      source: source
    });
  }
  /**
   * Execute all queued up operations from the other public methods.
   */
  ;

  _proto.run = function run(sourceOperation) {
    var runWillClearGcHold = this._appliedOptimisticUpdates === 0 && !!this._gcHold;
    var runIsANoop = // this._pendingBackupRebase is true if an applied optimistic
    // update has potentially been reverted or if this._pendingData is not empty.
    !this._pendingBackupRebase && this._pendingOptimisticUpdates.size === 0 && !runWillClearGcHold;

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? warning(!runIsANoop, 'RelayPublishQueue.run was called, but the call would have been a noop.') : void 0;
      process.env.NODE_ENV !== "production" ? warning(this._isRunning !== true, 'A store update was detected within another store update. Please ' + "make sure new store updates aren't being executed within an " + 'updater function for a different update.') : void 0;
      this._isRunning = true;
    }

    if (runIsANoop) {
      if (process.env.NODE_ENV !== "production") {
        this._isRunning = false;
      }

      return [];
    }

    if (this._pendingBackupRebase) {
      if (this._hasStoreSnapshot) {
        this._store.restore();

        this._hasStoreSnapshot = false;
      }
    }

    var invalidatedStore = this._commitData();

    if (this._pendingOptimisticUpdates.size || this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
      if (!this._hasStoreSnapshot) {
        this._store.snapshot();

        this._hasStoreSnapshot = true;
      }

      this._applyUpdates();
    }

    this._pendingBackupRebase = false;

    if (this._appliedOptimisticUpdates.size > 0) {
      if (!this._gcHold) {
        this._gcHold = this._store.holdGC();
      }
    } else {
      if (this._gcHold) {
        this._gcHold.dispose();

        this._gcHold = null;
      }
    }

    if (process.env.NODE_ENV !== "production") {
      this._isRunning = false;
    }

    return this._store.notify(sourceOperation, invalidatedStore);
  }
  /**
   * _publishSourceFromPayload will return a boolean indicating if the
   * publish caused the store to be globally invalidated.
   */
  ;

  _proto._publishSourceFromPayload = function _publishSourceFromPayload(pendingPayload) {
    var _this = this;

    var payload = pendingPayload.payload,
        operation = pendingPayload.operation,
        updater = pendingPayload.updater;
    var source = payload.source,
        fieldPayloads = payload.fieldPayloads;
    var mutator = new RelayRecordSourceMutator(this._store.getSource(), source);
    var recordSourceProxy = new RelayRecordSourceProxy(mutator, this._getDataID);

    if (fieldPayloads && fieldPayloads.length) {
      fieldPayloads.forEach(function (fieldPayload) {
        var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);

        !handler ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernEnvironment: Expected a handler to be provided for ' + 'handle `%s`.', fieldPayload.handle) : invariant(false) : void 0;
        handler.update(recordSourceProxy, fieldPayload);
      });
    }

    if (updater) {
      var selector = operation.fragment;
      !(selector != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernEnvironment: Expected a selector to be provided with updater function.') : invariant(false) : void 0;
      var recordSourceSelectorProxy = new RelayRecordSourceSelectorProxy(mutator, recordSourceProxy, selector);
      var selectorData = lookupSelector(source, selector);
      updater(recordSourceSelectorProxy, selectorData);
    }

    var idsMarkedForInvalidation = recordSourceProxy.getIDsMarkedForInvalidation();

    this._store.publish(source, idsMarkedForInvalidation);

    return recordSourceProxy.isStoreMarkedForInvalidation();
  }
  /**
   * _commitData will return a boolean indicating if any of
   * the pending commits caused the store to be globally invalidated.
   */
  ;

  _proto._commitData = function _commitData() {
    var _this2 = this;

    if (!this._pendingData.size) {
      return false;
    }

    var invalidatedStore = false;

    this._pendingData.forEach(function (data) {
      if (data.kind === 'payload') {
        var payloadInvalidatedStore = _this2._publishSourceFromPayload(data);

        invalidatedStore = invalidatedStore || payloadInvalidatedStore;
      } else if (data.kind === 'source') {
        var source = data.source;

        _this2._store.publish(source);
      } else {
        var updater = data.updater;
        var sink = RelayRecordSource.create();
        var mutator = new RelayRecordSourceMutator(_this2._store.getSource(), sink);
        var recordSourceProxy = new RelayRecordSourceProxy(mutator, _this2._getDataID);
        applyWithGuard(updater, null, [recordSourceProxy], null, 'RelayPublishQueue:commitData');
        invalidatedStore = invalidatedStore || recordSourceProxy.isStoreMarkedForInvalidation();
        var idsMarkedForInvalidation = recordSourceProxy.getIDsMarkedForInvalidation();

        _this2._store.publish(sink, idsMarkedForInvalidation);
      }
    });

    this._pendingData.clear();

    return invalidatedStore;
  }
  /**
   * Note that unlike _commitData, _applyUpdates will NOT return a boolean
   * indicating if the store was globally invalidated, since invalidating the
   * store during an optimistic update is a no-op.
   */
  ;

  _proto._applyUpdates = function _applyUpdates() {
    var _this3 = this;

    var sink = RelayRecordSource.create();
    var mutator = new RelayRecordSourceMutator(this._store.getSource(), sink);
    var recordSourceProxy = new RelayRecordSourceProxy(mutator, this._getDataID, this._handlerProvider);

    var processUpdate = function processUpdate(optimisticUpdate) {
      if (optimisticUpdate.storeUpdater) {
        var storeUpdater = optimisticUpdate.storeUpdater;
        applyWithGuard(storeUpdater, null, [recordSourceProxy], null, 'RelayPublishQueue:applyUpdates');
      } else {
        var operation = optimisticUpdate.operation,
            payload = optimisticUpdate.payload,
            updater = optimisticUpdate.updater;
        var source = payload.source,
            fieldPayloads = payload.fieldPayloads;

        if (source) {
          recordSourceProxy.publishSource(source, fieldPayloads);
        }

        if (updater) {
          var selectorData;

          if (source) {
            selectorData = lookupSelector(source, operation.fragment);
          }

          var recordSourceSelectorProxy = new RelayRecordSourceSelectorProxy(mutator, recordSourceProxy, operation.fragment);
          applyWithGuard(updater, null, [recordSourceSelectorProxy, selectorData], null, 'RelayPublishQueue:applyUpdates');
        }
      }
    }; // rerun all updaters in case we are running a rebase


    if (this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
      this._appliedOptimisticUpdates.forEach(processUpdate);
    } // apply any new updaters


    if (this._pendingOptimisticUpdates.size) {
      this._pendingOptimisticUpdates.forEach(function (optimisticUpdate) {
        processUpdate(optimisticUpdate);

        _this3._appliedOptimisticUpdates.add(optimisticUpdate);
      });

      this._pendingOptimisticUpdates.clear();
    }

    this._store.publish(sink);
  };

  return RelayPublishQueue;
}();

function lookupSelector(source, selector) {
  var selectorData = RelayReader.read(source, selector).data;

  if (process.env.NODE_ENV !== "production") {
    var deepFreeze = require('../util/deepFreeze');

    if (selectorData) {
      deepFreeze(selectorData);
    }
  }

  return selectorData;
}

module.exports = RelayPublishQueue;