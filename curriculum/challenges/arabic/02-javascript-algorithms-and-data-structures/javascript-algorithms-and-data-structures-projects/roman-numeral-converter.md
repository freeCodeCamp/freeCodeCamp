---
id: a7f4d8f2483413a6ce226cac
title: محول للأرقام الرومانية
challengeType: 5
forumTopicId: 16044
dashedName: roman-numeral-converter
---

# --description--

تحويل الرقم المعطى إلى رقم روماني.

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

وينبغي أن تقدم جميع الإجابات أرقام الرومانية في الحالة العليا.

# --hints--

`convertToRoman(2)` يجب أن يعيد السلسلة `II`.

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` يجب أن يعيد السلسلة `III`.

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` يجب أن يعيد السلسلة `IV`.

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` يجب أن يعيد السلسلة `V`.

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` يجب أن يعيد السلسلة `IX`.

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` يجب أن يعيد السلسلة `XII`.

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` يجب أن يعيد السلسلة `XVI`.

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` يجب أن يعيد السلسلة `XXIX`.

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` يجب أن يعيد السلسلة `XLIV`.

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` يجب أن يعيد السلسلة `XLV`.

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` يجب أن يعيد السلسلة `LXVIII`

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` يجب أن يعيد السلسلة `LXXXIII`

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` يجب أن يعيد السلسلة `XCVII`

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` يجب أن يعيد السلسلة `XCIX`

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` يجب أن يعيد السلسلة `CD`

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` يجب أن يعيد السلسلة `D`

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` يجب أن يعيد السلسلة `DI`

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` يجب أن يعيد السلسلة `DCXLIX`

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` يجب أن يعيد السلسلة `DCCXCVIII`

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` يجب أن يعيد السلسلة `DCCCXCI`

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` يجب أن يعيد السلسلة `M`

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` يجب أن يعيد السلسلة `MIV`

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` يجب أن يعيد السلسلة `MVI`

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` يجب أن يعيد السلسلة `MXXIII`

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` يجب أن يعيد السلسلة `MMXIV`

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` يجب أن يعيد السلسلة `MMMCMXCIX`

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
