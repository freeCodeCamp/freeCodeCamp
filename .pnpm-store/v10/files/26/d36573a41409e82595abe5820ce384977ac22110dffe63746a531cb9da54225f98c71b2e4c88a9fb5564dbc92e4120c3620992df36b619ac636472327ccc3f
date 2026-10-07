'use strict';
var util = require('util'),
  Match = require ('../match');

/**
 * This class matches UTF-16 and UTF-32, both big- and little-endian. The
 * BOM will be used if it is present.
 */
module.exports.UTF_16BE = function() {
  this.name = function() {
    return 'UTF-16BE';
  };
  this.match = function(det) {
    var input = det.fRawInput;

    if (input.length >= 2 && ((input[0] & 0xff) == 0xfe && (input[1] & 0xff) == 0xff)) {
      return new Match(det, this, 100); // confidence = 100
    }

    // TODO: Do some statistics to check for unsigned UTF-16BE
    return null;
  };
};

module.exports.UTF_16LE = function() {
  this.name = function() {
    return 'UTF-16LE';
  };
  this.match = function(det) {
    var input = det.fRawInput;

    if (input.length >= 2 && ((input[0] & 0xff) == 0xff && (input[1] & 0xff) == 0xfe)) {
      // LE BOM is present.
      if (input.length >= 4 && input[2] == 0x00 && input[3] == 0x00) {
        // It is probably UTF-32 LE, not UTF-16
        return null;
      }
      return new Match(det, this, 100); // confidence = 100
    }

    // TODO: Do some statistics to check for unsigned UTF-16LE
    return null;
  }
};

function UTF_32() {};
UTF_32.prototype.match = function(det) {
  var input      = det.fRawInput,
    limit      = (det.fRawLength / 4) * 4,
    numValid   = 0,
    numInvalid = 0,
    hasBOM     = false,
    confidence = 0;

  if (limit == 0) {
    return null;
  }

  if (this.getChar(input, 0) == 0x0000FEFF) {
    hasBOM = true;
  }

  for (var i = 0; i < limit; i += 4) {
    var ch = this.getChar(input, i);

    if (ch < 0 || ch >= 0x10FFFF || (ch >= 0xD800 && ch <= 0xDFFF)) {
      numInvalid += 1;
    } else {
      numValid += 1;
    }
  }

  // Cook up some sort of confidence score, based on presence of a BOM
  //    and the existence of valid and/or invalid multi-byte sequences.
  if (hasBOM && numInvalid == 0) {
    confidence = 100;
  } else if (hasBOM && numValid > numInvalid * 10) {
    confidence = 80;
  } else if (numValid > 3 && numInvalid == 0) {
    confidence = 100;
  } else if (numValid > 0 && numInvalid == 0) {
    confidence = 80;
  } else if (numValid > numInvalid * 10) {
    // Probably corrupt UTF-32BE data.  Valid sequences aren't likely by chance.
    confidence = 25;
  }

  // return confidence == 0 ? null : new CharsetMatch(det, this, confidence);
  return confidence == 0 ? null : new Match(det, this, confidence);
};

module.exports.UTF_32BE = function() {
  this.name = function() {
    return 'UTF-32BE';
  };
  this.getChar = function(input, index) {
    return (input[index + 0] & 0xff) << 24 | (input[index + 1] & 0xff) << 16 |
         (input[index + 2] & 0xff) <<  8 | (input[index + 3] & 0xff);
  };
};
util.inherits(module.exports.UTF_32BE, UTF_32);

module.exports.UTF_32LE = function() {
  this.name = function() {
    return 'UTF-32LE';
  };
  this.getChar = function(input, index) {
    return (input[index + 3] & 0xff) << 24 | (input[index + 2] & 0xff) << 16 |
         (input[index + 1] & 0xff) <<  8 | (input[index + 0] & 0xff);
  };
};
util.inherits(module.exports.UTF_32LE, UTF_32);
