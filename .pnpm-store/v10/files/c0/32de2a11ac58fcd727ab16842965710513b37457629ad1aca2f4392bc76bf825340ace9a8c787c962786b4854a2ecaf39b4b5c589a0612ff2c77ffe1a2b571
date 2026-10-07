import type { Parser as ParserType } from './Parser';
import type * as ParserOptionsTypes from './ParserOptions';
import type { Processor as ProcessorType } from './Processor';
import type { LooseRuleDefinition, SharedConfigurationSettings } from './Rule';
/** @internal */
export declare namespace SharedConfig {
    type Severity = 0 | 1 | 2;
    type SeverityString = 'error' | 'off' | 'warn';
    type RuleLevel = Severity | SeverityString;
    type RuleLevelAndOptions = [RuleLevel, ...unknown[]];
    type RuleEntry = RuleLevel | RuleLevelAndOptions;
    type RulesRecord = Partial<Record<string, RuleEntry>>;
    type GlobalVariableOptionBase = 'off' | /** @deprecated use `'readonly'` */ 'readable' | 'readonly' | 'writable' | /** @deprecated use `'writable'` */ 'writeable';
    type GlobalVariableOptionBoolean = /** @deprecated use `'readonly'` */ false | /** @deprecated use `'writable'` */ true;
    type GlobalVariableOption = GlobalVariableOptionBase | GlobalVariableOptionBoolean;
    interface GlobalsConfig {
        [name: string]: GlobalVariableOption;
    }
    interface EnvironmentConfig {
        [name: string]: boolean;
    }
    type ParserOptions = ParserOptionsTypes.ParserOptions;
    interface PluginMeta {
        /**
         * The meta.name property should match the npm package name for your plugin.
         */
        name: string;
        /**
         * If you followed the classic style to name your package
         * (e.g. `eslint-plugin-X`, `@X/eslint-plugin`, or `@X/eslint-plugin-Y`),
         * then this should match the classic namespace inferred for your package
         * (e.g. `X`, `@X`, or `@X/Y`, respectively).
         */
        namespace?: string;
        /**
         * The meta.version property should match the npm package version for your plugin.
         */
        version: string;
    }
}
export declare namespace ClassicConfig {
    export type EnvironmentConfig = SharedConfig.EnvironmentConfig;
    export type GlobalsConfig = SharedConfig.GlobalsConfig;
    export type GlobalVariableOption = SharedConfig.GlobalVariableOption;
    export type GlobalVariableOptionBase = SharedConfig.GlobalVariableOptionBase;
    export type ParserOptions = SharedConfig.ParserOptions;
    export type RuleEntry = SharedConfig.RuleEntry;
    export type RuleLevel = SharedConfig.RuleLevel;
    export type RuleLevelAndOptions = SharedConfig.RuleLevelAndOptions;
    export type RulesRecord = SharedConfig.RulesRecord;
    export type Severity = SharedConfig.Severity;
    export type SeverityString = SharedConfig.SeverityString;
    interface BaseConfig {
        $schema?: string;
        /**
         * The environment settings.
         */
        env?: EnvironmentConfig;
        /**
         * The path to other config files or the package name of shareable configs.
         */
        extends?: string | string[];
        /**
         * The global variable settings.
         */
        globals?: GlobalsConfig;
        /**
         * The flag that disables comment directives.
         */
        noInlineConfig?: boolean;
        /**
         * The override settings per kind of files.
         */
        overrides?: ConfigOverride[];
        /**
         * The path to a parser or the package name of a parser.
         */
        parser?: string | null;
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
    export {};
}
export declare namespace FlatConfig {
    type EcmaVersion = ParserOptionsTypes.EcmaVersion;
    type GlobalsConfig = SharedConfig.GlobalsConfig;
    type Parser = ParserType.LooseParserModule;
    type ParserOptions = SharedConfig.ParserOptions;
    type PluginMeta = SharedConfig.PluginMeta;
    type Processor = ProcessorType.LooseProcessorModule;
    type RuleEntry = SharedConfig.RuleEntry;
    type RuleLevel = SharedConfig.RuleLevel;
    type RuleLevelAndOptions = SharedConfig.RuleLevelAndOptions;
    type Rules = SharedConfig.RulesRecord;
    type Settings = SharedConfigurationSettings;
    type Severity = SharedConfig.Severity;
    type SeverityString = SharedConfig.SeverityString;
    type SourceType = 'commonjs' | ParserOptionsTypes.SourceType;
    interface SharedConfigs {
        [key: string]: Config | ConfigArray;
    }
    interface Plugin {
        /**
         * Shared configurations bundled with the plugin.
         * Users will reference these directly in their config (i.e. `plugin.configs.recommended`).
         */
        configs?: SharedConfigs;
        /**
         * Metadata about your plugin for easier debugging and more effective caching of plugins.
         */
        meta?: {
            [K in keyof PluginMeta]?: PluginMeta[K] | undefined;
        };
        /**
         * The definition of plugin processors.
         * Users can stringly reference the processor using the key in their config (i.e., `"pluginName/processorName"`).
         */
        processors?: Partial<Record<string, Processor>> | undefined;
        /**
         * The definition of plugin rules.
         * The key must be the name of the rule that users will use
         * Users can stringly reference the rule using the key they registered the plugin under combined with the rule name.
         * i.e. for the user config `plugins: { foo: pluginReference }` - the reference would be `"foo/ruleName"`.
         */
        rules?: Record<string, LooseRuleDefinition> | undefined;
    }
    interface Plugins {
        /**
         * We intentionally omit the `configs` key from this object because it avoids
         * type conflicts with old plugins that haven't updated their configs to flat configs yet.
         * It's valid to reference these old plugins because ESLint won't access the
         * `.config` property of a plugin when evaluating a flat config.
         */
        [pluginAlias: string]: Omit<Plugin, 'configs'>;
    }
    interface LinterOptions {
        /**
         * A Boolean value indicating if inline configuration is allowed.
         */
        noInlineConfig?: boolean;
        /**
         * A severity string indicating if and how unused disable and enable
         * directives should be tracked and reported. For legacy compatibility, `true`
         * is equivalent to `"warn"` and `false` is equivalent to `"off"`.
         * @default "warn"
         */
        reportUnusedDisableDirectives?: boolean | SharedConfig.Severity | SharedConfig.SeverityString;
        /**
         * A severity string indicating if and how unused inline directives
         * should be tracked and reported.
         *
         * since ESLint 9.19.0
         * @default "off"
         */
        reportUnusedInlineConfigs?: SharedConfig.Severity | SharedConfig.SeverityString;
    }
    interface LanguageOptions {
        /**
         * The version of ECMAScript to support.
         * May be any year (i.e., `2022`) or version (i.e., `5`).
         * Set to `"latest"` for the most recent supported version.
         * @default "latest"
         */
        ecmaVersion?: EcmaVersion | undefined;
        /**
         * An object specifying additional objects that should be added to the global scope during linting.
         */
        globals?: GlobalsConfig | undefined;
        /**
         * An object containing a `parse()` method or a `parseForESLint()` method.
         * @default
         * ```
         * // https://github.com/eslint/espree
         * require('espree')
         * ```
         */
        parser?: Parser | undefined;
        /**
         * An object specifying additional options that are passed directly to the parser.
         * The available options are parser-dependent.
         */
        parserOptions?: ParserOptions | undefined;
        /**
         * The type of JavaScript source code.
         * Possible values are `"script"` for traditional script files, `"module"` for ECMAScript modules (ESM), and `"commonjs"` for CommonJS files.
         * @default
         * ```
         * // for `.js` and `.mjs` files
         * "module"
         * // for `.cjs` files
         * "commonjs"
         * ```
         */
        sourceType?: SourceType | undefined;
    }
    interface Config {
        /**
         * The base path for files and ignores.
         *
         * Note that this is not permitted inside an `extends` array.
         *
         * Since ESLint 9.30.0
         */
        basePath?: string;
        /**
         * An array of glob patterns indicating the files that the configuration object should apply to.
         * If not specified, the configuration object applies to all files matched by any other configuration object.
         */
        files?: (string | string[])[];
        /**
         * An array of glob patterns indicating the files that the configuration object should not apply to.
         * If not specified, the configuration object applies to all files matched by files.
         */
        ignores?: string[];
        /**
         * Language specifier in the form `namespace/language-name` where `namespace` is a plugin name set in the `plugins` field.
         */
        language?: string;
        /**
         * An object containing settings related to how JavaScript is configured for linting.
         */
        languageOptions?: LanguageOptions;
        /**
         * An object containing settings related to the linting process.
         */
        linterOptions?: LinterOptions;
        /**
         * An string to identify the configuration object. Used in error messages and inspection tools.
         */
        name?: string;
        /**
         * An object containing a name-value mapping of plugin names to plugin objects.
         * When `files` is specified, these plugins are only available to the matching files.
         */
        plugins?: Plugins;
        /**
         * Either an object containing `preprocess()` and `postprocess()` methods or
         * a string indicating the name of a processor inside of a plugin
         * (i.e., `"pluginName/processorName"`).
         */
        processor?: string | Processor;
        /**
         * An object containing the configured rules.
         * When `files` or `ignores` are specified, these rule configurations are only available to the matching files.
         */
        rules?: Rules;
        /**
         * An object containing name-value pairs of information that should be available to all rules.
         */
        settings?: Settings;
    }
    type ConfigArray = Config[];
    type ConfigPromise = Promise<ConfigArray>;
    type ConfigFile = ConfigArray | ConfigPromise;
}
