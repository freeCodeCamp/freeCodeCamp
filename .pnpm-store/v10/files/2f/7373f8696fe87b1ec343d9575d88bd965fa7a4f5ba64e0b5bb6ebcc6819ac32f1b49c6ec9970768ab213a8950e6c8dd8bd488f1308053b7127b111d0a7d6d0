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

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var areEqual = require("fbjs/lib/areEqual");

var deepFreeze = require('../util/deepFreeze');

var invariant = require('invariant');

var warning = require("fbjs/lib/warning");

var _require = require('./ClientID'),
    isClientID = _require.isClientID;

var _require2 = require('./RelayStoreUtils'),
    ACTOR_IDENTIFIER_KEY = _require2.ACTOR_IDENTIFIER_KEY,
    ID_KEY = _require2.ID_KEY,
    REF_KEY = _require2.REF_KEY,
    REFS_KEY = _require2.REFS_KEY,
    TYPENAME_KEY = _require2.TYPENAME_KEY,
    INVALIDATED_AT_KEY = _require2.INVALIDATED_AT_KEY,
    ROOT_ID = _require2.ROOT_ID;

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
function clone(record) {
  return (0, _objectSpread2["default"])({}, record);
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


function copyFields(source, sink) {
  for (var key in source) {
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


function create(dataID, typeName) {
  // See perf note above for why we aren't using computed property access.
  var record = {};
  record[ID_KEY] = dataID;
  record[TYPENAME_KEY] = typeName;
  return record;
}
/**
 * @public
 *
 * Get the record's `id` if available or the client-generated identifier.
 */


function getDataID(record) {
  return record[ID_KEY];
}
/**
 * @public
 *
 * Get the concrete type of the record.
 */


function getType(record) {
  return record[TYPENAME_KEY];
}
/**
 * @public
 *
 * Get a scalar (non-link) field value.
 */


function getValue(record, storageKey) {
  var value = record[storageKey];

  if (value && typeof value === 'object') {
    !(!value.hasOwnProperty(REF_KEY) && !value.hasOwnProperty(REFS_KEY)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernRecord.getValue(): Expected a scalar (non-link) value for `%s.%s` ' + 'but found %s.', record[ID_KEY], storageKey, value.hasOwnProperty(REF_KEY) ? 'a linked record' : 'plural linked records') : invariant(false) : void 0;
  }

  return value;
}
/**
 * @public
 *
 * Get the value of a field as a reference to another record. Throws if the
 * field has a different type.
 */


function getLinkedRecordID(record, storageKey) {
  var link = record[storageKey];

  if (link == null) {
    return link;
  }

  !(typeof link === 'object' && link && typeof link[REF_KEY] === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernRecord.getLinkedRecordID(): Expected `%s.%s` to be a linked ID, ' + 'was `%s`.', record[ID_KEY], storageKey, JSON.stringify(link)) : invariant(false) : void 0;
  return link[REF_KEY];
}
/**
 * @public
 *
 * Get the value of a field as a list of references to other records. Throws if
 * the field has a different type.
 */


function getLinkedRecordIDs(record, storageKey) {
  var links = record[storageKey];

  if (links == null) {
    return links;
  }

  !(typeof links === 'object' && Array.isArray(links[REFS_KEY])) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernRecord.getLinkedRecordIDs(): Expected `%s.%s` to contain an array ' + 'of linked IDs, got `%s`.', record[ID_KEY], storageKey, JSON.stringify(links)) : invariant(false) : void 0; // assume items of the array are ids

  return links[REFS_KEY];
}
/**
 * @public
 *
 * Returns the epoch at which the record was invalidated, if it
 * ever was; otherwise returns null;
 */


function getInvalidationEpoch(record) {
  if (record == null) {
    return null;
  }

  var invalidatedAt = record[INVALIDATED_AT_KEY];

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


function update(prevRecord, nextRecord) {
  if (process.env.NODE_ENV !== "production") {
    var _getType, _getType2;

    var prevID = getDataID(prevRecord);
    var nextID = getDataID(nextRecord);
    process.env.NODE_ENV !== "production" ? warning(prevID === nextID, 'RelayModernRecord: Invalid record update, expected both versions of ' + 'the record to have the same id, got `%s` and `%s`.', prevID, nextID) : void 0; // note: coalesce null/undefined to null

    var prevType = (_getType = getType(prevRecord)) !== null && _getType !== void 0 ? _getType : null;
    var nextType = (_getType2 = getType(nextRecord)) !== null && _getType2 !== void 0 ? _getType2 : null;
    process.env.NODE_ENV !== "production" ? warning(isClientID(nextID) && nextID !== ROOT_ID || prevType === nextType, 'RelayModernRecord: Invalid record update, expected both versions of ' + 'record `%s` to have the same `%s` but got conflicting types `%s` ' + 'and `%s`. The GraphQL server likely violated the globally unique ' + 'id requirement by returning the same id for different objects.', prevID, TYPENAME_KEY, prevType, nextType) : void 0;
  }

  var updated = null;
  var keys = Object.keys(nextRecord);

  for (var ii = 0; ii < keys.length; ii++) {
    var key = keys[ii];

    if (updated || !areEqual(prevRecord[key], nextRecord[key])) {
      updated = updated !== null ? updated : (0, _objectSpread2["default"])({}, prevRecord);
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


function merge(record1, record2) {
  if (process.env.NODE_ENV !== "production") {
    var _getType3, _getType4;

    var prevID = getDataID(record1);
    var nextID = getDataID(record2);
    process.env.NODE_ENV !== "production" ? warning(prevID === nextID, 'RelayModernRecord: Invalid record merge, expected both versions of ' + 'the record to have the same id, got `%s` and `%s`.', prevID, nextID) : void 0; // note: coalesce null/undefined to null

    var prevType = (_getType3 = getType(record1)) !== null && _getType3 !== void 0 ? _getType3 : null;
    var nextType = (_getType4 = getType(record2)) !== null && _getType4 !== void 0 ? _getType4 : null;
    process.env.NODE_ENV !== "production" ? warning(isClientID(nextID) && nextID !== ROOT_ID || prevType === nextType, 'RelayModernRecord: Invalid record merge, expected both versions of ' + 'record `%s` to have the same `%s` but got conflicting types `%s` ' + 'and `%s`. The GraphQL server likely violated the globally unique ' + 'id requirement by returning the same id for different objects.', prevID, TYPENAME_KEY, prevType, nextType) : void 0;
  }

  return Object.assign({}, record1, record2);
}
/**
 * @public
 *
 * Prevent modifications to the record. Attempts to call `set*` functions on a
 * frozen record will fatal at runtime.
 */


function freeze(record) {
  deepFreeze(record);
}
/**
 * @public
 *
 * Set the value of a storageKey to a scalar.
 */


function setValue(record, storageKey, value) {
  if (process.env.NODE_ENV !== "production") {
    var prevID = getDataID(record);

    if (storageKey === ID_KEY) {
      process.env.NODE_ENV !== "production" ? warning(prevID === value, 'RelayModernRecord: Invalid field update, expected both versions of ' + 'the record to have the same id, got `%s` and `%s`.', prevID, value) : void 0;
    } else if (storageKey === TYPENAME_KEY) {
      var _getType5;

      // note: coalesce null/undefined to null
      var prevType = (_getType5 = getType(record)) !== null && _getType5 !== void 0 ? _getType5 : null;
      var nextType = value !== null && value !== void 0 ? value : null;
      process.env.NODE_ENV !== "production" ? warning(isClientID(getDataID(record)) && getDataID(record) !== ROOT_ID || prevType === nextType, 'RelayModernRecord: Invalid field update, expected both versions of ' + 'record `%s` to have the same `%s` but got conflicting types `%s` ' + 'and `%s`. The GraphQL server likely violated the globally unique ' + 'id requirement by returning the same id for different objects.', prevID, TYPENAME_KEY, prevType, nextType) : void 0;
    }
  }

  record[storageKey] = value;
}
/**
 * @public
 *
 * Set the value of a field to a reference to another record.
 */


function setLinkedRecordID(record, storageKey, linkedID) {
  // See perf note above for why we aren't using computed property access.
  var link = {};
  link[REF_KEY] = linkedID;
  record[storageKey] = link;
}
/**
 * @public
 *
 * Set the value of a field to a list of references other records.
 */


function setLinkedRecordIDs(record, storageKey, linkedIDs) {
  // See perf note above for why we aren't using computed property access.
  var links = {};
  links[REFS_KEY] = linkedIDs;
  record[storageKey] = links;
}
/**
 * @public
 *
 * Set the value of a field to a reference to another record in the actor specific store.
 */


function setActorLinkedRecordID(record, storageKey, actorIdentifier, linkedID) {
  // See perf note above for why we aren't using computed property access.
  var link = {};
  link[REF_KEY] = linkedID;
  link[ACTOR_IDENTIFIER_KEY] = actorIdentifier;
  record[storageKey] = link;
}
/**
 * @public
 *
 * Get link to a record and the actor identifier for the store.
 */


function getActorLinkedRecordID(record, storageKey) {
  var link = record[storageKey];

  if (link == null) {
    return link;
  }

  !(typeof link === 'object' && typeof link[REF_KEY] === 'string' && link[ACTOR_IDENTIFIER_KEY] != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernRecord.getActorLinkedRecordID(): Expected `%s.%s` to be an actor specific linked ID, ' + 'was `%s`.', record[ID_KEY], storageKey, JSON.stringify(link)) : invariant(false) : void 0;
  return [link[ACTOR_IDENTIFIER_KEY], link[REF_KEY]];
}

module.exports = {
  clone: clone,
  copyFields: copyFields,
  create: create,
  freeze: freeze,
  getDataID: getDataID,
  getInvalidationEpoch: getInvalidationEpoch,
  getLinkedRecordID: getLinkedRecordID,
  getLinkedRecordIDs: getLinkedRecordIDs,
  getType: getType,
  getValue: getValue,
  merge: merge,
  setValue: setValue,
  setLinkedRecordID: setLinkedRecordID,
  setLinkedRecordIDs: setLinkedRecordIDs,
  update: update,
  getActorLinkedRecordID: getActorLinkedRecordID,
  setActorLinkedRecordID: setActorLinkedRecordID
};