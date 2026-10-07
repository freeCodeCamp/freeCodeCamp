/*! https://mths.be/utf8js v2.1.2 by @mathias */
var stringFromCharCode = String.fromCharCode;
// Taken from https://mths.be/punycode
function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    var value;
    var extra;
    while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // high surrogate, and there is a next character
            extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) { // low surrogate
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            }
            else {
                // unmatched surrogate; only append this code unit, in case the next
                // code unit is the high surrogate of a surrogate pair
                output.push(value);
                counter--;
            }
        }
        else {
            output.push(value);
        }
    }
    return output;
}
// Taken from https://mths.be/punycode
function ucs2encode(array) {
    var length = array.length;
    var index = -1;
    var value;
    var output = '';
    while (++index < length) {
        value = array[index];
        if (value > 0xFFFF) {
            value -= 0x10000;
            output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
            value = 0xDC00 | value & 0x3FF;
        }
        output += stringFromCharCode(value);
    }
    return output;
}
function checkScalarValue(codePoint, strict) {
    if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
        if (strict) {
            throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
                ' is not a scalar value');
        }
        return false;
    }
    return true;
}
/*--------------------------------------------------------------------------*/
function createByte(codePoint, shift) {
    return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
}
function encodeCodePoint(codePoint, strict) {
    if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
        return stringFromCharCode(codePoint);
    }
    var symbol = '';
    if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
        symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
    }
    else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
        if (!checkScalarValue(codePoint, strict)) {
            codePoint = 0xFFFD;
        }
        symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
        symbol += createByte(codePoint, 6);
    }
    else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
        symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
        symbol += createByte(codePoint, 12);
        symbol += createByte(codePoint, 6);
    }
    symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
    return symbol;
}
function utf8encode(string, opts) {
    opts = opts || {};
    var strict = false !== opts.strict;
    var codePoints = ucs2decode(string);
    var length = codePoints.length;
    var index = -1;
    var codePoint;
    var byteString = '';
    while (++index < length) {
        codePoint = codePoints[index];
        byteString += encodeCodePoint(codePoint, strict);
    }
    return byteString;
}
/*--------------------------------------------------------------------------*/
function readContinuationByte() {
    if (byteIndex >= byteCount) {
        throw Error('Invalid byte index');
    }
    var continuationByte = byteArray[byteIndex] & 0xFF;
    byteIndex++;
    if ((continuationByte & 0xC0) == 0x80) {
        return continuationByte & 0x3F;
    }
    // If we end up here, it’s not a continuation byte
    throw Error('Invalid continuation byte');
}
function decodeSymbol(strict) {
    var byte1;
    var byte2;
    var byte3;
    var byte4;
    var codePoint;
    if (byteIndex > byteCount) {
        throw Error('Invalid byte index');
    }
    if (byteIndex == byteCount) {
        return false;
    }
    // Read first byte
    byte1 = byteArray[byteIndex] & 0xFF;
    byteIndex++;
    // 1-byte sequence (no continuation bytes)
    if ((byte1 & 0x80) == 0) {
        return byte1;
    }
    // 2-byte sequence
    if ((byte1 & 0xE0) == 0xC0) {
        byte2 = readContinuationByte();
        codePoint = ((byte1 & 0x1F) << 6) | byte2;
        if (codePoint >= 0x80) {
            return codePoint;
        }
        else {
            throw Error('Invalid continuation byte');
        }
    }
    // 3-byte sequence (may include unpaired surrogates)
    if ((byte1 & 0xF0) == 0xE0) {
        byte2 = readContinuationByte();
        byte3 = readContinuationByte();
        codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
        if (codePoint >= 0x0800) {
            return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
        }
        else {
            throw Error('Invalid continuation byte');
        }
    }
    // 4-byte sequence
    if ((byte1 & 0xF8) == 0xF0) {
        byte2 = readContinuationByte();
        byte3 = readContinuationByte();
        byte4 = readContinuationByte();
        codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
            (byte3 << 0x06) | byte4;
        if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
            return codePoint;
        }
    }
    throw Error('Invalid UTF-8 detected');
}
var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
    opts = opts || {};
    var strict = false !== opts.strict;
    byteArray = ucs2decode(byteString);
    byteCount = byteArray.length;
    byteIndex = 0;
    var codePoints = [];
    var tmp;
    while ((tmp = decodeSymbol(strict)) !== false) {
        codePoints.push(tmp);
    }
    return ucs2encode(codePoints);
}
module.exports = {
    version: '2.1.2',
    encode: utf8encode,
    decode: utf8decode
};
