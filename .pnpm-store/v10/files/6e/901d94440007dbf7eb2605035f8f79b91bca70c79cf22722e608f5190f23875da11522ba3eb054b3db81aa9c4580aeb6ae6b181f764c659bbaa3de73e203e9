/**
 * @fileoverview Main CLI object.
 * @author Nicholas C. Zakas
 */

"use strict";

/*
 * The CLI object should *not* call process.exit() directly. It should only return
 * exit codes. This allows other programs to use the CLI object and still control
 * when the program exits.
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs"),
    path = require("path"),
    { promisify } = require("util"),
    { ESLint } = require("./eslint"),
    CLIOptions = require("./options"),
    log = require("./shared/logging"),
    RuntimeInfo = require("./shared/runtime-info");

const debug = require("debug")("eslint:cli");

//------------------------------------------------------------------------------
// Types
//------------------------------------------------------------------------------

/** @typedef {import("./eslint/eslint").ESLintOptions} ESLintOptions */
/** @typedef {import("./eslint/eslint").LintMessage} LintMessage */
/** @typedef {import("./eslint/eslint").LintResult} LintResult */
/** @typedef {import("./options").ParsedCLIOptions} ParsedCLIOptions */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const mkdir = promisify(fs.mkdir);
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);

/**
 * Predicate function for whether or not to apply fixes in quiet mode.
 * If a message is a warning, do not apply a fix.
 * @param {LintMessage} message The lint result.
 * @returns {boolean} True if the lint message is an error (and thus should be
 * autofixed), false otherwise.
 */
function quietFixPredicate(message) {
    return message.severity === 2;
}

/**
 * Translates the CLI options into the options expected by the CLIEngine.
 * @param {ParsedCLIOptions} cliOptions The CLI options to translate.
 * @returns {ESLintOptions} The options object for the CLIEngine.
 * @private
 */
function translateOptions({
    cache,
    cacheFile,
    cacheLocation,
    cacheStrategy,
    config,
    env,
    errorOnUnmatchedPattern,
    eslintrc,
    ext,
    fix,
    fixDryRun,
    fixType,
    global,
    ignore,
    ignorePath,
    ignorePattern,
    inlineConfig,
    parser,
    parserOptions,
    plugin,
    quiet,
    reportUnusedDisableDirectives,
    resolvePluginsRelativeTo,
    rule,
    rulesdir
}) {
    return {
        allowInlineConfig: inlineConfig,
        cache,
        cacheLocation: cacheLocation || cacheFile,
        cacheStrategy,
        errorOnUnmatchedPattern,
        extensions: ext,
        fix: (fix || fixDryRun) && (quiet ? quietFixPredicate : true),
        fixTypes: fixType,
        ignore,
        ignorePath,
        overrideConfig: {
            env: env && env.reduce((obj, name) => {
                obj[name] = true;
                return obj;
            }, {}),
            globals: global && global.reduce((obj, name) => {
                if (name.endsWith(":true")) {
                    obj[name.slice(0, -5)] = "writable";
                } else {
                    obj[name] = "readonly";
                }
                return obj;
            }, {}),
            ignorePatterns: ignorePattern,
            parser,
            parserOptions,
            plugins: plugin,
            rules: rule
        },
        overrideConfigFile: config,
        reportUnusedDisableDirectives: reportUnusedDisableDirectives ? "error" : void 0,
        resolvePluginsRelativeTo,
        rulePaths: rulesdir,
        useEslintrc: eslintrc
    };
}

/**
 * Count error messages.
 * @param {LintResult[]} results The lint results.
 * @returns {{errorCount:number;warningCount:number}} The number of error messages.
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
 * @returns {Promise<boolean>} True if the printing succeeds, false if not.
 * @private
 */
async function printResults(engine, results, format, outputFile) {
    let formatter;

    try {
        formatter = await engine.loadFormatter(format);
    } catch (e) {
        log.error(e.message);
        return false;
    }

    const output = formatter.format(results);

    if (output) {
        if (outputFile) {
            const filePath = path.resolve(process.cwd(), outputFile);

            if (await isDirectory(filePath)) {
                log.error("Cannot write to output file path, it is a directory: %s", outputFile);
                return false;
            }

            try {
                await mkdir(path.dirname(filePath), { recursive: true });
                await writeFile(filePath, output);
            } catch (ex) {
                log.error("There was a problem writing the output file:\n%s", ex);
                return false;
            }
        } else {
            log.info(output);
        }
    }

    return true;
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
     * Executes the CLI based on an array of arguments that is passed in.
     * @param {string|Array|Object} args The arguments to process.
     * @param {string} [text] The text to lint (used for TTY).
     * @returns {Promise<number>} The exit code for the operation.
     */
    async execute(args, text) {
        if (Array.isArray(args)) {
            debug("CLI args: %o", args.slice(2));
        }

        /** @type {ParsedCLIOptions} */
        let options;

        try {
            options = CLIOptions.parse(args);
        } catch (error) {
            log.error(error.message);
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
                log.error(err.message);
                return 2;
            }
        }

        if (options.printConfig) {
            if (files.length) {
                log.error("The --print-config option must be used with exactly one file name.");
                return 2;
            }
            if (useStdin) {
                log.error("The --print-config option is not available for piped-in code.");
                return 2;
            }

            const engine = new ESLint(translateOptions(options));
            const fileConfig =
                await engine.calculateConfigForFile(options.printConfig);

            log.info(JSON.stringify(fileConfig, null, "  "));
            return 0;
        }

        debug(`Running on ${useStdin ? "text" : "files"}`);

        if (options.fix && options.fixDryRun) {
            log.error("The --fix option and the --fix-dry-run option cannot be used together.");
            return 2;
        }
        if (useStdin && options.fix) {
            log.error("The --fix option is not available for piped-in code; use --fix-dry-run instead.");
            return 2;
        }
        if (options.fixType && !options.fix && !options.fixDryRun) {
            log.error("The --fix-type option requires either --fix or --fix-dry-run.");
            return 2;
        }

        const engine = new ESLint(translateOptions(options));
        let results;

        if (useStdin) {
            results = await engine.lintText(text, {
                filePath: options.stdinFilename,
                warnIgnored: true
            });
        } else {
            results = await engine.lintFiles(files);
        }

        if (options.fix) {
            debug("Fix mode enabled - applying fixes");
            await ESLint.outputFixes(results);
        }

        let resultsToPrint = results;

        if (options.quiet) {
            debug("Quiet mode enabled - filtering out warnings");
            resultsToPrint = ESLint.getErrorResults(resultsToPrint);
        }

        if (await printResults(engine, resultsToPrint, options.format, options.outputFile)) {

            // Errors and warnings from the original unfiltered results should determine the exit code
            const { errorCount, fatalErrorCount, warningCount } = countErrors(results);

            const tooManyWarnings =
                options.maxWarnings >= 0 && warningCount > options.maxWarnings;
            const shouldExitForFatalErrors =
                options.exitOnFatalError && fatalErrorCount > 0;

            if (!errorCount && tooManyWarnings) {
                log.error(
                    "ESLint found too many warnings (maximum: %s).",
                    options.maxWarnings
                );
            }

            if (shouldExitForFatalErrors) {
                return 2;
            }

            return (errorCount || tooManyWarnings) ? 1 : 0;
        }

        return 2;
    }
};

module.exports = cli;
