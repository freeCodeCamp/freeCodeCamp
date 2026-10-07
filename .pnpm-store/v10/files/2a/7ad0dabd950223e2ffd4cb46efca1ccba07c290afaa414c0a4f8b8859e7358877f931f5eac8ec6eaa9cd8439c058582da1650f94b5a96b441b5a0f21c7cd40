import type { SchemaCoordinateNode } from '../language/ast';
import type { Source } from '../language/source';
import type {
  GraphQLArgument,
  GraphQLEnumType,
  GraphQLEnumValue,
  GraphQLField,
  GraphQLInputField,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLNamedType,
  GraphQLObjectType,
} from '../type/definition';
import type { GraphQLDirective } from '../type/directives';
import type { GraphQLSchema } from '../type/schema';
/**
 * A resolved schema element may be one of the following kinds:
 */
export interface ResolvedNamedType {
  readonly kind: 'NamedType';
  readonly type: GraphQLNamedType;
}
export interface ResolvedField {
  readonly kind: 'Field';
  readonly type: GraphQLObjectType | GraphQLInterfaceType;
  readonly field: GraphQLField<unknown, unknown>;
}
export interface ResolvedInputField {
  readonly kind: 'InputField';
  readonly type: GraphQLInputObjectType;
  readonly inputField: GraphQLInputField;
}
export interface ResolvedEnumValue {
  readonly kind: 'EnumValue';
  readonly type: GraphQLEnumType;
  readonly enumValue: GraphQLEnumValue;
}
export interface ResolvedFieldArgument {
  readonly kind: 'FieldArgument';
  readonly type: GraphQLObjectType | GraphQLInterfaceType;
  readonly field: GraphQLField<unknown, unknown>;
  readonly fieldArgument: GraphQLArgument;
}
export interface ResolvedDirective {
  readonly kind: 'Directive';
  readonly directive: GraphQLDirective;
}
export interface ResolvedDirectiveArgument {
  readonly kind: 'DirectiveArgument';
  readonly directive: GraphQLDirective;
  readonly directiveArgument: GraphQLArgument;
}
export declare type ResolvedSchemaElement =
  | ResolvedNamedType
  | ResolvedField
  | ResolvedInputField
  | ResolvedEnumValue
  | ResolvedFieldArgument
  | ResolvedDirective
  | ResolvedDirectiveArgument;
/**
 * A schema coordinate is resolved in the context of a GraphQL schema to
 * uniquely identify a schema element. It returns undefined if the schema
 * coordinate does not resolve to a schema element, meta-field, or introspection
 * schema element. It will throw if the containing schema element (if
 * applicable) does not exist.
 *
 * https://spec.graphql.org/draft/#sec-Schema-Coordinates.Semantics
 */
export declare function resolveSchemaCoordinate(
  schema: GraphQLSchema,
  schemaCoordinate: string | Source,
): ResolvedSchemaElement | undefined;
/**
 * Resolves schema coordinate from a parsed SchemaCoordinate node.
 */
export declare function resolveASTSchemaCoordinate(
  schema: GraphQLSchema,
  schemaCoordinate: SchemaCoordinateNode,
): ResolvedSchemaElement | undefined;
