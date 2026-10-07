import { DEBUG_BUILD } from '../../debug-build.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../../semanticAttributes.js';
import { debug } from '../../utils/debug-logger.js';
import { getActiveSpan } from '../../utils/spanUtils.js';
import { SPAN_STATUS_ERROR } from '../../tracing/spanstatus.js';
import { getOriginalFunction, markFunctionWrapped } from '../../utils/object.js';
import { getIsolationScope } from '../../currentScopes.js';
import { startSpanManual, withActiveSpan } from '../../tracing/trace.js';
import { storeLayer, getStoredLayers } from './request-layer-store.js';
import { ATTR_EXPRESS_NAME, ATTR_EXPRESS_TYPE, ATTR_HTTP_ROUTE, ExpressLayerType_ROUTER } from './types.js';
import { getConstructedRoute, getActualMatchedRoute, getLayerMetadata, isLayerIgnored, asErrorAndMessage } from './utils.js';
import { getDefaultIsolationScope } from '../../defaultScopes.js';
import { setSDKProcessingMetadata } from './set-sdk-processing-metadata.js';

function patchLayer(getOptions, maybeLayer, layerPath) {
  if (!maybeLayer?.handle) {
    return;
  }
  const layer = maybeLayer;
  const layerHandleOriginal = layer.handle;
  if (getOriginalFunction(layerHandleOriginal)) {
    return;
  }
  if (layerHandleOriginal.length === 4) {
    return;
  }
  function layerHandlePatched(req, res, ...otherArgs) {
    const options = getOptions();
    setSDKProcessingMetadata(req);
    const parentSpan = getActiveSpan();
    if (!parentSpan) {
      return layerHandleOriginal.apply(this, [req, res, ...otherArgs]);
    }
    if (layerPath) {
      storeLayer(req, layerPath);
    }
    const storedLayers = getStoredLayers(req);
    const isLayerPathStored = !!layerPath;
    const constructedRoute = getConstructedRoute(req);
    const actualMatchedRoute = getActualMatchedRoute(req, constructedRoute);
    options.onRouteResolved?.(actualMatchedRoute);
    const metadata = getLayerMetadata(constructedRoute, layer, layerPath);
    const name = metadata.attributes[ATTR_EXPRESS_NAME];
    const type = metadata.attributes[ATTR_EXPRESS_TYPE];
    const attributes = Object.assign(metadata.attributes, {
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.express",
      [SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.express`
    });
    if (actualMatchedRoute) {
      attributes[ATTR_HTTP_ROUTE] = actualMatchedRoute;
    }
    if (isLayerIgnored(metadata.attributes[ATTR_EXPRESS_NAME], type, options)) {
      if (isLayerPathStored) {
        storedLayers.pop();
      }
      return layerHandleOriginal.apply(this, [req, res, ...otherArgs]);
    }
    const currentScope = getIsolationScope();
    if (currentScope !== getDefaultIsolationScope()) {
      if (type === "request_handler") {
        const method = req.method ? req.method.toUpperCase() : "GET";
        currentScope.setTransactionName(`${method} ${constructedRoute}`);
      }
    } else {
      DEBUG_BUILD && debug.warn("Isolation scope is still default isolation scope - skipping setting transactionName");
    }
    return startSpanManual({ name, attributes }, (span) => {
      let spanHasEnded = false;
      if (metadata.attributes[ATTR_EXPRESS_TYPE] === ExpressLayerType_ROUTER) {
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
            const [_, message] = asErrorAndMessage(maybeError);
            span.setStatus({
              code: SPAN_STATUS_ERROR,
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
          return withActiveSpan(parentSpan, () => callback.apply(this, args));
        };
        break;
      }
      try {
        return layerHandleOriginal.apply(this, [req, res, ...otherArgs]);
      } catch (anyError) {
        const [_, message] = asErrorAndMessage(anyError);
        span.setStatus({
          code: SPAN_STATUS_ERROR,
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
  markFunctionWrapped(layerHandlePatched, layerHandleOriginal);
  Object.defineProperty(layer, "handle", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: layerHandlePatched
  });
}

export { patchLayer };
//# sourceMappingURL=patch-layer.js.map
