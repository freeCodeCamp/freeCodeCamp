long.js
=======

A Long class for representing a 64 bit two's-complement integer value derived from the [Closure Library](https://github.com/google/closure-library)
for stand-alone use and extended with unsigned support.

[![npm](https://img.shields.io/npm/v/long.svg)](https://www.npmjs.com/package/long) [![Build Status](https://travis-ci.org/dcodeIO/long.js.svg)](https://travis-ci.org/dcodeIO/long.js)

Background
----------

As of [ECMA-262 5th Edition](http://ecma262-5.com/ELS5_HTML.htm#Section_8.5), "all the positive and negative integers
whose magnitude is no greater than 2<sup>53</sup> are representable in the Number type", which is "representing the
doubleprecision 64-bit format IEEE 754 values as specified in the IEEE Standard for Binary Floating-Point Arithmetic".
The [maximum safe integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
in JavaScript is 2<sup>53</sup>-1.

Example: 2<sup>64</sup>-1 is 1844674407370955**1615** but in JavaScript it evaluates to 1844674407370955**2000**.

Furthermore, bitwise operators in JavaScript "deal only with integers in the range −2<sup>31</sup> through
2<sup>31</sup>−1, inclusive, or in the range 0 through 2<sup>32</sup>−1, inclusive. These operators accept any value of
the Number type but first convert each such value to one of 2<sup>32</sup> integer values."

In some use cases, however, it is required to be able to reliably work with and perform bitwise operations on the full
64 bits. This is where long.js comes into play.

Usage
-----

The class is compatible with CommonJS and AMD loaders and is exposed globally as `Long` if neither is available.

```javascript
var Long = require("long");

var longVal = new Long(0xFFFFFFFF, 0x7FFFFFFF);

console.log(longVal.toString());
...
```

API
---

### Constructor

* new **Long**(low: `number`, high: `number`, unsigned?: `boolean`)<br />
  Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers. See the from* functions below for more convenient ways of constructing Longs.

### Fields

* Long#**low**: `number`<br />
  The low 32 bits as a signed value.

* Long#**high**: `number`<br />
  The high 32 bits as a signed value.

* Long#**unsigned**: `boolean`<br />
  Whether unsigned or not.

### Constants

* Long.**ZERO**: `Long`<br />
  Signed zero.

* Long.**ONE**: `Long`<br />
  Signed one.

* Long.**NEG_ONE**: `Long`<br />
  Signed negative one.

* Long.**UZERO**: `Long`<br />
  Unsigned zero.

* Long.**UONE**: `Long`<br />
  Unsigned one.

* Long.**MAX_VALUE**: `Long`<br />
  Maximum signed value.

* Long.**MIN_VALUE**: `Long`<br />
  Minimum signed value.

* Long.**MAX_UNSIGNED_VALUE**: `Long`<br />
  Maximum unsigned value.

### Utility

* Long.**isLong**(obj: `*`): `boolean`<br />
  Tests if the specified object is a Long.

* Long.**fromBits**(lowBits: `number`, highBits: `number`, unsigned?: `boolean`): `Long`<br />
  Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is assumed to use 32 bits.

* Long.**fromBytes**(bytes: `number[]`, unsigned?: `boolean`, le?: `boolean`): `Long`<br />
  Creates a Long from its byte representation.

* Long.**fromBytesLE**(bytes: `number[]`, unsigned?: `boolean`): `Long`<br />
  Creates a Long from its little endian byte representation.

* Long.**fromBytesBE**(bytes: `number[]`, unsigned?: `boolean`): `Long`<br />
  Creates a Long from its big endian byte representation.

* Long.**fromInt**(value: `number`, unsigned?: `boolean`): `Long`<br />
  Returns a Long representing the given 32 bit integer value.

* Long.**fromNumber**(value: `number`, unsigned?: `boolean`): `Long`<br />
  Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.

* Long.**fromString**(str: `string`, unsigned?: `boolean`, radix?: `number`)<br />
  Long.**fromString**(str: `string`, radix: `number`)<br />
  Returns a Long representation of the given string, written using the specified radix.

* Long.**fromValue**(val: `*`, unsigned?: `boolean`): `Long`<br />
  Converts the specified value to a Long using the appropriate from* function for its type.

### Methods

* Long#**add**(addend: `Long | number | string`): `Long`<br />
  Returns the sum of this and the specified Long.

* Long#**and**(other: `Long | number | string`): `Long`<br />
  Returns the bitwise AND of this Long and the specified.

* Long#**compare**/**comp**(other: `Long | number | string`): `number`<br />
  Compares this Long's value with the specified's. Returns `0` if they are the same, `1` if the this is greater and `-1` if the given one is greater.

* Long#**divide**/**div**(divisor: `Long | number | string`): `Long`<br />
  Returns this Long divided by the specified.

* Long#**equals**/**eq**(other: `Long | number | string`): `boolean`<br />
  Tests if this Long's value equals the specified's.

* Long#**getHighBits**(): `number`<br />
  Gets the high 32 bits as a signed integer.

* Long#**getHighBitsUnsigned**(): `number`<br />
  Gets the high 32 bits as an unsigned integer.

* Long#**getLowBits**(): `number`<br />
  Gets the low 32 bits as a signed integer.

* Long#**getLowBitsUnsigned**(): `number`<br />
  Gets the low 32 bits as an unsigned integer.

* Long#**getNumBitsAbs**(): `number`<br />
  Gets the number of bits needed to represent the absolute value of this Long.

* Long#**greaterThan**/**gt**(other: `Long | number | string`): `boolean`<br />
  Tests if this Long's value is greater than the specified's.

* Long#**greaterThanOrEqual**/**gte**/**ge**(other: `Long | number | string`): `boolean`<br />
  Tests if this Long's value is greater than or equal the specified's.

* Long#**isEven**(): `boolean`<br />
  Tests if this Long's value is even.

* Long#**isNegative**(): `boolean`<br />
  Tests if this Long's value is negative.

* Long#**isOdd**(): `boolean`<br />
  Tests if this Long's value is odd.

* Long#**isPositive**(): `boolean`<br />
  Tests if this Long's value is positive.

* Long#**isZero**/**eqz**(): `boolean`<br />
  Tests if this Long's value equals zero.

* Long#**lessThan**/**lt**(other: `Long | number | string`): `boolean`<br />
  Tests if this Long's value is less than the specified's.

* Long#**lessThanOrEqual**/**lte**/**le**(other: `Long | number | string`): `boolean`<br />
  Tests if this Long's value is less than or equal the specified's.

* Long#**modulo**/**mod**/**rem**(divisor: `Long | number | string`): `Long`<br />
  Returns this Long modulo the specified.

* Long#**multiply**/**mul**(multiplier: `Long | number | string`): `Long`<br />
  Returns the product of this and the specified Long.

* Long#**negate**/**neg**(): `Long`<br />
  Negates this Long's value.

* Long#**not**(): `Long`<br />
  Returns the bitwise NOT of this Long.

* Long#**notEquals**/**neq**/**ne**(other: `Long | number | string`): `boolean`<br />
  Tests if this Long's value differs from the specified's.

* Long#**or**(other: `Long | number | string`): `Long`<br />
  Returns the bitwise OR of this Long and the specified.

* Long#**shiftLeft**/**shl**(numBits: `Long | number | string`): `Long`<br />
  Returns this Long with bits shifted to the left by the given amount.

* Long#**shiftRight**/**shr**(numBits: `Long | number | string`): `Long`<br />
  Returns this Long with bits arithmetically shifted to the right by the given amount.

* Long#**shiftRightUnsigned**/**shru**/**shr_u**(numBits: `Long | number | string`): `Long`<br />
  Returns this Long with bits logically shifted to the right by the given amount.

* Long#**rotateLeft**/**rotl**(numBits: `Long | number | string`): `Long`<br />
  Returns this Long with bits rotated to the left by the given amount.

* Long#**rotateRight**/**rotr**(numBits: `Long | number | string`): `Long`<br />
  Returns this Long with bits rotated to the right by the given amount.

* Long#**subtract**/**sub**(subtrahend: `Long | number | string`): `Long`<br />
  Returns the difference of this and the specified Long.

* Long#**toBytes**(le?: `boolean`): `number[]`<br />
  Converts this Long to its byte representation.

* Long#**toBytesLE**(): `number[]`<br />
  Converts this Long to its little endian byte representation.

* Long#**toBytesBE**(): `number[]`<br />
  Converts this Long to its big endian byte representation.

* Long#**toInt**(): `number`<br />
  Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.

* Long#**toNumber**(): `number`<br />
  Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).

* Long#**toSigned**(): `Long`<br />
  Converts this Long to signed.

* Long#**toString**(radix?: `number`): `string`<br />
  Converts the Long to a string written in the specified radix.

* Long#**toUnsigned**(): `Long`<br />
  Converts this Long to unsigned.

* Long#**xor**(other: `Long | number | string`): `Long`<br />
  Returns the bitwise XOR of this Long and the given one.

WebAssembly support
-------------------

[WebAssembly](http://webassembly.org) supports 64-bit integer arithmetic out of the box, hence a [tiny WebAssembly module](./src/wasm.wat) is used to compute operations like multiplication, division and remainder more efficiently (slow operations like division are around twice as fast), falling back to floating point based computations in JavaScript where WebAssembly is not yet supported, e.g., in older versions of node.

Building
--------

To build an UMD bundle to `dist/long.js`, run:

```
$> npm install
$> npm run build
```

Running the [tests](./tests):

```
$> npm test
```
