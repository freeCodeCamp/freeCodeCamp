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

const RelayFeatureFlags = require('../util/RelayFeatureFlags');
const RelayModernRecord = require('./RelayModernRecord');

const areEqual = require('areEqual');
const invariant = require('invariant');
const warning = require('warning');

const {
  ACTOR_IDENTIFIER_FIELD_NAME,
  getActorIdentifierFromPayload,
} = require('../multi-actor-environment/ActorUtils');
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
  LINKED_HANDLE,
  MODULE_IMPORT,
  SCALAR_FIELD,
  SCALAR_HANDLE,
  STREAM,
  TYPE_DISCRIMINATOR,
} = require('../util/RelayConcreteNode');
const {generateClientID, isClientID} = require('./ClientID');
const {getLocalVariables} = require('./RelayConcreteVariables');
const {createNormalizationSelector} = require('./RelayModernSelector');
const {
  refineToReactFlightPayloadData,
  REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
  REACT_FLIGHT_TREE_STORAGE_KEY,
  REACT_FLIGHT_TYPE_NAME,
} = require('./RelayStoreReactFlightUtils');
const {
  getArgumentValues,
  getHandleStorageKey,
  getModuleComponentKey,
  getModuleOperationKey,
  getStorageKey,
  TYPENAME_KEY,
  ROOT_ID,
  ROOT_TYPE,
} = require('./RelayStoreUtils');
const {generateTypeID, TYPE_SCHEMA_TYPE} = require('./TypeID');

import type {ActorIdentifier} from '../multi-actor-environment/ActorIdentifier';
import type {PayloadData} from '../network/RelayNetworkTypes';
import type {
  NormalizationActorChange,
  NormalizationDefer,
  NormalizationFlightField,
  NormalizationLinkedField,
  NormalizationModuleImport,
  NormalizationNode,
  NormalizationScalarField,
  NormalizationStream,
} from '../util/NormalizationNode';
import type {DataID, Variables} from '../util/RelayRuntimeTypes';
import type {
  FollowupPayload,
  HandleFieldPayload,
  IncrementalDataPlaceholder,
  MutableRecordSource,
  NormalizationSelector,
  ReactFlightPayloadDeserializer,
  ReactFlightReachableExecutableDefinitions,
  ReactFlightServerErrorHandler,
  Record,
  RelayResponsePayload,
} from './RelayStoreTypes';

export type GetDataID = (
  fieldValue: interface {[string]: mixed},
  typeName: string,
) => mixed;

export type NormalizationOptions = {|
  +getDataID: GetDataID,
  +treatMissingFieldsAsNull: boolean,
  +path?: $ReadOnlyArray<string>,
  +reactFlightPayloadDeserializer?: ?ReactFlightPayloadDeserializer,
  +reactFlightServerErrorHandler?: ?ReactFlightServerErrorHandler,
  +shouldProcessClientComponents?: ?boolean,
  +actorIdentifier?: ?ActorIdentifier,
|};

/**
 * Normalizes the results of a query and standard GraphQL response, writing the
 * normalized records/fields into the given MutableRecordSource.
 */
function normalize(
  recordSource: MutableRecordSource,
  selector: NormalizationSelector,
  response: PayloadData,
  options: NormalizationOptions,
): RelayResponsePayload {
  const {dataID, node, variables} = selector;
  const normalizer = new RelayResponseNormalizer(
    recordSource,
    variables,
    options,
  );
  return normalizer.normalizeResponse(node, dataID, response);
}

/**
 * @private
 *
 * Helper for handling payloads.
 */
class RelayResponseNormalizer {
  _actorIdentifier: ?ActorIdentifier;
  _getDataId: GetDataID;
  _handleFieldPayloads: Array<HandleFieldPayload>;
  _treatMissingFieldsAsNull: boolean;
  _incrementalPlaceholders: Array<IncrementalDataPlaceholder>;
  _isClientExtension: boolean;
  _isUnmatchedAbstractType: boolean;
  _followupPayloads: Array<FollowupPayload>;
  _path: Array<string>;
  _recordSource: MutableRecordSource;
  _variables: Variables;
  _reactFlightPayloadDeserializer: ?ReactFlightPayloadDeserializer;
  _reactFlightServerErrorHandler: ?ReactFlightServerErrorHandler;
  _shouldProcessClientComponents: ?boolean;

  constructor(
    recordSource: MutableRecordSource,
    variables: Variables,
    options: NormalizationOptions,
  ) {
    this._actorIdentifier = options.actorIdentifier;
    this._getDataId = options.getDataID;
    this._handleFieldPayloads = [];
    this._treatMissingFieldsAsNull = options.treatMissingFieldsAsNull;
    this._incrementalPlaceholders = [];
    this._isClientExtension = false;
    this._isUnmatchedAbstractType = false;
    this._followupPayloads = [];
    this._path = options.path ? [...options.path] : [];
    this._recordSource = recordSource;
    this._variables = variables;
    this._reactFlightPayloadDeserializer =
      options.reactFlightPayloadDeserializer;
    this._reactFlightServerErrorHandler = options.reactFlightServerErrorHandler;
    this._shouldProcessClientComponents = options.shouldProcessClientComponents;
  }

  normalizeResponse(
    node: NormalizationNode,
    dataID: DataID,
    data: PayloadData,
  ): RelayResponsePayload {
    const record = this._recordSource.get(dataID);
    invariant(
      record,
      'RelayResponseNormalizer(): Expected root record `%s` to exist.',
      dataID,
    );
    this._traverseSelections(node, record, data);
    return {
      errors: null,
      fieldPayloads: this._handleFieldPayloads,
      incrementalPlaceholders: this._incrementalPlaceholders,
      followupPayloads: this._followupPayloads,
      source: this._recordSource,
      isFinal: false,
    };
  }

  _getVariableValue(name: string): mixed {
    invariant(
      this._variables.hasOwnProperty(name),
      'RelayResponseNormalizer(): Undefined variable `%s`.',
      name,
    );
    // $FlowFixMe[cannot-write]
    return this._variables[name];
  }

  _getRecordType(data: PayloadData): string {
    const typeName = (data: any)[TYPENAME_KEY];
    invariant(
      typeName != null,
      'RelayResponseNormalizer(): Expected a typename for record `%s`.',
      JSON.stringify(data, null, 2),
    );
    return typeName;
  }

  _traverseSelections(
    node: NormalizationNode,
    record: Record,
    data: PayloadData,
  ): void {
    for (let i = 0; i < node.selections.length; i++) {
      const selection = node.selections[i];
      switch (selection.kind) {
        case SCALAR_FIELD:
        case LINKED_FIELD:
          this._normalizeField(node, selection, record, data);
          break;
        case CONDITION:
          const conditionValue = Boolean(
            this._getVariableValue(selection.condition),
          );
          if (conditionValue === selection.passingValue) {
            this._traverseSelections(selection, record, data);
          }
          break;
        case FRAGMENT_SPREAD: {
          const prevVariables = this._variables;
          this._variables = getLocalVariables(
            this._variables,
            selection.fragment.argumentDefinitions,
            selection.args,
          );
          this._traverseSelections(selection.fragment, record, data);
          this._variables = prevVariables;
          break;
        }
        case INLINE_FRAGMENT: {
          const {abstractKey} = selection;
          if (abstractKey == null) {
            const typeName = RelayModernRecord.getType(record);
            if (typeName === selection.type) {
              this._traverseSelections(selection, record, data);
            }
          } else {
            const implementsInterface = data.hasOwnProperty(abstractKey);
            const typeName = RelayModernRecord.getType(record);
            const typeID = generateTypeID(typeName);
            let typeRecord = this._recordSource.get(typeID);
            if (typeRecord == null) {
              typeRecord = RelayModernRecord.create(typeID, TYPE_SCHEMA_TYPE);
              this._recordSource.set(typeID, typeRecord);
            }
            RelayModernRecord.setValue(
              typeRecord,
              abstractKey,
              implementsInterface,
            );
            if (implementsInterface) {
              this._traverseSelections(selection, record, data);
            }
          }
          break;
        }
        case TYPE_DISCRIMINATOR: {
          const {abstractKey} = selection;
          const implementsInterface = data.hasOwnProperty(abstractKey);
          const typeName = RelayModernRecord.getType(record);
          const typeID = generateTypeID(typeName);
          let typeRecord = this._recordSource.get(typeID);
          if (typeRecord == null) {
            typeRecord = RelayModernRecord.create(typeID, TYPE_SCHEMA_TYPE);
            this._recordSource.set(typeID, typeRecord);
          }
          RelayModernRecord.setValue(
            typeRecord,
            abstractKey,
            implementsInterface,
          );
          break;
        }
        case LINKED_HANDLE:
        case SCALAR_HANDLE:
          const args = selection.args
            ? getArgumentValues(selection.args, this._variables)
            : {};
          const fieldKey = getStorageKey(selection, this._variables);
          const handleKey = getHandleStorageKey(selection, this._variables);
          this._handleFieldPayloads.push({
            /* $FlowFixMe[class-object-subtyping] added when improving typing
             * for this parameters */
            args,
            dataID: RelayModernRecord.getDataID(record),
            fieldKey,
            handle: selection.handle,
            handleKey,
            handleArgs: selection.handleArgs
              ? /* $FlowFixMe[class-object-subtyping] added when improving typing
                 * for this parameters */
                getArgumentValues(selection.handleArgs, this._variables)
              : {},
          });
          break;
        case MODULE_IMPORT:
          this._normalizeModuleImport(node, selection, record, data);
          break;
        case DEFER:
          this._normalizeDefer(selection, record, data);
          break;
        case STREAM:
          this._normalizeStream(selection, record, data);
          break;
        case CLIENT_EXTENSION:
          const isClientExtension = this._isClientExtension;
          this._isClientExtension = true;
          this._traverseSelections(selection, record, data);
          this._isClientExtension = isClientExtension;
          break;
        case CLIENT_COMPONENT:
          if (this._shouldProcessClientComponents === false) {
            break;
          }
          this._traverseSelections(selection.fragment, record, data);
          break;
        case FLIGHT_FIELD:
          if (RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD) {
            this._normalizeFlightField(node, selection, record, data);
          } else {
            throw new Error('Flight fields are not yet supported.');
          }
          break;
        case ACTOR_CHANGE:
          this._normalizeActorChange(node, selection, record, data);
          break;
        default:
          (selection: empty);
          invariant(
            false,
            'RelayResponseNormalizer(): Unexpected ast kind `%s`.',
            selection.kind,
          );
      }
    }
  }

  _normalizeDefer(
    defer: NormalizationDefer,
    record: Record,
    data: PayloadData,
  ) {
    const isDeferred = defer.if === null || this._getVariableValue(defer.if);
    if (__DEV__) {
      warning(
        typeof isDeferred === 'boolean',
        'RelayResponseNormalizer: Expected value for @defer `if` argument to ' +
          'be a boolean, got `%s`.',
        isDeferred,
      );
    }
    if (isDeferred === false) {
      // If defer is disabled there will be no additional response chunk:
      // normalize the data already present.
      this._traverseSelections(defer, record, data);
    } else {
      // Otherwise data *for this selection* should not be present: enqueue
      // metadata to process the subsequent response chunk.
      this._incrementalPlaceholders.push({
        kind: 'defer',
        data,
        label: defer.label,
        path: [...this._path],
        selector: createNormalizationSelector(
          defer,
          RelayModernRecord.getDataID(record),
          this._variables,
        ),
        typeName: RelayModernRecord.getType(record),
        actorIdentifier: this._actorIdentifier,
      });
    }
  }

  _normalizeStream(
    stream: NormalizationStream,
    record: Record,
    data: PayloadData,
  ) {
    // Always normalize regardless of whether streaming is enabled or not,
    // this populates the initial array value (including any items when
    // initial_count > 0).
    this._traverseSelections(stream, record, data);
    const isStreamed = stream.if === null || this._getVariableValue(stream.if);
    if (__DEV__) {
      warning(
        typeof isStreamed === 'boolean',
        'RelayResponseNormalizer: Expected value for @stream `if` argument ' +
          'to be a boolean, got `%s`.',
        isStreamed,
      );
    }
    if (isStreamed === true) {
      // If streaming is enabled, *also* emit metadata to process any
      // response chunks that may be delivered.
      this._incrementalPlaceholders.push({
        kind: 'stream',
        label: stream.label,
        path: [...this._path],
        parentID: RelayModernRecord.getDataID(record),
        node: stream,
        variables: this._variables,
        actorIdentifier: this._actorIdentifier,
      });
    }
  }

  _normalizeModuleImport(
    parent: NormalizationNode,
    moduleImport: NormalizationModuleImport,
    record: Record,
    data: PayloadData,
  ) {
    invariant(
      typeof data === 'object' && data,
      'RelayResponseNormalizer: Expected data for @module to be an object.',
    );
    const typeName: string = RelayModernRecord.getType(record);
    const componentKey = getModuleComponentKey(moduleImport.documentName);
    const componentReference = data[componentKey];
    RelayModernRecord.setValue(
      record,
      componentKey,
      componentReference ?? null,
    );
    const operationKey = getModuleOperationKey(moduleImport.documentName);
    const operationReference = data[operationKey];
    RelayModernRecord.setValue(
      record,
      operationKey,
      operationReference ?? null,
    );
    if (operationReference != null) {
      this._followupPayloads.push({
        kind: 'ModuleImportPayload',
        args: moduleImport.args,
        data,
        dataID: RelayModernRecord.getDataID(record),
        operationReference,
        path: [...this._path],
        typeName,
        variables: this._variables,
        actorIdentifier: this._actorIdentifier,
      });
    }
  }

  _normalizeField(
    parent: NormalizationNode,
    selection: NormalizationLinkedField | NormalizationScalarField,
    record: Record,
    data: PayloadData,
  ) {
    invariant(
      typeof data === 'object' && data,
      'writeField(): Expected data for field `%s` to be an object.',
      selection.name,
    );
    const responseKey = selection.alias || selection.name;
    const storageKey = getStorageKey(selection, this._variables);
    const fieldValue = data[responseKey];
    if (fieldValue == null) {
      if (fieldValue === undefined) {
        // Fields may be missing in the response in two main cases:
        // - Inside a client extension: the server will not generally return
        //   values for these fields, but a local update may provide them.
        // - Inside an abstract type refinement where the concrete type does
        //   not conform to the interface/union.
        // However an otherwise-required field may also be missing if the server
        // is configured to skip fields with `null` values, in which case the
        // client is assumed to be correctly configured with
        // treatMissingFieldsAsNull=true.
        const isOptionalField =
          this._isClientExtension || this._isUnmatchedAbstractType;

        if (isOptionalField) {
          // Field not expected to exist regardless of whether the server is pruning null
          // fields or not.
          return;
        } else if (!this._treatMissingFieldsAsNull) {
          // Not optional and the server is not pruning null fields: field is expected
          // to be present
          if (__DEV__) {
            warning(
              false,
              'RelayResponseNormalizer: Payload did not contain a value ' +
                'for field `%s: %s`. Check that you are parsing with the same ' +
                'query that was used to fetch the payload.',
              responseKey,
              storageKey,
            );
          }
          return;
        }
      }
      if (__DEV__) {
        if (selection.kind === SCALAR_FIELD) {
          this._validateConflictingFieldsWithIdenticalId(
            record,
            storageKey,
            fieldValue,
          );
        }
      }
      RelayModernRecord.setValue(record, storageKey, null);
      return;
    }

    if (selection.kind === SCALAR_FIELD) {
      if (__DEV__) {
        this._validateConflictingFieldsWithIdenticalId(
          record,
          storageKey,
          fieldValue,
        );
      }
      RelayModernRecord.setValue(record, storageKey, fieldValue);
    } else if (selection.kind === LINKED_FIELD) {
      this._path.push(responseKey);
      if (selection.plural) {
        this._normalizePluralLink(selection, record, storageKey, fieldValue);
      } else {
        this._normalizeLink(selection, record, storageKey, fieldValue);
      }
      this._path.pop();
    } else {
      (selection: empty);
      invariant(
        false,
        'RelayResponseNormalizer(): Unexpected ast kind `%s` during normalization.',
        selection.kind,
      );
    }
  }

  _normalizeActorChange(
    parent: NormalizationNode,
    selection: NormalizationActorChange,
    record: Record,
    data: PayloadData,
  ) {
    const field = selection.linkedField;
    invariant(
      typeof data === 'object' && data,
      '_normalizeActorChange(): Expected data for field `%s` to be an object.',
      field.name,
    );
    const responseKey = field.alias || field.name;
    const storageKey = getStorageKey(field, this._variables);
    const fieldValue = data[responseKey];

    if (fieldValue == null) {
      if (fieldValue === undefined) {
        const isOptionalField =
          this._isClientExtension || this._isUnmatchedAbstractType;

        if (isOptionalField) {
          return;
        } else if (!this._treatMissingFieldsAsNull) {
          if (__DEV__) {
            warning(
              false,
              'RelayResponseNormalizer: Payload did not contain a value ' +
                'for field `%s: %s`. Check that you are parsing with the same ' +
                'query that was used to fetch the payload.',
              responseKey,
              storageKey,
            );
          }
          return;
        }
      }
      RelayModernRecord.setValue(record, storageKey, null);
      return;
    }

    const actorIdentifier = getActorIdentifierFromPayload(fieldValue);
    if (actorIdentifier == null) {
      if (__DEV__) {
        warning(
          false,
          'RelayResponseNormalizer: Payload did not contain a value ' +
            'for field `%s`. Check that you are parsing with the same ' +
            'query that was used to fetch the payload. Payload is `%s`.',
          ACTOR_IDENTIFIER_FIELD_NAME,
          JSON.stringify(fieldValue, null, 2),
        );
      }
      RelayModernRecord.setValue(record, storageKey, null);
      return;
    }

    // $FlowFixMe[incompatible-call]
    const typeName = field.concreteType ?? this._getRecordType(fieldValue);
    const nextID =
      this._getDataId(
        // $FlowFixMe[incompatible-call]
        fieldValue,
        typeName,
      ) ||
      RelayModernRecord.getLinkedRecordID(record, storageKey) ||
      generateClientID(RelayModernRecord.getDataID(record), storageKey);

    invariant(
      typeof nextID === 'string',
      'RelayResponseNormalizer: Expected id on field `%s` to be a string.',
      storageKey,
    );

    RelayModernRecord.setActorLinkedRecordID(
      record,
      storageKey,
      actorIdentifier,
      nextID,
    );

    this._followupPayloads.push({
      kind: 'ActorPayload',
      data: (fieldValue: $FlowFixMe),
      dataID: nextID,
      path: [...this._path, responseKey],
      typeName,
      variables: this._variables,
      node: field,
      actorIdentifier,
    });
  }

  _normalizeFlightField(
    parent: NormalizationNode,
    selection: NormalizationFlightField,
    record: Record,
    data: PayloadData,
  ) {
    const responseKey = selection.alias || selection.name;
    const storageKey = getStorageKey(selection, this._variables);
    const fieldValue = data[responseKey];

    if (fieldValue == null) {
      if (fieldValue === undefined) {
        // Flight field may be missing in the response if:
        // - It is inside an abstract type refinement where the concrete type does
        //   not conform to the interface/union.
        // However an otherwise-required field may also be missing if the server
        // is configured to skip fields with `null` values, in which case the
        // client is assumed to be correctly configured with
        // treatMissingFieldsAsNull=true.
        if (this._isUnmatchedAbstractType) {
          // Field not expected to exist regardless of whether the server is pruning null
          // fields or not.
          return;
        } else {
          // Not optional and the server is not pruning null fields: field is expected
          // to be present
          invariant(
            this._treatMissingFieldsAsNull,
            'RelayResponseNormalizer: Payload did not contain a value for ' +
              'field `%s: %s`. Check that you are parsing with the same ' +
              'query that was used to fetch the payload.',
            responseKey,
            storageKey,
          );
        }
      }
      RelayModernRecord.setValue(record, storageKey, null);
      return;
    }

    const reactFlightPayload = refineToReactFlightPayloadData(fieldValue);
    const reactFlightPayloadDeserializer = this._reactFlightPayloadDeserializer;

    invariant(
      reactFlightPayload != null,
      'RelayResponseNormalizer: Expected React Flight payload data to be an ' +
        'object with `status`, tree`, `queries` and `errors` properties, got ' +
        '`%s`.',
      fieldValue,
    );
    invariant(
      typeof reactFlightPayloadDeserializer === 'function',
      'RelayResponseNormalizer: Expected reactFlightPayloadDeserializer to ' +
        'be a function, got `%s`.',
      reactFlightPayloadDeserializer,
    );

    if (reactFlightPayload.errors.length > 0) {
      if (typeof this._reactFlightServerErrorHandler === 'function') {
        this._reactFlightServerErrorHandler(
          reactFlightPayload.status,
          reactFlightPayload.errors,
        );
      } else {
        warning(
          false,
          'RelayResponseNormalizer: Received server errors for field `%s`.\n\n' +
            '%s\n%s',
          responseKey,
          reactFlightPayload.errors[0].message,
          reactFlightPayload.errors[0].stack,
        );
      }
    }

    const reactFlightID = generateClientID(
      RelayModernRecord.getDataID(record),
      getStorageKey(selection, this._variables),
    );
    let reactFlightClientResponseRecord = this._recordSource.get(reactFlightID);
    if (reactFlightClientResponseRecord == null) {
      reactFlightClientResponseRecord = RelayModernRecord.create(
        reactFlightID,
        REACT_FLIGHT_TYPE_NAME,
      );
      this._recordSource.set(reactFlightID, reactFlightClientResponseRecord);
    }

    if (reactFlightPayload.tree == null) {
      // This typically indicates that a fatal server error prevented rows from
      // being written. When this occurs, we should not continue normalization of
      // the Flight field because the row response is malformed.
      //
      // Receiving empty rows is OK because it can indicate the start of a stream.
      warning(
        false,
        'RelayResponseNormalizer: Expected `tree` not to be null. This ' +
          'typically indicates that a fatal server error prevented any Server ' +
          'Component rows from being written.',
      );
      // We create the flight record with a null value for the tree
      // and empty reachable definitions
      RelayModernRecord.setValue(
        reactFlightClientResponseRecord,
        REACT_FLIGHT_TREE_STORAGE_KEY,
        null,
      );
      RelayModernRecord.setValue(
        reactFlightClientResponseRecord,
        REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
        [],
      );
      RelayModernRecord.setLinkedRecordID(record, storageKey, reactFlightID);
      return;
    }

    // We store the deserialized reactFlightClientResponse in a separate
    // record and link it to the parent record. This is so we can GC the Flight
    // tree later even if the parent record is still reachable.
    const reactFlightClientResponse = reactFlightPayloadDeserializer(
      reactFlightPayload.tree,
    );

    RelayModernRecord.setValue(
      reactFlightClientResponseRecord,
      REACT_FLIGHT_TREE_STORAGE_KEY,
      reactFlightClientResponse,
    );

    const reachableExecutableDefinitions: Array<ReactFlightReachableExecutableDefinitions> = [];
    for (const query of reactFlightPayload.queries) {
      if (query.response.data != null) {
        this._followupPayloads.push({
          kind: 'ModuleImportPayload',
          args: null,
          data: query.response.data,
          dataID: ROOT_ID,
          operationReference: query.module,
          path: [],
          typeName: ROOT_TYPE,
          variables: query.variables,
          actorIdentifier: this._actorIdentifier,
        });
      }
      reachableExecutableDefinitions.push({
        module: query.module,
        variables: query.variables,
      });
    }
    for (const fragment of reactFlightPayload.fragments) {
      if (fragment.response.data != null) {
        this._followupPayloads.push({
          kind: 'ModuleImportPayload',
          args: null,
          data: fragment.response.data,
          dataID: fragment.__id,
          operationReference: fragment.module,
          path: [],
          typeName: fragment.__typename,
          variables: fragment.variables,
          actorIdentifier: this._actorIdentifier,
        });
      }
      reachableExecutableDefinitions.push({
        module: fragment.module,
        variables: fragment.variables,
      });
    }
    RelayModernRecord.setValue(
      reactFlightClientResponseRecord,
      REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
      reachableExecutableDefinitions,
    );
    RelayModernRecord.setLinkedRecordID(record, storageKey, reactFlightID);
  }

  _normalizeLink(
    field: NormalizationLinkedField,
    record: Record,
    storageKey: string,
    fieldValue: mixed,
  ): void {
    invariant(
      typeof fieldValue === 'object' && fieldValue,
      'RelayResponseNormalizer: Expected data for field `%s` to be an object.',
      storageKey,
    );
    const nextID =
      this._getDataId(
        // $FlowFixMe[incompatible-variance]
        fieldValue,
        // $FlowFixMe[incompatible-variance]
        field.concreteType ?? this._getRecordType(fieldValue),
      ) ||
      // Reuse previously generated client IDs
      RelayModernRecord.getLinkedRecordID(record, storageKey) ||
      generateClientID(RelayModernRecord.getDataID(record), storageKey);
    invariant(
      typeof nextID === 'string',
      'RelayResponseNormalizer: Expected id on field `%s` to be a string.',
      storageKey,
    );
    if (__DEV__) {
      this._validateConflictingLinkedFieldsWithIdenticalId(
        record,
        RelayModernRecord.getLinkedRecordID(record, storageKey),
        nextID,
        storageKey,
      );
    }
    RelayModernRecord.setLinkedRecordID(record, storageKey, nextID);
    let nextRecord = this._recordSource.get(nextID);
    if (!nextRecord) {
      // $FlowFixMe[incompatible-variance]
      const typeName = field.concreteType || this._getRecordType(fieldValue);
      nextRecord = RelayModernRecord.create(nextID, typeName);
      this._recordSource.set(nextID, nextRecord);
    } else if (__DEV__) {
      this._validateRecordType(nextRecord, field, fieldValue);
    }
    // $FlowFixMe[incompatible-variance]
    this._traverseSelections(field, nextRecord, fieldValue);
  }

  _normalizePluralLink(
    field: NormalizationLinkedField,
    record: Record,
    storageKey: string,
    fieldValue: mixed,
  ): void {
    invariant(
      Array.isArray(fieldValue),
      'RelayResponseNormalizer: Expected data for field `%s` to be an array ' +
        'of objects.',
      storageKey,
    );
    const prevIDs = RelayModernRecord.getLinkedRecordIDs(record, storageKey);
    const nextIDs = [];
    fieldValue.forEach((item, nextIndex) => {
      // validate response data
      if (item == null) {
        nextIDs.push(item);
        return;
      }
      this._path.push(String(nextIndex));
      invariant(
        typeof item === 'object',
        'RelayResponseNormalizer: Expected elements for field `%s` to be ' +
          'objects.',
        storageKey,
      );
      const nextID =
        this._getDataId(
          // $FlowFixMe[incompatible-variance]
          item,
          // $FlowFixMe[incompatible-variance]
          field.concreteType ?? this._getRecordType(item),
        ) ||
        (prevIDs && prevIDs[nextIndex]) || // Reuse previously generated client IDs:
        generateClientID(
          RelayModernRecord.getDataID(record),
          storageKey,
          nextIndex,
        );
      invariant(
        typeof nextID === 'string',
        'RelayResponseNormalizer: Expected id of elements of field `%s` to ' +
          'be strings.',
        storageKey,
      );

      nextIDs.push(nextID);
      let nextRecord = this._recordSource.get(nextID);
      if (!nextRecord) {
        // $FlowFixMe[incompatible-variance]
        const typeName = field.concreteType || this._getRecordType(item);
        nextRecord = RelayModernRecord.create(nextID, typeName);
        this._recordSource.set(nextID, nextRecord);
      } else if (__DEV__) {
        this._validateRecordType(nextRecord, field, item);
      }
      // NOTE: the check to strip __DEV__ code only works for simple
      // `if (__DEV__)`
      if (__DEV__) {
        if (prevIDs) {
          this._validateConflictingLinkedFieldsWithIdenticalId(
            record,
            prevIDs[nextIndex],
            nextID,
            storageKey,
          );
        }
      }
      // $FlowFixMe[incompatible-variance]
      this._traverseSelections(field, nextRecord, item);
      this._path.pop();
    });
    RelayModernRecord.setLinkedRecordIDs(record, storageKey, nextIDs);
  }

  /**
   * Warns if the type of the record does not match the type of the field/payload.
   */
  _validateRecordType(
    record: Record,
    field: NormalizationLinkedField,
    payload: Object,
  ): void {
    const typeName = field.concreteType ?? this._getRecordType(payload);
    const dataID = RelayModernRecord.getDataID(record);
    warning(
      (isClientID(dataID) && dataID !== ROOT_ID) ||
        RelayModernRecord.getType(record) === typeName,
      'RelayResponseNormalizer: Invalid record `%s`. Expected %s to be ' +
        'consistent, but the record was assigned conflicting types `%s` ' +
        'and `%s`. The GraphQL server likely violated the globally unique ' +
        'id requirement by returning the same id for different objects.',
      dataID,
      TYPENAME_KEY,
      RelayModernRecord.getType(record),
      typeName,
    );
  }

  /**
   * Warns if a single response contains conflicting fields with the same id
   */
  _validateConflictingFieldsWithIdenticalId(
    record: Record,
    storageKey: string,
    fieldValue: mixed,
  ): void {
    // NOTE: Only call this function in DEV
    if (__DEV__) {
      const dataID = RelayModernRecord.getDataID(record);
      var previousValue = RelayModernRecord.getValue(record, storageKey);
      warning(
        storageKey === TYPENAME_KEY ||
          previousValue === undefined ||
          areEqual(previousValue, fieldValue),
        'RelayResponseNormalizer: Invalid record. The record contains two ' +
          'instances of the same id: `%s` with conflicting field, %s and its values: %s and %s. ' +
          'If two fields are different but share ' +
          'the same id, one field will overwrite the other.',
        dataID,
        storageKey,
        previousValue,
        fieldValue,
      );
    }
  }

  /**
   * Warns if a single response contains conflicting fields with the same id
   */
  _validateConflictingLinkedFieldsWithIdenticalId(
    record: Record,
    prevID: ?DataID,
    nextID: DataID,
    storageKey: string,
  ): void {
    // NOTE: Only call this function in DEV
    if (__DEV__) {
      warning(
        prevID === undefined || prevID === nextID,
        'RelayResponseNormalizer: Invalid record. The record contains ' +
          'references to the conflicting field, %s and its id values: %s and %s. ' +
          'We need to make sure that the record the field points ' +
          'to remains consistent or one field will overwrite the other.',
        storageKey,
        prevID,
        nextID,
      );
    }
  }
}

module.exports = {
  normalize,
};
