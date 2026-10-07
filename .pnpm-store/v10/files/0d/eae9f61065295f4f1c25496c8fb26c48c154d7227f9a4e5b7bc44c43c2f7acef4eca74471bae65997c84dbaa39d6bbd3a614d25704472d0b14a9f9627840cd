// Internal Helpers
import type { $Dictionary, $NormalizeIntoArray } from './typescript/helpers.js';
import type {
  DefaultNamespace,
  FlatNamespace,
  FormatFunction,
  InitOptions,
  InterpolationOptions,
  Namespace,
  Resource,
  ResourceKey,
  ResourceLanguage,
  TOptions,
  TypeOptions,
} from './typescript/options.js';
import type {
  KeyPrefix,
  KeyPrefixSelector,
  TFunction,
  KeyFromSelectorFn,
  SelectorKey,
} from './typescript/t.js';

export interface WithT<Ns extends Namespace = DefaultNamespace> {
  // Expose parameterized t in the i18next interface hierarchy
  t: TFunction<Ns>;
}

export interface Interpolator {
  init(options: InterpolationOptions, reset: boolean): undefined;
  reset(): undefined;
  resetRegExp(): undefined;
  interpolate(str: string, data: object, lng: string, options: InterpolationOptions): string;
  nest(str: string, fc: (...args: any[]) => any, options: InterpolationOptions): string;
}

export class ResourceStore {
  constructor(data: Resource, options: InitOptions);

  public data: Resource;

  public options: InitOptions;

  /**
   * Gets fired when resources got added or removed
   */
  on(event: 'added' | 'removed', callback: (lng: string, ns: string) => void): void;

  /**
   * Remove event listener
   * removes all callback when callback not specified
   */
  off(event: 'added' | 'removed', callback?: (lng: string, ns: string) => void): void;
}

export interface Formatter {
  init(services: Services, i18nextOptions: InitOptions): void;
  add(name: string, fc: (value: any, lng: string | undefined, options: any) => string): void;
  addCached(
    name: string,
    fc: (lng: string | undefined, options: any) => (value: any) => string,
  ): void;
  format: FormatFunction;
}

export interface Services {
  backendConnector: any;
  i18nFormat: any;
  interpolator: Interpolator;
  languageDetector: any;
  languageUtils: any;
  logger: any;
  pluralResolver: any;
  resourceStore: ResourceStore;
  formatter?: Formatter;
}

export type ModuleType =
  | 'backend'
  | 'logger'
  | 'languageDetector'
  | 'postProcessor'
  | 'i18nFormat'
  | 'formatter'
  | '3rdParty';

export interface Module {
  type: ModuleType;
}

export type CallbackError = Error | string | null | undefined;
export type ReadCallback = (
  err: CallbackError,
  data: ResourceKey | boolean | null | undefined,
) => void;
export type MultiReadCallback = (err: CallbackError, data: Resource | null | undefined) => void;

/**
 * Used to load data for i18next.
 * Can be provided as a singleton or as a prototype constructor (preferred for supporting multiple instances of i18next).
 * For singleton set property `type` to `'backend'` For a prototype constructor set static property.
 */
export interface BackendModule<Options = object> extends Module {
  type: 'backend';
  init(services: Services, backendOptions: Options, i18nextOptions: InitOptions): void;
  read(language: string, namespace: string, callback: ReadCallback): void;
  /** Save the missing translation */
  create?(
    languages: readonly string[],
    namespace: string,
    key: string,
    fallbackValue: string,
  ): void;
  /** Load multiple languages and namespaces. For backends supporting multiple resources loading */
  readMulti?(
    languages: readonly string[],
    namespaces: readonly string[],
    callback: MultiReadCallback,
  ): void;
  /** Store the translation. For backends acting as cache layer */
  save?(language: string, namespace: string, data: ResourceLanguage): void;
}

/**
 * Used to detect language in user land.
 * Can be provided as a singleton or as a prototype constructor (preferred for supporting multiple instances of i18next).
 * For singleton set property `type` to `'languageDetector'` For a prototype constructor set static property.
 */
export interface LanguageDetectorModule extends Module {
  type: 'languageDetector';
  init?(services: Services, detectorOptions: object, i18nextOptions: InitOptions): void;
  /** Must return detected language */
  detect(): string | readonly string[] | undefined;
  cacheUserLanguage?(lng: string): void;
}

/**
 * Used to detect language in user land.
 * Can be provided as a singleton or as a prototype constructor (preferred for supporting multiple instances of i18next).
 * For singleton set property `type` to `'languageDetector'` For a prototype constructor set static property.
 */
export interface LanguageDetectorAsyncModule extends Module {
  type: 'languageDetector';
  /** Set to true to enable async detection */
  async: true;
  init?(services: Services, detectorOptions: object, i18nextOptions: InitOptions): void;
  /** Must call callback passing detected language or return a Promise */
  detect(
    callback: (lng: string | readonly string[] | undefined) => void | undefined,
  ): void | Promise<string | readonly string[] | undefined>;
  cacheUserLanguage?(lng: string): void | Promise<void>;
}

/**
 * Used to extend or manipulate the translated values before returning them in `t` function.
 * Need to be a singleton object.
 */
export interface PostProcessorModule extends Module {
  /** Unique name */
  name: string;
  type: 'postProcessor';
  process(value: string, key: string | string[], options: TOptions, translator: any): string;
}

/**
 * Override the built-in console logger.
 * Do not need to be a prototype function.
 */
export interface LoggerModule extends Module {
  type: 'logger';
  log(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
}

export interface I18nFormatModule extends Module {
  type: 'i18nFormat';
}

export interface FormatterModule extends Module, Formatter {
  type: 'formatter';
}

export interface ThirdPartyModule extends Module {
  type: '3rdParty';
  init(i18next: i18n): void;
}

export interface Modules {
  backend?: BackendModule;
  logger?: LoggerModule;
  languageDetector?: LanguageDetectorModule | LanguageDetectorAsyncModule;
  i18nFormat?: I18nFormatModule;
  formatter?: FormatterModule;
  external: ThirdPartyModule[];
}

// helper to identify class https://stackoverflow.com/a/45983481/2363935
export interface Newable<T> {
  new (...args: any[]): T;
}
export interface NewableModule<T extends Module> extends Newable<T> {
  type: T['type'];
}

export type Callback = (error: any, t: TFunction) => void;

/**
 * Uses similar args as the t function and returns true if a key exists.
 * Acts as a type guard, narrowing the key to {@link SelectorKey} so it can be passed to `t()`.
 */
export interface ExistsFunction<
  TKeys extends string = string,
  TInterpolationMap extends object = $Dictionary,
> {
  (key: TKeys, options?: TOptions<TInterpolationMap>): key is TKeys & SelectorKey;
  (key: TKeys | TKeys[], options?: TOptions<TInterpolationMap>): boolean;
}

export interface CloneOptions extends InitOptions {
  /**
   * Will create a new instance of the resource store and import the existing translation resources.
   * This way it will not shared the resource store instance.
   * @default false
   */
  forkResourceStore?: boolean;
}

export interface CustomInstanceExtensions {}

// Used just here to exclude `DefaultNamespace` which can be both string or array from `FlatNamespace`
// in TFunction declaration below.
// Due to this only very special usage I'm not moving this inside helpers.
type InferArrayValuesElseReturnType<T> = T extends (infer A)[] ? A : T;

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface i18n extends CustomInstanceExtensions {
  // Expose parameterized t in the i18next interface hierarchy
  t: TFunction<
    [
      ...$NormalizeIntoArray<DefaultNamespace>,
      ...Exclude<FlatNamespace, InferArrayValuesElseReturnType<DefaultNamespace>>[],
    ]
  >;

  /**
   * The default of the i18next module is an i18next instance ready to be initialized by calling init.
   * You can create additional instances using the createInstance function.
   *
   * @param options - Initial options.
   * @param callback - will be called after all translations were loaded or with an error when failed (in case of using a backend).
   */
  init(callback?: Callback): Promise<TFunction>;
  init<T>(options: InitOptions<T>, callback?: Callback): Promise<TFunction>;

  loadResources(callback?: (err: any) => void): void;

  /**
   * The use function is there to load additional plugins to i18next.
   * For available module see the plugins page and don't forget to read the documentation of the plugin.
   *
   * @param module Accepts a class or object
   */
  use<T extends Module>(module: T | NewableModule<T> | Newable<T>): this;

  /**
   * List of modules used
   */
  modules: Modules;

  /**
   * Internal container for all used plugins and implementation details like languageUtils, pluralResolvers, etc.
   */
  services: Services;

  /**
   * Internal container for translation resources
   */
  store: ResourceStore;

  /**
   * Uses similar args as the t function and returns true if a key exists.
   */
  exists: ExistsFunction;

  /**
   * Returns a resource data by language.
   */
  getDataByLanguage(lng: string): { [key: string]: { [key: string]: string } } | undefined;

  /**
   * Returns a t function that defaults to given language or namespace.
   * Both params could be arrays of languages or namespaces and will be treated as fallbacks in that case.
   * On the returned function you can like in the t function override the languages or namespaces by passing them in options or by prepending namespace.
   *
   * Accepts optional keyPrefix that will be automatically applied to returned t function.
   */
  getFixedT<
    Ns extends Namespace | null,
    const TKPrefixFn extends TypeOptions['enableSelector'] extends true | 'optimize'
      ? KeyPrefixSelector<ActualNs>
      : never,
    ActualNs extends Namespace = Ns extends null ? DefaultNamespace : Ns,
  >(
    lng: string | readonly string[] | null,
    ns: Ns,
    keyPrefix: TKPrefixFn,
  ): TFunction<ActualNs, TKPrefixFn>;

  getFixedT<
    Ns extends Namespace | null = DefaultNamespace,
    TKPrefix extends KeyPrefix<ActualNs> = undefined,
    ActualNs extends Namespace = Ns extends null ? DefaultNamespace : Ns,
  >(
    ...args:
      | [lng: string | readonly string[], ns?: Ns, keyPrefix?: TKPrefix | (($: any) => any)]
      | [lng: null, ns: Ns, keyPrefix?: TKPrefix | (($: any) => any)]
  ): TFunction<ActualNs, TKPrefix>;

  /**
   * Changes the language. The callback will be called as soon translations were loaded or an error occurs while loading.
   * HINT: For easy testing - setting lng to 'cimode' will set t function to always return the key.
   */
  changeLanguage(lng?: string, callback?: Callback): Promise<TFunction>;

  /**
   * Is set to the current detected or set language.
   * If you need the primary used language depending on your configuration (supportedLngs, load) you will prefer using i18next.languages[0].
   */
  language: string;

  /**
   * Is set to an array of language-codes that will be used it order to lookup the translation value.
   */
  languages: readonly string[];

  /**
   * Is set to the current resolved language.
   * It can be used as primary used language, for example in a language switcher.
   */
  resolvedLanguage?: string;

  /**
   * Checks if namespace has loaded yet.
   * i.e. used by react-i18next
   */
  hasLoadedNamespace(
    ns: string | readonly string[],
    options?: {
      lng?: string | readonly string[];
      fallbackLng?: InitOptions['fallbackLng'];
      /**
       * if `undefined` is returned default checks are performed.
       */
      precheck?: (
        i18n: i18n,
        /**
         * Check if the language namespace provided are not in loading status:
         * returns `true` if load is completed successfully or with an error.
         */
        loadNotPending: (
          lng: string | readonly string[],
          ns: string | readonly string[],
        ) => boolean,
      ) => boolean | undefined;
    },
  ): boolean;

  /**
   * Loads additional namespaces not defined in init options.
   */
  loadNamespaces(ns: string | readonly string[], callback?: Callback): Promise<void>;

  /**
   * Loads additional languages not defined in init options (preload).
   */
  loadLanguages(lngs: string | readonly string[], callback?: Callback): Promise<void>;

  /**
   * Reloads resources on given state. Optionally you can pass an array of languages and namespaces as params if you don't want to reload all.
   */
  reloadResources(
    lngs?: string | readonly string[],
    ns?: string | readonly string[],
    callback?: () => void,
  ): Promise<void>;
  reloadResources(lngs: null, ns: string | readonly string[], callback?: () => void): Promise<void>;

  /**
   * Changes the default namespace.
   */
  setDefaultNamespace(ns: string | readonly string[]): void;

  /**
   * Returns rtl or ltr depending on languages read direction.
   */
  dir(lng?: string): 'ltr' | 'rtl';

  /**
   * Exposes interpolation.format function added on init.
   */
  format: FormatFunction;

  /**
   * Will return a new i18next instance.
   * Please read the options page for details on configuration options.
   * Providing a callback will automatically call init.
   * The callback will be called after all translations were loaded or with an error when failed (in case of using a backend).
   */
  createInstance(options?: InitOptions, callback?: Callback): i18n;

  /**
   * Creates a clone of the current instance. Shares store, plugins and initial configuration.
   * Can be used to create an instance sharing storage but being independent on set language or namespaces.
   */
  cloneInstance(options?: CloneOptions, callback?: Callback): i18n;

  /**
   * Returns a JSON representation of the i18next instance for serialization.
   */
  toJSON(): {
    options: InitOptions;
    store: ResourceStore;
    language: string;
    languages: readonly string[];
    resolvedLanguage?: string;
  };

  /**
   * Gets fired after initialization.
   */
  on(event: 'initialized', callback: (options: InitOptions) => void): this;

  /**
   * Gets fired on loaded resources.
   */
  on(
    event: 'loaded',
    callback: (loaded: { [language: string]: { [namespace: string]: boolean } }) => void,
  ): this;

  /**
   * Gets fired if loading resources failed.
   */
  on(event: 'failedLoading', callback: (lng: string, ns: string, msg: string) => void): this;

  /**
   * Gets fired on accessing a key not existing.
   */
  on(
    event: 'missingKey',
    callback: (lngs: readonly string[], namespace: string, key: string, res: string) => void,
  ): this;

  /**
   * Gets fired when changeLanguage got called.
   */
  on(event: 'languageChanged', callback: (lng: string) => void): this;

  /**
   * Event listener
   */
  on(event: string, listener: (...args: any[]) => void): this;

  /**
   * Remove event listener
   * removes all callback when callback not specified
   */
  off(event: string, listener?: (...args: any[]) => void): void;

  /**
   * Gets one value by given key.
   */
  getResource(
    lng: string,
    ns: string,
    key: string,
    options?: Pick<InitOptions, 'keySeparator' | 'ignoreJSONStructure'>,
  ): any;

  /**
   * Adds one key/value.
   */
  addResource(
    lng: string,
    ns: string,
    key: string,
    value: string,
    options?: { keySeparator?: string; silent?: boolean },
  ): i18n;

  /**
   * Adds multiple key/values.
   */
  addResources(lng: string, ns: string, resources: any): i18n;

  /**
   * Adds a complete bundle.
   * Setting deep param to true will extend existing translations in that file.
   * Setting overwrite to true it will overwrite existing translations in that file.
   */
  addResourceBundle(
    lng: string,
    ns: string,
    resources: any,
    deep?: boolean,
    overwrite?: boolean,
  ): i18n;

  /**
   * Checks if a resource bundle exists.
   */
  hasResourceBundle(lng: string, ns: string): boolean;

  /**
   * Returns a resource bundle.
   */
  getResourceBundle(lng: string, ns: string): any;

  /**
   * Removes an existing bundle.
   */
  removeResourceBundle(lng: string, ns: string): i18n;

  /**
   * Current options
   */
  options: InitOptions;

  /**
   * Is initialized
   */
  isInitialized: boolean;

  /**
   * Is initializing
   */
  isInitializing: boolean;

  /**
   * Store was initialized
   */
  initializedStoreOnce: boolean;

  /**
   * Language was initialized
   */
  initializedLanguageOnce: boolean;

  /**
   * Emit event
   */
  emit(eventName: string, ...args: any[]): void;
}

export type * from './typescript/options.js';
export type {
  // we need to explicitely export some types, to prevent some issues with next-i18next and interpolation variable validation, etc...
  FallbackLngObjList,
  FallbackLng,
  InitOptions,
  TypeOptions,
  CustomTypeOptions,
  CustomPluginOptions,
  PluginOptions,
  FormatFunction,
  InterpolationOptions,
  ReactOptions,
  ResourceKey,
  ResourceLanguage,
  Resource,
  TOptions,
  Namespace,
  DefaultNamespace,
  FlatNamespace,
} from './typescript/options.js';
export type * from './typescript/t.js';
export type {
  TFunction,
  ParseKeys,
  TFunctionReturn,
  TFunctionDetailedResult,
  KeyPrefix,
  KeyPrefixSelector,
  NsResource,
  InterpolationMap,
  SelectorKey,
} from './typescript/t.js';

declare const i18next: i18n;
export default i18next;

export const createInstance: i18n['createInstance'];

export const dir: i18n['dir'];
export const init: i18n['init'];
export const loadResources: i18n['loadResources'];
export const reloadResources: i18n['reloadResources'];
export const use: i18n['use'];
export const changeLanguage: i18n['changeLanguage'];
export const getFixedT: i18n['getFixedT'];
export const t: i18n['t'];
export const exists: i18n['exists'];
export const setDefaultNamespace: i18n['setDefaultNamespace'];
export const hasLoadedNamespace: i18n['hasLoadedNamespace'];
export const loadNamespaces: i18n['loadNamespaces'];
export const loadLanguages: i18n['loadLanguages'];

export declare const keyFromSelector: KeyFromSelectorFn;
