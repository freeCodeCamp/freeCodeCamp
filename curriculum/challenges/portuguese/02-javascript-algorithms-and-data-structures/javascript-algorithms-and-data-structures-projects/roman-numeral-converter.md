---
id: a7f4d8f2483413a6ce226cac
title: Conversor de numerais romanos
challengeType: 5
forumTopicId: 16044
dashedName: roman-numeral-converter
---

# --description--

Converta o número dado em um número romano.

| Números romanos | Números arábicos |
| --------------- | ---------------- |
| M               | 1000             |
| CM              | 900              |
| D               | 500              |
| CD              | 400              |
| C               | 100              |
| XC              | 90               |
| L               | 50               |
| XL              | 40               |
| X               | 10               |
| IX              | 9                |
| V               | 5                |
| IV              | 4                |
| I               | 1                |

Todos os números romanos devem ser em maiúsculas.

# --hints--

`convertToRoman(2)` deve retornar a string `II`.

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` deve retornar a string `III`.

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` deve retornar a string `IV`.

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` deve retornar a string `V`.

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` deve retornar a string `IX`.

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` deve retornar a string `XII`.

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` deve retornar a string `XVI`.

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` deve retornar a string `XXIX`.

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` deve retornar a string `XLIV`.

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` deve retornar a string `XLV`.

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` deve retornar a string `LXVIII`

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` deve retornar a string `LXXXIII`

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` deve retornar a string `XCVII`

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` deve retornar a string `XCIX`

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` deve retornar a string `CD`

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` deve retornar a string `D`

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` deve retornar a string `DI`

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` deve retornar a string `DCXLIX`

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` deve retornar a string `DCCXCVIII`

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` deve retornar a string `DCCCXCI`

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` deve retornar a string `M`

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` deve retornar a string `MIV`

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` deve retornar a string `MVI`

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` deve retornar a string `MXXIII`

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` deve retornar a string `MMXIV`

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` deve retornar a string `MMMCMXCIX`

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
