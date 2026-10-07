/*
 * [hi-base32]{@link https://github.com/emn178/hi-base32}
 *
 * @version 0.5.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.HI_BASE32_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.HI_BASE32_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var BASE32_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.split('');
  var BASE32_DECODE_CHAR = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8,
    'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16,
    'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24,
    'Z': 25, '2': 26, '3': 27, '4': 28, '5': 29, '6': 30, '7': 31
  };

  var blocks = [0, 0, 0, 0, 0, 0, 0, 0];

  var throwInvalidUtf8 = function (position, partial) {
    if (partial.length > 10) {
      partial = '...' + partial.substr(-10);
    }
    var err = new Error('Decoded data is not valid UTF-8.'
      + ' Maybe try base32.decode.asBytes()?'
      + ' Partial data after reading ' + position + ' bytes: ' + partial + ' <-');
    err.position = position;
    throw err;
  };

  var toUtf8String = function (bytes) {
    var str = '', length = bytes.length, i = 0, followingChars = 0, b, c;
    while (i < length) {
      b = bytes[i++];
      if (b <= 0x7F) {
        str += String.fromCharCode(b);
        continue;
      } else if (b > 0xBF && b <= 0xDF) {
        c = b & 0x1F;
        followingChars = 1;
      } else if (b <= 0xEF) {
        c = b & 0x0F;
        followingChars = 2;
      } else if (b <= 0xF7) {
        c = b & 0x07;
        followingChars = 3;
      } else {
        throwInvalidUtf8(i, str);
      }

      for (var j = 0; j < followingChars; ++j) {
        b = bytes[i++];
        if (b < 0x80 || b > 0xBF) {
          throwInvalidUtf8(i, str);
        }
        c <<= 6;
        c += b & 0x3F;
      }
      if (c >= 0xD800 && c <= 0xDFFF) {
        throwInvalidUtf8(i, str);
      }
      if (c > 0x10FFFF) {
        throwInvalidUtf8(i, str);
      }

      if (c <= 0xFFFF) {
        str += String.fromCharCode(c);
      } else {
        c -= 0x10000;
        str += String.fromCharCode((c >> 10) + 0xD800);
        str += String.fromCharCode((c & 0x3FF) + 0xDC00);
      }
    }
    return str;
  };

  var decodeAsBytes = function (base32Str) {
    if (base32Str === '') {
      return [];
    } else if (!/^[A-Z2-7=]+$/.test(base32Str)) {
      throw new Error('Invalid base32 characters');
    }
    base32Str = base32Str.replace(/=/g, '');
    var v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = base32Str.length;

    // 4 char to 3 bytes
    for (var i = 0, count = length >> 3 << 3; i < count;) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
      bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
      bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
      bytes[index++] = (v7 << 5 | v8) & 255;
    }

    // remain bytes
    var remain = length - count;
    if (remain === 2) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
    } else if (remain === 4) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
    } else if (remain === 5) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
      bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
    } else if (remain === 7) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
      bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
      bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
    }
    return bytes;
  };

  var encodeAscii = function (str) {
    var v1, v2, v3, v4, v5, base32Str = '', length = str.length;
    for (var i = 0, count = parseInt(length / 5) * 5; i < count;) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i++);
      v3 = str.charCodeAt(i++);
      v4 = str.charCodeAt(i++);
      v5 = str.charCodeAt(i++);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] +
        BASE32_ENCODE_CHAR[v5 & 31];
    }

    // remain char
    var remain = length - count;
    if (remain === 1) {
      v1 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2) & 31] +
        '======';
    } else if (remain === 2) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4) & 31] +
        '====';
    } else if (remain === 3) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i++);
      v3 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1) & 31] +
        '===';
    } else if (remain === 4) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i++);
      v3 = str.charCodeAt(i++);
      v4 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3) & 31] +
        '=';
    }
    return base32Str;
  };

  var encodeUtf8 = function (str) {
    var v1, v2, v3, v4, v5, code, end = false, base32Str = '',
      index = 0, i, start = 0, bytes = 0, length = str.length;
      if (str === '') {
        return base32Str;
      }
    do {
      blocks[0] = blocks[5];
      blocks[1] = blocks[6];
      blocks[2] = blocks[7];
      for (i = start; index < length && i < 5; ++index) {
        code = str.charCodeAt(index);
        if (code < 0x80) {
          blocks[i++] = code;
        } else if (code < 0x800) {
          blocks[i++] = 0xc0 | (code >> 6);
          blocks[i++] = 0x80 | (code & 0x3f);
        } else if (code < 0xd800 || code >= 0xe000) {
          blocks[i++] = 0xe0 | (code >> 12);
          blocks[i++] = 0x80 | ((code >> 6) & 0x3f);
          blocks[i++] = 0x80 | (code & 0x3f);
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(++index) & 0x3ff));
          blocks[i++] = 0xf0 | (code >> 18);
          blocks[i++] = 0x80 | ((code >> 12) & 0x3f);
          blocks[i++] = 0x80 | ((code >> 6) & 0x3f);
          blocks[i++] = 0x80 | (code & 0x3f);
        }
      }
      bytes += i - start;
      start = i - 5;
      if (index === length) {
        ++index;
      }
      if (index > length && i < 6) {
        end = true;
      }
      v1 = blocks[0];
      if (i > 4) {
        v2 = blocks[1];
        v3 = blocks[2];
        v4 = blocks[3];
        v5 = blocks[4];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
          BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
          BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
          BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] +
          BASE32_ENCODE_CHAR[v5 & 31];
      } else if (i === 1) {
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2) & 31] +
          '======';
      } else if (i === 2) {
        v2 = blocks[1];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4) & 31] +
          '====';
      } else if (i === 3) {
        v2 = blocks[1];
        v3 = blocks[2];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
          BASE32_ENCODE_CHAR[(v3 << 1) & 31] +
          '===';
      } else {
        v2 = blocks[1];
        v3 = blocks[2];
        v4 = blocks[3];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
          BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
          BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
          BASE32_ENCODE_CHAR[(v4 << 3) & 31] +
          '=';
      }
    } while (!end);
    return base32Str;
  };

  var encodeBytes = function (bytes) {
    var v1, v2, v3, v4, v5, base32Str = '', length = bytes.length;
    for (var i = 0, count = parseInt(length / 5) * 5; i < count;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      v4 = bytes[i++];
      v5 = bytes[i++];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] +
        BASE32_ENCODE_CHAR[v5 & 31];
    }

    // remain char
    var remain = length - count;
    if (remain === 1) {
      v1 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2) & 31] +
        '======';
    } else if (remain === 2) {
      v1 = bytes[i++];
      v2 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4) & 31] +
        '====';
    } else if (remain === 3) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1) & 31] +
        '===';
    } else if (remain === 4) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      v4 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3) & 31] +
        '=';
    }
    return base32Str;
  };

  var encode = function (input, asciiOnly) {
    var notString = typeof(input) !== 'string';
    if (notString && input.constructor === ArrayBuffer) {
      input = new Uint8Array(input);
    }
    if (notString) {
      return encodeBytes(input);
    } else if (asciiOnly) {
      return encodeAscii(input);
    } else {
      return encodeUtf8(input);
    }
  };

  var decode = function (base32Str, asciiOnly) {
    if (!asciiOnly) {
      return toUtf8String(decodeAsBytes(base32Str));
    }
    if (base32Str === '') {
      return '';
    } else if (!/^[A-Z2-7=]+$/.test(base32Str)) {
      throw new Error('Invalid base32 characters');
    }
    var v1, v2, v3, v4, v5, v6, v7, v8, str = '', length = base32Str.indexOf('=');
    if (length === -1) {
      length = base32Str.length;
    }

    // 8 char to 5 bytes
    for (var i = 0, count = length >> 3 << 3; i < count;) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) +
        String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) +
        String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255) +
        String.fromCharCode((v7 << 5 | v8) & 255);
    }

    // remain bytes
    var remain = length - count;
    if (remain === 2) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255);
    } else if (remain === 4) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255);
    } else if (remain === 5) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) +
        String.fromCharCode((v4 << 4 | v5 >>> 1) & 255);
    } else if (remain === 7) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) +
        String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) +
        String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255);
    }
    return str;
  };

  var exports = {
    encode: encode,
    decode: decode
  };
  decode.asBytes = decodeAsBytes;

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.base32 = exports;
    if (AMD) {
      define(function() {
        return exports;
      });
    }
  }
})();
