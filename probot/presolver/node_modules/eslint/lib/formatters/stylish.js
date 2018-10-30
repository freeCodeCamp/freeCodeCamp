/**
 * @fileoverview Stylish reporter
 * @author Sindre Sorhus
 */
"use strict";

const chalk = require("chalk"),
    table = require("text-table");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Given a word and a count, append an s if count is not one.
 * @param {string} word A word in its singular form.
 * @param {int} count A number controlling whether word should be pluralized.
 * @returns {string} The original word with an s on the end if count is not one.
 */
function pluralize(word, count) {
    return (count === 1 ? word : `${word}s`);
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function(results) {

    let output = "\n",
        errors = 0,
        warnings = 0,
        summaryColor = "yellow";

    results.forEach(result => {
        const messages = result.messages;

        if (messages.length === 0) {
            return;
        }

        errors += result.errorCount;
        warnings += result.warningCount;

        output += `${chalk.underline(result.filePath)}\n`;

        output += `${table(
            messages.map(message => {
                let messageType;

                if (message.fatal || message.severity === 2) {
                    messageType = chalk.red("error");
                    summaryColor = "red";
                } else {
                    messageType = chalk.yellow("warning");
                }

                return [
                    "",
                    message.line || 0,
                    message.column || 0,
                    messageType,
                    message.message.replace(/\.$/, ""),
                    chalk.dim(message.ruleId || "")
                ];
            }),
            {
                align: ["", "r", "l"],
                stringLength(str) {
                    return chalk.stripColor(str).length;
                }
            }
        ).split("\n").map(el => el.replace(/(\d+)\s+(\d+)/, (m, p1, p2) => chalk.dim(`${p1}:${p2}`))).join("\n")}\n\n`;
    });

    const total = errors + warnings;

    if (total > 0) {
        output += chalk[summaryColor].bold([
            "\u2716 ", total, pluralize(" problem", total),
            " (", errors, pluralize(" error", errors), ", ",
            warnings, pluralize(" warning", warnings), ")\n"
        ].join(""));
    }

    return total > 0 ? output : "";
};
