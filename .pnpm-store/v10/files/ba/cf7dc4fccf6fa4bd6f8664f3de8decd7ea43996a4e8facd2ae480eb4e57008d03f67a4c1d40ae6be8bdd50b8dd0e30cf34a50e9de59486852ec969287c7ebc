/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

'use strict';

// 65536 is the size of a wasm memory page
// 64 is the maximum chunk size for every possible wasm hash implementation
// 4 is the maximum number of bytes per char for string encoding (max is utf-8)
// ~3 makes sure that it's always a block of 4 chars, so avoid partially encoded bytes for base64
const MAX_SHORT_STRING = Math.floor((65536 - 64) / 4) & ~3;

class WasmHash {
  /**
   * @param {WebAssembly.Instance} instance wasm instance
   * @param {WebAssembly.Instance[]} instancesPool pool of instances
   * @param {number} chunkSize size of data chunks passed to wasm
   * @param {number} digestSize size of digest returned by wasm
   */
  constructor(instance, instancesPool, chunkSize, digestSize) {
    const exports = /** @type {any} */ (instance.exports);

    exports.init();

    this.exports = exports;
    this.mem = Buffer.from(exports.memory.buffer, 0, 65536);
    this.buffered = 0;
    this.instancesPool = instancesPool;
    this.chunkSize = chunkSize;
    this.digestSize = digestSize;
  }

  reset() {
    this.buffered = 0;
    this.exports.init();
  }

  /**
   * @param {Buffer | string} data data
   * @param {BufferEncoding=} encoding encoding
   * @returns {this} itself
   */
  update(data, encoding) {
    if (typeof data === 'string') {
      while (data.length > MAX_SHORT_STRING) {
        this._updateWithShortString(data.slice(0, MAX_SHORT_STRING), encoding);
        data = data.slice(MAX_SHORT_STRING);
      }

      this._updateWithShortString(data, encoding);

      return this;
    }

    this._updateWithBuffer(data);

    return this;
  }

  /**
   * @param {string} data data
   * @param {BufferEncoding=} encoding encoding
   * @returns {void}
   */
  _updateWithShortString(data, encoding) {
    const { exports, buffered, mem, chunkSize } = this;

    let endPos;

    if (data.length < 70) {
      if (!encoding || encoding === 'utf-8' || encoding === 'utf8') {
        endPos = buffered;
        for (let i = 0; i < data.length; i++) {
          const cc = data.charCodeAt(i);

          if (cc < 0x80) {
            mem[endPos++] = cc;
          } else if (cc < 0x800) {
            mem[endPos] = (cc >> 6) | 0xc0;
            mem[endPos + 1] = (cc & 0x3f) | 0x80;
            endPos += 2;
          } else {
            // bail-out for weird chars
            endPos += mem.write(data.slice(i), endPos, encoding);
            break;
          }
        }
      } else if (encoding === 'latin1') {
        endPos = buffered;

        for (let i = 0; i < data.length; i++) {
          const cc = data.charCodeAt(i);

          mem[endPos++] = cc;
        }
      } else {
        endPos = buffered + mem.write(data, buffered, encoding);
      }
    } else {
      endPos = buffered + mem.write(data, buffered, encoding);
    }

    if (endPos < chunkSize) {
      this.buffered = endPos;
    } else {
      const l = endPos & ~(this.chunkSize - 1);

      exports.update(l);

      const newBuffered = endPos - l;

      this.buffered = newBuffered;

      if (newBuffered > 0) {
        mem.copyWithin(0, l, endPos);
      }
    }
  }

  /**
   * @param {Buffer} data data
   * @returns {void}
   */
  _updateWithBuffer(data) {
    const { exports, buffered, mem } = this;
    const length = data.length;

    if (buffered + length < this.chunkSize) {
      data.copy(mem, buffered, 0, length);

      this.buffered += length;
    } else {
      const l = (buffered + length) & ~(this.chunkSize - 1);

      if (l > 65536) {
        let i = 65536 - buffered;

        data.copy(mem, buffered, 0, i);
        exports.update(65536);

        const stop = l - buffered - 65536;

        while (i < stop) {
          data.copy(mem, 0, i, i + 65536);
          exports.update(65536);
          i += 65536;
        }

        data.copy(mem, 0, i, l - buffered);

        exports.update(l - buffered - i);
      } else {
        data.copy(mem, buffered, 0, l - buffered);

        exports.update(l);
      }

      const newBuffered = length + buffered - l;

      this.buffered = newBuffered;

      if (newBuffered > 0) {
        data.copy(mem, 0, length - newBuffered, length);
      }
    }
  }

  digest(type) {
    const { exports, buffered, mem, digestSize } = this;

    exports.final(buffered);

    this.instancesPool.push(this);

    const hex = mem.toString('latin1', 0, digestSize);

    if (type === 'hex') {
      return hex;
    }

    if (type === 'binary' || !type) {
      return Buffer.from(hex, 'hex');
    }

    return Buffer.from(hex, 'hex').toString(type);
  }
}

const create = (wasmModule, instancesPool, chunkSize, digestSize) => {
  if (instancesPool.length > 0) {
    const old = instancesPool.pop();

    old.reset();

    return old;
  } else {
    return new WasmHash(
      new WebAssembly.Instance(wasmModule),
      instancesPool,
      chunkSize,
      digestSize
    );
  }
};

module.exports = create;
module.exports.MAX_SHORT_STRING = MAX_SHORT_STRING;
