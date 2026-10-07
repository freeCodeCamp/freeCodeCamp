type HookCallback = (...arguments_: any) => Promise<void> | void;
interface Hooks {
  [key: string]: HookCallback;
}
type HookKeys<T> = keyof T & string;
type DeprecatedHook<T> = {
  message?: string;
  to: HookKeys<T>;
};
type DeprecatedHooks<T> = { [name in HookKeys<T>]: DeprecatedHook<T> };
type ValueOf<C> = C extends Record<any, any> ? C[keyof C] : never;
type Strings<T> = Exclude<keyof T, number | symbol>;
type KnownKeys<T> = keyof { [K in keyof T as string extends K ? never : number extends K ? never : K]: never };
type StripGeneric<T> = Pick<T, KnownKeys<T> extends keyof T ? KnownKeys<T> : never>;
type OnlyGeneric<T> = Omit<T, KnownKeys<T> extends keyof T ? KnownKeys<T> : never>;
type Namespaces<T> = ValueOf<{ [key in Strings<T>]: key extends `${infer Namespace}:${string}` ? Namespace : never }>;
type BareHooks<T> = ValueOf<{ [key in Strings<T>]: key extends `${string}:${string}` ? never : key }>;
type HooksInNamespace<T, Namespace extends string> = ValueOf<{ [key in Strings<T>]: key extends `${Namespace}:${infer HookName}` ? HookName : never }>;
type WithoutNamespace<T, Namespace extends string> = { [key in HooksInNamespace<T, Namespace>]: `${Namespace}:${key}` extends keyof T ? T[`${Namespace}:${key}`] : never };
type NestedHooks<T> = (Partial<StripGeneric<T>> | Partial<OnlyGeneric<T>>) & Partial<{ [key in Namespaces<StripGeneric<T>>]: NestedHooks<WithoutNamespace<T, key>> }> & Partial<{ [key in BareHooks<StripGeneric<T>>]: T[key] }>;
type InferCallback<HT, HN extends keyof HT> = HT[HN] extends HookCallback ? HT[HN] : never;
type InferSpyEvent<HT extends Record<string, any>> = { [key in keyof HT]: {
  name: key;
  args: Parameters<HT[key]>;
  context: Record<string, any>;
} }[keyof HT];
declare class Hookable<HooksT extends Record<string, any> = Record<string, HookCallback>, HookNameT extends HookKeys<HooksT> = HookKeys<HooksT>> {
  private _hooks;
  private _before?;
  private _after?;
  private _deprecatedHooks;
  private _deprecatedMessages?;
  constructor();
  hook<NameT extends HookNameT>(name: NameT, function_: InferCallback<HooksT, NameT>, options?: {
    allowDeprecated?: boolean;
  }): () => void;
  hookOnce<NameT extends HookNameT>(name: NameT, function_: InferCallback<HooksT, NameT>): () => void;
  removeHook<NameT extends HookNameT>(name: NameT, function_: InferCallback<HooksT, NameT>): void;
  clearHook<NameT extends HookNameT>(name: NameT): void;
  deprecateHook<NameT extends HookNameT>(name: NameT, deprecated: HookKeys<HooksT> | DeprecatedHook<HooksT>): void;
  deprecateHooks(deprecatedHooks: Partial<Record<HookNameT, DeprecatedHook<HooksT>>>): void;
  addHooks(configHooks: NestedHooks<HooksT>): () => void;
  removeHooks(configHooks: NestedHooks<HooksT>): void;
  removeAllHooks(): void;
  callHook<NameT extends HookNameT>(name: NameT, ...args: Parameters<InferCallback<HooksT, NameT>>): Promise<any> | void;
  callHookParallel<NameT extends HookNameT>(name: NameT, ...args: Parameters<InferCallback<HooksT, NameT>>): Promise<any[]> | void;
  callHookWith<NameT extends HookNameT, CallFunction extends (hooks: HookCallback[], args: Parameters<InferCallback<HooksT, NameT>>, name: NameT) => any>(caller: CallFunction, name: NameT, args: Parameters<InferCallback<HooksT, NameT>>): ReturnType<CallFunction>;
  beforeEach(function_: (event: InferSpyEvent<HooksT>) => void): () => void;
  afterEach(function_: (event: InferSpyEvent<HooksT>) => void): () => void;
}
declare function createHooks<T extends Record<string, any>>(): Hookable<T>;
declare class HookableCore<HooksT extends Record<string, any> = Record<string, HookCallback>, HookNameT extends HookKeys<HooksT> = HookKeys<HooksT>> {
  protected _hooks: {
    [key: string]: HookCallback[] | undefined;
  };
  constructor();
  hook<NameT extends HookNameT>(name: NameT, fn: InferCallback<HooksT, NameT>): () => void;
  removeHook<NameT extends HookNameT>(name: NameT, function_: InferCallback<HooksT, NameT>): void;
  callHook<NameT extends HookNameT>(name: NameT, ...args: Parameters<InferCallback<HooksT, NameT>>): Promise<any> | void;
}
declare function flatHooks<T>(configHooks: NestedHooks<T>, hooks?: T, parentName?: string): T;
declare function mergeHooks<T>(...hooks: NestedHooks<T>[]): T;
declare function serial<T>(tasks: T[], function_: (task: T) => Promise<any> | any): Promise<any>;
type CreateTask = (name?: string) => {
  run: (function_: () => Promise<any> | any) => Promise<any> | any;
};
declare global {
  interface Console {
    createTask?: CreateTask;
  }
}
/** @deprecated */
declare function serialCaller(hooks: HookCallback[], arguments_?: any[]): Promise<any>;
/** @deprecated */
declare function parallelCaller(hooks: HookCallback[], args?: any[]): Promise<any>;
interface CreateDebuggerOptions {
  /** An optional tag to prefix console logs with */
  tag?: string;
  /**
  * Show hook params to the console output
  *
  * Enabled for browsers by default
  */
  inspect?: boolean;
  /**
  * Use group/groupEnd wrapper around logs happening during a specific hook
  *
  * Enabled for browsers by default
  */
  group?: boolean;
  /** Filter which hooks to enable debugger for. Can be a string prefix or fn. */
  filter?: string | ((event: string) => boolean);
}
/** Start debugging hook names and timing in console */
declare function createDebugger(hooks: Hookable<any>, _options?: CreateDebuggerOptions): {
  /** Stop debugging and remove listeners */close: () => void;
};
export { CreateDebuggerOptions, DeprecatedHook, DeprecatedHooks, HookCallback, HookKeys, Hookable, HookableCore, Hooks, NestedHooks, createDebugger, createHooks, flatHooks, mergeHooks, parallelCaller, serial, serialCaller };