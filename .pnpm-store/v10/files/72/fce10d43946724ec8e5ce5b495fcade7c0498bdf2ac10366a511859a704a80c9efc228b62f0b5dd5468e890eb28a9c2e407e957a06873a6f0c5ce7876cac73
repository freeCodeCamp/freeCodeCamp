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

const RelayModernRecord = require('./RelayModernRecord');

const recycleNodesInto = require('../util/recycleNodesInto');
const warning = require('warning');

const {generateClientID} = require('./ClientID');
const {
  RELAY_RESOLVER_VALUE_KEY,
  RELAY_RESOLVER_INVALIDATION_KEY,
  RELAY_RESOLVER_INPUTS_KEY,
  RELAY_RESOLVER_READER_SELECTOR_KEY,
  getStorageKey,
} = require('./RelayStoreUtils');

import type {ReaderRelayResolver} from '../util/ReaderNode';
import type {DataID, Variables} from '../util/RelayRuntimeTypes';
import type {
  MutableRecordSource,
  Record,
  SingularReaderSelector,
} from './RelayStoreTypes';

type ResolverID = string;

type EvaluationResult<T> = {|
  resolverResult: T,
  fragmentValue: {...},
  resolverID: ResolverID,
  seenRecordIDs: Set<DataID>,
  readerSelector: SingularReaderSelector,
|};

export interface ResolverCache {
  readFromCacheOrEvaluate<T>(
    record: Record,
    field: ReaderRelayResolver,
    variables: Variables,
    evaluate: () => EvaluationResult<T>,
    getDataForResolverFragment: (SingularReaderSelector) => mixed,
  ): [T /* Answer */, ?DataID /* Seen record */];
  invalidateDataIDs(
    updatedDataIDs: Set<DataID>, // Mutated in place
  ): void;
}

// $FlowFixMe[unclear-type] - will always be empty
const emptySet: $ReadOnlySet<any> = new Set();

class NoopResolverCache implements ResolverCache {
  readFromCacheOrEvaluate<T>(
    record: Record,
    field: ReaderRelayResolver,
    variables: Variables,
    evaluate: () => EvaluationResult<T>,
    getDataForResolverFragment: SingularReaderSelector => mixed,
  ): [T /* Answer */, ?DataID /* Seen record */] {
    return [evaluate().resolverResult, undefined];
  }
  invalidateDataIDs(updatedDataIDs: Set<DataID>): void {}
}

function addDependencyEdge(edges, from, to): void {
  let set = edges.get(from);
  if (!set) {
    set = new Set();
    edges.set(from, set);
  }
  set.add(to);
}

class RecordResolverCache implements ResolverCache {
  _resolverIDToRecordIDs: Map<ResolverID, Set<DataID>>;
  _recordIDToResolverIDs: Map<DataID, Set<ResolverID>>;

  _getRecordSource: () => MutableRecordSource;

  constructor(getRecordSource: () => MutableRecordSource) {
    this._resolverIDToRecordIDs = new Map();
    this._recordIDToResolverIDs = new Map();
    this._getRecordSource = getRecordSource;
  }

  readFromCacheOrEvaluate<T>(
    record: Record,
    field: ReaderRelayResolver,
    variables: Variables,
    evaluate: () => EvaluationResult<T>,
    getDataForResolverFragment: SingularReaderSelector => mixed,
  ): [T /* Answer */, ?DataID /* Seen record */] {
    const recordSource = this._getRecordSource();
    const recordID = RelayModernRecord.getDataID(record);

    const storageKey = getStorageKey(field, variables);
    let linkedID = RelayModernRecord.getLinkedRecordID(record, storageKey);
    let linkedRecord = linkedID == null ? null : recordSource.get(linkedID);
    if (
      linkedRecord == null ||
      this._isInvalid(linkedRecord, getDataForResolverFragment)
    ) {
      // Cache miss; evaluate the selector and store the result in a new record:
      linkedID = linkedID ?? generateClientID(recordID, storageKey);
      linkedRecord = RelayModernRecord.create(linkedID, '__RELAY_RESOLVER__');

      const evaluationResult = evaluate();
      RelayModernRecord.setValue(
        linkedRecord,
        RELAY_RESOLVER_VALUE_KEY,
        evaluationResult.resolverResult,
      );
      RelayModernRecord.setValue(
        linkedRecord,
        RELAY_RESOLVER_INPUTS_KEY,
        evaluationResult.fragmentValue,
      );
      RelayModernRecord.setValue(
        linkedRecord,
        RELAY_RESOLVER_READER_SELECTOR_KEY,
        evaluationResult.readerSelector,
      );
      recordSource.set(linkedID, linkedRecord);

      // Link the resolver value record to the resolver field of the record being read:
      const nextRecord = RelayModernRecord.clone(record);
      RelayModernRecord.setLinkedRecordID(nextRecord, storageKey, linkedID);
      recordSource.set(RelayModernRecord.getDataID(nextRecord), nextRecord);

      // Put records observed by the resolver into the dependency graph:
      const resolverID = evaluationResult.resolverID;
      addDependencyEdge(this._resolverIDToRecordIDs, resolverID, linkedID);
      addDependencyEdge(this._recordIDToResolverIDs, recordID, resolverID);
      for (const seenRecordID of evaluationResult.seenRecordIDs) {
        addDependencyEdge(
          this._recordIDToResolverIDs,
          seenRecordID,
          resolverID,
        );
      }
    }

    // $FlowFixMe[incompatible-type] - will always be empty
    const answer: T = linkedRecord[RELAY_RESOLVER_VALUE_KEY];
    return [answer, linkedID];
  }

  invalidateDataIDs(
    updatedDataIDs: Set<DataID>, // Mutated in place
  ): void {
    const recordSource = this._getRecordSource();
    const visited: Set<string> = new Set();
    const recordsToVisit = Array.from(updatedDataIDs);
    while (recordsToVisit.length) {
      const recordID = recordsToVisit.pop();
      updatedDataIDs.add(recordID);
      for (const fragment of this._recordIDToResolverIDs.get(recordID) ??
        emptySet) {
        if (!visited.has(fragment)) {
          for (const anotherRecordID of this._resolverIDToRecordIDs.get(
            fragment,
          ) ?? emptySet) {
            this._markInvalidatedResolverRecord(
              anotherRecordID,
              recordSource,
              updatedDataIDs,
            );
            if (!visited.has(anotherRecordID)) {
              recordsToVisit.push(anotherRecordID);
            }
          }
        }
      }
    }
  }

  _markInvalidatedResolverRecord(
    dataID: DataID,
    recordSource: MutableRecordSource, // Written to
    updatedDataIDs: Set<DataID>, // Mutated in place
  ) {
    const record = recordSource.get(dataID);
    if (!record) {
      warning(
        false,
        'Expected a resolver record with ID %s, but it was missing.',
        dataID,
      );
      return;
    }
    const nextRecord = RelayModernRecord.clone(record);
    RelayModernRecord.setValue(
      nextRecord,
      RELAY_RESOLVER_INVALIDATION_KEY,
      true,
    );
    recordSource.set(dataID, nextRecord);
  }

  _isInvalid(
    record: Record,
    getDataForResolverFragment: SingularReaderSelector => mixed,
  ): boolean {
    if (!RelayModernRecord.getValue(record, RELAY_RESOLVER_INVALIDATION_KEY)) {
      return false;
    }
    const originalInputs = RelayModernRecord.getValue(
      record,
      RELAY_RESOLVER_INPUTS_KEY,
    );
    // $FlowFixMe[incompatible-type] - storing values in records is not typed
    const readerSelector: ?SingularReaderSelector = RelayModernRecord.getValue(
      record,
      RELAY_RESOLVER_READER_SELECTOR_KEY,
    );
    if (originalInputs == null || readerSelector == null) {
      warning(
        false,
        'Expected previous inputs and reader selector on resolver record with ID %s, but they were missing.',
        RelayModernRecord.getDataID(record),
      );
      return true;
    }
    const latestValues = getDataForResolverFragment(readerSelector);
    const recycled = recycleNodesInto(originalInputs, latestValues);
    if (recycled !== originalInputs) {
      return true;
    }
    return false;
  }
}

module.exports = {
  NoopResolverCache,
  RecordResolverCache,
};
