import * as internal from "./internal/configProvider.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const ConfigProviderTypeId = internal.ConfigProviderTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export const FlatConfigProviderTypeId = internal.FlatConfigProviderTypeId;
/**
 * The service tag for `ConfigProvider`.
 *
 * @since 2.0.0
 * @category context
 */
export const ConfigProvider = internal.configProviderTag;
/**
 * Creates a new config provider.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = internal.make;
/**
 * Creates a new flat config provider.
 *
 * @since 2.0.0
 * @category constructors
 */
export const makeFlat = internal.makeFlat;
/**
 * A config provider that loads configuration from context variables
 *
 * **Options**:
 *
 * - `pathDelim`: The delimiter for the path segments (default: `"_"`).
 * - `seqDelim`: The delimiter for the sequence of values (default: `","`).
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEnv = internal.fromEnv;
/**
 * Constructs a new `ConfigProvider` from a key/value (flat) provider, where
 * nesting is embedded into the string keys.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromFlat = internal.fromFlat;
/**
 * Constructs a new `ConfigProvider` from a JSON object.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromJson = internal.fromJson;
// TODO(4.0): use `_` for nested configs instead of `.` in next major
/**
 * Constructs a ConfigProvider using a map and the specified delimiter string,
 * which determines how to split the keys in the map into path segments.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromMap = internal.fromMap;
/**
 * Returns a new config provider that will automatically convert all property
 * names to constant case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
export const constantCase = internal.constantCase;
/**
 * Returns a new config provider that will automatically tranform all path
 * configuration names with the specified function. This can be utilized to
 * adapt the names of configuration properties from one naming convention to
 * another.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapInputPath = internal.mapInputPath;
/**
 * Returns a new config provider that will automatically convert all property
 * names to kebab case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
export const kebabCase = internal.kebabCase;
/**
 * Returns a new config provider that will automatically convert all property
 * names to lower case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
export const lowerCase = internal.lowerCase;
/**
 * Returns a new config provider that will automatically nest all
 * configuration under the specified property name. This can be utilized to
 * aggregate separate configuration sources that are all required to load a
 * single configuration value.
 *
 * @since 2.0.0
 * @category utils
 */
export const nested = internal.nested;
/**
 * Returns a new config provider that preferentially loads configuration data
 * from this one, but which will fall back to the specified alternate provider
 * if there are any issues loading the configuration from this provider.
 *
 * @since 2.0.0
 * @category utils
 */
export const orElse = internal.orElse;
/**
 * Returns a new config provider that will automatically un-nest all
 * configuration under the specified property name. This can be utilized to
 * de-aggregate separate configuration sources that are all required to load a
 * single configuration value.
 *
 * @since 2.0.0
 * @category utils
 */
export const unnested = internal.unnested;
/**
 * Returns a new config provider that will automatically convert all property
 * names to upper case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
export const snakeCase = internal.snakeCase;
/**
 * Returns a new config provider that will automatically convert all property
 * names to upper case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
export const upperCase = internal.upperCase;
/**
 * Returns a new config provider that transforms the config provider with the
 * specified function within the specified path.
 *
 * @since 2.0.0
 * @category combinators
 */
export const within = internal.within;
//# sourceMappingURL=ConfigProvider.js.map