/* eslint-disable no-underscore-dangle */

'use strict';

const crypto = require('crypto');
const { EventEmitter } = require('events');

class VolatileFile extends EventEmitter {
  constructor({ filepath, newFilename, originalFilename, mimetype, hashAlgorithm, createFileWriteStream }) {
    super();

    this.lastModifiedDate = null;
    Object.assign(this, { filepath, newFilename, originalFilename, mimetype, hashAlgorithm, createFileWriteStream });

    this.size = 0;
    this._writeStream = null;

    if (typeof this.hashAlgorithm === 'string') {
      this.hash = crypto.createHash(this.hashAlgorithm);
    } else {
      this.hash = null;
    }
  }

  open() {
    this._writeStream = this.createFileWriteStream(this);
    this._writeStream.on('error', (err) => {
      this.emit('error', err);
    });
  }

  destroy() {
    this._writeStream.destroy();
  }

  toJSON() {
    const json = {
      size: this.size,
      newFilename: this.newFilename,
      length: this.length,
      originalFilename: this.originalFilename,
      mimetype: this.mimetype,
    };
    if (this.hash && this.hash !== '') {
      json.hash = this.hash;
    }
    return json;
  }

  toString() {
    return `VolatileFile: ${this.originalFilename}`;
  }

  write(buffer, cb) {
    if (this.hash) {
      this.hash.update(buffer);
    }

    if (this._writeStream.closed || this._writeStream.destroyed) {
      cb();
      return;
    }

    this._writeStream.write(buffer, () => {
      this.size += buffer.length;
      this.emit('progress', this.size);
      cb();
    });
  }

  end(cb) {
    if (this.hash) {
      this.hash = this.hash.digest('hex');
    }
    this._writeStream.end(() => {
      this.emit('end');
      cb();
    });
  }
}

module.exports = VolatileFile;
