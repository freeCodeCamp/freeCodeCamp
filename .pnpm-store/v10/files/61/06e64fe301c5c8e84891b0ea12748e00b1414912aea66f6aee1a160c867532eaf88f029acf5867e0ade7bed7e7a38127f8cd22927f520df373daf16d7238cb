import type { ClassicConfig } from '../Config';
import type { Linter } from '../Linter';
import type * as Shared from './ESLintShared';
declare class LegacyESLintBase extends Shared.ESLintBase<ClassicConfig.Config, LegacyESLint.ESLintOptions> {
    static readonly configType: 'eslintrc';
}
declare const LegacyESLint_base: typeof LegacyESLintBase;
/**
 * The ESLint class is the primary class to use in Node.js applications.
 * This class depends on the Node.js fs module and the file system, so you cannot use it in browsers.
 *
 * If you want to lint code on browsers, use the Linter class instead.
 */
export declare class LegacyESLint extends LegacyESLint_base {
}
export declare namespace LegacyESLint {
    interface ESLintOptions extends Shared.ESLintOptions<ClassicConfig.Config> {
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
         * If false is present, the eslint.lintFiles() method doesn't respect `.eslintignore` files in your configuration.
         * @default true
         */
        ignore?: boolean;
        /**
         * The path to a file ESLint uses instead of `$CWD/.eslintignore`.
         * If a path is present and the file doesn't exist, this constructor will throw an error.
         */
        ignorePath?: string;
        /**
         * The path to a configuration file, overrides all configurations used with this instance.
         * The options.overrideConfig option is applied after this option is applied.
         */
        overrideConfigFile?: string | null;
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
    type DeprecatedRuleInfo = Shared.DeprecatedRuleInfo;
    type EditInfo = Shared.EditInfo;
    type Formatter = Shared.Formatter;
    type LintMessage = Shared.LintMessage;
    type LintResult = Omit<Shared.LintResult, 'stats'>;
    type LintTextOptions = Shared.LintTextOptions;
    type SuppressedLintMessage = Shared.SuppressedLintMessage;
}
export {};
