Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const core$1 = require('@opentelemetry/core');
const utils = require('./utils.js');
const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');
const semconv = require('./semconv.js');
const semanticConventions = require('@opentelemetry/semantic-conventions');

const PACKAGE_NAME = "@sentry/instrumentation-mongoose";
const contextCaptureFunctionsCommon = [
  "deleteOne",
  "deleteMany",
  "find",
  "findOne",
  "estimatedDocumentCount",
  "countDocuments",
  "distinct",
  "where",
  "$where",
  "findOneAndUpdate",
  "findOneAndDelete",
  "findOneAndReplace"
];
const contextCaptureFunctions6 = ["remove", "count", "findOneAndRemove", ...contextCaptureFunctionsCommon];
const contextCaptureFunctions7 = ["count", "findOneAndRemove", ...contextCaptureFunctionsCommon];
const contextCaptureFunctions8 = [...contextCaptureFunctionsCommon];
function getContextCaptureFunctions(moduleVersion) {
  if (!moduleVersion) {
    return contextCaptureFunctionsCommon;
  } else if (moduleVersion.startsWith("6.") || moduleVersion.startsWith("5.")) {
    return contextCaptureFunctions6;
  } else if (moduleVersion.startsWith("7.")) {
    return contextCaptureFunctions7;
  } else {
    return contextCaptureFunctions8;
  }
}
function instrumentRemove(moduleVersion) {
  return moduleVersion && (moduleVersion.startsWith("5.") || moduleVersion.startsWith("6.")) || false;
}
function needsDocumentMethodPatch(moduleVersion) {
  if (!moduleVersion || !moduleVersion.startsWith("8.")) {
    return false;
  }
  const minor = parseInt(moduleVersion.split(".")[1], 10);
  return minor >= 21;
}
const _STORED_PARENT_SPAN = /* @__PURE__ */ Symbol("stored-parent-span");
const _ALREADY_INSTRUMENTED = /* @__PURE__ */ Symbol("already-instrumented");
class MongooseInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, core.SDK_VERSION, config);
    this._setSemconvStabilityFromEnv();
  }
  // Used for testing.
  _setSemconvStabilityFromEnv() {
    this._netSemconvStability = instrumentation.semconvStabilityFromStr("http", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
    this._dbSemconvStability = instrumentation.semconvStabilityFromStr("database", process.env.OTEL_SEMCONV_STABILITY_OPT_IN);
  }
  init() {
    const module = new instrumentation.InstrumentationNodeModuleDefinition(
      "mongoose",
      [">=5.9.7 <10"],
      this.patch.bind(this),
      this.unpatch.bind(this)
    );
    return module;
  }
  patch(module, moduleVersion) {
    const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
    this._wrap(moduleExports.Model.prototype, "save", this.patchOnModelMethods("save", moduleVersion));
    moduleExports.Model.prototype.$save = moduleExports.Model.prototype.save;
    if (instrumentRemove(moduleVersion)) {
      this._wrap(moduleExports.Model.prototype, "remove", this.patchOnModelMethods("remove", moduleVersion));
    }
    if (needsDocumentMethodPatch(moduleVersion)) {
      this._wrap(
        moduleExports.Model.prototype,
        "updateOne",
        this._patchDocumentUpdateMethods("updateOne", moduleVersion)
      );
      this._wrap(
        moduleExports.Model.prototype,
        "deleteOne",
        this._patchDocumentUpdateMethods("deleteOne", moduleVersion)
      );
    }
    this._wrap(moduleExports.Query.prototype, "exec", this.patchQueryExec(moduleVersion));
    this._wrap(moduleExports.Aggregate.prototype, "exec", this.patchAggregateExec(moduleVersion));
    const contextCaptureFunctions = getContextCaptureFunctions(moduleVersion);
    contextCaptureFunctions.forEach((funcName) => {
      this._wrap(moduleExports.Query.prototype, funcName, this.patchAndCaptureSpanContext(funcName));
    });
    this._wrap(moduleExports.Model, "aggregate", this.patchModelAggregate());
    this._wrap(moduleExports.Model, "insertMany", this.patchModelStatic("insertMany", moduleVersion));
    this._wrap(moduleExports.Model, "bulkWrite", this.patchModelStatic("bulkWrite", moduleVersion));
    return moduleExports;
  }
  unpatch(module, moduleVersion) {
    const moduleExports = module[Symbol.toStringTag] === "Module" ? module.default : module;
    const contextCaptureFunctions = getContextCaptureFunctions(moduleVersion);
    this._unwrap(moduleExports.Model.prototype, "save");
    moduleExports.Model.prototype.$save = moduleExports.Model.prototype.save;
    if (instrumentRemove(moduleVersion)) {
      this._unwrap(moduleExports.Model.prototype, "remove");
    }
    if (needsDocumentMethodPatch(moduleVersion)) {
      this._unwrap(moduleExports.Model.prototype, "updateOne");
      this._unwrap(moduleExports.Model.prototype, "deleteOne");
    }
    this._unwrap(moduleExports.Query.prototype, "exec");
    this._unwrap(moduleExports.Aggregate.prototype, "exec");
    contextCaptureFunctions.forEach((funcName) => {
      this._unwrap(moduleExports.Query.prototype, funcName);
    });
    this._unwrap(moduleExports.Model, "aggregate");
    this._unwrap(moduleExports.Model, "insertMany");
    this._unwrap(moduleExports.Model, "bulkWrite");
  }
  patchAggregateExec(moduleVersion) {
    const self = this;
    return (originalAggregate) => {
      return function exec(callback) {
        if (self.getConfig().requireParentSpan && api.trace.getSpan(api.context.active()) === void 0) {
          return originalAggregate.apply(this, arguments);
        }
        const parentSpan = this[_STORED_PARENT_SPAN];
        const attributes = {};
        const { dbStatementSerializer } = self.getConfig();
        if (dbStatementSerializer) {
          const statement = dbStatementSerializer("aggregate", {
            options: this.options,
            aggregatePipeline: this._pipeline
          });
          if (self._dbSemconvStability & instrumentation.SemconvStability.OLD) {
            attributes[semconv.ATTR_DB_STATEMENT] = statement;
          }
          if (self._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
            attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = statement;
          }
        }
        const span = self._startSpan(
          this._model.collection,
          this._model?.modelName,
          "aggregate",
          attributes,
          parentSpan
        );
        return self._handleResponse(span, originalAggregate, this, arguments, callback, moduleVersion);
      };
    };
  }
  patchQueryExec(moduleVersion) {
    const self = this;
    return (originalExec) => {
      return function exec(callback) {
        if (this[_ALREADY_INSTRUMENTED]) {
          return originalExec.apply(this, arguments);
        }
        if (self.getConfig().requireParentSpan && api.trace.getSpan(api.context.active()) === void 0) {
          return originalExec.apply(this, arguments);
        }
        const parentSpan = this[_STORED_PARENT_SPAN];
        const attributes = {};
        const { dbStatementSerializer } = self.getConfig();
        if (dbStatementSerializer) {
          const statement = dbStatementSerializer(this.op, {
            // Use public API methods (getFilter/getOptions) for better compatibility
            condition: this.getFilter?.() ?? this._conditions,
            updates: this._update,
            options: this.getOptions?.() ?? this.options,
            fields: this._fields
          });
          if (self._dbSemconvStability & instrumentation.SemconvStability.OLD) {
            attributes[semconv.ATTR_DB_STATEMENT] = statement;
          }
          if (self._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
            attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = statement;
          }
        }
        const span = self._startSpan(this.mongooseCollection, this.model.modelName, this.op, attributes, parentSpan);
        return self._handleResponse(span, originalExec, this, arguments, callback, moduleVersion);
      };
    };
  }
  patchOnModelMethods(op, moduleVersion) {
    const self = this;
    return (originalOnModelFunction) => {
      return function method(options, callback) {
        if (self.getConfig().requireParentSpan && api.trace.getSpan(api.context.active()) === void 0) {
          return originalOnModelFunction.apply(this, arguments);
        }
        const serializePayload = { document: this };
        if (options && !(options instanceof Function)) {
          serializePayload.options = options;
        }
        const attributes = {};
        const { dbStatementSerializer } = self.getConfig();
        if (dbStatementSerializer) {
          const statement = dbStatementSerializer(op, serializePayload);
          if (self._dbSemconvStability & instrumentation.SemconvStability.OLD) {
            attributes[semconv.ATTR_DB_STATEMENT] = statement;
          }
          if (self._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
            attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = statement;
          }
        }
        const span = self._startSpan(this.constructor.collection, this.constructor.modelName, op, attributes);
        if (options instanceof Function) {
          callback = options;
          options = void 0;
        }
        return self._handleResponse(span, originalOnModelFunction, this, arguments, callback, moduleVersion);
      };
    };
  }
  // Patch document instance methods (doc.updateOne/deleteOne) for Mongoose 8.21.0+.
  _patchDocumentUpdateMethods(op, moduleVersion) {
    const self = this;
    return (originalMethod) => {
      return function method(update, options, callback) {
        if (self.getConfig().requireParentSpan && api.trace.getSpan(api.context.active()) === void 0) {
          return originalMethod.apply(this, arguments);
        }
        let actualCallback = callback;
        let actualUpdate = update;
        let actualOptions = options;
        if (typeof update === "function") {
          actualCallback = update;
          actualUpdate = void 0;
          actualOptions = void 0;
        } else if (typeof options === "function") {
          actualCallback = options;
          actualOptions = void 0;
        }
        const attributes = {};
        const dbStatementSerializer = self.getConfig().dbStatementSerializer;
        if (dbStatementSerializer) {
          const statement = dbStatementSerializer(op, {
            // Document instance methods automatically use the document's _id as filter
            condition: { _id: this._id },
            updates: actualUpdate,
            options: actualOptions
          });
          if (self._dbSemconvStability & instrumentation.SemconvStability.OLD) {
            attributes[semconv.ATTR_DB_STATEMENT] = statement;
          }
          if (self._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
            attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = statement;
          }
        }
        const span = self._startSpan(this.constructor.collection, this.constructor.modelName, op, attributes);
        const result = self._handleResponse(span, originalMethod, this, arguments, actualCallback, moduleVersion);
        if (result && typeof result === "object") {
          result[_ALREADY_INSTRUMENTED] = true;
        }
        return result;
      };
    };
  }
  patchModelStatic(op, moduleVersion) {
    const self = this;
    return (original) => {
      return function patchedStatic(docsOrOps, options, callback) {
        if (self.getConfig().requireParentSpan && api.trace.getSpan(api.context.active()) === void 0) {
          return original.apply(this, arguments);
        }
        if (typeof options === "function") {
          callback = options;
          options = void 0;
        }
        const serializePayload = {};
        switch (op) {
          case "insertMany":
            serializePayload.documents = docsOrOps;
            break;
          case "bulkWrite":
            serializePayload.operations = docsOrOps;
            break;
          default:
            serializePayload.document = docsOrOps;
            break;
        }
        if (options !== void 0) {
          serializePayload.options = options;
        }
        const attributes = {};
        const { dbStatementSerializer } = self.getConfig();
        if (dbStatementSerializer) {
          const statement = dbStatementSerializer(op, serializePayload);
          if (self._dbSemconvStability & instrumentation.SemconvStability.OLD) {
            attributes[semconv.ATTR_DB_STATEMENT] = statement;
          }
          if (self._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
            attributes[semanticConventions.ATTR_DB_QUERY_TEXT] = statement;
          }
        }
        const span = self._startSpan(this.collection, this.modelName, op, attributes);
        return self._handleResponse(span, original, this, arguments, callback, moduleVersion);
      };
    };
  }
  // we want to capture the otel span on the object which is calling exec.
  // in the special case of aggregate, we need have no function to path
  // on the Aggregate object to capture the context on, so we patch
  // the aggregate of Model, and set the context on the Aggregate object
  patchModelAggregate() {
    const self = this;
    return (original) => {
      return function captureSpanContext() {
        const currentSpan = api.trace.getSpan(api.context.active());
        const aggregate = self._callOriginalFunction(() => original.apply(this, arguments));
        if (aggregate) aggregate[_STORED_PARENT_SPAN] = currentSpan;
        return aggregate;
      };
    };
  }
  patchAndCaptureSpanContext(funcName) {
    const self = this;
    return (original) => {
      return function captureSpanContext() {
        this[_STORED_PARENT_SPAN] = api.trace.getSpan(api.context.active());
        return self._callOriginalFunction(() => original.apply(this, arguments));
      };
    };
  }
  _startSpan(collection, modelName, operation, attributes, parentSpan) {
    const finalAttributes = {
      ...attributes,
      ...utils.getAttributesFromCollection(collection, this._dbSemconvStability, this._netSemconvStability)
    };
    if (this._dbSemconvStability & instrumentation.SemconvStability.OLD) {
      finalAttributes[semconv.ATTR_DB_OPERATION] = operation;
      finalAttributes[semconv.ATTR_DB_SYSTEM] = "mongoose";
    }
    if (this._dbSemconvStability & instrumentation.SemconvStability.STABLE) {
      finalAttributes[semanticConventions.ATTR_DB_OPERATION_NAME] = operation;
      finalAttributes[semanticConventions.ATTR_DB_SYSTEM_NAME] = semconv.DB_SYSTEM_NAME_VALUE_MONGODB;
    }
    const spanName = this._dbSemconvStability & instrumentation.SemconvStability.STABLE ? `${operation} ${collection.name}` : `mongoose.${modelName}.${operation}`;
    return this.tracer.startSpan(
      spanName,
      {
        kind: api.SpanKind.CLIENT,
        attributes: finalAttributes
      },
      parentSpan ? api.trace.setSpan(api.context.active(), parentSpan) : void 0
    );
  }
  _handleResponse(span, exec, originalThis, args, callback, moduleVersion = void 0) {
    const self = this;
    if (callback instanceof Function) {
      return self._callOriginalFunction(
        () => utils.handleCallbackResponse(callback, exec, originalThis, span, args, self.getConfig().responseHook, moduleVersion)
      );
    } else {
      const response = self._callOriginalFunction(() => exec.apply(originalThis, args));
      return utils.handlePromiseResponse(response, span, self.getConfig().responseHook, moduleVersion);
    }
  }
  _callOriginalFunction(originalFunction) {
    if (this.getConfig().suppressInternalInstrumentation) {
      return api.context.with(core$1.suppressTracing(api.context.active()), originalFunction);
    } else {
      return originalFunction();
    }
  }
}

exports.MongooseInstrumentation = MongooseInstrumentation;
exports._ALREADY_INSTRUMENTED = _ALREADY_INSTRUMENTED;
exports._STORED_PARENT_SPAN = _STORED_PARENT_SPAN;
//# sourceMappingURL=mongoose.js.map
