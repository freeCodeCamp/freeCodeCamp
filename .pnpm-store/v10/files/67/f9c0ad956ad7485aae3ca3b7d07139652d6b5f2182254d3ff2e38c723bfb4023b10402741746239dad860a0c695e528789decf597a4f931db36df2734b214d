"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _memorize = _interopRequireDefault(require("./util/memorize"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/** @typedef {import("json-schema").JSONSchema6} JSONSchema6 */
/** @typedef {import("json-schema").JSONSchema7} JSONSchema7 */

/** @typedef {import("./validate").Schema} Schema */
/** @typedef {import("./validate").ValidationErrorConfiguration} ValidationErrorConfiguration */
/** @typedef {import("./validate").PostFormatter} PostFormatter */
/** @typedef {import("./validate").SchemaUtilErrorObject} SchemaUtilErrorObject */

/** @enum {number} */
const SPECIFICITY = {
  type: 1,
  not: 1,
  oneOf: 1,
  anyOf: 1,
  if: 1,
  enum: 1,
  const: 1,
  instanceof: 1,
  required: 2,
  pattern: 2,
  patternRequired: 2,
  format: 2,
  formatMinimum: 2,
  formatMaximum: 2,
  minimum: 2,
  exclusiveMinimum: 2,
  maximum: 2,
  exclusiveMaximum: 2,
  multipleOf: 2,
  uniqueItems: 2,
  contains: 2,
  minLength: 2,
  maxLength: 2,
  minItems: 2,
  maxItems: 2,
  minProperties: 2,
  maxProperties: 2,
  dependencies: 2,
  propertyNames: 2,
  additionalItems: 2,
  additionalProperties: 2,
  absolutePath: 2
};

/**
 * @param {string} value value
 * @returns {value is number} true when is number, otherwise false
 */
function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

/**
 * @param {Array<SchemaUtilErrorObject>} array array of error objects
 * @param {(item: SchemaUtilErrorObject) => number} fn function
 * @returns {Array<SchemaUtilErrorObject>} filtered max
 */
function filterMax(array, fn) {
  const evaluatedMax = array.reduce((max, item) => Math.max(max, fn(item)), 0);
  return array.filter(item => fn(item) === evaluatedMax);
}

/**
 * @param {Array<SchemaUtilErrorObject>} children children
 * @returns {Array<SchemaUtilErrorObject>} filtered children
 */
function filterChildren(children) {
  let newChildren = children;
  newChildren = filterMax(newChildren,
  /**
   * @param {SchemaUtilErrorObject} error error object
   * @returns {number} result
   */
  error => error.instancePath ? error.instancePath.length : 0);
  newChildren = filterMax(newChildren,
  /**
   * @param {SchemaUtilErrorObject} error error object
   * @returns {number} result
   */
  error => SPECIFICITY[(/** @type {keyof typeof SPECIFICITY} */error.keyword)] || 2);
  return newChildren;
}

/**
 * Extracts all refs from schema
 * @param {SchemaUtilErrorObject} error error object
 * @returns {Array<string>} extracted refs
 */
function extractRefs(error) {
  const {
    schema
  } = error;
  if (!Array.isArray(schema)) {
    return [];
  }
  return schema.map(({
    $ref
  }) => $ref).filter(Boolean);
}

/**
 * Find all children errors
 * @param {Array<SchemaUtilErrorObject>} children children
 * @param {Array<string>} schemaPaths schema paths
 * @returns {number} returns index of first child
 */
function findAllChildren(children, schemaPaths) {
  let i = children.length - 1;
  const predicate =
  /**
   * @param {string} schemaPath schema path
   * @returns {boolean} predicate
   */
  schemaPath => children[i].schemaPath.indexOf(schemaPath) !== 0;
  while (i > -1 && !schemaPaths.every(predicate)) {
    if (children[i].keyword === "anyOf" || children[i].keyword === "oneOf") {
      const refs = extractRefs(children[i]);
      const childrenStart = findAllChildren(children.slice(0, i), [...refs, children[i].schemaPath]);
      i = childrenStart - 1;
    } else {
      i -= 1;
    }
  }
  return i + 1;
}

/**
 * Groups children by their first level parent (assuming that error is root)
 * @param {Array<SchemaUtilErrorObject>} children children
 * @returns {Array<SchemaUtilErrorObject>} grouped children
 */
function groupChildrenByFirstChild(children) {
  const result = [];
  let i = children.length - 1;
  while (i > 0) {
    const child = children[i];
    if (child.keyword === "anyOf" || child.keyword === "oneOf") {
      const refs = extractRefs(child);
      const childrenStart = findAllChildren(children.slice(0, i), [...refs, child.schemaPath]);
      if (childrenStart !== i) {
        result.push({
          ...child,
          children: children.slice(childrenStart, i)
        });
        i = childrenStart;
      } else {
        result.push(child);
      }
    } else {
      result.push(child);
    }
    i -= 1;
  }
  if (i === 0) {
    result.push(children[i]);
  }
  return result.reverse();
}

/**
 * @param {string} str string
 * @param {string} prefix prefix
 * @returns {string} string with indent and prefix
 */
function indent(str, prefix) {
  return str.replace(/\n(?!$)/g, `\n${prefix}`);
}

/**
 * @param {Schema} schema schema
 * @returns {schema is (Schema & {not: Schema})} true when `not` in schema, otherwise false
 */
function hasNotInSchema(schema) {
  return Boolean(schema.not);
}

/**
 * @param {Schema} schema schema
 * @returns {Schema} first typed schema
 */
function findFirstTypedSchema(schema) {
  if (hasNotInSchema(schema)) {
    return findFirstTypedSchema(schema.not);
  }
  return schema;
}

/**
 * @param {Schema} schema schema
 * @returns {boolean} true when schema type is number, otherwise false
 */
function likeNumber(schema) {
  return schema.type === "number" || typeof schema.minimum !== "undefined" || typeof schema.exclusiveMinimum !== "undefined" || typeof schema.maximum !== "undefined" || typeof schema.exclusiveMaximum !== "undefined" || typeof schema.multipleOf !== "undefined";
}

/**
 * @param {Schema} schema schema
 * @returns {boolean} true when schema type is integer, otherwise false
 */
function likeInteger(schema) {
  return schema.type === "integer" || typeof schema.minimum !== "undefined" || typeof schema.exclusiveMinimum !== "undefined" || typeof schema.maximum !== "undefined" || typeof schema.exclusiveMaximum !== "undefined" || typeof schema.multipleOf !== "undefined";
}

/**
 * @param {Schema} schema schema
 * @returns {boolean} true when schema type is string, otherwise false
 */
function likeString(schema) {
  return schema.type === "string" || typeof schema.minLength !== "undefined" || typeof schema.maxLength !== "undefined" || typeof schema.pattern !== "undefined" || typeof schema.format !== "undefined" || typeof schema.formatMinimum !== "undefined" || typeof schema.formatMaximum !== "undefined";
}

/**
 * @param {Schema} schema schema
 * @returns {boolean} true when null, otherwise false
 */
function likeNull(schema) {
  return schema.type === "null";
}

/**
 * @param {Schema} schema schema
 * @returns {boolean} true when schema type is boolean, otherwise false
 */
function likeBoolean(schema) {
  return schema.type === "boolean";
}

/**
 * @param {Schema} schema schema
 * @returns {boolean} true when can apply not, otherwise false
 */
function canApplyNot(schema) {
  const typedSchema = findFirstTypedSchema(schema);
  return likeNumber(typedSchema) || likeInteger(typedSchema) || likeString(typedSchema) || likeNull(typedSchema) || likeBoolean(typedSchema);
}

// eslint-disable-next-line jsdoc/no-restricted-syntax
/**
 * @param {any} maybeObj maybe obj
 * @returns {boolean} true when value is object, otherwise false
 */
function isObject(maybeObj) {
  return typeof maybeObj === "object" && !Array.isArray(maybeObj) && maybeObj !== null;
}

/**
 * @param {Schema} schema schema
 * @returns {boolean} true when schema type is array, otherwise false
 */
function likeArray(schema) {
  return schema.type === "array" || typeof schema.minItems === "number" || typeof schema.maxItems === "number" || typeof schema.uniqueItems !== "undefined" || typeof schema.items !== "undefined" || typeof schema.additionalItems !== "undefined" || typeof schema.contains !== "undefined";
}

/**
 * @param {Schema & {patternRequired?: Array<string>}} schema schema
 * @returns {boolean} true when schema type is object, otherwise false
 */
function likeObject(schema) {
  return schema.type === "object" || typeof schema.minProperties !== "undefined" || typeof schema.maxProperties !== "undefined" || typeof schema.required !== "undefined" || typeof schema.properties !== "undefined" || typeof schema.patternProperties !== "undefined" || typeof schema.additionalProperties !== "undefined" || typeof schema.dependencies !== "undefined" || typeof schema.propertyNames !== "undefined" || typeof schema.patternRequired !== "undefined";
}

/**
 * @param {string} type type
 * @returns {string} article
 */
function getArticle(type) {
  if (/^[aeiou]/i.test(type)) {
    return "an";
  }
  return "a";
}

/**
 * @param {Schema=} schema schema
 * @returns {string} schema non types
 */
function getSchemaNonTypes(schema) {
  if (!schema) {
    return "";
  }
  if (!schema.type) {
    if (likeNumber(schema) || likeInteger(schema)) {
      return " | should be any non-number";
    }
    if (likeString(schema)) {
      return " | should be any non-string";
    }
    if (likeArray(schema)) {
      return " | should be any non-array";
    }
    if (likeObject(schema)) {
      return " | should be any non-object";
    }
  }
  return "";
}

/**
 * @param {Array<string>} hints hints
 * @returns {string} formatted hints
 */
function formatHints(hints) {
  return hints.length > 0 ? `(${hints.join(", ")})` : "";
}
const getUtilHints = (0, _memorize.default)(() => require("./util/hints"));

/**
 * @param {Schema} schema schema
 * @param {boolean} logic logic
 * @returns {string[]} array of hints
 */
function getHints(schema, logic) {
  if (likeNumber(schema) || likeInteger(schema)) {
    const util = getUtilHints();
    return util.numberHints(schema, logic);
  } else if (likeString(schema)) {
    const util = getUtilHints();
    return util.stringHints(schema, logic);
  }
  return [];
}
class ValidationError extends Error {
  /**
   * @param {Array<SchemaUtilErrorObject>} errors array of error objects
   * @param {Schema} schema schema
   * @param {ValidationErrorConfiguration} configuration configuration
   */
  constructor(errors, schema, configuration = {}) {
    super();

    /** @type {string} */
    this.name = "ValidationError";
    /** @type {Array<SchemaUtilErrorObject>} */
    this.errors = errors;
    /** @type {Schema} */
    this.schema = schema;
    let headerNameFromSchema;
    let baseDataPathFromSchema;
    if (schema.title && (!configuration.name || !configuration.baseDataPath)) {
      const splittedTitleFromSchema = schema.title.match(/^(.+) (.+)$/);
      if (splittedTitleFromSchema) {
        if (!configuration.name) {
          [, headerNameFromSchema] = splittedTitleFromSchema;
        }
        if (!configuration.baseDataPath) {
          [,, baseDataPathFromSchema] = splittedTitleFromSchema;
        }
      }
    }

    /** @type {string} */
    this.headerName = configuration.name || headerNameFromSchema || "Object";
    /** @type {string} */
    this.baseDataPath = configuration.baseDataPath || baseDataPathFromSchema || "configuration";

    /** @type {PostFormatter | null} */
    this.postFormatter = configuration.postFormatter || null;
    const header = `Invalid ${this.baseDataPath} object. ${this.headerName} has been initialized using ${getArticle(this.baseDataPath)} ${this.baseDataPath} object that does not match the API schema.\n`;

    /** @type {string} */
    this.message = `${header}${this.formatValidationErrors(errors)}`;
    Error.captureStackTrace(this, this.constructor);
  }

  /**
   * @param {string} path path
   * @returns {Schema} schema
   */
  getSchemaPart(path) {
    const newPath = path.split("/");
    let schemaPart = this.schema;
    for (let i = 1; i < newPath.length; i++) {
      const inner = schemaPart[(/** @type {keyof Schema} */newPath[i])];
      if (!inner) {
        break;
      }
      schemaPart = inner;
    }
    return schemaPart;
  }

  /**
   * @param {Schema} schema schema
   * @param {boolean} logic logic
   * @param {Array<object>} prevSchemas prev schemas
   * @returns {string} formatted schema
   */
  formatSchema(schema, logic = true, prevSchemas = []) {
    let newLogic = logic;
    const formatInnerSchema =
    /**
     * @param {Schema} innerSchema inner schema
     * @param {boolean=} addSelf true when need to add self
     * @returns {string} formatted schema
     */
    (innerSchema, addSelf) => {
      if (!addSelf) {
        return this.formatSchema(innerSchema, newLogic, prevSchemas);
      }
      if (prevSchemas.includes(innerSchema)) {
        return "(recursive)";
      }
      return this.formatSchema(innerSchema, newLogic, [...prevSchemas, schema]);
    };
    if (hasNotInSchema(schema) && !likeObject(schema)) {
      if (canApplyNot(schema.not)) {
        newLogic = !logic;
        return formatInnerSchema(schema.not);
      }
      const needApplyLogicHere = !schema.not.not;
      const prefix = logic ? "" : "non ";
      newLogic = !logic;
      return needApplyLogicHere ? prefix + formatInnerSchema(schema.not) : formatInnerSchema(schema.not);
    }
    if (/** @type {Schema & {instanceof: string | Array<string>}} */
    schema.instanceof) {
      const {
        instanceof: value
      } = /** @type {Schema & {instanceof: string | Array<string>}} */schema;
      const values = !Array.isArray(value) ? [value] : value;
      return values.map(
      /**
       * @param {string} item item
       * @returns {string} result
       */
      item => item === "Function" ? "function" : item).join(" | ");
    }
    if (schema.enum) {
      // eslint-disable-next-line jsdoc/no-restricted-syntax
      const enumValues = /** @type {Array<any>} */schema.enum.map(item => {
        if (item === null && schema.undefinedAsNull) {
          return `${JSON.stringify(item)} | undefined`;
        }
        return JSON.stringify(item);
      }).join(" | ");
      return `${enumValues}`;
    }
    if (typeof schema.const !== "undefined") {
      return JSON.stringify(schema.const);
    }
    if (schema.oneOf) {
      return /** @type {Array<Schema>} */schema.oneOf.map(item => formatInnerSchema(item, true)).join(" | ");
    }
    if (schema.anyOf) {
      return /** @type {Array<Schema>} */schema.anyOf.map(item => formatInnerSchema(item, true)).join(" | ");
    }
    if (schema.allOf) {
      return /** @type {Array<Schema>} */schema.allOf.map(item => formatInnerSchema(item, true)).join(" & ");
    }
    if (/** @type {JSONSchema7} */schema.if) {
      const {
        if: ifValue,
        then: thenValue,
        else: elseValue
      } = /** @type {JSONSchema7} */schema;
      return `${ifValue ? `if ${ifValue === true ? "true" : formatInnerSchema(ifValue)}` : ""}${thenValue ? ` then ${thenValue === true ? "true" : formatInnerSchema(thenValue)}` : ""}${elseValue ? ` else ${elseValue === true ? "true" : formatInnerSchema(elseValue)}` : ""}`;
    }
    if (schema.$ref) {
      return formatInnerSchema(this.getSchemaPart(schema.$ref), true);
    }
    if (likeNumber(schema) || likeInteger(schema)) {
      const [type, ...hints] = getHints(schema, logic);
      const str = `${type}${hints.length > 0 ? ` ${formatHints(hints)}` : ""}`;
      return logic ? str : hints.length > 0 ? `non-${type} | ${str}` : `non-${type}`;
    }
    if (likeString(schema)) {
      const [type, ...hints] = getHints(schema, logic);
      const str = `${type}${hints.length > 0 ? ` ${formatHints(hints)}` : ""}`;
      return logic ? str : str === "string" ? "non-string" : `non-string | ${str}`;
    }
    if (likeBoolean(schema)) {
      return `${logic ? "" : "non-"}boolean`;
    }
    if (likeArray(schema)) {
      // not logic already applied in formatValidationError
      newLogic = true;
      const hints = [];
      if (typeof schema.minItems === "number") {
        hints.push(`should not have fewer than ${schema.minItems} item${schema.minItems > 1 ? "s" : ""}`);
      }
      if (typeof schema.maxItems === "number") {
        hints.push(`should not have more than ${schema.maxItems} item${schema.maxItems > 1 ? "s" : ""}`);
      }
      if (schema.uniqueItems) {
        hints.push("should not have duplicate items");
      }
      const hasAdditionalItems = typeof schema.additionalItems === "undefined" || Boolean(schema.additionalItems);
      let items = "";
      if (schema.items) {
        if (Array.isArray(schema.items) && schema.items.length > 0) {
          items = `${/** @type {Array<Schema>} */schema.items.map(item => formatInnerSchema(item)).join(", ")}`;
          if (hasAdditionalItems && schema.additionalItems && isObject(schema.additionalItems) && Object.keys(schema.additionalItems).length > 0) {
            hints.push(`additional items should be ${schema.additionalItems === true ? "added" : formatInnerSchema(schema.additionalItems)}`);
          }
        } else if (schema.items && Object.keys(schema.items).length > 0 && schema.items !== true) {
          // "additionalItems" is ignored
          items = `${formatInnerSchema(schema.items)}`;
        } else {
          // Fallback for empty `items` value
          items = "any";
        }
      } else {
        // "additionalItems" is ignored
        items = "any";
      }
      if (schema.contains && Object.keys(schema.contains).length > 0) {
        hints.push(`should contains at least one ${this.formatSchema(schema.contains)} item`);
      }
      return `[${items}${hasAdditionalItems ? ", ..." : ""}]${hints.length > 0 ? ` (${hints.join(", ")})` : ""}`;
    }
    if (likeObject(schema)) {
      // not logic already applied in formatValidationError
      newLogic = true;
      const hints = [];
      if (typeof schema.minProperties === "number") {
        hints.push(`should not have fewer than ${schema.minProperties} ${schema.minProperties > 1 ? "properties" : "property"}`);
      }
      if (typeof schema.maxProperties === "number") {
        hints.push(`should not have more than ${schema.maxProperties} ${schema.minProperties && schema.minProperties > 1 ? "properties" : "property"}`);
      }
      if (schema.patternProperties && Object.keys(schema.patternProperties).length > 0) {
        const patternProperties = Object.keys(schema.patternProperties);
        hints.push(`additional property names should match pattern${patternProperties.length > 1 ? "s" : ""} ${patternProperties.map(pattern => JSON.stringify(pattern)).join(" | ")}`);
      }
      const properties = schema.properties ? Object.keys(schema.properties) : [];
      const required = /** @type {string[]} */
      schema.required ? schema.required : [];
      const allProperties = [...new Set(/** @type {Array<string>} */[...required, ...properties])];
      const objectStructure = [...allProperties.map(property => {
        const isRequired = required.includes(property);

        // Some properties need quotes, maybe we should add check
        // Maybe we should output type of property (`foo: string`), but it is looks very unreadable
        return `${property}${isRequired ? "" : "?"}`;
      }), ...(typeof schema.additionalProperties === "undefined" || Boolean(schema.additionalProperties) ? schema.additionalProperties && isObject(schema.additionalProperties) && schema.additionalProperties !== true ? [`<key>: ${formatInnerSchema(schema.additionalProperties)}`] : ["…"] : [])].join(", ");
      const {
        dependencies,
        propertyNames,
        patternRequired
      } = /** @type {Schema & {patternRequired?: Array<string>;}} */schema;
      if (dependencies) {
        for (const dependencyName of Object.keys(dependencies)) {
          const dependency = dependencies[dependencyName];
          if (Array.isArray(dependency)) {
            hints.push(`should have ${dependency.length > 1 ? "properties" : "property"} ${dependency.map(dep => `'${dep}'`).join(", ")} when property '${dependencyName}' is present`);
          } else {
            hints.push(`should be valid according to the schema ${typeof dependency === "boolean" ? `${dependency}` : formatInnerSchema(dependency)} when property '${dependencyName}' is present`);
          }
        }
      }
      if (propertyNames && Object.keys(propertyNames).length > 0) {
        hints.push(`each property name should match format ${JSON.stringify(schema.propertyNames.format)}`);
      }
      if (patternRequired && patternRequired.length > 0) {
        hints.push(`should have property matching pattern ${patternRequired.map(
        /**
         * @param {string} item item
         * @returns {string} stringified item
         */
        item => JSON.stringify(item))}`);
      }
      return `object {${objectStructure ? ` ${objectStructure} ` : ""}}${hints.length > 0 ? ` (${hints.join(", ")})` : ""}`;
    }
    if (likeNull(schema)) {
      return `${logic ? "" : "non-"}null`;
    }
    if (Array.isArray(schema.type)) {
      // not logic already applied in formatValidationError
      return `${schema.type.join(" | ")}`;
    }

    // Fallback for unknown keywords
    // not logic already applied in formatValidationError
    /* istanbul ignore next */
    return JSON.stringify(schema, null, 2);
  }

  /**
   * @param {Schema=} schemaPart schema part
   * @param {(boolean | Array<string>)=} additionalPath additional path
   * @param {boolean=} needDot true when need dot
   * @param {boolean=} logic logic
   * @returns {string} schema part text
   */
  getSchemaPartText(schemaPart, additionalPath, needDot = false, logic = true) {
    if (!schemaPart) {
      return "";
    }
    if (Array.isArray(additionalPath)) {
      for (let i = 0; i < additionalPath.length; i++) {
        /** @type {Schema | undefined} */
        const inner = schemaPart[(/** @type {keyof Schema} */additionalPath[i])];
        if (inner) {
          schemaPart = inner;
        } else {
          break;
        }
      }
    }
    while (schemaPart.$ref) {
      schemaPart = this.getSchemaPart(schemaPart.$ref);
    }
    let schemaText = `${this.formatSchema(schemaPart, logic)}${needDot ? "." : ""}`;
    if (schemaPart.description) {
      schemaText += `\n-> ${schemaPart.description}`;
    }
    if (schemaPart.link) {
      schemaText += `\n-> Read more at ${schemaPart.link}`;
    }
    return schemaText;
  }

  /**
   * @param {Schema=} schemaPart schema part
   * @returns {string} schema part description
   */
  getSchemaPartDescription(schemaPart) {
    if (!schemaPart) {
      return "";
    }
    while (schemaPart.$ref) {
      schemaPart = this.getSchemaPart(schemaPart.$ref);
    }
    let schemaText = "";
    if (schemaPart.description) {
      schemaText += `\n-> ${schemaPart.description}`;
    }
    if (schemaPart.link) {
      schemaText += `\n-> Read more at ${schemaPart.link}`;
    }
    return schemaText;
  }

  /**
   * @param {SchemaUtilErrorObject} error error object
   * @returns {string} formatted error object
   */
  formatValidationError(error) {
    const {
      keyword,
      instancePath: errorInstancePath
    } = error;
    const splittedInstancePath = errorInstancePath.split("/");
    /**
     * @type {Array<string>}
     */
    const defaultValue = [];
    const prettyInstancePath = splittedInstancePath.reduce((acc, val) => {
      if (val.length > 0) {
        if (isNumeric(val)) {
          acc.push(`[${val}]`);
        } else if (/^\[/.test(val)) {
          acc.push(val);
        } else {
          acc.push(`.${val}`);
        }
      }
      return acc;
    }, defaultValue).join("");
    const instancePath = `${this.baseDataPath}${prettyInstancePath}`;

    // const { keyword, instancePath: errorInstancePath } = error;
    // const instancePath = `${this.baseDataPath}${errorInstancePath.replace(/\//g, '.')}`;

    switch (keyword) {
      case "type":
        {
          const {
            parentSchema,
            params
          } = error;
          switch (params.type) {
            case "number":
              return `${instancePath} should be a ${this.getSchemaPartText(parentSchema, false, true)}`;
            case "integer":
              return `${instancePath} should be an ${this.getSchemaPartText(parentSchema, false, true)}`;
            case "string":
              return `${instancePath} should be a ${this.getSchemaPartText(parentSchema, false, true)}`;
            case "boolean":
              return `${instancePath} should be a ${this.getSchemaPartText(parentSchema, false, true)}`;
            case "array":
              return `${instancePath} should be an array:\n${this.getSchemaPartText(parentSchema)}`;
            case "object":
              return `${instancePath} should be an object:\n${this.getSchemaPartText(parentSchema)}`;
            case "null":
              return `${instancePath} should be a ${this.getSchemaPartText(parentSchema, false, true)}`;
            default:
              return `${instancePath} should be:\n${this.getSchemaPartText(parentSchema)}`;
          }
        }
      case "instanceof":
        {
          const {
            parentSchema
          } = error;
          return `${instancePath} should be an instance of ${this.getSchemaPartText(parentSchema, false, true)}`;
        }
      case "pattern":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            pattern
          } = params;
          return `${instancePath} should match pattern ${JSON.stringify(pattern)}${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "format":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            format
          } = params;
          return `${instancePath} should match format ${JSON.stringify(format)}${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "formatMinimum":
      case "formatExclusiveMinimum":
      case "formatMaximum":
      case "formatExclusiveMaximum":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            comparison,
            limit
          } = params;
          return `${instancePath} should be ${comparison} ${JSON.stringify(limit)}${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "minimum":
      case "maximum":
      case "exclusiveMinimum":
      case "exclusiveMaximum":
        {
          const {
            parentSchema,
            params
          } = error;
          const {
            comparison,
            limit
          } = params;
          const [, ...hints] = getHints(/** @type {Schema} */parentSchema, true);
          if (hints.length === 0) {
            hints.push(`should be ${comparison} ${limit}`);
          }
          return `${instancePath} ${hints.join(" ")}${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "multipleOf":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            multipleOf
          } = params;
          return `${instancePath} should be multiple of ${multipleOf}${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "patternRequired":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            missingPattern
          } = params;
          return `${instancePath} should have property matching pattern ${JSON.stringify(missingPattern)}${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "minLength":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            limit
          } = params;
          if (limit === 1) {
            return `${instancePath} should be a non-empty string${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
          }
          const length = limit - 1;
          return `${instancePath} should be longer than ${length} character${length > 1 ? "s" : ""}${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "minItems":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            limit
          } = params;
          if (limit === 1) {
            return `${instancePath} should be a non-empty array${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
          }
          return `${instancePath} should not have fewer than ${limit} items${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "minProperties":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            limit
          } = params;
          if (limit === 1) {
            return `${instancePath} should be a non-empty object${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
          }
          return `${instancePath} should not have fewer than ${limit} properties${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "maxLength":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            limit
          } = params;
          const max = limit + 1;
          return `${instancePath} should be shorter than ${max} character${max > 1 ? "s" : ""}${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "maxItems":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            limit
          } = params;
          return `${instancePath} should not have more than ${limit} items${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "maxProperties":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            limit
          } = params;
          return `${instancePath} should not have more than ${limit} properties${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "uniqueItems":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            i
          } = params;
          return `${instancePath} should not contain the item '${
          // eslint-disable-next-line jsdoc/no-restricted-syntax
          /** @type {{ data: Array<any> }} * */
          error.data[i]}' twice${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "additionalItems":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            limit
          } = params;
          return `${instancePath} should not have more than ${limit} items${getSchemaNonTypes(parentSchema)}. These items are valid:\n${this.getSchemaPartText(parentSchema)}`;
        }
      case "contains":
        {
          const {
            parentSchema
          } = error;
          return `${instancePath} should contains at least one ${this.getSchemaPartText(parentSchema, ["contains"])} item${getSchemaNonTypes(parentSchema)}.`;
        }
      case "required":
        {
          const {
            parentSchema,
            params
          } = error;
          const missingProperty = params.missingProperty.replace(/^\./, "");
          const hasProperty = parentSchema && Boolean(/** @type {Schema} */
          parentSchema.properties && /** @type {Schema} */
          parentSchema.properties[missingProperty]);
          return `${instancePath} misses the property '${missingProperty}'${getSchemaNonTypes(parentSchema)}.${hasProperty ? ` Should be:\n${this.getSchemaPartText(parentSchema, ["properties", missingProperty])}` : this.getSchemaPartDescription(parentSchema)}`;
        }
      case "additionalProperties":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            additionalProperty
          } = params;
          return `${instancePath} has an unknown property '${additionalProperty}'${getSchemaNonTypes(parentSchema)}. These properties are valid:\n${this.getSchemaPartText(parentSchema)}`;
        }
      case "dependencies":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            property,
            deps
          } = params;
          const dependencies = deps.split(",").map(
          /**
           * @param {string} dep dependency
           * @returns {string} normalized dependency
           */
          dep => `'${dep.trim()}'`).join(", ");
          return `${instancePath} should have properties ${dependencies} when property '${property}' is present${getSchemaNonTypes(parentSchema)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "propertyNames":
        {
          const {
            params,
            parentSchema,
            schema
          } = error;
          const {
            propertyName
          } = params;
          return `${instancePath} property name '${propertyName}' is invalid${getSchemaNonTypes(parentSchema)}. Property names should be match format ${JSON.stringify(schema.format)}.${this.getSchemaPartDescription(parentSchema)}`;
        }
      case "enum":
        {
          const {
            parentSchema
          } = error;
          if (parentSchema && /** @type {Schema} */
          parentSchema.enum && /** @type {Schema} */
          parentSchema.enum.length === 1) {
            return `${instancePath} should be ${this.getSchemaPartText(parentSchema, false, true)}`;
          }
          return `${instancePath} should be one of these:\n${this.getSchemaPartText(parentSchema)}`;
        }
      case "const":
        {
          const {
            parentSchema
          } = error;
          return `${instancePath} should be equal to constant ${this.getSchemaPartText(parentSchema, false, true)}`;
        }
      case "not":
        {
          const postfix = likeObject(/** @type {Schema} */error.parentSchema) ? `\n${this.getSchemaPartText(error.parentSchema)}` : "";
          const schemaOutput = this.getSchemaPartText(error.schema, false, false, false);
          if (canApplyNot(error.schema)) {
            return `${instancePath} should be any ${schemaOutput}${postfix}.`;
          }
          const {
            schema,
            parentSchema
          } = error;
          return `${instancePath} should not be ${this.getSchemaPartText(schema, false, true)}${parentSchema && likeObject(parentSchema) ? `\n${this.getSchemaPartText(parentSchema)}` : ""}`;
        }
      case "oneOf":
      case "anyOf":
        {
          const {
            parentSchema,
            children
          } = error;
          if (children && children.length > 0) {
            if (error.schema.length === 1) {
              const lastChild = children[children.length - 1];
              const remainingChildren = children.slice(0, -1);
              return this.formatValidationError({
                ...lastChild,
                children: remainingChildren,
                parentSchema: {
                  ...parentSchema,
                  ...lastChild.parentSchema
                }
              });
            }
            let filteredChildren = filterChildren(children);
            if (filteredChildren.length === 1) {
              return this.formatValidationError(filteredChildren[0]);
            }
            filteredChildren = groupChildrenByFirstChild(filteredChildren);
            return `${instancePath} should be one of these:\n${this.getSchemaPartText(parentSchema)}\nDetails:\n${filteredChildren.map(
            /**
             * @param {SchemaUtilErrorObject} nestedError nested error
             * @returns {string} formatted errors
             */
            nestedError => ` * ${indent(this.formatValidationError(nestedError), "   ")}`).join("\n")}`;
          }
          return `${instancePath} should be one of these:\n${this.getSchemaPartText(parentSchema)}`;
        }
      case "if":
        {
          const {
            params,
            parentSchema
          } = error;
          const {
            failingKeyword
          } = params;
          return `${instancePath} should match "${failingKeyword}" schema:\n${this.getSchemaPartText(parentSchema, [failingKeyword])}`;
        }
      case "absolutePath":
        {
          const {
            message,
            parentSchema
          } = error;
          return `${instancePath}: ${message}${this.getSchemaPartDescription(parentSchema)}`;
        }
      /* istanbul ignore next */
      default:
        {
          const {
            message,
            parentSchema
          } = error;
          const ErrorInJSON = JSON.stringify(error, null, 2);

          // For `custom`, `false schema`, `$ref` keywords
          // Fallback for unknown keywords
          return `${instancePath} ${message} (${ErrorInJSON}).\n${this.getSchemaPartText(parentSchema, false)}`;
        }
    }
  }

  /**
   * @param {Array<SchemaUtilErrorObject>} errors errors
   * @returns {string} formatted errors
   */
  formatValidationErrors(errors) {
    return errors.map(error => {
      let formattedError = this.formatValidationError(error);
      if (this.postFormatter) {
        formattedError = this.postFormatter(formattedError, error);
      }
      return ` - ${indent(formattedError, "   ")}`;
    }).join("\n");
  }
}
var _default = exports.default = ValidationError;