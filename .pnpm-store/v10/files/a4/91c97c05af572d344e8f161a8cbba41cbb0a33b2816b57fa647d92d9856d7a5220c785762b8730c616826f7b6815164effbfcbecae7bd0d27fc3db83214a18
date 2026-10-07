// This file is auto-generated! Do not modify it directly.
// Run `yarn gulp bundle-dts` to re-generate it.
/* eslint-disable @typescript-eslint/consistent-type-imports, @typescript-eslint/no-redundant-type-constituents */
import { File, Expression } from '@babel/types';

declare class Position {
    line: number;
    column: number;
    index: number;
    constructor(line: number, col: number, index: number);
}

type SyntaxPlugin = "flow" | "typescript" | "jsx" | "pipelineOperator" | "placeholders";
type ParseErrorCode = "BABEL_PARSER_SYNTAX_ERROR" | "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
interface ParseErrorSpecification<ErrorDetails> {
    code: ParseErrorCode;
    reasonCode: string;
    syntaxPlugin?: SyntaxPlugin;
    missingPlugin?: string | string[];
    loc: Position;
    details: ErrorDetails;
    pos: number;
}
type ParseError$1<ErrorDetails> = SyntaxError & ParseErrorSpecification<ErrorDetails>;

type BABEL_8_BREAKING = false;
type IF_BABEL_7<V> = false extends BABEL_8_BREAKING ? V : never;

type Plugin$1 =
  | "asyncDoExpressions"
  | IF_BABEL_7<"asyncGenerators">
  | IF_BABEL_7<"bigInt">
  | IF_BABEL_7<"classPrivateMethods">
  | IF_BABEL_7<"classPrivateProperties">
  | IF_BABEL_7<"classProperties">
  | IF_BABEL_7<"classStaticBlock">
  | IF_BABEL_7<"decimal">
  | "decorators-legacy"
  | "deferredImportEvaluation"
  | "decoratorAutoAccessors"
  | "destructuringPrivate"
  | IF_BABEL_7<"deprecatedImportAssert">
  | "doExpressions"
  | IF_BABEL_7<"dynamicImport">
  | IF_BABEL_7<"explicitResourceManagement">
  | "exportDefaultFrom"
  | IF_BABEL_7<"exportNamespaceFrom">
  | "flow"
  | "flowComments"
  | "functionBind"
  | "functionSent"
  | "importMeta"
  | "jsx"
  | IF_BABEL_7<"jsonStrings">
  | IF_BABEL_7<"logicalAssignment">
  | IF_BABEL_7<"importAssertions">
  | IF_BABEL_7<"importReflection">
  | "moduleBlocks"
  | IF_BABEL_7<"moduleStringNames">
  | IF_BABEL_7<"nullishCoalescingOperator">
  | IF_BABEL_7<"numericSeparator">
  | IF_BABEL_7<"objectRestSpread">
  | IF_BABEL_7<"optionalCatchBinding">
  | IF_BABEL_7<"optionalChaining">
  | "partialApplication"
  | "placeholders"
  | IF_BABEL_7<"privateIn">
  | IF_BABEL_7<"regexpUnicodeSets">
  | "sourcePhaseImports"
  | "throwExpressions"
  | IF_BABEL_7<"topLevelAwait">
  | "v8intrinsic"
  | ParserPluginWithOptions[0];

type ParserPluginWithOptions =
  | ["decorators", DecoratorsPluginOptions]
  | ["discardBinding", { syntaxType: "void" }]
  | ["estree", { classFeatures?: boolean }]
  | IF_BABEL_7<["importAttributes", { deprecatedAssertSyntax: boolean }]>
  | IF_BABEL_7<["moduleAttributes", { version: "may-2020" }]>
  | ["optionalChainingAssign", { version: "2023-07" }]
  | ["pipelineOperator", PipelineOperatorPluginOptions]
  | ["recordAndTuple", RecordAndTuplePluginOptions]
  | ["flow", FlowPluginOptions]
  | ["typescript", TypeScriptPluginOptions];

type PluginConfig = Plugin$1 | ParserPluginWithOptions;

interface DecoratorsPluginOptions {
  decoratorsBeforeExport?: boolean;
  allowCallParenthesized?: boolean;
}

interface PipelineOperatorPluginOptions {
  proposal: BABEL_8_BREAKING extends false
    ? "minimal" | "fsharp" | "hack" | "smart"
    : "fsharp" | "hack";
  topicToken?: "%" | "#" | "@@" | "^^" | "^";
}

interface RecordAndTuplePluginOptions {
  syntaxType: "bar" | "hash";
}

type FlowPluginOptions = BABEL_8_BREAKING extends true
  ? {
      all?: boolean;
      enums?: boolean;
    }
  : {
      all?: boolean;
    };

interface TypeScriptPluginOptions {
  dts?: boolean;
  disallowAmbiguousJSXLike?: boolean;
}

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
     * The default is false in Babel 7 and true in Babel 8
     * Set this to true to parse it as an `ImportExpression` node.
     * Otherwise `import(foo)` is parsed as `CallExpression(Import, [Identifier(foo)])`.
     */
    createImportExpressions?: boolean;
}

type ParserOptions = Partial<Options>;
type ParseError = ParseError$1<object>;
type ParseResult<Result extends File | Expression = File> = Result & {
    comments: File["comments"];
    errors: null | ParseError[];
    tokens?: File["tokens"];
};
/**
 * Parse the provided code as an entire ECMAScript program.
 */
declare function parse(input: string, options?: ParserOptions): ParseResult<File>;
declare function parseExpression(input: string, options?: ParserOptions): ParseResult<Expression>;

declare const tokTypes: {
  // todo(flow->ts) real token type
  [name: string]: any;
};

export { DecoratorsPluginOptions, FlowPluginOptions, ParseError, ParseResult, ParserOptions, PluginConfig as ParserPlugin, ParserPluginWithOptions, PipelineOperatorPluginOptions, RecordAndTuplePluginOptions, TypeScriptPluginOptions, parse, parseExpression, tokTypes };
