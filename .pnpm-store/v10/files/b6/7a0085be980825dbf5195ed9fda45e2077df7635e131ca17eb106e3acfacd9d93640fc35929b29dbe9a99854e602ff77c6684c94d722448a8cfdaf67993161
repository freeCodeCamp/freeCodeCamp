"use strict";

exports.__esModule = true;
exports.murmurhash = void 0;
// murmurhash2 via https://gist.github.com/raycmorgan/588423

const murmurhash = (str, seed) => {
  const m = 0x5bd1e995;
  const r = 24;
  let h = seed ^ str.length;
  let length = str.length;
  let currentIndex = 0;
  while (length >= 4) {
    let k = UInt32(str, currentIndex);
    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);
    h = Umul32(h, m);
    h ^= k;
    currentIndex += 4;
    length -= 4;
  }
  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;
    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;
    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }
  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;
  return h >>> 0;
};
exports.murmurhash = murmurhash;
function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}
function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}
function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  const nlo = n & 0xffff;
  const nhi = n >>> 16;
  const res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}