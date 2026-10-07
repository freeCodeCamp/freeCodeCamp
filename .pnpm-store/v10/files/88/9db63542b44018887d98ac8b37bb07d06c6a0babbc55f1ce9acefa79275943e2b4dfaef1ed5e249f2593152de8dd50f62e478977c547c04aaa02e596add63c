import { context, trace } from '@opentelemetry/api';
import { InstrumentationBase, InstrumentationNodeModuleDefinition, InstrumentationNodeModuleFile, isWrapped, safeExecuteInTheMiddle } from '@opentelemetry/instrumentation';
import { SpanNames } from './enum.js';
import { AttributeNames } from './enums/AttributeNames.js';
import { OTEL_GRAPHQL_DATA_SYMBOL } from './symbols.js';
import { OPERATION_NOT_SUPPORTED } from './internal-types.js';
import { getOperation, endSpan, isPromise, addSpanSource, addInputVariableAttributes, wrapFieldResolver, wrapFields } from './utils.js';
import { SDK_VERSION } from '@sentry/core';

const PACKAGE_NAME = "@sentry/instrumentation-graphql";
const DEFAULT_CONFIG = {
  mergeItems: false,
  depth: -1,
  allowValues: false,
  ignoreResolveSpans: false
};
const supportedVersions = [">=14.0.0 <17"];
class GraphQLInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, { ...DEFAULT_CONFIG, ...config });
  }
  setConfig(config = {}) {
    super.setConfig({ ...DEFAULT_CONFIG, ...config });
  }
  init() {
    const module = new InstrumentationNodeModuleDefinition("graphql", supportedVersions);
    module.files.push(this._addPatchingExecute());
    module.files.push(this._addPatchingParser());
    module.files.push(this._addPatchingValidate());
    return module;
  }
  _addPatchingExecute() {
    return new InstrumentationNodeModuleFile(
      "graphql/execution/execute.js",
      supportedVersions,
      // cannot make it work with appropriate type as execute function has 2
      //types and/cannot import function but only types
      (moduleExports) => {
        if (isWrapped(moduleExports.execute)) {
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
    return new InstrumentationNodeModuleFile(
      "graphql/language/parser.js",
      supportedVersions,
      (moduleExports) => {
        if (isWrapped(moduleExports.parse)) {
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
    return new InstrumentationNodeModuleFile(
      "graphql/validation/validate.js",
      supportedVersions,
      (moduleExports) => {
        if (isWrapped(moduleExports.validate)) {
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
    const instrumentation = this;
    return function execute(original) {
      return function patchExecute() {
        let processedArgs;
        if (arguments.length >= 2) {
          const args = arguments;
          processedArgs = instrumentation._wrapExecuteArgs(
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
          processedArgs = instrumentation._wrapExecuteArgs(
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
        const operation = getOperation(processedArgs.document, processedArgs.operationName);
        const span = instrumentation._createExecuteSpan(operation, processedArgs);
        processedArgs.contextValue[OTEL_GRAPHQL_DATA_SYMBOL] = {
          source: processedArgs.document ? processedArgs.document || processedArgs.document[OTEL_GRAPHQL_DATA_SYMBOL] : void 0,
          span,
          fields: {}
        };
        return context.with(trace.setSpan(context.active(), span), () => {
          return safeExecuteInTheMiddle(
            () => {
              return original.apply(this, [processedArgs]);
            },
            (err, result) => {
              instrumentation._handleExecutionResult(span, err, result);
            }
          );
        });
      };
    };
  }
  _handleExecutionResult(span, err, result) {
    const config = this.getConfig();
    if (result === void 0 || err) {
      endSpan(span, err);
      return;
    }
    if (isPromise(result)) {
      result.then(
        (resultData) => {
          if (typeof config.responseHook !== "function") {
            endSpan(span);
            return;
          }
          this._executeResponseHook(span, resultData);
        },
        (error) => {
          endSpan(span, error);
        }
      );
    } else {
      if (typeof config.responseHook !== "function") {
        endSpan(span);
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
    safeExecuteInTheMiddle(
      () => {
        responseHook(span, result);
      },
      (err) => {
        if (err) {
          this._diag.error("Error running response hook", err);
        }
        endSpan(span, void 0);
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
    const span = this.tracer.startSpan(SpanNames.PARSE);
    return context.with(trace.setSpan(context.active(), span), () => {
      return safeExecuteInTheMiddle(
        () => {
          return original.call(obj, source, options);
        },
        (err, result) => {
          if (result) {
            const operation = getOperation(result);
            if (!operation) {
              span.updateName(SpanNames.SCHEMA_PARSE);
            } else if (result.loc) {
              addSpanSource(span, result.loc, config.allowValues);
            }
          }
          endSpan(span, err);
        }
      );
    });
  }
  _validate(obj, original, schema, documentAST, rules, typeInfo, options) {
    const span = this.tracer.startSpan(SpanNames.VALIDATE, {});
    return context.with(trace.setSpan(context.active(), span), () => {
      return safeExecuteInTheMiddle(
        () => {
          return original.call(obj, schema, documentAST, rules, options, typeInfo);
        },
        (err, errors) => {
          if (!documentAST.loc) {
            span.updateName(SpanNames.SCHEMA_VALIDATE);
          }
          if (errors && errors.length) {
            span.recordException({
              name: AttributeNames.ERROR_VALIDATION_NAME,
              message: JSON.stringify(errors)
            });
          }
          endSpan(span, err);
        }
      );
    });
  }
  _createExecuteSpan(operation, processedArgs) {
    const config = this.getConfig();
    const span = this.tracer.startSpan(SpanNames.EXECUTE, {});
    if (operation) {
      const { operation: operationType, name: nameNode } = operation;
      span.setAttribute(AttributeNames.OPERATION_TYPE, operationType);
      const operationName = nameNode?.value;
      if (operationName) {
        span.setAttribute(AttributeNames.OPERATION_NAME, operationName);
        span.updateName(`${operationType} ${operationName}`);
      } else {
        span.updateName(operationType);
      }
    } else {
      let operationName = " ";
      if (processedArgs.operationName) {
        operationName = ` "${processedArgs.operationName}" `;
      }
      operationName = OPERATION_NOT_SUPPORTED.replace("$operationName$", operationName);
      span.setAttribute(AttributeNames.OPERATION_NAME, operationName);
    }
    if (processedArgs.document?.loc) {
      addSpanSource(span, processedArgs.document.loc, config.allowValues);
    }
    if (processedArgs.variableValues && config.allowValues) {
      addInputVariableAttributes(span, processedArgs.variableValues);
    }
    return span;
  }
  _wrapExecuteArgs(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver, defaultFieldResolved) {
    if (!contextValue) {
      contextValue = {};
    }
    if (contextValue[OTEL_GRAPHQL_DATA_SYMBOL] || this.getConfig().ignoreResolveSpans) {
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
    fieldResolver = wrapFieldResolver(
      this.tracer,
      () => this.getConfig(),
      fieldResolverForExecute,
      isUsingDefaultResolver
    );
    if (schema) {
      wrapFields(schema.getQueryType(), this.tracer, () => this.getConfig());
      wrapFields(schema.getMutationType(), this.tracer, () => this.getConfig());
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

export { GraphQLInstrumentation };
//# sourceMappingURL=instrumentation.js.map
