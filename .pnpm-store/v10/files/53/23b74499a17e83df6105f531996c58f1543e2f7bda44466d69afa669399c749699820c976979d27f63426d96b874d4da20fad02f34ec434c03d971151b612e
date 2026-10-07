/**
 * @fileoverview Visual Studio compatible formatter
 * @author Ronald Pijnacker
 */

"use strict";

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

    let output = "",
        total = 0;

    results.forEach(result => {

        const messages = result.messages;

        total += messages.length;

        messages.forEach(message => {

            output += result.filePath;
            output += `(${message.line || 0}`;
            output += message.column ? `,${message.column}` : "";
            output += `): ${getMessageType(message)}`;
            output += message.ruleId ? ` ${message.ruleId}` : "";
            output += ` : ${message.message}`;
            output += "\n";

        });

    });

    if (total === 0) {
        output += "no problems";
    } else {
        output += `\n${total} problem${total !== 1 ? "s" : ""}`;
    }

    return output;
};
