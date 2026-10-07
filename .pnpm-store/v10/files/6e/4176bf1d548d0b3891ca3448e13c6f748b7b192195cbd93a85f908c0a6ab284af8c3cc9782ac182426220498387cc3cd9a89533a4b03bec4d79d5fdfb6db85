Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const instrumentation = require('@opentelemetry/instrumentation');
const _enum = require('./enum.js');
const AttributeNames = require('./enums/AttributeNames.js');
const symbols = require('./symbols.js');
const internalTypes = require('./internal-types.js');
const utils = require('./utils.js');
const core = require('@sentry/core');

const PACKAGE_NAME = "@sentry/instrumentation-graphql";
const DEFAULT_CONFIG = {
  mergeItems: false,
  depth: -1,
  allowValues: false,
  ignoreResolveSpans: false
};
const supportedVersions = [">=14.0.0 <17"];
class GraphQLInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, core.SDK_VERSION, { ...DEFAULT_CONFIG, ...config });
  }
  setConfig(config = {}) {
    super.setConfig({ ...DEFAULT_CONFIG, ...config });
  }
  init() {
    const module = new instrumentation.InstrumentationNodeModuleDefinition("graphql", supportedVersions);
    module.files.push(this._addPatchingExecute());
    module.files.push(this._addPatchingParser());
    module.files.push(this._addPatchingValidate());
    return module;
  }
  _addPatchingExecute() {
    return new instrumentation.InstrumentationNodeModuleFile(
      "graphql/execution/execute.js",
      supportedVersions,
      // cannot make it work with appropriate type as execute function has 2
      //types and/cannot import function but only types
      (moduleExports) => {
        if (instrumentation.isWrapped(moduleExports.execute)) {
          this._unwrap(moduleExports, "execute");
        }
        this._wrap(moduleExports, "execute", this._patchExecute(moduleExports.defaultFieldResolver));
        return moduleExports;
      },
      (moduleExports) => {
        if (moduleExports) {
          this._unwrap(moduleExports, "execute");
        }
      }
    );
  }
  _addPatchingParser() {
    return new instrumentation.InstrumentationNodeModuleFile(
      "graphql/language/parser.js",
      supportedVersions,
      (moduleExports) => {
        if (instrumentation.isWrapped(moduleExports.parse)) {
          this._unwrap(moduleExports, "parse");
        }
        this._wrap(moduleExports, "parse", this._patchParse());
        return moduleExports;
      },
      (moduleExports) => {
        if (moduleExports) {
          this._unwrap(moduleExports, "parse");
        }
      }
    );
  }
  _addPatchingValidate() {
    return new instrumentation.InstrumentationNodeModuleFile(
      "graphql/validation/validate.js",
      supportedVersions,
      (moduleExports) => {
        if (instrumentation.isWrapped(moduleExports.validate)) {
          this._unwrap(moduleExports, "validate");
        }
        this._wrap(moduleExports, "validate", this._patchValidate());
        return moduleExports;
      },
      (moduleExports) => {
        if (moduleExports) {
          this._unwrap(moduleExports, "validate");
        }
      }
    );
  }
  _patchExecute(defaultFieldResolved) {
    const instrumentation$1 = this;
    return function execute(original) {
      return function patchExecute() {
        let processedArgs;
        if (arguments.length >= 2) {
          const args = arguments;
          processedArgs = instrumentation$1._wrapExecuteArgs(
            args[0],
            args[1],
            args[2],
            args[3],
            args[4],
            args[5],
            args[6],
            args[7],
            defaultFieldResolved
          );
        } else {
          const args = arguments[0];
          processedArgs = instrumentation$1._wrapExecuteArgs(
            args.schema,
            args.document,
            args.rootValue,
            args.contextValue,
            args.variableValues,
            args.operationName,
            args.fieldResolver,
            args.typeResolver,
            defaultFieldResolved
          );
        }
        const operation = utils.getOperation(processedArgs.document, processedArgs.operationName);
        const span = instrumentation$1._createExecuteSpan(operation, processedArgs);
        processedArgs.contextValue[symbols.OTEL_GRAPHQL_DATA_SYMBOL] = {
          source: processedArgs.document ? processedArgs.document || processedArgs.document[symbols.OTEL_GRAPHQL_DATA_SYMBOL] : void 0,
          span,
          fields: {}
        };
        return api.context.with(api.trace.setSpan(api.context.active(), span), () => {
          return instrumentation.safeExecuteInTheMiddle(
            () => {
              return original.apply(this, [processedArgs]);
            },
            (err, result) => {
              instrumentation$1._handleExecutionResult(span, err, result);
            }
          );
        });
      };
    };
  }
  _handleExecutionResult(span, err, result) {
    const config = this.getConfig();
    if (result === void 0 || err) {
      utils.endSpan(span, err);
      return;
    }
    if (utils.isPromise(result)) {
      result.then(
        (resultData) => {
          if (typeof config.responseHook !== "function") {
            utils.endSpan(span);
            return;
          }
          this._executeResponseHook(span, resultData);
        },
        (error) => {
          utils.endSpan(span, error);
        }
      );
    } else {
      if (typeof config.responseHook !== "function") {
        utils.endSpan(span);
        return;
      }
      this._executeResponseHook(span, result);
    }
  }
  _executeResponseHook(span, result) {
    const { responseHook } = this.getConfig();
    if (!responseHook) {
      return;
    }
    instrumentation.safeExecuteInTheMiddle(
      () => {
        responseHook(span, result);
      },
      (err) => {
        if (err) {
          this._diag.error("Error running response hook", err);
        }
        utils.endSpan(span, void 0);
      },
      true
    );
  }
  _patchParse() {
    const instrumentation = this;
    return function parse(original) {
      return function patchParse(source, options) {
        return instrumentation._parse(this, original, source, options);
      };
    };
  }
  _patchValidate() {
    const instrumentation = this;
    return function validate(original) {
      return function patchValidate(schema, documentAST, rules, options, typeInfo) {
        return instrumentation._validate(this, original, schema, documentAST, rules, typeInfo, options);
      };
    };
  }
  _parse(obj, original, source, options) {
    const config = this.getConfig();
    const span = this.tracer.startSpan(_enum.SpanNames.PARSE);
    return api.context.with(api.trace.setSpan(api.context.active(), span), () => {
      return instrumentation.safeExecuteInTheMiddle(
        () => {
          return original.call(obj, source, options);
        },
        (err, result) => {
          if (result) {
            const operation = utils.getOperation(result);
            if (!operation) {
              span.updateName(_enum.SpanNames.SCHEMA_PARSE);
            } else if (result.loc) {
              utils.addSpanSource(span, result.loc, config.allowValues);
            }
          }
          utils.endSpan(span, err);
        }
      );
    });
  }
  _validate(obj, original, schema, documentAST, rules, typeInfo, options) {
    const span = this.tracer.startSpan(_enum.SpanNames.VALIDATE, {});
    return api.context.with(api.trace.setSpan(api.context.active(), span), () => {
      return instrumentation.safeExecuteInTheMiddle(
        () => {
          return original.call(obj, schema, documentAST, rules, options, typeInfo);
        },
        (err, errors) => {
          if (!documentAST.loc) {
            span.updateName(_enum.SpanNames.SCHEMA_VALIDATE);
          }
          if (errors && errors.length) {
            span.recordException({
              name: AttributeNames.AttributeNames.ERROR_VALIDATION_NAME,
              message: JSON.stringify(errors)
            });
          }
          utils.endSpan(span, err);
        }
      );
    });
  }
  _createExecuteSpan(operation, processedArgs) {
    const config = this.getConfig();
    const span = this.tracer.startSpan(_enum.SpanNames.EXECUTE, {});
    if (operation) {
      const { operation: operationType, name: nameNode } = operation;
      span.setAttribute(AttributeNames.AttributeNames.OPERATION_TYPE, operationType);
      const operationName = nameNode?.value;
      if (operationName) {
        span.setAttribute(AttributeNames.AttributeNames.OPERATION_NAME, operationName);
        span.updateName(`${operationType} ${operationName}`);
      } else {
        span.updateName(operationType);
      }
    } else {
      let operationName = " ";
      if (processedArgs.operationName) {
        operationName = ` "${processedArgs.operationName}" `;
      }
      operationName = internalTypes.OPERATION_NOT_SUPPORTED.replace("$operationName$", operationName);
      span.setAttribute(AttributeNames.AttributeNames.OPERATION_NAME, operationName);
    }
    if (processedArgs.document?.loc) {
      utils.addSpanSource(span, processedArgs.document.loc, config.allowValues);
    }
    if (processedArgs.variableValues && config.allowValues) {
      utils.addInputVariableAttributes(span, processedArgs.variableValues);
    }
    return span;
  }
  _wrapExecuteArgs(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver, defaultFieldResolved) {
    if (!contextValue) {
      contextValue = {};
    }
    if (contextValue[symbols.OTEL_GRAPHQL_DATA_SYMBOL] || this.getConfig().ignoreResolveSpans) {
      return {
        schema,
        document,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        typeResolver
      };
    }
    const isUsingDefaultResolver = fieldResolver == null;
    const fieldResolverForExecute = fieldResolver ?? defaultFieldResolved;
    fieldResolver = utils.wrapFieldResolver(
      this.tracer,
      () => this.getConfig(),
      fieldResolverForExecute,
      isUsingDefaultResolver
    );
    if (schema) {
      utils.wrapFields(schema.getQueryType(), this.tracer, () => this.getConfig());
      utils.wrapFields(schema.getMutationType(), this.tracer, () => this.getConfig());
    }
    return {
      schema,
      document,
      rootValue,
      contextValue,
      variableValues,
      operationName,
      fieldResolver,
      typeResolver
    };
  }
}

exports.GraphQLInstrumentation = GraphQLInstrumentation;
//# sourceMappingURL=instrumentation.js.map
