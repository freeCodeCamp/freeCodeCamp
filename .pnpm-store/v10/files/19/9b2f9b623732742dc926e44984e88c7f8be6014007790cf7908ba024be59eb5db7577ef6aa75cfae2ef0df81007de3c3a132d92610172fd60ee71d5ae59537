import type { Maybe } from '../jsutils/Maybe';
import type { GraphQLError } from '../error/GraphQLError';
import type {
  ArgumentNode,
  ConstArgumentNode,
  ConstDirectiveNode,
  ConstListValueNode,
  ConstObjectFieldNode,
  ConstObjectValueNode,
  ConstValueNode,
  DefinitionNode,
  DirectiveDefinitionNode,
  DirectiveNode,
  DocumentNode,
  EnumTypeDefinitionNode,
  EnumTypeExtensionNode,
  EnumValueDefinitionNode,
  FieldDefinitionNode,
  FieldNode,
  FragmentDefinitionNode,
  FragmentSpreadNode,
  InlineFragmentNode,
  InputObjectTypeDefinitionNode,
  InputObjectTypeExtensionNode,
  InputValueDefinitionNode,
  InterfaceTypeDefinitionNode,
  InterfaceTypeExtensionNode,
  ListValueNode,
  NamedTypeNode,
  NameNode,
  ObjectFieldNode,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
  ObjectValueNode,
  OperationDefinitionNode,
  OperationTypeDefinitionNode,
  ScalarTypeDefinitionNode,
  ScalarTypeExtensionNode,
  SchemaCoordinateNode,
  SchemaDefinitionNode,
  SchemaExtensionNode,
  SelectionNode,
  SelectionSetNode,
  StringValueNode,
  Token,
  TypeNode,
  TypeSystemExtensionNode,
  UnionTypeDefinitionNode,
  UnionTypeExtensionNode,
  ValueNode,
  VariableDefinitionNode,
  VariableNode,
} from './ast';
import { Location, OperationTypeNode } from './ast';
import type { LexerInterface } from './lexer';
import { Source } from './source';
import { TokenKind } from './tokenKind';
/**
 * Configuration options to control parser behavior
 */
export interface ParseOptions {
  /**
   * By default, the parser creates AST nodes that know the location
   * in the source that they correspond to. This configuration flag
   * disables that behavior for performance or testing.
   */
  noLocation?: boolean;
  /**
   * Parser CPU and memory usage is linear to the number of tokens in a document
   * however in extreme cases it becomes quadratic due to memory exhaustion.
   * Parsing happens before validation so even invalid queries can burn lots of
   * CPU time and memory.
   * To prevent this you can set a maximum number of tokens allowed within a document.
   */
  maxTokens?: number | undefined;
  /**
   * @deprecated will be removed in the v17.0.0
   *
   * If enabled, the parser will understand and parse variable definitions
   * contained in a fragment definition. They'll be represented in the
   * `variableDefinitions` field of the FragmentDefinitionNode.
   *
   * The syntax is identical to normal, query-defined variables. For example:
   *
   * ```graphql
   * fragment A($var: Boolean = false) on T {
   *   ...
   * }
   * ```
   */
  allowLegacyFragmentVariables?: boolean;
  /**
   * You may override the Lexer class used to lex the source; this is used by
   * schema coordinates to introduce a lexer with a restricted syntax.
   */
  lexer?: LexerInterface | undefined;
}
/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
export declare function parse(
  source: string | Source,
  options?: ParseOptions | undefined,
): DocumentNode;
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */
export declare function parseValue(
  source: string | Source,
  options?: ParseOptions | undefined,
): ValueNode;
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */
export declare function parseConstValue(
  source: string | Source,
  options?: ParseOptions | undefined,
): ConstValueNode;
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */
export declare function parseType(
  source: string | Source,
  options?: ParseOptions | undefined,
): TypeNode;
/**
 * Given a string containing a GraphQL Schema Coordinate (ex. `Type.field`),
 * parse the AST for that schema coordinate.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * Consider providing the results to the utility function:
 * resolveASTSchemaCoordinate(). Or calling resolveSchemaCoordinate() directly
 * with an unparsed source.
 */
export declare function parseSchemaCoordinate(
  source: string | Source,
): SchemaCoordinateNode;
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */
export declare class Parser {
  protected _options: Omit<ParseOptions, 'lexer'>;
  protected _lexer: LexerInterface;
  protected _tokenCounter: number;
  constructor(source: string | Source, options?: ParseOptions);
  get tokenCount(): number;
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName(): NameNode;
  /**
   * Document : Definition+
   */
  parseDocument(): DocumentNode;
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition(): DefinitionNode;
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition(): OperationDefinitionNode;
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType(): OperationTypeNode;
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions(): Array<VariableDefinitionNode>;
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition(): VariableDefinitionNode;
  /**
   * Variable : $ Name
   */
  parseVariable(): VariableNode;
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet(): SelectionSetNode;
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection(): SelectionNode;
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField(): FieldNode;
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(isConst: true): Array<ConstArgumentNode>;
  parseArguments(isConst: boolean): Array<ArgumentNode>;
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(isConst: true): ConstArgumentNode;
  parseArgument(isConst?: boolean): ArgumentNode;
  parseConstArgument(): ConstArgumentNode;
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment(): FragmentSpreadNode | InlineFragmentNode;
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition(): FragmentDefinitionNode;
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName(): NameNode;
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(isConst: true): ConstValueNode;
  parseValueLiteral(isConst: boolean): ValueNode;
  parseConstValueLiteral(): ConstValueNode;
  parseStringLiteral(): StringValueNode;
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(isConst: true): ConstListValueNode;
  parseList(isConst: boolean): ListValueNode;
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(isConst: true): ConstObjectValueNode;
  parseObject(isConst: boolean): ObjectValueNode;
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(isConst: true): ConstObjectFieldNode;
  parseObjectField(isConst: boolean): ObjectFieldNode;
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(isConst: true): Array<ConstDirectiveNode>;
  parseDirectives(isConst: boolean): Array<DirectiveNode>;
  parseConstDirectives(): Array<ConstDirectiveNode>;
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(isConst: true): ConstDirectiveNode;
  parseDirective(isConst: boolean): DirectiveNode;
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference(): TypeNode;
  /**
   * NamedType : Name
   */
  parseNamedType(): NamedTypeNode;
  peekDescription(): boolean;
  /**
   * Description : StringValue
   */
  parseDescription(): undefined | StringValueNode;
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition(): SchemaDefinitionNode;
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition(): OperationTypeDefinitionNode;
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition(): ScalarTypeDefinitionNode;
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition(): ObjectTypeDefinitionNode;
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces(): Array<NamedTypeNode>;
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition(): Array<FieldDefinitionNode>;
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition(): FieldDefinitionNode;
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs(): Array<InputValueDefinitionNode>;
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef(): InputValueDefinitionNode;
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition(): InterfaceTypeDefinitionNode;
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition(): UnionTypeDefinitionNode;
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes(): Array<NamedTypeNode>;
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition(): EnumTypeDefinitionNode;
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition(): Array<EnumValueDefinitionNode>;
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition(): EnumValueDefinitionNode;
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName(): NameNode;
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition(): InputObjectTypeDefinitionNode;
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition(): Array<InputValueDefinitionNode>;
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension(): TypeSystemExtensionNode;
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension(): SchemaExtensionNode;
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension(): ScalarTypeExtensionNode;
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension(): ObjectTypeExtensionNode;
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension(): InterfaceTypeExtensionNode;
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension(): UnionTypeExtensionNode;
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension(): EnumTypeExtensionNode;
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension(): InputObjectTypeExtensionNode;
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition(): DirectiveDefinitionNode;
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations(): Array<NameNode>;
  parseDirectiveLocation(): NameNode;
  /**
   * SchemaCoordinate :
   *   - Name
   *   - Name . Name
   *   - Name . Name ( Name : )
   *   - \@ Name
   *   - \@ Name ( Name : )
   */
  parseSchemaCoordinate(): SchemaCoordinateNode;
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node<
    T extends {
      loc?: Location;
    },
  >(startToken: Token, node: T): T;
  /**
   * Determines if the next token is of a given kind
   */
  peek(kind: TokenKind): boolean;
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(kind: TokenKind): Token;
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(kind: TokenKind): boolean;
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(value: string): void;
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(value: string): boolean;
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(atToken?: Maybe<Token>): GraphQLError;
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any<T>(openKind: TokenKind, parseFn: () => T, closeKind: TokenKind): Array<T>;
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany<T>(
    openKind: TokenKind,
    parseFn: () => T,
    closeKind: TokenKind,
  ): Array<T>;
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many<T>(
    openKind: TokenKind,
    parseFn: () => T,
    closeKind: TokenKind,
  ): Array<T>;
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany<T>(delimiterKind: TokenKind, parseFn: () => T): Array<T>;
  advanceLexer(): void;
}
