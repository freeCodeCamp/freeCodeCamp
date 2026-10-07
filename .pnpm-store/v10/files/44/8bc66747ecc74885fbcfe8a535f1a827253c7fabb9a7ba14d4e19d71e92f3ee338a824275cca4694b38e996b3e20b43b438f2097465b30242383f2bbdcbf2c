"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWith = exports.zip = exports.withDescription = exports.withDefault = exports.validate = exports.url = exports.unwrap = exports.sync = exports.suspend = exports.succeed = exports.string = exports.secret = exports.repeat = exports.redacted = exports.primitive = exports.port = exports.orElseIf = exports.orElse = exports.option = exports.number = exports.nonEmptyString = exports.nested = exports.mapOrFail = exports.mapAttempt = exports.map = exports.logLevel = exports.literal = exports.isConfig = exports.integer = exports.hashSet = exports.hashMap = exports.fail = exports.duration = exports.date = exports.chunk = exports.branded = exports.boolean = exports.array = exports.all = exports.ConfigTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/config.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const ConfigTypeId = exports.ConfigTypeId = internal.ConfigTypeId;
/**
 * Constructs a config from a tuple / struct / arguments of configs.
 *
 * @since 2.0.0
 * @category constructors
 */
const all = exports.all = internal.all;
/**
 * Constructs a config for an array of values.
 *
 * @since 2.0.0
 * @category constructors
 */
const array = exports.array = internal.array;
/**
 * Constructs a config for a boolean value.
 *
 * @since 2.0.0
 * @category constructors
 */
const boolean = exports.boolean = internal.boolean;
/**
 * Constructs a config for a network port [1, 65535].
 *
 * @since 3.16.0
 * @category constructors
 */
const port = exports.port = internal.port;
/**
 * Constructs a config for an URL value.
 *
 * @since 3.11.0
 * @category constructors
 */
const url = exports.url = internal.url;
/**
 * Constructs a config for a sequence of values.
 *
 * @since 2.0.0
 * @category constructors
 */
const chunk = exports.chunk = internal.chunk;
/**
 * Constructs a config for a date value.
 *
 * @since 2.0.0
 * @category constructors
 */
const date = exports.date = internal.date;
/**
 * Constructs a config that fails with the specified message.
 *
 * @since 2.0.0
 * @category constructors
 */
const fail = exports.fail = internal.fail;
/**
 * Constructs a config for a float value.
 *
 * @since 2.0.0
 * @category constructors
 */
const number = exports.number = internal.number;
/**
 * Constructs a config for a integer value.
 *
 * @since 2.0.0
 * @category constructors
 */
const integer = exports.integer = internal.integer;
/**
 * Constructs a config for a literal value.
 *
 * **Example**
 *
 * ```ts
 * import { Config } from "effect"
 *
 * const config = Config.literal("http", "https")("PROTOCOL")
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const literal = exports.literal = internal.literal;
/**
 * Constructs a config for a `LogLevel` value.
 *
 * @since 2.0.0
 * @category constructors
 */
const logLevel = exports.logLevel = internal.logLevel;
/**
 * Constructs a config for a duration value.
 *
 * @since 2.5.0
 * @category constructors
 */
const duration = exports.duration = internal.duration;
/**
 * This function returns `true` if the specified value is an `Config` value,
 * `false` otherwise.
 *
 * This function can be useful for checking the type of a value before
 * attempting to operate on it as an `Config` value. For example, you could
 * use `isConfig` to check the type of a value before using it as an
 * argument to a function that expects an `Config` value.
 *
 * @since 2.0.0
 * @category refinements
 */
const isConfig = exports.isConfig = internal.isConfig;
/**
 * Returns a  config whose structure is the same as this one, but which produces
 * a different value, constructed using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = internal.map;
/**
 * Returns a config whose structure is the same as this one, but which may
 * produce a different value, constructed using the specified function, which
 * may throw exceptions that will be translated into validation errors.
 *
 * @since 2.0.0
 * @category utils
 */
const mapAttempt = exports.mapAttempt = internal.mapAttempt;
/**
 * Returns a new config whose structure is the samea as this one, but which
 * may produce a different value, constructed using the specified fallible
 * function.
 *
 * @since 2.0.0
 * @category utils
 */
const mapOrFail = exports.mapOrFail = internal.mapOrFail;
/**
 * Returns a config that has this configuration nested as a property of the
 * specified name.
 *
 * @since 2.0.0
 * @category utils
 */
const nested = exports.nested = internal.nested;
/**
 * Returns a config whose structure is preferentially described by this
 * config, but which falls back to the specified config if there is an issue
 * reading from this config.
 *
 * @since 2.0.0
 * @category utils
 */
const orElse = exports.orElse = internal.orElse;
/**
 * Returns configuration which reads from this configuration, but which falls
 * back to the specified configuration if reading from this configuration
 * fails with an error satisfying the specified predicate.
 *
 * @since 2.0.0
 * @category utils
 */
const orElseIf = exports.orElseIf = internal.orElseIf;
/**
 * Returns an optional version of this config, which will be `None` if the
 * data is missing from configuration, and `Some` otherwise.
 *
 * @since 2.0.0
 * @category utils
 */
const option = exports.option = internal.option;
/**
 * Constructs a new primitive config.
 *
 * @since 2.0.0
 * @category constructors
 */
const primitive = exports.primitive = internal.primitive;
/**
 * Returns a config that describes a sequence of values, each of which has the
 * structure of this config.
 *
 * @since 2.0.0
 * @category utils
 */
const repeat = exports.repeat = internal.repeat;
/**
 * Constructs a config for a secret value.
 *
 * @since 2.0.0
 * @category constructors
 * @deprecated
 */
const secret = exports.secret = internal.secret;
/**
 * Constructs a config for a redacted value.
 *
 * @since 2.0.0
 * @category constructors
 */
const redacted = exports.redacted = internal.redacted;
/**
 * Constructs a config for a branded value.
 *
 * @since 3.16.0
 * @category constructors
 */
const branded = exports.branded = internal.branded;
/**
 * Constructs a config for a sequence of values.
 *
 * @since 2.0.0
 * @category constructors
 */
const hashSet = exports.hashSet = internal.hashSet;
/**
 * Constructs a config for a string value.
 *
 * @since 2.0.0
 * @category constructors
 */
const string = exports.string = internal.string;
/**
 * Constructs a config for a non-empty string value.
 *
 * @since 3.7.0
 * @category constructors
 */
const nonEmptyString = exports.nonEmptyString = internal.nonEmptyString;
/**
 * Constructs a config which contains the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
const succeed = exports.succeed = internal.succeed;
/**
 * Lazily constructs a config.
 *
 * @since 2.0.0
 * @category constructors
 */
const suspend = exports.suspend = internal.suspend;
/**
 * Constructs a config which contains the specified lazy value.
 *
 * @since 2.0.0
 * @category constructors
 */
const sync = exports.sync = internal.sync;
/**
 * Constructs a config for a sequence of values.
 *
 * @since 2.0.0
 * @category constructors
 */
const hashMap = exports.hashMap = internal.hashMap;
/**
 * Constructs a config from some configuration wrapped with the `Wrap<A>` utility type.
 *
 * For example:
 *
 * ```
 * import { Config, unwrap } from "./Config"
 *
 * interface Options { key: string }
 *
 * const makeConfig = (config: Config.Wrap<Options>): Config<Options> => unwrap(config)
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const unwrap = exports.unwrap = internal.unwrap;
/**
 * Returns a config that describes the same structure as this one, but which
 * performs validation during loading.
 *
 * @since 2.0.0
 * @category utils
 */
const validate = exports.validate = internal.validate;
/**
 * Returns a config that describes the same structure as this one, but has the
 * specified default value in case the information cannot be found.
 *
 * @since 2.0.0
 * @category utils
 */
const withDefault = exports.withDefault = internal.withDefault;
/**
 * Adds a description to this configuration, which is intended for humans.
 *
 * @since 2.0.0
 * @category utils
 */
const withDescription = exports.withDescription = internal.withDescription;
/**
 * Returns a config that is the composition of this config and the specified
 * config.
 *
 * @since 2.0.0
 * @category zipping
 */
const zip = exports.zip = internal.zip;
/**
 * Returns a config that is the composes this config and the specified config
 * using the provided function.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWith = exports.zipWith = internal.zipWith;
//# sourceMappingURL=Config.js.map