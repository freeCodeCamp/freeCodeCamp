Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const is = require('./is.js');

function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser, key, limit, event, hint) {
  if (!event.exception?.values || !hint || !is.isInstanceOf(hint.originalException, Error)) {
    return;
  }
  const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : void 0;
  if (originalException) {
    event.exception.values = aggregateExceptionsFromError(
      exceptionFromErrorImplementation,
      parser,
      limit,
      hint.originalException,
      key,
      event.exception.values,
      originalException,
      0
    );
  }
}
function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error, key, prevExceptions, exception, exceptionId) {
  if (prevExceptions.length >= limit + 1) {
    return prevExceptions;
  }
  let newExceptions = [...prevExceptions];
  if (is.isInstanceOf(error[key], Error)) {
    applyExceptionGroupFieldsForParentException(exception, exceptionId, error);
    const newException = exceptionFromErrorImplementation(parser, error[key]);
    const newExceptionId = newExceptions.length;
    applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
    newExceptions = aggregateExceptionsFromError(
      exceptionFromErrorImplementation,
      parser,
      limit,
      error[key],
      key,
      [newException, ...newExceptions],
      newException,
      newExceptionId
    );
  }
  if (isExceptionGroup(error)) {
    error.errors.forEach((childError, i) => {
      if (is.isInstanceOf(childError, Error)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId, error);
        const newException = exceptionFromErrorImplementation(parser, childError);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser,
          limit,
          childError,
          key,
          [newException, ...newExceptions],
          newException,
          newExceptionId
        );
      }
    });
  }
  return newExceptions;
}
function isExceptionGroup(error) {
  return Array.isArray(error.errors);
}
function applyExceptionGroupFieldsForParentException(exception, exceptionId, error) {
  exception.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...isExceptionGroup(error) && { is_exception_group: true },
    ...exception.mechanism,
    exception_id: exceptionId
  };
}
function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
  exception.mechanism = {
    handled: true,
    ...exception.mechanism,
    type: "chained",
    source,
    exception_id: exceptionId,
    parent_id: parentId
  };
}

exports.applyAggregateErrorsToEvent = applyAggregateErrorsToEvent;
//# sourceMappingURL=aggregate-errors.js.map
