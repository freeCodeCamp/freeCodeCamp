// not used
/* eslint-disable no-underscore-dangle */

'use strict';

const { Transform } = require('stream');
const errors = require('../FormidableError.js');

const { FormidableError } = errors;

const AMPERSAND = 38;
const EQUALS = 61;

class QuerystringParser extends Transform {
  constructor(options = {}) {
    super({ readableObjectMode: true });

    const { maxFieldSize } = options;
    this.maxFieldLength = maxFieldSize;
    this.buffer = Buffer.from('');
    this.fieldCount = 0;
    this.sectionStart = 0;
    this.key = '';
    this.readingKey = true;
  }

  _transform(buffer, encoding, callback) {
    let len = buffer.length;
    if (this.buffer && this.buffer.length) {
      // we have some data left over from the last write which we are in the middle of processing
      len += this.buffer.length;
      buffer = Buffer.concat([this.buffer, buffer], len);
    }

    for (let i = this.buffer.length || 0; i < len; i += 1) {
      const c = buffer[i];
      if (this.readingKey) {
        // KEY, check for =
        if (c === EQUALS) {
          this.key = this.getSection(buffer, i);
          this.readingKey = false;
          this.sectionStart = i + 1;
        } else if (c === AMPERSAND) {
          // just key, no value. Prepare to read another key
          this.emitField(this.getSection(buffer, i));
          this.sectionStart = i + 1;
        }
        // VALUE, check for &
      } else if (c === AMPERSAND) {
        this.emitField(this.key, this.getSection(buffer, i));
        this.sectionStart = i + 1;
      }

      if (
        this.maxFieldLength &&
        i - this.sectionStart === this.maxFieldLength
      ) {
        callback(
          new FormidableError(
            `${
              this.readingKey ? 'Key' : `Value for ${this.key}`
            } longer than maxFieldLength`,
          ),
          errors.maxFieldsSizeExceeded,
          413,
        );
      }
    }

    // Prepare the remaining key or value (from sectionStart to the end) for the next write() or for end()
    len -= this.sectionStart;
    if (len) {
      // i.e. Unless the last character was a & or =
      this.buffer = Buffer.from(this.buffer, 0, this.sectionStart);
    } else this.buffer = null;

    this.sectionStart = 0;
    callback();
  }

  _flush(callback) {
    // Emit the last field
    if (this.readingKey) {
      // we only have a key if there's something in the buffer. We definitely have no value
        if (this.buffer && this.buffer.length){
          this.emitField(this.buffer.toString('ascii'));
        }
    } else {
      // We have a key, we may or may not have a value
      this.emitField(
        this.key,
        this.buffer && this.buffer.length && this.buffer.toString('ascii'),
      );
    }
    this.buffer = '';
    callback();
  }

  getSection(buffer, i) {
    if (i === this.sectionStart) return '';

    return buffer.toString('ascii', this.sectionStart, i);
  }

  emitField(key, val) {
    this.key = '';
    this.readingKey = true;
    this.push({ key, value: val || '' });
  }
}

module.exports = QuerystringParser;

// const q = new QuerystringParser({maxFieldSize: 100});
// (async function() {
//     for await (const chunk of q) {
//       console.log(chunk);
//     }
// })();
// q.write("a=b&c=d")
// q.end()
