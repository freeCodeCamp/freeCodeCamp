/**********************************************
 *      DO NOT MODIFY THIS FILE MANUALLY      *
 *                                            *
 *  THIS FILE HAS BEEN COPIED FROM ast-spec.  *
 * ANY CHANGES WILL BE LOST ON THE NEXT BUILD *
 *                                            *
 *   MAKE CHANGES TO ast-spec AND THEN RUN    *
 *                 yarn build                 *
 **********************************************/
import { SyntaxKind } from 'typescript';
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
    elements: (DestructuringPattern | null)[];
    typeAnnotation?: TSTypeAnnotation;
    optional?: boolean;
    decorators?: Decorator[];
}
export declare interface ArrowFunctionExpression extends BaseNode {
    type: AST_NODE_TYPES.ArrowFunctionExpression;
    generator: boolean;
    id: null;
    params: Parameter[];
    body: BlockStatement | Expression;
    async: boolean;
    expression: boolean;
    returnType?: TSTypeAnnotation;
    typeParameters?: TSTypeParameterDeclaration;
}
export declare interface AssignmentExpression extends BaseNode {
    type: AST_NODE_TYPES.AssignmentExpression;
    operator: ValueOf<AssignmentOperatorToText>;
    left: Expression;
    right: Expression;
}
export declare interface AssignmentOperatorToText {
    [SyntaxKind.EqualsToken]: '=';
    [SyntaxKind.PlusEqualsToken]: '+=';
    [SyntaxKind.MinusEqualsToken]: '-=';
    [SyntaxKind.AsteriskEqualsToken]: '*=';
    [SyntaxKind.AsteriskAsteriskEqualsToken]: '**=';
    [SyntaxKind.SlashEqualsToken]: '/=';
    [SyntaxKind.PercentEqualsToken]: '%=';
    [SyntaxKind.LessThanLessThanEqualsToken]: '<<=';
    [SyntaxKind.GreaterThanGreaterThanEqualsToken]: '>>=';
    [SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken]: '>>>=';
    [SyntaxKind.AmpersandEqualsToken]: '&=';
    [SyntaxKind.BarEqualsToken]: '|=';
    [SyntaxKind.BarBarEqualsToken]: '||=';
    [SyntaxKind.AmpersandAmpersandEqualsToken]: '&&=';
    [SyntaxKind.QuestionQuestionEqualsToken]: '??=';
    [SyntaxKind.CaretEqualsToken]: '^=';
}
export declare interface AssignmentPattern extends BaseNode {
    type: AST_NODE_TYPES.AssignmentPattern;
    left: BindingName;
    right: Expression;
    typeAnnotation?: TSTypeAnnotation;
    optional?: boolean;
    decorators?: Decorator[];
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
    /**
     * TS-prefixed nodes
     */
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
    TSEnumDeclaration = "TSEnumDeclaration",
    TSEnumMember = "TSEnumMember",
    TSExportAssignment = "TSExportAssignment",
    TSExportKeyword = "TSExportKeyword",
    TSExternalModuleReference = "TSExternalModuleReference",
    TSFunctionType = "TSFunctionType",
    TSInstantiationExpression = "TSInstantiationExpression",
    TSImportEqualsDeclaration = "TSImportEqualsDeclaration",
    TSImportType = "TSImportType",
    TSIndexedAccessType = "TSIndexedAccessType",
    TSIndexSignature = "TSIndexSignature",
    TSInferType = "TSInferType",
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
    value: bigint | null;
    bigint: string;
}
export declare interface BinaryExpression extends BaseNode {
    type: AST_NODE_TYPES.BinaryExpression;
    operator: string;
    left: Expression | PrivateIdentifier;
    right: Expression;
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
    value: boolean;
    raw: 'false' | 'true';
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
    callee: LeftHandSideExpression;
    arguments: CallExpressionArgument[];
    typeParameters?: TSTypeParameterInstantiation;
    optional: boolean;
}
export declare type CallExpressionArgument = Expression | SpreadElement;
export declare interface CatchClause extends BaseNode {
    type: AST_NODE_TYPES.CatchClause;
    param: BindingName | null;
    body: BlockStatement;
}
export declare type ChainElement = CallExpression | MemberExpression | TSNonNullExpression;
export declare interface ChainExpression extends BaseNode {
    type: AST_NODE_TYPES.ChainExpression;
    expression: ChainElement;
}
declare interface ClassBase extends BaseNode {
    /**
     * Whether the class is an abstract class.
     * ```
     * abstract class Foo {...}
     * ```
     * This is always `undefined` for `ClassExpression`.
     */
    abstract?: boolean;
    /**
     * The class body.
     */
    body: ClassBody;
    /**
     * Whether the class has been `declare`d:
     * ```
     * declare class Foo {...}
     * ```
     * This is always `undefined` for `ClassExpression`.
     */
    declare?: boolean;
    /**
     * The decorators declared for the class.
     * This is `undefined` if there are no decorators.
     * ```
     * @deco
     * class Foo {...}
     * ```
     * This is always `undefined` for `ClassExpression`.
     */
    decorators?: Decorator[];
    /**
     * The class's name.
     * - For a `ClassExpression` this may be `null` if the name is omitted.
     * - For a `ClassDeclaration` this may be `null` if and only if the parent is
     *   an `ExportDefaultDeclaration`.
     */
    id: Identifier | null;
    /**
     * The implemented interfaces for the class.
     * This is `undefined` if there are no implemented interfaces.
     */
    implements?: TSClassImplements[];
    /**
     * The super class this class extends.
     */
    superClass: LeftHandSideExpression | null;
    /**
     * The generic type parameters passed to the superClass.
     * This is `undefined` if there are no generic type parameters passed.
     */
    superTypeParameters?: TSTypeParameterInstantiation;
    /**
     * The generic type parameters declared for the class.
     * This is `undefined` if there are no generic type parameters declared.
     */
    typeParameters?: TSTypeParameterDeclaration;
}
export declare interface ClassBody extends BaseNode {
    type: AST_NODE_TYPES.ClassBody;
    body: ClassElement[];
}
export declare type ClassDeclaration = ClassDeclarationWithName | ClassDeclarationWithOptionalName;
declare interface ClassDeclarationBase extends ClassBase {
    type: AST_NODE_TYPES.ClassDeclaration;
}
export declare interface ClassDeclarationWithName extends ClassDeclarationBase {
    id: Identifier;
}
export declare interface ClassDeclarationWithOptionalName extends ClassDeclarationBase {
    id: Identifier | null;
}
export declare type ClassElement = AccessorProperty | MethodDefinition | PropertyDefinition | StaticBlock | TSAbstractAccessorProperty | TSAbstractMethodDefinition | TSAbstractPropertyDefinition | TSIndexSignature;
export declare interface ClassExpression extends ClassBase {
    type: AST_NODE_TYPES.ClassExpression;
    abstract?: undefined;
    declare?: undefined;
    decorators?: undefined;
}
declare interface ClassMethodDefinitionNonComputedNameBase extends MethodDefinitionBase {
    key: ClassPropertyNameNonComputed;
    computed: false;
}
declare interface ClassPropertyDefinitionNonComputedNameBase extends PropertyDefinitionBase {
    key: ClassPropertyNameNonComputed;
    computed: false;
}
export declare type ClassPropertyNameNonComputed = PrivateIdentifier | PropertyNameNonComputed;
export declare type Comment = BlockComment | LineComment;
export declare interface ConditionalExpression extends BaseNode {
    type: AST_NODE_TYPES.ConditionalExpression;
    test: Expression;
    consequent: Expression;
    alternate: Expression;
}
export declare interface ContinueStatement extends BaseNode {
    type: AST_NODE_TYPES.ContinueStatement;
    label: Identifier | null;
}
export declare interface DebuggerStatement extends BaseNode {
    type: AST_NODE_TYPES.DebuggerStatement;
}
export declare type DeclarationStatement = ClassDeclaration | ClassExpression | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | FunctionDeclaration | TSDeclareFunction | TSEnumDeclaration | TSImportEqualsDeclaration | TSInterfaceDeclaration | TSModuleDeclaration | TSNamespaceExportDeclaration | TSTypeAliasDeclaration;
export declare interface Decorator extends BaseNode {
    type: AST_NODE_TYPES.Decorator;
    expression: LeftHandSideExpression;
}
export declare type DefaultExportDeclarations = ClassDeclarationWithOptionalName | Expression | FunctionDeclarationWithName | FunctionDeclarationWithOptionalName | TSDeclareFunction | TSEnumDeclaration | TSInterfaceDeclaration | TSModuleDeclaration | TSTypeAliasDeclaration | VariableDeclaration;
export declare type DestructuringPattern = ArrayPattern | AssignmentPattern | Identifier | MemberExpression | ObjectPattern | RestElement;
export declare interface DoWhileStatement extends BaseNode {
    type: AST_NODE_TYPES.DoWhileStatement;
    test: Expression;
    body: Statement;
}
export declare interface EmptyStatement extends BaseNode {
    type: AST_NODE_TYPES.EmptyStatement;
}
export declare type EntityName = Identifier | ThisExpression | TSQualifiedName;
export declare interface ExportAllDeclaration extends BaseNode {
    type: AST_NODE_TYPES.ExportAllDeclaration;
    /**
     * The assertions declared for the export.
     * ```
     * export * from 'mod' assert { type: 'json' };
     * ```
     */
    assertions: ImportAttribute[];
    /**
     * The name for the exported items. `null` if no name is assigned.
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
     * The kind of the export.
     */
    exportKind: ExportKind;
}
declare type ExportKind = ExportAndImportKind;
export declare type ExportNamedDeclaration = ExportNamedDeclarationWithoutSourceWithMultiple | ExportNamedDeclarationWithoutSourceWithSingle | ExportNamedDeclarationWithSource;
declare interface ExportNamedDeclarationBase extends BaseNode {
    type: AST_NODE_TYPES.ExportNamedDeclaration;
    /**
     * The assertions declared for the export.
     * ```
     * export { foo } from 'mod' assert { type: 'json' };
     * ```
     * This will be an empty array if `source` is `null`
     */
    assertions: ImportAttribute[];
    /**
     * The exported declaration.
     * ```
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
     * ```
     * export { a, b };
     * ```
     * This will be an empty array if `declaration` is not `null`
     */
    specifiers: ExportSpecifier[];
}
export declare interface ExportNamedDeclarationWithoutSourceWithMultiple extends ExportNamedDeclarationBase {
    assertions: ImportAttribute[];
    declaration: null;
    source: null;
    specifiers: ExportSpecifier[];
}
export declare interface ExportNamedDeclarationWithoutSourceWithSingle extends ExportNamedDeclarationBase {
    assertions: ImportAttribute[];
    declaration: NamedExportDeclarations;
    source: null;
    specifiers: ExportSpecifier[];
}
export declare interface ExportNamedDeclarationWithSource extends ExportNamedDeclarationBase {
    assertions: ImportAttribute[];
    declaration: null;
    source: StringLiteral;
    specifiers: ExportSpecifier[];
}
export declare interface ExportSpecifier extends BaseNode {
    type: AST_NODE_TYPES.ExportSpecifier;
    local: Identifier;
    exported: Identifier;
    exportKind: ExportKind;
}
export declare type Expression = ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AwaitExpression | BinaryExpression | CallExpression | ChainExpression | ClassExpression | ConditionalExpression | FunctionExpression | Identifier | ImportExpression | JSXElement | JSXFragment | LiteralExpression | LogicalExpression | MemberExpression | MetaProperty | NewExpression | ObjectExpression | ObjectPattern | SequenceExpression | Super | TaggedTemplateExpression | TemplateLiteral | ThisExpression | TSAsExpression | TSInstantiationExpression | TSNonNullExpression | TSSatisfiesExpression | TSTypeAssertion | UnaryExpression | UpdateExpression | YieldExpression;
export declare interface ExpressionStatement extends BaseNode {
    type: AST_NODE_TYPES.ExpressionStatement;
    expression: Expression;
    directive?: string;
}
export declare type ForInitialiser = Expression | VariableDeclaration;
export declare interface ForInStatement extends BaseNode {
    type: AST_NODE_TYPES.ForInStatement;
    left: ForInitialiser;
    right: Expression;
    body: Statement;
}
export declare interface ForOfStatement extends BaseNode {
    type: AST_NODE_TYPES.ForOfStatement;
    left: ForInitialiser;
    right: Expression;
    body: Statement;
    await: boolean;
}
export declare interface ForStatement extends BaseNode {
    type: AST_NODE_TYPES.ForStatement;
    init: Expression | ForInitialiser | null;
    test: Expression | null;
    update: Expression | null;
    body: Statement;
}
declare interface FunctionBase extends BaseNode {
    /**
     * Whether the function is async:
     * ```
     * async function foo(...) {...}
     * const x = async function (...) {...}
     * const x = async (...) => {...}
     * ```
     */
    async: boolean;
    /**
     * The body of the function.
     * - For an `ArrowFunctionExpression` this may be an `Expression` or `BlockStatement`.
     * - For a `FunctionDeclaration` or `FunctionExpression` this is always a `BlockStatement.
     * - For a `TSDeclareFunction` this is always `undefined`.
     * - For a `TSEmptyBodyFunctionExpression` this is always `null`.
     */
    body?: BlockStatement | Expression | null;
    /**
     * This is only `true` if and only if the node is a `TSDeclareFunction` and it has `declare`:
     * ```
     * declare function foo(...) {...}
     * ```
     */
    declare?: boolean;
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
     * function *foo(...) {...}
     * const x = function *(...) {...}
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
     * This is `undefined` if there is no return type declared.
     */
    returnType?: TSTypeAnnotation;
    /**
     * The generic type parameter declaration for the function.
     * This is `undefined` if there are no generic type parameters declared.
     */
    typeParameters?: TSTypeParameterDeclaration;
}
export declare type FunctionDeclaration = FunctionDeclarationWithName | FunctionDeclarationWithOptionalName;
declare interface FunctionDeclarationBase extends FunctionBase {
    type: AST_NODE_TYPES.FunctionDeclaration;
    body: BlockStatement;
    declare?: false;
    expression: false;
}
export declare interface FunctionDeclarationWithName extends FunctionDeclarationBase {
    id: Identifier;
}
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
    name: string;
    typeAnnotation?: TSTypeAnnotation;
    optional?: boolean;
    decorators?: Decorator[];
}
export declare interface IdentifierToken extends BaseToken {
    type: AST_TOKEN_TYPES.Identifier;
}
export declare interface IfStatement extends BaseNode {
    type: AST_NODE_TYPES.IfStatement;
    test: Expression;
    consequent: Statement;
    alternate: Statement | null;
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
     * ```
     * import * from 'mod' assert { type: 'json' };
     * ```
     */
    assertions: ImportAttribute[];
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
    source: Expression;
    attributes: Expression | null;
}
declare type ImportKind = ExportAndImportKind;
export declare interface ImportNamespaceSpecifier extends BaseNode {
    type: AST_NODE_TYPES.ImportNamespaceSpecifier;
    local: Identifier;
}
export declare interface ImportSpecifier extends BaseNode {
    type: AST_NODE_TYPES.ImportSpecifier;
    local: Identifier;
    imported: Identifier;
    importKind: ImportKind;
}
export declare type IterationStatement = DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | WhileStatement;
export declare interface JSXAttribute extends BaseNode {
    type: AST_NODE_TYPES.JSXAttribute;
    name: JSXIdentifier | JSXNamespacedName;
    value: JSXExpression | Literal | null;
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
    openingElement: JSXOpeningElement;
    closingElement: JSXClosingElement | null;
    children: JSXChild[];
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
    openingFragment: JSXOpeningFragment;
    closingFragment: JSXClosingFragment;
    children: JSXChild[];
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
    namespace: JSXIdentifier;
    name: JSXIdentifier;
}
export declare interface JSXOpeningElement extends BaseNode {
    type: AST_NODE_TYPES.JSXOpeningElement;
    typeParameters?: TSTypeParameterInstantiation;
    selfClosing: boolean;
    name: JSXTagNameExpression;
    attributes: (JSXAttribute | JSXSpreadAttribute)[];
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
    value: string;
    raw: string;
}
export declare interface JSXTextToken extends BaseToken {
    type: AST_TOKEN_TYPES.JSXText;
}
export declare interface KeywordToken extends BaseToken {
    type: AST_TOKEN_TYPES.Keyword;
}
export declare interface LabeledStatement extends BaseNode {
    type: AST_NODE_TYPES.LabeledStatement;
    label: Identifier;
    body: Statement;
}
export declare type LeftHandSideExpression = ArrayExpression | ArrayPattern | ArrowFunctionExpression | CallExpression | ClassExpression | FunctionExpression | Identifier | JSXElement | JSXFragment | LiteralExpression | MemberExpression | MetaProperty | ObjectExpression | ObjectPattern | SequenceExpression | Super | TaggedTemplateExpression | ThisExpression | TSAsExpression | TSNonNullExpression | TSTypeAssertion;
export declare interface LineComment extends BaseToken {
    type: AST_TOKEN_TYPES.Line;
}
export declare type Literal = BigIntLiteral | BooleanLiteral | NullLiteral | NumberLiteral | RegExpLiteral | StringLiteral;
declare interface LiteralBase extends BaseNode {
    type: AST_NODE_TYPES.Literal;
    raw: string;
    value: RegExp | bigint | boolean | number | string | null;
}
export declare type LiteralExpression = Literal | TemplateLiteral;
export declare interface LogicalExpression extends BaseNode {
    type: AST_NODE_TYPES.LogicalExpression;
    operator: '??' | '&&' | '||';
    left: Expression;
    right: Expression;
}
export declare type MemberExpression = MemberExpressionComputedName | MemberExpressionNonComputedName;
declare interface MemberExpressionBase extends BaseNode {
    object: Expression;
    property: Expression | Identifier | PrivateIdentifier;
    computed: boolean;
    optional: boolean;
}
export declare interface MemberExpressionComputedName extends MemberExpressionBase {
    type: AST_NODE_TYPES.MemberExpression;
    property: Expression;
    computed: true;
}
export declare interface MemberExpressionNonComputedName extends MemberExpressionBase {
    type: AST_NODE_TYPES.MemberExpression;
    property: Identifier | PrivateIdentifier;
    computed: false;
}
export declare interface MetaProperty extends BaseNode {
    type: AST_NODE_TYPES.MetaProperty;
    meta: Identifier;
    property: Identifier;
}
export declare type MethodDefinition = MethodDefinitionComputedName | MethodDefinitionNonComputedName;
/** this should not be directly used - instead use MethodDefinitionComputedNameBase or MethodDefinitionNonComputedNameBase */
declare interface MethodDefinitionBase extends BaseNode {
    key: PropertyName;
    value: FunctionExpression | TSEmptyBodyFunctionExpression;
    computed: boolean;
    static: boolean;
    kind: 'constructor' | 'get' | 'method' | 'set';
    optional?: boolean;
    decorators?: Decorator[];
    accessibility?: Accessibility;
    typeParameters?: TSTypeParameterDeclaration;
    override?: boolean;
}
export declare interface MethodDefinitionComputedName extends MethodDefinitionComputedNameBase {
    type: AST_NODE_TYPES.MethodDefinition;
}
declare interface MethodDefinitionComputedNameBase extends MethodDefinitionBase {
    key: PropertyNameComputed;
    computed: true;
}
export declare interface MethodDefinitionNonComputedName extends ClassMethodDefinitionNonComputedNameBase {
    type: AST_NODE_TYPES.MethodDefinition;
}
declare interface MethodDefinitionNonComputedNameBase extends MethodDefinitionBase {
    key: PropertyNameNonComputed;
    computed: false;
}
export declare type Modifier = TSAbstractKeyword | TSAsyncKeyword | TSPrivateKeyword | TSProtectedKeyword | TSPublicKeyword | TSReadonlyKeyword | TSStaticKeyword;
declare type ModuleBody_TODOFixThis = TSModuleBlock | TSModuleDeclaration;
export declare type NamedExportDeclarations = ClassDeclarationWithName | ClassDeclarationWithOptionalName | FunctionDeclarationWithName | FunctionDeclarationWithOptionalName | TSDeclareFunction | TSEnumDeclaration | TSInterfaceDeclaration | TSModuleDeclaration | TSTypeAliasDeclaration | VariableDeclaration;
export declare interface NewExpression extends BaseNode {
    type: AST_NODE_TYPES.NewExpression;
    callee: LeftHandSideExpression;
    arguments: CallExpressionArgument[];
    typeParameters?: TSTypeParameterInstantiation;
}
export declare type Node = AccessorProperty | ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BlockStatement | BreakStatement | CallExpression | CatchClause | ChainExpression | ClassBody | ClassDeclaration | ClassExpression | ConditionalExpression | ContinueStatement | DebuggerStatement | Decorator | DoWhileStatement | EmptyStatement | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ExportSpecifier | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | FunctionDeclaration | FunctionExpression | Identifier | IfStatement | ImportAttribute | ImportDeclaration | ImportDefaultSpecifier | ImportExpression | ImportNamespaceSpecifier | ImportSpecifier | JSXAttribute | JSXClosingElement | JSXClosingFragment | JSXElement | JSXEmptyExpression | JSXExpressionContainer | JSXFragment | JSXIdentifier | JSXMemberExpression | JSXNamespacedName | JSXOpeningElement | JSXOpeningFragment | JSXSpreadAttribute | JSXSpreadChild | JSXText | LabeledStatement | Literal | LogicalExpression | MemberExpression | MetaProperty | MethodDefinition | NewExpression | ObjectExpression | ObjectPattern | PrivateIdentifier | Program | Property | PropertyDefinition | RestElement | ReturnStatement | SequenceExpression | SpreadElement | StaticBlock | Super | SwitchCase | SwitchStatement | TaggedTemplateExpression | TemplateElement | TemplateLiteral | ThisExpression | ThrowStatement | TryStatement | TSAbstractAccessorProperty | TSAbstractKeyword | TSAbstractMethodDefinition | TSAbstractPropertyDefinition | TSAnyKeyword | TSArrayType | TSAsExpression | TSAsyncKeyword | TSBigIntKeyword | TSBooleanKeyword | TSCallSignatureDeclaration | TSClassImplements | TSConditionalType | TSConstructorType | TSConstructSignatureDeclaration | TSDeclareFunction | TSDeclareKeyword | TSEmptyBodyFunctionExpression | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSExportKeyword | TSExternalModuleReference | TSFunctionType | TSImportEqualsDeclaration | TSImportType | TSIndexedAccessType | TSIndexSignature | TSInferType | TSInstantiationExpression | TSInterfaceBody | TSInterfaceDeclaration | TSInterfaceHeritage | TSIntersectionType | TSIntrinsicKeyword | TSLiteralType | TSMappedType | TSMethodSignature | TSModuleBlock | TSModuleDeclaration | TSNamedTupleMember | TSNamespaceExportDeclaration | TSNeverKeyword | TSNonNullExpression | TSNullKeyword | TSNumberKeyword | TSObjectKeyword | TSOptionalType | TSParameterProperty | TSPrivateKeyword | TSPropertySignature | TSProtectedKeyword | TSPublicKeyword | TSQualifiedName | TSReadonlyKeyword | TSRestType | TSSatisfiesExpression | TSStaticKeyword | TSStringKeyword | TSSymbolKeyword | TSTemplateLiteralType | TSThisType | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeLiteral | TSTypeOperator | TSTypeParameter | TSTypeParameterDeclaration | TSTypeParameterInstantiation | TSTypePredicate | TSTypeQuery | TSTypeReference | TSUndefinedKeyword | TSUnionType | TSUnknownKeyword | TSVoidKeyword | UnaryExpression | UpdateExpression | VariableDeclaration | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
declare interface NodeOrTokenData {
    /**
     * The source location information of the node.
     *
     * The loc property is defined as nullable by ESTree, but ESLint requires this property.
     *
     * @see {SourceLocation}
     */
    loc: SourceLocation;
    /**
     * @see {Range}
     */
    range: Range;
    type: string;
}
export declare interface NullLiteral extends LiteralBase {
    value: null;
    raw: 'null';
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
    properties: (Property | RestElement)[];
    typeAnnotation?: TSTypeAnnotation;
    optional?: boolean;
    decorators?: Decorator[];
}
export declare type OptionalRangeAndLoc<T> = Pick<T, Exclude<keyof T, 'loc' | 'range'>> & {
    range?: Range;
    loc?: SourceLocation;
};
export declare type Parameter = ArrayPattern | AssignmentPattern | Identifier | ObjectPattern | RestElement | TSParameterProperty;
export declare interface Position {
    /**
     * Line number (1-indexed)
     */
    line: number;
    /**
     * Column number on the line (0-indexed)
     */
    column: number;
}
export declare type PrimaryExpression = ArrayExpression | ArrayPattern | ClassExpression | FunctionExpression | Identifier | JSXElement | JSXFragment | JSXOpeningElement | LiteralExpression | MetaProperty | ObjectExpression | ObjectPattern | Super | TemplateLiteral | ThisExpression | TSNullKeyword;
export declare interface PrivateIdentifier extends BaseNode {
    type: AST_NODE_TYPES.PrivateIdentifier;
    name: string;
}
export declare interface Program extends BaseNode {
    type: AST_NODE_TYPES.Program;
    body: ProgramStatement[];
    sourceType: 'module' | 'script';
    comments?: Comment[];
    tokens?: Token[];
}
export declare type ProgramStatement = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration | Statement | TSImportEqualsDeclaration | TSNamespaceExportDeclaration;
export declare type Property = PropertyComputedName | PropertyNonComputedName;
declare interface PropertyBase extends BaseNode {
    type: AST_NODE_TYPES.Property;
    key: PropertyName;
    value: AssignmentPattern | BindingName | Expression | TSEmptyBodyFunctionExpression;
    computed: boolean;
    method: boolean;
    shorthand: boolean;
    optional?: boolean;
    kind: 'get' | 'init' | 'set';
}
export declare interface PropertyComputedName extends PropertyBase {
    key: PropertyNameComputed;
    computed: true;
}
export declare type PropertyDefinition = PropertyDefinitionComputedName | PropertyDefinitionNonComputedName;
declare interface PropertyDefinitionBase extends BaseNode {
    key: PropertyName;
    value: Expression | null;
    computed: boolean;
    static: boolean;
    declare: boolean;
    readonly?: boolean;
    decorators?: Decorator[];
    accessibility?: Accessibility;
    optional?: boolean;
    definite?: boolean;
    typeAnnotation?: TSTypeAnnotation;
    override?: boolean;
}
export declare interface PropertyDefinitionComputedName extends PropertyDefinitionComputedNameBase {
    type: AST_NODE_TYPES.PropertyDefinition;
}
declare interface PropertyDefinitionComputedNameBase extends PropertyDefinitionBase {
    key: PropertyNameComputed;
    computed: true;
}
export declare interface PropertyDefinitionNonComputedName extends ClassPropertyDefinitionNonComputedNameBase {
    type: AST_NODE_TYPES.PropertyDefinition;
}
declare interface PropertyDefinitionNonComputedNameBase extends PropertyDefinitionBase {
    key: PropertyNameNonComputed;
    computed: false;
}
export declare type PropertyName = ClassPropertyNameNonComputed | PropertyNameComputed | PropertyNameNonComputed;
export declare type PropertyNameComputed = Expression;
export declare type PropertyNameNonComputed = Identifier | NumberLiteral | StringLiteral;
export declare interface PropertyNonComputedName extends PropertyBase {
    key: PropertyNameNonComputed;
    computed: false;
}
export declare interface PunctuatorToken extends BaseToken {
    type: AST_TOKEN_TYPES.Punctuator;
    value: ValueOf<PunctuatorTokenToText>;
}
export declare interface PunctuatorTokenToText extends AssignmentOperatorToText {
    [SyntaxKind.OpenBraceToken]: '{';
    [SyntaxKind.CloseBraceToken]: '}';
    [SyntaxKind.OpenParenToken]: '(';
    [SyntaxKind.CloseParenToken]: ')';
    [SyntaxKind.OpenBracketToken]: '[';
    [SyntaxKind.CloseBracketToken]: ']';
    [SyntaxKind.DotToken]: '.';
    [SyntaxKind.DotDotDotToken]: '...';
    [SyntaxKind.SemicolonToken]: ';';
    [SyntaxKind.CommaToken]: ',';
    [SyntaxKind.QuestionDotToken]: '?.';
    [SyntaxKind.LessThanToken]: '<';
    [SyntaxKind.LessThanSlashToken]: '</';
    [SyntaxKind.GreaterThanToken]: '>';
    [SyntaxKind.LessThanEqualsToken]: '<=';
    [SyntaxKind.GreaterThanEqualsToken]: '>=';
    [SyntaxKind.EqualsEqualsToken]: '==';
    [SyntaxKind.ExclamationEqualsToken]: '!=';
    [SyntaxKind.EqualsEqualsEqualsToken]: '===';
    [SyntaxKind.ExclamationEqualsEqualsToken]: '!==';
    [SyntaxKind.EqualsGreaterThanToken]: '=>';
    [SyntaxKind.PlusToken]: '+';
    [SyntaxKind.MinusToken]: '-';
    [SyntaxKind.AsteriskToken]: '*';
    [SyntaxKind.AsteriskAsteriskToken]: '**';
    [SyntaxKind.SlashToken]: '/';
    [SyntaxKind.PercentToken]: '%';
    [SyntaxKind.PlusPlusToken]: '++';
    [SyntaxKind.MinusMinusToken]: '--';
    [SyntaxKind.LessThanLessThanToken]: '<<';
    [SyntaxKind.GreaterThanGreaterThanToken]: '>>';
    [SyntaxKind.GreaterThanGreaterThanGreaterThanToken]: '>>>';
    [SyntaxKind.AmpersandToken]: '&';
    [SyntaxKind.BarToken]: '|';
    [SyntaxKind.CaretToken]: '^';
    [SyntaxKind.ExclamationToken]: '!';
    [SyntaxKind.TildeToken]: '~';
    [SyntaxKind.AmpersandAmpersandToken]: '&&';
    [SyntaxKind.BarBarToken]: '||';
    [SyntaxKind.QuestionToken]: '?';
    [SyntaxKind.ColonToken]: ':';
    [SyntaxKind.AtToken]: '@';
    [SyntaxKind.QuestionQuestionToken]: '??';
    [SyntaxKind.BacktickToken]: '`';
    [SyntaxKind.HashToken]: '#';
}
/**
 * An array of two numbers.
 * Both numbers are a 0-based index which is the position in the array of source code characters.
 * The first is the start position of the node, the second is the end position of the node.
 */
export declare type Range = [
    number,
    number
];
export declare interface RegExpLiteral extends LiteralBase {
    value: RegExp | null;
    regex: {
        pattern: string;
        flags: string;
    };
}
export declare interface RegularExpressionToken extends BaseToken {
    type: AST_TOKEN_TYPES.RegularExpression;
    regex: {
        pattern: string;
        flags: string;
    };
}
export declare interface RestElement extends BaseNode {
    type: AST_NODE_TYPES.RestElement;
    argument: DestructuringPattern;
    typeAnnotation?: TSTypeAnnotation;
    optional?: boolean;
    value?: AssignmentPattern;
    decorators?: Decorator[];
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
     * The position of the first character of the parsed source region
     */
    start: Position;
    /**
     * The position of the first character after the parsed source region
     */
    end: Position;
}
export declare interface SpreadElement extends BaseNode {
    type: AST_NODE_TYPES.SpreadElement;
    argument: Expression;
}
export declare type Statement = BlockStatement | BreakStatement | ClassDeclarationWithName | ContinueStatement | DebuggerStatement | DoWhileStatement | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | FunctionDeclarationWithName | IfStatement | ImportDeclaration | LabeledStatement | ReturnStatement | SwitchStatement | ThrowStatement | TryStatement | TSDeclareFunction | TSEnumDeclaration | TSExportAssignment | TSImportEqualsDeclaration | TSInterfaceDeclaration | TSModuleDeclaration | TSNamespaceExportDeclaration | TSTypeAliasDeclaration | VariableDeclaration | WhileStatement | WithStatement;
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
    test: Expression | null;
    consequent: Statement[];
}
export declare interface SwitchStatement extends BaseNode {
    type: AST_NODE_TYPES.SwitchStatement;
    discriminant: Expression;
    cases: SwitchCase[];
}
export declare interface TaggedTemplateExpression extends BaseNode {
    type: AST_NODE_TYPES.TaggedTemplateExpression;
    typeParameters?: TSTypeParameterInstantiation;
    tag: LeftHandSideExpression;
    quasi: TemplateLiteral;
}
export declare interface TemplateElement extends BaseNode {
    type: AST_NODE_TYPES.TemplateElement;
    value: {
        raw: string;
        cooked: string;
    };
    tail: boolean;
}
export declare interface TemplateLiteral extends BaseNode {
    type: AST_NODE_TYPES.TemplateLiteral;
    quasis: TemplateElement[];
    expressions: Expression[];
}
export declare interface TemplateToken extends BaseToken {
    type: AST_TOKEN_TYPES.Template;
}
export declare interface ThisExpression extends BaseNode {
    type: AST_NODE_TYPES.ThisExpression;
}
export declare interface ThrowStatement extends BaseNode {
    type: AST_NODE_TYPES.ThrowStatement;
    argument: Statement | TSAsExpression | null;
}
export declare type Token = BooleanToken | Comment | IdentifierToken | JSXIdentifierToken | JSXTextToken | KeywordToken | NullToken | NumericToken | PunctuatorToken | RegularExpressionToken | StringToken | TemplateToken;
export declare interface TryStatement extends BaseNode {
    type: AST_NODE_TYPES.TryStatement;
    block: BlockStatement;
    handler: CatchClause | null;
    finalizer: BlockStatement | null;
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
    trueType: TypeNode;
    falseType: TypeNode;
}
export declare interface TSConstructorType extends TSFunctionSignatureBase {
    type: AST_NODE_TYPES.TSConstructorType;
    abstract: boolean;
}
export declare interface TSConstructSignatureDeclaration extends TSFunctionSignatureBase {
    type: AST_NODE_TYPES.TSConstructSignatureDeclaration;
}
export declare interface TSDeclareFunction extends FunctionBase {
    type: AST_NODE_TYPES.TSDeclareFunction;
    body?: BlockStatement;
    declare?: boolean;
    expression: false;
}
export declare interface TSDeclareKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSDeclareKeyword;
}
export declare interface TSEmptyBodyFunctionExpression extends FunctionBase {
    type: AST_NODE_TYPES.TSEmptyBodyFunctionExpression;
    body: null;
    id: null;
}
export declare interface TSEnumDeclaration extends BaseNode {
    type: AST_NODE_TYPES.TSEnumDeclaration;
    /**
     * Whether this is a `const` enum.
     * ```
     * const enum Foo {...}
     * ```
     */
    const?: boolean;
    /**
     * Whether this is a `declare`d enum.
     * ```
     * declare enum Foo {...}
     * ```
     */
    declare?: boolean;
    /**
     * The enum name.
     */
    id: Identifier;
    /**
     * The enum members.
     */
    members: TSEnumMember[];
    modifiers?: Modifier[];
}
export declare type TSEnumMember = TSEnumMemberComputedName | TSEnumMemberNonComputedName;
declare interface TSEnumMemberBase extends BaseNode {
    type: AST_NODE_TYPES.TSEnumMember;
    id: PropertyNameComputed | PropertyNameNonComputed;
    initializer?: Expression;
    computed?: boolean;
}
/**
 * this should only really happen in semantically invalid code (errors 1164 and 2452)
 *
 * VALID:
 * enum Foo { ['a'] }
 *
 * INVALID:
 * const x = 'a';
 * enum Foo { [x] }
 * enum Bar { ['a' + 'b'] }
 */
export declare interface TSEnumMemberComputedName extends TSEnumMemberBase {
    id: PropertyNameComputed;
    computed: true;
}
export declare interface TSEnumMemberNonComputedName extends TSEnumMemberBase {
    id: PropertyNameNonComputed;
    computed?: false;
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
    expression: Expression;
}
declare interface TSFunctionSignatureBase extends BaseNode {
    params: Parameter[];
    returnType?: TSTypeAnnotation;
    typeParameters?: TSTypeParameterDeclaration;
}
export declare interface TSFunctionType extends TSFunctionSignatureBase {
    type: AST_NODE_TYPES.TSFunctionType;
}
declare interface TSHeritageBase extends BaseNode {
    expression: Expression;
    typeParameters?: TSTypeParameterInstantiation;
}
export declare interface TSImportEqualsDeclaration extends BaseNode {
    type: AST_NODE_TYPES.TSImportEqualsDeclaration;
    /**
     * The locally imported name
     */
    id: Identifier;
    /**
     * The value being aliased.
     * ```
     * import F1 = A;
     * import F2 = A.B.C;
     * import F3 = require('mod');
     * ```
     */
    moduleReference: EntityName | TSExternalModuleReference;
    importKind: ImportKind;
    /**
     * Whether this is immediately exported
     * ```
     * export import F = A;
     * ```
     */
    isExport: boolean;
}
export declare interface TSImportType extends BaseNode {
    type: AST_NODE_TYPES.TSImportType;
    isTypeOf: boolean;
    parameter: TypeNode;
    qualifier: EntityName | null;
    typeParameters: TSTypeParameterInstantiation | null;
}
export declare interface TSIndexedAccessType extends BaseNode {
    type: AST_NODE_TYPES.TSIndexedAccessType;
    objectType: TypeNode;
    indexType: TypeNode;
}
export declare interface TSIndexSignature extends BaseNode {
    type: AST_NODE_TYPES.TSIndexSignature;
    parameters: Parameter[];
    typeAnnotation?: TSTypeAnnotation;
    readonly?: boolean;
    accessibility?: Accessibility;
    export?: boolean;
    static?: boolean;
}
export declare interface TSInferType extends BaseNode {
    type: AST_NODE_TYPES.TSInferType;
    typeParameter: TSTypeParameter;
}
export declare interface TSInstantiationExpression extends BaseNode {
    type: AST_NODE_TYPES.TSInstantiationExpression;
    expression: Expression;
    typeParameters: TSTypeParameterInstantiation;
}
export declare interface TSInterfaceBody extends BaseNode {
    type: AST_NODE_TYPES.TSInterfaceBody;
    body: TypeElement[];
}
export declare interface TSInterfaceDeclaration extends BaseNode {
    type: AST_NODE_TYPES.TSInterfaceDeclaration;
    abstract?: boolean;
    /**
     * The body of the interface
     */
    body: TSInterfaceBody;
    /**
     * Whether the interface was `declare`d, `undefined` otherwise
     */
    declare?: boolean;
    /**
     * The types this interface `extends`
     */
    extends?: TSInterfaceHeritage[];
    /**
     * The name of this interface
     */
    id: Identifier;
    implements?: TSInterfaceHeritage[];
    /**
     * The generic type parameters declared for the interface.
     * This is `undefined` if there are no generic type parameters declared.
     */
    typeParameters?: TSTypeParameterDeclaration;
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
    literal: LiteralExpression | UnaryExpression | UpdateExpression;
}
export declare interface TSMappedType extends BaseNode {
    type: AST_NODE_TYPES.TSMappedType;
    typeParameter: TSTypeParameter;
    readonly?: boolean | '-' | '+';
    optional?: boolean | '-' | '+';
    typeAnnotation?: TypeNode;
    nameType: TypeNode | null;
}
export declare type TSMethodSignature = TSMethodSignatureComputedName | TSMethodSignatureNonComputedName;
declare interface TSMethodSignatureBase extends BaseNode {
    type: AST_NODE_TYPES.TSMethodSignature;
    key: PropertyName;
    computed: boolean;
    params: Parameter[];
    optional?: boolean;
    returnType?: TSTypeAnnotation;
    readonly?: boolean;
    typeParameters?: TSTypeParameterDeclaration;
    accessibility?: Accessibility;
    export?: boolean;
    static?: boolean;
    kind: 'get' | 'method' | 'set';
}
export declare interface TSMethodSignatureComputedName extends TSMethodSignatureBase {
    key: PropertyNameComputed;
    computed: true;
}
export declare interface TSMethodSignatureNonComputedName extends TSMethodSignatureBase {
    key: PropertyNameNonComputed;
    computed: false;
}
export declare interface TSModuleBlock extends BaseNode {
    type: AST_NODE_TYPES.TSModuleBlock;
    body: ProgramStatement[];
}
export declare type TSModuleDeclaration = TSModuleDeclarationGlobal | TSModuleDeclarationModule | TSModuleDeclarationNamespace;
declare interface TSModuleDeclarationBase extends BaseNode {
    type: AST_NODE_TYPES.TSModuleDeclaration;
    /**
     * The name of the module
     * ```
     * namespace A {}
     * namespace A.B.C {}
     * module 'a' {}
     * ```
     */
    id: Identifier | StringLiteral;
    /**
     * The body of the module.
     * This can only be `undefined` for the code `declare module 'mod';`
     * This will be a `TSModuleDeclaration` if the name is "nested" (`Foo.Bar`).
     */
    body?: ModuleBody_TODOFixThis;
    /**
     * Whether this is a global declaration
     * ```
     * declare global {}
     * ```
     */
    global?: boolean;
    /**
     * Whether the module is `declare`d
     * ```
     * declare namespace F {}
     * ```
     */
    declare?: boolean;
    modifiers?: Modifier[];
    /**
     * The keyword used to define this module declaration
     * ```
     * namespace Foo {}
     * ^^^^^^^^^
     *
     * module 'foo' {}
     * ^^^^^^
     *
     * declare global {}
     *         ^^^^^^
     * ```
     */
    kind: TSModuleDeclarationKind;
}
export declare interface TSModuleDeclarationGlobal extends TSModuleDeclarationBase {
    kind: 'global';
    body: TSModuleBlock;
    id: Identifier;
    global: true;
}
export declare type TSModuleDeclarationKind = 'global' | 'module' | 'namespace';
export declare type TSModuleDeclarationModule = TSModuleDeclarationModuleWithIdentifierId | TSModuleDeclarationModuleWithStringId;
declare interface TSModuleDeclarationModuleBase extends TSModuleDeclarationBase {
    kind: 'module';
    global?: undefined;
}
export declare interface TSModuleDeclarationModuleWithIdentifierId extends TSModuleDeclarationModuleBase {
    kind: 'module';
    id: Identifier;
    body: ModuleBody_TODOFixThis;
}
export declare type TSModuleDeclarationModuleWithStringId = TSModuleDeclarationModuleWithStringIdDeclared | TSModuleDeclarationModuleWithStringIdNotDeclared;
export declare interface TSModuleDeclarationModuleWithStringIdDeclared extends TSModuleDeclarationModuleBase {
    kind: 'module';
    id: StringLiteral;
    declare: true;
    body?: TSModuleBlock;
}
export declare interface TSModuleDeclarationModuleWithStringIdNotDeclared extends TSModuleDeclarationModuleBase {
    kind: 'module';
    id: StringLiteral;
    declare: false;
    body: TSModuleBlock;
}
export declare interface TSModuleDeclarationNamespace extends TSModuleDeclarationBase {
    kind: 'namespace';
    id: Identifier;
    body: ModuleBody_TODOFixThis;
    global?: undefined;
}
export declare interface TSNamedTupleMember extends BaseNode {
    type: AST_NODE_TYPES.TSNamedTupleMember;
    elementType: TypeNode;
    label: Identifier;
    optional: boolean;
}
export declare interface TSNamespaceExportDeclaration extends BaseNode {
    type: AST_NODE_TYPES.TSNamespaceExportDeclaration;
    /**
     * The name the global variable being exported to
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
    accessibility?: Accessibility;
    readonly?: boolean;
    static?: boolean;
    export?: boolean;
    override?: boolean;
    parameter: AssignmentPattern | BindingName | RestElement;
    decorators?: Decorator[];
}
export declare interface TSPrivateKeyword extends BaseNode {
    type: AST_NODE_TYPES.TSPrivateKeyword;
}
export declare type TSPropertySignature = TSPropertySignatureComputedName | TSPropertySignatureNonComputedName;
declare interface TSPropertySignatureBase extends BaseNode {
    type: AST_NODE_TYPES.TSPropertySignature;
    key: PropertyName;
    optional?: boolean;
    computed: boolean;
    typeAnnotation?: TSTypeAnnotation;
    initializer?: Expression;
    readonly?: boolean;
    static?: boolean;
    export?: boolean;
    accessibility?: Accessibility;
}
export declare interface TSPropertySignatureComputedName extends TSPropertySignatureBase {
    key: PropertyNameComputed;
    computed: true;
}
export declare interface TSPropertySignatureNonComputedName extends TSPropertySignatureBase {
    key: PropertyNameNonComputed;
    computed: false;
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
     * ```
     * declare type T = 1;
     * ```
     */
    declare?: boolean;
    /**
     * The name of the type.
     */
    id: Identifier;
    /**
     * The "value" (type) of the declaration
     */
    typeAnnotation: TypeNode;
    /**
     * The generic type parameters declared for the type.
     * This is `undefined` if there are no generic type parameters declared.
     */
    typeParameters?: TSTypeParameterDeclaration;
}
export declare interface TSTypeAnnotation extends BaseNode {
    type: AST_NODE_TYPES.TSTypeAnnotation;
    typeAnnotation: TypeNode;
}
export declare interface TSTypeAssertion extends BaseNode {
    type: AST_NODE_TYPES.TSTypeAssertion;
    typeAnnotation: TypeNode;
    expression: Expression;
}
export declare interface TSTypeLiteral extends BaseNode {
    type: AST_NODE_TYPES.TSTypeLiteral;
    members: TypeElement[];
}
export declare interface TSTypeOperator extends BaseNode {
    type: AST_NODE_TYPES.TSTypeOperator;
    operator: 'keyof' | 'readonly' | 'unique';
    typeAnnotation?: TypeNode;
}
export declare interface TSTypeParameter extends BaseNode {
    type: AST_NODE_TYPES.TSTypeParameter;
    name: Identifier;
    constraint?: TypeNode;
    default?: TypeNode;
    in: boolean;
    out: boolean;
    const: boolean;
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
    exprName: EntityName;
    typeParameters?: TSTypeParameterInstantiation;
}
export declare interface TSTypeReference extends BaseNode {
    type: AST_NODE_TYPES.TSTypeReference;
    typeName: EntityName;
    typeParameters?: TSTypeParameterInstantiation;
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
export declare interface UnaryExpression extends UnaryExpressionBase {
    type: AST_NODE_TYPES.UnaryExpression;
    operator: '-' | '!' | '+' | '~' | 'delete' | 'typeof' | 'void';
}
declare interface UnaryExpressionBase extends BaseNode {
    operator: string;
    prefix: boolean;
    argument: LeftHandSideExpression | Literal | UnaryExpression;
}
export declare interface UpdateExpression extends UnaryExpressionBase {
    type: AST_NODE_TYPES.UpdateExpression;
    operator: '--' | '++';
}
declare type ValueOf<T> = T[keyof T];
export declare interface VariableDeclaration extends BaseNode {
    type: AST_NODE_TYPES.VariableDeclaration;
    /**
     * The variables declared by this declaration.
     * Note that there may be 0 declarations (i.e. `const;`).
     * ```
     * let x;
     * let y, z;
     * ```
     */
    declarations: VariableDeclarator[];
    /**
     * Whether the declaration is `declare`d
     * ```
     * declare const x = 1;
     * ```
     */
    declare?: boolean;
    /**
     * The keyword used to declare the variable(s)
     * ```
     * const x = 1;
     * let y = 2;
     * var z = 3;
     * ```
     */
    kind: 'const' | 'let' | 'var';
}
export declare interface VariableDeclarator extends BaseNode {
    type: AST_NODE_TYPES.VariableDeclarator;
    id: BindingName;
    init: Expression | null;
    definite?: boolean;
}
export declare interface WhileStatement extends BaseNode {
    type: AST_NODE_TYPES.WhileStatement;
    test: Expression;
    body: Statement;
}
export declare interface WithStatement extends BaseNode {
    type: AST_NODE_TYPES.WithStatement;
    object: Expression;
    body: Statement;
}
export declare interface YieldExpression extends BaseNode {
    type: AST_NODE_TYPES.YieldExpression;
    delegate: boolean;
    argument?: Expression;
}
export {};
//# sourceMappingURL=ast-spec.d.ts.map
