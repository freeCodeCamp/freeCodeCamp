import { ParserServices, TSESTree } from '../ts-estree';
import { ParserOptions as TSParserOptions } from './ParserOptions';
import { RuleCreateFunction, RuleFix, RuleModule, SharedConfigurationSettings } from './Rule';
import { Scope } from './Scope';
import { SourceCode } from './SourceCode';
declare class LinterBase {
    /**
     * Initialize the Linter.
     * @param config the config object
     */
    constructor(config?: Linter.LinterOptions);
    /**
     * Define a new parser module
     * @param parserId Name of the parser
     * @param parserModule The parser object
     */
    defineParser(parserId: string, parserModule: Linter.ParserModule): void;
    /**
     * Defines a new linting rule.
     * @param ruleId A unique rule identifier
     * @param ruleModule Function from context to object mapping AST node types to event handlers
     */
    defineRule<TMessageIds extends string, TOptions extends readonly unknown[]>(ruleId: string, ruleModule: RuleModule<TMessageIds, TOptions> | RuleCreateFunction): void;
    /**
     * Defines many new linting rules.
     * @param rulesToDefine map from unique rule identifier to rule
     */
    defineRules<TMessageIds extends string, TOptions extends readonly unknown[]>(rulesToDefine: Record<string, RuleModule<TMessageIds, TOptions> | RuleCreateFunction>): void;
    /**
     * Gets an object with all loaded rules.
     * @returns All loaded rules
     */
    getRules(): Map<string, RuleModule<string, unknown[]>>;
    /**
     * Gets the `SourceCode` object representing the parsed source.
     * @returns The `SourceCode` object.
     */
    getSourceCode(): SourceCode;
    /**
     * Verifies the text against the rules specified by the second argument.
     * @param textOrSourceCode The text to parse or a SourceCode object.
     * @param config An ESLintConfig instance to configure everything.
     * @param filenameOrOptions The optional filename of the file being checked.
     *        If this is not set, the filename will default to '<input>' in the rule context.
     *        If this is an object, then it has "filename", "allowInlineConfig", and some properties.
     * @returns The results as an array of messages or an empty array if no messages.
     */
    verify(textOrSourceCode: SourceCode | string, config: Linter.Config, filenameOrOptions?: string | Linter.VerifyOptions): Linter.LintMessage[];
    /**
     * Performs multiple autofix passes over the text until as many fixes as possible have been applied.
     * @param code The source text to apply fixes to.
     * @param config The ESLint config object to use.
     * @param options The ESLint options object to use.
     * @returns The result of the fix operation as returned from the SourceCodeFixer.
     */
    verifyAndFix(code: string, config: Linter.Config, options: Linter.FixOptions): Linter.FixReport;
    /**
     * The version from package.json.
     */
    readonly version: string;
    /**
     * The version from package.json.
     */
    static readonly version: string;
}
declare namespace Linter {
    export interface LinterOptions {
        /**
         * path to a directory that should be considered as the current working directory.
         */
        cwd?: string;
    }
    export type Severity = 0 | 1 | 2;
    export type SeverityString = 'off' | 'warn' | 'error';
    export type RuleLevel = Severity | SeverityString;
    export type RuleLevelAndOptions = [
        RuleLevel,
        ...unknown[]
    ];
    export type RuleEntry = RuleLevel | RuleLevelAndOptions;
    export type RulesRecord = Partial<Record<string, RuleEntry>>;
    export type GlobalVariableOption = 'readonly' | 'writable' | 'off' | boolean;
    interface BaseConfig {
        $schema?: string;
        /**
         * The environment settings.
         */
        env?: {
            [name: string]: boolean;
        };
        /**
         * The path to other config files or the package name of shareable configs.
         */
        extends?: string | string[];
        /**
         * The global variable settings.
         */
        globals?: {
            [name: string]: GlobalVariableOption;
        };
        /**
         * The flag that disables directive comments.
         */
        noInlineConfig?: boolean;
        /**
         * The override settings per kind of files.
         */
        overrides?: ConfigOverride[];
        /**
         * The path to a parser or the package name of a parser.
         */
        parser?: string;
        /**
         * The parser options.
         */
        parserOptions?: ParserOptions;
        /**
         * The plugin specifiers.
         */
        plugins?: string[];
        /**
         * The processor specifier.
         */
        processor?: string;
        /**
         * The flag to report unused `eslint-disable` comments.
         */
        reportUnusedDisableDirectives?: boolean;
        /**
         * The rule settings.
         */
        rules?: RulesRecord;
        /**
         * The shared settings.
         */
        settings?: SharedConfigurationSettings;
    }
    export interface ConfigOverride extends BaseConfig {
        excludedFiles?: string | string[];
        files: string | string[];
    }
    export interface Config extends BaseConfig {
        /**
         * The glob patterns that ignore to lint.
         */
        ignorePatterns?: string | string[];
        /**
         * The root flag.
         */
        root?: boolean;
    }
    export type ParserOptions = TSParserOptions;
    export interface VerifyOptions {
        /**
         * Allow/disallow inline comments' ability to change config once it is set. Defaults to true if not supplied.
         * Useful if you want to validate JS without comments overriding rules.
         */
        allowInlineConfig?: boolean;
        /**
         * if `true` then the linter doesn't make `fix` properties into the lint result.
         */
        disableFixes?: boolean;
        /**
         * the filename of the source code.
         */
        filename?: string;
        /**
         * the predicate function that selects adopt code blocks.
         */
        filterCodeBlock?: (filename: string, text: string) => boolean;
        /**
         * postprocessor for report messages.
         * If provided, this should accept an array of the message lists
         * for each code block returned from the preprocessor, apply a mapping to
         * the messages as appropriate, and return a one-dimensional array of
         * messages.
         */
        postprocess?: Processor['postprocess'];
        /**
         * preprocessor for source text.
         * If provided, this should accept a string of source text, and return an array of code blocks to lint.
         */
        preprocess?: Processor['preprocess'];
        /**
         * Adds reported errors for unused `eslint-disable` directives.
         */
        reportUnusedDisableDirectives?: boolean | SeverityString;
    }
    export interface FixOptions extends VerifyOptions {
        /**
         * Determines whether fixes should be applied.
         */
        fix?: boolean;
    }
    export interface LintSuggestion {
        desc: string;
        fix: RuleFix;
        messageId?: string;
    }
    export interface LintMessage {
        /**
         * The 1-based column number.
         */
        column: number;
        /**
         * The 1-based column number of the end location.
         */
        endColumn?: number;
        /**
         * The 1-based line number of the end location.
         */
        endLine?: number;
        /**
         * If `true` then this is a fatal error.
         */
        fatal?: true;
        /**
         * Information for autofix.
         */
        fix?: RuleFix;
        /**
         * The 1-based line number.
         */
        line: number;
        /**
         * The error message.
         */
        message: string;
        messageId?: string;
        nodeType: string;
        /**
         * The ID of the rule which makes this message.
         */
        ruleId: string | null;
        /**
         * The severity of this message.
         */
        severity: Severity;
        source: string | null;
        /**
         * Information for suggestions
         */
        suggestions?: LintSuggestion[];
    }
    export interface FixReport {
        /**
         * True, if the code was fixed
         */
        fixed: boolean;
        /**
         * Fixed code text (might be the same as input if no fixes were applied).
         */
        output: string;
        /**
         * Collection of all messages for the given code
         */
        messages: LintMessage[];
    }
    export type ParserModule = {
        parse(text: string, options?: ParserOptions): TSESTree.Program;
    } | {
        parseForESLint(text: string, options?: ParserOptions): ESLintParseResult;
    };
    export interface ESLintParseResult {
        ast: TSESTree.Program;
        services?: ParserServices;
        scopeManager?: Scope.ScopeManager;
        visitorKeys?: SourceCode.VisitorKeys;
    }
    export interface Processor {
        /**
         * The function to extract code blocks.
         */
        preprocess?: (text: string, filename: string) => Array<string | {
            text: string;
            filename: string;
        }>;
        /**
         * The function to merge messages.
         */
        postprocess?: (messagesList: Linter.LintMessage[][], filename: string) => Linter.LintMessage[];
        /**
         * If `true` then it means the processor supports autofix.
         */
        supportsAutofix?: boolean;
    }
    export interface Environment {
        /**
         * The definition of global variables.
         */
        globals?: Record<string, Linter.Config>;
        /**
         * The parser options that will be enabled under this environment.
         */
        parserOptions?: ParserOptions;
    }
    export interface Plugin {
        /**
         * The definition of plugin configs.
         */
        configs?: Record<string, Linter.Config>;
        /**
         * The definition of plugin environments.
         */
        environments?: Record<string, Environment>;
        /**
         * The definition of plugin processors.
         */
        processors?: Record<string, Processor>;
        /**
         * The definition of plugin rules.
         */
        rules?: Record<string, RuleCreateFunction | RuleModule<string, unknown[]>>;
    }
    export {};
}
declare const Linter_base: typeof LinterBase;
/**
 * The Linter object does the actual evaluation of the JavaScript code. It doesn't do any filesystem operations, it
 * simply parses and reports on the code. In particular, the Linter object does not process configuration objects
 * or files.
 */
declare class Linter extends Linter_base {
}
export { Linter };
//# sourceMappingURL=Linter.d.ts.map
