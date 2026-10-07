"use strict";

function makeException(ErrorType, message, options) {
  if (options.globals) {
    ErrorType = options.globals[ErrorType.name];
  }
  return new ErrorType(`${options.context ? options.context : "Value"} ${message}.`);
}

function toNumber(value, options) {
  if (typeof value === "bigint") {
    throw makeException(TypeError, "is a BigInt which cannot be converted to a number", options);
  }
  if (!options.globals) {
    return Number(value);
  }
  return options.globals.Number(value);
}

// Round x to the nearest integer, choosing the even integer if it lies halfway between two.
function evenRound(x) {
  // There are four cases for numbers with fractional part being .5:
  //
  // case |     x     | floor(x) | round(x) | expected | x <> 0 | x % 1 | x & 1 |   example
  //   1  |  2n + 0.5 |  2n      |  2n + 1  |  2n      |   >    |  0.5  |   0   |  0.5 ->  0
  //   2  |  2n + 1.5 |  2n + 1  |  2n + 2  |  2n + 2  |   >    |  0.5  |   1   |  1.5 ->  2
  //   3  | -2n - 0.5 | -2n - 1  | -2n      | -2n      |   <    | -0.5  |   0   | -0.5 ->  0
  //   4  | -2n - 1.5 | -2n - 2  | -2n - 1  | -2n - 2  |   <    | -0.5  |   1   | -1.5 -> -2
  // (where n is a non-negative integer)
  //
  // Branch here for cases 1 and 4
  if ((x > 0 && (x % 1) === +0.5 && (x & 1) === 0) ||
        (x < 0 && (x % 1) === -0.5 && (x & 1) === 1)) {
    return censorNegativeZero(Math.floor(x));
  }

  return censorNegativeZero(Math.round(x));
}

function integerPart(n) {
  return censorNegativeZero(Math.trunc(n));
}

function sign(x) {
  return x < 0 ? -1 : 1;
}

function modulo(x, y) {
  // https://tc39.github.io/ecma262/#eqn-modulo
  // Note that http://stackoverflow.com/a/4467559/3191 does NOT work for large modulos
  const signMightNotMatch = x % y;
  if (sign(y) !== sign(signMightNotMatch)) {
    return signMightNotMatch + y;
  }
  return signMightNotMatch;
}

function censorNegativeZero(x) {
  return x === 0 ? 0 : x;
}

function createIntegerConversion(bitLength, { unsigned }) {
  let lowerBound, upperBound;
  if (unsigned) {
    lowerBound = 0;
    upperBound = 2 ** bitLength - 1;
  } else {
    lowerBound = -(2 ** (bitLength - 1));
    upperBound = 2 ** (bitLength - 1) - 1;
  }

  const twoToTheBitLength = 2 ** bitLength;
  const twoToOneLessThanTheBitLength = 2 ** (bitLength - 1);

  return (value, options = {}) => {
    let x = toNumber(value, options);
    x = censorNegativeZero(x);

    if (options.enforceRange) {
      if (!Number.isFinite(x)) {
        throw makeException(TypeError, "is not a finite number", options);
      }

      x = integerPart(x);

      if (x < lowerBound || x > upperBound) {
        throw makeException(
          TypeError,
          `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`,
          options
        );
      }

      return x;
    }

    if (!Number.isNaN(x) && options.clamp) {
      x = Math.min(Math.max(x, lowerBound), upperBound);
      x = evenRound(x);
      return x;
    }

    if (!Number.isFinite(x) || x === 0) {
      return 0;
    }
    x = integerPart(x);

    // Math.pow(2, 64) is not accurately representable in JavaScript, so try to avoid these per-spec operations if
    // possible. Hopefully it's an optimization for the non-64-bitLength cases too.
    if (x >= lowerBound && x <= upperBound) {
      return x;
    }

    // These will not work great for bitLength of 64, but oh well. See the README for more details.
    x = modulo(x, twoToTheBitLength);
    if (!unsigned && x >= twoToOneLessThanTheBitLength) {
      return x - twoToTheBitLength;
    }
    return x;
  };
}

function createLongLongConversion(bitLength, { unsigned }) {
  const upperBound = Number.MAX_SAFE_INTEGER;
  const lowerBound = unsigned ? 0 : Number.MIN_SAFE_INTEGER;
  const asBigIntN = unsigned ? BigInt.asUintN : BigInt.asIntN;

  return (value, options = {}) => {
    let x = toNumber(value, options);
    x = censorNegativeZero(x);

    if (options.enforceRange) {
      if (!Number.isFinite(x)) {
        throw makeException(TypeError, "is not a finite number", options);
      }

      x = integerPart(x);

      if (x < lowerBound || x > upperBound) {
        throw makeException(
          TypeError,
          `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`,
          options
        );
      }

      return x;
    }

    if (!Number.isNaN(x) && options.clamp) {
      x = Math.min(Math.max(x, lowerBound), upperBound);
      x = evenRound(x);
      return x;
    }

    if (!Number.isFinite(x) || x === 0) {
      return 0;
    }

    let xBigInt = BigInt(integerPart(x));
    xBigInt = asBigIntN(bitLength, xBigInt);
    return Number(xBigInt);
  };
}

exports.any = value => {
  return value;
};

exports.undefined = () => {
  return undefined;
};

exports.boolean = value => {
  return Boolean(value);
};

exports.byte = createIntegerConversion(8, { unsigned: false });
exports.octet = createIntegerConversion(8, { unsigned: true });

exports.short = createIntegerConversion(16, { unsigned: false });
exports["unsigned short"] = createIntegerConversion(16, { unsigned: true });

exports.long = createIntegerConversion(32, { unsigned: false });
exports["unsigned long"] = createIntegerConversion(32, { unsigned: true });

exports["long long"] = createLongLongConversion(64, { unsigned: false });
exports["unsigned long long"] = createLongLongConversion(64, { unsigned: true });

exports.double = (value, options = {}) => {
  const x = toNumber(value, options);

  if (!Number.isFinite(x)) {
    throw makeException(TypeError, "is not a finite floating-point value", options);
  }

  return x;
};

exports["unrestricted double"] = (value, options = {}) => {
  const x = toNumber(value, options);

  return x;
};

exports.float = (value, options = {}) => {
  const x = toNumber(value, options);

  if (!Number.isFinite(x)) {
    throw makeException(TypeError, "is not a finite floating-point value", options);
  }

  if (Object.is(x, -0)) {
    return x;
  }

  const y = Math.fround(x);

  if (!Number.isFinite(y)) {
    throw makeException(TypeError, "is outside the range of a single-precision floating-point value", options);
  }

  return y;
};

exports["unrestricted float"] = (value, options = {}) => {
  const x = toNumber(value, options);

  if (isNaN(x)) {
    return x;
  }

  if (Object.is(x, -0)) {
    return x;
  }

  return Math.fround(x);
};

exports.DOMString = (value, options = {}) => {
  if (options.treatNullAsEmptyString && value === null) {
    return "";
  }

  if (typeof value === "symbol") {
    throw makeException(TypeError, "is a symbol, which cannot be converted to a string", options);
  }

  const StringCtor = options.globals ? options.globals.String : String;
  return StringCtor(value);
};

exports.ByteString = (value, options = {}) => {
  const x = exports.DOMString(value, options);
  let c;
  for (let i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
    if (c > 255) {
      throw makeException(TypeError, "is not a valid ByteString", options);
    }
  }

  return x;
};

exports.USVString = (value, options = {}) => {
  const S = exports.DOMString(value, options);
  const n = S.length;
  const U = [];
  for (let i = 0; i < n; ++i) {
    const c = S.charCodeAt(i);
    if (c < 0xD800 || c > 0xDFFF) {
      U.push(String.fromCodePoint(c));
    } else if (0xDC00 <= c && c <= 0xDFFF) {
      U.push(String.fromCodePoint(0xFFFD));
    } else if (i === n - 1) {
      U.push(String.fromCodePoint(0xFFFD));
    } else {
      const d = S.charCodeAt(i + 1);
      if (0xDC00 <= d && d <= 0xDFFF) {
        const a = c & 0x3FF;
        const b = d & 0x3FF;
        U.push(String.fromCodePoint((2 << 15) + ((2 << 9) * a) + b));
        ++i;
      } else {
        U.push(String.fromCodePoint(0xFFFD));
      }
    }
  }

  return U.join("");
};

exports.object = (value, options = {}) => {
  if (value === null || (typeof value !== "object" && typeof value !== "function")) {
    throw makeException(TypeError, "is not an object", options);
  }

  return value;
};

const abByteLengthGetter =
    Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
const sabByteLengthGetter =
    typeof SharedArrayBuffer === "function" ?
      Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength").get :
      null;

function isNonSharedArrayBuffer(value) {
  try {
    // This will throw on SharedArrayBuffers, but not detached ArrayBuffers.
    // (The spec says it should throw, but the spec conflicts with implementations: https://github.com/tc39/ecma262/issues/678)
    abByteLengthGetter.call(value);

    return true;
  } catch {
    return false;
  }
}

function isSharedArrayBuffer(value) {
  try {
    sabByteLengthGetter.call(value);
    return true;
  } catch {
    return false;
  }
}

function isArrayBufferDetached(value) {
  try {
    // eslint-disable-next-line no-new
    new Uint8Array(value);
    return false;
  } catch {
    return true;
  }
}

exports.ArrayBuffer = (value, options = {}) => {
  if (!isNonSharedArrayBuffer(value)) {
    if (options.allowShared && !isSharedArrayBuffer(value)) {
      throw makeException(TypeError, "is not an ArrayBuffer or SharedArrayBuffer", options);
    }
    throw makeException(TypeError, "is not an ArrayBuffer", options);
  }
  if (isArrayBufferDetached(value)) {
    throw makeException(TypeError, "is a detached ArrayBuffer", options);
  }

  return value;
};

const dvByteLengthGetter =
    Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
exports.DataView = (value, options = {}) => {
  try {
    dvByteLengthGetter.call(value);
  } catch (e) {
    throw makeException(TypeError, "is not a DataView", options);
  }

  if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
    throw makeException(TypeError, "is backed by a SharedArrayBuffer, which is not allowed", options);
  }
  if (isArrayBufferDetached(value.buffer)) {
    throw makeException(TypeError, "is backed by a detached ArrayBuffer", options);
  }

  return value;
};

// Returns the unforgeable `TypedArray` constructor name or `undefined`,
// if the `this` value isn't a valid `TypedArray` object.
//
// https://tc39.es/ecma262/#sec-get-%typedarray%.prototype-@@tostringtag
const typedArrayNameGetter = Object.getOwnPropertyDescriptor(
  Object.getPrototypeOf(Uint8Array).prototype,
  Symbol.toStringTag
).get;
[
  Int8Array,
  Int16Array,
  Int32Array,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Uint8ClampedArray,
  Float32Array,
  Float64Array
].forEach(func => {
  const { name } = func;
  const article = /^[AEIOU]/u.test(name) ? "an" : "a";
  exports[name] = (value, options = {}) => {
    if (!ArrayBuffer.isView(value) || typedArrayNameGetter.call(value) !== name) {
      throw makeException(TypeError, `is not ${article} ${name} object`, options);
    }
    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
      throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
    }
    if (isArrayBufferDetached(value.buffer)) {
      throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
    }

    return value;
  };
});

// Common definitions

exports.ArrayBufferView = (value, options = {}) => {
  if (!ArrayBuffer.isView(value)) {
    throw makeException(TypeError, "is not a view on an ArrayBuffer or SharedArrayBuffer", options);
  }

  if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
    throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
  }

  if (isArrayBufferDetached(value.buffer)) {
    throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
  }
  return value;
};

exports.BufferSource = (value, options = {}) => {
  if (ArrayBuffer.isView(value)) {
    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
      throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
    }

    if (isArrayBufferDetached(value.buffer)) {
      throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
    }
    return value;
  }

  if (!options.allowShared && !isNonSharedArrayBuffer(value)) {
    throw makeException(TypeError, "is not an ArrayBuffer or a view on one", options);
  }
  if (options.allowShared && !isSharedArrayBuffer(value) && !isNonSharedArrayBuffer(value)) {
    throw makeException(TypeError, "is not an ArrayBuffer, SharedArrayBuffer, or a view on one", options);
  }
  if (isArrayBufferDetached(value)) {
    throw makeException(TypeError, "is a detached ArrayBuffer", options);
  }

  return value;
};

exports.DOMTimeStamp = exports["unsigned long long"];
