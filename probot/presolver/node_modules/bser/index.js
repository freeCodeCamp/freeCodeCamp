/* Copyright 2015-present Facebook, Inc.
 * Licensed under the Apache License, Version 2.0 */

var EE = require('events').EventEmitter;
var util = require('util');
var os = require('os');
var assert = require('assert');
var Int64 = require('node-int64');

// BSER uses the local endianness to reduce byte swapping overheads
// (the protocol is expressly local IPC only).  We need to tell node
// to use the native endianness when reading various native values.
var isBigEndian = os.endianness() == 'BE';

// Find the next power-of-2 >= size
function nextPow2(size) {
  return Math.pow(2, Math.ceil(Math.log(size) / Math.LN2));
}

// Expandable buffer that we can provide a size hint for
function Accumulator(initsize) {
  this.buf = new Buffer(nextPow2(initsize || 8192));
  this.readOffset = 0;
  this.writeOffset = 0;
}
// For testing
exports.Accumulator = Accumulator

// How much we can write into this buffer without allocating
Accumulator.prototype.writeAvail = function() {
  return this.buf.length - this.writeOffset;
}

// How much we can read
Accumulator.prototype.readAvail = function() {
  return this.writeOffset - this.readOffset;
}

// Ensure that we have enough space for size bytes
Accumulator.prototype.reserve = function(size) {
  if (size < this.writeAvail()) {
    return;
  }

  // If we can make room by shunting down, do so
  if (this.readOffset > 0) {
    this.buf.copy(this.buf, 0, this.readOffset, this.writeOffset);
    this.writeOffset -= this.readOffset;
    this.readOffset = 0;
  }

  // If we made enough room, no need to allocate more
  if (size < this.writeAvail()) {
    return;
  }

  // Allocate a replacement and copy it in
  var buf = new Buffer(nextPow2(this.buf.length + size - this.writeAvail()));
  this.buf.copy(buf);
  this.buf = buf;
}

// Append buffer or string.  Will resize as needed
Accumulator.prototype.append = function(buf) {
  if (Buffer.isBuffer(buf)) {
    this.reserve(buf.length);
    buf.copy(this.buf, this.writeOffset, 0, buf.length);
    this.writeOffset += buf.length;
  } else {
    var size = Buffer.byteLength(buf);
    this.reserve(size);
    this.buf.write(buf, this.writeOffset);
    this.writeOffset += size;
  }
}

Accumulator.prototype.assertReadableSize = function(size) {
  if (this.readAvail() < size) {
    throw new Error("wanted to read " + size +
        " bytes but only have " + this.readAvail());
  }
}

Accumulator.prototype.peekString = function(size) {
  this.assertReadableSize(size);
  return this.buf.toString('utf-8', this.readOffset, this.readOffset + size);
}

Accumulator.prototype.readString = function(size) {
  var str = this.peekString(size);
  this.readOffset += size;
  return str;
}

Accumulator.prototype.peekInt = function(size) {
  this.assertReadableSize(size);
  switch (size) {
    case 1:
      return this.buf.readInt8(this.readOffset, size);
    case 2:
      return isBigEndian ?
        this.buf.readInt16BE(this.readOffset, size) :
        this.buf.readInt16LE(this.readOffset, size);
    case 4:
      return isBigEndian ?
        this.buf.readInt32BE(this.readOffset, size) :
        this.buf.readInt32LE(this.readOffset, size);
    case 8:
        var big = this.buf.slice(this.readOffset, this.readOffset + 8);
        if (isBigEndian) {
          // On a big endian system we can simply pass the buffer directly
          return new Int64(big);
        }
        // Otherwise we need to byteswap
        return new Int64(byteswap64(big));
    default:
      throw new Error("invalid integer size " + size);
  }
}

Accumulator.prototype.readInt = function(bytes) {
  var ival = this.peekInt(bytes);
  if (ival instanceof Int64 && isFinite(ival.valueOf())) {
    ival = ival.valueOf();
  }
  this.readOffset += bytes;
  return ival;
}

Accumulator.prototype.peekDouble = function() {
  this.assertReadableSize(8);
  return isBigEndian ?
    this.buf.readDoubleBE(this.readOffset) :
    this.buf.readDoubleLE(this.readOffset);
}

Accumulator.prototype.readDouble = function() {
  var dval = this.peekDouble();
  this.readOffset += 8;
  return dval;
}

Accumulator.prototype.readAdvance = function(size) {
  if (size > 0) {
    this.assertReadableSize(size);
  } else if (size < 0 && this.readOffset + size < 0) {
    throw new Error("advance with negative offset " + size +
        " would seek off the start of the buffer");
  }
  this.readOffset += size;
}

Accumulator.prototype.writeByte = function(value) {
  this.reserve(1);
  this.buf.writeInt8(value, this.writeOffset);
  ++this.writeOffset;
}

Accumulator.prototype.writeInt = function(value, size) {
  this.reserve(size);
  switch (size) {
    case 1:
      this.buf.writeInt8(value, this.writeOffset);
      break;
    case 2:
      if (isBigEndian) {
        this.buf.writeInt16BE(value, this.writeOffset);
      } else {
        this.buf.writeInt16LE(value, this.writeOffset);
      }
      break;
    case 4:
      if (isBigEndian) {
        this.buf.writeInt32BE(value, this.writeOffset);
      } else {
        this.buf.writeInt32LE(value, this.writeOffset);
      }
      break;
    default:
      throw new Error("unsupported integer size " + size);
  }
  this.writeOffset += size;
}

Accumulator.prototype.writeDouble = function(value) {
  this.reserve(8);
  if (isBigEndian) {
    this.buf.writeDoubleBE(value, this.writeOffset);
  } else {
    this.buf.writeDoubleLE(value, this.writeOffset);
  }
  this.writeOffset += 8;
}

var BSER_ARRAY     = 0x00;
var BSER_OBJECT    = 0x01;
var BSER_STRING    = 0x02;
var BSER_INT8      = 0x03;
var BSER_INT16     = 0x04;
var BSER_INT32     = 0x05;
var BSER_INT64     = 0x06;
var BSER_REAL      = 0x07;
var BSER_TRUE      = 0x08;
var BSER_FALSE     = 0x09;
var BSER_NULL      = 0x0a;
var BSER_TEMPLATE  = 0x0b;
var BSER_SKIP      = 0x0c;

var ST_NEED_PDU = 0; // Need to read and decode PDU length
var ST_FILL_PDU = 1; // Know the length, need to read whole content

var MAX_INT8 = 127;
var MAX_INT16 = 32767;
var MAX_INT32 = 2147483647;

function BunserBuf() {
  EE.call(this);
  this.buf = new Accumulator();
  this.state = ST_NEED_PDU;
}
util.inherits(BunserBuf, EE);
exports.BunserBuf = BunserBuf;

BunserBuf.prototype.append = function(buf, synchronous) {
  if (synchronous) {
    this.buf.append(buf);
    return this.process(synchronous);
  }

  try {
    this.buf.append(buf);
  } catch (err) {
    this.emit('error', err);
    return;
  }
  // Arrange to decode later.  This allows the consuming
  // application to make progress with other work in the
  // case that we have a lot of subscription updates coming
  // in from a large tree.
  this.processLater();
}

BunserBuf.prototype.processLater = function() {
  var self = this;
  process.nextTick(function() {
    try {
      self.process(false);
    } catch (err) {
      self.emit('error', err);
    }
  });
}

// Do something with the buffer to advance our state.
// If we're running synchronously we'll return either
// the value we've decoded or undefined if we don't
// yet have enought data.
// If we're running asynchronously, we'll emit the value
// when it becomes ready and schedule another invocation
// of process on the next tick if we still have data we
// can process.
BunserBuf.prototype.process = function(synchronous) {
  if (this.state == ST_NEED_PDU) {
    if (this.buf.readAvail() < 2) {
      return;
    }
    // Validate BSER header
    this.expectCode(0);
    this.expectCode(1);
    this.pduLen = this.decodeInt(true /* relaxed */);
    if (this.pduLen === false) {
      // Need more data, walk backwards
      this.buf.readAdvance(-2);
      return;
    }
    // Ensure that we have a big enough buffer to read the rest of the PDU
    this.buf.reserve(this.pduLen);
    this.state = ST_FILL_PDU;
  }

  if (this.state == ST_FILL_PDU) {
    if (this.buf.readAvail() < this.pduLen) {
      // Need more data
      return;
    }

    // We have enough to decode it
    var val = this.decodeAny();
    if (synchronous) {
      return val;
    }
    this.emit('value', val);
    this.state = ST_NEED_PDU;
  }

  if (!synchronous && this.buf.readAvail() > 0) {
    this.processLater();
  }
}

BunserBuf.prototype.raise = function(reason) {
  throw new Error(reason + ", in Buffer of length " +
      this.buf.buf.length + " (" + this.buf.readAvail() +
      " readable) at offset " + this.buf.readOffset + " buffer: " +
      JSON.stringify(this.buf.buf.slice(
          this.buf.readOffset, this.buf.readOffset + 32).toJSON()));
}

BunserBuf.prototype.expectCode = function(expected) {
  var code = this.buf.readInt(1);
  if (code != expected) {
    this.raise("expected bser opcode " + expected + " but got " + code);
  }
}

BunserBuf.prototype.decodeAny = function() {
  var code = this.buf.peekInt(1);
  switch (code) {
    case BSER_INT8:
    case BSER_INT16:
    case BSER_INT32:
    case BSER_INT64:
      return this.decodeInt();
    case BSER_REAL:
      this.buf.readAdvance(1);
      return this.buf.readDouble();
    case BSER_TRUE:
      this.buf.readAdvance(1);
      return true;
    case BSER_FALSE:
      this.buf.readAdvance(1);
      return false;
    case BSER_NULL:
      this.buf.readAdvance(1);
      return null;
    case BSER_STRING:
      return this.decodeString();
    case BSER_ARRAY:
      return this.decodeArray();
    case BSER_OBJECT:
      return this.decodeObject();
    case BSER_TEMPLATE:
      return this.decodeTemplate();
    default:
      this.raise("unhandled bser opcode " + code);
  }
}

BunserBuf.prototype.decodeArray = function() {
  this.expectCode(BSER_ARRAY);
  var nitems = this.decodeInt();
  var arr = [];
  for (var i = 0; i < nitems; ++i) {
    arr.push(this.decodeAny());
  }
  return arr;
}

BunserBuf.prototype.decodeObject = function() {
  this.expectCode(BSER_OBJECT);
  var nitems = this.decodeInt();
  var res = {};
  for (var i = 0; i < nitems; ++i) {
    var key = this.decodeString();
    var val = this.decodeAny();
    res[key] = val;
  }
  return res;
}

BunserBuf.prototype.decodeTemplate = function() {
  this.expectCode(BSER_TEMPLATE);
  var keys = this.decodeArray();
  var nitems = this.decodeInt();
  var arr = [];
  for (var i = 0; i < nitems; ++i) {
    var obj = {};
    for (var keyidx = 0; keyidx < keys.length; ++keyidx) {
      if (this.buf.peekInt(1) == BSER_SKIP) {
        this.buf.readAdvance(1);
        continue;
      }
      var val = this.decodeAny();
      obj[keys[keyidx]] = val;
    }
    arr.push(obj);
  }
  return arr;
}

BunserBuf.prototype.decodeString = function() {
  this.expectCode(BSER_STRING);
  var len = this.decodeInt();
  return this.buf.readString(len);
}

// This is unusual compared to the other decode functions in that
// we may not have enough data available to satisfy the read, and
// we don't want to throw.  This is only true when we're reading
// the PDU length from the PDU header; we'll set relaxSizeAsserts
// in that case.
BunserBuf.prototype.decodeInt = function(relaxSizeAsserts) {
  if (relaxSizeAsserts && !this.buf.readAvail(1)) {
    return false;
  } else {
    this.buf.assertReadableSize(1);
  }
  var code = this.buf.peekInt(1);
  var size = 0;
  switch (code) {
    case BSER_INT8:
      size = 1;
      break;
    case BSER_INT16:
      size = 2;
      break;
    case BSER_INT32:
      size = 4;
      break;
    case BSER_INT64:
      size = 8;
      break;
    default:
      this.raise("invalid bser int encoding " + code);
  }

  if (relaxSizeAsserts && !this.buf.readAvail(1 + size)) {
    return false;
  }
  this.buf.readAdvance(1);
  return this.buf.readInt(size);
}

// synchronously BSER decode a string and return the value
function loadFromBuffer(input) {
  var buf = new BunserBuf();
  var result = buf.append(input, true);
  if (buf.buf.readAvail()) {
    throw Error(
        'excess data found after input buffer, use BunserBuf instead');
  }
  if (typeof result === 'undefined') {
    throw Error(
        'no bser found in string and no error raised!?');
  }
  return result;
}
exports.loadFromBuffer = loadFromBuffer

// Byteswap an arbitrary buffer, flipping from one endian
// to the other, returning a new buffer with the resultant data
function byteswap64(buf) {
  var swap = new Buffer(buf.length);
  for (var i = 0; i < buf.length; i++) {
    swap[i] = buf[buf.length -1 - i];
  }
  return swap;
}

function dump_int64(buf, val) {
  // Get the raw bytes.  The Int64 buffer is big endian
  var be = val.toBuffer();

  if (isBigEndian) {
    // We're a big endian system, so the buffer is exactly how we
    // want it to be
    buf.writeByte(BSER_INT64);
    buf.append(be);
    return;
  }
  // We need to byte swap to get the correct representation
  var le = byteswap64(be);
  buf.writeByte(BSER_INT64);
  buf.append(le);
}

function dump_int(buf, val) {
  var abs = Math.abs(val);
  if (abs <= MAX_INT8) {
    buf.writeByte(BSER_INT8);
    buf.writeInt(val, 1);
  } else if (abs <= MAX_INT16) {
    buf.writeByte(BSER_INT16);
    buf.writeInt(val, 2);
  } else if (abs <= MAX_INT32) {
    buf.writeByte(BSER_INT32);
    buf.writeInt(val, 4);
  } else {
    dump_int64(buf, new Int64(val));
  }
}

function dump_any(buf, val) {
  switch (typeof(val)) {
    case 'number':
      // check if it is an integer or a float
      if (isFinite(val) && Math.floor(val) === val) {
        dump_int(buf, val);
      } else {
        buf.writeByte(BSER_REAL);
        buf.writeDouble(val);
      }
      return;
    case 'string':
      buf.writeByte(BSER_STRING);
      dump_int(buf, Buffer.byteLength(val));
      buf.append(val);
      return;
    case 'boolean':
      buf.writeByte(val ? BSER_TRUE : BSER_FALSE);
      return;
    case 'object':
      if (val === null) {
        buf.writeByte(BSER_NULL);
        return;
      }
      if (val instanceof Int64) {
        dump_int64(buf, val);
        return;
      }
      if (Array.isArray(val)) {
        buf.writeByte(BSER_ARRAY);
        dump_int(buf, val.length);
        for (var i = 0; i < val.length; ++i) {
          dump_any(buf, val[i]);
        }
        return;
      }
      buf.writeByte(BSER_OBJECT);
      var keys = Object.keys(val);

      // First pass to compute number of defined keys
      var num_keys = keys.length;
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var v = val[key];
        if (typeof(v) == 'undefined') {
          num_keys--;
        }
      }
      dump_int(buf, num_keys);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var v = val[key];
        if (typeof(v) == 'undefined') {
          // Don't include it
          continue;
        }
        dump_any(buf, key);
        try {
          dump_any(buf, v);
        } catch (e) {
          throw new Error(
            e.message + ' (while serializing object property with name `' +
              key + "')");
        }
      }
      return;

    default:
      throw new Error('cannot serialize type ' + typeof(val) + ' to BSER');
  }
}

// BSER encode value and return a buffer of the contents
function dumpToBuffer(val) {
  var buf = new Accumulator();
  // Build out the header
  buf.writeByte(0);
  buf.writeByte(1);
  // Reserve room for an int32 to hold our PDU length
  buf.writeByte(BSER_INT32);
  buf.writeInt(0, 4); // We'll come back and fill this in at the end

  dump_any(buf, val);

  // Compute PDU length
  var off = buf.writeOffset;
  var len = off - 7 /* the header length */;
  buf.writeOffset = 3; // The length value to fill in
  buf.writeInt(len, 4); // write the length in the space we reserved
  buf.writeOffset = off;

  return buf.buf.slice(0, off);
}
exports.dumpToBuffer = dumpToBuffer