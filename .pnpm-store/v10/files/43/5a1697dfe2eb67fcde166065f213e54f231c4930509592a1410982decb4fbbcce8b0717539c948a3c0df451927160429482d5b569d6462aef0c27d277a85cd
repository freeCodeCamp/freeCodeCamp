/**
 * @fileoverview Main CLI object.
 * @author Nicholas C. Zakas
 */

"use strict";

/*
 * NOTE: The CLI object should *not* call process.exit() directly. It should only return
 * exit codes. This allows other programs to use the CLI object and still control
 * when the program exits.
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("node:fs"),
	{ mkdir, stat, writeFile } = require("node:fs/promises"),
	path = require("node:path"),
	{ pathToFileURL } = require("node:url"),
	{ LegacyESLint } = require("./eslint"),
	{
		ESLint,
		shouldUseFlatConfig,
		locateConfigFileToUse,
	} = require("./eslint/eslint"),
	createCLIOptions = require("./options"),
	log = require("./shared/logging"),
	RuntimeInfo = require("./shared/runtime-info"),
	translateOptions = require("./shared/translate-cli-options");
const { getCacheFile } = require("./eslint/eslint-helpers");
const { SuppressionsService } = require("./services/suppressions-service");
const debug = require("debug")("eslint:cli");

//------------------------------------------------------------------------------
// Types
//------------------------------------------------------------------------------

/** @typedef {import("./options").ParsedCLIOptions} ParsedCLIOptions */
/** @typedef {import("./types").ESLint.LintResult} LintResult */
/** @typedef {import("./types").ESLint.ResultsMeta} ResultsMeta */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Count error messages.
 * @param {LintResult[]} results The lint results.
 * @returns {{errorCount:number;fatalErrorCount:number,warningCount:number}} The number of error messages.
 */
function countErrors(results) {
	let errorCount = 0;
	let fatalErrorCount = 0;
	let warningCount = 0;

	for (const result of results) {
		errorCount += result.errorCount;
		fatalErrorCount += result.fatalErrorCount;
		warningCount += result.warningCount;
	}

	return { errorCount, fatalErrorCount, warningCount };
}

/**
 * Creates an options module from the provided CLI options and encodes it as a data URL.
 * @param {ParsedCLIOptions} options The CLI options.
 * @returns {URL} The URL of the options module.
 */
function createOptionsModule(options) {
	const translateOptionsFileURL = new URL(
		"./shared/translate-cli-options.js",
		pathToFileURL(__filename),
	).href;
	const optionsSrc =
		`import translateOptions from ${JSON.stringify(translateOptionsFileURL)};\n` +
		`export default await translateOptions(${JSON.stringify(options)}, "flat");\n`;

	// Base64 encoding is typically shorter than URL encoding
	return new URL(
		`data:text/javascript;base64,${Buffer.from(optionsSrc).toString("base64")}`,
	);
}

/**
 * Check if a given file path is a directory or not.
 * @param {string} filePath The path to a file to check.
 * @returns {Promise<boolean>} `true` if the given path is a directory.
 */
async function isDirectory(filePath) {
	try {
		return (await stat(filePath)).isDirectory();
	} catch (error) {
		if (error.code === "ENOENT" || error.code === "ENOTDIR") {
			return false;
		}
		throw error;
	}
}

/**
 * Outputs the results of the linting.
 * @param {ESLint} engine The ESLint instance to use.
 * @param {LintResult[]} results The results to print.
 * @param {string} format The name of the formatter to use or the path to the formatter.
 * @param {string} outputFile The path for the output file.
 * @param {ResultsMeta} resultsMeta Warning count and max threshold.
 * @returns {Promise<boolean>} True if the printing succeeds, false if not.
 * @private
 */
async function printResults(engine, results, format, outputFile, resultsMeta) {
	let formatter;

	try {
		formatter = await engine.loadFormatter(format);
	} catch (e) {
		log.error(e.message);
		return false;
	}

	const output = await formatter.format(results, resultsMeta);

	if (outputFile) {
		const filePath = path.resolve(process.cwd(), outputFile);

		if (await isDirectory(filePath)) {
			log.error(
				"Cannot write to output file path, it is a directory: %s",
				outputFile,
			);
			return false;
		}

		try {
			await mkdir(path.dirname(filePath), { recursive: true });
			await writeFile(filePath, output);
		} catch (ex) {
			log.error("There was a problem writing the output file:\n%s", ex);
			return false;
		}
	} else if (output) {
		log.info(output);
	}

	return true;
}

/**
 * Validates the `--concurrency` flag value.
 * @param {string} concurrency The `--concurrency` flag value to validate.
 * @returns {void}
 * @throws {Error} If the `--concurrency` flag value is invalid.
 */
function validateConcurrency(concurrency) {
	if (
		concurrency === void 0 ||
		concurrency === "auto" ||
		concurrency === "off"
	) {
		return;
	}

	const concurrencyValue = Number(concurrency);

	if (!Number.isInteger(concurrencyValue) || concurrencyValue < 1) {
		throw new Error(
			`Option concurrency: '${concurrency}' is not a positive integer, 'auto' or 'off'.`,
		);
	}
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Encapsulates all CLI behavior for eslint. Makes it easier to test as well as
 * for other Node.js programs to effectively run the CLI.
 */
const cli = {
	/**
	 * Calculates the command string for the --inspect-config operation.
	 * @param {string} configFile The path to the config file to inspect.
	 * @returns {Promise<string>} The command string to execute.
	 */
	async calculateInspectConfigFlags(configFile) {
		// find the config file
		const { configFilePath, basePath } = await locateConfigFileToUse({
			cwd: process.cwd(),
			configFile,
		});

		return ["--config", configFilePath, "--basePath", basePath];
	},

	/**
	 * Executes the CLI based on an array of arguments that is passed in.
	 * @param {string|Array|Object} args The arguments to process.
	 * @param {string} [text] The text to lint (used for TTY).
	 * @param {boolean} [allowFlatConfig=true] Whether or not to allow flat config.
	 * @returns {Promise<number>} The exit code for the operation.
	 */
	async execute(args, text, allowFlatConfig = true) {
		if (Array.isArray(args)) {
			debug("CLI args: %o", args.slice(2));
		}

		/*
		 * Before doing anything, we need to see if we are using a
		 * flat config file. If so, then we need to change the way command
		 * line args are parsed. This is temporary, and when we fully
		 * switch to flat config we can remove this logic.
		 */

		const usingFlatConfig =
			allowFlatConfig && (await shouldUseFlatConfig());

		debug("Using flat config?", usingFlatConfig);

		if (allowFlatConfig && !usingFlatConfig) {
			const { WarningService } = require("./services/warning-service");
			new WarningService().emitESLintRCWarning();
		}

		const CLIOptions = createCLIOptions(usingFlatConfig);

		/** @type {ParsedCLIOptions} */
		let options;

		try {
			options = CLIOptions.parse(args);
			validateConcurrency(options.concurrency);
		} catch (error) {
			debug("Error parsing CLI options:", error.message);

			let errorMessage = error.message;

			if (usingFlatConfig) {
				errorMessage +=
					"\nYou're using eslint.config.js, some command line flags are no longer available. Please see https://eslint.org/docs/latest/use/command-line-interface for details.";
			}

			log.error(errorMessage);
			return 2;
		}

		const files = options._;
		const useStdin = typeof text === "string";

		if (options.help) {
			log.info(CLIOptions.generateHelp());
			return 0;
		}
		if (options.version) {
			log.info(RuntimeInfo.version());
			return 0;
		}
		if (options.envInfo) {
			try {
				log.info(RuntimeInfo.environment());
				return 0;
			} catch (err) {
				debug("Error retrieving environment info");
				log.error(err.message);
				return 2;
			}
		}

		if (options.printConfig) {
			if (files.length) {
				log.error(
					"The --print-config option must be used with exactly one file name.",
				);
				return 2;
			}
			if (useStdin) {
				log.error(
					"The --print-config option is not available for piped-in code.",
				);
				return 2;
			}

			const engine = usingFlatConfig
				? new ESLint(await translateOptions(options, "flat"))
				: new LegacyESLint(await translateOptions(options));
			const fileConfig = await engine.calculateConfigForFile(
				options.printConfig,
			);

			log.info(JSON.stringify(fileConfig, null, "  "));
			return 0;
		}

		if (options.inspectConfig) {
			log.info(
				"You can also run this command directly using 'npx @eslint/config-inspector@latest' in the same directory as your configuration file.",
			);

			try {
				const flatOptions = await translateOptions(options, "flat");
				const spawn = require("cross-spawn");
				const flags = await cli.calculateInspectConfigFlags(
					flatOptions.overrideConfigFile,
				);

				spawn.sync(
					"npx",
					["@eslint/config-inspector@latest", ...flags],
					{ encoding: "utf8", stdio: "inherit" },
				);
			} catch (error) {
				log.error(error);
				return 2;
			}

			return 0;
		}

		debug(`Running on ${useStdin ? "text" : "files"}`);

		if (options.fix && options.fixDryRun) {
			log.error(
				"The --fix option and the --fix-dry-run option cannot be used together.",
			);
			return 2;
		}
		if (useStdin && options.fix) {
			log.error(
				"The --fix option is not available for piped-in code; use --fix-dry-run instead.",
			);
			return 2;
		}
		if (options.fixType && !options.fix && !options.fixDryRun) {
			log.error(
				"The --fix-type option requires either --fix or --fix-dry-run.",
			);
			return 2;
		}

		if (
			options.reportUnusedDisableDirectives &&
			options.reportUnusedDisableDirectivesSeverity !== void 0
		) {
			log.error(
				"The --report-unused-disable-directives option and the --report-unused-disable-directives-severity option cannot be used together.",
			);
			return 2;
		}

		if (usingFlatConfig && options.ext) {
			// Passing `--ext ""` results in `options.ext` being an empty array.
			if (options.ext.length === 0) {
				log.error("The --ext option value cannot be empty.");
				return 2;
			}

			// Passing `--ext ,ts` results in an empty string at index 0. Passing `--ext ts,,tsx` results in an empty string at index 1.
			const emptyStringIndex = options.ext.indexOf("");

			if (emptyStringIndex >= 0) {
				log.error(
					`The --ext option arguments cannot be empty strings. Found an empty string at index ${emptyStringIndex}.`,
				);
				return 2;
			}
		}

		if (options.suppressAll && options.suppressRule) {
			log.error(
				"The --suppress-all option and the --suppress-rule option cannot be used together.",
			);
			return 2;
		}

		if (options.suppressAll && options.pruneSuppressions) {
			log.error(
				"The --suppress-all option and the --prune-suppressions option cannot be used together.",
			);
			return 2;
		}

		if (options.suppressRule && options.pruneSuppressions) {
			log.error(
				"The --suppress-rule option and the --prune-suppressions option cannot be used together.",
			);
			return 2;
		}

		if (
			useStdin &&
			(options.suppressAll ||
				options.suppressRule ||
				options.pruneSuppressions)
		) {
			log.error(
				"The --suppress-all, --suppress-rule, and --prune-suppressions options cannot be used with piped-in code.",
			);
			return 2;
		}

		const ActiveESLint = usingFlatConfig ? ESLint : LegacyESLint;

		/** @type {ESLint|LegacyESLint} */
		let engine;

		if (options.concurrency && options.concurrency !== "off") {
			const optionsURL = createOptionsModule(options);
			engine = await ESLint.fromOptionsModule(optionsURL);
		} else {
			const eslintOptions = await translateOptions(
				options,
				usingFlatConfig ? "flat" : "eslintrc",
			);
			engine = new ActiveESLint(eslintOptions);
		}
		let results;

		if (useStdin) {
			results = await engine.lintText(text, {
				filePath: options.stdinFilename,

				// flatConfig respects CLI flag and constructor warnIgnored, eslintrc forces true for backwards compatibility
				warnIgnored: usingFlatConfig ? void 0 : true,
			});
		} else {
			results = await engine.lintFiles(files);
		}

		if (options.fix) {
			debug("Fix mode enabled - applying fixes");
			await ActiveESLint.outputFixes(results);
		}

		let unusedSuppressions = {};

		if (!useStdin) {
			const suppressionsFileLocation = getCacheFile(
				options.suppressionsLocation || "eslint-suppressions.json",
				process.cwd(),
				{
					prefix: "suppressions_",
				},
			);

			if (
				options.suppressionsLocation &&
				!fs.existsSync(suppressionsFileLocation) &&
				!options.suppressAll &&
				!options.suppressRule
			) {
				log.error(
					"The suppressions file does not exist. Please run the command with `--suppress-all` or `--suppress-rule` to create it.",
				);
				return 2;
			}

			if (
				options.suppressAll ||
				options.suppressRule ||
				options.pruneSuppressions ||
				fs.existsSync(suppressionsFileLocation)
			) {
				const suppressions = new SuppressionsService({
					filePath: suppressionsFileLocation,
					cwd: process.cwd(),
				});

				if (options.suppressAll || options.suppressRule) {
					await suppressions.suppress(results, options.suppressRule);
				}

				if (options.pruneSuppressions) {
					await suppressions.prune(results);
				}

				const suppressionResults = suppressions.applySuppressions(
					results,
					await suppressions.load(),
				);

				results = suppressionResults.results;
				unusedSuppressions = suppressionResults.unused;
			}
		}

		let resultsToPrint = results;

		if (options.quiet) {
			debug("Quiet mode enabled - filtering out warnings");
			resultsToPrint = ActiveESLint.getErrorResults(resultsToPrint);
		}

		const resultCounts = countErrors(results);
		const tooManyWarnings =
			options.maxWarnings >= 0 &&
			resultCounts.warningCount > options.maxWarnings;
		const resultsMeta = tooManyWarnings
			? {
					maxWarningsExceeded: {
						maxWarnings: options.maxWarnings,
						foundWarnings: resultCounts.warningCount,
					},
				}
			: {};

		if (
			await printResults(
				engine,
				resultsToPrint,
				options.format,
				options.outputFile,
				resultsMeta,
			)
		) {
			// Errors and warnings from the original unfiltered results should determine the exit code
			const shouldExitForFatalErrors =
				options.exitOnFatalError && resultCounts.fatalErrorCount > 0;

			if (!resultCounts.errorCount && tooManyWarnings) {
				log.error(
					"ESLint found too many warnings (maximum: %s).",
					options.maxWarnings,
				);
			}

			if (!options.passOnUnprunedSuppressions) {
				const unusedSuppressionsCount =
					Object.keys(unusedSuppressions).length;

				if (unusedSuppressionsCount > 0) {
					log.error(
						"There are suppressions left that do not occur anymore. Consider re-running the command with `--prune-suppressions`.",
					);
					debug(JSON.stringify(unusedSuppressions, null, 2));

					return 2;
				}
			}

			if (shouldExitForFatalErrors) {
				return 2;
			}

			return resultCounts.errorCount || tooManyWarnings ? 1 : 0;
		}

		return 2;
	},
};

module.exports = cli;
