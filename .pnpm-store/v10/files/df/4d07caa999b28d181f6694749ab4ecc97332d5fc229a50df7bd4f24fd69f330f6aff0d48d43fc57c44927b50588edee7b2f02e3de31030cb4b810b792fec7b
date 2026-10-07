"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;
exports.enableValidation = enableValidation;
exports.disableValidation = disableValidation;
exports.needValidate = needValidate;
Object.defineProperty(exports, "ValidationError", {
  enumerable: true,
  get: function () {
    return _ValidationError.default;
  }
});

var _absolutePath = _interopRequireDefault(require("./keywords/absolutePath"));

var _undefinedAsNull = _interopRequireDefault(require("./keywords/undefinedAsNull"));

var _ValidationError = _interopRequireDefault(require("./ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @template T
 * @param fn {(function(): any) | undefined}
 * @returns {function(): T}
 */
const memoize = fn => {
  let cache = false;
  /** @type {T} */

  let result;
  return () => {
    if (cache) {
      return result;
    }

    result =
    /** @type {function(): any} */
    fn();
    cache = true; // Allow to clean up memory for fn
    // and all dependent resources
    // eslint-disable-next-line no-undefined, no-param-reassign

    fn = undefined;
    return result;
  };
};

const getAjv = memoize(() => {
  // Use CommonJS require for ajv libs so TypeScript consumers aren't locked into esModuleInterop (see #110).
  // eslint-disable-next-line global-require
  const Ajv = require("ajv"); // eslint-disable-next-line global-require


  const ajvKeywords = require("ajv-keywords");

  const ajv = new Ajv({
    allErrors: true,
    verbose: true,
    $data: true
  });
  ajvKeywords(ajv, ["instanceof", "formatMinimum", "formatMaximum", "patternRequired"]); // Custom keywords

  (0, _absolutePath.default)(ajv);
  (0, _undefinedAsNull.default)(ajv);
  return ajv;
});
/** @typedef {import("json-schema").JSONSchema4} JSONSchema4 */

/** @typedef {import("json-schema").JSONSchema6} JSONSchema6 */

/** @typedef {import("json-schema").JSONSchema7} JSONSchema7 */

/** @typedef {import("ajv").ErrorObject} ErrorObject */

/** @typedef {import("ajv").ValidateFunction} ValidateFunction */

/**
 * @typedef {Object} Extend
 * @property {number=} formatMinimum
 * @property {number=} formatMaximum
 * @property {boolean=} formatExclusiveMinimum
 * @property {boolean=} formatExclusiveMaximum
 * @property {string=} link
 * @property {boolean=} undefinedAsNull
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

/**
 * @param {SchemaUtilErrorObject} error
 * @param {number} idx
 * @returns {SchemaUtilErrorObject}
 */

function applyPrefix(error, idx) {
  // eslint-disable-next-line no-param-reassign
  error.dataPath = `[${idx}]${error.dataPath}`;

  if (error.children) {
    error.children.forEach(err => applyPrefix(err, idx));
  }

  return error;
}

let skipValidation = false; // We use `process.env.SKIP_VALIDATION` because you can have multiple `schema-utils` with different version,
// so we want to disable it globally, `process.env` doesn't supported by browsers, so we have the local `skipValidation` variables
// Enable validation

function enableValidation() {
  skipValidation = false; // Disable validation for any versions

  if (process && process.env) {
    process.env.SKIP_VALIDATION = "n";
  }
} // Disable validation


function disableValidation() {
  skipValidation = true;

  if (process && process.env) {
    process.env.SKIP_VALIDATION = "y";
  }
} // Check if we need to confirm


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
 * @param {Schema} schema
 * @param {Array<object> | object} options
 * @param {ValidationErrorConfiguration=} configuration
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
/** @typedef {WeakMap<Schema, ValidateFunction>} */


const schemaCache = new WeakMap();
/**
 * @param {Schema} schema
 * @param {Array<object> | object} options
 * @returns {Array<SchemaUtilErrorObject>}
 */

function validateObject(schema, options) {
  let compiledSchema = schemaCache.get(schema);

  if (!compiledSchema) {
    compiledSchema = getAjv().compile(schema);
    schemaCache.set(schema, compiledSchema);
  }

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
}