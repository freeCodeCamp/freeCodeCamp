"use strict";

/**
 * **PostCSS Plugin Warning**
 *
 * Loader wrapper for postcss plugin warnings (`root.messages`)
 *
 * @class Warning
 * @extends Error
 *
 * @param {Object} warning PostCSS Warning
 */
class Warning extends Error {
  constructor(warning) {
    super(warning);
    const {
      text,
      line,
      column,
      plugin
    } = warning;
    this.name = "Warning";
    this.message = `${this.name}\n\n`;

    if (typeof line !== "undefined") {
      this.message += `(${line}:${column}) `;
    }

    this.message += plugin ? `${plugin}: ` : "";
    this.message += `${text}`;
    this.stack = false;
  }

}

module.exports = Warning;