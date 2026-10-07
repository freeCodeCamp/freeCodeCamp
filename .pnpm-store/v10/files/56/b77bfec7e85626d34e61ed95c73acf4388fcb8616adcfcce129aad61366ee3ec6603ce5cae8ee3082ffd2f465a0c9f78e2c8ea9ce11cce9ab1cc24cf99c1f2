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

var RelayModernRecord = require('../store/RelayModernRecord');

var RelayRecordProxy = require('./RelayRecordProxy');

var invariant = require('invariant');

var _require = require('../store/RelayRecordState'),
    EXISTENT = _require.EXISTENT,
    NONEXISTENT = _require.NONEXISTENT;

var _require2 = require('../store/RelayStoreUtils'),
    ROOT_ID = _require2.ROOT_ID,
    ROOT_TYPE = _require2.ROOT_TYPE;

/**
 * @internal
 *
 * A helper for manipulating a `RecordSource` via an imperative/OO-style API.
 */
var RelayRecordSourceProxy = /*#__PURE__*/function () {
  function RelayRecordSourceProxy(mutator, getDataID, handlerProvider) {
    this.__mutator = mutator;
    this._handlerProvider = handlerProvider || null;
    this._proxies = {};
    this._getDataID = getDataID;
    this._invalidatedStore = false;
    this._idsMarkedForInvalidation = new Set();
  }

  var _proto = RelayRecordSourceProxy.prototype;

  _proto.publishSource = function publishSource(source, fieldPayloads) {
    var _this = this;

    var dataIDs = source.getRecordIDs();
    dataIDs.forEach(function (dataID) {
      var status = source.getStatus(dataID);

      if (status === EXISTENT) {
        var sourceRecord = source.get(dataID);

        if (sourceRecord) {
          if (_this.__mutator.getStatus(dataID) !== EXISTENT) {
            _this.create(dataID, RelayModernRecord.getType(sourceRecord));
          }

          _this.__mutator.copyFieldsFromRecord(sourceRecord, dataID);
        }
      } else if (status === NONEXISTENT) {
        _this["delete"](dataID);
      }
    });

    if (fieldPayloads && fieldPayloads.length) {
      fieldPayloads.forEach(function (fieldPayload) {
        var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);

        !handler ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernEnvironment: Expected a handler to be provided for handle `%s`.', fieldPayload.handle) : invariant(false) : void 0;
        handler.update(_this, fieldPayload);
      });
    }
  };

  _proto.create = function create(dataID, typeName) {
    this.__mutator.create(dataID, typeName);

    delete this._proxies[dataID];
    var record = this.get(dataID); // For flow

    !record ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayRecordSourceProxy#create(): Expected the created record to exist.') : invariant(false) : void 0;
    return record;
  };

  _proto["delete"] = function _delete(dataID) {
    !(dataID !== ROOT_ID) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayRecordSourceProxy#delete(): Cannot delete the root record.') : invariant(false) : void 0;
    delete this._proxies[dataID];

    this.__mutator["delete"](dataID);
  };

  _proto.get = function get(dataID) {
    if (!this._proxies.hasOwnProperty(dataID)) {
      var status = this.__mutator.getStatus(dataID);

      if (status === EXISTENT) {
        this._proxies[dataID] = new RelayRecordProxy(this, this.__mutator, dataID);
      } else {
        this._proxies[dataID] = status === NONEXISTENT ? null : undefined;
      }
    }

    return this._proxies[dataID];
  };

  _proto.getRoot = function getRoot() {
    var root = this.get(ROOT_ID);

    if (!root) {
      root = this.create(ROOT_ID, ROOT_TYPE);
    }

    !(root && root.getType() === ROOT_TYPE) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayRecordSourceProxy#getRoot(): Expected the source to contain a ' + 'root record, %s.', root == null ? 'no root record found' : "found a root record of type `".concat(root.getType(), "`")) : invariant(false) : void 0;
    return root;
  };

  _proto.invalidateStore = function invalidateStore() {
    this._invalidatedStore = true;
  };

  _proto.isStoreMarkedForInvalidation = function isStoreMarkedForInvalidation() {
    return this._invalidatedStore;
  };

  _proto.markIDForInvalidation = function markIDForInvalidation(dataID) {
    this._idsMarkedForInvalidation.add(dataID);
  };

  _proto.getIDsMarkedForInvalidation = function getIDsMarkedForInvalidation() {
    return this._idsMarkedForInvalidation;
  };

  return RelayRecordSourceProxy;
}();

module.exports = RelayRecordSourceProxy;