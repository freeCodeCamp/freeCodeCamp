/**
 * Lint specified Markdown files.
 *
 * @param {Options | null} options Configuration options.
 * @param {LintCallback} callback Callback (err, result) function.
 * @returns {void}
 */
export function lintAsync(options: Options | null, callback: LintCallback): void;
/**
 * Lint specified Markdown files.
 *
 * @param {Options | null} options Configuration options.
 * @returns {Promise<LintResults>} Results object.
 */
export function lintPromise(options: Options | null): Promise<LintResults>;
/**
 * Lint specified Markdown files.
 *
 * @param {Options | null} options Configuration options.
 * @returns {LintResults} Results object.
 */
export function lintSync(options: Options | null): LintResults;
/**
 * Extend specified configuration object.
 *
 * @param {Configuration} config Configuration object.
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[] | undefined} parsers Parsing function(s).
 * @param {FsLike} fs File system implementation.
 * @returns {Promise<Configuration>} Configuration object.
 */
export function extendConfigPromise(config: Configuration, file: string, parsers: ConfigurationParser[] | undefined, fs: FsLike): Promise<Configuration>;
/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[] | ReadConfigCallback} [parsers] Parsing function(s).
 * @param {FsLike | ReadConfigCallback} [fs] File system implementation.
 * @param {ReadConfigCallback} [callback] Callback (err, result) function.
 * @returns {void}
 */
export function readConfigAsync(file: string, parsers?: ConfigurationParser[] | ReadConfigCallback, fs?: FsLike | ReadConfigCallback, callback?: ReadConfigCallback): void;
/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[]} [parsers] Parsing function(s).
 * @param {FsLike} [fs] File system implementation.
 * @returns {Promise<Configuration>} Configuration object.
 */
export function readConfigPromise(file: string, parsers?: ConfigurationParser[], fs?: FsLike): Promise<Configuration>;
/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[]} [parsers] Parsing function(s).
 * @param {FsLike} [fs] File system implementation.
 * @returns {Configuration} Configuration object.
 */
export function readConfigSync(file: string, parsers?: ConfigurationParser[], fs?: FsLike): Configuration;
/**
 * Applies the specified fix to a Markdown content line.
 *
 * @param {string} line Line of Markdown content.
 * @param {FixInfo} fixInfo FixInfo instance.
 * @param {string} [lineEnding] Line ending to use.
 * @returns {string | null} Fixed content or null if deleted.
 */
export function applyFix(line: string, fixInfo: FixInfo, lineEnding?: string): string | null;
/**
 * Applies as many of the specified fixes as possible to Markdown content.
 *
 * @param {string} input Lines of Markdown content.
 * @param {LintError[]} errors LintError instances.
 * @returns {string} Fixed content.
 */
export function applyFixes(input: string, errors: LintError[]): string;
/**
 * Gets the (semantic) version of the library.
 *
 * @returns {string} SemVer string.
 */
export function getVersion(): string;
/**
 * Result object for removeFrontMatter.
 */
export type RemoveFrontMatterResult = {
    /**
     * Markdown content.
     */
    content: string;
    /**
     * Front matter lines.
     */
    frontMatterLines: string[];
};
/**
 * Result object for getEffectiveConfig.
 */
export type GetEffectiveConfigResult = {
    /**
     * Effective configuration.
     */
    effectiveConfig: Configuration;
    /**
     * Rules enabled.
     */
    rulesEnabled: Map<string, boolean>;
    /**
     * Rules severity.
     */
    rulesSeverity: Map<string, "error" | "warning">;
};
/**
 * Result object for getEnabledRulesPerLineNumber.
 */
export type EnabledRulesPerLineNumberResult = {
    /**
     * Effective configuration.
     */
    effectiveConfig: Configuration;
    /**
     * Enabled rules per line number.
     */
    enabledRulesPerLineNumber: Map<string, boolean>[];
    /**
     * Enabled rule list.
     */
    enabledRuleList: Rule[];
    /**
     * Rules severity.
     */
    rulesSeverity: Map<string, "error" | "warning">;
};
/**
 * Node fs instance (or compatible object).
 */
export type FsLike = {
    /**
     * access method.
     */
    access: (path: string, callback: (err: Error) => void) => void;
    /**
     * accessSync method.
     */
    accessSync: (path: string) => void;
    /**
     * readFile method.
     */
    readFile: (path: string, encoding: string, callback: (err: Error, data: string) => void) => void;
    /**
     * readFileSync method.
     */
    readFileSync: (path: string, encoding: string) => string;
};
/**
 * Function to implement rule logic.
 */
export type RuleFunction = (params: RuleParams, onError: RuleOnError) => void;
/**
 * Rule parameters.
 */
export type RuleParams = {
    /**
     * File/string name.
     */
    name: string;
    /**
     * Markdown parser data.
     */
    parsers: MarkdownParsers;
    /**
     * File/string lines.
     */
    lines: readonly string[];
    /**
     * Front matter lines.
     */
    frontMatterLines: readonly string[];
    /**
     * Rule configuration.
     */
    config: RuleConfiguration;
    /**
     * Version of the markdownlint library.
     */
    version: string;
};
/**
 * Markdown parser data.
 */
export type MarkdownParsers = {
    /**
     * Markdown parser data from markdown-it (only present when Rule.parser is "markdownit").
     */
    markdownit: ParserMarkdownIt;
    /**
     * Markdown parser data from micromark (only present when Rule.parser is "micromark").
     */
    micromark: ParserMicromark;
};
/**
 * Markdown parser data from markdown-it.
 */
export type ParserMarkdownIt = {
    /**
     * Token objects from markdown-it.
     */
    tokens: MarkdownItToken[];
};
/**
 * Markdown parser data from micromark.
 */
export type ParserMicromark = {
    /**
     * Token objects from micromark.
     */
    tokens: MicromarkToken[];
};
/**
 * markdown-it token.
 */
export type MarkdownItToken = {
    /**
     * HTML attributes.
     */
    attrs: string[][];
    /**
     * Block-level token.
     */
    block: boolean;
    /**
     * Child nodes.
     */
    children: MarkdownItToken[];
    /**
     * Tag contents.
     */
    content: string;
    /**
     * Ignore element.
     */
    hidden: boolean;
    /**
     * Fence info.
     */
    info: string;
    /**
     * Nesting level.
     */
    level: number;
    /**
     * Beginning/ending line numbers.
     */
    map: number[];
    /**
     * Markup text.
     */
    markup: string;
    /**
     * Arbitrary data.
     */
    meta: any;
    /**
     * Level change.
     */
    nesting: number;
    /**
     * HTML tag name.
     */
    tag: string;
    /**
     * Token type.
     */
    type: string;
    /**
     * Line number (1-based).
     */
    lineNumber: number;
    /**
     * Line content.
     */
    line: string;
};
export type MicromarkTokenType = import("micromark-util-types").TokenType;
/**
 * micromark token.
 */
export type MicromarkToken = {
    /**
     * Token type.
     */
    type: MicromarkTokenType;
    /**
     * Start line (1-based).
     */
    startLine: number;
    /**
     * Start column (1-based).
     */
    startColumn: number;
    /**
     * End line (1-based).
     */
    endLine: number;
    /**
     * End column (1-based).
     */
    endColumn: number;
    /**
     * Token text.
     */
    text: string;
    /**
     * Child tokens.
     */
    children: MicromarkToken[];
    /**
     * Parent token.
     */
    parent: MicromarkToken | null;
};
/**
 * Error-reporting callback.
 */
export type RuleOnError = (onErrorInfo: RuleOnErrorInfo) => void;
/**
 * Fix information for RuleOnError callback.
 */
export type RuleOnErrorInfo = {
    /**
     * Line number (1-based).
     */
    lineNumber: number;
    /**
     * Detail about the error.
     */
    detail?: string;
    /**
     * Context for the error.
     */
    context?: string;
    /**
     * Link to more information.
     */
    information?: URL;
    /**
     * Column number (1-based) and length.
     */
    range?: number[];
    /**
     * Fix information.
     */
    fixInfo?: RuleOnErrorFixInfo;
};
/**
 * Fix information for RuleOnErrorInfo.
 */
export type RuleOnErrorFixInfo = {
    /**
     * Line number (1-based).
     */
    lineNumber?: number;
    /**
     * Column of the fix (1-based).
     */
    editColumn?: number;
    /**
     * Count of characters to delete.
     */
    deleteCount?: number;
    /**
     * Text to insert (after deleting).
     */
    insertText?: string;
};
/**
 * Rule definition.
 */
export type Rule = {
    /**
     * Rule name(s).
     */
    names: string[];
    /**
     * Rule description.
     */
    description: string;
    /**
     * Link to more information.
     */
    information?: URL;
    /**
     * Rule tag(s).
     */
    tags: string[];
    /**
     * Parser used.
     */
    parser: "markdownit" | "micromark" | "none";
    /**
     * True if asynchronous.
     */
    asynchronous?: boolean;
    /**
     * Rule implementation.
     */
    function: RuleFunction;
};
/**
 * Method used by the markdown-it parser to parse input.
 */
export type MarkdownItParse = (src: string, env: any) => any[];
/**
 * Instance of the markdown-it parser.
 */
export type MarkdownIt = {
    /**
     * Method to parse input.
     */
    parse: MarkdownItParse;
};
/**
 * Gets an instance of the markdown-it parser. Any plugins should already have been loaded.
 */
export type MarkdownItFactory = () => MarkdownIt | Promise<MarkdownIt>;
/**
 * Configuration options.
 */
export type Options = {
    /**
     * Configuration object.
     */
    config?: Configuration;
    /**
     * Configuration parsers.
     */
    configParsers?: ConfigurationParser[];
    /**
     * Custom rules.
     */
    customRules?: Rule[] | Rule;
    /**
     * Files to lint.
     */
    files?: string[] | string;
    /**
     * Front matter pattern.
     */
    frontMatter?: RegExp | null;
    /**
     * File system implementation.
     */
    fs?: FsLike;
    /**
     * True to catch exceptions.
     */
    handleRuleFailures?: boolean;
    /**
     * Function to create a markdown-it parser.
     */
    markdownItFactory?: MarkdownItFactory;
    /**
     * True to ignore HTML directives.
     */
    noInlineConfig?: boolean;
    /**
     * Strings to lint.
     */
    strings?: {
        [x: string]: string;
    };
};
/**
 * A markdown-it plugin.
 */
export type Plugin = any[];
/**
 * Lint results.
 */
export type LintResults = {
    [x: string]: LintError[];
};
/**
 * Lint error.
 */
export type LintError = {
    /**
     * Line number (1-based).
     */
    lineNumber: number;
    /**
     * Rule name(s).
     */
    ruleNames: string[];
    /**
     * Rule description.
     */
    ruleDescription: string;
    /**
     * Link to more information.
     */
    ruleInformation: string | null;
    /**
     * Detail about the error.
     */
    errorDetail: string | null;
    /**
     * Context for the error.
     */
    errorContext: string | null;
    /**
     * Column number (1-based) and length.
     */
    errorRange: number[] | null;
    /**
     * Fix information.
     */
    fixInfo: FixInfo | null;
    /**
     * Severity of the error.
     */
    severity: "error" | "warning";
};
/**
 * Fix information.
 */
export type FixInfo = {
    /**
     * Line number (1-based).
     */
    lineNumber?: number;
    /**
     * Column of the fix (1-based).
     */
    editColumn?: number;
    /**
     * Count of characters to delete.
     */
    deleteCount?: number;
    /**
     * Text to insert (after deleting).
     */
    insertText?: string;
};
/**
 * FixInfo with all optional properties present.
 */
export type FixInfoNormalized = {
    /**
     * Line number (1-based).
     */
    lineNumber: number;
    /**
     * Column of the fix (1-based).
     */
    editColumn: number;
    /**
     * Count of characters to delete.
     */
    deleteCount: number;
    /**
     * Text to insert (after deleting).
     */
    insertText: string;
};
/**
 * Called with the result of linting a string or document.
 */
export type LintContentCallback = (error: Error | null, result?: LintError[]) => void;
/**
 * Called with the result of the lint function.
 */
export type LintCallback = (error: Error | null, results?: LintResults) => void;
/**
 * Configuration object for linting rules. For the JSON schema, see
 * {@link  ../schema/markdownlint-config-schema.json}.
 */
export type Configuration = import("./configuration.d.ts").Configuration;
/**
 * Configuration object for linting rules strictly. For the JSON schema, see
 * {@link  ../schema/markdownlint-config-schema-strict.json}.
 */
export type ConfigurationStrict = import("./configuration-strict.d.ts").ConfigurationStrict;
/**
 * Rule configuration.
 */
export type RuleConfiguration = boolean | any;
/**
 * Parses a configuration string and returns a configuration object.
 */
export type ConfigurationParser = (text: string) => Configuration;
/**
 * Called with the result of the readConfig function.
 */
export type ReadConfigCallback = (err: Error | null, config?: Configuration) => void;
/**
 * Called with the result of the resolveConfigExtends function.
 */
export type ResolveConfigExtendsCallback = (err: Error | null, path?: string) => void;
