var Buffer = require('safe-buffer').Buffer
var ZEROES = Buffer.alloc(16, 0)

function toArray (buf) {
  return [
    buf.readUInt32BE(0),
    buf.readUInt32BE(4),
    buf.readUInt32BE(8),
    buf.readUInt32BE(12)
  ]
}

function fromArray (out) {
  var buf = Buffer.allocUnsafe(16)
  buf.writeUInt32BE(out[0] >>> 0, 0)
  buf.writeUInt32BE(out[1] >>> 0, 4)
  buf.writeUInt32BE(out[2] >>> 0, 8)
  buf.writeUInt32BE(out[3] >>> 0, 12)
  return buf
}

function GHASH (key) {
  this.h = key
  this.state = Buffer.alloc(16, 0)
  this.cache = Buffer.allocUnsafe(0)
}

// from http://bitwiseshiftleft.github.io/sjcl/doc/symbols/src/core_gcm.js.html
// by Juho Vähä-Herttua
GHASH.prototype.ghash = function (block) {
  var i = -1
  while (++i < block.length) {
    this.state[i] ^= block[i]
  }
  this._multiply()
}

GHASH.prototype._multiply = function () {
  var Vi = toArray(this.h)
  var Zi = [0, 0, 0, 0]
  var j, xi, lsbVi
  var i = -1
  while (++i < 128) {
    xi = (this.state[~~(i / 8)] & (1 << (7 - (i % 8)))) !== 0
    if (xi) {
      // Z_i+1 = Z_i ^ V_i
      Zi[0] ^= Vi[0]
      Zi[1] ^= Vi[1]
      Zi[2] ^= Vi[2]
      Zi[3] ^= Vi[3]
    }

    // Store the value of LSB(V_i)
    lsbVi = (Vi[3] & 1) !== 0

    // V_i+1 = V_i >> 1
    for (j = 3; j > 0; j--) {
      Vi[j] = (Vi[j] >>> 1) | ((Vi[j - 1] & 1) << 31)
    }
    Vi[0] = Vi[0] >>> 1

    // If LSB(V_i) is 1, V_i+1 = (V_i >> 1) ^ R
    if (lsbVi) {
      Vi[0] = Vi[0] ^ (0xe1 << 24)
    }
  }
  this.state = fromArray(Zi)
}

GHASH.prototype.update = function (buf) {
  this.cache = Buffer.concat([this.cache, buf])
  var chunk
  while (this.cache.length >= 16) {
    chunk = this.cache.slice(0, 16)
    this.cache = this.cache.slice(16)
    this.ghash(chunk)
  }
}

GHASH.prototype.final = function (abl, bl) {
  if (this.cache.length) {
    this.ghash(Buffer.concat([this.cache, ZEROES], 16))
  }

  this.ghash(fromArray([0, abl, 0, bl]))
  return this.state
}

module.exports = GHASH
