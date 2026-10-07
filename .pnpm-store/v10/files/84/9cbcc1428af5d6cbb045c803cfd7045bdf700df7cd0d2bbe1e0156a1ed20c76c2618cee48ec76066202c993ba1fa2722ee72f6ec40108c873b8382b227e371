"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWith = exports.zip = exports.withDescription = exports.withDefault = exports.validate = exports.url = exports.unwrap = exports.sync = exports.suspend = exports.succeed = exports.string = exports.secret = exports.repeat = exports.redacted = exports.primitive = exports.port = exports.orElseIf = exports.orElse = exports.option = exports.number = exports.nonEmptyString = exports.nested = exports.mapOrFail = exports.mapAttempt = exports.map = exports.logLevel = exports.literal = exports.isConfig = exports.integer = exports.hashSet = exports.hashMap = exports.fail = exports.duration = exports.date = exports.chunk = exports.branded = exports.boolean = exports.array = exports.all = exports.ConfigTypeId = void 0;
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var ConfigError = _interopRequireWildcard(require("../ConfigError.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var Either = _interopRequireWildcard(require("../Either.js"));
var _Function = require("../Function.js");
var HashSet = _interopRequireWildcard(require("../HashSet.js"));
var _Inspectable = require("../Inspectable.js");
var Option = _interopRequireWildcard(require("../Option.js"));
var _Predicate = require("../Predicate.js");
var configError = _interopRequireWildcard(require("./configError.js"));
var core = _interopRequireWildcard(require("./core.js"));
var defaultServices = _interopRequireWildcard(require("./defaultServices.js"));
var effectable = _interopRequireWildcard(require("./effectable.js"));
var OpCodes = _interopRequireWildcard(require("./opCodes/config.js"));
var redacted_ = _interopRequireWildcard(require("./redacted.js"));
var InternalSecret = _interopRequireWildcard(require("./secret.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const ConfigSymbolKey = "effect/Config";
/** @internal */
const ConfigTypeId = exports.ConfigTypeId = /*#__PURE__*/Symbol.for(ConfigSymbolKey);
const configVariance = {
  /* c8 ignore next */
  _A: _ => _
};
const proto = {
  ...effectable.CommitPrototype,
  [ConfigTypeId]: configVariance,
  commit() {
    return defaultServices.config(this);
  }
};
/** @internal */
const boolean = name => {
  const config = primitive("a boolean property", text => {
    switch (text) {
      case "true":
      case "yes":
      case "on":
      case "1":
        {
          return Either.right(true);
        }
      case "false":
      case "no":
      case "off":
      case "0":
        {
          return Either.right(false);
        }
      default:
        {
          const error = configError.InvalidData([], `Expected a boolean value but received ${(0, _Inspectable.formatUnknown)(text)}`);
          return Either.left(error);
        }
    }
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.boolean = boolean;
const url = name => {
  const config = primitive("an URL property", text => Either.try({
    try: () => new URL(text),
    catch: _ => configError.InvalidData([], `Expected an URL value but received ${(0, _Inspectable.formatUnknown)(text)}`)
  }));
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.url = url;
const port = name => {
  const config = primitive("a network port property", text => {
    const result = Number(text);
    if (Number.isNaN(result) || result.toString() !== text.toString() || !Number.isInteger(result) || result < 1 || result > 65535) {
      return Either.left(configError.InvalidData([], `Expected a network port value but received ${(0, _Inspectable.formatUnknown)(text)}`));
    }
    return Either.right(result);
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.port = port;
const array = (config, name) => {
  return (0, _Function.pipe)(chunk(config, name), map(Chunk.toArray));
};
/** @internal */
exports.array = array;
const chunk = (config, name) => {
  return map(name === undefined ? repeat(config) : nested(repeat(config), name), Chunk.unsafeFromArray);
};
/** @internal */
exports.chunk = chunk;
const date = name => {
  const config = primitive("a date property", text => {
    const result = Date.parse(text);
    if (Number.isNaN(result)) {
      return Either.left(configError.InvalidData([], `Expected a Date value but received ${(0, _Inspectable.formatUnknown)(text)}`));
    }
    return Either.right(new Date(result));
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.date = date;
const fail = message => {
  const fail = Object.create(proto);
  fail._tag = OpCodes.OP_FAIL;
  fail.message = message;
  fail.parse = () => Either.left(configError.Unsupported([], message));
  return fail;
};
/** @internal */
exports.fail = fail;
const number = name => {
  const config = primitive("a number property", text => {
    const result = Number(text);
    if (Number.isNaN(result)) {
      return Either.left(configError.InvalidData([], `Expected a number value but received ${(0, _Inspectable.formatUnknown)(text)}`));
    }
    return Either.right(result);
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.number = number;
const integer = name => {
  const config = primitive("an integer property", text => {
    const result = Number(text);
    if (!Number.isInteger(result)) {
      return Either.left(configError.InvalidData([], `Expected an integer value but received ${(0, _Inspectable.formatUnknown)(text)}`));
    }
    return Either.right(result);
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.integer = integer;
const literal = (...literals) => name => {
  const valuesString = literals.map(String).join(", ");
  const config = primitive(`one of (${valuesString})`, text => {
    const found = literals.find(value => String(value) === text);
    if (found === undefined) {
      return Either.left(configError.InvalidData([], `Expected one of (${valuesString}) but received ${(0, _Inspectable.formatUnknown)(text)}`));
    }
    return Either.right(found);
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.literal = literal;
const logLevel = name => {
  const config = mapOrFail(string(), value => {
    const label = value.toUpperCase();
    const level = core.allLogLevels.find(level => level.label === label);
    return level === undefined ? Either.left(configError.InvalidData([], `Expected a log level but received ${(0, _Inspectable.formatUnknown)(value)}`)) : Either.right(level);
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.logLevel = logLevel;
const duration = name => {
  const config = mapOrFail(string(), value => {
    const duration = Duration.decodeUnknown(value);
    return Either.fromOption(duration, () => configError.InvalidData([], `Expected a duration but received ${(0, _Inspectable.formatUnknown)(value)}`));
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.duration = duration;
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => mapOrFail(self, a => Either.right(f(a))));
/** @internal */
const mapAttempt = exports.mapAttempt = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => mapOrFail(self, a => {
  try {
    return Either.right(f(a));
  } catch (error) {
    return Either.left(configError.InvalidData([], error instanceof Error ? error.message : `${error}`));
  }
}));
/** @internal */
const mapOrFail = exports.mapOrFail = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const mapOrFail = Object.create(proto);
  mapOrFail._tag = OpCodes.OP_MAP_OR_FAIL;
  mapOrFail.original = self;
  mapOrFail.mapOrFail = f;
  return mapOrFail;
});
/** @internal */
const nested = exports.nested = /*#__PURE__*/(0, _Function.dual)(2, (self, name) => {
  const nested = Object.create(proto);
  nested._tag = OpCodes.OP_NESTED;
  nested.name = name;
  nested.config = self;
  return nested;
});
/** @internal */
const orElse = exports.orElse = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  const fallback = Object.create(proto);
  fallback._tag = OpCodes.OP_FALLBACK;
  fallback.first = self;
  fallback.second = suspend(that);
  fallback.condition = _Function.constTrue;
  return fallback;
});
/** @internal */
const orElseIf = exports.orElseIf = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  const fallback = Object.create(proto);
  fallback._tag = OpCodes.OP_FALLBACK;
  fallback.first = self;
  fallback.second = suspend(options.orElse);
  fallback.condition = options.if;
  return fallback;
});
/** @internal */
const option = self => {
  return (0, _Function.pipe)(self, map(Option.some), orElseIf({
    orElse: () => succeed(Option.none()),
    if: ConfigError.isMissingDataOnly
  }));
};
/** @internal */
exports.option = option;
const primitive = (description, parse) => {
  const primitive = Object.create(proto);
  primitive._tag = OpCodes.OP_PRIMITIVE;
  primitive.description = description;
  primitive.parse = parse;
  return primitive;
};
/** @internal */
exports.primitive = primitive;
const repeat = self => {
  const repeat = Object.create(proto);
  repeat._tag = OpCodes.OP_SEQUENCE;
  repeat.config = self;
  return repeat;
};
/** @internal */
exports.repeat = repeat;
const secret = name => {
  const config = primitive("a secret property", text => Either.right(InternalSecret.fromString(text)));
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.secret = secret;
const redacted = nameOrConfig => {
  const config = isConfig(nameOrConfig) ? nameOrConfig : string(nameOrConfig);
  return map(config, redacted_.make);
};
/** @internal */
exports.redacted = redacted;
const branded = exports.branded = /*#__PURE__*/(0, _Function.dual)(2, (nameOrConfig, constructor) => {
  const config = isConfig(nameOrConfig) ? nameOrConfig : string(nameOrConfig);
  return mapOrFail(config, a => constructor.either(a).pipe(Either.mapLeft(brandErrors => configError.InvalidData([], brandErrors.map(brandError => brandError.message).join("\n")))));
});
/** @internal */
const hashSet = (config, name) => {
  const newConfig = map(chunk(config), HashSet.fromIterable);
  return name === undefined ? newConfig : nested(newConfig, name);
};
/** @internal */
exports.hashSet = hashSet;
const string = name => {
  const config = primitive("a text property", Either.right);
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.string = string;
const nonEmptyString = name => {
  const config = primitive("a non-empty text property", Either.liftPredicate(text => text.length > 0, () => configError.MissingData([], "Expected a non-empty string")));
  return name === undefined ? config : nested(config, name);
};
/** @internal */
exports.nonEmptyString = nonEmptyString;
const all = arg => {
  if (Array.isArray(arg)) {
    return tuple(arg);
  } else if (Symbol.iterator in arg) {
    return tuple([...arg]);
  }
  return struct(arg);
};
exports.all = all;
const struct = r => {
  const entries = Object.entries(r);
  let result = (0, _Function.pipe)(entries[0][1], map(value => ({
    [entries[0][0]]: value
  })));
  if (entries.length === 1) {
    return result;
  }
  const rest = entries.slice(1);
  for (const [key, config] of rest) {
    result = (0, _Function.pipe)(result, zipWith(config, (record, value) => ({
      ...record,
      [key]: value
    })));
  }
  return result;
};
/** @internal */
const succeed = value => {
  const constant = Object.create(proto);
  constant._tag = OpCodes.OP_CONSTANT;
  constant.value = value;
  constant.parse = () => Either.right(value);
  return constant;
};
/** @internal */
exports.succeed = succeed;
const suspend = config => {
  const lazy = Object.create(proto);
  lazy._tag = OpCodes.OP_LAZY;
  lazy.config = config;
  return lazy;
};
/** @internal */
exports.suspend = suspend;
const sync = value => {
  return suspend(() => succeed(value()));
};
/** @internal */
exports.sync = sync;
const hashMap = (config, name) => {
  const table = Object.create(proto);
  table._tag = OpCodes.OP_HASHMAP;
  table.valueConfig = config;
  return name === undefined ? table : nested(table, name);
};
/** @internal */
exports.hashMap = hashMap;
const isConfig = u => (0, _Predicate.hasProperty)(u, ConfigTypeId);
/** @internal */
exports.isConfig = isConfig;
const tuple = tuple => {
  if (tuple.length === 0) {
    return succeed([]);
  }
  if (tuple.length === 1) {
    return map(tuple[0], x => [x]);
  }
  let result = map(tuple[0], x => [x]);
  for (let i = 1; i < tuple.length; i++) {
    const config = tuple[i];
    result = (0, _Function.pipe)(result, zipWith(config, (tuple, value) => [...tuple, value]));
  }
  return result;
};
/**
 * @internal
 */
const unwrap = wrapped => {
  if (isConfig(wrapped)) {
    return wrapped;
  }
  return struct(Object.fromEntries(Object.entries(wrapped).map(([k, a]) => [k, unwrap(a)])));
};
/** @internal */
exports.unwrap = unwrap;
const validate = exports.validate = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  message,
  validation
}) => mapOrFail(self, a => {
  if (validation(a)) {
    return Either.right(a);
  }
  return Either.left(configError.InvalidData([], message));
}));
/** @internal */
const withDefault = exports.withDefault = /*#__PURE__*/(0, _Function.dual)(2, (self, def) => orElseIf(self, {
  orElse: () => succeed(def),
  if: ConfigError.isMissingDataOnly
}));
/** @internal */
const withDescription = exports.withDescription = /*#__PURE__*/(0, _Function.dual)(2, (self, description) => {
  const described = Object.create(proto);
  described._tag = OpCodes.OP_DESCRIBED;
  described.config = self;
  described.description = description;
  return described;
});
/** @internal */
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => zipWith(self, that, (a, b) => [a, b]));
/** @internal */
const zipWith = exports.zipWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => {
  const zipWith = Object.create(proto);
  zipWith._tag = OpCodes.OP_ZIP_WITH;
  zipWith.left = self;
  zipWith.right = that;
  zipWith.zip = f;
  return zipWith;
});
//# sourceMappingURL=config.js.map