/**
 * @fileoverview Define common types for input completion.
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

/** @type {any} */
export default {};

/** @typedef {boolean | "off" | "readable" | "readonly" | "writable" | "writeable"} GlobalConf */
/** @typedef {0 | 1 | 2 | "off" | "warn" | "error"} SeverityConf */
/** @typedef {SeverityConf | [SeverityConf, ...any[]]} RuleConf */

/**
 * @typedef {Object} EcmaFeatures
 * @property {boolean} [globalReturn] Enabling `return` statements at the top-level.
 * @property {boolean} [jsx] Enabling JSX syntax.
 * @property {boolean} [impliedStrict] Enabling strict mode always.
 */

/**
 * @typedef {Object} ParserOptions
 * @property {EcmaFeatures} [ecmaFeatures] The optional features.
 * @property {3|5|6|7|8|9|10|11|12|2015|2016|2017|2018|2019|2020|2021} [ecmaVersion] The ECMAScript version (or revision number).
 * @property {"script"|"module"} [sourceType] The source code type.
 */

/**
 * @typedef {Object} ConfigData
 * @property {Record<string, boolean>} [env] The environment settings.
 * @property {string | string[]} [extends] The path to other config files or the package name of shareable configs.
 * @property {Record<string, GlobalConf>} [globals] The global variable settings.
 * @property {string | string[]} [ignorePatterns] The glob patterns that ignore to lint.
 * @property {boolean} [noInlineConfig] The flag that disables directive comments.
 * @property {OverrideConfigData[]} [overrides] The override settings per kind of files.
 * @property {string} [parser] The path to a parser or the package name of a parser.
 * @property {ParserOptions} [parserOptions] The parser options.
 * @property {string[]} [plugins] The plugin specifiers.
 * @property {string} [processor] The processor specifier.
 * @property {boolean} [reportUnusedDisableDirectives] The flag to report unused `eslint-disable` comments.
 * @property {boolean} [root] The root flag.
 * @property {Record<string, RuleConf>} [rules] The rule settings.
 * @property {Object} [settings] The shared settings.
 */

/**
 * @typedef {Object} OverrideConfigData
 * @property {Record<string, boolean>} [env] The environment settings.
 * @property {string | string[]} [excludedFiles] The glob pattarns for excluded files.
 * @property {string | string[]} [extends] The path to other config files or the package name of shareable configs.
 * @property {string | string[]} files The glob patterns for target files.
 * @property {Record<string, GlobalConf>} [globals] The global variable settings.
 * @property {boolean} [noInlineConfig] The flag that disables directive comments.
 * @property {OverrideConfigData[]} [overrides] The override settings per kind of files.
 * @property {string} [parser] The path to a parser or the package name of a parser.
 * @property {ParserOptions} [parserOptions] The parser options.
 * @property {string[]} [plugins] The plugin specifiers.
 * @property {string} [processor] The processor specifier.
 * @property {boolean} [reportUnusedDisableDirectives] The flag to report unused `eslint-disable` comments.
 * @property {Record<string, RuleConf>} [rules] The rule settings.
 * @property {Object} [settings] The shared settings.
 */

/**
 * @typedef {Object} ParseResult
 * @property {Object} ast The AST.
 * @property {ScopeManager} [scopeManager] The scope manager of the AST.
 * @property {Record<string, any>} [services] The services that the parser provides.
 * @property {Record<string, string[]>} [visitorKeys] The visitor keys of the AST.
 */

/**
 * @typedef {Object} Parser
 * @property {(text:string, options:ParserOptions) => Object} parse The definition of global variables.
 * @property {(text:string, options:ParserOptions) => ParseResult} [parseForESLint] The parser options that will be enabled under this environment.
 */

/**
 * @typedef {Object} Environment
 * @property {Record<string, GlobalConf>} [globals] The definition of global variables.
 * @property {ParserOptions} [parserOptions] The parser options that will be enabled under this environment.
 */

/**
 * @typedef {Object} LintMessage
 * @property {number} column The 1-based column number.
 * @property {number} [endColumn] The 1-based column number of the end location.
 * @property {number} [endLine] The 1-based line number of the end location.
 * @property {boolean} fatal If `true` then this is a fatal error.
 * @property {{range:[number,number], text:string}} [fix] Information for autofix.
 * @property {number} line The 1-based line number.
 * @property {string} message The error message.
 * @property {string|null} ruleId The ID of the rule which makes this message.
 * @property {0|1|2} severity The severity of this message.
 * @property {Array<{desc?: string, messageId?: string, fix: {range: [number, number], text: string}}>} [suggestions] Information for suggestions.
 */

/**
 * @typedef {Object} SuggestionResult
 * @property {string} desc A short description.
 * @property {string} [messageId] Id referencing a message for the description.
 * @property {{ text: string, range: number[] }} fix fix result info
 */

/**
 * @typedef {Object} Processor
 * @property {(text:string, filename:string) => Array<string | { text:string, filename:string }>} [preprocess] The function to extract code blocks.
 * @property {(messagesList:LintMessage[][], filename:string) => LintMessage[]} [postprocess] The function to merge messages.
 * @property {boolean} [supportsAutofix] If `true` then it means the processor supports autofix.
 */

/**
 * @typedef {Object} RuleMetaDocs
 * @property {string} category The category of the rule.
 * @property {string} description The description of the rule.
 * @property {boolean} recommended If `true` then the rule is included in `eslint:recommended` preset.
 * @property {string} url The URL of the rule documentation.
 */

/**
 * @typedef {Object} RuleMeta
 * @property {boolean} [deprecated] If `true` then the rule has been deprecated.
 * @property {RuleMetaDocs} docs The document information of the rule.
 * @property {"code"|"whitespace"} [fixable] The autofix type.
 * @property {Record<string,string>} [messages] The messages the rule reports.
 * @property {string[]} [replacedBy] The IDs of the alternative rules.
 * @property {Array|Object} schema The option schema of the rule.
 * @property {"problem"|"suggestion"|"layout"} type The rule type.
 */

/**
 * @typedef {Object} Rule
 * @property {Function} create The factory of the rule.
 * @property {RuleMeta} meta The meta data of the rule.
 */

/**
 * @typedef {Object} Plugin
 * @property {Record<string, ConfigData>} [configs] The definition of plugin configs.
 * @property {Record<string, Environment>} [environments] The definition of plugin environments.
 * @property {Record<string, Processor>} [processors] The definition of plugin processors.
 * @property {Record<string, Function | Rule>} [rules] The definition of plugin rules.
 */

/**
 * Information of deprecated rules.
 * @typedef {Object} DeprecatedRuleInfo
 * @property {string} ruleId The rule ID.
 * @property {string[]} replacedBy The rule IDs that replace this deprecated rule.
 */
