---
id: a7f4d8f2483413a6ce226cac
title: 罗马数字转换器
challengeType: 5
forumTopicId: 16044
dashedName: roman-numeral-converter
---

# --description--

把传入的数字转为罗马数字。

| 罗马数字 | 阿拉伯数字 |
| ---- | ----- |
| M    | 1000  |
| CM   | 900   |
| D    | 500   |
| CD   | 400   |
| C    | 100   |
| XC   | 90    |
| L    | 50    |
| XL   | 40    |
| X    | 10    |
| IX   | 9     |
| V    | 5     |
| IV   | 4     |
| I    | 1     |

所有罗马数字答案都应该大写。

# --hints--

`convertToRoman(2)` 应该返回字符串 `II`。

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` 应该返回字符串 `III`。

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` 应该返回字符串 `IV`。

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` 应该返回字符串 `V`。

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` 应该返回字符串 `IX`。

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` 应该返回字符串 `XII`。

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` 应该返回字符串 `XVI`。

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` 应该返回字符串 `XXIX`。

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` 应该返回字符串 `XLIV`.

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` 应该返回字符串 `XLV`。

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` 应该返回字符串 `LXVIII`

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` 应该返回字符串 `LXXXIII`

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` 应该返回字符串 `XCVII`

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` 应该返回字符串 `XCIX`

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` 应该返回字符串 `CD`

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` 应该返回字符串 `D`

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` 应该返回字符串 `DI`

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` 应该返回字符串 `DCXLIX`

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` 应该返回字符串 `DCCXCVIII`

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` 应该返回字符串 `DCCCXCI`

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` 应该返回字符串 `M`

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` 应该返回字符串 `MIV`

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` 应该返回字符串 `MVI`

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` 应该返回字符串 `MXXIII`

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` 应该返回字符串 `MMXIV`

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` 应该返回字符串 `MMMCMXCIX`

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
