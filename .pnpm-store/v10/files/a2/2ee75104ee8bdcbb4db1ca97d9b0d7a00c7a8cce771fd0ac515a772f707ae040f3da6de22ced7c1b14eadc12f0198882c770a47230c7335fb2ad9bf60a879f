"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
var _exportNames = {
  Joi: true
};
exports.Joi = void 0;
var _joi = _interopRequireDefault(require("joi"));
var _pluginOptionsSchemaJoiType = require("./utils/plugin-options-schema-joi-type");
Object.keys(_pluginOptionsSchemaJoiType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _pluginOptionsSchemaJoiType[key]) return;
  exports[key] = _pluginOptionsSchemaJoiType[key];
});
const Joi = _joi.default.extend({
  // This tells Joi to extend _all_ types with .dotenv(), see
  // https://github.com/sideway/joi/commit/03adf22eb1f06c47d1583617093edee3a96b3873
  // @ts-ignore Joi types weren't updated with that commit, PR: https://github.com/sideway/joi/pull/2477
  type: /^s/,
  rules: {
    // NOTE(@mxstbr): Disabled until we decide on the necessity for this API.
    // dotenv: {
    //   args: [`name`],
    //   validate(value, helpers, args): void {
    //     if (!args.name) {
    //       return helpers.error(
    //         `any.dotenv requires the environment variable name`
    //       )
    //     }
    //     return value
    //   },
    //   method(name): Schema {
    //     return this.$_addRule({ name: `dotenv`, args: { name } })
    //   },
    // },
  }
});
exports.Joi = Joi;