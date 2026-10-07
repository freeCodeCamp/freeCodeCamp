import type { Maybe } from '../jsutils/Maybe';
import type { ObjMap } from '../jsutils/ObjMap';
import type { GraphQLError } from '../error/GraphQLError';
import type {
  SchemaDefinitionNode,
  SchemaExtensionNode,
} from '../language/ast';
import { OperationTypeNode } from '../language/ast';
import type {
  GraphQLAbstractType,
  GraphQLInterfaceType,
  GraphQLNamedType,
  GraphQLObjectType,
} from './definition';
import type { GraphQLDirective } from './directives';
/**
 * Test if the given value is a GraphQL schema.
 */
export declare function isSchema(schema: unknown): schema is GraphQLSchema;
export declare function assertSchema(schema: unknown): GraphQLSchema;
/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */
export interface GraphQLSchemaExtensions {
  [attributeName: string]: unknown;
}
/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 * ```ts
 * const MyAppSchema = new GraphQLSchema({
 *   query: MyAppQueryRootType,
 *   mutation: MyAppMutationRootType,
 * })
 * ```
 *
 * Note: When the schema is constructed, by default only the types that are
 * reachable by traversing the root types are included, other types must be
 * explicitly referenced.
 *
 * Example:
 *
 * ```ts
 * const characterInterface = new GraphQLInterfaceType({
 *   name: 'Character',
 *   ...
 * });
 *
 * const humanType = new GraphQLObjectType({
 *   name: 'Human',
 *   interfaces: [characterInterface],
 *   ...
 * });
 *
 * const droidType = new GraphQLObjectType({
 *   name: 'Droid',
 *   interfaces: [characterInterface],
 *   ...
 * });
 *
 * const schema = new GraphQLSchema({
 *   query: new GraphQLObjectType({
 *     name: 'Query',
 *     fields: {
 *       hero: { type: characterInterface, ... },
 *     }
 *   }),
 *   ...
 *   // Since this schema references only the `Character` interface it's
 *   // necessary to explicitly list the types that implement it if
 *   // you want them to be included in the final schema.
 *   types: [humanType, droidType],
 * })
 * ```
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. `@include` and
 * `@skip`) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 * ```ts
 * const MyAppSchema = new GraphQLSchema({
 *   ...
 *   directives: specifiedDirectives.concat([ myCustomDirective ]),
 * })
 * ```
 */
export declare class GraphQLSchema {
  description: Maybe<string>;
  extensions: Readonly<GraphQLSchemaExtensions>;
  astNode: Maybe<SchemaDefinitionNode>;
  extensionASTNodes: ReadonlyArray<SchemaExtensionNode>;
  __validationErrors: Maybe<ReadonlyArray<GraphQLError>>;
  private _queryType;
  private _mutationType;
  private _subscriptionType;
  private _directives;
  private _typeMap;
  private _subTypeMap;
  private _implementationsMap;
  constructor(config: Readonly<GraphQLSchemaConfig>);
  get [Symbol.toStringTag](): string;
  getQueryType(): Maybe<GraphQLObjectType>;
  getMutationType(): Maybe<GraphQLObjectType>;
  getSubscriptionType(): Maybe<GraphQLObjectType>;
  getRootType(operation: OperationTypeNode): Maybe<GraphQLObjectType>;
  getTypeMap(): TypeMap;
  getType(name: string): GraphQLNamedType | undefined;
  getPossibleTypes(
    abstractType: GraphQLAbstractType,
  ): ReadonlyArray<GraphQLObjectType>;
  getImplementations(interfaceType: GraphQLInterfaceType): {
    objects: ReadonlyArray<GraphQLObjectType>;
    interfaces: ReadonlyArray<GraphQLInterfaceType>;
  };
  isSubType(
    abstractType: GraphQLAbstractType,
    maybeSubType: GraphQLObjectType | GraphQLInterfaceType,
  ): boolean;
  getDirectives(): ReadonlyArray<GraphQLDirective>;
  getDirective(name: string): Maybe<GraphQLDirective>;
  toConfig(): GraphQLSchemaNormalizedConfig;
}
declare type TypeMap = ObjMap<GraphQLNamedType>;
export interface GraphQLSchemaValidationOptions {
  /**
   * When building a schema from a GraphQL service's introspection result, it
   * might be safe to assume the schema is valid. Set to true to assume the
   * produced schema is valid.
   *
   * Default: false
   */
  assumeValid?: boolean;
}
export interface GraphQLSchemaConfig extends GraphQLSchemaValidationOptions {
  description?: Maybe<string>;
  query?: Maybe<GraphQLObjectType>;
  mutation?: Maybe<GraphQLObjectType>;
  subscription?: Maybe<GraphQLObjectType>;
  types?: Maybe<ReadonlyArray<GraphQLNamedType>>;
  directives?: Maybe<ReadonlyArray<GraphQLDirective>>;
  extensions?: Maybe<Readonly<GraphQLSchemaExtensions>>;
  astNode?: Maybe<SchemaDefinitionNode>;
  extensionASTNodes?: Maybe<ReadonlyArray<SchemaExtensionNode>>;
}
/**
 * @internal
 */
export interface GraphQLSchemaNormalizedConfig extends GraphQLSchemaConfig {
  description: Maybe<string>;
  types: ReadonlyArray<GraphQLNamedType>;
  directives: ReadonlyArray<GraphQLDirective>;
  extensions: Readonly<GraphQLSchemaExtensions>;
  extensionASTNodes: ReadonlyArray<SchemaExtensionNode>;
  assumeValid: boolean;
}
export {};
