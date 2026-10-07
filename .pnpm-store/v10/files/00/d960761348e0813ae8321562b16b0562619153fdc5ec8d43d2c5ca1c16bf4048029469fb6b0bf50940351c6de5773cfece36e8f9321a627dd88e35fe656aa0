/**********************************************
 *      DO NOT MODIFY THIS FILE MANUALLY      *
 *                                            *
 *  THIS FILE HAS BEEN COPIED FROM ast-spec.  *
 * ANY CHANGES WILL BE LOST ON THE NEXT BUILD *
 *                                            *
 *   MAKE CHANGES TO ast-spec AND THEN RUN    *
 *                 pnpm run build             *
 **********************************************/
import type { SyntaxKind } from 'typescript';
export declare type Accessibility = 'private' | 'protected' | 'public';
export declare type AccessorProperty = AccessorPropertyComputedName | AccessorPropertyNonComputedName;
export declare interface AccessorPropertyComputedName extends PropertyDefinitionComputedNameBase {
    type: AST_NODE_TYPES.AccessorProperty;
}
export declare interface AccessorPropertyNonComputedName extends PropertyDefinitionNonComputedNameBase {
    type: AST_NODE_TYPES.AccessorProperty;
}
export declare interface ArrayExpression extends BaseNode {
    type: AST_NODE_TYPES.ArrayExpression;
    /**
     * an element will be `null` in the case of a sparse array: `[1, ,3]`
     */
    elements: (Expression | SpreadElement | null)[];
}
export declare interface ArrayPattern extends BaseNode {
    type: AST_NODE_TYPES.ArrayPattern;
    decorators: Decorator[];
    elements: (DestructuringPattern | null)[];
    optional: boolean;
    typeAnnotation: TSTypeAnnotation | undefined;
}
export declare interface ArrowFunctionExpression extends BaseNode {
    type: AST_NODE_TYPES.ArrowFunctionExpression;
    async: boolean;
    body: BlockStatement | Expression;
    expression: boolean;
    generator: false;
    id: null;
    params: Parameter[];
    returnType: TSTypeAnnotation | undefined;
    typeParameters: TSTypeParameterDeclaration | undefined;
}
export declare interface AssignmentExpression extends BaseNode {
    type: AST_NODE_TYPES.AssignmentExpression;
    left: Expression;
    operator: ValueOf<AssignmentOperatorToText>;
    right: Expression;
}
export declare interface AssignmentOperatorToText {
    [SyntaxKind.AmpersandAmpersandEqualsToken]: '&&=';
    [SyntaxKind.AmpersandEqualsToken]: '&=';
    [SyntaxKind.AsteriskAsteriskEqualsToken]: '**=';
    [SyntaxKind.AsteriskEqualsToken]: '*=';
    [SyntaxKind.BarBarEqualsToken]: '||=';
    [SyntaxKind.BarEqualsToken]: '|=';
    [SyntaxKind.CaretEqualsToken]: '^=';
    [SyntaxKind.EqualsToken]: '=';
    [SyntaxKind.GreaterThanGreaterThanEqualsToken]: '>>=';
    [SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken]: '>>>=';
    [SyntaxKind.LessThanLessThanEqualsToken]: '<<=';
    [SyntaxKind.MinusEqualsToken]: '-=';
    [SyntaxKind.PercentEqualsToken]: '%=';
    [SyntaxKind.PlusEqualsToken]: '+=';
    [SyntaxKind.QuestionQuestionEqualsToken]: '??=';
    [SyntaxKind.SlashEqualsToken]: '/=';
}
export declare interface AssignmentPattern extends BaseNode {
    type: AST_NODE_TYPES.AssignmentPattern;
    decorators: Decorator[];
    left: BindingName;
    optional: boolean;
    right: Expression;
    typeAnnotation: TSTypeAnnotation | undefined;
}
export declare enum AST_NODE_TYPES {
    AccessorProperty = "AccessorProperty",
    ArrayExpression = "ArrayExpression",
    ArrayPattern = "ArrayPattern",
    ArrowFunctionExpression = "ArrowFunctionExpression",
    AssignmentExpression = "AssignmentExpression",
    AssignmentPattern = "AssignmentPattern",
    AwaitExpression = "AwaitExpression",
    BinaryExpression = "BinaryExpression",
    BlockStatement = "BlockStatement",
    BreakStatement = "BreakStatement",
    CallExpression = "CallExpression",
    CatchClause = "CatchClause",
    ChainExpression = "ChainExpression",
    ClassBody = "ClassBody",
    ClassDeclaration = "ClassDeclaration",
    ClassExpression = "ClassExpression",
    ConditionalExpression = "ConditionalExpression",
    ContinueStatement = "ContinueStatement",
    DebuggerStatement = "DebuggerStatement",
    Decorator = "Decorator",
    DoWhileStatement = "DoWhileStatement",
    EmptyStatement = "EmptyStatement",
    ExportAllDeclaration = "ExportAllDeclaration",
    ExportDefaultDeclaration = "ExportDefaultDeclaration",
    ExportNamedDeclaration = "ExportNamedDeclaration",
    ExportSpecifier = "ExportSpecifier",
    ExpressionStatement = "ExpressionStatement",
    ForInStatement = "ForInStatement",
    ForOfStatement = "ForOfStatement",
    ForStatement = "ForStatement",
    FunctionDeclaration = "FunctionDeclaration",
    FunctionExpression = "FunctionExpression",
    Identifier = "Identifier",
    IfStatement = "IfStatement",
    ImportAttribute = "ImportAttribute",
    ImportDeclaration = "ImportDeclaration",
    ImportDefaultSpecifier = "ImportDefaultSpecifier",
    ImportExpression = "ImportExpression",
    ImportNamespaceSpecifier = "ImportNamespaceSpecifier",
    ImportSpecifier = "ImportSpecifier",
    JSXAttribute = "JSXAttribute",
    JSXClosingElement = "JSXClosingElement",
    JSXClosingFragment = "JSXClosingFragment",
    JSXElement = "JSXElement",
    JSXEmptyExpression = "JSXEmptyExpression",
    JSXExpressionContainer = "JSXExpressionContainer",
    JSXFragment = "JSXFragment",
    JSXIdentifier = "JSXIdentifier",
    JSXMemberExpression = "JSXMemberExpression",
    JSXNamespacedName = "JSXNamespacedName",
    JSXOpeningElement = "JSXOpeningElement",
    JSXOpeningFragment = "JSXOpeningFragment",
    JSXSpreadAttribute = "JSXSpreadAttribute",
    JSXSpreadChild = "JSXSpreadChild",
    JSXText = "JSXText",
    LabeledStatement = "LabeledStatement",
    Literal = "Literal",
    LogicalExpression = "LogicalExpression",
    MemberExpression = "MemberExpression",
    MetaProperty = "MetaProperty",
    MethodDefinition = "MethodDefinition",
    NewExpression = "NewExpression",
    ObjectExpression = "ObjectExpression",
    ObjectPattern = "ObjectPattern",
    PrivateIdentifier = "PrivateIdentifier",
    Program = "Program",
    Property = "Property",
    PropertyDefinition = "PropertyDefinition",
    RestElement = "RestElement",
    ReturnStatement = "ReturnStatement",
    SequenceExpression = "SequenceExpression",
    SpreadElement = "SpreadElement",
    StaticBlock = "StaticBlock",
    Super = "Super",
    SwitchCase = "SwitchCase",
    SwitchStatement = "SwitchStatement",
    TaggedTemplateExpression = "TaggedTemplateExpression",
    TemplateElement = "TemplateElement",
    TemplateLiteral = "TemplateLiteral",
    ThisExpression = "ThisExpression",
    ThrowStatement = "ThrowStatement",
    TryStatement = "TryStatement",
    UnaryExpression = "UnaryExpression",
    UpdateExpression = "UpdateExpression",
    VariableDeclaration = "VariableDeclaration",
    VariableDeclarator = "VariableDeclarator",
    WhileStatement = "WhileStatement",
    WithStatement = "WithStatement",
    YieldExpression = "YieldExpression",
    TSAbstractAccessorProperty = "TSAbstractAccessorProperty",
    TSAbstractKeyword = "TSAbstractKeyword",
    TSAbstractMethodDefinition = "TSAbstractMethodDefinition",
    TSAbstractPropertyDefinition = "TSAbstractPropertyDefinition",
    TSAnyKeyword = "TSAnyKeyword",
    TSArrayType = "TSArrayType",
    TSAsExpression = "TSAsExpression",
    TSAsyncKeyword = "TSAsyncKeyword",
    TSBigIntKeyword = "TSBigIntKeyword",
    TSBooleanKeyword = "TSBooleanKeyword",
    TSCallSignatureDeclaration = "TSCallSignatureDeclaration",
    TSClassImplements = "TSClassImplements",
    TSConditionalType = "TSConditionalType",
    TSConstructorType = "TSConstructorType",
    TSConstructSignatureDeclaration = "TSConstructSignatureDeclaration",
    TSDeclareFunction = "TSDeclareFunction",
    TSDeclareKeyword = "TSDeclareKeyword",
    TSEmptyBodyFunctionExpression = "TSEmptyBodyFunctionExpression",
    TSEnumBody = "TSEnumBody",
    TSEnumDeclaration = "TSEnumDeclaration",
    TSEnumMember = "TSEnumMember",
    TSExportAssignment = "TSExportAssignment",
    TSExportKeyword = "TSExportKeyword",
    TSExternalModuleReference = "TSExternalModuleReference",
    TSFunctionType = "TSFunctionType",
    TSImportEqualsDeclaration = "TSImportEqualsDeclaration",
    TSImportType = "TSImportType",
    TSIndexedAccessType = "TSIndexedAccessType",
    TSIndexSignature = "TSIndexSignature",
    TSInferType = "TSInferType",
    TSInstantiationExpression = "TSInstantiationExpression",
    TSInterfaceBody = "TSInterfaceBody",
    TSInterfaceDeclaration = "TSInterfaceDeclaration",
    TSInterfaceHeritage = "TSInterfaceHeritage",
    TSIntersectionType = "TSIntersectionType",
    TSIntrinsicKeyword = "TSIntrinsicKeyword",
    TSLiteralType = "TSLiteralType",
    TSMappedType = "TSMappedType",
    TSMethodSignature = "TSMethodSignature",
    TSModuleBlock = "TSModuleBlock",
    TSModuleDeclaration = "TSModuleDeclaration",
    TSNamedTupleMember = "TSNamedTupleMember",
    TSNamespaceExportDeclaration = "TSNamespaceExportDeclaration",
    TSNeverKeyword = "TSNeverKeyword",
    TSNonNullExpression = "TSNonNullExpression",
    TSNullKeyword = "TSNullKeyword",
    TSNumberKeyword = "TSNumberKeyword",
    TSObjectKeyword = "TSObjectKeyword",
    TSOptionalType = "TSOptionalType",
    TSParameterProperty = "TSParameterProperty",
    TSPrivateKeyword = "TSPrivateKeyword",
    TSPropertySignature = "TSPropertySignature",
    TSProtectedKeyword = "TSProtectedKeyword",
    TSPublicKeyword = "TSPublicKeyword",
    TSQualifiedName = "TSQualifiedName",
    TSReadonlyKeyword = "TSReadonlyKeyword",
    TSRestType = "TSRestType",
    TSSatisfiesExpression = "TSSatisfiesExpression",
    TSStaticKeyword = "TSStaticKeyword",
    TSStringKeyword = "TSStringKeyword",
    TSSymbolKeyword = "TSSymbolKeyword",
    TSTemplateLiteralType = "TSTemplateLiteralType",
    TSThisType = "TSThisType",
    TSTupleType = "TSTupleType",
    TSTypeAliasDeclaration = "TSTypeAliasDeclaration",
    TSTypeAnnotation = "TSTypeAnnotation",
    TSTypeAssertion = "TSTypeAssertion",
    TSTypeLiteral = "TSTypeLiteral",
    TSTypeOperator = "TSTypeOperator",
    TSTypeParameter = "TSTypeParameter",
    TSTypeParameterDeclaration = "TSTypeParameterDeclaration",
    TSTypeParameterInstantiation = "TSTypeParameterInstantiation",
    TSTypePredicate = "TSTypePredicate",
    TSTypeQuery = "TSTypeQuery",
    TSTypeReference = "TSTypeReference",
    TSUndefinedKeyword = "TSUndefinedKeyword",
    TSUnionType = "TSUnionType",
    TSUnknownKeyword = "TSUnknownKeyword",
    TSVoidKeyword = "TSVoidKeyword"
}
export declare enum AST_TOKEN_TYPES {
    Boolean = "Boolean",
    Identifier = "Identifier",
    JSXIdentifier = "JSXIdentifier",
    PrivateIdentifier = "PrivateIdentifier",
    JSXText = "JSXText",
    Keyword = "Keyword",
    Null = "Null",
    Numeric = "Numeric",
    Punctuator = "Punctuator",
    RegularExpression = "RegularExpression",
    String = "String",
    Template = "Template",
    Block = "Block",
    Line = "Line"
}
export declare interface AwaitExpression extends BaseNode {
    type: AST_NODE_TYPES.AwaitExpression;
    argument: Expression;
}
export declare interface BaseNode extends NodeOrTokenData {
    type: AST_NODE_TYPES;
}
declare interface BaseToken extends NodeOrTokenData {
    type: AST_TOKEN_TYPES;
    value: string;
}
export declare interface BigIntLiteral extends LiteralBase {
    bigint: string;
    value: bigint | null;
}
export declare type BinaryExpression = PrivateInExpression | SymmetricBinaryExpression;
export declare interface BinaryOperatorToText {
    [SyntaxKind.AmpersandAmpersandToken]: '&&';
    [SyntaxKind.AmpersandToken]: '&';
    [SyntaxKind.AsteriskAsteriskToken]: '**';
    [SyntaxKind.AsteriskToken]: '*';
    [SyntaxKind.BarBarToken]: '||';
    [SyntaxKind.BarToken]: '|';
    [SyntaxKind.CaretToken]: '^';
    [SyntaxKind.EqualsEqualsEqualsToken]: '===';
    [SyntaxKind.EqualsEqualsToken]: '==';
    [SyntaxKind.ExclamationEqualsEqualsToken]: '!==';
    [SyntaxKind.ExclamationEqualsToken]: '!=';
    [SyntaxKind.GreaterThanEqualsToken]: '>=';
    [SyntaxKind.GreaterThanGreaterThanGreaterThanToken]: '>>>';
    [SyntaxKind.GreaterThanGreaterThanToken]: '>>';
    [SyntaxKind.GreaterThanToken]: '>';
    [SyntaxKind.InKeyword]: 'in';
    [SyntaxKind.InstanceOfKeyword]: 'instanceof';
    [SyntaxKind.LessThanEqualsToken]: '<=';
    [SyntaxKind.LessThanLessThanToken]: '<<';
    [SyntaxKind.LessThanToken]: '<';
    [SyntaxKind.MinusToken]: '-';
    [SyntaxKind.PercentToken]: '%';
    [SyntaxKind.PlusToken]: '+';
    [SyntaxKind.SlashToken]: '/';
}
export declare type BindingName = BindingPattern | Identifier;
export declare type BindingPattern = ArrayPattern | ObjectPattern;
export declare interface BlockComment extends BaseToken {
    type: AST_TOKEN_TYPES.Block;
}
export declare interface BlockStatement extends BaseNode {
    type: AST_NODE_TYPES.BlockStatement;
    body: Statement[];
}
export declare interface BooleanLiteral extends LiteralBase {
    raw: 'false' | 'true';
    value: boolean;
}
export declare interface BooleanToken extends BaseToken {
    type: AST_TOKEN_TYPES.Boolean;
}
export declare interface BreakStatement extends BaseNode {
    type: AST_NODE_TYPES.BreakStatement;
    label: Identifier | null;
}
export declare interface CallExpression extends BaseNode {
    type: AST_NODE_TYPES.CallExpression;
    arguments: CallExpressionArgument[];
    callee: Expression;
    optional: boolean;
    typeArguments: TSTypeParameterInstantiation | undefined;
}
export declare type CallExpressionArgument = Expression | SpreadElement;
export declare interface CatchClause extends BaseNode {
    type: AST_NODE_TYPES.CatchClause;
    body: BlockStatement;
    param: BindingName | null;
}
export declare type ChainElement = CallExpression | MemberExpression | TSNonNullExpression;
export declare interface ChainExpression extends BaseNode {
    type: AST_NODE_TYPES.ChainExpression;
    expression: ChainElement;
}
declare interface ClassBase extends BaseNode {
    /**
     * Whether the class is an abstract class.
     * @example
     * ```ts
     * abstract class Foo {}
     * ```
     */
    abstract: boolean;
    /**
     * The class body.
     */
    body: ClassBody;
    /**
     * Whether the class has been `declare`d:
     * @example
     * ```ts
     * declare class Foo {}
     * ```
     */
    declare: boolean;
    /**
     * The decorators declared for the class.
     * @example
     * ```ts
     * @deco
     * class Foo {}
     * ```
     */
    decorators: Decorator[];
    /**
     * The class's name.
     * - For a `ClassExpression` this may be `null` if the name is omitted.
     * - For a `ClassDeclaration` this may be `null` if and only if the parent is
     *   an `ExportDefaultDeclaration`.
     */
    id: Identifier | null;
    /**
     * The implemented interfaces for the class.
     */
    implements: TSClassImplements[];
    /**
     * The super class this class extends.
     */
    superClass: LeftHandSideExpression | null;
    /**
     * The generic type parameters passed to the superClass.
     */
    superTypeArguments: TSTypeParameterInstantiation | undefined;
    /**
     * The generic type parameters declared for the class.
     */
    typeParameters: TSTypeParameterDeclaration | undefined;
}
export declare interface ClassBody extends BaseNode {
    type: AST_NODE_TYPES.ClassBody;
    body: ClassElement[];
}
export declare type ClassDeclaration = ClassDeclarationWithName | ClassDeclarationWithOptionalName;
declare interface ClassDeclarationBase extends ClassBase {
    type: AST_NODE_TYPES.ClassDeclaration;
}
/**
 * A normal class declaration:
 * ```
 * class A {}
 * ```
 */
export declare interface ClassDeclarationWithName extends ClassDeclarationBase {
    id: Identifier;
}
/**
 * Default-exported class declarations have optional names:
 * ```
 * export default class {}
 * ```
 */
export declare interface ClassDeclarationWithOptionalName extends ClassDeclarationBase {
    id: Identifier | null;
}
export declare type ClassElement = AccessorProperty | MethodDefinition | PropertyDefinition | StaticBlock | TSAbstractAccessorProperty | TSAbstractMethodDefinition | TSAbstractPropertyDefinition | TSIndexSignature;
export declare interface ClassExpression extends ClassBase {
    type: AST_NODE_TYPES.ClassExpression;
    abstract: false;
    declare: false;
}
declare interface ClassMethodDefinitionNonComputedNameBase extends MethodDefinitionBase {
    computed: false;
    key: ClassPropertyNameNonComputed;
}
declare interface ClassPropertyDefinitionNonComputedNameBase extends PropertyDefinitionBase {
    computed: false;
    key: ClassPropertyNameNonComputed;
}
export declare type ClassPropertyNameNonComputed = PrivateIdentifier | PropertyNameNonComputed;
export declare type Comment = BlockComment | LineComment;
export declare interface ConditionalExpression extends BaseNode {
    type: AST_NODE_TYPES.ConditionalExpression;
    alternate: Expression;
    consequent: Expression;
    test: Expression;
}
export declare interface ConstDeclaration extends LetOrConstOrVarDeclarationBase {
    /**
     * In a `declare const` declaration, the declarators may have initializers, but
     * not definite assignment assertions. Each declarator cannot have both an
     * initializer and a type annotation.
     *
     * Even if the declaration has no `declare`, it may still be ambient and have
     * no initializer.
     */
    declarations: VariableDeclaratorMaybeInit[];
    kind: 'const';
}
export declare interface ContinueStatement extends BaseNode {
    type: AST_NODE_TYPES.ContinueStatement;
    label: Identifier | null;
}
export declare interface DebuggerStatement extends BaseNode {
    type: AST_NODE_TYPES.DebuggerStatement;
}
/**
 * @deprecated
 * Note that this is neither up to date nor fully correct.
 */
export declare type DeclarationStatement = ClassDeclaration | ClassExpression | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | FunctionDeclaration | TSDeclareFunction | TSEnumDeclaration | TSImportEqualsDeclaration | TSInterfaceDeclaration | TSModuleDeclaration | TSNamespaceExportDeclaration | TSTypeAliasDeclaration;
export declare interface Decorator extends BaseNode {
    type: AST_NODE_TYPES.Decorator;
    expression: LeftHandSideExpression;
}
export declare type DefaultExportDeclarations = ClassDeclarationWithOptionalName | Expression | FunctionDeclarationWithName | FunctionDeclarationWithOptionalName | TSDeclareFunction | TSEnumDeclaration | TSInterfaceDeclaration | TSModuleDeclaration | TSTypeAliasDeclaration | VariableDeclaration;
export declare type DestructuringPattern = ArrayPattern | AssignmentPattern | Identifier | MemberExpression | ObjectPattern | RestElement;
export declare interface DoWhileStatement extends BaseNode {
    type: AST_NODE_TYPES.DoWhileStatement;
    body: Statement;
    test: Expression;
}
export declare interface EmptyStatement extends BaseNode {
    type: AST_NODE_TYPES.EmptyStatement;
}
export declare type EntityName = Identifier | ThisExpression | TSQualifiedName;
export declare interface ExportAllDeclaration extends BaseNode {
    type: AST_NODE_TYPES.ExportAllDeclaration;
    /**
     * The assertions declared for the export.
     * @example
     * ```ts
     * export * from 'mod' assert \{ type: 'json' \};
     * ```
     * @deprecated Replaced with {@link `attributes`}.
     */
    assertions: ImportAttribute[];
    /**
     * The attributes declared for the export.
     * @example
     * ```ts
     * export * from 'mod' with \{ type: 'json' \};
     * ```
     */
    attributes: ImportAttribute[];
    /**
     * The name for the exported items (`as X`). `null` if no name is assigned.
     */
    exported: Identifier | null;
    /**
     * The kind of the export.
     */
    exportKind: ExportKind;
    /**
     * The source module being exported from.
     */
    source: StringLiteral;
}
declare type ExportAndImportKind = 'type' | 'value';
export declare type ExportDeclaration = DefaultExportDeclarations | NamedExportDeclarations;
export declare interface ExportDefaultDeclaration extends BaseNode {
    type: AST_NODE_TYPES.ExportDefaultDeclaration;
    /**
     * The declaration being exported.
     */
    declaration: DefaultExportDeclarations;
    /**
     * The kind of the export. Always `value` for default exports.
     */
    exportKind: 'value';
}
declare type ExportKind = ExportAndImportKind;
export declare type ExportNamedDeclaration = ExportNamedDeclarationWithoutSourceWithMultiple | ExportNamedDeclarationWithoutSourceWithSingle | ExportNamedDeclarationWithSource;
declare interface ExportNamedDeclarationBase extends BaseNode {
    type: AST_NODE_TYPES.ExportNamedDeclaration;
    /**
     * The assertions declared for the export.
     * @example
     * ```ts
     * export { foo } from 'mod' assert \{ type: 'json' \};
     * ```
     * This will be an empty array if `source` is `null`
     * @deprecated Replaced with {@link `attributes`}.
     */
    assertions: ImportAttribute[];
    /**
     * The attributes declared for the export.
     * @example
     * ```ts
     * export { foo } from 'mod' with \{ type: 'json' \};
     * ```
     * This will be an empty array if `source` is `null`
     */
    attributes: ImportAttribute[];
    /**
     * The exported declaration.
     * @example
     * ```ts
     * export const x = 1;
     * ```
     * This will be `null` if `source` is not `null`, or if there are `specifiers`
     */
    declaration: NamedExportDeclarations | null;
    /**
     * The kind of the export.
     */
    exportKind: ExportKind;
    /**
     * The source module being exported from.
     */
    source: StringLiteral | null;
    /**
     * The specifiers being exported.
     * @example
     * ```ts
     * export { a, b };
     * ```
     * This will be an empty array if `declaration` is not `null`
     */
    specifiers: ExportSpecifier[];
}
export declare type ExportNamedDeclarationWithoutSource = ExportNamedDeclarationWithoutSourceWithMultiple | ExportNamedDeclarationWithoutSourceWithSingle;
/**
 * Exporting names from the current module.
 * ```
 * export {};
 * export { a, b };
 * ```
 */
export declare interface ExportNamedDeclarationWithoutSourceWithMultiple extends ExportNamedDeclarationBase {
    /**
     * This will always be an empty array.
     * @deprecated Replaced with {@link `attributes`}.
     */
    assertions: ImportAttribute[];
    /**
     * This will always be an empty array.
     */
    attributes: ImportAttribute[];
    declaration: null;
    source: null;
    specifiers: ExportSpecifierWithIdentifierLocal[];
}
/**
 * Exporting a single named declaration.
 * ```
 * export const x = 1;
 * ```
 */
export declare interface ExportNamedDeclarationWithoutSourceWithSingle extends ExportNamedDeclarationBase {
    /**
     * This will always be an empty array.
     * @deprecated Replaced with {@link `attributes`}.
     */
    assertions: ImportAttribute[];
    /**
     * This will always be an empty array.
     */
    attributes: ImportAttribute[];
    declaration: NamedExportDeclarations;
    source: null;
    /**
     * This will always be an empty array.
     */
    specifiers: ExportSpecifierWithIdentifierLocal[];
}
/**
 * Export names from another module.
 * ```
 * export { a, b } from 'mod';
 * ```
 */
export declare interface ExportNamedDeclarationWithSource extends ExportNamedDeclarationBase {
    declaration: null;
    source: StringLiteral;
}
export declare type ExportSpecifier = ExportSpecifierWithIdentifierLocal | ExportSpecifierWithStringOrLiteralLocal;
declare interface ExportSpecifierBase extends BaseNode {
    type: AST_NODE_TYPES.ExportSpecifier;
    exported: Identifier | StringLiteral;
    exportKind: ExportKind;
    local: Identifier | StringLiteral;
}
export declare interface ExportSpecifierWithIdentifierLocal extends ExportSpecifierBase {
    local: Identifier;
}
export declare interface ExportSpecifierWithStringOrLiteralLocal extends ExportSpecifierBase {
    local: Identifier | StringLiteral;
}
export declare type Expression = ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AwaitExpression | BinaryExpression | CallExpression | ChainExpression | ClassExpression | ConditionalExpression | FunctionExpression | Identifier | ImportExpression | JSXElement | JSXFragment | LiteralExpression | LogicalExpression | MemberExpression | MetaProperty | NewExpression | ObjectExpression | ObjectPattern | SequenceExpression | Super | TaggedTemplateExpression | TemplateLiteral | ThisExpression | TSAsExpression | TSInstantiationExpression | TSNonNullExpression | TSSatisfiesExpression | TSTypeAssertion | UnaryExpression | UpdateExpression | YieldExpression;
export declare interface ExpressionStatement extends BaseNode {
    type: AST_NODE_TYPES.ExpressionStatement;
    directive: string | undefined;
    expression: Expression;
}
export declare type ForInitialiser = Expression | LetOrConstOrVarDeclaration;
export declare interface ForInStatement extends BaseNode {
    type: AST_NODE_TYPES.ForInStatement;
    body: Statement;
    left: ForInitialiser;
    right: Expression;
}
declare type ForOfInitialiser = Expression | LetOrConstOrVarDeclaration | UsingInForOfDeclaration;
export declare interface ForOfStatement extends BaseNode {
    type: AST_NODE_TYPES.ForOfStatement;
    await: boolean;
    body: Statement;
    left: ForOfInitialiser;
    right: Expression;
}
export declare interface ForStatement extends BaseNode {
    type: AST_NODE_TYPES.ForStatement;
    body: Statement;
    init: Expression | ForInitialiser | null;
    test: Expression | null;
    update: Expression | null;
}
declare interface FunctionBase extends BaseNode {
    /**
     * Whether the function is async:
     * ```
     * async function foo() {}
     * const x = async function () {}
     * const x = async () => {}
     * ```
     */
    async: boolean;
    /**
     * The body of the function.
     * - For an `ArrowFunctionExpression` this may be an `Expression` or `BlockStatement`.
     * - For a `FunctionDeclaration` or `FunctionExpression` this is always a `BlockStatement`.
     * - For a `TSDeclareFunction` this is always `undefined`.
     * - For a `TSEmptyBodyFunctionExpression` this is always `null`.
     */
    body: BlockStatement | Expression | null | undefined;
    /**
     * This is only `true` if and only if the node is a `TSDeclareFunction` and it has `declare`:
     * ```
     * declare function foo() {}
     * ```
     */
    declare: boolean;
    /**
     * This is only ever `true` if and only the node is an `ArrowFunctionExpression` and the body
     * is an expression:
     * ```
     * (() => 1)
     * ```
     */
    expression: boolean;
    /**
     * Whether the function is a generator function:
     * ```
     * function *foo() {}
     * const x = function *() {}
     * ```
     * This is always `false` for arrow functions as they cannot be generators.
     */
    generator: boolean;
    /**
     * The function's name.
     * - For an `ArrowFunctionExpression` this is always `null`.
     * - For a `FunctionExpression` this may be `null` if the name is omitted.
     * - For a `FunctionDeclaration` or `TSDeclareFunction` this may be `null` if
     *   and only if the parent is an `ExportDefaultDeclaration`.
     */
    id: Identifier | null;
    /**
     * The list of parameters declared for the function.
     */
    params: Parameter[];
    /**
     * The return type annotation for the function.
     */
    returnType: TSTypeAnnotation | undefined;
    /**
     * The generic type parameter declaration for the function.
     */
    typeParameters: TSTypeParameterDeclaration | undefined;
}
export declare type FunctionDeclaration = FunctionDeclarationWithName | FunctionDeclarationWithOptionalName;
declare interface FunctionDeclarationBase extends FunctionBase {
    type: AST_NODE_TYPES.FunctionDeclaration;
    body: BlockStatement;
    declare: false;
    expression: false;
}
/**
 * A normal function declaration:
 * ```
 * function f() {}
 * ```
 */
export declare interface FunctionDeclarationWithName extends FunctionDeclarationBase {
    id: Identifier;
}
/**
 * Default-exported function declarations have optional names:
 * ```
 * export default function () {}
 * ```
 */
export declare interface FunctionDeclarationWithOptionalName extends FunctionDeclarationBase {
    id: Identifier | null;
}
export declare interface FunctionExpression extends FunctionBase {
    type: AST_NODE_TYPES.FunctionExpression;
    body: BlockStatement;
    expression: false;
}
export declare type FunctionLike = ArrowFunctionExpression | FunctionDeclaration | FunctionExpression | TSDeclareFunction | TSEmptyBodyFunctionExpression;
export declare interface Identifier extends BaseNode {
    type: AST_NODE_TYPES.Identifier;
    decorators: Decorator[];
    name: string;
    optional: boolean;
    typeAnnotation: TSTypeAnnotation | undefined;
}
export declare interface IdentifierToken extends BaseToken {
    type: AST_TOKEN_TYPES.Identifier;
}
export declare interface IfStatement extends BaseNode {
    type: AST_NODE_TYPES.IfStatement;
    alternate: Statement | null;
    consequent: Statement;
    test: Expression;
}
export declare interface ImportAttribute extends BaseNode {
    type: AST_NODE_TYPES.ImportAttribute;
    key: Identifier | Literal;
    value: Literal;
}
export declare type ImportClause = ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier;
export declare interface ImportDeclaration extends BaseNode {
    type: AST_NODE_TYPES.ImportDeclaration;
    /**
     * The assertions declared for the export.
     * @example
     * ```ts
     * import * from 'mod' assert \{ type: 'json' \};
     * ```
     * @deprecated Replaced with {@link `attributes`}.
     */
    assertions: ImportAttribute[];
    /**
     * The attributes declared for the export.
     * @example
     * ```ts
     * import * from 'mod' with \{ type: 'json' \};
     * ```
     */
    attributes: ImportAttribute[];
    /**
     * The kind of the import.
     */
    importKind: ImportKind;
    /**
     * The source module being imported from.
     */
    source: StringLiteral;
    /**
     * The specifiers being imported.
     * If this is an empty array then either there are no specifiers:
     * ```
     * import {} from 'mod';
     * ```
     * Or it is a side-effect import:
     * ```
     * import 'mod';
     * ```
     */
    specifiers: ImportClause[];
}
export declare interface ImportDefaultSpecifier extends BaseNode {
    type: AST_NODE_TYPES.ImportDefaultSpecifier;
    local: Identifier;
}
export declare interface ImportExpression extends BaseNode {
    type: AST_NODE_TYPES.ImportExpression;
    /**
     * The attributes declared for the dynamic import.
     * @example
     * ```ts
     * import('mod', \{ assert: \{ type: 'json' \} \});
     * ```
     * @deprecated Replaced with {@link `options`}.
     */
    attributes: Expression | null;
    /**
     * The options bag declared for the dynamic import.
     * @example
     * ```ts
     * import('mod', \{ assert: \{ type: 'json' \} \});
     * ```
     */
    options: Expression | null;
    source: Expression;
}
declare type ImportKind = ExportAndImportKind;
export declare interface ImportNamespaceSpecifier extends BaseNode {
    type: AST_NODE_TYPES.ImportNamespaceSpecifier;
    local: Identifier;
}
export declare interface ImportSpecifier extends BaseNode {
    type: AST_NODE_TYPES.ImportSpecifier;
    imported: Identifier | StringLiteral;
    importKind: ImportKind;
    local: Identifier;
}
export declare type IterationStatement = DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | WhileStatement;
export declare interface JSXAttribute extends BaseNode {
    type: AST_NODE_TYPES.JSXAttribute;
    name: JSXIdentifier | JSXNamespacedName;
    value: JSXElement | JSXExpression | Literal | null;
}
export declare type JSXChild = JSXElement | JSXExpression | JSXFragment | JSXText;
export declare interface JSXClosingElement extends BaseNode {
    type: AST_NODE_TYPES.JSXClosingElement;
    name: JSXTagNameExpression;
}
export declare interface JSXClosingFragment extends BaseNode {
    type: AST_NODE_TYPES.JSXClosingFragment;
}
export declare interface JSXElement extends BaseNode {
    type: AST_NODE_TYPES.JSXElement;
    children: JSXChild[];
    closingElement: JSXClosingElement | null;
    openingElement: JSXOpeningElement;
}
export declare interface JSXEmptyExpression extends BaseNode {
    type: AST_NODE_TYPES.JSXEmptyExpression;
}
export declare type JSXExpression = JSXExpressionContainer | JSXSpreadChild;
export declare interface JSXExpressionContainer extends BaseNode {
    type: AST_NODE_TYPES.JSXExpressionContainer;
    expression: Expression | JSXEmptyExpression;
}
export declare interface JSXFragment extends BaseNode {
    type: AST_NODE_TYPES.JSXFragment;
    children: JSXChild[];
    closingFragment: JSXClosingFragment;
    openingFragment: JSXOpeningFragment;
}
export declare interface JSXIdentifier extends BaseNode {
    type: AST_NODE_TYPES.JSXIdentifier;
    name: string;
}
export declare interface JSXIdentifierToken extends BaseToken {
    type: AST_TOKEN_TYPES.JSXIdentifier;
}
export declare interface JSXMemberExpression extends BaseNode {
    type: AST_NODE_TYPES.JSXMemberExpression;
    object: JSXTagNameExpression;
    property: JSXIdentifier;
}
export declare interface JSXNamespacedName extends BaseNode {
    type: AST_NODE_TYPES.JSXNamespacedName;
    name: JSXIdentifier;
    namespace: JSXIdentifier;
}
export declare interface JSXOpeningElement extends BaseNode {
    type: AST_NODE_TYPES.JSXOpeningElement;
    attributes: (JSXAttribute | JSXSpreadAttribute)[];
    name: JSXTagNameExpression;
    selfClosing: boolean;
    typeArguments: TSTypeParameterInstantiation | undefined;
}
export declare interface JSXOpeningFragment extends BaseNode {
    type: AST_NODE_TYPES.JSXOpeningFragment;
}
export declare interface JSXSpreadAttribute extends BaseNode {
    type: AST_NODE_TYPES.JSXSpreadAttribute;
    argument: Expression;
}
export declare interface JSXSpreadChild extends BaseNode {
    type: AST_NODE_TYPES.JSXSpreadChild;
    expression: Expression | JSXEmptyExpression;
}
export declare type JSXTagNameExpression = JSXIdentifier | JSXMemberExpression | JSXNamespacedName;
export declare interface JSXText extends BaseNode {
    type: AST_NODE_TYPES.JSXText;
    raw: string;
    value: string;
}
export declare interface JSXTextToken extends BaseToken {
    type: AST_TOKEN_TYPES.JSXText;
}
export declare interface KeywordToken extends BaseToken {
    type: AST_TOKEN_TYPES.Keyword;
}
export declare interface LabeledStatement extends BaseNode {
    type: AST_NODE_TYPES.LabeledStatement;
    body: Statement;
    label: Identifier;
}
export declare type LeftHandSideExpression = ArrayExpression | ArrayPattern | ArrowFunctionExpression | CallExpression | ClassExpression | FunctionExpression | Identifier | JSXElement | JSXFragment | LiteralExpression | MemberExpression | MetaProperty | ObjectExpression | ObjectPattern | SequenceExpression | Super | TaggedTemplateExpression | ThisExpression | TSAsExpression | TSNonNullExpression | TSTypeAssertion;
export declare type LetOrConstOrVarDeclaration = ConstDeclaration | LetOrVarDeclaredDeclaration | LetOrVarNonDeclaredDeclaration;
declare interface LetOrConstOrVarDeclarationBase extends BaseNode {
    type: AST_NODE_TYPES.VariableDeclaration;
    /**
     * The variables declared by this declaration.
     * Always non-empty.
     * @example
     * ```ts
     * let x;
     * let y, z;
     * ```
     */
    declarations: LetOrConstOrVarDeclarator[];
    /**
     * Whether the declaration is `declare`d
     * @example
     * ```ts
     * declare const x = 1;
     * ```
     */
    declare: boolean;
    /**
     * The keyword used to declare the variable(s)
     * @example
     * ```ts
     * const x = 1;
     * let y = 2;
     * var z = 3;
     * ```
     */
    kind: 'const' | 'let' | 'var';
}
export declare type LetOrConstOrVarDeclarator = VariableDeclaratorDefiniteAssignment | VariableDeclaratorMaybeInit | VariableDeclaratorNoInit;
export declare interface LetOrVarDeclaredDeclaration extends LetOrConstOrVarDeclarationBase {
    /**
     * In a `declare let` declaration, the declarators must not have definite assignment
     * assertions or initializers.
     *
     * @example
     * ```ts
     * using x = 1;
     * using y =1, z = 2;
     * ```
     */
    declarations: VariableDeclaratorNoInit[];
    declare: true;
    kind: 'let' | 'var';
}
export declare interface LetOrVarNonDeclaredDeclaration extends LetOrConstOrVarDeclarationBase {
    /**
     * In a `let`/`var` declaration, the declarators may have definite assignment
     * assertions or initializers, but not both.
     */
    declarations: (VariableDeclaratorDefiniteAssignment | VariableDeclaratorMaybeInit)[];
    declare: false;
    kind: 'let' | 'var';
}
export declare interface LineComment extends BaseToken {
    type: AST_TOKEN_TYPES.Line;
}
export declare type Literal = BigIntLiteral | BooleanLiteral | NullLiteral | NumberLiteral | RegExpLiteral | StringLiteral;
declare interface LiteralBase extends BaseNode {
    type: AST_NODE_TYPES.Literal;
    raw: string;
    value: bigint | boolean | number | string | RegExp | null;
}
export declare type LiteralExpression = Literal | TemplateLiteral;
export declare interface LogicalExpression extends BaseNode {
    type: AST_NODE_TYPES.LogicalExpression;
    left: Expression;
    operator: '&&' | '??' | '||';
    right: Expression;
}
export declare type MemberExpression = MemberExpressionComputedName | MemberExpressionNonComputedName;
declare interface MemberExpressionBase extends BaseNode {
    computed: boolean;
    object: Expression;
    optional: boolean;
    property: Expression | Identifier | PrivateIdentifier;
}
export declare interface MemberExpressionComputedName extends MemberExpressionBase {
    type: AST_NODE_TYPES.MemberExpression;
    computed: true;
    property: Expression;
}
export declare interface MemberExpressionNonComputedName extends MemberExpressionBase {
    type: AST_NODE_TYPES.MemberExpression;
    computed: false;
    property: Identifier | PrivateIdentifier;
}
export declare interface MetaProperty extends BaseNode {
    type: AST_NODE_TYPES.MetaProperty;
    meta: Identifier;
    property: Identifier;
}
export declare type MethodDefinition = MethodDefinitionComputedName | MethodDefinitionNonComputedName;
/** this should not be directly used - instead use MethodDefinitionComputedNameBase or MethodDefinitionNonComputedNameBase */
declare interface MethodDefinitionBase extends BaseNode {
    accessibility: Accessibility | undefined;
    computed: boolean;
    decorators: Decorator[];
    key: PropertyName;
    kind: 'constructor' | 'get' | 'method' | 'set';
    optional: boolean;
    override: boolean;
    static: boolean;
    value: FunctionExpression | TSEmptyBodyFunctionExpression;
}
export declare interface MethodDefinitionComputedName extends MethodDefinitionComputedNameBase {
    type: AST_NODE_TYPES.MethodDefinition;
}
declare interface MethodDefinitionComputedNameBase extends MethodDefinitionBase {
    computed: true;
    key: PropertyNameComputed;
}
export declare interface MethodDefinitionNonComputedName extends ClassMethodDefinitionNonComputedNameBase {
    type: AST_NODE_TYPES.MethodDefinition;
}
declare interface MethodDefinitionNonComputedNameBase extends MethodDefinitionBase {
    computed: false;
    key: PropertyNameNonComputed;
}
export declare type NamedExportDeclarations = ClassDeclarationWithName | ClassDeclarationWithOptionalName | FunctionDeclarationWithName | FunctionDeclarationWithOptionalName | TSDeclareFunction | TSEnumDeclaration | TSImportEqualsDeclaration | TSInterfaceDeclaration | TSModuleDeclaration | TSTypeAliasDeclaration | VariableDeclaration;
export declare interface NewExpression extends BaseNode {
    type: AST_NODE_TYPES.NewExpression;
    arguments: CallExpressionArgument[];
    callee: Expression;
    typeArguments: TSTypeParameterInstantiation | undefined;
}
export declare type Node = AccessorProperty | ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BlockStatement | BreakStatement | CallExpression | CatchClause | ChainExpression | ClassBody | ClassDeclaration | ClassExpression | ConditionalExpression | ContinueStatement | DebuggerStatement | Decorator | DoWhileStatement | EmptyStatement | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ExportSpecifier | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | FunctionDeclaration | FunctionExpression | Identifier | IfStatement | ImportAttribute | ImportDeclaration | ImportDefaultSpecifier | ImportExpression | ImportNamespaceSpecifier | ImportSpecifier | JSXAttribute | JSXClosingElement | JSXClosingFragment | JSXElement | JSXEmptyExpression | JSXExpressionContainer | JSXFragment | JSXIdentifier | JSXMemberExpression | JSXNamespacedName | JSXOpeningElement | JSXOpeningFragment | JSXSpreadAttribute | JSXSpreadChild | JSXText | LabeledStatement | Literal | LogicalExpression | MemberExpression | MetaProperty | MethodDefinition | NewExpression | ObjectExpression | ObjectPattern | PrivateIdentifier | Program | Property | PropertyDefinition | RestElement | ReturnStatement | SequenceExpression | SpreadElement | StaticBlock | Super | SwitchCase | SwitchStatement | TaggedTemplateExpression | TemplateElement | TemplateLiteral | ThisExpression | ThrowStatement | TryStatement | TSAbstractAccessorProperty | TSAbstractKeyword | TSAbstractMethodDefinition | TSAbstractPropertyDefinition | TSAnyKeyword | TSArrayType | TSAsExpression | TSAsyncKeyword | TSBigIntKeyword | TSBooleanKeyword | TSCallSignatureDeclaration | TSClassImplements | TSConditionalType | TSConstructorType | TSConstructSignatureDeclaration | TSDeclareFunction | TSDeclareKeyword | TSEmptyBodyFunctionExpression | TSEnumBody | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSExportKeyword | TSExternalModuleReference | TSFunctionType | TSImportEqualsDeclaration | TSImportType | TSIndexedAccessType | TSIndexSignature | TSInferType | TSInstantiationExpression | TSInterfaceBody | TSInterfaceDeclaration | TSInterfaceHeritage | TSIntersectionType | TSIntrinsicKeyword | TSLiteralType | TSMappedType | TSMethodSignature | TSModuleBlock | TSModuleDeclaration | TSNamedTupleMember | TSNamespaceExportDeclaration | TSNeverKeyword | TSNonNullExpression | TSNullKeyword | TSNumberKeyword | TSObjectKeyword | TSOptionalType | TSParameterProperty | TSPrivateKeyword | TSPropertySignature | TSProtectedKeyword | TSPublicKeyword | TSQualifiedName | TSReadonlyKeyword | TSRestType | TSSatisfiesExpression | TSStaticKeyword | TSStringKeyword | TSSymbolKeyword | TSTemplateLiteralType | TSThisType | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeLiteral | TSTypeOperator | TSTypeParameter | TSTypeParameterDeclaration | TSTypeParameterInstantiation | TSTypePredicate | TSTypeQuery | TSTypeReference | TSUndefinedKeyword | TSUnionType | TSUnknownKeyword | TSVoidKeyword | UnaryExpression | UpdateExpression | VariableDeclaration | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
export declare interface NodeOrTokenData {
    type: string;
    /**
     * The source location information of the node.
     *
     * The loc property is defined as nullable by ESTree, but ESLint requires this property.
     */
    loc: SourceLocation;
    range: Range;
}
export declare interface NullLiteral extends LiteralBase {
    raw: 'null';
    value: null;
}
export declare interface NullToken extends BaseToken {
    type: AST_TOKEN_TYPES.Null;
}
export declare interface NumberLiteral extends LiteralBase {
    value: number;
}
export declare interface NumericToken extends BaseToken {
    type: AST_TOKEN_TYPES.Numeric;
}
export declare interface ObjectExpression extends BaseNode {
    type: AST_NODE_TYPES.ObjectExpression;
    properties: ObjectLiteralElement[];
}
export declare type ObjectLiteralElement = Property | SpreadElement;
export declare type ObjectLiteralElementLike = ObjectLiteralElement;
export declare interface ObjectPattern extends BaseNode {
    type: AST_NODE_TYPES.ObjectPattern;
    decorators: Decorator[];
    optional: boolean;
    properties: (Property | RestElement)[];
    typeAnnotation: TSTypeAnnotation | undefined;
}
export declare type OptionalRangeAndLoc<T> = {
    loc?: SourceLocation;
    range?: Range;
} & Pick<T, Exclude<keyof T, 'loc' | 'range'>>;
export declare type Parameter = ArrayPattern | AssignmentPattern | Identifier | ObjectPattern | RestElement | TSParameterProperty;
declare type ParameterPropertyParameter = (AssignmentPattern & {
    left: Identifier;
}) | Identifier;
export declare interface Position {
    /**
     * Column number on the line (0-indexed)
     */
    column: number;
    /**
     * Line number (1-indexed)
     */
    line: number;
}
export declare type PrimaryExpression = ArrayExpression | ArrayPattern | ClassExpression | FunctionExpression | Identifier | JSXElement | JSXFragment | JSXOpeningElement | LiteralExpression | MetaProperty | ObjectExpression | ObjectPattern | Super | TemplateLiteral | ThisExpression | TSNullKeyword;
export declare interface PrivateIdentifier extends BaseNode {
    type: AST_NODE_TYPES.PrivateIdentifier;
    name: string;
}
export declare interface PrivateIdentifierToken extends BaseToken {
    type: AST_TOKEN_TYPES.PrivateIdentifier;
}
export declare interface PrivateInExpression extends BaseNode {
    type: AST_NODE_TYPES.BinaryExpression;
    left: PrivateIdentifier;
    operator: 'in';
    right: Expression;
}
export declare interface Program extends NodeOrTokenData {
    type: AST_NODE_TYPES.Program;
    body: ProgramStatement[];
    comments: Comment[] | undefined;
    sourceType: 'module' | 'script';
    tokens: Token[] | undefined;
}
export declare type ProgramStatement = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration | Statement | TSImportEqualsDeclaration | TSNamespaceExportDeclaration;
export declare type Property = PropertyComputedName | PropertyNonComputedName;
declare interface PropertyBase extends BaseNode {
    type: AST_NODE_TYPES.Property;
    computed: boolean;
    key: PropertyName;
    kind: 'get' | 'init' | 'set';
    method: boolean;
    optional: boolean;
    shorthand: boolean;
    value: AssignmentPattern | BindingName | Expression | TSEmptyBodyFunctionExpression;
}
export declare interface PropertyComputedName extends PropertyBase {
    computed: true;
    key: PropertyNameComputed;
}
export declare type PropertyDefinition = PropertyDefinitionComputedName | PropertyDefinitionNonComputedName;
declare interface PropertyDefinitionBase extends BaseNode {
    accessibility: Accessibility | undefined;
    computed: boolean;
    declare: boolean;
    decorators: Decorator[];
    definite: boolean;
    key: PropertyName;
    optional: boolean;
    override: boolean;
    readonly: boolean;
    static: boolean;
    typeAnnotation: TSTypeAnnotation | undefined;
    value: Expression | null;
}
export declare interface PropertyDefinitionComputedName extends PropertyDefinitionComputedNameBase {
    type: AST_NODE_TYPES.PropertyDefinition;
}
declare interface PropertyDefinitionComputedNameBase extends PropertyDefinitionBase {
    computed: true;
    key: PropertyNameComputed;
}
export declare interface PropertyDefinitionNonComputedName extends ClassPropertyDefinitionNonComputedNameBase {
    type: AST_NODE_TYPES.PropertyDefinition;
}
declare interface PropertyDefinitionNonComputedNameBase extends PropertyDefinitionBase {
    computed: false;
    key: PropertyNameNonComputed;
}
export declare type PropertyName = ClassPropertyNameNonComputed | PropertyNameComputed | PropertyNameNonComputed;
export declare type PropertyNameComputed = Expression;
export declare type PropertyNameNonComputed = Identifier | NumberLiteral | StringLiteral;
export declare interface PropertyNonComputedName extends PropertyBase {
    computed: false;
    key: PropertyNameNonComputed;
}
export declare interface PunctuatorToken extends BaseToken {
    type: AST_TOKEN_TYPES.Punctuator;
    value: ValueOf<PunctuatorTokenToText>;
}
export declare interface PunctuatorTokenToText extends AssignmentOperatorToText {
    [SyntaxKind.AmpersandAmpersandToken]: '&&';
    [SyntaxKind.AmpersandToken]: '&';
    [SyntaxKind.AsteriskAsteriskToken]: '**';
    [SyntaxKind.AsteriskToken]: '*';
    [SyntaxKind.AtToken]: '@';
    [SyntaxKind.BacktickToken]: '`';
    [SyntaxKind.BarBarToken]: '||';
    [SyntaxKind.BarToken]: '|';
    [SyntaxKind.CaretToken]: '^';
    [SyntaxKind.CloseBraceToken]: '}';
    [SyntaxKind.CloseBracketToken]: ']';
    [SyntaxKind.CloseParenToken]: ')';
    [SyntaxKind.ColonToken]: ':';
    [SyntaxKind.CommaToken]: ',';
    [SyntaxKind.DotDotDotToken]: '...';
    [SyntaxKind.DotToken]: '.';
    [SyntaxKind.EqualsEqualsEqualsToken]: '===';
    [SyntaxKind.EqualsEqualsToken]: '==';
    [SyntaxKind.EqualsGreaterThanToken]: '=>';
    [SyntaxKind.ExclamationEqualsEqualsToken]: '!==';
    [SyntaxKind.ExclamationEqualsToken]: '!=';
    [SyntaxKind.ExclamationToken]: '!';
    [SyntaxKind.GreaterThanEqualsToken]: '>=';
    [SyntaxKind.GreaterThanGreaterThanGreaterThanToken]: '>>>';
    [SyntaxKind.GreaterThanGreaterThanToken]: '>>';
    [SyntaxKind.GreaterThanToken]: '>';
    [SyntaxKind.HashToken]: '#';
    [SyntaxKind.LessThanEqualsToken]: '<=';
    [SyntaxKind.LessThanLessThanToken]: '<<';
    [SyntaxKind.LessThanSlashToken]: '</';
    [SyntaxKind.LessThanToken]: '<';
    [SyntaxKind.MinusMinusToken]: '--';
    [SyntaxKind.MinusToken]: '-';
    [SyntaxKind.OpenBraceToken]: '{';
    [SyntaxKind.OpenBracketToken]: '[';
    [SyntaxKind.OpenParenToken]: '(';
    [SyntaxKind.PercentToken]: '%';
    [SyntaxKind.PlusPlusToken]: '++';
    [SyntaxKind.PlusToken]: '+';
    [SyntaxKind.QuestionDotToken]: '?.';
    [SyntaxKind.QuestionQuestionToken]: '??';
    [SyntaxKind.QuestionToken]: '?';
    [SyntaxKind.SemicolonToken]: ';';
    [SyntaxKind.SlashToken]: '/';
    [SyntaxKind.TildeToken]: '~';
}
/**
 * An array of two numbers.
 * Both numbers are a 0-based index which is the position in the array of source code characters.
 * The first is the start position of the node, the second is the end position of the node.
 */
export declare type Range = [number, number];
export declare interface RegExpLiteral extends LiteralBase {
    regex: {
        flags: string;
        pattern: string;
    };
    value: RegExp | null;
}
export declare interface RegularExpressionToken extends BaseToken {
    type: AST_TOKEN_TYPES.RegularExpression;
    regex: {
        flags: string;
        pattern: string;
    };
}
export declare interface RestElement extends BaseNode {
    type: AST_NODE_TYPES.RestElement;
    argument: DestructuringPattern;
    decorators: Decorator[];
    optional: boolean;
    typeAnnotation: TSTypeAnnotation | undefined;
    value: AssignmentPattern | undefined;
}
export declare interface ReturnStatement extends BaseNode {
    type: AST_NODE_TYPES.ReturnStatement;
    argument: Expression | null;
}
export declare interface SequenceExpression extends BaseNode {
    type: AST_NODE_TYPES.SequenceExpression;
    expressions: Expression[];
}
export declare interface SourceLocation {
    /**
     * The position of the first character after the parsed source region
     */
    end: Position;
    /**
     * The position of the first character of the parsed source region
     */
    start: Position;
}
export declare interface SpreadElement extends BaseNode {
    type: AST_NODE_TYPES.SpreadElement;
    argument: Expression;
}
export declare type Statement = BlockStatement | BreakStatement | ClassDeclarationWithName | ContinueStatement | DebuggerStatement | DoWhileStatement | EmptyStatement | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | FunctionDeclarationWithName | IfStatement | ImportDeclaration | LabeledStatement | ReturnStatement | SwitchStatement | ThrowStatement | TryStatement | TSDeclareFunction | TSEnumDeclaration | TSExportAssignment | TSImportEqualsDeclaration | TSInterfaceDeclaration | TSModuleDeclaration | TSNamespaceExportDeclaration | TSTypeAliasDeclaration | VariableDeclaration | WhileStatement | WithStatement;
export declare interface StaticBlock extends BaseNode {
    type: AST_NODE_TYPES.StaticBlock;
    body: Statement[];
}
export declare interface StringLiteral extends LiteralBase {
    value: string;
}
export declare interface StringToken extends BaseToken {
    type: AST_TOKEN_TYPES.String;
}
export declare interface Super extends BaseNode {
    type: AST_NODE_TYPES.Super;
}
export declare interface SwitchCase extends BaseNode {
    type: AST_NODE_TYPES.SwitchCase;
    consequent: Statement[];
    test: Expression | null;
}
export declare interface SwitchStatement extends BaseNode {
    type: AST_NODE_TYPES.SwitchStatement;
    cases: SwitchCase[];
    discriminant: Expression;
}
export declare interface SymmetricBinaryExpression extends BaseNode {
    type: AST_NODE_TYPES.BinaryExpression;
    left: Expression;
    operator: ValueOf<BinaryOperatorToText>;
    right: Expression;
}
export declare interface TaggedTemplateExpression extends BaseNode {
    type: AST_NODE_TYPES.TaggedTemplateExpression;
    quasi: TemplateLiteral;
    tag: Expression;
    typeArguments: TSTypeParameterInstantiation | undefined;
}
export declare interface TemplateElement extends BaseNode {
    type: AST_NODE_TYPES.TemplateElement;
    tail: boolean;
    value: {
        cooked: string | null;
        raw: string;
    };
}
export declare interface TemplateLiteral extends BaseNode {
    type: AST_NODE_TYPES.TemplateLiteral;
    expressions: Expression[];
    quasis: TemplateElement[];
}
export declare interface TemplateToken extends BaseToken {
    type: AST_TOKEN_TYPES.Template;
}
export declare interface ThisExpression extends BaseNode {
    type: AST_NODE_TYPES.ThisExpression;
}
export declare interface ThrowStatement extends BaseNode {
    type: AST_NODE_TYPES.ThrowStatement;
    argument: Expression;
}
export declare type Token = BooleanToken | Comment | IdentifierToken | JSXIdentifierToken | JSXTextToken | KeywordToken | NullToken | NumericToken | PrivateIdentifierToken | PunctuatorToken | RegularExpressionToken | StringToken | TemplateToken;
export declare interface TryStatement extends BaseNode {
    type: AST_NODE_TYPES.TryStatement;
    block: BlockStatement;
    finalizer: BlockStatement | null;
    handler: CatchClause | null;
}
export declare type TSAbstractAccessorProperty = TSAbstractAccessorPropertyComputedName | TSAbstractAccessorPropertyNonComputedName;
export declare interface TSAbstractAccessorPropertyComputedName extends PropertyDefinitionComputedNameBase {
    type: AST_NODE_TYPES.TSAbstractAccessorProperty;
    value: null;
}
export declare interface TSAbstractAccessorPropertyNonComputedName extends PropertyDefinitionNonComputedNameBase {
    type: AST_NODE_TYPES.TSAbstractAccessorProperty;
    value: null;
}
export declare interface TSAbstractKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSAbstractKeyword;
}
export declare type TSAbstractMethodDefinition = TSAbstractMethodDefinitionComputedName | TSAbstractMethodDefinitionNonComputedName;
export declare interface TSAbstractMethodDefinitionComputedName extends MethodDefinitionComputedNameBase {
    type: AST_NODE_TYPES.TSAbstractMethodDefinition;
}
export declare interface TSAbstractMethodDefinitionNonComputedName extends MethodDefinitionNonComputedNameBase {
    type: AST_NODE_TYPES.TSAbstractMethodDefinition;
}
export declare type TSAbstractPropertyDefinition = TSAbstractPropertyDefinitionComputedName | TSAbstractPropertyDefinitionNonComputedName;
export declare interface TSAbstractPropertyDefinitionComputedName extends PropertyDefinitionComputedNameBase {
    type: AST_NODE_TYPES.TSAbstractPropertyDefinition;
    value: null;
}
export declare interface TSAbstractPropertyDefinitionNonComputedName extends PropertyDefinitionNonComputedNameBase {
    type: AST_NODE_TYPES.TSAbstractPropertyDefinition;
    value: null;
}
export declare interface TSAnyKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSAnyKeyword;
}
export declare interface TSArrayType extends BaseNode {
    type: AST_NODE_TYPES.TSArrayType;
    elementType: TypeNode;
}
export declare interface TSAsExpression extends BaseNode {
    type: AST_NODE_TYPES.TSAsExpression;
    expression: Expression;
    typeAnnotation: TypeNode;
}
export declare interface TSAsyncKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSAsyncKeyword;
}
export declare interface TSBigIntKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSBigIntKeyword;
}
export declare interface TSBooleanKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSBooleanKeyword;
}
export declare interface TSCallSignatureDeclaration extends TSFunctionSignatureBase {
    type: AST_NODE_TYPES.TSCallSignatureDeclaration;
}
export declare interface TSClassImplements extends TSHeritageBase {
    type: AST_NODE_TYPES.TSClassImplements;
}
export declare interface TSConditionalType extends BaseNode {
    type: AST_NODE_TYPES.TSConditionalType;
    checkType: TypeNode;
    extendsType: TypeNode;
    falseType: TypeNode;
    trueType: TypeNode;
}
export declare interface TSConstructorType extends TSFunctionSignatureBase {
    type: AST_NODE_TYPES.TSConstructorType;
    abstract: boolean;
}
export declare interface TSConstructSignatureDeclaration extends TSFunctionSignatureBase {
    type: AST_NODE_TYPES.TSConstructSignatureDeclaration;
}
export declare type TSDeclareFunction = TSDeclareFunctionNoDeclare | TSDeclareFunctionWithDeclare;
declare interface TSDeclareFunctionBase extends FunctionBase {
    type: AST_NODE_TYPES.TSDeclareFunction;
    /**
     * TS1183: An implementation cannot be declared in ambient contexts.
     */
    body: undefined;
    /**
     * Whether the declaration has `declare` modifier.
     */
    declare: boolean;
    expression: false;
}
/**
 * Function declaration without the `declare` keyword:
 * ```
 * function foo(): void;
 * ```
 * This can either be an overload signature or a declaration in an ambient context
 * (e.g. `declare module`)
 */
export declare interface TSDeclareFunctionNoDeclare extends TSDeclareFunctionBase {
    declare: false;
    /**
     * - TS1221: Generators are not allowed in an ambient context.
     * - TS1222: An overload signature cannot be declared as a generator.
     */
    generator: false;
}
/**
 * Function declaration with the `declare` keyword:
 * ```
 * declare function foo(): void;
 * ```
 */
export declare interface TSDeclareFunctionWithDeclare extends TSDeclareFunctionBase {
    /**
     * TS1040: 'async' modifier cannot be used in an ambient context.
     */
    async: false;
    declare: true;
    /**
     * TS1221: Generators are not allowed in an ambient context.
     */
    generator: false;
}
export declare interface TSDeclareKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSDeclareKeyword;
}
export declare interface TSEmptyBodyFunctionExpression extends FunctionBase {
    type: AST_NODE_TYPES.TSEmptyBodyFunctionExpression;
    body: null;
    id: null;
}
export declare interface TSEnumBody extends BaseNode {
    type: AST_NODE_TYPES.TSEnumBody;
    members: TSEnumMember[];
}
export declare interface TSEnumDeclaration extends BaseNode {
    type: AST_NODE_TYPES.TSEnumDeclaration;
    /**
     * The body of the enum.
     */
    body: TSEnumBody;
    /**
     * Whether this is a `const` enum.
     * @example
     * ```ts
     * const enum Foo {}
     * ```
     */
    const: boolean;
    /**
     * Whether this is a `declare`d enum.
     * @example
     * ```ts
     * declare enum Foo {}
     * ```
     */
    declare: boolean;
    /**
     * The enum name.
     */
    id: Identifier;
    /**
     * The enum members.
     * @deprecated Use {@link body} instead.
     */
    members: TSEnumMember[];
}
export declare interface TSEnumMember extends BaseNode {
    type: AST_NODE_TYPES.TSEnumMember;
    id: Identifier | StringLiteral;
    initializer: Expression | undefined;
    /**
     * @deprecated the enum member is always non-computed.
     */
    computed: boolean;
}
export declare interface TSExportAssignment extends BaseNode {
    type: AST_NODE_TYPES.TSExportAssignment;
    expression: Expression;
}
export declare interface TSExportKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSExportKeyword;
}
export declare interface TSExternalModuleReference extends BaseNode {
    type: AST_NODE_TYPES.TSExternalModuleReference;
    expression: StringLiteral;
}
declare interface TSFunctionSignatureBase extends BaseNode {
    params: Parameter[];
    returnType: TSTypeAnnotation | undefined;
    typeParameters: TSTypeParameterDeclaration | undefined;
}
export declare interface TSFunctionType extends TSFunctionSignatureBase {
    type: AST_NODE_TYPES.TSFunctionType;
}
declare interface TSHeritageBase extends BaseNode {
    expression: Expression;
    typeArguments: TSTypeParameterInstantiation | undefined;
}
export declare type TSImportEqualsDeclaration = TSImportEqualsNamespaceDeclaration | TSImportEqualsRequireDeclaration;
declare interface TSImportEqualsDeclarationBase extends BaseNode {
    type: AST_NODE_TYPES.TSImportEqualsDeclaration;
    /**
     * The locally imported name.
     */
    id: Identifier;
    /**
     * The kind of the import. Always `'value'` unless `moduleReference` is a
     * `TSExternalModuleReference`.
     */
    importKind: ImportKind;
    /**
     * The value being aliased.
     * @example
     * ```ts
     * import F1 = A;
     * import F2 = A.B.C;
     * import F3 = require('mod');
     * ```
     */
    moduleReference: Identifier | TSExternalModuleReference | TSQualifiedName;
}
export declare interface TSImportEqualsNamespaceDeclaration extends TSImportEqualsDeclarationBase {
    /**
     * The kind of the import.
     */
    importKind: 'value';
    /**
     * The value being aliased.
     * ```
     * import F1 = A;
     * import F2 = A.B.C;
     * ```
     */
    moduleReference: Identifier | TSQualifiedName;
}
export declare interface TSImportEqualsRequireDeclaration extends TSImportEqualsDeclarationBase {
    /**
     * The kind of the import.
     */
    importKind: ImportKind;
    /**
     * The value being aliased.
     * ```
     * import F3 = require('mod');
     * ```
     */
    moduleReference: TSExternalModuleReference;
}
export declare interface TSImportType extends BaseNode {
    type: AST_NODE_TYPES.TSImportType;
    /** @deprecated Use {@link `source`} instead. */
    argument: TypeNode;
    options: ObjectExpression | null;
    qualifier: EntityName | null;
    source: StringLiteral;
    typeArguments: TSTypeParameterInstantiation | null;
}
export declare interface TSIndexedAccessType extends BaseNode {
    type: AST_NODE_TYPES.TSIndexedAccessType;
    indexType: TypeNode;
    objectType: TypeNode;
}
export declare interface TSIndexSignature extends BaseNode {
    type: AST_NODE_TYPES.TSIndexSignature;
    accessibility: Accessibility | undefined;
    parameters: Parameter[];
    readonly: boolean;
    static: boolean;
    typeAnnotation: TSTypeAnnotation | undefined;
}
export declare interface TSInferType extends BaseNode {
    type: AST_NODE_TYPES.TSInferType;
    typeParameter: TSTypeParameter;
}
export declare interface TSInstantiationExpression extends BaseNode {
    type: AST_NODE_TYPES.TSInstantiationExpression;
    expression: Expression;
    typeArguments: TSTypeParameterInstantiation;
}
export declare interface TSInterfaceBody extends BaseNode {
    type: AST_NODE_TYPES.TSInterfaceBody;
    body: TypeElement[];
}
export declare interface TSInterfaceDeclaration extends BaseNode {
    type: AST_NODE_TYPES.TSInterfaceDeclaration;
    /**
     * The body of the interface
     */
    body: TSInterfaceBody;
    /**
     * Whether the interface was `declare`d
     */
    declare: boolean;
    /**
     * The types this interface `extends`
     */
    extends: TSInterfaceHeritage[];
    /**
     * The name of this interface
     */
    id: Identifier;
    /**
     * The generic type parameters declared for the interface. Empty declaration
     * (`<>`) is different from no declaration.
     */
    typeParameters: TSTypeParameterDeclaration | undefined;
}
export declare interface TSInterfaceHeritage extends TSHeritageBase {
    type: AST_NODE_TYPES.TSInterfaceHeritage;
}
export declare interface TSIntersectionType extends BaseNode {
    type: AST_NODE_TYPES.TSIntersectionType;
    types: TypeNode[];
}
export declare interface TSIntrinsicKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSIntrinsicKeyword;
}
export declare interface TSLiteralType extends BaseNode {
    type: AST_NODE_TYPES.TSLiteralType;
    literal: Exclude<LiteralExpression, NullLiteral | RegExpLiteral> | UnaryExpressionMinus | UnaryExpressionPlus;
}
export declare interface TSMappedType extends BaseNode {
    type: AST_NODE_TYPES.TSMappedType;
    constraint: TypeNode;
    key: Identifier;
    nameType: TypeNode | null;
    optional: boolean | '+' | '-' | undefined;
    readonly: boolean | '+' | '-' | undefined;
    typeAnnotation: TypeNode | undefined;
    /** @deprecated Use {@link `constraint`} and {@link `key`} instead. */
    typeParameter: TSTypeParameter;
}
export declare type TSMethodSignature = TSMethodSignatureComputedName | TSMethodSignatureNonComputedName;
declare interface TSMethodSignatureBase extends BaseNode {
    type: AST_NODE_TYPES.TSMethodSignature;
    accessibility: Accessibility | undefined;
    computed: boolean;
    key: PropertyName;
    kind: 'get' | 'method' | 'set';
    optional: boolean;
    params: Parameter[];
    readonly: boolean;
    returnType: TSTypeAnnotation | undefined;
    static: boolean;
    typeParameters: TSTypeParameterDeclaration | undefined;
}
export declare interface TSMethodSignatureComputedName extends TSMethodSignatureBase {
    computed: true;
    key: PropertyNameComputed;
}
export declare interface TSMethodSignatureNonComputedName extends TSMethodSignatureBase {
    computed: false;
    key: PropertyNameNonComputed;
}
export declare interface TSModuleBlock extends BaseNode {
    type: AST_NODE_TYPES.TSModuleBlock;
    body: ProgramStatement[];
}
export declare type TSModuleDeclaration = TSModuleDeclarationGlobal | TSModuleDeclarationModule | TSModuleDeclarationNamespace;
declare interface TSModuleDeclarationBase extends BaseNode {
    type: AST_NODE_TYPES.TSModuleDeclaration;
    /**
     * The body of the module.
     * This can only be `undefined` for the code `declare module 'mod';`
     */
    body?: TSModuleBlock;
    /**
     * Whether the module is `declare`d
     * @example
     * ```ts
     * declare namespace F {}
     * ```
     */
    declare: boolean;
    /**
     * Whether this is a global declaration
     * @example
     * ```ts
     * declare global {}
     * ```
     *
     * @deprecated Use {@link kind} instead
     */
    global: boolean;
    /**
     * The name of the module
     * ```
     * namespace A {}
     * namespace A.B.C {}
     * module 'a' {}
     * ```
     */
    id: Identifier | Literal | TSQualifiedName;
    /**
     * The keyword used to define this module declaration
     * @example
     * ```ts
     * namespace Foo {}
     * ^^^^^^^^^
     *
     * module 'foo' {}
     * ^^^^^^
     *
     * global {}
     * ^^^^^^
     * ```
     */
    kind: TSModuleDeclarationKind;
}
export declare interface TSModuleDeclarationGlobal extends TSModuleDeclarationBase {
    body: TSModuleBlock;
    /**
     * This will always be an Identifier with name `global`
     */
    id: Identifier;
    kind: 'global';
}
export declare type TSModuleDeclarationKind = 'global' | 'module' | 'namespace';
export declare type TSModuleDeclarationModule = TSModuleDeclarationModuleWithIdentifierId | TSModuleDeclarationModuleWithStringId;
declare interface TSModuleDeclarationModuleBase extends TSModuleDeclarationBase {
    kind: 'module';
}
/**
 * The legacy module declaration, replaced with namespace declarations.
 * ```
 * module A {}
 * ```
 */
export declare interface TSModuleDeclarationModuleWithIdentifierId extends TSModuleDeclarationModuleBase {
    body: TSModuleBlock;
    id: Identifier;
    kind: 'module';
}
export declare type TSModuleDeclarationModuleWithStringId = TSModuleDeclarationModuleWithStringIdDeclared | TSModuleDeclarationModuleWithStringIdNotDeclared;
/**
 * A string module declaration that is declared:
 * ```
 * declare module 'foo' {}
 * declare module 'foo';
 * ```
 */
export declare interface TSModuleDeclarationModuleWithStringIdDeclared extends TSModuleDeclarationModuleBase {
    body?: TSModuleBlock;
    declare: true;
    id: StringLiteral;
    kind: 'module';
}
/**
 * A string module declaration that is not declared:
 * ```
 * module 'foo' {}
 * ```
 */
export declare interface TSModuleDeclarationModuleWithStringIdNotDeclared extends TSModuleDeclarationModuleBase {
    body: TSModuleBlock;
    declare: false;
    id: StringLiteral;
    kind: 'module';
}
export declare interface TSModuleDeclarationNamespace extends TSModuleDeclarationBase {
    body: TSModuleBlock;
    id: Identifier | TSQualifiedName;
    kind: 'namespace';
}
export declare interface TSNamedTupleMember extends BaseNode {
    type: AST_NODE_TYPES.TSNamedTupleMember;
    elementType: TypeNode;
    label: Identifier;
    optional: boolean;
}
/**
 * For the following declaration:
 * ```
 * export as namespace X;
 * ```
 */
export declare interface TSNamespaceExportDeclaration extends BaseNode {
    type: AST_NODE_TYPES.TSNamespaceExportDeclaration;
    /**
     * The name of the global variable that's exported as namespace
     */
    id: Identifier;
}
export declare interface TSNeverKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSNeverKeyword;
}
export declare interface TSNonNullExpression extends BaseNode {
    type: AST_NODE_TYPES.TSNonNullExpression;
    expression: Expression;
}
export declare interface TSNullKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSNullKeyword;
}
export declare interface TSNumberKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSNumberKeyword;
}
export declare interface TSObjectKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSObjectKeyword;
}
export declare interface TSOptionalType extends BaseNode {
    type: AST_NODE_TYPES.TSOptionalType;
    typeAnnotation: TypeNode;
}
export declare interface TSParameterProperty extends BaseNode {
    type: AST_NODE_TYPES.TSParameterProperty;
    accessibility: Accessibility | undefined;
    decorators: Decorator[];
    override: boolean;
    parameter: ParameterPropertyParameter;
    readonly: boolean;
    static: boolean;
}
export declare interface TSPrivateKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSPrivateKeyword;
}
export declare type TSPropertySignature = TSPropertySignatureComputedName | TSPropertySignatureNonComputedName;
declare interface TSPropertySignatureBase extends BaseNode {
    type: AST_NODE_TYPES.TSPropertySignature;
    accessibility: Accessibility | undefined;
    computed: boolean;
    key: PropertyName;
    optional: boolean;
    readonly: boolean;
    static: boolean;
    typeAnnotation: TSTypeAnnotation | undefined;
}
export declare interface TSPropertySignatureComputedName extends TSPropertySignatureBase {
    computed: true;
    key: PropertyNameComputed;
}
export declare interface TSPropertySignatureNonComputedName extends TSPropertySignatureBase {
    computed: false;
    key: PropertyNameNonComputed;
}
export declare interface TSProtectedKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSProtectedKeyword;
}
export declare interface TSPublicKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSPublicKeyword;
}
export declare interface TSQualifiedName extends BaseNode {
    type: AST_NODE_TYPES.TSQualifiedName;
    left: EntityName;
    right: Identifier;
}
export declare interface TSReadonlyKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSReadonlyKeyword;
}
export declare interface TSRestType extends BaseNode {
    type: AST_NODE_TYPES.TSRestType;
    typeAnnotation: TypeNode;
}
export declare interface TSSatisfiesExpression extends BaseNode {
    type: AST_NODE_TYPES.TSSatisfiesExpression;
    expression: Expression;
    typeAnnotation: TypeNode;
}
export declare interface TSStaticKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSStaticKeyword;
}
export declare interface TSStringKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSStringKeyword;
}
export declare interface TSSymbolKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSSymbolKeyword;
}
export declare interface TSTemplateLiteralType extends BaseNode {
    type: AST_NODE_TYPES.TSTemplateLiteralType;
    quasis: TemplateElement[];
    types: TypeNode[];
}
export declare interface TSThisType extends BaseNode {
    type: AST_NODE_TYPES.TSThisType;
}
export declare interface TSTupleType extends BaseNode {
    type: AST_NODE_TYPES.TSTupleType;
    elementTypes: TypeNode[];
}
export declare interface TSTypeAliasDeclaration extends BaseNode {
    type: AST_NODE_TYPES.TSTypeAliasDeclaration;
    /**
     * Whether the type was `declare`d.
     * @example
     * ```ts
     * declare type T = 1;
     * ```
     */
    declare: boolean;
    /**
     * The name of the type.
     */
    id: Identifier;
    /**
     * The "value" (type) of the declaration
     */
    typeAnnotation: TypeNode;
    /**
     * The generic type parameters declared for the type. Empty declaration
     * (`<>`) is different from no declaration.
     */
    typeParameters: TSTypeParameterDeclaration | undefined;
}
export declare interface TSTypeAnnotation extends BaseNode {
    type: AST_NODE_TYPES.TSTypeAnnotation;
    typeAnnotation: TypeNode;
}
export declare interface TSTypeAssertion extends BaseNode {
    type: AST_NODE_TYPES.TSTypeAssertion;
    expression: Expression;
    typeAnnotation: TypeNode;
}
export declare interface TSTypeLiteral extends BaseNode {
    type: AST_NODE_TYPES.TSTypeLiteral;
    members: TypeElement[];
}
export declare interface TSTypeOperator extends BaseNode {
    type: AST_NODE_TYPES.TSTypeOperator;
    operator: 'keyof' | 'readonly' | 'unique';
    typeAnnotation: TypeNode | undefined;
}
export declare interface TSTypeParameter extends BaseNode {
    type: AST_NODE_TYPES.TSTypeParameter;
    const: boolean;
    constraint: TypeNode | undefined;
    default: TypeNode | undefined;
    in: boolean;
    name: Identifier;
    out: boolean;
}
export declare interface TSTypeParameterDeclaration extends BaseNode {
    type: AST_NODE_TYPES.TSTypeParameterDeclaration;
    params: TSTypeParameter[];
}
export declare interface TSTypeParameterInstantiation extends BaseNode {
    type: AST_NODE_TYPES.TSTypeParameterInstantiation;
    params: TypeNode[];
}
export declare interface TSTypePredicate extends BaseNode {
    type: AST_NODE_TYPES.TSTypePredicate;
    asserts: boolean;
    parameterName: Identifier | TSThisType;
    typeAnnotation: TSTypeAnnotation | null;
}
export declare interface TSTypeQuery extends BaseNode {
    type: AST_NODE_TYPES.TSTypeQuery;
    exprName: EntityName | TSImportType;
    typeArguments: TSTypeParameterInstantiation | undefined;
}
export declare interface TSTypeReference extends BaseNode {
    type: AST_NODE_TYPES.TSTypeReference;
    typeArguments: TSTypeParameterInstantiation | undefined;
    typeName: EntityName;
}
export declare type TSUnaryExpression = AwaitExpression | LeftHandSideExpression | UnaryExpression | UpdateExpression;
export declare interface TSUndefinedKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSUndefinedKeyword;
}
export declare interface TSUnionType extends BaseNode {
    type: AST_NODE_TYPES.TSUnionType;
    types: TypeNode[];
}
export declare interface TSUnknownKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSUnknownKeyword;
}
export declare interface TSVoidKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSVoidKeyword;
}
export declare type TypeElement = TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSIndexSignature | TSMethodSignature | TSPropertySignature;
export declare type TypeNode = TSAbstractKeyword | TSAnyKeyword | TSArrayType | TSAsyncKeyword | TSBigIntKeyword | TSBooleanKeyword | TSConditionalType | TSConstructorType | TSDeclareKeyword | TSExportKeyword | TSFunctionType | TSImportType | TSIndexedAccessType | TSInferType | TSIntersectionType | TSIntrinsicKeyword | TSLiteralType | TSMappedType | TSNamedTupleMember | TSNeverKeyword | TSNullKeyword | TSNumberKeyword | TSObjectKeyword | TSOptionalType | TSPrivateKeyword | TSProtectedKeyword | TSPublicKeyword | TSQualifiedName | TSReadonlyKeyword | TSRestType | TSStaticKeyword | TSStringKeyword | TSSymbolKeyword | TSTemplateLiteralType | TSThisType | TSTupleType | TSTypeLiteral | TSTypeOperator | TSTypePredicate | TSTypeQuery | TSTypeReference | TSUndefinedKeyword | TSUnionType | TSUnknownKeyword | TSVoidKeyword;
export declare type UnaryExpression = UnaryExpressionBitwiseNot | UnaryExpressionDelete | UnaryExpressionMinus | UnaryExpressionNot | UnaryExpressionPlus | UnaryExpressionTypeof | UnaryExpressionVoid;
declare interface UnaryExpressionBase extends BaseNode {
    argument: Expression;
    operator: string;
    prefix: boolean;
}
export declare type UnaryExpressionBitwiseNot = UnaryExpressionSpecific<'~'>;
export declare type UnaryExpressionDelete = UnaryExpressionSpecific<'delete'>;
export declare type UnaryExpressionMinus = UnaryExpressionSpecific<'-'>;
export declare type UnaryExpressionNot = UnaryExpressionSpecific<'!'>;
export declare type UnaryExpressionPlus = UnaryExpressionSpecific<'+'>;
declare interface UnaryExpressionSpecific<T extends string> extends UnaryExpressionBase {
    type: AST_NODE_TYPES.UnaryExpression;
    operator: T;
}
export declare type UnaryExpressionTypeof = UnaryExpressionSpecific<'typeof'>;
export declare type UnaryExpressionVoid = UnaryExpressionSpecific<'void'>;
export declare interface UpdateExpression extends UnaryExpressionBase {
    type: AST_NODE_TYPES.UpdateExpression;
    operator: '++' | '--';
}
export declare type UsingDeclaration = UsingInForOfDeclaration | UsingInNormalContextDeclaration;
declare interface UsingDeclarationBase extends BaseNode {
    type: AST_NODE_TYPES.VariableDeclaration;
    /**
     * This value will always be `false`
     * because 'declare' modifier cannot appear on a 'using' declaration.
     */
    declare: false;
    /**
     * The keyword used to declare the variable(s)
     * @example
     * ```ts
     * using x = 1;
     * await using y = 2;
     * ```
     */
    kind: 'await using' | 'using';
}
export declare type UsingDeclarator = UsingInForOfDeclarator | UsingInNormalContextDeclarator;
export declare interface UsingInForOfDeclaration extends UsingDeclarationBase {
    /**
     * The variables declared by this declaration.
     * Always has exactly one element.
     * @example
     * ```ts
     * for (using x of y) {}
     * ```
     */
    declarations: [UsingInForOfDeclarator];
}
export declare interface UsingInForOfDeclarator extends VariableDeclaratorBase {
    definite: false;
    id: Identifier;
    init: null;
}
export declare interface UsingInNormalContextDeclaration extends UsingDeclarationBase {
    /**
     * The variables declared by this declaration.
     * Always non-empty.
     * @example
     * ```ts
     * using x = 1;
     * using y = 1, z = 2;
     * ```
     */
    declarations: UsingInNormalContextDeclarator[];
}
export declare interface UsingInNormalContextDeclarator extends VariableDeclaratorBase {
    definite: false;
    id: Identifier;
    init: Expression;
}
declare type ValueOf<T> = T[keyof T];
export declare type VariableDeclaration = LetOrConstOrVarDeclaration | UsingDeclaration;
export declare type VariableDeclarator = LetOrConstOrVarDeclarator | UsingDeclarator;
declare interface VariableDeclaratorBase extends BaseNode {
    type: AST_NODE_TYPES.VariableDeclarator;
    /**
     * Whether there's definite assignment assertion (`let x!: number`).
     * If `true`, then: `id` must be an identifier with a type annotation,
     * `init` must be `null`, and the declarator must be a `var`/`let` declarator.
     */
    definite: boolean;
    /**
     * The name(s) of the variable(s).
     */
    id: BindingName;
    /**
     * The initializer expression of the variable. Must be present for `const` unless
     * in a `declare const`.
     */
    init: Expression | null;
}
export declare interface VariableDeclaratorDefiniteAssignment extends VariableDeclaratorBase {
    definite: true;
    /**
     * The name of the variable. Must have a type annotation.
     */
    id: Identifier;
    init: null;
}
export declare interface VariableDeclaratorMaybeInit extends VariableDeclaratorBase {
    definite: false;
}
export declare interface VariableDeclaratorNoInit extends VariableDeclaratorBase {
    definite: false;
    init: null;
}
export declare interface WhileStatement extends BaseNode {
    type: AST_NODE_TYPES.WhileStatement;
    body: Statement;
    test: Expression;
}
export declare interface WithStatement extends BaseNode {
    type: AST_NODE_TYPES.WithStatement;
    body: Statement;
    object: Expression;
}
export declare interface YieldExpression extends BaseNode {
    type: AST_NODE_TYPES.YieldExpression;
    argument: Expression | null;
    delegate: boolean;
}
export {};
