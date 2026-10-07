/*jshint node:true */
'use strict';

var bufferEq = require('./index');
var assert = require('assert');

describe('buffer-equal-constant-time', function() {
  var a = new Buffer('asdfasdf123456');
  var b = new Buffer('asdfasdf123456');
  var c = new Buffer('asdfasdf');

  describe('bufferEq', function() {
    it('says a == b', function() {
      assert.strictEqual(bufferEq(a, b), true);
    });

    it('says a != c', function() {
      assert.strictEqual(bufferEq(a, c), false);
    });
  });

  describe('install/restore', function() {
    before(function() {
      bufferEq.install();
    });
    after(function() {
      bufferEq.restore();
    });

    it('installed an .equal method', function() {
      var SlowBuffer = require('buffer').SlowBuffer;
      assert.ok(Buffer.prototype.equal);
      assert.ok(SlowBuffer.prototype.equal);
    });

    it('infected existing Buffers', function() {
      assert.strictEqual(a.equal(b), true);
      assert.strictEqual(a.equal(c), false);
    });
  });

});
