"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ValidationError", {
  enumerable: true,
  get: function () {
    return _ValidationError.default;
  }
});
exports.disableValidation = disableValidation;
exports.enableValidation = enableValidation;
exports.needValidate = needValidate;
exports.validate = validate;
var _ValidationError = _interopRequireDefault(require("./ValidationError"));
var _memorize = _interopRequireDefault(require("./util/memorize"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getAjv = (0, _memorize.default)(() => {
  // Use CommonJS require for ajv libs so TypeScript consumers aren't locked into esModuleInterop (see #110).

  const Ajv = require("ajv").default;
  const ajvKeywords = require("ajv-keywords").default;
  const addFormats = require("ajv-formats").default;

  /**
   * @type {Ajv}
   */
  const ajv = new Ajv({
    strict: false,
    allErrors: true,
    verbose: true,
    $data: true
  });
  ajvKeywords(ajv, ["instanceof", "patternRequired"]);
  // TODO set `{ keywords: true }` for the next major release and remove `keywords/limit.js`
  addFormats(ajv, {
    keywords: false
  });

  // Custom keywords

  const addAbsolutePathKeyword = require("./keywords/absolutePath").default;
  addAbsolutePathKeyword(ajv);
  const addLimitKeyword = require("./keywords/limit").default;
  addLimitKeyword(ajv);
  const addUndefinedAsNullKeyword = require("./keywords/undefinedAsNull").default;
  addUndefinedAsNullKeyword(ajv);
  return ajv;
});

/** @typedef {import("json-schema").JSONSchema4} JSONSchema4 */
/** @typedef {import("json-schema").JSONSchema6} JSONSchema6 */
/** @typedef {import("json-schema").JSONSchema7} JSONSchema7 */
/** @typedef {import("ajv").ErrorObject} ErrorObject */

/**
 * @typedef {object} ExtendedSchema
 * @property {(string | number)=} formatMinimum format minimum
 * @property {(string | number)=} formatMaximum format maximum
 * @property {(string | boolean)=} formatExclusiveMinimum format exclusive minimum
 * @property {(string | boolean)=} formatExclusiveMaximum format exclusive maximum
 * @property {string=} link link
 * @property {boolean=} undefinedAsNull undefined will be resolved as null
 */

// TODO remove me in the next major release
/** @typedef {ExtendedSchema} Extend */

/** @typedef {(JSONSchema4 | JSONSchema6 | JSONSchema7) & ExtendedSchema} Schema */

/** @typedef {ErrorObject & { children?: Array<ErrorObject> }} SchemaUtilErrorObject */

/**
 * @callback PostFormatter
 * @param {string} formattedError
 * @param {SchemaUtilErrorObject} error
 * @returns {string}
 */

/**
 * @typedef {object} ValidationErrorConfiguration
 * @property {string=} name name
 * @property {string=} baseDataPath base data path
 * @property {PostFormatter=} postFormatter post formatter
 */

/**
 * @param {SchemaUtilErrorObject} error error
 * @param {number} idx idx
 * @returns {SchemaUtilErrorObject} error object with idx
 */
function applyPrefix(error, idx) {
  error.instancePath = `[${idx}]${error.instancePath}`;
  if (error.children) {
    for (const err of error.children) applyPrefix(err, idx);
  }
  return error;
}
let skipValidation = false;

// We use `process.env.SKIP_VALIDATION` because you can have multiple `schema-utils` with different version,
// so we want to disable it globally, `process.env` doesn't supported by browsers, so we have the local `skipValidation` variables

// Enable validation
/**
 * @returns {void}
 */
function enableValidation() {
  skipValidation = false;

  // Disable validation for any versions
  if (process && process.env) {
    process.env.SKIP_VALIDATION = "n";
  }
}

// Disable validation
/**
 * @returns {void}
 */
function disableValidation() {
  skipValidation = true;
  if (process && process.env) {
    process.env.SKIP_VALIDATION = "y";
  }
}

// Check if we need to confirm
/**
 * @returns {boolean} true when need validate, otherwise false
 */
function needValidate() {
  if (skipValidation) {
    return false;
  }
  if (process && process.env && process.env.SKIP_VALIDATION) {
    const value = process.env.SKIP_VALIDATION.trim();
    if (/^(?:y|yes|true|1|on)$/i.test(value)) {
      return false;
    }
    if (/^(?:n|no|false|0|off)$/i.test(value)) {
      return true;
    }
  }
  return true;
}

/**
 * @param {Array<ErrorObject>} errors array of error objects
 * @returns {Array<SchemaUtilErrorObject>} filtered array of objects
 */
function filterErrors(errors) {
  /** @type {Array<SchemaUtilErrorObject>} */
  let newErrors = [];
  for (const error of (/** @type {Array<SchemaUtilErrorObject>} */errors)) {
    const {
      instancePath
    } = error;
    /** @type {Array<SchemaUtilErrorObject>} */
    let children = [];
    newErrors = newErrors.filter(oldError => {
      if (oldError.instancePath.includes(instancePath)) {
        if (oldError.children) {
          children = [...children, ...oldError.children];
        }
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
}

/**
 * @param {Schema} schema schema
 * @param {Array<object> | object} options options
 * @returns {Array<SchemaUtilErrorObject>} array of error objects
 */
function validateObject(schema, options) {
  // Not need to cache, because `ajv@8` has built-in cache
  const compiledSchema = getAjv().compile(schema);
  const valid = compiledSchema(options);
  if (valid) return [];
  return compiledSchema.errors ? filterErrors(compiledSchema.errors) : [];
}

/**
 * @param {Schema} schema schema
 * @param {Array<object> | object} options options
 * @param {ValidationErrorConfiguration=} configuration configuration
 * @returns {void}
 */
function validate(schema, options, configuration) {
  if (!needValidate()) {
    return;
  }
  let errors = [];
  if (Array.isArray(options)) {
    for (let i = 0; i <= options.length - 1; i++) {
      errors.push(...validateObject(schema, options[i]).map(err => applyPrefix(err, i)));
    }
  } else {
    errors = validateObject(schema, options);
  }
  if (errors.length > 0) {
    throw new _ValidationError.default(errors, schema, configuration);
  }
}