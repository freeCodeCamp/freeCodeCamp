/**
 * @fileoverview Module for loading rules from files and directories.
 * @author Michael Ficarra
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs"),
    path = require("path");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Load all rule modules from specified directory.
 * @param {string} [rulesDir] Path to rules directory, may be relative. Defaults to `lib/rules`.
 * @param {string} cwd Current working directory
 * @returns {Object} Loaded rule modules by rule ids (file names).
 */
module.exports = function(rulesDir, cwd) {
    if (!rulesDir) {
        rulesDir = path.join(__dirname, "rules");
    } else {
        rulesDir = path.resolve(cwd, rulesDir);
    }

    const rules = Object.create(null);

    fs.readdirSync(rulesDir).forEach(file => {
        if (path.extname(file) !== ".js") {
            return;
        }
        rules[file.slice(0, -3)] = path.join(rulesDir, file);
    });
    return rules;
};
