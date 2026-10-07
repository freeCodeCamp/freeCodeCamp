import { Linter } from './Linter';
import { RuleListener, RuleMetaData, RuleModule } from './Rule';
declare namespace CLIEngine {
    interface Options {
        allowInlineConfig?: boolean;
        baseConfig?: false | {
            [name: string]: unknown;
        };
        cache?: boolean;
        cacheFile?: string;
        cacheLocation?: string;
        configFile?: string;
        cwd?: string;
        envs?: string[];
        errorOnUnmatchedPattern?: boolean;
        extensions?: string[];
        fix?: boolean;
        globals?: string[];
        ignore?: boolean;
        ignorePath?: string;
        ignorePattern?: string | string[];
        useEslintrc?: boolean;
        parser?: string;
        parserOptions?: Linter.ParserOptions;
        plugins?: string[];
        resolvePluginsRelativeTo?: string;
        rules?: {
            [name: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions;
        };
        rulePaths?: string[];
        reportUnusedDisableDirectives?: boolean;
    }
    interface LintResult {
        filePath: string;
        messages: Linter.LintMessage[];
        errorCount: number;
        warningCount: number;
        fixableErrorCount: number;
        fixableWarningCount: number;
        output?: string;
        source?: string;
    }
    interface LintReport {
        results: LintResult[];
        errorCount: number;
        warningCount: number;
        fixableErrorCount: number;
        fixableWarningCount: number;
        usedDeprecatedRules: DeprecatedRuleUse[];
    }
    interface DeprecatedRuleUse {
        ruleId: string;
        replacedBy: string[];
    }
    interface LintResultData<TMessageIds extends string> {
        rulesMeta: {
            [ruleId: string]: RuleMetaData<TMessageIds>;
        };
    }
    type Formatter = <TMessageIds extends string>(results: LintResult[], data?: LintResultData<TMessageIds>) => string;
}
/**
 * The underlying utility that runs the ESLint command line interface. This object will read the filesystem for
 * configuration and file information but will not output any results. Instead, it allows you direct access to the
 * important information so you can deal with the output yourself.
 * @deprecated use the ESLint class instead
 */
declare const CLIEngine: {
    new (options: CLIEngine.Options): {
        /**
         * Add a plugin by passing its configuration
         * @param name Name of the plugin.
         * @param pluginObject Plugin configuration object.
         */
        addPlugin(name: string, pluginObject: Linter.Plugin): void;
        /**
         * Executes the current configuration on an array of file and directory names.
         * @param patterns An array of file and directory names.
         * @returns The results for all files that were linted.
         */
        executeOnFiles(patterns: string[]): CLIEngine.LintReport;
        /**
         * Executes the current configuration on text.
         * @param text A string of JavaScript code to lint.
         * @param filename An optional string representing the texts filename.
         * @param warnIgnored Always warn when a file is ignored
         * @returns The results for the linting.
         */
        executeOnText(text: string, filename?: string, warnIgnored?: boolean): CLIEngine.LintReport;
        /**
         * Returns a configuration object for the given file based on the CLI options.
         * This is the same logic used by the ESLint CLI executable to determine configuration for each file it processes.
         * @param filePath The path of the file to retrieve a config object for.
         * @returns A configuration object for the file.
         */
        getConfigForFile(filePath: string): Linter.Config;
        /**
         * Returns the formatter representing the given format.
         * @param format The name of the format to load or the path to a custom formatter.
         * @returns The formatter function.
         */
        getFormatter(format?: string): CLIEngine.Formatter;
        /**
         * Checks if a given path is ignored by ESLint.
         * @param filePath The path of the file to check.
         * @returns Whether or not the given path is ignored.
         */
        isPathIgnored(filePath: string): boolean;
        /**
         * Resolves the patterns passed into `executeOnFiles()` into glob-based patterns for easier handling.
         * @param patterns The file patterns passed on the command line.
         * @returns The equivalent glob patterns.
         */
        resolveFileGlobPatterns(patterns: string[]): string[];
        getRules<TMessageIds extends string = string, TOptions extends readonly unknown[] = unknown[], TRuleListener extends RuleListener = RuleListener>(): Map<string, RuleModule<TMessageIds, TOptions, TRuleListener>>;
    };
    /**
     * Returns results that only contains errors.
     * @param results The results to filter.
     * @returns The filtered results.
     */
    getErrorResults(results: CLIEngine.LintResult[]): CLIEngine.LintResult[];
    /**
     * Returns the formatter representing the given format or null if the `format` is not a string.
     * @param format The name of the format to load or the path to a custom formatter.
     * @returns The formatter function.
     */
    getFormatter(format?: string): CLIEngine.Formatter;
    /**
     * Outputs fixes from the given results to files.
     * @param report The report object created by CLIEngine.
     */
    outputFixes(report: CLIEngine.LintReport): void;
    version: string;
} | undefined;
export { CLIEngine };
//# sourceMappingURL=CLIEngine.d.ts.map
