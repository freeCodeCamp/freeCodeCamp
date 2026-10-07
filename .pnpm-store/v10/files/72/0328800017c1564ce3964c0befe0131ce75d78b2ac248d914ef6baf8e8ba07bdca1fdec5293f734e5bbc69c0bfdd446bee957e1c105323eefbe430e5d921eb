Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('@opentelemetry/instrumentation');
const api = require('@opentelemetry/api');
const core = require('@sentry/core');

const MODULE_NAME = "dataloader";
const PACKAGE_NAME = "@sentry/instrumentation-dataloader";
function extractModuleExports(module) {
  return module[Symbol.toStringTag] === "Module" ? module.default : module;
}
class DataloaderInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, core.SDK_VERSION, config);
  }
  init() {
    return [
      new instrumentation.InstrumentationNodeModuleDefinition(
        MODULE_NAME,
        [">=2.0.0 <3"],
        (module) => {
          const dataloader = extractModuleExports(module);
          this._patchLoad(dataloader.prototype);
          this._patchLoadMany(dataloader.prototype);
          this._patchPrime(dataloader.prototype);
          this._patchClear(dataloader.prototype);
          this._patchClearAll(dataloader.prototype);
          return this._getPatchedConstructor(dataloader);
        },
        (module) => {
          const dataloader = extractModuleExports(module);
          ["load", "loadMany", "prime", "clear", "clearAll"].forEach((method) => {
            if (instrumentation.isWrapped(dataloader.prototype[method])) {
              this._unwrap(dataloader.prototype, method);
            }
          });
        }
      )
    ];
  }
  shouldCreateSpans() {
    const config = this.getConfig();
    const hasParentSpan = api.trace.getSpan(api.context.active()) !== void 0;
    return hasParentSpan || !config.requireParentSpan;
  }
  getSpanName(dataloader, operation) {
    const dataloaderName = dataloader.name;
    if (dataloaderName === void 0 || dataloaderName === null) {
      return `${MODULE_NAME}.${operation}`;
    }
    return `${MODULE_NAME}.${operation} ${dataloaderName}`;
  }
  _wrapBatchLoadFn(batchLoadFn) {
    const instrumentation = this;
    return function patchedBatchLoadFn(...args) {
      if (!instrumentation.isEnabled() || !instrumentation.shouldCreateSpans()) {
        return batchLoadFn.call(this, ...args);
      }
      const parent = api.context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "batch"),
        { links: this._batch?.spanLinks },
        parent
      );
      return api.context.with(api.trace.setSpan(parent, span), () => {
        return batchLoadFn.apply(this, args).then((value) => {
          span.end();
          return value;
        }).catch((err) => {
          span.recordException(err);
          span.setStatus({
            code: api.SpanStatusCode.ERROR,
            message: err.message
          });
          span.end();
          throw err;
        });
      });
    };
  }
  _getPatchedConstructor(constructor) {
    const instrumentation$1 = this;
    const prototype = constructor.prototype;
    if (!instrumentation$1.isEnabled()) {
      return constructor;
    }
    function PatchedDataloader(...args) {
      if (typeof args[0] === "function") {
        if (instrumentation.isWrapped(args[0])) {
          instrumentation$1._unwrap(args, 0);
        }
        args[0] = instrumentation$1._wrapBatchLoadFn(args[0]);
      }
      return constructor.apply(this, args);
    }
    PatchedDataloader.prototype = prototype;
    return PatchedDataloader;
  }
  _patchLoad(proto) {
    if (instrumentation.isWrapped(proto.load)) {
      this._unwrap(proto, "load");
    }
    this._wrap(proto, "load", this._getPatchedLoad.bind(this));
  }
  _getPatchedLoad(original) {
    const instrumentation = this;
    return function patchedLoad(...args) {
      if (!instrumentation.shouldCreateSpans()) {
        return original.call(this, ...args);
      }
      const parent = api.context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "load"),
        { kind: api.SpanKind.CLIENT },
        parent
      );
      return api.context.with(api.trace.setSpan(parent, span), () => {
        const result = original.call(this, ...args).then((value) => {
          span.end();
          return value;
        }).catch((err) => {
          span.recordException(err);
          span.setStatus({
            code: api.SpanStatusCode.ERROR,
            message: err.message
          });
          span.end();
          throw err;
        });
        const loader = this;
        if (loader._batch) {
          if (!loader._batch.spanLinks) {
            loader._batch.spanLinks = [];
          }
          loader._batch.spanLinks.push({ context: span.spanContext() });
        }
        return result;
      });
    };
  }
  _patchLoadMany(proto) {
    if (instrumentation.isWrapped(proto.loadMany)) {
      this._unwrap(proto, "loadMany");
    }
    this._wrap(proto, "loadMany", this._getPatchedLoadMany.bind(this));
  }
  _getPatchedLoadMany(original) {
    const instrumentation = this;
    return function patchedLoadMany(...args) {
      if (!instrumentation.shouldCreateSpans()) {
        return original.call(this, ...args);
      }
      const parent = api.context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "loadMany"),
        { kind: api.SpanKind.CLIENT },
        parent
      );
      return api.context.with(api.trace.setSpan(parent, span), () => {
        return original.call(this, ...args).then((value) => {
          span.end();
          return value;
        });
      });
    };
  }
  _patchPrime(proto) {
    if (instrumentation.isWrapped(proto.prime)) {
      this._unwrap(proto, "prime");
    }
    this._wrap(proto, "prime", this._getPatchedPrime.bind(this));
  }
  _getPatchedPrime(original) {
    const instrumentation = this;
    return function patchedPrime(...args) {
      if (!instrumentation.shouldCreateSpans()) {
        return original.call(this, ...args);
      }
      const parent = api.context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "prime"),
        { kind: api.SpanKind.CLIENT },
        parent
      );
      const ret = api.context.with(api.trace.setSpan(parent, span), () => {
        return original.call(this, ...args);
      });
      span.end();
      return ret;
    };
  }
  _patchClear(proto) {
    if (instrumentation.isWrapped(proto.clear)) {
      this._unwrap(proto, "clear");
    }
    this._wrap(proto, "clear", this._getPatchedClear.bind(this));
  }
  _getPatchedClear(original) {
    const instrumentation = this;
    return function patchedClear(...args) {
      if (!instrumentation.shouldCreateSpans()) {
        return original.call(this, ...args);
      }
      const parent = api.context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "clear"),
        { kind: api.SpanKind.CLIENT },
        parent
      );
      const ret = api.context.with(api.trace.setSpan(parent, span), () => {
        return original.call(this, ...args);
      });
      span.end();
      return ret;
    };
  }
  _patchClearAll(proto) {
    if (instrumentation.isWrapped(proto.clearAll)) {
      this._unwrap(proto, "clearAll");
    }
    this._wrap(proto, "clearAll", this._getPatchedClearAll.bind(this));
  }
  _getPatchedClearAll(original) {
    const instrumentation = this;
    return function patchedClearAll(...args) {
      if (!instrumentation.shouldCreateSpans()) {
        return original.call(this, ...args);
      }
      const parent = api.context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "clearAll"),
        { kind: api.SpanKind.CLIENT },
        parent
      );
      const ret = api.context.with(api.trace.setSpan(parent, span), () => {
        return original.call(this, ...args);
      });
      span.end();
      return ret;
    };
  }
}

exports.DataloaderInstrumentation = DataloaderInstrumentation;
//# sourceMappingURL=instrumentation.js.map
