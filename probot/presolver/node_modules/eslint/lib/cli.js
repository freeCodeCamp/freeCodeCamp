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
    shell = require("shelljs"),
    options = require("./options"),
    CLIEngine = require("./cli-engine"),
    mkdirp = require("mkdirp"),
    log = require("./logging");

const debug = require("debug")("eslint:cli");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Translates the CLI options into the options expected by the CLIEngine.
 * @param {Object} cliOptions The CLI options to translate.
 * @returns {CLIEngineOptions} The options object for the CLIEngine.
 * @private
 */
function translateOptions(cliOptions) {
    return {
        envs: cliOptions.env,
        extensions: cliOptions.ext,
        rules: cliOptions.rule,
        plugins: cliOptions.plugin,
        globals: cliOptions.global,
        ignore: cliOptions.ignore,
        ignorePath: cliOptions.ignorePath,
        ignorePattern: cliOptions.ignorePattern,
        configFile: cliOptions.config,
        rulePaths: cliOptions.rulesdir,
        useEslintrc: cliOptions.eslintrc,
        parser: cliOptions.parser,
        parserOptions: cliOptions.parserOptions,
        cache: cliOptions.cache,
        cacheFile: cliOptions.cacheFile,
        cacheLocation: cliOptions.cacheLocation,
        fix: cliOptions.fix,
        allowInlineConfig: cliOptions.inlineConfig
    };
}

/**
 * Outputs the results of the linting.
 * @param {CLIEngine} engine The CLIEngine to use.
 * @param {LintResult[]} results The results to print.
 * @param {string} format The name of the formatter to use or the path to the formatter.
 * @param {string} outputFile The path for the output file.
 * @returns {boolean} True if the printing succeeds, false if not.
 * @private
 */
function printResults(engine, results, format, outputFile) {
    let formatter;

    try {
        formatter = engine.getFormatter(format);
    } catch (e) {
        log.error(e.message);
        return false;
    }

    const output = formatter(results);

    if (output) {
        if (outputFile) {
            const filePath = path.resolve(process.cwd(), outputFile);

            if (shell.test("-d", filePath)) {
                log.error("Cannot write to output file path, it is a directory: %s", outputFile);
                return false;
            }

            try {
                mkdirp.sync(path.dirname(filePath));
                fs.writeFileSync(filePath, output);
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
     * @returns {int} The exit code for the operation.
     */
    execute(args, text) {

        let currentOptions;

        try {
            currentOptions = options.parse(args);
        } catch (error) {
            log.error(error.message);
            return 1;
        }

        const files = currentOptions._;

        if (currentOptions.version) { // version from package.json

            log.info(`v${require("../package.json").version}`);

        } else if (currentOptions.printConfig) {
            if (files.length) {
                log.error("The --print-config option must be used with exactly one file name.");
                return 1;
            } else if (text) {
                log.error("The --print-config option is not available for piped-in code.");
                return 1;
            }

            const engine = new CLIEngine(translateOptions(currentOptions));

            const fileConfig = engine.getConfigForFile(currentOptions.printConfig);

            log.info(JSON.stringify(fileConfig, null, "  "));
            return 0;
        } else if (currentOptions.help || (!files.length && !text)) {

            log.info(options.generateHelp());

        } else {

            debug(`Running on ${text ? "text" : "files"}`);

            // disable --fix for piped-in code until we know how to do it correctly
            if (text && currentOptions.fix) {
                log.error("The --fix option is not available for piped-in code.");
                return 1;
            }

            const engine = new CLIEngine(translateOptions(currentOptions));

            const report = text ? engine.executeOnText(text, currentOptions.stdinFilename, true) : engine.executeOnFiles(files);

            if (currentOptions.fix) {
                debug("Fix mode enabled - applying fixes");
                CLIEngine.outputFixes(report);
            }

            if (currentOptions.quiet) {
                debug("Quiet mode enabled - filtering out warnings");
                report.results = CLIEngine.getErrorResults(report.results);
            }

            if (printResults(engine, report.results, currentOptions.format, currentOptions.outputFile)) {
                const tooManyWarnings = currentOptions.maxWarnings >= 0 && report.warningCount > currentOptions.maxWarnings;

                if (!report.errorCount && tooManyWarnings) {
                    log.error("ESLint found too many warnings (maximum: %s).", currentOptions.maxWarnings);
                }

                return (report.errorCount || tooManyWarnings) ? 1 : 0;
            }
            return 1;


        }

        return 0;
    }
};

module.exports = cli;
