/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const areEqual = require('areEqual');
const deepFreeze = require('../util/deepFreeze');
const invariant = require('invariant');
const warning = require('warning');

const {isClientID} = require('./ClientID');
const {
  ACTOR_IDENTIFIER_KEY,
  ID_KEY,
  REF_KEY,
  REFS_KEY,
  TYPENAME_KEY,
  INVALIDATED_AT_KEY,
  ROOT_ID,
} = require('./RelayStoreUtils');

import type {ActorIdentifier} from '../multi-actor-environment/ActorIdentifier';
import type {DataID} from '../util/RelayRuntimeTypes';
import type {Record} from './RelayStoreTypes';

/**
 * @public
 *
 * Low-level record manipulation methods.
 *
 * A note about perf: we use long-hand property access rather than computed
 * properties in this file for speed ie.
 *
 *    const object = {};
 *    object[KEY] = value;
 *    record[storageKey] = object;
 *
 * instead of:
 *
 *    record[storageKey] = {
 *      [KEY]: value,
 *    };
 *
 * The latter gets transformed by Babel into something like:
 *
 *    function _defineProperty(obj, key, value) {
 *      if (key in obj) {
 *        Object.defineProperty(obj, key, {
 *          value: value,
 *          enumerable: true,
 *          configurable: true,
 *          writable: true,
 *        });
 *      } else {
 *        obj[key] = value;
 *      }
 *      return obj;
 *    }
 *
 *    record[storageKey] = _defineProperty({}, KEY, value);
 *
 * A quick benchmark shows that computed property access is an order of
 * magnitude slower (times in seconds for 100,000 iterations):
 *
 *               best     avg     sd
 *    computed 0.02175 0.02292 0.00113
 *      manual 0.00110 0.00123 0.00008
 */

/**
 * @public
 *
 * Clone a record.
 */
function clone(record: Record): Record {
  return {
    ...record,
  };
}

/**
 * @public
 *
 * Copies all fields from `source` to `sink`, excluding `__id` and `__typename`.
 *
 * NOTE: This function does not treat `id` specially. To preserve the id,
 * manually reset it after calling this function. Also note that values are
 * copied by reference and not value; callers should ensure that values are
 * copied on write.
 */
function copyFields(source: Record, sink: Record): void {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (key !== ID_KEY && key !== TYPENAME_KEY) {
        sink[key] = source[key];
      }
    }
  }
}

/**
 * @public
 *
 * Create a new record.
 */
function create(dataID: DataID, typeName: string): Record {
  // See perf note above for why we aren't using computed property access.
  const record = {};
  record[ID_KEY] = dataID;
  record[TYPENAME_KEY] = typeName;
  return record;
}

/**
 * @public
 *
 * Get the record's `id` if available or the client-generated identifier.
 */
function getDataID(record: Record): DataID {
  return (record[ID_KEY]: any);
}

/**
 * @public
 *
 * Get the concrete type of the record.
 */
function getType(record: Record): string {
  return (record[TYPENAME_KEY]: any);
}

/**
 * @public
 *
 * Get a scalar (non-link) field value.
 */
function getValue(record: Record, storageKey: string): mixed {
  const value = record[storageKey];
  if (value && typeof value === 'object') {
    invariant(
      !value.hasOwnProperty(REF_KEY) && !value.hasOwnProperty(REFS_KEY),
      'RelayModernRecord.getValue(): Expected a scalar (non-link) value for `%s.%s` ' +
        'but found %s.',
      record[ID_KEY],
      storageKey,
      value.hasOwnProperty(REF_KEY)
        ? 'a linked record'
        : 'plural linked records',
    );
  }
  return value;
}

/**
 * @public
 *
 * Get the value of a field as a reference to another record. Throws if the
 * field has a different type.
 */
function getLinkedRecordID(record: Record, storageKey: string): ?DataID {
  const link = record[storageKey];
  if (link == null) {
    return link;
  }
  invariant(
    typeof link === 'object' && link && typeof link[REF_KEY] === 'string',
    'RelayModernRecord.getLinkedRecordID(): Expected `%s.%s` to be a linked ID, ' +
      'was `%s`.',
    record[ID_KEY],
    storageKey,
    JSON.stringify(link),
  );
  return link[REF_KEY];
}

/**
 * @public
 *
 * Get the value of a field as a list of references to other records. Throws if
 * the field has a different type.
 */
function getLinkedRecordIDs(
  record: Record,
  storageKey: string,
): ?Array<?DataID> {
  const links = record[storageKey];
  if (links == null) {
    return links;
  }
  invariant(
    typeof links === 'object' && Array.isArray(links[REFS_KEY]),
    'RelayModernRecord.getLinkedRecordIDs(): Expected `%s.%s` to contain an array ' +
      'of linked IDs, got `%s`.',
    record[ID_KEY],
    storageKey,
    JSON.stringify(links),
  );
  // assume items of the array are ids
  return (links[REFS_KEY]: any);
}

/**
 * @public
 *
 * Returns the epoch at which the record was invalidated, if it
 * ever was; otherwise returns null;
 */
function getInvalidationEpoch(record: ?Record): ?number {
  if (record == null) {
    return null;
  }

  const invalidatedAt = record[INVALIDATED_AT_KEY];
  if (typeof invalidatedAt !== 'number') {
    // If the record has never been invalidated, it isn't stale.
    return null;
  }
  return invalidatedAt;
}

/**
 * @public
 *
 * Compares the fields of a previous and new record, returning either the
 * previous record if all fields are equal or a new record (with merged fields)
 * if any fields have changed.
 */
function update(prevRecord: Record, nextRecord: Record): Record {
  if (__DEV__) {
    const prevID = getDataID(prevRecord);
    const nextID = getDataID(nextRecord);
    warning(
      prevID === nextID,
      'RelayModernRecord: Invalid record update, expected both versions of ' +
        'the record to have the same id, got `%s` and `%s`.',
      prevID,
      nextID,
    );
    // note: coalesce null/undefined to null
    const prevType = getType(prevRecord) ?? null;
    const nextType = getType(nextRecord) ?? null;
    warning(
      (isClientID(nextID) && nextID !== ROOT_ID) || prevType === nextType,
      'RelayModernRecord: Invalid record update, expected both versions of ' +
        'record `%s` to have the same `%s` but got conflicting types `%s` ' +
        'and `%s`. The GraphQL server likely violated the globally unique ' +
        'id requirement by returning the same id for different objects.',
      prevID,
      TYPENAME_KEY,
      prevType,
      nextType,
    );
  }
  let updated: Record | null = null;
  const keys = Object.keys(nextRecord);
  for (let ii = 0; ii < keys.length; ii++) {
    const key = keys[ii];
    if (updated || !areEqual(prevRecord[key], nextRecord[key])) {
      updated = updated !== null ? updated : {...prevRecord};
      updated[key] = nextRecord[key];
    }
  }
  return updated !== null ? updated : prevRecord;
}

/**
 * @public
 *
 * Returns a new record with the contents of the given records. Fields in the
 * second record will overwrite identical fields in the first record.
 */
function merge(record1: Record, record2: Record): Record {
  if (__DEV__) {
    const prevID = getDataID(record1);
    const nextID = getDataID(record2);
    warning(
      prevID === nextID,
      'RelayModernRecord: Invalid record merge, expected both versions of ' +
        'the record to have the same id, got `%s` and `%s`.',
      prevID,
      nextID,
    );
    // note: coalesce null/undefined to null
    const prevType = getType(record1) ?? null;
    const nextType = getType(record2) ?? null;
    warning(
      (isClientID(nextID) && nextID !== ROOT_ID) || prevType === nextType,
      'RelayModernRecord: Invalid record merge, expected both versions of ' +
        'record `%s` to have the same `%s` but got conflicting types `%s` ' +
        'and `%s`. The GraphQL server likely violated the globally unique ' +
        'id requirement by returning the same id for different objects.',
      prevID,
      TYPENAME_KEY,
      prevType,
      nextType,
    );
  }
  return Object.assign({}, record1, record2);
}

/**
 * @public
 *
 * Prevent modifications to the record. Attempts to call `set*` functions on a
 * frozen record will fatal at runtime.
 */
function freeze(record: Record): void {
  deepFreeze(record);
}

/**
 * @public
 *
 * Set the value of a storageKey to a scalar.
 */
function setValue(record: Record, storageKey: string, value: mixed): void {
  if (__DEV__) {
    const prevID = getDataID(record);
    if (storageKey === ID_KEY) {
      warning(
        prevID === value,
        'RelayModernRecord: Invalid field update, expected both versions of ' +
          'the record to have the same id, got `%s` and `%s`.',
        prevID,
        value,
      );
    } else if (storageKey === TYPENAME_KEY) {
      // note: coalesce null/undefined to null
      const prevType = getType(record) ?? null;
      const nextType = value ?? null;
      warning(
        (isClientID(getDataID(record)) && getDataID(record) !== ROOT_ID) ||
          prevType === nextType,
        'RelayModernRecord: Invalid field update, expected both versions of ' +
          'record `%s` to have the same `%s` but got conflicting types `%s` ' +
          'and `%s`. The GraphQL server likely violated the globally unique ' +
          'id requirement by returning the same id for different objects.',
        prevID,
        TYPENAME_KEY,
        prevType,
        nextType,
      );
    }
  }
  record[storageKey] = value;
}

/**
 * @public
 *
 * Set the value of a field to a reference to another record.
 */
function setLinkedRecordID(
  record: Record,
  storageKey: string,
  linkedID: DataID,
): void {
  // See perf note above for why we aren't using computed property access.
  const link = {};
  link[REF_KEY] = linkedID;
  record[storageKey] = link;
}

/**
 * @public
 *
 * Set the value of a field to a list of references other records.
 */
function setLinkedRecordIDs(
  record: Record,
  storageKey: string,
  linkedIDs: Array<?DataID>,
): void {
  // See perf note above for why we aren't using computed property access.
  const links = {};
  links[REFS_KEY] = linkedIDs;
  record[storageKey] = links;
}

/**
 * @public
 *
 * Set the value of a field to a reference to another record in the actor specific store.
 */
function setActorLinkedRecordID(
  record: Record,
  storageKey: string,
  actorIdentifier: ActorIdentifier,
  linkedID: DataID,
): void {
  // See perf note above for why we aren't using computed property access.
  const link = {};
  link[REF_KEY] = linkedID;
  link[ACTOR_IDENTIFIER_KEY] = actorIdentifier;
  record[storageKey] = link;
}

/**
 * @public
 *
 * Get link to a record and the actor identifier for the store.
 */
function getActorLinkedRecordID(
  record: Record,
  storageKey: string,
): ?[ActorIdentifier, DataID] {
  const link = record[storageKey];
  if (link == null) {
    return link;
  }
  invariant(
    typeof link === 'object' &&
      typeof link[REF_KEY] === 'string' &&
      link[ACTOR_IDENTIFIER_KEY] != null,
    'RelayModernRecord.getActorLinkedRecordID(): Expected `%s.%s` to be an actor specific linked ID, ' +
      'was `%s`.',
    record[ID_KEY],
    storageKey,
    JSON.stringify(link),
  );

  return [(link[ACTOR_IDENTIFIER_KEY]: any), (link[REF_KEY]: any)];
}

module.exports = {
  clone,
  copyFields,
  create,
  freeze,
  getDataID,
  getInvalidationEpoch,
  getLinkedRecordID,
  getLinkedRecordIDs,
  getType,
  getValue,
  merge,
  setValue,
  setLinkedRecordID,
  setLinkedRecordIDs,
  update,
  getActorLinkedRecordID,
  setActorLinkedRecordID,
};
