import * as ts from 'typescript';
import { NodeWrap } from './convert-ast';
export declare function getChildOfKind<T extends ts.SyntaxKind>(node: ts.Node, kind: T, sourceFile?: ts.SourceFile): ts.Token<T> | undefined;
export declare function isTokenKind(kind: ts.SyntaxKind): boolean;
export declare function isNodeKind(kind: ts.SyntaxKind): boolean;
export declare function isAssignmentKind(kind: ts.SyntaxKind): boolean;
export declare function isTypeNodeKind(kind: ts.SyntaxKind): boolean;
export declare function isJsDocKind(kind: ts.SyntaxKind): boolean;
export declare function isKeywordKind(kind: ts.SyntaxKind): boolean;
export declare function isThisParameter(parameter: ts.ParameterDeclaration): boolean;
export declare function getModifier(node: ts.Node, kind: ts.Modifier['kind']): ts.Modifier | undefined;
export declare function hasModifier(modifiers: ts.ModifiersArray | undefined, ...kinds: Array<ts.Modifier['kind']>): boolean;
export declare function isParameterProperty(node: ts.ParameterDeclaration): boolean;
export declare function hasAccessModifier(node: ts.ClassElement | ts.ParameterDeclaration): boolean;
export declare const isNodeFlagSet: (node: ts.Node, flag: ts.NodeFlags) => boolean;
export declare const isTypeFlagSet: (type: ts.Type, flag: ts.TypeFlags) => boolean;
export declare const isSymbolFlagSet: (symbol: ts.Symbol, flag: ts.SymbolFlags) => boolean;
export declare function isObjectFlagSet(objectType: ts.ObjectType, flag: ts.ObjectFlags): boolean;
export declare function isModifierFlagSet(node: ts.Node, flag: ts.ModifierFlags): boolean;
export declare function getPreviousStatement(statement: ts.Statement): ts.Statement | undefined;
export declare function getNextStatement(statement: ts.Statement): ts.Statement | undefined;
/** Returns the token before the start of `node` or `undefined` if there is none. */
export declare function getPreviousToken(node: ts.Node, sourceFile?: ts.SourceFile): ts.Node | undefined;
/** Returns the next token that begins after the end of `node`. Returns `undefined` for SourceFile and EndOfFileToken */
export declare function getNextToken(node: ts.Node, sourceFile?: ts.SourceFile): ts.Node | undefined;
/** Returns the token at or following the specified position or undefined if none is found inside `parent`. */
export declare function getTokenAtPosition(parent: ts.Node, pos: number, sourceFile?: ts.SourceFile, allowJsDoc?: boolean): ts.Node | undefined;
/**
 * Return the comment at the specified position.
 * You can pass an optional `parent` to avoid some work finding the corresponding token starting at `sourceFile`.
 * If the `parent` parameter is passed, `pos` must be between `parent.pos` and `parent.end`.
*/
export declare function getCommentAtPosition(sourceFile: ts.SourceFile, pos: number, parent?: ts.Node): ts.CommentRange | undefined;
/**
 * Returns whether the specified position is inside a comment.
 * You can pass an optional `parent` to avoid some work finding the corresponding token starting at `sourceFile`.
 * If the `parent` parameter is passed, `pos` must be between `parent.pos` and `parent.end`.
 */
export declare function isPositionInComment(sourceFile: ts.SourceFile, pos: number, parent?: ts.Node): boolean;
export declare function commentText(sourceText: string, comment: ts.CommentRange): string;
/** Returns the deepest AST Node at `pos`. Returns undefined if `pos` is outside of the range of `node` */
export declare function getAstNodeAtPosition(node: ts.Node, pos: number): ts.Node | undefined;
/**
 * Returns the NodeWrap of deepest AST node that contains `pos` between its `pos` and `end`.
 * Only returns undefined if pos is outside of `wrap`
 */
export declare function getWrappedNodeAtPosition(wrap: NodeWrap, pos: number): NodeWrap | undefined;
export declare function getPropertyName(propertyName: ts.PropertyName): string | undefined;
export declare function forEachDestructuringIdentifier<T>(pattern: ts.BindingPattern, fn: (element: ts.BindingElement & {
    name: ts.Identifier;
}) => T): T | undefined;
export declare function forEachDeclaredVariable<T>(declarationList: ts.VariableDeclarationList, cb: (element: (ts.VariableDeclaration | ts.BindingElement) & {
    name: ts.Identifier;
}) => T): T | undefined;
export declare enum VariableDeclarationKind {
    Var = 0,
    Let = 1,
    Const = 2
}
export declare function getVariableDeclarationKind(declarationList: ts.VariableDeclarationList): VariableDeclarationKind;
export declare function isBlockScopedVariableDeclarationList(declarationList: ts.VariableDeclarationList): boolean;
export declare function isBlockScopedVariableDeclaration(declaration: ts.VariableDeclaration): boolean;
export declare function isBlockScopedDeclarationStatement(statement: ts.Statement): statement is ts.DeclarationStatement;
export declare function isInSingleStatementContext(statement: ts.Statement): boolean;
export declare enum ScopeBoundary {
    None = 0,
    Function = 1,
    Block = 2,
    Type = 4,
    ConditionalType = 8
}
export declare enum ScopeBoundarySelector {
    Function = 1,
    Block = 3,
    Type = 7,
    InferType = 8
}
export declare function isScopeBoundary(node: ts.Node): ScopeBoundary;
export declare function isTypeScopeBoundary(node: ts.Node): ScopeBoundary;
export declare function isFunctionScopeBoundary(node: ts.Node): ScopeBoundary;
export declare function isBlockScopeBoundary(node: ts.Node): ScopeBoundary;
/** Returns true for scope boundaries that have their own `this` reference instead of inheriting it from the containing scope */
export declare function hasOwnThisReference(node: ts.Node): boolean;
export declare function isFunctionWithBody(node: ts.Node): node is ts.FunctionLikeDeclaration & {
    body: {};
};
/**
 * Iterate over all tokens of `node`
 *
 * @param node The node whose tokens should be visited
 * @param cb Is called for every token contained in `node`
 */
export declare function forEachToken(node: ts.Node, cb: (node: ts.Node) => void, sourceFile?: ts.SourceFile): void;
export declare type ForEachTokenCallback = (fullText: string, kind: ts.SyntaxKind, range: ts.TextRange, parent: ts.Node) => void;
/**
 * Iterate over all tokens and trivia of `node`
 *
 * @description JsDoc comments are treated like regular comments
 *
 * @param node The node whose tokens should be visited
 * @param cb Is called for every token contained in `node` and trivia before the token
 */
export declare function forEachTokenWithTrivia(node: ts.Node, cb: ForEachTokenCallback, sourceFile?: ts.SourceFile): void;
export declare type ForEachCommentCallback = (fullText: string, comment: ts.CommentRange) => void;
/** Iterate over all comments owned by `node` or its children */
export declare function forEachComment(node: ts.Node, cb: ForEachCommentCallback, sourceFile?: ts.SourceFile): void;
export interface LineRange extends ts.TextRange {
    contentLength: number;
}
export declare function getLineRanges(sourceFile: ts.SourceFile): LineRange[];
/** Get the line break style used in sourceFile. This function only looks at the first line break. If there is none, \n is assumed. */
export declare function getLineBreakStyle(sourceFile: ts.SourceFile): "\n" | "\r\n";
/**
 * Determines whether the given text parses as a standalone identifier.
 * This is not a guarantee that it works in every context. The property name in PropertyAccessExpressions for example allows reserved words.
 * Depending on the context it could be parsed as contextual keyword or TypeScript keyword.
 */
export declare function isValidIdentifier(text: string, languageVersion?: ts.ScriptTarget): boolean;
/**
 * Determines whether the given text can be used to access a property with a PropertyAccessExpression while preserving the property's name.
 */
export declare function isValidPropertyAccess(text: string, languageVersion?: ts.ScriptTarget): boolean;
/**
 * Determines whether the given text can be used as unquoted name of a property declaration while preserving the property's name.
 */
export declare function isValidPropertyName(text: string, languageVersion?: ts.ScriptTarget): boolean;
/**
 * Determines whether the given text can be parsed as a numeric literal.
 */
export declare function isValidNumericLiteral(text: string, languageVersion?: ts.ScriptTarget): boolean;
/**
 * Determines whether the given text can be used as JSX tag or attribute name while preserving the exact name.
 */
export declare function isValidJsxIdentifier(text: string, languageVersion?: ts.ScriptTarget): boolean;
export declare function isNumericPropertyName(name: string | ts.__String): boolean;
export declare function isSameLine(sourceFile: ts.SourceFile, pos1: number, pos2: number): boolean;
export declare enum SideEffectOptions {
    None = 0,
    TaggedTemplate = 1,
    Constructor = 2,
    JsxElement = 4
}
export declare function hasSideEffects(node: ts.Expression, options?: SideEffectOptions): boolean;
/** Returns the VariableDeclaration or ParameterDeclaration that contains the BindingElement */
export declare function getDeclarationOfBindingElement(node: ts.BindingElement): ts.VariableDeclaration | ts.ParameterDeclaration;
export declare function isExpressionValueUsed(node: ts.Expression): boolean;
export declare enum AccessKind {
    None = 0,
    Read = 1,
    Write = 2,
    Delete = 4,
    ReadWrite = 3,
    Modification = 6
}
export declare function getAccessKind(node: ts.Node): AccessKind;
export declare function isReassignmentTarget(node: ts.Expression): boolean;
export declare function canHaveJsDoc(node: ts.Node): node is ts.HasJSDoc;
/** Gets the JSDoc of a node. For performance reasons this function should only be called when `canHaveJsDoc` returns true. */
export declare function getJsDoc(node: ts.Node, sourceFile?: ts.SourceFile): ts.JSDoc[];
/**
 * Parses the JsDoc of any node. This function is made for nodes that don't get their JsDoc parsed by the TypeScript parser.
 *
 * @param considerTrailingComments When set to `true` this function uses the trailing comments if the node starts on the same line
 *                                 as the previous node ends.
 */
export declare function parseJsDocOfNode(node: ts.Node, considerTrailingComments?: boolean, sourceFile?: ts.SourceFile): ts.JSDoc[];
export declare enum ImportKind {
    ImportDeclaration = 1,
    ImportEquals = 2,
    ExportFrom = 4,
    DynamicImport = 8,
    Require = 16,
    ImportType = 32,
    All = 63,
    AllImports = 59,
    AllStaticImports = 3,
    AllImportExpressions = 24,
    AllRequireLike = 18
}
export declare function findImports(sourceFile: ts.SourceFile, kinds: ImportKind, ignoreFileName?: boolean): (ts.StringLiteral | ts.NoSubstitutionTemplateLiteral)[];
export declare type ImportLike = ts.ImportDeclaration | ts.ImportEqualsDeclaration & {
    moduleReference: ts.ExternalModuleReference;
} | ts.ExportDeclaration & {
    moduleSpecifier: {};
} | ts.CallExpression & {
    expression: ts.Token<ts.SyntaxKind.ImportKeyword> | ts.Identifier & {
        text: 'require';
    };
    arguments: [ts.Expression, ...ts.Expression[]];
} | ts.ImportTypeNode;
export declare function findImportLikeNodes(sourceFile: ts.SourceFile, kinds: ImportKind, ignoreFileName?: boolean): ImportLike[];
/**
 * Ambient context means the statement itself has the `declare` keyword
 * or is inside a `declare namespace`,  `delcare module` or `declare global`.
 */
export declare function isStatementInAmbientContext(node: ts.Statement): boolean;
/** Includes `declare namespace`, `declare module` and `declare global` and namespace nested in one of the aforementioned. */
export declare function isAmbientModuleBlock(node: ts.Node): node is ts.ModuleBlock;
export declare function getIIFE(func: ts.FunctionExpression | ts.ArrowFunction): ts.CallExpression | undefined;
export declare type StrictCompilerOption = 'noImplicitAny' | 'noImplicitThis' | 'strictNullChecks' | 'strictFunctionTypes' | 'strictPropertyInitialization' | 'alwaysStrict' | 'strictBindCallApply';
export declare function isStrictCompilerOptionEnabled(options: ts.CompilerOptions, option: StrictCompilerOption): boolean;
export declare type BooleanCompilerOptions = {
    [K in keyof ts.CompilerOptions]: NonNullable<ts.CompilerOptions[K]> extends boolean ? K : never;
} extends {
    [_ in keyof ts.CompilerOptions]: infer U;
} ? U : never;
/**
 * Checks if a given compiler option is enabled.
 * It handles dependencies of options, e.g. `declaration` is implicitly enabled by `composite` or `strictNullChecks` is enabled by `strict`.
 * However, it does not check dependencies that are already checked and reported as errors, e.g. `checkJs` without `allowJs`.
 * This function only handles boolean flags.
 */
export declare function isCompilerOptionEnabled(options: ts.CompilerOptions, option: BooleanCompilerOptions | 'stripInternal'): boolean;
/**
 * Has nothing to do with `isAmbientModuleBlock`.
 *
 * @returns `true` if it's a global augmentation or has a string name.
 */
export declare function isAmbientModule(node: ts.ModuleDeclaration): boolean;
/**
 * @deprecated use `getTsCheckDirective` instead since `// @ts-nocheck` is no longer restricted to JS files.
 * @returns the last `// @ts-check` or `// @ts-nocheck` directive in the given file.
 */
export declare function getCheckJsDirective(source: string): ts.CheckJsDirective | undefined;
/** @returns the last `// @ts-check` or `// @ts-nocheck` directive in the given file. */
export declare function getTsCheckDirective(source: string): ts.CheckJsDirective | undefined;
export declare function isConstAssertion(node: ts.AssertionExpression): boolean;
/** Detects whether an expression is affected by an enclosing 'as const' assertion and therefore treated literally. */
export declare function isInConstContext(node: ts.Expression): boolean;
/** Returns true for `Object.defineProperty(o, 'prop', {value, writable: false})` and  `Object.defineProperty(o, 'prop', {get: () => 1})`*/
export declare function isReadonlyAssignmentDeclaration(node: ts.CallExpression, checker: ts.TypeChecker): boolean;
/** Determines whether a call to `Object.defineProperty` is statically analyzable. */
export declare function isBindableObjectDefinePropertyCall(node: ts.CallExpression): boolean;
export interface WellKnownSymbolLiteral extends ts.PropertyAccessExpression {
    expression: ts.Identifier & {
        text: 'Symbol';
        escapedText: 'symbol';
    };
}
export declare function isWellKnownSymbolLiterally(node: ts.Expression): node is WellKnownSymbolLiteral;
export interface PropertyName {
    displayName: string;
    symbolName: ts.__String;
}
/** @deprecated typescript 4.3 removed the concept of literal well known symbols. Use `getPropertyNameFromType` instead. */
export declare function getPropertyNameOfWellKnownSymbol(node: WellKnownSymbolLiteral): PropertyName;
export interface LateBoundPropertyNames {
    /** Whether all constituents are literal names. */
    known: boolean;
    names: PropertyName[];
}
export declare function getLateBoundPropertyNames(node: ts.Expression, checker: ts.TypeChecker): LateBoundPropertyNames;
export declare function getLateBoundPropertyNamesOfPropertyName(node: ts.PropertyName, checker: ts.TypeChecker): LateBoundPropertyNames;
/** Most declarations demand there to be only one statically known name, e.g. class members with computed name. */
export declare function getSingleLateBoundPropertyNameOfPropertyName(node: ts.PropertyName, checker: ts.TypeChecker): PropertyName | undefined;
export declare function unwrapParentheses(node: ts.Expression): ts.Expression;
export declare function formatPseudoBigInt(v: ts.PseudoBigInt): `${string}n` | `-${string}n`;
/**
 * Determines whether the given `SwitchStatement`'s `case` clauses cover every possible value of the switched expression.
 * The logic is the same as TypeScript's control flow analysis.
 * This does **not** check whether all `case` clauses do a certain action like assign a variable or return a value.
 * This function ignores the `default` clause if present.
 */
export declare function hasExhaustiveCaseClauses(node: ts.SwitchStatement, checker: ts.TypeChecker): boolean;
export declare function getBaseOfClassLikeExpression(node: ts.ClassLikeDeclaration): ts.ExpressionWithTypeArguments | undefined;
