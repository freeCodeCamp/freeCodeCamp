import { File, Expression } from "@babel/types";

// This file is auto-generated! Do not modify it directly.
// Run `make bundle-babel-parser-dts` to re-generate it.
/* eslint-disable @typescript-eslint/consistent-type-imports, @typescript-eslint/no-redundant-type-constituents */

declare class Position {
  line: number;
  column: number;
  index: number;
  constructor(line: number, col: number, index?: number);
}
//# sourceMappingURL=module-errors.d.ts.map

type LValAncestor =
  | {
      type: "UpdateExpression";
      prefix: boolean;
    }
  | {
      type:
        | "ArrayPattern"
        | "AssignmentExpression"
        | "CatchClause"
        | "ForOfStatement"
        | "FormalParameters"
        | "ForInStatement"
        | "ForStatement"
        | "ImportSpecifier"
        | "ImportNamespaceSpecifier"
        | "ImportDefaultSpecifier"
        | "ParenthesizedExpression"
        | "ObjectPattern"
        | "RestElement"
        | "VariableDeclarator";
    };
//# sourceMappingURL=parse-expression-errors.d.ts.map

type Accessibility = "public" | "protected" | "private";
type VarianceAnnotations = "in" | "out";

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

type TsModifier =
  | "readonly"
  | "abstract"
  | "declare"
  | "static"
  | "override"
  | "const"
  | Accessibility
  | VarianceAnnotations;
type EnumExplicitType = null | "boolean" | "number" | "string" | "symbol";

type ParseError = SyntaxError & {
  missingPlugin?: string | string[];
  loc: Position;
  pos: number;
} & ErrorInfo;
type __PatchMe = Decompress<ErrorInfoCompressed>;
type ErrorInfo = __PatchMe | never;
type ErrorInfoCompressed = {
  ImportMetaOutsideModule: [object, "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"];
  ImportOutsideModule: [object, "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"];
  AccessorIsGenerator: [{ kind: "get" | "set" }];
  ArgumentsInClass: [];
  AsyncFunctionInSingleStatementContext: [];
  AwaitBindingIdentifier: [];
  AwaitBindingIdentifierInStaticBlock: [];
  AwaitExpressionFormalParameter: [];
  AwaitUsingNotInAsyncContext: [];
  AwaitNotInAsyncContext: [];
  BadGetterArity: [];
  BadSetterArity: [];
  BadSetterRestParameter: [];
  ConstructorClassField: [];
  ConstructorClassPrivateField: [];
  ConstructorIsAccessor: [];
  ConstructorIsAsync: [];
  ConstructorIsGenerator: [];
  DeclarationMissingInitializer: [
    { kind: "await using" | "const" | "destructuring" | "using" },
  ];
  DecoratorAbstractMethod: [];
  DecoratorArgumentsOutsideParentheses: [];
  DecoratorsBeforeAfterExport: [];
  DecoratorConstructor: [];
  DecoratorSemicolon: [];
  DecoratorStaticBlock: [];
  DeferImportRequiresNamespace: [];
  DeletePrivateField: [];
  DestructureNamedImport: [];
  DuplicateConstructor: [];
  DuplicateDefaultExport: [];
  DuplicateExport: [{ exportName: string }];
  DuplicateProto: [];
  DuplicateRegExpFlags: [];
  ElementAfterRest: [];
  EscapedCharNotAnIdentifier: [];
  ExportBindingIsString: [{ localName: string; exportName: string }];
  ExportDefaultFromAsIdentifier: [];
  ForInOfLoopInitializer: [{ type: "ForInStatement" | "ForOfStatement" }];
  ForInUsing: [];
  ForOfAsync: [];
  ForOfLet: [];
  GeneratorInSingleStatementContext: [];
  IllegalBreakContinue: [{ type: "BreakStatement" | "ContinueStatement" }];
  IllegalLanguageModeDirective: [];
  IllegalReturn: [];
  ImportBindingIsString: [{ importName: string }];
  ImportCallArity: [];
  ImportCallNotNewExpression: [];
  ImportCallSpreadArgument: [];
  IncompatibleRegExpUVFlags: [];
  InvalidBigIntLiteral: [];
  InvalidCodePoint: [];
  InvalidCoverDiscardElement: [];
  InvalidCoverInitializedName: [];
  InvalidDigit: [{ radix: number }];
  InvalidEscapeSequence: [];
  InvalidEscapeSequenceTemplate: [];
  InvalidEscapedReservedWord: [{ reservedWord: string }];
  InvalidIdentifier: [{ identifierName: string }];
  InvalidLhs: [{ ancestor: LValAncestor }];
  InvalidLhsBinding: [{ ancestor: LValAncestor }];
  InvalidLhsOptionalChaining: [{ ancestor: LValAncestor }];
  InvalidNumber: [];
  InvalidOrMissingExponent: [];
  InvalidOrUnexpectedToken: [{ unexpected: string }];
  InvalidParenthesizedAssignment: [];
  InvalidPrivateFieldResolution: [{ identifierName: string }];
  InvalidPropertyBindingPattern: [];
  InvalidRestAssignmentPattern: [];
  LabelRedeclaration: [{ labelName: string }];
  LetInLexicalBinding: [];
  LineTerminatorBeforeArrow: [];
  MalformedRegExpFlags: [];
  MissingClassName: [];
  MissingEqInAssignment: [];
  MissingSemicolon: [];
  MissingPlugin: [{ missingPlugin: [string] }];
  MissingOneOfPlugins: [{ missingPlugin: string[] }];
  MissingUnicodeEscape: [];
  MixingCoalesceWithLogical: [];
  ModuleAttributeInvalidValue: [];
  ModuleAttributesWithDuplicateKeys: [{ key: string }];
  ModuleExportNameHasLoneSurrogate: [{ surrogateCharCode: number }];
  ModuleExportUndefined: [{ localName: string }];
  MultipleDefaultsInSwitch: [];
  NewlineAfterThrow: [];
  NoCatchOrFinally: [];
  NumberIdentifier: [];
  NumericSeparatorInEscapeSequence: [];
  ObsoleteAwaitStar: [];
  OptionalChainingNoNew: [];
  OptionalChainingNoTemplate: [];
  OverrideOnConstructor: [];
  ParamDupe: [];
  PatternHasAccessor: [];
  PatternHasMethod: [];
  PrivateInExpectedIn: [{ identifierName: string }];
  PrivateNameRedeclaration: [{ identifierName: string }];
  RestTrailingComma: [];
  SloppyFunction: [];
  SloppyFunctionAnnexB: [];
  SourcePhaseImportRequiresDefault: [];
  StaticPrototype: [];
  SuperNotAllowed: [];
  SuperPrivateField: [];
  TrailingDecorator: [];
  UnexpectedArgumentPlaceholder: [];
  UnexpectedDigitAfterHash: [];
  UnexpectedImportExport: [];
  UnexpectedKeyword: [{ keyword: string }];
  UnexpectedLeadingDecorator: [];
  UnexpectedLexicalDeclaration: [];
  UnexpectedNewTarget: [];
  UnexpectedNumericSeparator: [];
  UnexpectedPrivateField: [];
  UnexpectedReservedWord: [{ reservedWord: string }];
  UnexpectedSuper: [];
  UnexpectedTokenUnaryExponentiation: [];
  UnexpectedUsingDeclaration: [];
  UnexpectedVoidPattern: [];
  UnsupportedBind: [];
  UnsupportedDecoratorExport: [];
  UnsupportedDefaultExport: [];
  UnsupportedImport: [];
  UnsupportedMetaProperty: [{ target: string; onlyValidPropertyName: string }];
  UnsupportedParameterDecorator: [];
  UnsupportedPropertyDecorator: [];
  UnsupportedSuper: [];
  UnterminatedComment: [];
  UnterminatedRegExp: [];
  UnterminatedString: [];
  UnterminatedTemplate: [];
  UsingDeclarationExport: [];
  UsingDeclarationHasBindingPattern: [];
  VarRedeclaration: [{ identifierName: string }];
  VoidPatternCatchClauseParam: [];
  VoidPatternInitializer: [];
  YieldBindingIdentifier: [];
  YieldInParameter: [];
  YieldNotInGeneratorFunction: [];
  ZeroDigitNumericSeparator: [];
  StrictDelete: [];
  StrictEvalArguments: [{ referenceName: string }];
  StrictEvalArgumentsBinding: [{ bindingName: string }];
  StrictFunction: [];
  StrictNumericEscape: [];
  StrictOctalLiteral: [];
  StrictWith: [];
  ParseExpressionEmptyInput: [];
  ParseExpressionExpectsEOF: [{ unexpected: number }];
  PipeTopicRequiresHackPipes: [];
  PipeTopicUnbound: [];
  PipeTopicUnconfiguredToken: [{ token: string }];
  PipeTopicUnused: [];
  PipeUnparenthesizedBody: [
    {
      type:
        | "AssignmentExpression"
        | "ArrowFunctionExpression"
        | "ConditionalExpression"
        | "YieldExpression";
    },
  ];
  PipelineUnparenthesized: [];
  AbstractMethodHasImplementation: [{ methodName: string }];
  AbstractPropertyHasInitializer: [{ propertyName: string }];
  AccessorCannotBeOptional: [];
  AccessorCannotDeclareThisParameter: [];
  AccessorCannotHaveTypeParameters: [];
  ClassMethodHasDeclare: [];
  ClassMethodHasReadonly: [];
  ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: [];
  ConstructorHasTypeParameters: [];
  DeclareAccessor: [{ kind: "get" | "set" }];
  DeclareClassFieldHasInitializer: [];
  DeclareFunctionHasImplementation: [];
  DuplicateAccessibilityModifier: [{ modifier: Accessibility }];
  DuplicateModifier: [{ modifier: TsModifier }];
  EmptyHeritageClauseType: [{ token: "extends" | "implements" }];
  EmptyTypeArguments: [];
  EmptyTypeParameters: [];
  ExpectedAmbientAfterExportDeclare: [];
  ImportAliasHasImportType: [];
  IncompatibleModifiers: [{ modifiers: [TsModifier, TsModifier] }];
  IndexSignatureHasAbstract: [];
  IndexSignatureHasAccessibility: [{ modifier: Accessibility }];
  IndexSignatureHasDeclare: [];
  IndexSignatureHasOverride: [];
  IndexSignatureHasStatic: [];
  InitializerNotAllowedInAmbientContext: [];
  InlineModuleDeclarationMustUseString: [];
  InvalidHeritageClauseType: [{ token: "extends" | "implements" }];
  InvalidModifierOnAwaitUsingDeclaration: [
    | "const"
    | Accessibility
    | "readonly"
    | "abstract"
    | "declare"
    | "static"
    | "override"
    | VarianceAnnotations,
  ];
  InvalidModifierOnTypeMember: [{ modifier: TsModifier }];
  InvalidModifierOnTypeParameter: [{ modifier: TsModifier }];
  InvalidModifierOnTypeParameterPositions: [{ modifier: TsModifier }];
  InvalidModifierOnUsingDeclaration: [
    | "const"
    | Accessibility
    | "readonly"
    | "abstract"
    | "declare"
    | "static"
    | "override"
    | VarianceAnnotations,
  ];
  InvalidModifiersOrder: [{ orderedModifiers: [TsModifier, TsModifier] }];
  InvalidPropertyAccessAfterInstantiationExpression: [];
  InvalidTupleMemberLabel: [];
  MissingInterfaceName: [];
  NonAbstractClassHasAbstractMethod: [];
  NonClassMethodPropertyHasAbstractModifier: [];
  OptionalTypeBeforeRequired: [];
  OverrideNotInSubClass: [];
  PrivateElementHasAbstract: [];
  PrivateElementHasAccessibility: [{ modifier: Accessibility }];
  ReadonlyForMethodSignature: [];
  ReservedArrowTypeParam: [];
  ReservedTypeAssertion: [];
  SetAccessorCannotHaveOptionalParameter: [];
  SetAccessorCannotHaveRestParameter: [];
  SetAccessorCannotHaveReturnType: [];
  SingleTypeParameterWithoutTrailingComma: [{ typeParameterName: string }];
  StaticBlockCannotHaveModifier: [];
  TupleOptionalAfterType: [];
  TypeAnnotationAfterAssign: [];
  TypeImportCannotSpecifyDefaultAndNamed: [];
  TypeModifierIsUsedInTypeExports: [];
  TypeModifierIsUsedInTypeImports: [];
  UnexpectedParameterModifier: [];
  UnexpectedReadonly: [];
  UnexpectedTypeAnnotation: [];
  UnexpectedTypeCastInParameter: [];
  UnsupportedImportTypeArgument: [];
  UnsupportedParameterPropertyKind: [];
  UnsupportedSignatureParameterKind: [{ type: string }];
  UsingDeclarationInAmbientContext: ["await using" | "using"];
  AmbiguousConditionalArrow: [];
  AmbiguousDeclareModuleKind: [];
  AssignReservedType: [{ reservedType: string }];
  DeclareClassElement: [];
  DeclareClassFieldInitializer: [];
  DuplicateDeclareModuleExports: [];
  EnumBooleanMemberNotInitialized: [{ memberName: string; enumName: string }];
  EnumDuplicateMemberName: [{ memberName: string; enumName: string }];
  EnumInconsistentMemberValues: [{ enumName: string }];
  EnumInvalidExplicitType: [{ invalidEnumType: string; enumName: string }];
  EnumInvalidExplicitTypeUnknownSupplied: [{ enumName: string }];
  EnumInvalidMemberInitializerPrimaryType: [
    { enumName: string; memberName: string; explicitType: EnumExplicitType },
  ];
  EnumInvalidMemberInitializerSymbolType: [
    { enumName: string; memberName: string; explicitType: EnumExplicitType },
  ];
  EnumInvalidMemberInitializerUnknownType: [
    { enumName: string; memberName: string; explicitType: EnumExplicitType },
  ];
  EnumInvalidMemberName: [
    { enumName: string; memberName: string; suggestion: string },
  ];
  EnumNumberMemberNotInitialized: [{ enumName: string; memberName: string }];
  EnumStringMemberInconsistentlyInitialized: [{ enumName: string }];
  GetterMayNotHaveThisParam: [];
  ImportTypeShorthandOnlyInPureImport: [];
  InexactInsideExact: [];
  InexactInsideNonObject: [];
  InexactVariance: [];
  InvalidNonTypeImportInDeclareModule: [];
  MissingTypeParamDefault: [];
  NestedDeclareModule: [];
  NestedFlowComment: [];
  SetterMayNotHaveThisParam: [];
  SpreadVariance: [];
  ThisParamAnnotationRequired: [];
  ThisParamBannedInConstructor: [];
  ThisParamMayNotBeOptional: [];
  ThisParamMustBeFirst: [];
  ThisParamNoDefault: [];
  TypeBeforeInitializer: [];
  TypeCastInPattern: [];
  UnexpectedExplicitInexactInObject: [];
  UnexpectedReservedType: [{ reservedType: string }];
  UnexpectedReservedUnderscore: [];
  UnexpectedSpaceBetweenModuloChecks: [];
  UnexpectedSpreadType: [];
  UnexpectedSubtractionOperand: [];
  UnexpectedTokenAfterTypeParameter: [];
  UnexpectedTypeParameterBeforeAsyncArrowFunction: [];
  UnsupportedDeclareExportKind: [
    { unsupportedExportKind: string; suggestion: string },
  ];
  UnsupportedStatementInDeclareModule: [];
  UnterminatedFlowComment: [];
  AttributeIsEmpty: [];
  MissingClosingTagElement: [{ openingTagName: string }];
  MissingClosingTagFragment: [];
  UnexpectedSequenceExpression: [];
  UnsupportedJsxValue: [];
  UnterminatedJsxContent: [];
  UnwrappedAdjacentJSXElements: [];
  ClassNameIsRequired: [];
  UnexpectedSpace: [];
};
type Decompress<T extends object> = {
  [K in keyof T]: T[K] extends [infer Param, infer Code]
    ? {
        code: Code;
        reasonCode: K;
        details: Param;
      }
    : T[K] extends [infer Param]
      ? {
          code: "BABEL_PARSER_SYNTAX_ERROR";
          reasonCode: K;
          details: Param;
        }
      : T[K] extends []
        ? {
            code: "BABEL_PARSER_SYNTAX_ERROR";
            reasonCode: K;
            details: object;
          }
        : never;
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

type ParserOptions = Partial<Options>;
type ParseResult<Result extends File | Expression = File> = Result & {
  comments: File["comments"];
  errors: ParseError[];
  tokens?: File["tokens"];
};
/**
 * Parse the provided code as an entire ECMAScript program.
 */
declare function parse(
  input: string,
  options?: ParserOptions
): ParseResult<File>;
declare function parseExpression(
  input: string,
  options?: ParserOptions
): ParseResult<Expression>;

declare const tokTypes: {
  // todo(flow->ts) real token type
  [name: string]: any;
};

export {
  type FlowPluginOptions,
  type ParseError,
  type ParseResult,
  type ParserOptions,
  type PluginConfig as ParserPlugin,
  type PipelineOperatorPluginOptions,
  type TypeScriptPluginOptions,
  parse,
  parseExpression,
  tokTypes,
};
