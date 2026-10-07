import ts from 'typescript';

/**
 * Descriptive data for a comment as yielded by {@link iterateComments}.
 */
type Comment = ts.CommentRange & {
    text: string;
    value: string;
};
/**
 * Callback type used for {@link forEachComment}.
 * @category Callbacks
 * @param fullText Full parsed text of the comment.
 * @param comment Text range of the comment in its file.
 * @example
 * ```ts
 * let onComment: ForEachCommentCallback = (fullText, comment) => {
 *    console.log(`Found comment at position ${comment.pos}: '${fullText}'.`);
 * };
 * ```
 */
type ForEachCommentCallback = (fullText: string, comment: ts.CommentRange) => void;
/**
 * Iterates over all comments owned by `node` or its children.
 * @category Nodes - Other Utilities
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * forEachComment(node, (fullText, comment) => {
 *    console.log(`Found comment at position ${comment.pos}: '${fullText}'.`);
 * });
 * ```
 */
declare function forEachComment(node: ts.Node, callback: ForEachCommentCallback, sourceFile?: ts.SourceFile): void;
/**
 * Iterates over all comments owned by `node` or its children.
 * @category Nodes - Other Utilities
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * for (const {pos, text} of iterateComment(node) {
 *    console.log(`Found comment at position ${pos}: '${text}'.`);
 * };
 * ```
 */
declare function iterateComments(node: ts.Node, sourceFile?: ts.SourceFile): Generator<Comment>;

/**
 * An option that can be tested with {@link isCompilerOptionEnabled}.
 * @category Compiler Options
 */
type BooleanCompilerOptions = keyof {
    [K in keyof ts.CompilerOptions as NonNullable<ts.CompilerOptions[K]> extends boolean ? K : never]: unknown;
};
/**
 * An option that can be tested with {@link isStrictCompilerOptionEnabled}.
 * @category Compiler Options
 */
type StrictCompilerOption = "alwaysStrict" | "noImplicitAny" | "noImplicitThis" | "strictBindCallApply" | "strictFunctionTypes" | "strictNullChecks" | "strictPropertyInitialization";
/**
 * Checks if a given compiler option is enabled.
 * It handles dependencies of options, e.g. `declaration` is implicitly enabled by `composite` or `strictNullChecks` is enabled by `strict`.
 * However, it does not check dependencies that are already checked and reported as errors, e.g. `checkJs` without `allowJs`.
 * This function only handles boolean flags.
 * @category Compiler Options
 * @example
 * ```ts
 * const options = {
 * 	allowJs: true,
 * };
 *
 * isCompilerOptionEnabled(options, "allowJs"); // true
 * isCompilerOptionEnabled(options, "allowSyntheticDefaultImports"); // false
 * ```
 */
declare function isCompilerOptionEnabled(options: ts.CompilerOptions, option: BooleanCompilerOptions): boolean;
/**
 * Checks if a given compiler option is enabled, accounting for whether all flags
 * (except `strictPropertyInitialization`) have been enabled by `strict: true`.
 * @category Compiler Options
 * @example
 * ```ts
 * const optionsLenient = {
 * 	noImplicitAny: true,
 * };
 *
 * isStrictCompilerOptionEnabled(optionsLenient, "noImplicitAny"); // true
 * isStrictCompilerOptionEnabled(optionsLenient, "noImplicitThis"); // false
 * ```
 * @example
 * ```ts
 * const optionsStrict = {
 * 	noImplicitThis: false,
 * 	strict: true,
 * };
 *
 * isStrictCompilerOptionEnabled(optionsStrict, "noImplicitAny"); // true
 * isStrictCompilerOptionEnabled(optionsStrict, "noImplicitThis"); // false
 * ```
 */
declare function isStrictCompilerOptionEnabled(options: ts.CompilerOptions, option: StrictCompilerOption): boolean;

/**
 * Test if the given node has the given `ModifierFlags` set.
 * @category Nodes - Flag Utilities
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isModifierFlagSet(node, ts.ModifierFlags.Abstract)) {
 *   // ...
 * }
 * ```
 */
declare function isModifierFlagSet(node: ts.Declaration, flag: ts.ModifierFlags): boolean;
/**
 * Test if the given node has the given `NodeFlags` set.
 * @category Nodes - Flag Utilities
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNodeFlagSet(node, ts.NodeFlags.AwaitContext)) {
 *   // ...
 * }
 * ```
 */
declare const isNodeFlagSet: (node: ts.Node, flag: ts.NodeFlags) => boolean;
/**
 * Test if the given node has the given `ObjectFlags` set.
 * @category Nodes - Flag Utilities
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isObjectFlagSet(node, ts.ObjectFlags.Anonymous)) {
 *   // ...
 * }
 * ```
 */
declare function isObjectFlagSet(objectType: ts.ObjectType, flag: ts.ObjectFlags): boolean;
/**
 * Test if the given node has the given `SymbolFlags` set.
 * @category Nodes - Flag Utilities
 * @example
 * ```ts
 * declare const symbol: ts.Symbol;
 *
 * if (isSymbolFlagSet(symbol, ts.SymbolFlags.Accessor)) {
 *   // ...
 * }
 * ```
 */
declare const isSymbolFlagSet: (symbol: ts.Symbol, flag: ts.SymbolFlags) => boolean;
/**
 * Test if the given node has the given `TypeFlags` set.
 * @category Nodes - Flag Utilities
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isTypeFlagSet(type, ts.TypeFlags.Any)) {
 *   // ...
 * }
 * ```
 */
declare const isTypeFlagSet: (type: ts.Type, flag: ts.TypeFlags) => boolean;

/**
 * Test if the given iterable includes a modifier of any of the given kinds.
 * @category Modifier Utilities
 * @example
 * ```ts
 * declare const modifiers: ts.Modifier[];
 *
 * includesModifier(modifiers, ts.SyntaxKind.AbstractKeyword);
 * ```
 */
declare function includesModifier(modifiers: Iterable<ts.ModifierLike> | undefined, ...kinds: ts.ModifierSyntaxKind[]): boolean;

/**
 * What operations(s), if any, an expression applies.
 */
declare enum AccessKind {
    None = 0,
    Read = 1,
    Write = 2,
    Delete = 4,
    ReadWrite = 3
}
/**
 * Determines which operation(s), if any, an expression applies.
 * @example
 * ```ts
 * declare const node: ts.Expression;
 *
 * if (getAccessKind(node).Write & AccessKind.Write) !== 0) {
 *   // this is a reassignment (write)
 * }
 * ```
 */
declare function getAccessKind(node: ts.Expression): AccessKind;

/**
 * An `AssertionExpression` that is declared as const.
 * @category Node Types
 */
type ConstAssertionExpression = ts.AssertionExpression & {
    type: ts.TypeReferenceNode;
    typeName: ConstAssertionIdentifier;
};
/**
 * An `Identifier` with an `escapedText` value of `"const"`.
 * @category Node Types
 */
type ConstAssertionIdentifier = ts.Identifier & {
    escapedText: "const" & ts.__String;
};
/**
 * a `NamedDeclaration` that definitely has a name.
 * @category Node Types
 */
interface NamedDeclarationWithName extends ts.NamedDeclaration {
    name: ts.DeclarationName;
}
/**
 * A number or string-like literal.
 * @category Node Types
 */
type NumericOrStringLikeLiteral = ts.NumericLiteral | ts.StringLiteralLike;
/**
 * Test if a node is a {@link ConstAssertionExpression}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isConstAssertionExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link ConstAssertionExpression}.
 */
declare function isConstAssertionExpression(node: ts.AssertionExpression): node is ConstAssertionExpression;
/**
 * Test if a node is an `IterationStatement`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isIterationStatement(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `IterationStatement`.
 */
declare function isIterationStatement(node: ts.Node): node is ts.IterationStatement;
/**
 * Test if a node is a `JSDocNamespaceDeclaration`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJSDocNamespaceDeclaration(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JSDocNamespaceDeclaration`.
 */
declare function isJSDocNamespaceDeclaration(node: ts.Node): node is ts.JSDocNamespaceDeclaration;
/**
 * Test if a node is a `JsxTagNamePropertyAccess`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJsxTagNamePropertyAccess(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JsxTagNamePropertyAccess`.
 */
declare function isJsxTagNamePropertyAccess(node: ts.Node): node is ts.JsxTagNamePropertyAccess;
/**
 * Test if a node is a {@link NamedDeclarationWithName}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNamedDeclarationWithName(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link NamedDeclarationWithName}.
 */
declare function isNamedDeclarationWithName(node: ts.Declaration): node is NamedDeclarationWithName;
/**
 * Test if a node is a `NamespaceDeclaration`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNamespaceDeclaration(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `NamespaceDeclaration`.
 */
declare function isNamespaceDeclaration(node: ts.Node): node is ts.NamespaceDeclaration;
/**
 * Test if a node is a {@link NumericOrStringLikeLiteral}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNumericOrStringLikeLiteral(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link NumericOrStringLikeLiteral}.
 */
declare function isNumericOrStringLikeLiteral(node: ts.Node): node is NumericOrStringLikeLiteral;
/**
 * Test if a node is a `PropertyAccessEntityNameExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isPropertyAccessEntityNameExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `PropertyAccessEntityNameExpression`.
 */
declare function isPropertyAccessEntityNameExpression(node: ts.Node): node is ts.PropertyAccessEntityNameExpression;
/**
 * Test if a node is a `SuperElementAccessExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isSuperElementAccessExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `SuperElementAccessExpression`.
 */
declare function isSuperElementAccessExpression(node: ts.Node): node is ts.SuperElementAccessExpression;
/**
 * Test if a node is a `SuperPropertyAccessExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isSuperPropertyAccessExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `SuperPropertyAccessExpression`.
 */
declare function isSuperPropertyAccessExpression(node: ts.Node): node is ts.SuperPropertyAccessExpression;

/**
 * A node that represents the any keyword.
 * @category Node Types
 */
type AnyKeyword = ts.KeywordToken<ts.SyntaxKind.AnyKeyword>;
/**
 * A node that represents the bigint keyword.
 * @category Node Types
 */
type BigIntKeyword = ts.KeywordToken<ts.SyntaxKind.BigIntKeyword>;
/**
 * A node that represents the boolean keyword.
 * @category Node Types
 */
type BooleanKeyword = ts.KeywordToken<ts.SyntaxKind.BooleanKeyword>;
/**
 * A node that represents the false keyword.
 * @category Node Types
 */
type FalseKeyword = ts.KeywordToken<ts.SyntaxKind.FalseKeyword>;
/**
 * A node that represents the import keyword.
 * @category Node Types
 */
type ImportKeyword = ts.KeywordToken<ts.SyntaxKind.ImportKeyword>;
/**
 * A node that represents the never keyword.
 * @category Node Types
 */
type NeverKeyword = ts.KeywordToken<ts.SyntaxKind.NeverKeyword>;
/**
 * A node that represents the null keyword.
 * @category Node Types
 */
type NullKeyword = ts.KeywordToken<ts.SyntaxKind.NullKeyword>;
/**
 * A node that represents the number keyword.
 * @category Node Types
 */
type NumberKeyword = ts.KeywordToken<ts.SyntaxKind.NumberKeyword>;
/**
 * A node that represents the object keyword.
 * @category Node Types
 */
type ObjectKeyword = ts.KeywordToken<ts.SyntaxKind.ObjectKeyword>;
/**
 * A node that represents the string keyword.
 * @category Node Types
 */
type StringKeyword = ts.KeywordToken<ts.SyntaxKind.StringKeyword>;
/**
 * A node that represents the super keyword.
 * @category Node Types
 */
type SuperKeyword = ts.KeywordToken<ts.SyntaxKind.SuperKeyword>;
/**
 * A node that represents the symbol keyword.
 * @category Node Types
 */
type SymbolKeyword = ts.KeywordToken<ts.SyntaxKind.SymbolKeyword>;
/**
 * A node that represents the this keyword.
 * @category Node Types
 */
type ThisKeyword = ts.KeywordToken<ts.SyntaxKind.ThisKeyword>;
/**
 * A node that represents the true keyword.
 * @category Node Types
 */
type TrueKeyword = ts.KeywordToken<ts.SyntaxKind.TrueKeyword>;
/**
 * A node that represents the undefined keyword.
 * @category Node Types
 */
type UndefinedKeyword = ts.KeywordToken<ts.SyntaxKind.UndefinedKeyword>;
/**
 * A node that represents the unknown keyword.
 * @category Node Types
 */
type UnknownKeyword = ts.KeywordToken<ts.SyntaxKind.UnknownKeyword>;
/**
 * A node that represents the void keyword.
 * @category Node Types
 */
type VoidKeyword = ts.KeywordToken<ts.SyntaxKind.VoidKeyword>;
/**
 * Test if a node is an `AbstractKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAbstractKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `AbstractKeyword`.
 */
declare function isAbstractKeyword(node: ts.Node): node is ts.AbstractKeyword;
/**
 * Test if a node is an `AccessorKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAccessorKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `AccessorKeyword`.
 */
declare function isAccessorKeyword(node: ts.Node): node is ts.AccessorKeyword;
/**
 * Test if a node is an {@link AnyKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAnyKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an {@link AnyKeyword}.
 */
declare function isAnyKeyword(node: ts.Node): node is AnyKeyword;
/**
 * Test if a node is an `AssertKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAssertKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `AssertKeyword`.
 */
declare function isAssertKeyword(node: ts.Node): node is ts.AssertKeyword;
/**
 * Test if a node is an `AssertsKeyword`.
 * @deprecated With TypeScript v5, in favor of typescript's `isAssertsKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAssertsKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `AssertsKeyword`.
 */
declare function isAssertsKeyword(node: ts.Node): node is ts.AssertsKeyword;
/**
 * Test if a node is an `AsyncKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAsyncKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `AsyncKeyword`.
 */
declare function isAsyncKeyword(node: ts.Node): node is ts.AsyncKeyword;
/**
 * Test if a node is an `AwaitKeyword`.
 * @deprecated With TypeScript v5, in favor of typescript's `isAwaitKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAwaitKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `AwaitKeyword`.
 */
declare function isAwaitKeyword(node: ts.Node): node is ts.AwaitKeyword;
/**
 * Test if a node is a {@link BigIntKeyword}.
 * @deprecated With TypeScript v5, in favor of typescript's `isBigIntKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isBigIntKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link BigIntKeyword}.
 */
declare function isBigIntKeyword(node: ts.Node): node is BigIntKeyword;
/**
 * Test if a node is a {@link BooleanKeyword}.
 * @deprecated With TypeScript v5, in favor of typescript's `isBooleanKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isBooleanKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link BooleanKeyword}.
 */
declare function isBooleanKeyword(node: ts.Node): node is BooleanKeyword;
/**
 * Test if a node is a `ColonToken`.
 * @deprecated With TypeScript v5, in favor of typescript's `isColonToken`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isColonToken(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ColonToken`.
 */
declare function isColonToken(node: ts.Node): node is ts.ColonToken;
/**
 * Test if a node is a `ConstKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isConstKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ConstKeyword`.
 */
declare function isConstKeyword(node: ts.Node): node is ts.ConstKeyword;
/**
 * Test if a node is a `DeclareKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isDeclareKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `DeclareKeyword`.
 */
declare function isDeclareKeyword(node: ts.Node): node is ts.DeclareKeyword;
/**
 * Test if a node is a `DefaultKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isDefaultKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `DefaultKeyword`.
 */
declare function isDefaultKeyword(node: ts.Node): node is ts.DefaultKeyword;
/**
 * Test if a node is a `DotToken`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isDotToken(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `DotToken`.
 */
declare function isDotToken(node: ts.Node): node is ts.DotToken;
/**
 * Test if a node is an `EndOfFileToken`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isEndOfFileToken(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `EndOfFileToken`.
 */
declare function isEndOfFileToken(node: ts.Node): node is ts.EndOfFileToken;
/**
 * Test if a node is an `EqualsGreaterThanToken`.
 * @deprecated With TypeScript v5, in favor of typescript's `isEqualsGreaterThanToken`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isEqualsGreaterThanToken(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `EqualsGreaterThanToken`.
 */
declare function isEqualsGreaterThanToken(node: ts.Node): node is ts.EqualsGreaterThanToken;
/**
 * Test if a node is an `EqualsToken`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isEqualsToken(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `EqualsToken`.
 */
declare function isEqualsToken(node: ts.Node): node is ts.EqualsToken;
/**
 * Test if a node is an `ExclamationToken`.
 * @deprecated With TypeScript v5, in favor of typescript's `isExclamationToken`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isExclamationToken(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `ExclamationToken`.
 */
declare function isExclamationToken(node: ts.Node): node is ts.ExclamationToken;
/**
 * Test if a node is an `ExportKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isExportKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `ExportKeyword`.
 */
declare function isExportKeyword(node: ts.Node): node is ts.ExportKeyword;
/**
 * Test if a node is a {@link FalseKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isFalseKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link FalseKeyword}.
 */
declare function isFalseKeyword(node: ts.Node): node is FalseKeyword;
/**
 * Test if a node is a `FalseLiteral`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isFalseLiteral(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `FalseLiteral`.
 */
declare function isFalseLiteral(node: ts.Node): node is ts.FalseLiteral;
/**
 * Test if a node is an `ImportExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isImportExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `ImportExpression`.
 */
declare function isImportExpression(node: ts.Node): node is ts.ImportExpression;
/**
 * Test if a node is an {@link ImportKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isImportKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an {@link ImportKeyword}.
 */
declare function isImportKeyword(node: ts.Node): node is ImportKeyword;
/**
 * Test if a node is an `InKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isInKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `InKeyword`.
 */
declare function isInKeyword(node: ts.Node): node is ts.InKeyword;
/**
 * Test if a node is a `JSDocText`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJSDocText(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JSDocText`.
 */
declare function isJSDocText(node: ts.Node): node is ts.JSDocText;
/**
 * Test if a node is a `JsonMinusNumericLiteral`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJsonMinusNumericLiteral(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JsonMinusNumericLiteral`.
 */
declare function isJsonMinusNumericLiteral(node: ts.Node): node is ts.JsonMinusNumericLiteral;
/**
 * Test if a node is a {@link NeverKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNeverKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link NeverKeyword}.
 */
declare function isNeverKeyword(node: ts.Node): node is NeverKeyword;
/**
 * Test if a node is a {@link NullKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNullKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link NullKeyword}.
 */
declare function isNullKeyword(node: ts.Node): node is NullKeyword;
/**
 * Test if a node is a `NullLiteral`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNullLiteral(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `NullLiteral`.
 */
declare function isNullLiteral(node: ts.Node): node is ts.NullLiteral;
/**
 * Test if a node is a {@link NumberKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNumberKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link NumberKeyword}.
 */
declare function isNumberKeyword(node: ts.Node): node is NumberKeyword;
/**
 * Test if a node is an {@link ObjectKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isObjectKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an {@link ObjectKeyword}.
 */
declare function isObjectKeyword(node: ts.Node): node is ObjectKeyword;
/**
 * Test if a node is an `OutKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isOutKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `OutKeyword`.
 */
declare function isOutKeyword(node: ts.Node): node is ts.OutKeyword;
/**
 * Test if a node is an `OverrideKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isOverrideKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `OverrideKeyword`.
 */
declare function isOverrideKeyword(node: ts.Node): node is ts.OverrideKeyword;
/**
 * Test if a node is a `PrivateKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isPrivateKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `PrivateKeyword`.
 */
declare function isPrivateKeyword(node: ts.Node): node is ts.PrivateKeyword;
/**
 * Test if a node is a `ProtectedKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isProtectedKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ProtectedKeyword`.
 */
declare function isProtectedKeyword(node: ts.Node): node is ts.ProtectedKeyword;
/**
 * Test if a node is a `PublicKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isPublicKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `PublicKeyword`.
 */
declare function isPublicKeyword(node: ts.Node): node is ts.PublicKeyword;
/**
 * Test if a node is a `QuestionDotToken`.
 * @deprecated With TypeScript v5, in favor of typescript's `isQuestionDotToken`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isQuestionDotToken(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `QuestionDotToken`.
 */
declare function isQuestionDotToken(node: ts.Node): node is ts.QuestionDotToken;
/**
 * Test if a node is a `QuestionToken`.
 * @deprecated With TypeScript v5, in favor of typescript's `isQuestionToken`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isQuestionToken(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `QuestionToken`.
 */
declare function isQuestionToken(node: ts.Node): node is ts.QuestionToken;
/**
 * Test if a node is a `ReadonlyKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isReadonlyKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ReadonlyKeyword`.
 */
declare function isReadonlyKeyword(node: ts.Node): node is ts.ReadonlyKeyword;
/**
 * Test if a node is a `StaticKeyword`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isStaticKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `StaticKeyword`.
 */
declare function isStaticKeyword(node: ts.Node): node is ts.StaticKeyword;
/**
 * Test if a node is a {@link StringKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isStringKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link StringKeyword}.
 */
declare function isStringKeyword(node: ts.Node): node is StringKeyword;
/**
 * Test if a node is a `SuperExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isSuperExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `SuperExpression`.
 */
declare function isSuperExpression(node: ts.Node): node is ts.SuperExpression;
/**
 * Test if a node is a {@link SuperKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isSuperKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link SuperKeyword}.
 */
declare function isSuperKeyword(node: ts.Node): node is SuperKeyword;
/**
 * Test if a node is a {@link SymbolKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isSymbolKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link SymbolKeyword}.
 */
declare function isSymbolKeyword(node: ts.Node): node is SymbolKeyword;
/**
 * Test if a node is a `SyntaxList`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isSyntaxList(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `SyntaxList`.
 */
declare function isSyntaxList(node: ts.Node): node is ts.SyntaxList;
/**
 * Test if a node is a `ThisExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isThisExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ThisExpression`.
 */
declare function isThisExpression(node: ts.Node): node is ts.ThisExpression;
/**
 * Test if a node is a {@link ThisKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isThisKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link ThisKeyword}.
 */
declare function isThisKeyword(node: ts.Node): node is ThisKeyword;
/**
 * Test if a node is a {@link TrueKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isTrueKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link TrueKeyword}.
 */
declare function isTrueKeyword(node: ts.Node): node is TrueKeyword;
/**
 * Test if a node is a `TrueLiteral`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isTrueLiteral(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `TrueLiteral`.
 */
declare function isTrueLiteral(node: ts.Node): node is ts.TrueLiteral;
/**
 * Test if a node is an {@link UndefinedKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isUndefinedKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an {@link UndefinedKeyword}.
 */
declare function isUndefinedKeyword(node: ts.Node): node is UndefinedKeyword;
/**
 * Test if a node is an {@link UnknownKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isUnknownKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an {@link UnknownKeyword}.
 */
declare function isUnknownKeyword(node: ts.Node): node is UnknownKeyword;
/**
 * Test if a node is a {@link VoidKeyword}.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isVoidKeyword(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a {@link VoidKeyword}.
 */
declare function isVoidKeyword(node: ts.Node): node is VoidKeyword;

/**
 * Test if a node is a `HasDecorators`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (hasDecorators(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `HasDecorators`.
 */
declare function hasDecorators(node: ts.Node): node is ts.HasDecorators;
/**
 * Test if a node is a `HasExpressionInitializer`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (hasExpressionInitializer(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `HasExpressionInitializer`.
 */
declare function hasExpressionInitializer(node: ts.Node): node is ts.HasExpressionInitializer;
/**
 * Test if a node is a `HasInitializer`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (hasInitializer(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `HasInitializer`.
 */
declare function hasInitializer(node: ts.Node): node is ts.HasInitializer;
/**
 * Test if a node is a `HasJSDoc`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (hasJSDoc(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `HasJSDoc`.
 */
declare function hasJSDoc(node: ts.Node): node is ts.HasJSDoc;
/**
 * Test if a node is a `HasModifiers`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (hasModifiers(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `HasModifiers`.
 */
declare function hasModifiers(node: ts.Node): node is ts.HasModifiers;
/**
 * Test if a node is a `HasType`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (hasType(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `HasType`.
 */
declare function hasType(node: ts.Node): node is ts.HasType;
/**
 * Test if a node is a `HasTypeArguments`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (hasTypeArguments(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `HasTypeArguments`.
 */
declare function hasTypeArguments(node: ts.Node): node is ts.HasTypeArguments;
/**
 * Test if a node is an `AccessExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAccessExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `AccessExpression`.
 */
declare function isAccessExpression(node: ts.Node): node is ts.AccessExpression;
/**
 * Test if a node is an `AccessibilityModifier`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAccessibilityModifier(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `AccessibilityModifier`.
 */
declare function isAccessibilityModifier(node: ts.Node): node is ts.AccessibilityModifier;
/**
 * Test if a node is an `AccessorDeclaration`.
 * @deprecated With TypeScript v5, in favor of typescript's `isAccessor`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAccessorDeclaration(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `AccessorDeclaration`.
 */
declare function isAccessorDeclaration(node: ts.Node): node is ts.AccessorDeclaration;
/**
 * Test if a node is an `ArrayBindingElement`.
 * @deprecated With TypeScript v5, in favor of typescript's `isArrayBindingElement`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isArrayBindingElement(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `ArrayBindingElement`.
 */
declare function isArrayBindingElement(node: ts.Node): node is ts.ArrayBindingElement;
/**
 * Test if a node is an `ArrayBindingOrAssignmentPattern`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isArrayBindingOrAssignmentPattern(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `ArrayBindingOrAssignmentPattern`.
 */
declare function isArrayBindingOrAssignmentPattern(node: ts.Node): node is ts.ArrayBindingOrAssignmentPattern;
/**
 * Test if a node is an `AssignmentPattern`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isAssignmentPattern(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `AssignmentPattern`.
 */
declare function isAssignmentPattern(node: ts.Node): node is ts.AssignmentPattern;
/**
 * Test if a node is a `BindingOrAssignmentElementRestIndicator`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isBindingOrAssignmentElementRestIndicator(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `BindingOrAssignmentElementRestIndicator`.
 */
declare function isBindingOrAssignmentElementRestIndicator(node: ts.Node): node is ts.BindingOrAssignmentElementRestIndicator;
/**
 * Test if a node is a `BindingOrAssignmentElementTarget`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isBindingOrAssignmentElementTarget(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `BindingOrAssignmentElementTarget`.
 */
declare function isBindingOrAssignmentElementTarget(node: ts.Node): node is ts.BindingOrAssignmentElementTarget;
/**
 * Test if a node is a `BindingOrAssignmentPattern`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isBindingOrAssignmentPattern(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `BindingOrAssignmentPattern`.
 */
declare function isBindingOrAssignmentPattern(node: ts.Node): node is ts.BindingOrAssignmentPattern;
/**
 * Test if a node is a `BindingPattern`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isBindingPattern(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `BindingPattern`.
 */
declare function isBindingPattern(node: ts.Node): node is ts.BindingPattern;
/**
 * Test if a node is a `BlockLike`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isBlockLike(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `BlockLike`.
 */
declare function isBlockLike(node: ts.Node): node is ts.BlockLike;
/**
 * Test if a node is a `BooleanLiteral`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isBooleanLiteral(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `BooleanLiteral`.
 */
declare function isBooleanLiteral(node: ts.Node): node is ts.BooleanLiteral;
/**
 * Test if a node is a `ClassLikeDeclaration`.
 * @deprecated With TypeScript v5, in favor of typescript's `isClassLike`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isClassLikeDeclaration(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ClassLikeDeclaration`.
 */
declare function isClassLikeDeclaration(node: ts.Node): node is ts.ClassLikeDeclaration;
/**
 * Test if a node is a `ClassMemberModifier`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isClassMemberModifier(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ClassMemberModifier`.
 */
declare function isClassMemberModifier(node: ts.Node): node is ts.ClassMemberModifier;
/**
 * Test if a node is a `DeclarationName`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isDeclarationName(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `DeclarationName`.
 */
declare function isDeclarationName(node: ts.Node): node is ts.DeclarationName;
/**
 * Test if a node is a `DeclarationWithTypeParameterChildren`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isDeclarationWithTypeParameterChildren(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `DeclarationWithTypeParameterChildren`.
 */
declare function isDeclarationWithTypeParameterChildren(node: ts.Node): node is ts.DeclarationWithTypeParameterChildren;
/**
 * Test if a node is a `DeclarationWithTypeParameters`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isDeclarationWithTypeParameters(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `DeclarationWithTypeParameters`.
 */
declare function isDeclarationWithTypeParameters(node: ts.Node): node is ts.DeclarationWithTypeParameters;
/**
 * Test if a node is a `DestructuringPattern`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isDestructuringPattern(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `DestructuringPattern`.
 */
declare function isDestructuringPattern(node: ts.Node): node is ts.DestructuringPattern;
/**
 * Test if a node is an `EntityNameExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isEntityNameExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `EntityNameExpression`.
 */
declare function isEntityNameExpression(node: ts.Node): node is ts.EntityNameExpression;
/**
 * Test if a node is an `EntityNameOrEntityNameExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isEntityNameOrEntityNameExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `EntityNameOrEntityNameExpression`.
 */
declare function isEntityNameOrEntityNameExpression(node: ts.Node): node is ts.EntityNameOrEntityNameExpression;
/**
 * Test if a node is a `ForInOrOfStatement`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isForInOrOfStatement(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ForInOrOfStatement`.
 */
declare function isForInOrOfStatement(node: ts.Node): node is ts.ForInOrOfStatement;
/**
 * Test if a node is a `FunctionLikeDeclaration`.
 * @deprecated With TypeScript v5, in favor of typescript's `isFunctionLike`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isFunctionLikeDeclaration(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `FunctionLikeDeclaration`.
 */
declare function isFunctionLikeDeclaration(node: ts.Node): node is ts.FunctionLikeDeclaration;
/**
 * Test if a node is a `JSDocComment`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJSDocComment(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JSDocComment`.
 */
declare function isJSDocComment(node: ts.Node): node is ts.JSDocComment;
/**
 * Test if a node is a `JSDocNamespaceBody`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJSDocNamespaceBody(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JSDocNamespaceBody`.
 */
declare function isJSDocNamespaceBody(node: ts.Node): node is ts.JSDocNamespaceBody;
/**
 * Test if a node is a `JSDocTypeReferencingNode`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJSDocTypeReferencingNode(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JSDocTypeReferencingNode`.
 */
declare function isJSDocTypeReferencingNode(node: ts.Node): node is ts.JSDocTypeReferencingNode;
/**
 * Test if a node is a `JsonObjectExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJsonObjectExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JsonObjectExpression`.
 */
declare function isJsonObjectExpression(node: ts.Node): node is ts.JsonObjectExpression;
/**
 * Test if a node is a `JsxAttributeLike`.
 * @deprecated With TypeScript v5, in favor of typescript's `isJsxAttributeLike`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJsxAttributeLike(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JsxAttributeLike`.
 */
declare function isJsxAttributeLike(node: ts.Node): node is ts.JsxAttributeLike;
/**
 * Test if a node is a `JsxAttributeValue`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJsxAttributeValue(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JsxAttributeValue`.
 */
declare function isJsxAttributeValue(node: ts.Node): node is ts.JsxAttributeValue;
/**
 * Test if a node is a `JsxChild`.
 * @deprecated With TypeScript v5, in favor of typescript's `isJsxChild`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJsxChild(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JsxChild`.
 */
declare function isJsxChild(node: ts.Node): node is ts.JsxChild;
/**
 * Test if a node is a `JsxTagNameExpression`.
 * @deprecated With TypeScript v5, in favor of typescript's `isJsxTagNameExpression`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isJsxTagNameExpression(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `JsxTagNameExpression`.
 */
declare function isJsxTagNameExpression(node: ts.Node): node is ts.JsxTagNameExpression;
/**
 * Test if a node is a `LiteralToken`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isLiteralToken(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `LiteralToken`.
 */
declare function isLiteralToken(node: ts.Node): node is ts.LiteralToken;
/**
 * Test if a node is a `ModuleBody`.
 * @deprecated With TypeScript v5, in favor of typescript's `isModuleBody`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isModuleBody(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ModuleBody`.
 */
declare function isModuleBody(node: ts.Node): node is ts.ModuleBody;
/**
 * Test if a node is a `ModuleName`.
 * @deprecated With TypeScript v5, in favor of typescript's `isModuleName`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isModuleName(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ModuleName`.
 */
declare function isModuleName(node: ts.Node): node is ts.ModuleName;
/**
 * Test if a node is a `ModuleReference`.
 * @deprecated With TypeScript v5, in favor of typescript's `isModuleReference`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isModuleReference(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ModuleReference`.
 */
declare function isModuleReference(node: ts.Node): node is ts.ModuleReference;
/**
 * Test if a node is a `NamedImportBindings`.
 * @deprecated With TypeScript v5, in favor of typescript's `isNamedImportBindings`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNamedImportBindings(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `NamedImportBindings`.
 */
declare function isNamedImportBindings(node: ts.Node): node is ts.NamedImportBindings;
/**
 * Test if a node is a `NamedImportsOrExports`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNamedImportsOrExports(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `NamedImportsOrExports`.
 */
declare function isNamedImportsOrExports(node: ts.Node): node is ts.NamedImportsOrExports;
/**
 * Test if a node is a `NamespaceBody`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isNamespaceBody(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `NamespaceBody`.
 */
declare function isNamespaceBody(node: ts.Node): node is ts.NamespaceBody;
/**
 * Test if a node is an `ObjectBindingOrAssignmentElement`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isObjectBindingOrAssignmentElement(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `ObjectBindingOrAssignmentElement`.
 */
declare function isObjectBindingOrAssignmentElement(node: ts.Node): node is ts.ObjectBindingOrAssignmentElement;
/**
 * Test if a node is an `ObjectBindingOrAssignmentPattern`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isObjectBindingOrAssignmentPattern(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `ObjectBindingOrAssignmentPattern`.
 */
declare function isObjectBindingOrAssignmentPattern(node: ts.Node): node is ts.ObjectBindingOrAssignmentPattern;
/**
 * Test if a node is an `ObjectTypeDeclaration`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isObjectTypeDeclaration(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `ObjectTypeDeclaration`.
 */
declare function isObjectTypeDeclaration(node: ts.Node): node is ts.ObjectTypeDeclaration;
/**
 * Test if a node is a `ParameterPropertyModifier`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isParameterPropertyModifier(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `ParameterPropertyModifier`.
 */
declare function isParameterPropertyModifier(node: ts.Node): node is ts.ParameterPropertyModifier;
/**
 * Test if a node is a `PropertyNameLiteral`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isPropertyNameLiteral(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `PropertyNameLiteral`.
 */
declare function isPropertyNameLiteral(node: ts.Node): node is ts.PropertyNameLiteral;
/**
 * Test if a node is a `PseudoLiteralToken`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isPseudoLiteralToken(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `PseudoLiteralToken`.
 */
declare function isPseudoLiteralToken(node: ts.Node): node is ts.PseudoLiteralToken;
/**
 * Test if a node is a `SignatureDeclaration`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isSignatureDeclaration(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `SignatureDeclaration`.
 */
declare function isSignatureDeclaration(node: ts.Node): node is ts.SignatureDeclaration;
/**
 * Test if a node is a `SuperProperty`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isSuperProperty(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `SuperProperty`.
 */
declare function isSuperProperty(node: ts.Node): node is ts.SuperProperty;
/**
 * Test if a node is a `TypeOnlyCompatibleAliasDeclaration`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isTypeOnlyCompatibleAliasDeclaration(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `TypeOnlyCompatibleAliasDeclaration`.
 */
declare function isTypeOnlyCompatibleAliasDeclaration(node: ts.Node): node is ts.TypeOnlyCompatibleAliasDeclaration;
/**
 * Test if a node is a `TypeReferenceType`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isTypeReferenceType(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `TypeReferenceType`.
 */
declare function isTypeReferenceType(node: ts.Node): node is ts.TypeReferenceType;
/**
 * Test if a node is an `UnionOrIntersectionTypeNode`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isUnionOrIntersectionTypeNode(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be an `UnionOrIntersectionTypeNode`.
 */
declare function isUnionOrIntersectionTypeNode(node: ts.Node): node is ts.UnionOrIntersectionTypeNode;
/**
 * Test if a node is a `VariableLikeDeclaration`.
 * @category Nodes - Type Guards
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isVariableLikeDeclaration(node)) {
 *   // ...
 * }
 * ```
 * @returns Whether the given node appears to be a `VariableLikeDeclaration`.
 */
declare function isVariableLikeDeclaration(node: ts.Node): node is ts.VariableLikeDeclaration;

/**
 * Is the node a scope boundary, specifically due to it being a function.
 * @category Scope Utilities
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * if (isFunctionScopeBoundary(node)) {
 *   // ...
 * }
 * ```
 */
declare function isFunctionScopeBoundary(node: ts.Node): boolean;

/**
 * Test of the kind given is for assignment.
 * @category Syntax Utilities
 * @example
 * ```ts
 * declare const kind: ts.SyntaxKind;
 *
 * isAssignmentKind(kind);
 * ```
 */
declare function isAssignmentKind(kind: ts.SyntaxKind): boolean;
/**
 * Test if a string is numeric.
 * @category Syntax Utilities
 * @example
 * ```ts
 * isNumericPropertyName("abc"); // false
 * isNumericPropertyName("123"); // true
 * ```
 */
declare function isNumericPropertyName(name: string | ts.__String): boolean;
/**
 * Determines whether the given text can be used to access a property with a `PropertyAccessExpression` while preserving the property's name.
 * @category Syntax Utilities
 * @example
 * ```ts
 * isValidPropertyAccess("abc"); // true
 * isValidPropertyAccess("123"); // false
 * ```
 */
declare function isValidPropertyAccess(text: string, languageVersion?: ts.ScriptTarget): boolean;

/**
 * Callback type used for {@link forEachToken}.
 * @category Callbacks
 * @example
 * ```ts
 * let onToken: ForEachTokenCallback = (token) => {
 *    console.log(`Found token at position: ${token.pos}.`);
 * };
 * ```
 */
type ForEachTokenCallback = (token: ts.Node) => void;
/**
 * Iterates over all tokens of `node`
 * @category Nodes - Other Utilities
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * forEachToken(node, (token) => {
 * 	console.log("Found token:", token.getText());
 * });
 * ```
 * @param node The node whose tokens should be visited
 * @param callback Is called for every token contained in `node`
 */
declare function forEachToken(node: ts.Node, callback: ForEachTokenCallback, sourceFile?: ts.SourceFile): void;
/**
 * Iterates over all tokens of `node`
 * @category Nodes - Other Utilities
 * @example
 * ```ts
 * declare const node: ts.Node;
 *
 * for (const token of iterateTokens(token)) {
 * 	console.log("Found token:", token.getText());
 * });
 * ```
 * @param node The node whose tokens should be visited
 */
declare function iterateTokens(node: ts.Node, sourceFile?: ts.SourceFile): Generator<ts.Node>;

/**
 * Get the `CallSignatures` of the given type.
 * @category Types - Getters
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * getCallSignaturesOfType(type);
 * ```
 */
declare function getCallSignaturesOfType(type: ts.Type): readonly ts.Signature[];
/**
 * Get the property with the given name on the given type (if it exists).
 * @category Types - Getters
 * @example
 * ```ts
 * declare const property: ts.Symbol;
 * declare const type: ts.Type;
 *
 * getPropertyOfType(type, property.getEscapedName());
 * ```
 */
declare function getPropertyOfType(type: ts.Type, name: ts.__String): ts.Symbol | undefined;
/**
 * Retrieves a type symbol corresponding to a well-known string name.
 * @category Types - Getters
 * @example
 * ```ts
 * declare const type: ts.Type;
 * declare const typeChecker: ts.TypeChecker;
 *
 * getWellKnownSymbolPropertyOfType(type, "asyncIterator", typeChecker);
 * ```
 */
declare function getWellKnownSymbolPropertyOfType(type: ts.Type, wellKnownSymbolName: string, typeChecker: ts.TypeChecker): ts.Symbol | undefined;

/**
 * A "any" intrinsic type.
 * @category Type Types
 */
interface IntrinsicAnyType extends IntrinsicType {
    intrinsicName: "any";
}
/**
 * A "bigint" intrinsic type.
 * @category Type Types
 */
interface IntrinsicBigIntType extends IntrinsicType {
    intrinsicName: "bigint";
}
/**
 * A "boolean" intrinsic type.
 * @category Type Types
 */
interface IntrinsicBooleanType extends IntrinsicType {
    intrinsicName: "boolean";
}
/**
 * An "error" intrinsic type.
 *
 * This refers to a type generated when TypeScript encounters an error while
 * trying to resolve the type.
 * @category Type Types
 */
interface IntrinsicErrorType extends IntrinsicType {
    intrinsicName: "error";
}
/**
 * A "symbol" intrinsic type.
 * @category Type Types
 */
interface IntrinsicESSymbolType extends IntrinsicType {
    intrinsicName: "symbol";
}
/**
 * An "intrinsic" (built-in to TypeScript) type.
 * @category Type Types
 */
interface IntrinsicType extends ts.Type {
    intrinsicName: string;
    objectFlags: ts.ObjectFlags;
}
/**
 * Determines whether the given type is the "any" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicAnyType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicAnyType(type: ts.Type): type is IntrinsicAnyType;
/**
 * Determines whether the given type is the "bigint" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicBigIntType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicBigIntType(type: ts.Type): type is IntrinsicBigIntType;
/**
 * Determines whether the given type is the "boolean" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicBooleanType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicBooleanType(type: ts.Type): type is IntrinsicBooleanType;
/**
 * Determines whether the given type is the "error" intrinsic type.
 *
 * The intrinsic error type occurs when TypeScript encounters an error while
 * trying to resolve the type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicErrorType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicErrorType(type: ts.Type): type is IntrinsicErrorType;
/**
 * Determines whether the given type is the "symbol" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicESSymbolType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicESSymbolType(type: ts.Type): type is IntrinsicESSymbolType;
/**
 * A "never" intrinsic type.
 * @category Type Types
 */
interface IntrinsicNeverType extends IntrinsicType {
    intrinsicName: "never";
}
/**
 * A non-primitive intrinsic type.
 * E.g. An "object" intrinsic type.
 * @category Type Types
 */
interface IntrinsicNonPrimitiveType extends IntrinsicType {
    intrinsicName: "";
}
/**
 * A "null" intrinsic type.
 * @category Type Types
 */
interface IntrinsicNullType extends IntrinsicType {
    intrinsicName: "null";
}
/**
 * A "number" intrinsic type.
 * @category Type Types
 */
interface IntrinsicNumberType extends IntrinsicType {
    intrinsicName: "number";
}
/**
 * A "string" intrinsic type.
 * @category Type Types
 */
interface IntrinsicStringType extends IntrinsicType {
    intrinsicName: "string";
}
/**
 * The built-in `undefined` type.
 * @category Type Types
 */
interface IntrinsicUndefinedType extends IntrinsicType {
    intrinsicName: "undefined";
}
/**
 * The built-in `unknown` type.
 * @category Type Types
 */
interface IntrinsicUnknownType extends IntrinsicType {
    intrinsicName: "unknown";
}
/**
 * A "void" intrinsic type.
 * @category Type Types
 */
interface IntrinsicVoidType extends IntrinsicType {
    intrinsicName: "void";
}
/**
 * Determines whether the given type is the "never" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicNeverType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicNeverType(type: ts.Type): type is IntrinsicNeverType;
/**
 * Determines whether the given type is a non-primitive intrinsic type.
 * E.g. An "object" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicNonPrimitiveType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicNonPrimitiveType(type: ts.Type): type is IntrinsicNonPrimitiveType;
/**
 * Determines whether the given type is the "null" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicNullType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicNullType(type: ts.Type): type is IntrinsicNullType;
/**
 * Determines whether the given type is the "number" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicNumberType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicNumberType(type: ts.Type): type is IntrinsicNumberType;
/**
 * Determines whether the given type is the "string" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicStringType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicStringType(type: ts.Type): type is IntrinsicStringType;
/**
 * Test if a type is an {@link IntrinsicType}.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicType(type: ts.Type): type is IntrinsicType;
/**
 * Determines whether the given type is the "undefined" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicUndefinedType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicUndefinedType(type: ts.Type): type is IntrinsicUndefinedType;
/**
 * Determines whether the given type is the "unknown" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicUnknownType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicUnknownType(type: ts.Type): type is IntrinsicUnknownType;
/**
 * Determines whether the given type is the "void" intrinsic type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntrinsicVoidType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntrinsicVoidType(type: ts.Type): type is IntrinsicVoidType;

/**
 * A type that is both an {@link IntrinsicType} and a `FreshableType`
 * @category Type Types
 */
interface FreshableIntrinsicType extends ts.FreshableType, IntrinsicType {
}
/**
 * Test if a type is a `FreshableIntrinsicType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isFreshableIntrinsicType(type)) {
 *   // ...
 * }
 */
declare function isFreshableIntrinsicType(type: ts.Type): type is FreshableIntrinsicType;
/**
 * Test if a type is a `TupleTypeReference`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isTupleTypeReference(type)) {
 *   // ...
 * }
 */
declare function isTupleTypeReference(type: ts.Type): type is ts.TupleTypeReference;

/**
 * A boolean literal.
 * i.e. Either a "true" or "false" literal.
 * @category Type Types
 */
interface BooleanLiteralType extends FreshableIntrinsicType {
    intrinsicName: "false" | "true";
}
/**
 * A "false" literal.
 * @category Type Types
 */
interface FalseLiteralType extends BooleanLiteralType {
    intrinsicName: "false";
}
/**
 * A "true" literal.
 * @category Type Types
 */
interface TrueLiteralType extends BooleanLiteralType {
    intrinsicName: "true";
}
/**
 * `LiteralType` from typescript except that it allows for it to work on arbitrary types.
 * @deprecated Use {@link FreshableIntrinsicType} instead.
 * @category Type Types
 */
interface UnknownLiteralType extends FreshableIntrinsicType {
    value?: unknown;
}
/**
 * Test if a type is a `BigIntLiteralType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isBigIntLiteralType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isBigIntLiteralType(type: ts.Type): type is ts.BigIntLiteralType;
/**
 * Determines whether the given type is a boolean literal type.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isBooleanLiteralType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isBooleanLiteralType(type: ts.Type): type is BooleanLiteralType;
/**
 * Determines whether the given type is a boolean literal type for "false".
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isFalseLiteralType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isFalseLiteralType(type: ts.Type): type is FalseLiteralType;
/**
 * Test if a type is a `LiteralType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isLiteralType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isLiteralType(type: ts.Type): type is ts.LiteralType;
/**
 * Test if a type is a `NumberLiteralType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isNumberLiteralType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isNumberLiteralType(type: ts.Type): type is ts.NumberLiteralType;
/**
 * Test if a type is a `StringLiteralType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isStringLiteralType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isStringLiteralType(type: ts.Type): type is ts.StringLiteralType;
/**
 * Test if a type is a `TemplateLiteralType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isTemplateLiteralType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isTemplateLiteralType(type: ts.Type): type is ts.TemplateLiteralType;
/**
 * Determines whether the given type is a boolean literal type for "true".
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isTrueLiteralType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isTrueLiteralType(type: ts.Type): type is TrueLiteralType;

/**
 * Test if a type is a `EvolvingArrayType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isEvolvingArrayType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isEvolvingArrayType(type: ts.Type): type is ts.EvolvingArrayType;
/**
 * Test if a type is a `TupleType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isTupleType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isTupleType(type: ts.Type): type is ts.TupleType;
/**
 * Test if a type is a `TypeReference`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isTypeReference(type)) {
 *   // ...
 * }
 * ```
 */
declare function isTypeReference(type: ts.Type): type is ts.TypeReference;

/**
 * Test if a type is a `ConditionalType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isConditionalType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isConditionalType(type: ts.Type): type is ts.ConditionalType;
/**
 * Test if a type is a `EnumType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isEnumType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isEnumType(type: ts.Type): type is ts.EnumType;
/**
 * Test if a type is a `FreshableType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isFreshableType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isFreshableType(type: ts.Type): type is ts.FreshableType;
/**
 * Test if a type is a `IndexedAccessType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIndexedAccessType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIndexedAccessType(type: ts.Type): type is ts.IndexedAccessType;
/**
 * Test if a type is a `IndexType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIndexType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIndexType(type: ts.Type): type is ts.IndexType;
/**
 * Test if a type is a `InstantiableType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isInstantiableType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isInstantiableType(type: ts.Type): type is ts.InstantiableType;
/**
 * Test if a type is a `IntersectionType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isIntersectionType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isIntersectionType(type: ts.Type): type is ts.IntersectionType;
/**
 * Test if a type is a `ObjectType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isObjectType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isObjectType(type: ts.Type): type is ts.ObjectType;
/**
 * Test if a type is a `StringMappingType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isStringMappingType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isStringMappingType(type: ts.Type): type is ts.StringMappingType;
/**
 * Test if a type is a `SubstitutionType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isSubstitutionType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isSubstitutionType(type: ts.Type): type is ts.SubstitutionType;
/**
 * Test if a type is a `TypeParameter`.
 *
 * Note: It is intentional that this is not a type guard.
 * @see https://github.com/JoshuaKGoldberg/ts-api-utils/issues/382
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isTypeParameter(type)) {
 *   // ...
 * }
 * ```
 */
declare function isTypeParameter(type: ts.Type): boolean;
/**
 * Test if a type is a `TypeVariable`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isTypeVariable(type)) {
 *   // ...
 * }
 * ```
 */
declare function isTypeVariable(type: ts.Type): type is ts.TypeVariable;
/**
 * Test if a type is a `UnionOrIntersectionType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isUnionOrIntersectionType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isUnionOrIntersectionType(type: ts.Type): type is ts.UnionOrIntersectionType;
/**
 * Test if a type is a `UnionType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isUnionType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isUnionType(type: ts.Type): type is ts.UnionType;
/**
 * Test if a type is a `UniqueESSymbolType`.
 * @category Types - Type Guards
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isUniqueESSymbolType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isUniqueESSymbolType(type: ts.Type): type is ts.UniqueESSymbolType;

/**
 * Get the intersection type parts of the given type.
 *
 * If the given type is not a intersection type, an array contain only that type will be returned.
 * @category Types - Utilities
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * for (const constituent of intersectionConstituents(type)) {
 *   // ...
 * }
 * ```
 */
declare function intersectionConstituents(type: ts.Type): ts.Type[];
/**
 * @alias intersectionConstituents
 * @deprecated Use {@link intersectionConstituents} instead.
 * @category Types - Utilities
 * ```
 */
declare const intersectionTypeParts: typeof intersectionConstituents;
/**
 * Determines whether a type is definitely falsy. This function doesn't unwrap union types.
 * @category Types - Utilities
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (isFalsyType(type)) {
 *   // ...
 * }
 * ```
 */
declare function isFalsyType(type: ts.Type): boolean;
/**
 * Determines whether writing to a certain property of a given type is allowed.
 * @category Types - Utilities
 * @example
 * ```ts
 * declare const property: ts.Symbol;
 * declare const type: ts.Type;
 * declare const typeChecker: ts.TypeChecker;
 *
 * if (isPropertyReadonlyInType(type, property.getEscapedName(), typeChecker)) {
 *   // ...
 * }
 * ```
 */
declare function isPropertyReadonlyInType(type: ts.Type, name: ts.__String, typeChecker: ts.TypeChecker): boolean;
/**
 * Determines whether a type is thenable and thus can be used with `await`.
 * @category Types - Utilities
 * @example
 * ```ts
 * declare const node: ts.Node;
 * declare const type: ts.Type;
 * declare const typeChecker: ts.TypeChecker;
 *
 * if (isThenableType(typeChecker, node, type)) {
 *   // ...
 * }
 * ```
 */
declare function isThenableType(typeChecker: ts.TypeChecker, node: ts.Node, type: ts.Type): boolean;
/**
 * Determines whether a type is thenable and thus can be used with `await`.
 * @category Types - Utilities
 * @example
 * ```ts
 * declare const expression: ts.Expression;
 * declare const typeChecker: ts.TypeChecker;
 *
 * if (isThenableType(typeChecker, expression)) {
 *   // ...
 * }
 * ```
 * @example
 * ```ts
 * declare const expression: ts.Expression;
 * declare const typeChecker: ts.TypeChecker;
 * declare const type: ts.Type;
 *
 * if (isThenableType(typeChecker, expression, type)) {
 *   // ...
 * }
 * ```
 */
declare function isThenableType(typeChecker: ts.TypeChecker, node: ts.Expression, type?: ts.Type): boolean;
/**
 * Test if the given symbol has a readonly declaration.
 * @category Symbols - Utilities
 * @example
 * ```ts
 * declare const symbol: ts.Symbol;
 * declare const typeChecker: ts.TypeChecker;
 *
 * if (symbolHasReadonlyDeclaration(symbol, typeChecker)) {
 *   // ...
 * }
 * ```
 * @deprecated This is not used by any consumers known by ts-api-utils,
 * and so the public export will be removed in a future major version.
 */
declare function symbolHasReadonlyDeclaration(symbol: ts.Symbol, typeChecker: ts.TypeChecker): boolean;
/**
 * Get the intersection or union type parts of the given type.
 *
 * Note that this is a shallow collection: it only returns `type.types` or `[type]`.
 *
 * If the given type is not an intersection or union type, an array contain only that type will be returned.
 * @category Types - Utilities
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * for (const constituent of typeConstituents(type)) {
 *   // ...
 * }
 * ```
 */
declare function typeConstituents(type: ts.Type): ts.Type[];
/**
 * TS's `type.isLiteral()` is bugged before TS v5.0 and won't return `true` for
 * bigint literals. Use this function instead if you need to check for bigint
 * literals in TS versions before v5.0. Otherwise, you should just use
 * `type.isLiteral()`.
 * @see https://github.com/microsoft/TypeScript/pull/50929
 * @category Types - Utilities
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * if (typeIsLiteral(type)) {
 *   // ...
 * }
 * ```
 */
declare function typeIsLiteral(type: ts.Type): type is ts.LiteralType;
/**
 * @alias typeConstituents
 * @deprecated Use {@link typeConstituents} instead.
 * @category Types - Utilities
 */
declare const typeParts: typeof typeConstituents;
/**
 * Get the union type parts of the given type.
 *
 * If the given type is not a union type, an array contain only that type will be returned.
 * @category Types - Utilities
 * @example
 * ```ts
 * declare const type: ts.Type;
 *
 * for (const constituent of unionConstituents(type)) {
 *   // ...
 * }
 * ```
 */
declare function unionConstituents(type: ts.Type): ts.Type[];
/**
 * @alias unionConstituents
 * @deprecated Use {@link unionConstituents} instead.
 * @category Types - Utilities
 */
declare const unionTypeParts: typeof unionConstituents;

/**
 * Which "domain"(s) (most commonly, type or value space) a declaration is within.
 */
declare enum DeclarationDomain {
    Namespace = 1,
    Type = 2,
    Value = 4,
    Any = 7,
    Import = 8
}

/**
 * Which "domain"(s) (most commonly, type or value space) a usage is within.
 */
declare enum UsageDomain {
    Namespace = 1,
    Type = 2,
    Value = 4,
    Any = 7,
    TypeQuery = 8,
    ValueOrNamespace = 5
}

/**
 * An instance of an item (type or value) being used.
 */
interface Usage {
    /**
     * Which space(s) the usage is within.
     */
    domain: UsageDomain;
    location: ts.Identifier;
}
/**
 * How an item (type or value) was declared and/or referenced.
 */
interface UsageInfo {
    /**
     * Locations where the item was declared.
     */
    declarations: ts.Identifier[];
    /**
     * Which space(s) the item is within.
     */
    domain: DeclarationDomain;
    /**
     * Whether the item was exported from its module or namespace scope.
     */
    exported: boolean;
    /**
     * Whether the item's declaration was in the global scope.
     */
    inGlobalScope: boolean;
    /**
     * Each reference to the item in the file.
     */
    uses: Usage[];
}

/**
 * Creates a mapping of each declared type and value to its type information.
 * @category Nodes - Other Utilities
 * @example
 * ```ts
 * declare const sourceFile: ts.SourceFile;
 *
 * const usage = collectVariableUsage(sourceFile);
 *
 * for (const [identifier, information] of usage) {
 * 	console.log(`${identifier.getText()} is used ${information.uses.length} time(s).`);
 * }
 * ```
 */
declare function collectVariableUsage(sourceFile: ts.SourceFile): Map<ts.Identifier, UsageInfo>;

export { AccessKind, type AnyKeyword, type BigIntKeyword, type BooleanCompilerOptions, type BooleanKeyword, type BooleanLiteralType, type Comment, type ConstAssertionExpression, type ConstAssertionIdentifier, DeclarationDomain, type FalseKeyword, type FalseLiteralType, type ForEachCommentCallback, type ForEachTokenCallback, type FreshableIntrinsicType, type ImportKeyword, type IntrinsicAnyType, type IntrinsicBigIntType, type IntrinsicBooleanType, type IntrinsicESSymbolType, type IntrinsicErrorType, type IntrinsicNeverType, type IntrinsicNonPrimitiveType, type IntrinsicNullType, type IntrinsicNumberType, type IntrinsicStringType, type IntrinsicType, type IntrinsicUndefinedType, type IntrinsicUnknownType, type IntrinsicVoidType, type NamedDeclarationWithName, type NeverKeyword, type NullKeyword, type NumberKeyword, type NumericOrStringLikeLiteral, type ObjectKeyword, type StrictCompilerOption, type StringKeyword, type SuperKeyword, type SymbolKeyword, type ThisKeyword, type TrueKeyword, type TrueLiteralType, type UndefinedKeyword, type UnknownKeyword, type UnknownLiteralType, UsageDomain, type UsageInfo as VariableInfo, type Usage as VariableUse, type VoidKeyword, collectVariableUsage, forEachComment, forEachToken, getAccessKind, getCallSignaturesOfType, getPropertyOfType, getWellKnownSymbolPropertyOfType, hasDecorators, hasExpressionInitializer, hasInitializer, hasJSDoc, hasModifiers, hasType, hasTypeArguments, includesModifier, intersectionConstituents, intersectionTypeParts, isAbstractKeyword, isAccessExpression, isAccessibilityModifier, isAccessorDeclaration, isAccessorKeyword, isAnyKeyword, isArrayBindingElement, isArrayBindingOrAssignmentPattern, isAssertKeyword, isAssertsKeyword, isAssignmentKind, isAssignmentPattern, isAsyncKeyword, isAwaitKeyword, isBigIntKeyword, isBigIntLiteralType, isBindingOrAssignmentElementRestIndicator, isBindingOrAssignmentElementTarget, isBindingOrAssignmentPattern, isBindingPattern, isBlockLike, isBooleanKeyword, isBooleanLiteral, isBooleanLiteralType, isClassLikeDeclaration, isClassMemberModifier, isColonToken, isCompilerOptionEnabled, isConditionalType, isConstAssertionExpression, isConstKeyword, isDeclarationName, isDeclarationWithTypeParameterChildren, isDeclarationWithTypeParameters, isDeclareKeyword, isDefaultKeyword, isDestructuringPattern, isDotToken, isEndOfFileToken, isEntityNameExpression, isEntityNameOrEntityNameExpression, isEnumType, isEqualsGreaterThanToken, isEqualsToken, isEvolvingArrayType, isExclamationToken, isExportKeyword, isFalseKeyword, isFalseLiteral, isFalseLiteralType, isFalsyType, isForInOrOfStatement, isFreshableIntrinsicType, isFreshableType, isFunctionLikeDeclaration, isFunctionScopeBoundary, isImportExpression, isImportKeyword, isInKeyword, isIndexType, isIndexedAccessType, isInstantiableType, isIntersectionType, isIntrinsicAnyType, isIntrinsicBigIntType, isIntrinsicBooleanType, isIntrinsicESSymbolType, isIntrinsicErrorType, isIntrinsicNeverType, isIntrinsicNonPrimitiveType, isIntrinsicNullType, isIntrinsicNumberType, isIntrinsicStringType, isIntrinsicType, isIntrinsicUndefinedType, isIntrinsicUnknownType, isIntrinsicVoidType, isIterationStatement, isJSDocComment, isJSDocNamespaceBody, isJSDocNamespaceDeclaration, isJSDocText, isJSDocTypeReferencingNode, isJsonMinusNumericLiteral, isJsonObjectExpression, isJsxAttributeLike, isJsxAttributeValue, isJsxChild, isJsxTagNameExpression, isJsxTagNamePropertyAccess, isLiteralToken, isLiteralType, isModifierFlagSet, isModuleBody, isModuleName, isModuleReference, isNamedDeclarationWithName, isNamedImportBindings, isNamedImportsOrExports, isNamespaceBody, isNamespaceDeclaration, isNeverKeyword, isNodeFlagSet, isNullKeyword, isNullLiteral, isNumberKeyword, isNumberLiteralType, isNumericOrStringLikeLiteral, isNumericPropertyName, isObjectBindingOrAssignmentElement, isObjectBindingOrAssignmentPattern, isObjectFlagSet, isObjectKeyword, isObjectType, isObjectTypeDeclaration, isOutKeyword, isOverrideKeyword, isParameterPropertyModifier, isPrivateKeyword, isPropertyAccessEntityNameExpression, isPropertyNameLiteral, isPropertyReadonlyInType, isProtectedKeyword, isPseudoLiteralToken, isPublicKeyword, isQuestionDotToken, isQuestionToken, isReadonlyKeyword, isSignatureDeclaration, isStaticKeyword, isStrictCompilerOptionEnabled, isStringKeyword, isStringLiteralType, isStringMappingType, isSubstitutionType, isSuperElementAccessExpression, isSuperExpression, isSuperKeyword, isSuperProperty, isSuperPropertyAccessExpression, isSymbolFlagSet, isSymbolKeyword, isSyntaxList, isTemplateLiteralType, isThenableType, isThisExpression, isThisKeyword, isTrueKeyword, isTrueLiteral, isTrueLiteralType, isTupleType, isTupleTypeReference, isTypeFlagSet, isTypeOnlyCompatibleAliasDeclaration, isTypeParameter, isTypeReference, isTypeReferenceType, isTypeVariable, isUndefinedKeyword, isUnionOrIntersectionType, isUnionOrIntersectionTypeNode, isUnionType, isUniqueESSymbolType, isUnknownKeyword, isValidPropertyAccess, isVariableLikeDeclaration, isVoidKeyword, iterateComments, iterateTokens, symbolHasReadonlyDeclaration, typeConstituents, typeIsLiteral, typeParts, unionConstituents, unionTypeParts };
