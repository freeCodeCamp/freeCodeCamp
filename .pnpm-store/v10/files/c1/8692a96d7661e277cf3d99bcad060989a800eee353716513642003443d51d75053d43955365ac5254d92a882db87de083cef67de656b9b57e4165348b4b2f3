var util = require('util'),
  Match = require ('../match');


/**
 * This is a superclass for the individual detectors for
 * each of the detectable members of the ISO 2022 family
 * of encodings.
 */

function ISO_2022() {}

ISO_2022.prototype.match = function(det) {

  /**
   * Matching function shared among the 2022 detectors JP, CN and KR
   * Counts up the number of legal an unrecognized escape sequences in
   * the sample of text, and computes a score based on the total number &
   * the proportion that fit the encoding.
   *
   *
   * @param text the byte buffer containing text to analyse
   * @param textLen  the size of the text in the byte.
   * @param escapeSequences the byte escape sequences to test for.
   * @return match quality, in the range of 0-100.
   */

  var i, j;
  var escN;
  var hits   = 0;
  var misses = 0;
  var shifts = 0;
  var quality;

  // TODO: refactor me
  var text = det.fInputBytes;
  var textLen = det.fInputLen;

  scanInput:
    for (i = 0; i < textLen; i++) {
      if (text[i] == 0x1b) {
        checkEscapes:
          for (escN = 0; escN < this.escapeSequences.length; escN++) {
            var seq = this.escapeSequences[escN];

            if ((textLen - i) < seq.length)
              continue checkEscapes;

            for (j = 1; j < seq.length; j++)
              if (seq[j] != text[i + j])
                continue checkEscapes;


            hits++;
            i += seq.length - 1;
            continue scanInput;
          }

          misses++;
      }

      // Shift in/out
      if (text[i] == 0x0e || text[i] == 0x0f)
        shifts++;

    }

  if (hits == 0)
    return null;

  //
  // Initial quality is based on relative proportion of recongized vs.
  //   unrecognized escape sequences.
  //   All good:  quality = 100;
  //   half or less good: quality = 0;
  //   linear inbetween.
  quality = (100 * hits - 100 * misses) / (hits + misses);

  // Back off quality if there were too few escape sequences seen.
  //   Include shifts in this computation, so that KR does not get penalized
  //   for having only a single Escape sequence, but many shifts.
  if (hits + shifts < 5)
    quality -= (5 - (hits + shifts)) * 10;

  return quality <= 0 ? null : new Match(det, this, quality);
};

module.exports.ISO_2022_JP = function() {
  this.name = function() {
    return 'ISO-2022-JP';
  };
  this.escapeSequences = [
    [ 0x1b, 0x24, 0x28, 0x43 ],   // KS X 1001:1992
    [ 0x1b, 0x24, 0x28, 0x44 ],   // JIS X 212-1990
    [ 0x1b, 0x24, 0x40 ],         // JIS C 6226-1978
    [ 0x1b, 0x24, 0x41 ],         // GB 2312-80
    [ 0x1b, 0x24, 0x42 ],         // JIS X 208-1983
    [ 0x1b, 0x26, 0x40 ],         // JIS X 208 1990, 1997
    [ 0x1b, 0x28, 0x42 ],         // ASCII
    [ 0x1b, 0x28, 0x48 ],         // JIS-Roman
    [ 0x1b, 0x28, 0x49 ],         // Half-width katakana
    [ 0x1b, 0x28, 0x4a ],         // JIS-Roman
    [ 0x1b, 0x2e, 0x41 ],         // ISO 8859-1
    [ 0x1b, 0x2e, 0x46 ]          // ISO 8859-7
  ];
};
util.inherits(module.exports.ISO_2022_JP, ISO_2022);



module.exports.ISO_2022_KR = function() {
  this.name = function() {
    return 'ISO-2022-KR';
  };
  this.escapeSequences = [
    [ 0x1b, 0x24, 0x29, 0x43 ]
  ];
};
util.inherits(module.exports.ISO_2022_KR, ISO_2022);



module.exports.ISO_2022_CN = function() {
  this.name = function() {
    return 'ISO-2022-CN';
  };
  this.escapeSequences = [
    [ 0x1b, 0x24, 0x29, 0x41 ],   // GB 2312-80
    [ 0x1b, 0x24, 0x29, 0x47 ],   // CNS 11643-1992 Plane 1
    [ 0x1b, 0x24, 0x2A, 0x48 ],   // CNS 11643-1992 Plane 2
    [ 0x1b, 0x24, 0x29, 0x45 ],   // ISO-IR-165
    [ 0x1b, 0x24, 0x2B, 0x49 ],   // CNS 11643-1992 Plane 3
    [ 0x1b, 0x24, 0x2B, 0x4A ],   // CNS 11643-1992 Plane 4
    [ 0x1b, 0x24, 0x2B, 0x4B ],   // CNS 11643-1992 Plane 5
    [ 0x1b, 0x24, 0x2B, 0x4C ],   // CNS 11643-1992 Plane 6
    [ 0x1b, 0x24, 0x2B, 0x4D ],   // CNS 11643-1992 Plane 7
    [ 0x1b, 0x4e ],               // SS2
    [ 0x1b, 0x4f ]                // SS3
  ];
};
util.inherits(module.exports.ISO_2022_CN, ISO_2022);
