import type { ClassicConfig, FlatConfig, SharedConfig } from './Config';
import type { Parser } from './Parser';
import type { Processor as ProcessorType } from './Processor';
import type { AnyRuleCreateFunction, AnyRuleModule, RuleCreateFunction, RuleFix, RuleModule } from './Rule';
import type { SourceCode } from './SourceCode';
export type MinimalRuleModule<MessageIds extends string = string, Options extends readonly unknown[] = []> = Partial<Omit<RuleModule<MessageIds, Options>, 'create'>> & Pick<RuleModule<MessageIds, Options>, 'create'>;
declare class LinterBase {
    /**
     * The version from package.json.
     */
    readonly version: string;
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
    defineParser(parserId: string, parserModule: Parser.LooseParserModule): void;
    /**
     * Defines a new linting rule.
     * @param ruleId A unique rule identifier
     * @param ruleModule Function from context to object mapping AST node types to event handlers
     */
    defineRule<MessageIds extends string, Options extends readonly unknown[]>(ruleId: string, ruleModule: MinimalRuleModule<MessageIds, Options> | RuleCreateFunction): void;
    /**
     * Defines many new linting rules.
     * @param rulesToDefine map from unique rule identifier to rule
     */
    defineRules<MessageIds extends string, Options extends readonly unknown[]>(rulesToDefine: Record<string, MinimalRuleModule<MessageIds, Options> | RuleCreateFunction<MessageIds, Options>>): void;
    /**
     * Gets an object with all loaded rules.
     * @returns All loaded rules
     */
    getRules(): Map<string, MinimalRuleModule<string, unknown[]>>;
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
    verify(textOrSourceCode: string | SourceCode, config: Linter.ConfigType, filenameOrOptions?: string | Linter.VerifyOptions): Linter.LintMessage[];
    /**
     * The version from package.json.
     */
    static readonly version: string;
    /**
     * Performs multiple autofix passes over the text until as many fixes as possible have been applied.
     * @param code The source text to apply fixes to.
     * @param config The ESLint config object to use.
     * @param options The ESLint options object to use.
     * @returns The result of the fix operation as returned from the SourceCodeFixer.
     */
    verifyAndFix(code: string, config: Linter.ConfigType, options: Linter.FixOptions): Linter.FixReport;
}
declare namespace Linter {
    interface LinterOptions {
        /**
         * Which config format to use.
         * @default 'flat'
         */
        configType?: ConfigTypeSpecifier;
        /**
         * path to a directory that should be considered as the current working directory.
         */
        cwd?: string;
    }
    type ConfigTypeSpecifier = 'eslintrc' | 'flat';
    type EnvironmentConfig = SharedConfig.EnvironmentConfig;
    type GlobalsConfig = SharedConfig.GlobalsConfig;
    type GlobalVariableOption = SharedConfig.GlobalVariableOption;
    type GlobalVariableOptionBase = SharedConfig.GlobalVariableOptionBase;
    type ParserOptions = SharedConfig.ParserOptions;
    type PluginMeta = SharedConfig.PluginMeta;
    type RuleEntry = SharedConfig.RuleEntry;
    type RuleLevel = SharedConfig.RuleLevel;
    type RuleLevelAndOptions = SharedConfig.RuleLevelAndOptions;
    type RulesRecord = SharedConfig.RulesRecord;
    type Severity = SharedConfig.Severity;
    type SeverityString = SharedConfig.SeverityString;
    /** @deprecated use {@link Linter.ConfigType} instead */
    type Config = ClassicConfig.Config;
    type ConfigType = ClassicConfig.Config | FlatConfig.Config | FlatConfig.ConfigArray;
    /** @deprecated use {@link ClassicConfig.ConfigOverride} instead */
    type ConfigOverride = ClassicConfig.ConfigOverride;
    interface VerifyOptions {
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
        postprocess?: ProcessorType.PostProcess;
        /**
         * preprocessor for source text.
         * If provided, this should accept a string of source text, and return an array of code blocks to lint.
         */
        preprocess?: ProcessorType.PreProcess;
        /**
         * Adds reported errors for unused `eslint-disable` directives.
         */
        reportUnusedDisableDirectives?: boolean | SeverityString;
    }
    interface FixOptions extends VerifyOptions {
        /**
         * Determines whether fixes should be applied.
         */
        fix?: boolean;
    }
    interface LintSuggestion {
        desc: string;
        fix: RuleFix;
        messageId?: string;
    }
    interface LintMessage {
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
        /**
         * @deprecated `nodeType` is deprecated and will be removed in the next major version.
         */
        nodeType?: string;
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
    interface FixReport {
        /**
         * True, if the code was fixed
         */
        fixed: boolean;
        /**
         * Collection of all messages for the given code
         */
        messages: LintMessage[];
        /**
         * Fixed code text (might be the same as input if no fixes were applied).
         */
        output: string;
    }
    /** @deprecated use {@link Parser.ParserModule} */
    type ParserModule = Parser.LooseParserModule;
    /** @deprecated use {@link Parser.ParseResult} */
    type ESLintParseResult = Parser.ParseResult;
    /** @deprecated use {@link ProcessorType.ProcessorModule} */
    type Processor = ProcessorType.ProcessorModule;
    interface Environment {
        /**
         * The definition of global variables.
         */
        globals?: GlobalsConfig;
        /**
         * The parser options that will be enabled under this environment.
         */
        parserOptions?: ParserOptions;
    }
    type LegacyPluginRules = Record<string, AnyRuleCreateFunction | AnyRuleModule>;
    type PluginRules = Record<string, AnyRuleModule>;
    interface Plugin {
        /**
         * The definition of plugin configs.
         */
        configs?: Record<string, ClassicConfig.Config>;
        /**
         * The definition of plugin environments.
         */
        environments?: Record<string, Environment>;
        /**
         * Metadata about your plugin for easier debugging and more effective caching of plugins.
         */
        meta?: PluginMeta;
        /**
         * The definition of plugin processors.
         */
        processors?: Record<string, ProcessorType.ProcessorModule>;
        /**
         * The definition of plugin rules.
         */
        rules?: LegacyPluginRules;
    }
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
