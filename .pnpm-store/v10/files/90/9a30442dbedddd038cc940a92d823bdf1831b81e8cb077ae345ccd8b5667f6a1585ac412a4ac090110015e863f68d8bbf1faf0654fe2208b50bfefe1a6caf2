import * as api from '@opentelemetry/api';
import { SDK_VERSION } from '@sentry/core';
import { MODULE_NAME, SUPPORTED_VERSIONS } from './constants.js';
import { InstrumentationBase, semconvStabilityFromStr, InstrumentationNodeModuleDefinition, InstrumentationNodeModuleFile, SemconvStability, isWrapped } from '@opentelemetry/instrumentation';
import { extractTableName, extractDatabaseFromConnectionString, extractPortFromConnectionString, extractHostFromConnectionString, mapSystem, limitLength, getName, getFormatter, otelExceptionFromKnexError } from './utils.js';
import { ATTR_SERVER_PORT, ATTR_SERVER_ADDRESS, ATTR_DB_NAMESPACE, ATTR_DB_OPERATION_NAME, ATTR_DB_COLLECTION_NAME, ATTR_DB_SYSTEM_NAME, ATTR_DB_QUERY_TEXT } from '@opentelemetry/semantic-conventions';
import { ATTR_NET_TRANSPORT, ATTR_NET_PEER_PORT, ATTR_NET_PEER_NAME, ATTR_DB_NAME, ATTR_DB_USER, ATTR_DB_OPERATION, ATTR_DB_SQL_TABLE, ATTR_DB_SYSTEM, ATTR_DB_STATEMENT } from './semconv.js';

const PACKAGE_NAME = "@sentry/instrumentation-knex";
const contextSymbol = /* @__PURE__ */ Symbol("opentelemetry.instrumentation-knex.context");
const DEFAULT_CONFIG = {
  maxQueryLength: 1022,
  requireParentSpan: false
};
class KnexInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, { ...DEFAULT_CONFIG, ...config });
    this._semconvStability = semconvStabilityFromStr("database", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  setConfig(config = {}) {
    super.setConfig({ ...DEFAULT_CONFIG, ...config });
  }
  init() {
    const module = new InstrumentationNodeModuleDefinition(MODULE_NAME, SUPPORTED_VERSIONS);
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
    return new InstrumentationNodeModuleFile(
      `knex/${basePath}/runner.js`,
      SUPPORTED_VERSIONS,
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
    return new InstrumentationNodeModuleFile(
      `knex/${basePath}/client.js`,
      SUPPORTED_VERSIONS,
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
    const instrumentation = this;
    return function wrapQuery(original) {
      return function wrapped_logging_method(query) {
        const config = this.client.config;
        const table = extractTableName(this.builder);
        const operation = query?.method;
        const connectionString = config?.connection?.connectionString;
        const name = config?.connection?.filename || config?.connection?.database || extractDatabaseFromConnectionString(connectionString);
        const { maxQueryLength } = instrumentation.getConfig();
        const attributes = {
          "knex.version": moduleVersion
        };
        const transport = config?.connection?.filename === ":memory:" ? "inproc" : void 0;
        if (instrumentation._semconvStability & SemconvStability.OLD) {
          Object.assign(attributes, {
            [ATTR_DB_SYSTEM]: mapSystem(this.client.driverName),
            [ATTR_DB_SQL_TABLE]: table,
            [ATTR_DB_OPERATION]: operation,
            [ATTR_DB_USER]: config?.connection?.user,
            [ATTR_DB_NAME]: name,
            [ATTR_NET_PEER_NAME]: config?.connection?.host ?? extractHostFromConnectionString(connectionString),
            [ATTR_NET_PEER_PORT]: config?.connection?.port ?? extractPortFromConnectionString(connectionString),
            [ATTR_NET_TRANSPORT]: transport
          });
        }
        if (instrumentation._semconvStability & SemconvStability.STABLE) {
          Object.assign(attributes, {
            [ATTR_DB_SYSTEM_NAME]: mapSystem(this.client.driverName),
            [ATTR_DB_COLLECTION_NAME]: table,
            [ATTR_DB_OPERATION_NAME]: operation,
            [ATTR_DB_NAMESPACE]: name,
            [ATTR_SERVER_ADDRESS]: config?.connection?.host ?? extractHostFromConnectionString(connectionString),
            [ATTR_SERVER_PORT]: config?.connection?.port ?? extractPortFromConnectionString(connectionString)
          });
        }
        if (maxQueryLength) {
          const queryText = limitLength(query?.sql, maxQueryLength);
          if (instrumentation._semconvStability & SemconvStability.STABLE) {
            attributes[ATTR_DB_QUERY_TEXT] = queryText;
          }
          if (instrumentation._semconvStability & SemconvStability.OLD) {
            attributes[ATTR_DB_STATEMENT] = queryText;
          }
        }
        const parentContext = this.builder[contextSymbol] || api.context.active();
        const parentSpan = api.trace.getSpan(parentContext);
        const hasActiveParent = parentSpan && api.trace.isSpanContextValid(parentSpan.spanContext());
        if (instrumentation._config.requireParentSpan && !hasActiveParent) {
          return original.bind(this)(...arguments);
        }
        const span = instrumentation.tracer.startSpan(
          getName(name, operation, table),
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
          const formatter = getFormatter(this);
          const fullQuery = formatter(query.sql, query.bindings || []);
          const message = err.message.replace(fullQuery + " - ", "");
          const exc = otelExceptionFromKnexError(err, message);
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
    if (isWrapped(obj[methodName])) {
      this._unwrap(obj, methodName);
    }
    this._wrap(obj, methodName, wrapper);
  }
}

export { KnexInstrumentation };
//# sourceMappingURL=instrumentation.js.map
