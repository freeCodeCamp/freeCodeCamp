"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/** @typedef {import("ajv").default} Ajv */
/** @typedef {import("ajv").SchemaValidateFunction} SchemaValidateFunction */
/** @typedef {import("ajv").AnySchemaObject} AnySchemaObject */
/** @typedef {import("ajv").ValidateFunction} ValidateFunction */

/**
 * @param {Ajv} ajv ajv
 * @returns {Ajv} configured ajv
 */
function addUndefinedAsNullKeyword(ajv) {
  ajv.addKeyword({
    keyword: "undefinedAsNull",
    before: "enum",
    modifying: true,
    /** @type {SchemaValidateFunction} */
    validate(kwVal, data, metadata, dataCxt) {
      if (kwVal && dataCxt && metadata && typeof metadata.enum !== "undefined") {
        const idx = dataCxt.parentDataProperty;
        if (typeof dataCxt.parentData[idx] === "undefined") {
          dataCxt.parentData[dataCxt.parentDataProperty] = null;
        }
      }
      return true;
    }
  });
  return ajv;
}
var _default = exports.default = addUndefinedAsNullKeyword;