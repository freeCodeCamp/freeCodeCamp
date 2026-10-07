'use strict';

const { Writable } = require('stream');

const { getDecoder } = require('../utils.js');

class URLEncoded extends Writable {
  constructor(cfg) {
    const streamOpts = {
      autoDestroy: true,
      emitClose: true,
      highWaterMark: (typeof cfg.highWaterMark === 'number'
                      ? cfg.highWaterMark
                      : undefined),
    };
    super(streamOpts);

    let charset = (cfg.defCharset || 'utf8');
    if (cfg.conType.params && typeof cfg.conType.params.charset === 'string')
      charset = cfg.conType.params.charset;

    this.charset = charset;

    const limits = cfg.limits;
    this.fieldSizeLimit = (limits && typeof limits.fieldSize === 'number'
                           ? limits.fieldSize
                           : 1 * 1024 * 1024);
    this.fieldsLimit = (limits && typeof limits.fields === 'number'
                        ? limits.fields
                        : Infinity);
    this.fieldNameSizeLimit = (
      limits && typeof limits.fieldNameSize === 'number'
      ? limits.fieldNameSize
      : 100
    );

    this._inKey = true;
    this._keyTrunc = false;
    this._valTrunc = false;
    this._bytesKey = 0;
    this._bytesVal = 0;
    this._fields = 0;
    this._key = '';
    this._val = '';
    this._byte = -2;
    this._lastPos = 0;
    this._encode = 0;
    this._decoder = getDecoder(charset);
  }

  static detect(conType) {
    return (conType.type === 'application'
            && conType.subtype === 'x-www-form-urlencoded');
  }

  _write(chunk, enc, cb) {
    if (this._fields >= this.fieldsLimit)
      return cb();

    let i = 0;
    const len = chunk.length;
    this._lastPos = 0;

    // Check if we last ended mid-percent-encoded byte
    if (this._byte !== -2) {
      i = readPctEnc(this, chunk, i, len);
      if (i === -1)
        return cb(new Error('Malformed urlencoded form'));
      if (i >= len)
        return cb();
      if (this._inKey)
        ++this._bytesKey;
      else
        ++this._bytesVal;
    }

main:
    while (i < len) {
      if (this._inKey) {
        // Parsing key

        i = skipKeyBytes(this, chunk, i, len);

        while (i < len) {
          switch (chunk[i]) {
            case 61: // '='
              if (this._lastPos < i)
                this._key += chunk.latin1Slice(this._lastPos, i);
              this._lastPos = ++i;
              this._key = this._decoder(this._key, this._encode);
              this._encode = 0;
              this._inKey = false;
              continue main;
            case 38: // '&'
              if (this._lastPos < i)
                this._key += chunk.latin1Slice(this._lastPos, i);
              this._lastPos = ++i;
              this._key = this._decoder(this._key, this._encode);
              this._encode = 0;
              if (this._bytesKey > 0) {
                this.emit(
                  'field',
                  this._key,
                  '',
                  { nameTruncated: this._keyTrunc,
                    valueTruncated: false,
                    encoding: this.charset,
                    mimeType: 'text/plain' }
                );
              }
              this._key = '';
              this._val = '';
              this._keyTrunc = false;
              this._valTrunc = false;
              this._bytesKey = 0;
              this._bytesVal = 0;
              if (++this._fields >= this.fieldsLimit) {
                this.emit('fieldsLimit');
                return cb();
              }
              continue;
            case 43: // '+'
              if (this._lastPos < i)
                this._key += chunk.latin1Slice(this._lastPos, i);
              this._key += ' ';
              this._lastPos = i + 1;
              break;
            case 37: // '%'
              if (this._encode === 0)
                this._encode = 1;
              if (this._lastPos < i)
                this._key += chunk.latin1Slice(this._lastPos, i);
              this._lastPos = i + 1;
              this._byte = -1;
              i = readPctEnc(this, chunk, i + 1, len);
              if (i === -1)
                return cb(new Error('Malformed urlencoded form'));
              if (i >= len)
                return cb();
              ++this._bytesKey;
              i = skipKeyBytes(this, chunk, i, len);
              continue;
          }
          ++i;
          ++this._bytesKey;
          i = skipKeyBytes(this, chunk, i, len);
        }
        if (this._lastPos < i)
          this._key += chunk.latin1Slice(this._lastPos, i);
      } else {
        // Parsing value

        i = skipValBytes(this, chunk, i, len);

        while (i < len) {
          switch (chunk[i]) {
            case 38: // '&'
              if (this._lastPos < i)
                this._val += chunk.latin1Slice(this._lastPos, i);
              this._lastPos = ++i;
              this._inKey = true;
              this._val = this._decoder(this._val, this._encode);
              this._encode = 0;
              if (this._bytesKey > 0 || this._bytesVal > 0) {
                this.emit(
                  'field',
                  this._key,
                  this._val,
                  { nameTruncated: this._keyTrunc,
                    valueTruncated: this._valTrunc,
                    encoding: this.charset,
                    mimeType: 'text/plain' }
                );
              }
              this._key = '';
              this._val = '';
              this._keyTrunc = false;
              this._valTrunc = false;
              this._bytesKey = 0;
              this._bytesVal = 0;
              if (++this._fields >= this.fieldsLimit) {
                this.emit('fieldsLimit');
                return cb();
              }
              continue main;
            case 43: // '+'
              if (this._lastPos < i)
                this._val += chunk.latin1Slice(this._lastPos, i);
              this._val += ' ';
              this._lastPos = i + 1;
              break;
            case 37: // '%'
              if (this._encode === 0)
                this._encode = 1;
              if (this._lastPos < i)
                this._val += chunk.latin1Slice(this._lastPos, i);
              this._lastPos = i + 1;
              this._byte = -1;
              i = readPctEnc(this, chunk, i + 1, len);
              if (i === -1)
                return cb(new Error('Malformed urlencoded form'));
              if (i >= len)
                return cb();
              ++this._bytesVal;
              i = skipValBytes(this, chunk, i, len);
              continue;
          }
          ++i;
          ++this._bytesVal;
          i = skipValBytes(this, chunk, i, len);
        }
        if (this._lastPos < i)
          this._val += chunk.latin1Slice(this._lastPos, i);
      }
    }

    cb();
  }

  _final(cb) {
    if (this._byte !== -2)
      return cb(new Error('Malformed urlencoded form'));
    if (!this._inKey || this._bytesKey > 0 || this._bytesVal > 0) {
      if (this._inKey)
        this._key = this._decoder(this._key, this._encode);
      else
        this._val = this._decoder(this._val, this._encode);
      this.emit(
        'field',
        this._key,
        this._val,
        { nameTruncated: this._keyTrunc,
          valueTruncated: this._valTrunc,
          encoding: this.charset,
          mimeType: 'text/plain' }
      );
    }
    cb();
  }
}

function readPctEnc(self, chunk, pos, len) {
  if (pos >= len)
    return len;

  if (self._byte === -1) {
    // We saw a '%' but no hex characters yet
    const hexUpper = HEX_VALUES[chunk[pos++]];
    if (hexUpper === -1)
      return -1;

    if (hexUpper >= 8)
      self._encode = 2; // Indicate high bits detected

    if (pos < len) {
      // Both hex characters are in this chunk
      const hexLower = HEX_VALUES[chunk[pos++]];
      if (hexLower === -1)
        return -1;

      if (self._inKey)
        self._key += String.fromCharCode((hexUpper << 4) + hexLower);
      else
        self._val += String.fromCharCode((hexUpper << 4) + hexLower);

      self._byte = -2;
      self._lastPos = pos;
    } else {
      // Only one hex character was available in this chunk
      self._byte = hexUpper;
    }
  } else {
    // We saw only one hex character so far
    const hexLower = HEX_VALUES[chunk[pos++]];
    if (hexLower === -1)
      return -1;

    if (self._inKey)
      self._key += String.fromCharCode((self._byte << 4) + hexLower);
    else
      self._val += String.fromCharCode((self._byte << 4) + hexLower);

    self._byte = -2;
    self._lastPos = pos;
  }

  return pos;
}

function skipKeyBytes(self, chunk, pos, len) {
  // Skip bytes if we've truncated
  if (self._bytesKey > self.fieldNameSizeLimit) {
    if (!self._keyTrunc) {
      if (self._lastPos < pos)
        self._key += chunk.latin1Slice(self._lastPos, pos - 1);
    }
    self._keyTrunc = true;
    for (; pos < len; ++pos) {
      const code = chunk[pos];
      if (code === 61/* '=' */ || code === 38/* '&' */)
        break;
      ++self._bytesKey;
    }
    self._lastPos = pos;
  }

  return pos;
}

function skipValBytes(self, chunk, pos, len) {
  // Skip bytes if we've truncated
  if (self._bytesVal > self.fieldSizeLimit) {
    if (!self._valTrunc) {
      if (self._lastPos < pos)
        self._val += chunk.latin1Slice(self._lastPos, pos - 1);
    }
    self._valTrunc = true;
    for (; pos < len; ++pos) {
      if (chunk[pos] === 38/* '&' */)
        break;
      ++self._bytesVal;
    }
    self._lastPos = pos;
  }

  return pos;
}

/* eslint-disable no-multi-spaces */
const HEX_VALUES = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, -1, -1, -1, -1, -1, -1,
  -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
];
/* eslint-enable no-multi-spaces */

module.exports = URLEncoded;
