import type {
  ListTypeNode,
  NamedTypeNode,
  NonNullTypeNode,
  TypeNode,
} from '../language/ast';
import type { GraphQLNamedType, GraphQLType } from '../type/definition';
import { GraphQLList, GraphQLNonNull } from '../type/definition';
import type { GraphQLSchema } from '../type/schema';
/**
 * Given a Schema and an AST node describing a type, return a GraphQLType
 * definition which applies to that type. For example, if provided the parsed
 * AST node for `[User]`, a GraphQLList instance will be returned, containing
 * the type called "User" found in the schema. If a type called "User" is not
 * found in the schema, then undefined will be returned.
 */
export declare function typeFromAST(
  schema: GraphQLSchema,
  typeNode: NamedTypeNode,
): GraphQLNamedType | undefined;
export declare function typeFromAST(
  schema: GraphQLSchema,
  typeNode: ListTypeNode,
): GraphQLList<any> | undefined;
export declare function typeFromAST(
  schema: GraphQLSchema,
  typeNode: NonNullTypeNode,
): GraphQLNonNull<any> | undefined;
export declare function typeFromAST(
  schema: GraphQLSchema,
  typeNode: TypeNode,
): GraphQLType | undefined;
