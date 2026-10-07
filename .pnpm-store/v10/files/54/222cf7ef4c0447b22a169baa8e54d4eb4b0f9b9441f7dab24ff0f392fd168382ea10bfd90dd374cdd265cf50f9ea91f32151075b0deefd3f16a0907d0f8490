"use strict";

const Range = require("./Range");
/** @typedef {import("../validate").Schema} Schema */

/**
 * @param {Schema} schema
 * @param {boolean} logic
 * @return {string[]}
 */


module.exports.stringHints = function stringHints(schema, logic) {
  const hints = [];
  let type = "string";
  const currentSchema = { ...schema
  };

  if (!logic) {
    const tmpLength = currentSchema.minLength;
    const tmpFormat = currentSchema.formatMinimum;
    const tmpExclusive = currentSchema.formatExclusiveMaximum;
    currentSchema.minLength = currentSchema.maxLength;
    currentSchema.maxLength = tmpLength;
    currentSchema.formatMinimum = currentSchema.formatMaximum;
    currentSchema.formatMaximum = tmpFormat;
    currentSchema.formatExclusiveMaximum = !currentSchema.formatExclusiveMinimum;
    currentSchema.formatExclusiveMinimum = !tmpExclusive;
  }

  if (typeof currentSchema.minLength === "number") {
    if (currentSchema.minLength === 1) {
      type = "non-empty string";
    } else {
      const length = Math.max(currentSchema.minLength - 1, 0);
      hints.push(`should be longer than ${length} character${length > 1 ? "s" : ""}`);
    }
  }

  if (typeof currentSchema.maxLength === "number") {
    if (currentSchema.maxLength === 0) {
      type = "empty string";
    } else {
      const length = currentSchema.maxLength + 1;
      hints.push(`should be shorter than ${length} character${length > 1 ? "s" : ""}`);
    }
  }

  if (currentSchema.pattern) {
    hints.push(`should${logic ? "" : " not"} match pattern ${JSON.stringify(currentSchema.pattern)}`);
  }

  if (currentSchema.format) {
    hints.push(`should${logic ? "" : " not"} match format ${JSON.stringify(currentSchema.format)}`);
  }

  if (currentSchema.formatMinimum) {
    hints.push(`should be ${currentSchema.formatExclusiveMinimum ? ">" : ">="} ${JSON.stringify(currentSchema.formatMinimum)}`);
  }

  if (currentSchema.formatMaximum) {
    hints.push(`should be ${currentSchema.formatExclusiveMaximum ? "<" : "<="} ${JSON.stringify(currentSchema.formatMaximum)}`);
  }

  return [type].concat(hints);
};
/**
 * @param {Schema} schema
 * @param {boolean} logic
 * @return {string[]}
 */


module.exports.numberHints = function numberHints(schema, logic) {
  const hints = [schema.type === "integer" ? "integer" : "number"];
  const range = new Range();

  if (typeof schema.minimum === "number") {
    range.left(schema.minimum);
  }

  if (typeof schema.exclusiveMinimum === "number") {
    range.left(schema.exclusiveMinimum, true);
  }

  if (typeof schema.maximum === "number") {
    range.right(schema.maximum);
  }

  if (typeof schema.exclusiveMaximum === "number") {
    range.right(schema.exclusiveMaximum, true);
  }

  const rangeFormat = range.format(logic);

  if (rangeFormat) {
    hints.push(rangeFormat);
  }

  if (typeof schema.multipleOf === "number") {
    hints.push(`should${logic ? "" : " not"} be multiple of ${schema.multipleOf}`);
  }

  return hints;
};