/**
 * @fileoverview jUnit Reporter
 * @author Jamund Ferguson
 */
"use strict";

const xmlEscape = require("../xml-escape");
const path = require("path");

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
        return "Error";
    }
    return "Warning";

}

/**
 * Returns a full file path without extension
 * @param {string} filePath input file path
 * @returns {string} file path without extension
 * @private
 */
function pathWithoutExt(filePath) {
    return path.join(path.dirname(filePath), path.basename(filePath, path.extname(filePath)));
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function(results) {

    let output = "";

    output += "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
    output += "<testsuites>\n";

    results.forEach(result => {

        const messages = result.messages;
        const classname = pathWithoutExt(result.filePath);

        if (messages.length > 0) {
            output += `<testsuite package="org.eslint" time="0" tests="${messages.length}" errors="${messages.length}" name="${result.filePath}">\n`;
            messages.forEach(message => {
                const type = message.fatal ? "error" : "failure";

                output += `<testcase time="0" name="org.eslint.${message.ruleId || "unknown"}" classname="${classname}">`;
                output += `<${type} message="${xmlEscape(message.message || "")}">`;
                output += "<![CDATA[";
                output += `line ${message.line || 0}, col `;
                output += `${message.column || 0}, ${getMessageType(message)}`;
                output += ` - ${xmlEscape(message.message || "")}`;
                output += (message.ruleId ? ` (${message.ruleId})` : "");
                output += "]]>";
                output += `</${type}>`;
                output += "</testcase>\n";
            });
            output += "</testsuite>\n";
        } else {
            output += `<testsuite package="org.eslint" time="0" tests="1" errors="0" name="${result.filePath}">\n`;
            output += `<testcase time="0" name="${result.filePath}" classname="${classname}" />\n`;
            output += "</testsuite>\n";
        }

    });

    output += "</testsuites>\n";

    return output;
};
