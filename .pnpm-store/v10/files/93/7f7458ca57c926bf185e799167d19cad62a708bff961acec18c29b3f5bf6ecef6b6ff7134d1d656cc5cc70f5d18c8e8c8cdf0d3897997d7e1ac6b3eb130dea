import { InstrumentationBase, InstrumentationNodeModuleDefinition, isWrapped } from '@opentelemetry/instrumentation';
import { trace, context, SpanStatusCode, SpanKind } from '@opentelemetry/api';
import { SDK_VERSION } from '@sentry/core';

const MODULE_NAME = "dataloader";
const PACKAGE_NAME = "@sentry/instrumentation-dataloader";
function extractModuleExports(module) {
  return module[Symbol.toStringTag] === "Module" ? module.default : module;
}
class DataloaderInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, config);
  }
  init() {
    return [
      new InstrumentationNodeModuleDefinition(
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
            if (isWrapped(dataloader.prototype[method])) {
              this._unwrap(dataloader.prototype, method);
            }
          });
        }
      )
    ];
  }
  shouldCreateSpans() {
    const config = this.getConfig();
    const hasParentSpan = trace.getSpan(context.active()) !== void 0;
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
      const parent = context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "batch"),
        { links: this._batch?.spanLinks },
        parent
      );
      return context.with(trace.setSpan(parent, span), () => {
        return batchLoadFn.apply(this, args).then((value) => {
          span.end();
          return value;
        }).catch((err) => {
          span.recordException(err);
          span.setStatus({
            code: SpanStatusCode.ERROR,
            message: err.message
          });
          span.end();
          throw err;
        });
      });
    };
  }
  _getPatchedConstructor(constructor) {
    const instrumentation = this;
    const prototype = constructor.prototype;
    if (!instrumentation.isEnabled()) {
      return constructor;
    }
    function PatchedDataloader(...args) {
      if (typeof args[0] === "function") {
        if (isWrapped(args[0])) {
          instrumentation._unwrap(args, 0);
        }
        args[0] = instrumentation._wrapBatchLoadFn(args[0]);
      }
      return constructor.apply(this, args);
    }
    PatchedDataloader.prototype = prototype;
    return PatchedDataloader;
  }
  _patchLoad(proto) {
    if (isWrapped(proto.load)) {
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
      const parent = context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "load"),
        { kind: SpanKind.CLIENT },
        parent
      );
      return context.with(trace.setSpan(parent, span), () => {
        const result = original.call(this, ...args).then((value) => {
          span.end();
          return value;
        }).catch((err) => {
          span.recordException(err);
          span.setStatus({
            code: SpanStatusCode.ERROR,
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
    if (isWrapped(proto.loadMany)) {
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
      const parent = context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "loadMany"),
        { kind: SpanKind.CLIENT },
        parent
      );
      return context.with(trace.setSpan(parent, span), () => {
        return original.call(this, ...args).then((value) => {
          span.end();
          return value;
        });
      });
    };
  }
  _patchPrime(proto) {
    if (isWrapped(proto.prime)) {
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
      const parent = context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "prime"),
        { kind: SpanKind.CLIENT },
        parent
      );
      const ret = context.with(trace.setSpan(parent, span), () => {
        return original.call(this, ...args);
      });
      span.end();
      return ret;
    };
  }
  _patchClear(proto) {
    if (isWrapped(proto.clear)) {
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
      const parent = context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "clear"),
        { kind: SpanKind.CLIENT },
        parent
      );
      const ret = context.with(trace.setSpan(parent, span), () => {
        return original.call(this, ...args);
      });
      span.end();
      return ret;
    };
  }
  _patchClearAll(proto) {
    if (isWrapped(proto.clearAll)) {
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
      const parent = context.active();
      const span = instrumentation.tracer.startSpan(
        instrumentation.getSpanName(this, "clearAll"),
        { kind: SpanKind.CLIENT },
        parent
      );
      const ret = context.with(trace.setSpan(parent, span), () => {
        return original.call(this, ...args);
      });
      span.end();
      return ret;
    };
  }
}

export { DataloaderInstrumentation };
//# sourceMappingURL=instrumentation.js.map
