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

var RelayConcreteNode = require('../util/RelayConcreteNode');

var RelayFeatureFlags = require('../util/RelayFeatureFlags');

var RelayModernRecord = require('./RelayModernRecord');

var RelayStoreReactFlightUtils = require('./RelayStoreReactFlightUtils');

var RelayStoreUtils = require('./RelayStoreUtils');

var cloneRelayHandleSourceField = require('./cloneRelayHandleSourceField');

var getOperation = require('../util/getOperation');

var invariant = require('invariant');

var _require = require('./RelayConcreteVariables'),
    getLocalVariables = _require.getLocalVariables;

var _require2 = require('./TypeID'),
    generateTypeID = _require2.generateTypeID;

var ACTOR_CHANGE = RelayConcreteNode.ACTOR_CHANGE,
    CONDITION = RelayConcreteNode.CONDITION,
    CLIENT_COMPONENT = RelayConcreteNode.CLIENT_COMPONENT,
    CLIENT_EXTENSION = RelayConcreteNode.CLIENT_EXTENSION,
    DEFER = RelayConcreteNode.DEFER,
    FLIGHT_FIELD = RelayConcreteNode.FLIGHT_FIELD,
    FRAGMENT_SPREAD = RelayConcreteNode.FRAGMENT_SPREAD,
    INLINE_FRAGMENT = RelayConcreteNode.INLINE_FRAGMENT,
    LINKED_FIELD = RelayConcreteNode.LINKED_FIELD,
    MODULE_IMPORT = RelayConcreteNode.MODULE_IMPORT,
    LINKED_HANDLE = RelayConcreteNode.LINKED_HANDLE,
    SCALAR_FIELD = RelayConcreteNode.SCALAR_FIELD,
    SCALAR_HANDLE = RelayConcreteNode.SCALAR_HANDLE,
    STREAM = RelayConcreteNode.STREAM,
    TYPE_DISCRIMINATOR = RelayConcreteNode.TYPE_DISCRIMINATOR;
var ROOT_ID = RelayStoreUtils.ROOT_ID,
    getStorageKey = RelayStoreUtils.getStorageKey,
    getModuleOperationKey = RelayStoreUtils.getModuleOperationKey;

function mark(recordSource, selector, references, operationLoader, shouldProcessClientComponents) {
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;
  var marker = new RelayReferenceMarker(recordSource, variables, references, operationLoader, shouldProcessClientComponents);
  marker.mark(node, dataID);
}
/**
 * @private
 */


var RelayReferenceMarker = /*#__PURE__*/function () {
  function RelayReferenceMarker(recordSource, variables, references, operationLoader, shouldProcessClientComponents) {
    this._operationLoader = operationLoader !== null && operationLoader !== void 0 ? operationLoader : null;
    this._operationName = null;
    this._recordSource = recordSource;
    this._references = references;
    this._variables = variables;
    this._shouldProcessClientComponents = shouldProcessClientComponents;
  }

  var _proto = RelayReferenceMarker.prototype;

  _proto.mark = function mark(node, dataID) {
    if (node.kind === 'Operation' || node.kind === 'SplitOperation') {
      this._operationName = node.name;
    }

    this._traverse(node, dataID);
  };

  _proto._traverse = function _traverse(node, dataID) {
    this._references.add(dataID);

    var record = this._recordSource.get(dataID);

    if (record == null) {
      return;
    }

    this._traverseSelections(node.selections, record);
  };

  _proto._getVariableValue = function _getVariableValue(name) {
    !this._variables.hasOwnProperty(name) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayReferenceMarker(): Undefined variable `%s`.', name) : invariant(false) : void 0; // $FlowFixMe[cannot-write]

    return this._variables[name];
  };

  _proto._traverseSelections = function _traverseSelections(selections, record) {
    var _this = this;

    selections.forEach(function (selection) {
      /* eslint-disable no-fallthrough */
      switch (selection.kind) {
        case ACTOR_CHANGE:
          // TODO: T89695151 Support multi-actor record sources in RelayReferenceMarker.js
          _this._traverseLink(selection.linkedField, record);

          break;

        case LINKED_FIELD:
          if (selection.plural) {
            _this._traversePluralLink(selection, record);
          } else {
            _this._traverseLink(selection, record);
          }

          break;

        case CONDITION:
          var conditionValue = Boolean(_this._getVariableValue(selection.condition));

          if (conditionValue === selection.passingValue) {
            _this._traverseSelections(selection.selections, record);
          }

          break;

        case INLINE_FRAGMENT:
          if (selection.abstractKey == null) {
            var typeName = RelayModernRecord.getType(record);

            if (typeName != null && typeName === selection.type) {
              _this._traverseSelections(selection.selections, record);
            }
          } else {
            var _typeName = RelayModernRecord.getType(record);

            var typeID = generateTypeID(_typeName);

            _this._references.add(typeID);

            _this._traverseSelections(selection.selections, record);
          }

          break;

        case FRAGMENT_SPREAD:
          var prevVariables = _this._variables;
          _this._variables = getLocalVariables(_this._variables, selection.fragment.argumentDefinitions, selection.args);

          _this._traverseSelections(selection.fragment.selections, record);

          _this._variables = prevVariables;
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
          var handleField = cloneRelayHandleSourceField(selection, selections, _this._variables);

          if (handleField.plural) {
            _this._traversePluralLink(handleField, record);
          } else {
            _this._traverseLink(handleField, record);
          }

          break;

        case DEFER:
        case STREAM:
          _this._traverseSelections(selection.selections, record);

          break;

        case SCALAR_FIELD:
        case SCALAR_HANDLE:
          break;

        case TYPE_DISCRIMINATOR:
          {
            var _typeName2 = RelayModernRecord.getType(record);

            var _typeID = generateTypeID(_typeName2);

            _this._references.add(_typeID);

            break;
          }

        case MODULE_IMPORT:
          _this._traverseModuleImport(selection, record);

          break;

        case CLIENT_EXTENSION:
          _this._traverseSelections(selection.selections, record);

          break;

        case FLIGHT_FIELD:
          if (RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD) {
            _this._traverseFlightField(selection, record);
          } else {
            throw new Error('Flight fields are not yet supported.');
          }

          break;

        case CLIENT_COMPONENT:
          if (_this._shouldProcessClientComponents === false) {
            break;
          }

          _this._traverseSelections(selection.fragment.selections, record);

          break;

        default:
          selection;
          !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayReferenceMarker: Unknown AST node `%s`.', selection) : invariant(false) : void 0;
      }
    });
  };

  _proto._traverseModuleImport = function _traverseModuleImport(moduleImport, record) {
    var _this$_operationName;

    var operationLoader = this._operationLoader;
    !(operationLoader !== null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayReferenceMarker: Expected an operationLoader to be configured when using `@module`. ' + 'Could not load fragment `%s` in operation `%s`.', moduleImport.fragmentName, (_this$_operationName = this._operationName) !== null && _this$_operationName !== void 0 ? _this$_operationName : '(unknown)') : invariant(false) : void 0;
    var operationKey = getModuleOperationKey(moduleImport.documentName);
    var operationReference = RelayModernRecord.getValue(record, operationKey);

    if (operationReference == null) {
      return;
    }

    var normalizationRootNode = operationLoader.get(operationReference);

    if (normalizationRootNode != null) {
      var operation = getOperation(normalizationRootNode);
      var prevVariables = this._variables;
      this._variables = getLocalVariables(this._variables, operation.argumentDefinitions, moduleImport.args);

      this._traverseSelections(operation.selections, record);

      this._variables = prevVariables;
    } // Otherwise, if the operation is not available, we assume that the data
    // cannot have been processed yet and therefore isn't in the store to
    // begin with.

  };

  _proto._traverseLink = function _traverseLink(field, record) {
    var storageKey = getStorageKey(field, this._variables);
    var linkedID = RelayModernRecord.getLinkedRecordID(record, storageKey);

    if (linkedID == null) {
      return;
    }

    this._traverse(field, linkedID);
  };

  _proto._traversePluralLink = function _traversePluralLink(field, record) {
    var _this2 = this;

    var storageKey = getStorageKey(field, this._variables);
    var linkedIDs = RelayModernRecord.getLinkedRecordIDs(record, storageKey);

    if (linkedIDs == null) {
      return;
    }

    linkedIDs.forEach(function (linkedID) {
      if (linkedID != null) {
        _this2._traverse(field, linkedID);
      }
    });
  };

  _proto._traverseFlightField = function _traverseFlightField(field, record) {
    var storageKey = getStorageKey(field, this._variables);
    var linkedID = RelayModernRecord.getLinkedRecordID(record, storageKey);

    if (linkedID == null) {
      return;
    }

    this._references.add(linkedID);

    var reactFlightClientResponseRecord = this._recordSource.get(linkedID);

    if (reactFlightClientResponseRecord == null) {
      return;
    }

    var reachableExecutableDefinitions = RelayModernRecord.getValue(reactFlightClientResponseRecord, RelayStoreReactFlightUtils.REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY);

    if (!Array.isArray(reachableExecutableDefinitions)) {
      return;
    }

    var operationLoader = this._operationLoader;
    !(operationLoader !== null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DataChecker: Expected an operationLoader to be configured when using ' + 'React Flight') : invariant(false) : void 0; // In Flight, the variables that are in scope for reachable executable
    // definitions aren't the same as what's in scope for the outer query.

    var prevVariables = this._variables; // $FlowFixMe[incompatible-cast]

    var _iterator = (0, _createForOfIteratorHelper2["default"])(reachableExecutableDefinitions),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var definition = _step.value;
        this._variables = definition.variables;
        var operationReference = definition.module;
        var normalizationRootNode = operationLoader.get(operationReference);

        if (normalizationRootNode != null) {
          var operation = getOperation(normalizationRootNode);

          this._traverse(operation, ROOT_ID);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this._variables = prevVariables;
  };

  return RelayReferenceMarker;
}();

module.exports = {
  mark: mark
};