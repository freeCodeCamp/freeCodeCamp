import { debug } from '../../utils/debug-logger.js';
import { captureException } from '../../exports.js';
import { DEBUG_BUILD } from '../../debug-build.js';
import { defaultShouldHandleError, isExpressWithRouterPrototype, isExpressWithoutRouterPrototype, getLayerPath } from './utils.js';
import { wrapMethod } from '../../utils/object.js';
import { patchLayer } from './patch-layer.js';
import { setSDKProcessingMetadata } from './set-sdk-processing-metadata.js';
import { getDefaultExport } from '../../utils/get-default-export.js';

function isLegacyOptions(options) {
  return !!options.express;
}
let didLegacyDeprecationWarning = false;
function deprecationWarning() {
  if (!didLegacyDeprecationWarning) {
    didLegacyDeprecationWarning = true;
    DEBUG_BUILD && debug.warn(
      "[Express] `patchExpressModule(options)` is deprecated. Use `patchExpressModule(moduleExports, getOptions)` instead."
    );
  }
}
function patchExpressModule(optionsOrExports, maybeGetOptions) {
  let getOptions;
  let moduleExports;
  if (!maybeGetOptions && isLegacyOptions(optionsOrExports)) {
    const { express: express2, ...options } = optionsOrExports;
    moduleExports = express2;
    getOptions = () => options;
    deprecationWarning();
  } else if (typeof maybeGetOptions !== "function") {
    throw new TypeError("`patchExpressModule(moduleExports, getOptions)` requires a `getOptions` callback");
  } else {
    getOptions = maybeGetOptions;
    moduleExports = optionsOrExports;
  }
  const express = getDefaultExport(moduleExports);
  const routerProto = isExpressWithRouterPrototype(express) ? express.Router.prototype : isExpressWithoutRouterPrototype(express) ? express.Router : void 0;
  if (!routerProto) {
    throw new TypeError("no valid Express route function to instrument");
  }
  const originalRouteMethod = routerProto.route;
  try {
    wrapMethod(
      routerProto,
      "route",
      function routeTrace(...args) {
        const route = originalRouteMethod.apply(this, args);
        const layer = this.stack[this.stack.length - 1];
        patchLayer(getOptions, layer, getLayerPath(args));
        return route;
      }
    );
  } catch (e) {
    DEBUG_BUILD && debug.error("Failed to patch express route method:", e);
  }
  const originalRouterUse = routerProto.use;
  try {
    wrapMethod(
      routerProto,
      "use",
      function useTrace(...args) {
        const route = originalRouterUse.apply(this, args);
        const layer = this.stack[this.stack.length - 1];
        if (!layer) {
          return route;
        }
        patchLayer(getOptions, layer, getLayerPath(args));
        return route;
      }
    );
  } catch (e) {
    DEBUG_BUILD && debug.error("Failed to patch express use method:", e);
  }
  const { application } = express;
  const originalApplicationUse = application.use;
  try {
    wrapMethod(
      application,
      "use",
      function appUseTrace(...args) {
        const route = originalApplicationUse.apply(this, args);
        const router = isExpressWithRouterPrototype(express) ? this.router : this._router;
        if (router) {
          const layer = router.stack[router.stack.length - 1];
          if (layer) {
            patchLayer(getOptions, layer, getLayerPath(args));
          }
        }
        return route;
      }
    );
  } catch (e) {
    DEBUG_BUILD && debug.error("Failed to patch express application.use method:", e);
  }
  return express;
}
function expressErrorHandler(options) {
  return function sentryErrorMiddleware(error, request, res, next) {
    setSDKProcessingMetadata(request);
    const shouldHandleError = options?.shouldHandleError || defaultShouldHandleError;
    if (shouldHandleError(error)) {
      const eventId = captureException(error, {
        mechanism: { type: "auto.middleware.express", handled: false }
      });
      res.sentry = eventId;
    }
    next(error);
  };
}
function setupExpressErrorHandler(app, options) {
  app.use(expressRequestHandler());
  app.use(expressErrorHandler(options));
}
function expressRequestHandler() {
  return function sentryRequestMiddleware(request, _res, next) {
    setSDKProcessingMetadata(request);
    next();
  };
}

export { expressErrorHandler, patchExpressModule, setupExpressErrorHandler };
//# sourceMappingURL=index.js.map
