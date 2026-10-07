import { KoaLayerType } from './types.js';
import { AttributeNames } from './enums/AttributeNames.js';
import { ATTR_HTTP_ROUTE } from '@opentelemetry/semantic-conventions';

const getMiddlewareMetadata = (context, layer, isRouter, layerPath) => {
  if (isRouter) {
    return {
      attributes: {
        [AttributeNames.KOA_NAME]: layerPath?.toString(),
        [AttributeNames.KOA_TYPE]: KoaLayerType.ROUTER,
        [ATTR_HTTP_ROUTE]: layerPath?.toString()
      },
      name: context._matchedRouteName || `router - ${layerPath}`
    };
  } else {
    return {
      attributes: {
        [AttributeNames.KOA_NAME]: layer.name ?? "middleware",
        [AttributeNames.KOA_TYPE]: KoaLayerType.MIDDLEWARE
      },
      name: `middleware - ${layer.name}`
    };
  }
};
const isLayerIgnored = (type, config) => {
  return !!(Array.isArray(config?.ignoreLayersType) && config?.ignoreLayersType?.includes(type));
};

export { getMiddlewareMetadata, isLayerIgnored };
//# sourceMappingURL=utils.js.map
