---
id: a7f4d8f2483413a6ce226cac
title: Створіть конвертер римських чисел
challengeType: 5
forumTopicId: 16044
dashedName: build-a-roman-numeral-converter
---

# --description--

Перетворіть подане число в римське число.

| Римські числа | Арабські числа |
| ------------- | -------------- |
| M             | 1000           |
| CM            | 900            |
| D             | 500            |
| CD            | 400            |
| С             | 100            |
| XC            | 90             |
| L             | 50             |
| XL            | 40             |
| X             | 10             |
| IX            | 9              |
| V             | 5              |
| IV            | 4              |
| I             | 1              |

Всі римські числа повинні бути написаними великими літерами.

# --hints--

`convertToRoman(2)` повинен повертати рядок `II`.

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` повинен повертати рядок `III`.

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` повинен повертати рядок `IV`.

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` повинен повертати рядок `V`.

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` повинен повертати рядок `IX`.

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` повинен повертати рядок `XII`.

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` повинен повертати рядок `XVI`.

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` повинен повертати рядок `XXIX`.

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` повинен повертати рядок `XLIV`.

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` повинен повертати рядок `XLV`.

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` повинен повертати рядок `LXVIII`

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` повинен повертати рядок `LXXXIII`

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` повинен повертати рядок `XCVII`

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` повинен повертати рядок `XCIX`

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` повинен повертати рядок `CD`

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` повинен повертати рядок `D`

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` повинен повертати рядок `DI`

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` повинен повертати рядок `DCXLIX`

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` повинен повертати рядок `DCCXCVIII`

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` повинен повертати рядок `DCCCXCI`

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` повинен повертати рядок `M`

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` повинен повертати рядок `MIV`

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` повинен повертати рядок `MVI`

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` повинен повертати рядок `MXXIII`

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` повинен повертати рядок `MMXIV`

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` повинен повертати рядок `MMMCMXCIX`

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
