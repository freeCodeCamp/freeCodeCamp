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

var RelayModernRecord = require('./RelayModernRecord');

var recycleNodesInto = require('../util/recycleNodesInto');

var warning = require("fbjs/lib/warning");

var _require = require('./ClientID'),
    generateClientID = _require.generateClientID;

var _require2 = require('./RelayStoreUtils'),
    RELAY_RESOLVER_VALUE_KEY = _require2.RELAY_RESOLVER_VALUE_KEY,
    RELAY_RESOLVER_INVALIDATION_KEY = _require2.RELAY_RESOLVER_INVALIDATION_KEY,
    RELAY_RESOLVER_INPUTS_KEY = _require2.RELAY_RESOLVER_INPUTS_KEY,
    RELAY_RESOLVER_READER_SELECTOR_KEY = _require2.RELAY_RESOLVER_READER_SELECTOR_KEY,
    getStorageKey = _require2.getStorageKey;

// $FlowFixMe[unclear-type] - will always be empty
var emptySet = new Set();

var NoopResolverCache = /*#__PURE__*/function () {
  function NoopResolverCache() {}

  var _proto = NoopResolverCache.prototype;

  _proto.readFromCacheOrEvaluate = function readFromCacheOrEvaluate(record, field, variables, evaluate, getDataForResolverFragment) {
    return [evaluate().resolverResult, undefined];
  };

  _proto.invalidateDataIDs = function invalidateDataIDs(updatedDataIDs) {};

  return NoopResolverCache;
}();

function addDependencyEdge(edges, from, to) {
  var set = edges.get(from);

  if (!set) {
    set = new Set();
    edges.set(from, set);
  }

  set.add(to);
}

var RecordResolverCache = /*#__PURE__*/function () {
  function RecordResolverCache(getRecordSource) {
    this._resolverIDToRecordIDs = new Map();
    this._recordIDToResolverIDs = new Map();
    this._getRecordSource = getRecordSource;
  }

  var _proto2 = RecordResolverCache.prototype;

  _proto2.readFromCacheOrEvaluate = function readFromCacheOrEvaluate(record, field, variables, evaluate, getDataForResolverFragment) {
    var recordSource = this._getRecordSource();

    var recordID = RelayModernRecord.getDataID(record);
    var storageKey = getStorageKey(field, variables);
    var linkedID = RelayModernRecord.getLinkedRecordID(record, storageKey);
    var linkedRecord = linkedID == null ? null : recordSource.get(linkedID);

    if (linkedRecord == null || this._isInvalid(linkedRecord, getDataForResolverFragment)) {
      var _linkedID;

      // Cache miss; evaluate the selector and store the result in a new record:
      linkedID = (_linkedID = linkedID) !== null && _linkedID !== void 0 ? _linkedID : generateClientID(recordID, storageKey);
      linkedRecord = RelayModernRecord.create(linkedID, '__RELAY_RESOLVER__');
      var evaluationResult = evaluate();
      RelayModernRecord.setValue(linkedRecord, RELAY_RESOLVER_VALUE_KEY, evaluationResult.resolverResult);
      RelayModernRecord.setValue(linkedRecord, RELAY_RESOLVER_INPUTS_KEY, evaluationResult.fragmentValue);
      RelayModernRecord.setValue(linkedRecord, RELAY_RESOLVER_READER_SELECTOR_KEY, evaluationResult.readerSelector);
      recordSource.set(linkedID, linkedRecord); // Link the resolver value record to the resolver field of the record being read:

      var nextRecord = RelayModernRecord.clone(record);
      RelayModernRecord.setLinkedRecordID(nextRecord, storageKey, linkedID);
      recordSource.set(RelayModernRecord.getDataID(nextRecord), nextRecord); // Put records observed by the resolver into the dependency graph:

      var resolverID = evaluationResult.resolverID;
      addDependencyEdge(this._resolverIDToRecordIDs, resolverID, linkedID);
      addDependencyEdge(this._recordIDToResolverIDs, recordID, resolverID);

      var _iterator = (0, _createForOfIteratorHelper2["default"])(evaluationResult.seenRecordIDs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var seenRecordID = _step.value;
          addDependencyEdge(this._recordIDToResolverIDs, seenRecordID, resolverID);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // $FlowFixMe[incompatible-type] - will always be empty


    var answer = linkedRecord[RELAY_RESOLVER_VALUE_KEY];
    return [answer, linkedID];
  };

  _proto2.invalidateDataIDs = function invalidateDataIDs(updatedDataIDs) {
    var recordSource = this._getRecordSource();

    var visited = new Set();
    var recordsToVisit = Array.from(updatedDataIDs);

    while (recordsToVisit.length) {
      var recordID = recordsToVisit.pop();
      updatedDataIDs.add(recordID);

      var _iterator2 = (0, _createForOfIteratorHelper2["default"])((_this$_recordIDToReso = this._recordIDToResolverIDs.get(recordID)) !== null && _this$_recordIDToReso !== void 0 ? _this$_recordIDToReso : emptySet),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _this$_recordIDToReso;

          var fragment = _step2.value;

          if (!visited.has(fragment)) {
            var _iterator3 = (0, _createForOfIteratorHelper2["default"])((_this$_resolverIDToRe = this._resolverIDToRecordIDs.get(fragment)) !== null && _this$_resolverIDToRe !== void 0 ? _this$_resolverIDToRe : emptySet),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _this$_resolverIDToRe;

                var anotherRecordID = _step3.value;

                this._markInvalidatedResolverRecord(anotherRecordID, recordSource, updatedDataIDs);

                if (!visited.has(anotherRecordID)) {
                  recordsToVisit.push(anotherRecordID);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  };

  _proto2._markInvalidatedResolverRecord = function _markInvalidatedResolverRecord(dataID, recordSource, // Written to
  updatedDataIDs) // Mutated in place
  {
    var record = recordSource.get(dataID);

    if (!record) {
      process.env.NODE_ENV !== "production" ? warning(false, 'Expected a resolver record with ID %s, but it was missing.', dataID) : void 0;
      return;
    }

    var nextRecord = RelayModernRecord.clone(record);
    RelayModernRecord.setValue(nextRecord, RELAY_RESOLVER_INVALIDATION_KEY, true);
    recordSource.set(dataID, nextRecord);
  };

  _proto2._isInvalid = function _isInvalid(record, getDataForResolverFragment) {
    if (!RelayModernRecord.getValue(record, RELAY_RESOLVER_INVALIDATION_KEY)) {
      return false;
    }

    var originalInputs = RelayModernRecord.getValue(record, RELAY_RESOLVER_INPUTS_KEY); // $FlowFixMe[incompatible-type] - storing values in records is not typed

    var readerSelector = RelayModernRecord.getValue(record, RELAY_RESOLVER_READER_SELECTOR_KEY);

    if (originalInputs == null || readerSelector == null) {
      process.env.NODE_ENV !== "production" ? warning(false, 'Expected previous inputs and reader selector on resolver record with ID %s, but they were missing.', RelayModernRecord.getDataID(record)) : void 0;
      return true;
    }

    var latestValues = getDataForResolverFragment(readerSelector);
    var recycled = recycleNodesInto(originalInputs, latestValues);

    if (recycled !== originalInputs) {
      return true;
    }

    return false;
  };

  return RecordResolverCache;
}();

module.exports = {
  NoopResolverCache: NoopResolverCache,
  RecordResolverCache: RecordResolverCache
};