import type { $MergeBy, $PreservedValue, $Dictionary } from './helpers.js';

/**
 * This interface can be augmented by users to add types to `i18next` default TypeOptions.
 *
 * Usage:
 * ```ts
 * // i18next.d.ts
 * import 'i18next';
 * declare module 'i18next' {
 *   interface CustomTypeOptions {
 *     defaultNS: 'custom';
 *     returnNull: false;
 *     returnObjects: false;
 *     nsSeparator: ':';
 *     keySeparator: '.';
 *     compatibilityJSON: 'v4';
 *     allowObjectInHTMLChildren: false;
 *     resources: {
 *       custom: {
 *         foo: 'foo';
 *       };
 *     };
 *   }
 * }
 * ```
 */
export interface CustomTypeOptions {}

/**
 * This interface can be augmented by users to add types to `i18next` default PluginOptions.
 */
export interface CustomPluginOptions {}

export type TypeOptions = $MergeBy<
  {
    /** @see {InitOptions.returnNull} */
    returnNull: false;

    /** @see {InitOptions.returnEmptyString} */
    returnEmptyString: true;

    /** @see {InitOptions.returnObjects} */
    returnObjects: false;

    /** @see {InitOptions.keySeparator} */
    keySeparator: '.';

    /** @see {InitOptions.nsSeparator} */
    nsSeparator: ':';

    /** @see {InitOptions.pluralSeparator} */
    pluralSeparator: '_';

    /** @see {InitOptions.contextSeparator} */
    contextSeparator: '_';

    /** @see {InitOptions.defaultNS} */
    defaultNS: 'translation';

    /** @see {InitOptions.fallbackNS} */
    fallbackNS: false;

    /** @see {InitOptions.compatibilityJSON} */
    compatibilityJSON: 'v4';

    /** @see {InitOptions.resources} */
    resources: object;

    /**
     * Flag that allows HTML elements to receive objects. This is only useful for React applications
     * where you pass objects to HTML elements so they can be replaced to their respective interpolation
     * values (mostly with Trans component)
     */
    allowObjectInHTMLChildren: false;

    /**
     * Flag that enables strict key checking even if a `defaultValue` has been provided.
     * This ensures all calls of `t` function don't accidentally use implicitly missing keys.
     */
    strictKeyChecks: false;

    /**
     * Prefix for interpolation
     */
    interpolationPrefix: '{{';

    /**
     * Suffix for interpolation
     */
    interpolationSuffix: '}}';

    /** @see {InterpolationOptions.unescapePrefix} */
    unescapePrefix: '-';

    /** @see {InterpolationOptions.unescapeSuffix} */
    unescapeSuffix: '';

    /**
     * Use a proxy-based selector to select a translation.
     *
     * Enables features like go-to definition, and better DX/faster autocompletion
     * for TypeScript developers.
     *
     * If you're working with an especially large set of translations and aren't
     * using context, you set `enableSelector` to `"optimize"` and i18next won't do
     * any type-level processing of your translations at all.
     *
     * With `enableSelector` set to `"optimize"`, i18next is capable of supporting
     * arbitrarily large/deep translation sets without causing any IDE slowdown
     * whatsoever.
     *
     * @default false
     */
    enableSelector: false;

    /**
     * Maps interpolation format specifiers to their expected value types.
     *
     * By default, i18next infers types from built-in formatter names:
     * - `number`, `currency` → `number`
     * - `datetime` → `Date`
     * - `relativetime` → `number`
     * - `list` → `readonly string[]`
     * - No format specifier → `string`
     *
     * Use this option to add mappings for custom formatters or to override
     * the built-in defaults.
     *
     * @default {} (empty — built-in defaults apply)
     *
     * @example
     * ```ts
     * interface CustomTypeOptions {
     *   interpolationFormatTypeMap: {
     *     // custom formatter
     *     uppercase: string;
     *     // override built-in
     *     currency: string;
     *   };
     * }
     * ```
     */
    interpolationFormatTypeMap: {};
  },
  CustomTypeOptions
>;

export type PluginOptions<T> = $MergeBy<
  {
    /**
     * Options for language detection - check documentation of plugin
     * @default undefined
     */
    detection?: object;

    /**
     * Options for backend - check documentation of plugin
     * @default undefined
     */
    backend?: T;

    /**
     * Options for cache layer - check documentation of plugin
     * @default undefined
     */
    cache?: object;

    /**
     * Options for i18n message format - check documentation of plugin
     * @default undefined
     */
    i18nFormat?: object;
  },
  CustomPluginOptions
>;

export type FormatFunction = (
  value: any,
  format?: string,
  lng?: string,
  options?: InterpolationOptions & $Dictionary<any>,
) => string;

export interface InterpolationOptions {
  /**
   * Format function see formatting for details
   * @default noop
   */
  format?: FormatFunction;
  /**
   * Used to separate format from interpolation value
   * @default ','
   */
  formatSeparator?: string;
  /**
   * Escape function
   * @default str => str
   */
  escape?(str: string): string;

  /**
   * Always format interpolated values.
   * @default false
   */
  alwaysFormat?: boolean;
  /**
   * Escape passed in values to avoid xss injection
   * @default true
   */
  escapeValue?: boolean;
  /**
   * If true, then value passed into escape function is not casted to string, use with custom escape function that does its own type check
   * @default false
   */
  useRawValueToEscape?: boolean;
  /**
   * Prefix for interpolation
   * @default '{{'
   */
  prefix?: string;
  /**
   * Suffix for interpolation
   * @default '}}'
   */
  suffix?: string;
  /**
   * Escaped prefix for interpolation (regexSafe)
   * @default undefined
   */
  prefixEscaped?: string;
  /**
   * Escaped suffix for interpolation (regexSafe)
   * @default undefined
   */
  suffixEscaped?: string;
  /**
   * Suffix to unescaped mode
   * @default undefined
   */
  unescapeSuffix?: string;
  /**
   * Prefix to unescaped mode
   * @default '-'
   */
  unescapePrefix?: string;
  /**
   * Prefix for nesting
   * @default '$t('
   */
  nestingPrefix?: string;
  /**
   * Suffix for nesting
   * @default ')'
   */
  nestingSuffix?: string;
  /**
   * Escaped prefix for nesting (regexSafe)
   * @default undefined
   */
  nestingPrefixEscaped?: string;
  /**
   * Escaped suffix for nesting (regexSafe)
   * @default undefined
   */
  nestingSuffixEscaped?: string;
  /**
   * Separates options from key
   * @default ','
   */
  nestingOptionsSeparator?: string;
  /**
   * Global variables to use in interpolation replacements
   * @default undefined
   */

  defaultVariables?: { [index: string]: any };
  /**
   * After how many interpolation runs to break out before throwing a stack overflow
   * @default 1000
   */
  maxReplaces?: number;

  /**
   * If true, it will skip to interpolate the variables
   * @default true
   */
  skipOnVariables?: boolean;
}

export interface FallbackLngObjList {
  [language: string]: readonly string[];
}

export type FallbackLng =
  | string
  | readonly string[]
  | FallbackLngObjList
  | ((code: string) => string | readonly string[] | FallbackLngObjList);

export interface ReactOptions {
  /**
   * Set it to fallback to let passed namespaces to translated hoc act as fallbacks
   * @default 'default'
   */
  nsMode?: 'default' | 'fallback';
  /**
   * Set it to the default parent element created by the Trans component.
   * @default 'div'
   */
  defaultTransParent?: string;
  /**
   * Set which events trigger a re-render, can be set to false or string of events
   * @default 'languageChanged'
   */
  bindI18n?: string | false;
  /**
   * Set which events on store trigger a re-render, can be set to false or string of events
   * @default ''
   */
  bindI18nStore?: string | false;
  /**
   * Set fallback value for Trans components without children
   * @default undefined
   */
  transEmptyNodeValue?: string;
  /**
   * Set it to false if you do not want to use Suspense
   * @default true
   */
  useSuspense?: boolean;
  /**
   * Function to generate an i18nKey from the defaultValue (or Trans children)
   * when no key is provided.
   * By default, the defaultValue (Trans text) itself is used as the key.
   * If you want to require keys for all translations, supply a function
   * that always throws an error.
   * @default undefined
   */
  hashTransKey?(defaultValue: TOptionsBase['defaultValue']): TOptionsBase['defaultValue'];
  /**
   * Convert eg. <br/> found in translations to a react component of type br
   * @default true
   */
  transSupportBasicHtmlNodes?: boolean;
  /**
   * Which nodes not to convert in defaultValue generation in the Trans component.
   * @default ['br', 'strong', 'i', 'p']
   */
  transKeepBasicHtmlNodesFor?: readonly string[];
  /**
   * Wrap text nodes in a user-specified element.
   * @default ''
   */
  transWrapTextNodes?: string;
  /**
   * Default props to apply to all Trans components.
   * Component-level props will override these defaults.
   */
  transDefaultProps?: {
    tOptions?: TOptions;
    values?: object;
    shouldUnescape?: boolean;
    components?: readonly unknown[] | { readonly [tagName: string]: unknown }; // Use `unknown` (or `any`) to be permissive without importing React.
  };
  /**
   * Optional keyPrefix that will be automatically applied to returned t function in useTranslation for example.
   * Accepts a string or a selector function (e.g. `$ => $.deeply.nested`).
   * @default undefined
   */
  keyPrefix?: string | (($: any) => any);
  /**
   * Unescape function
   * by default it unescapes some basic html entities
   */
  unescape?(str: string): string;
}

export type ResourceKey =
  | string
  | {
      [key: string]: any;
    };

export interface ResourceLanguage {
  [namespace: string]: ResourceKey;
}

export interface Resource {
  [language: string]: ResourceLanguage;
}

export interface InitOptions<T = object> extends PluginOptions<T> {
  /**
   * Logs info level to console output. Helps finding issues with loading not working.
   * @default false
   */
  debug?: boolean;

  /**
   * Show support notice in console during initialization.
   * @default true
   */
  showSupportNotice?: boolean;

  /**
   * Resources to initialize with (if not using loading or not appending using addResourceBundle)
   * @default undefined
   */
  resources?: Resource;

  /**
   * Allow initializing with bundled resources while using a backend to load non bundled ones.
   * @default false
   */
  partialBundledLanguages?: boolean;

  /**
   * Language to use (overrides language detection)
   * @default undefined
   */
  lng?: string;

  /**
   * Language to use if translations in user language are not available.
   * @default 'dev'
   */
  fallbackLng?: false | FallbackLng;

  /**
   * Array of allowed languages
   * @default false
   */
  supportedLngs?: false | readonly string[];

  /**
   * If true will pass eg. en-US if finding en in supportedLngs
   * @default false
   */
  nonExplicitSupportedLngs?: boolean;

  /**
   * Language codes to lookup, given set language is 'en-US':
   * 'all' --> ['en-US', 'en', 'dev'],
   * 'currentOnly' --> 'en-US',
   * 'languageOnly' --> 'en'
   * @default 'all'
   */
  load?: 'all' | 'currentOnly' | 'languageOnly';

  /**
   * Array of languages to preload. Important on server-side to assert translations are loaded before rendering views.
   * @default false
   */
  preload?: false | readonly string[];

  /**
   * Language will be lowercased eg. en-US --> en-us
   * @default false
   */
  lowerCaseLng?: boolean;

  /**
   * Language will be lowercased EN --> en while leaving full locales like en-US
   * @default false
   */
  cleanCode?: boolean;

  /**
   * String or array of namespaces to load
   * @default 'translation'
   */
  ns?: string | readonly string[];

  /**
   * Default namespace used if not passed to translation function
   * @default 'translation'
   */
  defaultNS?: string | false | readonly string[];

  /**
   * String or array of namespaces to lookup key if not found in given namespace.
   * @default false
   */
  fallbackNS?: false | string | readonly string[];

  /**
   * Calls save missing key function on backend if key not found.
   * @default false
   */
  saveMissing?: boolean;

  /**
   * Calls save missing key function on backend if key not found also for plural forms.
   * @default false
   */
  saveMissingPlurals?: boolean;

  /**
   * Experimental: enable to update default values using the saveMissing
   * (Works only if defaultValue different from translated value.
   * Only useful on initial development or when keeping code as source of truth not changing values outside of code.
   * Only supported if backend supports it already)
   * @default false
   */
  updateMissing?: boolean;

  /**
   * @default 'fallback'
   */
  saveMissingTo?: 'current' | 'all' | 'fallback';

  /**
   * Used to not fallback to the key as default value, when using saveMissing functionality.
   * i.e. when using with i18next-http-backend this will result in having a key with an empty string value.
   * @default false
   */
  missingKeyNoValueFallbackToKey?: boolean;

  /**
   * Used for custom missing key handling (needs saveMissing set to true!)
   * @default false
   */
  missingKeyHandler?:
    | false
    | ((
        lngs: readonly string[],
        ns: string,
        key: string,
        fallbackValue: string,
        updateMissing: boolean,
        options: any,
      ) => void);

  /**
   * Receives a key that was not found in `t()` and returns a value, that will be returned by `t()`
   * @default noop
   */
  parseMissingKeyHandler?(key: string, defaultValue?: string, options?: any): any;

  /**
   * Appends namespace to missing key
   * @default false
   */
  appendNamespaceToMissingKey?: boolean;

  /**
   * Gets called in case a interpolation value is undefined. This method will not be called if the value is empty string or null
   * @default noop
   */
  missingInterpolationHandler?: (text: string, value: any, options: InitOptions) => any;

  /**
   * Will use 'plural' as suffix for languages only having 1 plural form, setting it to false will suffix all with numbers
   * @default true
   */
  simplifyPluralSuffix?: boolean;

  /**
   * String or array of postProcessors to apply per default
   * @default false
   */
  postProcess?: false | string | readonly string[];

  /**
   * passthrough the resolved object including 'usedNS', 'usedLang' etc into options object of postprocessors as 'i18nResolved' property
   * @default false
   */
  postProcessPassResolved?: boolean;

  /**
   * Allows null values as valid translation
   * @default false
   */
  returnNull?: boolean;

  /**
   * Allows empty string as valid translation
   * @default true
   */
  returnEmptyString?: boolean;

  /**
   * Allows objects as valid translation result
   * @default false
   */
  returnObjects?: boolean;

  /**
   * Returns an object that includes information about the used language, namespace, key and value
   * @default false
   */
  returnDetails?: boolean;

  /**
   * Gets called if object was passed in as key but returnObjects was set to false
   * @default noop
   */
  returnedObjectHandler?(key: string, value: string, options: any): void;

  /**
   * Char, eg. '\n' that arrays will be joined by
   * @default false
   */
  joinArrays?: false | string;

  /**
   * Sets defaultValue
   * @default args => ({ defaultValue: args[1] })
   */
  overloadTranslationOptionHandler?(args: string[]): TOptions;

  /**
   * @see https://www.i18next.com/translation-function/interpolation
   */
  interpolation?: InterpolationOptions;

  /**
   * Options for react - check documentation of plugin
   * @default undefined
   */
  react?: ReactOptions;

  /**
   * Triggers resource loading in init function inside a setTimeout (default async behaviour).
   * Set it to false if your backend loads resources sync - that way calling i18next.t after
   * init is possible without relaying on the init callback.
   * @default true
   */
  initAsync?: boolean;

  /**
   * @deprecated Use initAsync instead.
   */
  initImmediate?: boolean;

  /**
   * Char to separate keys
   * @default '.'
   */
  keySeparator?: false | string;

  /**
   * Char to split namespace from key
   * @default ':'
   */
  nsSeparator?: false | string;

  /**
   * Char to split plural from key
   * @default '_'
   */
  pluralSeparator?: string;

  /**
   * Char to split context from key
   * @default '_'
   */
  contextSeparator?: string;

  /**
   * Prefixes the namespace to the returned key when using `cimode`
   * @default false
   */
  appendNamespaceToCIMode?: boolean;

  /**
   * Compatibility JSON version
   * @warning only `v4` is available and supported by typescript
   * @default 'v4'
   */
  compatibilityJSON?: 'v4';

  /**
   * Options for https://github.com/locize/locize-lastused
   * @default undefined
   */
  locizeLastUsed?: {
    /**
     * The id of your locize project
     */
    projectId: string;

    /**
     * An api key if you want to send missing keys
     */
    apiKey?: string;

    /**
     * The reference language of your project
     * @default 'en'
     */
    referenceLng?: string;

    /**
     * Version
     * @default 'latest'
     */
    version?: string;

    /**
     * Debounce interval to send data in milliseconds
     * @default 90000
     */
    debounceSubmit?: number;

    /**
     * Hostnames that are allowed to send last used data.
     * Please keep those to your local system, staging, test servers (not production)
     * @default ['localhost']
     */
    allowedHosts?: readonly string[];
  };

  /**
   * Automatically lookup for a flat key if a nested key is not found an vice-versa
   * @default true
   */
  ignoreJSONStructure?: boolean;

  /**
   * Limit parallelism of calls to backend
   * This is needed to prevent trying to open thousands of
   * sockets or file descriptors, which can cause failures
   * and actually make the entire process take longer.
   * @default 10
   */
  maxParallelReads?: number;

  /**
   * The maximum number of retries to perform.
   * Note that retries are only performed when a request has no response
   * and throws an error.
   * The default value is used if value is set below 0.
   * @default 5
   */
  maxRetries?: number;

  /**
   * Set how long to wait, in milliseconds, between retries of failed requests.
   * This number is compounded by a factor of 2 for subsequent retry.
   * The default value is used if value is set below 1ms.
   * @default 350
   */
  retryTimeout?: number;

  /**
   * Initializes the internal formatter for the in-built formats as cached version.
   * Can be set to false for this type of issues: https://github.com/i18next/i18next/issues/2227
   * @default true
   */
  cacheInBuiltFormats?: boolean;
}

export interface TOptionsBase {
  /**
   * Default value to return if a translation was not found
   */
  defaultValue?: unknown;
  /**
   * Count value used for plurals
   */
  count?: number;
  /**
   * Ordinal flag for ordinal plurals
   */
  ordinal?: boolean;
  /**
   * Used for contexts (eg. male\female)
   */
  context?: unknown;
  /**
   * Object with vars for interpolation - or put them directly in options
   */
  replace?: any;
  /**
   * Override language to use
   */
  lng?: string;
  /**
   * Override languages to use
   */
  lngs?: readonly string[];
  /**
   * Override language to lookup key if not found see fallbacks for details
   */
  fallbackLng?: false | FallbackLng;
  /**
   * Override namespaces (string or array)
   */
  ns?: Namespace;
  /**
   * Override char to separate keys
   */
  keySeparator?: false | string;
  /**
   * Override char to split namespace from key
   */
  nsSeparator?: false | string;
  /**
   * Accessing an object not a translation string (can be set globally too)
   */
  returnObjects?: boolean;
  /**
   * Returns an object that includes information about the used language, namespace, key and value
   */
  returnDetails?: boolean;
  /**
   * Char, eg. '\n' that arrays will be joined by (can be set globally too)
   */
  joinArrays?: string;
  /**
   * String or array of postProcessors to apply see interval plurals as a sample
   */
  postProcess?: string | readonly string[];
  /**
   * Override interpolation options
   */
  interpolation?: InterpolationOptions;
  /**
   * Optional keyPrefix that will be applied to the key before resolving.
   * Accepts a string or a selector function (e.g. `$ => $.deeply.nested`).
   * Only supported on the TFunction returned by getFixedT().
   */
  keyPrefix?: string | (($: any) => any);
}

export type TOptions<TInterpolationMap extends object = $Dictionary> = TOptionsBase &
  TInterpolationMap;

export type FlatNamespace = $PreservedValue<keyof TypeOptions['resources'], string>;
export type Namespace<T = FlatNamespace> = T | readonly T[];
export type DefaultNamespace = TypeOptions['defaultNS'];
