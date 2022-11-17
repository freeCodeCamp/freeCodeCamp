---
id: a7f4d8f2483413a6ce226cac
title: Build A Roman Numeral Converter
challengeType: 5
forumTopicId: 16044
dashedName: build-a-roman-numeral-converter
---

# --description--

Konvertiere die übergebene Zahl in eine römische Zahl.

| Römische Ziffern | Arabische Ziffern |
| ---------------- | ----------------- |
| M                | 1000              |
| CM               | 900               |
| D                | 500               |
| CD               | 400               |
| C                | 100               |
| XC               | 90                |
| L                | 50                |
| XL               | 40                |
| X                | 10                |
| IX               | 9                 |
| V                | 5                 |
| IV               | 4                 |
| I                | 1                 |

All roman numerals answers should be provided in upper-case.

# --hints--

`convertToRoman(2)` sollte den String `II` zurückgeben.

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` sollte den String `III` zurückgeben.

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` sollte den String `IV` zurückgeben.

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` sollte den String `V` zurückgeben.

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` sollte den String `IX` zurückgeben.

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` sollte den String `XII` zurückgeben.

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` sollte den String `XVI` zurückgeben.

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` sollte den String `XXIX` zurückgeben.

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` sollte den String `XLIV` zurückgeben.

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` sollte den String `XLV` zurückgeben.

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` sollte den String `LXVIII` zurückgeben

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` sollte den String `LXXXIII` zurückgeben

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` sollte den String `XCVII` zurückgeben

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` sollte den String `XCIX` zurückgeben

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` sollte den String `CD` zurückgeben

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` sollte den String `D` zurückgeben

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` sollte den String `DI` zurückgeben

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` sollte den String `DCXLIX` zurückgeben

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` sollte den String `DCCXCVIII` zurückgeben

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` sollte den String `DCCCXCI` zurückgeben

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` sollte den String `M` zurückgeben

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` sollte den String `MIV` zurückgeben

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` sollte den String `MVI` zurückgeben

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` sollte den String `MXXIII` zurückgeben

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` sollte den String `MMXIV` zurückgeben

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` sollte den String `MMMCMXCIX` zurückgeben

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
