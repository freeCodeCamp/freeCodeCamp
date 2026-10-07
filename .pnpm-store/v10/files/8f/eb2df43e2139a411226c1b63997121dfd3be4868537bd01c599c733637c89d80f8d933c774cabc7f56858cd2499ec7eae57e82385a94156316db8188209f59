"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Warning extends Error {
  constructor(warning) {
    super(warning);
    const {
      text,
      line,
      column
    } = warning;
    this.name = "Warning"; // Based on https://github.com/postcss/postcss/blob/master/lib/warning.es6#L74
    // We don't need `plugin` properties.

    this.message = `${this.name}\n\n`;

    if (typeof line !== "undefined") {
      this.message += `(${line}:${column}) `;
    }

    this.message += `${text}`; // We don't need stack https://github.com/postcss/postcss/blob/master/docs/guidelines/runner.md#31-dont-show-js-stack-for-csssyntaxerror

    this.stack = false;
  }

}

exports.default = Warning;