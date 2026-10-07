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

const invariant = require('invariant');

const {getStorageKey, ROOT_TYPE} = require('../store/RelayStoreUtils');

import type {
  RecordProxy,
  RecordSourceProxy,
  RecordSourceSelectorProxy,
  SingularReaderSelector,
} from '../store/RelayStoreTypes';
import type {ReaderLinkedField} from '../util/ReaderNode';
import type {DataID} from '../util/RelayRuntimeTypes';
import type RelayRecordSourceMutator from './RelayRecordSourceMutator';

/**
 * @internal
 *
 * A subclass of RecordSourceProxy that provides convenience methods for
 * accessing the root fields of a given query/mutation. These fields accept
 * complex arguments and it can be tedious to re-construct the correct sets of
 * arguments to pass to e.g. `getRoot().getLinkedRecord()`.
 */
class RelayRecordSourceSelectorProxy implements RecordSourceSelectorProxy {
  __mutator: RelayRecordSourceMutator;
  __recordSource: RecordSourceProxy;
  _readSelector: SingularReaderSelector;

  constructor(
    mutator: RelayRecordSourceMutator,
    recordSource: RecordSourceProxy,
    readSelector: SingularReaderSelector,
  ) {
    this.__mutator = mutator;
    this.__recordSource = recordSource;
    this._readSelector = readSelector;
  }

  create(dataID: DataID, typeName: string): RecordProxy {
    return this.__recordSource.create(dataID, typeName);
  }

  delete(dataID: DataID): void {
    this.__recordSource.delete(dataID);
  }

  get(dataID: DataID): ?RecordProxy {
    return this.__recordSource.get(dataID);
  }

  getRoot(): RecordProxy {
    return this.__recordSource.getRoot();
  }

  getOperationRoot(): RecordProxy {
    let root = this.__recordSource.get(this._readSelector.dataID);
    if (!root) {
      root = this.__recordSource.create(this._readSelector.dataID, ROOT_TYPE);
    }
    return root;
  }

  _getRootField(
    selector: SingularReaderSelector,
    fieldName: string,
    plural: boolean,
  ): ReaderLinkedField {
    let field = selector.node.selections.find(
      selection =>
        (selection.kind === 'LinkedField' && selection.name === fieldName) ||
        (selection.kind === 'RequiredField' &&
          selection.field.name === fieldName),
    );
    if (field && field.kind === 'RequiredField') {
      field = field.field;
    }
    invariant(
      field && field.kind === 'LinkedField',
      'RelayRecordSourceSelectorProxy#getRootField(): Cannot find root ' +
        'field `%s`, no such field is defined on GraphQL document `%s`.',
      fieldName,
      selector.node.name,
    );
    invariant(
      field.plural === plural,
      'RelayRecordSourceSelectorProxy#getRootField(): Expected root field ' +
        '`%s` to be %s.',
      fieldName,
      plural ? 'plural' : 'singular',
    );
    return field;
  }

  getRootField(fieldName: string): ?RecordProxy {
    const field = this._getRootField(this._readSelector, fieldName, false);
    const storageKey = getStorageKey(field, this._readSelector.variables);
    return this.getOperationRoot().getLinkedRecord(storageKey);
  }

  getPluralRootField(fieldName: string): ?Array<?RecordProxy> {
    const field = this._getRootField(this._readSelector, fieldName, true);
    const storageKey = getStorageKey(field, this._readSelector.variables);
    return this.getOperationRoot().getLinkedRecords(storageKey);
  }

  invalidateStore(): void {
    this.__recordSource.invalidateStore();
  }
}

module.exports = RelayRecordSourceSelectorProxy;
