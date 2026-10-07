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

var invariant = require('invariant');

var RelayOperationTracker = /*#__PURE__*/function () {
  function RelayOperationTracker() {
    this._ownersToPendingOperations = new Map();
    this._pendingOperationsToOwners = new Map();
    this._ownersToPendingPromise = new Map();
  }
  /**
   * Update the map of current processing operations with the set of
   * affected owners and notify subscribers
   */


  var _proto = RelayOperationTracker.prototype;

  _proto.update = function update(pendingOperation, affectedOwners) {
    if (affectedOwners.size === 0) {
      return;
    }

    var pendingOperationIdentifier = pendingOperation.identifier;
    var newlyAffectedOwnersIdentifier = new Set();

    var _iterator = (0, _createForOfIteratorHelper2["default"])(affectedOwners),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var owner = _step.value;
        var ownerIdentifier = owner.identifier;

        var pendingOperationsAffectingOwner = this._ownersToPendingOperations.get(ownerIdentifier);

        if (pendingOperationsAffectingOwner != null) {
          // In this case the `ownerIdentifier` already affected by some operations
          // We just need to detect, is it the same operation that we already
          // have in the list, or it's a new operation
          if (!pendingOperationsAffectingOwner.has(pendingOperationIdentifier)) {
            pendingOperationsAffectingOwner.set(pendingOperationIdentifier, pendingOperation);
            newlyAffectedOwnersIdentifier.add(ownerIdentifier);
          }
        } else {
          // This is a new `ownerIdentifier` that is affected by the operation
          this._ownersToPendingOperations.set(ownerIdentifier, new Map([[pendingOperationIdentifier, pendingOperation]]));

          newlyAffectedOwnersIdentifier.add(ownerIdentifier);
        }
      } // No new owners were affected by this operation, we may stop here

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (newlyAffectedOwnersIdentifier.size === 0) {
      return;
    } // But, if some owners were affected we need to add them to
    // the `_pendingOperationsToOwners` set


    var ownersAffectedByPendingOperation = this._pendingOperationsToOwners.get(pendingOperationIdentifier) || new Set();

    var _iterator2 = (0, _createForOfIteratorHelper2["default"])(newlyAffectedOwnersIdentifier),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _ownerIdentifier = _step2.value;

        this._resolveOwnerResolvers(_ownerIdentifier);

        ownersAffectedByPendingOperation.add(_ownerIdentifier);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    this._pendingOperationsToOwners.set(pendingOperationIdentifier, ownersAffectedByPendingOperation);
  }
  /**
   * Once pending operation is completed we need to remove it
   * from all tracking maps
   */
  ;

  _proto.complete = function complete(pendingOperation) {
    var pendingOperationIdentifier = pendingOperation.identifier;

    var affectedOwnersIdentifier = this._pendingOperationsToOwners.get(pendingOperationIdentifier);

    if (affectedOwnersIdentifier == null) {
      return;
    } // These were the owners affected only by `pendingOperationIdentifier`


    var completedOwnersIdentifier = new Set(); // These were the owners affected by `pendingOperationIdentifier`
    // and some other operations

    var updatedOwnersIdentifier = new Set();

    var _iterator3 = (0, _createForOfIteratorHelper2["default"])(affectedOwnersIdentifier),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var ownerIdentifier = _step3.value;

        var pendingOperationsAffectingOwner = this._ownersToPendingOperations.get(ownerIdentifier);

        if (!pendingOperationsAffectingOwner) {
          continue;
        }

        pendingOperationsAffectingOwner["delete"](pendingOperationIdentifier);

        if (pendingOperationsAffectingOwner.size > 0) {
          updatedOwnersIdentifier.add(ownerIdentifier);
        } else {
          completedOwnersIdentifier.add(ownerIdentifier);
        }
      } // Complete subscriptions for all owners, affected by `pendingOperationIdentifier`

    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var _iterator4 = (0, _createForOfIteratorHelper2["default"])(completedOwnersIdentifier),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _ownerIdentifier2 = _step4.value;

        this._resolveOwnerResolvers(_ownerIdentifier2);

        this._ownersToPendingOperations["delete"](_ownerIdentifier2);
      } // Update all ownerIdentifier that were updated by `pendingOperationIdentifier` but still
      // are affected by other operations

    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    var _iterator5 = (0, _createForOfIteratorHelper2["default"])(updatedOwnersIdentifier),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _ownerIdentifier3 = _step5.value;

        this._resolveOwnerResolvers(_ownerIdentifier3);
      } // Finally, remove pending operation identifier

    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    this._pendingOperationsToOwners["delete"](pendingOperationIdentifier);
  };

  _proto._resolveOwnerResolvers = function _resolveOwnerResolvers(ownerIdentifier) {
    var promiseEntry = this._ownersToPendingPromise.get(ownerIdentifier);

    if (promiseEntry != null) {
      promiseEntry.resolve();
    }

    this._ownersToPendingPromise["delete"](ownerIdentifier);
  };

  _proto.getPendingOperationsAffectingOwner = function getPendingOperationsAffectingOwner(owner) {
    var ownerIdentifier = owner.identifier;

    var pendingOperationsForOwner = this._ownersToPendingOperations.get(ownerIdentifier);

    if (pendingOperationsForOwner == null || pendingOperationsForOwner.size === 0) {
      return null;
    }

    var cachedPromiseEntry = this._ownersToPendingPromise.get(ownerIdentifier);

    if (cachedPromiseEntry != null) {
      return {
        promise: cachedPromiseEntry.promise,
        pendingOperations: cachedPromiseEntry.pendingOperations
      };
    }

    var resolve;
    var promise = new Promise(function (r) {
      resolve = r;
    });
    !(resolve != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayOperationTracker: Expected resolver to be defined. If you' + 'are seeing this, it is likely a bug in Relay.') : invariant(false) : void 0;
    var pendingOperations = Array.from(pendingOperationsForOwner.values());

    this._ownersToPendingPromise.set(ownerIdentifier, {
      promise: promise,
      resolve: resolve,
      pendingOperations: pendingOperations
    });

    return {
      promise: promise,
      pendingOperations: pendingOperations
    };
  };

  return RelayOperationTracker;
}();

module.exports = RelayOperationTracker;