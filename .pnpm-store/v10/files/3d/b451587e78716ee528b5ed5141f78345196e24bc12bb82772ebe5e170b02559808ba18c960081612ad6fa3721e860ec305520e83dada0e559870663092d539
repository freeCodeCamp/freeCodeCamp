"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.within = exports.upperCase = exports.unnested = exports.snakeCase = exports.orElse = exports.nested = exports.mapInputPath = exports.makeFlat = exports.make = exports.lowerCase = exports.kebabCase = exports.fromMap = exports.fromJson = exports.fromFlat = exports.fromEnv = exports.constantCase = exports.FlatConfigProviderTypeId = exports.ConfigProviderTypeId = exports.ConfigProvider = void 0;
var internal = _interopRequireWildcard(require("./internal/configProvider.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const ConfigProviderTypeId = exports.ConfigProviderTypeId = internal.ConfigProviderTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
const FlatConfigProviderTypeId = exports.FlatConfigProviderTypeId = internal.FlatConfigProviderTypeId;
/**
 * The service tag for `ConfigProvider`.
 *
 * @since 2.0.0
 * @category context
 */
const ConfigProvider = exports.ConfigProvider = internal.configProviderTag;
/**
 * Creates a new config provider.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Creates a new flat config provider.
 *
 * @since 2.0.0
 * @category constructors
 */
const makeFlat = exports.makeFlat = internal.makeFlat;
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
const fromEnv = exports.fromEnv = internal.fromEnv;
/**
 * Constructs a new `ConfigProvider` from a key/value (flat) provider, where
 * nesting is embedded into the string keys.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromFlat = exports.fromFlat = internal.fromFlat;
/**
 * Constructs a new `ConfigProvider` from a JSON object.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromJson = exports.fromJson = internal.fromJson;
// TODO(4.0): use `_` for nested configs instead of `.` in next major
/**
 * Constructs a ConfigProvider using a map and the specified delimiter string,
 * which determines how to split the keys in the map into path segments.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromMap = exports.fromMap = internal.fromMap;
/**
 * Returns a new config provider that will automatically convert all property
 * names to constant case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
const constantCase = exports.constantCase = internal.constantCase;
/**
 * Returns a new config provider that will automatically tranform all path
 * configuration names with the specified function. This can be utilized to
 * adapt the names of configuration properties from one naming convention to
 * another.
 *
 * @since 2.0.0
 * @category utils
 */
const mapInputPath = exports.mapInputPath = internal.mapInputPath;
/**
 * Returns a new config provider that will automatically convert all property
 * names to kebab case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
const kebabCase = exports.kebabCase = internal.kebabCase;
/**
 * Returns a new config provider that will automatically convert all property
 * names to lower case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
const lowerCase = exports.lowerCase = internal.lowerCase;
/**
 * Returns a new config provider that will automatically nest all
 * configuration under the specified property name. This can be utilized to
 * aggregate separate configuration sources that are all required to load a
 * single configuration value.
 *
 * @since 2.0.0
 * @category utils
 */
const nested = exports.nested = internal.nested;
/**
 * Returns a new config provider that preferentially loads configuration data
 * from this one, but which will fall back to the specified alternate provider
 * if there are any issues loading the configuration from this provider.
 *
 * @since 2.0.0
 * @category utils
 */
const orElse = exports.orElse = internal.orElse;
/**
 * Returns a new config provider that will automatically un-nest all
 * configuration under the specified property name. This can be utilized to
 * de-aggregate separate configuration sources that are all required to load a
 * single configuration value.
 *
 * @since 2.0.0
 * @category utils
 */
const unnested = exports.unnested = internal.unnested;
/**
 * Returns a new config provider that will automatically convert all property
 * names to upper case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
const snakeCase = exports.snakeCase = internal.snakeCase;
/**
 * Returns a new config provider that will automatically convert all property
 * names to upper case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
const upperCase = exports.upperCase = internal.upperCase;
/**
 * Returns a new config provider that transforms the config provider with the
 * specified function within the specified path.
 *
 * @since 2.0.0
 * @category combinators
 */
const within = exports.within = internal.within;
//# sourceMappingURL=ConfigProvider.js.map