"use strict";

module.exports = function(it) {
    const { pattern, globDisabled } = it;

    return `
No files matching the pattern "${pattern}"${globDisabled ? " (with disabling globs)" : ""} were found.
Please check for typing mistakes in the pattern.
`.trimLeft();
};
