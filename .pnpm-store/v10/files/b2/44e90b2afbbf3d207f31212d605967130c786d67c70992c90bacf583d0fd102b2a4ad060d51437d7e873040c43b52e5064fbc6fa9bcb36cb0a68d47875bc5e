/**
 * @fileoverview Main Linter Class
 * @author Gyandeep Singh
 * @author aladdin-add
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("node:path"),
	eslintScope = require("eslint-scope"),
	evk = require("eslint-visitor-keys"),
	espree = require("espree"),
	merge = require("lodash.merge"),
	pkg = require("../../package.json"),
	{
		Legacy: {
			ConfigOps,
			ConfigValidator,
			environments: BuiltInEnvironments,
		},
	} = require("@eslint/eslintrc/universal"),
	Traverser = require("../shared/traverser"),
	{ SourceCode } = require("../languages/js/source-code"),
	applyDisableDirectives = require("./apply-disable-directives"),
	{ ConfigCommentParser } = require("@eslint/plugin-kit"),
	Rules = require("./rules"),
	SourceCodeFixer = require("./source-code-fixer"),
	{ SourceCodeVisitor } = require("./source-code-visitor"),
	timing = require("./timing");
const { FlatConfigArray } = require("../config/flat-config-array");
const { startTime, endTime } = require("../shared/stats");
const { assertIsRuleSeverity } = require("../config/flat-config-schema");
const {
	normalizeSeverityToString,
	normalizeSeverityToNumber,
} = require("../shared/severity");
const { deepMergeArrays } = require("../shared/deep-merge-arrays");
const jslang = require("../languages/js");
const {
	activeFlags,
	inactiveFlags,
	getInactivityReasonMessage,
} = require("../shared/flags");
const debug = require("debug")("eslint:linter");
const MAX_AUTOFIX_PASSES = 10;
const DEFAULT_PARSER_NAME = "espree";
const DEFAULT_ECMA_VERSION = 5;
const commentParser = new ConfigCommentParser();
const parserSymbol = Symbol.for("eslint.RuleTester.parser");
const { LATEST_ECMA_VERSION } = require("../../conf/ecma-version");
const { VFile } = require("./vfile");
const { ParserService } = require("../services/parser-service");
const { FileContext } = require("./file-context");
const { ProcessorService } = require("../services/processor-service");
const { containsDifferentProperty } = require("../shared/option-utils");
const { Config } = require("../config/config");
const { WarningService } = require("../services/warning-service");
const { SourceCodeTraverser } = require("./source-code-traverser");
const { FileReport, updateLocationInformation } = require("./file-report");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/** @import { Language, LanguageOptions, RuleConfig, RuleDefinition, RuleSeverity } from "@eslint/core" */

/** @typedef {import("../types").Linter.Config} Config */
/** @typedef {import("../types").ESLint.ConfigData} ConfigData */
/** @typedef {import("../types").ESLint.Environment} Environment */
/** @typedef {import("../types").Linter.GlobalConf} GlobalConf */
/** @typedef {import("../types").Linter.LanguageOptions} JSLanguageOptions */
/** @typedef {import("../types").Linter.LintMessage} LintMessage */
/** @typedef {import("../types").Linter.Parser} Parser */
/** @typedef {import("../types").Linter.ParserOptions} ParserOptions */
/** @typedef {import("../types").Linter.Processor} Processor */
/** @typedef {import("../types").Rule.RuleModule} Rule */
/** @typedef {import("../types").Linter.StringSeverity} StringSeverity */
/** @typedef {import("../types").Linter.SuppressedLintMessage} SuppressedLintMessage */
/** @typedef {import("../types").Linter.TimePass} TimePass */

/* eslint-disable jsdoc/valid-types -- https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser/issues/4#issuecomment-778805577 */
/**
 * @template T
 * @typedef {{ [P in keyof T]-?: T[P] }} Required
 */
/* eslint-enable jsdoc/valid-types -- https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser/issues/4#issuecomment-778805577 */

/**
 * @typedef {Object} DisableDirective
 * @property {("disable"|"enable"|"disable-line"|"disable-next-line")} type Type of directive
 * @property {number} line The line number
 * @property {number} column The column number
 * @property {(string|null)} ruleId The rule ID
 * @property {string} justification The justification of directive
 */

/**
 * The private data for `Linter` instance.
 * @typedef {Object} LinterInternalSlots
 * @property {ConfigArray|null} lastConfigArray The `ConfigArray` instance that the last `verify()` call used.
 * @property {SourceCode|null} lastSourceCode The `SourceCode` instance that the last `verify()` call used.
 * @property {SuppressedLintMessage[]} lastSuppressedMessages The `SuppressedLintMessage[]` instance that the last `verify()` call produced.
 * @property {Map<string, Parser>} parserMap The loaded parsers.
 * @property {{ passes: TimePass[]; }} times The times spent on applying a rule to a file (see `stats` option).
 * @property {Rules} ruleMap The loaded rules.
 * @property {WarningService} warningService The warning service.
 */

/**
 * @typedef {Object} VerifyOptions
 * @property {boolean} [allowInlineConfig] Allow/disallow inline comments' ability
 *      to change config once it is set. Defaults to true if not supplied.
 *      Useful if you want to validate JS without comments overriding rules.
 * @property {boolean} [disableFixes] if `true` then the linter doesn't make `fix`
 *      properties into the lint result.
 * @property {string} [filename] the filename of the source code.
 * @property {boolean | "off" | "warn" | "error"} [reportUnusedDisableDirectives] Adds reported errors for
 *      unused `eslint-disable` directives.
 * @property {Function} [ruleFilter] A predicate function that determines whether a given rule should run.
 */

/**
 * @typedef {Object} ProcessorOptions
 * @property {(filename:string, text:string) => boolean} [filterCodeBlock] the
 *      predicate function that selects adopt code blocks.
 * @property {Processor.postprocess} [postprocess] postprocessor for report
 *      messages. If provided, this should accept an array of the message lists
 *      for each code block returned from the preprocessor, apply a mapping to
 *      the messages as appropriate, and return a one-dimensional array of
 *      messages.
 * @property {Processor.preprocess} [preprocess] preprocessor for source text.
 *      If provided, this should accept a string of source text, and return an
 *      array of code blocks to lint.
 */

/**
 * @typedef {Object} FixOptions
 * @property {boolean | ((message: LintMessage) => boolean)} [fix] Determines
 *      whether fixes should be applied.
 */

/**
 * @typedef {Object} InternalOptions
 * @property {string | null} warnInlineConfig The config name what `noInlineConfig` setting came from. If `noInlineConfig` setting didn't exist, this is null. If this is a config name, then the linter warns directive comments.
 * @property {StringSeverity} reportUnusedDisableDirectives Severity to report unused disable directives, if not "off" (boolean values were normalized).
 * @property {StringSeverity} reportUnusedInlineConfigs Severity to report unused inline configs, if not "off".
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines if a given object is Espree.
 * @param {Object} parser The parser to check.
 * @returns {boolean} True if the parser is Espree or false if not.
 */
function isEspree(parser) {
	return !!(parser === espree || parser[parserSymbol] === espree);
}

/**
 * Ensures that variables representing built-in properties of the Global Object,
 * and any globals declared by special block comments, are present in the global
 * scope.
 * @param {Scope} globalScope The global scope.
 * @param {Object} configGlobals The globals declared in configuration
 * @param {{exportedVariables: Object, enabledGlobals: Object}} commentDirectives Directives from comment configuration
 * @returns {void}
 */
function addDeclaredGlobals(
	globalScope,
	configGlobals,
	{ exportedVariables, enabledGlobals },
) {
	// Define configured global variables.
	for (const id of new Set([
		...Object.keys(configGlobals),
		...Object.keys(enabledGlobals),
	])) {
		/*
		 * `ConfigOps.normalizeConfigGlobal` will throw an error if a configured global value is invalid. However, these errors would
		 * typically be caught when validating a config anyway (validity for inline global comments is checked separately).
		 */
		const configValue =
			configGlobals[id] === void 0
				? void 0
				: ConfigOps.normalizeConfigGlobal(configGlobals[id]);
		const commentValue = enabledGlobals[id] && enabledGlobals[id].value;
		const value = commentValue || configValue;
		const sourceComments =
			enabledGlobals[id] && enabledGlobals[id].comments;

		if (value === "off") {
			continue;
		}

		let variable = globalScope.set.get(id);

		if (!variable) {
			variable = new eslintScope.Variable(id, globalScope);

			globalScope.variables.push(variable);
			globalScope.set.set(id, variable);
		}

		variable.eslintImplicitGlobalSetting = configValue;
		variable.eslintExplicitGlobal = sourceComments !== void 0;
		variable.eslintExplicitGlobalComments = sourceComments;
		variable.writeable = value === "writable";
	}

	// mark all exported variables as such
	Object.keys(exportedVariables).forEach(name => {
		const variable = globalScope.set.get(name);

		if (variable) {
			variable.eslintUsed = true;
			variable.eslintExported = true;
		}
	});

	/*
	 * "through" contains all references which definitions cannot be found.
	 * Since we augment the global scope using configuration, we need to update
	 * references and remove the ones that were added by configuration.
	 */
	globalScope.through = globalScope.through.filter(reference => {
		const name = reference.identifier.name;
		const variable = globalScope.set.get(name);

		if (variable) {
			/*
			 * Links the variable and the reference.
			 * And this reference is removed from `Scope#through`.
			 */
			reference.resolved = variable;
			variable.references.push(reference);

			return false;
		}

		return true;
	});
}

/**
 * Wraps the value in an Array if it isn't already one.
 * @template T
 * @param {T|T[]} value Value to be wrapped.
 * @returns {Array} The value as an array.
 */
function asArray(value) {
	return Array.isArray(value) ? value : [value];
}

/**
 * Pushes a problem to inlineConfigProblems if ruleOptions are redundant.
 * @param {Config} config Provided config.
 * @param {Object} loc A line/column location
 * @param {FileReport} report Report that may be added to.
 * @param {string} ruleId The rule ID.
 * @param {Array} ruleOptions The rule options, merged with the config's.
 * @param {Array} ruleOptionsInline The rule options from the comment.
 * @param {"error"|"warn"} severity The severity to report.
 * @returns {void}
 */
function addProblemIfSameSeverityAndOptions(
	config,
	loc,
	report,
	ruleId,
	ruleOptions,
	ruleOptionsInline,
	severity,
) {
	const existingConfigRaw = config.rules?.[ruleId];
	const existingConfig = existingConfigRaw
		? asArray(existingConfigRaw)
		: ["off"];
	const existingSeverity = normalizeSeverityToString(existingConfig[0]);
	const inlineSeverity = normalizeSeverityToString(ruleOptions[0]);
	const sameSeverity = existingSeverity === inlineSeverity;

	if (!sameSeverity) {
		return;
	}

	const alreadyConfigured = existingConfigRaw
		? `is already configured to '${existingSeverity}'`
		: "is not enabled so can't be turned off";
	let message;

	if (
		(existingConfig.length === 1 && ruleOptions.length === 1) ||
		existingSeverity === "off"
	) {
		message = `Unused inline config ('${ruleId}' ${alreadyConfigured}).`;
	} else if (
		!containsDifferentProperty(
			ruleOptions.slice(1),
			existingConfig.slice(1),
		)
	) {
		message =
			ruleOptionsInline.length === 1
				? `Unused inline config ('${ruleId}' ${alreadyConfigured}).`
				: `Unused inline config ('${ruleId}' ${alreadyConfigured} with the same options).`;
	}

	if (message) {
		const numericSeverity = normalizeSeverityToNumber(severity);
		const descriptor = {
			message,
			loc,
		};

		if (numericSeverity === 1) {
			report.addWarning(descriptor);
		} else if (numericSeverity === 2) {
			report.addError(descriptor);
		}
	}
}

/**
 * Creates a collection of disable directives from a comment
 * @param {Object} options to create disable directives
 * @param {("disable"|"enable"|"disable-line"|"disable-next-line")} options.type The type of directive comment
 * @param {string} options.value The value after the directive in the comment
 * comment specified no specific rules, so it applies to all rules (e.g. `eslint-disable`)
 * @param {string} options.justification The justification of the directive
 * @param {ASTNode|token} options.node The Comment node/token.
 * @param {function(string): {create: Function}} ruleMapper A map from rule IDs to defined rules
 * @param {Language} language The language to use to adjust the location information.
 * @param {SourceCode} sourceCode The SourceCode object to get comments from.
 * @param {FileReport} report The report to add problems to.
 * @returns {Object[]} Directives from the comment
 */
function createDisableDirectives(
	{ type, value, justification, node },
	ruleMapper,
	language,
	sourceCode,
	report,
) {
	const ruleIds = Object.keys(commentParser.parseListConfig(value));
	const directiveRules = ruleIds.length ? ruleIds : [null];
	const directives = []; // valid disable directives
	const parentDirective = { node, value, ruleIds };

	for (const ruleId of directiveRules) {
		const loc = sourceCode.getLoc(node);

		// push to directives, if the rule is defined(including null, e.g. /*eslint enable*/)
		if (ruleId === null || !!ruleMapper(ruleId)) {
			if (type === "disable-next-line") {
				const { line, column } = updateLocationInformation(
					loc.end,
					language,
				);

				directives.push({
					parentDirective,
					type,
					line,
					column,
					ruleId,
					justification,
				});
			} else {
				const { line, column } = updateLocationInformation(
					loc.start,
					language,
				);

				directives.push({
					parentDirective,
					type,
					line,
					column,
					ruleId,
					justification,
				});
			}
		} else {
			report.addError({ ruleId, loc });
		}
	}

	return directives;
}

/**
 * Parses comments in file to extract file-specific config of rules, globals
 * and environments and merges them with global config; also code blocks
 * where reporting is disabled or enabled and merges them with reporting config.
 * @param {SourceCode} sourceCode The SourceCode object to get comments from.
 * @param {function(string): {create: Function}} ruleMapper A map from rule IDs to defined rules
 * @param {string|null} warnInlineConfig If a string then it should warn directive comments as disabled. The string value is the config name what the setting came from.
 * @param {ConfigData} config Provided config.
 * @param {FileReport} report The report to add problems to.
 * @returns {{configuredRules: Object, enabledGlobals: {value:string,comment:Token}[], exportedVariables: Object, disableDirectives: DisableDirective[]}}
 * A collection of the directive comments that were found, along with any problems that occurred when parsing
 */
function getDirectiveComments(
	sourceCode,
	ruleMapper,
	warnInlineConfig,
	config,
	report,
) {
	const configuredRules = {};
	const enabledGlobals = Object.create(null);
	const exportedVariables = {};
	const disableDirectives = [];
	const validator = new ConfigValidator({
		builtInRules: Rules,
	});

	sourceCode
		.getInlineConfigNodes()
		.filter(token => token.type !== "Shebang")
		.forEach(comment => {
			const directive = commentParser.parseDirective(comment.value);

			if (!directive) {
				return;
			}

			const {
				label,
				value,
				justification: justificationPart,
			} = directive;

			const lineCommentSupported =
				/^eslint-disable-(?:next-)?line$/u.test(label);

			if (comment.type === "Line" && !lineCommentSupported) {
				return;
			}

			const loc = sourceCode.getLoc(comment);

			if (warnInlineConfig) {
				const kind =
					comment.type === "Block" ? `/*${label}*/` : `//${label}`;

				report.addWarning({
					ruleId: null,
					message: `'${kind}' has no effect because you have 'noInlineConfig' setting in ${warnInlineConfig}.`,
					loc,
				});
				return;
			}

			if (
				label === "eslint-disable-line" &&
				loc.start.line !== loc.end.line
			) {
				const message = `${label} comment should not span multiple lines.`;

				report.addError({
					message,
					loc,
				});
				return;
			}

			switch (label) {
				case "eslint-disable":
				case "eslint-enable":
				case "eslint-disable-next-line":
				case "eslint-disable-line": {
					const directiveType = label.slice("eslint-".length);
					const directives = createDisableDirectives(
						{
							type: directiveType,
							value,
							justification: justificationPart,
							node: comment,
						},
						ruleMapper,
						jslang,
						sourceCode,
						report,
					);

					disableDirectives.push(...directives);
					break;
				}

				case "exported":
					Object.assign(
						exportedVariables,
						commentParser.parseListConfig(value),
					);
					break;

				case "globals":
				case "global":
					for (const [id, idSetting] of Object.entries(
						commentParser.parseStringConfig(value),
					)) {
						let normalizedValue;

						try {
							normalizedValue =
								ConfigOps.normalizeConfigGlobal(idSetting);
						} catch (err) {
							report.addError({
								loc,
								message: err.message,
							});
							continue;
						}

						if (enabledGlobals[id]) {
							enabledGlobals[id].comments.push(comment);
							enabledGlobals[id].value = normalizedValue;
						} else {
							enabledGlobals[id] = {
								comments: [comment],
								value: normalizedValue,
							};
						}
					}
					break;

				case "eslint": {
					const parseResult =
						commentParser.parseJSONLikeConfig(value);

					if (parseResult.ok) {
						Object.keys(parseResult.config).forEach(name => {
							const rule = ruleMapper(name);
							const ruleValue = parseResult.config[name];

							if (!rule) {
								report.addError({ ruleId: name, loc });
								return;
							}

							if (Object.hasOwn(configuredRules, name)) {
								report.addError({
									message: `Rule "${name}" is already configured by another configuration comment in the preceding code. This configuration is ignored.`,
									loc,
								});
								return;
							}

							let ruleOptions = asArray(ruleValue);

							/*
							 * If the rule was already configured, inline rule configuration that
							 * only has severity should retain options from the config and just override the severity.
							 *
							 * Example:
							 *
							 *   {
							 *       rules: {
							 *           curly: ["error", "multi"]
							 *       }
							 *   }
							 *
							 *   /* eslint curly: ["warn"] * /
							 *
							 *   Results in:
							 *
							 *   curly: ["warn", "multi"]
							 */
							if (
								/*
								 * If inline config for the rule has only severity
								 */
								ruleOptions.length === 1 &&
								/*
								 * And the rule was already configured
								 */
								config.rules &&
								Object.hasOwn(config.rules, name)
							) {
								/*
								 * Then use severity from the inline config and options from the provided config
								 */
								ruleOptions = [
									ruleOptions[0], // severity from the inline config
									...asArray(config.rules[name]).slice(1), // options from the provided config
								];
							}

							try {
								validator.validateRuleOptions(
									rule,
									name,
									ruleOptions,
								);
							} catch (err) {
								/*
								 * If the rule has invalid `meta.schema`, throw the error because
								 * this is not an invalid inline configuration but an invalid rule.
								 */
								if (
									err.code ===
									"ESLINT_INVALID_RULE_OPTIONS_SCHEMA"
								) {
									throw err;
								}

								report.addError({
									ruleId: name,
									message: err.message,
									loc,
								});

								// do not apply the config, if found invalid options.
								return;
							}

							configuredRules[name] = ruleOptions;
						});
					} else {
						report.addFatal({
							loc,
							message: parseResult.error.message,
						});
					}

					break;
				}

				// no default
			}
		});

	return {
		configuredRules,
		enabledGlobals,
		exportedVariables,
		disableDirectives,
	};
}

/**
 * Parses comments in file to extract disable directives.
 * @param {SourceCode} sourceCode The SourceCode object to get comments from.
 * @param {function(string): {create: Function}} ruleMapper A map from rule IDs to defined rules
 * @param {Language} language The language to use to adjust the location information
 * @param {FileReport} report The report to add problems to.
 * @returns {DisableDirective[]}
 * A collection of the directive comments that were found, along with any problems that occurred when parsing
 */
function getDirectiveCommentsForFlatConfig(
	sourceCode,
	ruleMapper,
	language,
	report,
) {
	const disableDirectives = [];

	if (sourceCode.getDisableDirectives) {
		const { directives: directivesSources, problems: directivesProblems } =
			sourceCode.getDisableDirectives();

		if (Array.isArray(directivesProblems)) {
			directivesProblems.forEach(problem => report.addError(problem));
		}

		directivesSources.forEach(directive => {
			const directives = createDisableDirectives(
				directive,
				ruleMapper,
				language,
				sourceCode,
				report,
			);

			disableDirectives.push(...directives);
		});
	}

	return disableDirectives;
}

/**
 * Normalize ECMAScript version from the initial config
 * @param {Parser} parser The parser which uses this options.
 * @param {number} ecmaVersion ECMAScript version from the initial config
 * @returns {number} normalized ECMAScript version
 */
function normalizeEcmaVersion(parser, ecmaVersion) {
	if (isEspree(parser)) {
		if (ecmaVersion === "latest") {
			return espree.latestEcmaVersion;
		}
	}

	/*
	 * Calculate ECMAScript edition number from official year version starting with
	 * ES2015, which corresponds with ES6 (or a difference of 2009).
	 */
	return ecmaVersion >= 2015 ? ecmaVersion - 2009 : ecmaVersion;
}

/**
 * Normalize ECMAScript version from the initial config into languageOptions (year)
 * format.
 * @param {any} [ecmaVersion] ECMAScript version from the initial config
 * @returns {number} normalized ECMAScript version
 */
function normalizeEcmaVersionForLanguageOptions(ecmaVersion) {
	switch (ecmaVersion) {
		case 3:
			return 3;

		// void 0 = no ecmaVersion specified so use the default
		case 5:
		case void 0:
			return 5;

		default:
			if (typeof ecmaVersion === "number") {
				return ecmaVersion >= 2015 ? ecmaVersion : ecmaVersion + 2009;
			}
	}

	/*
	 * We default to the latest supported ecmaVersion for everything else.
	 * Remember, this is for languageOptions.ecmaVersion, which sets the version
	 * that is used for a number of processes inside of ESLint. It's normally
	 * safe to assume people want the latest unless otherwise specified.
	 */
	return LATEST_ECMA_VERSION;
}

const eslintEnvPattern = /\/\*\s*eslint-env\s.+?(?:\*\/|$)/gsu;

/**
 * Checks whether or not there is a comment which has "eslint-env *" in a given text.
 * @param {string} text A source code text to check.
 * @returns {Object|null} A result of parseListConfig() with "eslint-env *" comment.
 */
function findEslintEnv(text) {
	let match, retv;

	eslintEnvPattern.lastIndex = 0;

	while ((match = eslintEnvPattern.exec(text)) !== null) {
		if (match[0].endsWith("*/")) {
			retv = Object.assign(
				retv || {},
				commentParser.parseListConfig(
					commentParser.parseDirective(match[0].slice(2, -2)).value,
				),
			);
		}
	}

	return retv;
}

/**
 * Convert "/path/to/<text>" to "<text>".
 * `CLIEngine#executeOnText()` method gives "/path/to/<text>" if the filename
 * was omitted because `configArray.extractConfig()` requires an absolute path.
 * But the linter should pass `<text>` to `RuleContext#filename` in that
 * case.
 * Also, code blocks can have their virtual filename. If the parent filename was
 * `<text>`, the virtual filename is `<text>/0_foo.js` or something like (i.e.,
 * it's not an absolute path).
 * @param {string} filename The filename to normalize.
 * @returns {string} The normalized filename.
 */
function normalizeFilename(filename) {
	const parts = filename.split(path.sep);
	const index = parts.lastIndexOf("<text>");

	return index === -1 ? filename : parts.slice(index).join(path.sep);
}

/**
 * Normalizes the possible options for `linter.verify` and `linter.verifyAndFix` to a
 * consistent shape.
 * @param {VerifyOptions} providedOptions Options
 * @param {Config|ConfigData} config Config.
 * @returns {Required<VerifyOptions> & InternalOptions} Normalized options
 */
function normalizeVerifyOptions(providedOptions, config) {
	const linterOptions = config.linterOptions || config;

	// .noInlineConfig for eslintrc, .linterOptions.noInlineConfig for flat
	const disableInlineConfig = linterOptions.noInlineConfig === true;
	const ignoreInlineConfig = providedOptions.allowInlineConfig === false;
	const configNameOfNoInlineConfig = config.configNameOfNoInlineConfig
		? ` (${config.configNameOfNoInlineConfig})`
		: "";

	let reportUnusedDisableDirectives =
		providedOptions.reportUnusedDisableDirectives;

	if (typeof reportUnusedDisableDirectives === "boolean") {
		reportUnusedDisableDirectives = reportUnusedDisableDirectives
			? "error"
			: "off";
	}
	if (typeof reportUnusedDisableDirectives !== "string") {
		if (typeof linterOptions.reportUnusedDisableDirectives === "boolean") {
			reportUnusedDisableDirectives =
				linterOptions.reportUnusedDisableDirectives ? "warn" : "off";
		} else {
			reportUnusedDisableDirectives =
				linterOptions.reportUnusedDisableDirectives === void 0
					? "off"
					: normalizeSeverityToString(
							linterOptions.reportUnusedDisableDirectives,
						);
		}
	}

	const reportUnusedInlineConfigs =
		linterOptions.reportUnusedInlineConfigs === void 0
			? "off"
			: normalizeSeverityToString(
					linterOptions.reportUnusedInlineConfigs,
				);

	let ruleFilter = providedOptions.ruleFilter;

	if (typeof ruleFilter !== "function") {
		ruleFilter = () => true;
	}

	return {
		filename: normalizeFilename(providedOptions.filename || "<input>"),
		allowInlineConfig: !ignoreInlineConfig,
		warnInlineConfig:
			disableInlineConfig && !ignoreInlineConfig
				? `your config${configNameOfNoInlineConfig}`
				: null,
		reportUnusedDisableDirectives,
		reportUnusedInlineConfigs,
		disableFixes: Boolean(providedOptions.disableFixes),
		stats: providedOptions.stats,
		ruleFilter,
	};
}

/**
 * Combines the provided parserOptions with the options from environments
 * @param {Parser} parser The parser which uses this options.
 * @param {ParserOptions} providedOptions The provided 'parserOptions' key in a config
 * @param {Environment[]} enabledEnvironments The environments enabled in configuration and with inline comments
 * @returns {ParserOptions} Resulting parser options after merge
 */
function resolveParserOptions(parser, providedOptions, enabledEnvironments) {
	const parserOptionsFromEnv = enabledEnvironments
		.filter(env => env.parserOptions)
		.reduce(
			(parserOptions, env) => merge(parserOptions, env.parserOptions),
			{},
		);
	const mergedParserOptions = merge(
		parserOptionsFromEnv,
		providedOptions || {},
	);
	const isModule = mergedParserOptions.sourceType === "module";

	if (isModule) {
		/*
		 * can't have global return inside of modules
		 * TODO: espree validate parserOptions.globalReturn when sourceType is setting to module.(@aladdin-add)
		 */
		mergedParserOptions.ecmaFeatures = Object.assign(
			{},
			mergedParserOptions.ecmaFeatures,
			{ globalReturn: false },
		);
	}

	mergedParserOptions.ecmaVersion = normalizeEcmaVersion(
		parser,
		mergedParserOptions.ecmaVersion,
	);

	return mergedParserOptions;
}

/**
 * Converts parserOptions to languageOptions for backwards compatibility with eslintrc.
 * @param {ConfigData} config Config object.
 * @param {Object} config.globals Global variable definitions.
 * @param {Parser} config.parser The parser to use.
 * @param {ParserOptions} config.parserOptions The parserOptions to use.
 * @returns {JSLanguageOptions} The languageOptions equivalent.
 */
function createLanguageOptions({
	globals: configuredGlobals,
	parser,
	parserOptions,
}) {
	const { ecmaVersion, sourceType } = parserOptions;

	return {
		globals: configuredGlobals,
		ecmaVersion: normalizeEcmaVersionForLanguageOptions(ecmaVersion),
		sourceType,
		parser,
		parserOptions,
	};
}

/**
 * Combines the provided globals object with the globals from environments
 * @param {Record<string, GlobalConf>} providedGlobals The 'globals' key in a config
 * @param {Environment[]} enabledEnvironments The environments enabled in configuration and with inline comments
 * @returns {Record<string, GlobalConf>} The resolved globals object
 */
function resolveGlobals(providedGlobals, enabledEnvironments) {
	return Object.assign(
		Object.create(null),
		...enabledEnvironments
			.filter(env => env.globals)
			.map(env => env.globals),
		providedGlobals,
	);
}

/**
 * Store time measurements in map
 * @param {number} time Time measurement
 * @param {Object} timeOpts Options relating which time was measured
 * @param {WeakMap<Linter, LinterInternalSlots>} slots Linter internal slots map
 * @returns {void}
 */
function storeTime(time, timeOpts, slots) {
	const { type, key } = timeOpts;

	if (!slots.times) {
		slots.times = { passes: [{}] };
	}

	const passIndex = slots.fixPasses;

	if (passIndex > slots.times.passes.length - 1) {
		slots.times.passes.push({});
	}

	if (key) {
		slots.times.passes[passIndex][type] ??= {};
		slots.times.passes[passIndex][type][key] ??= { total: 0 };
		slots.times.passes[passIndex][type][key].total += time;
	} else {
		slots.times.passes[passIndex][type] ??= { total: 0 };
		slots.times.passes[passIndex][type].total += time;
	}
}

/**
 * Get the options for a rule (not including severity), if any
 * @param {RuleConfig} ruleConfig rule configuration
 * @param {Object|undefined} defaultOptions rule.meta.defaultOptions
 * @returns {Array} of rule options, empty Array if none
 */
function getRuleOptions(ruleConfig, defaultOptions) {
	if (Array.isArray(ruleConfig)) {
		return deepMergeArrays(defaultOptions, ruleConfig.slice(1));
	}
	return defaultOptions ?? [];
}

/**
 * Analyze scope of the given AST.
 * @param {ASTNode} ast The `Program` node to analyze.
 * @param {JSLanguageOptions} languageOptions The language options.
 * @param {Record<string, string[]>} visitorKeys The visitor keys.
 * @returns {ScopeManager} The analysis result.
 */
function analyzeScope(ast, languageOptions, visitorKeys) {
	const parserOptions = languageOptions.parserOptions;
	const ecmaFeatures = parserOptions.ecmaFeatures || {};
	const ecmaVersion = languageOptions.ecmaVersion || DEFAULT_ECMA_VERSION;

	return eslintScope.analyze(ast, {
		ignoreEval: true,
		nodejsScope: ecmaFeatures.globalReturn,
		impliedStrict: ecmaFeatures.impliedStrict,
		ecmaVersion: typeof ecmaVersion === "number" ? ecmaVersion : 6,
		sourceType: languageOptions.sourceType || "script",
		childVisitorKeys: visitorKeys || evk.KEYS,
		fallback: Traverser.getKeys,
	});
}

/**
 * Runs a rule, and gets its listeners
 * @param {RuleDefinition} rule A rule object
 * @param {Context} ruleContext The context that should be passed to the rule
 * @throws {TypeError} If `rule` is not an object with a `create` method
 * @throws {any} Any error during the rule's `create`
 * @returns {Object} A map of selector listeners provided by the rule
 */
function createRuleListeners(rule, ruleContext) {
	if (
		!rule ||
		typeof rule !== "object" ||
		typeof rule.create !== "function"
	) {
		throw new TypeError(
			`Error while loading rule '${ruleContext.id}': Rule must be an object with a \`create\` method`,
		);
	}

	try {
		return rule.create(ruleContext);
	} catch (ex) {
		ex.message = `Error while loading rule '${ruleContext.id}': ${ex.message}`;
		throw ex;
	}
}

/**
 * Runs the given rules on the given SourceCode object
 * @param {SourceCode} sourceCode A SourceCode object for the given text
 * @param {Object} configuredRules The rules configuration
 * @param {function(string): RuleDefinition} ruleMapper A mapper function from rule names to rules
 * @param {string | undefined} parserName The name of the parser in the config
 * @param {Language} language The language object used for parsing.
 * @param {LanguageOptions} languageOptions The options for parsing the code.
 * @param {Object} settings The settings that were enabled in the config
 * @param {string} filename The reported filename of the code
 * @param {boolean} applyDefaultOptions If true, apply rules' meta.defaultOptions in computing their config options.
 * @param {string | undefined} cwd cwd of the cli
 * @param {string} physicalFilename The full path of the file on disk without any code block information
 * @param {Function} ruleFilter A predicate function to filter which rules should be executed.
 * @param {boolean} stats If true, stats are collected appended to the result
 * @param {WeakMap<Linter, LinterInternalSlots>} slots InternalSlotsMap of linter
 * @param {FileReport} report The report to add problems to
 * @returns {FileReport} report The report with added problems
 * @throws {Error} If traversal into a node fails.
 */
function runRules(
	sourceCode,
	configuredRules,
	ruleMapper,
	parserName,
	language,
	languageOptions,
	settings,
	filename,
	applyDefaultOptions,
	cwd,
	physicalFilename,
	ruleFilter,
	stats,
	slots,
	report,
) {
	const visitor = new SourceCodeVisitor();

	/*
	 * Create a frozen object with the ruleContext properties and methods that are shared by all rules.
	 * All rule contexts will inherit from this object. This avoids the performance penalty of copying all the
	 * properties once for each rule.
	 */
	const fileContext = new FileContext({
		cwd,
		filename,
		physicalFilename: physicalFilename || filename,
		sourceCode,
		parserOptions: {
			...languageOptions.parserOptions,
		},
		parserPath: parserName,
		languageOptions,
		settings,
	});

	const steps = sourceCode.traverse();

	Object.keys(configuredRules).forEach(ruleId => {
		const severity = Config.getRuleNumericSeverity(configuredRules[ruleId]);

		// not load disabled rules
		if (severity === 0) {
			return;
		}

		if (ruleFilter && !ruleFilter({ ruleId, severity })) {
			return;
		}

		const rule = ruleMapper(ruleId);

		if (!rule) {
			report.addError({ ruleId });
			return;
		}

		const ruleContext = fileContext.extend({
			id: ruleId,
			options: getRuleOptions(
				configuredRules[ruleId],
				applyDefaultOptions ? rule.meta?.defaultOptions : void 0,
			),
			report(...args) {
				const problem = report.addRuleMessage(
					ruleId,
					severity,
					...args,
				);

				if (problem.fix && !(rule.meta && rule.meta.fixable)) {
					throw new Error(
						'Fixable rules must set the `meta.fixable` property to "code" or "whitespace".',
					);
				}

				if (
					problem.suggestions &&
					!(rule.meta && rule.meta.hasSuggestions === true)
				) {
					if (
						rule.meta &&
						rule.meta.docs &&
						typeof rule.meta.docs.suggestion !== "undefined"
					) {
						// Encourage migration from the former property name.
						throw new Error(
							"Rules with suggestions must set the `meta.hasSuggestions` property to `true`. `meta.docs.suggestion` is ignored by ESLint.",
						);
					}
					throw new Error(
						"Rules with suggestions must set the `meta.hasSuggestions` property to `true`.",
					);
				}
			},
		});

		const ruleListenersReturn =
			timing.enabled || stats
				? timing.time(
						ruleId,
						createRuleListeners,
						stats,
					)(rule, ruleContext)
				: createRuleListeners(rule, ruleContext);

		const ruleListeners = stats
			? ruleListenersReturn.result
			: ruleListenersReturn;

		if (stats) {
			storeTime(
				ruleListenersReturn.tdiff,
				{ type: "rules", key: ruleId },
				slots,
			);
		}

		/**
		 * Include `ruleId` in error logs
		 * @param {Function} ruleListener A rule method that listens for a node.
		 * @returns {Function} ruleListener wrapped in error handler
		 */
		function addRuleErrorHandler(ruleListener) {
			return function ruleErrorHandler(...listenerArgs) {
				try {
					const ruleListenerReturn = ruleListener(...listenerArgs);

					const ruleListenerResult = stats
						? ruleListenerReturn.result
						: ruleListenerReturn;

					if (stats) {
						storeTime(
							ruleListenerReturn.tdiff,
							{ type: "rules", key: ruleId },
							slots,
						);
					}

					return ruleListenerResult;
				} catch (e) {
					e.ruleId = ruleId;
					throw e;
				}
			};
		}

		if (typeof ruleListeners === "undefined" || ruleListeners === null) {
			throw new Error(
				`The create() function for rule '${ruleId}' did not return an object.`,
			);
		}

		// add all the selectors from the rule as listeners
		Object.keys(ruleListeners).forEach(selector => {
			const ruleListener =
				timing.enabled || stats
					? timing.time(ruleId, ruleListeners[selector], stats)
					: ruleListeners[selector];

			visitor.add(selector, addRuleErrorHandler(ruleListener));
		});
	});

	const traverser = SourceCodeTraverser.getInstance(language);

	traverser.traverseSync(sourceCode, visitor, { steps });

	return report;
}

/**
 * Ensure the source code to be a string.
 * @param {string|SourceCode} textOrSourceCode The text or source code object.
 * @returns {string} The source code text.
 */
function ensureText(textOrSourceCode) {
	if (typeof textOrSourceCode === "object") {
		const { hasBOM, text } = textOrSourceCode;
		const bom = hasBOM ? "\uFEFF" : "";

		return bom + text;
	}

	return String(textOrSourceCode);
}

/**
 * Get an environment.
 * @param {LinterInternalSlots} slots The internal slots of Linter.
 * @param {string} envId The environment ID to get.
 * @returns {Environment|null} The environment.
 */
function getEnv(slots, envId) {
	return (
		(slots.lastConfigArray &&
			slots.lastConfigArray.pluginEnvironments.get(envId)) ||
		BuiltInEnvironments.get(envId) ||
		null
	);
}

/**
 * Get a rule.
 * @param {LinterInternalSlots} slots The internal slots of Linter.
 * @param {string} ruleId The rule ID to get.
 * @returns {Rule|null} The rule.
 */
function getRule(slots, ruleId) {
	return (
		(slots.lastConfigArray &&
			slots.lastConfigArray.pluginRules.get(ruleId)) ||
		slots.ruleMap.get(ruleId)
	);
}

/**
 * Normalize the value of the cwd
 * @param {string | undefined} cwd raw value of the cwd, path to a directory that should be considered as the current working directory, can be undefined.
 * @returns {string | undefined} normalized cwd
 */
function normalizeCwd(cwd) {
	if (cwd) {
		return cwd;
	}
	if (typeof process === "object") {
		return process.cwd();
	}

	// It's more explicit to assign the undefined
	// eslint-disable-next-line no-undefined -- Consistently returning a value
	return undefined;
}

/**
 * The map to store private data.
 * @type {WeakMap<Linter, LinterInternalSlots>}
 */
const internalSlotsMap = new WeakMap();

/**
 * Throws an error when the given linter is in flat config mode.
 * @param {Linter} linter The linter to check.
 * @returns {void}
 * @throws {Error} If the linter is in flat config mode.
 */
function assertEslintrcConfig(linter) {
	const { configType } = internalSlotsMap.get(linter);

	if (configType === "flat") {
		throw new Error(
			"This method cannot be used with flat config. Add your entries directly into the config array.",
		);
	}
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Object that is responsible for verifying JavaScript text
 * @name Linter
 */
class Linter {
	/**
	 * Initialize the Linter.
	 * @param {Object} [config] the config object
	 * @param {string} [config.cwd] path to a directory that should be considered as the current working directory, can be undefined.
	 * @param {Array<string>} [config.flags] the feature flags to enable.
	 * @param {"flat"|"eslintrc"} [config.configType="flat"] the type of config used.
	 * @param {WarningService} [config.warningService] The warning service to use.
	 */
	constructor({
		cwd,
		configType = "flat",
		flags = [],
		warningService = new WarningService(),
	} = {}) {
		const processedFlags = [];

		flags.forEach(flag => {
			if (inactiveFlags.has(flag)) {
				const inactiveFlagData = inactiveFlags.get(flag);
				const inactivityReason =
					getInactivityReasonMessage(inactiveFlagData);
				const message = `The flag '${flag}' is inactive: ${inactivityReason}`;

				if (typeof inactiveFlagData.replacedBy === "undefined") {
					throw new Error(message);
				}

				// if there's a replacement, enable it instead of original
				if (typeof inactiveFlagData.replacedBy === "string") {
					processedFlags.push(inactiveFlagData.replacedBy);
				}

				warningService.emitInactiveFlagWarning(flag, message);

				return;
			}

			if (!activeFlags.has(flag)) {
				throw new Error(`Unknown flag '${flag}'.`);
			}

			processedFlags.push(flag);
		});

		internalSlotsMap.set(this, {
			cwd: normalizeCwd(cwd),
			flags: processedFlags,
			lastConfigArray: null,
			lastSourceCode: null,
			lastSuppressedMessages: [],
			configType, // TODO: Remove after flat config conversion
			parserMap: new Map([["espree", espree]]),
			ruleMap: new Rules(),
			warningService,
		});

		this.version = pkg.version;
	}

	/**
	 * Getter for package version.
	 * @static
	 * @returns {string} The version from package.json.
	 */
	static get version() {
		return pkg.version;
	}

	/**
	 * Indicates if the given feature flag is enabled for this instance.
	 * @param {string} flag The feature flag to check.
	 * @returns {boolean} `true` if the feature flag is enabled, `false` if not.
	 */
	hasFlag(flag) {
		return internalSlotsMap.get(this).flags.includes(flag);
	}

	/**
	 * Lint using eslintrc and without processors.
	 * @param {VFile} file The file to lint.
	 * @param {ConfigData} providedConfig An ESLintConfig instance to configure everything.
	 * @param {VerifyOptions} [providedOptions] The optional filename of the file being checked.
	 * @throws {Error} If during rule execution.
	 * @returns {(LintMessage|SuppressedLintMessage)[]} The results as an array of messages or an empty array if no messages.
	 */
	#eslintrcVerifyWithoutProcessors(file, providedConfig, providedOptions) {
		const slots = internalSlotsMap.get(this);
		const config = providedConfig || {};
		const options = normalizeVerifyOptions(providedOptions, config);

		// Resolve parser.
		let parserName = DEFAULT_PARSER_NAME;
		let parser = espree;

		if (typeof config.parser === "object" && config.parser !== null) {
			parserName = config.parser.filePath;
			parser = config.parser.definition;
		} else if (typeof config.parser === "string") {
			if (!slots.parserMap.has(config.parser)) {
				return [
					{
						ruleId: null,
						fatal: true,
						severity: 2,
						message: `Configured parser '${config.parser}' was not found.`,
						line: 0,
						column: 0,
						nodeType: null,
					},
				];
			}
			parserName = config.parser;
			parser = slots.parserMap.get(config.parser);
		}

		// search and apply "eslint-env *".
		const envInFile =
			options.allowInlineConfig && !options.warnInlineConfig
				? findEslintEnv(file.body)
				: {};
		const resolvedEnvConfig = Object.assign(
			{ builtin: true },
			config.env,
			envInFile,
		);
		const enabledEnvs = Object.keys(resolvedEnvConfig)
			.filter(envName => resolvedEnvConfig[envName])
			.map(envName => getEnv(slots, envName))
			.filter(env => env);

		const parserOptions = resolveParserOptions(
			parser,
			config.parserOptions || {},
			enabledEnvs,
		);
		const configuredGlobals = resolveGlobals(
			config.globals || {},
			enabledEnvs,
		);
		const settings = config.settings || {};
		const languageOptions = createLanguageOptions({
			globals: config.globals,
			parser,
			parserOptions,
		});

		if (!slots.lastSourceCode) {
			let t;

			if (options.stats) {
				t = startTime();
			}

			const parserService = new ParserService();
			const parseResult = parserService.parseSync(file, {
				language: jslang,
				languageOptions,
			});

			if (options.stats) {
				const time = endTime(t);
				const timeOpts = { type: "parse" };

				storeTime(time, timeOpts, slots);
			}

			if (!parseResult.ok) {
				return parseResult.errors;
			}

			slots.lastSourceCode = parseResult.sourceCode;
		} else {
			/*
			 * If the given source code object as the first argument does not have scopeManager, analyze the scope.
			 * This is for backward compatibility (SourceCode is frozen so it cannot rebind).
			 */
			if (!slots.lastSourceCode.scopeManager) {
				slots.lastSourceCode = new SourceCode({
					text: slots.lastSourceCode.text,
					ast: slots.lastSourceCode.ast,
					hasBOM: slots.lastSourceCode.hasBOM,
					parserServices: slots.lastSourceCode.parserServices,
					visitorKeys: slots.lastSourceCode.visitorKeys,
					scopeManager: analyzeScope(
						slots.lastSourceCode.ast,
						languageOptions,
					),
				});
			}
		}

		const sourceCode = slots.lastSourceCode;
		const report = new FileReport({
			ruleMapper: ruleId => getRule(slots, ruleId),
			language: jslang,
			sourceCode,
			disableFixes: options.disableFixes,
		});

		const commentDirectives = options.allowInlineConfig
			? getDirectiveComments(
					sourceCode,
					ruleId => getRule(slots, ruleId),
					options.warnInlineConfig,
					config,
					report,
				)
			: {
					configuredRules: {},
					enabledGlobals: {},
					exportedVariables: {},
					disableDirectives: [],
				};

		addDeclaredGlobals(
			sourceCode.scopeManager.scopes[0],
			configuredGlobals,
			{
				exportedVariables: commentDirectives.exportedVariables,
				enabledGlobals: commentDirectives.enabledGlobals,
			},
		);

		const configuredRules = Object.assign(
			{},
			config.rules,
			commentDirectives.configuredRules,
		);

		try {
			runRules(
				sourceCode,
				configuredRules,
				ruleId => getRule(slots, ruleId),
				parserName,
				jslang,
				languageOptions,
				settings,
				options.filename,
				true,
				slots.cwd,
				providedOptions.physicalFilename,
				null,
				options.stats,
				slots,
				report,
			);
		} catch (err) {
			err.message += `\nOccurred while linting ${options.filename}`;
			debug("An error occurred while traversing");
			debug("Filename:", options.filename);
			if (err.currentNode) {
				const { line } = sourceCode.getLoc(err.currentNode).start;

				debug("Line:", line);
				err.message += `:${line}`;
			}
			debug("Parser Options:", parserOptions);
			debug("Parser Path:", parserName);
			debug("Settings:", settings);

			if (err.ruleId) {
				err.message += `\nRule: "${err.ruleId}"`;
			}

			throw err;
		}

		return applyDisableDirectives({
			language: jslang,
			sourceCode,
			directives: commentDirectives.disableDirectives,
			disableFixes: options.disableFixes,
			problems: report.messages.sort(
				(problemA, problemB) =>
					problemA.line - problemB.line ||
					problemA.column - problemB.column,
			),
			reportUnusedDisableDirectives:
				options.reportUnusedDisableDirectives,
		});
	}

	/**
	 * Same as linter.verify, except without support for processors.
	 * @param {string|SourceCode} textOrSourceCode The text to parse or a SourceCode object.
	 * @param {ConfigData} providedConfig An ESLintConfig instance to configure everything.
	 * @param {VerifyOptions} [providedOptions] The optional filename of the file being checked.
	 * @throws {Error} If during rule execution.
	 * @returns {(LintMessage|SuppressedLintMessage)[]} The results as an array of messages or an empty array if no messages.
	 */
	_verifyWithoutProcessors(
		textOrSourceCode,
		providedConfig,
		providedOptions,
	) {
		const slots = internalSlotsMap.get(this);
		const filename = normalizeFilename(
			providedOptions.filename || "<input>",
		);
		let text;

		// evaluate arguments
		if (typeof textOrSourceCode === "string") {
			slots.lastSourceCode = null;
			text = textOrSourceCode;
		} else {
			slots.lastSourceCode = textOrSourceCode;
			text = textOrSourceCode.text;
		}

		const file = new VFile(filename, text, {
			physicalPath: providedOptions.physicalFilename,
		});

		return this.#eslintrcVerifyWithoutProcessors(
			file,
			providedConfig,
			providedOptions,
		);
	}

	/**
	 * Verifies the text against the rules specified by the second argument.
	 * @param {string|SourceCode} textOrSourceCode The text to parse or a SourceCode object.
	 * @param {ConfigData|ConfigArray} config An ESLintConfig instance to configure everything.
	 * @param {(string|(VerifyOptions&ProcessorOptions))} [filenameOrOptions] The optional filename of the file being checked.
	 *      If this is not set, the filename will default to '<input>' in the rule context. If
	 *      an object, then it has "filename", "allowInlineConfig", and some properties.
	 * @returns {LintMessage[]} The results as an array of messages or an empty array if no messages.
	 */
	verify(textOrSourceCode, config, filenameOrOptions) {
		debug("Verify");

		const { configType, cwd } = internalSlotsMap.get(this);

		const options =
			typeof filenameOrOptions === "string"
				? { filename: filenameOrOptions }
				: filenameOrOptions || {};

		const configToUse = config ?? {};

		if (configType !== "eslintrc") {
			/*
			 * Because of how Webpack packages up the files, we can't
			 * compare directly to `FlatConfigArray` using `instanceof`
			 * because it's not the same `FlatConfigArray` as in the tests.
			 * So, we work around it by assuming an array is, in fact, a
			 * `FlatConfigArray` if it has a `getConfig()` method.
			 */
			let configArray = configToUse;

			if (
				!Array.isArray(configToUse) ||
				typeof configToUse.getConfig !== "function"
			) {
				configArray = new FlatConfigArray(configToUse, {
					basePath: cwd,
				});
				configArray.normalizeSync();
			}

			return this._distinguishSuppressedMessages(
				this._verifyWithFlatConfigArray(
					textOrSourceCode,
					configArray,
					options,
					true,
				),
			);
		}

		if (typeof configToUse.extractConfig === "function") {
			return this._distinguishSuppressedMessages(
				this._verifyWithConfigArray(
					textOrSourceCode,
					configToUse,
					options,
				),
			);
		}

		/*
		 * If we get to here, it means `config` is just an object rather
		 * than a config array so we can go right into linting.
		 */

		/*
		 * `Linter` doesn't support `overrides` property in configuration.
		 * So we cannot apply multiple processors.
		 */
		if (options.preprocess || options.postprocess) {
			return this._distinguishSuppressedMessages(
				this._verifyWithProcessor(
					textOrSourceCode,
					configToUse,
					options,
				),
			);
		}
		return this._distinguishSuppressedMessages(
			this._verifyWithoutProcessors(
				textOrSourceCode,
				configToUse,
				options,
			),
		);
	}

	/**
	 * Verify with a processor.
	 * @param {string|SourceCode} textOrSourceCode The source code.
	 * @param {Config} config The config array.
	 * @param {VerifyOptions&ProcessorOptions} options The options.
	 * @param {FlatConfigArray} [configForRecursive] The `ConfigArray` object to apply multiple processors recursively.
	 * @returns {(LintMessage|SuppressedLintMessage)[]} The found problems.
	 */
	_verifyWithFlatConfigArrayAndProcessor(
		textOrSourceCode,
		config,
		options,
		configForRecursive,
	) {
		const slots = internalSlotsMap.get(this);
		const filename = options.filename || "<input>";
		const filenameToExpose = normalizeFilename(filename);
		const physicalFilename = options.physicalFilename || filenameToExpose;
		const text = ensureText(textOrSourceCode);
		const file = new VFile(filenameToExpose, text, {
			physicalPath: physicalFilename,
		});

		const preprocess = options.preprocess || (rawText => [rawText]);
		const postprocess =
			options.postprocess || (messagesList => messagesList.flat());

		const processorService = new ProcessorService();
		const preprocessResult = processorService.preprocessSync(file, {
			processor: {
				preprocess,
				postprocess,
			},
		});

		if (!preprocessResult.ok) {
			return preprocessResult.errors;
		}

		const filterCodeBlock =
			options.filterCodeBlock ||
			(blockFilename => blockFilename.endsWith(".js"));
		const originalExtname = path.extname(filename);
		const { files } = preprocessResult;

		const messageLists = files.map(block => {
			debug("A code block was found: %o", block.path || "(unnamed)");

			// Keep the legacy behavior.
			if (typeof block === "string") {
				return this._verifyWithFlatConfigArrayAndWithoutProcessors(
					block,
					config,
					options,
				);
			}

			// Skip this block if filtered.
			if (!filterCodeBlock(block.path, block.body)) {
				debug("This code block was skipped.");
				return [];
			}

			// Resolve configuration again if the file content or extension was changed.
			if (
				configForRecursive &&
				(text !== block.rawBody ||
					path.extname(block.path) !== originalExtname)
			) {
				debug(
					"Resolving configuration again because the file content or extension was changed.",
				);
				return this._verifyWithFlatConfigArray(
					block.rawBody,
					configForRecursive,
					{
						...options,
						filename: block.path,
						physicalFilename: block.physicalPath,
					},
				);
			}

			slots.lastSourceCode = null;

			// Does lint.
			return this.#flatVerifyWithoutProcessors(block, config, {
				...options,
				filename: block.path,
				physicalFilename: block.physicalPath,
			});
		});

		return processorService.postprocessSync(file, messageLists, {
			processor: {
				preprocess,
				postprocess,
			},
		});
	}

	/**
	 * Verify using flat config and without any processors.
	 * @param {VFile} file The file to lint.
	 * @param {Config} providedConfig An ESLintConfig instance to configure everything.
	 * @param {VerifyOptions} [providedOptions] The optional filename of the file being checked.
	 * @throws {Error} If during rule execution.
	 * @returns {(LintMessage|SuppressedLintMessage)[]} The results as an array of messages or an empty array if no messages.
	 */
	#flatVerifyWithoutProcessors(file, providedConfig, providedOptions) {
		const slots = internalSlotsMap.get(this);
		const config = providedConfig || {};
		const { settings = {}, languageOptions } = config;
		const options = normalizeVerifyOptions(providedOptions, config);

		if (!slots.lastSourceCode) {
			let t;

			if (options.stats) {
				t = startTime();
			}

			const parserService = new ParserService();
			const parseResult = parserService.parseSync(file, config);

			if (options.stats) {
				const time = endTime(t);

				storeTime(time, { type: "parse" }, slots);
			}

			if (!parseResult.ok) {
				return parseResult.errors;
			}

			slots.lastSourceCode = parseResult.sourceCode;
		} else {
			/*
			 * If the given source code object as the first argument does not have scopeManager, analyze the scope.
			 * This is for backward compatibility (SourceCode is frozen so it cannot rebind).
			 *
			 * We check explicitly for `null` to ensure that this is a JS-flavored language.
			 * For non-JS languages we don't want to do this.
			 *
			 * TODO: Remove this check when we stop exporting the `SourceCode` object.
			 */
			if (slots.lastSourceCode.scopeManager === null) {
				slots.lastSourceCode = new SourceCode({
					text: slots.lastSourceCode.text,
					ast: slots.lastSourceCode.ast,
					hasBOM: slots.lastSourceCode.hasBOM,
					parserServices: slots.lastSourceCode.parserServices,
					visitorKeys: slots.lastSourceCode.visitorKeys,
					scopeManager: analyzeScope(
						slots.lastSourceCode.ast,
						languageOptions,
					),
				});
			}
		}

		const sourceCode = slots.lastSourceCode;
		const report = new FileReport({
			ruleMapper: ruleId => config.getRuleDefinition(ruleId),
			language: config.language,
			sourceCode,
			disableFixes: options.disableFixes,
		});

		/*
		 * Make adjustments based on the language options. For JavaScript,
		 * this is primarily about adding variables into the global scope
		 * to account for ecmaVersion and configured globals.
		 */
		sourceCode.applyLanguageOptions?.(languageOptions);

		const mergedInlineConfig = {
			rules: {},
		};

		/*
		 * Inline config can be either enabled or disabled. If disabled, it's possible
		 * to detect the inline config and emit a warning (though this is not required).
		 * So we first check to see if inline config is allowed at all, and if so, we
		 * need to check if it's a warning or not.
		 */
		if (options.allowInlineConfig) {
			// if inline config should warn then add the warnings
			if (options.warnInlineConfig) {
				if (sourceCode.getInlineConfigNodes) {
					sourceCode.getInlineConfigNodes().forEach(node => {
						const loc = sourceCode.getLoc(node);
						const range = sourceCode.getRange(node);

						report.addWarning({
							message: `'${sourceCode.text.slice(range[0], range[1])}' has no effect because you have 'noInlineConfig' setting in ${options.warnInlineConfig}.`,
							loc,
						});
					});
				}
			} else {
				if (config.language === jslang) {
					for (const comment of sourceCode.getInlineConfigNodes()) {
						const { label } = commentParser.parseDirective(
							comment.value,
						);
						if (label === "eslint-env") {
							slots.warningService.emitESLintEnvWarning(
								options.filename,
								comment.loc.start.line,
							);
						}
					}
				}

				const inlineConfigResult = sourceCode.applyInlineConfig?.();

				if (inlineConfigResult) {
					inlineConfigResult.problems.forEach(problem => {
						report.addFatal(problem);
					});

					for (const {
						config: inlineConfig,
						loc,
					} of inlineConfigResult.configs) {
						Object.keys(inlineConfig.rules).forEach(ruleId => {
							const rule = config.getRuleDefinition(ruleId);
							const ruleValue = inlineConfig.rules[ruleId];

							if (!rule) {
								report.addError({
									ruleId,
									loc,
								});
								return;
							}

							if (
								Object.hasOwn(mergedInlineConfig.rules, ruleId)
							) {
								report.addError({
									message: `Rule "${ruleId}" is already configured by another configuration comment in the preceding code. This configuration is ignored.`,
									loc,
								});
								return;
							}

							try {
								const ruleOptionsInline = asArray(ruleValue);
								let ruleOptions = ruleOptionsInline;

								assertIsRuleSeverity(ruleId, ruleOptions[0]);

								/*
								 * If the rule was already configured, inline rule configuration that
								 * only has severity should retain options from the config and just override the severity.
								 *
								 * Example:
								 *
								 *   {
								 *       rules: {
								 *           curly: ["error", "multi"]
								 *       }
								 *   }
								 *
								 *   /* eslint curly: ["warn"] * /
								 *
								 *   Results in:
								 *
								 *   curly: ["warn", "multi"]
								 */

								let shouldValidateOptions = true;

								if (
									/*
									 * If inline config for the rule has only severity
									 */
									ruleOptions.length === 1 &&
									/*
									 * And the rule was already configured
									 */
									config.rules &&
									Object.hasOwn(config.rules, ruleId)
								) {
									/*
									 * Then use severity from the inline config and options from the provided config
									 */
									ruleOptions = [
										ruleOptions[0], // severity from the inline config
										...config.rules[ruleId].slice(1), // options from the provided config
									];

									// if the rule was enabled, the options have already been validated
									if (config.rules[ruleId][0] > 0) {
										shouldValidateOptions = false;
									}
								} else {
									/**
									 * Since we know the user provided options, apply defaults on top of them
									 */
									const slicedOptions = ruleOptions.slice(1);
									const mergedOptions = deepMergeArrays(
										rule.meta?.defaultOptions,
										slicedOptions,
									);

									if (mergedOptions.length) {
										ruleOptions = [
											ruleOptions[0],
											...mergedOptions,
										];
									}
								}

								if (
									options.reportUnusedInlineConfigs !== "off"
								) {
									addProblemIfSameSeverityAndOptions(
										config,
										loc,
										report,
										ruleId,
										ruleOptions,
										ruleOptionsInline,
										options.reportUnusedInlineConfigs,
									);
								}

								if (shouldValidateOptions) {
									config.validateRulesConfig({
										[ruleId]: ruleOptions,
									});
								}

								mergedInlineConfig.rules[ruleId] = ruleOptions;
							} catch (err) {
								/*
								 * If the rule has invalid `meta.schema`, throw the error because
								 * this is not an invalid inline configuration but an invalid rule.
								 */
								if (
									err.code ===
									"ESLINT_INVALID_RULE_OPTIONS_SCHEMA"
								) {
									throw err;
								}

								let baseMessage = err.message
									.slice(
										err.message.startsWith('Key "rules":')
											? err.message.indexOf(":", 12) + 1
											: err.message.indexOf(":") + 1,
									)
									.trim();

								if (err.messageTemplate) {
									baseMessage += ` You passed "${ruleValue}".`;
								}

								report.addError({
									ruleId,
									message: `Inline configuration for rule "${ruleId}" is invalid:\n\t${baseMessage}\n`,
									loc,
								});
							}
						});
					}
				}
			}
		}

		const commentDirectives =
			options.allowInlineConfig && !options.warnInlineConfig
				? getDirectiveCommentsForFlatConfig(
						sourceCode,
						ruleId => config.getRuleDefinition(ruleId),
						config.language,
						report,
					)
				: [];

		const configuredRules = Object.assign(
			{},
			config.rules,
			mergedInlineConfig.rules,
		);

		sourceCode.finalize?.();

		try {
			runRules(
				sourceCode,
				configuredRules,
				ruleId => config.getRuleDefinition(ruleId),
				void 0,
				config.language,
				languageOptions,
				settings,
				options.filename,
				false,
				slots.cwd,
				providedOptions.physicalFilename,
				options.ruleFilter,
				options.stats,
				slots,
				report,
			);
		} catch (err) {
			err.message += `\nOccurred while linting ${options.filename}`;
			debug("An error occurred while traversing");
			debug("Filename:", options.filename);
			if (err.currentNode) {
				const { line } = sourceCode.getLoc(err.currentNode).start;

				debug("Line:", line);
				err.message += `:${line}`;
			}
			debug("Parser Options:", languageOptions.parserOptions);

			// debug("Parser Path:", parserName);
			debug("Settings:", settings);

			if (err.ruleId) {
				err.message += `\nRule: "${err.ruleId}"`;
			}

			throw err;
		}

		return applyDisableDirectives({
			language: config.language,
			sourceCode,
			directives: commentDirectives,
			disableFixes: options.disableFixes,
			problems: report.messages.sort(
				(problemA, problemB) =>
					problemA.line - problemB.line ||
					problemA.column - problemB.column,
			),
			reportUnusedDisableDirectives:
				options.reportUnusedDisableDirectives,
			ruleFilter: options.ruleFilter,
			configuredRules,
		});
	}

	/**
	 * Same as linter.verify, except without support for processors.
	 * @param {string|SourceCode} textOrSourceCode The text to parse or a SourceCode object.
	 * @param {Config} providedConfig An ESLintConfig instance to configure everything.
	 * @param {VerifyOptions} [providedOptions] The optional filename of the file being checked.
	 * @throws {Error} If during rule execution.
	 * @returns {(LintMessage|SuppressedLintMessage)[]} The results as an array of messages or an empty array if no messages.
	 */
	_verifyWithFlatConfigArrayAndWithoutProcessors(
		textOrSourceCode,
		providedConfig,
		providedOptions,
	) {
		const slots = internalSlotsMap.get(this);
		const filename = normalizeFilename(
			providedOptions.filename || "<input>",
		);
		let text;

		// evaluate arguments
		if (typeof textOrSourceCode === "string") {
			slots.lastSourceCode = null;
			text = textOrSourceCode;
		} else {
			slots.lastSourceCode = textOrSourceCode;
			text = textOrSourceCode.text;
		}

		const file = new VFile(filename, text, {
			physicalPath: providedOptions.physicalFilename,
		});

		return this.#flatVerifyWithoutProcessors(
			file,
			providedConfig,
			providedOptions,
		);
	}

	/**
	 * Verify a given code with `ConfigArray`.
	 * @param {string|SourceCode} textOrSourceCode The source code.
	 * @param {ConfigArray} configArray The config array.
	 * @param {VerifyOptions&ProcessorOptions} options The options.
	 * @returns {(LintMessage|SuppressedLintMessage)[]} The found problems.
	 */
	_verifyWithConfigArray(textOrSourceCode, configArray, options) {
		debug("With ConfigArray: %s", options.filename);

		// Store the config array in order to get plugin envs and rules later.
		internalSlotsMap.get(this).lastConfigArray = configArray;

		// Extract the final config for this file.
		const config = configArray.extractConfig(options.filename);
		const processor =
			config.processor &&
			configArray.pluginProcessors.get(config.processor);

		// Verify.
		if (processor) {
			debug("Apply the processor: %o", config.processor);
			const { preprocess, postprocess, supportsAutofix } = processor;
			const disableFixes = options.disableFixes || !supportsAutofix;

			return this._verifyWithProcessor(
				textOrSourceCode,
				config,
				{ ...options, disableFixes, postprocess, preprocess },
				configArray,
			);
		}
		return this._verifyWithoutProcessors(textOrSourceCode, config, options);
	}

	/**
	 * Verify a given code with a flat config.
	 * @param {string|SourceCode} textOrSourceCode The source code.
	 * @param {FlatConfigArray} configArray The config array.
	 * @param {VerifyOptions&ProcessorOptions} options The options.
	 * @param {boolean} [firstCall=false] Indicates if this is being called directly
	 *      from verify(). (TODO: Remove once eslintrc is removed.)
	 * @returns {(LintMessage|SuppressedLintMessage)[]} The found problems.
	 */
	_verifyWithFlatConfigArray(
		textOrSourceCode,
		configArray,
		options,
		firstCall = false,
	) {
		debug("With flat config: %s", options.filename);

		// we need a filename to match configs against
		const filename = options.filename || "__placeholder__.js";

		// Store the config array in order to get plugin envs and rules later.
		internalSlotsMap.get(this).lastConfigArray = configArray;
		const config = configArray.getConfig(filename);

		if (!config) {
			return [
				{
					ruleId: null,
					severity: 1,
					message: `No matching configuration found for ${filename}.`,
					line: 0,
					column: 0,
					nodeType: null,
				},
			];
		}

		// Verify.
		if (config.processor) {
			debug("Apply the processor: %o", config.processor);
			const { preprocess, postprocess, supportsAutofix } =
				config.processor;
			const disableFixes = options.disableFixes || !supportsAutofix;

			return this._verifyWithFlatConfigArrayAndProcessor(
				textOrSourceCode,
				config,
				{ ...options, filename, disableFixes, postprocess, preprocess },
				configArray,
			);
		}

		// check for options-based processing
		if (firstCall && (options.preprocess || options.postprocess)) {
			return this._verifyWithFlatConfigArrayAndProcessor(
				textOrSourceCode,
				config,
				options,
			);
		}

		return this._verifyWithFlatConfigArrayAndWithoutProcessors(
			textOrSourceCode,
			config,
			options,
		);
	}

	/**
	 * Verify with a processor.
	 * @param {string|SourceCode} textOrSourceCode The source code.
	 * @param {ConfigData|ExtractedConfig} config The config array.
	 * @param {VerifyOptions&ProcessorOptions} options The options.
	 * @param {ConfigArray} [configForRecursive] The `ConfigArray` object to apply multiple processors recursively.
	 * @returns {(LintMessage|SuppressedLintMessage)[]} The found problems.
	 */
	_verifyWithProcessor(
		textOrSourceCode,
		config,
		options,
		configForRecursive,
	) {
		const slots = internalSlotsMap.get(this);
		const filename = options.filename || "<input>";
		const filenameToExpose = normalizeFilename(filename);
		const physicalFilename = options.physicalFilename || filenameToExpose;
		const text = ensureText(textOrSourceCode);
		const file = new VFile(filenameToExpose, text, {
			physicalPath: physicalFilename,
		});

		const preprocess = options.preprocess || (rawText => [rawText]);
		const postprocess =
			options.postprocess || (messagesList => messagesList.flat());

		const processorService = new ProcessorService();
		const preprocessResult = processorService.preprocessSync(file, {
			processor: {
				preprocess,
				postprocess,
			},
		});

		if (!preprocessResult.ok) {
			return preprocessResult.errors;
		}

		const filterCodeBlock =
			options.filterCodeBlock ||
			(blockFilePath => blockFilePath.endsWith(".js"));
		const originalExtname = path.extname(filename);

		const { files } = preprocessResult;

		const messageLists = files.map(block => {
			debug("A code block was found: %o", block.path ?? "(unnamed)");

			// Keep the legacy behavior.
			if (typeof block === "string") {
				return this._verifyWithoutProcessors(block, config, options);
			}

			// Skip this block if filtered.
			if (!filterCodeBlock(block.path, block.body)) {
				debug("This code block was skipped.");
				return [];
			}

			// Resolve configuration again if the file content or extension was changed.
			if (
				configForRecursive &&
				(text !== block.rawBody ||
					path.extname(block.path) !== originalExtname)
			) {
				debug(
					"Resolving configuration again because the file content or extension was changed.",
				);
				return this._verifyWithConfigArray(
					block.rawBody,
					configForRecursive,
					{
						...options,
						filename: block.path,
						physicalFilename: block.physicalPath,
					},
				);
			}

			slots.lastSourceCode = null;

			// Does lint.
			return this.#eslintrcVerifyWithoutProcessors(block, config, {
				...options,
				filename: block.path,
				physicalFilename: block.physicalPath,
			});
		});

		return processorService.postprocessSync(file, messageLists, {
			processor: {
				preprocess,
				postprocess,
			},
		});
	}

	/**
	 * Given a list of reported problems, distinguish problems between normal messages and suppressed messages.
	 * The normal messages will be returned and the suppressed messages will be stored as lastSuppressedMessages.
	 * @param {Array<LintMessage|SuppressedLintMessage>} problems A list of reported problems.
	 * @returns {LintMessage[]} A list of LintMessage.
	 */
	_distinguishSuppressedMessages(problems) {
		const messages = [];
		const suppressedMessages = [];
		const slots = internalSlotsMap.get(this);

		for (const problem of problems) {
			if (problem.suppressions) {
				suppressedMessages.push(problem);
			} else {
				messages.push(problem);
			}
		}

		slots.lastSuppressedMessages = suppressedMessages;

		return messages;
	}

	/**
	 * Gets the SourceCode object representing the parsed source.
	 * @returns {SourceCode} The SourceCode object.
	 */
	getSourceCode() {
		return internalSlotsMap.get(this).lastSourceCode;
	}

	/**
	 * Gets the times spent on (parsing, fixing, linting) a file.
	 * @returns {{ passes: TimePass[]; }} The times.
	 */
	getTimes() {
		return internalSlotsMap.get(this).times ?? { passes: [] };
	}

	/**
	 * Gets the number of autofix passes that were made in the last run.
	 * @returns {number} The number of autofix passes.
	 */
	getFixPassCount() {
		return internalSlotsMap.get(this).fixPasses ?? 0;
	}

	/**
	 * Gets the list of SuppressedLintMessage produced in the last running.
	 * @returns {SuppressedLintMessage[]} The list of SuppressedLintMessage
	 */
	getSuppressedMessages() {
		return internalSlotsMap.get(this).lastSuppressedMessages;
	}

	/**
	 * Defines a new linting rule.
	 * @param {string} ruleId A unique rule identifier
	 * @param {Rule} rule A rule object
	 * @returns {void}
	 */
	defineRule(ruleId, rule) {
		assertEslintrcConfig(this);
		internalSlotsMap.get(this).ruleMap.define(ruleId, rule);
	}

	/**
	 * Defines many new linting rules.
	 * @param {Record<string, Rule>} rulesToDefine map from unique rule identifier to rule
	 * @returns {void}
	 */
	defineRules(rulesToDefine) {
		assertEslintrcConfig(this);
		Object.getOwnPropertyNames(rulesToDefine).forEach(ruleId => {
			this.defineRule(ruleId, rulesToDefine[ruleId]);
		});
	}

	/**
	 * Gets an object with all loaded rules.
	 * @returns {Map<string, Rule>} All loaded rules
	 */
	getRules() {
		assertEslintrcConfig(this);
		const { lastConfigArray, ruleMap } = internalSlotsMap.get(this);

		return new Map(
			(function* () {
				yield* ruleMap;

				if (lastConfigArray) {
					yield* lastConfigArray.pluginRules;
				}
			})(),
		);
	}

	/**
	 * Define a new parser module
	 * @param {string} parserId Name of the parser
	 * @param {Parser} parserModule The parser object
	 * @returns {void}
	 */
	defineParser(parserId, parserModule) {
		assertEslintrcConfig(this);
		internalSlotsMap.get(this).parserMap.set(parserId, parserModule);
	}

	/**
	 * Performs multiple autofix passes over the text until as many fixes as possible
	 * have been applied.
	 * @param {string} text The source text to apply fixes to.
	 * @param {ConfigData|ConfigArray|FlatConfigArray} config The ESLint config object to use.
	 * @param {VerifyOptions&ProcessorOptions&FixOptions} options The ESLint options object to use.
	 * @returns {{fixed:boolean,messages:LintMessage[],output:string}} The result of the fix operation as returned from the
	 *      SourceCodeFixer.
	 */
	verifyAndFix(text, config, options) {
		let messages,
			fixedResult,
			fixed = false,
			passNumber = 0,
			currentText = text,
			secondPreviousText,
			previousText;
		const debugTextDescription =
			(options && options.filename) || `${text.slice(0, 10)}...`;
		const shouldFix =
			options && typeof options.fix !== "undefined" ? options.fix : true;
		const stats = options?.stats;

		const slots = internalSlotsMap.get(this);

		// Remove lint times from the last run.
		if (stats) {
			delete slots.times;
			slots.fixPasses = 0;
		}

		/**
		 * This loop continues until one of the following is true:
		 *
		 * 1. No more fixes have been applied.
		 * 2. Ten passes have been made.
		 *
		 * That means anytime a fix is successfully applied, there will be another pass.
		 * Essentially, guaranteeing a minimum of two passes.
		 */
		do {
			passNumber++;
			let tTotal;

			if (stats) {
				tTotal = startTime();
			}

			debug(
				`Linting code for ${debugTextDescription} (pass ${passNumber})`,
			);
			messages = this.verify(currentText, config, options);

			debug(
				`Generating fixed text for ${debugTextDescription} (pass ${passNumber})`,
			);
			let t;

			if (stats) {
				t = startTime();
			}

			fixedResult = SourceCodeFixer.applyFixes(
				currentText,
				messages,
				shouldFix,
			);

			if (stats) {
				if (fixedResult.fixed) {
					const time = endTime(t);

					storeTime(time, { type: "fix" }, slots);
					slots.fixPasses++;
				} else {
					storeTime(0, { type: "fix" }, slots);
				}
			}

			/*
			 * stop if there are any syntax errors.
			 * 'fixedResult.output' is a empty string.
			 */
			if (messages.length === 1 && messages[0].fatal) {
				break;
			}

			// keep track if any fixes were ever applied - important for return value
			fixed = fixed || fixedResult.fixed;

			// update to use the fixed output instead of the original text
			secondPreviousText = previousText;
			previousText = currentText;
			currentText = fixedResult.output;

			if (stats) {
				tTotal = endTime(tTotal);
				const passIndex = slots.times.passes.length - 1;

				slots.times.passes[passIndex].total = tTotal;
			}

			// Stop if we've made a circular fix
			if (
				passNumber > 1 &&
				currentText.length === secondPreviousText.length &&
				currentText === secondPreviousText
			) {
				debug(
					`Circular fixes detected after pass ${passNumber}. Exiting fix loop.`,
				);
				slots.warningService.emitCircularFixesWarning(
					options?.filename ?? "text",
				);
				break;
			}
		} while (fixedResult.fixed && passNumber < MAX_AUTOFIX_PASSES);

		/*
		 * If the last result had fixes, we need to lint again to be sure we have
		 * the most up-to-date information.
		 */
		if (fixedResult.fixed) {
			let tTotal;

			if (stats) {
				tTotal = startTime();
			}

			fixedResult.messages = this.verify(currentText, config, options);

			if (stats) {
				storeTime(0, { type: "fix" }, slots);
				slots.times.passes.at(-1).total = endTime(tTotal);
			}
		}

		// ensure the last result properly reflects if fixes were done
		fixedResult.fixed = fixed;
		fixedResult.output = currentText;

		return fixedResult;
	}
}

module.exports = {
	Linter,

	/**
	 * Get the internal slots of a given Linter instance for tests.
	 * @param {Linter} instance The Linter instance to get.
	 * @returns {LinterInternalSlots} The internal slots.
	 */
	getLinterInternalSlots(instance) {
		return internalSlotsMap.get(instance);
	},
};
