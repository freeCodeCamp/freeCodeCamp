"use strict";

exports.__esModule = true;
exports.testPluginOptionsSchema = testPluginOptionsSchema;
var _joi = require("./joi");
var _validate = require("./validate");
async function testPluginOptionsSchema(pluginSchemaFunction, pluginOptions) {
  const pluginSchema = pluginSchemaFunction({
    Joi: _joi.Joi.extend(joi => {
      return {
        type: `subPlugins`,
        base: joi.array().items(joi.alternatives(joi.string(), joi.object({
          resolve: _joi.Joi.string(),
          options: _joi.Joi.object({}).unknown(true)
        }))).custom(arrayValue => arrayValue.map(value => {
          if (typeof value === `string`) {
            value = {
              resolve: value
            };
          }
          return value;
        }), `Gatsby specific subplugin validation`).default([])
      };
    })
  });
  try {
    var _warning$details$map, _warning$details;
    const {
      warning
    } = await (0, _validate.validateOptionsSchema)(pluginSchema, pluginOptions);
    const warnings = (_warning$details$map = warning === null || warning === void 0 ? void 0 : (_warning$details = warning.details) === null || _warning$details === void 0 ? void 0 : _warning$details.map(detail => detail.message)) !== null && _warning$details$map !== void 0 ? _warning$details$map : [];
    if ((warnings === null || warnings === void 0 ? void 0 : warnings.length) > 0) {
      return {
        isValid: true,
        errors: [],
        hasWarnings: true,
        warnings
      };
    }
  } catch (e) {
    var _e$details$map, _e$details;
    const errors = (_e$details$map = e === null || e === void 0 ? void 0 : (_e$details = e.details) === null || _e$details === void 0 ? void 0 : _e$details.map(detail => detail.message)) !== null && _e$details$map !== void 0 ? _e$details$map : [];
    return {
      isValid: false,
      errors,
      hasWarnings: false,
      warnings: []
    };
  }
  return {
    isValid: true,
    errors: [],
    hasWarnings: false,
    warnings: []
  };
}