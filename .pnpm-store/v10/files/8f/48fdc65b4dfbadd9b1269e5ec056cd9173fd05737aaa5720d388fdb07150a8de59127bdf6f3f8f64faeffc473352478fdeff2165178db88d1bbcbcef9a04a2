Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const types = require('./types.js');
const AttributeNames = require('./enums/AttributeNames.js');
const semanticConventions = require('@opentelemetry/semantic-conventions');

const getMiddlewareMetadata = (context, layer, isRouter, layerPath) => {
  if (isRouter) {
    return {
      attributes: {
        [AttributeNames.AttributeNames.KOA_NAME]: layerPath?.toString(),
        [AttributeNames.AttributeNames.KOA_TYPE]: types.KoaLayerType.ROUTER,
        [semanticConventions.ATTR_HTTP_ROUTE]: layerPath?.toString()
      },
      name: context._matchedRouteName || `router - ${layerPath}`
    };
  } else {
    return {
      attributes: {
        [AttributeNames.AttributeNames.KOA_NAME]: layer.name ?? "middleware",
        [AttributeNames.AttributeNames.KOA_TYPE]: types.KoaLayerType.MIDDLEWARE
      },
      name: `middleware - ${layer.name}`
    };
  }
};
const isLayerIgnored = (type, config) => {
  return !!(Array.isArray(config?.ignoreLayersType) && config?.ignoreLayersType?.includes(type));
};

exports.getMiddlewareMetadata = getMiddlewareMetadata;
exports.isLayerIgnored = isLayerIgnored;
//# sourceMappingURL=utils.js.map
