import * as _babel_types from '@babel/types';
import { File, Expression } from '@babel/types';
export { Expression, File } from '@babel/types';

declare const UnparenthesizedPipeBodyDescriptions: Set<"AssignmentExpression" | "ArrowFunctionExpression" | "ConditionalExpression" | "YieldExpression">;
type GetSetMemberType<T extends Set<any>> = T extends Set<infer M> ? M : unknown;
type UnparenthesizedPipeBodyTypes = GetSetMemberType<typeof UnparenthesizedPipeBodyDescriptions>;
declare const _default$4: {
    PipeTopicRequiresHackPipes: string;
    PipeTopicUnbound: string;
    PipeTopicUnconfiguredToken: ({ token }: {
        token: string;
    }) => string;
    PipeTopicUnused: string;
    PipeUnparenthesizedBody: ({ type }: {
        type: UnparenthesizedPipeBodyTypes;
    }) => string;
    PipelineUnparenthesized: string;
};

declare class Position {
    line: number;
    column: number;
    index: number;
    constructor(line: number, col: number, index?: number);
}
declare class SourceLocation {
    start: Position;
    end: Position;
    filename: string | undefined;
    identifierName: string | undefined | null;
    constructor(start: Position, end?: Position);
}

declare const _default$3: {
    ImportMetaOutsideModule: {
        message: string;
        code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
    };
    ImportOutsideModule: {
        message: string;
        code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
    };
};
//# sourceMappingURL=module-errors.d.ts.map

type LValAncestor = {
    type: "UpdateExpression";
    prefix: boolean;
} | {
    type: "ArrayPattern" | "AssignmentExpression" | "CatchClause" | "ForOfStatement" | "FormalParameters" | "ForInStatement" | "ForStatement" | "ImportSpecifier" | "ImportNamespaceSpecifier" | "ImportDefaultSpecifier" | "ParenthesizedExpression" | "ObjectPattern" | "RestElement" | "VariableDeclarator";
};
declare const _default$2: {
    AccessorIsGenerator: ({ kind }: {
        kind: "get" | "set";
    }) => string;
    ArgumentsInClass: string;
    AsyncFunctionInSingleStatementContext: string;
    AwaitBindingIdentifier: string;
    AwaitBindingIdentifierInStaticBlock: string;
    AwaitExpressionFormalParameter: string;
    AwaitUsingNotInAsyncContext: string;
    AwaitNotInAsyncContext: string;
    BadGetterArity: string;
    BadSetterArity: string;
    BadSetterRestParameter: string;
    ConstructorClassField: string;
    ConstructorClassPrivateField: string;
    ConstructorIsAccessor: string;
    ConstructorIsAsync: string;
    ConstructorIsGenerator: string;
    DeclarationMissingInitializer: ({ kind, }: {
        kind: "await using" | "const" | "destructuring" | "using";
    }) => string;
    DecoratorAbstractMethod: string;
    DecoratorArgumentsOutsideParentheses: string;
    DecoratorsBeforeAfterExport: string;
    DecoratorConstructor: string;
    DecoratorSemicolon: string;
    DecoratorStaticBlock: string;
    DeferImportRequiresNamespace: string;
    DeletePrivateField: string;
    DestructureNamedImport: string;
    DuplicateConstructor: string;
    DuplicateDefaultExport: string;
    DuplicateExport: ({ exportName }: {
        exportName: string;
    }) => string;
    DuplicateProto: string;
    DuplicateRegExpFlags: string;
    ElementAfterRest: string;
    EscapedCharNotAnIdentifier: string;
    ExportBindingIsString: ({ localName, exportName, }: {
        localName: string;
        exportName: string;
    }) => string;
    ExportDefaultFromAsIdentifier: string;
    ForInOfLoopInitializer: ({ type, }: {
        type: "ForInStatement" | "ForOfStatement";
    }) => string;
    ForInUsing: string;
    ForOfAsync: string;
    ForOfLet: string;
    GeneratorInSingleStatementContext: string;
    IllegalBreakContinue: ({ type, }: {
        type: "BreakStatement" | "ContinueStatement";
    }) => string;
    IllegalLanguageModeDirective: string;
    IllegalReturn: string;
    ImportBindingIsString: ({ importName }: {
        importName: string;
    }) => string;
    ImportCallArity: string;
    ImportCallNotNewExpression: string;
    ImportCallSpreadArgument: string;
    IncompatibleRegExpUVFlags: string;
    InvalidBigIntLiteral: string;
    InvalidCodePoint: string;
    InvalidCoverDiscardElement: string;
    InvalidCoverInitializedName: string;
    InvalidDigit: ({ radix }: {
        radix: number;
    }) => string;
    InvalidEscapeSequence: string;
    InvalidEscapeSequenceTemplate: string;
    InvalidEscapedReservedWord: ({ reservedWord }: {
        reservedWord: string;
    }) => string;
    InvalidIdentifier: ({ identifierName }: {
        identifierName: string;
    }) => string;
    InvalidLhs: ({ ancestor }: {
        ancestor: LValAncestor;
    }) => string;
    InvalidLhsBinding: ({ ancestor }: {
        ancestor: LValAncestor;
    }) => string;
    InvalidLhsOptionalChaining: ({ ancestor }: {
        ancestor: LValAncestor;
    }) => string;
    InvalidNumber: string;
    InvalidOrMissingExponent: string;
    InvalidOrUnexpectedToken: ({ unexpected }: {
        unexpected: string;
    }) => string;
    InvalidParenthesizedAssignment: string;
    InvalidPrivateFieldResolution: ({ identifierName, }: {
        identifierName: string;
    }) => string;
    InvalidPropertyBindingPattern: string;
    InvalidRestAssignmentPattern: string;
    LabelRedeclaration: ({ labelName }: {
        labelName: string;
    }) => string;
    LetInLexicalBinding: string;
    LineTerminatorBeforeArrow: string;
    MalformedRegExpFlags: string;
    MissingClassName: string;
    MissingEqInAssignment: string;
    MissingSemicolon: string;
    MissingPlugin: ({ missingPlugin }: {
        missingPlugin: [string];
    }) => string;
    MissingOneOfPlugins: ({ missingPlugin }: {
        missingPlugin: string[];
    }) => string;
    MissingUnicodeEscape: string;
    MixingCoalesceWithLogical: string;
    ModuleAttributeInvalidValue: string;
    ModuleAttributesWithDuplicateKeys: ({ key }: {
        key: string;
    }) => string;
    ModuleExportNameHasLoneSurrogate: ({ surrogateCharCode, }: {
        surrogateCharCode: number;
    }) => string;
    ModuleExportUndefined: ({ localName }: {
        localName: string;
    }) => string;
    MultipleDefaultsInSwitch: string;
    NewlineAfterThrow: string;
    NoCatchOrFinally: string;
    NumberIdentifier: string;
    NumericSeparatorInEscapeSequence: string;
    ObsoleteAwaitStar: string;
    OptionalChainingNoNew: string;
    OptionalChainingNoTemplate: string;
    OverrideOnConstructor: string;
    ParamDupe: string;
    PatternHasAccessor: string;
    PatternHasMethod: string;
    PrivateInExpectedIn: ({ identifierName }: {
        identifierName: string;
    }) => string;
    PrivateNameRedeclaration: ({ identifierName }: {
        identifierName: string;
    }) => string;
    RestTrailingComma: string;
    SloppyFunction: string;
    SloppyFunctionAnnexB: string;
    SourcePhaseImportRequiresDefault: string;
    StaticPrototype: string;
    SuperNotAllowed: string;
    SuperPrivateField: string;
    TrailingDecorator: string;
    UnexpectedArgumentPlaceholder: string;
    UnexpectedDigitAfterHash: string;
    UnexpectedImportExport: string;
    UnexpectedKeyword: ({ keyword }: {
        keyword: string;
    }) => string;
    UnexpectedLeadingDecorator: string;
    UnexpectedLexicalDeclaration: string;
    UnexpectedNewTarget: string;
    UnexpectedNumericSeparator: string;
    UnexpectedPrivateField: string;
    UnexpectedReservedWord: ({ reservedWord }: {
        reservedWord: string;
    }) => string;
    UnexpectedSuper: string;
    UnexpectedToken: ({ expected, unexpected, }: {
        expected?: string | null;
        unexpected?: string | null;
    }) => string;
    UnexpectedTokenUnaryExponentiation: string;
    UnexpectedUsingDeclaration: string;
    UnexpectedVoidPattern: string;
    UnsupportedBind: string;
    UnsupportedDecoratorExport: string;
    UnsupportedDefaultExport: string;
    UnsupportedImport: string;
    UnsupportedMetaProperty: ({ target, onlyValidPropertyName, }: {
        target: string;
        onlyValidPropertyName: string;
    }) => string;
    UnsupportedParameterDecorator: string;
    UnsupportedPropertyDecorator: string;
    UnsupportedSuper: string;
    UnterminatedComment: string;
    UnterminatedRegExp: string;
    UnterminatedString: string;
    UnterminatedTemplate: string;
    UsingDeclarationExport: string;
    UsingDeclarationHasBindingPattern: string;
    VarRedeclaration: ({ identifierName }: {
        identifierName: string;
    }) => string;
    VoidPatternCatchClauseParam: string;
    VoidPatternInitializer: string;
    YieldBindingIdentifier: string;
    YieldInParameter: string;
    YieldNotInGeneratorFunction: string;
    ZeroDigitNumericSeparator: string;
};

declare const _default$1: {
    StrictDelete: string;
    StrictEvalArguments: ({ referenceName }: {
        referenceName: string;
    }) => string;
    StrictEvalArgumentsBinding: ({ bindingName }: {
        bindingName: string;
    }) => string;
    StrictFunction: string;
    StrictNumericEscape: string;
    StrictOctalLiteral: string;
    StrictWith: string;
};
//# sourceMappingURL=strict-mode-errors.d.ts.map

declare const _default: {
    ParseExpressionEmptyInput: string;
    ParseExpressionExpectsEOF: ({ unexpected }: {
        unexpected: number;
    }) => string;
};
//# sourceMappingURL=parse-expression-errors.d.ts.map

declare class TokContext {
    constructor(token: string, preserveSpace?: boolean);
    token: string;
    preserveSpace: boolean;
}

type TokenOptions = {
    keyword?: string;
    beforeExpr?: boolean;
    startsExpr?: boolean;
    rightAssociative?: boolean;
    isLoop?: boolean;
    isAssign?: boolean;
    prefix?: boolean;
    postfix?: boolean;
    binop?: number | null;
};
type TokenType = number;
declare class ExportedTokenType {
    label: string;
    keyword: string | undefined | null;
    beforeExpr: boolean;
    startsExpr: boolean;
    rightAssociative: boolean;
    isLoop: boolean;
    isAssign: boolean;
    prefix: boolean;
    postfix: boolean;
    binop: number | undefined | null;
    constructor(label: string, conf?: TokenOptions);
}

declare const enum LoopLabelKind {
    Loop = 1,
    Switch = 2
}
declare class State {
    flags: number;
    accessor strict: boolean;
    startIndex: number;
    curLine: number;
    lineStart: number;
    startLoc: Position;
    endLoc: Position;
    init({ strictMode, sourceType, startIndex, startLine, startColumn, }: OptionsWithDefaults): void;
    errors: ParseError[];
    noArrowAt: number[];
    noArrowParamsConversionAt: number[];
    /**
     * Track whether the current start is the start of an AssignmentExpression production.
     * The ArrowFunctionExpression and AsyncArrowFunctionExpression productions can only be
     * parsed if this is true.
     */
    accessor canStartArrow: boolean;
    accessor inType: boolean;
    accessor noAnonFunctionType: boolean;
    accessor hasFlowComment: boolean;
    accessor isAmbientContext: boolean;
    accessor inAbstractClass: boolean;
    accessor inDisallowConditionalTypesContext: boolean;
    accessor inConditionalConsequent: boolean;
    accessor inHackPipelineBody: boolean;
    accessor seenTopicReference: boolean;
    labels: {
        kind: LoopLabelKind | null;
        name?: string | null;
        statementStart?: number;
    }[];
    commentsLen: number;
    commentStack: CommentWhitespace[];
    pos: number;
    type: TokenType;
    value: any;
    start: number;
    end: number;
    lastTokEndLoc: Position | null;
    lastTokStartLoc: Position | null;
    context: TokContext[];
    accessor canStartJSXElement: boolean;
    accessor containsEsc: boolean;
    firstInvalidTemplateEscapePos: null | Position;
    accessor hasTopLevelAwait: boolean;
    strictErrors: Map<number, [ParseErrorConstructor<object>, Position]>;
    tokensLength: number;
    /**
     * When we add a new property, we must manually update the `clone` method
     * @see State#clone
     */
    curPosition(): Position;
    clone(): State;
}

interface CommentBase {
    type: "CommentBlock" | "CommentLine";
    value: string;
    start?: number | undefined;
    end?: number | undefined;
    loc?: SourceLocation | undefined;
}
interface CommentBlock extends CommentBase {
    type: "CommentBlock";
}
interface CommentLine extends CommentBase {
    type: "CommentLine";
}
type Comment = CommentBlock | CommentLine;
interface BaseNode {
    leadingComments?: Comment[] | null;
    innerComments?: Comment[] | null;
    trailingComments?: Comment[] | null;
    start?: number | null;
    end?: number | null;
    loc?: SourceLocation | null;
    range?: [number, number];
    extra?: Record<string, unknown>;
}
type ESTreeNode = ESTreeClassElement | ESTreeExpression | EstreePrivateIdentifier | EstreeProperty | EstreeRegExpLiteral;
type ESTreeClassElement = EstreeAccessorProperty | EstreeMethodDefinition | EstreePropertyDefinition | EstreeTSAbstractMethodDefinition | EstreeTSAbstractPropertyDefinition | EstreeTSAbstractAccessorProperty;
type ESTreeLiteral = EstreeLiteral | EstreeBigIntLiteral;
type ESTreeExpression = EstreeChainExpression | EstreeImportExpression | ESTreeLiteral | EstreeTSEmptyBodyFunctionExpression;
type Node = _babel_types.Node | ESTreeNode | TSTypeCastExpression;
type Accessibility = "public" | "protected" | "private";
type VarianceAnnotations = "in" | "out";
/**
 * TSTypeCastExpression is not a valid TS production, the parser
 * generates such code so that it can cast it to a valid pattern or
 * throw an error
 */
interface TSTypeCastExpression extends BaseNode {
    type: "TSTypeCastExpression";
    expression: _babel_types.Expression;
    typeAnnotation: _babel_types.TSTypeAnnotation;
}
interface EstreeLiteral extends BaseNode {
    type: "Literal";
    value: any;
    raw: any;
}
interface EstreeRegExpLiteralRegex {
    pattern: string;
    flags: string;
}
interface EstreeRegExpLiteral extends EstreeLiteral {
    regex: EstreeRegExpLiteralRegex;
}
interface EstreeBigIntLiteral extends EstreeLiteral {
    value: number | null;
    bigint: string;
}
interface EstreeProperty extends BaseNode {
    type: "Property";
    method: boolean;
    shorthand: boolean;
    key: _babel_types.Expression | EstreePrivateIdentifier;
    computed: boolean;
    value: _babel_types.Expression;
    decorators: _babel_types.Decorator[];
    kind?: "get" | "set" | "init";
    variance?: _babel_types.Variance | null;
    optional?: boolean;
}
interface EstreeMethodDefinitionBase extends BaseNode {
    static: boolean;
    key: _babel_types.Expression;
    computed: boolean;
    decorators: _babel_types.Decorator[];
    kind?: "get" | "set" | "method";
    accessibility?: Accessibility;
    override?: boolean;
    optional?: boolean;
}
interface EstreeMethodDefinition extends EstreeMethodDefinitionBase {
    type: "MethodDefinition";
    value: _babel_types.FunctionExpression;
    variance?: _babel_types.Variance | null;
}
interface EstreeImportExpression extends BaseNode {
    type: "ImportExpression";
    source: _babel_types.Expression;
    options?: _babel_types.Expression | null;
}
interface EstreePrivateIdentifier extends BaseNode {
    type: "PrivateIdentifier";
    name: string;
}
interface EstreePropertyDefinitionBase extends BaseNode {
    static: boolean;
    key: _babel_types.Expression | EstreePrivateIdentifier;
    computed: boolean;
    accessibility?: Accessibility;
    override?: boolean;
    optional?: boolean;
    declare?: boolean;
    decorators?: _babel_types.Decorator[];
    definite?: boolean;
    readonly?: boolean;
    typeAnnotation?: _babel_types.TSTypeAnnotation | null;
}
interface EstreePropertyDefinition extends EstreePropertyDefinitionBase {
    type: "PropertyDefinition";
    value: _babel_types.Expression;
}
interface EstreeAccessorProperty extends EstreePropertyDefinitionBase {
    type: "AccessorProperty";
    value: _babel_types.Expression;
}
interface EstreeChainExpression extends BaseNode {
    type: "ChainExpression";
    expression: _babel_types.Expression;
}
interface DeclarationBase extends BaseNode {
    declare?: boolean;
}
interface HasDecorators extends BaseNode {
    decorators?: _babel_types.Decorator[];
}
interface TypeParameterDeclarationBase extends BaseNode {
    params: (_babel_types.TypeParameter | _babel_types.TSTypeParameter)[];
}
interface TypeAnnotationBase extends BaseNode {
    typeAnnotation: _babel_types.Node;
}
interface BodilessFunctionOrMethodBase extends HasDecorators {
    id: _babel_types.Identifier | undefined | null;
    params: (_babel_types.Pattern | _babel_types.TSParameterProperty)[];
    generator: boolean;
    async: boolean;
    expression: boolean;
    typeParameters?: TypeParameterDeclarationBase | null;
    returnType?: TypeAnnotationBase | null;
}
interface EstreeTSEmptyBodyFunctionExpression extends BodilessFunctionOrMethodBase, DeclarationBase {
    type: "TSEmptyBodyFunctionExpression";
    body: null;
}
interface EstreeTSAbstractMethodDefinition extends EstreeMethodDefinitionBase {
    type: "TSAbstractMethodDefinition";
    value: EstreeTSEmptyBodyFunctionExpression;
}
interface EstreeTSAbstractPropertyDefinition extends EstreePropertyDefinitionBase {
    type: "TSAbstractPropertyDefinition";
    value: null;
}
interface EstreeTSAbstractAccessorProperty extends EstreePropertyDefinitionBase {
    type: "TSAbstractAccessorProperty";
    value: null;
}

type Plugin$1 =
  | "asyncDoExpressions"
  | "decorators"
  | "decorators-legacy"
  | "decoratorAutoAccessors"
  | "deferredImportEvaluation"
  | "destructuringPrivate"
  | "doExpressions"
  | "exportDefaultFrom"
  | "flow"
  | "flowComments"
  | "functionBind"
  | "functionSent"
  | "importMeta"
  | "jsx"
  | "moduleBlocks"
  | "placeholders"
  | "sourcePhaseImports"
  | "throwExpressions"
  | "v8intrinsic"
  | ParserPluginWithOptions[0];

type ParserPluginWithOptions =
  | ["discardBinding", { syntaxType: "void" }]
  | ["estree", { classFeatures?: boolean }]
  | ["optionalChainingAssign", { version: "2023-07" }]
  | ["partialApplication", PartialApplicationPluginOptions]
  | ["pipelineOperator", PipelineOperatorPluginOptions]
  | ["flow", FlowPluginOptions]
  | ["typescript", TypeScriptPluginOptions];

type PluginConfig = Plugin$1 | ParserPluginWithOptions;

interface PartialApplicationPluginOptions {
  version: "2018-07";
}

interface PipelineOperatorPluginOptions {
  proposal: "fsharp" | "hack";
  topicToken?: "%" | "#" | "@@" | "^^" | "^";
}

interface FlowPluginOptions {
  all?: boolean;
}

interface TypeScriptPluginOptions {
  dts?: boolean;
  disallowAmbiguousJSXLike?: boolean;
}

/**
 * A whitespace token containing comments
 */
type CommentWhitespace = {
    /**
     * the start of the whitespace token.
     */
    start: number;
    /**
     * the end of the whitespace token.
     */
    end: number;
    /**
     * the containing comments
     */
    comments: Comment[];
    /**
     * the immediately preceding AST node of the whitespace token
     */
    leadingNode: Node | null;
    /**
     * the immediately following AST node of the whitespace token
     */
    trailingNode: Node | null;
    /**
     * the innermost AST node containing the whitespace with minimal size (|end - start|)
     */
    containingNode: Node | null;
};

declare class Token {
    constructor(state: State);
    type: TokenType;
    value: any;
    start: number;
    end: number;
    loc: SourceLocation;
}

declare const JsxErrorTemplates: {
    AttributeIsEmpty: string;
    MissingClosingTagElement: ({ openingTagName }: {
        openingTagName: string;
    }) => string;
    MissingClosingTagFragment: string;
    UnexpectedSequenceExpression: string;
    UnexpectedToken: ({ unexpected, HTMLEntity, }: {
        unexpected: string;
        HTMLEntity: string;
    }) => string;
    UnsupportedJsxValue: string;
    UnterminatedJsxContent: string;
    UnwrappedAdjacentJSXElements: string;
};

type TsModifier = "readonly" | "abstract" | "declare" | "static" | "override" | "const" | Accessibility | VarianceAnnotations;
declare const TSErrorTemplates: {
    AbstractMethodHasImplementation: ({ methodName }: {
        methodName: string;
    }) => string;
    AbstractPropertyHasInitializer: ({ propertyName, }: {
        propertyName: string;
    }) => string;
    AccessorCannotBeOptional: string;
    AccessorCannotDeclareThisParameter: string;
    AccessorCannotHaveTypeParameters: string;
    ClassMethodHasDeclare: string;
    ClassMethodHasReadonly: string;
    ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: string;
    ConstructorHasTypeParameters: string;
    DeclareAccessor: ({ kind }: {
        kind: "get" | "set";
    }) => string;
    DeclareClassFieldHasInitializer: string;
    DeclareFunctionHasImplementation: string;
    DuplicateAccessibilityModifier: ({ modifier, }: {
        modifier: Accessibility;
    }) => string;
    DuplicateModifier: ({ modifier }: {
        modifier: TsModifier;
    }) => string;
    EmptyHeritageClauseType: ({ token }: {
        token: "extends" | "implements";
    }) => string;
    EmptyTypeArguments: string;
    EmptyTypeParameters: string;
    ExpectedAmbientAfterExportDeclare: string;
    ImportAliasHasImportType: string;
    IncompatibleModifiers: ({ modifiers, }: {
        modifiers: [TsModifier, TsModifier];
    }) => string;
    IndexSignatureHasAbstract: string;
    IndexSignatureHasAccessibility: ({ modifier, }: {
        modifier: Accessibility;
    }) => string;
    IndexSignatureHasDeclare: string;
    IndexSignatureHasOverride: string;
    IndexSignatureHasStatic: string;
    InitializerNotAllowedInAmbientContext: string;
    InlineModuleDeclarationMustUseString: string;
    InvalidHeritageClauseType: ({ token }: {
        token: "extends" | "implements";
    }) => string;
    InvalidModifierOnAwaitUsingDeclaration: (modifier: TsModifier) => string;
    InvalidModifierOnTypeMember: ({ modifier }: {
        modifier: TsModifier;
    }) => string;
    InvalidModifierOnTypeParameter: ({ modifier }: {
        modifier: TsModifier;
    }) => string;
    InvalidModifierOnTypeParameterPositions: ({ modifier, }: {
        modifier: TsModifier;
    }) => string;
    InvalidModifierOnUsingDeclaration: (modifier: TsModifier) => string;
    InvalidModifiersOrder: ({ orderedModifiers, }: {
        orderedModifiers: [TsModifier, TsModifier];
    }) => string;
    InvalidPropertyAccessAfterInstantiationExpression: string;
    InvalidTupleMemberLabel: string;
    MissingInterfaceName: string;
    NonAbstractClassHasAbstractMethod: string;
    NonClassMethodPropertyHasAbstractModifier: string;
    OptionalTypeBeforeRequired: string;
    OverrideNotInSubClass: string;
    PatternIsOptional: string;
    PrivateElementHasAbstract: string;
    PrivateElementHasAccessibility: ({ modifier, }: {
        modifier: Accessibility;
    }) => string;
    ReadonlyForMethodSignature: string;
    ReservedArrowTypeParam: string;
    ReservedTypeAssertion: string;
    SetAccessorCannotHaveOptionalParameter: string;
    SetAccessorCannotHaveRestParameter: string;
    SetAccessorCannotHaveReturnType: string;
    SingleTypeParameterWithoutTrailingComma: ({ typeParameterName, }: {
        typeParameterName: string;
    }) => string;
    StaticBlockCannotHaveModifier: string;
    TupleOptionalAfterType: string;
    TypeAnnotationAfterAssign: string;
    TypeImportCannotSpecifyDefaultAndNamed: string;
    TypeModifierIsUsedInTypeExports: string;
    TypeModifierIsUsedInTypeImports: string;
    UnexpectedParameterModifier: string;
    UnexpectedReadonly: string;
    UnexpectedTypeAnnotation: string;
    UnexpectedTypeCastInParameter: string;
    UnsupportedImportTypeArgument: string;
    UnsupportedParameterPropertyKind: string;
    UnsupportedSignatureParameterKind: ({ type }: {
        type: string;
    }) => string;
    UsingDeclarationInAmbientContext: (kind: "using" | "await using") => string;
};

declare const FlowErrorTemplates: {
    AmbiguousConditionalArrow: string;
    AmbiguousDeclareModuleKind: string;
    AssignReservedType: ({ reservedType }: {
        reservedType: string;
    }) => string;
    DeclareClassElement: string;
    DeclareClassFieldInitializer: string;
    DuplicateDeclareModuleExports: string;
    EnumBooleanMemberNotInitialized: ({ memberName, enumName, }: {
        memberName: string;
        enumName: string;
    }) => string;
    EnumDuplicateMemberName: ({ memberName, enumName, }: {
        memberName: string;
        enumName: string;
    }) => string;
    EnumInconsistentMemberValues: ({ enumName }: {
        enumName: string;
    }) => string;
    EnumInvalidExplicitType: ({ invalidEnumType, enumName, }: {
        invalidEnumType: string;
        enumName: string;
    }) => string;
    EnumInvalidExplicitTypeUnknownSupplied: ({ enumName, }: {
        enumName: string;
    }) => string;
    EnumInvalidMemberInitializerPrimaryType: ({ enumName, memberName, explicitType, }: {
        enumName: string;
        memberName: string;
        explicitType: EnumExplicitType;
    }) => string;
    EnumInvalidMemberInitializerSymbolType: ({ enumName, memberName, }: {
        enumName: string;
        memberName: string;
        explicitType: EnumExplicitType;
    }) => string;
    EnumInvalidMemberInitializerUnknownType: ({ enumName, memberName, }: {
        enumName: string;
        memberName: string;
        explicitType: EnumExplicitType;
    }) => string;
    EnumInvalidMemberName: ({ enumName, memberName, suggestion, }: {
        enumName: string;
        memberName: string;
        suggestion: string;
    }) => string;
    EnumNumberMemberNotInitialized: ({ enumName, memberName, }: {
        enumName: string;
        memberName: string;
    }) => string;
    EnumStringMemberInconsistentlyInitialized: ({ enumName, }: {
        enumName: string;
    }) => string;
    GetterMayNotHaveThisParam: string;
    ImportTypeShorthandOnlyInPureImport: string;
    InexactInsideExact: string;
    InexactInsideNonObject: string;
    InexactVariance: string;
    InvalidNonTypeImportInDeclareModule: string;
    MissingTypeParamDefault: string;
    NestedDeclareModule: string;
    NestedFlowComment: string;
    PatternIsOptional: {
        message: string;
    };
    SetterMayNotHaveThisParam: string;
    SpreadVariance: string;
    ThisParamAnnotationRequired: string;
    ThisParamBannedInConstructor: string;
    ThisParamMayNotBeOptional: string;
    ThisParamMustBeFirst: string;
    ThisParamNoDefault: string;
    TypeBeforeInitializer: string;
    TypeCastInPattern: string;
    UnexpectedExplicitInexactInObject: string;
    UnexpectedReservedType: ({ reservedType }: {
        reservedType: string;
    }) => string;
    UnexpectedReservedUnderscore: string;
    UnexpectedSpaceBetweenModuloChecks: string;
    UnexpectedSpreadType: string;
    UnexpectedSubtractionOperand: string;
    UnexpectedTokenAfterTypeParameter: string;
    UnexpectedTypeParameterBeforeAsyncArrowFunction: string;
    UnsupportedDeclareExportKind: ({ unsupportedExportKind, suggestion, }: {
        unsupportedExportKind: string;
        suggestion: string;
    }) => string;
    UnsupportedStatementInDeclareModule: string;
    UnterminatedFlowComment: string;
};
type EnumExplicitType = null | "boolean" | "number" | "string" | "symbol";

type ParseError = SyntaxError & {
    missingPlugin?: string | string[];
    loc: Position;
    pos: number;
} & ErrorInfo;
type ParseErrorConstructor<ErrorDetails> = (loc: Position, pos: number, details: ErrorDetails) => ParseError;
type ToMessage<ErrorDetails> = (self: ErrorDetails) => string;
type ErrorToObject<T> = {
    [K in keyof T]: {
        code: T[K] extends {
            code: string;
        } ? T[K]["code"] : "BABEL_PARSER_SYNTAX_ERROR";
        reasonCode: K;
        details: T[K] extends {
            message: string | ToMessage<any>;
        } ? T[K]["message"] extends ToMessage<any> ? Parameters<T[K]["message"]>[0] : object : T[K] extends ToMessage<any> ? Parameters<T[K]>[0] : object;
    };
};
type __ExtractMe = typeof _default$3 & typeof _default$2 & typeof _default$1 & typeof _default & typeof _default$4 & typeof TSErrorTemplates & typeof FlowErrorTemplates & typeof JsxErrorTemplates & typeof PlaceholderErrorTemplates;
type __PatchMe = never & Decompress<ErrorInfoCompressed>;
type ErrorsObjects = ErrorToObject<__ExtractMe>;
type ErrorInfo = __PatchMe | ErrorsObjects[keyof ErrorsObjects];
type ErrorInfoCompressed = {};
type Decompress<T extends object> = {
    [K in keyof T]: T[K] extends [infer Param, infer Code] ? {
        code: Code;
        reasonCode: K;
        details: Param;
    } : T[K] extends [infer Param] ? {
        code: "BABEL_PARSER_SYNTAX_ERROR";
        reasonCode: K;
        details: Param;
    } : T[K] extends [] ? {
        code: "BABEL_PARSER_SYNTAX_ERROR";
        reasonCode: K;
        details: object;
    } : never;
};

declare const PlaceholderErrorTemplates: {
    ClassNameIsRequired: string;
    UnexpectedSpace: string;
};

type Plugin = PluginConfig;

type SourceType = "script" | "commonjs" | "module" | "unambiguous";
interface Options {
    /**
     * By default, import and export declarations can only appear at a program's top level.
     * Setting this option to true allows them anywhere where a statement is allowed.
     */
    allowImportExportEverywhere?: boolean;
    /**
     * By default, await use is not allowed outside of an async function.
     * Set this to true to accept such code.
     */
    allowAwaitOutsideFunction?: boolean;
    /**
     * By default, a return statement at the top level raises an error.
     * Set this to true to accept such code.
     */
    allowReturnOutsideFunction?: boolean;
    /**
     * By default, new.target use is not allowed outside of a function or class.
     * Set this to true to accept such code.
     */
    allowNewTargetOutsideFunction?: boolean;
    /**
     * By default, super calls are not allowed outside of a method.
     * Set this to true to accept such code.
     */
    allowSuperOutsideMethod?: boolean;
    /**
     * By default, exported identifiers must refer to a declared variable.
     * Set this to true to allow export statements to reference undeclared variables.
     */
    allowUndeclaredExports?: boolean;
    /**
     * By default, yield use is not allowed outside of a generator function.
     * Set this to true to accept such code.
     */
    allowYieldOutsideFunction?: boolean;
    /**
     * By default, Babel parser JavaScript code according to Annex B syntax.
     * Set this to `false` to disable such behavior.
     */
    annexB?: boolean;
    /**
     * By default, Babel attaches comments to adjacent AST nodes.
     * When this option is set to false, comments are not attached.
     * It can provide up to 30% performance improvement when the input code has many comments.
     * @babel/eslint-parser will set it for you.
     * It is not recommended to use attachComment: false with Babel transform,
     * as doing so removes all the comments in output code, and renders annotations such as
     * /* istanbul ignore next *\/ nonfunctional.
     */
    attachComment?: boolean;
    /**
     * By default, Babel always throws an error when it finds some invalid code.
     * When this option is set to true, it will store the parsing error and
     * try to continue parsing the invalid input file.
     */
    errorRecovery?: boolean;
    /**
     * Indicate the mode the code should be parsed in.
     * Can be one of "script", "commonjs", "module", or "unambiguous". Defaults to "script".
     * "unambiguous" will make @babel/parser attempt to guess, based on the presence
     * of ES6 import or export statements.
     * Files with ES6 imports and exports are considered "module" and are otherwise "script".
     *
     * Use "commonjs" to parse code that is intended to be run in a CommonJS environment such as Node.js.
     */
    sourceType?: SourceType;
    /**
     * Correlate output AST nodes with their source filename.
     * Useful when generating code and source maps from the ASTs of multiple input files.
     */
    sourceFilename?: string;
    /**
     * By default, all source indexes start from 0.
     * You can provide a start index to alternatively start with.
     * Useful for integration with other source tools.
     */
    startIndex?: number;
    /**
     * By default, the first line of code parsed is treated as line 1.
     * You can provide a line number to alternatively start with.
     * Useful for integration with other source tools.
     */
    startLine?: number;
    /**
     * By default, the parsed code is treated as if it starts from line 1, column 0.
     * You can provide a column number to alternatively start with.
     * Useful for integration with other source tools.
     */
    startColumn?: number;
    /**
     * Array containing the plugins that you want to enable.
     */
    plugins?: Plugin[];
    /**
     * Should the parser work in strict mode.
     * Defaults to true if sourceType === 'module'. Otherwise, false.
     */
    strictMode?: boolean;
    /**
     * Adds a ranges property to each node: [node.start, node.end]
     */
    ranges?: boolean;
    /**
     * Adds a locations property to each node: [node.loc]
     */
    locations?: boolean | "packed";
    /**
     * Adds all parsed tokens to a tokens property on the File node.
     */
    tokens?: boolean;
    /**
     * By default, the parser adds information about parentheses by setting
     * `extra.parenthesized` to `true` as needed.
     * When this option is `true` the parser creates `ParenthesizedExpression`
     * AST nodes instead of using the `extra` property.
     */
    createParenthesizedExpressions?: boolean;
    /**
     * By default, the parser parses import expressions as an `ImportExpression` node.
     * Set this to false to parse it as `CallExpression(Import, [Identifier(foo)])`.
     */
    createImportExpressions?: boolean;
}
type KeepOptionalKeys = "sourceFilename" | "strictMode";
type OptionsWithDefaults = Omit<Required<Options>, KeepOptionalKeys> & Pick<Options, KeepOptionalKeys>;

type ParserOptions = Partial<Options>;
type ParseResult<Result extends File | Expression = File> = Result & {
    comments: File["comments"];
    errors: ParseError[];
    tokens?: File["tokens"];
};
/**
 * Parse the provided code as an entire ECMAScript program.
 */
declare function parse(input: string, options?: ParserOptions): ParseResult<File>;
declare function parseExpression(input: string, options?: ParserOptions): ParseResult<Expression>;
declare const tokTypes: Record<string, ExportedTokenType>;
declare function getLine(locData: Uint32Array, pos: number): number;
declare function getColumn(locData: Uint32Array, pos: number): number;

export { type FlowPluginOptions, type ParseError, type ParseResult, type ParserOptions, type PluginConfig as ParserPlugin, type PipelineOperatorPluginOptions, Token, type TypeScriptPluginOptions, getColumn, getLine, parse, parseExpression, tokTypes };
