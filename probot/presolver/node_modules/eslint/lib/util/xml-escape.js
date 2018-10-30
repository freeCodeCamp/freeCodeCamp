/**
 * @fileoverview XML character escaper
 * @author George Chung
 */
"use strict";

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Returns the escaped value for a character
 * @param {string} s string to examine
 * @returns {string} severity level
 * @private
 */
module.exports = function(s) {
    return (`${s}`).replace(/[<>&"'\x00-\x1F\x7F\u0080-\uFFFF]/g, c => { // eslint-disable-line no-control-regex
        switch (c) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
            case "'":
                return "&apos;";
            default:
                return `&#${c.charCodeAt(0)};`;
        }
    });
};
