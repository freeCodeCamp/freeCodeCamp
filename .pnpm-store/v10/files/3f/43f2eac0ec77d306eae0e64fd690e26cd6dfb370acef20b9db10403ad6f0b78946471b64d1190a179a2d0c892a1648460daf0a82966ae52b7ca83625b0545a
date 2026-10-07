import assign from './utils/assign';
import { compose } from 'redux';
import type {
  Action,
  Dispatch,
  PreloadedState,
  Reducer,
  StoreEnhancer,
} from 'redux';
import type { Config, EnhancerOptions, InferComposedStoreExt } from './index';

function enhancer(options?: EnhancerOptions): StoreEnhancer {
  const config: Config = options || {};
  config.features = { pause: true, export: true, test: true };
  config.type = 'redux';
  if (config.autoPause === undefined) config.autoPause = true;
  if (config.latency === undefined) config.latency = 500;

  return function (createStore) {
    return function <S, A extends Action<string>>(
      reducer: Reducer<S, A>,
      preloadedState: PreloadedState<S> | undefined,
    ) {
      const store = createStore(reducer, preloadedState);
      const origDispatch = store.dispatch;

      const devTools = window.__REDUX_DEVTOOLS_EXTENSION__!.connect(config);
      devTools.init(store.getState());

      const dispatch: Dispatch<A> = function (action) {
        const r = origDispatch(action);
        devTools.send(action, store.getState());
        return r;
      };

      if (Object.assign) return Object.assign(store, { dispatch: dispatch });
      return assign(store, 'dispatch', dispatch);
    };
  };
}

function composeWithEnhancer(config?: EnhancerOptions) {
  return function (...funcs: StoreEnhancer<unknown>[]) {
    return compose(compose(...funcs), enhancer(config));
  };
}

export function composeWithDevTools(
  config: Config,
): <StoreEnhancers extends readonly StoreEnhancer<unknown>[]>(
  ...funcs: StoreEnhancers
) => StoreEnhancer<InferComposedStoreExt<StoreEnhancers>>;
export function composeWithDevTools<
  StoreEnhancers extends readonly StoreEnhancer<unknown>[],
>(
  ...funcs: StoreEnhancers
): StoreEnhancer<InferComposedStoreExt<StoreEnhancers>>;
export function composeWithDevTools(
  ...funcs: [Config] | StoreEnhancer<unknown>[]
) {
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    if (funcs.length === 0) return enhancer();
    if (typeof funcs[0] === 'object') return composeWithEnhancer(funcs[0]);
    return composeWithEnhancer()(...(funcs as StoreEnhancer<unknown>[]));
  }

  if (funcs.length === 0) return undefined;
  if (typeof funcs[0] === 'object') return compose;
  return compose(...(funcs as StoreEnhancer[]));
}

export const devToolsEnhancer: (options?: EnhancerOptions) => StoreEnhancer =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? enhancer
    : function () {
        return function (noop) {
          return noop;
        };
      };
