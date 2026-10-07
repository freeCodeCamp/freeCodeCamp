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

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var IRTransformer = require('../core/IRTransformer');

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError;

var _require2 = require('relay-runtime'),
    ConnectionInterface = _require2.ConnectionInterface;

var DELETE_RECORD = 'deleteRecord';
var DELETE_EDGE = 'deleteEdge';
var APPEND_EDGE = 'appendEdge';
var PREPEND_EDGE = 'prependEdge';
var APPEND_NODE = 'appendNode';
var PREPEND_NODE = 'prependNode';
var EDGE_LINKED_FIELD_DIRECTIVES = [APPEND_EDGE, PREPEND_EDGE];
var NODE_LINKED_FIELD_DIRECTIVES = [APPEND_NODE, PREPEND_NODE];
var LINKED_FIELD_DIRECTIVES = [].concat(EDGE_LINKED_FIELD_DIRECTIVES, NODE_LINKED_FIELD_DIRECTIVES);
var SCHEMA_EXTENSION = "\n  directive @".concat(DELETE_RECORD, " on FIELD\n  directive @").concat(DELETE_EDGE, "(\n    connections: [ID!]!\n  ) on FIELD\n  directive @").concat(APPEND_EDGE, "(\n    connections: [ID!]!\n  ) on FIELD\n  directive @").concat(PREPEND_EDGE, "(\n    connections: [ID!]!\n  ) on FIELD\n  directive @").concat(APPEND_NODE, "(\n    connections: [ID!]!\n    edgeTypeName: String!\n  ) on FIELD\n  directive @").concat(PREPEND_NODE, "(\n    connections: [ID!]!\n    edgeTypeName: String!\n  ) on FIELD\n");

function transform(context) {
  return IRTransformer.transform(context, {
    ScalarField: visitScalarField,
    LinkedField: visitLinkedField,
    SplitOperation: skip,
    Fragment: skip
  });
}

function skip(node) {
  return node;
}

function visitScalarField(field) {
  var linkedFieldDirective = field.directives.find(function (directive) {
    return LINKED_FIELD_DIRECTIVES.indexOf(directive.name) > -1;
  });

  if (linkedFieldDirective != null) {
    throw createUserError("Invalid use of @".concat(linkedFieldDirective.name, " on scalar field '").concat(field.name, "'"), [linkedFieldDirective.loc]);
  }

  var deleteNodeDirective = field.directives.find(function (directive) {
    return directive.name === DELETE_RECORD;
  });
  var deleteEdgeDirective = field.directives.find(function (directive) {
    return directive.name === DELETE_EDGE;
  });

  if (deleteNodeDirective != null && deleteEdgeDirective != null) {
    throw createUserError("Both @deleteNode and @deleteEdge are used on field '".concat(field.name, "'. Only one directive is supported for now."), [deleteNodeDirective.loc, deleteEdgeDirective.loc]);
  }

  var targetDirective = deleteNodeDirective !== null && deleteNodeDirective !== void 0 ? deleteNodeDirective : deleteEdgeDirective;

  if (targetDirective == null) {
    return field;
  } // $FlowFixMe[incompatible-use]


  var schema = this.getContext().getSchema();

  if (!schema.isId(schema.getRawType(field.type))) {
    throw createUserError("Invalid use of @".concat(targetDirective.name, " on field '").concat(field.name, "'. Expected field to return an ID or list of ID values, got ").concat(schema.getTypeString(field.type), "."), [targetDirective.loc]);
  }

  var connectionsArg = targetDirective.args.find(function (arg) {
    return arg.name === 'connections';
  });
  var handle = {
    name: targetDirective.name,
    key: '',
    dynamicKey: null,
    filters: null,
    handleArgs: connectionsArg ? [connectionsArg] : undefined
  };
  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
    directives: field.directives.filter(function (directive) {
      return directive !== targetDirective;
    }),
    handles: field.handles ? [].concat((0, _toConsumableArray2["default"])(field.handles), [handle]) : [handle]
  });
}

function visitLinkedField(field) {
  // $FlowFixMe[incompatible-use]
  var transformedField = this.traverse(field);
  var deleteDirective = transformedField.directives.find(function (directive) {
    return directive.name === DELETE_RECORD;
  });

  if (deleteDirective != null) {
    throw createUserError("Invalid use of @".concat(deleteDirective.name, " on scalar field '").concat(transformedField.name, "'."), [deleteDirective.loc]);
  }

  var edgeDirective = transformedField.directives.find(function (directive) {
    return EDGE_LINKED_FIELD_DIRECTIVES.indexOf(directive.name) > -1;
  });
  var nodeDirective = transformedField.directives.find(function (directive) {
    return NODE_LINKED_FIELD_DIRECTIVES.indexOf(directive.name) > -1;
  });

  if (edgeDirective == null && nodeDirective == null) {
    return transformedField;
  }

  if (edgeDirective != null && nodeDirective != null) {
    throw createUserError("Invalid use of @".concat(edgeDirective.name, " and @").concat(nodeDirective.name, " on field '").concat(transformedField.name, "' - these directives cannot be used together."), [edgeDirective.loc]);
  }

  var targetDirective = edgeDirective !== null && edgeDirective !== void 0 ? edgeDirective : nodeDirective;
  var connectionsArg = targetDirective.args.find(function (arg) {
    return arg.name === 'connections';
  });

  if (connectionsArg == null) {
    throw createUserError("Expected the 'connections' argument to be defined on @".concat(targetDirective.name, "."), [targetDirective.loc]);
  } // $FlowFixMe[incompatible-use]


  var schema = this.getContext().getSchema();

  if (edgeDirective) {
    var fieldType = schema.getRawType(transformedField.type);
    var fields = schema.getFields(fieldType);
    var cursorFieldID;
    var nodeFieldID;

    var _iterator = (0, _createForOfIteratorHelper2["default"])(fields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var fieldID = _step.value;
        var fieldName = schema.getFieldName(fieldID);

        if (fieldName === ConnectionInterface.get().CURSOR) {
          cursorFieldID = fieldID;
        } else if (fieldName === ConnectionInterface.get().NODE) {
          nodeFieldID = fieldID;
        }
      } // Edge

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (cursorFieldID != null && nodeFieldID != null) {
      var handle = {
        name: edgeDirective.name,
        key: '',
        dynamicKey: null,
        filters: null,
        handleArgs: [connectionsArg]
      };
      return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedField), {}, {
        directives: transformedField.directives.filter(function (directive) {
          return directive !== edgeDirective;
        }),
        handles: transformedField.handles ? [].concat((0, _toConsumableArray2["default"])(transformedField.handles), [handle]) : [handle]
      });
    }

    throw createUserError("Unsupported use of @".concat(edgeDirective.name, " on field '").concat(transformedField.name, "', expected an edge field (a field with 'cursor' and 'node' selection)."), [targetDirective.loc]);
  } else {
    // Node
    var edgeTypeNameArg = nodeDirective.args.find(function (arg) {
      return arg.name === 'edgeTypeName';
    });

    if (!edgeTypeNameArg) {
      throw createUserError("Unsupported use of @".concat(nodeDirective.name, " on field '").concat(transformedField.name, "', 'edgeTypeName' argument must be provided."), [targetDirective.loc]);
    }

    var rawType = schema.getRawType(transformedField.type);

    if (schema.canHaveSelections(rawType)) {
      var _handle = {
        name: nodeDirective.name,
        key: '',
        dynamicKey: null,
        filters: null,
        handleArgs: [connectionsArg, edgeTypeNameArg]
      };
      return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedField), {}, {
        directives: transformedField.directives.filter(function (directive) {
          return directive !== nodeDirective;
        }),
        handles: transformedField.handles ? [].concat((0, _toConsumableArray2["default"])(transformedField.handles), [_handle]) : [_handle]
      });
    }

    throw createUserError("Unsupported use of @".concat(nodeDirective.name, " on field '").concat(transformedField.name, "'. Expected an object, union or interface, but got '").concat(schema.getTypeString(transformedField.type), "'."), [nodeDirective.loc]);
  }
}

module.exports = {
  SCHEMA_EXTENSION: SCHEMA_EXTENSION,
  transform: transform
};