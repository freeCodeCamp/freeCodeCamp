'use strict';

const assert = require('assert');
const { inspect } = require('util');

const mustCallChecks = [];

function noop() {}

function runCallChecks(exitCode) {
  if (exitCode !== 0) return;

  const failed = mustCallChecks.filter((context) => {
    if ('minimum' in context) {
      context.messageSegment = `at least ${context.minimum}`;
      return context.actual < context.minimum;
    }
    context.messageSegment = `exactly ${context.exact}`;
    return context.actual !== context.exact;
  });

  failed.forEach((context) => {
    console.error('Mismatched %s function calls. Expected %s, actual %d.',
                  context.name,
                  context.messageSegment,
                  context.actual);
    console.error(context.stack.split('\n').slice(2).join('\n'));
  });

  if (failed.length)
    process.exit(1);
}

function mustCall(fn, exact) {
  return _mustCallInner(fn, exact, 'exact');
}

function mustCallAtLeast(fn, minimum) {
  return _mustCallInner(fn, minimum, 'minimum');
}

function _mustCallInner(fn, criteria = 1, field) {
  if (process._exiting)
    throw new Error('Cannot use common.mustCall*() in process exit handler');

  if (typeof fn === 'number') {
    criteria = fn;
    fn = noop;
  } else if (fn === undefined) {
    fn = noop;
  }

  if (typeof criteria !== 'number')
    throw new TypeError(`Invalid ${field} value: ${criteria}`);

  const context = {
    [field]: criteria,
    actual: 0,
    stack: inspect(new Error()),
    name: fn.name || '<anonymous>'
  };

  // Add the exit listener only once to avoid listener leak warnings
  if (mustCallChecks.length === 0)
    process.on('exit', runCallChecks);

  mustCallChecks.push(context);

  function wrapped(...args) {
    ++context.actual;
    return fn.call(this, ...args);
  }
  // TODO: remove origFn?
  wrapped.origFn = fn;

  return wrapped;
}

function getCallSite(top) {
  const originalStackFormatter = Error.prepareStackTrace;
  Error.prepareStackTrace = (err, stack) =>
    `${stack[0].getFileName()}:${stack[0].getLineNumber()}`;
  const err = new Error();
  Error.captureStackTrace(err, top);
  // With the V8 Error API, the stack is not formatted until it is accessed
  // eslint-disable-next-line no-unused-expressions
  err.stack;
  Error.prepareStackTrace = originalStackFormatter;
  return err.stack;
}

function mustNotCall(msg) {
  const callSite = getCallSite(mustNotCall);
  return function mustNotCall(...args) {
    args = args.map(inspect).join(', ');
    const argsInfo = (args.length > 0
                      ? `\ncalled with arguments: ${args}`
                      : '');
    assert.fail(
      `${msg || 'function should not have been called'} at ${callSite}`
        + argsInfo);
  };
}

module.exports = {
  mustCall,
  mustCallAtLeast,
  mustNotCall,
};
