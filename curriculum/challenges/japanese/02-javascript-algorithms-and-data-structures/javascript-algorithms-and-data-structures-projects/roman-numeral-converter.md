---
id: a7f4d8f2483413a6ce226cac
title: ローマ数字への変換
challengeType: 5
forumTopicId: 16044
dashedName: roman-numeral-converter
---

# --description--

与えられた数をローマ数字に変換してください。

| ローマ数字 | アラビア数字 |
| ----- | ------ |
| M     | 1000   |
| CM    | 900    |
| D     | 500    |
| CD    | 400    |
| C     | 100    |
| XC    | 90     |
| L     | 50     |
| XL    | 40     |
| X     | 10     |
| IX    | 9      |
| V     | 5      |
| IV    | 4      |
| I     | 1      |

解答のローマ数字はすべて大文字で返す必要があります。

# --hints--

`convertToRoman(2)` は文字列 `II` を返す必要があります。

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` は文字列 `III` を返す必要があります。

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` は文字列 `IV` を返す必要があります。

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` は文字列 `V` を返す必要があります。

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` は文字列 `IX` を返す必要があります。

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` は文字列 `XII` を返す必要があります。

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` は文字列 `XVI` を返す必要があります。

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` は文字列 `XXIX` を返す必要があります。

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` は文字列 `XLIV` を返す必要があります。

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` は文字列 `XLV` を返す必要があります。

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` は文字列 `LXVIII` を返す必要があります。

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` は文字列 `LXXXIII` を返す必要があります。

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` は文字列 `XCVII` を返す必要があります。

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` は文字列 `XCIX` を返す必要があります。

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` は文字列 `CD` を返す必要があります。

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` は文字列 `D` を返す必要があります。

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` は文字列 `DI` を返す必要があります。

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` は文字列 `DCXLIX` を返す必要があります。

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` は文字列 `DCCXCVIII` を返す必要があります。

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` は文字列 `DCCCXCI` を返す必要があります。

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` は文字列 `M` を返す必要があります。

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` は文字列 `MIV` を返す必要があります。

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` は文字列 `MVI` を返す必要があります。

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` は文字列 `MXXIII` を返す必要があります。

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` は文字列 `MMXIV` を返す必要があります。

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` は文字列 `MMMCMXCIX` を返す必要があります。

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
