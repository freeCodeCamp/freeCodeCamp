import type { Kind } from './kinds';
import type { Source } from './source';
import type { TokenKind } from './tokenKind';
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
export declare class Location {
  /**
   * The character offset at which this Node begins.
   */
  readonly start: number;
  /**
   * The character offset at which this Node ends.
   */
  readonly end: number;
  /**
   * The Token at which this Node begins.
   */
  readonly startToken: Token;
  /**
   * The Token at which this Node ends.
   */
  readonly endToken: Token;
  /**
   * The Source document the AST represents.
   */
  readonly source: Source;
  constructor(startToken: Token, endToken: Token, source: Source);
  get [Symbol.toStringTag](): string;
  toJSON(): {
    start: number;
    end: number;
  };
}
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */
export declare class Token {
  /**
   * The kind of Token.
   */
  readonly kind: TokenKind;
  /**
   * The character offset at which this Node begins.
   */
  readonly start: number;
  /**
   * The character offset at which this Node ends.
   */
  readonly end: number;
  /**
   * The 1-indexed line number on which this Token appears.
   */
  readonly line: number;
  /**
   * The 1-indexed column number at which this Token begins.
   */
  readonly column: number;
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  readonly value: string;
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  readonly prev: Token | null;
  readonly next: Token | null;
  constructor(
    kind: TokenKind,
    start: number,
    end: number,
    line: number,
    column: number,
    value?: string,
  );
  get [Symbol.toStringTag](): string;
  toJSON(): {
    kind: TokenKind;
    value?: string;
    line: number;
    column: number;
  };
}
/**
 * The list of all possible AST node types.
 */
export declare type ASTNode =
  | NameNode
  | DocumentNode
  | OperationDefinitionNode
  | VariableDefinitionNode
  | VariableNode
  | SelectionSetNode
  | FieldNode
  | ArgumentNode
  | FragmentSpreadNode
  | InlineFragmentNode
  | FragmentDefinitionNode
  | IntValueNode
  | FloatValueNode
  | StringValueNode
  | BooleanValueNode
  | NullValueNode
  | EnumValueNode
  | ListValueNode
  | ObjectValueNode
  | ObjectFieldNode
  | DirectiveNode
  | NamedTypeNode
  | ListTypeNode
  | NonNullTypeNode
  | SchemaDefinitionNode
  | OperationTypeDefinitionNode
  | ScalarTypeDefinitionNode
  | ObjectTypeDefinitionNode
  | FieldDefinitionNode
  | InputValueDefinitionNode
  | InterfaceTypeDefinitionNode
  | UnionTypeDefinitionNode
  | EnumTypeDefinitionNode
  | EnumValueDefinitionNode
  | InputObjectTypeDefinitionNode
  | DirectiveDefinitionNode
  | SchemaExtensionNode
  | ScalarTypeExtensionNode
  | ObjectTypeExtensionNode
  | InterfaceTypeExtensionNode
  | UnionTypeExtensionNode
  | EnumTypeExtensionNode
  | InputObjectTypeExtensionNode
  | TypeCoordinateNode
  | MemberCoordinateNode
  | ArgumentCoordinateNode
  | DirectiveCoordinateNode
  | DirectiveArgumentCoordinateNode;
/**
 * Utility type listing all nodes indexed by their kind.
 */
export declare type ASTKindToNode = {
  [NodeT in ASTNode as NodeT['kind']]: NodeT;
};
/**
 * @internal
 */
export declare const QueryDocumentKeys: {
  [NodeT in ASTNode as NodeT['kind']]: ReadonlyArray<keyof NodeT>;
};
/**
 * @internal
 */
export declare function isNode(maybeNode: any): maybeNode is ASTNode;
/** Name */
export interface NameNode {
  readonly kind: Kind.NAME;
  readonly loc?: Location;
  readonly value: string;
}
/** Document */
export interface DocumentNode {
  readonly kind: Kind.DOCUMENT;
  readonly loc?: Location;
  readonly definitions: ReadonlyArray<DefinitionNode>;
  readonly tokenCount?: number | undefined;
}
export declare type DefinitionNode =
  | ExecutableDefinitionNode
  | TypeSystemDefinitionNode
  | TypeSystemExtensionNode;
export declare type ExecutableDefinitionNode =
  | OperationDefinitionNode
  | FragmentDefinitionNode;
export interface OperationDefinitionNode {
  readonly kind: Kind.OPERATION_DEFINITION;
  readonly description?: StringValueNode;
  readonly loc?: Location;
  readonly operation: OperationTypeNode;
  readonly name?: NameNode;
  readonly variableDefinitions?: ReadonlyArray<VariableDefinitionNode>;
  readonly directives?: ReadonlyArray<DirectiveNode>;
  readonly selectionSet: SelectionSetNode;
}
declare enum OperationTypeNode {
  QUERY = 'query',
  MUTATION = 'mutation',
  SUBSCRIPTION = 'subscription',
}
export { OperationTypeNode };
export interface VariableDefinitionNode {
  readonly kind: Kind.VARIABLE_DEFINITION;
  readonly description?: StringValueNode;
  readonly loc?: Location;
  readonly variable: VariableNode;
  readonly type: TypeNode;
  readonly defaultValue?: ConstValueNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}
export interface VariableNode {
  readonly kind: Kind.VARIABLE;
  readonly loc?: Location;
  readonly name: NameNode;
}
export interface SelectionSetNode {
  kind: Kind.SELECTION_SET;
  loc?: Location;
  selections: ReadonlyArray<SelectionNode>;
}
export declare type SelectionNode =
  | FieldNode
  | FragmentSpreadNode
  | InlineFragmentNode;
export interface FieldNode {
  readonly kind: Kind.FIELD;
  readonly loc?: Location;
  readonly alias?: NameNode;
  readonly name: NameNode;
  readonly arguments?: ReadonlyArray<ArgumentNode>;
  readonly directives?: ReadonlyArray<DirectiveNode>;
  readonly selectionSet?: SelectionSetNode;
}
export interface ArgumentNode {
  readonly kind: Kind.ARGUMENT;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly value: ValueNode;
}
export interface ConstArgumentNode {
  readonly kind: Kind.ARGUMENT;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly value: ConstValueNode;
}
/** Fragments */
export interface FragmentSpreadNode {
  readonly kind: Kind.FRAGMENT_SPREAD;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<DirectiveNode>;
}
export interface InlineFragmentNode {
  readonly kind: Kind.INLINE_FRAGMENT;
  readonly loc?: Location;
  readonly typeCondition?: NamedTypeNode;
  readonly directives?: ReadonlyArray<DirectiveNode>;
  readonly selectionSet: SelectionSetNode;
}
export interface FragmentDefinitionNode {
  readonly kind: Kind.FRAGMENT_DEFINITION;
  readonly description?: StringValueNode;
  readonly loc?: Location;
  readonly name: NameNode;
  /** @deprecated variableDefinitions will be removed in v17.0.0 */
  readonly variableDefinitions?: ReadonlyArray<VariableDefinitionNode>;
  readonly typeCondition: NamedTypeNode;
  readonly directives?: ReadonlyArray<DirectiveNode>;
  readonly selectionSet: SelectionSetNode;
}
/** Values */
export declare type ValueNode =
  | VariableNode
  | IntValueNode
  | FloatValueNode
  | StringValueNode
  | BooleanValueNode
  | NullValueNode
  | EnumValueNode
  | ListValueNode
  | ObjectValueNode;
export declare type ConstValueNode =
  | IntValueNode
  | FloatValueNode
  | StringValueNode
  | BooleanValueNode
  | NullValueNode
  | EnumValueNode
  | ConstListValueNode
  | ConstObjectValueNode;
export interface IntValueNode {
  readonly kind: Kind.INT;
  readonly loc?: Location;
  readonly value: string;
}
export interface FloatValueNode {
  readonly kind: Kind.FLOAT;
  readonly loc?: Location;
  readonly value: string;
}
export interface StringValueNode {
  readonly kind: Kind.STRING;
  readonly loc?: Location;
  readonly value: string;
  readonly block?: boolean;
}
export interface BooleanValueNode {
  readonly kind: Kind.BOOLEAN;
  readonly loc?: Location;
  readonly value: boolean;
}
export interface NullValueNode {
  readonly kind: Kind.NULL;
  readonly loc?: Location;
}
export interface EnumValueNode {
  readonly kind: Kind.ENUM;
  readonly loc?: Location;
  readonly value: string;
}
export interface ListValueNode {
  readonly kind: Kind.LIST;
  readonly loc?: Location;
  readonly values: ReadonlyArray<ValueNode>;
}
export interface ConstListValueNode {
  readonly kind: Kind.LIST;
  readonly loc?: Location;
  readonly values: ReadonlyArray<ConstValueNode>;
}
export interface ObjectValueNode {
  readonly kind: Kind.OBJECT;
  readonly loc?: Location;
  readonly fields: ReadonlyArray<ObjectFieldNode>;
}
export interface ConstObjectValueNode {
  readonly kind: Kind.OBJECT;
  readonly loc?: Location;
  readonly fields: ReadonlyArray<ConstObjectFieldNode>;
}
export interface ObjectFieldNode {
  readonly kind: Kind.OBJECT_FIELD;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly value: ValueNode;
}
export interface ConstObjectFieldNode {
  readonly kind: Kind.OBJECT_FIELD;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly value: ConstValueNode;
}
/** Directives */
export interface DirectiveNode {
  readonly kind: Kind.DIRECTIVE;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly arguments?: ReadonlyArray<ArgumentNode>;
}
export interface ConstDirectiveNode {
  readonly kind: Kind.DIRECTIVE;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly arguments?: ReadonlyArray<ConstArgumentNode>;
}
/** Type Reference */
export declare type TypeNode = NamedTypeNode | ListTypeNode | NonNullTypeNode;
export interface NamedTypeNode {
  readonly kind: Kind.NAMED_TYPE;
  readonly loc?: Location;
  readonly name: NameNode;
}
export interface ListTypeNode {
  readonly kind: Kind.LIST_TYPE;
  readonly loc?: Location;
  readonly type: TypeNode;
}
export interface NonNullTypeNode {
  readonly kind: Kind.NON_NULL_TYPE;
  readonly loc?: Location;
  readonly type: NamedTypeNode | ListTypeNode;
}
/** Type System Definition */
export declare type TypeSystemDefinitionNode =
  | SchemaDefinitionNode
  | TypeDefinitionNode
  | DirectiveDefinitionNode;
export interface SchemaDefinitionNode {
  readonly kind: Kind.SCHEMA_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly operationTypes: ReadonlyArray<OperationTypeDefinitionNode>;
}
export interface OperationTypeDefinitionNode {
  readonly kind: Kind.OPERATION_TYPE_DEFINITION;
  readonly loc?: Location;
  readonly operation: OperationTypeNode;
  readonly type: NamedTypeNode;
}
/** Type Definition */
export declare type TypeDefinitionNode =
  | ScalarTypeDefinitionNode
  | ObjectTypeDefinitionNode
  | InterfaceTypeDefinitionNode
  | UnionTypeDefinitionNode
  | EnumTypeDefinitionNode
  | InputObjectTypeDefinitionNode;
export interface ScalarTypeDefinitionNode {
  readonly kind: Kind.SCALAR_TYPE_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}
export interface ObjectTypeDefinitionNode {
  readonly kind: Kind.OBJECT_TYPE_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly interfaces?: ReadonlyArray<NamedTypeNode>;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}
export interface FieldDefinitionNode {
  readonly kind: Kind.FIELD_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly arguments?: ReadonlyArray<InputValueDefinitionNode>;
  readonly type: TypeNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}
export interface InputValueDefinitionNode {
  readonly kind: Kind.INPUT_VALUE_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly type: TypeNode;
  readonly defaultValue?: ConstValueNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}
export interface InterfaceTypeDefinitionNode {
  readonly kind: Kind.INTERFACE_TYPE_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly interfaces?: ReadonlyArray<NamedTypeNode>;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}
export interface UnionTypeDefinitionNode {
  readonly kind: Kind.UNION_TYPE_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly types?: ReadonlyArray<NamedTypeNode>;
}
export interface EnumTypeDefinitionNode {
  readonly kind: Kind.ENUM_TYPE_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly values?: ReadonlyArray<EnumValueDefinitionNode>;
}
export interface EnumValueDefinitionNode {
  readonly kind: Kind.ENUM_VALUE_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}
export interface InputObjectTypeDefinitionNode {
  readonly kind: Kind.INPUT_OBJECT_TYPE_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<InputValueDefinitionNode>;
}
/** Directive Definitions */
export interface DirectiveDefinitionNode {
  readonly kind: Kind.DIRECTIVE_DEFINITION;
  readonly loc?: Location;
  readonly description?: StringValueNode;
  readonly name: NameNode;
  readonly arguments?: ReadonlyArray<InputValueDefinitionNode>;
  readonly repeatable: boolean;
  readonly locations: ReadonlyArray<NameNode>;
}
/** Type System Extensions */
export declare type TypeSystemExtensionNode =
  | SchemaExtensionNode
  | TypeExtensionNode;
export interface SchemaExtensionNode {
  readonly kind: Kind.SCHEMA_EXTENSION;
  readonly loc?: Location;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly operationTypes?: ReadonlyArray<OperationTypeDefinitionNode>;
}
/** Type Extensions */
export declare type TypeExtensionNode =
  | ScalarTypeExtensionNode
  | ObjectTypeExtensionNode
  | InterfaceTypeExtensionNode
  | UnionTypeExtensionNode
  | EnumTypeExtensionNode
  | InputObjectTypeExtensionNode;
export interface ScalarTypeExtensionNode {
  readonly kind: Kind.SCALAR_TYPE_EXTENSION;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
}
export interface ObjectTypeExtensionNode {
  readonly kind: Kind.OBJECT_TYPE_EXTENSION;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly interfaces?: ReadonlyArray<NamedTypeNode>;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}
export interface InterfaceTypeExtensionNode {
  readonly kind: Kind.INTERFACE_TYPE_EXTENSION;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly interfaces?: ReadonlyArray<NamedTypeNode>;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}
export interface UnionTypeExtensionNode {
  readonly kind: Kind.UNION_TYPE_EXTENSION;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly types?: ReadonlyArray<NamedTypeNode>;
}
export interface EnumTypeExtensionNode {
  readonly kind: Kind.ENUM_TYPE_EXTENSION;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly values?: ReadonlyArray<EnumValueDefinitionNode>;
}
export interface InputObjectTypeExtensionNode {
  readonly kind: Kind.INPUT_OBJECT_TYPE_EXTENSION;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly directives?: ReadonlyArray<ConstDirectiveNode>;
  readonly fields?: ReadonlyArray<InputValueDefinitionNode>;
}
/** Schema Coordinates */
export declare type SchemaCoordinateNode =
  | TypeCoordinateNode
  | MemberCoordinateNode
  | ArgumentCoordinateNode
  | DirectiveCoordinateNode
  | DirectiveArgumentCoordinateNode;
export interface TypeCoordinateNode {
  readonly kind: Kind.TYPE_COORDINATE;
  readonly loc?: Location;
  readonly name: NameNode;
}
export interface MemberCoordinateNode {
  readonly kind: Kind.MEMBER_COORDINATE;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly memberName: NameNode;
}
export interface ArgumentCoordinateNode {
  readonly kind: Kind.ARGUMENT_COORDINATE;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly fieldName: NameNode;
  readonly argumentName: NameNode;
}
export interface DirectiveCoordinateNode {
  readonly kind: Kind.DIRECTIVE_COORDINATE;
  readonly loc?: Location;
  readonly name: NameNode;
}
export interface DirectiveArgumentCoordinateNode {
  readonly kind: Kind.DIRECTIVE_ARGUMENT_COORDINATE;
  readonly loc?: Location;
  readonly name: NameNode;
  readonly argumentName: NameNode;
}
