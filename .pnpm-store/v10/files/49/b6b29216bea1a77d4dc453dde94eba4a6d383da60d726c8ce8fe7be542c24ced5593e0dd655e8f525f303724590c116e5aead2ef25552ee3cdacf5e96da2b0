Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../../debug-build.js');
const semanticAttributes = require('../../semanticAttributes.js');
const debugLogger = require('../../utils/debug-logger.js');
const spanUtils = require('../../utils/spanUtils.js');
const spanstatus = require('../../tracing/spanstatus.js');
const object = require('../../utils/object.js');
const currentScopes = require('../../currentScopes.js');
const trace = require('../../tracing/trace.js');
const requestLayerStore = require('./request-layer-store.js');
const types = require('./types.js');
const utils = require('./utils.js');
const defaultScopes = require('../../defaultScopes.js');
const setSdkProcessingMetadata = require('./set-sdk-processing-metadata.js');

function patchLayer(getOptions, maybeLayer, layerPath) {
  if (!maybeLayer?.handle) {
    return;
  }
  const layer = maybeLayer;
  const layerHandleOriginal = layer.handle;
  if (object.getOriginalFunction(layerHandleOriginal)) {
    return;
  }
  if (layerHandleOriginal.length === 4) {
    return;
  }
  function layerHandlePatched(req, res, ...otherArgs) {
    const options = getOptions();
    setSdkProcessingMetadata.setSDKProcessingMetadata(req);
    const parentSpan = spanUtils.getActiveSpan();
    if (!parentSpan) {
      return layerHandleOriginal.apply(this, [req, res, ...otherArgs]);
    }
    if (layerPath) {
      requestLayerStore.storeLayer(req, layerPath);
    }
    const storedLayers = requestLayerStore.getStoredLayers(req);
    const isLayerPathStored = !!layerPath;
    const constructedRoute = utils.getConstructedRoute(req);
    const actualMatchedRoute = utils.getActualMatchedRoute(req, constructedRoute);
    options.onRouteResolved?.(actualMatchedRoute);
    const metadata = utils.getLayerMetadata(constructedRoute, layer, layerPath);
    const name = metadata.attributes[types.ATTR_EXPRESS_NAME];
    const type = metadata.attributes[types.ATTR_EXPRESS_TYPE];
    const attributes = Object.assign(metadata.attributes, {
      [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.express",
      [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.express`
    });
    if (actualMatchedRoute) {
      attributes[types.ATTR_HTTP_ROUTE] = actualMatchedRoute;
    }
    if (utils.isLayerIgnored(metadata.attributes[types.ATTR_EXPRESS_NAME], type, options)) {
      if (isLayerPathStored) {
        storedLayers.pop();
      }
      return layerHandleOriginal.apply(this, [req, res, ...otherArgs]);
    }
    const currentScope = currentScopes.getIsolationScope();
    if (currentScope !== defaultScopes.getDefaultIsolationScope()) {
      if (type === "request_handler") {
        const method = req.method ? req.method.toUpperCase() : "GET";
        currentScope.setTransactionName(`${method} ${constructedRoute}`);
      }
    } else {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Isolation scope is still default isolation scope - skipping setting transactionName");
    }
    return trace.startSpanManual({ name, attributes }, (span) => {
      let spanHasEnded = false;
      if (metadata.attributes[types.ATTR_EXPRESS_TYPE] === types.ExpressLayerType_ROUTER) {
        span.end();
        spanHasEnded = true;
      }
      const onResponseFinish = () => {
        if (!spanHasEnded) {
          spanHasEnded = true;
          span.end();
        }
      };
      for (let i = 0; i < otherArgs.length; i++) {
        const callback = otherArgs[i];
        if (typeof callback !== "function") {
          continue;
        }
        otherArgs[i] = function(...args) {
          const maybeError = args[0];
          const isError = !!maybeError && maybeError !== "route" && maybeError !== "router";
          if (!spanHasEnded && isError) {
            const [_, message] = utils.asErrorAndMessage(maybeError);
            span.setStatus({
              code: spanstatus.SPAN_STATUS_ERROR,
              message
            });
          }
          if (!spanHasEnded) {
            spanHasEnded = true;
            res.removeListener("finish", onResponseFinish);
            span.end();
          }
          if (!(req.route && isError) && isLayerPathStored) {
            storedLayers.pop();
          }
          return trace.withActiveSpan(parentSpan, () => callback.apply(this, args));
        };
        break;
      }
      try {
        return layerHandleOriginal.apply(this, [req, res, ...otherArgs]);
      } catch (anyError) {
        const [_, message] = utils.asErrorAndMessage(anyError);
        span.setStatus({
          code: spanstatus.SPAN_STATUS_ERROR,
          message
        });
        throw anyError;
      } finally {
        if (!spanHasEnded) {
          res.once("finish", onResponseFinish);
        }
      }
    });
  }
  for (const key in layerHandleOriginal) {
    if (key in layerHandlePatched) {
      continue;
    }
    Object.defineProperty(layerHandlePatched, key, {
      get() {
        return layerHandleOriginal[key];
      },
      set(value) {
        layerHandleOriginal[key] = value;
      }
    });
  }
  object.markFunctionWrapped(layerHandlePatched, layerHandleOriginal);
  Object.defineProperty(layer, "handle", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: layerHandlePatched
  });
}

exports.patchLayer = patchLayer;
//# sourceMappingURL=patch-layer.js.map
