Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core = require('@sentry/core');
const instrumentation = require('@opentelemetry/instrumentation');
const semanticConventions = require('@opentelemetry/semantic-conventions');
const redisCommon = require('./redis-common.js');
const semconv = require('./semconv.js');

const PACKAGE_NAME = "@opentelemetry/instrumentation-redis";
const PACKAGE_VERSION = "0.62.0";
const OTEL_OPEN_SPANS = /* @__PURE__ */ Symbol("opentelemetry.instrumentation.redis.open_spans");
const MULTI_COMMAND_OPTIONS = /* @__PURE__ */ Symbol("opentelemetry.instrumentation.redis.multi_command_options");
function removeCredentialsFromDBConnectionStringAttribute(diagLogger, url) {
  if (typeof url !== "string" || !url) {
    return void 0;
  }
  try {
    const u = new URL(url);
    u.searchParams.delete("user_pwd");
    u.username = "";
    u.password = "";
    return u.href;
  } catch (err) {
    diagLogger.error("failed to sanitize redis connection url", err);
  }
  return void 0;
}
function getClientAttributes(diagLogger, options, semconvStability) {
  const attributes = {};
  if (semconvStability & instrumentation.SemconvStability.OLD) {
    Object.assign(attributes, {
      [semconv.ATTR_DB_SYSTEM]: semconv.DB_SYSTEM_VALUE_REDIS,
      [semconv.ATTR_NET_PEER_NAME]: options?.socket?.host,
      [semconv.ATTR_NET_PEER_PORT]: options?.socket?.port,
      [semconv.ATTR_DB_CONNECTION_STRING]: removeCredentialsFromDBConnectionStringAttribute(diagLogger, options?.url)
    });
  }
  if (semconvStability & instrumentation.SemconvStability.STABLE) {
    Object.assign(attributes, {
      [semanticConventions.ATTR_DB_SYSTEM_NAME]: semconv.DB_SYSTEM_NAME_VALUE_REDIS,
      [semanticConventions.ATTR_SERVER_ADDRESS]: options?.socket?.host,
      [semanticConventions.ATTR_SERVER_PORT]: options?.socket?.port
    });
  }
  return attributes;
}
function endSpanV2(span, err) {
  if (err) {
    span.setStatus({
      code: api.SpanStatusCode.ERROR,
      message: err.message
    });
  }
  span.end();
}
function getTracedCreateClient(original) {
  return function createClientTrace() {
    const client = original.apply(this, arguments);
    return api.context.bind(api.context.active(), client);
  };
}
function getTracedCreateStreamTrace(original) {
  return function create_stream_trace() {
    if (!Object.prototype.hasOwnProperty.call(this, "stream")) {
      Object.defineProperty(this, "stream", {
        get() {
          return this._patched_redis_stream;
        },
        set(val) {
          api.context.bind(api.context.active(), val);
          this._patched_redis_stream = val;
        }
      });
    }
    return original.apply(this, arguments);
  };
}
const _RedisInstrumentationV2_V3 = class _RedisInstrumentationV2_V3 extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, PACKAGE_VERSION, config);
    this._semconvStability = config.semconvStability ? config.semconvStability : instrumentation.semconvStabilityFromStr("database", process.env["OTEL_SEMCONV_STABILITY_OPT_IN"]);
  }
  setConfig(config = {}) {
    super.setConfig(config);
    this._semconvStability = config.semconvStability ? config.semconvStability : instrumentation.semconvStabilityFromStr("database", process.env["OTEL_SEMCONV_STABILITY_OPT_IN"]);
  }
  init() {
    return [
      new instrumentation.InstrumentationNodeModuleDefinition(
        "redis",
        [">=2.6.0 <4"],
        (moduleExports) => {
          if (instrumentation.isWrapped(moduleExports.RedisClient.prototype["internal_send_command"])) {
            this._unwrap(moduleExports.RedisClient.prototype, "internal_send_command");
          }
          this._wrap(moduleExports.RedisClient.prototype, "internal_send_command", this._getPatchInternalSendCommand());
          if (instrumentation.isWrapped(moduleExports.RedisClient.prototype["create_stream"])) {
            this._unwrap(moduleExports.RedisClient.prototype, "create_stream");
          }
          this._wrap(moduleExports.RedisClient.prototype, "create_stream", this._getPatchCreateStream());
          if (instrumentation.isWrapped(moduleExports.createClient)) {
            this._unwrap(moduleExports, "createClient");
          }
          this._wrap(moduleExports, "createClient", this._getPatchCreateClient());
          return moduleExports;
        },
        (moduleExports) => {
          if (moduleExports === void 0) return;
          this._unwrap(moduleExports.RedisClient.prototype, "internal_send_command");
          this._unwrap(moduleExports.RedisClient.prototype, "create_stream");
          this._unwrap(moduleExports, "createClient");
        }
      )
    ];
  }
  _getPatchInternalSendCommand() {
    const instrumentation$1 = this;
    return function internal_send_command(original) {
      return function internal_send_command_trace(cmd) {
        if (arguments.length !== 1 || typeof cmd !== "object") {
          return original.apply(this, arguments);
        }
        const config = instrumentation$1.getConfig();
        const hasNoParentSpan = api.trace.getSpan(api.context.active()) === void 0;
        if (config.requireParentSpan === true && hasNoParentSpan) {
          return original.apply(this, arguments);
        }
        const dbStatementSerializer = config?.dbStatementSerializer || redisCommon.defaultDbStatementSerializer;
        const attributes = {};
        if (instrumentation$1._semconvStability & instrumentation.SemconvStability.OLD) {
          Object.assign(attributes, {
            [semconv.ATTR_DB_SYSTEM]: semconv.DB_SYSTEM_VALUE_REDIS,
            [semconv.ATTR_DB_STATEMENT]: dbStatementSerializer(cmd.command, cmd.args)
          });
        }
        if (instrumentation$1._semconvStability & instrumentation.SemconvStability.STABLE) {
          Object.assign(attributes, {
            [semanticConventions.ATTR_DB_SYSTEM_NAME]: semconv.DB_SYSTEM_NAME_VALUE_REDIS,
            [semanticConventions.ATTR_DB_OPERATION_NAME]: cmd.command,
            [semanticConventions.ATTR_DB_QUERY_TEXT]: dbStatementSerializer(cmd.command, cmd.args)
          });
        }
        attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.db.otel.redis";
        const span = instrumentation$1.tracer.startSpan(`${_RedisInstrumentationV2_V3.COMPONENT}-${cmd.command}`, {
          kind: api.SpanKind.CLIENT,
          attributes
        });
        if (this.connection_options) {
          const connectionAttributes = {};
          if (instrumentation$1._semconvStability & instrumentation.SemconvStability.OLD) {
            Object.assign(connectionAttributes, {
              [semconv.ATTR_NET_PEER_NAME]: this.connection_options.host,
              [semconv.ATTR_NET_PEER_PORT]: this.connection_options.port
            });
          }
          if (instrumentation$1._semconvStability & instrumentation.SemconvStability.STABLE) {
            Object.assign(connectionAttributes, {
              [semanticConventions.ATTR_SERVER_ADDRESS]: this.connection_options.host,
              [semanticConventions.ATTR_SERVER_PORT]: this.connection_options.port
            });
          }
          span.setAttributes(connectionAttributes);
        }
        if (this.address && instrumentation$1._semconvStability & instrumentation.SemconvStability.OLD) {
          span.setAttribute(semconv.ATTR_DB_CONNECTION_STRING, `redis://${this.address}`);
        }
        const originalCallback = arguments[0].callback;
        if (originalCallback) {
          const originalContext = api.context.active();
          arguments[0].callback = function callback(err, reply) {
            if (config?.responseHook) {
              const responseHook = config.responseHook;
              instrumentation.safeExecuteInTheMiddle(
                () => {
                  responseHook(span, cmd.command, cmd.args, reply);
                },
                (e) => {
                  if (e) {
                    instrumentation$1._diag.error("Error executing responseHook", e);
                  }
                },
                true
              );
            }
            endSpanV2(span, err);
            return api.context.with(originalContext, originalCallback, this, ...arguments);
          };
        }
        try {
          return original.apply(this, arguments);
        } catch (rethrow) {
          endSpanV2(span, rethrow);
          throw rethrow;
        }
      };
    };
  }
  _getPatchCreateClient() {
    return function createClient(original) {
      return getTracedCreateClient(original);
    };
  }
  _getPatchCreateStream() {
    return function createReadStream(original) {
      return getTracedCreateStreamTrace(original);
    };
  }
};
_RedisInstrumentationV2_V3.COMPONENT = "redis";
let RedisInstrumentationV2_V3 = _RedisInstrumentationV2_V3;
const _RedisInstrumentationV4_V5 = class _RedisInstrumentationV4_V5 extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, PACKAGE_VERSION, config);
    this._semconvStability = config.semconvStability ? config.semconvStability : instrumentation.semconvStabilityFromStr("database", process.env["OTEL_SEMCONV_STABILITY_OPT_IN"]);
  }
  setConfig(config = {}) {
    super.setConfig(config);
    this._semconvStability = config.semconvStability ? config.semconvStability : instrumentation.semconvStabilityFromStr("database", process.env["OTEL_SEMCONV_STABILITY_OPT_IN"]);
  }
  init() {
    return [
      this._getInstrumentationNodeModuleDefinition("@redis/client"),
      this._getInstrumentationNodeModuleDefinition("@node-redis/client")
    ];
  }
  _getInstrumentationNodeModuleDefinition(basePackageName) {
    const commanderModuleFile = new instrumentation.InstrumentationNodeModuleFile(
      `${basePackageName}/dist/lib/commander.js`,
      ["^1.0.0"],
      (moduleExports, moduleVersion) => {
        const transformCommandArguments = moduleExports.transformCommandArguments;
        if (!transformCommandArguments) {
          this._diag.error("internal instrumentation error, missing transformCommandArguments function");
          return moduleExports;
        }
        const functionToPatch = moduleVersion?.startsWith("1.0.") ? "extendWithCommands" : "attachCommands";
        if (instrumentation.isWrapped(moduleExports?.[functionToPatch])) {
          this._unwrap(moduleExports, functionToPatch);
        }
        this._wrap(moduleExports, functionToPatch, this._getPatchExtendWithCommands(transformCommandArguments));
        return moduleExports;
      },
      (moduleExports) => {
        if (instrumentation.isWrapped(moduleExports?.extendWithCommands)) {
          this._unwrap(moduleExports, "extendWithCommands");
        }
        if (instrumentation.isWrapped(moduleExports?.attachCommands)) {
          this._unwrap(moduleExports, "attachCommands");
        }
      }
    );
    const multiCommanderModule = new instrumentation.InstrumentationNodeModuleFile(
      `${basePackageName}/dist/lib/client/multi-command.js`,
      ["^1.0.0", ">=5.0.0 <5.12.0"],
      (moduleExports) => {
        const redisClientMultiCommandPrototype = moduleExports?.default?.prototype;
        if (instrumentation.isWrapped(redisClientMultiCommandPrototype?.exec)) {
          this._unwrap(redisClientMultiCommandPrototype, "exec");
        }
        this._wrap(redisClientMultiCommandPrototype, "exec", this._getPatchMultiCommandsExec(false));
        if (instrumentation.isWrapped(redisClientMultiCommandPrototype?.execAsPipeline)) {
          this._unwrap(redisClientMultiCommandPrototype, "execAsPipeline");
        }
        this._wrap(redisClientMultiCommandPrototype, "execAsPipeline", this._getPatchMultiCommandsExec(true));
        if (instrumentation.isWrapped(redisClientMultiCommandPrototype?.addCommand)) {
          this._unwrap(redisClientMultiCommandPrototype, "addCommand");
        }
        this._wrap(redisClientMultiCommandPrototype, "addCommand", this._getPatchMultiCommandsAddCommand());
        return moduleExports;
      },
      (moduleExports) => {
        const redisClientMultiCommandPrototype = moduleExports?.default?.prototype;
        if (instrumentation.isWrapped(redisClientMultiCommandPrototype?.exec)) {
          this._unwrap(redisClientMultiCommandPrototype, "exec");
        }
        if (instrumentation.isWrapped(redisClientMultiCommandPrototype?.execAsPipeline)) {
          this._unwrap(redisClientMultiCommandPrototype, "execAsPipeline");
        }
        if (instrumentation.isWrapped(redisClientMultiCommandPrototype?.addCommand)) {
          this._unwrap(redisClientMultiCommandPrototype, "addCommand");
        }
      }
    );
    const clientIndexModule = new instrumentation.InstrumentationNodeModuleFile(
      `${basePackageName}/dist/lib/client/index.js`,
      ["^1.0.0", ">=5.0.0 <5.12.0"],
      (moduleExports) => {
        const redisClientPrototype = moduleExports?.default?.prototype;
        if (redisClientPrototype?.multi) {
          if (instrumentation.isWrapped(redisClientPrototype?.multi)) {
            this._unwrap(redisClientPrototype, "multi");
          }
          this._wrap(redisClientPrototype, "multi", this._getPatchRedisClientMulti());
        }
        if (redisClientPrototype?.MULTI) {
          if (instrumentation.isWrapped(redisClientPrototype?.MULTI)) {
            this._unwrap(redisClientPrototype, "MULTI");
          }
          this._wrap(redisClientPrototype, "MULTI", this._getPatchRedisClientMulti());
        }
        if (instrumentation.isWrapped(redisClientPrototype?.sendCommand)) {
          this._unwrap(redisClientPrototype, "sendCommand");
        }
        this._wrap(redisClientPrototype, "sendCommand", this._getPatchRedisClientSendCommand());
        if (instrumentation.isWrapped(redisClientPrototype?.connect)) {
          this._unwrap(redisClientPrototype, "connect");
        }
        this._wrap(redisClientPrototype, "connect", this._getPatchedClientConnect());
        return moduleExports;
      },
      (moduleExports) => {
        const redisClientPrototype = moduleExports?.default?.prototype;
        if (instrumentation.isWrapped(redisClientPrototype?.multi)) {
          this._unwrap(redisClientPrototype, "multi");
        }
        if (instrumentation.isWrapped(redisClientPrototype?.MULTI)) {
          this._unwrap(redisClientPrototype, "MULTI");
        }
        if (instrumentation.isWrapped(redisClientPrototype?.sendCommand)) {
          this._unwrap(redisClientPrototype, "sendCommand");
        }
        if (instrumentation.isWrapped(redisClientPrototype?.connect)) {
          this._unwrap(redisClientPrototype, "connect");
        }
      }
    );
    return new instrumentation.InstrumentationNodeModuleDefinition(
      basePackageName,
      ["^1.0.0", ">=5.0.0 <5.12.0"],
      (moduleExports) => moduleExports,
      () => {
      },
      [commanderModuleFile, multiCommanderModule, clientIndexModule]
    );
  }
  _getPatchExtendWithCommands(transformCommandArguments) {
    const plugin = this;
    return function extendWithCommandsPatchWrapper(original) {
      return function extendWithCommandsPatch(config) {
        if (config?.BaseClass?.name !== "RedisClient") {
          return original.apply(this, arguments);
        }
        const origExecutor = config.executor;
        config.executor = function(command, args) {
          const redisCommandArguments = transformCommandArguments(command, args).args;
          return plugin._traceClientCommand(origExecutor, this, arguments, redisCommandArguments);
        };
        return original.apply(this, arguments);
      };
    };
  }
  _getPatchMultiCommandsExec(isPipeline) {
    const plugin = this;
    return function execPatchWrapper(original) {
      return function execPatch() {
        const execRes = original.apply(this, arguments);
        if (typeof execRes?.then !== "function") {
          plugin._diag.error("non-promise result when patching exec/execAsPipeline");
          return execRes;
        }
        return execRes.then((redisRes) => {
          const openSpans = this[OTEL_OPEN_SPANS];
          plugin._endSpansWithRedisReplies(openSpans, redisRes, isPipeline);
          return redisRes;
        }).catch((err) => {
          const openSpans = this[OTEL_OPEN_SPANS];
          if (!openSpans) {
            plugin._diag.error("cannot find open spans to end for multi/pipeline");
          } else {
            const replies = err.constructor.name === "MultiErrorReply" ? err.replies : new Array(openSpans.length).fill(err);
            plugin._endSpansWithRedisReplies(openSpans, replies, isPipeline);
          }
          return Promise.reject(err);
        });
      };
    };
  }
  _getPatchMultiCommandsAddCommand() {
    const plugin = this;
    return function addCommandWrapper(original) {
      return function addCommandPatch(args) {
        return plugin._traceClientCommand(original, this, arguments, args);
      };
    };
  }
  _getPatchRedisClientMulti() {
    return function multiPatchWrapper(original) {
      return function multiPatch() {
        const multiRes = original.apply(this, arguments);
        multiRes[MULTI_COMMAND_OPTIONS] = this.options;
        return multiRes;
      };
    };
  }
  _getPatchRedisClientSendCommand() {
    const plugin = this;
    return function sendCommandWrapper(original) {
      return function sendCommandPatch(args) {
        return plugin._traceClientCommand(original, this, arguments, args);
      };
    };
  }
  _getPatchedClientConnect() {
    const plugin = this;
    return function connectWrapper(original) {
      return function patchedConnect() {
        const options = this.options;
        const attributes = getClientAttributes(plugin._diag, options, plugin._semconvStability);
        attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.db.otel.redis";
        const span = plugin.tracer.startSpan(`${_RedisInstrumentationV4_V5.COMPONENT}-connect`, {
          kind: api.SpanKind.CLIENT,
          attributes
        });
        const res = api.context.with(api.trace.setSpan(api.context.active(), span), () => {
          return original.apply(this);
        });
        return res.then((result) => {
          span.end();
          return result;
        }).catch((error) => {
          span.recordException(error);
          span.setStatus({
            code: api.SpanStatusCode.ERROR,
            message: error.message
          });
          span.end();
          return Promise.reject(error);
        });
      };
    };
  }
  _traceClientCommand(origFunction, origThis, origArguments, redisCommandArguments) {
    const hasNoParentSpan = api.trace.getSpan(api.context.active()) === void 0;
    if (hasNoParentSpan && this.getConfig().requireParentSpan) {
      return origFunction.apply(origThis, origArguments);
    }
    const clientOptions = origThis.options || origThis[MULTI_COMMAND_OPTIONS];
    const commandName = redisCommandArguments[0];
    const commandArgs = redisCommandArguments.slice(1);
    const dbStatementSerializer = this.getConfig().dbStatementSerializer || redisCommon.defaultDbStatementSerializer;
    const attributes = getClientAttributes(this._diag, clientOptions, this._semconvStability);
    if (this._semconvStability & instrumentation.SemconvStability.STABLE) {
      attributes[semanticConventions.ATTR_DB_OPERATION_NAME] = commandName;
    }
    try {
      const dbStatement = dbStatementSerializer(commandName, commandArgs);
      if (dbStatement != null) {
        if (this._semconvStability & instrumentation.SemconvStability.OLD) {
          attributes[semconv.ATTR_DB_STATEMENT] = dbStatement;
        }
        if (this._semconvStability & instrumentation.SemconvStability.STABLE) {
          attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = dbStatement;
        }
      }
    } catch (e) {
      this._diag.error("dbStatementSerializer throw an exception", e, { commandName });
    }
    attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.db.otel.redis";
    const span = this.tracer.startSpan(`${_RedisInstrumentationV4_V5.COMPONENT}-${commandName}`, {
      kind: api.SpanKind.CLIENT,
      attributes
    });
    const res = api.context.with(api.trace.setSpan(api.context.active(), span), () => {
      return origFunction.apply(origThis, origArguments);
    });
    if (typeof res?.then === "function") {
      res.then(
        (redisRes) => {
          this._endSpanWithResponse(span, commandName, commandArgs, redisRes, void 0);
        },
        (err) => {
          this._endSpanWithResponse(span, commandName, commandArgs, null, err);
        }
      );
    } else {
      const redisClientMultiCommand = res;
      redisClientMultiCommand[OTEL_OPEN_SPANS] = redisClientMultiCommand[OTEL_OPEN_SPANS] || [];
      redisClientMultiCommand[OTEL_OPEN_SPANS].push({
        span,
        commandName,
        commandArgs
      });
    }
    return res;
  }
  _endSpansWithRedisReplies(openSpans, replies, isPipeline = false) {
    if (!openSpans) {
      return this._diag.error("cannot find open spans to end for redis multi/pipeline");
    }
    if (replies.length !== openSpans.length) {
      return this._diag.error("number of multi command spans does not match response from redis");
    }
    const allCommands = openSpans.map((s) => s.commandName);
    const allSameCommand = allCommands.every((cmd) => cmd === allCommands[0]);
    const operationName = allSameCommand ? (isPipeline ? "PIPELINE " : "MULTI ") + allCommands[0] : isPipeline ? "PIPELINE" : "MULTI";
    for (let i = 0; i < openSpans.length; i++) {
      const { span, commandArgs } = openSpans[i];
      const currCommandRes = replies[i];
      const [res, err] = currCommandRes instanceof Error ? [null, currCommandRes] : [currCommandRes, void 0];
      if (this._semconvStability & instrumentation.SemconvStability.STABLE) {
        span.setAttribute(semanticConventions.ATTR_DB_OPERATION_NAME, operationName);
      }
      this._endSpanWithResponse(span, allCommands[i], commandArgs, res, err);
    }
  }
  _endSpanWithResponse(span, commandName, commandArgs, response, error) {
    const { responseHook } = this.getConfig();
    if (!error && responseHook) {
      try {
        responseHook(span, commandName, commandArgs, response);
      } catch (err) {
        this._diag.error("responseHook throw an exception", err);
      }
    }
    if (error) {
      span.recordException(error);
      span.setStatus({ code: api.SpanStatusCode.ERROR, message: error?.message });
    }
    span.end();
  }
};
_RedisInstrumentationV4_V5.COMPONENT = "redis";
let RedisInstrumentationV4_V5 = _RedisInstrumentationV4_V5;
const DEFAULT_CONFIG = {
  requireParentSpan: false
};
class RedisInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    const resolvedConfig = { ...DEFAULT_CONFIG, ...config };
    super(PACKAGE_NAME, PACKAGE_VERSION, resolvedConfig);
    this.initialized = false;
    this.instrumentationV2_V3 = new RedisInstrumentationV2_V3(this.getConfig());
    this.instrumentationV4_V5 = new RedisInstrumentationV4_V5(this.getConfig());
    this.initialized = true;
  }
  setConfig(config = {}) {
    const newConfig = { ...DEFAULT_CONFIG, ...config };
    super.setConfig(newConfig);
    if (!this.initialized) {
      return;
    }
    this.instrumentationV2_V3.setConfig(newConfig);
    this.instrumentationV4_V5.setConfig(newConfig);
  }
  init() {
  }
  getModuleDefinitions() {
    return [...this.instrumentationV2_V3.getModuleDefinitions(), ...this.instrumentationV4_V5.getModuleDefinitions()];
  }
  setTracerProvider(tracerProvider) {
    super.setTracerProvider(tracerProvider);
    if (!this.initialized) {
      return;
    }
    this.instrumentationV2_V3.setTracerProvider(tracerProvider);
    this.instrumentationV4_V5.setTracerProvider(tracerProvider);
  }
  enable() {
    super.enable();
    if (!this.initialized) {
      return;
    }
    this.instrumentationV2_V3.enable();
    this.instrumentationV4_V5.enable();
  }
  disable() {
    super.disable();
    if (!this.initialized) {
      return;
    }
    this.instrumentationV2_V3.disable();
    this.instrumentationV4_V5.disable();
  }
}

exports.RedisInstrumentation = RedisInstrumentation;
//# sourceMappingURL=redis-instrumentation.js.map
