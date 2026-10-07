/**
 * @since 2.0.0
 */
import type * as Config from "./Config.js";
import type * as ConfigError from "./ConfigError.js";
import type * as PathPatch from "./ConfigProviderPathPatch.js";
import type * as Context from "./Context.js";
import type * as Effect from "./Effect.js";
import type { LazyArg } from "./Function.js";
import type * as HashSet from "./HashSet.js";
import type { Pipeable } from "./Pipeable.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const ConfigProviderTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type ConfigProviderTypeId = typeof ConfigProviderTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const FlatConfigProviderTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type FlatConfigProviderTypeId = typeof FlatConfigProviderTypeId;
/**
 * A ConfigProvider is a service that provides configuration given a description
 * of the structure of that configuration.
 *
 * @since 2.0.0
 * @category models
 */
export interface ConfigProvider extends ConfigProvider.Proto, Pipeable {
    /**
     * Loads the specified configuration, or fails with a config error.
     */
    load<A>(config: Config.Config<A>): Effect.Effect<A, ConfigError.ConfigError>;
    /**
     * Flattens this config provider into a simplified config provider that knows
     * only how to deal with flat (key/value) properties.
     */
    readonly flattened: ConfigProvider.Flat;
}
/**
 * @since 2.0.0
 */
export declare namespace ConfigProvider {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Proto {
        readonly [ConfigProviderTypeId]: ConfigProviderTypeId;
    }
    /**
     * A simplified config provider that knows only how to deal with flat
     * (key/value) properties. Because these providers are common, there is
     * special support for implementing them.
     *
     * @since 2.0.0
     * @category models
     */
    interface Flat {
        readonly [FlatConfigProviderTypeId]: FlatConfigProviderTypeId;
        readonly patch: PathPatch.PathPatch;
        load<A>(path: ReadonlyArray<string>, config: Config.Config.Primitive<A>, split?: boolean): Effect.Effect<Array<A>, ConfigError.ConfigError>;
        enumerateChildren(path: ReadonlyArray<string>): Effect.Effect<HashSet.HashSet<string>, ConfigError.ConfigError>;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface FromMapConfig {
        readonly pathDelim: string;
        readonly seqDelim: string;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface FromEnvConfig {
        readonly pathDelim: string;
        readonly seqDelim: string;
    }
    /**
     * @since 1.0.0
     * @category models
     */
    type KeyComponent = KeyName | KeyIndex;
    /**
     * @since 1.0.0
     * @category models
     */
    interface KeyName {
        readonly _tag: "KeyName";
        readonly name: string;
    }
    /**
     * @since 1.0.0
     * @category models
     */
    interface KeyIndex {
        readonly _tag: "KeyIndex";
        readonly index: number;
    }
}
/**
 * The service tag for `ConfigProvider`.
 *
 * @since 2.0.0
 * @category context
 */
export declare const ConfigProvider: Context.Tag<ConfigProvider, ConfigProvider>;
/**
 * Creates a new config provider.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: (options: {
    readonly load: <A>(config: Config.Config<A>) => Effect.Effect<A, ConfigError.ConfigError>;
    readonly flattened: ConfigProvider.Flat;
}) => ConfigProvider;
/**
 * Creates a new flat config provider.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const makeFlat: (options: {
    readonly load: <A>(path: ReadonlyArray<string>, config: Config.Config.Primitive<A>, split: boolean) => Effect.Effect<Array<A>, ConfigError.ConfigError>;
    readonly enumerateChildren: (path: ReadonlyArray<string>) => Effect.Effect<HashSet.HashSet<string>, ConfigError.ConfigError>;
    readonly patch: PathPatch.PathPatch;
}) => ConfigProvider.Flat;
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
export declare const fromEnv: (options?: Partial<ConfigProvider.FromEnvConfig>) => ConfigProvider;
/**
 * Constructs a new `ConfigProvider` from a key/value (flat) provider, where
 * nesting is embedded into the string keys.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromFlat: (flat: ConfigProvider.Flat) => ConfigProvider;
/**
 * Constructs a new `ConfigProvider` from a JSON object.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromJson: (json: unknown) => ConfigProvider;
/**
 * Constructs a ConfigProvider using a map and the specified delimiter string,
 * which determines how to split the keys in the map into path segments.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromMap: (map: Map<string, string>, config?: Partial<ConfigProvider.FromMapConfig>) => ConfigProvider;
/**
 * Returns a new config provider that will automatically convert all property
 * names to constant case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const constantCase: (self: ConfigProvider) => ConfigProvider;
/**
 * Returns a new config provider that will automatically tranform all path
 * configuration names with the specified function. This can be utilized to
 * adapt the names of configuration properties from one naming convention to
 * another.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const mapInputPath: {
    /**
     * Returns a new config provider that will automatically tranform all path
     * configuration names with the specified function. This can be utilized to
     * adapt the names of configuration properties from one naming convention to
     * another.
     *
     * @since 2.0.0
     * @category utils
     */
    (f: (path: string) => string): (self: ConfigProvider) => ConfigProvider;
    /**
     * Returns a new config provider that will automatically tranform all path
     * configuration names with the specified function. This can be utilized to
     * adapt the names of configuration properties from one naming convention to
     * another.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: ConfigProvider, f: (path: string) => string): ConfigProvider;
};
/**
 * Returns a new config provider that will automatically convert all property
 * names to kebab case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const kebabCase: (self: ConfigProvider) => ConfigProvider;
/**
 * Returns a new config provider that will automatically convert all property
 * names to lower case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const lowerCase: (self: ConfigProvider) => ConfigProvider;
/**
 * Returns a new config provider that will automatically nest all
 * configuration under the specified property name. This can be utilized to
 * aggregate separate configuration sources that are all required to load a
 * single configuration value.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const nested: {
    /**
     * Returns a new config provider that will automatically nest all
     * configuration under the specified property name. This can be utilized to
     * aggregate separate configuration sources that are all required to load a
     * single configuration value.
     *
     * @since 2.0.0
     * @category utils
     */
    (name: string): (self: ConfigProvider) => ConfigProvider;
    /**
     * Returns a new config provider that will automatically nest all
     * configuration under the specified property name. This can be utilized to
     * aggregate separate configuration sources that are all required to load a
     * single configuration value.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: ConfigProvider, name: string): ConfigProvider;
};
/**
 * Returns a new config provider that preferentially loads configuration data
 * from this one, but which will fall back to the specified alternate provider
 * if there are any issues loading the configuration from this provider.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const orElse: {
    /**
     * Returns a new config provider that preferentially loads configuration data
     * from this one, but which will fall back to the specified alternate provider
     * if there are any issues loading the configuration from this provider.
     *
     * @since 2.0.0
     * @category utils
     */
    (that: LazyArg<ConfigProvider>): (self: ConfigProvider) => ConfigProvider;
    /**
     * Returns a new config provider that preferentially loads configuration data
     * from this one, but which will fall back to the specified alternate provider
     * if there are any issues loading the configuration from this provider.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: ConfigProvider, that: LazyArg<ConfigProvider>): ConfigProvider;
};
/**
 * Returns a new config provider that will automatically un-nest all
 * configuration under the specified property name. This can be utilized to
 * de-aggregate separate configuration sources that are all required to load a
 * single configuration value.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const unnested: {
    /**
     * Returns a new config provider that will automatically un-nest all
     * configuration under the specified property name. This can be utilized to
     * de-aggregate separate configuration sources that are all required to load a
     * single configuration value.
     *
     * @since 2.0.0
     * @category utils
     */
    (name: string): (self: ConfigProvider) => ConfigProvider;
    /**
     * Returns a new config provider that will automatically un-nest all
     * configuration under the specified property name. This can be utilized to
     * de-aggregate separate configuration sources that are all required to load a
     * single configuration value.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: ConfigProvider, name: string): ConfigProvider;
};
/**
 * Returns a new config provider that will automatically convert all property
 * names to upper case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const snakeCase: (self: ConfigProvider) => ConfigProvider;
/**
 * Returns a new config provider that will automatically convert all property
 * names to upper case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const upperCase: (self: ConfigProvider) => ConfigProvider;
/**
 * Returns a new config provider that transforms the config provider with the
 * specified function within the specified path.
 *
 * @since 2.0.0
 * @category combinators
 */
export declare const within: {
    /**
     * Returns a new config provider that transforms the config provider with the
     * specified function within the specified path.
     *
     * @since 2.0.0
     * @category combinators
     */
    (path: ReadonlyArray<string>, f: (self: ConfigProvider) => ConfigProvider): (self: ConfigProvider) => ConfigProvider;
    /**
     * Returns a new config provider that transforms the config provider with the
     * specified function within the specified path.
     *
     * @since 2.0.0
     * @category combinators
     */
    (self: ConfigProvider, path: ReadonlyArray<string>, f: (self: ConfigProvider) => ConfigProvider): ConfigProvider;
};
//# sourceMappingURL=ConfigProvider.d.ts.map