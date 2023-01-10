---
id: a7f4d8f2483413a6ce226cac
title: أنشئ محول للأرقام الرومانية
challengeType: 5
forumTopicId: 16044
dashedName: build-a-roman-numeral-converter
---

# --description--

Convert the given number into a roman numeral.

| Roman numerals | Arabic numerals |
| -------------- | --------------- |
| M              | 1000            |
| CM             | 900             |
| D              | 500             |
| CD             | 400             |
| C              | 100             |
| XC             | 90              |
| L              | 50              |
| XL             | 40              |
| X              | 10              |
| IX             | 9               |
| V              | 5               |
| IV             | 4               |
| I              | 1               |

All roman numerals answers should be provided in upper-case.

# --hints--

`convertToRoman(2)` should return the string `II`.

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` should return the string `III`.

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` should return the string `IV`.

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` should return the string `V`.

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` should return the string `IX`.

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` should return the string `XII`.

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` should return the string `XVI`.

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` should return the string `XXIX`.

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` should return the string `XLIV`.

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` should return the string `XLV`.

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` should return the string `LXVIII`

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` should return the string `LXXXIII`

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` should return the string `XCVII`

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` should return the string `XCIX`

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` should return the string `CD`

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` should return the string `D`

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` should return the string `DI`

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` should return the string `DCXLIX`

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` should return the string `DCCXCVIII`

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` should return the string `DCCCXCI`

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` should return the string `M`

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` should return the string `MIV`

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` should return the string `MVI`

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` should return the string `MXXIII`

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` should return the string `MMXIV`

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` should return the string `MMMCMXCIX`

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
