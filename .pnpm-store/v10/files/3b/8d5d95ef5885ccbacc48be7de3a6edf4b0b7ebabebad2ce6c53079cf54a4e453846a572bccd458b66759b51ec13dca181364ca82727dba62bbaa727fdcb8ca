Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const requestLayerStore = require('./request-layer-store.js');
const types = require('./types.js');
const string = require('../../utils/string.js');

const asErrorAndMessage = (error) => error instanceof Error ? [error, error.message] : [String(error), String(error)];
function isRoutePattern(route) {
  return route.includes(":") || route.includes("*");
}
const getLayerMetadata = (route, layer, layerPath) => {
  if (layer.name === "router") {
    const maybeRouterPath = getRouterPath("", layer);
    const extractedRouterPath = maybeRouterPath ? maybeRouterPath : layerPath || route || "/";
    return {
      attributes: {
        [types.ATTR_EXPRESS_NAME]: extractedRouterPath,
        [types.ATTR_EXPRESS_TYPE]: types.ExpressLayerType_ROUTER
      },
      name: `router - ${extractedRouterPath}`
    };
  } else if (layer.name === "bound dispatch" || layer.name === "handle") {
    return {
      attributes: {
        [types.ATTR_EXPRESS_NAME]: (route || layerPath) ?? "request handler",
        [types.ATTR_EXPRESS_TYPE]: types.ExpressLayerType_REQUEST_HANDLER
      },
      name: `request handler${layer.path ? ` - ${route || layerPath}` : ""}`
    };
  } else {
    return {
      attributes: {
        [types.ATTR_EXPRESS_NAME]: layer.name,
        [types.ATTR_EXPRESS_TYPE]: types.ExpressLayerType_MIDDLEWARE
      },
      name: `middleware - ${layer.name}`
    };
  }
};
const getRouterPath = (path, layer) => {
  const stackLayer = Array.isArray(layer.handle?.stack) ? layer.handle?.stack?.[0] : void 0;
  if (stackLayer?.route?.path) {
    return `${path}${stackLayer.route.path}`;
  }
  if (stackLayer && Array.isArray(stackLayer?.handle?.stack)) {
    return getRouterPath(path, stackLayer);
  }
  return path;
};
const isLayerIgnored = (name, type, config) => {
  if (Array.isArray(config?.ignoreLayersType) && config?.ignoreLayersType?.includes(type)) {
    return true;
  }
  if (!Array.isArray(config?.ignoreLayers)) {
    return false;
  }
  try {
    return string.stringMatchesSomePattern(name, config.ignoreLayers, true);
  } catch {
  }
  return false;
};
function getActualMatchedRoute(req, constructedRoute) {
  const layersStore = requestLayerStore.getStoredLayers(req);
  if (layersStore.length === 0) {
    return void 0;
  }
  if (layersStore.every((path) => path === "/")) {
    return req.originalUrl === "/" ? "/" : void 0;
  }
  if (constructedRoute === "*") {
    return constructedRoute;
  }
  if (constructedRoute.includes("/") && (constructedRoute.includes(",") || constructedRoute.includes("\\") || constructedRoute.includes("*") || constructedRoute.includes("["))) {
    return constructedRoute;
  }
  const normalizedRoute = constructedRoute.startsWith("/") ? constructedRoute : `/${constructedRoute}`;
  const isValidRoute = normalizedRoute.length > 0 && (req.originalUrl === normalizedRoute || req.originalUrl.startsWith(normalizedRoute) || isRoutePattern(normalizedRoute));
  return isValidRoute ? normalizedRoute : void 0;
}
function getConstructedRoute(req) {
  const layersStore = requestLayerStore.getStoredLayers(req);
  let constructedRoute = "";
  for (const path of layersStore) {
    if (path === "/" || path === "/*") {
      continue;
    }
    constructedRoute += !constructedRoute || constructedRoute.endsWith("/") ? path : `/${path}`;
  }
  return constructedRoute.replace(/\/{2,}/g, "/");
}
const getLayerPath = (args) => {
  const firstArg = args[0];
  if (Array.isArray(firstArg)) {
    return firstArg.map((arg) => extractLayerPathSegment(arg) || "").join(",");
  }
  return extractLayerPathSegment(firstArg);
};
const extractLayerPathSegment = (arg) => typeof arg === "string" ? arg : arg instanceof RegExp || typeof arg === "number" ? String(arg) : void 0;
const isExpressWithRouterPrototype = (express) => isExpressRouterPrototype(express?.Router?.prototype);
const isExpressRouterPrototype = (routerProto) => (typeof routerProto === "object" || typeof routerProto === "function") && !!routerProto && "route" in routerProto && typeof routerProto.route === "function";
const isExpressWithoutRouterPrototype = (express) => isExpressRouterPrototype(express.Router) && !isExpressWithRouterPrototype(express);
function getStatusCodeFromResponse(error) {
  const statusCode = error.status || error.statusCode || error.status_code || error.output?.statusCode;
  return statusCode ? parseInt(statusCode, 10) : 500;
}
function defaultShouldHandleError(error) {
  const status = getStatusCodeFromResponse(error);
  return status >= 500;
}

exports.asErrorAndMessage = asErrorAndMessage;
exports.defaultShouldHandleError = defaultShouldHandleError;
exports.getActualMatchedRoute = getActualMatchedRoute;
exports.getConstructedRoute = getConstructedRoute;
exports.getLayerMetadata = getLayerMetadata;
exports.getLayerPath = getLayerPath;
exports.getRouterPath = getRouterPath;
exports.isExpressWithRouterPrototype = isExpressWithRouterPrototype;
exports.isExpressWithoutRouterPrototype = isExpressWithoutRouterPrototype;
exports.isLayerIgnored = isLayerIgnored;
exports.isRoutePattern = isRoutePattern;
//# sourceMappingURL=utils.js.map
