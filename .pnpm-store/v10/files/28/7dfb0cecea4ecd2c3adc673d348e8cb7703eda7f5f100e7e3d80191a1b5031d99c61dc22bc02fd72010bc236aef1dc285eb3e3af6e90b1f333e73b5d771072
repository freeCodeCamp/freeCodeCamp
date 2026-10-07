"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionValidator = void 0;
var _findSuggestion = require("./find-suggestion.js");
class OptionValidator {
  constructor(descriptor) {
    this.descriptor = descriptor;
  }
  validateTopLevelOptions(options, TopLevelOptionShape) {
    const validOptionNames = Object.keys(TopLevelOptionShape);
    for (const option of Object.keys(options)) {
      if (!validOptionNames.includes(option)) {
        throw new Error(this.formatMessage(`'${option}' is not a valid top-level option.
- Did you mean '${(0, _findSuggestion.findSuggestion)(option, validOptionNames)}'?`));
      }
    }
  }
  validateBooleanOption(name, value, defaultValue) {
    if (value === undefined) {
      return defaultValue;
    } else {
      this.invariant(typeof value === "boolean", `'${name}' option must be a boolean.`);
    }
    return value;
  }
  validateStringOption(name, value, defaultValue) {
    if (value === undefined) {
      return defaultValue;
    } else {
      this.invariant(typeof value === "string", `'${name}' option must be a string.`);
    }
    return value;
  }
  invariant(condition, message) {
    if (!condition) {
      throw new Error(this.formatMessage(message));
    }
  }
  formatMessage(message) {
    return `${this.descriptor}: ${message}`;
  }
}
exports.OptionValidator = OptionValidator;

//# sourceMappingURL=validator.js.map
