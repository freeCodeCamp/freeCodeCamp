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

var common = require('./common');
var assert = require('assert');
var events = require('../');

// Redirect warning output to tape.
var consoleWarn = console.warn;
console.warn = common.test.comment;

common.test.on('end', function () {
  console.warn = consoleWarn;
});

// default
{
  var e = new events.EventEmitter();

  for (var i = 0; i < 10; i++) {
    e.on('default', common.mustNotCall());
  }
  assert.ok(!e._events['default'].hasOwnProperty('warned'));
  e.on('default', common.mustNotCall());
  assert.ok(e._events['default'].warned);

  // specific
  e.setMaxListeners(5);
  for (var i = 0; i < 5; i++) {
    e.on('specific', common.mustNotCall());
  }
  assert.ok(!e._events['specific'].hasOwnProperty('warned'));
  e.on('specific', common.mustNotCall());
  assert.ok(e._events['specific'].warned);

  // only one
  e.setMaxListeners(1);
  e.on('only one', common.mustNotCall());
  assert.ok(!e._events['only one'].hasOwnProperty('warned'));
  e.on('only one', common.mustNotCall());
  assert.ok(e._events['only one'].hasOwnProperty('warned'));

  // unlimited
  e.setMaxListeners(0);
  for (var i = 0; i < 1000; i++) {
    e.on('unlimited', common.mustNotCall());
  }
  assert.ok(!e._events['unlimited'].hasOwnProperty('warned'));
}

// process-wide
{
  events.EventEmitter.defaultMaxListeners = 42;
  var e = new events.EventEmitter();

  for (var i = 0; i < 42; ++i) {
    e.on('fortytwo', common.mustNotCall());
  }
  assert.ok(!e._events['fortytwo'].hasOwnProperty('warned'));
  e.on('fortytwo', common.mustNotCall());
  assert.ok(e._events['fortytwo'].hasOwnProperty('warned'));
  delete e._events['fortytwo'].warned;

  events.EventEmitter.defaultMaxListeners = 44;
  e.on('fortytwo', common.mustNotCall());
  assert.ok(!e._events['fortytwo'].hasOwnProperty('warned'));
  e.on('fortytwo', common.mustNotCall());
  assert.ok(e._events['fortytwo'].hasOwnProperty('warned'));
}

// but _maxListeners still has precedence over defaultMaxListeners
{
  events.EventEmitter.defaultMaxListeners = 42;
  var e = new events.EventEmitter();
  e.setMaxListeners(1);
  e.on('uno', common.mustNotCall());
  assert.ok(!e._events['uno'].hasOwnProperty('warned'));
  e.on('uno', common.mustNotCall());
  assert.ok(e._events['uno'].hasOwnProperty('warned'));

  // chainable
  assert.strictEqual(e, e.setMaxListeners(1));
}
