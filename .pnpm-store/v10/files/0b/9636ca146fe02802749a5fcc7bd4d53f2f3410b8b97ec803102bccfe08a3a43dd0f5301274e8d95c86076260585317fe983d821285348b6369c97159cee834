"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allExpandedTypes = exports.VISITOR_KEYS = exports.NODE_UNION_SHAPES__PRIVATE = exports.NODE_PARENT_VALIDATIONS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.ALIAS_KEYS = void 0;
exports.arrayOf = arrayOf;
exports.arrayOfType = arrayOfType;
exports.assertEach = assertEach;
exports.assertNodeOrValueType = assertNodeOrValueType;
exports.assertNodeType = assertNodeType;
exports.assertOneOf = assertOneOf;
exports.assertOptionalChainStart = assertOptionalChainStart;
exports.assertShape = assertShape;
exports.assertValueType = assertValueType;
exports.chain = chain;
exports.default = defineType;
exports.defineAliasedType = defineAliasedType;
exports.validate = validate;
exports.validateArrayOfType = validateArrayOfType;
exports.validateOptional = validateOptional;
exports.validateOptionalType = validateOptionalType;
exports.validateType = validateType;
var _is = require("../validators/is.js");
var _validate = require("../validators/validate.js");
const VISITOR_KEYS = exports.VISITOR_KEYS = {};
const ALIAS_KEYS = exports.ALIAS_KEYS = {};
const FLIPPED_ALIAS_KEYS = exports.FLIPPED_ALIAS_KEYS = {};
const NODE_FIELDS = exports.NODE_FIELDS = {};
const BUILDER_KEYS = exports.BUILDER_KEYS = {};
const DEPRECATED_KEYS = exports.DEPRECATED_KEYS = {};
const NODE_PARENT_VALIDATIONS = exports.NODE_PARENT_VALIDATIONS = {};
const NODE_UNION_SHAPES__PRIVATE = exports.NODE_UNION_SHAPES__PRIVATE = {};
function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else {
    return typeof val;
  }
}
function validate(validate) {
  return {
    validate
  };
}
function validateType(...typeNames) {
  return validate(assertNodeType(...typeNames));
}
function validateOptional(validate) {
  return {
    validate,
    optional: true
  };
}
function validateOptionalType(...typeNames) {
  return {
    validate: assertNodeType(...typeNames),
    optional: true
  };
}
function arrayOf(elementType) {
  return chain(assertValueType("array"), assertEach(elementType));
}
function arrayOfType(...typeNames) {
  return arrayOf(assertNodeType(...typeNames));
}
function validateArrayOfType(...typeNames) {
  return validate(arrayOfType(...typeNames));
}
function assertEach(callback) {
  const childValidator = process.env.BABEL_TYPES_8_BREAKING ? _validate.validateChild : () => {};
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;
    let i = 0;
    const subKey = {
      toString() {
        return `${key}[${i}]`;
      }
    };
    for (; i < val.length; i++) {
      const v = val[i];
      callback(node, subKey, v);
      childValidator(node, subKey, v);
    }
  }
  validator.each = callback;
  return validator;
}
function assertOneOf(...values) {
  function validate(node, key, val) {
    if (!values.includes(val)) {
      throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
    }
  }
  validate.oneOf = values;
  return validate;
}
const allExpandedTypes = exports.allExpandedTypes = [];
function assertNodeType(...types) {
  const expandedTypes = new Set();
  allExpandedTypes.push({
    types,
    set: expandedTypes
  });
  function validate(node, key, val) {
    const valType = val == null ? void 0 : val.type;
    if (valType != null) {
      if (expandedTypes.has(valType)) {
        (0, _validate.validateChild)(node, key, val);
        return;
      }
      if (valType === "Placeholder") {
        for (const type of types) {
          if ((0, _is.default)(type, val)) {
            (0, _validate.validateChild)(node, key, val);
            return;
          }
        }
      }
    }
    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(valType)}`);
  }
  validate.oneOfNodeTypes = types;
  return validate;
}
function assertNodeOrValueType(...types) {
  function validate(node, key, val) {
    const primitiveType = getType(val);
    for (const type of types) {
      if (primitiveType === type || (0, _is.default)(type, val)) {
        (0, _validate.validateChild)(node, key, val);
        return;
      }
    }
    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
  }
  validate.oneOfNodeOrValueTypes = types;
  return validate;
}
function assertValueType(type) {
  function validate(node, key, val) {
    if (getType(val) === type) {
      return;
    }
    throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
  }
  validate.type = type;
  return validate;
}
function assertShape(shape) {
  const keys = Object.keys(shape);
  function validate(node, key, val) {
    const errors = [];
    for (const property of keys) {
      try {
        (0, _validate.validateField)(node, property, val[property], shape[property]);
      } catch (error) {
        if (error instanceof TypeError) {
          errors.push(error.message);
          continue;
        }
        throw error;
      }
    }
    if (errors.length) {
      throw new TypeError(`Property ${key} of ${node.type} expected to have the following:\n${errors.join("\n")}`);
    }
  }
  validate.shapeOf = shape;
  return validate;
}
function assertOptionalChainStart() {
  function validate(node) {
    var _current;
    let current = node;
    while (node) {
      const {
        type
      } = current;
      if (type === "OptionalCallExpression") {
        if (current.optional) return;
        current = current.callee;
        continue;
      }
      if (type === "OptionalMemberExpression") {
        if (current.optional) return;
        current = current.object;
        continue;
      }
      break;
    }
    throw new TypeError(`Non-optional ${node.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(_current = current) == null ? void 0 : _current.type}`);
  }
  return validate;
}
function chain(...fns) {
  function validate(...args) {
    for (const fn of fns) {
      fn(...args);
    }
  }
  validate.chainOf = fns;
  if (fns.length >= 2 && "type" in fns[0] && fns[0].type === "array" && !("each" in fns[1])) {
    throw new Error(`An assertValueType("array") validator can only be followed by an assertEach(...) validator.`);
  }
  return validate;
}
const validTypeOpts = new Set(["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate", "unionShape"]);
const validFieldKeys = new Set(["default", "optional", "deprecated", "validate"]);
const store = {};
function defineAliasedType(...aliases) {
  return (type, opts = {}) => {
    let defined = opts.aliases;
    if (!defined) {
      var _store$opts$inherits$;
      if (opts.inherits) defined = (_store$opts$inherits$ = store[opts.inherits].aliases) == null ? void 0 : _store$opts$inherits$.slice();
      defined != null ? defined : defined = [];
      opts.aliases = defined;
    }
    const additional = aliases.filter(a => !defined.includes(a));
    defined.unshift(...additional);
    defineType(type, opts);
  };
}
function defineType(type, opts = {}) {
  const inherits = opts.inherits && store[opts.inherits] || {};
  let fields = opts.fields;
  if (!fields) {
    fields = {};
    if (inherits.fields) {
      const keys = Object.getOwnPropertyNames(inherits.fields);
      for (const key of keys) {
        const field = inherits.fields[key];
        const def = field.default;
        if (Array.isArray(def) ? def.length > 0 : def && typeof def === "object") {
          throw new Error("field defaults can only be primitives or empty arrays currently");
        }
        fields[key] = {
          default: Array.isArray(def) ? [] : def,
          optional: field.optional,
          deprecated: field.deprecated,
          validate: field.validate
        };
      }
    }
  }
  const visitor = opts.visitor || inherits.visitor || [];
  const aliases = opts.aliases || inherits.aliases || [];
  const builder = opts.builder || inherits.builder || opts.visitor || [];
  for (const k of Object.keys(opts)) {
    if (!validTypeOpts.has(k)) {
      throw new Error(`Unknown type option "${k}" on ${type}`);
    }
  }
  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }
  for (const key of visitor.concat(builder)) {
    fields[key] = fields[key] || {};
  }
  for (const key of Object.keys(fields)) {
    const field = fields[key];
    if (field.default !== undefined && !builder.includes(key)) {
      field.optional = true;
    }
    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate && field.default != null) {
      field.validate = assertValueType(getType(field.default));
    }
    for (const k of Object.keys(field)) {
      if (!validFieldKeys.has(k)) {
        throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
      }
    }
  }
  VISITOR_KEYS[type] = opts.visitor = visitor;
  BUILDER_KEYS[type] = opts.builder = builder;
  NODE_FIELDS[type] = opts.fields = fields;
  ALIAS_KEYS[type] = opts.aliases = aliases;
  aliases.forEach(alias => {
    FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
    FLIPPED_ALIAS_KEYS[alias].push(type);
  });
  if (opts.validate) {
    NODE_PARENT_VALIDATIONS[type] = opts.validate;
  }
  if (opts.unionShape) {
    NODE_UNION_SHAPES__PRIVATE[type] = opts.unionShape;
  }
  store[type] = opts;
}

//# sourceMappingURL=utils.js.map
