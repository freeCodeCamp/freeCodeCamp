"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/** @typedef {import("ajv").default} Ajv */
/** @typedef {import("ajv").SchemaValidateFunction} SchemaValidateFunction */
/** @typedef {import("ajv").AnySchemaObject} AnySchemaObject */
/** @typedef {import("../validate").SchemaUtilErrorObject} SchemaUtilErrorObject */

/**
 * @param {string} message message
 * @param {object} schema schema
 * @param {string} data data
 * @returns {SchemaUtilErrorObject} error object
 */
function errorMessage(message, schema, data) {
  return {
    dataPath: undefined,
    // @ts-expect-error
    schemaPath: undefined,
    keyword: "absolutePath",
    params: {
      absolutePath: data
    },
    message,
    parentSchema: schema
  };
}

/**
 * @param {boolean} shouldBeAbsolute true when should be absolute path, otherwise false
 * @param {object} schema schema
 * @param {string} data data
 * @returns {SchemaUtilErrorObject} error object
 */
function getErrorFor(shouldBeAbsolute, schema, data) {
  const message = shouldBeAbsolute ? `The provided value ${JSON.stringify(data)} is not an absolute path!` : `A relative path is expected. However, the provided value ${JSON.stringify(data)} is an absolute path!`;
  return errorMessage(message, schema, data);
}

/**
 * @param {Ajv} ajv ajv
 * @returns {Ajv} configured ajv
 */
function addAbsolutePathKeyword(ajv) {
  ajv.addKeyword({
    keyword: "absolutePath",
    type: "string",
    errors: true,
    /**
     * @param {boolean} schema schema
     * @param {AnySchemaObject} parentSchema parent schema
     * @returns {SchemaValidateFunction} validate function
     */
    compile(schema, parentSchema) {
      /** @type {SchemaValidateFunction} */
      const callback = data => {
        let passes = true;
        const isExclamationMarkPresent = data.includes("!");
        if (isExclamationMarkPresent) {
          callback.errors = [errorMessage(`The provided value ${JSON.stringify(data)} contains exclamation mark (!) which is not allowed because it's reserved for loader syntax.`, parentSchema, data)];
          passes = false;
        }

        // ?:[A-Za-z]:\\ - Windows absolute path
        // \\\\ - Windows network absolute path
        // \/ - Unix-like OS absolute path
        const isCorrectAbsolutePath = schema === /^(?:[A-Za-z]:(\\|\/)|\\\\|\/)/.test(data);
        if (!isCorrectAbsolutePath) {
          callback.errors = [getErrorFor(schema, parentSchema, data)];
          passes = false;
        }
        return passes;
      };
      callback.errors = [];
      return callback;
    }
  });
  return ajv;
}
var _default = exports.default = addAbsolutePathKeyword;