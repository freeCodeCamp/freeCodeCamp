import * as api from '@opentelemetry/api';
import { AllowedOperationTypes, TokenKind, SpanNames } from './enum.js';
import { AttributeNames } from './enums/AttributeNames.js';
import { OTEL_PATCHED_SYMBOL, OTEL_GRAPHQL_DATA_SYMBOL } from './symbols.js';

const OPERATION_VALUES = Object.values(AllowedOperationTypes);
const isPromise = (value) => {
  return typeof value?.then === "function";
};
const isObjectLike = (value) => {
  return typeof value == "object" && value !== null;
};
function addInputVariableAttribute(span, key, variable) {
  if (Array.isArray(variable)) {
    variable.forEach((value, idx) => {
      addInputVariableAttribute(span, `${key}.${idx}`, value);
    });
  } else if (variable instanceof Object) {
    Object.entries(variable).forEach(([nestedKey, value]) => {
      addInputVariableAttribute(span, `${key}.${nestedKey}`, value);
    });
  } else {
    span.setAttribute(`${AttributeNames.VARIABLES}${String(key)}`, variable);
  }
}
function addInputVariableAttributes(span, variableValues) {
  Object.entries(variableValues).forEach(([key, value]) => {
    addInputVariableAttribute(span, key, value);
  });
}
function addSpanSource(span, loc, allowValues, start, end) {
  const source = getSourceFromLocation(loc, allowValues, start, end);
  span.setAttribute(AttributeNames.SOURCE, source);
}
function createFieldIfNotExists(tracer, getConfig, contextValue, info, path) {
  let field = getField(contextValue, path);
  if (field) {
    return { field, spanAdded: false };
  }
  const config = getConfig();
  const parentSpan = config.flatResolveSpans ? getRootSpan(contextValue) : getParentFieldSpan(contextValue, path);
  field = {
    span: createResolverSpan(tracer, getConfig, contextValue, info, path, parentSpan)
  };
  addField(contextValue, path, field);
  return { field, spanAdded: true };
}
function createResolverSpan(tracer, getConfig, contextValue, info, path, parentSpan) {
  const attributes = {
    [AttributeNames.FIELD_NAME]: info.fieldName,
    [AttributeNames.FIELD_PATH]: path.join("."),
    [AttributeNames.FIELD_TYPE]: info.returnType.toString(),
    [AttributeNames.PARENT_NAME]: info.parentType.name
  };
  const span = tracer.startSpan(
    `${SpanNames.RESOLVE} ${attributes[AttributeNames.FIELD_PATH]}`,
    {
      attributes
    },
    parentSpan ? api.trace.setSpan(api.context.active(), parentSpan) : void 0
  );
  const document = contextValue[OTEL_GRAPHQL_DATA_SYMBOL].source;
  const fieldNode = info.fieldNodes.find((fieldNode2) => fieldNode2.kind === "Field");
  if (fieldNode) {
    addSpanSource(span, document.loc, getConfig().allowValues, fieldNode.loc?.start, fieldNode.loc?.end);
  }
  return span;
}
function endSpan(span, error) {
  if (error) {
    span.recordException(error);
  }
  span.end();
}
function getOperation(document, operationName) {
  if (!document || !Array.isArray(document.definitions)) {
    return void 0;
  }
  if (operationName) {
    return document.definitions.filter((definition) => OPERATION_VALUES.indexOf(definition?.operation) !== -1).find((definition) => operationName === definition?.name?.value);
  } else {
    return document.definitions.find((definition) => OPERATION_VALUES.indexOf(definition?.operation) !== -1);
  }
}
function addField(contextValue, path, field) {
  return contextValue[OTEL_GRAPHQL_DATA_SYMBOL].fields[path.join(".")] = field;
}
function getField(contextValue, path) {
  return contextValue[OTEL_GRAPHQL_DATA_SYMBOL].fields[path.join(".")];
}
function getParentFieldSpan(contextValue, path) {
  for (let i = path.length - 1; i > 0; i--) {
    const field = getField(contextValue, path.slice(0, i));
    if (field) {
      return field.span;
    }
  }
  return getRootSpan(contextValue);
}
function getRootSpan(contextValue) {
  return contextValue[OTEL_GRAPHQL_DATA_SYMBOL].span;
}
function pathToArray(mergeItems, path) {
  const flattened = [];
  let curr = path;
  while (curr) {
    let key = curr.key;
    if (mergeItems && typeof key === "number") {
      key = "*";
    }
    flattened.push(String(key));
    curr = curr.prev;
  }
  return flattened.reverse();
}
function repeatBreak(i) {
  return repeatChar("\n", i);
}
function repeatSpace(i) {
  return repeatChar(" ", i);
}
function repeatChar(char, to) {
  let text = "";
  for (let i = 0; i < to; i++) {
    text += char;
  }
  return text;
}
const KindsToBeRemoved = [TokenKind.FLOAT, TokenKind.STRING, TokenKind.INT, TokenKind.BLOCK_STRING];
function getSourceFromLocation(loc, allowValues = false, inputStart, inputEnd) {
  let source = "";
  if (loc?.startToken) {
    const start = typeof inputStart === "number" ? inputStart : loc.start;
    const end = typeof inputEnd === "number" ? inputEnd : loc.end;
    let next = loc.startToken.next;
    let previousLine = 1;
    while (next) {
      if (next.start < start) {
        next = next.next;
        previousLine = next?.line;
        continue;
      }
      if (next.end > end) {
        next = next.next;
        previousLine = next?.line;
        continue;
      }
      let value = next.value || next.kind;
      let space = "";
      if (!allowValues && KindsToBeRemoved.indexOf(next.kind) >= 0) {
        value = "*";
      }
      if (next.kind === TokenKind.STRING) {
        value = `"${value}"`;
      }
      if (next.kind === TokenKind.EOF) {
        value = "";
      }
      if (next.line > previousLine) {
        source += repeatBreak(next.line - previousLine);
        previousLine = next.line;
        space = repeatSpace(next.column - 1);
      } else {
        if (next.line === next.prev?.line) {
          space = repeatSpace(next.start - (next.prev?.end || 0));
        }
      }
      source += space + value;
      if (next) {
        next = next.next;
      }
    }
  }
  return source;
}
function wrapFields(type, tracer, getConfig) {
  if (!type || type[OTEL_PATCHED_SYMBOL]) {
    return;
  }
  const fields = type.getFields();
  type[OTEL_PATCHED_SYMBOL] = true;
  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    if (!field) {
      return;
    }
    if (field.resolve) {
      field.resolve = wrapFieldResolver(tracer, getConfig, field.resolve);
    }
    if (field.type) {
      const unwrappedTypes = unwrapType(field.type);
      for (const unwrappedType of unwrappedTypes) {
        wrapFields(unwrappedType, tracer, getConfig);
      }
    }
  });
}
function unwrapType(type) {
  if ("ofType" in type) {
    return unwrapType(type.ofType);
  }
  if (isGraphQLUnionType(type)) {
    return type.getTypes();
  }
  if (isGraphQLObjectType(type)) {
    return [type];
  }
  return [];
}
function isGraphQLUnionType(type) {
  return "getTypes" in type && typeof type.getTypes === "function";
}
function isGraphQLObjectType(type) {
  return "getFields" in type && typeof type.getFields === "function";
}
const handleResolveSpanError = (resolveSpan, err, shouldEndSpan) => {
  if (!shouldEndSpan) {
    return;
  }
  resolveSpan.recordException(err);
  resolveSpan.setStatus({
    code: api.SpanStatusCode.ERROR,
    message: err.message
  });
  resolveSpan.end();
};
const handleResolveSpanSuccess = (resolveSpan, shouldEndSpan) => {
  if (!shouldEndSpan) {
    return;
  }
  resolveSpan.end();
};
function wrapFieldResolver(tracer, getConfig, fieldResolver, isDefaultResolver = false) {
  if (wrappedFieldResolver[OTEL_PATCHED_SYMBOL] || typeof fieldResolver !== "function") {
    return fieldResolver;
  }
  function wrappedFieldResolver(source, args, contextValue, info) {
    if (!fieldResolver) {
      return void 0;
    }
    const config = getConfig();
    if (config.ignoreTrivialResolveSpans && isDefaultResolver && (isObjectLike(source) || typeof source === "function")) {
      const property = source[info.fieldName];
      if (typeof property !== "function") {
        return fieldResolver.call(this, source, args, contextValue, info);
      }
    }
    if (!contextValue[OTEL_GRAPHQL_DATA_SYMBOL]) {
      return fieldResolver.call(this, source, args, contextValue, info);
    }
    const path = pathToArray(config.mergeItems, info && info.path);
    const depth = path.filter((item) => typeof item === "string").length;
    let span;
    let shouldEndSpan = false;
    if (config.depth >= 0 && config.depth < depth) {
      span = getParentFieldSpan(contextValue, path);
    } else {
      const { field, spanAdded } = createFieldIfNotExists(tracer, getConfig, contextValue, info, path);
      span = field.span;
      shouldEndSpan = spanAdded;
    }
    return api.context.with(api.trace.setSpan(api.context.active(), span), () => {
      try {
        const res = fieldResolver.call(this, source, args, contextValue, info);
        if (isPromise(res)) {
          return res.then(
            (r) => {
              handleResolveSpanSuccess(span, shouldEndSpan);
              return r;
            },
            (err) => {
              handleResolveSpanError(span, err, shouldEndSpan);
              throw err;
            }
          );
        } else {
          handleResolveSpanSuccess(span, shouldEndSpan);
          return res;
        }
      } catch (err) {
        handleResolveSpanError(span, err, shouldEndSpan);
        throw err;
      }
    });
  }
  wrappedFieldResolver[OTEL_PATCHED_SYMBOL] = true;
  return wrappedFieldResolver;
}

export { addInputVariableAttributes, addSpanSource, endSpan, getOperation, getSourceFromLocation, isPromise, wrapFieldResolver, wrapFields };
//# sourceMappingURL=utils.js.map
