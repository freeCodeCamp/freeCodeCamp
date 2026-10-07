import { naturalCompare } from '../jsutils/naturalCompare.mjs';
import { Kind } from '../language/kinds.mjs';
/**
 * Sort ValueNode.
 *
 * This function returns a sorted copy of the given ValueNode.
 *
 * @internal
 */

export function sortValueNode(valueNode) {
  switch (valueNode.kind) {
    case Kind.OBJECT:
      return { ...valueNode, fields: sortFields(valueNode.fields) };

    case Kind.LIST:
      return { ...valueNode, values: valueNode.values.map(sortValueNode) };

    case Kind.INT:
    case Kind.FLOAT:
    case Kind.STRING:
    case Kind.BOOLEAN:
    case Kind.NULL:
    case Kind.ENUM:
    case Kind.VARIABLE:
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
      naturalCompare(fieldA.name.value, fieldB.name.value),
    );
}
