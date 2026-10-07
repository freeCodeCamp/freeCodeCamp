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

const RelayRecordState = require('./RelayRecordState');

import type {DataID} from '../util/RelayRuntimeTypes';
import type {RecordState} from './RelayRecordState';
import type {
  MutableRecordSource,
  Record,
  RecordObjectMap,
} from './RelayStoreTypes';

const {EXISTENT, NONEXISTENT, UNKNOWN} = RelayRecordState;

/**
 * An implementation of the `MutableRecordSource` interface (defined in
 * `RelayStoreTypes`) that holds all records in memory (JS Map).
 */
class RelayRecordSource implements MutableRecordSource {
  _records: Map<DataID, ?Record>;

  constructor(records?: RecordObjectMap) {
    this._records = new Map();
    if (records != null) {
      Object.keys(records).forEach(key => {
        this._records.set(key, records[key]);
      });
    }
  }

  static create(records?: RecordObjectMap): MutableRecordSource {
    return new RelayRecordSource(records);
  }

  clear(): void {
    this._records = new Map();
  }

  delete(dataID: DataID): void {
    this._records.set(dataID, null);
  }

  get(dataID: DataID): ?Record {
    return this._records.get(dataID);
  }

  getRecordIDs(): Array<DataID> {
    return Array.from(this._records.keys());
  }

  getStatus(dataID: DataID): RecordState {
    if (!this._records.has(dataID)) {
      return UNKNOWN;
    }
    return this._records.get(dataID) == null ? NONEXISTENT : EXISTENT;
  }

  has(dataID: DataID): boolean {
    return this._records.has(dataID);
  }

  remove(dataID: DataID): void {
    this._records.delete(dataID);
  }

  set(dataID: DataID, record: Record): void {
    this._records.set(dataID, record);
  }

  size(): number {
    return this._records.size;
  }

  toJSON(): {[DataID]: ?Record, ...} {
    const obj = {};
    for (const [key, value] of this._records) {
      obj[key] = value;
    }
    return obj;
  }
}

module.exports = RelayRecordSource;
