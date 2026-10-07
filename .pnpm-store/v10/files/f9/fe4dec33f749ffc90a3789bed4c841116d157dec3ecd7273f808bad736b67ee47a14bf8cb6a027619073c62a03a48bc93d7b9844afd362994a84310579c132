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

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var RelayFeatureFlags = require('../util/RelayFeatureFlags');

var RelayModernRecord = require('./RelayModernRecord');

var areEqual = require("fbjs/lib/areEqual");

var invariant = require('invariant');

var warning = require("fbjs/lib/warning");

var _require = require('../multi-actor-environment/ActorUtils'),
    ACTOR_IDENTIFIER_FIELD_NAME = _require.ACTOR_IDENTIFIER_FIELD_NAME,
    getActorIdentifierFromPayload = _require.getActorIdentifierFromPayload;

var _require2 = require('../util/RelayConcreteNode'),
    ACTOR_CHANGE = _require2.ACTOR_CHANGE,
    CONDITION = _require2.CONDITION,
    CLIENT_COMPONENT = _require2.CLIENT_COMPONENT,
    CLIENT_EXTENSION = _require2.CLIENT_EXTENSION,
    DEFER = _require2.DEFER,
    FLIGHT_FIELD = _require2.FLIGHT_FIELD,
    FRAGMENT_SPREAD = _require2.FRAGMENT_SPREAD,
    INLINE_FRAGMENT = _require2.INLINE_FRAGMENT,
    LINKED_FIELD = _require2.LINKED_FIELD,
    LINKED_HANDLE = _require2.LINKED_HANDLE,
    MODULE_IMPORT = _require2.MODULE_IMPORT,
    SCALAR_FIELD = _require2.SCALAR_FIELD,
    SCALAR_HANDLE = _require2.SCALAR_HANDLE,
    STREAM = _require2.STREAM,
    TYPE_DISCRIMINATOR = _require2.TYPE_DISCRIMINATOR;

var _require3 = require('./ClientID'),
    generateClientID = _require3.generateClientID,
    isClientID = _require3.isClientID;

var _require4 = require('./RelayConcreteVariables'),
    getLocalVariables = _require4.getLocalVariables;

var _require5 = require('./RelayModernSelector'),
    createNormalizationSelector = _require5.createNormalizationSelector;

var _require6 = require('./RelayStoreReactFlightUtils'),
    refineToReactFlightPayloadData = _require6.refineToReactFlightPayloadData,
    REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY = _require6.REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
    REACT_FLIGHT_TREE_STORAGE_KEY = _require6.REACT_FLIGHT_TREE_STORAGE_KEY,
    REACT_FLIGHT_TYPE_NAME = _require6.REACT_FLIGHT_TYPE_NAME;

var _require7 = require('./RelayStoreUtils'),
    getArgumentValues = _require7.getArgumentValues,
    getHandleStorageKey = _require7.getHandleStorageKey,
    getModuleComponentKey = _require7.getModuleComponentKey,
    getModuleOperationKey = _require7.getModuleOperationKey,
    getStorageKey = _require7.getStorageKey,
    TYPENAME_KEY = _require7.TYPENAME_KEY,
    ROOT_ID = _require7.ROOT_ID,
    ROOT_TYPE = _require7.ROOT_TYPE;

var _require8 = require('./TypeID'),
    generateTypeID = _require8.generateTypeID,
    TYPE_SCHEMA_TYPE = _require8.TYPE_SCHEMA_TYPE;

/**
 * Normalizes the results of a query and standard GraphQL response, writing the
 * normalized records/fields into the given MutableRecordSource.
 */
function normalize(recordSource, selector, response, options) {
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;
  var normalizer = new RelayResponseNormalizer(recordSource, variables, options);
  return normalizer.normalizeResponse(node, dataID, response);
}
/**
 * @private
 *
 * Helper for handling payloads.
 */


var RelayResponseNormalizer = /*#__PURE__*/function () {
  function RelayResponseNormalizer(recordSource, variables, options) {
    this._actorIdentifier = options.actorIdentifier;
    this._getDataId = options.getDataID;
    this._handleFieldPayloads = [];
    this._treatMissingFieldsAsNull = options.treatMissingFieldsAsNull;
    this._incrementalPlaceholders = [];
    this._isClientExtension = false;
    this._isUnmatchedAbstractType = false;
    this._followupPayloads = [];
    this._path = options.path ? (0, _toConsumableArray2["default"])(options.path) : [];
    this._recordSource = recordSource;
    this._variables = variables;
    this._reactFlightPayloadDeserializer = options.reactFlightPayloadDeserializer;
    this._reactFlightServerErrorHandler = options.reactFlightServerErrorHandler;
    this._shouldProcessClientComponents = options.shouldProcessClientComponents;
  }

  var _proto = RelayResponseNormalizer.prototype;

  _proto.normalizeResponse = function normalizeResponse(node, dataID, data) {
    var record = this._recordSource.get(dataID);

    !record ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer(): Expected root record `%s` to exist.', dataID) : invariant(false) : void 0;

    this._traverseSelections(node, record, data);

    return {
      errors: null,
      fieldPayloads: this._handleFieldPayloads,
      incrementalPlaceholders: this._incrementalPlaceholders,
      followupPayloads: this._followupPayloads,
      source: this._recordSource,
      isFinal: false
    };
  };

  _proto._getVariableValue = function _getVariableValue(name) {
    !this._variables.hasOwnProperty(name) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer(): Undefined variable `%s`.', name) : invariant(false) : void 0; // $FlowFixMe[cannot-write]

    return this._variables[name];
  };

  _proto._getRecordType = function _getRecordType(data) {
    var typeName = data[TYPENAME_KEY];
    !(typeName != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer(): Expected a typename for record `%s`.', JSON.stringify(data, null, 2)) : invariant(false) : void 0;
    return typeName;
  };

  _proto._traverseSelections = function _traverseSelections(node, record, data) {
    for (var i = 0; i < node.selections.length; i++) {
      var selection = node.selections[i];

      switch (selection.kind) {
        case SCALAR_FIELD:
        case LINKED_FIELD:
          this._normalizeField(node, selection, record, data);

          break;

        case CONDITION:
          var conditionValue = Boolean(this._getVariableValue(selection.condition));

          if (conditionValue === selection.passingValue) {
            this._traverseSelections(selection, record, data);
          }

          break;

        case FRAGMENT_SPREAD:
          {
            var prevVariables = this._variables;
            this._variables = getLocalVariables(this._variables, selection.fragment.argumentDefinitions, selection.args);

            this._traverseSelections(selection.fragment, record, data);

            this._variables = prevVariables;
            break;
          }

        case INLINE_FRAGMENT:
          {
            var abstractKey = selection.abstractKey;

            if (abstractKey == null) {
              var _typeName = RelayModernRecord.getType(record);

              if (_typeName === selection.type) {
                this._traverseSelections(selection, record, data);
              }
            } else {
              var implementsInterface = data.hasOwnProperty(abstractKey);

              var _typeName2 = RelayModernRecord.getType(record);

              var typeID = generateTypeID(_typeName2);

              var typeRecord = this._recordSource.get(typeID);

              if (typeRecord == null) {
                typeRecord = RelayModernRecord.create(typeID, TYPE_SCHEMA_TYPE);

                this._recordSource.set(typeID, typeRecord);
              }

              RelayModernRecord.setValue(typeRecord, abstractKey, implementsInterface);

              if (implementsInterface) {
                this._traverseSelections(selection, record, data);
              }
            }

            break;
          }

        case TYPE_DISCRIMINATOR:
          {
            var _abstractKey = selection.abstractKey;

            var _implementsInterface = data.hasOwnProperty(_abstractKey);

            var _typeName3 = RelayModernRecord.getType(record);

            var _typeID = generateTypeID(_typeName3);

            var _typeRecord = this._recordSource.get(_typeID);

            if (_typeRecord == null) {
              _typeRecord = RelayModernRecord.create(_typeID, TYPE_SCHEMA_TYPE);

              this._recordSource.set(_typeID, _typeRecord);
            }

            RelayModernRecord.setValue(_typeRecord, _abstractKey, _implementsInterface);
            break;
          }

        case LINKED_HANDLE:
        case SCALAR_HANDLE:
          var args = selection.args ? getArgumentValues(selection.args, this._variables) : {};
          var fieldKey = getStorageKey(selection, this._variables);
          var handleKey = getHandleStorageKey(selection, this._variables);

          this._handleFieldPayloads.push({
            /* $FlowFixMe[class-object-subtyping] added when improving typing
             * for this parameters */
            args: args,
            dataID: RelayModernRecord.getDataID(record),
            fieldKey: fieldKey,
            handle: selection.handle,
            handleKey: handleKey,
            handleArgs: selection.handleArgs ?
            /* $FlowFixMe[class-object-subtyping] added when improving typing
             * for this parameters */
            getArgumentValues(selection.handleArgs, this._variables) : {}
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
          var isClientExtension = this._isClientExtension;
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
          selection;
          !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer(): Unexpected ast kind `%s`.', selection.kind) : invariant(false) : void 0;
      }
    }
  };

  _proto._normalizeDefer = function _normalizeDefer(defer, record, data) {
    var isDeferred = defer["if"] === null || this._getVariableValue(defer["if"]);

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? warning(typeof isDeferred === 'boolean', 'RelayResponseNormalizer: Expected value for @defer `if` argument to ' + 'be a boolean, got `%s`.', isDeferred) : void 0;
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
        data: data,
        label: defer.label,
        path: (0, _toConsumableArray2["default"])(this._path),
        selector: createNormalizationSelector(defer, RelayModernRecord.getDataID(record), this._variables),
        typeName: RelayModernRecord.getType(record),
        actorIdentifier: this._actorIdentifier
      });
    }
  };

  _proto._normalizeStream = function _normalizeStream(stream, record, data) {
    // Always normalize regardless of whether streaming is enabled or not,
    // this populates the initial array value (including any items when
    // initial_count > 0).
    this._traverseSelections(stream, record, data);

    var isStreamed = stream["if"] === null || this._getVariableValue(stream["if"]);

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? warning(typeof isStreamed === 'boolean', 'RelayResponseNormalizer: Expected value for @stream `if` argument ' + 'to be a boolean, got `%s`.', isStreamed) : void 0;
    }

    if (isStreamed === true) {
      // If streaming is enabled, *also* emit metadata to process any
      // response chunks that may be delivered.
      this._incrementalPlaceholders.push({
        kind: 'stream',
        label: stream.label,
        path: (0, _toConsumableArray2["default"])(this._path),
        parentID: RelayModernRecord.getDataID(record),
        node: stream,
        variables: this._variables,
        actorIdentifier: this._actorIdentifier
      });
    }
  };

  _proto._normalizeModuleImport = function _normalizeModuleImport(parent, moduleImport, record, data) {
    !(typeof data === 'object' && data) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer: Expected data for @module to be an object.') : invariant(false) : void 0;
    var typeName = RelayModernRecord.getType(record);
    var componentKey = getModuleComponentKey(moduleImport.documentName);
    var componentReference = data[componentKey];
    RelayModernRecord.setValue(record, componentKey, componentReference !== null && componentReference !== void 0 ? componentReference : null);
    var operationKey = getModuleOperationKey(moduleImport.documentName);
    var operationReference = data[operationKey];
    RelayModernRecord.setValue(record, operationKey, operationReference !== null && operationReference !== void 0 ? operationReference : null);

    if (operationReference != null) {
      this._followupPayloads.push({
        kind: 'ModuleImportPayload',
        args: moduleImport.args,
        data: data,
        dataID: RelayModernRecord.getDataID(record),
        operationReference: operationReference,
        path: (0, _toConsumableArray2["default"])(this._path),
        typeName: typeName,
        variables: this._variables,
        actorIdentifier: this._actorIdentifier
      });
    }
  };

  _proto._normalizeField = function _normalizeField(parent, selection, record, data) {
    !(typeof data === 'object' && data) ? process.env.NODE_ENV !== "production" ? invariant(false, 'writeField(): Expected data for field `%s` to be an object.', selection.name) : invariant(false) : void 0;
    var responseKey = selection.alias || selection.name;
    var storageKey = getStorageKey(selection, this._variables);
    var fieldValue = data[responseKey];

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
        var isOptionalField = this._isClientExtension || this._isUnmatchedAbstractType;

        if (isOptionalField) {
          // Field not expected to exist regardless of whether the server is pruning null
          // fields or not.
          return;
        } else if (!this._treatMissingFieldsAsNull) {
          // Not optional and the server is not pruning null fields: field is expected
          // to be present
          if (process.env.NODE_ENV !== "production") {
            process.env.NODE_ENV !== "production" ? warning(false, 'RelayResponseNormalizer: Payload did not contain a value ' + 'for field `%s: %s`. Check that you are parsing with the same ' + 'query that was used to fetch the payload.', responseKey, storageKey) : void 0;
          }

          return;
        }
      }

      if (process.env.NODE_ENV !== "production") {
        if (selection.kind === SCALAR_FIELD) {
          this._validateConflictingFieldsWithIdenticalId(record, storageKey, fieldValue);
        }
      }

      RelayModernRecord.setValue(record, storageKey, null);
      return;
    }

    if (selection.kind === SCALAR_FIELD) {
      if (process.env.NODE_ENV !== "production") {
        this._validateConflictingFieldsWithIdenticalId(record, storageKey, fieldValue);
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
      selection;
      !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer(): Unexpected ast kind `%s` during normalization.', selection.kind) : invariant(false) : void 0;
    }
  };

  _proto._normalizeActorChange = function _normalizeActorChange(parent, selection, record, data) {
    var _field$concreteType;

    var field = selection.linkedField;
    !(typeof data === 'object' && data) ? process.env.NODE_ENV !== "production" ? invariant(false, '_normalizeActorChange(): Expected data for field `%s` to be an object.', field.name) : invariant(false) : void 0;
    var responseKey = field.alias || field.name;
    var storageKey = getStorageKey(field, this._variables);
    var fieldValue = data[responseKey];

    if (fieldValue == null) {
      if (fieldValue === undefined) {
        var isOptionalField = this._isClientExtension || this._isUnmatchedAbstractType;

        if (isOptionalField) {
          return;
        } else if (!this._treatMissingFieldsAsNull) {
          if (process.env.NODE_ENV !== "production") {
            process.env.NODE_ENV !== "production" ? warning(false, 'RelayResponseNormalizer: Payload did not contain a value ' + 'for field `%s: %s`. Check that you are parsing with the same ' + 'query that was used to fetch the payload.', responseKey, storageKey) : void 0;
          }

          return;
        }
      }

      RelayModernRecord.setValue(record, storageKey, null);
      return;
    }

    var actorIdentifier = getActorIdentifierFromPayload(fieldValue);

    if (actorIdentifier == null) {
      if (process.env.NODE_ENV !== "production") {
        process.env.NODE_ENV !== "production" ? warning(false, 'RelayResponseNormalizer: Payload did not contain a value ' + 'for field `%s`. Check that you are parsing with the same ' + 'query that was used to fetch the payload. Payload is `%s`.', ACTOR_IDENTIFIER_FIELD_NAME, JSON.stringify(fieldValue, null, 2)) : void 0;
      }

      RelayModernRecord.setValue(record, storageKey, null);
      return;
    } // $FlowFixMe[incompatible-call]


    var typeName = (_field$concreteType = field.concreteType) !== null && _field$concreteType !== void 0 ? _field$concreteType : this._getRecordType(fieldValue);
    var nextID = this._getDataId( // $FlowFixMe[incompatible-call]
    fieldValue, typeName) || RelayModernRecord.getLinkedRecordID(record, storageKey) || generateClientID(RelayModernRecord.getDataID(record), storageKey);
    !(typeof nextID === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer: Expected id on field `%s` to be a string.', storageKey) : invariant(false) : void 0;
    RelayModernRecord.setActorLinkedRecordID(record, storageKey, actorIdentifier, nextID);

    this._followupPayloads.push({
      kind: 'ActorPayload',
      data: fieldValue,
      dataID: nextID,
      path: [].concat((0, _toConsumableArray2["default"])(this._path), [responseKey]),
      typeName: typeName,
      variables: this._variables,
      node: field,
      actorIdentifier: actorIdentifier
    });
  };

  _proto._normalizeFlightField = function _normalizeFlightField(parent, selection, record, data) {
    var responseKey = selection.alias || selection.name;
    var storageKey = getStorageKey(selection, this._variables);
    var fieldValue = data[responseKey];

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
          !this._treatMissingFieldsAsNull ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer: Payload did not contain a value for ' + 'field `%s: %s`. Check that you are parsing with the same ' + 'query that was used to fetch the payload.', responseKey, storageKey) : invariant(false) : void 0;
        }
      }

      RelayModernRecord.setValue(record, storageKey, null);
      return;
    }

    var reactFlightPayload = refineToReactFlightPayloadData(fieldValue);
    var reactFlightPayloadDeserializer = this._reactFlightPayloadDeserializer;
    !(reactFlightPayload != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer: Expected React Flight payload data to be an ' + 'object with `status`, tree`, `queries` and `errors` properties, got ' + '`%s`.', fieldValue) : invariant(false) : void 0;
    !(typeof reactFlightPayloadDeserializer === 'function') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer: Expected reactFlightPayloadDeserializer to ' + 'be a function, got `%s`.', reactFlightPayloadDeserializer) : invariant(false) : void 0;

    if (reactFlightPayload.errors.length > 0) {
      if (typeof this._reactFlightServerErrorHandler === 'function') {
        this._reactFlightServerErrorHandler(reactFlightPayload.status, reactFlightPayload.errors);
      } else {
        process.env.NODE_ENV !== "production" ? warning(false, 'RelayResponseNormalizer: Received server errors for field `%s`.\n\n' + '%s\n%s', responseKey, reactFlightPayload.errors[0].message, reactFlightPayload.errors[0].stack) : void 0;
      }
    }

    var reactFlightID = generateClientID(RelayModernRecord.getDataID(record), getStorageKey(selection, this._variables));

    var reactFlightClientResponseRecord = this._recordSource.get(reactFlightID);

    if (reactFlightClientResponseRecord == null) {
      reactFlightClientResponseRecord = RelayModernRecord.create(reactFlightID, REACT_FLIGHT_TYPE_NAME);

      this._recordSource.set(reactFlightID, reactFlightClientResponseRecord);
    }

    if (reactFlightPayload.tree == null) {
      // This typically indicates that a fatal server error prevented rows from
      // being written. When this occurs, we should not continue normalization of
      // the Flight field because the row response is malformed.
      //
      // Receiving empty rows is OK because it can indicate the start of a stream.
      process.env.NODE_ENV !== "production" ? warning(false, 'RelayResponseNormalizer: Expected `tree` not to be null. This ' + 'typically indicates that a fatal server error prevented any Server ' + 'Component rows from being written.') : void 0; // We create the flight record with a null value for the tree
      // and empty reachable definitions

      RelayModernRecord.setValue(reactFlightClientResponseRecord, REACT_FLIGHT_TREE_STORAGE_KEY, null);
      RelayModernRecord.setValue(reactFlightClientResponseRecord, REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY, []);
      RelayModernRecord.setLinkedRecordID(record, storageKey, reactFlightID);
      return;
    } // We store the deserialized reactFlightClientResponse in a separate
    // record and link it to the parent record. This is so we can GC the Flight
    // tree later even if the parent record is still reachable.


    var reactFlightClientResponse = reactFlightPayloadDeserializer(reactFlightPayload.tree);
    RelayModernRecord.setValue(reactFlightClientResponseRecord, REACT_FLIGHT_TREE_STORAGE_KEY, reactFlightClientResponse);
    var reachableExecutableDefinitions = [];

    var _iterator = (0, _createForOfIteratorHelper2["default"])(reactFlightPayload.queries),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var query = _step.value;

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
            actorIdentifier: this._actorIdentifier
          });
        }

        reachableExecutableDefinitions.push({
          module: query.module,
          variables: query.variables
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = (0, _createForOfIteratorHelper2["default"])(reactFlightPayload.fragments),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var fragment = _step2.value;

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
            actorIdentifier: this._actorIdentifier
          });
        }

        reachableExecutableDefinitions.push({
          module: fragment.module,
          variables: fragment.variables
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    RelayModernRecord.setValue(reactFlightClientResponseRecord, REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY, reachableExecutableDefinitions);
    RelayModernRecord.setLinkedRecordID(record, storageKey, reactFlightID);
  };

  _proto._normalizeLink = function _normalizeLink(field, record, storageKey, fieldValue) {
    var _field$concreteType2;

    !(typeof fieldValue === 'object' && fieldValue) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer: Expected data for field `%s` to be an object.', storageKey) : invariant(false) : void 0;
    var nextID = this._getDataId( // $FlowFixMe[incompatible-variance]
    fieldValue, // $FlowFixMe[incompatible-variance]
    (_field$concreteType2 = field.concreteType) !== null && _field$concreteType2 !== void 0 ? _field$concreteType2 : this._getRecordType(fieldValue)) || // Reuse previously generated client IDs
    RelayModernRecord.getLinkedRecordID(record, storageKey) || generateClientID(RelayModernRecord.getDataID(record), storageKey);
    !(typeof nextID === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer: Expected id on field `%s` to be a string.', storageKey) : invariant(false) : void 0;

    if (process.env.NODE_ENV !== "production") {
      this._validateConflictingLinkedFieldsWithIdenticalId(record, RelayModernRecord.getLinkedRecordID(record, storageKey), nextID, storageKey);
    }

    RelayModernRecord.setLinkedRecordID(record, storageKey, nextID);

    var nextRecord = this._recordSource.get(nextID);

    if (!nextRecord) {
      // $FlowFixMe[incompatible-variance]
      var _typeName4 = field.concreteType || this._getRecordType(fieldValue);

      nextRecord = RelayModernRecord.create(nextID, _typeName4);

      this._recordSource.set(nextID, nextRecord);
    } else if (process.env.NODE_ENV !== "production") {
      this._validateRecordType(nextRecord, field, fieldValue);
    } // $FlowFixMe[incompatible-variance]


    this._traverseSelections(field, nextRecord, fieldValue);
  };

  _proto._normalizePluralLink = function _normalizePluralLink(field, record, storageKey, fieldValue) {
    var _this = this;

    !Array.isArray(fieldValue) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer: Expected data for field `%s` to be an array ' + 'of objects.', storageKey) : invariant(false) : void 0;
    var prevIDs = RelayModernRecord.getLinkedRecordIDs(record, storageKey);
    var nextIDs = [];
    fieldValue.forEach(function (item, nextIndex) {
      var _field$concreteType3;

      // validate response data
      if (item == null) {
        nextIDs.push(item);
        return;
      }

      _this._path.push(String(nextIndex));

      !(typeof item === 'object') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer: Expected elements for field `%s` to be ' + 'objects.', storageKey) : invariant(false) : void 0;
      var nextID = _this._getDataId( // $FlowFixMe[incompatible-variance]
      item, // $FlowFixMe[incompatible-variance]
      (_field$concreteType3 = field.concreteType) !== null && _field$concreteType3 !== void 0 ? _field$concreteType3 : _this._getRecordType(item)) || prevIDs && prevIDs[nextIndex] || // Reuse previously generated client IDs:
      generateClientID(RelayModernRecord.getDataID(record), storageKey, nextIndex);
      !(typeof nextID === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayResponseNormalizer: Expected id of elements of field `%s` to ' + 'be strings.', storageKey) : invariant(false) : void 0;
      nextIDs.push(nextID);

      var nextRecord = _this._recordSource.get(nextID);

      if (!nextRecord) {
        // $FlowFixMe[incompatible-variance]
        var _typeName5 = field.concreteType || _this._getRecordType(item);

        nextRecord = RelayModernRecord.create(nextID, _typeName5);

        _this._recordSource.set(nextID, nextRecord);
      } else if (process.env.NODE_ENV !== "production") {
        _this._validateRecordType(nextRecord, field, item);
      } // NOTE: the check to strip __DEV__ code only works for simple
      // `if (__DEV__)`


      if (process.env.NODE_ENV !== "production") {
        if (prevIDs) {
          _this._validateConflictingLinkedFieldsWithIdenticalId(record, prevIDs[nextIndex], nextID, storageKey);
        }
      } // $FlowFixMe[incompatible-variance]


      _this._traverseSelections(field, nextRecord, item);

      _this._path.pop();
    });
    RelayModernRecord.setLinkedRecordIDs(record, storageKey, nextIDs);
  }
  /**
   * Warns if the type of the record does not match the type of the field/payload.
   */
  ;

  _proto._validateRecordType = function _validateRecordType(record, field, payload) {
    var _field$concreteType4;

    var typeName = (_field$concreteType4 = field.concreteType) !== null && _field$concreteType4 !== void 0 ? _field$concreteType4 : this._getRecordType(payload);
    var dataID = RelayModernRecord.getDataID(record);
    process.env.NODE_ENV !== "production" ? warning(isClientID(dataID) && dataID !== ROOT_ID || RelayModernRecord.getType(record) === typeName, 'RelayResponseNormalizer: Invalid record `%s`. Expected %s to be ' + 'consistent, but the record was assigned conflicting types `%s` ' + 'and `%s`. The GraphQL server likely violated the globally unique ' + 'id requirement by returning the same id for different objects.', dataID, TYPENAME_KEY, RelayModernRecord.getType(record), typeName) : void 0;
  }
  /**
   * Warns if a single response contains conflicting fields with the same id
   */
  ;

  _proto._validateConflictingFieldsWithIdenticalId = function _validateConflictingFieldsWithIdenticalId(record, storageKey, fieldValue) {
    // NOTE: Only call this function in DEV
    if (process.env.NODE_ENV !== "production") {
      var dataID = RelayModernRecord.getDataID(record);
      var previousValue = RelayModernRecord.getValue(record, storageKey);
      process.env.NODE_ENV !== "production" ? warning(storageKey === TYPENAME_KEY || previousValue === undefined || areEqual(previousValue, fieldValue), 'RelayResponseNormalizer: Invalid record. The record contains two ' + 'instances of the same id: `%s` with conflicting field, %s and its values: %s and %s. ' + 'If two fields are different but share ' + 'the same id, one field will overwrite the other.', dataID, storageKey, previousValue, fieldValue) : void 0;
    }
  }
  /**
   * Warns if a single response contains conflicting fields with the same id
   */
  ;

  _proto._validateConflictingLinkedFieldsWithIdenticalId = function _validateConflictingLinkedFieldsWithIdenticalId(record, prevID, nextID, storageKey) {
    // NOTE: Only call this function in DEV
    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? warning(prevID === undefined || prevID === nextID, 'RelayResponseNormalizer: Invalid record. The record contains ' + 'references to the conflicting field, %s and its id values: %s and %s. ' + 'We need to make sure that the record the field points ' + 'to remains consistent or one field will overwrite the other.', storageKey, prevID, nextID) : void 0;
    }
  };

  return RelayResponseNormalizer;
}();

module.exports = {
  normalize: normalize
};