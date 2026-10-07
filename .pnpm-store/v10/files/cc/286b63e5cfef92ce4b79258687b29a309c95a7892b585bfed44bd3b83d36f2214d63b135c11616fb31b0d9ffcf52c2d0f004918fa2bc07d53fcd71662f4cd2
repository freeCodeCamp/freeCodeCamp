'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.isConstValueNode = isConstValueNode;
exports.isDefinitionNode = isDefinitionNode;
exports.isExecutableDefinitionNode = isExecutableDefinitionNode;
exports.isSchemaCoordinateNode = isSchemaCoordinateNode;
exports.isSelectionNode = isSelectionNode;
exports.isTypeDefinitionNode = isTypeDefinitionNode;
exports.isTypeExtensionNode = isTypeExtensionNode;
exports.isTypeNode = isTypeNode;
exports.isTypeSystemDefinitionNode = isTypeSystemDefinitionNode;
exports.isTypeSystemExtensionNode = isTypeSystemExtensionNode;
exports.isValueNode = isValueNode;

var _kinds = require('./kinds.js');

function isDefinitionNode(node) {
  return (
    isExecutableDefinitionNode(node) ||
    isTypeSystemDefinitionNode(node) ||
    isTypeSystemExtensionNode(node)
  );
}

function isExecutableDefinitionNode(node) {
  return (
    node.kind === _kinds.Kind.OPERATION_DEFINITION ||
    node.kind === _kinds.Kind.FRAGMENT_DEFINITION
  );
}

function isSelectionNode(node) {
  return (
    node.kind === _kinds.Kind.FIELD ||
    node.kind === _kinds.Kind.FRAGMENT_SPREAD ||
    node.kind === _kinds.Kind.INLINE_FRAGMENT
  );
}

function isValueNode(node) {
  return (
    node.kind === _kinds.Kind.VARIABLE ||
    node.kind === _kinds.Kind.INT ||
    node.kind === _kinds.Kind.FLOAT ||
    node.kind === _kinds.Kind.STRING ||
    node.kind === _kinds.Kind.BOOLEAN ||
    node.kind === _kinds.Kind.NULL ||
    node.kind === _kinds.Kind.ENUM ||
    node.kind === _kinds.Kind.LIST ||
    node.kind === _kinds.Kind.OBJECT
  );
}

function isConstValueNode(node) {
  return (
    isValueNode(node) &&
    (node.kind === _kinds.Kind.LIST
      ? node.values.some(isConstValueNode)
      : node.kind === _kinds.Kind.OBJECT
      ? node.fields.some((field) => isConstValueNode(field.value))
      : node.kind !== _kinds.Kind.VARIABLE)
  );
}

function isTypeNode(node) {
  return (
    node.kind === _kinds.Kind.NAMED_TYPE ||
    node.kind === _kinds.Kind.LIST_TYPE ||
    node.kind === _kinds.Kind.NON_NULL_TYPE
  );
}

function isTypeSystemDefinitionNode(node) {
  return (
    node.kind === _kinds.Kind.SCHEMA_DEFINITION ||
    isTypeDefinitionNode(node) ||
    node.kind === _kinds.Kind.DIRECTIVE_DEFINITION
  );
}

function isTypeDefinitionNode(node) {
  return (
    node.kind === _kinds.Kind.SCALAR_TYPE_DEFINITION ||
    node.kind === _kinds.Kind.OBJECT_TYPE_DEFINITION ||
    node.kind === _kinds.Kind.INTERFACE_TYPE_DEFINITION ||
    node.kind === _kinds.Kind.UNION_TYPE_DEFINITION ||
    node.kind === _kinds.Kind.ENUM_TYPE_DEFINITION ||
    node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION
  );
}

function isTypeSystemExtensionNode(node) {
  return (
    node.kind === _kinds.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node)
  );
}

function isTypeExtensionNode(node) {
  return (
    node.kind === _kinds.Kind.SCALAR_TYPE_EXTENSION ||
    node.kind === _kinds.Kind.OBJECT_TYPE_EXTENSION ||
    node.kind === _kinds.Kind.INTERFACE_TYPE_EXTENSION ||
    node.kind === _kinds.Kind.UNION_TYPE_EXTENSION ||
    node.kind === _kinds.Kind.ENUM_TYPE_EXTENSION ||
    node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION
  );
}

function isSchemaCoordinateNode(node) {
  return (
    node.kind === _kinds.Kind.TYPE_COORDINATE ||
    node.kind === _kinds.Kind.MEMBER_COORDINATE ||
    node.kind === _kinds.Kind.ARGUMENT_COORDINATE ||
    node.kind === _kinds.Kind.DIRECTIVE_COORDINATE ||
    node.kind === _kinds.Kind.DIRECTIVE_ARGUMENT_COORDINATE
  );
}
