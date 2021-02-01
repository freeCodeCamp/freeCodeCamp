---
id: a7f4d8f2483413a6ce226cac
title: Roman Numeral Converter
challengeType: 5
forumTopicId: 16044
dashedName: roman-numeral-converter
---

# --description--

Convert the given number into a roman numeral.

All [roman numerals](http://www.mathsisfun.com/roman-numerals.html) answers should be provided in upper-case.

# --hints--

`convertToRoman(2)` should return "II".

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` should return "III".

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` should return "IV".

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` should return "V".

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` should return "IX".

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` should return "XII".

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` should return "XVI".

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` should return "XXIX".

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` should return "XLIV".

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` should return "XLV"

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` should return "LXVIII"

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` should return "LXXXIII"

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` should return "XCVII"

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` should return "XCIX"

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` should return "CD"

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` should return "D"

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` should return "DI"

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` should return "DCXLIX"

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` should return "DCCXCVIII"

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` should return "DCCCXCI"

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` should return "M"

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` should return "MIV"

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` should return "MVI"

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` should return "MXXIII"

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` should return "MMXIV"

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` should return "MMMCMXCIX"

```js
assert.deepEqual(convertToRoman(3999), 'MMMCMXCIX');
```

# --seed--

## --seed-contents--

```js
function convertToRoman(num) {
 return num;
}

convertToRoman(36);
```

# --solutions--

```js
function convertToRoman(num) {
  var ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
  var res = [];
  ref.forEach(function(p) {
    while (num >= p[1]) {
      res.push(p[0]);
      num -= p[1];
    }
  });
  return res.join('');
}
```
