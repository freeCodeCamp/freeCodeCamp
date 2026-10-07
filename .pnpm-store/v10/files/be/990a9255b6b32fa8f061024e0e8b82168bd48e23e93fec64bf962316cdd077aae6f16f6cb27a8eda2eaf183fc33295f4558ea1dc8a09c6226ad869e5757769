/**
 * @fileoverview CheckStyle XML reporter
 * @author Ian Christian Myers
 */
"use strict";

const xmlEscape = require("../xml-escape");

//------------------------------------------------------------------------------
// Helper Functions
//------------------------------------------------------------------------------

/**
 * Returns the severity of warning or error
 * @param {Object} message message object to examine
 * @returns {string} severity level
 * @private
 */
function getMessageType(message) {
    if (message.fatal || message.severity === 2) {
        return "error";
    }
    return "warning";

}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function(results) {

    let output = "";

    output += "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
    output += "<checkstyle version=\"4.3\">";

    results.forEach(result => {
        const messages = result.messages;

        output += `<file name="${xmlEscape(result.filePath)}">`;

        messages.forEach(message => {
            output += [
                `<error line="${xmlEscape(message.line || 0)}"`,
                `column="${xmlEscape(message.column || 0)}"`,
                `severity="${xmlEscape(getMessageType(message))}"`,
                `message="${xmlEscape(message.message)}${message.ruleId ? ` (${message.ruleId})` : ""}"`,
                `source="${message.ruleId ? xmlEscape(`eslint.rules.${message.ruleId}`) : ""}" />`
            ].join(" ");
        });

        output += "</file>";

    });

    output += "</checkstyle>";

    return output;
};
