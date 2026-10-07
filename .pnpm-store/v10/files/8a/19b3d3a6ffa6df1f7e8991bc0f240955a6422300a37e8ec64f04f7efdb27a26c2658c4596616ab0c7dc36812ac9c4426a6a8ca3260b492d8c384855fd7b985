import type Immutable from 'immutable';
import { compose } from 'redux';
import type { Action, ActionCreator, StoreEnhancer } from 'redux';

export interface EnhancerOptions {
  /**
   * the instance name to be showed on the monitor page. Default value is `document.title`.
   * If not specified and there's no document title, it will consist of `tabId` and `instanceId`.
   */
  name?: string;
  /**
   * action creators functions to be available in the Dispatcher.
   */
  actionCreators?: ActionCreator<any>[] | { [key: string]: ActionCreator<any> };
  /**
   * if more than one action is dispatched in the indicated interval, all new actions will be collected and sent at once.
   * It is the joint between performance and speed. When set to `0`, all actions will be sent instantly.
   * Set it to a higher value when experiencing perf issues (also `maxAge` to a lower value).
   *
   * @default 500 ms.
   */
  latency?: number;
  /**
   * (> 1) - maximum allowed actions to be stored in the history tree. The oldest actions are removed once maxAge is reached. It's critical for performance.
   *
   * @default 50
   */
  maxAge?: number;
  /**
   * Customizes how actions and state are serialized and deserialized. Can be a boolean or object. If given a boolean, the behavior is the same as if you
   * were to pass an object and specify `options` as a boolean. Giving an object allows fine-grained customization using the `replacer` and `reviver`
   * functions.
   */
  serialize?:
    | boolean
    | {
        /**
         * - `undefined` - will use regular `JSON.stringify` to send data (it's the fast mode).
         * - `false` - will handle also circular references.
         * - `true` - will handle also date, regex, undefined, error objects, symbols, maps, sets and functions.
         * - object, which contains `date`, `regex`, `undefined`, `error`, `symbol`, `map`, `set` and `function` keys.
         *   For each of them you can indicate if to include (by setting as `true`).
         *   For `function` key you can also specify a custom function which handles serialization.
         *   See [`jsan`](https://github.com/kolodny/jsan) for more details.
         */
        options?:
          | undefined
          | boolean
          | {
              date?: true;
              regex?: true;
              undefined?: true;
              error?: true;
              symbol?: true;
              map?: true;
              set?: true;
              function?: true | ((fn: (...args: any[]) => any) => string);
            };
        /**
         * [JSON replacer function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter) used for both actions and states stringify.
         * In addition, you can specify a data type by adding a [`__serializedType__`](https://github.com/zalmoxisus/remotedev-serialize/blob/master/helpers/index.js#L4)
         * key. So you can deserialize it back while importing or persisting data.
         * Moreover, it will also [show a nice preview showing the provided custom type](https://cloud.githubusercontent.com/assets/7957859/21814330/a17d556a-d761-11e6-85ef-159dd12f36c5.png):
         */
        replacer?: (key: string, value: unknown) => any;
        /**
         * [JSON `reviver` function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter)
         * used for parsing the imported actions and states. See [`remotedev-serialize`](https://github.com/zalmoxisus/remotedev-serialize/blob/master/immutable/serialize.js#L8-L41)
         * as an example on how to serialize special data types and get them back.
         */
        reviver?: (key: string, value: unknown) => any;
        /**
         * Automatically serialize/deserialize immutablejs via [remotedev-serialize](https://github.com/zalmoxisus/remotedev-serialize).
         * Just pass the Immutable library. It will support all ImmutableJS structures. You can even export them into a file and get them back.
         * The only exception is `Record` class, for which you should pass this in addition the references to your classes in `refs`.
         */
        immutable?: typeof Immutable;
        /**
         * ImmutableJS `Record` classes used to make possible restore its instances back when importing, persisting...
         */
        refs?: Immutable.Record.Factory<any>[];
      };
  /**
   * function which takes `action` object and id number as arguments, and should return `action` object back.
   */
  actionSanitizer?: <A extends Action>(action: A, id: number) => A;
  /**
   * function which takes `state` object and index as arguments, and should return `state` object back.
   */
  stateSanitizer?: <S>(state: S, index: number) => S;
  /**
   * *string or array of strings as regex* - actions types to be hidden / shown in the monitors (while passed to the reducers).
   * If `actionsWhitelist` specified, `actionsBlacklist` is ignored.
   * @deprecated Use actionsDenylist instead.
   */
  actionsBlacklist?: string | string[];
  /**
   * *string or array of strings as regex* - actions types to be hidden / shown in the monitors (while passed to the reducers).
   * If `actionsWhitelist` specified, `actionsBlacklist` is ignored.
   * @deprecated Use actionsAllowlist instead.
   */
  actionsWhitelist?: string | string[];
  /**
   * *string or array of strings as regex* - actions types to be hidden / shown in the monitors (while passed to the reducers).
   * If `actionsAllowlist` specified, `actionsDenylist` is ignored.
   */
  actionsDenylist?: string | string[];
  /**
   * *string or array of strings as regex* - actions types to be hidden / shown in the monitors (while passed to the reducers).
   * If `actionsAllowlist` specified, `actionsDenylist` is ignored.
   */
  actionsAllowlist?: string | string[];
  /**
   * called for every action before sending, takes `state` and `action` object, and returns `true` in case it allows sending the current data to the monitor.
   * Use it as a more advanced version of `actionsDenylist`/`actionsAllowlist` parameters.
   */
  predicate?: <S, A extends Action>(state: S, action: A) => boolean;
  /**
   * if specified as `false`, it will not record the changes till clicking on `Start recording` button.
   * Available only for Redux enhancer, for others use `autoPause`.
   *
   * @default true
   */
  shouldRecordChanges?: boolean;
  /**
   * if specified, whenever clicking on `Pause recording` button and there are actions in the history log, will add this action type.
   * If not specified, will commit when paused. Available only for Redux enhancer.
   *
   * @default "@@PAUSED""
   */
  pauseActionType?: string;
  /**
   * auto pauses when the extension’s window is not opened, and so has zero impact on your app when not in use.
   * Not available for Redux enhancer (as it already does it but storing the data to be sent).
   *
   * @default false
   */
  autoPause?: boolean;
  /**
   * if specified as `true`, it will not allow any non-monitor actions to be dispatched till clicking on `Unlock changes` button.
   * Available only for Redux enhancer.
   *
   * @default false
   */
  shouldStartLocked?: boolean;
  /**
   * if set to `false`, will not recompute the states on hot reloading (or on replacing the reducers). Available only for Redux enhancer.
   *
   * @default true
   */
  shouldHotReload?: boolean;
  /**
   * if specified as `true`, whenever there's an exception in reducers, the monitors will show the error message, and next actions will not be dispatched.
   *
   * @default false
   */
  shouldCatchErrors?: boolean;
  /**
   * If you want to restrict the extension, specify the features you allow.
   * If not specified, all of the features are enabled. When set as an object, only those included as `true` will be allowed.
   * Note that except `true`/`false`, `import` and `export` can be set as `custom` (which is by default for Redux enhancer), meaning that the importing/exporting occurs on the client side.
   * Otherwise, you'll get/set the data right from the monitor part.
   */
  features?: {
    /**
     * start/pause recording of dispatched actions
     */
    pause?: boolean;
    /**
     * lock/unlock dispatching actions and side effects
     */
    lock?: boolean;
    /**
     * persist states on page reloading
     */
    persist?: boolean;
    /**
     * export history of actions in a file
     */
    export?: boolean | 'custom';
    /**
     * import history of actions from a file
     */
    import?: boolean | 'custom';
    /**
     * jump back and forth (time travelling)
     */
    jump?: boolean;
    /**
     * skip (cancel) actions
     */
    skip?: boolean;
    /**
     * drag and drop actions in the history list
     */
    reorder?: boolean;
    /**
     * dispatch custom actions or action creators
     */
    dispatch?: boolean;
    /**
     * generate tests for the selected actions
     */
    test?: boolean;
  };
  /**
   * Set to true or a stacktrace-returning function to record call stack traces for dispatched actions.
   * Defaults to false.
   */
  trace?: boolean | (<A extends Action>(action: A) => string);
  /**
   * The maximum number of stack trace entries to record per action. Defaults to 10.
   */
  traceLimit?: number;
}

export interface Config extends EnhancerOptions {
  type?: string;
}

interface ConnectResponse {
  init: (state: unknown) => void;
  send: (action: Action<string>, state: unknown) => void;
}

interface ReduxDevtoolsExtension {
  (config?: Config): StoreEnhancer;
  connect: (preConfig: Config) => ConnectResponse;
}

export type InferComposedStoreExt<StoreEnhancers> = StoreEnhancers extends [
  infer HeadStoreEnhancer,
  ...infer RestStoreEnhancers,
]
  ? HeadStoreEnhancer extends StoreEnhancer<infer StoreExt>
    ? StoreExt & InferComposedStoreExt<RestStoreEnhancers>
    : never
  : unknown;

export interface ReduxDevtoolsExtensionCompose {
  (
    config: Config,
  ): <StoreEnhancers extends readonly StoreEnhancer<unknown>[]>(
    ...funcs: StoreEnhancers
  ) => StoreEnhancer<InferComposedStoreExt<StoreEnhancers>>;
  <StoreEnhancers extends readonly StoreEnhancer<unknown>[]>(
    ...funcs: StoreEnhancers
  ): StoreEnhancer<InferComposedStoreExt<StoreEnhancers>>;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: ReduxDevtoolsExtension;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: ReduxDevtoolsExtensionCompose;
  }
}

function extensionComposeStub(
  config: Config,
): <StoreEnhancers extends readonly StoreEnhancer<unknown>[]>(
  ...funcs: StoreEnhancers
) => StoreEnhancer<InferComposedStoreExt<StoreEnhancers>>;
function extensionComposeStub<
  StoreEnhancers extends readonly StoreEnhancer<unknown>[],
>(
  ...funcs: StoreEnhancers
): StoreEnhancer<InferComposedStoreExt<StoreEnhancers>>;
function extensionComposeStub(...funcs: [Config] | StoreEnhancer<unknown>[]) {
  if (funcs.length === 0) return undefined;
  if (typeof funcs[0] === 'object') return compose;
  return compose(...(funcs as StoreEnhancer<unknown>[]));
}

export const composeWithDevTools: ReduxDevtoolsExtensionCompose =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : extensionComposeStub;

export const devToolsEnhancer: (options?: EnhancerOptions) => StoreEnhancer =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__
    : function () {
        return function (noop) {
          return noop;
        };
      };

export {
  composeWithDevTools as composeWithDevToolsDevelopmentOnly,
  devToolsEnhancer as devToolsEnhancerDevelopmentOnly,
} from './developmentOnly';
export {
  composeWithDevTools as composeWithDevToolsLogOnly,
  devToolsEnhancer as devToolsEnhancerLogOnly,
} from './logOnly';
export {
  composeWithDevTools as composeWithDevToolsLogOnlyInProduction,
  devToolsEnhancer as devToolsEnhancerLogOnlyInProduction,
} from './logOnlyInProduction';
