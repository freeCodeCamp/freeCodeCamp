var assert = require('assert');
var load = require('../')

var last_msg = undefined;
log = function(msg) {
  last_msg = msg;
}

test('success', function(done) {
  load('test/hello.js', function (err) {
    assert.ifError(err);
    assert.equal(last_msg, 'Hello world');
    last_msg = undefined;
    done();
  })
});

test('opts.async', function(done) {
  load('test/hello.js', {async: false}, function(err, script) {
    assert.ifError(err);
    assert.equal(script.async, false);
    done();
  })
});

test('opts.attrs', function(done) {
  load('test/hello.js', {attrs: {foo: 'boo'}}, function(err, script) {
    assert.ifError(err);
    assert.equal(script.getAttribute('foo'), 'boo');
    done();
  })
});

test('opts.charset', function(done) {
  load('test/hello.js', {charset: 'iso-8859-1'}, function(err, script) {
    assert.ifError(err);
    assert.equal(script.charset, 'iso-8859-1');
    done();
  })
});

test('opts.text', function(done) {
  load('test/hello.js', {text: 'foo=5;'}, function(err, script) {
    assert.ifError(err);
    done();
  })
});

test('opts.type', function(done) {
  load('test/hello.js', {type: 'text/ecmascript'}, function(err, script) {
    assert.ifError(err);
    assert.equal(script.type, 'text/ecmascript');
    done();
  })
});

test('no exist', function(done) {
  load('unexistent.js', function (err, legacy) {
    if (!legacy) {
      assert.ok(err);
    }

    var tid = setTimeout(function() {
      done();
    }, 200);

    // some browsers will also throw as well as report erro
    var old = window.onerror;
    window.onerror = function(msg, file, line) {
      if (msg !== 'Error loading script') {
        assert(false);
      }
      window.onerror = old;
      clearTimeout(tid);
      done();
    };
  })
});

test('throw', function(done) {
  var old = window.onerror;
  // silence the script error
  window.onerror = function() {};
  load('test/throw.js', function (err) {
    assert.ifError(err);
    window.onerror = old;
    done();
  })
});

