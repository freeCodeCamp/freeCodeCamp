import type { GraphQLField, GraphQLNamedType } from './definition';
import { GraphQLEnumType, GraphQLObjectType } from './definition';
export declare const __Schema: GraphQLObjectType;
export declare const __Directive: GraphQLObjectType;
export declare const __DirectiveLocation: GraphQLEnumType;
export declare const __Type: GraphQLObjectType;
export declare const __Field: GraphQLObjectType;
export declare const __InputValue: GraphQLObjectType;
export declare const __EnumValue: GraphQLObjectType;
declare enum TypeKind {
  SCALAR = 'SCALAR',
  OBJECT = 'OBJECT',
  INTERFACE = 'INTERFACE',
  UNION = 'UNION',
  ENUM = 'ENUM',
  INPUT_OBJECT = 'INPUT_OBJECT',
  LIST = 'LIST',
  NON_NULL = 'NON_NULL',
}
export { TypeKind };
export declare const __TypeKind: GraphQLEnumType;
/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */
export declare const SchemaMetaFieldDef: GraphQLField<unknown, unknown>;
export declare const TypeMetaFieldDef: GraphQLField<unknown, unknown>;
export declare const TypeNameMetaFieldDef: GraphQLField<unknown, unknown>;
export declare const introspectionTypes: ReadonlyArray<GraphQLNamedType>;
export declare function isIntrospectionType(type: GraphQLNamedType): boolean;
