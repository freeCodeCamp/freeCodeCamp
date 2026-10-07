/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @emails oncall+relay
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var RelayConcreteNode = require('../util/RelayConcreteNode');

var RelayFeatureFlags = require('../util/RelayFeatureFlags');

var RelayModernRecord = require('./RelayModernRecord');

var RelayRecordSourceMutator = require('../mutations/RelayRecordSourceMutator');

var RelayRecordSourceProxy = require('../mutations/RelayRecordSourceProxy');

var RelayStoreReactFlightUtils = require('./RelayStoreReactFlightUtils');

var RelayStoreUtils = require('./RelayStoreUtils');

var cloneRelayHandleSourceField = require('./cloneRelayHandleSourceField');

var cloneRelayScalarHandleSourceField = require('./cloneRelayScalarHandleSourceField');

var getOperation = require('../util/getOperation');

var invariant = require('invariant');

var _require = require('./ClientID'),
    isClientID = _require.isClientID;

var _require2 = require('./RelayConcreteVariables'),
    getLocalVariables = _require2.getLocalVariables;

var _require3 = require('./RelayRecordState'),
    EXISTENT = _require3.EXISTENT,
    UNKNOWN = _require3.UNKNOWN;

var _require4 = require('./TypeID'),
    generateTypeID = _require4.generateTypeID;

var ACTOR_CHANGE = RelayConcreteNode.ACTOR_CHANGE,
    CONDITION = RelayConcreteNode.CONDITION,
    CLIENT_COMPONENT = RelayConcreteNode.CLIENT_COMPONENT,
    CLIENT_EXTENSION = RelayConcreteNode.CLIENT_EXTENSION,
    DEFER = RelayConcreteNode.DEFER,
    FLIGHT_FIELD = RelayConcreteNode.FLIGHT_FIELD,
    FRAGMENT_SPREAD = RelayConcreteNode.FRAGMENT_SPREAD,
    INLINE_FRAGMENT = RelayConcreteNode.INLINE_FRAGMENT,
    LINKED_FIELD = RelayConcreteNode.LINKED_FIELD,
    LINKED_HANDLE = RelayConcreteNode.LINKED_HANDLE,
    MODULE_IMPORT = RelayConcreteNode.MODULE_IMPORT,
    SCALAR_FIELD = RelayConcreteNode.SCALAR_FIELD,
    SCALAR_HANDLE = RelayConcreteNode.SCALAR_HANDLE,
    STREAM = RelayConcreteNode.STREAM,
    TYPE_DISCRIMINATOR = RelayConcreteNode.TYPE_DISCRIMINATOR;
var ROOT_ID = RelayStoreUtils.ROOT_ID,
    getModuleOperationKey = RelayStoreUtils.getModuleOperationKey,
    getStorageKey = RelayStoreUtils.getStorageKey,
    getArgumentValues = RelayStoreUtils.getArgumentValues;
/**
 * Synchronously check whether the records required to fulfill the given
 * `selector` are present in `source`.
 *
 * If a field is missing, it uses the provided handlers to attempt to substitute
 * data. The `target` will store all records that are modified because of a
 * successful substitution.
 *
 * If all records are present, returns `true`, otherwise `false`.
 */

function check(getSourceForActor, getTargetForActor, defaultActorIdentifier, selector, handlers, operationLoader, getDataID, shouldProcessClientComponents) {
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;
  var checker = new DataChecker(getSourceForActor, getTargetForActor, defaultActorIdentifier, variables, handlers, operationLoader, getDataID, shouldProcessClientComponents);
  return checker.check(node, dataID);
}
/**
 * @private
 */


var DataChecker = /*#__PURE__*/function () {
  function DataChecker(getSourceForActor, getTargetForActor, defaultActorIdentifier, variables, handlers, operationLoader, getDataID, shouldProcessClientComponents) {
    this._getSourceForActor = getSourceForActor;
    this._getTargetForActor = getTargetForActor;
    this._getDataID = getDataID;
    this._source = getSourceForActor(defaultActorIdentifier);
    this._mutatorRecordSourceProxyCache = new Map();

    var _this$_getMutatorAndR = this._getMutatorAndRecordProxyForActor(defaultActorIdentifier),
        mutator = _this$_getMutatorAndR[0],
        recordSourceProxy = _this$_getMutatorAndR[1];

    this._mostRecentlyInvalidatedAt = null;
    this._handlers = handlers;
    this._mutator = mutator;
    this._operationLoader = operationLoader !== null && operationLoader !== void 0 ? operationLoader : null;
    this._recordSourceProxy = recordSourceProxy;
    this._recordWasMissing = false;
    this._variables = variables;
    this._shouldProcessClientComponents = shouldProcessClientComponents;
  }

  var _proto = DataChecker.prototype;

  _proto._getMutatorAndRecordProxyForActor = function _getMutatorAndRecordProxyForActor(actorIdentifier) {
    var tuple = this._mutatorRecordSourceProxyCache.get(actorIdentifier);

    if (tuple == null) {
      var target = this._getTargetForActor(actorIdentifier);

      var mutator = new RelayRecordSourceMutator(this._getSourceForActor(actorIdentifier), target);
      var recordSourceProxy = new RelayRecordSourceProxy(mutator, this._getDataID);
      tuple = [mutator, recordSourceProxy];

      this._mutatorRecordSourceProxyCache.set(actorIdentifier, tuple);
    }

    return tuple;
  };

  _proto.check = function check(node, dataID) {
    this._traverse(node, dataID);

    return this._recordWasMissing === true ? {
      status: 'missing',
      mostRecentlyInvalidatedAt: this._mostRecentlyInvalidatedAt
    } : {
      status: 'available',
      mostRecentlyInvalidatedAt: this._mostRecentlyInvalidatedAt
    };
  };

  _proto._getVariableValue = function _getVariableValue(name) {
    !this._variables.hasOwnProperty(name) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayAsyncLoader(): Undefined variable `%s`.', name) : invariant(false) : void 0; // $FlowFixMe[cannot-write]

    return this._variables[name];
  };

  _proto._handleMissing = function _handleMissing() {
    this._recordWasMissing = true;
  };

  _proto._getDataForHandlers = function _getDataForHandlers(field, dataID) {
    return {
      /* $FlowFixMe[class-object-subtyping] added when improving typing for
       * this parameters */
      args: field.args ? getArgumentValues(field.args, this._variables) : {},
      // Getting a snapshot of the record state is potentially expensive since
      // we will need to merge the sink and source records. Since we do not create
      // any new records in this process, it is probably reasonable to provide
      // handlers with a copy of the source record.
      // The only thing that the provided record will not contain is fields
      // added by previous handlers.
      record: this._source.get(dataID)
    };
  };

  _proto._handleMissingScalarField = function _handleMissingScalarField(field, dataID) {
    if (field.name === 'id' && field.alias == null && isClientID(dataID)) {
      return undefined;
    }

    var _this$_getDataForHand = this._getDataForHandlers(field, dataID),
        args = _this$_getDataForHand.args,
        record = _this$_getDataForHand.record;

    var _iterator = (0, _createForOfIteratorHelper2["default"])(this._handlers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var handler = _step.value;

        if (handler.kind === 'scalar') {
          var newValue = handler.handle(field, record, args, this._recordSourceProxy);

          if (newValue !== undefined) {
            return newValue;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this._handleMissing();
  };

  _proto._handleMissingLinkField = function _handleMissingLinkField(field, dataID) {
    var _this$_getDataForHand2 = this._getDataForHandlers(field, dataID),
        args = _this$_getDataForHand2.args,
        record = _this$_getDataForHand2.record;

    var _iterator2 = (0, _createForOfIteratorHelper2["default"])(this._handlers),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var handler = _step2.value;

        if (handler.kind === 'linked') {
          var newValue = handler.handle(field, record, args, this._recordSourceProxy);

          if (newValue !== undefined && (newValue === null || this._mutator.getStatus(newValue) === EXISTENT)) {
            return newValue;
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    this._handleMissing();
  };

  _proto._handleMissingPluralLinkField = function _handleMissingPluralLinkField(field, dataID) {
    var _this = this;

    var _this$_getDataForHand3 = this._getDataForHandlers(field, dataID),
        args = _this$_getDataForHand3.args,
        record = _this$_getDataForHand3.record;

    var _iterator3 = (0, _createForOfIteratorHelper2["default"])(this._handlers),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var handler = _step3.value;

        if (handler.kind === 'pluralLinked') {
          var newValue = handler.handle(field, record, args, this._recordSourceProxy);

          if (newValue != null) {
            var allItemsKnown = newValue.every(function (linkedID) {
              return linkedID != null && _this._mutator.getStatus(linkedID) === EXISTENT;
            });

            if (allItemsKnown) {
              return newValue;
            }
          } else if (newValue === null) {
            return null;
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    this._handleMissing();
  };

  _proto._traverse = function _traverse(node, dataID) {
    var status = this._mutator.getStatus(dataID);

    if (status === UNKNOWN) {
      this._handleMissing();
    }

    if (status === EXISTENT) {
      var record = this._source.get(dataID);

      var invalidatedAt = RelayModernRecord.getInvalidationEpoch(record);

      if (invalidatedAt != null) {
        this._mostRecentlyInvalidatedAt = this._mostRecentlyInvalidatedAt != null ? Math.max(this._mostRecentlyInvalidatedAt, invalidatedAt) : invalidatedAt;
      }

      this._traverseSelections(node.selections, dataID);
    }
  };

  _proto._traverseSelections = function _traverseSelections(selections, dataID) {
    var _this2 = this;

    selections.forEach(function (selection) {
      switch (selection.kind) {
        case SCALAR_FIELD:
          _this2._checkScalar(selection, dataID);

          break;

        case LINKED_FIELD:
          if (selection.plural) {
            _this2._checkPluralLink(selection, dataID);
          } else {
            _this2._checkLink(selection, dataID);
          }

          break;

        case ACTOR_CHANGE:
          _this2._checkActorChange(selection.linkedField, dataID);

          break;

        case CONDITION:
          var conditionValue = Boolean(_this2._getVariableValue(selection.condition));

          if (conditionValue === selection.passingValue) {
            _this2._traverseSelections(selection.selections, dataID);
          }

          break;

        case INLINE_FRAGMENT:
          {
            var _abstractKey = selection.abstractKey;

            if (_abstractKey == null) {
              // concrete type refinement: only check data if the type exactly matches
              var typeName = _this2._mutator.getType(dataID);

              if (typeName === selection.type) {
                _this2._traverseSelections(selection.selections, dataID);
              }
            } else {
              // Abstract refinement: check data depending on whether the type
              // conforms to the interface/union or not:
              // - Type known to _not_ implement the interface: don't check the selections.
              // - Type is known _to_ implement the interface: check selections.
              // - Unknown whether the type implements the interface: don't check the selections
              //   and treat the data as missing; we do this because the Relay Compiler
              //   guarantees that the type discriminator will always be fetched.
              var _recordType = _this2._mutator.getType(dataID);

              !(_recordType != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DataChecker: Expected record `%s` to have a known type', dataID) : invariant(false) : void 0;

              var _typeID = generateTypeID(_recordType);

              var _implementsInterface = _this2._mutator.getValue(_typeID, _abstractKey);

              if (_implementsInterface === true) {
                _this2._traverseSelections(selection.selections, dataID);
              } else if (_implementsInterface == null) {
                // unsure if the type implements the interface: data is
                // missing so don't bother reading the fragment
                _this2._handleMissing();
              } // else false: known to not implement the interface

            }

            break;
          }

        case LINKED_HANDLE:
          {
            // Handles have no selections themselves; traverse the original field
            // where the handle was set-up instead.
            var handleField = cloneRelayHandleSourceField(selection, selections, _this2._variables);

            if (handleField.plural) {
              _this2._checkPluralLink(handleField, dataID);
            } else {
              _this2._checkLink(handleField, dataID);
            }

            break;
          }

        case SCALAR_HANDLE:
          {
            var _handleField = cloneRelayScalarHandleSourceField(selection, selections, _this2._variables);

            _this2._checkScalar(_handleField, dataID);

            break;
          }

        case MODULE_IMPORT:
          _this2._checkModuleImport(selection, dataID);

          break;

        case DEFER:
        case STREAM:
          _this2._traverseSelections(selection.selections, dataID);

          break;

        case FRAGMENT_SPREAD:
          var prevVariables = _this2._variables;
          _this2._variables = getLocalVariables(_this2._variables, selection.fragment.argumentDefinitions, selection.args);

          _this2._traverseSelections(selection.fragment.selections, dataID);

          _this2._variables = prevVariables;
          break;

        case CLIENT_EXTENSION:
          var recordWasMissing = _this2._recordWasMissing;

          _this2._traverseSelections(selection.selections, dataID);

          _this2._recordWasMissing = recordWasMissing;
          break;

        case TYPE_DISCRIMINATOR:
          var abstractKey = selection.abstractKey;

          var recordType = _this2._mutator.getType(dataID);

          !(recordType != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DataChecker: Expected record `%s` to have a known type', dataID) : invariant(false) : void 0;
          var typeID = generateTypeID(recordType);

          var implementsInterface = _this2._mutator.getValue(typeID, abstractKey);

          if (implementsInterface == null) {
            // unsure if the type implements the interface: data is
            // missing
            _this2._handleMissing();
          } // else: if it does or doesn't implement, we don't need to check or skip anything else


          break;

        case FLIGHT_FIELD:
          if (RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD) {
            _this2._checkFlightField(selection, dataID);
          } else {
            throw new Error('Flight fields are not yet supported.');
          }

          break;

        case CLIENT_COMPONENT:
          if (_this2._shouldProcessClientComponents === false) {
            break;
          }

          _this2._traverseSelections(selection.fragment.selections, dataID);

          break;

        default:
          selection;
          !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayAsyncLoader(): Unexpected ast kind `%s`.', selection.kind) : invariant(false) : void 0;
      }
    });
  };

  _proto._checkModuleImport = function _checkModuleImport(moduleImport, dataID) {
    var operationLoader = this._operationLoader;
    !(operationLoader !== null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DataChecker: Expected an operationLoader to be configured when using `@module`.') : invariant(false) : void 0;
    var operationKey = getModuleOperationKey(moduleImport.documentName);

    var operationReference = this._mutator.getValue(dataID, operationKey);

    if (operationReference == null) {
      if (operationReference === undefined) {
        this._handleMissing();
      }

      return;
    }

    var normalizationRootNode = operationLoader.get(operationReference);

    if (normalizationRootNode != null) {
      var operation = getOperation(normalizationRootNode);
      var prevVariables = this._variables;
      this._variables = getLocalVariables(this._variables, operation.argumentDefinitions, moduleImport.args);

      this._traverse(operation, dataID);

      this._variables = prevVariables;
    } else {
      // If the fragment is not available, we assume that the data cannot have been
      // processed yet and must therefore be missing.
      this._handleMissing();
    }
  };

  _proto._checkScalar = function _checkScalar(field, dataID) {
    var storageKey = getStorageKey(field, this._variables);

    var fieldValue = this._mutator.getValue(dataID, storageKey);

    if (fieldValue === undefined) {
      fieldValue = this._handleMissingScalarField(field, dataID);

      if (fieldValue !== undefined) {
        this._mutator.setValue(dataID, storageKey, fieldValue);
      }
    }
  };

  _proto._checkLink = function _checkLink(field, dataID) {
    var storageKey = getStorageKey(field, this._variables);

    var linkedID = this._mutator.getLinkedRecordID(dataID, storageKey);

    if (linkedID === undefined) {
      linkedID = this._handleMissingLinkField(field, dataID);

      if (linkedID != null) {
        this._mutator.setLinkedRecordID(dataID, storageKey, linkedID);
      } else if (linkedID === null) {
        this._mutator.setValue(dataID, storageKey, null);
      }
    }

    if (linkedID != null) {
      this._traverse(field, linkedID);
    }
  };

  _proto._checkPluralLink = function _checkPluralLink(field, dataID) {
    var _this3 = this;

    var storageKey = getStorageKey(field, this._variables);

    var linkedIDs = this._mutator.getLinkedRecordIDs(dataID, storageKey);

    if (linkedIDs === undefined) {
      linkedIDs = this._handleMissingPluralLinkField(field, dataID);

      if (linkedIDs != null) {
        this._mutator.setLinkedRecordIDs(dataID, storageKey, linkedIDs);
      } else if (linkedIDs === null) {
        this._mutator.setValue(dataID, storageKey, null);
      }
    }

    if (linkedIDs) {
      linkedIDs.forEach(function (linkedID) {
        if (linkedID != null) {
          _this3._traverse(field, linkedID);
        }
      });
    }
  };

  _proto._checkActorChange = function _checkActorChange(field, dataID) {
    var storageKey = getStorageKey(field, this._variables);

    var record = this._source.get(dataID);

    var tuple = record != null ? RelayModernRecord.getActorLinkedRecordID(record, storageKey) : record;

    if (tuple == null) {
      if (tuple === undefined) {
        this._handleMissing();
      }
    } else {
      var _actorIdentifier = tuple[0],
          linkedID = tuple[1];
      var prevSource = this._source;
      var prevMutator = this._mutator;
      var prevRecordSourceProxy = this._recordSourceProxy;

      var _this$_getMutatorAndR2 = this._getMutatorAndRecordProxyForActor(_actorIdentifier),
          mutator = _this$_getMutatorAndR2[0],
          recordSourceProxy = _this$_getMutatorAndR2[1];

      this._source = this._getSourceForActor(_actorIdentifier);
      this._mutator = mutator;
      this._recordSourceProxy = recordSourceProxy;

      this._traverse(field, linkedID);

      this._source = prevSource;
      this._mutator = prevMutator;
      this._recordSourceProxy = prevRecordSourceProxy;
    }
  };

  _proto._checkFlightField = function _checkFlightField(field, dataID) {
    var storageKey = getStorageKey(field, this._variables);

    var linkedID = this._mutator.getLinkedRecordID(dataID, storageKey);

    if (linkedID == null) {
      if (linkedID === undefined) {
        this._handleMissing();

        return;
      }

      return;
    }

    var tree = this._mutator.getValue(linkedID, RelayStoreReactFlightUtils.REACT_FLIGHT_TREE_STORAGE_KEY);

    var reachableExecutableDefinitions = this._mutator.getValue(linkedID, RelayStoreReactFlightUtils.REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY);

    if (tree == null || !Array.isArray(reachableExecutableDefinitions)) {
      this._handleMissing();

      return;
    }

    var operationLoader = this._operationLoader;
    !(operationLoader !== null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DataChecker: Expected an operationLoader to be configured when using ' + 'React Flight.') : invariant(false) : void 0; // In Flight, the variables that are in scope for reachable executable
    // definitions aren't the same as what's in scope for the outer query.

    var prevVariables = this._variables; // $FlowFixMe[incompatible-cast]

    var _iterator4 = (0, _createForOfIteratorHelper2["default"])(reachableExecutableDefinitions),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var definition = _step4.value;
        this._variables = definition.variables;
        var normalizationRootNode = operationLoader.get(definition.module);

        if (normalizationRootNode != null) {
          var operation = getOperation(normalizationRootNode);

          this._traverseSelections(operation.selections, ROOT_ID);
        } else {
          // If the fragment is not available, we assume that the data cannot have
          // been processed yet and must therefore be missing.
          this._handleMissing();
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    this._variables = prevVariables;
  };

  return DataChecker;
}();

module.exports = {
  check: check
};