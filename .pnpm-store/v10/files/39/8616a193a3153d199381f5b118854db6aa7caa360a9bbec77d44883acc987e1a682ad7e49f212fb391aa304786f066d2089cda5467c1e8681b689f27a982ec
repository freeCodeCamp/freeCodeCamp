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

'use strict';
var tape = require('tape');
var path = require('../');

// Test thrown TypeErrors
var typeErrorTests = [true, false, 7, null, {}, undefined, [], NaN];

function fail(t, fn) {
  var args = [].slice.call(arguments, 1);

  t.throws(function () {
    fn.apply(null, args);
  }, TypeError);
}

tape('path.posix TypeErrors', function (t) {
  typeErrorTests.forEach(function (test) {
    fail(t, path.posix.join, test);
    fail(t, path.posix.resolve, test);
    fail(t, path.posix.normalize, test);
    fail(t, path.posix.isAbsolute, test);
    fail(t, path.posix.relative, test, 'foo');
    fail(t, path.posix.relative, 'foo', test);
    fail(t, path.posix.parse, test);
    fail(t, path.posix.dirname, test);
    fail(t, path.posix.basename, test);
    fail(t, path.posix.extname, test);

    // undefined is a valid value as the second argument to basename
    if (test !== undefined) {
      fail(t, path.posix.basename, 'foo', test);
    }
  });
  t.end();
});

tape('path.win32 TypeErrors', { skip: true }, function (t) {
  typeErrorTests.forEach(function (test) {
    fail(t, path.win32.join, test);
    fail(t, path.win32.resolve, test);
    fail(t, path.win32.normalize, test);
    fail(t, path.win32.isAbsolute, test);
    fail(t, path.win32.relative, test, 'foo');
    fail(t, path.win32.relative, 'foo', test);
    fail(t, path.win32.parse, test);
    fail(t, path.win32.dirname, test);
    fail(t, path.win32.basename, test);
    fail(t, path.win32.extname, test);

    // undefined is a valid value as the second argument to basename
    if (test !== undefined) {
      fail(t, path.win32.basename, 'foo', test);
    }
  });
  t.end();
});

// path.sep tests
tape('path.win32.sep', { skip: true }, function (t) {
  // windows
  t.strictEqual(path.win32.sep, '\\');
  t.end();
});
tape('path.posix.sep', function (t) {
  // posix
  t.strictEqual(path.posix.sep, '/');
  t.end();
});

// path.delimiter tests
tape('path.win32.delimiter', { skip: true }, function (t) {
  // windows
  t.strictEqual(path.win32.delimiter, ';');
  t.end();
});
tape('path.posix.delimiter', function (t) {
  // posix
  t.strictEqual(path.posix.delimiter, ':');
  t.end();
});

tape('path', function (t) {
  t.strictEqual(path, path.posix);
  t.end();
});

