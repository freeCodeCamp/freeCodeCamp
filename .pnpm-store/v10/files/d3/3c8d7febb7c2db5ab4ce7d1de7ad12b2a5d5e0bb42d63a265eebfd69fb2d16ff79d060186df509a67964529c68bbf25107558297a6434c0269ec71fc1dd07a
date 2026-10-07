import { context } from '@opentelemetry/api';
import { getRPCMetadata, RPCType } from '@opentelemetry/core';
import { ConnectTypes, ConnectNames, AttributeNames } from './enums/AttributeNames.js';
import { SDK_VERSION } from '@sentry/core';
import { InstrumentationBase, InstrumentationNodeModuleDefinition, isWrapped } from '@opentelemetry/instrumentation';
import { ATTR_HTTP_ROUTE } from '@opentelemetry/semantic-conventions';
import { addNewStackLayer, replaceCurrentStackRoute, generateRoute } from './utils.js';

const PACKAGE_NAME = "@sentry/instrumentation-connect";
const ANONYMOUS_NAME = "anonymous";
class ConnectInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, config);
  }
  init() {
    return [
      new InstrumentationNodeModuleDefinition("connect", [">=3.0.0 <4"], (moduleExports) => {
        return this._patchConstructor(moduleExports);
      })
    ];
  }
  _patchApp(patchedApp) {
    if (!isWrapped(patchedApp.use)) {
      this._wrap(patchedApp, "use", this._patchUse.bind(this));
    }
    if (!isWrapped(patchedApp.handle)) {
      this._wrap(patchedApp, "handle", this._patchHandle.bind(this));
    }
  }
  _patchConstructor(original) {
    const instrumentation = this;
    return function(...args) {
      const app = original.apply(this, args);
      instrumentation._patchApp(app);
      return app;
    };
  }
  _patchNext(next, finishSpan) {
    return function nextFunction(err) {
      const result = next.apply(this, [err]);
      finishSpan();
      return result;
    };
  }
  _startSpan(routeName, middleWare) {
    let connectType;
    let connectName;
    let connectTypeName;
    if (routeName) {
      connectType = ConnectTypes.REQUEST_HANDLER;
      connectTypeName = ConnectNames.REQUEST_HANDLER;
      connectName = routeName;
    } else {
      connectType = ConnectTypes.MIDDLEWARE;
      connectTypeName = ConnectNames.MIDDLEWARE;
      connectName = middleWare.name || ANONYMOUS_NAME;
    }
    const spanName = `${connectTypeName} - ${connectName}`;
    const options = {
      attributes: {
        [ATTR_HTTP_ROUTE]: routeName.length > 0 ? routeName : "/",
        [AttributeNames.CONNECT_TYPE]: connectType,
        [AttributeNames.CONNECT_NAME]: connectName
      }
    };
    return this.tracer.startSpan(spanName, options);
  }
  _patchMiddleware(routeName, middleWare) {
    const instrumentation = this;
    const isErrorMiddleware = middleWare.length === 4;
    function patchedMiddleware() {
      if (!instrumentation.isEnabled()) {
        return middleWare.apply(this, arguments);
      }
      const [reqArgIdx, resArgIdx, nextArgIdx] = isErrorMiddleware ? [1, 2, 3] : [0, 1, 2];
      const req = arguments[reqArgIdx];
      const res = arguments[resArgIdx];
      const next = arguments[nextArgIdx];
      replaceCurrentStackRoute(req, routeName);
      const rpcMetadata = getRPCMetadata(context.active());
      if (routeName && rpcMetadata?.type === RPCType.HTTP) {
        rpcMetadata.route = generateRoute(req);
      }
      let spanName = "";
      if (routeName) {
        spanName = `request handler - ${routeName}`;
      } else {
        spanName = `middleware - ${middleWare.name || ANONYMOUS_NAME}`;
      }
      const span = instrumentation._startSpan(routeName, middleWare);
      instrumentation._diag.debug("start span", spanName);
      let spanFinished = false;
      function finishSpan() {
        if (!spanFinished) {
          spanFinished = true;
          instrumentation._diag.debug(`finishing span ${span.name}`);
          span.end();
        } else {
          instrumentation._diag.debug(`span ${span.name} - already finished`);
        }
        res.removeListener("close", finishSpan);
      }
      res.addListener("close", finishSpan);
      arguments[nextArgIdx] = instrumentation._patchNext(next, finishSpan);
      return middleWare.apply(this, arguments);
    }
    Object.defineProperty(patchedMiddleware, "length", {
      value: middleWare.length,
      writable: false,
      configurable: true
    });
    return patchedMiddleware;
  }
  _patchUse(original) {
    const instrumentation = this;
    return function(...args) {
      const middleWare = args[args.length - 1];
      const routeName = args[args.length - 2] || "";
      args[args.length - 1] = instrumentation._patchMiddleware(routeName, middleWare);
      return original.apply(this, args);
    };
  }
  _patchHandle(original) {
    const instrumentation = this;
    return function() {
      const [reqIdx, outIdx] = [0, 2];
      const req = arguments[reqIdx];
      const out = arguments[outIdx];
      const completeStack = addNewStackLayer(req);
      if (typeof out === "function") {
        arguments[outIdx] = instrumentation._patchOut(out, completeStack);
      }
      return original.apply(this, arguments);
    };
  }
  _patchOut(out, completeStack) {
    return function nextFunction(...args) {
      completeStack();
      return Reflect.apply(out, this, args);
    };
  }
}

export { ANONYMOUS_NAME, ConnectInstrumentation };
//# sourceMappingURL=instrumentation.js.map
