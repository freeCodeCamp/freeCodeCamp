import * as Chunk from "../Chunk.js";
import * as ConfigError from "../ConfigError.js";
import * as Duration from "../Duration.js";
import * as Either from "../Either.js";
import { constTrue, dual, pipe } from "../Function.js";
import * as HashSet from "../HashSet.js";
import { formatUnknown } from "../Inspectable.js";
import * as Option from "../Option.js";
import { hasProperty } from "../Predicate.js";
import * as configError from "./configError.js";
import * as core from "./core.js";
import * as defaultServices from "./defaultServices.js";
import * as effectable from "./effectable.js";
import * as OpCodes from "./opCodes/config.js";
import * as redacted_ from "./redacted.js";
import * as InternalSecret from "./secret.js";
const ConfigSymbolKey = "effect/Config";
/** @internal */
export const ConfigTypeId = /*#__PURE__*/Symbol.for(ConfigSymbolKey);
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
export const boolean = name => {
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
          const error = configError.InvalidData([], `Expected a boolean value but received ${formatUnknown(text)}`);
          return Either.left(error);
        }
    }
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const url = name => {
  const config = primitive("an URL property", text => Either.try({
    try: () => new URL(text),
    catch: _ => configError.InvalidData([], `Expected an URL value but received ${formatUnknown(text)}`)
  }));
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const port = name => {
  const config = primitive("a network port property", text => {
    const result = Number(text);
    if (Number.isNaN(result) || result.toString() !== text.toString() || !Number.isInteger(result) || result < 1 || result > 65535) {
      return Either.left(configError.InvalidData([], `Expected a network port value but received ${formatUnknown(text)}`));
    }
    return Either.right(result);
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const array = (config, name) => {
  return pipe(chunk(config, name), map(Chunk.toArray));
};
/** @internal */
export const chunk = (config, name) => {
  return map(name === undefined ? repeat(config) : nested(repeat(config), name), Chunk.unsafeFromArray);
};
/** @internal */
export const date = name => {
  const config = primitive("a date property", text => {
    const result = Date.parse(text);
    if (Number.isNaN(result)) {
      return Either.left(configError.InvalidData([], `Expected a Date value but received ${formatUnknown(text)}`));
    }
    return Either.right(new Date(result));
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const fail = message => {
  const fail = Object.create(proto);
  fail._tag = OpCodes.OP_FAIL;
  fail.message = message;
  fail.parse = () => Either.left(configError.Unsupported([], message));
  return fail;
};
/** @internal */
export const number = name => {
  const config = primitive("a number property", text => {
    const result = Number(text);
    if (Number.isNaN(result)) {
      return Either.left(configError.InvalidData([], `Expected a number value but received ${formatUnknown(text)}`));
    }
    return Either.right(result);
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const integer = name => {
  const config = primitive("an integer property", text => {
    const result = Number(text);
    if (!Number.isInteger(result)) {
      return Either.left(configError.InvalidData([], `Expected an integer value but received ${formatUnknown(text)}`));
    }
    return Either.right(result);
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const literal = (...literals) => name => {
  const valuesString = literals.map(String).join(", ");
  const config = primitive(`one of (${valuesString})`, text => {
    const found = literals.find(value => String(value) === text);
    if (found === undefined) {
      return Either.left(configError.InvalidData([], `Expected one of (${valuesString}) but received ${formatUnknown(text)}`));
    }
    return Either.right(found);
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const logLevel = name => {
  const config = mapOrFail(string(), value => {
    const label = value.toUpperCase();
    const level = core.allLogLevels.find(level => level.label === label);
    return level === undefined ? Either.left(configError.InvalidData([], `Expected a log level but received ${formatUnknown(value)}`)) : Either.right(level);
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const duration = name => {
  const config = mapOrFail(string(), value => {
    const duration = Duration.decodeUnknown(value);
    return Either.fromOption(duration, () => configError.InvalidData([], `Expected a duration but received ${formatUnknown(value)}`));
  });
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const map = /*#__PURE__*/dual(2, (self, f) => mapOrFail(self, a => Either.right(f(a))));
/** @internal */
export const mapAttempt = /*#__PURE__*/dual(2, (self, f) => mapOrFail(self, a => {
  try {
    return Either.right(f(a));
  } catch (error) {
    return Either.left(configError.InvalidData([], error instanceof Error ? error.message : `${error}`));
  }
}));
/** @internal */
export const mapOrFail = /*#__PURE__*/dual(2, (self, f) => {
  const mapOrFail = Object.create(proto);
  mapOrFail._tag = OpCodes.OP_MAP_OR_FAIL;
  mapOrFail.original = self;
  mapOrFail.mapOrFail = f;
  return mapOrFail;
});
/** @internal */
export const nested = /*#__PURE__*/dual(2, (self, name) => {
  const nested = Object.create(proto);
  nested._tag = OpCodes.OP_NESTED;
  nested.name = name;
  nested.config = self;
  return nested;
});
/** @internal */
export const orElse = /*#__PURE__*/dual(2, (self, that) => {
  const fallback = Object.create(proto);
  fallback._tag = OpCodes.OP_FALLBACK;
  fallback.first = self;
  fallback.second = suspend(that);
  fallback.condition = constTrue;
  return fallback;
});
/** @internal */
export const orElseIf = /*#__PURE__*/dual(2, (self, options) => {
  const fallback = Object.create(proto);
  fallback._tag = OpCodes.OP_FALLBACK;
  fallback.first = self;
  fallback.second = suspend(options.orElse);
  fallback.condition = options.if;
  return fallback;
});
/** @internal */
export const option = self => {
  return pipe(self, map(Option.some), orElseIf({
    orElse: () => succeed(Option.none()),
    if: ConfigError.isMissingDataOnly
  }));
};
/** @internal */
export const primitive = (description, parse) => {
  const primitive = Object.create(proto);
  primitive._tag = OpCodes.OP_PRIMITIVE;
  primitive.description = description;
  primitive.parse = parse;
  return primitive;
};
/** @internal */
export const repeat = self => {
  const repeat = Object.create(proto);
  repeat._tag = OpCodes.OP_SEQUENCE;
  repeat.config = self;
  return repeat;
};
/** @internal */
export const secret = name => {
  const config = primitive("a secret property", text => Either.right(InternalSecret.fromString(text)));
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const redacted = nameOrConfig => {
  const config = isConfig(nameOrConfig) ? nameOrConfig : string(nameOrConfig);
  return map(config, redacted_.make);
};
/** @internal */
export const branded = /*#__PURE__*/dual(2, (nameOrConfig, constructor) => {
  const config = isConfig(nameOrConfig) ? nameOrConfig : string(nameOrConfig);
  return mapOrFail(config, a => constructor.either(a).pipe(Either.mapLeft(brandErrors => configError.InvalidData([], brandErrors.map(brandError => brandError.message).join("\n")))));
});
/** @internal */
export const hashSet = (config, name) => {
  const newConfig = map(chunk(config), HashSet.fromIterable);
  return name === undefined ? newConfig : nested(newConfig, name);
};
/** @internal */
export const string = name => {
  const config = primitive("a text property", Either.right);
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const nonEmptyString = name => {
  const config = primitive("a non-empty text property", Either.liftPredicate(text => text.length > 0, () => configError.MissingData([], "Expected a non-empty string")));
  return name === undefined ? config : nested(config, name);
};
/** @internal */
export const all = arg => {
  if (Array.isArray(arg)) {
    return tuple(arg);
  } else if (Symbol.iterator in arg) {
    return tuple([...arg]);
  }
  return struct(arg);
};
const struct = r => {
  const entries = Object.entries(r);
  let result = pipe(entries[0][1], map(value => ({
    [entries[0][0]]: value
  })));
  if (entries.length === 1) {
    return result;
  }
  const rest = entries.slice(1);
  for (const [key, config] of rest) {
    result = pipe(result, zipWith(config, (record, value) => ({
      ...record,
      [key]: value
    })));
  }
  return result;
};
/** @internal */
export const succeed = value => {
  const constant = Object.create(proto);
  constant._tag = OpCodes.OP_CONSTANT;
  constant.value = value;
  constant.parse = () => Either.right(value);
  return constant;
};
/** @internal */
export const suspend = config => {
  const lazy = Object.create(proto);
  lazy._tag = OpCodes.OP_LAZY;
  lazy.config = config;
  return lazy;
};
/** @internal */
export const sync = value => {
  return suspend(() => succeed(value()));
};
/** @internal */
export const hashMap = (config, name) => {
  const table = Object.create(proto);
  table._tag = OpCodes.OP_HASHMAP;
  table.valueConfig = config;
  return name === undefined ? table : nested(table, name);
};
/** @internal */
export const isConfig = u => hasProperty(u, ConfigTypeId);
/** @internal */
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
    result = pipe(result, zipWith(config, (tuple, value) => [...tuple, value]));
  }
  return result;
};
/**
 * @internal
 */
export const unwrap = wrapped => {
  if (isConfig(wrapped)) {
    return wrapped;
  }
  return struct(Object.fromEntries(Object.entries(wrapped).map(([k, a]) => [k, unwrap(a)])));
};
/** @internal */
export const validate = /*#__PURE__*/dual(2, (self, {
  message,
  validation
}) => mapOrFail(self, a => {
  if (validation(a)) {
    return Either.right(a);
  }
  return Either.left(configError.InvalidData([], message));
}));
/** @internal */
export const withDefault = /*#__PURE__*/dual(2, (self, def) => orElseIf(self, {
  orElse: () => succeed(def),
  if: ConfigError.isMissingDataOnly
}));
/** @internal */
export const withDescription = /*#__PURE__*/dual(2, (self, description) => {
  const described = Object.create(proto);
  described._tag = OpCodes.OP_DESCRIBED;
  described.config = self;
  described.description = description;
  return described;
});
/** @internal */
export const zip = /*#__PURE__*/dual(2, (self, that) => zipWith(self, that, (a, b) => [a, b]));
/** @internal */
export const zipWith = /*#__PURE__*/dual(3, (self, that, f) => {
  const zipWith = Object.create(proto);
  zipWith._tag = OpCodes.OP_ZIP_WITH;
  zipWith.left = self;
  zipWith.right = that;
  zipWith.zip = f;
  return zipWith;
});
//# sourceMappingURL=config.js.map