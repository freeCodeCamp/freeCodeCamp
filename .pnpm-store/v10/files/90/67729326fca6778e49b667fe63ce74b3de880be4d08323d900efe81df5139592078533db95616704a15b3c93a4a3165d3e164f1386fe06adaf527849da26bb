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

const RelayReader = require('./RelayReader');
const RelayRecordSource = require('./RelayRecordSource');
const RelayRecordSourceMutator = require('../mutations/RelayRecordSourceMutator');
const RelayRecordSourceProxy = require('../mutations/RelayRecordSourceProxy');
const RelayRecordSourceSelectorProxy = require('../mutations/RelayRecordSourceSelectorProxy');

const invariant = require('invariant');
const warning = require('warning');

import type {HandlerProvider} from '../handlers/RelayDefaultHandlerProvider';
import type {Disposable} from '../util/RelayRuntimeTypes';
import type {GetDataID} from './RelayResponseNormalizer';
import type {
  OperationDescriptor,
  OptimisticUpdate,
  PublishQueue,
  RecordSource,
  RelayResponsePayload,
  RequestDescriptor,
  SelectorData,
  SelectorStoreUpdater,
  SingularReaderSelector,
  Store,
  StoreUpdater,
} from './RelayStoreTypes';

type PendingCommit = PendingRelayPayload | PendingRecordSource | PendingUpdater;
type PendingRelayPayload = {|
  +kind: 'payload',
  +operation: OperationDescriptor,
  +payload: RelayResponsePayload,
  +updater: ?SelectorStoreUpdater,
|};
type PendingRecordSource = {|
  +kind: 'source',
  +source: RecordSource,
|};
type PendingUpdater = {|
  +kind: 'updater',
  +updater: StoreUpdater,
|};

const applyWithGuard =
  global?.ErrorUtils?.applyWithGuard ??
  ((callback, context, args, onError, name) => callback.apply(context, args));

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
class RelayPublishQueue implements PublishQueue {
  _store: Store;
  _handlerProvider: ?HandlerProvider;
  _getDataID: GetDataID;

  _hasStoreSnapshot: boolean;
  // True if the next `run()` should apply the backup and rerun all optimistic
  // updates performing a rebase.
  _pendingBackupRebase: boolean;
  // Payloads to apply or Sources to publish to the store with the next `run()`.
  _pendingData: Set<PendingCommit>;
  // Optimistic updaters to add with the next `run()`.
  _pendingOptimisticUpdates: Set<OptimisticUpdate>;
  // Optimistic updaters that are already added and might be rerun in order to
  // rebase them.
  _appliedOptimisticUpdates: Set<OptimisticUpdate>;
  // Garbage collection hold, should rerun gc on dispose
  _gcHold: ?Disposable;
  _isRunning: ?boolean;

  constructor(
    store: Store,
    handlerProvider?: ?HandlerProvider,
    getDataID: GetDataID,
  ) {
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
  applyUpdate(updater: OptimisticUpdate): void {
    invariant(
      !this._appliedOptimisticUpdates.has(updater) &&
        !this._pendingOptimisticUpdates.has(updater),
      'RelayPublishQueue: Cannot apply the same update function more than ' +
        'once concurrently.',
    );
    this._pendingOptimisticUpdates.add(updater);
  }

  /**
   * Schedule reverting an optimistic updates on the next `run()`.
   */
  revertUpdate(updater: OptimisticUpdate): void {
    if (this._pendingOptimisticUpdates.has(updater)) {
      // Reverted before it was applied
      this._pendingOptimisticUpdates.delete(updater);
    } else if (this._appliedOptimisticUpdates.has(updater)) {
      this._pendingBackupRebase = true;
      this._appliedOptimisticUpdates.delete(updater);
    }
  }

  /**
   * Schedule a revert of all optimistic updates on the next `run()`.
   */
  revertAll(): void {
    this._pendingBackupRebase = true;
    this._pendingOptimisticUpdates.clear();
    this._appliedOptimisticUpdates.clear();
  }

  /**
   * Schedule applying a payload to the store on the next `run()`.
   */
  commitPayload(
    operation: OperationDescriptor,
    payload: RelayResponsePayload,
    updater?: ?SelectorStoreUpdater,
  ): void {
    this._pendingBackupRebase = true;
    this._pendingData.add({
      kind: 'payload',
      operation,
      payload,
      updater,
    });
  }

  /**
   * Schedule an updater to mutate the store on the next `run()` typically to
   * update client schema fields.
   */
  commitUpdate(updater: StoreUpdater): void {
    this._pendingBackupRebase = true;
    this._pendingData.add({
      kind: 'updater',
      updater,
    });
  }

  /**
   * Schedule a publish to the store from the provided source on the next
   * `run()`. As an example, to update the store with substituted fields that
   * are missing in the store.
   */
  commitSource(source: RecordSource): void {
    this._pendingBackupRebase = true;
    this._pendingData.add({kind: 'source', source});
  }

  /**
   * Execute all queued up operations from the other public methods.
   */
  run(
    sourceOperation?: OperationDescriptor,
  ): $ReadOnlyArray<RequestDescriptor> {
    const runWillClearGcHold =
      this._appliedOptimisticUpdates === 0 && !!this._gcHold;
    const runIsANoop =
      // this._pendingBackupRebase is true if an applied optimistic
      // update has potentially been reverted or if this._pendingData is not empty.
      !this._pendingBackupRebase &&
      this._pendingOptimisticUpdates.size === 0 &&
      !runWillClearGcHold;

    if (__DEV__) {
      warning(
        !runIsANoop,
        'RelayPublishQueue.run was called, but the call would have been a noop.',
      );
      warning(
        this._isRunning !== true,
        'A store update was detected within another store update. Please ' +
          "make sure new store updates aren't being executed within an " +
          'updater function for a different update.',
      );
      this._isRunning = true;
    }

    if (runIsANoop) {
      if (__DEV__) {
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
    const invalidatedStore = this._commitData();
    if (
      this._pendingOptimisticUpdates.size ||
      (this._pendingBackupRebase && this._appliedOptimisticUpdates.size)
    ) {
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
    if (__DEV__) {
      this._isRunning = false;
    }
    return this._store.notify(sourceOperation, invalidatedStore);
  }

  /**
   * _publishSourceFromPayload will return a boolean indicating if the
   * publish caused the store to be globally invalidated.
   */
  _publishSourceFromPayload(pendingPayload: PendingRelayPayload): boolean {
    const {payload, operation, updater} = pendingPayload;
    const {source, fieldPayloads} = payload;
    const mutator = new RelayRecordSourceMutator(
      this._store.getSource(),
      source,
    );
    const recordSourceProxy = new RelayRecordSourceProxy(
      mutator,
      this._getDataID,
    );
    if (fieldPayloads && fieldPayloads.length) {
      fieldPayloads.forEach(fieldPayload => {
        const handler =
          this._handlerProvider && this._handlerProvider(fieldPayload.handle);
        invariant(
          handler,
          'RelayModernEnvironment: Expected a handler to be provided for ' +
            'handle `%s`.',
          fieldPayload.handle,
        );
        handler.update(recordSourceProxy, fieldPayload);
      });
    }
    if (updater) {
      const selector = operation.fragment;
      invariant(
        selector != null,
        'RelayModernEnvironment: Expected a selector to be provided with updater function.',
      );
      const recordSourceSelectorProxy = new RelayRecordSourceSelectorProxy(
        mutator,
        recordSourceProxy,
        selector,
      );
      const selectorData = lookupSelector(source, selector);
      updater(recordSourceSelectorProxy, selectorData);
    }
    const idsMarkedForInvalidation = recordSourceProxy.getIDsMarkedForInvalidation();
    this._store.publish(source, idsMarkedForInvalidation);
    return recordSourceProxy.isStoreMarkedForInvalidation();
  }

  /**
   * _commitData will return a boolean indicating if any of
   * the pending commits caused the store to be globally invalidated.
   */
  _commitData(): boolean {
    if (!this._pendingData.size) {
      return false;
    }
    let invalidatedStore = false;
    this._pendingData.forEach(data => {
      if (data.kind === 'payload') {
        const payloadInvalidatedStore = this._publishSourceFromPayload(data);
        invalidatedStore = invalidatedStore || payloadInvalidatedStore;
      } else if (data.kind === 'source') {
        const source = data.source;
        this._store.publish(source);
      } else {
        const updater = data.updater;
        const sink = RelayRecordSource.create();
        const mutator = new RelayRecordSourceMutator(
          this._store.getSource(),
          sink,
        );
        const recordSourceProxy = new RelayRecordSourceProxy(
          mutator,
          this._getDataID,
        );
        applyWithGuard(
          updater,
          null,
          [recordSourceProxy],
          null,
          'RelayPublishQueue:commitData',
        );
        invalidatedStore =
          invalidatedStore || recordSourceProxy.isStoreMarkedForInvalidation();
        const idsMarkedForInvalidation = recordSourceProxy.getIDsMarkedForInvalidation();

        this._store.publish(sink, idsMarkedForInvalidation);
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
  _applyUpdates(): void {
    const sink = RelayRecordSource.create();
    const mutator = new RelayRecordSourceMutator(this._store.getSource(), sink);
    const recordSourceProxy = new RelayRecordSourceProxy(
      mutator,
      this._getDataID,
      this._handlerProvider,
    );

    const processUpdate = optimisticUpdate => {
      if (optimisticUpdate.storeUpdater) {
        const {storeUpdater} = optimisticUpdate;
        applyWithGuard(
          storeUpdater,
          null,
          [recordSourceProxy],
          null,
          'RelayPublishQueue:applyUpdates',
        );
      } else {
        const {operation, payload, updater} = optimisticUpdate;
        const {source, fieldPayloads} = payload;
        if (source) {
          recordSourceProxy.publishSource(source, fieldPayloads);
        }
        if (updater) {
          let selectorData;
          if (source) {
            selectorData = lookupSelector(source, operation.fragment);
          }
          const recordSourceSelectorProxy = new RelayRecordSourceSelectorProxy(
            mutator,
            recordSourceProxy,
            operation.fragment,
          );
          applyWithGuard(
            updater,
            null,
            [recordSourceSelectorProxy, selectorData],
            null,
            'RelayPublishQueue:applyUpdates',
          );
        }
      }
    };

    // rerun all updaters in case we are running a rebase
    if (this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
      this._appliedOptimisticUpdates.forEach(processUpdate);
    }

    // apply any new updaters
    if (this._pendingOptimisticUpdates.size) {
      this._pendingOptimisticUpdates.forEach(optimisticUpdate => {
        processUpdate(optimisticUpdate);
        this._appliedOptimisticUpdates.add(optimisticUpdate);
      });
      this._pendingOptimisticUpdates.clear();
    }

    this._store.publish(sink);
  }
}

function lookupSelector(
  source: RecordSource,
  selector: SingularReaderSelector,
): ?SelectorData {
  const selectorData = RelayReader.read(source, selector).data;
  if (__DEV__) {
    const deepFreeze = require('../util/deepFreeze');
    if (selectorData) {
      deepFreeze(selectorData);
    }
  }
  return selectorData;
}

module.exports = RelayPublishQueue;
