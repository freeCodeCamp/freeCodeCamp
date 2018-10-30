'use strict'
// Tar can encode large and negative numbers using a leading byte of
// 0xff for negative, and 0x80 for positive.  The trailing byte in the
// section will always be 0x20, or in some implementations 0x00.
// this module encodes and decodes these things.

const encode = exports.encode = (num, buf) => {
  buf[buf.length - 1] = 0x20
  if (num < 0)
    encodeNegative(num, buf)
  else
    encodePositive(num, buf)
  return buf
}

const encodePositive = (num, buf) => {
  buf[0] = 0x80
  for (var i = buf.length - 2; i > 0; i--) {
    if (num === 0)
      buf[i] = 0
    else {
      buf[i] = num % 0x100
      num = Math.floor(num / 0x100)
    }
  }
}

const encodeNegative = (num, buf) => {
  buf[0] = 0xff
  var flipped = false
  num = num * -1
  for (var i = buf.length - 2; i > 0; i--) {
    var byte
    if (num === 0)
      byte = 0
    else {
      byte = num % 0x100
      num = Math.floor(num / 0x100)
    }
    if (flipped)
      buf[i] = onesComp(byte)
    else if (byte === 0)
      buf[i] = 0
    else {
      flipped = true
      buf[i] = twosComp(byte)
    }
  }
}

const parse = exports.parse = (buf) => {
  var post = buf[buf.length - 1]
  var pre = buf[0]
  return pre === 0x80 ? pos(buf.slice(1, buf.length - 1))
   : twos(buf.slice(1, buf.length - 1))
}

const twos = (buf) => {
  var len = buf.length
  var sum = 0
  var flipped = false
  for (var i = len - 1; i > -1; i--) {
    var byte = buf[i]
    var f
    if (flipped)
      f = onesComp(byte)
    else if (byte === 0)
      f = byte
    else {
      flipped = true
      f = twosComp(byte)
    }
    if (f !== 0)
      sum += f * Math.pow(256, len - i - 1)
  }
  return sum * -1
}

const pos = (buf) => {
  var len = buf.length
  var sum = 0
  for (var i = len - 1; i > -1; i--) {
    var byte = buf[i]
    if (byte !== 0)
      sum += byte * Math.pow(256, len - i - 1)
  }
  return sum
}

const onesComp = byte => (0xff ^ byte) & 0xff

const twosComp = byte => ((0xff ^ byte) + 1) & 0xff
