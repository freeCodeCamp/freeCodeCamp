import type { FlatConfig } from '../Config';
import type * as Shared from './ESLintShared';
declare class FlatESLintBase extends Shared.ESLintBase<FlatConfig.Config | FlatConfig.ConfigArray, FlatESLint.ESLintOptions> {
    static readonly configType: 'flat';
    /**
     * Returns a configuration object for the given file based on the CLI options.
     * This is the same logic used by the ESLint CLI executable to determine
     * configuration for each file it processes.
     * @param filePath The path of the file to retrieve a config object for.
     * @returns A configuration object for the file or `undefined` if there is no configuration data for the object.
     */
    calculateConfigForFile(filePath: string): Promise<FlatConfig.Config>;
    /**
     * Finds the config file being used by this instance based on the options
     * passed to the constructor.
     * @returns The path to the config file being used or `undefined` if no config file is being used.
     */
    findConfigFile(): Promise<string | undefined>;
}
declare const FlatESLint_base: typeof FlatESLintBase;
/**
 * The ESLint class is the primary class to use in Node.js applications.
 * This class depends on the Node.js fs module and the file system, so you cannot use it in browsers.
 *
 * If you want to lint code on browsers, use the Linter class instead.
 */
export declare class FlatESLint extends FlatESLint_base {
}
export declare namespace FlatESLint {
    interface ESLintOptions extends Shared.ESLintOptions<FlatConfig.ConfigArray> {
        /**
         * If false is present, the eslint.lintFiles() method doesn't respect `ignorePatterns` ignorePatterns in your configuration.
         * @default true
         */
        ignore?: boolean;
        /**
         * Ignore file patterns to use in addition to config ignores. These patterns are relative to cwd.
         * @default null
         */
        ignorePatterns?: string[] | null;
        /**
         * The path to a configuration file. Overrides all configurations used with this instance.
         * The options.overrideConfig option is applied after this option is applied.
         *
         * - When falsy, searches for default config file.
         * - When `true`, does not do any config file lookup.
         * - When a string, considered to be a config file name.
         *
         * @default false
         */
        overrideConfigFile?: boolean | string;
        /**
         * A predicate function that filters rules to be run.
         * This function is called with an object containing `ruleId` and `severity`, and returns `true` if the rule should be run.
         * @default () => true
         */
        ruleFilter?: RuleFilter;
        /**
         * When set to true, additional statistics are added to the lint results.
         * @see {@link https://eslint.org/docs/latest/extend/stats}
         * @default false
         */
        stats?: boolean;
        /**
         * Show warnings when the file list includes ignored files.
         * @default true
         */
        warnIgnored?: boolean;
    }
    type DeprecatedRuleInfo = Shared.DeprecatedRuleInfo;
    type EditInfo = Shared.EditInfo;
    type Formatter = Shared.Formatter;
    type LintMessage = Shared.LintMessage;
    type LintResult = Shared.LintResult;
    type LintStats = Shared.LintStats;
    type LintStatsFixTime = Shared.LintStatsFixTime;
    type LintStatsParseTime = Shared.LintStatsParseTime;
    type LintStatsRuleTime = Shared.LintStatsRuleTime;
    type LintStatsTimePass = Shared.LintStatsTimePass;
    type LintTextOptions = Shared.LintTextOptions;
    type SuppressedLintMessage = Shared.SuppressedLintMessage;
    type RuleFilter = (rule: {
        ruleId: string;
        severity: number;
    }) => boolean;
}
export {};
