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

var _require = require('../store/RelayStoreUtils'),
    getStorageKey = _require.getStorageKey,
    ROOT_TYPE = _require.ROOT_TYPE;

/**
 * @internal
 *
 * A subclass of RecordSourceProxy that provides convenience methods for
 * accessing the root fields of a given query/mutation. These fields accept
 * complex arguments and it can be tedious to re-construct the correct sets of
 * arguments to pass to e.g. `getRoot().getLinkedRecord()`.
 */
var RelayRecordSourceSelectorProxy = /*#__PURE__*/function () {
  function RelayRecordSourceSelectorProxy(mutator, recordSource, readSelector) {
    this.__mutator = mutator;
    this.__recordSource = recordSource;
    this._readSelector = readSelector;
  }

  var _proto = RelayRecordSourceSelectorProxy.prototype;

  _proto.create = function create(dataID, typeName) {
    return this.__recordSource.create(dataID, typeName);
  };

  _proto["delete"] = function _delete(dataID) {
    this.__recordSource["delete"](dataID);
  };

  _proto.get = function get(dataID) {
    return this.__recordSource.get(dataID);
  };

  _proto.getRoot = function getRoot() {
    return this.__recordSource.getRoot();
  };

  _proto.getOperationRoot = function getOperationRoot() {
    var root = this.__recordSource.get(this._readSelector.dataID);

    if (!root) {
      root = this.__recordSource.create(this._readSelector.dataID, ROOT_TYPE);
    }

    return root;
  };

  _proto._getRootField = function _getRootField(selector, fieldName, plural) {
    var field = selector.node.selections.find(function (selection) {
      return selection.kind === 'LinkedField' && selection.name === fieldName || selection.kind === 'RequiredField' && selection.field.name === fieldName;
    });

    if (field && field.kind === 'RequiredField') {
      field = field.field;
    }

    !(field && field.kind === 'LinkedField') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayRecordSourceSelectorProxy#getRootField(): Cannot find root ' + 'field `%s`, no such field is defined on GraphQL document `%s`.', fieldName, selector.node.name) : invariant(false) : void 0;
    !(field.plural === plural) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayRecordSourceSelectorProxy#getRootField(): Expected root field ' + '`%s` to be %s.', fieldName, plural ? 'plural' : 'singular') : invariant(false) : void 0;
    return field;
  };

  _proto.getRootField = function getRootField(fieldName) {
    var field = this._getRootField(this._readSelector, fieldName, false);

    var storageKey = getStorageKey(field, this._readSelector.variables);
    return this.getOperationRoot().getLinkedRecord(storageKey);
  };

  _proto.getPluralRootField = function getPluralRootField(fieldName) {
    var field = this._getRootField(this._readSelector, fieldName, true);

    var storageKey = getStorageKey(field, this._readSelector.variables);
    return this.getOperationRoot().getLinkedRecords(storageKey);
  };

  _proto.invalidateStore = function invalidateStore() {
    this.__recordSource.invalidateStore();
  };

  return RelayRecordSourceSelectorProxy;
}();

module.exports = RelayRecordSourceSelectorProxy;