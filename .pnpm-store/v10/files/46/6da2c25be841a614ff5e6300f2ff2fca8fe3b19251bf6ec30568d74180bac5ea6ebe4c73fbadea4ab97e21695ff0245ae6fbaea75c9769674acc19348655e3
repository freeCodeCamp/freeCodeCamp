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

const RelayConcreteNode = require('../util/RelayConcreteNode');
const RelayFeatureFlags = require('../util/RelayFeatureFlags');
const RelayModernRecord = require('./RelayModernRecord');
const RelayStoreReactFlightUtils = require('./RelayStoreReactFlightUtils');
const RelayStoreUtils = require('./RelayStoreUtils');

const cloneRelayHandleSourceField = require('./cloneRelayHandleSourceField');
const getOperation = require('../util/getOperation');
const invariant = require('invariant');

const {getLocalVariables} = require('./RelayConcreteVariables');
const {generateTypeID} = require('./TypeID');

import type {
  NormalizationFlightField,
  NormalizationLinkedField,
  NormalizationModuleImport,
  NormalizationNode,
  NormalizationSelection,
} from '../util/NormalizationNode';
import type {DataID, Variables} from '../util/RelayRuntimeTypes';
import type {
  DataIDSet,
  NormalizationSelector,
  OperationLoader,
  Record,
  RecordSource,
  ReactFlightReachableExecutableDefinitions,
} from './RelayStoreTypes';

const {
  ACTOR_CHANGE,
  CONDITION,
  CLIENT_COMPONENT,
  CLIENT_EXTENSION,
  DEFER,
  FLIGHT_FIELD,
  FRAGMENT_SPREAD,
  INLINE_FRAGMENT,
  LINKED_FIELD,
  MODULE_IMPORT,
  LINKED_HANDLE,
  SCALAR_FIELD,
  SCALAR_HANDLE,
  STREAM,
  TYPE_DISCRIMINATOR,
} = RelayConcreteNode;
const {ROOT_ID, getStorageKey, getModuleOperationKey} = RelayStoreUtils;

function mark(
  recordSource: RecordSource,
  selector: NormalizationSelector,
  references: DataIDSet,
  operationLoader: ?OperationLoader,
  shouldProcessClientComponents: ?boolean,
): void {
  const {dataID, node, variables} = selector;
  const marker = new RelayReferenceMarker(
    recordSource,
    variables,
    references,
    operationLoader,
    shouldProcessClientComponents,
  );
  marker.mark(node, dataID);
}

/**
 * @private
 */
class RelayReferenceMarker {
  _operationLoader: OperationLoader | null;
  _operationName: ?string;
  _recordSource: RecordSource;
  _references: DataIDSet;
  _variables: Variables;
  _shouldProcessClientComponents: ?boolean;

  constructor(
    recordSource: RecordSource,
    variables: Variables,
    references: DataIDSet,
    operationLoader: ?OperationLoader,
    shouldProcessClientComponents: ?boolean,
  ) {
    this._operationLoader = operationLoader ?? null;
    this._operationName = null;
    this._recordSource = recordSource;
    this._references = references;
    this._variables = variables;
    this._shouldProcessClientComponents = shouldProcessClientComponents;
  }

  mark(node: NormalizationNode, dataID: DataID): void {
    if (node.kind === 'Operation' || node.kind === 'SplitOperation') {
      this._operationName = node.name;
    }
    this._traverse(node, dataID);
  }

  _traverse(node: NormalizationNode, dataID: DataID): void {
    this._references.add(dataID);
    const record = this._recordSource.get(dataID);
    if (record == null) {
      return;
    }
    this._traverseSelections(node.selections, record);
  }

  _getVariableValue(name: string): mixed {
    invariant(
      this._variables.hasOwnProperty(name),
      'RelayReferenceMarker(): Undefined variable `%s`.',
      name,
    );
    // $FlowFixMe[cannot-write]
    return this._variables[name];
  }

  _traverseSelections(
    selections: $ReadOnlyArray<NormalizationSelection>,
    record: Record,
  ): void {
    selections.forEach(selection => {
      /* eslint-disable no-fallthrough */
      switch (selection.kind) {
        case ACTOR_CHANGE:
          // TODO: T89695151 Support multi-actor record sources in RelayReferenceMarker.js
          this._traverseLink(selection.linkedField, record);
          break;
        case LINKED_FIELD:
          if (selection.plural) {
            this._traversePluralLink(selection, record);
          } else {
            this._traverseLink(selection, record);
          }
          break;
        case CONDITION:
          const conditionValue = Boolean(
            this._getVariableValue(selection.condition),
          );
          if (conditionValue === selection.passingValue) {
            this._traverseSelections(selection.selections, record);
          }
          break;
        case INLINE_FRAGMENT:
          if (selection.abstractKey == null) {
            const typeName = RelayModernRecord.getType(record);
            if (typeName != null && typeName === selection.type) {
              this._traverseSelections(selection.selections, record);
            }
          } else {
            const typeName = RelayModernRecord.getType(record);
            const typeID = generateTypeID(typeName);
            this._references.add(typeID);
            this._traverseSelections(selection.selections, record);
          }
          break;
        case FRAGMENT_SPREAD:
          const prevVariables = this._variables;
          this._variables = getLocalVariables(
            this._variables,
            selection.fragment.argumentDefinitions,
            selection.args,
          );
          this._traverseSelections(selection.fragment.selections, record);
          this._variables = prevVariables;
          break;
        case LINKED_HANDLE:
          // The selections for a "handle" field are the same as those of the
          // original linked field where the handle was applied. Reference marking
          // therefore requires traversing the original field selections against
          // the synthesized client field.
          //
          // TODO: Instead of finding the source field in `selections`, change
          // the concrete structure to allow shared subtrees, and have the linked
          // handle directly refer to the same selections as the LinkedField that
          // it was split from.
          const handleField = cloneRelayHandleSourceField(
            selection,
            selections,
            this._variables,
          );
          if (handleField.plural) {
            this._traversePluralLink(handleField, record);
          } else {
            this._traverseLink(handleField, record);
          }
          break;
        case DEFER:
        case STREAM:
          this._traverseSelections(selection.selections, record);
          break;
        case SCALAR_FIELD:
        case SCALAR_HANDLE:
          break;
        case TYPE_DISCRIMINATOR: {
          const typeName = RelayModernRecord.getType(record);
          const typeID = generateTypeID(typeName);
          this._references.add(typeID);
          break;
        }
        case MODULE_IMPORT:
          this._traverseModuleImport(selection, record);
          break;
        case CLIENT_EXTENSION:
          this._traverseSelections(selection.selections, record);
          break;
        case FLIGHT_FIELD:
          if (RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD) {
            this._traverseFlightField(selection, record);
          } else {
            throw new Error('Flight fields are not yet supported.');
          }
          break;
        case CLIENT_COMPONENT:
          if (this._shouldProcessClientComponents === false) {
            break;
          }
          this._traverseSelections(selection.fragment.selections, record);
          break;
        default:
          (selection: empty);
          invariant(
            false,
            'RelayReferenceMarker: Unknown AST node `%s`.',
            selection,
          );
      }
    });
  }

  _traverseModuleImport(
    moduleImport: NormalizationModuleImport,
    record: Record,
  ): void {
    const operationLoader = this._operationLoader;
    invariant(
      operationLoader !== null,
      'RelayReferenceMarker: Expected an operationLoader to be configured when using `@module`. ' +
        'Could not load fragment `%s` in operation `%s`.',
      moduleImport.fragmentName,
      this._operationName ?? '(unknown)',
    );
    const operationKey = getModuleOperationKey(moduleImport.documentName);
    const operationReference = RelayModernRecord.getValue(record, operationKey);
    if (operationReference == null) {
      return;
    }
    const normalizationRootNode = operationLoader.get(operationReference);
    if (normalizationRootNode != null) {
      const operation = getOperation(normalizationRootNode);
      const prevVariables = this._variables;
      this._variables = getLocalVariables(
        this._variables,
        operation.argumentDefinitions,
        moduleImport.args,
      );
      this._traverseSelections(operation.selections, record);
      this._variables = prevVariables;
    }
    // Otherwise, if the operation is not available, we assume that the data
    // cannot have been processed yet and therefore isn't in the store to
    // begin with.
  }

  _traverseLink(field: NormalizationLinkedField, record: Record): void {
    const storageKey = getStorageKey(field, this._variables);
    const linkedID = RelayModernRecord.getLinkedRecordID(record, storageKey);

    if (linkedID == null) {
      return;
    }
    this._traverse(field, linkedID);
  }

  _traversePluralLink(field: NormalizationLinkedField, record: Record): void {
    const storageKey = getStorageKey(field, this._variables);
    const linkedIDs = RelayModernRecord.getLinkedRecordIDs(record, storageKey);

    if (linkedIDs == null) {
      return;
    }
    linkedIDs.forEach(linkedID => {
      if (linkedID != null) {
        this._traverse(field, linkedID);
      }
    });
  }

  _traverseFlightField(field: NormalizationFlightField, record: Record): void {
    const storageKey = getStorageKey(field, this._variables);
    const linkedID = RelayModernRecord.getLinkedRecordID(record, storageKey);
    if (linkedID == null) {
      return;
    }
    this._references.add(linkedID);

    const reactFlightClientResponseRecord = this._recordSource.get(linkedID);

    if (reactFlightClientResponseRecord == null) {
      return;
    }

    const reachableExecutableDefinitions = RelayModernRecord.getValue(
      reactFlightClientResponseRecord,
      RelayStoreReactFlightUtils.REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
    );

    if (!Array.isArray(reachableExecutableDefinitions)) {
      return;
    }

    const operationLoader = this._operationLoader;
    invariant(
      operationLoader !== null,
      'DataChecker: Expected an operationLoader to be configured when using ' +
        'React Flight',
    );
    // In Flight, the variables that are in scope for reachable executable
    // definitions aren't the same as what's in scope for the outer query.
    const prevVariables = this._variables;
    // $FlowFixMe[incompatible-cast]
    for (const definition of (reachableExecutableDefinitions: Array<ReactFlightReachableExecutableDefinitions>)) {
      this._variables = definition.variables;
      const operationReference = definition.module;
      const normalizationRootNode = operationLoader.get(operationReference);
      if (normalizationRootNode != null) {
        const operation = getOperation(normalizationRootNode);
        this._traverse(operation, ROOT_ID);
      }
    }
    this._variables = prevVariables;
  }
}

module.exports = {mark};
