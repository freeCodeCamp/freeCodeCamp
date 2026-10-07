Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core = require('@sentry/core');
const constants = require('./constants.js');
const instrumentation = require('@opentelemetry/instrumentation');
const utils = require('./utils.js');
const semanticConventions = require('@opentelemetry/semantic-conventions');
const semconv = require('./semconv.js');

const PACKAGE_NAME = "@sentry/instrumentation-knex";
const contextSymbol = /* @__PURE__ */ Symbol("opentelemetry.instrumentation-knex.context");
const DEFAULT_CONFIG = {
  maxQueryLength: 1022,
  requireParentSpan: false
};
class KnexInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, core.SDK_VERSION, { ...DEFAULT_CONFIG, ...config });
    this._semconvStability = instrumentation.semconvStabilityFromStr("database", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  setConfig(config = {}) {
    super.setConfig({ ...DEFAULT_CONFIG, ...config });
  }
  init() {
    const module = new instrumentation.InstrumentationNodeModuleDefinition(constants.MODULE_NAME, constants.SUPPORTED_VERSIONS);
    module.files.push(
      this.getClientNodeModuleFileInstrumentation("src"),
      this.getClientNodeModuleFileInstrumentation("lib"),
      this.getRunnerNodeModuleFileInstrumentation("src"),
      this.getRunnerNodeModuleFileInstrumentation("lib"),
      this.getRunnerNodeModuleFileInstrumentation("lib/execution")
    );
    return module;
  }
  getRunnerNodeModuleFileInstrumentation(basePath) {
    return new instrumentation.InstrumentationNodeModuleFile(
      `knex/${basePath}/runner.js`,
      constants.SUPPORTED_VERSIONS,
      (Runner, moduleVersion) => {
        this.ensureWrapped(Runner.prototype, "query", this.createQueryWrapper(moduleVersion));
        return Runner;
      },
      (Runner, _moduleVersion) => {
        this._unwrap(Runner.prototype, "query");
        return Runner;
      }
    );
  }
  getClientNodeModuleFileInstrumentation(basePath) {
    return new instrumentation.InstrumentationNodeModuleFile(
      `knex/${basePath}/client.js`,
      constants.SUPPORTED_VERSIONS,
      (Client) => {
        this.ensureWrapped(Client.prototype, "queryBuilder", this.storeContext.bind(this));
        this.ensureWrapped(Client.prototype, "schemaBuilder", this.storeContext.bind(this));
        this.ensureWrapped(Client.prototype, "raw", this.storeContext.bind(this));
        return Client;
      },
      (Client) => {
        this._unwrap(Client.prototype, "queryBuilder");
        this._unwrap(Client.prototype, "schemaBuilder");
        this._unwrap(Client.prototype, "raw");
        return Client;
      }
    );
  }
  createQueryWrapper(moduleVersion) {
    const instrumentation$1 = this;
    return function wrapQuery(original) {
      return function wrapped_logging_method(query) {
        const config = this.client.config;
        const table = utils.extractTableName(this.builder);
        const operation = query?.method;
        const connectionString = config?.connection?.connectionString;
        const name = config?.connection?.filename || config?.connection?.database || utils.extractDatabaseFromConnectionString(connectionString);
        const { maxQueryLength } = instrumentation$1.getConfig();
        const attributes = {
          "knex.version": moduleVersion
        };
        const transport = config?.connection?.filename === ":memory:" ? "inproc" : void 0;
        if (instrumentation$1._semconvStability & instrumentation.SemconvStability.OLD) {
          Object.assign(attributes, {
            [semconv.ATTR_DB_SYSTEM]: utils.mapSystem(this.client.driverName),
            [semconv.ATTR_DB_SQL_TABLE]: table,
            [semconv.ATTR_DB_OPERATION]: operation,
            [semconv.ATTR_DB_USER]: config?.connection?.user,
            [semconv.ATTR_DB_NAME]: name,
            [semconv.ATTR_NET_PEER_NAME]: config?.connection?.host ?? utils.extractHostFromConnectionString(connectionString),
            [semconv.ATTR_NET_PEER_PORT]: config?.connection?.port ?? utils.extractPortFromConnectionString(connectionString),
            [semconv.ATTR_NET_TRANSPORT]: transport
          });
        }
        if (instrumentation$1._semconvStability & instrumentation.SemconvStability.STABLE) {
          Object.assign(attributes, {
            [semanticConventions.ATTR_DB_SYSTEM_NAME]: utils.mapSystem(this.client.driverName),
            [semanticConventions.ATTR_DB_COLLECTION_NAME]: table,
            [semanticConventions.ATTR_DB_OPERATION_NAME]: operation,
            [semanticConventions.ATTR_DB_NAMESPACE]: name,
            [semanticConventions.ATTR_SERVER_ADDRESS]: config?.connection?.host ?? utils.extractHostFromConnectionString(connectionString),
            [semanticConventions.ATTR_SERVER_PORT]: config?.connection?.port ?? utils.extractPortFromConnectionString(connectionString)
          });
        }
        if (maxQueryLength) {
          const queryText = utils.limitLength(query?.sql, maxQueryLength);
          if (instrumentation$1._semconvStability & instrumentation.SemconvStability.STABLE) {
            attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = queryText;
          }
          if (instrumentation$1._semconvStability & instrumentation.SemconvStability.OLD) {
            attributes[semconv.ATTR_DB_STATEMENT] = queryText;
          }
        }
        const parentContext = this.builder[contextSymbol] || api.context.active();
        const parentSpan = api.trace.getSpan(parentContext);
        const hasActiveParent = parentSpan && api.trace.isSpanContextValid(parentSpan.spanContext());
        if (instrumentation$1._config.requireParentSpan && !hasActiveParent) {
          return original.bind(this)(...arguments);
        }
        const span = instrumentation$1.tracer.startSpan(
          utils.getName(name, operation, table),
          {
            kind: api.SpanKind.CLIENT,
            attributes
          },
          parentContext
        );
        const spanContext = api.trace.setSpan(api.context.active(), span);
        return api.context.with(spanContext, original, this, ...arguments).then((result) => {
          span.end();
          return result;
        }).catch((err) => {
          const formatter = utils.getFormatter(this);
          const fullQuery = formatter(query.sql, query.bindings || []);
          const message = err.message.replace(fullQuery + " - ", "");
          const exc = utils.otelExceptionFromKnexError(err, message);
          span.recordException(exc);
          span.setStatus({ code: api.SpanStatusCode.ERROR, message });
          span.end();
          throw err;
        });
      };
    };
  }
  storeContext(original) {
    return function wrapped_logging_method() {
      const builder = original.apply(this, arguments);
      Object.defineProperty(builder, contextSymbol, {
        value: api.context.active()
      });
      return builder;
    };
  }
  ensureWrapped(obj, methodName, wrapper) {
    if (instrumentation.isWrapped(obj[methodName])) {
      this._unwrap(obj, methodName);
    }
    this._wrap(obj, methodName, wrapper);
  }
}

exports.KnexInstrumentation = KnexInstrumentation;
//# sourceMappingURL=instrumentation.js.map
