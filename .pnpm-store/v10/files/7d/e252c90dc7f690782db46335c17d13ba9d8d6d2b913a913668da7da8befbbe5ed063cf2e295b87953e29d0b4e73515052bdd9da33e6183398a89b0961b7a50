'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.sortValueNode = sortValueNode;

var _naturalCompare = require('../jsutils/naturalCompare.js');

var _kinds = require('../language/kinds.js');

/**
 * Sort ValueNode.
 *
 * This function returns a sorted copy of the given ValueNode.
 *
 * @internal
 */
function sortValueNode(valueNode) {
  switch (valueNode.kind) {
    case _kinds.Kind.OBJECT:
      return { ...valueNode, fields: sortFields(valueNode.fields) };

    case _kinds.Kind.LIST:
      return { ...valueNode, values: valueNode.values.map(sortValueNode) };

    case _kinds.Kind.INT:
    case _kinds.Kind.FLOAT:
    case _kinds.Kind.STRING:
    case _kinds.Kind.BOOLEAN:
    case _kinds.Kind.NULL:
    case _kinds.Kind.ENUM:
    case _kinds.Kind.VARIABLE:
      return valueNode;
  }
}

function sortFields(fields) {
  return fields
    .map((fieldNode) => ({
      ...fieldNode,
      value: sortValueNode(fieldNode.value),
    }))
    .sort((fieldA, fieldB) =>
      (0, _naturalCompare.naturalCompare)(fieldA.name.value, fieldB.name.value),
    );
}
