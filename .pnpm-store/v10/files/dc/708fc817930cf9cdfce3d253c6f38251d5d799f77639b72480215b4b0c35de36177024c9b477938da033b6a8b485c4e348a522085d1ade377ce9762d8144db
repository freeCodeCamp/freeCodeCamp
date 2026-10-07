'use strict';
/*
  Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
  by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
*/
function memcmp(buf1, pos1, buf2, pos2, num) {
  for (let i = 0; i < num; ++i) {
    if (buf1[pos1 + i] !== buf2[pos2 + i])
      return false;
  }
  return true;
}

class SBMH {
  constructor(needle, cb) {
    if (typeof cb !== 'function')
      throw new Error('Missing match callback');

    if (typeof needle === 'string')
      needle = Buffer.from(needle);
    else if (!Buffer.isBuffer(needle))
      throw new Error(`Expected Buffer for needle, got ${typeof needle}`);

    const needleLen = needle.length;

    this.maxMatches = Infinity;
    this.matches = 0;

    this._cb = cb;
    this._lookbehindSize = 0;
    this._needle = needle;
    this._bufPos = 0;

    this._lookbehind = Buffer.allocUnsafe(needleLen);

    // Initialize occurrence table.
    this._occ = [
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
      needleLen, needleLen, needleLen, needleLen
    ];

    // Populate occurrence table with analysis of the needle, ignoring the last
    // letter.
    if (needleLen > 1) {
      for (let i = 0; i < needleLen - 1; ++i)
        this._occ[needle[i]] = needleLen - 1 - i;
    }
  }

  reset() {
    this.matches = 0;
    this._lookbehindSize = 0;
    this._bufPos = 0;
  }

  push(chunk, pos) {
    let result;
    if (!Buffer.isBuffer(chunk))
      chunk = Buffer.from(chunk, 'latin1');
    const chunkLen = chunk.length;
    this._bufPos = pos || 0;
    while (result !== chunkLen && this.matches < this.maxMatches)
      result = feed(this, chunk);
    return result;
  }

  destroy() {
    const lbSize = this._lookbehindSize;
    if (lbSize)
      this._cb(false, this._lookbehind, 0, lbSize, false);
    this.reset();
  }
}

function feed(self, data) {
  const len = data.length;
  const needle = self._needle;
  const needleLen = needle.length;

  // Positive: points to a position in `data`
  //           pos == 3 points to data[3]
  // Negative: points to a position in the lookbehind buffer
  //           pos == -2 points to lookbehind[lookbehindSize - 2]
  let pos = -self._lookbehindSize;
  const lastNeedleCharPos = needleLen - 1;
  const lastNeedleChar = needle[lastNeedleCharPos];
  const end = len - needleLen;
  const occ = self._occ;
  const lookbehind = self._lookbehind;

  if (pos < 0) {
    // Lookbehind buffer is not empty. Perform Boyer-Moore-Horspool
    // search with character lookup code that considers both the
    // lookbehind buffer and the current round's haystack data.
    //
    // Loop until
    //   there is a match.
    // or until
    //   we've moved past the position that requires the
    //   lookbehind buffer. In this case we switch to the
    //   optimized loop.
    // or until
    //   the character to look at lies outside the haystack.
    while (pos < 0 && pos <= end) {
      const nextPos = pos + lastNeedleCharPos;
      const ch = (nextPos < 0
                  ? lookbehind[self._lookbehindSize + nextPos]
                  : data[nextPos]);

      if (ch === lastNeedleChar
          && matchNeedle(self, data, pos, lastNeedleCharPos)) {
        self._lookbehindSize = 0;
        ++self.matches;
        if (pos > -self._lookbehindSize)
          self._cb(true, lookbehind, 0, self._lookbehindSize + pos, false);
        else
          self._cb(true, undefined, 0, 0, true);

        return (self._bufPos = pos + needleLen);
      }

      pos += occ[ch];
    }

    // No match.

    // There's too few data for Boyer-Moore-Horspool to run,
    // so let's use a different algorithm to skip as much as
    // we can.
    // Forward pos until
    //   the trailing part of lookbehind + data
    //   looks like the beginning of the needle
    // or until
    //   pos == 0
    while (pos < 0 && !matchNeedle(self, data, pos, len - pos))
      ++pos;

    if (pos < 0) {
      // Cut off part of the lookbehind buffer that has
      // been processed and append the entire haystack
      // into it.
      const bytesToCutOff = self._lookbehindSize + pos;

      if (bytesToCutOff > 0) {
        // The cut off data is guaranteed not to contain the needle.
        self._cb(false, lookbehind, 0, bytesToCutOff, false);
      }

      self._lookbehindSize -= bytesToCutOff;
      lookbehind.copy(lookbehind, 0, bytesToCutOff, self._lookbehindSize);
      lookbehind.set(data, self._lookbehindSize);
      self._lookbehindSize += len;

      self._bufPos = len;
      return len;
    }

    // Discard lookbehind buffer.
    self._cb(false, lookbehind, 0, self._lookbehindSize, false);
    self._lookbehindSize = 0;
  }

  pos += self._bufPos;

  const firstNeedleChar = needle[0];

  // Lookbehind buffer is now empty. Perform Boyer-Moore-Horspool
  // search with optimized character lookup code that only considers
  // the current round's haystack data.
  while (pos <= end) {
    const ch = data[pos + lastNeedleCharPos];

    if (ch === lastNeedleChar
        && data[pos] === firstNeedleChar
        && memcmp(needle, 0, data, pos, lastNeedleCharPos)) {
      ++self.matches;
      if (pos > 0)
        self._cb(true, data, self._bufPos, pos, true);
      else
        self._cb(true, undefined, 0, 0, true);

      return (self._bufPos = pos + needleLen);
    }

    pos += occ[ch];
  }

  // There was no match. If there's trailing haystack data that we cannot
  // match yet using the Boyer-Moore-Horspool algorithm (because the trailing
  // data is less than the needle size) then match using a modified
  // algorithm that starts matching from the beginning instead of the end.
  // Whatever trailing data is left after running this algorithm is added to
  // the lookbehind buffer.
  while (pos < len) {
    if (data[pos] !== firstNeedleChar
        || !memcmp(data, pos, needle, 0, len - pos)) {
      ++pos;
      continue;
    }
    data.copy(lookbehind, 0, pos, len);
    self._lookbehindSize = len - pos;
    break;
  }

  // Everything until `pos` is guaranteed not to contain needle data.
  if (pos > 0)
    self._cb(false, data, self._bufPos, pos < len ? pos : len, true);

  self._bufPos = len;
  return len;
}

function matchNeedle(self, data, pos, len) {
  const lb = self._lookbehind;
  const lbSize = self._lookbehindSize;
  const needle = self._needle;

  for (let i = 0; i < len; ++i, ++pos) {
    const ch = (pos < 0 ? lb[lbSize + pos] : data[pos]);
    if (ch !== needle[i])
      return false;
  }
  return true;
}

module.exports = SBMH;
