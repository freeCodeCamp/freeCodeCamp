import { isAbsolute, join, resolve } from 'node:path';
import { EOL } from 'node:os';
import { existsSync } from 'node:fs';
import process from 'node:process';

import picocolors from 'picocolors';
const { dim, red } = picocolors;

import meow from 'meow';

import { isBoolean, isNumber, isObject, isPlainObject, isString } from './utils/validateTypes.mjs';
import checkInvalidCLIOptions from './utils/checkInvalidCLIOptions.mjs';
import dynamicImport from './utils/dynamicImport.mjs';
import printConfig from './printConfig.mjs';
import resolveSilent from './utils/resolveSilent.mjs';
import standalone from './standalone.mjs';
import writeOutputFile from './writeOutputFile.mjs';

import {
	DEFAULT_CACHE_LOCATION,
	DEFAULT_FIX_MODE,
	DEFAULT_FORMATTER,
	DEFAULT_IGNORE_FILENAME,
	DEFAULT_SUPPRESSION_FILENAME,
	EXIT_CODE_FATAL_ERROR,
	EXIT_CODE_INVALID_USAGE,
	EXIT_CODE_LINT_PROBLEM,
	EXIT_CODE_SUCCESS,
} from './constants.mjs';
import normalizeFixMode from './utils/normalizeFixMode.mjs';

const helpText = `
    Usage: stylelint [input] [options]

    Input: Files(s), glob(s), or nothing to use stdin.

      If an input argument is wrapped in quotation marks, it will be passed to
      globby for cross-platform glob support. "node_modules" are always ignored.
      You can also pass no input and use stdin, instead.

    Options:

      --config, -c <path_or_module>

        A path to a specific configuration file (JSON, YAML, CommonJS, or ES module),
        or a module name in "node_modules" that points to one. If no argument is
        provided, Stylelint will search for configuration files in the following
        places, in this order:

          - a "stylelint" property in "package.json"
          - a ".stylelintrc" file
          - a ".stylelintrc.{cjs,mjs,js,json,yaml,yml}" file
          - a "stylelint.config.{cjs,mjs,js}" file

        The search will begin in the working directory and move up the directory
        tree until a configuration file is found.

      --config-basedir <path>

        An absolute path to the directory that relative paths defining "extends",
        "plugins", and "customSyntax" are *relative to*. Only necessary if these
        values are relative paths.

      --print-config

        Print the configuration for the given input file path. Globs are unsupported.

      --ignore-path, -i <path>

        A path to a file containing patterns that describe files to ignore. The
        path can be absolute or relative to "process.cwd()". You can repeat the
        option to provide multiple paths. By default, Stylelint looks for
        "${DEFAULT_IGNORE_FILENAME}" in "process.cwd()". Multiple can be set.

      --ignore-pattern, --ip <pattern>

        A pattern of files to ignore (in addition to those in "${DEFAULT_IGNORE_FILENAME}").
        Multiple can be set.

      --fix [<mode>]

        Automatically fix problems of certain rules. The modes are as follows:

          lax          attempting to fix as much as possible even with syntax errors (default)
          strict       only fixing when there are no syntax errors

      --compute-edit-info, --cei

        Compute edit information for fixable problems.

      --custom-syntax <name_or_path>

        A module name or path to a JS file exporting a PostCSS-compatible syntax.

      --stdin

        Accept stdin input even if it is empty.

      --stdin-filename <name>

        A filename to assign stdin input.

      --ignore-disables, --id

        Ignore "stylelint-disable" comments.

      --disable-default-ignores, --di

        Allow linting of "node_modules".

      --[no-]cache

        Store the info about processed files in order to only operate on the
        changed ones the next time you run Stylelint. By default, the cache is
        stored in "${DEFAULT_CACHE_LOCATION}". To adjust this, use "--cache-location".
        Cache is disabled by default.

      --cache-location <path>

        A path to a file or directory to be used for the cache location. If a
        directory is specified, a cache file will be created inside the specified
        folder, with a name derived from a hash of the current working directory.

        If the directory for the cache does not exist, make sure you add a trailing "/"
        on *nix systems or "\\" on Windows. Otherwise the path will be assumed to
        be a file.

      --cache-strategy <strategy>

        A strategy for the cache to use for detecting changed files. Either one of:

          metadata     by metadata of a file (default)
          content      by content of a file

        The "content" strategy can be useful in cases where the modification time
        of your files changes even if their contents have not. For example, this can
        happen during git operations like "git clone" because git does not track file
        modification time.

      --formatter, -f <formatter>

        An output formatter. The variants are as follows:

          string       human-readable strings (default)
          compact      similar to ESLint's compact formatter
          github       workflow commands for GitHub Actions (DEPRECATED)
          json         JSON format
          tap          TAP format
          unix         C compiler-like format
          verbose      extend "string" to include a file list and a tally

      --custom-formatter <path_or_module>

        A path to a JS file or module name exporting a custom formatting function.

      --quiet, -q

        Only register problems for rules with an "error"-level severity (ignore
        "warning"-level).

      --quiet-deprecation-warnings

        Ignore deprecations warnings.

      --[no-]color

        Force enabling/disabling of color.

      --[no-]validate

        Force enable/disable the validation of the rules' options.

      --report-needless-disables, --rd

        Also report errors for "stylelint-disable" comments that are not blocking
        a lint warning. The process will exit with code ${EXIT_CODE_LINT_PROBLEM} if needless disables are found.

      --report-invalid-scope-disables, --risd

        Report "stylelint-disable" comments that used for rules that don't exist
        within the configuration object. The process will exit with code ${EXIT_CODE_LINT_PROBLEM} if invalid
        scope disables are found.

      --report-descriptionless-disables, --rdd

        Report "stylelint-disable" comments without a description. The process will
        exit with code ${EXIT_CODE_LINT_PROBLEM} if descriptionless disables are found.

      --max-warnings, --mw <number>

        The number of warnings above which the process will exit with code ${EXIT_CODE_LINT_PROBLEM}.
        Useful when setting "defaultSeverity" to "warning" and expecting the process
        to fail on warnings (e.g. CI build).

      --output-file, -o <path>

        A file path to write a report.

      --allow-empty-input, --aei

        When a glob pattern matches no files, the process will exit without throwing an error.

      --suppress [<rule>]
        Suppress problems and record them in a file. If no rule is specified,
        all problems are suppressed. Otherwise, only problems with the given 
        rules are suppressed, e.g., "--suppress rule1 --suppress rule2".
        See also "--suppress-location".

      --suppress-location <path>

        A path to a file or directory to be used for the suppressions file location. If a
        directory is specified, a suppressions file will be created inside the specified
        folder, with the name "${DEFAULT_SUPPRESSION_FILENAME}".

      --globby-options, --go <json>

        Options in JSON format passed to globby.

      --version, -v

        Show the version.

      --help, -h

        Show the help.
`;

const flags = {
	allowEmptyInput: {
		aliases: ['aei'],
		type: 'boolean',
	},
	cache: {
		type: 'boolean',
	},
	cacheLocation: {
		type: 'string',
	},
	cacheStrategy: {
		type: 'string',
	},
	color: {
		type: 'boolean',
	},
	computeEditInfo: {
		shortFlag: 'cei',
		type: 'boolean',
		default: false,
	},
	config: {
		shortFlag: 'c',
		type: 'string',
	},
	configBasedir: {
		type: 'string',
	},
	customFormatter: {
		type: 'string',
	},
	customSyntax: {
		type: 'string',
	},
	disableDefaultIgnores: {
		aliases: ['di'],
		type: 'boolean',
	},
	fix: {
		type: 'string',
	},
	formatter: {
		shortFlag: 'f',
		type: 'string',
	},
	globbyOptions: {
		aliases: ['go'],
		type: 'string',
	},
	help: {
		shortFlag: 'h',
		type: 'boolean',
	},
	ignoreDisables: {
		aliases: ['id'],
		type: 'boolean',
	},
	ignorePath: {
		shortFlag: 'i',
		type: 'string',
		isMultiple: true,
	},
	ignorePattern: {
		aliases: ['ip'],
		type: 'string',
		isMultiple: true,
	},
	maxWarnings: {
		aliases: ['mw'],
		type: 'number',
	},
	outputFile: {
		shortFlag: 'o',
		type: 'string',
	},
	printConfig: {
		type: 'boolean',
	},
	quiet: {
		shortFlag: 'q',
		type: 'boolean',
	},
	quietDeprecationWarnings: {
		type: 'boolean',
	},
	reportDescriptionlessDisables: {
		aliases: ['rdd'],
		type: 'boolean',
	},
	reportInvalidScopeDisables: {
		aliases: ['risd'],
		type: 'boolean',
	},
	reportNeedlessDisables: {
		aliases: ['rd'],
		type: 'boolean',
	},
	reportUnscopedDisables: {
		aliases: ['rud'],
		type: 'boolean',
	},
	stdin: {
		type: 'boolean',
	},
	stdinFilename: {
		type: 'string',
	},
	suppress: {
		type: 'string',
		isMultiple: true,
	},
	suppressLocation: {
		type: 'string',
	},

	validate: {
		type: 'boolean',
		default: true,
	},
	version: {
		shortFlag: 'v',
		type: 'boolean',
	},
};

/**
 * @param {string[]} argv
 * @returns {Promise<void>}
 */
export default async function main(argv) {
	const cli = buildCLI(argv);

	const invalidOptionsMessage = checkInvalidCLIOptions(flags, cli.flags);

	if (invalidOptionsMessage) {
		process.stderr.write(invalidOptionsMessage);
		process.exitCode = EXIT_CODE_INVALID_USAGE;

		return;
	}

	const {
		// Sort alphabetically
		allowEmptyInput,
		cache,
		cacheLocation,
		cacheStrategy,
		computeEditInfo,
		config: configFile,
		configBasedir,
		customFormatter,
		customSyntax,
		disableDefaultIgnores,
		formatter: formatterInput,
		fix,
		globbyOptions,
		help,
		ignoreDisables,
		ignorePath,
		ignorePattern,
		maxWarnings,
		outputFile,
		printConfig: printConfigFlag,
		quiet,
		quietDeprecationWarnings,
		reportDescriptionlessDisables,
		reportInvalidScopeDisables,
		reportNeedlessDisables,
		reportUnscopedDisables,
		stdin,
		stdinFilename,
		suppress,
		suppressLocation,
		validate,
		version,
	} = cli.flags;

	const showHelp = () => cli.showHelp(EXIT_CODE_SUCCESS);

	if (help) {
		showHelp();

		return;
	}

	if (version) {
		cli.showVersion();

		return;
	}

	let formatter = undefined;

	if (isString(customFormatter)) {
		formatter = await importCustomFormatter(customFormatter);
	} else if (isString(formatterInput)) {
		formatter = /** @type {import('stylelint').FormatterType} */ (formatterInput);
	}

	/** @type {import('stylelint').LinterOptions} */
	const options = {
		formatter,
		_defaultFormatter: DEFAULT_FORMATTER,
	};

	if (isBoolean(quiet)) {
		options.quiet = quiet;
	}

	if (isBoolean(quietDeprecationWarnings)) {
		options.quietDeprecationWarnings = quietDeprecationWarnings;
	}

	if (isString(customSyntax)) {
		options.customSyntax = customSyntax;
	}

	const cwd = process.cwd();

	if (isString(configFile)) {
		// Should check these possibilities:
		//   a. name of a node_module
		//   b. absolute path
		//   c. relative path relative to `process.cwd()`.
		// If none of the above work, we'll try a relative path starting
		// in `process.cwd()`.
		options.configFile = resolveSilent(cwd, configFile) || join(cwd, configFile);
	}

	if (isString(configBasedir)) {
		options.configBasedir = isAbsolute(configBasedir) ? configBasedir : resolve(cwd, configBasedir);
	}

	if (isString(globbyOptions)) {
		try {
			options.globbyOptions = await parseGlobbyOptions(globbyOptions);
		} catch (error) {
			if (typeof error === 'string') {
				process.stderr.write(`${error}${EOL}`);
				process.exitCode = EXIT_CODE_INVALID_USAGE;

				return;
			}

			throw error;
		}
	}

	if (isString(stdinFilename)) {
		options.codeFilename = stdinFilename;
	}

	if (Array.isArray(ignorePath)) {
		options.ignorePath = ignorePath;
	}

	if (Array.isArray(ignorePattern)) {
		options.ignorePattern = ignorePattern;
	}

	if (isBoolean(ignoreDisables)) {
		options.ignoreDisables = ignoreDisables;
	}

	if (isBoolean(disableDefaultIgnores)) {
		options.disableDefaultIgnores = disableDefaultIgnores;
	}

	if (isBoolean(cache)) {
		options.cache = cache;
	}

	if (isString(cacheLocation)) {
		options.cacheLocation = cacheLocation;
	}

	if (isString(cacheStrategy)) {
		options.cacheStrategy = cacheStrategy;
	}

	if (isString(fix)) {
		options.fix = normalizeFixMode(fix);

		// If the fix argument is unknown, consider it as an input path.
		// TODO: `false` is for backward compatibility. We can remove it in the next major (17.0.0).
		if (options.fix === undefined && fix !== 'false') {
			options.fix = DEFAULT_FIX_MODE;
			cli.input.push(fix);
		}
	}

	if (isBoolean(validate)) {
		options.validate = validate;
	}

	if (isBoolean(reportNeedlessDisables)) {
		options.reportNeedlessDisables = reportNeedlessDisables;
	}

	if (isBoolean(reportInvalidScopeDisables)) {
		options.reportInvalidScopeDisables = reportInvalidScopeDisables;
	}

	if (isBoolean(reportDescriptionlessDisables)) {
		options.reportDescriptionlessDisables = reportDescriptionlessDisables;
	}

	if (isBoolean(reportUnscopedDisables)) {
		options.reportUnscopedDisables = reportUnscopedDisables;
	}

	if (isNumber(maxWarnings)) {
		options.maxWarnings = maxWarnings;
	}

	if (isBoolean(allowEmptyInput)) {
		options.allowEmptyInput = allowEmptyInput;
	}

	if (isBoolean(computeEditInfo)) {
		options.computeEditInfo = computeEditInfo;
	}

	// Handle suppress logic - detect both --suppress (all) and --suppress=rule cases
	const hasPlainSuppress = argv.includes('--suppress');
	const hasRuleSuppress = Array.isArray(suppress) && suppress.length > 0;

	if (hasPlainSuppress) {
		options.suppressAll = true;
	}

	if (hasRuleSuppress) {
		options.suppressRule = suppress;
	}

	if (isString(suppressLocation)) {
		options.suppressLocation = suppressLocation;
	}

	if (options.suppressAll && options.suppressRule) {
		process.stderr.write(
			`${red('Error: The --suppress and --suppress=<rule> options cannot be used together.')}${EOL}`,
		);
		process.exitCode = EXIT_CODE_INVALID_USAGE;

		return;
	}

	// Add input/code into options
	if (cli.input.length > 0) {
		options.files = cli.input;
	} else {
		options.code = await getStdin();
	}

	const hasStdin = stdin || isString(options.code);

	if (hasStdin && (options.suppressAll || options.suppressRule)) {
		process.stderr.write(
			`${red(
				'Error: The --suppress and --suppress=<rule> options cannot be used with piped-in code.',
			)}${EOL}`,
		);
		process.exitCode = EXIT_CODE_INVALID_USAGE;

		return;
	}

	if (printConfigFlag) {
		await printConfig(options)
			.then((config) => {
				process.stdout.write(JSON.stringify(config, null, 2));
			})
			.catch(handleError);

		return;
	}

	if (!options.files && !isString(options.code) && !stdin) {
		showHelp();

		return;
	}

	return standalone(options)
		.then(({ report, code, errored, maxWarningsExceeded }) => {
			if (!report && !code) {
				return;
			}

			if (code) {
				process.stdout.write(code);
			}

			if (report) {
				process.stderr.write(report);
			}

			if (isString(outputFile)) {
				writeOutputFile(report, outputFile).catch(handleError);
			}

			if (errored) {
				process.exitCode = EXIT_CODE_LINT_PROBLEM;
			} else if (isNumber(maxWarnings) && maxWarningsExceeded) {
				const foundWarnings = maxWarningsExceeded.foundWarnings;

				process.stderr.write(
					`${EOL}${red(`Max warnings exceeded: `)}${foundWarnings} found. ${dim(
						`${maxWarnings} allowed${EOL}${EOL}`,
					)}`,
				);
				process.exitCode = EXIT_CODE_LINT_PROBLEM;
			}
		})
		.catch(handleError);
}

/**
 * @param {unknown} err
 * @returns {void}
 */
function handleError(err) {
	if (!isObject(err)) {
		throw err;
	}

	if ('stack' in err && isString(err.stack)) {
		process.stderr.write(err.stack + EOL);
	}

	const exitCode = 'code' in err && isNumber(err.code) ? err.code : EXIT_CODE_FATAL_ERROR;

	process.exitCode = exitCode;
}

/**
 * @param {string} value
 * @returns {Promise<Record<string, unknown>>}
 */
function parseGlobbyOptions(value) {
	const errorMessage = () =>
		`Invalid option ${red('"--globby-options"')}.` +
		` The value ${red(`"${value}"`)} is not valid JSON object.`;

	let options;

	try {
		options = JSON.parse(value);
	} catch {
		return Promise.reject(errorMessage());
	}

	if (isPlainObject(options)) {
		return Promise.resolve(options);
	}

	return Promise.reject(errorMessage());
}

/**
 * @returns {Promise<string | undefined>}
 */
async function getStdin() {
	const { stdin } = process;

	if (stdin.isTTY) {
		return undefined;
	}

	const chunks = [];

	for await (const chunk of stdin) {
		chunks.push(chunk);
	}

	return Buffer.concat(chunks).toString();
}

/**
 * @param {string} fileOrModulePath
 * @returns {Promise<import('stylelint').Formatter>}
 */
function importCustomFormatter(fileOrModulePath) {
	let modulePath = fileOrModulePath;

	if (existsSync(modulePath)) {
		modulePath = resolve(modulePath); // to absolute path
	}

	return dynamicImport(modulePath).then((m) => m.default);
}

/**
 * @param {string[]} argv
 */
export function buildCLI(argv) {
	return meow(helpText, {
		autoHelp: false,
		autoVersion: false,
		argv,

		// NOTE: `meow()` infers flag types when passing a flag object with inline.
		// However, `checkInvalidCLIOptions()` also needs this flag object.
		// So, unfortunately, the return value type inference by `meow()` is unavailable here.
		//
		// @ts-expect-error -- TS2322: Type '{ allowEmptyInput: {...} }' is not assignable to type 'AnyFlags'.
		flags,

		// NOTE: We must enable `allowUnknownFlags` because meow exits with `2` if `allowUnknownFlags` is disabled.
		// Instead, we use our different exit code with `checkInvalidCLIOptions()`.
		// See also https://github.com/sindresorhus/meow/blob/v12.0.1/source/validate.js#L75
		allowUnknownFlags: true,

		// NOTE: If CLI flags are unspecified (e.g., `--cache` nor `--no-cache`), we want to fall back to config properties (e.g., `cache`).
		booleanDefault: undefined,

		importMeta: import.meta,
	});
}
