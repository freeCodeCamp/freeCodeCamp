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

var invariant = require('invariant');

var _require = require('../store/ClientID'),
    generateClientID = _require.generateClientID;

var _require2 = require('../store/RelayStoreUtils'),
    getStableStorageKey = _require2.getStableStorageKey;

/**
 * @internal
 *
 * A helper class for manipulating a given record from a record source via an
 * imperative/OO-style API.
 */
var RelayRecordProxy = /*#__PURE__*/function () {
  function RelayRecordProxy(source, mutator, dataID) {
    this._dataID = dataID;
    this._mutator = mutator;
    this._source = source;
  }

  var _proto = RelayRecordProxy.prototype;

  _proto.copyFieldsFrom = function copyFieldsFrom(source) {
    this._mutator.copyFields(source.getDataID(), this._dataID);
  };

  _proto.getDataID = function getDataID() {
    return this._dataID;
  };

  _proto.getType = function getType() {
    var type = this._mutator.getType(this._dataID);

    !(type != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayRecordProxy: Cannot get the type of deleted record `%s`.', this._dataID) : invariant(false) : void 0;
    return type;
  };

  _proto.getValue = function getValue(name, args) {
    var storageKey = getStableStorageKey(name, args);
    return this._mutator.getValue(this._dataID, storageKey);
  };

  _proto.setValue = function setValue(value, name, args) {
    !isValidLeafValue(value) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayRecordProxy#setValue(): Expected a scalar or array of scalars, ' + 'got `%s`.', JSON.stringify(value)) : invariant(false) : void 0;
    var storageKey = getStableStorageKey(name, args);

    this._mutator.setValue(this._dataID, storageKey, value);

    return this;
  };

  _proto.getLinkedRecord = function getLinkedRecord(name, args) {
    var storageKey = getStableStorageKey(name, args);

    var linkedID = this._mutator.getLinkedRecordID(this._dataID, storageKey);

    return linkedID != null ? this._source.get(linkedID) : linkedID;
  };

  _proto.setLinkedRecord = function setLinkedRecord(record, name, args) {
    !(record instanceof RelayRecordProxy) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayRecordProxy#setLinkedRecord(): Expected a record, got `%s`.', record) : invariant(false) : void 0;
    var storageKey = getStableStorageKey(name, args);
    var linkedID = record.getDataID();

    this._mutator.setLinkedRecordID(this._dataID, storageKey, linkedID);

    return this;
  };

  _proto.getOrCreateLinkedRecord = function getOrCreateLinkedRecord(name, typeName, args) {
    var linkedRecord = this.getLinkedRecord(name, args);

    if (!linkedRecord) {
      var _this$_source$get;

      var storageKey = getStableStorageKey(name, args);
      var clientID = generateClientID(this.getDataID(), storageKey); // NOTE: it's possible that a client record for this field exists
      // but the field itself was unset.

      linkedRecord = (_this$_source$get = this._source.get(clientID)) !== null && _this$_source$get !== void 0 ? _this$_source$get : this._source.create(clientID, typeName);
      this.setLinkedRecord(linkedRecord, name, args);
    }

    return linkedRecord;
  };

  _proto.getLinkedRecords = function getLinkedRecords(name, args) {
    var _this = this;

    var storageKey = getStableStorageKey(name, args);

    var linkedIDs = this._mutator.getLinkedRecordIDs(this._dataID, storageKey);

    if (linkedIDs == null) {
      return linkedIDs;
    }

    return linkedIDs.map(function (linkedID) {
      return linkedID != null ? _this._source.get(linkedID) : linkedID;
    });
  };

  _proto.setLinkedRecords = function setLinkedRecords(records, name, args) {
    !Array.isArray(records) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayRecordProxy#setLinkedRecords(): Expected records to be an array, got `%s`.', records) : invariant(false) : void 0;
    var storageKey = getStableStorageKey(name, args);
    var linkedIDs = records.map(function (record) {
      return record && record.getDataID();
    });

    this._mutator.setLinkedRecordIDs(this._dataID, storageKey, linkedIDs);

    return this;
  };

  _proto.invalidateRecord = function invalidateRecord() {
    this._source.markIDForInvalidation(this._dataID);
  };

  return RelayRecordProxy;
}();

function isValidLeafValue(value) {
  return value == null || typeof value !== 'object' || Array.isArray(value) && value.every(isValidLeafValue);
}

module.exports = RelayRecordProxy;