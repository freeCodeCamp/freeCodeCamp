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

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var DataChecker = require('./DataChecker');

var RelayFeatureFlags = require('../util/RelayFeatureFlags');

var RelayModernRecord = require('./RelayModernRecord');

var RelayOptimisticRecordSource = require('./RelayOptimisticRecordSource');

var RelayReader = require('./RelayReader');

var RelayReferenceMarker = require('./RelayReferenceMarker');

var RelayStoreReactFlightUtils = require('./RelayStoreReactFlightUtils');

var RelayStoreSubscriptions = require('./RelayStoreSubscriptions');

var RelayStoreUtils = require('./RelayStoreUtils');

var deepFreeze = require('../util/deepFreeze');

var defaultGetDataID = require('./defaultGetDataID');

var invariant = require('invariant');

var resolveImmediate = require('../util/resolveImmediate');

var _require = require('../multi-actor-environment/ActorIdentifier'),
    INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE = _require.INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
    assertInternalActorIndentifier = _require.assertInternalActorIndentifier;

var _require2 = require('./RelayStoreUtils'),
    ROOT_ID = _require2.ROOT_ID,
    ROOT_TYPE = _require2.ROOT_TYPE;

var _require3 = require('./ResolverCache'),
    RecordResolverCache = _require3.RecordResolverCache;

var DEFAULT_RELEASE_BUFFER_SIZE = 10;
/**
 * @public
 *
 * An implementation of the `Store` interface defined in `RelayStoreTypes`.
 *
 * Note that a Store takes ownership of all records provided to it: other
 * objects may continue to hold a reference to such records but may not mutate
 * them. The static Relay core is architected to avoid mutating records that may have been
 * passed to a store: operations that mutate records will either create fresh
 * records or clone existing records and modify the clones. Record immutability
 * is also enforced in development mode by freezing all records passed to a store.
 */

var RelayModernStore = /*#__PURE__*/function () {
  function RelayModernStore(source, options) {
    var _this = this;

    var _options$gcReleaseBuf, _options$gcScheduler, _options$getDataID, _options$log, _options$operationLoa;

    (0, _defineProperty2["default"])(this, "_gcStep", function () {
      if (_this._gcRun) {
        if (_this._gcRun.next().done) {
          _this._gcRun = null;
        } else {
          _this._gcScheduler(_this._gcStep);
        }
      }
    });

    // Prevent mutation of a record from outside the store.
    if (process.env.NODE_ENV !== "production") {
      var storeIDs = source.getRecordIDs();

      for (var ii = 0; ii < storeIDs.length; ii++) {
        var record = source.get(storeIDs[ii]);

        if (record) {
          RelayModernRecord.freeze(record);
        }
      }
    }

    this._currentWriteEpoch = 0;
    this._gcHoldCounter = 0;
    this._gcReleaseBufferSize = (_options$gcReleaseBuf = options === null || options === void 0 ? void 0 : options.gcReleaseBufferSize) !== null && _options$gcReleaseBuf !== void 0 ? _options$gcReleaseBuf : DEFAULT_RELEASE_BUFFER_SIZE;
    this._gcRun = null;
    this._gcScheduler = (_options$gcScheduler = options === null || options === void 0 ? void 0 : options.gcScheduler) !== null && _options$gcScheduler !== void 0 ? _options$gcScheduler : resolveImmediate;
    this._getDataID = (_options$getDataID = options === null || options === void 0 ? void 0 : options.getDataID) !== null && _options$getDataID !== void 0 ? _options$getDataID : defaultGetDataID;
    this._globalInvalidationEpoch = null;
    this._invalidationSubscriptions = new Set();
    this._invalidatedRecordIDs = new Set();
    this.__log = (_options$log = options === null || options === void 0 ? void 0 : options.log) !== null && _options$log !== void 0 ? _options$log : null;
    this._queryCacheExpirationTime = options === null || options === void 0 ? void 0 : options.queryCacheExpirationTime;
    this._operationLoader = (_options$operationLoa = options === null || options === void 0 ? void 0 : options.operationLoader) !== null && _options$operationLoa !== void 0 ? _options$operationLoa : null;
    this._optimisticSource = null;
    this._recordSource = source;
    this._releaseBuffer = [];
    this._roots = new Map();
    this._shouldScheduleGC = false;
    this._resolverCache = new RecordResolverCache(function () {
      return _this._getMutableRecordSource();
    });
    this._storeSubscriptions = new RelayStoreSubscriptions(options === null || options === void 0 ? void 0 : options.log, this._resolverCache);
    this._updatedRecordIDs = new Set();
    this._shouldProcessClientComponents = options === null || options === void 0 ? void 0 : options.shouldProcessClientComponents;
    initializeRecordSource(this._recordSource);
  }

  var _proto = RelayModernStore.prototype;

  _proto.getSource = function getSource() {
    var _this$_optimisticSour;

    return (_this$_optimisticSour = this._optimisticSource) !== null && _this$_optimisticSour !== void 0 ? _this$_optimisticSour : this._recordSource;
  };

  _proto._getMutableRecordSource = function _getMutableRecordSource() {
    var _this$_optimisticSour2;

    return (_this$_optimisticSour2 = this._optimisticSource) !== null && _this$_optimisticSour2 !== void 0 ? _this$_optimisticSour2 : this._recordSource;
  };

  _proto.check = function check(operation, options) {
    var _options$handlers, _options$getSourceFor, _options$getTargetFor, _options$defaultActor;

    var selector = operation.root;

    var source = this._getMutableRecordSource();

    var globalInvalidationEpoch = this._globalInvalidationEpoch;

    var rootEntry = this._roots.get(operation.request.identifier);

    var operationLastWrittenAt = rootEntry != null ? rootEntry.epoch : null; // Check if store has been globally invalidated

    if (globalInvalidationEpoch != null) {
      // If so, check if the operation we're checking was last written
      // before or after invalidation occurred.
      if (operationLastWrittenAt == null || operationLastWrittenAt <= globalInvalidationEpoch) {
        // If the operation was written /before/ global invalidation occurred,
        // or if this operation has never been written to the store before,
        // we will consider the data for this operation to be stale
        // (i.e. not resolvable from the store).
        return {
          status: 'stale'
        };
      }
    }

    var handlers = (_options$handlers = options === null || options === void 0 ? void 0 : options.handlers) !== null && _options$handlers !== void 0 ? _options$handlers : [];
    var getSourceForActor = (_options$getSourceFor = options === null || options === void 0 ? void 0 : options.getSourceForActor) !== null && _options$getSourceFor !== void 0 ? _options$getSourceFor : function (actorIdentifier) {
      assertInternalActorIndentifier(actorIdentifier);
      return source;
    };
    var getTargetForActor = (_options$getTargetFor = options === null || options === void 0 ? void 0 : options.getTargetForActor) !== null && _options$getTargetFor !== void 0 ? _options$getTargetFor : function (actorIdentifier) {
      assertInternalActorIndentifier(actorIdentifier);
      return source;
    };
    var operationAvailability = DataChecker.check(getSourceForActor, getTargetForActor, (_options$defaultActor = options === null || options === void 0 ? void 0 : options.defaultActorIdentifier) !== null && _options$defaultActor !== void 0 ? _options$defaultActor : INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE, selector, handlers, this._operationLoader, this._getDataID, this._shouldProcessClientComponents);
    return getAvailabilityStatus(operationAvailability, operationLastWrittenAt, rootEntry === null || rootEntry === void 0 ? void 0 : rootEntry.fetchTime, this._queryCacheExpirationTime);
  };

  _proto.retain = function retain(operation) {
    var _this2 = this;

    var id = operation.request.identifier;
    var disposed = false;

    var dispose = function dispose() {
      // Ensure each retain can only dispose once
      if (disposed) {
        return;
      }

      disposed = true; // For Flow: guard against the entry somehow not existing

      var rootEntry = _this2._roots.get(id);

      if (rootEntry == null) {
        return;
      } // Decrement the ref count: if it becomes zero it is eligible
      // for release.


      rootEntry.refCount--;

      if (rootEntry.refCount === 0) {
        var _queryCacheExpirationTime = _this2._queryCacheExpirationTime;

        var rootEntryIsStale = rootEntry.fetchTime != null && _queryCacheExpirationTime != null && rootEntry.fetchTime <= Date.now() - _queryCacheExpirationTime;

        if (rootEntryIsStale) {
          _this2._roots["delete"](id);

          _this2.scheduleGC();
        } else {
          _this2._releaseBuffer.push(id); // If the release buffer is now over-full, remove the least-recently
          // added entry and schedule a GC. Note that all items in the release
          // buffer have a refCount of 0.


          if (_this2._releaseBuffer.length > _this2._gcReleaseBufferSize) {
            var _id = _this2._releaseBuffer.shift();

            _this2._roots["delete"](_id);

            _this2.scheduleGC();
          }
        }
      }
    };

    var rootEntry = this._roots.get(id);

    if (rootEntry != null) {
      if (rootEntry.refCount === 0) {
        // This entry should be in the release buffer, but it no longer belongs
        // there since it's retained. Remove it to maintain the invariant that
        // all release buffer entries have a refCount of 0.
        this._releaseBuffer = this._releaseBuffer.filter(function (_id) {
          return _id !== id;
        });
      } // If we've previously retained this operation, increment the refCount


      rootEntry.refCount += 1;
    } else {
      // Otherwise create a new entry for the operation
      this._roots.set(id, {
        operation: operation,
        refCount: 1,
        epoch: null,
        fetchTime: null
      });
    }

    return {
      dispose: dispose
    };
  };

  _proto.lookup = function lookup(selector) {
    var source = this.getSource();
    var snapshot = RelayReader.read(source, selector, this._resolverCache);

    if (process.env.NODE_ENV !== "production") {
      deepFreeze(snapshot);
    }

    return snapshot;
  } // This method will return a list of updated owners from the subscriptions
  ;

  _proto.notify = function notify(sourceOperation, invalidateStore) {
    var _this3 = this;

    var log = this.__log;

    if (log != null) {
      log({
        name: 'store.notify.start',
        sourceOperation: sourceOperation
      });
    } // Increment the current write when notifying after executing
    // a set of changes to the store.


    this._currentWriteEpoch++;

    if (invalidateStore === true) {
      this._globalInvalidationEpoch = this._currentWriteEpoch;
    }

    if (RelayFeatureFlags.ENABLE_RELAY_RESOLVERS) {
      // When a record is updated, we need to also handle records that depend on it,
      // specifically Relay Resolver result records containing results based on the
      // updated records. This both adds to updatedRecordIDs and invalidates any
      // cached data as needed.
      this._resolverCache.invalidateDataIDs(this._updatedRecordIDs);
    }

    var source = this.getSource();
    var updatedOwners = [];

    this._storeSubscriptions.updateSubscriptions(source, this._updatedRecordIDs, updatedOwners, sourceOperation);

    this._invalidationSubscriptions.forEach(function (subscription) {
      _this3._updateInvalidationSubscription(subscription, invalidateStore === true);
    });

    if (log != null) {
      log({
        name: 'store.notify.complete',
        sourceOperation: sourceOperation,
        updatedRecordIDs: this._updatedRecordIDs,
        invalidatedRecordIDs: this._invalidatedRecordIDs
      });
    }

    this._updatedRecordIDs.clear();

    this._invalidatedRecordIDs.clear(); // If a source operation was provided (indicating the operation
    // that produced this update to the store), record the current epoch
    // at which this operation was written.


    if (sourceOperation != null) {
      // We only track the epoch at which the operation was written if
      // it was previously retained, to keep the size of our operation
      // epoch map bounded. If a query wasn't retained, we assume it can
      // may be deleted at any moment and thus is not relevant for us to track
      // for the purposes of invalidation.
      var id = sourceOperation.request.identifier;

      var rootEntry = this._roots.get(id);

      if (rootEntry != null) {
        rootEntry.epoch = this._currentWriteEpoch;
        rootEntry.fetchTime = Date.now();
      } else if (sourceOperation.request.node.params.operationKind === 'query' && this._gcReleaseBufferSize > 0 && this._releaseBuffer.length < this._gcReleaseBufferSize) {
        // The operation isn't retained but there is space in the release buffer:
        // temporarily track this operation in case the data can be reused soon.
        var temporaryRootEntry = {
          operation: sourceOperation,
          refCount: 0,
          epoch: this._currentWriteEpoch,
          fetchTime: Date.now()
        };

        this._releaseBuffer.push(id);

        this._roots.set(id, temporaryRootEntry);
      }
    }

    return updatedOwners;
  };

  _proto.publish = function publish(source, idsMarkedForInvalidation) {
    var target = this._getMutableRecordSource();

    updateTargetFromSource(target, source, // We increment the current epoch at the end of the set of updates,
    // in notify(). Here, we pass what will be the incremented value of
    // the epoch to use to write to invalidated records.
    this._currentWriteEpoch + 1, idsMarkedForInvalidation, this._updatedRecordIDs, this._invalidatedRecordIDs); // NOTE: log *after* processing the source so that even if a bad log function
    // mutates the source, it doesn't affect Relay processing of it.

    var log = this.__log;

    if (log != null) {
      log({
        name: 'store.publish',
        source: source,
        optimistic: target === this._optimisticSource
      });
    }
  };

  _proto.subscribe = function subscribe(snapshot, callback) {
    return this._storeSubscriptions.subscribe(snapshot, callback);
  };

  _proto.holdGC = function holdGC() {
    var _this4 = this;

    if (this._gcRun) {
      this._gcRun = null;
      this._shouldScheduleGC = true;
    }

    this._gcHoldCounter++;

    var dispose = function dispose() {
      if (_this4._gcHoldCounter > 0) {
        _this4._gcHoldCounter--;

        if (_this4._gcHoldCounter === 0 && _this4._shouldScheduleGC) {
          _this4.scheduleGC();

          _this4._shouldScheduleGC = false;
        }
      }
    };

    return {
      dispose: dispose
    };
  };

  _proto.toJSON = function toJSON() {
    return 'RelayModernStore()';
  };

  _proto.getEpoch = function getEpoch() {
    return this._currentWriteEpoch;
  } // Internal API
  ;

  _proto.__getUpdatedRecordIDs = function __getUpdatedRecordIDs() {
    return this._updatedRecordIDs;
  };

  _proto.lookupInvalidationState = function lookupInvalidationState(dataIDs) {
    var _this5 = this;

    var invalidations = new Map();
    dataIDs.forEach(function (dataID) {
      var _RelayModernRecord$ge;

      var record = _this5.getSource().get(dataID);

      invalidations.set(dataID, (_RelayModernRecord$ge = RelayModernRecord.getInvalidationEpoch(record)) !== null && _RelayModernRecord$ge !== void 0 ? _RelayModernRecord$ge : null);
    });
    invalidations.set('global', this._globalInvalidationEpoch);
    return {
      dataIDs: dataIDs,
      invalidations: invalidations
    };
  };

  _proto.checkInvalidationState = function checkInvalidationState(prevInvalidationState) {
    var latestInvalidationState = this.lookupInvalidationState(prevInvalidationState.dataIDs);
    var currentInvalidations = latestInvalidationState.invalidations;
    var prevInvalidations = prevInvalidationState.invalidations; // Check if global invalidation has changed

    if (currentInvalidations.get('global') !== prevInvalidations.get('global')) {
      return true;
    } // Check if the invalidation state for any of the ids has changed.


    var _iterator = (0, _createForOfIteratorHelper2["default"])(prevInvalidationState.dataIDs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dataID = _step.value;

        if (currentInvalidations.get(dataID) !== prevInvalidations.get(dataID)) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return false;
  };

  _proto.subscribeToInvalidationState = function subscribeToInvalidationState(invalidationState, callback) {
    var _this6 = this;

    var subscription = {
      callback: callback,
      invalidationState: invalidationState
    };

    var dispose = function dispose() {
      _this6._invalidationSubscriptions["delete"](subscription);
    };

    this._invalidationSubscriptions.add(subscription);

    return {
      dispose: dispose
    };
  };

  _proto._updateInvalidationSubscription = function _updateInvalidationSubscription(subscription, invalidatedStore) {
    var _this7 = this;

    var callback = subscription.callback,
        invalidationState = subscription.invalidationState;
    var dataIDs = invalidationState.dataIDs;
    var isSubscribedToInvalidatedIDs = invalidatedStore || dataIDs.some(function (dataID) {
      return _this7._invalidatedRecordIDs.has(dataID);
    });

    if (!isSubscribedToInvalidatedIDs) {
      return;
    }

    callback();
  };

  _proto.snapshot = function snapshot() {
    !(this._optimisticSource == null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernStore: Unexpected call to snapshot() while a previous ' + 'snapshot exists.') : invariant(false) : void 0;
    var log = this.__log;

    if (log != null) {
      log({
        name: 'store.snapshot'
      });
    }

    this._storeSubscriptions.snapshotSubscriptions(this.getSource());

    if (this._gcRun) {
      this._gcRun = null;
      this._shouldScheduleGC = true;
    }

    this._optimisticSource = RelayOptimisticRecordSource.create(this.getSource());
  };

  _proto.restore = function restore() {
    !(this._optimisticSource != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernStore: Unexpected call to restore(), expected a snapshot ' + 'to exist (make sure to call snapshot()).') : invariant(false) : void 0;
    var log = this.__log;

    if (log != null) {
      log({
        name: 'store.restore'
      });
    }

    this._optimisticSource = null;

    if (this._shouldScheduleGC) {
      this.scheduleGC();
    }

    this._storeSubscriptions.restoreSubscriptions();
  };

  _proto.scheduleGC = function scheduleGC() {
    if (this._gcHoldCounter > 0) {
      this._shouldScheduleGC = true;
      return;
    }

    if (this._gcRun) {
      return;
    }

    this._gcRun = this._collect();

    this._gcScheduler(this._gcStep);
  }
  /**
   * Run a full GC synchronously.
   */
  ;

  _proto.__gc = function __gc() {
    // Don't run GC while there are optimistic updates applied
    if (this._optimisticSource != null) {
      return;
    }

    var gcRun = this._collect();

    while (!gcRun.next().done) {}
  };

  _proto._collect = function* _collect() {
    /* eslint-disable no-labels */
    top: while (true) {
      var startEpoch = this._currentWriteEpoch;
      var references = new Set(); // Mark all records that are traversable from a root

      var _iterator2 = (0, _createForOfIteratorHelper2["default"])(this._roots.values()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var operation = _step2.value.operation;
          var selector = operation.root;
          RelayReferenceMarker.mark(this._recordSource, selector, references, this._operationLoader, this._shouldProcessClientComponents); // Yield for other work after each operation

          yield; // If the store was updated, restart

          if (startEpoch !== this._currentWriteEpoch) {
            continue top;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var log = this.__log;

      if (log != null) {
        log({
          name: 'store.gc',
          references: references
        });
      } // Sweep records without references


      if (references.size === 0) {
        // Short-circuit if *nothing* is referenced
        this._recordSource.clear();
      } else {
        // Evict any unreferenced nodes
        var storeIDs = this._recordSource.getRecordIDs();

        for (var ii = 0; ii < storeIDs.length; ii++) {
          var dataID = storeIDs[ii];

          if (!references.has(dataID)) {
            this._recordSource.remove(dataID);
          }
        }
      }

      return;
    }
  };

  return RelayModernStore;
}();

function initializeRecordSource(target) {
  if (!target.has(ROOT_ID)) {
    var rootRecord = RelayModernRecord.create(ROOT_ID, ROOT_TYPE);
    target.set(ROOT_ID, rootRecord);
  }
}
/**
 * Updates the target with information from source, also updating a mapping of
 * which records in the target were changed as a result.
 * Additionally, will mark records as invalidated at the current write epoch
 * given the set of record ids marked as stale in this update.
 */


function updateTargetFromSource(target, source, currentWriteEpoch, idsMarkedForInvalidation, updatedRecordIDs, invalidatedRecordIDs) {
  // First, update any records that were marked for invalidation.
  // For each provided dataID that was invalidated, we write the
  // INVALIDATED_AT_KEY on the record, indicating
  // the epoch at which the record was invalidated.
  if (idsMarkedForInvalidation) {
    idsMarkedForInvalidation.forEach(function (dataID) {
      var targetRecord = target.get(dataID);
      var sourceRecord = source.get(dataID); // If record was deleted during the update (and also invalidated),
      // we don't need to count it as an invalidated id

      if (sourceRecord === null) {
        return;
      }

      var nextRecord;

      if (targetRecord != null) {
        // If the target record exists, use it to set the epoch
        // at which it was invalidated. This record will be updated with
        // any changes from source in the section below
        // where we update the target records based on the source.
        nextRecord = RelayModernRecord.clone(targetRecord);
      } else {
        // If the target record doesn't exist, it means that a new record
        // in the source was created (and also invalidated), so we use that
        // record to set the epoch at which it was invalidated. This record
        // will be updated with any changes from source in the section below
        // where we update the target records based on the source.
        nextRecord = sourceRecord != null ? RelayModernRecord.clone(sourceRecord) : null;
      }

      if (!nextRecord) {
        return;
      }

      RelayModernRecord.setValue(nextRecord, RelayStoreUtils.INVALIDATED_AT_KEY, currentWriteEpoch);
      invalidatedRecordIDs.add(dataID); // $FlowFixMe[incompatible-call]

      target.set(dataID, nextRecord);
    });
  } // Update the target based on the changes present in source


  var dataIDs = source.getRecordIDs();

  for (var ii = 0; ii < dataIDs.length; ii++) {
    var dataID = dataIDs[ii];
    var sourceRecord = source.get(dataID);
    var targetRecord = target.get(dataID); // Prevent mutation of a record from outside the store.

    if (process.env.NODE_ENV !== "production") {
      if (sourceRecord) {
        RelayModernRecord.freeze(sourceRecord);
      }
    }

    if (sourceRecord && targetRecord) {
      // ReactFlightClientResponses are lazy and only materialize when readRoot
      // is called when we read the field, so if the record is a Flight field
      // we always use the new record's data regardless of whether
      // it actually changed. Let React take care of reconciliation instead.
      var nextRecord = RelayModernRecord.getType(targetRecord) === RelayStoreReactFlightUtils.REACT_FLIGHT_TYPE_NAME ? sourceRecord : RelayModernRecord.update(targetRecord, sourceRecord);

      if (nextRecord !== targetRecord) {
        // Prevent mutation of a record from outside the store.
        if (process.env.NODE_ENV !== "production") {
          RelayModernRecord.freeze(nextRecord);
        }

        updatedRecordIDs.add(dataID);
        target.set(dataID, nextRecord);
      }
    } else if (sourceRecord === null) {
      target["delete"](dataID);

      if (targetRecord !== null) {
        updatedRecordIDs.add(dataID);
      }
    } else if (sourceRecord) {
      target.set(dataID, sourceRecord);
      updatedRecordIDs.add(dataID);
    } // don't add explicit undefined

  }
}
/**
 * Returns an OperationAvailability given the Availability returned
 * by checking an operation, and when that operation was last written to the store.
 * Specifically, the provided Availability of an operation will contain the
 * value of when a record referenced by the operation was most recently
 * invalidated; given that value, and given when this operation was last
 * written to the store, this function will return the overall
 * OperationAvailability for the operation.
 */


function getAvailabilityStatus(operationAvailability, operationLastWrittenAt, operationFetchTime, queryCacheExpirationTime) {
  var mostRecentlyInvalidatedAt = operationAvailability.mostRecentlyInvalidatedAt,
      status = operationAvailability.status;

  if (typeof mostRecentlyInvalidatedAt === 'number') {
    // If some record referenced by this operation is stale, then the operation itself is stale
    // if either the operation itself was never written *or* the operation was last written
    // before the most recent invalidation of its reachable records.
    if (operationLastWrittenAt == null || mostRecentlyInvalidatedAt > operationLastWrittenAt) {
      return {
        status: 'stale'
      };
    }
  }

  if (status === 'missing') {
    return {
      status: 'missing'
    };
  }

  if (operationFetchTime != null && queryCacheExpirationTime != null) {
    var isStale = operationFetchTime <= Date.now() - queryCacheExpirationTime;

    if (isStale) {
      return {
        status: 'stale'
      };
    }
  } // There were no invalidations of any reachable records *or* the operation is known to have
  // been fetched after the most recent record invalidation.


  return {
    status: 'available',
    fetchTime: operationFetchTime !== null && operationFetchTime !== void 0 ? operationFetchTime : null
  };
}

module.exports = RelayModernStore;