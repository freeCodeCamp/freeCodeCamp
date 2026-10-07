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

const RelayModernRecord = require('../store/RelayModernRecord');

const invariant = require('invariant');

const {EXISTENT} = require('../store/RelayRecordState');

import type {RecordState} from '../store/RelayRecordState';
import type {
  MutableRecordSource,
  Record,
  RecordSource,
} from '../store/RelayStoreTypes';
import type {DataID} from '../util/RelayRuntimeTypes';

/**
 * @internal
 *
 * Wrapper API that is an amalgam of the `RelayModernRecord` API and
 * `MutableRecordSource` interface, implementing copy-on-write semantics for records
 * in a record source.
 *
 * Modifications are applied to fresh copies of records:
 * - Records in `base` are never modified.
 * - Modifications cause a fresh version of a record to be created in `sink`.
 *   These sink records contain only modified fields.
 */
class RelayRecordSourceMutator {
  __sources: Array<RecordSource>;
  _base: RecordSource;
  _sink: MutableRecordSource;

  constructor(base: RecordSource, sink: MutableRecordSource) {
    this.__sources = [sink, base];
    this._base = base;
    this._sink = sink;
  }

  /**
   * **UNSTABLE**
   * This method is likely to be removed in an upcoming release
   * and should not be relied upon.
   * TODO T41593196: Remove unstable_getRawRecordWithChanges
   */
  unstable_getRawRecordWithChanges(dataID: DataID): ?Record {
    const baseRecord = this._base.get(dataID);
    const sinkRecord = this._sink.get(dataID);
    if (sinkRecord === undefined) {
      if (baseRecord == null) {
        return baseRecord;
      }
      const nextRecord = RelayModernRecord.clone(baseRecord);
      if (__DEV__) {
        // Prevent mutation of a record from outside the store.
        RelayModernRecord.freeze(nextRecord);
      }
      return nextRecord;
    } else if (sinkRecord === null) {
      return null;
    } else if (baseRecord != null) {
      const nextRecord = RelayModernRecord.update(baseRecord, sinkRecord);
      if (__DEV__) {
        if (nextRecord !== baseRecord) {
          // Prevent mutation of a record from outside the store.
          RelayModernRecord.freeze(nextRecord);
        }
      }
      return nextRecord;
    } else {
      const nextRecord = RelayModernRecord.clone(sinkRecord);
      if (__DEV__) {
        // Prevent mutation of a record from outside the store.
        RelayModernRecord.freeze(nextRecord);
      }
      return nextRecord;
    }
  }

  _getSinkRecord(dataID: DataID): Record {
    let sinkRecord = this._sink.get(dataID);
    if (!sinkRecord) {
      const baseRecord = this._base.get(dataID);
      invariant(
        baseRecord,
        'RelayRecordSourceMutator: Cannot modify non-existent record `%s`.',
        dataID,
      );
      sinkRecord = RelayModernRecord.create(
        dataID,
        RelayModernRecord.getType(baseRecord),
      );
      this._sink.set(dataID, sinkRecord);
    }
    return sinkRecord;
  }

  copyFields(sourceID: DataID, sinkID: DataID): void {
    const sinkSource = this._sink.get(sourceID);
    const baseSource = this._base.get(sourceID);
    invariant(
      sinkSource || baseSource,
      'RelayRecordSourceMutator#copyFields(): Cannot copy fields from ' +
        'non-existent record `%s`.',
      sourceID,
    );
    const sink = this._getSinkRecord(sinkID);
    if (baseSource) {
      RelayModernRecord.copyFields(baseSource, sink);
    }
    if (sinkSource) {
      RelayModernRecord.copyFields(sinkSource, sink);
    }
  }

  copyFieldsFromRecord(record: Record, sinkID: DataID): void {
    const sink = this._getSinkRecord(sinkID);
    RelayModernRecord.copyFields(record, sink);
  }

  create(dataID: DataID, typeName: string): void {
    invariant(
      this._base.getStatus(dataID) !== EXISTENT &&
        this._sink.getStatus(dataID) !== EXISTENT,
      'RelayRecordSourceMutator#create(): Cannot create a record with id ' +
        '`%s`, this record already exists.',
      dataID,
    );
    const record = RelayModernRecord.create(dataID, typeName);
    this._sink.set(dataID, record);
  }

  delete(dataID: DataID): void {
    this._sink.delete(dataID);
  }

  getStatus(dataID: DataID): RecordState {
    return this._sink.has(dataID)
      ? this._sink.getStatus(dataID)
      : this._base.getStatus(dataID);
  }

  getType(dataID: DataID): ?string {
    for (let ii = 0; ii < this.__sources.length; ii++) {
      const record = this.__sources[ii].get(dataID);
      if (record) {
        return RelayModernRecord.getType(record);
      } else if (record === null) {
        return null;
      }
    }
  }

  getValue(dataID: DataID, storageKey: string): mixed {
    for (let ii = 0; ii < this.__sources.length; ii++) {
      const record = this.__sources[ii].get(dataID);
      if (record) {
        const value = RelayModernRecord.getValue(record, storageKey);
        if (value !== undefined) {
          return value;
        }
      } else if (record === null) {
        return null;
      }
    }
  }

  setValue(dataID: DataID, storageKey: string, value: mixed): void {
    const sinkRecord = this._getSinkRecord(dataID);
    RelayModernRecord.setValue(sinkRecord, storageKey, value);
  }

  getLinkedRecordID(dataID: DataID, storageKey: string): ?DataID {
    for (let ii = 0; ii < this.__sources.length; ii++) {
      const record = this.__sources[ii].get(dataID);
      if (record) {
        const linkedID = RelayModernRecord.getLinkedRecordID(
          record,
          storageKey,
        );
        if (linkedID !== undefined) {
          return linkedID;
        }
      } else if (record === null) {
        return null;
      }
    }
  }

  setLinkedRecordID(
    dataID: DataID,
    storageKey: string,
    linkedID: DataID,
  ): void {
    const sinkRecord = this._getSinkRecord(dataID);
    RelayModernRecord.setLinkedRecordID(sinkRecord, storageKey, linkedID);
  }

  getLinkedRecordIDs(dataID: DataID, storageKey: string): ?Array<?DataID> {
    for (let ii = 0; ii < this.__sources.length; ii++) {
      const record = this.__sources[ii].get(dataID);
      if (record) {
        const linkedIDs = RelayModernRecord.getLinkedRecordIDs(
          record,
          storageKey,
        );
        if (linkedIDs !== undefined) {
          return linkedIDs;
        }
      } else if (record === null) {
        return null;
      }
    }
  }

  setLinkedRecordIDs(
    dataID: DataID,
    storageKey: string,
    linkedIDs: Array<?DataID>,
  ): void {
    const sinkRecord = this._getSinkRecord(dataID);
    RelayModernRecord.setLinkedRecordIDs(sinkRecord, storageKey, linkedIDs);
  }
}

module.exports = RelayRecordSourceMutator;
