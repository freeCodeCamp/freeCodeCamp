"use strict";

/**
 * **PostCSS Syntax Error**
 *
 * Loader wrapper for postcss syntax errors
 *
 * @class SyntaxError
 * @extends Error
 *
 * @param {Object} err CssSyntaxError
 */
class SyntaxError extends Error {
  constructor(error) {
    super(error);
    const {
      line,
      column,
      reason,
      plugin,
      file
    } = error;
    this.name = "SyntaxError";
    this.message = `${this.name}\n\n`;

    if (typeof line !== "undefined") {
      this.message += `(${line}:${column}) `;
    }

    this.message += plugin ? `${plugin}: ` : "";
    this.message += file ? `${file} ` : "<css input> ";
    this.message += `${reason}`;
    const code = error.showSourceCode();

    if (code) {
      this.message += `\n\n${code}\n`;
    }

    this.stack = false;
  }

}

module.exports = SyntaxError;