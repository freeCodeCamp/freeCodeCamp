Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugLogger = require('../../utils/debug-logger.js');
const exports$1 = require('../../exports.js');
const debugBuild = require('../../debug-build.js');
const utils = require('./utils.js');
const object = require('../../utils/object.js');
const patchLayer = require('./patch-layer.js');
const setSdkProcessingMetadata = require('./set-sdk-processing-metadata.js');
const getDefaultExport = require('../../utils/get-default-export.js');

function isLegacyOptions(options) {
  return !!options.express;
}
let didLegacyDeprecationWarning = false;
function deprecationWarning() {
  if (!didLegacyDeprecationWarning) {
    didLegacyDeprecationWarning = true;
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn(
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
  const express = getDefaultExport.getDefaultExport(moduleExports);
  const routerProto = utils.isExpressWithRouterPrototype(express) ? express.Router.prototype : utils.isExpressWithoutRouterPrototype(express) ? express.Router : void 0;
  if (!routerProto) {
    throw new TypeError("no valid Express route function to instrument");
  }
  const originalRouteMethod = routerProto.route;
  try {
    object.wrapMethod(
      routerProto,
      "route",
      function routeTrace(...args) {
        const route = originalRouteMethod.apply(this, args);
        const layer = this.stack[this.stack.length - 1];
        patchLayer.patchLayer(getOptions, layer, utils.getLayerPath(args));
        return route;
      }
    );
  } catch (e) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.error("Failed to patch express route method:", e);
  }
  const originalRouterUse = routerProto.use;
  try {
    object.wrapMethod(
      routerProto,
      "use",
      function useTrace(...args) {
        const route = originalRouterUse.apply(this, args);
        const layer = this.stack[this.stack.length - 1];
        if (!layer) {
          return route;
        }
        patchLayer.patchLayer(getOptions, layer, utils.getLayerPath(args));
        return route;
      }
    );
  } catch (e) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.error("Failed to patch express use method:", e);
  }
  const { application } = express;
  const originalApplicationUse = application.use;
  try {
    object.wrapMethod(
      application,
      "use",
      function appUseTrace(...args) {
        const route = originalApplicationUse.apply(this, args);
        const router = utils.isExpressWithRouterPrototype(express) ? this.router : this._router;
        if (router) {
          const layer = router.stack[router.stack.length - 1];
          if (layer) {
            patchLayer.patchLayer(getOptions, layer, utils.getLayerPath(args));
          }
        }
        return route;
      }
    );
  } catch (e) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.error("Failed to patch express application.use method:", e);
  }
  return express;
}
function expressErrorHandler(options) {
  return function sentryErrorMiddleware(error, request, res, next) {
    setSdkProcessingMetadata.setSDKProcessingMetadata(request);
    const shouldHandleError = options?.shouldHandleError || utils.defaultShouldHandleError;
    if (shouldHandleError(error)) {
      const eventId = exports$1.captureException(error, {
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
    setSdkProcessingMetadata.setSDKProcessingMetadata(request);
    next();
  };
}

exports.expressErrorHandler = expressErrorHandler;
exports.patchExpressModule = patchExpressModule;
exports.setupExpressErrorHandler = setupExpressErrorHandler;
//# sourceMappingURL=index.js.map
