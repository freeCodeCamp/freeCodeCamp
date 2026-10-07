import { KoaLayerType, KoaInstrumentationConfig } from './types';
import { KoaContext, KoaMiddleware } from './internal-types';
import { Attributes } from '@opentelemetry/api';
export declare const getMiddlewareMetadata: (context: KoaContext, layer: KoaMiddleware, isRouter: boolean, layerPath?: string | RegExp) => {
    attributes: Attributes;
    name: string;
};
/**
 * Check whether the given request is ignored by configuration
 * @param [list] List of ignore patterns
 * @param [onException] callback for doing something when an exception has
 *     occurred
 */
export declare const isLayerIgnored: (type: KoaLayerType, config?: KoaInstrumentationConfig) => boolean;
//# sourceMappingURL=utils.d.ts.map