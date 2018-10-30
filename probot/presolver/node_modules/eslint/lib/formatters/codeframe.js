/**
 * @fileoverview Codeframe reporter
 * @author Vitor Balocco
 */
"use strict";

const chalk = require("chalk");
const codeFrame = require("babel-code-frame");
const path = require("path");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Given a word and a count, append an s if count is not one.
 * @param   {string} word  A word in its singular form.
 * @param   {number} count A number controlling whether word should be pluralized.
 * @returns {string}       The original word with an s on the end if count is not one.
 */
function pluralize(word, count) {
    return (count === 1 ? word : `${word}s`);
}

/**
 * Gets a formatted relative file path from an absolute path and a line/column in the file.
 * @param   {string} filePath The absolute file path to format.
 * @param   {number} line     The line from the file to use for formatting.
 * @param   {number} column   The column from the file to use for formatting.
 * @returns {string}          The formatted file path.
 */
function formatFilePath(filePath, line, column) {
    let relPath = path.relative(process.cwd(), filePath);

    if (line && column) {
        relPath += `:${line}:${column}`;
    }

    return chalk.green(relPath);
}

/**
 * Gets the formatted output for a given message.
 * @param   {Object} message      The object that represents this message.
 * @param   {Object} parentResult The result object that this message belongs to.
 * @returns {string}              The formatted output.
 */
function formatMessage(message, parentResult) {
    const type = (message.fatal || message.severity === 2) ? chalk.red("error") : chalk.yellow("warning");
    const msg = `${chalk.bold(message.message.replace(/\.$/, ""))}`;
    const ruleId = message.fatal ? "" : chalk.dim(`(${message.ruleId})`);
    const filePath = formatFilePath(parentResult.filePath, message.line, message.column);
    const sourceCode = parentResult.output ? parentResult.output : parentResult.source;

    const firstLine = [
        `${type}:`,
        `${msg}`,
        ruleId ? `${ruleId}` : "",
        sourceCode ? `at ${filePath}:` : `at ${filePath}`
    ].filter(String).join(" ");

    const result = [firstLine];

    if (sourceCode) {
        result.push(
            codeFrame(sourceCode, message.line, message.column, { highlightCode: false })
        );
    }

    return result.join("\n");
}

/**
 * Gets the formatted output summary for a given number of errors and warnings.
 * @param   {number} errors   The number of errors.
 * @param   {number} warnings The number of warnings.
 * @returns {string}          The formatted output summary.
 */
function formatSummary(errors, warnings) {
    const summaryColor = errors > 0 ? "red" : "yellow";
    const summary = [];

    if (errors > 0) {
        summary.push(`${errors} ${pluralize("error", errors)}`);
    }

    if (warnings > 0) {
        summary.push(`${warnings} ${pluralize("warning", warnings)}`);
    }

    return chalk[summaryColor].bold(`${summary.join(" and ")} found.`);
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function(results) {
    let errors = 0;
    let warnings = 0;
    const resultsWithMessages = results.filter(result => result.messages.length > 0);

    let output = resultsWithMessages.reduce((resultsOutput, result) => {
        const messages = result.messages.map(message => `${formatMessage(message, result)}\n\n`);

        errors += result.errorCount;
        warnings += result.warningCount;

        return resultsOutput.concat(messages);
    }, []).join("\n");

    output += "\n";
    output += formatSummary(errors, warnings);

    return (errors + warnings) > 0 ? output : "";
};
