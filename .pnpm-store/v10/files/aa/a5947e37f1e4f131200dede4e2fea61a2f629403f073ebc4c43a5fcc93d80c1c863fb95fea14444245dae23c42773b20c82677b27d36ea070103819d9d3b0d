'use strict';
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var clearErrorStack = require('../internals/error-stack-clear');
var ERROR_STACK_INSTALLABLE = require('../internals/error-stack-installable');

// non-standard V8
// eslint-disable-next-line es/no-nonstandard-error-properties -- safe
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};
