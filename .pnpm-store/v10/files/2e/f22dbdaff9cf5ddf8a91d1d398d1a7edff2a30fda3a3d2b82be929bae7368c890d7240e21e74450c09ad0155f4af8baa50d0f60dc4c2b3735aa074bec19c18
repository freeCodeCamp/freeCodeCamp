import type { Linter } from './Linter';
declare class ESLintBase {
    /**
     * Creates a new instance of the main ESLint API.
     * @param options The options for this instance.
     */
    constructor(options?: ESLint.ESLintOptions);
    /**
     * This method calculates the configuration for a given file, which can be useful for debugging purposes.
     * - It resolves and merges extends and overrides settings into the top level configuration.
     * - It resolves the parser setting to absolute paths.
     * - It normalizes the plugins setting to align short names. (e.g., eslint-plugin-foo → foo)
     * - It adds the processor setting if a legacy file extension processor is matched.
     * - It doesn't interpret the env setting to the globals and parserOptions settings, so the result object contains
     *   the env setting as is.
     * @param filePath The path to the file whose configuration you would like to calculate. Directory paths are forbidden
     *                 because ESLint cannot handle the overrides setting.
     * @returns The promise that will be fulfilled with a configuration object.
     */
    calculateConfigForFile(filePath: string): Promise<Linter.Config>;
    /**
     * This method checks if a given file is ignored by your configuration.
     * @param filePath The path to the file you want to check.
     * @returns The promise that will be fulfilled with whether the file is ignored or not. If the file is ignored, then
     *          it will return true.
     */
    isPathIgnored(filePath: string): Promise<boolean>;
    /**
     * This method lints the files that match the glob patterns and then returns the results.
     * @param patterns The lint target files. This can contain any of file paths, directory paths, and glob patterns.
     * @returns The promise that will be fulfilled with an array of LintResult objects.
     */
    lintFiles(patterns: string | string[]): Promise<ESLint.LintResult[]>;
    /**
     * This method lints the given source code text and then returns the results.
     *
     * By default, this method uses the configuration that applies to files in the current working directory (the cwd
     * constructor option). If you want to use a different configuration, pass options.filePath, and ESLint will load the
     * same configuration that eslint.lintFiles() would use for a file at options.filePath.
     *
     * If the options.filePath value is configured to be ignored, this method returns an empty array. If the
     * options.warnIgnored option is set along with the options.filePath option, this method returns a LintResult object.
     * In that case, the result may contain a warning that indicates the file was ignored.
     * @param code The source code text to check.
     * @param options The options.
     * @returns The promise that will be fulfilled with an array of LintResult objects. This is an array (despite there
     *          being only one lint result) in order to keep the interfaces between this and the eslint.lintFiles()
     *          method similar.
     */
    lintText(code: string, options?: ESLint.LintTextOptions): Promise<ESLint.LintResult[]>;
    /**
     * This method loads a formatter. Formatters convert lint results to a human- or machine-readable string.
     * @param name TThe path to the file you want to check.
     * The following values are allowed:
     * - undefined. In this case, loads the "stylish" built-in formatter.
     * - A name of built-in formatters.
     * - A name of third-party formatters. For examples:
     * -- `foo` will load eslint-formatter-foo.
     * -- `@foo` will load `@foo/eslint-formatter`.
     * -- `@foo/bar` will load `@foo/eslint-formatter-bar`.
     * - A path to the file that defines a formatter. The path must contain one or more path separators (/) in order to distinguish if it's a path or not. For example, start with ./.
     * @returns The promise that will be fulfilled with a Formatter object.
     */
    loadFormatter(name?: string): Promise<ESLint.Formatter>;
    /**
     * This method copies the given results and removes warnings. The returned value contains only errors.
     * @param results The LintResult objects to filter.
     * @returns The filtered LintResult objects.
     */
    static getErrorResults(results: ESLint.LintResult): ESLint.LintResult;
    /**
     * This method writes code modified by ESLint's autofix feature into its respective file. If any of the modified
     * files don't exist, this method does nothing.
     * @param results The LintResult objects to write.
     * @returns The promise that will be fulfilled after all files are written.
     */
    static outputFixes(results: ESLint.LintResult): Promise<void>;
    /**
     * The version text.
     */
    static readonly version: string;
}
declare namespace ESLint {
    interface ESLintOptions {
        /**
         * If false is present, ESLint suppresses directive comments in source code.
         * If this option is false, it overrides the noInlineConfig setting in your configurations.
         */
        allowInlineConfig?: boolean;
        /**
         * Configuration object, extended by all configurations used with this instance.
         * You can use this option to define the default settings that will be used if your configuration files don't
         * configure it.
         */
        baseConfig?: Linter.Config | null;
        /**
         * If true is present, the eslint.lintFiles() method caches lint results and uses it if each target file is not
         * changed. Please mind that ESLint doesn't clear the cache when you upgrade ESLint plugins. In that case, you have
         * to remove the cache file manually. The eslint.lintText() method doesn't use caches even if you pass the
         * options.filePath to the method.
         */
        cache?: boolean;
        /**
         * The eslint.lintFiles() method writes caches into this file.
         */
        cacheLocation?: string;
        /**
         * The working directory. This must be an absolute path.
         */
        cwd?: string;
        /**
         * Unless set to false, the eslint.lintFiles() method will throw an error when no target files are found.
         */
        errorOnUnmatchedPattern?: boolean;
        /**
         * If you pass directory paths to the eslint.lintFiles() method, ESLint checks the files in those directories that
         * have the given extensions. For example, when passing the src/ directory and extensions is [".js", ".ts"], ESLint
         * will lint *.js and *.ts files in src/. If extensions is null, ESLint checks *.js files and files that match
         * overrides[].files patterns in your configuration.
         * Note: This option only applies when you pass directory paths to the eslint.lintFiles() method.
         * If you pass glob patterns, ESLint will lint all files matching the glob pattern regardless of extension.
         */
        extensions?: string[] | null;
        /**
         * If true is present, the eslint.lintFiles() and eslint.lintText() methods work in autofix mode.
         * If a predicate function is present, the methods pass each lint message to the function, then use only the
         * lint messages for which the function returned true.
         */
        fix?: boolean | ((message: ESLint.LintMessage) => boolean);
        /**
         * The types of the rules that the eslint.lintFiles() and eslint.lintText() methods use for autofix.
         */
        fixTypes?: ('directive' | 'problem' | 'suggestion' | 'layout')[] | null;
        /**
         * If false is present, the eslint.lintFiles() method doesn't interpret glob patterns.
         */
        globInputPaths?: boolean;
        /**
         * If false is present, the eslint.lintFiles() method doesn't respect `.eslintignore` files or ignorePatterns in
         * your configuration.
         */
        ignore?: boolean;
        /**
         * The path to a file ESLint uses instead of `$CWD/.eslintignore`.
         * If a path is present and the file doesn't exist, this constructor will throw an error.
         */
        ignorePath?: string;
        /**
         * Configuration object, overrides all configurations used with this instance.
         * You can use this option to define the settings that will be used even if your configuration files configure it.
         */
        overrideConfig?: Linter.ConfigOverride | null;
        /**
         * The path to a configuration file, overrides all configurations used with this instance.
         * The options.overrideConfig option is applied after this option is applied.
         */
        overrideConfigFile?: string | null;
        /**
         * The plugin implementations that ESLint uses for the plugins setting of your configuration.
         * This is a map-like object. Those keys are plugin IDs and each value is implementation.
         */
        plugins?: Record<string, Linter.Plugin> | null;
        /**
         * The severity to report unused eslint-disable directives.
         * If this option is a severity, it overrides the reportUnusedDisableDirectives setting in your configurations.
         */
        reportUnusedDisableDirectives?: Linter.SeverityString | null;
        /**
         * The path to a directory where plugins should be resolved from.
         * If null is present, ESLint loads plugins from the location of the configuration file that contains the plugin
         * setting.
         * If a path is present, ESLint loads all plugins from there.
         */
        resolvePluginsRelativeTo?: string | null;
        /**
         * An array of paths to directories to load custom rules from.
         */
        rulePaths?: string[];
        /**
         * If false is present, ESLint doesn't load configuration files (.eslintrc.* files).
         * Only the configuration of the constructor options is valid.
         */
        useEslintrc?: boolean;
    }
    interface DeprecatedRuleInfo {
        /**
         *  The rule ID.
         */
        ruleId: string;
        /**
         *  The rule IDs that replace this deprecated rule.
         */
        replacedBy: string[];
    }
    /**
     * The LintResult value is the information of the linting result of each file.
     */
    interface LintResult {
        /**
         * The number of errors. This includes fixable errors.
         */
        errorCount: number;
        /**
         * The number of fatal errors.
         * @since 7.32.0
         */
        fatalErrorCount?: number;
        /**
         * The absolute path to the file of this result. This is the string "<text>" if the file path is unknown (when you
         * didn't pass the options.filePath option to the eslint.lintText() method).
         */
        filePath: string;
        /**
         * The number of errors that can be fixed automatically by the fix constructor option.
         */
        fixableErrorCount: number;
        /**
         * The number of warnings that can be fixed automatically by the fix constructor option.
         */
        fixableWarningCount: number;
        /**
         * The array of LintMessage objects.
         */
        messages: ESLint.LintMessage[];
        /**
         * The source code of the file that was linted, with as many fixes applied as possible.
         */
        output?: string;
        /**
         * The original source code text. This property is undefined if any messages didn't exist or the output
         * property exists.
         */
        source?: string;
        /**
         * The array of SuppressedLintMessage objects.
         *
         * @since 8.8.0
         */
        suppressedMessages?: SuppressedLintMessage[];
        /**
         * The information about the deprecated rules that were used to check this file.
         */
        usedDeprecatedRules: DeprecatedRuleInfo[];
        /**
         * The number of warnings. This includes fixable warnings.
         */
        warningCount: number;
    }
    interface LintTextOptions {
        /**
         * The path to the file of the source code text. If omitted, the result.filePath becomes the string "<text>".
         */
        filePath?: string;
        /**
         * If true is present and the options.filePath is a file ESLint should ignore, this method returns a lint result
         * contains a warning message.
         */
        warnIgnored?: boolean;
    }
    /**
     * The LintMessage value is the information of each linting error.
     */
    interface LintMessage {
        /**
         * The 1-based column number of the begin point of this message.
         */
        column: number | undefined;
        /**
         * The 1-based column number of the end point of this message. This property is undefined if this message
         * is not a range.
         */
        endColumn: number | undefined;
        /**
         * The 1-based line number of the end point of this message. This property is undefined if this
         * message is not a range.
         */
        endLine: number | undefined;
        /**
         * `true` if this is a fatal error unrelated to a rule, like a parsing error.
         * @since 7.24.0
         */
        fatal?: boolean | undefined;
        /**
         * The EditInfo object of autofix. This property is undefined if this message is not fixable.
         */
        fix: EditInfo | undefined;
        /**
         * The 1-based line number of the begin point of this message.
         */
        line: number | undefined;
        /**
         * The error message
         */
        message: string;
        /**
         * The rule name that generates this lint message. If this message is generated by the ESLint core rather than
         * rules, this is null.
         */
        ruleId: string | null;
        /**
         * The severity of this message. 1 means warning and 2 means error.
         */
        severity: 1 | 2;
        /**
         * The list of suggestions. Each suggestion is the pair of a description and an EditInfo object to fix code. API
         * users such as editor integrations can choose one of them to fix the problem of this message. This property is
         * undefined if this message doesn't have any suggestions.
         */
        suggestions: {
            desc: string;
            fix: EditInfo;
        }[] | undefined;
    }
    /**
     * The SuppressedLintMessage value is the information of each suppressed linting error.
     */
    interface SuppressedLintMessage extends ESLint.LintMessage {
        /**
         * The list of suppressions.
         */
        suppressions?: {
            /**
             * Right now, this is always `directive`
             */
            kind: string;
            /**
             * The free text description added after the `--` in the comment
             */
            justification: string;
        }[];
    }
    /**
     * The EditInfo value is information to edit text.
     *
     * This edit information means replacing the range of the range property by the text property value. It's like
     * sourceCodeText.slice(0, edit.range[0]) + edit.text + sourceCodeText.slice(edit.range[1]). Therefore, it's an add
     * if the range[0] and range[1] property values are the same value, and it's removal if the text property value is
     * empty string.
     */
    interface EditInfo {
        /**
         * The pair of 0-based indices in source code text to remove.
         */
        range: [number, number];
        /**
         * The text to add.
         */
        text: string;
    }
    /**
     * The Formatter value is the object to convert the LintResult objects to text.
     */
    interface Formatter {
        /**
         * The method to convert the LintResult objects to text.
         * Promise return supported since 8.4.0
         */
        format(results: LintResult[]): string | Promise<string>;
    }
}
declare const _ESLint: typeof ESLintBase;
/**
 * The ESLint class is the primary class to use in Node.js applications.
 * This class depends on the Node.js fs module and the file system, so you cannot use it in browsers.
 *
 * If you want to lint code on browsers, use the Linter class instead.
 *
 * @since 7.0.0
 */
declare class ESLint extends _ESLint {
}
export { ESLint };
//# sourceMappingURL=ESLint.d.ts.map