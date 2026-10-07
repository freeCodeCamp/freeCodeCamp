"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ajv = _interopRequireDefault(require("ajv"));

var _ajvKeywords = _interopRequireDefault(require("ajv-keywords"));

var _absolutePath = _interopRequireDefault(require("./keywords/absolutePath"));

var _ValidationError = _interopRequireDefault(require("./ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @typedef {import("json-schema").JSONSchema4} JSONSchema4 */

/** @typedef {import("json-schema").JSONSchema6} JSONSchema6 */

/** @typedef {import("json-schema").JSONSchema7} JSONSchema7 */

/** @typedef {import("ajv").ErrorObject} ErrorObject */

/**
 * @typedef {Object} Extend
 * @property {number=} formatMinimum
 * @property {number=} formatMaximum
 * @property {boolean=} formatExclusiveMinimum
 * @property {boolean=} formatExclusiveMaximum
 */

/** @typedef {(JSONSchema4 | JSONSchema6 | JSONSchema7) & Extend} Schema */

/** @typedef {ErrorObject & { children?: Array<ErrorObject>}} SchemaUtilErrorObject */

/**
 * @callback PostFormatter
 * @param {string} formattedError
 * @param {SchemaUtilErrorObject} error
 * @returns {string}
 */

/**
 * @typedef {Object} ValidationErrorConfiguration
 * @property {string=} name
 * @property {string=} baseDataPath
 * @property {PostFormatter=} postFormatter
 */
const ajv = new _ajv.default({
  allErrors: true,
  verbose: true,
  $data: true
});
(0, _ajvKeywords.default)(ajv, ['instanceof', 'formatMinimum', 'formatMaximum', 'patternRequired']); // Custom keywords

(0, _absolutePath.default)(ajv);
/**
 * @param {Schema} schema
 * @param {Array<object> | object} options
 * @param {ValidationErrorConfiguration=} configuration
 * @returns {void}
 */

function validate(schema, options, configuration) {
  let errors = [];

  if (Array.isArray(options)) {
    errors = Array.from(options, nestedOptions => validateObject(schema, nestedOptions));
    errors.forEach((list, idx) => {
      const applyPrefix =
      /**
       * @param {SchemaUtilErrorObject} error
       */
      error => {
        // eslint-disable-next-line no-param-reassign
        error.dataPath = `[${idx}]${error.dataPath}`;

        if (error.children) {
          error.children.forEach(applyPrefix);
        }
      };

      list.forEach(applyPrefix);
    });
    errors = errors.reduce((arr, items) => {
      arr.push(...items);
      return arr;
    }, []);
  } else {
    errors = validateObject(schema, options);
  }

  if (errors.length > 0) {
    throw new _ValidationError.default(errors, schema, configuration);
  }
}
/**
 * @param {Schema} schema
 * @param {Array<object> | object} options
 * @returns {Array<SchemaUtilErrorObject>}
 */


function validateObject(schema, options) {
  const compiledSchema = ajv.compile(schema);
  const valid = compiledSchema(options);
  if (valid) return [];
  return compiledSchema.errors ? filterErrors(compiledSchema.errors) : [];
}
/**
 * @param {Array<ErrorObject>} errors
 * @returns {Array<SchemaUtilErrorObject>}
 */


function filterErrors(errors) {
  /** @type {Array<SchemaUtilErrorObject>} */
  let newErrors = [];

  for (const error of
  /** @type {Array<SchemaUtilErrorObject>} */
  errors) {
    const {
      dataPath
    } = error;
    /** @type {Array<SchemaUtilErrorObject>} */

    let children = [];
    newErrors = newErrors.filter(oldError => {
      if (oldError.dataPath.includes(dataPath)) {
        if (oldError.children) {
          children = children.concat(oldError.children.slice(0));
        } // eslint-disable-next-line no-undefined, no-param-reassign


        oldError.children = undefined;
        children.push(oldError);
        return false;
      }

      return true;
    });

    if (children.length) {
      error.children = children;
    }

    newErrors.push(error);
  }

  return newErrors;
} // TODO change after resolve https://github.com/microsoft/TypeScript/issues/34994


validate.ValidationError = _ValidationError.default;
validate.ValidateError = _ValidationError.default;
var _default = validate;
exports.default = _default;