// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.

var assert = require('assert');
var Buffer = require('safer-buffer').Buffer;
var ASN1 = require('./types');
var errors = require('./errors');


// --- Globals

var newInvalidAsn1Error = errors.newInvalidAsn1Error;

var DEFAULT_OPTS = {
  size: 1024,
  growthFactor: 8
};


// --- Helpers

function merge(from, to) {
  assert.ok(from);
  assert.equal(typeof (from), 'object');
  assert.ok(to);
  assert.equal(typeof (to), 'object');

  var keys = Object.getOwnPropertyNames(from);
  keys.forEach(function (key) {
    if (to[key])
      return;

    var value = Object.getOwnPropertyDescriptor(from, key);
    Object.defineProperty(to, key, value);
  });

  return to;
}



// --- API

function Writer(options) {
  options = merge(DEFAULT_OPTS, options || {});

  this._buf = Buffer.alloc(options.size || 1024);
  this._size = this._buf.length;
  this._offset = 0;
  this._options = options;

  // A list of offsets in the buffer where we need to insert
  // sequence tag/len pairs.
  this._seq = [];
}

Object.defineProperty(Writer.prototype, 'buffer', {
  get: function () {
    if (this._seq.length)
      throw newInvalidAsn1Error(this._seq.length + ' unended sequence(s)');

    return (this._buf.slice(0, this._offset));
  }
});

Writer.prototype.writeByte = function (b) {
  if (typeof (b) !== 'number')
    throw new TypeError('argument must be a Number');

  this._ensure(1);
  this._buf[this._offset++] = b;
};


Writer.prototype.writeInt = function (i, tag) {
  if (typeof (i) !== 'number')
    throw new TypeError('argument must be a Number');
  if (typeof (tag) !== 'number')
    tag = ASN1.Integer;

  var sz = 4;

  while ((((i & 0xff800000) === 0) || ((i & 0xff800000) === 0xff800000 >> 0)) &&
        (sz > 1)) {
    sz--;
    i <<= 8;
  }

  if (sz > 4)
    throw newInvalidAsn1Error('BER ints cannot be > 0xffffffff');

  this._ensure(2 + sz);
  this._buf[this._offset++] = tag;
  this._buf[this._offset++] = sz;

  while (sz-- > 0) {
    this._buf[this._offset++] = ((i & 0xff000000) >>> 24);
    i <<= 8;
  }

};


Writer.prototype.writeNull = function () {
  this.writeByte(ASN1.Null);
  this.writeByte(0x00);
};


Writer.prototype.writeEnumeration = function (i, tag) {
  if (typeof (i) !== 'number')
    throw new TypeError('argument must be a Number');
  if (typeof (tag) !== 'number')
    tag = ASN1.Enumeration;

  return this.writeInt(i, tag);
};


Writer.prototype.writeBoolean = function (b, tag) {
  if (typeof (b) !== 'boolean')
    throw new TypeError('argument must be a Boolean');
  if (typeof (tag) !== 'number')
    tag = ASN1.Boolean;

  this._ensure(3);
  this._buf[this._offset++] = tag;
  this._buf[this._offset++] = 0x01;
  this._buf[this._offset++] = b ? 0xff : 0x00;
};


Writer.prototype.writeString = function (s, tag) {
  if (typeof (s) !== 'string')
    throw new TypeError('argument must be a string (was: ' + typeof (s) + ')');
  if (typeof (tag) !== 'number')
    tag = ASN1.OctetString;

  var len = Buffer.byteLength(s);
  this.writeByte(tag);
  this.writeLength(len);
  if (len) {
    this._ensure(len);
    this._buf.write(s, this._offset);
    this._offset += len;
  }
};


Writer.prototype.writeBuffer = function (buf, tag) {
  if (typeof (tag) !== 'number')
    throw new TypeError('tag must be a number');
  if (!Buffer.isBuffer(buf))
    throw new TypeError('argument must be a buffer');

  this.writeByte(tag);
  this.writeLength(buf.length);
  this._ensure(buf.length);
  buf.copy(this._buf, this._offset, 0, buf.length);
  this._offset += buf.length;
};


Writer.prototype.writeStringArray = function (strings) {
  if ((!strings instanceof Array))
    throw new TypeError('argument must be an Array[String]');

  var self = this;
  strings.forEach(function (s) {
    self.writeString(s);
  });
};

// This is really to solve DER cases, but whatever for now
Writer.prototype.writeOID = function (s, tag) {
  if (typeof (s) !== 'string')
    throw new TypeError('argument must be a string');
  if (typeof (tag) !== 'number')
    tag = ASN1.OID;

  if (!/^([0-9]+\.){3,}[0-9]+$/.test(s))
    throw new Error('argument is not a valid OID string');

  function encodeOctet(bytes, octet) {
    if (octet < 128) {
        bytes.push(octet);
    } else if (octet < 16384) {
        bytes.push((octet >>> 7) | 0x80);
        bytes.push(octet & 0x7F);
    } else if (octet < 2097152) {
      bytes.push((octet >>> 14) | 0x80);
      bytes.push(((octet >>> 7) | 0x80) & 0xFF);
      bytes.push(octet & 0x7F);
    } else if (octet < 268435456) {
      bytes.push((octet >>> 21) | 0x80);
      bytes.push(((octet >>> 14) | 0x80) & 0xFF);
      bytes.push(((octet >>> 7) | 0x80) & 0xFF);
      bytes.push(octet & 0x7F);
    } else {
      bytes.push(((octet >>> 28) | 0x80) & 0xFF);
      bytes.push(((octet >>> 21) | 0x80) & 0xFF);
      bytes.push(((octet >>> 14) | 0x80) & 0xFF);
      bytes.push(((octet >>> 7) | 0x80) & 0xFF);
      bytes.push(octet & 0x7F);
    }
  }

  var tmp = s.split('.');
  var bytes = [];
  bytes.push(parseInt(tmp[0], 10) * 40 + parseInt(tmp[1], 10));
  tmp.slice(2).forEach(function (b) {
    encodeOctet(bytes, parseInt(b, 10));
  });

  var self = this;
  this._ensure(2 + bytes.length);
  this.writeByte(tag);
  this.writeLength(bytes.length);
  bytes.forEach(function (b) {
    self.writeByte(b);
  });
};


Writer.prototype.writeLength = function (len) {
  if (typeof (len) !== 'number')
    throw new TypeError('argument must be a Number');

  this._ensure(4);

  if (len <= 0x7f) {
    this._buf[this._offset++] = len;
  } else if (len <= 0xff) {
    this._buf[this._offset++] = 0x81;
    this._buf[this._offset++] = len;
  } else if (len <= 0xffff) {
    this._buf[this._offset++] = 0x82;
    this._buf[this._offset++] = len >> 8;
    this._buf[this._offset++] = len;
  } else if (len <= 0xffffff) {
    this._buf[this._offset++] = 0x83;
    this._buf[this._offset++] = len >> 16;
    this._buf[this._offset++] = len >> 8;
    this._buf[this._offset++] = len;
  } else {
    throw newInvalidAsn1Error('Length too long (> 4 bytes)');
  }
};

Writer.prototype.startSequence = function (tag) {
  if (typeof (tag) !== 'number')
    tag = ASN1.Sequence | ASN1.Constructor;

  this.writeByte(tag);
  this._seq.push(this._offset);
  this._ensure(3);
  this._offset += 3;
};


Writer.prototype.endSequence = function () {
  var seq = this._seq.pop();
  var start = seq + 3;
  var len = this._offset - start;

  if (len <= 0x7f) {
    this._shift(start, len, -2);
    this._buf[seq] = len;
  } else if (len <= 0xff) {
    this._shift(start, len, -1);
    this._buf[seq] = 0x81;
    this._buf[seq + 1] = len;
  } else if (len <= 0xffff) {
    this._buf[seq] = 0x82;
    this._buf[seq + 1] = len >> 8;
    this._buf[seq + 2] = len;
  } else if (len <= 0xffffff) {
    this._shift(start, len, 1);
    this._buf[seq] = 0x83;
    this._buf[seq + 1] = len >> 16;
    this._buf[seq + 2] = len >> 8;
    this._buf[seq + 3] = len;
  } else {
    throw newInvalidAsn1Error('Sequence too long');
  }
};


Writer.prototype._shift = function (start, len, shift) {
  assert.ok(start !== undefined);
  assert.ok(len !== undefined);
  assert.ok(shift);

  this._buf.copy(this._buf, start + shift, start, start + len);
  this._offset += shift;
};

Writer.prototype._ensure = function (len) {
  assert.ok(len);

  if (this._size - this._offset < len) {
    var sz = this._size * this._options.growthFactor;
    if (sz - this._offset < len)
      sz += len;

    var buf = Buffer.alloc(sz);

    this._buf.copy(buf, 0, 0, this._offset);
    this._buf = buf;
    this._size = sz;
  }
};



// --- Exported API

module.exports = Writer;
