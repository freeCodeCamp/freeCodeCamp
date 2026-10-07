import type { StoreEnhancer } from 'redux';
import type { Config, EnhancerOptions, InferComposedStoreExt } from './index';
export declare function composeWithDevTools(config: Config): <StoreEnhancers extends readonly StoreEnhancer<unknown>[]>(...funcs: StoreEnhancers) => StoreEnhancer<InferComposedStoreExt<StoreEnhancers>>;
export declare function composeWithDevTools<StoreEnhancers extends readonly StoreEnhancer<unknown>[]>(...funcs: StoreEnhancers): StoreEnhancer<InferComposedStoreExt<StoreEnhancers>>;
export declare const devToolsEnhancer: (options?: EnhancerOptions) => StoreEnhancer;
