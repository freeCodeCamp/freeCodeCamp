'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.assertValidExecutionArguments = assertValidExecutionArguments;
exports.buildExecutionContext = buildExecutionContext;
exports.buildResolveInfo = buildResolveInfo;
exports.defaultTypeResolver = exports.defaultFieldResolver = void 0;
exports.execute = execute;
exports.executeSync = executeSync;
exports.getFieldDef = getFieldDef;

var _devAssert = require('../jsutils/devAssert.js');

var _inspect = require('../jsutils/inspect.js');

var _invariant = require('../jsutils/invariant.js');

var _isIterableObject = require('../jsutils/isIterableObject.js');

var _isObjectLike = require('../jsutils/isObjectLike.js');

var _isPromise = require('../jsutils/isPromise.js');

var _memoize = require('../jsutils/memoize3.js');

var _Path = require('../jsutils/Path.js');

var _promiseForObject = require('../jsutils/promiseForObject.js');

var _promiseReduce = require('../jsutils/promiseReduce.js');

var _GraphQLError = require('../error/GraphQLError.js');

var _locatedError = require('../error/locatedError.js');

var _ast = require('../language/ast.js');

var _kinds = require('../language/kinds.js');

var _definition = require('../type/definition.js');

var _introspection = require('../type/introspection.js');

var _validate = require('../type/validate.js');

var _collectFields = require('./collectFields.js');

var _values = require('./values.js');

/**
 * A memoized collection of relevant subfields with regard to the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */
const collectSubfields = (0, _memoize.memoize3)(
  (exeContext, returnType, fieldNodes) =>
    (0, _collectFields.collectSubfields)(
      exeContext.schema,
      exeContext.fragments,
      exeContext.variableValues,
      returnType,
      fieldNodes,
    ),
);
/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g `a`
 * 2) fragment "spreads" e.g. `...c`
 * 3) inline fragment "spreads" e.g. `...on Type { a }`
 */

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */

/**
 * @internal
 */
class CollectedErrors {
  constructor() {
    this._errorPositions = new Set();
    this._errors = [];
  }

  get errors() {
    return this._errors;
  }

  add(error, path) {
    // Do not modify errors list if the execution position for this error or
    // any of its ancestors has already been nulled via error propagation.
    // This check should be unnecessary for implementations able to implement
    // actual cancellation.
    if (this._hasNulledPosition(path)) {
      return;
    }

    this._errorPositions.add(path);

    this._errors.push(error);
  }

  _hasNulledPosition(startPath) {
    let path = startPath;

    while (path !== undefined) {
      if (this._errorPositions.has(path)) {
        return true;
      }

      path = path.prev;
    }

    return this._errorPositions.has(undefined);
  }
}
/**
 * The result of GraphQL execution.
 *
 *   - `errors` is included when any errors occurred as a non-empty array.
 *   - `data` is the result of a successful execution of the query.
 *   - `extensions` is reserved for adding non-standard properties.
 */

/**
 * Implements the "Executing requests" section of the GraphQL specification.
 *
 * Returns either a synchronous ExecutionResult (if all encountered resolvers
 * are synchronous), or a Promise of an ExecutionResult that will eventually be
 * resolved and never rejected.
 *
 * If the arguments to this function do not result in a legal execution context,
 * a GraphQLError will be thrown immediately explaining the invalid input.
 */
function execute(args) {
  // Temporary for v15 to v16 migration. Remove in v17
  arguments.length < 2 ||
    (0, _devAssert.devAssert)(
      false,
      'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.',
    );
  const { schema, document, variableValues, rootValue } = args; // If arguments are missing or incorrect, throw an error.

  assertValidExecutionArguments(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.

  const exeContext = buildExecutionContext(args); // Return early errors if execution context failed.

  if (!('schema' in exeContext)) {
    return {
      errors: exeContext,
    };
  } // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.
  //
  // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.

  try {
    const { operation } = exeContext;
    const result = executeOperation(exeContext, operation, rootValue);

    if ((0, _isPromise.isPromise)(result)) {
      return result.then(
        (data) => buildResponse(data, exeContext.collectedErrors.errors),
        (error) => {
          exeContext.collectedErrors.add(error, undefined);
          return buildResponse(null, exeContext.collectedErrors.errors);
        },
      );
    }

    return buildResponse(result, exeContext.collectedErrors.errors);
  } catch (error) {
    exeContext.collectedErrors.add(error, undefined);
    return buildResponse(null, exeContext.collectedErrors.errors);
  }
}
/**
 * Also implements the "Executing requests" section of the GraphQL specification.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

function executeSync(args) {
  const result = execute(args); // Assert that the execution was synchronous.

  if ((0, _isPromise.isPromise)(result)) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}
/**
 * Given a completed execution context and data, build the `{ errors, data }`
 * response defined by the "Response" section of the GraphQL specification.
 */

function buildResponse(data, errors) {
  return errors.length === 0
    ? {
        data,
      }
    : {
        errors,
        data,
      };
}
/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 *
 * @deprecated will be removed in v17 in favor of assertValidSchema() and TS checks
 * @internal
 */

function assertValidExecutionArguments(schema, document, rawVariableValues) {
  document || (0, _devAssert.devAssert)(false, 'Must provide document.'); // If the schema used for execution is invalid, throw an error.

  (0, _validate.assertValidSchema)(schema); // Variables, if provided, must be an object.

  rawVariableValues == null ||
    (0, _isObjectLike.isObjectLike)(rawVariableValues) ||
    (0, _devAssert.devAssert)(
      false,
      'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.',
    );
}
/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 *
 * @internal
 */

function buildExecutionContext(args) {
  var _definition$name, _operation$variableDe, _options$maxCoercionE;

  const {
    schema,
    document,
    rootValue,
    contextValue,
    variableValues: rawVariableValues,
    operationName,
    fieldResolver,
    typeResolver,
    subscribeFieldResolver,
    options,
  } = args;
  let operation;
  const fragments = Object.create(null);

  for (const definition of document.definitions) {
    switch (definition.kind) {
      case _kinds.Kind.OPERATION_DEFINITION:
        if (operationName == null) {
          if (operation !== undefined) {
            return [
              new _GraphQLError.GraphQLError(
                'Must provide operation name if query contains multiple operations.',
              ),
            ];
          }

          operation = definition;
        } else if (
          ((_definition$name = definition.name) === null ||
          _definition$name === void 0
            ? void 0
            : _definition$name.value) === operationName
        ) {
          operation = definition;
        }

        break;

      case _kinds.Kind.FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;

      default: // ignore non-executable definitions
    }
  }

  if (!operation) {
    if (operationName != null) {
      return [
        new _GraphQLError.GraphQLError(
          `Unknown operation named "${operationName}".`,
        ),
      ];
    }

    return [new _GraphQLError.GraphQLError('Must provide an operation.')];
  } // FIXME: https://github.com/graphql/graphql-js/issues/2203

  /* c8 ignore next */

  const variableDefinitions =
    (_operation$variableDe = operation.variableDefinitions) !== null &&
    _operation$variableDe !== void 0
      ? _operation$variableDe
      : [];
  const coercedVariableValues = (0, _values.getVariableValues)(
    schema,
    variableDefinitions,
    rawVariableValues !== null && rawVariableValues !== void 0
      ? rawVariableValues
      : {},
    {
      maxErrors:
        (_options$maxCoercionE =
          options === null || options === void 0
            ? void 0
            : options.maxCoercionErrors) !== null &&
        _options$maxCoercionE !== void 0
          ? _options$maxCoercionE
          : 50,
    },
  );

  if (coercedVariableValues.errors) {
    return coercedVariableValues.errors;
  }

  return {
    schema,
    fragments,
    rootValue,
    contextValue,
    operation,
    variableValues: coercedVariableValues.coerced,
    fieldResolver:
      fieldResolver !== null && fieldResolver !== void 0
        ? fieldResolver
        : defaultFieldResolver,
    typeResolver:
      typeResolver !== null && typeResolver !== void 0
        ? typeResolver
        : defaultTypeResolver,
    subscribeFieldResolver:
      subscribeFieldResolver !== null && subscribeFieldResolver !== void 0
        ? subscribeFieldResolver
        : defaultFieldResolver,
    collectedErrors: new CollectedErrors(),
  };
}
/**
 * Implements the "Executing operations" section of the spec.
 */

function executeOperation(exeContext, operation, rootValue) {
  const rootType = exeContext.schema.getRootType(operation.operation);

  if (rootType == null) {
    throw new _GraphQLError.GraphQLError(
      `Schema is not configured to execute ${operation.operation} operation.`,
      {
        nodes: operation,
      },
    );
  }

  const rootFields = (0, _collectFields.collectFields)(
    exeContext.schema,
    exeContext.fragments,
    exeContext.variableValues,
    rootType,
    operation.selectionSet,
  );
  const path = undefined;

  switch (operation.operation) {
    case _ast.OperationTypeNode.QUERY:
      return executeFields(exeContext, rootType, rootValue, path, rootFields);

    case _ast.OperationTypeNode.MUTATION:
      return executeFieldsSerially(
        exeContext,
        rootType,
        rootValue,
        path,
        rootFields,
      );

    case _ast.OperationTypeNode.SUBSCRIPTION:
      // TODO: deprecate `subscribe` and move all logic here
      // Temporary solution until we finish merging execute and subscribe together
      return executeFields(exeContext, rootType, rootValue, path, rootFields);
  }
}
/**
 * Implements the "Executing selection sets" section of the spec
 * for fields that must be executed serially.
 */

function executeFieldsSerially(
  exeContext,
  parentType,
  sourceValue,
  path,
  fields,
) {
  return (0, _promiseReduce.promiseReduce)(
    fields.entries(),
    (results, [responseName, fieldNodes]) => {
      const fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
      const result = executeField(
        exeContext,
        parentType,
        sourceValue,
        fieldNodes,
        fieldPath,
      );

      if (result === undefined) {
        return results;
      }

      if ((0, _isPromise.isPromise)(result)) {
        return result.then((resolvedResult) => {
          results[responseName] = resolvedResult;
          return results;
        });
      }

      results[responseName] = result;
      return results;
    },
    Object.create(null),
  );
}
/**
 * Implements the "Executing selection sets" section of the spec
 * for fields that may be executed in parallel.
 */

function executeFields(exeContext, parentType, sourceValue, path, fields) {
  const results = Object.create(null);
  let containsPromise = false;

  try {
    for (const [responseName, fieldNodes] of fields.entries()) {
      const fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
      const result = executeField(
        exeContext,
        parentType,
        sourceValue,
        fieldNodes,
        fieldPath,
      );

      if (result !== undefined) {
        results[responseName] = result;

        if ((0, _isPromise.isPromise)(result)) {
          containsPromise = true;
        }
      }
    }
  } catch (error) {
    if (containsPromise) {
      // Ensure that any promises returned by other fields are handled, as they may also reject.
      return (0, _promiseForObject.promiseForObject)(results).finally(() => {
        throw error;
      });
    }

    throw error;
  } // If there are no promises, we can just return the object

  if (!containsPromise) {
    return results;
  } // Otherwise, results is a map from field name to the result of resolving that
  // field, which is possibly a promise. Return a promise that will return this
  // same map, but with any promises replaced with the values they resolved to.

  return (0, _promiseForObject.promiseForObject)(results);
}
/**
 * Implements the "Executing fields" section of the spec
 * In particular, this function figures out the value that the field returns by
 * calling its resolve function, then calls completeValue to complete promises,
 * serialize scalars, or execute the sub-selection-set for objects.
 */

function executeField(exeContext, parentType, source, fieldNodes, path) {
  var _fieldDef$resolve;

  const fieldDef = getFieldDef(exeContext.schema, parentType, fieldNodes[0]);

  if (!fieldDef) {
    return;
  }

  const returnType = fieldDef.type;
  const resolveFn =
    (_fieldDef$resolve = fieldDef.resolve) !== null &&
    _fieldDef$resolve !== void 0
      ? _fieldDef$resolve
      : exeContext.fieldResolver;
  const info = buildResolveInfo(
    exeContext,
    fieldDef,
    fieldNodes,
    parentType,
    path,
  ); // Get the resolve function, regardless of if its result is normal or abrupt (error).

  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    const args = (0, _values.getArgumentValues)(
      fieldDef,
      fieldNodes[0],
      exeContext.variableValues,
    ); // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.

    const contextValue = exeContext.contextValue;
    const result = resolveFn(source, args, contextValue, info);
    let completed;

    if ((0, _isPromise.isPromise)(result)) {
      completed = result.then((resolved) =>
        completeValue(exeContext, returnType, fieldNodes, info, path, resolved),
      );
    } else {
      completed = completeValue(
        exeContext,
        returnType,
        fieldNodes,
        info,
        path,
        result,
      );
    }

    if ((0, _isPromise.isPromise)(completed)) {
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return completed.then(undefined, (rawError) => {
        const error = (0, _locatedError.locatedError)(
          rawError,
          fieldNodes,
          (0, _Path.pathToArray)(path),
        );
        return handleFieldError(error, returnType, path, exeContext);
      });
    }

    return completed;
  } catch (rawError) {
    const error = (0, _locatedError.locatedError)(
      rawError,
      fieldNodes,
      (0, _Path.pathToArray)(path),
    );
    return handleFieldError(error, returnType, path, exeContext);
  }
}
/**
 * @internal
 */

function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldDef.name,
    fieldNodes,
    returnType: fieldDef.type,
    parentType,
    path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues,
  };
}

function handleFieldError(error, returnType, path, exeContext) {
  // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.
  if ((0, _definition.isNonNullType)(returnType)) {
    throw error;
  } // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.

  exeContext.collectedErrors.add(error, path);
  return null;
}
/**
 * Implements the instructions for completeValue as defined in the
 * "Value Completion" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by executing all sub-selections.
 */

function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  } // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.

  if ((0, _definition.isNonNullType)(returnType)) {
    const completed = completeValue(
      exeContext,
      returnType.ofType,
      fieldNodes,
      info,
      path,
      result,
    );

    if (completed === null) {
      throw new Error(
        `Cannot return null for non-nullable field ${info.parentType.name}.${info.fieldName}.`,
      );
    }

    return completed;
  } // If result value is null or undefined then return null.

  if (result == null) {
    return null;
  } // If field type is List, complete each item in the list with the inner type

  if ((0, _definition.isListType)(returnType)) {
    return completeListValue(
      exeContext,
      returnType,
      fieldNodes,
      info,
      path,
      result,
    );
  } // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.

  if ((0, _definition.isLeafType)(returnType)) {
    return completeLeafValue(returnType, result);
  } // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.

  if ((0, _definition.isAbstractType)(returnType)) {
    return completeAbstractValue(
      exeContext,
      returnType,
      fieldNodes,
      info,
      path,
      result,
    );
  } // If field type is Object, execute and complete all sub-selections.

  if ((0, _definition.isObjectType)(returnType)) {
    return completeObjectValue(
      exeContext,
      returnType,
      fieldNodes,
      info,
      path,
      result,
    );
  }
  /* c8 ignore next 6 */
  // Not reachable, all possible output types have been considered.

  false ||
    (0, _invariant.invariant)(
      false,
      'Cannot complete value of unexpected output type: ' +
        (0, _inspect.inspect)(returnType),
    );
}
/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */

function completeListValue(
  exeContext,
  returnType,
  fieldNodes,
  info,
  path,
  result,
) {
  if (!(0, _isIterableObject.isIterableObject)(result)) {
    throw new _GraphQLError.GraphQLError(
      `Expected Iterable, but did not find one for field "${info.parentType.name}.${info.fieldName}".`,
    );
  } // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.

  const itemType = returnType.ofType;
  let containsPromise = false;
  const completedResults = Array.from(result, (item, index) => {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    const itemPath = (0, _Path.addPath)(path, index, undefined);

    try {
      let completedItem;

      if ((0, _isPromise.isPromise)(item)) {
        completedItem = item.then((resolved) =>
          completeValue(
            exeContext,
            itemType,
            fieldNodes,
            info,
            itemPath,
            resolved,
          ),
        );
      } else {
        completedItem = completeValue(
          exeContext,
          itemType,
          fieldNodes,
          info,
          itemPath,
          item,
        );
      }

      if ((0, _isPromise.isPromise)(completedItem)) {
        containsPromise = true; // Note: we don't rely on a `catch` method, but we do expect "thenable"
        // to take a second callback for the error case.

        return completedItem.then(undefined, (rawError) => {
          const error = (0, _locatedError.locatedError)(
            rawError,
            fieldNodes,
            (0, _Path.pathToArray)(itemPath),
          );
          return handleFieldError(error, itemType, itemPath, exeContext);
        });
      }

      return completedItem;
    } catch (rawError) {
      const error = (0, _locatedError.locatedError)(
        rawError,
        fieldNodes,
        (0, _Path.pathToArray)(itemPath),
      );
      return handleFieldError(error, itemType, itemPath, exeContext);
    }
  });
  return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */

function completeLeafValue(returnType, result) {
  const serializedResult = returnType.serialize(result);

  if (serializedResult == null) {
    throw new Error(
      `Expected \`${(0, _inspect.inspect)(returnType)}.serialize(${(0,
      _inspect.inspect)(result)})\` to ` +
        `return non-nullable value, returned: ${(0, _inspect.inspect)(
          serializedResult,
        )}`,
    );
  }

  return serializedResult;
}
/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */

function completeAbstractValue(
  exeContext,
  returnType,
  fieldNodes,
  info,
  path,
  result,
) {
  var _returnType$resolveTy;

  const resolveTypeFn =
    (_returnType$resolveTy = returnType.resolveType) !== null &&
    _returnType$resolveTy !== void 0
      ? _returnType$resolveTy
      : exeContext.typeResolver;
  const contextValue = exeContext.contextValue;
  const runtimeType = resolveTypeFn(result, contextValue, info, returnType);

  if ((0, _isPromise.isPromise)(runtimeType)) {
    return runtimeType.then((resolvedRuntimeType) =>
      completeObjectValue(
        exeContext,
        ensureValidRuntimeType(
          resolvedRuntimeType,
          exeContext,
          returnType,
          fieldNodes,
          info,
          result,
        ),
        fieldNodes,
        info,
        path,
        result,
      ),
    );
  }

  return completeObjectValue(
    exeContext,
    ensureValidRuntimeType(
      runtimeType,
      exeContext,
      returnType,
      fieldNodes,
      info,
      result,
    ),
    fieldNodes,
    info,
    path,
    result,
  );
}

function ensureValidRuntimeType(
  runtimeTypeName,
  exeContext,
  returnType,
  fieldNodes,
  info,
  result,
) {
  if (runtimeTypeName == null) {
    throw new _GraphQLError.GraphQLError(
      `Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}". Either the "${returnType.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`,
      fieldNodes,
    );
  } // releases before 16.0.0 supported returning `GraphQLObjectType` from `resolveType`
  // TODO: remove in 17.0.0 release

  if ((0, _definition.isObjectType)(runtimeTypeName)) {
    throw new _GraphQLError.GraphQLError(
      'Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.',
    );
  }

  if (typeof runtimeTypeName !== 'string') {
    throw new _GraphQLError.GraphQLError(
      `Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}" with ` +
        `value ${(0, _inspect.inspect)(result)}, received "${(0,
        _inspect.inspect)(runtimeTypeName)}".`,
    );
  }

  const runtimeType = exeContext.schema.getType(runtimeTypeName);

  if (runtimeType == null) {
    throw new _GraphQLError.GraphQLError(
      `Abstract type "${returnType.name}" was resolved to a type "${runtimeTypeName}" that does not exist inside the schema.`,
      {
        nodes: fieldNodes,
      },
    );
  }

  if (!(0, _definition.isObjectType)(runtimeType)) {
    throw new _GraphQLError.GraphQLError(
      `Abstract type "${returnType.name}" was resolved to a non-object type "${runtimeTypeName}".`,
      {
        nodes: fieldNodes,
      },
    );
  }

  if (!exeContext.schema.isSubType(returnType, runtimeType)) {
    throw new _GraphQLError.GraphQLError(
      `Runtime Object type "${runtimeType.name}" is not a possible type for "${returnType.name}".`,
      {
        nodes: fieldNodes,
      },
    );
  }

  return runtimeType;
}
/**
 * Complete an Object value by executing all sub-selections.
 */

function completeObjectValue(
  exeContext,
  returnType,
  fieldNodes,
  info,
  path,
  result,
) {
  // Collect sub-fields to execute to complete this value.
  const subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes); // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.

  if (returnType.isTypeOf) {
    const isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

    if ((0, _isPromise.isPromise)(isTypeOf)) {
      return isTypeOf.then((resolvedIsTypeOf) => {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }

        return executeFields(
          exeContext,
          returnType,
          result,
          path,
          subFieldNodes,
        );
      });
    }

    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }

  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}

function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new _GraphQLError.GraphQLError(
    `Expected value of type "${returnType.name}" but got: ${(0,
    _inspect.inspect)(result)}.`,
    {
      nodes: fieldNodes,
    },
  );
}
/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */

const defaultTypeResolver = function (value, contextValue, info, abstractType) {
  // First, look for `__typename`.
  if (
    (0, _isObjectLike.isObjectLike)(value) &&
    typeof value.__typename === 'string'
  ) {
    return value.__typename;
  } // Otherwise, test each possible type.

  const possibleTypes = info.schema.getPossibleTypes(abstractType);
  const promisedIsTypeOfResults = [];

  for (let i = 0; i < possibleTypes.length; i++) {
    const type = possibleTypes[i];

    if (type.isTypeOf) {
      const isTypeOfResult = type.isTypeOf(value, contextValue, info);

      if ((0, _isPromise.isPromise)(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        if (promisedIsTypeOfResults.length) {
          // Explicitly ignore any promise rejections
          Promise.allSettled(promisedIsTypeOfResults)
            /* c8 ignore next 3 */
            .catch(() => {
              // Do nothing
            });
        }

        return type.name;
      }
    }
  }

  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then((isTypeOfResults) => {
      for (let i = 0; i < isTypeOfResults.length; i++) {
        if (isTypeOfResults[i]) {
          return possibleTypes[i].name;
        }
      }
    });
  }
};
/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context value.
 */

exports.defaultTypeResolver = defaultTypeResolver;

const defaultFieldResolver = function (source, args, contextValue, info) {
  // ensure source is a value for which property access is acceptable.
  if ((0, _isObjectLike.isObjectLike)(source) || typeof source === 'function') {
    const property = source[info.fieldName];

    if (typeof property === 'function') {
      return source[info.fieldName](args, contextValue, info);
    }

    return property;
  }
};
/**
 * This method looks up the field on the given type definition.
 * It has special casing for the three introspection fields,
 * __schema, __type and __typename. __typename is special because
 * it can always be queried as a field, even in situations where no
 * other fields are allowed, like on a Union. __schema and __type
 * could get automatically added to the query type, but that would
 * require mutating type definitions, which would cause issues.
 *
 * @internal
 */

exports.defaultFieldResolver = defaultFieldResolver;

function getFieldDef(schema, parentType, fieldNode) {
  const fieldName = fieldNode.name.value;

  if (
    fieldName === _introspection.SchemaMetaFieldDef.name &&
    schema.getQueryType() === parentType
  ) {
    return _introspection.SchemaMetaFieldDef;
  } else if (
    fieldName === _introspection.TypeMetaFieldDef.name &&
    schema.getQueryType() === parentType
  ) {
    return _introspection.TypeMetaFieldDef;
  } else if (fieldName === _introspection.TypeNameMetaFieldDef.name) {
    return _introspection.TypeNameMetaFieldDef;
  }

  return parentType.getFields()[fieldName];
}
