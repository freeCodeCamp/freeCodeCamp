import * as internal from "./internal/config.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const ConfigTypeId = internal.ConfigTypeId;
/**
 * Constructs a config from a tuple / struct / arguments of configs.
 *
 * @since 2.0.0
 * @category constructors
 */
export const all = internal.all;
/**
 * Constructs a config for an array of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const array = internal.array;
/**
 * Constructs a config for a boolean value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const boolean = internal.boolean;
/**
 * Constructs a config for a network port [1, 65535].
 *
 * @since 3.16.0
 * @category constructors
 */
export const port = internal.port;
/**
 * Constructs a config for an URL value.
 *
 * @since 3.11.0
 * @category constructors
 */
export const url = internal.url;
/**
 * Constructs a config for a sequence of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const chunk = internal.chunk;
/**
 * Constructs a config for a date value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const date = internal.date;
/**
 * Constructs a config that fails with the specified message.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fail = internal.fail;
/**
 * Constructs a config for a float value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const number = internal.number;
/**
 * Constructs a config for a integer value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const integer = internal.integer;
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
export const literal = internal.literal;
/**
 * Constructs a config for a `LogLevel` value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const logLevel = internal.logLevel;
/**
 * Constructs a config for a duration value.
 *
 * @since 2.5.0
 * @category constructors
 */
export const duration = internal.duration;
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
export const isConfig = internal.isConfig;
/**
 * Returns a  config whose structure is the same as this one, but which produces
 * a different value, constructed using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map = internal.map;
/**
 * Returns a config whose structure is the same as this one, but which may
 * produce a different value, constructed using the specified function, which
 * may throw exceptions that will be translated into validation errors.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapAttempt = internal.mapAttempt;
/**
 * Returns a new config whose structure is the samea as this one, but which
 * may produce a different value, constructed using the specified fallible
 * function.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapOrFail = internal.mapOrFail;
/**
 * Returns a config that has this configuration nested as a property of the
 * specified name.
 *
 * @since 2.0.0
 * @category utils
 */
export const nested = internal.nested;
/**
 * Returns a config whose structure is preferentially described by this
 * config, but which falls back to the specified config if there is an issue
 * reading from this config.
 *
 * @since 2.0.0
 * @category utils
 */
export const orElse = internal.orElse;
/**
 * Returns configuration which reads from this configuration, but which falls
 * back to the specified configuration if reading from this configuration
 * fails with an error satisfying the specified predicate.
 *
 * @since 2.0.0
 * @category utils
 */
export const orElseIf = internal.orElseIf;
/**
 * Returns an optional version of this config, which will be `None` if the
 * data is missing from configuration, and `Some` otherwise.
 *
 * @since 2.0.0
 * @category utils
 */
export const option = internal.option;
/**
 * Constructs a new primitive config.
 *
 * @since 2.0.0
 * @category constructors
 */
export const primitive = internal.primitive;
/**
 * Returns a config that describes a sequence of values, each of which has the
 * structure of this config.
 *
 * @since 2.0.0
 * @category utils
 */
export const repeat = internal.repeat;
/**
 * Constructs a config for a secret value.
 *
 * @since 2.0.0
 * @category constructors
 * @deprecated
 */
export const secret = internal.secret;
/**
 * Constructs a config for a redacted value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const redacted = internal.redacted;
/**
 * Constructs a config for a branded value.
 *
 * @since 3.16.0
 * @category constructors
 */
export const branded = internal.branded;
/**
 * Constructs a config for a sequence of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const hashSet = internal.hashSet;
/**
 * Constructs a config for a string value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const string = internal.string;
/**
 * Constructs a config for a non-empty string value.
 *
 * @since 3.7.0
 * @category constructors
 */
export const nonEmptyString = internal.nonEmptyString;
/**
 * Constructs a config which contains the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeed = internal.succeed;
/**
 * Lazily constructs a config.
 *
 * @since 2.0.0
 * @category constructors
 */
export const suspend = internal.suspend;
/**
 * Constructs a config which contains the specified lazy value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const sync = internal.sync;
/**
 * Constructs a config for a sequence of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const hashMap = internal.hashMap;
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
export const unwrap = internal.unwrap;
/**
 * Returns a config that describes the same structure as this one, but which
 * performs validation during loading.
 *
 * @since 2.0.0
 * @category utils
 */
export const validate = internal.validate;
/**
 * Returns a config that describes the same structure as this one, but has the
 * specified default value in case the information cannot be found.
 *
 * @since 2.0.0
 * @category utils
 */
export const withDefault = internal.withDefault;
/**
 * Adds a description to this configuration, which is intended for humans.
 *
 * @since 2.0.0
 * @category utils
 */
export const withDescription = internal.withDescription;
/**
 * Returns a config that is the composition of this config and the specified
 * config.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip = internal.zip;
/**
 * Returns a config that is the composes this config and the specified config
 * using the provided function.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWith = internal.zipWith;
//# sourceMappingURL=Config.js.map