"use strict";

exports.__esModule = true;
exports.validateOptionsSchema = validateOptionsSchema;
var _joi = require("./joi");
const validationOptions = {
  // Show all errors at once, rather than only the first one every time
  abortEarly: false,
  cache: true
};
async function validateOptionsSchema(pluginSchema, pluginOptions, options = {
  validateExternalRules: true,
  returnWarnings: true
}) {
  const {
    validateExternalRules,
    returnWarnings
  } = options;
  const warnOnUnknownSchema = pluginSchema.pattern(/.*/, _joi.Joi.any().warning(`any.unknown`));
  return await warnOnUnknownSchema.validateAsync(pluginOptions, {
    ...validationOptions,
    externals: validateExternalRules,
    warnings: returnWarnings
  });
}