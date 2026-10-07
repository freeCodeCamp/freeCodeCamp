import type { Maybe } from '../jsutils/Maybe';
import type { ASTNode, FieldNode } from '../language/ast';
import type { ASTVisitor } from '../language/visitor';
import type {
  GraphQLArgument,
  GraphQLCompositeType,
  GraphQLEnumValue,
  GraphQLField,
  GraphQLInputType,
  GraphQLOutputType,
  GraphQLType,
} from '../type/definition';
import type { GraphQLDirective } from '../type/directives';
import type { GraphQLSchema } from '../type/schema';
/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */
export declare class TypeInfo {
  private _schema;
  private _typeStack;
  private _parentTypeStack;
  private _inputTypeStack;
  private _fieldDefStack;
  private _defaultValueStack;
  private _directive;
  private _argument;
  private _enumValue;
  private _getFieldDef;
  constructor(
    schema: GraphQLSchema,
    /**
     * Initial type may be provided in rare cases to facilitate traversals
     *  beginning somewhere other than documents.
     */
    initialType?: Maybe<GraphQLType>,
    /** @deprecated will be removed in 17.0.0 */
    getFieldDefFn?: GetFieldDefFn,
  );
  get [Symbol.toStringTag](): string;
  getType(): Maybe<GraphQLOutputType>;
  getParentType(): Maybe<GraphQLCompositeType>;
  getInputType(): Maybe<GraphQLInputType>;
  getParentInputType(): Maybe<GraphQLInputType>;
  getFieldDef(): Maybe<GraphQLField<unknown, unknown>>;
  getDefaultValue(): Maybe<unknown>;
  getDirective(): Maybe<GraphQLDirective>;
  getArgument(): Maybe<GraphQLArgument>;
  getEnumValue(): Maybe<GraphQLEnumValue>;
  enter(node: ASTNode): void;
  leave(node: ASTNode): void;
}
declare type GetFieldDefFn = (
  schema: GraphQLSchema,
  parentType: GraphQLType,
  fieldNode: FieldNode,
) => Maybe<GraphQLField<unknown, unknown>>;
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */
export declare function visitWithTypeInfo(
  typeInfo: TypeInfo,
  visitor: ASTVisitor,
): ASTVisitor;
export {};
