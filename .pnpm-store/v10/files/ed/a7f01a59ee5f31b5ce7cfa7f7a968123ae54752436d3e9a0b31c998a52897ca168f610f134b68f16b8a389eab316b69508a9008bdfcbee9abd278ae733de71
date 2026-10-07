// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var test = require('tape');
var assert = require('assert');

var noop = function() {};

var mustCallChecks = [];

function runCallChecks(exitCode) {
  if (exitCode !== 0) return;

  var failed = filter(mustCallChecks, function(context) {
    if ('minimum' in context) {
      context.messageSegment = 'at least ' + context.minimum;
      return context.actual < context.minimum;
    } else {
      context.messageSegment = 'exactly ' + context.exact;
      return context.actual !== context.exact;
    }
  });

  for (var i = 0; i < failed.length; i++) {
    var context = failed[i];
    console.log('Mismatched %s function calls. Expected %s, actual %d.',
        context.name,
        context.messageSegment,
        context.actual);
    // IE8 has no .stack
    if (context.stack) console.log(context.stack.split('\n').slice(2).join('\n'));
  }

  assert.strictEqual(failed.length, 0);
}

exports.mustCall = function(fn, exact) {
  return _mustCallInner(fn, exact, 'exact');
};

function _mustCallInner(fn, criteria, field) {
  if (typeof criteria == 'undefined') criteria = 1;

  if (typeof fn === 'number') {
    criteria = fn;
    fn = noop;
  } else if (fn === undefined) {
    fn = noop;
  }

  if (typeof criteria !== 'number')
    throw new TypeError('Invalid ' + field + ' value: ' + criteria);

  var context = {
    actual: 0,
    stack: (new Error()).stack,
    name: fn.name || '<anonymous>'
  };

  context[field] = criteria;

  // add the exit listener only once to avoid listener leak warnings
  if (mustCallChecks.length === 0) test.onFinish(function() { runCallChecks(0); });

  mustCallChecks.push(context);

  return function() {
    context.actual++;
    return fn.apply(this, arguments);
  };
}

exports.mustNotCall = function(msg) {
  return function mustNotCall() {
    assert.fail(msg || 'function should not have been called');
  };
};

function filter(arr, fn) {
  if (arr.filter) return arr.filter(fn);
  var filtered = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) filtered.push(arr[i]);
  }
  return filtered
}
