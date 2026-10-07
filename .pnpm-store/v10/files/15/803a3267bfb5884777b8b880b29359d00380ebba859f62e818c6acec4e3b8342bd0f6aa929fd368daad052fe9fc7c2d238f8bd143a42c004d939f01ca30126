import * as api from '@opentelemetry/api';
import { InstrumentationBase, InstrumentationNodeModuleDefinition, isWrapped, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { KoaLayerType } from './types.js';
import { SDK_VERSION } from '@sentry/core';
import { isLayerIgnored, getMiddlewareMetadata } from './utils.js';
import { getRPCMetadata, RPCType } from '@opentelemetry/core';
import { kLayerPatched } from './internal-types.js';

const PACKAGE_NAME = "@sentry/instrumentation-koa";
class KoaInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, config);
  }
  init() {
    return new InstrumentationNodeModuleDefinition(
      "koa",
      [">=2.0.0 <4"],
      (module) => {
        const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
        if (moduleExports == null) {
          return moduleExports;
        }
        if (isWrapped(moduleExports.prototype.use)) {
          this._unwrap(moduleExports.prototype, "use");
        }
        this._wrap(moduleExports.prototype, "use", this._getKoaUsePatch.bind(this));
        return module;
      },
      (module) => {
        const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
        if (isWrapped(moduleExports.prototype.use)) {
          this._unwrap(moduleExports.prototype, "use");
        }
      }
    );
  }
  /**
   * Patches the Koa.use function in order to instrument each original
   * middleware layer which is introduced
   * @param {KoaMiddleware} middleware - the original middleware function
   */
  _getKoaUsePatch(original) {
    const plugin = this;
    return function use(middlewareFunction) {
      let patchedFunction;
      if (middlewareFunction.router) {
        patchedFunction = plugin._patchRouterDispatch(middlewareFunction);
      } else {
        patchedFunction = plugin._patchLayer(middlewareFunction, false);
      }
      return original.apply(this, [patchedFunction]);
    };
  }
  /**
   * Patches the dispatch function used by @koa/router. This function
   * goes through each routed middleware and adds instrumentation via a call
   * to the @function _patchLayer function.
   * @param {KoaMiddleware} dispatchLayer - the original dispatch function which dispatches
   * routed middleware
   */
  _patchRouterDispatch(dispatchLayer) {
    api.diag.debug("Patching @koa/router dispatch");
    const router = dispatchLayer.router;
    const routesStack = router?.stack ?? [];
    for (const pathLayer of routesStack) {
      const path = pathLayer.path;
      const pathStack = pathLayer.stack;
      for (let j = 0; j < pathStack.length; j++) {
        const routedMiddleware = pathStack[j];
        pathStack[j] = this._patchLayer(routedMiddleware, true, path);
      }
    }
    return dispatchLayer;
  }
  /**
   * Patches each individual @param middlewareLayer function in order to create the
   * span and propagate context. It does not create spans when there is no parent span.
   * @param {KoaMiddleware} middlewareLayer - the original middleware function.
   * @param {boolean} isRouter - tracks whether the original middleware function
   * was dispatched by the router originally
   * @param {string?} layerPath - if present, provides additional data from the
   * router about the routed path which the middleware is attached to
   */
  _patchLayer(middlewareLayer, isRouter, layerPath) {
    const layerType = isRouter ? KoaLayerType.ROUTER : KoaLayerType.MIDDLEWARE;
    if (middlewareLayer[kLayerPatched] === true || isLayerIgnored(layerType, this.getConfig())) return middlewareLayer;
    if (middlewareLayer.constructor.name === "GeneratorFunction" || middlewareLayer.constructor.name === "AsyncGeneratorFunction") {
      api.diag.debug("ignoring generator-based Koa middleware layer");
      return middlewareLayer;
    }
    middlewareLayer[kLayerPatched] = true;
    api.diag.debug("patching Koa middleware layer");
    return async (context, next) => {
      const parent = api.trace.getSpan(api.context.active());
      if (parent === void 0) {
        return middlewareLayer(context, next);
      }
      const metadata = getMiddlewareMetadata(context, middlewareLayer, isRouter, layerPath);
      const span = this.tracer.startSpan(metadata.name, {
        attributes: metadata.attributes
      });
      const rpcMetadata = getRPCMetadata(api.context.active());
      if (rpcMetadata?.type === RPCType.HTTP && context._matchedRoute) {
        rpcMetadata.route = context._matchedRoute.toString();
      }
      const { requestHook } = this.getConfig();
      if (requestHook) {
        safeExecuteInTheMiddle(
          () => requestHook(span, {
            context,
            middlewareLayer,
            layerType
          }),
          (e) => {
            if (e) {
              api.diag.error("koa instrumentation: request hook failed", e);
            }
          },
          true
        );
      }
      const newContext = api.trace.setSpan(api.context.active(), span);
      return api.context.with(newContext, async () => {
        try {
          return await middlewareLayer(context, next);
        } catch (err) {
          span.recordException(err);
          throw err;
        } finally {
          span.end();
        }
      });
    };
  }
}

export { KoaInstrumentation };
//# sourceMappingURL=instrumentation.js.map
