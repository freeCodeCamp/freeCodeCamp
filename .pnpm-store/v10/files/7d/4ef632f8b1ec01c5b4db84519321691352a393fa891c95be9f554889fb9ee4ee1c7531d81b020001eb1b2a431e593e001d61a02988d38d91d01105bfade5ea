import { compose } from 'redux';
import type { StoreEnhancer } from 'redux';
import * as logOnly from './logOnly';
import type {
  Config,
  EnhancerOptions,
  InferComposedStoreExt,
  ReduxDevtoolsExtensionCompose,
} from './index';

declare const process: {
  env: {
    NODE_ENV: string;
  };
};

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
  process.env.NODE_ENV === 'production'
    ? logOnly.composeWithDevTools
    : typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : extensionComposeStub;

export const devToolsEnhancer: (options?: EnhancerOptions) => StoreEnhancer =
  process.env.NODE_ENV === 'production'
    ? logOnly.devToolsEnhancer
    : typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__
      : function () {
          return function (noop) {
            return noop;
          };
        };
