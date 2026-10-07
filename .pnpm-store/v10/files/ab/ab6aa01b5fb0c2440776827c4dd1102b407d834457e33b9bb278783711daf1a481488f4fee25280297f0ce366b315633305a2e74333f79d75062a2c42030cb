import { Kind } from '../language/kinds.mjs';
import { GraphQLList, GraphQLNonNull } from '../type/definition.mjs';
export function typeFromAST(schema, typeNode) {
  switch (typeNode.kind) {
    case Kind.LIST_TYPE: {
      const innerType = typeFromAST(schema, typeNode.type);
      return innerType && new GraphQLList(innerType);
    }

    case Kind.NON_NULL_TYPE: {
      const innerType = typeFromAST(schema, typeNode.type);
      return innerType && new GraphQLNonNull(innerType);
    }

    case Kind.NAMED_TYPE:
      return schema.getType(typeNode.name.value);
  }
}
