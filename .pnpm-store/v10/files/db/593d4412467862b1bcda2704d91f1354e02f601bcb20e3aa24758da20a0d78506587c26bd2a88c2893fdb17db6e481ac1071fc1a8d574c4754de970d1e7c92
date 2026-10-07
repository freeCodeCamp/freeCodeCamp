import type { JSONSchema4 } from '../json-schema';
import type { ParserServices, TSESTree } from '../ts-estree';
import type { AST } from './AST';
import type { FlatConfig } from './Config';
import type { Linter } from './Linter';
import type { Scope } from './Scope';
import type { SourceCode } from './SourceCode';
export type RuleRecommendation = 'recommended' | 'strict' | 'stylistic';
export interface RuleRecommendationAcrossConfigs<Options extends readonly unknown[]> {
    recommended?: true;
    strict: Partial<Options>;
}
export interface RuleMetaDataDocs {
    /**
     * Concise description of the rule.
     */
    description: string;
    /**
     * The URL of the rule's docs.
     */
    url?: string;
    /**
     * Mark this rule as feature-frozen.
     */
    frozen?: boolean;
}
export interface ExternalSpecifier {
    /**
     * Name of the referenced plugin / rule.
     */
    name?: string;
    /**
     * URL pointing to documentation for the plugin / rule.
     */
    url?: string;
}
export interface ReplacedByInfo {
    /**
     * General message presented to the user, e.g. how to replace the rule
     */
    message?: string;
    /**
     * URL to more information about this replacement in general
     */
    url?: string;
    /**
     * Name should be "eslint" if the replacement is an ESLint core rule. Omit
     * the property if the replacement is in the same plugin.
     */
    plugin?: ExternalSpecifier;
    /**
     * Name and documentation of the replacement rule
     */
    rule?: ExternalSpecifier;
}
export interface DeprecatedInfo {
    /**
     * General message presented to the user, e.g. for the key rule why the rule
     * is deprecated or for info how to replace the rule.
     */
    message?: string;
    /**
     * URL to more information about this deprecation in general.
     */
    url?: string;
    /**
     * An empty array explicitly states that there is no replacement.
     */
    replacedBy?: ReplacedByInfo[];
    /**
     * The package version since when the rule is deprecated (should use full
     * semver without a leading "v").
     */
    deprecatedSince?: string;
    /**
     * The estimated version when the rule is removed (probably the next major
     * version). null means the rule is "frozen" (will be available but will not
     * be changed).
     */
    availableUntil?: string | null;
}
export interface RuleMetaData<MessageIds extends string, PluginDocs = unknown, Options extends readonly unknown[] = []> {
    /**
     * True if the rule is deprecated, false otherwise
     */
    deprecated?: boolean | DeprecatedInfo;
    /**
     * Documentation for the rule
     */
    docs?: PluginDocs & RuleMetaDataDocs;
    /**
     * The fixer category. Omit if there is no fixer
     */
    fixable?: 'code' | 'whitespace';
    /**
     * Specifies whether rules can return suggestions. Omit if there is no suggestions
     */
    hasSuggestions?: boolean;
    /**
     * A map of messages which the rule can report.
     * The key is the messageId, and the string is the parameterised error string.
     * See: https://eslint.org/docs/developer-guide/working-with-rules#messageids
     */
    messages: Record<MessageIds, string>;
    /**
     * The name of the rule this rule was replaced by, if it was deprecated.
     *
     * @deprecated since eslint 9.21.0, in favor of `RuleMetaData#deprecated.replacedBy`
     */
    replacedBy?: readonly string[];
    /**
     * The options schema. Supply an empty array if there are no options.
     */
    schema: JSONSchema4 | readonly JSONSchema4[];
    /**
     * The type of rule.
     * - `"problem"` means the rule is identifying code that either will cause an error or may cause a confusing behavior. Developers should consider this a high priority to resolve.
     * - `"suggestion"` means the rule is identifying something that could be done in a better way but no errors will occur if the code isn’t changed.
     * - `"layout"` means the rule cares primarily about whitespace, semicolons, commas, and parentheses, all the parts of the program that determine how the code looks rather than how it executes. These rules work on parts of the code that aren’t specified in the AST.
     */
    type: 'layout' | 'problem' | 'suggestion';
    /**
     * Specifies default options for the rule. If present, any user-provided options in their config will be merged on top of them recursively.
     * This merging will be applied directly to `context.options`.
     * If you want backwards-compatible support for earlier ESLint version, consider using the top-level `defaultOptions` instead.
     *
     * since ESLint 9.15.0
     */
    defaultOptions?: Options;
}
export interface RuleMetaDataWithDocs<MessageIds extends string, PluginDocs = unknown, Options extends readonly unknown[] = []> extends RuleMetaData<MessageIds, PluginDocs, Options> {
    /**
     * Documentation for the rule
     */
    docs: PluginDocs & RuleMetaDataDocs;
}
export interface RuleFix {
    range: Readonly<AST.Range>;
    text: string;
}
export interface RuleFixer {
    insertTextAfter(nodeOrToken: TSESTree.Node | TSESTree.Token, text: string): RuleFix;
    insertTextAfterRange(range: Readonly<AST.Range>, text: string): RuleFix;
    insertTextBefore(nodeOrToken: TSESTree.Node | TSESTree.Token, text: string): RuleFix;
    insertTextBeforeRange(range: Readonly<AST.Range>, text: string): RuleFix;
    remove(nodeOrToken: TSESTree.Node | TSESTree.Token): RuleFix;
    removeRange(range: Readonly<AST.Range>): RuleFix;
    replaceText(nodeOrToken: TSESTree.Node | TSESTree.Token, text: string): RuleFix;
    replaceTextRange(range: Readonly<AST.Range>, text: string): RuleFix;
}
export interface SuggestionReportDescriptor<MessageIds extends string> extends Omit<ReportDescriptorBase<MessageIds>, 'fix'> {
    readonly fix: ReportFixFunction;
}
export type ReportFixFunction = (fixer: RuleFixer) => IterableIterator<RuleFix> | readonly RuleFix[] | RuleFix | null;
export type ReportSuggestionArray<MessageIds extends string> = SuggestionReportDescriptor<MessageIds>[];
export type ReportDescriptorMessageData = Readonly<Record<string, unknown>>;
interface ReportDescriptorBase<MessageIds extends string> {
    /**
     * The parameters for the message string associated with `messageId`.
     */
    readonly data?: ReportDescriptorMessageData;
    /**
     * The fixer function.
     */
    readonly fix?: ReportFixFunction | null;
    /**
     * The messageId which is being reported.
     */
    readonly messageId: MessageIds;
}
interface ReportDescriptorWithSuggestion<MessageIds extends string> extends ReportDescriptorBase<MessageIds> {
    /**
     * 6.7's Suggestions API
     */
    readonly suggest?: Readonly<ReportSuggestionArray<MessageIds>> | null;
}
interface ReportDescriptorNodeOptionalLoc {
    /**
     * An override of the location of the report
     */
    readonly loc?: Readonly<TSESTree.Position> | Readonly<TSESTree.SourceLocation>;
    /**
     * The Node or AST Token which the report is being attached to
     */
    readonly node: TSESTree.Node | TSESTree.Token;
}
interface ReportDescriptorLocOnly {
    /**
     * An override of the location of the report
     */
    loc: Readonly<TSESTree.Position> | Readonly<TSESTree.SourceLocation>;
}
export type ReportDescriptor<MessageIds extends string> = (ReportDescriptorLocOnly | ReportDescriptorNodeOptionalLoc) & ReportDescriptorWithSuggestion<MessageIds>;
/**
 * Plugins can add their settings using declaration
 * merging against this interface.
 */
export interface SharedConfigurationSettings {
    [name: string]: unknown;
}
export interface RuleContext<MessageIds extends string, Options extends readonly unknown[]> {
    /**
     * The rule ID.
     */
    id: string;
    /**
     * The language options configured for this run
     */
    languageOptions: FlatConfig.LanguageOptions & {
        parserOptions: FlatConfig.ParserOptions;
    };
    /**
     * An array of the configured options for this rule.
     * This array does not include the rule severity.
     */
    options: Options;
    /**
     * The parser options configured for this run
     * @deprecated This was deprecated in ESLint 9 and removed in ESLint 10.
     */
    parserOptions: Linter.ParserOptions;
    /**
     * The name of the parser from configuration, if in eslintrc (legacy) config.
     * @deprecated This was deprecated in ESLint 9 and removed in ESLint 10.
     */
    parserPath: string | undefined;
    /**
     * An object containing parser-provided services for rules
     *
     * @deprecated in favor of `SourceCode#parserServices`
     */
    parserServices?: ParserServices;
    /**
     * The shared settings from configuration.
     * We do not have any shared settings in this plugin.
     */
    settings: SharedConfigurationSettings;
    /**
     * Returns an array of the ancestors of the currently-traversed node, starting at
     * the root of the AST and continuing through the direct parent of the current node.
     * This array does not include the currently-traversed node itself.
     *
     * @deprecated in favor of `SourceCode#getAncestors`
     */
    getAncestors(): TSESTree.Node[];
    /**
     * Returns a list of variables declared by the given node.
     * This information can be used to track references to variables.
     *
     * @deprecated in favor of `SourceCode#getDeclaredVariables`
     */
    getDeclaredVariables(node: TSESTree.Node): readonly Scope.Variable[];
    /**
     * Returns the current working directory passed to Linter.
     * It is a path to a directory that should be considered as the current working directory.
     * @deprecated in favor of `RuleContext#cwd`
     */
    getCwd(): string;
    /**
     * The current working directory passed to Linter.
     * It is a path to a directory that should be considered as the current working directory.
     */
    cwd: string;
    /**
     * Returns the filename associated with the source.
     *
     * @deprecated in favor of `RuleContext#filename`
     */
    getFilename(): string;
    /**
     * The filename associated with the source.
     */
    filename: string;
    /**
     * Returns the full path of the file on disk without any code block information (unlike `getFilename()`).
     * @deprecated in favor of `RuleContext#physicalFilename`
     */
    getPhysicalFilename(): string;
    /**
     * The full path of the file on disk without any code block information (unlike `filename`).
     */
    physicalFilename: string;
    /**
     * Returns the scope of the currently-traversed node.
     * This information can be used track references to variables.
     *
     * @deprecated in favor of `SourceCode#getScope`
     */
    getScope(): Scope.Scope;
    /**
     * Returns a SourceCode object that you can use to work with the source that
     * was passed to ESLint.
     *
     * @deprecated in favor of `RuleContext#sourceCode`
     */
    getSourceCode(): Readonly<SourceCode>;
    /**
     * A SourceCode object that you can use to work with the source that
     * was passed to ESLint.
     */
    sourceCode: Readonly<SourceCode>;
    /**
     * Marks a variable with the given name in the current scope as used.
     * This affects the no-unused-vars rule.
     *
     * @deprecated in favor of `SourceCode#markVariableAsUsed`
     */
    markVariableAsUsed(name: string): boolean;
    /**
     * Reports a problem in the code.
     */
    report(descriptor: ReportDescriptor<MessageIds>): void;
}
/**
 * Part of the code path analysis feature of ESLint:
 * https://eslint.org/docs/latest/extend/code-path-analysis
 *
 * These are used in the `onCodePath*` methods. (Note that the `node` parameter
 * of these methods is intentionally omitted.)
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/issues/6993
 */
export interface CodePath {
    /** Code paths of functions this code path contains. */
    childCodePaths: CodePath[];
    /**
     * Segments of the current traversal position.
     *
     * @deprecated
     */
    currentSegments: CodePathSegment[];
    /** The final segments which includes both returned and thrown. */
    finalSegments: CodePathSegment[];
    /**
     * A unique string. Respective rules can use `id` to save additional
     * information for each code path.
     */
    id: string;
    initialSegment: CodePathSegment;
    /** The final segments which includes only returned. */
    returnedSegments: CodePathSegment[];
    /** The final segments which includes only thrown. */
    thrownSegments: CodePathSegment[];
    /** The code path of the upper function/global scope. */
    upper: CodePath | null;
}
/**
 * Part of the code path analysis feature of ESLint:
 * https://eslint.org/docs/latest/extend/code-path-analysis
 *
 * These are used in the `onCodePath*` methods. (Note that the `node` parameter
 * of these methods is intentionally omitted.)
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/issues/6993
 */
export interface CodePathSegment {
    /**
     * A unique string. Respective rules can use `id` to save additional
     * information for each segment.
     */
    id: string;
    /**
     * The next segments. If forking, there are two or more. If final, there is
     * nothing.
     */
    nextSegments: CodePathSegment[];
    /**
     * The previous segments. If merging, there are two or more. If initial, there
     * is nothing.
     */
    prevSegments: CodePathSegment[];
    /**
     * A flag which shows whether it is reachable. This becomes `false` when
     * preceded by `return`, `throw`, `break`, or `continue`.
     */
    reachable: boolean;
}
/**
 * Part of the code path analysis feature of ESLint:
 * https://eslint.org/docs/latest/extend/code-path-analysis
 *
 * This type is unused in the `typescript-eslint` codebase since putting it on
 * the `nodeSelector` for `RuleListener` would break the existing definition.
 * However, it is exported here for the purposes of manual type-assertion.
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/issues/6993
 */
export type CodePathFunction = ((codePath: CodePath, node: TSESTree.Node) => void) | ((fromSegment: CodePathSegment, toSegment: CodePathSegment, node: TSESTree.Node) => void) | ((segment: CodePathSegment, node: TSESTree.Node) => void);
export type RuleFunction<T extends TSESTree.NodeOrTokenData = never> = (node: T) => void;
interface RuleListenerBaseSelectors {
    AccessorProperty?: RuleFunction<TSESTree.AccessorProperty>;
    ArrayExpression?: RuleFunction<TSESTree.ArrayExpression>;
    ArrayPattern?: RuleFunction<TSESTree.ArrayPattern>;
    ArrowFunctionExpression?: RuleFunction<TSESTree.ArrowFunctionExpression>;
    AssignmentExpression?: RuleFunction<TSESTree.AssignmentExpression>;
    AssignmentPattern?: RuleFunction<TSESTree.AssignmentPattern>;
    AwaitExpression?: RuleFunction<TSESTree.AwaitExpression>;
    BinaryExpression?: RuleFunction<TSESTree.BinaryExpression>;
    BlockStatement?: RuleFunction<TSESTree.BlockStatement>;
    BreakStatement?: RuleFunction<TSESTree.BreakStatement>;
    CallExpression?: RuleFunction<TSESTree.CallExpression>;
    CatchClause?: RuleFunction<TSESTree.CatchClause>;
    ChainExpression?: RuleFunction<TSESTree.ChainExpression>;
    ClassBody?: RuleFunction<TSESTree.ClassBody>;
    ClassDeclaration?: RuleFunction<TSESTree.ClassDeclaration>;
    ClassExpression?: RuleFunction<TSESTree.ClassExpression>;
    ConditionalExpression?: RuleFunction<TSESTree.ConditionalExpression>;
    ContinueStatement?: RuleFunction<TSESTree.ContinueStatement>;
    DebuggerStatement?: RuleFunction<TSESTree.DebuggerStatement>;
    Decorator?: RuleFunction<TSESTree.Decorator>;
    DoWhileStatement?: RuleFunction<TSESTree.DoWhileStatement>;
    EmptyStatement?: RuleFunction<TSESTree.EmptyStatement>;
    ExportAllDeclaration?: RuleFunction<TSESTree.ExportAllDeclaration>;
    ExportDefaultDeclaration?: RuleFunction<TSESTree.ExportDefaultDeclaration>;
    ExportNamedDeclaration?: RuleFunction<TSESTree.ExportNamedDeclaration>;
    ExportSpecifier?: RuleFunction<TSESTree.ExportSpecifier>;
    ExpressionStatement?: RuleFunction<TSESTree.ExpressionStatement>;
    ForInStatement?: RuleFunction<TSESTree.ForInStatement>;
    ForOfStatement?: RuleFunction<TSESTree.ForOfStatement>;
    ForStatement?: RuleFunction<TSESTree.ForStatement>;
    FunctionDeclaration?: RuleFunction<TSESTree.FunctionDeclaration>;
    FunctionExpression?: RuleFunction<TSESTree.FunctionExpression>;
    Identifier?: RuleFunction<TSESTree.Identifier>;
    IfStatement?: RuleFunction<TSESTree.IfStatement>;
    ImportAttribute?: RuleFunction<TSESTree.ImportAttribute>;
    ImportDeclaration?: RuleFunction<TSESTree.ImportDeclaration>;
    ImportDefaultSpecifier?: RuleFunction<TSESTree.ImportDefaultSpecifier>;
    ImportExpression?: RuleFunction<TSESTree.ImportExpression>;
    ImportNamespaceSpecifier?: RuleFunction<TSESTree.ImportNamespaceSpecifier>;
    ImportSpecifier?: RuleFunction<TSESTree.ImportSpecifier>;
    JSXAttribute?: RuleFunction<TSESTree.JSXAttribute>;
    JSXClosingElement?: RuleFunction<TSESTree.JSXClosingElement>;
    JSXClosingFragment?: RuleFunction<TSESTree.JSXClosingFragment>;
    JSXElement?: RuleFunction<TSESTree.JSXElement>;
    JSXEmptyExpression?: RuleFunction<TSESTree.JSXEmptyExpression>;
    JSXExpressionContainer?: RuleFunction<TSESTree.JSXExpressionContainer>;
    JSXFragment?: RuleFunction<TSESTree.JSXFragment>;
    JSXIdentifier?: RuleFunction<TSESTree.JSXIdentifier>;
    JSXMemberExpression?: RuleFunction<TSESTree.JSXMemberExpression>;
    JSXNamespacedName?: RuleFunction<TSESTree.JSXNamespacedName>;
    JSXOpeningElement?: RuleFunction<TSESTree.JSXOpeningElement>;
    JSXOpeningFragment?: RuleFunction<TSESTree.JSXOpeningFragment>;
    JSXSpreadAttribute?: RuleFunction<TSESTree.JSXSpreadAttribute>;
    JSXSpreadChild?: RuleFunction<TSESTree.JSXSpreadChild>;
    JSXText?: RuleFunction<TSESTree.JSXText>;
    LabeledStatement?: RuleFunction<TSESTree.LabeledStatement>;
    Literal?: RuleFunction<TSESTree.Literal>;
    LogicalExpression?: RuleFunction<TSESTree.LogicalExpression>;
    MemberExpression?: RuleFunction<TSESTree.MemberExpression>;
    MetaProperty?: RuleFunction<TSESTree.MetaProperty>;
    MethodDefinition?: RuleFunction<TSESTree.MethodDefinition>;
    NewExpression?: RuleFunction<TSESTree.NewExpression>;
    ObjectExpression?: RuleFunction<TSESTree.ObjectExpression>;
    ObjectPattern?: RuleFunction<TSESTree.ObjectPattern>;
    PrivateIdentifier?: RuleFunction<TSESTree.PrivateIdentifier>;
    Program?: RuleFunction<TSESTree.Program>;
    Property?: RuleFunction<TSESTree.Property>;
    PropertyDefinition?: RuleFunction<TSESTree.PropertyDefinition>;
    RestElement?: RuleFunction<TSESTree.RestElement>;
    ReturnStatement?: RuleFunction<TSESTree.ReturnStatement>;
    SequenceExpression?: RuleFunction<TSESTree.SequenceExpression>;
    SpreadElement?: RuleFunction<TSESTree.SpreadElement>;
    StaticBlock?: RuleFunction<TSESTree.StaticBlock>;
    Super?: RuleFunction<TSESTree.Super>;
    SwitchCase?: RuleFunction<TSESTree.SwitchCase>;
    SwitchStatement?: RuleFunction<TSESTree.SwitchStatement>;
    TaggedTemplateExpression?: RuleFunction<TSESTree.TaggedTemplateExpression>;
    TemplateElement?: RuleFunction<TSESTree.TemplateElement>;
    TemplateLiteral?: RuleFunction<TSESTree.TemplateLiteral>;
    ThisExpression?: RuleFunction<TSESTree.ThisExpression>;
    ThrowStatement?: RuleFunction<TSESTree.ThrowStatement>;
    TryStatement?: RuleFunction<TSESTree.TryStatement>;
    TSAbstractAccessorProperty?: RuleFunction<TSESTree.TSAbstractAccessorProperty>;
    TSAbstractKeyword?: RuleFunction<TSESTree.TSAbstractKeyword>;
    TSAbstractMethodDefinition?: RuleFunction<TSESTree.TSAbstractMethodDefinition>;
    TSAbstractPropertyDefinition?: RuleFunction<TSESTree.TSAbstractPropertyDefinition>;
    TSAnyKeyword?: RuleFunction<TSESTree.TSAnyKeyword>;
    TSArrayType?: RuleFunction<TSESTree.TSArrayType>;
    TSAsExpression?: RuleFunction<TSESTree.TSAsExpression>;
    TSAsyncKeyword?: RuleFunction<TSESTree.TSAsyncKeyword>;
    TSBigIntKeyword?: RuleFunction<TSESTree.TSBigIntKeyword>;
    TSBooleanKeyword?: RuleFunction<TSESTree.TSBooleanKeyword>;
    TSCallSignatureDeclaration?: RuleFunction<TSESTree.TSCallSignatureDeclaration>;
    TSClassImplements?: RuleFunction<TSESTree.TSClassImplements>;
    TSConditionalType?: RuleFunction<TSESTree.TSConditionalType>;
    TSConstructorType?: RuleFunction<TSESTree.TSConstructorType>;
    TSConstructSignatureDeclaration?: RuleFunction<TSESTree.TSConstructSignatureDeclaration>;
    TSDeclareFunction?: RuleFunction<TSESTree.TSDeclareFunction>;
    TSDeclareKeyword?: RuleFunction<TSESTree.TSDeclareKeyword>;
    TSEmptyBodyFunctionExpression?: RuleFunction<TSESTree.TSEmptyBodyFunctionExpression>;
    TSEnumBody?: RuleFunction<TSESTree.TSEnumBody>;
    TSEnumDeclaration?: RuleFunction<TSESTree.TSEnumDeclaration>;
    TSEnumMember?: RuleFunction<TSESTree.TSEnumMember>;
    TSExportAssignment?: RuleFunction<TSESTree.TSExportAssignment>;
    TSExportKeyword?: RuleFunction<TSESTree.TSExportKeyword>;
    TSExternalModuleReference?: RuleFunction<TSESTree.TSExternalModuleReference>;
    TSFunctionType?: RuleFunction<TSESTree.TSFunctionType>;
    TSImportEqualsDeclaration?: RuleFunction<TSESTree.TSImportEqualsDeclaration>;
    TSImportType?: RuleFunction<TSESTree.TSImportType>;
    TSIndexedAccessType?: RuleFunction<TSESTree.TSIndexedAccessType>;
    TSIndexSignature?: RuleFunction<TSESTree.TSIndexSignature>;
    TSInferType?: RuleFunction<TSESTree.TSInferType>;
    TSInstantiationExpression?: RuleFunction<TSESTree.TSInstantiationExpression>;
    TSInterfaceBody?: RuleFunction<TSESTree.TSInterfaceBody>;
    TSInterfaceDeclaration?: RuleFunction<TSESTree.TSInterfaceDeclaration>;
    TSInterfaceHeritage?: RuleFunction<TSESTree.TSInterfaceHeritage>;
    TSIntersectionType?: RuleFunction<TSESTree.TSIntersectionType>;
    TSIntrinsicKeyword?: RuleFunction<TSESTree.TSIntrinsicKeyword>;
    TSLiteralType?: RuleFunction<TSESTree.TSLiteralType>;
    TSMappedType?: RuleFunction<TSESTree.TSMappedType>;
    TSMethodSignature?: RuleFunction<TSESTree.TSMethodSignature>;
    TSModuleBlock?: RuleFunction<TSESTree.TSModuleBlock>;
    TSModuleDeclaration?: RuleFunction<TSESTree.TSModuleDeclaration>;
    TSNamedTupleMember?: RuleFunction<TSESTree.TSNamedTupleMember>;
    TSNamespaceExportDeclaration?: RuleFunction<TSESTree.TSNamespaceExportDeclaration>;
    TSNeverKeyword?: RuleFunction<TSESTree.TSNeverKeyword>;
    TSNonNullExpression?: RuleFunction<TSESTree.TSNonNullExpression>;
    TSNullKeyword?: RuleFunction<TSESTree.TSNullKeyword>;
    TSNumberKeyword?: RuleFunction<TSESTree.TSNumberKeyword>;
    TSObjectKeyword?: RuleFunction<TSESTree.TSObjectKeyword>;
    TSOptionalType?: RuleFunction<TSESTree.TSOptionalType>;
    TSParameterProperty?: RuleFunction<TSESTree.TSParameterProperty>;
    TSPrivateKeyword?: RuleFunction<TSESTree.TSPrivateKeyword>;
    TSPropertySignature?: RuleFunction<TSESTree.TSPropertySignature>;
    TSProtectedKeyword?: RuleFunction<TSESTree.TSProtectedKeyword>;
    TSPublicKeyword?: RuleFunction<TSESTree.TSPublicKeyword>;
    TSQualifiedName?: RuleFunction<TSESTree.TSQualifiedName>;
    TSReadonlyKeyword?: RuleFunction<TSESTree.TSReadonlyKeyword>;
    TSRestType?: RuleFunction<TSESTree.TSRestType>;
    TSSatisfiesExpression?: RuleFunction<TSESTree.TSSatisfiesExpression>;
    TSStaticKeyword?: RuleFunction<TSESTree.TSStaticKeyword>;
    TSStringKeyword?: RuleFunction<TSESTree.TSStringKeyword>;
    TSSymbolKeyword?: RuleFunction<TSESTree.TSSymbolKeyword>;
    TSTemplateLiteralType?: RuleFunction<TSESTree.TSTemplateLiteralType>;
    TSThisType?: RuleFunction<TSESTree.TSThisType>;
    TSTupleType?: RuleFunction<TSESTree.TSTupleType>;
    TSTypeAliasDeclaration?: RuleFunction<TSESTree.TSTypeAliasDeclaration>;
    TSTypeAnnotation?: RuleFunction<TSESTree.TSTypeAnnotation>;
    TSTypeAssertion?: RuleFunction<TSESTree.TSTypeAssertion>;
    TSTypeLiteral?: RuleFunction<TSESTree.TSTypeLiteral>;
    TSTypeOperator?: RuleFunction<TSESTree.TSTypeOperator>;
    TSTypeParameter?: RuleFunction<TSESTree.TSTypeParameter>;
    TSTypeParameterDeclaration?: RuleFunction<TSESTree.TSTypeParameterDeclaration>;
    TSTypeParameterInstantiation?: RuleFunction<TSESTree.TSTypeParameterInstantiation>;
    TSTypePredicate?: RuleFunction<TSESTree.TSTypePredicate>;
    TSTypeQuery?: RuleFunction<TSESTree.TSTypeQuery>;
    TSTypeReference?: RuleFunction<TSESTree.TSTypeReference>;
    TSUndefinedKeyword?: RuleFunction<TSESTree.TSUndefinedKeyword>;
    TSUnionType?: RuleFunction<TSESTree.TSUnionType>;
    TSUnknownKeyword?: RuleFunction<TSESTree.TSUnknownKeyword>;
    TSVoidKeyword?: RuleFunction<TSESTree.TSVoidKeyword>;
    UnaryExpression?: RuleFunction<TSESTree.UnaryExpression>;
    UpdateExpression?: RuleFunction<TSESTree.UpdateExpression>;
    VariableDeclaration?: RuleFunction<TSESTree.VariableDeclaration>;
    VariableDeclarator?: RuleFunction<TSESTree.VariableDeclarator>;
    WhileStatement?: RuleFunction<TSESTree.WhileStatement>;
    WithStatement?: RuleFunction<TSESTree.WithStatement>;
    YieldExpression?: RuleFunction<TSESTree.YieldExpression>;
}
type RuleListenerExitSelectors = {
    [K in keyof RuleListenerBaseSelectors as `${K}:exit`]: RuleListenerBaseSelectors[K];
};
type RuleListenerCatchAllBaseCase = Record<string, RuleFunction | undefined>;
export interface RuleListenerExtension {
}
export type RuleListener = RuleListenerBaseSelectors & RuleListenerCatchAllBaseCase & RuleListenerExitSelectors;
export interface RuleModule<MessageIds extends string, Options extends readonly unknown[] = [], Docs = unknown, ExtendedRuleListener extends RuleListener = RuleListener> {
    /**
     * Function which returns an object with methods that ESLint calls to “visit”
     * nodes while traversing the abstract syntax tree.
     */
    create(context: Readonly<RuleContext<MessageIds, Options>>): ExtendedRuleListener;
    /**
     * @deprecated Use meta.defaultOptions instead
     * Default options the rule will be run with
     */
    defaultOptions?: Options;
    /**
     * Metadata about the rule
     */
    meta: RuleMetaData<MessageIds, Docs, Options>;
    /**
     * Rule name
     */
    name?: string;
}
export type AnyRuleModule = RuleModule<string, readonly unknown[]>;
export interface RuleModuleWithMetaDocs<MessageIds extends string, Options extends readonly unknown[] = [], Docs = unknown, ExtendedRuleListener extends RuleListener = RuleListener> extends RuleModule<MessageIds, Options, Docs, ExtendedRuleListener> {
    /**
     * Metadata about the rule
     */
    meta: RuleMetaDataWithDocs<MessageIds, Docs, Options>;
}
export type AnyRuleModuleWithMetaDocs = RuleModuleWithMetaDocs<string, unknown[]>;
/**
 * A loose definition of the RuleModule type for use with configs. This type is
 * intended to relax validation of types so that we can have basic validation
 * without being overly strict about nitty gritty details matching.
 *
 * For example the plugin might be declared using an old version of our types or
 * they might use the DefinitelyTyped eslint types. Ultimately we don't need
 * super strict validation in a config - a loose shape match is "good enough" to
 * help validate the config is correct.
 *
 * @see {@link LooseParserModule}, {@link LooseProcessorModule}
 */
export type LooseRuleDefinition = LooseRuleCreateFunction | {
    create: LooseRuleCreateFunction;
    meta?: object | undefined;
};
export type LooseRuleCreateFunction = (context: any) => Record<string, Function | undefined>;
export type RuleCreateFunction<MessageIds extends string = never, Options extends readonly unknown[] = unknown[]> = (context: Readonly<RuleContext<MessageIds, Options>>) => RuleListener;
export type AnyRuleCreateFunction = RuleCreateFunction<string, readonly unknown[]>;
export {};
