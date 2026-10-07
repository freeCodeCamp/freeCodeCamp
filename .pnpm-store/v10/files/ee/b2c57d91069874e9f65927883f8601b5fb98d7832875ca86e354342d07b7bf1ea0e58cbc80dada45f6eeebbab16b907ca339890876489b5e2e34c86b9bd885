Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');

const MODULE_NAME = "generic-pool";
const PACKAGE_NAME = "@sentry/instrumentation-generic-pool";
class GenericPoolInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, core.SDK_VERSION, config);
    // only used for v2 - v2.3)
    this._isDisabled = false;
  }
  init() {
    return [
      new instrumentation.InstrumentationNodeModuleDefinition(
        MODULE_NAME,
        [">=3.0.0 <4"],
        (moduleExports) => {
          const Pool = moduleExports.Pool;
          if (instrumentation.isWrapped(Pool.prototype.acquire)) {
            this._unwrap(Pool.prototype, "acquire");
          }
          this._wrap(Pool.prototype, "acquire", this._acquirePatcher.bind(this));
          return moduleExports;
        },
        (moduleExports) => {
          const Pool = moduleExports.Pool;
          this._unwrap(Pool.prototype, "acquire");
          return moduleExports;
        }
      ),
      new instrumentation.InstrumentationNodeModuleDefinition(
        MODULE_NAME,
        [">=2.4.0 <3"],
        (moduleExports) => {
          const Pool = moduleExports.Pool;
          if (instrumentation.isWrapped(Pool.prototype.acquire)) {
            this._unwrap(Pool.prototype, "acquire");
          }
          this._wrap(Pool.prototype, "acquire", this._acquireWithCallbacksPatcher.bind(this));
          return moduleExports;
        },
        (moduleExports) => {
          const Pool = moduleExports.Pool;
          this._unwrap(Pool.prototype, "acquire");
          return moduleExports;
        }
      ),
      new instrumentation.InstrumentationNodeModuleDefinition(
        MODULE_NAME,
        [">=2.0.0 <2.4"],
        (moduleExports) => {
          this._isDisabled = false;
          if (instrumentation.isWrapped(moduleExports.Pool)) {
            this._unwrap(moduleExports, "Pool");
          }
          this._wrap(moduleExports, "Pool", this._poolWrapper.bind(this));
          return moduleExports;
        },
        (moduleExports) => {
          this._isDisabled = true;
          return moduleExports;
        }
      )
    ];
  }
  _acquirePatcher(original) {
    const instrumentation = this;
    return function wrapped_acquire(...args) {
      const parent = api.context.active();
      const span = instrumentation.tracer.startSpan("generic-pool.acquire", {}, parent);
      return api.context.with(api.trace.setSpan(parent, span), () => {
        return original.call(this, ...args).then(
          (value) => {
            span.end();
            return value;
          },
          (err) => {
            span.recordException(err);
            span.end();
            throw err;
          }
        );
      });
    };
  }
  _poolWrapper(original) {
    const instrumentation = this;
    return function wrapped_pool() {
      const pool = original.apply(this, arguments);
      instrumentation._wrap(pool, "acquire", instrumentation._acquireWithCallbacksPatcher.bind(instrumentation));
      return pool;
    };
  }
  _acquireWithCallbacksPatcher(original) {
    const instrumentation = this;
    return function wrapped_acquire(cb, priority) {
      if (instrumentation._isDisabled) {
        return original.call(this, cb, priority);
      }
      const parent = api.context.active();
      const span = instrumentation.tracer.startSpan("generic-pool.acquire", {}, parent);
      return api.context.with(api.trace.setSpan(parent, span), () => {
        original.call(
          this,
          (err, client) => {
            span.end();
            if (cb) {
              return cb(err, client);
            }
          },
          priority
        );
      });
    };
  }
}

exports.GenericPoolInstrumentation = GenericPoolInstrumentation;
//# sourceMappingURL=instrumentation.js.map
