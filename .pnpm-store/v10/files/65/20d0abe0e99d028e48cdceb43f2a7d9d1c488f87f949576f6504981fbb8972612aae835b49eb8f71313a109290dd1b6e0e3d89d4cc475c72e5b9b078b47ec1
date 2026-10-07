"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class CssSyntaxError extends Error {
  constructor(error) {
    super(error);
    const {
      reason,
      line,
      column,
      file
    } = error;
    this.name = "CssSyntaxError"; // Based on https://github.com/postcss/postcss/blob/master/lib/css-syntax-error.es6#L132
    // We don't need `plugin` and `file` properties.

    this.message = `${this.name}\n\n`;

    if (typeof line !== "undefined") {
      this.message += `(${line}:${column}) `;
    }

    this.message += file ? `${file} ` : "<css input> ";
    this.message += `${reason}`;
    const code = error.showSourceCode();

    if (code) {
      this.message += `\n\n${code}\n`;
    } // We don't need stack https://github.com/postcss/postcss/blob/master/docs/guidelines/runner.md#31-dont-show-js-stack-for-csssyntaxerror


    this.stack = false;
  }

}

exports.default = CssSyntaxError;